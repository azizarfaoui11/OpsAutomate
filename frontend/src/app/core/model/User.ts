export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email:string;
    role: Role;

    constructor(){
      this.id=0;
      this.firstname="";
      this.lastname="";
      this.username="";
      this.password="";
      this.email="";
      this.role=Role.USER;
    }
  }
  
  
  export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  