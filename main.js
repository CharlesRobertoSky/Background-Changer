const fs = require('fs/promises')
const os = require('os')
const path = require('path')
const { setFlagsFromString } = require('v8')
// const { getWallpaper, setWallpaper } = require('wallpaper')
import { getWallpaper, setWallpaper } from 'wallpaper'

var user = os.userInfo().username
var directory2 = `${os.homedir()}/Desktop/WallPaper/`
var directory = `C:/Users/${user}/Desktop/WallPaper/`

// fs.readFile(`${directory }arquive.txt`, 'utf8', function (err, data) {
//   console.log(data)
// })
// await setWallpaper()
var resultados = 'vasco da gama'

// console.log(resultados)

// var directoryFilesSync = fs.readdirSync(directory)

// resultados = directoryFilesSync

// console.log(directoryFilesSync)
;(async () => {
  var directoryFiles = await fs.readdir(directory)

  resultados = directoryFiles

  console.log(resultados)

  await setWallpaper(`${directory}${directoryFiles[0]}`)
})()

// fs.readdir(`${directory}`, function (err, files) {
//   resultados = files

//   console.log('2', resultados)
// })
// for (var n = 0; n < resultados; n++) {
//   console.log(resultados[n])
// }

// console.log('1', resultados)
