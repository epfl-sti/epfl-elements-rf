import { useState, useRef, useEffect } from 'react'
import '@epfl-sti/epfl-elements-styles/dist/css/combined.css'
import './index.css'

// Inline SVG icons to ensure they work when library is consumed
const SearchIcon = () => (
  <svg className='icon' aria-hidden='true'>
    <use xlinkHref='#icon-search'>
      <svg id='icon-search' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
      </svg>
    </use>
  </svg>
)

const CloseIcon = () => (
  <svg className='icon' aria-hidden='true'>
    <use xlinkHref='#icon-close'>
      <svg id='icon-close' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      </svg>
    </use>
  </svg>
)

type SearchProps = {
  action?: string
  placeholder?: string
  label?: string
  submitLabel?: string
  onSubmit?: (query: string) => void
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

  function handleToggleClick (e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setOpen((o) => !o)
  }

  useEffect(() => {
    if (!open) return

    function handleClickOutside (event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

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
        <SearchIcon />
      </a>
      <form action={action} className={`dropdown-menu border-0 p-0 ${open ? 'show' : ''}`} onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const query = formData.get('search') as string; onSubmit?.(query); setOpen(false) }}>
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
    <form action={action} className='d-xl-none' onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget); const query = formData.get('search') as string; onSubmit?.(query) }}>
      <a
        id='search-mobile-toggle'
        className='search-mobile-toggle searchform-controller'
        href='#'
        onClick={handleToggle}
        aria-expanded={open}
      >
        <SearchIcon />
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
            <CloseIcon />
            <span className='toggle-label sr-only'>{closeLabel}</span>
          </a>
        </div>
      </div>
    </form>
  )
}
