import { useState, useContext, useCallback, } from "react";
import { useSnackbar } from "notistack";
import AuthContext from "../store/auth-context";
import { trimObject } from "../helpers/trimObject";

const useHttp = () =>
{
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const { enqueueSnackbar: popMessage } = useSnackbar();

    const sendRequest = useCallback(async (requestConfig, applyData) =>
    {
        setIsLoading(true);
        try
        {
            const response =
                await fetch(`https://email-automation-system.onrender.com/${requestConfig.url}`, {
                    method: requestConfig.method ? requestConfig.method : "GET",
                    headers: {
                        'Authorization': 'Bearer ' + authCtx.token,
                        "Content-Type": "application/json",
                    },
                    body: requestConfig.body ?
                        JSON.stringify(trimObject(requestConfig.body)) :
                        null
                });
            const data = await response.json();
            applyData(data);
            if (!response.ok)
            {
                throw new Error(data.message || data.Message)
            }
            let message;
            if (data.message)
            {
                message = data.message;
                message = message.toLowerCase();
                if (!requestConfig.url.includes("get")){
                    if (message.includes("success")) { popMessage(message, { variant: "success" }) }
                else { popMessage(message, { variant: "info" }) }
                }
            }
        } catch (error)
        {
            setIsLoading(false)
            popMessage(error.message || "Something went wrong", { variant: "error" })
        }
        setIsLoading(false)
    }, [authCtx, popMessage])
    return {
        isLoading,
        sendRequest,
    }

}

export default useHttp;