import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { DEKO } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = priceData ? parseFloat(priceData.data[DEKO.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `DekoSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
