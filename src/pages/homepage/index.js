import React from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { HomeStyle, ProductStyle } from './homepage.style';
import get from 'lodash/get';

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

const HomePage = (props) => {
  const { variables, query, type } = props;
  const { loading, error, data = {} } = useQuery(query, { variables: variables?.products });
  const field = `${type}Products`;

  if (loading) return <>loading</>;
  if (error) return <>Error</>;
  if (!data[field]?.length) return <>No product to display</>

  const { [field]: productList } = data;

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

const ClothesHP = (props) => <HomePage {...props} />;
const AccessoriesHP = (props) => <HomePage {...props} />;

export { ClothesHP, AccessoriesHP };
export default HomePage;
