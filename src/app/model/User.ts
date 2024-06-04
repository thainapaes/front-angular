import { Car } from "./Car";

export class User{
  id:number;
  firstName:string;
  lastName:string;
  birthday:Date;
  email:string;
  login:string;
  password:string;
  phone:string;
  carsList:Car[];
}
