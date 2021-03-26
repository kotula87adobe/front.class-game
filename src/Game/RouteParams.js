import React, {useContext, useEffect} from "react";
import Context from "../Context";

import {
    useParams,
    useLocation
} from "react-router-dom";

const RouteParams = props => {


    const params = useParams()
    const location = useLocation()
    console.log({params})

    const {data} = props
    const {methods} = props
    const {constants} = props

    console.log({location})

    useEffect(()=>{
        methods.setRouterParams(params)
    },[location])

    return(
        <></>
    )

}

export default RouteParams;