import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="logo" />)

    expect(container.querySelector('#paint0_linear_logo')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    const logoContainer = screen.getByLabelText(/Won Games/i).parentElement
    expect(logoContainer).toHaveClass('text-white')
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    const logoContainer = screen.getByLabelText(/Won Games/i).parentElement
    expect(logoContainer).toHaveClass('text-black')
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    const logoContainer = screen.getByLabelText(/Won Games/i).parentElement
    expect(logoContainer).toHaveClass('w-[20rem]')
    expect(logoContainer).toHaveClass('h-[5.9rem]')
  })

  it('should render a big logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    const logoContainer = screen.getByLabelText(/Won Games/i).parentElement
    expect(logoContainer?.className).toContain('md:w-[5.8rem]')
    expect(logoContainer?.className).toContain('[&_.text]:md:hidden')
  })
})
