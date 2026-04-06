import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MdAddShoppingCart } from 'react-icons/md'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size', () => {
    renderWithTheme(<Button>Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveClass('h-16')
    expect(button).toHaveClass('text-small')
    expect(button).toHaveClass('px-medium')
    expect(button).toHaveClass('py-xxsmall')
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveClass('h-12')
    expect(button).toHaveClass('text-xsmall')
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveClass('h-20')
    expect(button).toHaveClass('text-medium')
    expect(button).toHaveClass('px-xlarge')
  })

  it('should render the full width', () => {
    renderWithTheme(
      <Button size="large" fullWidth>
        Buy now
      </Button>
    )
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      'w-full'
    )
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<MdAddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<MdAddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toHaveClass('bg-transparent')
    expect(button).toHaveClass('text-primary')
    expect(button.className).toContain('hover:text-primary/80')
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
