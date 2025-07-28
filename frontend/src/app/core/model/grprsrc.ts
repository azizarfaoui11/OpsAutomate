export class groupesrc
{  
    grpId:number;
    build:boolean;
    devops:boolean;
    test:boolean;
    deploy:boolean;
    somme:number;
    nom:string;
    

    constructor(){
        this.grpId=0;
        this.build=false;
        this.devops=false;
        this.test=false;
        this.deploy=false;
        this.somme=0;
        this.nom="";
    }

}