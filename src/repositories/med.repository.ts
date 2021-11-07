const {excuteQuery} = require("../config/dbConnection")


export default class medDataRepository {

    async select_All_FromMedTable( email , password ) {
       
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
       
        const sql = `INSERT INTO meddata (  uid   , date ,  time   ,  medDuration   ,  medMethod   ,  medFeelling   ,  percentRelax   ,  percentFeelling   ) VALUES ("${  medData.uid}","${  medData.date}","${  medData.time}" ,"${  medData.medDuration}" ,"${  medData.medMethod}" ,"${  medData.medFeelling }","${  medData.percentRelax }","${  medData.percentFeelling}" )`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async updateToMedTable(  medData) {
       
        const sql = `UPDATE    med  SET   email = "${  medData.email}" , password = "${  medData.password}" , name = "${  medData.name}"  , surname = "${  medData.surname}" , nickname = "${  medData.nickname}" , grade = "${  medData.grade}" , school = "${  medData.school}" , province = "${  medData.province}" , phoneNumber =  ${  medData.phoneNumber} WHERE id LIKE ${  medData.id}`
        const data = await excuteQuery(sql, [])
        return data;
    }

    
    


   


  }