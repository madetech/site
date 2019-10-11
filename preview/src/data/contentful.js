import * as contentful from 'contentful'

function createClient() {
  return contentful.createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: process.env.REACT_APP_CONTENTFUL_HOST,
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function typename(entry) {
  return `Contentful${capitalizeFirstLetter(entry.sys.contentType.sys.id)}`
}

function transformEntry(entry) {
  const fields = {
    __typename: typename(entry),
    __updatedAt: entry.sys.updatedAt,
    ...entry.fields,
  }

  if (fields.content) {
    fields.content = fields.content.map(c => transformEntry(c))
  }

  if (fields.body) {
    fields.body = {
      json: fields.body,
    }
  }

  if (fields.background) {
    fields.background = {
      fixed: {
        src: fields.background.fields.file.url,
      },
    }
  }

  if (fields.image) {
    fields.image = {
      fixed: {
        src: fields.image.fields.file.url,
      },
    }
  }

  if (fields.images) {
    fields.images = fields.images.map(image => {
      return {
        fixed: {
          src: image.fields.file.url,
        },
      }
    })
  }

  if (fields.authorAvatar) {
    fields.authorAvatar = {
      fixed: {
        src: fields.authorAvatar.fields.file.url,
      },
    }
  }

  if (
    fields.extraLarge &&
    fields.extraLarge.fields &&
    fields.extraLarge.fields.file
  ) {
    fields.extraLarge = {
      fixed: {
        src: fields.extraLarge.fields.file.url,
      },
    }
  }

  if (fields.large && fields.large.fields && fields.large.fields.file) {
    fields.large = {
      fixed: {
        src: fields.large.fields.file.url,
      },
    }
  }

  if (fields.medium && fields.medium.fields && fields.medium.fields.file) {
    fields.medium = {
      fixed: {
        src: fields.medium.fields.file.url,
      },
    }
  }

  if (fields.small && fields.small.fields && fields.small.fields.file) {
    fields.small = {
      fixed: {
        src: fields.small.fields.file.url,
      },
    }
  }

  return fields
}

export async function fetchEntry(id) {
  const entry = await createClient().getEntry(id, { include: 10 })
  return transformEntry(entry)
}
