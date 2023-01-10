import ProductCard from '@/containers/HomePage/components/ProductCard'

import useProductOperation from '@/hooks/useProductOperation'

import { product } from '@/interfaces/product'
import { ProductRowProps } from '@/interfaces/component'

import ProductRowStyled from './styled'

const ProductRow = ({ prodcuctType = '' }: ProductRowProps) => {
  const { productData } = useProductOperation()
  return (
    <ProductRowStyled>
      <div className="type-title sub-section-title">{prodcuctType}</div>
      <div className="row-items flex">
        {productData[prodcuctType].map((product: product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </ProductRowStyled>
  )
}

export default ProductRow
