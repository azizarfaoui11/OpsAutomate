package com.example.projetpfe.model.GroupeRessource;


import com.example.projetpfe.model.abonnement.abonnement;
import com.example.projetpfe.model.abonnement.subscription;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.example.projetpfe.model.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class GroupeRessource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long grpId ;
    String nom;
    boolean build;
    boolean devops;
    boolean test ;
    boolean deploy ;
    Integer somme ;



    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;





}
