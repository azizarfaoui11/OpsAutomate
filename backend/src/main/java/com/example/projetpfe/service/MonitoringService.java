package com.example.projetpfe.service;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Base64;

@Service
public class MonitoringService {

    private final RestTemplate restTemplate;

    public MonitoringService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


   /* public String getDashboardData() {
        String url = "http://192.168.33.10:3000/dashboards"; // Changez l'URL en fonction de votre besoin
        String auth = "admin:admin"; // Remplacez par vos identifiants
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + encodedAuth);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
            return response.getBody();
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }*/

    public void dashboard(String url) {
        if (url != null) {
            System.out.println("URL : " + url);
            try {
                Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler " + url);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Le paramètre 'url' n'a pas été trouvé dans la liste des actions.");
        }
    }

    public void stripedashboard(String url)
    {
        if(url!=null)
        {
            try {
                Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler " + url);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        else {
            System.out.println("Le paramètre 'url' n'a pas été trouvé dans la liste des actions.");
        }
        }
    }

