import React, {useContext, useEffect} from "react";
import Context from "../Context";

import {
    useParams
} from "react-router-dom";

const RouteParams = () => {


    const routeParams = useParams()
    console.log({routeParams})

    const ContextData = useContext(Context)

    useEffect(()=>{
        ContextData.methods.setRouterParams(routeParams)
    },[routeParams])

    return(
        <></>
    )

}

export default RouteParams;