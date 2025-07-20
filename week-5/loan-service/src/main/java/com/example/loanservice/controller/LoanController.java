
package com.example.loanservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class LoanController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/loan")
    public String getLoanDetails() {
        String accountDetails = restTemplate.getForObject("http://ACCOUNT-SERVICE/account", String.class);
        return "Loan details + " + accountDetails;
    }
}
