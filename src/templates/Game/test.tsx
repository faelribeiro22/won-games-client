import { render, screen } from '@testing-library/react'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/Highlight/mock'
import highlight from 'components/Highlight/mock'
import textContentMock from 'components/TextContent/mock'

import Game, { GameTemplateProps } from '.'
import { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: textContentMock.content,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock as GameCardProps,
  upcomingHighlight: highlight as GameTemplateProps,
  recommendedGames: gamesMock
}

describe('<Game />', () => {
  it('should render the heading', () => {
    const { container } = render(<Game {...pros} />)
    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
