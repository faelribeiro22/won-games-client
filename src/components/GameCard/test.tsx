import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveClass('bg-secondary')
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument()
    expect(screen.getByText(/235,00/)).toHaveClass('line-through')
    expect(screen.getByText('R$ 15,00')).not.toHaveClass('line-through')
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is click', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render ribbon when ribbon prop is passed', () => {
    renderWithTheme(<GameCard {...props} ribbon="50%" />)
    const ribbon = screen.getByText(/50%/)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveClass('bg-primary')
    expect(ribbon).toHaveClass('h-[2.6rem]')
    expect(ribbon).toHaveClass('text-xsmall')
  })
})
