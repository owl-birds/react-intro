import { useState, useEffect, useCallback } from "react";
export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(() => data);
    setIsLoading(() => false);
  }, [url]); // only run when the url changes
  // only create a new func once the url changes
  useEffect(() => {
    getProducts();
  }, [url, getProducts]); // only run on the initial rendering/only
  //   when we invoke the function
  return {
    isloading: isLoading,
    data: data,
  };
};
// Line 13:6:  React Hook useEffect has a missing
// dependency: 'getProducts'.Either include it or
//  remove the dependency array  react - hooks /
//   exhaustive - deps ::: it ll become infinite loop
// if u insert getProducts in the array depedencies
//
// solution : u have to make use of useCallback in the
// getProducts function
