
import { Service, Initializer, Destructor } from 'fastify-decorators';
import MedDataRepository from '../repositories/med.repository';

const medDataRepo = new MedDataRepository

@Service()
export default class MedService {
  @Initializer()
  async init(): Promise<void> {
  }

  async getMedData() {
    
    const getMedData = medDataRepo.select_All_FromMedTable()
      
        return getMedData
       
    }
  
  async getMedDataByid(uid) {
    
    const getMedData = medDataRepo.select_Some_FromMedTableby_Id(uid)
      if (getMedData !== null) {
        return getMedData
      } else {
        return "select data error"
      }
        
    }
    

  async createMedData(userMedData) {
    
    const create = medDataRepo.insertToMedTable(userMedData)
      if (create !== null) {
        return create
      } else {
        return "incomplete create user"
      }
        
  }
  
  async updateUserData(userData) {
    
    const create = medDataRepo.updateToMedTable(userData)
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
