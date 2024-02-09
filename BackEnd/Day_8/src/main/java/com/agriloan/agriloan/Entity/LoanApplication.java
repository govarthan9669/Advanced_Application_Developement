package com.agriloan.agriloan.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "marital_status")
    private String maritalStatus;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "street_address")
    private String streetAddress;

    @Column(name = "street_address_line2")
    private String streetAddressLine2;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "employee_mobile_number")
    private String employeeMobileNumber;

    @Column(name = "employee_email")
    private String employeeEmail;

    @Column(name = "employee_street_address")
    private String employeeStreetAddress;

    @Column(name = "employee_street_address_line2")
    private String employeeStreetAddressLine2;

    @Column(name = "employee_city")
    private String employeeCity;

    @Column(name = "employee_state")
    private String employeeState;

    @Column(name = "employee_nationality")
    private String employeeNationality;

    @Column(name = "employee_postal_code")
    private String employeePostalCode;

    @Column(name = "loan_amount_requested")
    private String loanAmountRequested;

    @Column(name = "loan_purpose")
    private String loanPurpose;

    @Column(name = "loan_term")
    private String loanTerm;

    @Column(name = "loan_type")
    private String loanType;

    @Column(name = "credit_score")
    private String creditScore;

    @Column(name = "credit_history")
    private String creditHistory;

    @Column(name = "co_applicant_personal_info")
    private String coApplicantPersonalInfo;

    @Column(name = "co_applicant_financial_info")
    private String coApplicantFinancialInfo;

    @Column(name = "photo_id")
    private String photoID;

    @Column(name = "proof_of_address")
    private String proofOfAddress;

    @Column(name = "pay_stubs")
    private String payStubs;

    @Column(name = "employment_verification")
    private String employmentVerification;

    @Column(name = "bank_statements")
    private String bankStatements;

    @Column(name = "other_financial_docs")
    private String otherFinancialDocs;

    @Column(name = "terms_conditions_checkbox")
    private boolean termsConditionsCheckbox;

    @Column(name = "loan_agreement_paragraph")
    private String loanAgreementParagraph;

    @Column(name = "summary")
    private String summary;

    @Column(name = "status")
    private String status;

    public LoanApplication(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getStreetAddressLine2() {
        return streetAddressLine2;
    }

    public void setStreetAddressLine2(String streetAddressLine2) {
        this.streetAddressLine2 = streetAddressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getEmployeeMobileNumber() {
        return employeeMobileNumber;
    }

    public void setEmployeeMobileNumber(String employeeMobileNumber) {
        this.employeeMobileNumber = employeeMobileNumber;
    }

    public String getEmployeeEmail() {
        return employeeEmail;
    }

    public void setEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
    }

    public String getEmployeeStreetAddress() {
        return employeeStreetAddress;
    }

    public void setEmployeeStreetAddress(String employeeStreetAddress) {
        this.employeeStreetAddress = employeeStreetAddress;
    }

    public String getEmployeeStreetAddressLine2() {
        return employeeStreetAddressLine2;
    }

    public void setEmployeeStreetAddressLine2(String employeeStreetAddressLine2) {
        this.employeeStreetAddressLine2 = employeeStreetAddressLine2;
    }

    public String getEmployeeCity() {
        return employeeCity;
    }

    public void setEmployeeCity(String employeeCity) {
        this.employeeCity = employeeCity;
    }

    public String getEmployeeState() {
        return employeeState;
    }

    public void setEmployeeState(String employeeState) {
        this.employeeState = employeeState;
    }

    public String getEmployeeNationality() {
        return employeeNationality;
    }

    public void setEmployeeNationality(String employeeNationality) {
        this.employeeNationality = employeeNationality;
    }

    public String getEmployeePostalCode() {
        return employeePostalCode;
    }

    public void setEmployeePostalCode(String employeePostalCode) {
        this.employeePostalCode = employeePostalCode;
    }

    public String getLoanAmountRequested() {
        return loanAmountRequested;
    }

    public void setLoanAmountRequested(String loanAmountRequested) {
        this.loanAmountRequested = loanAmountRequested;
    }

    public String getLoanPurpose() {
        return loanPurpose;
    }

    public void setLoanPurpose(String loanPurpose) {
        this.loanPurpose = loanPurpose;
    }

    public String getLoanTerm() {
        return loanTerm;
    }

    public void setLoanTerm(String loanTerm) {
        this.loanTerm = loanTerm;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public String getCreditScore() {
        return creditScore;
    }

    public void setCreditScore(String creditScore) {
        this.creditScore = creditScore;
    }

    public String getCreditHistory() {
        return creditHistory;
    }

    public void setCreditHistory(String creditHistory) {
        this.creditHistory = creditHistory;
    }

    public String getCoApplicantPersonalInfo() {
        return coApplicantPersonalInfo;
    }

    public void setCoApplicantPersonalInfo(String coApplicantPersonalInfo) {
        this.coApplicantPersonalInfo = coApplicantPersonalInfo;
    }

    public String getCoApplicantFinancialInfo() {
        return coApplicantFinancialInfo;
    }

    public void setCoApplicantFinancialInfo(String coApplicantFinancialInfo) {
        this.coApplicantFinancialInfo = coApplicantFinancialInfo;
    }

    public String getPhotoID() {
        return photoID;
    }

    public void setPhotoID(String photoID) {
        this.photoID = photoID;
    }

    public String getProofOfAddress() {
        return proofOfAddress;
    }

    public void setProofOfAddress(String proofOfAddress) {
        this.proofOfAddress = proofOfAddress;
    }

    public String getPayStubs() {
        return payStubs;
    }

    public void setPayStubs(String payStubs) {
        this.payStubs = payStubs;
    }

    public String getEmploymentVerification() {
        return employmentVerification;
    }

    public void setEmploymentVerification(String employmentVerification) {
        this.employmentVerification = employmentVerification;
    }

    public String getBankStatements() {
        return bankStatements;
    }

    public void setBankStatements(String bankStatements) {
        this.bankStatements = bankStatements;
    }

    public String getOtherFinancialDocs() {
        return otherFinancialDocs;
    }

    public void setOtherFinancialDocs(String otherFinancialDocs) {
        this.otherFinancialDocs = otherFinancialDocs;
    }

    public boolean isTermsConditionsCheckbox() {
        return termsConditionsCheckbox;
    }

    public void setTermsConditionsCheckbox(boolean termsConditionsCheckbox) {
        this.termsConditionsCheckbox = termsConditionsCheckbox;
    }

    public String getLoanAgreementParagraph() {
        return loanAgreementParagraph;
    }

    public void setLoanAgreementParagraph(String loanAgreementParagraph) {
        this.loanAgreementParagraph = loanAgreementParagraph;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public LoanApplication(Long id, String firstName, String lastName, String dateOfBirth, String gender,
            String maritalStatus, String mobileNumber, String email, String streetAddress, String streetAddressLine2,
            String city, String state, String nationality, String postalCode, String employeeMobileNumber,
            String employeeEmail, String employeeStreetAddress, String employeeStreetAddressLine2, String employeeCity,
            String employeeState, String employeeNationality, String employeePostalCode, String loanAmountRequested,
            String loanPurpose, String loanTerm, String loanType, String creditScore, String creditHistory,
            String coApplicantPersonalInfo, String coApplicantFinancialInfo, String photoID, String proofOfAddress,
            String payStubs, String employmentVerification, String bankStatements, String otherFinancialDocs,
            boolean termsConditionsCheckbox, String loanAgreementParagraph, String summary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.streetAddress = streetAddress;
        this.streetAddressLine2 = streetAddressLine2;
        this.city = city;
        this.state = state;
        this.nationality = nationality;
        this.postalCode = postalCode;
        this.employeeMobileNumber = employeeMobileNumber;
        this.employeeEmail = employeeEmail;
        this.employeeStreetAddress = employeeStreetAddress;
        this.employeeStreetAddressLine2 = employeeStreetAddressLine2;
        this.employeeCity = employeeCity;
        this.employeeState = employeeState;
        this.employeeNationality = employeeNationality;
        this.employeePostalCode = employeePostalCode;
        this.loanAmountRequested = loanAmountRequested;
        this.loanPurpose = loanPurpose;
        this.loanTerm = loanTerm;
        this.loanType = loanType;
        this.creditScore = creditScore;
        this.creditHistory = creditHistory;
        this.coApplicantPersonalInfo = coApplicantPersonalInfo;
        this.coApplicantFinancialInfo = coApplicantFinancialInfo;
        this.photoID = photoID;
        this.proofOfAddress = proofOfAddress;
        this.payStubs = payStubs;
        this.employmentVerification = employmentVerification;
        this.bankStatements = bankStatements;
        this.otherFinancialDocs = otherFinancialDocs;
        this.termsConditionsCheckbox = termsConditionsCheckbox;
        this.loanAgreementParagraph = loanAgreementParagraph;
        this.summary = summary;
    }

    public LoanApplication() {
        // Default constructor
    }

}
