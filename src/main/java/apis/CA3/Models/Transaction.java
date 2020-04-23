/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Models;

// import Date class from java.util
import java.util.Date;

/**
 *
 * @author x19182121
 */
// class to represent the Account transactions
public class Transaction {
    
    //attribute to store the id
    private int id;
    //attribute to store the account id
    private int accountID;
    //attribute to store the type 'd' for debit and 'c' for credit
    private char type;
    //attribute to store the creation date
    private Date created;
    //attribute to store the amount (value)
    private double amount;
    //attribute to store the account's post balance
    private double postBalance;
    //attribute to store the description
    private String description;

    // getter to retrieve the description
    public String getDescription() {
        // return the attribute description
        return description;
    }
    
    // setter to set description
    public void setDescription(String description) {
        // set the attribute description with informed description
        this.description = description;
    }
    
    public Transaction() {
    }
    
    public Transaction(char type, double amount, String description, double postBalance){
        this.type = type;
        this.amount = amount;
        this.postBalance = postBalance;
        this.description = description;
    }

    // getter to retrieve the id
    public int getId() {
        // return the attribute id
        return id;
    }

    // setter to set id
    public void setId(int id) {
        // set the attribute id with informed id
        this.id = id;
    }

    // getter to retrieve the account id
    public int getAccountID() {
        // return the attribute account id
        return accountID;
    }

    // setter to set account id
    public void setAccountID(int accountID) {
        // set the attribute account id with informed account id
        this.accountID = accountID;
    }

    // getter to retrieve the type
    public char getType() {
        // return the attribute type
        return type;
    }

    // setter to set type
    public void setType(char type) {
        // set the attribute type with informed type
        this.type = type;
    }

    // getter to retrieve the created
    public Date getCreated() {
        // return the attribute created
        return created;
    }

    // setter to set created
    public void setCreated(Date created) {
        // set the attribute created with informed created
        this.created = created;
    }

    // getter to retrieve the amount
    public double getAmount() {
        // return the attribute amount
        return amount;
    }

    // setter to set amount
    public void setAmount(double amount) {
        // set the attribute amount with informed amount
        this.amount = amount;
    }

    // getter to retrieve the post balance
    public double getPostBalance() {
        // return the attribute post balance
        return postBalance;
    }

    // setter to set post balance
    public void setPostBalance(double postBalance) {
        // set the attribute psot balance with informed post balance
        this.postBalance = postBalance;
    }
      
}
