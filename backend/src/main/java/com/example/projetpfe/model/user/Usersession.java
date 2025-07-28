package com.example.projetpfe.model.user;

public class Usersession {
    private String username;
    private Integer id;
    public Usersession(String username, Integer id) {
        this.username = username;
        this.id=id;
    }

    // Getter and Setter
    public String getUsername() {
        return username;
    }

    public void setUsername(String firstname) {
        this.username = username;
    }

    public Integer getId()
    {
        return id;
    }
    public void setId(Integer id)
    {
        this.id=id;
    }
}
