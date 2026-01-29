import { useState, useRef, useEffect } from 'react'
import '@epfl-sti/epfl-elements-styles/dist/css/combined.css'
import './index.css'

type SearchProps = {
  action?: string
  placeholder?: string
  label?: string
  submitLabel?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

type SearchMobileProps = SearchProps & {
  toggleLabel?: string
  closeLabel?: string
  onToggle?: (open: boolean) => void
}

export function Search ({
  action = '#',
  placeholder = 'Search',
  label = 'Search the site',
  submitLabel = 'Submit',
  onSubmit,
}: SearchProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleClickOutside (event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  function handleToggleClick (e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setOpen((o) => !o)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='dropdown dropright search d-none d-xl-block' ref={ref}>
      <a
        className='dropdown-toggle'
        href='#'
        data-toggle='dropdown'
        onClick={handleToggleClick}
        aria-expanded={open}
        aria-haspopup='true'
      >
        <svg className='icon' aria-hidden='true'>
          <use xlinkHref='#icon-search'></use>
        </svg>
      </a>
      <form action={action} className={`dropdown-menu border-0 p-0 ${open ? 'show' : ''}`} onSubmit={(e) => { onSubmit?.(e); setOpen(false) }}>
        <div className='search-form input-group'>
          <label htmlFor='search' className='sr-only'>
            {label}
          </label>
          <input
            type='text'
            className='form-control'
            name='search'
            id='search'
            placeholder={placeholder}
          />
          <button type='submit' className='d-none d-xl-block btn btn-primary input-group-append'>
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}

export function SearchMobile ({
  action = '#',
  placeholder = 'Search',
  label = 'Search the site',
  toggleLabel = 'Show / hide search form',
  closeLabel = 'Hide search form',
  onSubmit,
  onToggle,
}: SearchMobileProps) {
  const [open, setOpen] = useState(false)

  function handleToggle (e: React.MouseEvent) {
    e.preventDefault()
    setOpen((o) => {
      onToggle?.(!o)
      return !o
    })
  }

  function handleClose (e: React.MouseEvent) {
    e.preventDefault()
    setOpen(false)
    onToggle?.(false)
  }

  return (
    <form action={action} className='d-xl-none' onSubmit={(e) => onSubmit?.(e)}>
      <a
        id='search-mobile-toggle'
        className='search-mobile-toggle searchform-controller'
        href='#'
        onClick={handleToggle}
        aria-expanded={open}
      >
        <svg className='icon' aria-hidden='true'>
          <use xlinkHref='#icon-search'></use>
        </svg>
        <span className='toggle-label sr-only'>{toggleLabel}</span>
      </a>
      <div
        className={`input-group search-mobile ${open ? 'search-mobile-open' : ''}`}
        role='search'
      >
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <svg className='icon' aria-hidden='true'>
              <use xlinkHref='#icon-search'></use>
            </svg>
          </span>
        </div>
        <label htmlFor='search-mobile' className='sr-only'>
          {label}
        </label>
        <input
          type='text'
          className='form-control'
          name='search'
          id='search-mobile'
          placeholder={placeholder}
        />
        <div className='input-group-append'>
          <a
            id='search-mobile-close'
            className='search-mobile-close searchform-controller'
            href='#'
            onClick={handleClose}
          >
            <svg className='icon' aria-hidden='true'>
              <use xlinkHref='#icon-close'></use>
            </svg>
            <span className='toggle-label sr-only'>{closeLabel}</span>
          </a>
        </div>
      </div>
    </form>
  )
}
