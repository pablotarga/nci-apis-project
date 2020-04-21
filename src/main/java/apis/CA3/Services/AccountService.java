 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Services;

import apis.CA3.Database.Database;
import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Models.Transaction;
import apis.CA3.Params.NewAccountParams;
import apis.CA3.Params.NewTransactionParams;
import apis.CA3.Params.TransferParams;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author x19183500
 */
public class AccountService {
    // fake database instance
    private static final Database DB = new Database();
    // customer service to find authenticated user
    private static final CustomerService AUTH = new CustomerService();   
    // sttribute customer
    private Customer customer;
    
    // encapsulation to call database method
    public Account add(Customer c, Account a){ 
        // store the account in the database
        a = DB.add(c, a);
        return a; //return the account
    }
    
    // method to load the customer into the service
    public AccountService withCustomer(int customerId){
        // call withCustomer informing the customer returned from the CustomerService.findById
        return withCustomer(AUTH.findById(customerId));
    }
    
    // set the customer attribute with a customer
    public AccountService withCustomer(Customer customer){
        // the the customer attribute
        this.customer = customer;
        // return the service instance to chain
        return this;
    }
    
    // method to check if customer present
    public boolean isAuthenticated(){
        // chec if attribute customer is not null
        return this.customer != null;
    }
    
    // search method that will return a list of accounts
    public List<Account> search(){
        // if isAuthenticated return the list of accounts attached to the customer otherwise the complete list of accounts
        return this.isAuthenticated() ? this.customer.getAccounts() : DB.getAccountsDB();
    }
    
    // search method that can filter accounts by sortCode
    public List<Account> search(String sortCode){
        // call search(sortCode, number, list) passing the sort code, null as number and result of search() as list
        return search(sortCode, null, search());
    }
    
    // search method that can filter accounts by sortCode and number
    public List<Account> search(String sortCode, String number){
        // call search(sortCode, number, list) passing the sort code, number and result of search() as list
        return search(sortCode, number, search());
    }
    
    // search method that can filter accounts by sortCode, number and a list of accounts 
    public List<Account> search(String sortCode, String number, List<Account> list){
        // initialize a new list (results)
        List<Account> results = new ArrayList<>();
        // traverse the list
        for(Account a : list)
            if(a.match(sortCode, number)) // if match sortCode and number include account in the results
                results.add(a);
        
        // return the filtered accounts
        return results;
    }
    
    // find account by id
    public Account find(int id){
        // call find function that receives a list with the response of search()
        return find(id, search());
    }
    
    // find account by id among informed accounts
    public Account find(int id, List<Account> list){
        // traverse informed list and return if id matches
        for(Account a : list)
            if(a.getId() == id)
                return a;
        
        // return null if not found
        return null;
    }

    // find by sortCode and number
    public Account find(String sortCode, String number){
        // call find function that receives sortCode, number and list
        return find(sortCode, number, search());
    }

    // find by sortCode and number among informed accounts
    public Account find(String sortCode, String number, List<Account> list){
        // traverse informed list and return if sortCode and number matches
        for(Account a : list)
            if(a.getSortCode().equals(sortCode) && a.getNumber().equals(number))
                return a;
        
        // return null if not found
        return null;
    }
    
    // method that create a withdrawal, if customer authenticated and account found
    public Transaction withdrawal(int id, NewTransactionParams p){
        // check if customer is informed
        if(this.isAuthenticated()){
            // try to find the account using find method passing the received id
            Account a = this.find(id);
            
            // if account is present call withdrawal method passing the account and the NewTransactionParams 
            if(a != null)
                return this.withdrawal(a, p);
        }
        
        // if not authenticated or account not found as customer account return null
        return null;
    }
    
    // method that create a withdrawal, if NewTransactionParams are present and valid
    public Transaction withdrawal(Account a, NewTransactionParams p){
        // check if params are informed and if they are valid
        if(p != null && p.isValid())
            return withdrawal(a, p.amount, p.description); // call withdrawal passing the account, amount and description
        
        //otherwise return null
        return null;
    }
    
    // method that create a withdrawal, with default description
    public Transaction withdrawal(Account a, double amount){
        // call withdrawal with description set to null
        return withdrawal(a, amount, null);
    }
    
    // real method that will check account and create a new Transaction with received arguments
    public Transaction withdrawal(Account a, double amount, String description){
        // check if account has sufficient funds
        if(a.getBalance() < amount)
            return null; // return null if not enough

        // check if description is null or empty ""
        if(description == null || description.trim().isEmpty())
            description = "Withdrawal"; // set default description to Withdrawal
        
        // get post balance (account balance - amount)
        double bal = a.getBalance() - amount;
        // change the balance on the account
        a.setBalance(bal);
        // create a new d transaction, with informed amount, description and account post balance
        Transaction t = new Transaction('d', amount, description.trim(), bal);
        // store transaction to database
        return DB.add(a, t);
    }
    
