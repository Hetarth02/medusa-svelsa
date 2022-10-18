import axios from "axios";

export async function load() {
    let baseUrl = "http://localhost:9000";
    let response = await axios.get(`${baseUrl}/store/products`);
    return response.data;
}
