import React from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { HomeStyle, ProductStyle } from './homepage.style';
import { useScrollHandler } from 'ownHooks';
import { getProducts } from 'queries';
import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const { ref, name, price, images: { medium } } = product;

  return (
    <ProductStyle>
      <div className="product-img" >
        <Image src={medium} alt="mode" height={400} width={300} />
      </div>
      <strong className="product-brand">{ref}</strong>
      <div className="product-name">{name}</div>
      <strong className="product-price">{price}€</strong>
      <div className="product-bag">
        <Image src="/bag.png" alt="bag" height={80} width={80} />
      </div>
    </ProductStyle>
  )
}

const HomePage = () => {
  const router = useRouter();
  const type = router.pathname.slice(1);

  const { loading, error, data = {}, fetchMore } = useQuery(
    getProducts,
    {
      variables: {
        limit: 10,
        where: type ? { type } : {}
      }
    },
  );

  const { products: productList = [] } = data;
  useScrollHandler({
    limit: 10,
    fetchMore,
  })

  if (loading) return <>loading</>;
  if (error) return <>Error</>;
  if (!productList.length) return <>No product to display</>

  return (
    <HomeStyle>
      <div className="categories">
        <div>All categories</div>
        <div>Casual</div>
        <div>Sportswear</div>
        <div>Women</div>
        <div>Men</div>
        <div>Children</div>
      </div>
      <div className="productList">
        {
          productList.map((product, i) => <Product product={product} key={product.id + i} />)
        }
      </div>
    </HomeStyle>
  );
}

export default HomePage;
