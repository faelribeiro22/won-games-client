import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/)).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/)).toHaveClass('bg-primary')
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/)).toHaveClass('bg-secondary')
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    const ribbon = screen.getByText(/Best Seller/)
    expect(ribbon.className).toContain('h-[3.6rem]')
    expect(ribbon).toHaveClass('text-small')
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    const ribbon = screen.getByText(/Best Seller/)
    expect(ribbon.className).toContain('h-[2.6rem]')
    expect(ribbon).toHaveClass('text-xsmall')
  })
})
