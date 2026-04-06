import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('text-white')
    expect(heading).toHaveClass('text-xlarge')
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('text-black')
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('border-l-[0.7rem]')
    expect(heading).toHaveClass('border-l-primary')
    expect(heading).toHaveClass('pl-xxsmall')
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('relative')
    expect(heading).toHaveClass('mb-medium')
    expect(heading.className).toContain('after:content')
    expect(heading.className).toContain('after:border-b-primary')
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('text-medium')
    expect(heading.className).toContain('after:w-12')
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveClass('text-huge')
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveClass('border-l-primary')
    expect(heading.className).toContain('after:border-b-primary')
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveClass('border-l-secondary')
    expect(heading.className).toContain('after:border-b-secondary')
  })
})
