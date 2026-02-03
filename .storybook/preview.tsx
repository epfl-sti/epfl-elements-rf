import type { Preview } from "@storybook/react-vite";

import React, { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";

import '../src/styles/overrides.css';
// Import the real EPFL icon sprite as raw text
import epflIconsRaw from '@epfl-sti/epfl-elements-styles/dist/icons/icons.svg?raw';

/** Load the real EPFL icon sprite from @epfl-sti/epfl-elements-styles */
const IconSprite = () => {
  useEffect(() => {
    // Parse the SVG and inject it into the document
    const parser = new DOMParser();
    const doc = parser.parseFromString(epflIconsRaw, 'image/svg+xml');
    const svg = doc.documentElement;
    
    // Hide the sprite and add it to the body
    svg.style.display = 'none';
    svg.style.position = 'absolute';
    svg.style.width = '0';
    svg.style.height = '0';
    
    // Check if sprite already exists
    if (!document.getElementById('epfl-icons-sprite')) {
      svg.id = 'epfl-icons-sprite';
      document.body.insertBefore(svg, document.body.firstChild);
    }
  }, []);

  return null;
};

export const decorators = [
  (Story: any) => (
    <MemoryRouter initialEntries={['/']}>
      <IconSprite />
      <Story />
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
