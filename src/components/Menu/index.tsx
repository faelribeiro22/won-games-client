import { useState } from 'react'
import clsx from 'clsx'
import { MdShoppingCart, MdMenu, MdSearch, MdClose } from 'react-icons/md'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'

export type MenuProps = {
  username?: string
  className?: string
}

const Menu = ({ username, className }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const wrapperClasses = clsx(
    'flex items-center py-small relative z-menu',
    className
  )

  const iconWrapperClasses = 'text-white cursor-pointer w-[2.4rem] h-[2.4rem]'

  const menuFullClasses = clsx(
    'flex flex-col justify-between bg-white fixed z-menu top-0 bottom-0 left-0 right-0 h-screen overflow-hidden transition-opacity duration-default',
    {
      'opacity-100 pointer-events-auto visible': isOpen,
      'opacity-0 pointer-events-none invisible': !isOpen
    }
  )

  const menuNavClasses = 'md:ml-small'

  const menuLinkClasses = clsx(
    'relative text-white text-medium mx-small mt-[0.3rem] no-underline text-center',
    'hover:after:content-[""] hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary hover:after:animate-[hoverAnimation_0.2s_forwards]'
  )

  const menuLinkFullClasses = (isOpen: boolean) =>
    clsx(
      'text-black font-bold text-xlarge mb-small transition-transform duration-default',
      {
        'translate-y-0': isOpen,
        'translate-y-[3rem]': !isOpen
      }
    )

  const registerBoxClasses = (isOpen: boolean) =>
    clsx(
      'flex flex-col items-center px-xlarge pb-xlarge transition-transform duration-default',
      {
        'translate-y-0': isOpen,
        'translate-y-[3rem]': !isOpen
      }
    )

  return (
    <menu className={wrapperClasses}>
      <MediaMatch lessThan="medium">
        <div className={iconWrapperClasses} onClick={() => setIsOpen(true)}>
          <MdMenu aria-label="Open Menu" />
        </div>
      </MediaMatch>

      <div className="md:static md:left-auto md:transform-none absolute left-1/2 -translate-x-1/2">
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile aria-label="Logo" />
          </a>
        </Link>
      </div>

      <MediaMatch greaterThan="medium">
        <div className={menuNavClasses}>
          <Link href="/" passHref>
            <a className={menuLinkClasses}>Home</a>
          </Link>
          <a href="#" className={menuLinkClasses}>
            Explore
          </a>
        </div>
      </MediaMatch>

      <div className="flex flex-grow justify-end items-center [&>div]:ml-xsmall">
        <div className={iconWrapperClasses}>
          <MdSearch aria-label="search" />
        </div>
        <div className={iconWrapperClasses}>
          <MdShoppingCart aria-label="open shopping cart" />
        </div>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </div>

      <nav className={menuFullClasses} aria-hidden={!isOpen}>
        <MdClose
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0 m-xxsmall cursor-pointer w-[2.4rem] h-[2.4rem]"
        />
        <div className="flex items-center justify-center flex-1 flex-col">
          <Link href="/" passHref>
            <a className={menuLinkFullClasses(isOpen)}>Home</a>
          </Link>
          <a href="#" className={menuLinkFullClasses(isOpen)}>
            Explore
          </a>
          {!!username && (
            <>
              <a href="#" className={menuLinkFullClasses(isOpen)}>
                My account
              </a>
              <a href="#" className={menuLinkFullClasses(isOpen)}>
                Wishlist
              </a>
            </>
          )}
        </div>
        {!username && (
          <div className={registerBoxClasses(isOpen)}>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span className="block my-xxsmall text-xsmall">or</span>
            <Link href="/sign-up" passHref>
              <a
                title="Sign Up"
                className="no-underline text-primary border-b-2 border-primary"
              >
                Sign Up
              </a>
            </Link>
          </div>
        )}
      </nav>
    </menu>
  )
}

export default Menu
