package com.agriloan.agriloan.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriloan.agriloan.Entity.LoanApplication;
import com.agriloan.agriloan.Service.LoanApplicationService;

@RestController
@CrossOrigin
@RequestMapping("/loan-applications")
public class LoanApplicationController {

    private final LoanApplicationService loanApplicationService;

    public LoanApplicationController(LoanApplicationService loanApplicationService) {
        this.loanApplicationService = loanApplicationService;
    }

    @GetMapping("/get")
    public List<LoanApplication> getAllLoanApplications() {
        return loanApplicationService.getAllLoanApplications();
    }

    @GetMapping("/verify/{email}")
    public LoanApplication verifyEmail(@PathVariable String email) {
        return loanApplicationService.findUserByEmail(email);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable Long id) {
        LoanApplication loanApplication = loanApplicationService.getLoanApplicationById(id);
        return loanApplication != null ? ResponseEntity.ok(loanApplication) : ResponseEntity.notFound().build();
    }
    
    @GetMapping("/approve-status/{id}/{status}")
    public String updateStatus(@PathVariable Long id, @PathVariable String status) {
        System.out.println(status);
        return loanApplicationService.updateStatus(id, status);
    }
    

    @PostMapping("/add")
    public ResponseEntity<LoanApplication> addLoanApplication(@RequestBody LoanApplication loanApplication) {
        LoanApplication addedLoanApplication = loanApplicationService.addLoanApplication(loanApplication);
        return ResponseEntity.created(URI.create("/api/v1/loan-applications/" + addedLoanApplication.getId()))
                .body(addedLoanApplication);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteLoanApplication(@PathVariable Long id) {
        boolean deleted = loanApplicationService.deleteLoanApplication(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
