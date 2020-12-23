import { gql } from '@apollo/client';

const productInfosFragment = gql`
fragment ProductInfos on Product {
    id
    name
    price
    description
    ref
    promotions
    images
    type
  }
`;
// ${ alias }: products(sort: $sort, limit: $limit, start: $start, where: $where)

const getProductsQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int, $where: JSON) {
   products(sort: $sort, limit: $limit, start: $start, where: $where)
    {
      ...ProductInfos
    }
  }
  ${productInfosFragment} 
  `;

export default getProductsQuery;
