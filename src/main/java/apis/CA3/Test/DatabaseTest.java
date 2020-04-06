/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Test;

import apis.CA3.Database.Database;
import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;

/**
 *
 * @author x19183500
 */
public class DatabaseTest {
    public static void main(String[] args){
        Database db = new Database();
        
        for(Customer a : db.getCustomerDB()){
            System.out.println(a.toJson());
        }

        
        for(Account a : db.getAccountsDB()){
            System.out.println("Acc : " + a.toString() + ", " + a.getTitle() + " -> " + a.getBalance());
        }
    }
}
