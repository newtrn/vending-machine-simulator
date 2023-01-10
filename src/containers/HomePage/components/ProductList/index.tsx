import ProductRow from '@/containers/HomePage/components/ProductRow'
import { productTypesArray } from '@/constants/productData'

import PorductListStyle from './styled'

const ProductList = () => {
  return (
    <PorductListStyle>
      <ProductRow prodcuctType="popular" key="popular" />
      {productTypesArray.map((type: string) => (
        <ProductRow prodcuctType={type} key={type} />
      ))}
    </PorductListStyle>
  )
}

export default ProductList
