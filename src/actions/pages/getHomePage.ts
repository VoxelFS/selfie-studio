"use server";

import { getPayload } from "src/lib/payload";

export const getHomePage = async () => {
    const payload = await getPayload();
    return await payload.findGlobal({
        slug: "home-page",
    });
};
