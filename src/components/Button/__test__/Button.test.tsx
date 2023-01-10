import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Button from '..'

describe('Button', () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('Snapshot', () => {
    const container = render(<Button text="text" onClick={() => {}} className="test-class" />)
    expect(container).toMatchSnapshot()
  })

  it('Should display text correctly from props', () => {
    const { getByText } = render(<Button text="text" onClick={() => {}} className="test-class" />)
    expect(getByText('text')).not.toBeNull()
  })

  it('Should working fine with disabled props', () => {
    const { container } = render(<Button text="text" onClick={() => {}} className="test-class" disabled />)
    expect(container.firstChild).toHaveClass('disabled')
  })

  it('Should working fine with textIcon props', () => {
    const { container } = render(<Button text="text" onClick={() => {}} className="test-class" textIcon />)
    expect(container.firstChild).toHaveClass('text-icon')
  })

  it('Should working fine with outline props', () => {
    const { container } = render(<Button text="text" onClick={() => {}} className="test-class" outline />)
    expect(container.firstChild).toHaveClass('outline')
  })

  it('Should working fine with danger props', () => {
    const { container } = render(<Button text="text" onClick={() => {}} className="test-class" danger />)
    expect(container.firstChild).toHaveClass('danger')
  })
})
