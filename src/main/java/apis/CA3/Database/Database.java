/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Database;

//import model account
import apis.CA3.Models.Account;

//import model customer
import apis.CA3.Models.Customer;

//import model transaction
import apis.CA3.Models.Transaction;

//import ArrayList class from java.util
import java.util.ArrayList;

//import Date class from java.util
import java.util.Date;

//import List class from java.util
import java.util.List;

/**
 *
 * @author x19183500
 */
// Fake database class to store Customers, Accounts and Transactions
public class Database {
    // variable to store transactions    
    private static final List<Transaction> TRANSACTIONS = new ArrayList<>();
    // variable to store accounts
    private static final List<Account> ACCOUNTS = new ArrayList<>();
    // variable to store customers
    private static final List<Customer> CUSTOMERS = new ArrayList<>();
    
    // boolean variable to check if lists are populated
    private static boolean populated = false;
 
    // default constructor
    public Database(){
        // populate the lists if not populated
        if(!populated)
            populate();
    }
    
    // getter to retrieve list of accounts
    public List<Account> getAccountsDB(){
        // return list of accounts
        return ACCOUNTS;
    }

    // getter to retrieve list of transactions
    public List<Transaction> getTransactionsDB(){
        // return list of transactions
        return TRANSACTIONS;
    }
    
    // getter to retrieve list of customers
    public List<Customer> getCustomerDB(){
        // return list of customers
        return CUSTOMERS;
    }
    
    // function that will populate the db
    private void populate(){
        // skip if populated 
        if(populated)
            return;
        
        // set populated to true
        populated = true;
        
        // create a customer
        Customer c = new Customer();
        // set name of the customer
        c.setName("John Doe");
        // set email of the customer
        c.setEmail("john@student.ncirl.ie");
        // set address of the customer
        c.setAddress("25 Talbot St");
        // set password of the customer
        c.setPassword("123123123");
        
        // add customer to the "database"
        add(c);
        
        // add new account to customer and store on the "database"
        add(c, new Account("90-66-30"));

        // add new account to customer and store on the "database"
        add(c, new Account("90-66-30", "Savings"));

        // add new account to customer and store on the "database"
        add(c, new Account("90-66-30", "Credit Card"));

        // create another customer
        c = new Customer();
        
        // set new customer name
        c.setName("Mary Jane");
        
        // set new customer email
        c.setEmail("mary@student.ncirl.ie");
        
        // set new customer password
        c.setPassword("123123123");
        
        // add customer to the "database"
        add(c);
        
        // add new account to customer and store on the "database"
        add(c, new Account("90-66-30"));

        // add new account to customer and store on the "database"
        add(c, new Account("90-66-30", "Savings"));
    }
     
    // function to set id and add received customer into the customers list
    public Customer add(Customer c){
        // set id of the customer with the size of the customers list + 1
        c.setId(CUSTOMERS.size() + 1);
        
        // add customer into the customer list
        CUSTOMERS.add(c);
        
        // return customer
        return c;
    }

    // function to set id, customer, calculate the number and add received account to informed customer and insert it into the accounts list
    public Account add(Customer c, Account a){
        // set account's customer id to the informed customer
        a.setCustomerID(c.getId());
        
        // set id of the account with the size of the accounts list + 1
        a.setId(ACCOUNTS.size() + 1);
        
        // if account do not ghave an assigned number yet
        if(a.getNumber() == null){
            // get the sort code
            String code = a.getSortCode();
            // start a counter i from 1 (if no accounts found number would be 000001)
            int i = 1;
            // iterate through all accounts
            for(Account _a : ACCOUNTS){
                // if _a sort code matched the sort code from the informed account increment i on the counter i
                if(_a.getSortCode().equals(code)) 
                    i++;
            }
            // after counting all accounts with the same sort code set number as the counter i
            a.setNumber(i);
        }
        // add informed account into accounts list
        ACCOUNTS.add(a);
        // add informed account into informed customer
        c.appendAccount(a);
        // return informed account
        return a;
    }
    
    // function to store transactions
    public Transaction add(Account a, Transaction t){
        // set account id on the transaction      
        t.setAccountID(a.getId());
        // set created at date on the transaction
        t.setCreated(new Date());
        // set transaction id
        t.setId(TRANSACTIONS.size()+1);
        
        // append transaction into list        
        TRANSACTIONS.add(t);
        // append transaction into account
        a.appendTransaction(t);  
        // return transaction
        return t;
    }
}
