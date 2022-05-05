const DataBase =  require('./config.js')

const initDb = {
  async init() {
    const db = await DataBase()
    await db.exec(`CREATE TABLE produtos (
      id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
      id_cadastrou INTEGER,
      nome TEXT,
      img TEXT,
      preco INTEGER,
      descricao TEXT,
      quantidade INTEGER
    )`)

    await db.close()
  }
}

initDb.init()