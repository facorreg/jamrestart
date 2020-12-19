import { initializeApollo } from 'apollo';
import { getProducts, getAccessories, getClothes } from 'queries';

const fetchProductsData = async (rawVariables = {}) => {
  const productQueries = { getProducts, getAccessories, getClothes };
  const defaultVariables = {
    limit: 10,
  }

  const variables = { ...defaultVariables, ...rawVariables }
  const type = rawVariables?.where?.type;
  console.log(type)

  let queryName;
  if (!type) queryName = 'getProducts';
  else { queryName = type === 'clothes' ? 'getClothes' : 'getAccessories' };

  console.log(productQueries[queryName])

  const apolloClient = initializeApollo();

  try {
    await apolloClient.query({
      query: productQueries[queryName],
      variables,
    });

    return Promise.resolve({
      initialApolloState: apolloClient.cache.extract(),
      query: productQueries[queryName],
      type: type || 'all',
      variables: {
        products: variables,
      },
    });

  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error, 'Failed to get Products the from graphql endpoint');
  }
};

export default fetchProductsData;
