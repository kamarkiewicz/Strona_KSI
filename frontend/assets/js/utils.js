
const BACK_DEFAULT_LOCALE = 'en'

// Access image field from backend
export function getImage (image) {
  if ((image || {}).path) {
    // path may be relative URL
    let isAbsolute = /^(?:[a-z]+:)?\/\//i.test(image.path)
    image.path = (isAbsolute ? '' : process.env.API_URL) + image.path
  }
  return image
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

// Fetches single news by slug in given locale
export async function fetchSingleNews (axios, slug, locale) {
  const field = locale !== BACK_DEFAULT_LOCALE ? `title_${locale}_slug` : 'title_slug'
  const filter = `filter[${field}]`
  let data
  try {
    const { entries, total } = await axios.$get('/api/collections/get/news', {
      params: {
        [filter]: slug,
        lang: locale
      }
    })
    if (total > 1) console.log(total)
    if (!entries.length) throw new Error('There is no such article, sorry')
    data = entries[0]
  }
  catch (e) {
    console.error(e)
  }
  return data
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
    data.location = `https://maps.google.com/?q=${data.location.lat},${data.location.lng}`
  }
  catch (e) {
    console.error(e)
  }
  return data
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
