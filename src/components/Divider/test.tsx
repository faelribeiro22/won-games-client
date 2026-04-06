import { renderWithTheme } from 'utils/tests/helpers'
import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)
    const divider = container.firstChild as HTMLElement

    expect(divider).toHaveClass('my-xxlarge')
    expect(divider).toHaveClass('mx-auto')
    expect(divider.className).toContain('h-[0.1rem]')
    expect(divider.className).toContain('bg-[rgba(181,181,181,0.3)]')
    expect(divider).toHaveClass('border-0')
    expect(divider).toHaveClass('md:my-[14rem]')
  })
})
