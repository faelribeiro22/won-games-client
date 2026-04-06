import clsx from 'clsx'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

export type ShowCaseProps = {
  heading?: string
  games?: GameCardProps[]
  highlight?: HighlightProps
  gameCardSliderColor?: 'black' | 'white'
  headingColor?: 'black' | 'white'
  title?: string
  className?: string
}

const Showcase = ({
  games,
  highlight,
  gameCardSliderColor = 'black',
  title,
  className
}: ShowCaseProps) => {
  const wrapperClasses = clsx(
    'w-full max-w-container mx-auto px-xsmall mb-[8rem]',
    '[&>h2]:mb-medium',
    '[&_.highlight]:mb-medium md:[&_.highlight]:mx-[-1.6rem]',
    '[&_.game-card-slider]:mb-medium xl:[&_.game-card-slider]:mr-[-1.6rem]',
    className
  )

  return (
    <section className={wrapperClasses}>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} className="highlight" />}
      {!!games && (
        <GameCardSlider
          items={games}
          color={gameCardSliderColor}
          className="game-card-slider"
        />
      )}
    </section>
  )
}

export default Showcase
