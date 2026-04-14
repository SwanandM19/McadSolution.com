import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.mcadsolution.com";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/cad-courses`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/domain-courses`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/biw-fixture-design`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/interior-plastic`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/robotics`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/industry4`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/placements`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/tie-ups`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
    ];
}