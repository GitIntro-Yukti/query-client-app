import { useState, useEffect } from "react";

const useFetch = (link, refresh) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortController = new AbortController();

    //setTimeout takes two parameters. First a method and second time in millisecond.
    //Method is fired after a given time.
    setTimeout(() => {
      console.log("refreshing values...");
      fetch(link, {signal:abortController.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Server error ...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('Fetch aborted ...');
          }else{
            console.log(err.message);
            setError(err.message);
            setIsLoading(false);
          }
          
        });
      return () => {
        console.log("clean up ...");
      };
    }, 1000);

    return ()=>abortController.abort();
  }, [link, refresh]);

  return { data, isLoading, error };
};

export default useFetch;
