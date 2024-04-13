import getProduct from '@/actions/get-product';
import React from 'react'
export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const Category:React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    })
    
  return (
    <div>Category</div>
  )
}

export default Category