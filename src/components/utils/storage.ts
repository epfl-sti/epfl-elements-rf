/**
 * Safe wrapper around localStorage to handle errors gracefully
 */
export const safeLocalStorage = {
    getItem: (key: string): string | null => {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.warn(`Failed to read from localStorage: ${error}`);
            return null;
        }
    },

    setItem: (key: string, value: string): void => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn(`Failed to write to localStorage: ${error}`);
        }
    }
};

/**
 * Robust slugification function that handles special characters and diacritics
 */
export const slugify = (text: string): string => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD') // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Remove duplicate hyphens
        .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end
};

/**
 * Manages fold state persistence in localStorage for menu items
 */
import { useState } from 'react';

const SIDE_MENU_FOLD_STATE_ITEM = "asidemenu-fold-state";

const generateKey = (heading: React.ReactNode, alias?: string): string => {
    const identifier = typeof heading === "string" ? slugify(heading) : alias;

    if (!identifier) {
        console.warn('MenuItem: Neither string heading nor alias provided. Using fallback key.');
        return `asidemenu-fallback-${Date.now()}-open`;
    }

    return `asidemenu-${identifier}-open`;
};

const getFoldState = (key: string): boolean => {
    try {
        const storedState = safeLocalStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
        if (storedState) {
            const foldState = JSON.parse(storedState);
            return foldState[key] === true;
        }
    } catch (error) {
        console.error('Failed to parse fold state from localStorage:', error);
    }
    return false; // Default to closed if no state is stored
};

const setFoldState = (key: string, isOpen: boolean): void => {
    try {
        const storedState = safeLocalStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
        const foldState = storedState ? JSON.parse(storedState) : {};
        foldState[key] = isOpen;
        safeLocalStorage.setItem(SIDE_MENU_FOLD_STATE_ITEM, JSON.stringify(foldState));
    } catch (error) {
        console.error('Failed to save fold state to localStorage:', error);
    }
};

/**
 * Custom hook to manage foldable menu state with localStorage persistence
 * 
 * We still need React state because:
 * - Changing localStorage alone doesn't trigger re-renders
 * - React needs to know when the component should update
 * - State provides the reactive behavior expected in React components
 * 
 * This hook abstracts away the localStorage logic from the component
 */
export const useFoldState = (heading: React.ReactNode, alias?: string, foldable: boolean = false) => {
    const key = generateKey(heading, alias);
    const initialState = foldable ? getFoldState(key) : true;

    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = () => {
        if (!foldable) return;

        const newState = !isOpen;
        setIsOpen(newState);
        setFoldState(key, newState);
    };

    return { isOpen, toggle };
};
