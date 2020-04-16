/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Services;

import apis.CA3.Database.Database;
import apis.CA3.Models.Transaction;
import java.util.List;

/**
 *
 * @author x19182121
 */
public class TransactionService {
    private static final Database DB = new Database();
    private List<Transaction> tlist = new Database().getTransactionsDB();
    
     public List<Transaction>getAllTransactions() {
        return tlist;
    }
    
    public Transaction getTransactionByID(long id) {
        int i = Math.toIntExact(id);
        return tlist.get(i-1);
    }
    
    
    
}
