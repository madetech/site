import axios from 'axios'

const ENDPOINT = process.env.REACT_APP_WORDPRESS_ENDPOINT_URL

export async function fetchWordPressPost(id) {
  const postUrl = `${ENDPOINT}/posts/${id}`
  const { data } = await axios.get(postUrl)

  return {
    content: {
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      slug: data.slug,
      jetpack_featured_media_url: data.featured_image,
      date: data.date,
      author: {
        avatar_urls: {
          wordpress_96: data.author.avatar_URL,
        },
        description: data.author.description,
        name: data.author.name,
      },
      categories: Object.keys(data.categories).map(name => {
        return {
          name: data.categories[name].name,
          slug: data.categories[name].slug,
        }
      }),
    },
  }
}
