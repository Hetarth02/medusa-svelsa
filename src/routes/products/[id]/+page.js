import axios from "axios";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    let baseUrl = "http://localhost:9000";

    if (params.id) {
        let id = params.id;
        let response = await axios.get(`${baseUrl}/store/products/${id}`);
        return response.data.product;
    } else {
        throw error(404, "Not found");
    }
}
