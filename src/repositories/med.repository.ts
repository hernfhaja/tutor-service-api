const {excuteQuery} = require("../config/dbConnection")


export default class medDataRepository {

    async select_All_FromMedTable( ) {
       
        const sql = 'select * from meddata'
        const data = await excuteQuery(sql, [])
                      
        return data;
    }

    async select_Some_FromMedTableby_Id(uid) {
       
        const sql = `SELECT * FROM meddata WHERE uid LIKE ${uid}`
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

   
    async insertToMedTable(medData) {
       
        const sql = `INSERT INTO meddata (  uid   , date ,  time   ,  medDuration   ,  medMethod   ,  medFeelling   ,  percentRelax   ,  percentFeelling , timeStamp  ) VALUES (${ medData.uid},'${  medData.date}','${  medData.time}' ,'${  medData.medDuration}' ,'${  medData.medMethod}' ,'${  medData.medFeelling }',${  medData.percentRelax },${  medData.percentFeelling},current_timestamp )`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async updateToMedTable(  medData) {
       
        const sql = `UPDATE  meddata  SET    (  uid   , date ,  time   ,  medDuration   ,  medMethod   ,  medFeelling   ,  percentRelax   ,  percentFeelling , timeStamp  ) = ( ${  medData.uid}  ,  '${  medData.date}' ,'${  medData.time}' , '${  medData.medDuration}' , '${  medData.medMethod}' ,'${  medData.medFeelling}' , ${  medData.percentRelax },${  medData.percentFeelling},current_timestamp) WHERE id = ${ medData.id}`
        const data = await excuteQuery(sql, [])
        return data;
    }

    
    


   


  }