package com.example.projetpfe.model.abonnement;

import org.springframework.data.jpa.repository.JpaRepository;

public interface subscRepo extends JpaRepository<subscription,Long> {

   // public String findByEtat(String etat);

}
