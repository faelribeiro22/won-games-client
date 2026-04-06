import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    const containerElement = container.firstChild as HTMLElement
    expect(containerElement).toHaveClass('max-w-container')
    expect(containerElement).toHaveClass('mx-auto')
    expect(containerElement).toHaveClass('px-xsmall')

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="w-full max-w-container mx-auto px-xsmall"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
