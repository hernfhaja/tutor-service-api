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
                     return data.rows[0].id;
                } else {
                // invalid password
                return 0
            }
        }
    }

    async select_Some_FromUserTableby_phonenumber(phonenumber) {
        
        const sql = `select phonenumber from userdata where phonenumber = '${phonenumber}'`
        const data = await excuteQuery(sql, [])

        const getPhoneNumber = data.rows[0].phonenumber;
        console.log("check phone number", data.rows[0].phonenumber)
       

        if (data.rows.length === 0 || getPhoneNumber == phonenumber  ) {
            return 0;
        } else {
            return 1
        }
        
    }
    
    
    async insertToUserTable(userData) {
        const sql = `insert into userdata( email , password , name , surname , nickname , grade , school , province , phonenumber , timestamp) values ( '${userData.email}' , '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , '${userData.phoneNumber}' , current_timestamp )`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async updateToUserTable(userData) {
        console.log("update from repo" , userData.phoneNumber)
        const sql = `update userdata SET ( email , password , name , surname , nickname , grade , school , province , phonenumber , timestamp) = ( '${userData.email}' , '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , '${userData.phoneNumber}' , current_timestamp ) where id = ${userData.id}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async deleteUser(uid) {
       
        const sql = `delete from userdata where id = ${uid}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }


  }