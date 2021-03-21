import axios from 'axios';
import { api } from '../urlconfig';
const axiosinstance = axios.create({
    baseURL  : api


});
export default axiosinstance;