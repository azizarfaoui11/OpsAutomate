package com.example.projetpfe.model.abonnement;


import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.example.projetpfe.model.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
//pay as you go
public class abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;
    @Enumerated(EnumType.STRING)
    private etat etat;
    private float cout ;
    @JsonIgnore
    @ManyToMany(mappedBy = "abonnements")
    private List<User> users;




}
