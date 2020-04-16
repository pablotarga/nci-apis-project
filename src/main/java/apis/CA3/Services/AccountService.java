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
    private static final Database DB = new Database();
    private static final CustomerService AUTH = new CustomerService();
    
            
    private Customer customer;
    
    public Account add(Customer c, Account a){ 
        a = DB.add(c, a);
        return a;
    }
    
    
    public AccountService withCustomer(int customerId){
        return withCustomer(AUTH.findById(customerId));
    }

    public AccountService withCustomer(Customer customer){
        this.customer = customer;
        return this;
    }
    
    public boolean isAuthenticated(){
        return this.customer != null;
    }
    
  
    public List<Account> search(){
        return this.isAuthenticated() ? this.customer.getAccounts() : DB.getAccountsDB();
    }
    
    public List<Account> search(String sortCode){
        return search(sortCode, null, search());
    }
    
    public List<Account> search(String sortCode, String number){
        return search(sortCode, number, search());
    }
    
    public List<Account> search(String sortCode, String number, List<Account> list){
        List<Account> results = new ArrayList<>();
        for(Account a : list)
            if(a.match(sortCode, number))
                results.add(a);
        
        return results;
    }
    
    
    public Account find(int id){
        return find(id, search());
    }
    
    public Account find(int id, List<Account> list){
        for(Account a : list)
            if(a.getId() == id)
                return a;
        
        return null;
    }

    public Account find(String sortCode, String number){
        return find(sortCode, number, search());
    }

    public Account find(String sortCode, String number, List<Account> list){
        for(Account a : list)
            if(a.getSortCode().equals(sortCode) && a.getNumber().equals(number))
                return a;
        
        return null;
    }
    
    
    public Transaction withdrawal(int id, NewTransactionParams p){
        if(this.isAuthenticated()){
            Account a = this.find(id);
            
            if(a != null)
                return this.withdrawal(a, p);
        }
            
        return null;
    }
    
    public Transaction withdrawal(Account a, NewTransactionParams p){
        if(p != null && p.isValid())
            return withdrawal(a, p.amount, p.description);
        
        return null;
    }
    
    public Transaction withdrawal(Account a, double amount){
        return withdrawal(a, amount, null);
    }

    public Transaction withdrawal(Account a, double amount, String description){
        if(a.getBalance() < amount){
            return null;
        }
        
        if(description == null){
            description = "Withdrawal";
        }

        double bal = a.getBalance() - amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('d', amount, description, bal);
        return DB.add(a, t);
    }
    
    
    public Transaction lodge(int id, NewTransactionParams p){
        if(this.isAuthenticated()){
            Account a = this.find(id);
            
            if(a != null)
                return this.lodge(a, p);
        }
        return null;
    }
    
    public Transaction lodge(Account a, NewTransactionParams p){
        if(p != null && p.isValid())
            return lodge(a, p.amount, p.description);
        
        return null;
    }
    
    public Transaction lodge(Account a, double amount){
        return lodge(a, amount, null);
        
    }
    
    public Transaction lodge(Account a, double amount, String description){
        if(description == null){
            description = "Lodgement";
        }
        double bal = a.getBalance() + amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('c', amount, description, bal);
        return DB.add(a, t);
    }
    
    
    public List<Transaction> transfer(int id, TransferParams tp){
        if(this.isAuthenticated()){
            Account a = this.find(id);
            if(a != null)
                this.transfer(a, tp);
        }
        
        return null;
    }
    
    public List<Transaction> transfer(Account a, TransferParams tp){
        if(tp == null || !tp.isValid())
            return null;
        
        Account b = (tp.targetid != 0) ? find(tp.targetid) : find(tp.sortCode, tp.number);
        return transfer(a, b, tp.amount);
    }
    
    public List<Transaction> transfer(Customer c, int accountId, String sortCode, String number, double amount){
        Account origin = find(accountId, c.getAccounts());
        Account target = find(sortCode, number);
        
        return transfer(origin, target, amount);
    }
    
    public List<Transaction> transfer(Account a, Account b, double amount){
        if(a == b || a == null || b == null){
            return null;
        }
        
        if(a.getBalance() < amount){
            return null;
        }
        
        List<Transaction> list = new ArrayList<>();

        Transaction t1 = this.withdrawal(a, amount, "Transfer to acc. "+b.toString());
        if(t1 == null)
            return null;
        
        Transaction t2 = this.lodge(b, amount, "Transfer from acc. "+a.toString());

        list.add(t1);
        if(a.getCustomerID() == b.getCustomerID()){
            list.add(t2);
        }
        
        return list;
    }

    
    public Account openaccount(NewAccountParams np){
        if(this.isAuthenticated() && np != null && np.isValid())
            return this.openaccount(customer, np);
        else
            return null;        
    }
            
    public Account openaccount(Customer c, NewAccountParams np) {
        if(!np.isValid())
            return null;
        
        return openaccount(c, np.sortCode, np.title);
    }
    
    public Account openaccount(Customer c, String sortCode, String title) {
        return DB.add(c, new Account(sortCode, title));   
    }

}
