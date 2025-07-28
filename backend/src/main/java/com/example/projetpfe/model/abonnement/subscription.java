package com.example.projetpfe.model.abonnement;


import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.example.projetpfe.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @Enumerated(EnumType.STRING)
    private typesubsc typesubsc;

    @Enumerated(EnumType.STRING)
    private etat etat;
    @Temporal(TemporalType.DATE)
    private  Date datedeb;
    @Temporal(TemporalType.DATE)
    private Date datefin;
    @ManyToMany(mappedBy = "subscriptions")
    private List<User> users;





}
