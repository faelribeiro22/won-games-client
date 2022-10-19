import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import Menu from 'components/Menu'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  freeGames,
  freeHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase heading="News" gameCardSliderColor="black" games={newGames} />
    </S.SectionNews>

    <Showcase
      heading="Most Popular"
      highlight={mostPopularHighlight}
      gameCardSliderColor="white"
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase
        heading="Upcoming"
        games={upcomingGames}
        gameCardSliderColor="white"
      />
      <Showcase
        highlight={upcomingHighlight}
        games={upcomingMoreGames}
        gameCardSliderColor="white"
      />
    </S.SectionUpcoming>

    <Showcase
      heading="Free Games"
      highlight={freeHighlight}
      games={freeGames}
      gameCardSliderColor="white"
    />
  </Base>
)

export default Home
