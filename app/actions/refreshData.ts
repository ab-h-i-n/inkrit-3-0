"use server";

import { revalidateTag } from "next/cache";

export const refreshData = async () => {
    revalidateTag("events");
    revalidateTag("sponsors");
}