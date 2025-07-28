package com.example.projetpfe.controller;

import com.example.projetpfe.model.abonnement.*;
import com.example.projetpfe.model.abonnement.subscription;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.service.abonnementService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class abonnementController {

    @Autowired
    private abonnementService as;

    @Autowired
    @Lazy
    private abonnementRepo ar;

    @Autowired
    @Lazy
    private subscRepo sr;

    @GetMapping("/abonnement/{id}")
    public abonnement getabonnement(@PathVariable Long id) {
        return as.getabonnbyId(id);
    }

    @GetMapping("/abonnement/list")
    public List<abonnement> abonnementList() {
        return as.getAllabonnement();
    }

   @PostMapping("/abonnement/add")
    public abonnement createabonnement(@RequestBody abonnement a) {
        return as.addabonnement(a);
    }
    @PutMapping("/updateabonn/{id}")
    public abonnement updateabonn(@PathVariable("id") Long id, @RequestParam abonnement abonn)
    {

        //User u = userrepo.findById(id).orElseThrow();
        abonnement a=ar.findById(id).orElseThrow();
        a.setNom(abonn.getNom());
        a.setEtat(abonn.getEtat());
        a.setCout(abonn.getCout());

        return ar.save(a);
    }


    @DeleteMapping("/abonnement/delete/{id}")
    public void deleteabonnement(@PathVariable Long id) {
        as.deleteabonnement(id);
    }


    @PostMapping("/abonntouser")
    public void assignabonntouser(@RequestParam Integer id )
    {
        as.affecteabonntouser(id);
    }

    @GetMapping("/abonnbyuser/{id}")
    public List<abonnement> getabonnbyutulisateur(@PathVariable("id") Long id )
    {
        return as.getabonnementsBYuser(id);
    }

    @PostMapping("/subsc1touser")
    public void assignsubsc1touser(@RequestParam Integer id )
    {
        as.affectsubscmensueltouser(id);

    }
    @PostMapping("/subsc2touser")
    public void assignsubsc2touser(@RequestParam Integer id )
    {
        as.affectesubscannueltouser(id);
    }



    @GetMapping("/user/abonn")
    public List<List<String>> getUserAbonnements() {
        return as.getUserAbonnements();
    }

    @GetMapping("/user/subsc")
    public List<List<String>> getUserSubscriptions(){
        return as.getUserSubcriptions();
    }

    @GetMapping("/subscription/{id}")
    public subscription getsubscription(@PathVariable Long id) {
        return as.getsubscbyid(id);
    }

    @GetMapping("/subscription/list")
    public List<subscription> subscriptionList() {
        return as.getAllsubscription();
    }

    @PostMapping("/subscription/add")
    public subscription createsubsc(@RequestBody subscription s, @RequestParam Integer id ) {
        return as.addsubsc(s,id);
    }

    @DeleteMapping("/subscription/delete/{id}")
    public void deletesubsc(@PathVariable Long id) {
        as.deletesubsc(id);
    }

    @PutMapping("/updatesubsc/{id}")
    public subscription updatesubsc(@PathVariable("id") Long id, @RequestBody subscription subsc)
    {


        subscription s= sr.findById(id).orElseThrow();
        s.setNom(subsc.getNom());
        s.setEtat(subsc.getEtat());
        s.setTypesubsc(subsc.getTypesubsc());
        s.setDatedeb(subsc.getDatedeb());
        s.setDatefin(subsc.getDatefin());


        return sr.save(s);
    }

    @GetMapping("/subscbyuser/{id}")
    public List<subscription> getsubscriptionsbyuser(@PathVariable("id") Integer id)
    {
        return as.getsubscriptionBYuser(id);
    }

}
