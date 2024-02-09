package com.agriloan.agriloan.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.agriloan.agriloan.Entity.LoanApprove;
import com.agriloan.agriloan.Service.LoanApproveService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/loan-approve")
public class LoanApproveController {

    private final LoanApproveService loanApproveService;

    @Autowired
    public LoanApproveController(LoanApproveService loanApproveService) {
        this.loanApproveService = loanApproveService;
    }

    @PostMapping("/save")
    public ResponseEntity<LoanApprove> saveLoanApproval(@RequestBody LoanApprove loanApprove) {
        LoanApprove savedLoanApprove = loanApproveService.saveLoanApproval(loanApprove);
        return new ResponseEntity<>(savedLoanApprove, HttpStatus.CREATED);
    }


    @GetMapping("/all")
    public ResponseEntity<List<LoanApprove>> getAllLoanApprovals() {
        List<LoanApprove> loanApprovals = loanApproveService.getAllLoanApprovals();
        return new ResponseEntity<>(loanApprovals, HttpStatus.OK);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<LoanApprove> getLoanApprovalById(@PathVariable Long id) {
        Optional<LoanApprove> loanApproval = loanApproveService.getLoanApprovalById(id);
        return loanApproval.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Void> deleteLoanApprovalById(@PathVariable Long id) {
        loanApproveService.deleteLoanApprovalById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
