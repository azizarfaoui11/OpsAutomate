export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email:string;
    role: Role;
  }
  
  export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  