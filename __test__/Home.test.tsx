import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page'

test('Get started', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
