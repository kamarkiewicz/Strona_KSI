
// Access image field from backend
function getImage (image) {
  if ((image || {}).path) {
    // path may be relative URL
    let isAbsolute = /^(?:[a-z]+:)?\/\//i.test(image.path)
    image.path = (isAbsolute ? '' : process.env.API_URL) + image.path
  }
  return image
}

export { getImage };
