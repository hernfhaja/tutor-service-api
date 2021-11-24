import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, DELETE, GET, getInstanceByToken, POST } from 'fastify-decorators';
import MedService from '../services/med.service';



@Controller({ route: '/med' })
export default class MedController {
  private medService = getInstanceByToken<MedService>(MedService);

  @GET({
    url: '/',
    options: {},
  })
  async getMedData(req, reply) {
    try {
      const medData = await this.medService.getMedData()
      reply.status(200).send(medData.rows)
    } catch (error) {
      reply.status(500).send(error)
    }
  }
  
  @GET({
    url: '/:uid',
    options: {},
  })
  async getMedDatabyId(req, reply) {
    try {
      const medData = await this.medService.getMedDataByid(req.params.uid)
      reply.status(200).send(medData.rows)
    } catch (error) {
      reply.status(500).send(error)
    }
    }
    
    @POST({
        url: '/create',
        options: {},
      })
      async createMedData(req, reply) {
        try {
          const createMedData = await this.medService.createMedData(req.body)
    
          console.log("Create med status : " , createMedData)
          reply.status(200).send({messege : "insert complete" , status : 1})
    
        } catch (error) {
          reply.status(500).send({messege : error , status : 2})
        }
  }
  
  @DELETE({
    url: '/delete/:mid',
    options: {},
  })
  async deleteMedData(req, reply) {
    try {
      const deleteMedData = await this.medService.deleteMedDataById(req.params.mid)

      console.log("delete med status : " , deleteMedData)
      reply.status(200).send({messege : "delete complete" , status : 1})

    } catch (error) {
      reply.status(200).send({messege : error , status : 2})
    }
  }

}
 