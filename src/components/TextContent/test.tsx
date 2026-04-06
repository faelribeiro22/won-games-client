import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextContent from '.'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)
    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })

  it('should render the without title and content', () => {
    renderWithTheme(<TextContent content={props.content} />)
    expect(
      screen.queryByRole('heading', { name: /Description/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })

  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveClass('text-white')
    expect(wrapper.className).toContain('md:text-black')
  })
})
