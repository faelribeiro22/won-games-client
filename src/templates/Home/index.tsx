import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { HighlightProps } from 'components/Highlight'

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
      <section className="mx-[calc(-2.4rem/2)] mb-large md:mb-large md:relative md:z-base">
        <BannerSlider items={banners} />
      </section>
    </Container>

    <div className="mb-[11.2rem] lg:-mt-[13rem] md:mb-0 md:pt-[14rem] md:pb-[10rem] md:bg-light-bg md:[clip-path:polygon(0_0,100%_15%,100%_100%,0_85%)] [&_h2]:md:text-black">
      <Showcase heading="News" gameCardSliderColor="black" games={newGames} />
    </div>

    <Showcase
      heading="Most Popular"
      highlight={mostPopularHighlight}
      gameCardSliderColor="white"
      games={mostPopularGames}
    />

    <div className="[&>div:nth-child(2)]:mt-[9.6rem]">
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
    </div>

    <Showcase
      heading="Free Games"
      highlight={freeHighlight}
      games={freeGames}
      gameCardSliderColor="white"
    />
  </Base>
)

export default Home
