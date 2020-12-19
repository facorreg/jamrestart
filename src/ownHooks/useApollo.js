import { useMemo, useEffect, useState } from 'react';
import { initializeApollo } from 'apollo';

const useApollo = (initialState) => {
  const client = useMemo(() => initializeApollo(initialState), [initialState]);
  return client;
};

// const useQuery = (args, initialState) => {
//   const [state, dispatch] = useState({
//     loading: true,
//     error: false,
//     errorMessage: null,
//     data: null,
//   });

//   const client = useApollo(initialState);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const data = await client.query(args, args.variables);
//         dispatch({ loading: false, error: false, errorMessage: null, data });
//         return Promise.resolve();
//       } catch (err) {
//         dispatch({ loading: false, error: true, errorMessage: err, data: null });
//         return Promise.reject(err);
//       }
//     }

//     fetch();
//   }, []);

//   return state;
// }

// export { useQuery };

export default useApollo;
