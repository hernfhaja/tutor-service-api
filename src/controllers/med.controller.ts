import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, GET, getInstanceByToken, POST } from 'fastify-decorators';
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
          const createMedData = await this.medService.createMedData(req.body.medData)
    
          console.log("Create med status : " , createMedData)
          reply.status(200).send({messege : "insert complete" , status : 1})
    
        } catch (error) {
          reply.status(500).send({messege : error , status : 2})
        }
  }
  
  @POST({
    url: '/update',
    options: {},
  })
  async updateMedData(req, reply) {
    try {
      const createMedData = await this.medService.updateMedData(req.body.medData)

      console.log("update med status : " , createMedData)
      reply.status(200).send({messege : "update complete" , status : 1})

    } catch (error) {
      reply.status(500).send({messege : error , status : 2})
    }
  }

 



}
 