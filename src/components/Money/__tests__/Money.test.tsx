import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Money from '..'
import { moneyRemaining } from '@/constants/moneyData'

describe('Money', () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('Snapshot', () => {
    const container = render(<Money listMoney={moneyRemaining} money="1" />)
    expect(container).toMatchSnapshot()
  })
})
