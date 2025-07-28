package com.example.projetpfe.model.GroupeRessource;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupeRsrcRepository extends JpaRepository<GroupeRessource,Long> {
    public GroupeRessource findByNom(String nom);

}
