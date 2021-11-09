import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, GET, getInstanceByToken, POST } from 'fastify-decorators';
import UserService from '../services/user.service';



@Controller({ route: '/user' })
export default class UserController {
  private userService = getInstanceByToken<UserService>(UserService);

  @GET({
    url: '/:uid',
    options: {},
  })
  async getUserData(req, reply) {
    try {
      const userData = await this.userService.getUserData(req.params.uid)
      reply.status(200).send(userData)
    } catch (error) {
      reply.status(500).send(error)
    }
  }

  @POST({
    url: '/login',
    options: {},
  })
  async login(req, reply) {
    try {
      const checklogin = await this.userService.login(req.body.loginData)
      console.log(checklogin)
      if (checklogin == 1)
      {
        reply.status(500).send({ messege: "password incorrect", status: 2})
      } else  {
        reply.status(200).send({messege : "Login complete" , status : 1 , uid : `${checklogin}` })
        
      } 
    } catch (error) {
      if (error) {
        reply.status(500).send({messege :"invalid Email or Email do not exist", status : 3 })
      }
      
    }
  }

  @POST({
    url: '/create',
    options: {},
  })
  async createUser(req, reply) {
    try {
      const createUser = await this.userService.createUser(req.body.userData)

      console.log("Create user status : " , createUser)
      reply.status(200).send("insert complete")

    } catch (error) {
      reply.status(500).send(error)
    }
  }

  @POST({
    url: '/update',
    options: {},
  })
  async updateUserData(req, reply) {
    try {
      const update = await this.userService.updateUserData(req.body.userData)

      console.log("update user status : " , update)
      reply.status(200).send("update complete")
      
    } catch (error) {
      reply.status(500).send(error)
    }
  }

}
 