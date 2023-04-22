import { Category } from "@/models/Category";
import axios from "axios";
import { useEffect, useState } from "react";

type PropType = {
  url: string;
};

axios.defaults.baseURL = "https://opentdb.com/";

const useAxios = ({ url }: PropType) => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [url]);
  return { response, error, isLoading };
};

export default useAxios;
