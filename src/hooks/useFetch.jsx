import { useEffect, useState } from "react";

export const useFetch = (myAPI) => {
  const [data, setData] = useState();
  const [config, setConfig] = useState();

  const httpConfig = (method, data) => {
    setConfig({
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(myAPI);
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, [myAPI]);

  return { data, httpConfig };
};
