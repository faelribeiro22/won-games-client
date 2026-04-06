import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'

import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <div
      className="absolute top-0 right-0 left-0 h-[30.5rem] bg-cover bg-top opacity-40 md:h-[70rem] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_85%)]"
      style={{ backgroundImage: `url(${cover})` }}
      role="image"
      aria-label="cover"
    />
    <main className="mt-[20rem] md:mt-[45rem]">
      <Container className="mb-xlarge md:mb-[9.6rem]">
        <GameInfo {...gameInfo} />
      </Container>
      <Container className="mb-xlarge md:mb-[9.6rem] hidden md:block">
        {gallery ? <Gallery items={gallery} /> : null}
      </Container>

      <Container className="mb-xlarge md:mb-[9.6rem] [&_.description__copyrights]:text-gray [&_.description__copyrights]:text-xsmall [&_.description__copyrights]:mt-medium">
        <TextContent title="Description" content={description} />
      </Container>

      <Container className="mb-xlarge md:mb-[9.6rem]">
        <GameDetails {...details} />
        <Divider />
      </Container>

      <Showcase
        heading="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase heading="You may like this games" games={recommendedGames} />
    </main>
  </Base>
)

export default Game
