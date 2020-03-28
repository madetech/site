import axios from 'axios'

const BASE_URL = process.env.REACT_APP_WORDPRESS_BASE_URL
const OAUTH_URL = process.env.REACT_APP_WORDPRESS_OAUTH_URL
const ENDPOINT_URL = process.env.REACT_APP_WORDPRESS_ENDPOINT_URL
const CLIENT_ID = process.env.REACT_APP_WORDPRESS_CLIENT_ID

function postUrl(id) {
  return `${ENDPOINT_URL}/posts/${id}?_embed=1`
}

function oAuthUrl(id) {
  const { origin } = window.location
  return `${OAUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${origin}?p=${id}&response_type=token&blog=${BASE_URL}`
}

function setOAuthToken(newToken) {
  if (newToken) {
    localStorage.setItem('wordpressToken', newToken)
  }
}

function getOAuthToken(id) {
  const token = localStorage.getItem('wordpressToken')

  if (!token) {
    window.location = oAuthUrl(id)
  } else {
    return token
  }
}

export async function fetchWordPressPost(id, newToken) {
  setOAuthToken(newToken)
  const token = getOAuthToken(id)
  const { data } = await axios.get(postUrl(id), {
    headers: { Authorization: `Bearer ${token}` },
  })

  return {
    content: {
      title: data.title.rendered,
      content: data.content.rendered,
      excerpt: data.excerpt.rendered,
      slug: data.slug,
      jetpack_featured_media_url: data.jetpack_featured_media_url,
      date: data.date,
      author: {
        avatar_urls: {
          wordpress_96: data._embedded.author[0].avatar_urls[96],
        },
        description: data._embedded.author[0].description,
        name: data._embedded.author[0].name,
      },
      categories: data._embedded['wp:term'][0].map(({ name, slug }) => {
        return {
          name,
          slug,
        }
      }),
    },
  }
}
