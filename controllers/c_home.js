const path = require('path')
let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/home.html`))
}
module.exports = {
  getHome: getHome
}