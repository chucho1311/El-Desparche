import axios from 'axios';

export const getUsers = async () => {

    const URL = `https://proyect-production.up.railway.app/api/v1/users/`
    const req = await axios.get(URL)
    // console.log(req);
    return req

}