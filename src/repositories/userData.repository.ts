const {excuteQuery} = require("../config/dbConnection")


export default class userDataRepository {

    async select_All_FromUserTable(email , password ) {
       
        const sql = 'select * from user'
        const data = await excuteQuery(sql, [])
                      
        return data;
    }

    async select_Some_FromUserTableby_Id(uid) {
       
        const sql = `SELECT * FROM user WHERE id LIKE ${uid}`
        const data = await excuteQuery(sql, [])
                      console.log(data)
        return data;
    }

    async select_Some_FromUserTableby_Email(email,pass) {
       
        const sql = `SELECT * FROM user WHERE email LIKE "${email}"`
        const data = await excuteQuery(sql, [])
        console.log(data[0], pass)
        
        if (data !== null) {
                if (data[0].password == pass)
                {
                    //correct password
                return data[0].id;
                } else {
                    // invalid password
                return 1
            }
        }
        
    }

    async insertToUserTable(userData) {
       
        const sql = `INSERT INTO user (  email   ,  password   ,  name   ,  surname   ,  nickname   ,  grade   ,  school   ,  province   ,phoneNumber) VALUES ("${userData.email}","${userData.password}" ,"${userData.name}" ,"${userData.surname}" ,"${userData.nickname }","${userData.grade }","${userData.school}" ,"${userData.province}" ,${userData.phoneNumber})`
        const data = await excuteQuery(sql, [])
        return data;
    }

    async updateToUserTable(userData) {
       
        const sql = `UPDATE  user  SET   email = "${userData.email}" , password = "${userData.password}" , name = "${userData.name}"  , surname = "${userData.surname}" , nickname = "${userData.nickname}" , grade = "${userData.grade}" , school = "${userData.school}" , province = "${userData.province}" , phoneNumber =  ${userData.phoneNumber} WHERE id LIKE ${userData.id}`
        const data = await excuteQuery(sql, [])
        return data;
    }

    
    


   


  }