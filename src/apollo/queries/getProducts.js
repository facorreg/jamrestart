import { gql } from '@apollo/client';

const getProductsQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int) {
    allProducts: products(sort: $sort, limit: $limit, start: $start){
      id,
      name,
      price,
      description,
      ref,
      promotions,
      images,
      type,
    }
  }`;

const getAccessoriesQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int, $where: JSON) {
    accessoriesProducts: products(sort: $sort, limit: $limit, start: $start, where: $where){
      id,
      name,
      price,
      description,
      ref,
      promotions,
      images,
      type,
    }
  }`;

const getClothesQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int, $where: JSON) {
    clothesProducts: products(sort: $sort, limit: $limit, start: $start, where: $where){
      id,
      name,
      price,
      description,
      ref,
      promotions,
      images,
      type,
    }
  }`;

export { getProductsQuery, getAccessoriesQuery, getClothesQuery };
