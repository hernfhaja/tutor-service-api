
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
  
  async getMedDataByDateToday() {
    
    const getMedData = medDataRepo.select_Some_FromMedTableby_dateToday()
      if (getMedData !== null) {
        return getMedData
      } else {
        return "select data error"
      }
        
  }

  async getMedDataByDate(data) {
    
    const getMedData = medDataRepo.select_Some_FromMedTableby_date(data.date)
      if (getMedData !== null) {
        return getMedData
      } else {
        return "select data error"
      }
        
  }
  
  
  async getMedDataByDateRange(date) {
    
    const getMedData = medDataRepo.select_Some_FromMedTableby_dateRang(date.dateStart , date.dateEnd , date.time)
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

    
  async updateMedData(userMedData) {
    
    const create = medDataRepo.updateToMedTable(userMedData)
      if (create !== null) {
        return create
      } else {
        return "incomplete create user"
      }
        
    }

    async deleteMedDataById(mid) {
    
      const deletMedData = medDataRepo.deleteMedData_By_Id(mid)
        if (deletMedData !== null) {
          return deletMedData
        } else {
          return "incomplete create user"
        }
          
      }
 
  @Destructor()
  async destroy(): Promise<void> {
  }
}
