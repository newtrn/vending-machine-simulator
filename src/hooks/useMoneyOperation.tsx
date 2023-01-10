import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setMoneyRemaining, setInsertedMoney, setTotalInsertMoney } from '@/store/slices/money'

import { allMoneyType, initialInsertedMoney } from '@/constants/moneyData'
import { RootState } from '@/interfaces/redux'

const useMoneyOperation = () => {
  const dispatch = useDispatch()

  const remainingMoneyData = useSelector((state: RootState) => state.money.remainingMoney)
  const cartTotalData = useSelector((state: RootState) => state.cart.total)
  const insertedMoneyData = useSelector((state: RootState) => state.money.insertedMoney)
  const insertedMoneyTotalData = useSelector((state: RootState) => state.money.totalInsertMoney)

  const [notEnoughMoney, setNotEnoughMoney] = useState<boolean>(false)

  useEffect(() => {
    setNotEnoughMoney(false)
  }, [])

  useEffect(() => {
    const newTotalInsertedMoney = Object.keys(insertedMoneyData).reduce(
      (acc: number, type: string) => acc + insertedMoneyData[type] * parseInt(type),
      0
    )
    dispatch(setTotalInsertMoney(newTotalInsertedMoney))
  }, [insertedMoneyData])

  const resetInsertMoney = () => {
    dispatch(setInsertedMoney(initialInsertedMoney))
  }

  const getChangedMoney = () => {
    let changeMoney = insertedMoneyTotalData - cartTotalData
    const listOfChangeType: { [key: string]: number } = {}
    allMoneyType.map((type: string) => {
      const numberOfChangeType = Math.floor(changeMoney / parseInt(type))
      if (numberOfChangeType < remainingMoneyData[type] && numberOfChangeType > 0) {
        changeMoney = changeMoney % parseInt(type)
        listOfChangeType[type] = numberOfChangeType
      } else if (type === '1' && numberOfChangeType > remainingMoneyData[type]) {
        // if we have not enough banknote or coin loop will run to last round which is type = 1 and if numberOfChangeType still
        // more than system remaining 1 bath coin so, system have not enough money to change.
        setNotEnoughMoney(true)
      } else if (numberOfChangeType > 0) {
        // in case that system have coin but not enough for those type
        // need to calculate by deduct the remaining coin to continue calulation till 1 bath coin.
        listOfChangeType[type] = remainingMoneyData[type]
        changeMoney -= remainingMoneyData[type] * parseInt(type)
      }
    })
    return listOfChangeType
  }

  const reduceMoneyInSystem = () => {
    const changeMoney = getChangedMoney()
    const newRemainingMoneyInSystem = { ...remainingMoneyData }
    Object.keys(changeMoney).map((type: string) => {
      newRemainingMoneyInSystem[type] -= changeMoney[type]
      return
    })
    dispatch(setMoneyRemaining(newRemainingMoneyInSystem))
  }

  const handleInsertedMoney = (moneyType: string) => {
    const newInsertedMoney = { ...insertedMoneyData }
    newInsertedMoney[moneyType] += 1
    dispatch(setInsertedMoney(newInsertedMoney))
  }

  return {
    insertedMoneyData,
    handleInsertedMoney,
    insertedMoneyTotalData,
    getChangedMoney,
    reduceMoneyInSystem,
    resetInsertMoney,
    notEnoughMoney,
    setNotEnoughMoney,
  }
}

export default useMoneyOperation
