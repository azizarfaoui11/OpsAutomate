package com.example.projetpfe.service;


import com.example.projetpfe.model.user.User;
import com.example.projetpfe.model.user.UserRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import com.example.projetpfe.model.GroupeRessource.*;
import com.example.projetpfe.model.abonnement.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class groupeService {

    @Autowired
    @Lazy
    private GroupeRsrcRepository groupeRepo ;
    @Autowired
    @Lazy
    private groupeService service;

    @Autowired
    @Lazy
    private abonnementRepo ar;

    @Autowired
    @Lazy
    private Projetrepository projetrepository;

    @Autowired
    @Lazy
    private  UserRepository userrepository;

    public GroupeRessource creategrouperessource(GroupeRessource grp,Integer id) {
        User u = userrepository.findById(id).orElseThrow();
        grp.setUser(u);
        return groupeRepo.save(grp);
    }

    public List<GroupeRessource> getgrouperessourceBYuser(Integer id)
    {
        List<GroupeRessource> gp= new ArrayList<>();
        List<User> u = userrepository.findAll();
        for( User user : u)
        {
            if (user.getId()==id)
            {
            gp= user.getGroupeRessourceList();
            }
        }
        return gp ;

    }


  /*  public Integer Calculate(Long id)
    {
        int a=50;
        int b =30;
        int c=40;
        int d=20;
        int s=0;

         GroupeRessource grp =groupeRepo.findById(id).orElseThrow();
         if (grp.isBuild())
         {
             s+=a;
         }
         if(grp.isTest())
         {
             s+=b;
         }
         if(grp.isDeploy())
         {
             s+=c;
         }
         if(grp.isDevops())
         {
             s+=d;
         }

         grp.setSomme(s);
         groupeRepo.save(grp);
        //service.creategrouperessource(grp,idu);

        return s;

    }*/


    public Integer Calculate2(Long id)
    {

        projet p=projetrepository.findById(id).orElseThrow();
        String nom= p.getGrouperessource();
        int a=1;
        int b =2;
        int c=1;    
        int d=2;
        int s=0;

        //GroupeRessource grp =groupeRepo.findById(id).orElseThrow();
        GroupeRessource grp=groupeRepo.findByNom(nom);
        if (grp.isBuild())
        {
            s+=a;
        }
        if(grp.isTest())
        {
            s+=b;
        }
        if(grp.isDeploy())
        {
            s+=c;
        }
        if(grp.isDevops())
        {
            s+=d;
        }

        grp.setSomme(s);
        groupeRepo.save(grp);
        p.setCout(s);
        projetrepository.save(p);
        //service.creategrouperessource(grp,idu);

        return s;

    }




    public List<GroupeRessource> getgroupersrc()
    {
        return  this.groupeRepo.findAll();
    }

    public List<projet> getAllProjets() {
        return projetrepository.findAll();
    }
    public projet getprojectbyid(Long id){
        return this.projetrepository.findById(id).orElseThrow()
;    }

    public projet createProjet(projet projet , Integer id ) {
        //Integer id=1;
       User u= userrepository.findById(id).orElseThrow();
       projet.setUser(u);

        return projetrepository.save(projet);
    }

    public List<projet> getprojetbyuser(Integer id)
    {
        List<User> u = userrepository.findAll();
        List<projet> p= new ArrayList<>();
        for (User user : u )
        {
            if(user.getId()==id)
            {
             p=user.getProjetList();
            }
        }
        return p;
    }

    public void deletegrpressource(Long id )
    {
        groupeRepo.deleteById(id);
    }

    public void deleteprojet(Long id )
    {
        projetrepository.deleteById(id);
    }






}
