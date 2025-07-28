package com.example.projetpfe.controller;


import com.example.projetpfe.service.MonitoringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class MonitoringController {

    @Autowired
    MonitoringService service;

   /* @GetMapping("/dashboard")
    public String dashboard()
    {
        return service.getDashboardData();
    }*/


   @GetMapping("/dashboard/backend")
   public String openUrl() {
      // String url="http://192.168.33.10:3000/dashboards";
       String url="http://192.168.33.10:3000/d/spring_boot_21/spring-boot-2-1-system-monitor?orgId=1&refresh=5s";
       service.dashboard(url);
       return "URL testée avec succès : " + url;
   }


    @GetMapping("/dashboard/database")
    public String openUrl1() {
        String url="http://192.168.33.10:3000/d/cdvpbvy5dp0jke/database?orgId=1";
        service.dashboard(url);
        return "URL testée avec succès : " + url;
    }

    @GetMapping("/dashboard/machine")
    public String openUrl2() {
        String url="http://192.168.33.10:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=now-1h&to=now&var-datasource=cdvp486q0s4xsb&var-job=my-vm&var-node=192.168.33.10:9100&var-diskdevices=%5Ba-z%5D%2B%7Cnvme%5B0-9%5D%2Bn%5B0-9%5D%2B%7Cmmcblk%5B0-9%5D%2B";
        service.dashboard(url);
        return "URL testée avec succès : " + url;
    }


        @GetMapping("/dashboard/containers")
    public String openUrl3() {
        String url="http://192.168.33.10:3000/d/edvp5xd5iai2oc/docker-monitoring?orgId=1&refresh=10s";
        service.dashboard(url);
        return "URL testée avec succès : " + url;}
    





    @GetMapping("/stripedashboard")
    public String openurlstripe()
   {
       String url="https://dashboard.stripe.com/test/payments";
       // url=s.tandhifa();
       service.stripedashboard(url);
       return "URL testée avec succès : " + url;
   }
}
