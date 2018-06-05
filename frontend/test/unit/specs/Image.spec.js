import _ from 'lodash'
import { Image } from '~/assets/js/utils'

describe.each([
  ///
  /// samples from News collection (fieldtype Image)
  ///

  [], // empty array

  {
    "path": "https://picsum.photos/505/295?image=1024"
  },

  {
    "path": "/storage/uploads/2018/04/26/5ae258ff2ac8d295.jpg",
    "title": "295.jpg",
    "mime": "image/jpeg",
    "description": "",
    "tags": [],
    "size": 17100,
    "image": true,
    "video": false,
    "audio": false,
    "archive": false,
    "document": false,
    "code": false,
    "created": 1524783359,
    "modified": 1524783359,
    "_by": "5ae2576cbbb96doc1618355576",
    "width": 505,
    "height": 295,
    "colors": [
        "1c1f1c",
        "cad6db",
        "6d6a66",
        "8b9496",
        "848c94"
    ],
    "_id": "5ae25a637a783doc1895663978"
  },

  ///
  /// samples from Galleries collection (fieldtype Gallery)
  ///

  {
    "meta": {
        "title": "",
        "asset": "5ae57e29dc5c7doc1474185002"
    },
    "path": "/storage/uploads/2018/04/29/5ae57e29cc7981035.jpg"
  },

])('Image object', (sample) => {
  let originalProcessEnv

  beforeEach(() => {
    originalProcessEnv = _.cloneDeep(process.env)
  })

  afterEach(() => {
    process.env = _.cloneDeep(originalProcessEnv)
  })

  it('constructs properly', () => {
    process.env.API_URL = 'https://www.example.com/api'
    expect(new Image(sample)).toMatchSnapshot()
  })

})

