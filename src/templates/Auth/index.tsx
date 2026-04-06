import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ children, title }: AuthProps) => (
  <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
    {/* Banner Block */}
    <div
      className="hidden md:block relative bg-cover bg-center p-xxlarge pb-large"
      style={{ backgroundImage: 'url(/img/auth-bg.jpg)' }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-85"></div>

      <div className="relative z-base text-white grid grid-cols-1 justify-between h-full">
        <Link href="/">
          <a className="w-fit h-fit">
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <h3 className="text-xxlarge font-light mt-xxsmall">
            <strong className="text-primary">WON</strong> in the best and most
            complete gaming platform.
          </h3>
        </div>
        <p className="self-end text-xsmall text-center">
          Won Games 2020 © Todos os Direitos Reservados
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="bg-white grid items-center justify-center">
      <div className="w-[30rem] md:w-[36rem] [&>div:first-child]:mx-auto [&>div:first-child]:mb-xxlarge [&>h2]:mb-medium">
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="content" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </div>
    </div>
  </main>
)

export default Auth
