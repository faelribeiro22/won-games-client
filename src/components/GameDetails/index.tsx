import clsx from 'clsx'
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

type Platform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  publisher: string
  releaseDate: string
  platforms: Platform[]
  rating: Rating
  genres: string[]
  className?: string
}

const GameDetails = ({
  developer,
  publisher,
  platforms,
  releaseDate,
  rating,
  genres,
  className
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <FaLinux title="Linux" size={18} />,
    mac: <FaApple title="Mac" size={18} />,
    windows: <FaWindows title="Windows" size={18} />
  }

  return (
    <div className={clsx('m-small', className)}>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <div className="grid gap-xsmall grid-cols-2 mt-small md:grid-cols-3 lg:grid-cols-6">
        <div>
          <h3 className="text-small font-light text-white">Developer</h3>
          <p className="text-medium font-bold text-white">{developer}</p>
        </div>

        <div>
          <h3 className="text-small font-light text-white">Release Date</h3>
          <p className="text-medium font-bold text-white">
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </p>
        </div>

        <div>
          <h3 className="text-small font-light text-white">Platforms</h3>
          <div className="text-white">
            {platforms.map((icon: Platform) => (
              <span key={icon} className="mr-xxsmall">
                {platformIcons[icon]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-small font-light text-white">Publisher</h3>
          <p className="text-medium font-bold text-white">{publisher}</p>
        </div>

        <div>
          <h3 className="text-small font-light text-white">Rating</h3>
          <p className="text-medium font-bold text-white">
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </p>
        </div>

        <div>
          <h3 className="text-small font-light text-white">Genres</h3>
          <p className="text-medium font-bold text-white">
            {genres.join(' / ')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GameDetails
