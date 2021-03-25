import React, {useContext, useEffect} from "react";
import Context from "../Context";

import {
    useParams,
    useLocation
} from "react-router-dom";

const RouteParams = () => {


    const params = useParams()
    const location = useLocation()
    console.log({params})

    const ContextData = useContext(Context)

    console.log({location})

    useEffect(()=>{
        ContextData.methods.setRouterParams(params)
    },[location])

    return(
        <></>
    )

}

export default RouteParams;