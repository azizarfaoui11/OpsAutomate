import { abonnement } from "./abonnement";
import { groupesrc } from "./grprsrc";

export class Projet {
    id?: number;  // ? signifie que cet attribut est optionnel
    nom?: string;
    abonnement?: string;
    grouperessource?: string;
    cout?:number | null;
}
