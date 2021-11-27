
import { Service, Initializer, Destructor } from 'fastify-decorators';
import UserDataRepository from '../repositories/userData.repository';

const userDataRepo = new UserDataRepository

@Service()
export default class LoginService {
  @Initializer()
  async init(): Promise<void> {
  }

  async getAllData() {
    
    const getAllData = userDataRepo.select_All_FromUserTable()
      if (getAllData !== null) {
        return getAllData
      } else {
        return "get data error"
      }
        
    }
    
  
  async getUserData(uid) {
    
    const getUserData = userDataRepo.select_Some_FromUserTableby_Id(uid)
      if (getUserData !== null) {
        return getUserData
      } else {
        return "select data error"
      }
        
    }
    
  async login(loginData) {
    const phonenumber = loginData.phonenumber
    const pass = loginData.password

    const checkLogin = userDataRepo.select_Some_FromUserTableby_phonenumber_ForLogin(phonenumber,pass)
    
    return checkLogin
        
  }

  async checkemail(email) {
   console.log(email.email)
    const checkEmail = userDataRepo.select_Some_FromUserTableby_Email(email.email)
    
    return checkEmail
        
  }
  
  async createUser(userData) {
    
    const create = userDataRepo.insertToUserTable(userData)
      if (create !== null) {
        return create
      } else {
        return "incomplete create user"
      }
        
  }
  
  async updateUserData(userData) {
    
    const create = userDataRepo.updateToUserTable(userData)
      if (create !== null) {
        return create
      } else {
        return "incomplete create user"
      }
        
  }
  
  async deleteUserData(uid) {
    
    const create = userDataRepo.deleteUser(uid)
      if (create !== null) {
        return create
      } else {
        return "incomplete create user"
      }
        
    }

 
  @Destructor()
  async destroy(): Promise<void> {
  }
}
