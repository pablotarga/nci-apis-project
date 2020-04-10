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
import apis.CA3.Params.TransferParams;
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
    
    
    
    public Transaction withdrawal(Account a, double amount){
        if(a.getBalance() < amount){
            return null;
        }
        
        double bal = a.getBalance() - amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('d', amount, "withdrawal", bal);
        return DB.add(a, t);
        
    }
    
    public Transaction logde(Account a, double amount){
        double bal = a.getBalance() + amount;
        
        a.setBalance(bal);
        Transaction t = new Transaction('c', amount, "lodgement", bal);
        return DB.add(a, t);
        
    }
    
    public List<Transaction> transfer(Account a, Account b, double amount){
        
        if(a == b || a == null || b == null){
            return null;
        }
        
        if(a.getBalance() < amount){
            return null;
        }
        
        List<Transaction> list = new ArrayList<>();
        double bal;
       

        bal = a.getBalance() - amount;
        a.setBalance(bal);
        Transaction t1 = new Transaction('d', amount, "Transfer to acc. "+b.toString(), bal);
        DB.add(a, t1);

        bal = b.getBalance() + amount;
        b.setBalance(bal);
        Transaction t2 = new Transaction('c', amount, "Transfer from acc. "+a.toString(), bal);
        DB.add(b, t2);
        list.add(t1);
        if(a.getCustomerID() == b.getCustomerID()){
            list.add(t2);
        }
        
        return list;
    }

    public List<Transaction> transfer(Customer c, int accountId, String sortCode, String number, double amount) throws Exception{
        Account origin = find(accountId, c.getAccounts());
        Account target = find(sortCode, number);
        
        if(origin == null || target == null)
            throw new Exception("Account not found");
        
        return transfer(origin, target, amount);
    }
    
    public List<Transaction> transfer(Account a, TransferParams tp){
        Account b;
        if(tp.targetid!=0){
            b = find(tp.targetid);
        }else {
            b = find(tp.sortCode, tp.number);
        }
        return transfer(a, b, tp.amount);
    }
    
    public Account openaccount(Customer c, NewAccountParams np) {
        if(!np.isValid())
            return null;
        
        return openaccount(c, np.sortCode, np.title);
    }
    
    public Account openaccount( Customer c, String sortCode, String title) {
        return DB.add(c, new Account(sortCode, title));   
    }
}
