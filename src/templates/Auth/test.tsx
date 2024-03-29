import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, title, children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won in the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /auth title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    expect(
      screen.getByText(/Won Games 2020 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()
  })
})
