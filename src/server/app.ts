import  Express  from "express";
import { User } from "../database/user/user.entity";
export class Server{
   public app: Express.Application;

   constructor(){
    this.app = Express()
}


}