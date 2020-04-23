/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Services;

import apis.CA3.Database.Database;
import apis.CA3.Models.Account;
import apis.CA3.Models.Transaction;
import java.util.List;

/**
 *
 * @author x19182121
 */
public class TransactionService {
    //private static final Database DB = new Database();
    // list of transaction stored in the database
    private List<Transaction> tlist = new Database().getTransactionsDB();
    
    // accounts service, to check customer and load account
    private AccountService accounts = new AccountService();
    
    // get all list of transactions
    public List<Transaction>getAllTransactions() {
        return tlist;
    }
    
    // find transaction by id
    public Transaction getTransactionByID(long id) {
        // cast long into int
        int i = Math.toIntExact(id);
        
        // get transaction by the index
        return tlist.get(i-1);
    }
    
    // get all trasactions from informed customer & account
    public List<Transaction> getAllTransactions(int cid, int accountId){
        // set the customer on the account service and check if the customer is present
        if(accounts.withCustomer(cid).isAuthenticated()){
            // find the account among the customer accounts
            Account a = accounts.find(accountId);
            
            // if account is found return all transaction attached to it
            if(a!=null){
                return a.getTransactions();
            }
        }
        
        // otherwise return null
        return null;
      
    } 
    
    // return transaction with id from informed customer + account
    public Transaction getTransaction(int cid, int accountId, int id){
        // get all transactions from the customer + account (DRY)
        List<Transaction> list = getAllTransactions(cid, accountId);
        
        // if list is present (passed authentication & account was found)
        if (list!=null){
            // traverse the list of transactions checking id by id, return transaction if ids match
            for(Transaction t : list){
                if(t.getId()==id){
                    return t;
                }
            }
        } 
        
        // otherwise return null
        return null;
    } 
}
