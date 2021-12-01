const {excuteQuery , client} = require("../config/dbConnection")


export default class userDataRepository {

    async select_All_FromUserTable( ) {
       
        const sql = 'select * from userdata'
        const data = await excuteQuery(sql, [])
                      
        return data;
    }

    async select_Some_FromUserTableby_Id(uid) {
       
        const sql = `SELECT * FROM userdata WHERE id=${uid}`
        const data = await excuteQuery(sql, [])
        console.log(data.rows[0])
        
        return data.rows[0];
    }

    async select_Some_FromUserTableby_phonenumber_ForLogin(phonenumber, pass) {
        
        const sql = `select * from userdata where phonenumber = '${phonenumber}'`
        const data = await excuteQuery(sql, [])
        
        console.log( data.rows[0].password )
        
        if (data !== null) {
                if (data.rows[0].password == pass)
                {
                     return data.rows[0];
                } else {
                // invalid password
                return 0
            }
        }
    }

    async select_Some_FromUserTableby_phonenumber_update(phonenumber,uid) {
        
        
        const sql = `select phonenumber from userdata where phonenumber = '${phonenumber}'`
        const data = await excuteQuery(sql, [])

        const sql2 = `select phonenumber from userdata where id = ${uid}`
        const data2 = await excuteQuery(sql2, [])

        console.log("check phone number", data.rows[0])
        console.log("check phone number2", data2.rows[0])

        if (data.rows.length === 0) {
            return 0
        } else {
            if (phonenumber == data2.rows[0].phonenumber) {
                return 0
            } else {
                return 1
            }
        }
                
    }

    async select_Some_FromUserTableby_phonenumber_create(phonenumber) {
        
        
        const sql = `select phonenumber from userdata where phonenumber = '${phonenumber}'`
        const data = await excuteQuery(sql, [])

        console.log("check phone number", data.rows[0])

        if (data.rows.length === 0) {
            return 0
        } else {    
            return 1 
        }
                
    }
    
    
    async insertToUserTable(userData) {
        const sql = `insert into userdata(  password , name , surname , nickname , grade , school , province , phonenumber , timestamp) values (  '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , '${userData.phoneNumber}' , current_timestamp )`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async updateToUserTable(userData) {
        console.log("update from repo" , userData.phoneNumber)
        const sql = `update userdata SET (  password , name , surname , nickname , grade , school , province , phonenumber , timestamp) = (  '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , '${userData.phoneNumber}' , current_timestamp ) where id = ${userData.id}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async deleteUser(uid) {
       
        const sql = `delete from userdata where id = ${uid}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }


  }