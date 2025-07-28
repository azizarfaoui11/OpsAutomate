export class abonnement
{   
    id:number;
    nom:string;
    etat:etat;
    cout:number;

    

    constructor(){
        this.id=0;
        this.nom="";
        this.etat=etat.inactif;
        this.cout=0;
    }
}

    export enum etat {
        actif = 'actif',
        inactif = 'inactif',
        annule = 'annule'
      }
