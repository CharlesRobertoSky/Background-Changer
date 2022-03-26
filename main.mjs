import process from 'process'
import fs from 'fs/promises'
import os from 'os'
import { getWallpaper, setWallpaper, screens } from 'wallpaper'
import images from 'images'

var user = os.userInfo().username
var directory = `C:/Users/${user}/Desktop/WallPaper/`

const getRandomImage = files =>
  files[Math.floor(Math.random() * (files.length - 1 - 0)) + 0]

;(async () => {
  var minutes = 1
  const args = process.argv.slice(2)

  if (args.length < 2) {
    throw new Error('Argumentos inválidos, passe --time minutes')
  }

  if (args[0] === '--time') {
    const time = parseInt(args[1])
    if (isNaN(time)) {
      throw new Error('Argumentos inválidos, passe --time minutes')
    }

    minutes = time
  }

  resultados = await fs.readdir(directory)
  var lastImages = []
  setInterval(async () => {
    var randomImage = getRandomImage(resultados)
    var randomImage2 = getRandomImage(resultados)

    while (lastImages.includes(randomImage)) {
      if (lastImages.length + 1 === resultados.length) {
        console.log('Lista chegou ao fim, resetando')
        lastImages = []
      }

      randomImage = getRandomImage(resultados)
    }

    console.log('Imagem aleatória: ' + randomImage)

    lastImages.push(randomImage)

    await setWallpaper(`${directory}${randomImage}`, { screen })
  }, minutes * 60000)
})()
