const os = require('os')

// var teste = os.cpus()// mostra informações da cpu
// console.log(teste)

var constants = os.constants
// console.log(constants)
var freemem = os.freemem()
// console.log(freemem)

var homedir = os.homedir()
// console.log(homedir) // localiza a pasta atual do usuario atual

var hostname = os.hostname()
//console.log(hostname) // retorna o nome do usuario do computador como str

var netInterface = os.networkInterfaces() //retorna um objeto contendo interfaces de rede que receberam um endereço de rede
// console.log(netInterface)

var platform = os.platform()
// console.log(platform)

var tmpdir = os.tmpdir()
// console.log(tmpdir)

var uptime = os.uptime() //retorna tempo de atividade do computador em segundos
// console.log(uptime)

// largura da imagem/2

// 1024x = 728y

// if (var (largura da imagem) < 1024  )

// var diretorio = mkdir
// console.log(diretorio)
var userinfo = os.userInfo().username
console.log(userinfo)
// fs.readFile(`${directory }arquive.txt`, 'utf8', function (err, data) {
//   console.log(data)
// })
