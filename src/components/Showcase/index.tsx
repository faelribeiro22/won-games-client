import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowCaseProps = {
  heading?: string
  games?: GameCardProps[]
  highlight?: HighlightProps
  gameCardSliderColor?: 'black' | 'white'
  headingColor?: 'black' | 'white'
  title?: string
}

const Showcase = ({
  games,
  highlight,
  gameCardSliderColor = 'black',
  title
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={gameCardSliderColor} />}
  </S.Wrapper>
)

export default Showcase
