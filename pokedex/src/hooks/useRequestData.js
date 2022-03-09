import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);


    const getData = () => {
            axios.get(url)
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setLoading(false)
                })
    }


    useEffect(() => {
        getData();
    }, [url]);

    return [data, error, loading]
}

export default useRequestData  