    // method that create a lodge, if customer is authenticated and account found
    public Transaction lodge(int id, NewTransactionParams p){
        // check if customer is informed
        if(this.isAuthenticated()){
            // try to find the account using find method passing the received id
            Account a = this.find(id);
            
            // if account is present call lodge method passing the account and the NewTransactionParams 
            if(a != null)
                return this.lodge(a, p);
        }

        // if not authenticated or account not found as customer account return null
        return null;
    }
    
    // method that create a lodge, if NewTransactionParams are present and valid
    public Transaction lodge(Account a, NewTransactionParams p){
        // check if params are informed and if they are valid
        if(p != null && p.isValid())
            return lodge(a, p.amount, p.description); // call lodge passing the account, amount and description
        
        //otherwise return null
        return null;
    }
    
    // method that create a lodge, with default description
    public Transaction lodge(Account a, double amount){
        // call lodge with description set to null
        return lodge(a, amount, null);        
    }
    
    // real method that will check account and create a new Transaction with received arguments
    public Transaction lodge(Account a, double amount, String description){
        // check if description is null or empty ""
        if(description == null || description.trim().isEmpty())
            description = "Lodgement"; // set default description to Lodgement

        // get post balance (account balance - amount)
        double bal = a.getBalance() + amount;
        // change the balance on the account
        a.setBalance(bal);
        // create a new c transaction, with informed amount, description and account post balance
        Transaction t = new Transaction('c', amount, description.trim(), bal);
        // store transaction to database
        return DB.add(a, t);
    }
        
    // method that create a transfer, if customer is authenticated and account found
    public List<Transaction> transfer(int id, TransferParams tp){
        // check if customer is informed
        if(this.isAuthenticated()){
            // try to find the account using find method passing the received id
            Account a = this.find(id);

            // if account is present call lodge method passing the account and the NewTransactionParams 
            if(a != null)
                return this.transfer(a, tp);
        }

        // if not authenticated or account not found as customer account return null
        return null;
    }
    
    // method that create a transfer, if TransferParams are present and valid
    public List<Transaction> transfer(Account a, TransferParams tp){
        // check if params are null or if they are invalid return null  
        if(tp == null || !tp.isValid())
            return null;
        
        // try to load the account from the params (can be informed a targetId or sortCode and Number) in both cases can browse the entire database (not only accounts of the customer)
        Account b = (tp.targetid != 0) ? find(tp.targetid, DB.getAccountsDB()) : find(tp.sortCode, tp.number, DB.getAccountsDB());
        
        // call transfer method with origin account "a", target account "b" and amount
        return transfer(a, b, tp.amount);
    }
    
    
//    public List<Transaction> transfer(Customer c, int accountId, String sortCode, String number, double amount){
//        Account origin = find(accountId, c.getAccounts());
//        Account target = find(sortCode, number);
//        
//        return transfer(origin, target, amount);
//    }
    
    // real method that will check the accounts and create 1 debit transaction on account "a" and a credit transaction on account "b"
    public List<Transaction> transfer(Account a, Account b, double amount){
        // return null if a and b are the same account or any of them are null
        if(a == b || a == null || b == null)
            return null;
        
        // try to withdraw (this may not happen if a has insufficient funds)
        Transaction t1 = this.withdrawal(a, amount, "Transfer to acc. "+b.toString());
        
        // return if withdrawal fails
        if(t1 == null)
            return null;
        
        // place the lodgement
        Transaction t2 = this.lodge(b, amount, "Transfer from acc. "+a.toString());
        
        // initialize a list to return
        List<Transaction> list = new ArrayList<>();

        // add the withdrawal to return list
        list.add(t1); 
        // check if the customer from the account a is the same as the customer in the account b
        if(a.getCustomerID() == b.getCustomerID())
            list.add(t2); // add to return list if the customer is the same
        
        // return list of transaction visibles to the customer
        return list;
    }

    // method that creates a new account, if customer is authenticated and params are valid
    public Account openaccount(NewAccountParams np){
        // check if user is authenticated and params are informed and valid
        if(this.isAuthenticated() && np != null && np.isValid())
            return this.openaccount(customer, np); // call openaccount with authenticated customer and params
        else
            return null; // return null otherwise
    }
     
    // method that creates a new account if params are valid
    public Account openaccount(Customer c, NewAccountParams np) {
        // return null if params are invalid
        if(!np.isValid())
            return null;
        
        // call openaccount with customer, sortCode and title
        return openaccount(c, np.sortCode, np.title); 
    }
    
    public Account openaccount(Customer c, String sortCode, String title) {
        // create a new instance of account and store into database 
        return DB.add(c, new Account(sortCode, title));   
    }

}
