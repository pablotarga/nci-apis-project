/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Database;

import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Models.Transaction;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author x19183500
 */
public class Database implements Serializable {
    private static final List<Transaction> TRANSACTIONS = new ArrayList<>();
    private static final List<Account> ACCOUNTS = new ArrayList<>();
    private static final List<Customer> CUSTOMERS = new ArrayList<>();
    
    private static boolean populated = false;
 
    
    public Database(){
        if(!populated)
            populate();
    }
    
    public List<Account> getAccountsDB(){
        return ACCOUNTS;
    }

    public List<Transaction> getTransactionsDB(){
        return TRANSACTIONS;
    }
    
    public List<Customer> getCustomerDB(){
        return CUSTOMERS;
    }
    
    private void populate(){
        if(populated)
            return;
        
        populated = true;
        
        Customer c = new Customer();
        c.setName("John Doe");
        c.setEmail("john@student.ncirl.ie");
        c.setPassword("123123123");
        
        add(c);
        add(c, new Account("90-66-30"));
        add(c, new Account("90-66-30", "Savings"));
        add(c, new Account("90-66-30", "Credit Card"));


        c = new Customer();
        c.setName("Mary Jane");
        c.setEmail("mary@student.ncirl.ie");
        c.setPassword("123123123");
        
        add(c);
        add(c, new Account("90-66-30"));
        add(c, new Account("90-66-30", "Savings"));
    }
     
    public Customer add(Customer c){
        c.setId(CUSTOMERS.size() + 1);
        CUSTOMERS.add(c);
        return c;
    }

    public Account add(Customer c, Account a){
        a.setCustomerID(c.getId());
        a.setId(ACCOUNTS.size() + 1);
        
        if(a.getNumber() == null){
            String code = a.getSortCode();
            int i = 1;
            for(Account _a : ACCOUNTS)
                if(_a.getSortCode().equals(code)) 
                    i++;
            a.setNumber(i);
        }
        
        ACCOUNTS.add(a);
        c.appendAccount(a);
                
        return a;
    }
    
    public Transaction add(Account a, Transaction t){
        // set id, fks and created at       
        t.setAccountID(a.getId());
        t.setCreated(new Date());
        t.setId(TRANSACTIONS.size()+1);
        
        // append transaction into list        
        TRANSACTIONS.add(t);
        a.appendTransaction(t);    
        return t;
    }
}
