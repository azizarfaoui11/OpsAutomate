package com.example.projetpfe.model.GroupeRessource;


import com.example.projetpfe.model.abonnement.abonnement;
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
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class projet  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id ;
    String nom;
    String abonnement;
    String grouperessource;
    Integer cout ;
    @ManyToOne()
    @JoinColumn(name="user-id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "projet")
    private List<ChargeResponse> chargeResponseList;



}
