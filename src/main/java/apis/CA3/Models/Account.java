/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// define the package
package apis.CA3.Models;

//import ArrayList class from java.util
import java.util.ArrayList;

//import List class from java.util
import java.util.List;

/**
 *
 * @author x19182121
 */
// Account model will hold information about the account
public class Account{
    // variable to store account's id
    private int id;
    // variable to store account's customer id
    private int customerID;
    // variable to store account's sort code
    private String sortCode;
    // variable to store account's number
    private String number;
    // variable to store account's balance
    private double balance;
    // variable to store account's title
    private String title;
    // variable to store account's transactions
    private List<Transaction> transactions = new ArrayList<>();
    
    // default contructor doing nothing    
    public Account() {
    }
    
    // constructor that receives sortCode
    public Account(String sortCode){
        // call constructor with received sort code and the title "Current"
        this(sortCode, "Current");
    }
    
    // constructor that receives sortCode and title
    public Account(String sortCode, String title){
        // set sort code
        this.sortCode = sortCode;
        // set title
        this.title = title;
        // set balance to 0
        this.balance = 0;
    }
    
    // getter to retrieve the account id
    public int getId() {   
        // return the attribute id
        return id;
    }

    // setter to set the account id
    public void setId(int id) {
        // set attribute id with informed id
        this.id = id;
    }

    // getter to retrieve the customer id
    public int getCustomerID() {
        // return attribute customer id
        return customerID;
    }

    // setter to set the customer id
    public void setCustomerID(int customerID) {
        // set attribute customer id with informed customer id
        this.customerID = customerID;
    }

    // getter to retrieve sort code
    public String getSortCode() {
        // return attribute sort code
        return sortCode;
    }

    // setter to set the sort code
    public void setSortCode(String sortCode) {
        // set attribute sort code with informed sort code
        this.sortCode = sortCode;
    }

    // getter to retrieve number
    public String getNumber() {
        // return attribute number
        return number;
    }

    // setter to set number as string
    public void setNumber(String number) {
        // set attribute with informed number
        this.number = number;
    }

    // setter to set number as int
    public void setNumber(int number) {
        // call setter as string passing the informed int formatted to start with 0's
        this.setNumber(String.format("%05d",number));
    }

    // getter to retrieve the balance
    public double getBalance() {
        // return the attribute balance
        return balance;
    }

    // setter to set the balance
    public void setBalance(double balance) {
        // set attribute balance with informed balance
        this.balance = balance;
    }

    // getter to retrieve the list of transactions
    public List<Transaction> getTransactions() {
        // return attribute transactions (list of transactions)
        return transactions;
    }
    
    // setter to set transactions
    public void setTransactions(List<Transaction> transactions) {
        // set attributes transactions with informed list of transactions
        this.transactions = transactions;
    }
    
    // method to append transaction into list of transactions
    public void appendTransaction(Transaction t){
        // append informed transaction t into list of transactions (attribute transactions)
        transactions.add(t);
    }
    
    // getter to retrieve the title
    public String getTitle() {
        // return the attribute title
        return title;
    }

    // setter to set the title
    public void setTitle(String title) {
        // set the attribute title with the informed title
        this.title = title;
    }
    
    // overriding function toString, to format object as a string
    @Override
    public String toString(){
        // Return a string with the desired format sort code -> number
        return String.format("%s -> %s", getSortCode(), getNumber());
    }
    
    // function to check if current object matches informed sortCode and number
    public boolean match(String sortCode, String number){
        // verify if sort code is present, and if it is check against the instance sort code do same verification with the number
        return (sortCode == null || getSortCode().equals(sortCode)) && (number == null || getNumber().equals(number));
    }
}
