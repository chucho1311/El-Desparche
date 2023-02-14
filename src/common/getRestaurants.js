
import axios from 'axios';

export const getBucaramangaRestaurants = async () => {

    const URL = `https://proyect-production.up.railway.app/api/v1/bucaramanga`
    const req = await axios.get(URL)
    // console.log(req);
    return req

}

export const getFloridaRestaurants = async () => {

    const URL = `https://proyect-production.up.railway.app/api/v1/florida`
    const req = await axios.get(URL)
    return req

}

export const getGironRestaurants = async () => {

    const URL = `https://proyect-production.up.railway.app/api/v1/giron`
    const req = await axios.get(URL)
    return req

}

// export default {
//     getBucaramangaRestaurants,
//     getFloridaRestaurants,
//     getGironRestaurants
// };