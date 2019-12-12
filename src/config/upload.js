/*const multer = require('multer')
const path = require('path')
const random = require('randomstring')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const rnd = random.generate({
        length: 30,
        charset: 'alphanumeric'
      })
      const ext = path.extname(file.originalname)
      cb(null, `${rnd}-${Date.now()}${ext}`)
    }
  })
} */

const multer = require('multer') // biblioteca para upload de arquivos
const path = require('path')

module.exports = {

    storage: multer.diskStorage({

        destination: path.resolve(__dirname, '..','../', 'uploads'),
        filename: (req, file, callback) => {

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)
            callback(null, `${name}-${Date.now()}${ext}`)

        }
    }),

}