package com.example.projetpfe.controller;

import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.GroupeRessource.Projetrepository;
import com.example.projetpfe.model.GroupeRessource.projet;
import com.example.projetpfe.model.abonnement.abonnement;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.example.projetpfe.model.payment.PaymentRequest;
import com.example.projetpfe.model.payment.chargeRepository;
import com.example.projetpfe.model.payment.StripeClient;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.model.user.UserRepository;
import com.example.projetpfe.model.user.Usersession;
import com.example.projetpfe.service.groupeService;
import com.stripe.model.Charge;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.example.projetpfe.service.paymentService;
import com.example.projetpfe.model.GroupeRessource.GroupeRsrcRepository;

import java.security.Principal;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/payment")
public class PaymentController {
    private StripeClient stripeClient;
    @Autowired
    private paymentService service ;
    @Autowired
    private GroupeRsrcRepository grprepo;
    @Autowired
    @Lazy
    private groupeService grpservice;
    @Autowired
    @Lazy
    private chargeRepository chargeRepository;
    @Autowired
    @Lazy
    private Projetrepository pr;
    @Autowired
    @Lazy
    private UserRepository ur;

    @Autowired
    public PaymentController(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }
     Integer prix ;
   // Long id=2L;
   /* @PostMapping("/charge/{id}")
    public ResponseEntity<ChargeResponse> chargeCard(@RequestBody PaymentRequest paymentRequest,@PathVariable("id") Long id) throws Exception {
        // Long id = 1L;
       // Long id =paymentService.getCurrentUser();


        String token = paymentRequest.getToken();
        Double amount = paymentRequest.getAmount();
        Charge charge = this.stripeClient.chargeCreditCard(token, amount);


        // Convert Charge to ChargeResponse
        ChargeResponse chargeResponse = new ChargeResponse();
        chargeResponse.setId(charge.getId());
        chargeResponse.setAmount(charge.getAmount());
        chargeResponse.setCurrency(charge.getCurrency());
        chargeResponse.setStatus(charge.getStatus());
        GroupeRessource groupeRessource = grprepo.findById(id).orElseThrow();
        chargeResponse.setGroupeRessource(groupeRessource);


        service.createpayment(chargeResponse,id);



        return ResponseEntity.ok(chargeResponse);
    }*/
   @PostMapping("/charge")
   public ResponseEntity<ChargeResponse> chargeCard(@RequestBody PaymentRequest paymentRequest) throws Exception {



       String token = paymentRequest.getToken();
       Double amount = paymentRequest.getAmount();
       Charge charge = this.stripeClient.chargeCreditCard(token, amount);


       // Convert Charge to ChargeResponse
       ChargeResponse chargeResponse = new ChargeResponse();
       chargeResponse.setId(charge.getId());
       chargeResponse.setAmount(charge.getAmount());
       chargeResponse.setCurrency(charge.getCurrency());
       chargeResponse.setStatus(charge.getStatus());
       //GroupeRessource groupeRessource = grprepo.findById(id).orElseThrow();
      // chargeResponse.setGroupeRessource(groupeRessource);


       service.createpayment(chargeResponse);



       return ResponseEntity.ok(chargeResponse);
   }


    @PostMapping("/addgrouperessource")
    public GroupeRessource creategrouperessource(@RequestBody GroupeRessource grp, @RequestParam Integer id  )
    {
       return grpservice.creategrouperessource(grp,id);
    }

    @GetMapping("/grpBYuser/{id}")
    public List<GroupeRessource> getgrpbyutulisateur(@PathVariable("id")Integer id)
    {
        return grpservice.getgrouperessourceBYuser(id);
    }

    @PostMapping("/prix/{id}")
    public Integer prix(@PathVariable("id") Long id)
    {
        return  grpservice.Calculate2(id);
    }
   /* @PostMapping("/somme/{id}")

    public Integer somme(@PathVariable("id") Long id )
    {
        return  grpservice.calculate2(id);
    }*/

    @GetMapping("/payments")
    public List<ChargeResponse> getpayment()
    {
        List<ChargeResponse> p= chargeRepository.findAll();
        return p;
    }

