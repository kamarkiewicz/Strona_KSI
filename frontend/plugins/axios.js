export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    console.log('TODO: error handling - show a toast')
    console.error(error)
  })
}
