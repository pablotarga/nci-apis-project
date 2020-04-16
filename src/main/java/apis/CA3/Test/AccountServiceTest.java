/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Test;

import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Services.AccountService;

/**
 *
 * @author x19183500
 */
public class AccountServiceTest {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        // TODO code application logic here
        AccountService s = new AccountService();
        Account a1,a2,a3,a4;
        Customer c = new Customer();
        c.setName("Pablo");
                
        a1 = s.add(c, new Account("33-00-22"));
        s.lodge(a1, 1500);
        s.withdrawal(a1, 15.67);
        
        a2 = s.add(c, new Account("33-00-22", "Savings"));
        s.transfer(a1, a2, 500);

        a3 = s.add(c, new Account("33-99-22", "Credit Card"));
        a4 = s.add(c, new Account("33-00-22", "Investments"));
        s.transfer(a1, a4, 80);
        
        for(Account a : c.getAccounts()){
            System.out.println(a.getTitle() + " (" + a + ") : " + a.getBalance() );
        }
    }
    
}
