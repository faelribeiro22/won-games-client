import { Grid } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid />)
    const grid = container.firstChild as HTMLElement

    expect(grid).toHaveClass('grid')
    expect(grid).toHaveClass('grid-cols-main')
    expect(grid).toHaveClass('gap-medium')
    expect(grid).toHaveClass('my-medium')
  })
})
