import { renderWithTheme } from 'utils/tests/helpers'
import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    const formWrapper = container.firstChild as HTMLElement
    expect(formWrapper.className).toContain('[&>*]:my-xxsmall')
    expect(formWrapper.className).toContain('[&_button]:mx-auto')

    const formLink = formWrapper.firstChild as HTMLElement
    expect(formLink).toHaveClass('text-small')
    expect(formLink).toHaveClass('text-black')
    expect(formLink).toHaveClass('text-center')
    expect(formLink.className).toContain('[&_a]:text-secondary')
    expect(formLink.className).toContain('[&_a]:no-underline')
  })
})
