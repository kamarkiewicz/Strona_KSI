import _ from 'lodash'

const BACK_DEFAULT_LOCALE = 'en'
const BACK_LOCALES = ['en', 'pl', 'uk']

// Image field type from the backend
const IMAGE_DEFAULT_TITLE = 'Featured image'
export class Image {
  constructor (image) {
    if (_.isEmpty(image)) {
      // noop
    }
    else if (_.isString(image)) {
      this.src = Image.normalizePath(image)
      this.title = IMAGE_DEFAULT_TITLE
    }
    else {
      this.src = Image.normalizePath(image.path)
      this.title = (image.meta || {}).title
                || image.title
                || (image.meta || {}).asset
                || IMAGE_DEFAULT_TITLE
      if (image.width) this.width = image.width
      if (image.height) this.height = image.height
    }
  }

  static normalizePath (path) {
    // path may be relative URL; this block normalizes it
    const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(path)
    return (isAbsolute ? '' : process.env.API_URL) + path
  }
}

// My Errors
class EntryNotFound extends Error {
  constructor(message = "", ...args) {
    super(message, ...args);
    this.name = "EntryNotFound";
  }
}

// Allows to fetch all localized slugs for given collection
export async function fetchSlugsByTitle (axios, collectionName, { locale, slug }) {
  /// Get only those fields
  const fields = BACK_LOCALES.map(locale => {
    return locale !== BACK_DEFAULT_LOCALE ? `title_${locale}_slug` : 'title_slug'
  })
  const params = fields.reduce((dict, curr) => {
    dict[`fields[${curr}]`] = 1
    return dict
  }, {})
  /// Filtered by the given slug
  const field = locale !== BACK_DEFAULT_LOCALE ? `title_${locale}_slug` : 'title_slug'
  const filter = `filter[${field}]`
  params[filter] = slug

  const { entries, total } = await axios.$get('/api/collections/get/' + collectionName, {
    params
  })
  if (total > 1) console.error(`There is ${total} entries with slug ${slug} in ${locale}`)
  if (!entries.length) throw new EntryNotFound()
  const data = entries[0]
  const localSlugs = _.zipObject(BACK_LOCALES, fields.map(field => data[field]))
  return localSlugs
}

// Gets region data through API
export async function fetchRegion (axios, region, locale) {
  let data = await axios.$get(`/api/regions/data/${region}`, {
    params: {
      lang: locale
    }
  })
  return data
}

// Gets region data through API
export async function fetchSlides (axios, region, locale) {
  let data = await fetchRegion(axios, region, locale)
  const field = locale !== BACK_DEFAULT_LOCALE ? `slides_${locale}` : 'slides'
  let slides = data[field]
    .map(slide => slide.value)
    .map(slide => ({
      caption: slide.caption,
      description: slide.description,
      image: new Image(slide.image)
    }))
  return slides
}

// Gets collection data through API
export async function fetchCollection (axios, collectionName, locale) {
  let data = await axios.$get(`/api/collections/get/${collectionName}`, {
    params: {
      lang: locale
    }
  })
  return data
}

// Fetches single entry in collection
export async function fetchSingleByTitle (axios, collectionName, slug, locale) {
  const field = locale !== BACK_DEFAULT_LOCALE ? `title_${locale}_slug` : 'title_slug'
  const filter = `filter[${field}]`
  const { entries, total } = await axios.$get('/api/collections/get/' + collectionName, {
    params: {
      [filter]: slug,
      lang: locale
    }
  })
  if (total > 1) console.error(`There is ${total} entries with slug ${slug} in ${locale}`)
  if (!entries.length) throw new EntryNotFound()
  return entries[0]
}
