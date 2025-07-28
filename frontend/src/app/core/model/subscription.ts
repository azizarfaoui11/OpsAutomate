export class subscription
{   
    id:number;
    nom:string;
    typesubsc:typesubsc;
    etat:etat;
    datedeb:Date;
    datefin:Date;
    

    constructor(){
        this.id=0;
        this.nom="";
        this.typesubsc=typesubsc.semestriel;
        this.etat=etat.inactif;
        this.datedeb= new Date();
        this.datefin=new Date();
    }
}

    export enum etat {
        actif = 'actif',
        inactif = 'inactif',
        annule = 'annule'
      }

      export enum typesubsc{
        annuel='annuel',
        semestriel='semestriel',
        mensuel='mensuel'
      }
