import React from 'react'
import { render, cleanup, fireEvent, act } from '@testing-library/react'

import Modal from '..'

import { modalTestID, modalCloseBtnTestID } from '@/constants/testID'

describe('Modal', () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('Snapshot', () => {
    const container = render(
      <Modal setIsShow={() => {}} isShow={false}>
        <div>Test content</div>
      </Modal>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render modal when isShow props is true', () => {
    const { getByTestId } = render(
      <Modal setIsShow={() => {}} isShow={true}>
        <div>Test content</div>
      </Modal>
    )
    expect(getByTestId(modalTestID)).toBeInTheDocument()
  })

  it('Should work when click close modal', async () => {
    const { getByTestId } = render(
      <Modal setIsShow={() => {}} isShow={true}>
        <div>Test content</div>
      </Modal>
    )
    fireEvent.click(getByTestId(modalCloseBtnTestID))
  })
})
