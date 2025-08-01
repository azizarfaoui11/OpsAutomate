package com.example.projetpfe.service;
import com.example.projetpfe.model.HebergementParams;
import com.example.projetpfe.model.user.User;
import com.example.projetpfe.service.AppConfig;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.stereotype.Service;


@Service
public class srv {
    @Autowired
    private RestTemplate restTemplate;
    String dockerfile = "FROM node:latest as build\n" +
            "WORKDIR /app\n" +
            "COPY package*.json ./\n" +
            "COPY . .\n" +
            "RUN npm run build\n" +
            "FROM nginx:latest\n" +
            "COPY --from=build /app/dist/* /usr/share/nginx/html/\n" +
            "EXPOSE 80\n" +
            "CMD [\"nginx\", \"-g\", \"daemon off;\"]";


    public void triggerJenkinsPipeline(@RequestBody PipelineParams params) {
        String a= params.getTargetStage1();   String b= params.getTargetStage2();   String c= params.getTargetStage3();
       String d= params.getTargetStage4();    String e= params.getTargetStage5();   String f= params.getTargetStage6();
        String j = params.getTargetStage7();  String h= params.getTargetStage8();   String i= params.getTargetStage9();
        String g= params.getTargetStage10();  String k= params.getTargetStage11();  String l= params.getTargetStage12();
        String m= params.getTargetStage13();  String n= params.getTargetStage14();  String o= params.getTargetStage15();
        String p= params.getTargetStage16();  String aa= params.getTargetStage17(); String bb= params.getTargetStage18();
        String cc= params.getTargetStage19(); String dd= params.getTargetStage20(); String ee= params.getTargetStage21();
        String ff=params.getTargetStage22();  String gg=params.getTargetStage23();  String hh=params.getTargetStage24();
        Integer ii=params.getTargetStage25(); Integer jj=params.getTargetStage26(); Integer kk=params.getTargetStage27();

        String jenkinsUrl = "http://192.168.33.10:8080/job/projetpfe/buildWithParameters?TARGET_STAGE1=" +a+ "&TARGET_STAGE2=" +b
                + "&TARGET_STAGE3=" +c+"&GITHUB_URL="+d+"&TARGET_STAGE5=" +e
                +"&TARGET_STAGE6="+f+"&TARGET_STAGE7="+j+"&TARGET_STAGE8="+h
                +"&TARGET_STAGE9="+i+"&DOCKER_USERNAME="+g+"&TARGET_STAGE11="+k+"&TARGET_STAGE12="+l
                +"&TARGET_STAGE13="+m+"&TARGET_STAGE14="+n+"&DOCKER_PASSWORD="+o
                + "&DOCKER_IMAGE_BACKEND="+p+"&TARGET_STAGE17="+aa+"&TARGET_STAGE18="+bb
                +"&TARGET_STAGE19="+cc+"&TARGET_STAGE20="+dd+"&DOCKER_IMAGE_FRONTEND="+ee
                +"&TARGET_STAGE22="+ff+"&TARGET_STAGE23="+gg+"&TARGET_STAGE24="+hh
                +"&TARGET_STAGE25="+ii+"&TARGET_STAGE26="+jj+"&TARGET_STAGE27="+kk;

        String username = "aziz";
        String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        String authString = username + ":" + apiToken;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(authString.getBytes()));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(jenkinsUrl, HttpMethod.POST, requestEntity, String.class);}





    public void pipelineSelenuim(@RequestBody PipelineParams params) {
        //String a= "selenuim";
        String  a=params.getTargetStage28();
        String b= params.getTargetStage29();
        String c=params.getTargetStage30();

        //windows
        String jenkinsUrl = "http://localhost:8084/job/test1.1/buildWithParameters?TARGET_URL="+a
        +"&ELEMENT_ID="+b+"&CLASS_NAME="+c;
          String username = "aziz";

         String apiToken = "11ad7512add4d956ec5530229b6ba925f6";

        String authString = username + ":" + apiToken;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(authString.getBytes()));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(jenkinsUrl, HttpMethod.POST, requestEntity, String.class);

    }


    public void pipelinejmeter(@RequestBody PipelineParams params) {
        String  a =params.getTargetStage23();
        String b= params.getTargetStage24();
        Integer c=params.getTargetStage25();
        Integer d=params.getTargetStage26();
        Integer e=params.getTargetStage27();

        String jenkinsUrl = "http://192.168.33.10:8080/job/jmeter/buildWithParameters?TARGET_STAGE23="+a+"&TARGET_STAGE24="+b
                +"&TARGET_STAGE25="+c+"&TARGET_STAGE26="+d+"&TARGET_STAGE27=" +e;

        String username = "aziz";
        String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        String authString = username + ":" + apiToken;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(authString.getBytes()));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(jenkinsUrl, HttpMethod.POST, requestEntity, String.class);

    }


    public void pipelineSonarandJunit(@RequestBody PipelineParams params) {
        String  a =params.getTargetStage3();
        String b= params.getTargetStage11();

        String jenkinsUrl = "http://192.168.33.10:8080/job/test/buildWithParameters?TARGET_STAGE3="+a+"&TARGET_STAGE11="+b;

        String username = "aziz";
        String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        String authString = username + ":" + apiToken;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(authString.getBytes()));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);


        ResponseEntity<String> responseEntity = restTemplate.exchange(jenkinsUrl, HttpMethod.POST, requestEntity, String.class);

    }

    //pipeline deploy GCP

    public void pipelinedeployGCP(@RequestBody HebergementParams params) {
        String  a =params.getFrontend();
        String b= params.getBackend();
        String c= params.getDb();
        String d = params.getNoueds();
        String e = params.getNom();

        String jenkinsUrl = "http://192.168.33.10:8080/job/deployaks/buildWithParameters?REPLICAS_BACKEND="+b+"&REPLICAS_FRONTEND="+a+
                "&REPLICAS_DB="+c+"&NOMBRE_NOUEDS="+d+"&NOM_HEBERGEMENT="+e;

        String username = "aziz";
        String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        String authString = username + ":" + apiToken;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString(authString.getBytes()));
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);


        ResponseEntity<String> responseEntity = restTemplate.exchange(jenkinsUrl, HttpMethod.POST, requestEntity, String.class);

    }











    public String getSonarQubeDashboardUrl() {
        String sonarQubeUrl = "";
        try {
            String jenkinsUrl = "http://192.168.33.10:8080/job/test/lastBuild/consoleText";
            String username = "aziz";
            String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
            String authString = username + ":" + apiToken;
            String authHeader = "Basic " + Base64.getEncoder().encodeToString(authString.getBytes());
            URL url = new URL(jenkinsUrl);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Authorization", authHeader);

            try (BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                String patternString = "http://192.168.33.10:9000/dashboard\\?id=[^\\s]+";
                Pattern pattern = Pattern.compile(patternString);
                Matcher matcher = pattern.matcher(response.toString());
                if (matcher.find()) {
                    sonarQubeUrl = matcher.group();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sonarQubeUrl;
    }

    public void openUrl(String url) {
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

         public String tandhifa()
         {
             // Supprimer le texte '[INFO]' de l'URL récupérée
             String urlWithInfo = getSonarQubeDashboardUrl();
             String urlWithoutInfo = urlWithInfo.replaceAll("\\[INFO\\]", "").trim();

             System.out.println("URL sans [INFO] : " + urlWithoutInfo);
             return urlWithoutInfo;

         }




    public String getjarfile() {
        String nexusurl = "";
        try {
            String jenkinsUrl = "http://192.168.33.10:8080/job/projetpfe/lastBuild/consoleText";
            String username = "aziz";
            String apiToken = "1168481e5db38ccb0958eedcb0a5437cd4";
            String authString = username + ":" + apiToken;
            String authHeader = "Basic " + Base64.getEncoder().encodeToString(authString.getBytes());
            URL url = new URL(jenkinsUrl);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Authorization", authHeader);

            try (BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                String patternString = "http://192\\.168\\.33\\.10:8081/repository/repo\\/[^\\s]+?\\.jar";
                Pattern pattern = Pattern.compile(patternString);
                Matcher matcher = pattern.matcher(response.toString());
                if (matcher.find()) {
                    nexusurl = matcher.group();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return nexusurl;
    }

    public void downloadjarfile(String url) {
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














}


