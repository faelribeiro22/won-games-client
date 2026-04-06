import { render, screen } from '@testing-library/react'
import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveClass('hidden')
    expect(mobileHeading.parentElement).toHaveClass('hidden')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveClass('md:block')
    expect(mobileHeading.parentElement).toHaveClass('block')
    expect(mobileHeading.parentElement).toHaveClass('md:hidden')
  })
})
