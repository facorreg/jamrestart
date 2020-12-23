import { initializeApollo } from 'apollo';
import { getProducts } from 'queries';

const fetchProductsData = async (args) => {
  const client = initializeApollo();
  const { type } = args || {}
  const variables = {
    limit: 10,
    where: type ? { type } : {},
  };

  try {
    await client.query({
      query: getProducts,
      variables,
    });

    return Promise.resolve({
      initialApolloState: client.extract(),
      variables,
    });

  } catch (error) {
    return Promise.reject(error, 'Failed to get Products the from graphql endpoint');
  }
};

export default fetchProductsData;
