import DB from "./DB";

const pg = require('pg')
const pool  = new pg.Pool (DB)

pool.connect(err => {
  if (err) {
    console.log("error connecting to db", err.stack)
    process.exit(1)
  }
  console.log("Conneted to db...")
})

const excuteQuery = (query, arrayParams) => {

  return new Promise((resolve, reject) => {
      
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
           console.log("error excuting the query")
           reject(err)
        }
          resolve(data)
          } )
        }catch(err) {
          reject(err)
        }

  })
    
};

module.exports = { excuteQuery}
