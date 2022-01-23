const {excuteQuery} = require("../config/dbConnection")


export default class medDataRepository {

    async select_All_FromMedTable( ) {
       
        const sql = 'select * from userdata inner join meddata on uid = userdata.id'
        const data = await excuteQuery(sql, [])

        console.log(data.rows)
        return data;
    }

    async select_Some_FromMedTableby_Id(uid) {
       
        const sql = `SELECT * FROM userdata inner join meddata on uid = userdata.id WHERE uid = ${uid} `
        const data = await excuteQuery(sql, [])
                      console.log(data)              
        return data;
    }

    async select_Some_FromMedTableby_dateRang(dateStart , dateEnd , time ) {
       
        const sql = `SELECT * FROM userdata inner join meddata on uid = userdata.id WHERE time = '${time}' and date >= '${dateStart}' and date < '${dateEnd}' `
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

   
    async select_Some_FromMedTableby_dateToday() {
       
        const sql = `SELECT * FROM userdata inner join meddata on uid = userdata.id WHERE date = CURRENT_DATE`
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

    async select_Some_FromMedTableby_date(date) {
       
        const sql = `SELECT * FROM userdata inner join meddata on uid = userdata.id WHERE date ='${date}' `
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

   
    async insertToMedTable(medData) {
       
        const sql = `INSERT INTO meddata ( uid   , date ,  time   ,  medduration   ,  medmethod   ,  medfeelling   ,  percentrelax   ,  percentfeelling , timestamp , comment   ) VALUES (${ medData.uid},'${  medData.date}','${  medData.time}' ,${medData.medDuration} ,'${  medData.medMethod}' ,'${  medData.medFeelling }',${  medData.percentRelax },${  medData.percentfeelling},current_timestamp,'${  medData.comment}' )`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async insertComment(medData) {
       
        const sql = `UPDATE meddata SET comment = '${medData.comment}'  WHERE id = ${ medData.mid} `
        const data = await excuteQuery(sql, [])
        return data;
    }

    async updateToMedTable( medData) { 
       
        const sql = `UPDATE  meddata  SET    (  uid   , date ,  time   ,  medduration   ,  medmethod   ,  medfeelling   ,  percentrelax   ,  percentfeelling , timestamp , comment  ) = ( ${  medData.uid}  ,  '${  medData.date}' ,'${  medData.time}' , ${  medData.medDuration} , '${  medData.medMethod}' ,'${  medData.medFeelling}' , ${  medData.percentRelax },${  medData.percentfeelling},current_timestamp,'${  medData.comment}' ) WHERE id = ${ medData.id}`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async deleteMedData_By_Id(mid) {
       
        const sql = `delete from meddata where id = ${mid}`
        const data = await excuteQuery(sql, [])
        return data;
    }
    
}
  
       