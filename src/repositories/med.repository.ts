const {excuteQuery} = require("../config/dbConnection")


export default class medDataRepository {

    async select_All_FromMedTable( ) {
       
        const sql = 'select * from meddata inner join userdata on userdata.id = uid'
        const data = await excuteQuery(sql, [])

        
        return data;
    }

    async select_Some_FromMedTableby_Id(uid) {
       
        const sql = `SELECT * FROM meddata inner join userdata on userdata.id = uid WHERE uid = ${uid} `
        const data = await excuteQuery(sql, [])
                      console.log(data)              
        return data;
    }

    async select_Some_FromMedTableby_dateRang(dateStart , dateEnd , time ) {
       
        const sql = `SELECT * FROM meddata inner join userdata on userdata.id = uid WHERE time = '${time}' and date >= '${dateStart}' and date < '${dateEnd}' `
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

   
    async select_Some_FromMedTableby_dateToday() {
       
        const sql = `SELECT * FROM meddata inner join userdata on userdata.id = uid WHERE date = CURRENT_DATE`
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

    async select_Some_FromMedTableby_date(date) {
       
        const sql = `SELECT * FROM meddata inner join userdata on userdata.id = uid WHERE date ='${date}' `
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

   
    async insertToMedTable(medData) {
       
        const sql = `INSERT INTO meddata ( uid   , date ,  time   ,  medDuration   ,  medMethod   ,  medFeelling   ,  percentRelax   ,  percentFeelling , timeStamp  ) VALUES (${ medData.uid},'${  medData.date}','${  medData.time}' ,'${medData.medDuration}' ,'${  medData.medMethod}' ,'${  medData.medFeelling }',${  medData.percentRelax },${  medData.percentFeelling},current_timestamp )`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async updateToMedTable(  medData) {
       
        const sql = `UPDATE  meddata  SET    (  uid   , date ,  time   ,  medDuration   ,  medMethod   ,  medFeelling   ,  percentRelax   ,  percentFeelling , timeStamp  ) = ( ${  medData.uid}  ,  '${  medData.date}' ,'${  medData.time}' , '${  medData.medDuration}' , '${  medData.medMethod}' ,'${  medData.medFeelling}' , ${  medData.percentRelax },${  medData.percentFeelling},current_timestamp) WHERE id = ${ medData.id}`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async deleteMedData_By_Id(mid) {
       
        const sql = `delete from meddata where id = ${mid}`
        const data = await excuteQuery(sql, [])
        return data;
    }
    
  }