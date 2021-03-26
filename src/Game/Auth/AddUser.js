import React, {useEffect} from "react";

import axios from "axios";
import { Redirect } from "react-router-dom";

const AddUser = props => {

    const {data} = props
    const {methods} = props
    const {constants} = props

    const getUserId = async () => {
        const {data} = await axios.post(`${constants.API_URL}dashboard/user`)
        methods.setUserId(data.id)
    }

    useEffect(() => {
        (async ()=> await getUserId())()
    },[])

    return (
        <>
            {data?.userId ? <Redirect to={`${data?.userId}`} /> : <p>----------</p>}
        </>
    )

}

export default AddUser;