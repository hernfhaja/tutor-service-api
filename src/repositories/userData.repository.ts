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

    async select_Some_FromUserTableby_Email_ForLogin(email, pass) {
        
        const sql = `select * from userdata where email = '${email}'`
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

    async select_Some_FromUserTableby_Email(email) {
        
        const sql = `select * from userdata where email = '${email}'`
        const data = await excuteQuery(sql, [])

        console.log(data.rows)

        if (data.rows.length === 0 ) {
            return 0;
        } else {
            return 1
        }
        
    }
    
    
    


    async insertToUserTable(userData) {
        const sql = `insert into userdata( email , password , name , surname , nickname , grade , school , province , phoneNumber , timestamp) values ( '${userData.email}' , '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , ${userData.phoneNumber} , current_timestamp )`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async updateToUserTable(userData) {
       
        const sql = `update userdata SET ( email , password , name , surname , nickname , grade , school , province , phoneNumber , timestamp) = ( '${userData.email}' , '${userData.password}' , '${userData.name}' , '${userData.surname}' , '${userData.nickname }' , '${userData.grade }' , '${userData.school}' , '${userData.province}' , ${userData.phoneNumber} , current_timestamp ) where id = ${userData.id}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }

    async deleteUser(uid) {
       
        const sql = `delete from userdata where id = ${uid}`;
        const data = await excuteQuery(sql, [])
        
        return data;
    }


  }