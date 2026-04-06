import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <div className="flex flex-col h-screen justify-between">
    <Container>
      <Menu />
    </Container>
    <div className="mt-xlarge flex-1">{children}</div>

    <section className="mt-large pb-xsmall pt-xxlarge bg-white [clip-path:polygon(0_5%,100%_0%,100%_100%,0_100%)] md:[clip-path:polygon(0_15%,100%_0%,100%_100%,0_100%)] md:pt-[11.2rem]">
      <Container>
        <Footer />
      </Container>
    </section>
  </div>
)

export default Base
