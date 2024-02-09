package com.agriloan.agriloan.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agriloan.agriloan.Entity.LoanApprove;
import com.agriloan.agriloan.Repo.LoanApproveRepository;

@Service
public class LoanApproveService {

    private final LoanApproveRepository loanApproveRepository;

    @Autowired
    public LoanApproveService(LoanApproveRepository loanApproveRepository) {
        this.loanApproveRepository = loanApproveRepository;
    }

    public List<LoanApprove> getAllLoanApprovals() {
        return loanApproveRepository.findAll();
    }

    public LoanApprove saveLoanApproval(LoanApprove loanApprove) {
        return loanApproveRepository.save(loanApprove);
    }

    public Optional<LoanApprove> getLoanApprovalById(Long id) {
        return loanApproveRepository.findById(id);
    }

    public LoanApprove saveLoanApplication(LoanApprove loanApprove) {
        return loanApproveRepository.save(loanApprove);
    }

    public void deleteLoanApprovalById(Long id) {
        loanApproveRepository.deleteById(id);
    }
}
