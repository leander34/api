const DataBase = require('../db/config')

module.exports = {
  async Data(req, res) {
    const db = await DataBase()
    const pesquisa = req.params.search

    const produtos = await db.all(
      `SELECT * FROM produtos WHERE (nome LIKE "%${pesquisa}%") OR (descricao LIKE "%${pesquisa}%")`
    )
    console.log(produtos)
    res.json(produtos)
  },

  
}