import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/login", "/dashboard", "/api"],
            },
        ],
        sitemap: "https://www.mcadsolution.com/sitemap.xml",
    };
}