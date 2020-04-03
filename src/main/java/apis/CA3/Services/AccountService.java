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
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author x19183500
 */
public class AccountService {
    private static final Database DB = new Database();
    
    public Account add(Customer c, Account a){ 
        a = DB.add(c, a);
        return a;
    }
    
    
    
    public List<Account> search(){
        return DB.getAccountsDB();
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
    
    
    
    public boolean withdrawal(Account a, double amount) throws Exception{
        if(a.getBalance() < amount){
            throw new Exception("Insuficient funds");
        }
        
        double bal = a.getBalance() - amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('d', amount, "withdrawal", bal);
        DB.add(a, t);
        return true;
    }
    
    public boolean logde(Account a, double amount){
        double bal = a.getBalance() + amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('c', amount, "lodgement", bal);
        DB.add(a, t);
        
        return true;
    }
    
    public boolean transfer(Account a, Account b, double amount) throws Exception{
        if(a == b){
            throw new Exception("Different accounts needed for transfering funds");
        }
        
        if(a.getBalance() < amount){
            throw new Exception("Insuficient funds");
        }
        
        double bal;
        Transaction t;

        bal = a.getBalance() - amount;
        a.setBalance(bal);
        t = new Transaction('d', amount, "Transfer to acc. "+b.toString(), bal);
        DB.add(a, t);

        bal = b.getBalance() + amount;
        b.setBalance(bal);
        t = new Transaction('c', amount, "Transfer from acc. "+a.toString(), bal);
        DB.add(b, t);
        
        return true;
    }

    public boolean transfer(Customer c, int accountId, String sortCode, String number, double amount) throws Exception{
        Account origin = find(accountId, c.getAccounts());
        Account target = find(sortCode, number);
        
        if(origin == null || target == null)
            throw new Exception("Account not found");
        
        return transfer(origin, target, amount);
    }
}
