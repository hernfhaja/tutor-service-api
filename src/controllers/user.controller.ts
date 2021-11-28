import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, DELETE, GET, getInstanceByToken, POST } from 'fastify-decorators';
import UserService from '../services/user.service';



@Controller({ route: '/user' })
export default class UserController {
  private userService = getInstanceByToken<UserService>(UserService);

  @GET({
    url: '/',
    options: {},
  })
  async getAllData(req, reply) {
    try {
      const userData = await this.userService.getAllData()
      reply.status(200).send(userData.rows)
    } catch (error) {
      reply.status(200).send(error)
    }
  }

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
    url: '/checkphonenumber',
    options: {},
  })
  async checkphonenumber(req, reply) {
    console.log(req.body)
    try {
      const checkphonenumber = await this.userService.checkphonenumber(req.body)
      console.log("check phonenumber : " , checkphonenumber)
      if (checkphonenumber == 1)
      {
        reply.status(200).send({ messege: "phonenumber already exist", status: 0})
      } else {
        reply.status(200).send({messege :"you can use this number", status : 1 })
      }
    } catch (error) {
      if (error) {
        reply.status(500).send(error)
      }
    }
  }


  @POST({
    url: '/login',
    options: {},
  })
  async login(req, reply) {
    try {
      const checklogin = await this.userService.login(req.body)
      console.log("Check login : " , checklogin)
      if (checklogin == 0)
      {
        reply.status(200).send({ messege: "password incorrect", status: 2})
      } else  {
        reply.status(200).send({messege : "Login complete" , status : 1 , uid : `${checklogin}` })
        
      } 
    } catch (error) {
      if (error) {
        reply.status(200).send({messege :"invalid PhoneNumber or PhoneNumber do not exist", status : 3 })
      }
      
    }
  }

  @POST({
    url: '/create',
    options: {},
  })
  async createUser(req, reply) {
   
    const checkphonenumber = await this.userService.checkphonenumber(req.body)
    if (checkphonenumber === 0) {
      try {
          const createUser = await this.userService.createUser(req.body)
          console.log("Create user status : " , createUser)
          reply.status(200).send({ messege: "Insert complete", status: 1 })
  
      } catch (error) {
        reply.status(200).send(error)
      }
    } else {
      reply.status(500).send({ message : "this phone number already exist" , status : 500})
    }
      
    
   
    
  }

  @POST({
    url: '/update',
    options: {},
  })
  async updateUserData(req, reply) {
    try {
      const update = await this.userService.updateUserData(req.body)

      console.log("update user status : " , update)
      reply.status(200).send({messege : "update complete" , status : 1})
      
    } catch (error) {
      reply.status(200).send({messege : error, status : 2})
    }
  }

  @DELETE({
    url: '/delete/:uid',
    options: {},
  })
  async deleteUser(req, reply) {
    try {
      const deleteUser = await this.userService.deleteUserData(req.params.uid)

      console.log("deleteUser status : " , deleteUser)
      reply.status(200).send({messege : "delete complete" , status : 1})
      
    } catch (error) {
      reply.status(200).send({messege : error, status : 2})
    }
  }

}
 