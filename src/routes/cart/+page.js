import Medusa from "@medusajs/medusa-js";

export async function load() {
    let baseUrl = "http://localhost:9000";

    const medusa = new Medusa({ baseUrl: baseUrl, maxRetries: 3 });

    let usRegionId = "";

    let regions = await medusa.regions.list();
    regions.regions.forEach((ele) => {
        ele.countries.forEach((val) => {
            if (val.iso_2 == "us") {
                usRegionId = ele.id;
            }
        });
    });
    return { usRegionId: usRegionId, medusa: medusa };
}