    @GetMapping("/grouperessourcelist")
    public List <GroupeRessource> getgrprsrc()
    {
        List<GroupeRessource> l = grprepo.findAll();
        return  l;
    }

    @PostMapping("/charge/abonn/{id}")
    public ResponseEntity<ChargeResponse> chargeCardd(@RequestBody PaymentRequest paymentRequest,@PathVariable("id") Long id,@RequestParam Integer id1) throws Exception {


        prix=grpservice.Calculate2(id);

        String token = paymentRequest.getToken();
        //Double amount = paymentRequest.getAmount();
        Double amount = Double.valueOf(this.prix);
        Charge charge = this.stripeClient.chargeCreditCard(token, amount);

        User u= ur.findById(id1).orElseThrow();
        projet p=pr.findById(id).orElseThrow();


        // Convert Charge to ChargeResponse
        ChargeResponse chargeResponse = new ChargeResponse();

        chargeResponse.setId(charge.getId());
        chargeResponse.setAmount(charge.getAmount());
        chargeResponse.setCurrency(charge.getCurrency());
        chargeResponse.setStatus(charge.getStatus());
        chargeResponse.setUserpayment(u);
        chargeResponse.setProjet(p);
        //nrmlmnt nzid iduser et idprojet bech nsetehom fel base
       // GroupeRessource groupeRessource = gr.findById(id).orElseThrow();
        //chargeResponse.setGroupeRessource(groupeRessource);
        //GroupeRessource groupeRessource = grprepo.findById(id).orElseThrow();
        // chargeResponse.setGroupeRessource(groupeRessource);


        service.createpayment(chargeResponse);



        return ResponseEntity.ok(chargeResponse);
    }

    @PostMapping("/sendemail")
    public void email()
    {
          service.sendVerificationEmail();

    }
    @PostMapping("/sendemailmensuel")
    public void email1()
    {
        service.sendVerificationEmailmensuel();
    }

    @PostMapping("/sendemailannuel")
    public void email2()
    {
        service.sendVerificationEmailannuel();
    }

    @GetMapping("/project/list")
    public List<projet> getProjets() {
        return grpservice.getAllProjets();
    }

    @PostMapping("/project/add")
    public ResponseEntity<projet> createProjet(@RequestBody projet projet, @RequestParam Integer id) {
        projet createdProjet = grpservice.createProjet(projet,id);
        return ResponseEntity.ok(createdProjet);
    }

    @GetMapping("/projetbyuser/{id}")
    public List<projet> getprojetbyutulisateur(@PathVariable("id") Integer id)
    {
        return  grpservice.getprojetbyuser(id);
    }
    @GetMapping("/getproject")
    public projet getproject(@PathVariable("id") Long id)
    {
        return  grpservice.getprojectbyid(id);
    }

    @DeleteMapping("/grp/delete/{id}")
    public void deletegrp(@PathVariable Long id) {
        grpservice.deletegrpressource(id);

    }

    @DeleteMapping("/projet/delete/{id}")
    public void deleteprojet(@PathVariable Long id) {
        grpservice.deleteprojet(id);

    }

    @PutMapping("/updateaprojet/{id}")
    public projet updateprojet(@PathVariable("id") Long id, @RequestParam projet p)
    {

        //User u = userrepo.findById(id).orElseThrow();
       /// abonnement a=ar.findById(id).orElseThrow();
        projet pp=pr.findById(id).orElseThrow();
        pp.setNom(p.getNom());
        pp.setAbonnement(p.getAbonnement());
        pp.setGrouperessource(p.getGrouperessource());
        return pr.save(pp);
    }

    @GetMapping("/list")
    public List<ChargeResponse> getpaymentt()
    {
        return service.getpayment();
    }


    @PostMapping("/sendemaildeploylocal")

    public void sendemaildeploy()
    {
        this.service.sendemaildeploylocal();
    }
    @PostMapping("/sendemailhebergement")
    public void sendemailggp()
    {
        this.service.sendemaildeployGCP();
    }

}
