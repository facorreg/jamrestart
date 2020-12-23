import { useState } from 'react';
import useEventListener from './useEventListener';

const isBottomPage = () => {
  const scrollOffset = Math.trunc(window.innerHeight + document.documentElement.scrollTop);
  /*
    -10 because there were cases where scroll offset would be equal to
      documentElement.offsetHeight - 1, hence making it impossible to
      scroll down.
  */
  return scrollOffset >= (document.documentElement.offsetHeight - 10);
};

const setLoadMoreProducts = ({
  start,
  limit,
  isLoadingMore,
  fetchMore,
  setIsLoadingMore,
}) => () => {
  if (!isBottomPage() || isLoadingMore) return;

  setIsLoadingMore(true);
  fetchMore({
    variables: {
      start,
      limit,
    },
  }).finally(() => setIsLoadingMore(false));
};

const useScrollHandler = (options) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const scrollHandler = setLoadMoreProducts({ ...options, isLoadingMore, setIsLoadingMore });

  useEventListener('scroll', scrollHandler);

  return isLoadingMore;
};

export default useScrollHandler;
