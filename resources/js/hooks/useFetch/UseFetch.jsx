import { useCallback, useRef, useState,useEffect } from "react";
import apiCatalog from "./apiCatalog";
import axios from 'axios';

const UseFetch = (
    method = "get",
    endPoint,
    immediate = true,
    params = undefined
) => {
    const [loading, setLoading] = useState(false);
    const [request,setRequest]= useState({
        method: method,
        params:params,
    });
    const responseData = useRef({
        data: null,
        error: null,
    });

    const controller = new AbortController();
    const baseUrl = import.meta.env.VITE_API_BACK;
    const url = apiCatalog[endPoint]?.url || "";

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            let tempUrl = url;
            const pathParams = request.params?.pathParams || "";
            const queryParams = request.params?.queryParams || "";
            const method = request.method;
            pathParams &&
                Object.keys(pathParams).forEach((key) => {
                    const placeholder = `:${key}`;
                    if (tempUrl.includes(placeholder)) {
                        tempUrl = tempUrl.replace(placeholder, pathParams[key]);
                    }
                });

            const fullUrl = `${baseUrl}${tempUrl}`;
            const response = await axios({
                method,
                url: fullUrl,
                signal: controller.signal,
                ...(queryParams && { params: queryParams }),
            });
            responseData.current = {
                data: response.data,
                error: null,
            };
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log("Request canceled", err.message);
            } else {
                responseData.current = {
                    data: null,
                    error: err,
                };
            }
        } finally {
            setLoading(false);
        }
    }, [request]);

    useEffect(() => {
        if (immediate) {
            const fetch = async () => {
                await fetchData();
            };
            fetch();
        }

        return () => controller.abort();
    }, [immediate]);

    const execute = async (method=undefined,params=undefined) => {
        setRequest((prevState) => {
            return {
                ...prevState,
                ...(method ? { method: method} : {}),
                ...(params?.pathParams ? { pathParams: params.pathParams } : {}),
                ...(params?.queryParams ? { queryParams: params.queryParams } : {})
            };
        });        
        await fetchData();
    };

    return {
        data: responseData.current.data,
        loading,
        error: responseData.current.error,
        execute,
    };
};
export default UseFetch;
