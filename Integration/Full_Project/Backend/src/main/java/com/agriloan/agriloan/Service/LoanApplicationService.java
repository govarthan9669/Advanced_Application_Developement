package com.agriloan.agriloan.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.agriloan.agriloan.Entity.LoanApplication;
import com.agriloan.agriloan.Repo.LoanApplicationRepository;

@Service
public class LoanApplicationService {

    private final LoanApplicationRepository loanApplicationRepository;

    @Autowired
    public LoanApplicationService(LoanApplicationRepository loanApplicationRepository) {
        this.loanApplicationRepository = loanApplicationRepository;
    }

    public List<LoanApplication> getAllLoanApplications() {
        return loanApplicationRepository.findAll();
    }

    public LoanApplication addLoanApplication(LoanApplication loanApplication) {
        return loanApplicationRepository.save(loanApplication);
    }

    public boolean deleteLoanApplication(Long id) {
        if (loanApplicationRepository.existsById(id)) {
            loanApplicationRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public LoanApplication getLoanApplicationById(Long id) {
        Optional<LoanApplication> loanApplication = loanApplicationRepository.findById(id);
        return loanApplication.orElse(null);
    }

    public String updateStatus(Long id, String status) {
        LoanApplication user = loanApplicationRepository.findById(id).get();
        System.out.println(user.getStatus());
    
        if(!Objects.isNull(user)){
            user.setStatus(status);
            System.out.println(user.getStatus());
            loanApplicationRepository.saveAndFlush(user);
            return "Success";
        }
            
        return "Something went wrong!";
    }

    public LoanApplication findUserByEmail(String email) {
        return loanApplicationRepository.getUserByEmail(email);
    }
}
