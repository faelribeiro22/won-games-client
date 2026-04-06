import clsx from 'clsx'
import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

export type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const wrapperClasses = clsx('[&_h2]:uppercase', className)

  return (
    <footer className={wrapperClasses}>
      <Logo color="black" />
      <div className="grid grid-cols-2 gap-[3.2rem] mt-medium md:grid-cols-4">
        <div className="[&_a]:block [&_a]:text-gray [&_a]:no-underline [&_a]:mb-xxsmall [&_a]:text-small [&_a:hover]:underline [&_span]:block [&_span]:text-gray [&_span]:mb-xxsmall [&_span]:text-small">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <a href="mailto:sac@wongame.com">sac@wongames.com</a>
        </div>

        <div className="[&_a]:block [&_a]:text-gray [&_a]:no-underline [&_a]:mb-xxsmall [&_a]:text-small [&_a:hover]:underline [&_span]:block [&_span]:text-gray [&_span]:mb-xxsmall [&_span]:text-small">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </div>

        <div className="[&_a]:block [&_a]:text-gray [&_a]:no-underline [&_a]:mb-xxsmall [&_a]:text-small [&_a:hover]:underline [&_span]:block [&_span]:text-gray [&_span]:mb-xxsmall [&_span]:text-small">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </div>

        <div
          aria-labelledby="footer-contact"
          className="[&_a]:block [&_a]:text-gray [&_a]:no-underline [&_a]:mb-xxsmall [&_a]:text-small [&_a:hover]:underline [&_span]:block [&_span]:text-gray [&_span]:mb-xxsmall [&_span]:text-small"
        >
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </div>
      </div>
      <div className="text-gray text-xsmall mt-large mb-medium text-center">
        Won Games 2020 © All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
