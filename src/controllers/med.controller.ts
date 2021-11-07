import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, GET, getInstanceByToken, POST } from 'fastify-decorators';
import MedService from '../services/med.service';



@Controller({ route: '/med' })
export default class MedController {
  private medService = getInstanceByToken<MedService>(MedService);

  @GET({
    url: '/:uid',
    options: {},
  })
  async getMedDatabyId(req, reply) {
    try {
      const medData = await this.medService.getMedDataByid(req.params.uid)
      reply.status(200).send(medData)
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
          reply.status(200).send("insert complete")
    
        } catch (error) {
          reply.status(500).send(error)
        }
      }

 



}
 