package com.example.projetpfe.model.user;

import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.GroupeRessource.projet;
import com.example.projetpfe.model.abonnement.abonnement;
import com.example.projetpfe.model.abonnement.subscription;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.swing.*;
import java.security.Principal;
import java.util.Collection;
import java.util.List;



@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)

public class User implements UserDetails, Principal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name= "email" , unique = true)
    private String email;

    @Column(name = "verification_code")
    private String verificationCode;

    @Column(name = "email_verified")
    private boolean emailVerified;

    @Column(name = "account_non_locked")
    private boolean accountNonLocked;


    @Enumerated(value = EnumType.STRING)
    private Role role;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

   @JsonIgnore
   @ManyToMany
   @JoinTable(
           name = "user_abonnement",
           joinColumns = @JoinColumn(name = "user_id"),
           inverseJoinColumns = @JoinColumn(name = "abonnement_id"))
    private List<abonnement> abonnements;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_subscription",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "subscription_id"))
    private  List<subscription> subscriptions;

    @JsonIgnore
    @OneToMany(mappedBy = "userpayment")
    private List<ChargeResponse> chargeResponseList ;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<GroupeRessource> groupeRessourceList;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<projet> projetList;





    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

   /* @Override
    public boolean isAccountNonLocked() {

        return false;
    }*/
   @Override
   public boolean isAccountNonLocked() {
       return accountNonLocked;
   }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }



    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // public String fullName() {
    //  return getFirstname() + " " + getLastname();
    //}

    @Override
    public String getName() {
        return username;
    }

    public String getFullName() {
        return firstname + " " + lastname;
    }

    public List<Token> getTokens() {
        return tokens;
    }

    public void setTokens(List<Token> tokens) {
        this.tokens = tokens;
    }
}
