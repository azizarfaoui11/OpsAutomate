package com.example.projetpfe.service;

import com.example.projetpfe.model.abonnement.*;
import com.example.projetpfe.model.abonnement.*;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.model.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class abonnementService {


    @Autowired
    @Lazy
    private  abonnementRepo abonnementRepo;
    @Autowired
    @Lazy
    private  subscRepo subscRepo ;
    @Autowired
    @Lazy
    private UserRepository userrepo;



    public List<abonnement> getAllabonnement()
    {
        return abonnementRepo.findAll();
    }

    public abonnement getabonnbyId(Long id)
    {
        return  abonnementRepo.findById(id).orElseThrow();
    }

    public abonnement addabonnement(abonnement a)
    {
        return abonnementRepo.save(a);
    }

    public void affecteabonntouser(Integer idu)
    {
        Long ida=1L;
        User u= userrepo.findById(idu).orElseThrow();
        abonnement a =abonnementRepo.findById(ida).orElseThrow();
        u.getAbonnements().add(a);
        a.getUsers().add(u);
        userrepo.save(u);
        abonnementRepo.save(a);

    }

    public void affectsubscmensueltouser(Integer idu)
    {
        String type="mensuel";
        List<subscription> sm= subscRepo.findAll();
        subscription foundsubsc=new subscription();
       // Long ida=1L;
        for(subscription s:sm)
        {
            if(s.getTypesubsc().toString().equals(type))
            {
                foundsubsc=s;
                break;
            }
        }
        User u= userrepo.findById(idu).orElseThrow();
        //subscription s =subscRepo.findById(ida).orElseThrow();
        u.getSubscriptions().add(foundsubsc);
        foundsubsc.getUsers().add(u);
        userrepo.save(u);
        subscRepo.save(foundsubsc);
    }

   public void affectesubscannueltouser(Integer idu)
    {
        String type="annuel";
       // subscription sa =new subscription();
        subscription foundSubscription = new subscription();

        List<subscription> ss=subscRepo.findAll();
        for(subscription a:ss) {
            if (a.getTypesubsc().toString().equals(type)) {
                 foundSubscription=a;
                break;
            }
        }
            User u= userrepo.findById(idu).orElseThrow();
            u.getSubscriptions().add(foundSubscription);
            foundSubscription.getUsers().add(u);
            userrepo.save(u);
            subscRepo.save(foundSubscription);



    }

    /*public void affectesubscannueltouser(Integer idu) {
        String type = "annuel";
        subscription sa = new subscription(); // Cela crée une nouvelle instance
        List<subscription> ss = subscRepo.findAll();

        // Supposons que nous voulons utiliser seulement une souscription avec état 'annuel'
        subscription foundSubscription = null;
        for (subscription a : ss) {
            if (a.getEtat().equals(etat)) {
                foundSubscription = a; // On trouve la souscription
                break; // On sort de la boucle après avoir trouvé
            }
        }

        if (foundSubscription != null) {
            User u = userrepo.findById(idu).orElseThrow();

            // Ajouter l'utilisateur à la souscription trouvée
            foundSubscription.getUsers().add(u);
            u.getSubscriptions().add(foundSubscription); // Ajouter la souscription à l'utilisateur

            // Sauvegarde des modifications
            userrepo.save(u);
            subscRepo.save(foundSubscription);
        }
    }*/
    //tous les user avec ses abonnement pour le backoffice
    public List<List<String>> getUserAbonnements() {
        List<List<String>> results = new ArrayList<>();

        List<User> users = userrepo.findAll();
        for (User user : users) {

            for (abonnement  abonnement : user.getAbonnements()) {
                List<String> userAbonnement = new ArrayList<>();
                userAbonnement.add(user.getEmail());
                userAbonnement.add(abonnement.getNom());
                results.add(userAbonnement);
            }
        }
        return results;
    }
         //retourne les abonements de 'un utulisateur en parametre pour frontoffice


    public List<abonnement> getabonnementsBYuser(long id ) {
        List<abonnement> l = abonnementRepo.findAll();
        List<abonnement> l2=new ArrayList<>();
        for (abonnement abonn : l) {
            for(User user : abonn.getUsers())
            {
                if(user.getId()==id)
                {
                    l2.add(abonn);

                }
            }
        }
        return l2;
    }

    public List<subscription> getsubscriptionBYuser(Integer id ) {
        List<subscription> l = subscRepo.findAll();
        List<subscription> l2 = new ArrayList<>();
        for (subscription subsc : l) {
            for (User user : subsc.getUsers()) {
                if (user.getId() == id) {
                    l2.add(subsc);
                }
            }

        }
        return l2;
    }

    public void deleteabonnement(Long id )
    {
        abonnementRepo.deleteById(id);
    }

    public List<subscription> getAllsubscription()
    {
        return  subscRepo.findAll();
    }
    public subscription getsubscbyid(Long id)
    {
        return subscRepo.findById(id).orElseThrow();
    }
    public subscription addsubsc(subscription s, Integer id)
    {
        User u = userrepo.findById(id).orElseThrow();
        //s.setUsersubsc(u);
        return  subscRepo.save(s);
    }
    public void deletesubsc(Long id)
    {
         subscRepo.deleteById(id);
    }

    public List<List<String>> getUserSubcriptions() {
        List<List<String>> results = new ArrayList<>();

        List<User> users = userrepo.findAll();
        for (User user : users) {

            for (subscription  subscription : user.getSubscriptions()) {
                List<String> userSubcription = new ArrayList<>();
                userSubcription.add(user.getEmail());
                userSubcription.add(subscription.getNom());
                results.add(userSubcription);
            }
        }
        return results;
    }

}
