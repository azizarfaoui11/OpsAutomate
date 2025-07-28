package com.example.projetpfe.model.payment;

import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.abonnement.abonnement;
import com.example.projetpfe.model.abonnement.subscription;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.model.GroupeRessource.projet;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChargeResponse {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "payment_id")
        private Long paymentid;
        private String id;
        private Long amount;
        private String currency;
        private String status;


        @ManyToOne
        private User userpayment;
        @ManyToOne
        private projet projet;


        // Constructors, getters, and setters
    }

