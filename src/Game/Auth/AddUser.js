import React, {useContext, useEffect} from "react";

import axios from "axios";
import Context from "../../Context";
import { Redirect } from "react-router-dom";

const AddUser = props => {

    const ContextData = useContext(Context)

    const getUserId = async () => {
        const {data} = await axios.post(`${ContextData.constants.API_URL}dashboard/user`)
        ContextData.methods.setUserId(data.id)
    }

    useEffect(getUserId,[])

    return (
        <>
            {ContextData.data?.userId ? <Redirect to={`${ContextData.data?.userId}`} /> : <p>----------</p>}
        </>
    )

}

export default AddUser;