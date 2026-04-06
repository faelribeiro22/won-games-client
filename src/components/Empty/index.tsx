import Link from 'next/link'
import clsx from 'clsx'
import Button from 'components/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
  className?: string
}

const Empty = ({ title, description, hasLink, className }: EmptyProps) => {
  const wrapperClasses = clsx(
    'flex flex-col items-center text-center',
    className
  )

  return (
    <main className={wrapperClasses}>
      <img
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
        className="max-w-full"
      />
      <h2 className="text-primary text-xxlarge">{title}</h2>
      <p className="text-white text-large font-light mb-medium">
        {description}
      </p>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </main>
  )
}

export default Empty
