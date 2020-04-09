/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Models;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author x19182121
 */
public class Account{
    private int id;
    private int customerID;
    private String sortCode;
    private String number;
    private double balance;
    private String title;
    private List<Transaction> transactions = new ArrayList<>();
    
    public Account() {
    }
    
    public Account(String sortCode){
        this(sortCode, "Current");
    }
    
    public Account(String sortCode, String title){
        this.sortCode = sortCode;
        this.title = title;
        this.balance = 0;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getSortCode() {
        return sortCode;
    }

    public void setSortCode(String sortCode) {
        this.sortCode = sortCode;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setNumber(int number) {
        this.number = String.format("%05d",number);
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
    
    public void appendTransaction(Transaction t){
        transactions.add(t);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    @Override
    public String toString(){
        return String.format("%s -> %s", getSortCode(), getNumber());
    }
    
    public boolean match(String sortCode, String number){
        return (sortCode == null || getSortCode().equals(sortCode)) && (number == null || getNumber().equals(number));
    }
}
