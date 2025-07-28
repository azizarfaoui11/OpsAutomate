package com.example.projetpfe.service;

import com.example.projetpfe.model.GroupeRessource.GroupeRessource;
import com.example.projetpfe.model.payment.ChargeResponse;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.model.user.UserRepository;
import com.example.projetpfe.model.user.Usersession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.projetpfe.model.payment.chargeRepository;
import com.example.projetpfe.model.GroupeRessource.GroupeRsrcRepository;

import java.security.Principal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class paymentService {
    @Autowired
    private chargeRepository Paymentrepo;
    @Autowired
    @Lazy
    private UserRepository userrepo;
    @Autowired
    @Lazy
    private GroupeRsrcRepository groupeRsrcRepository;
    @Autowired
    private JavaMailSender mailSender;



    public ChargeResponse createpayment (ChargeResponse payment )
    {
       // GroupeRessource grp = groupeRsrcRepository.findById(id).orElseThrow();
        //payment.setGroupeRessource(grp);
        return Paymentrepo.save(payment);
    }

    public List<ChargeResponse>  getpayment()
    {
        return Paymentrepo.findAll();
    }

    public void sendVerificationEmail() {
        String email = "mohamedaziz.arfaoui1@esprit.tn";
        String subject = "Confirmation de votre abonnement à OpsAutomate";
        double cost=0;
        LocalDateTime activationDate= LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy HH:mm");
        String formattedActivationDate = activationDate.format(formatter);

        String message = "Bonjour " + "MohamedAziz" + ",\n\n" +
                "Nous sommes ravis de vous informer que votre abonnement à Pay As You Go  a été activé avec succès !\n\n" +
                "### Détails de votre abonnement :\n" +
                "- **Type d'abonnement** : " + " Pay As You Go " + "\n" +
                "- **Date d'activation** : " + formattedActivationDate + "\n" +
                "- **Coût** : " + cost +"$"+ "\n\n" +
                "### Ce que cela signifie pour vous :\n" +
                "Avec cet abonnement, vous pouvez maintenant profiter de nos services.\n\n" +
                "Pour toute question, notre équipe de support est à votre disposition. N’hésitez pas à nous contacter . \n\n" +
                "### Merci de nous avoir choisis !\n" +
                "Cordialement,\n" +
                "L’équipe de [OpsAutomate]";


        // Création de l'objet message
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("opsautomateservice@outlook.com"); // Assurez-vous que ceci correspond à votre compte authentifié
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        try {
            // Envoi de l'email
            mailSender.send(emailMessage);
            System.out.println("Email sent successfully to " + email);
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
            // Traitez l'erreur, par exemple en le journalisant ou en lançant une nouvelle exception
        }
    }

    //subsc mensuel
    public void sendVerificationEmailmensuel() {
        String email = "mohamedaziz.arfaoui1@esprit.tn";
        String subject = "Confirmation de votre abonnement à OpsAutomate";
        double cost=30;
        LocalDateTime activationDate= LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy HH:mm");
        String formattedActivationDate = activationDate.format(formatter);

        String message = "Bonjour " + "MohamedAziz" + ",\n\n" +
                "Nous sommes ravis de vous informer que votre abonnement Mensuel a OpsAutomate  a été activé avec succès !\n\n" +
                "### Détails de votre abonnement :\n" +
                "- **Type d'abonnement** : " + " Mensuel " + "\n" +
                "- **Date d'activation** : " + formattedActivationDate + "\n" +
                "- **Coût** : " + cost +"$"+ "\n\n" +
                "### Ce que cela signifie pour vous :\n" +
                "Avec cet abonnement, vous pouvez maintenant profiter de nos services.\n\n" +
                "Pour toute question, notre équipe de support est à votre disposition. N’hésitez pas à nous contacter . \n\n" +
                "### Merci de nous avoir choisis !\n" +
                "Cordialement,\n" +
                "L’équipe de [OpsAutomate]";


        // Création de l'objet message
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("opsautomateservice@outlook.com"); // Assurez-vous que ceci correspond à votre compte authentifié
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        try {
            // Envoi de l'email
            mailSender.send(emailMessage);
            System.out.println("Email sent successfully to " + email);
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
            // Traitez l'erreur, par exemple en le journalisant ou en lançant une nouvelle exception
        }
    }


    //subscription annuel
    public void sendVerificationEmailannuel() {
        String email = "mohamedaziz.arfaoui1@esprit.tn";
        String subject = "Confirmation de votre abonnement à OpsAutomate";
        double cost=250;
        LocalDateTime activationDate= LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy HH:mm");
        String formattedActivationDate = activationDate.format(formatter);

        String message = "Bonjour " + "MohamedAziz" + ",\n\n" +
                "Nous sommes ravis de vous informer que votre abonnement Annuel a OpsAutomate  a été activé avec succès !\n\n" +
                "### Détails de votre abonnement :\n" +
                "- **Type d'abonnement** : " + " Annuel " + "\n" +
                "- **Date d'activation** : " + formattedActivationDate + "\n" +
                "- **Coût** : " + cost +"$"+ "\n\n" +
                "### Ce que cela signifie pour vous :\n" +
                "Avec cet abonnement, vous pouvez maintenant profiter de nos services.\n\n" +
                "Pour toute question, notre équipe de support est à votre disposition. N’hésitez pas à nous contacter . \n\n" +
                "### Merci de nous avoir choisis !\n" +
                "Cordialement,\n" +
                "L’équipe de [OpsAutomate]";


        // Création de l'objet message
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("opsautomateservice@outlook.com"); // Assurez-vous que ceci correspond à votre compte authentifié
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        try {
            // Envoi de l'email
            mailSender.send(emailMessage);
            System.out.println("Email sent successfully to " + email);
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
            // Traitez l'erreur, par exemple en le journalisant ou en lançant une nouvelle exception
        }
    }



    public void sendemaildeployGCP() {
        String email = "mohamedaziz.arfaoui1@esprit.tn";
        String subject = "Confirmation de votre hébergement avec OpsAutomate\n";
        double cost = 250;
        LocalDateTime activationDate = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy à HH:mm");
        String formattedActivationDate = activationDate.format(formatter);

        String message = "Bonjour MohamedAziz,\n\n" +
                "Nous avons le plaisir de vous informer que votre hébergement sur nos serveurs a été effectué avec succès.\n\n" +
                "### Accès à votre hébergement :\n" +
                "Vous pouvez accéder à votre projet à l'adresse suivante : [www.frontend.com](http://www.frontend.com)\n\n" +
                "Pour toute question, notre équipe de support est à votre disposition. N'hésitez pas à nous contacter.\n\n" +
                "### Merci de nous avoir choisis !\n" +
                "Cordialement,\n" +
                "L’équipe de [OpsAutomate]";

        // Création de l'objet message
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("opsautomateservice@outlook.com"); // Assurez-vous que ceci correspond à votre compte authentifié
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        try {
            // Envoi de l'email
            mailSender.send(emailMessage);
            System.out.println("Email envoyé avec succès à " + email);
        } catch (Exception e) {
            System.err.println("Erreur lors de l'envoi de l'email : " + e.getMessage());
            // Traitez l'erreur, par exemple en le journalisant ou en lançant une nouvelle exception
        }
    }

    public void sendemaildeploylocal() {
        String email = "mohamedaziz.arfaoui1@esprit.tn";
        String subject = "Confirmation du succès de votre déploiement local avec OpsAutomate\n";
        LocalDateTime deploymentDate = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy à HH:mm");
        String formattedDeploymentDate = deploymentDate.format(formatter);

        String message = "Bonjour MohamedAziz,\n\n" +
                "Nous avons le plaisir de vous informer que votre déploiement local a été effectué sans erreurs.\n\n" +
                "Pour toute question, notre équipe de support est à votre disposition. N'hésitez pas à nous contacter.\n\n" +
                "### Merci de nous avoir choisis !\n" +
                "Cordialement,\n" +
                "L’équipe de [OpsAutomate]";

        // Création de l'objet message
        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setFrom("opsautomateservice@outlook.com"); // Assurez-vous que ceci correspond à votre compte authentifié
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        try {
            // Envoi de l'email
            mailSender.send(emailMessage);
            System.out.println("Email envoyé avec succès à " + email);
        } catch (Exception e) {
            System.err.println("Erreur lors de l'envoi de l'email : " + e.getMessage());
            // Traitez l'erreur, par exemple en le journalisant ou en lançant une nouvelle exception
        }
    }










}
