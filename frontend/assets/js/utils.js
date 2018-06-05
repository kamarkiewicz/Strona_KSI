import _ from 'lodash'

const BACK_DEFAULT_LOCALE = 'en'

// Image field type from the backend
export class Image {
  constructor (image) {
    if (_.isEmpty(image)) {
      this.path = undefined
      this.meta = undefined
    }
    else if (_.isString(image)) {
      this.path = Image.normalizePath(image)
      this.meta = {
        title: 'some image',
      }
    }
    else {
      this.path = Image.normalizePath(image.path)
      this.meta = image.meta
    }
  }

  static normalizePath (path) {
    // path may be relative URL; this block normalizes it
    const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(path)
    return (isAbsolute ? '' : process.env.API_URL) + path
  }
}

// Allows to fetch all slugs for given collection
export async function fetchSlugs (axios, collectionName, slugField, locales) {
  const fields = locales.map(locale => {
    return `fields[${slugField}_${locale}_slug]`
  })
  fields.push(`fields[${slugField}_slug]`)
  const params = fields.reduce((dict, curr) => {
    dict[curr] = 1
    return dict
  }, {})
  const { entries, total } = await axios.$get('/api/collections/get/' + collectionName, {
    params
  })
  return entries
}

// Gets region data through API
export async function fetchRegion (axios, region, locale) {
  let data
  try {
    data = await axios.$get(`/api/regions/data/${region}`, {
      params: {
        lang: locale
      }
    })
  }
  catch (e) {
    console.error(e)
  }
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
  let data
  try {
    data = await axios.$get(`/api/collections/get/${collectionName}`, {
      params: {
        lang: locale
      }
    })
  }
  catch (e) {
    console.error(e)
  }
  return data
}

// Fetches single entry in collection
export async function fetchSingleByTitle (axios, collectionName, slug, locale) {
  const field = locale !== BACK_DEFAULT_LOCALE ? `title_${locale}_slug` : 'title_slug'
  const filter = `filter[${field}]`
  let data
  try {
    const { entries, total } = await axios.$get('/api/collections/get/' + collectionName, {
      params: {
        [filter]: slug,
        lang: locale
      }
    })
    if (total > 1) console.error(`There is ${total} entries with slug ${slug} in ${locale}`)
    if (!entries.length) throw new Error('There is no such entry')
    data = entries[0]
  }
  catch (e) {
    console.error(e)
  }
  return data
}
