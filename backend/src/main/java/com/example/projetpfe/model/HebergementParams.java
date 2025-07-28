package com.example.projetpfe.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class HebergementParams {

    @JsonProperty("frontend")
    private String frontend;

    @JsonProperty("backend")
    private String backend;

    @JsonProperty("db")
    private String db;

    @JsonProperty("noueds")
    private String noueds;

    @JsonProperty("nom")
    private String nom;



}
