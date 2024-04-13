import getBillboards from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

const HomePage = async () => {
  const billboard = await getBillboards("5f626a39-f551-4fd1-b67d-5d79b39569f4");
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage