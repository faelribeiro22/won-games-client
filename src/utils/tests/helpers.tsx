import { render, RenderResult } from '@testing-library/react'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<>{children}</>)
