import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState();
  const [method, setMethod] = useState();
  const [callFetch, setCallFetch] = useState(false);

  const httpConfig = (method, data) => {
    setConfig({
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [api, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
        if (method === "POST") {
        let fetchOptions = [api, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      };
    }
    httpRequest();
  }, [config, method, api]);
  return { data, httpConfig };
};
