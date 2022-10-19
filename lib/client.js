import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:"jyugdm1y",
    dataset: 'production',
    apiVersion: "2022-10-13",
    useCdn: true,
    token: "skXk3urrQEZA2mjhR2kxrbs54gV37Dkw5XwPi5L4jOzT0CFJ8eJOBDGZmPzjTkwi2bjJtPmMfRiBekyOA54oUNM3tTc2rdagUN6EOQF4hBcF9TlrI9JziwnGQB2NXRSRLpijHKYFjvN3nZnWXuuW5WxlGgYJCZczQ5SKlOI6to3rPHhbxF9w",

})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)