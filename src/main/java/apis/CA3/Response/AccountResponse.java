/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Response;
import apis.CA3.Models.Account;

/**
 *
 * @author x19183500
 */
public class AccountResponse {
    public int id;  
    public String sortCode;
    public String number;
    public double balance;
    public String title;
            
    public AccountResponse(Account a){
        id = a.getId();
        sortCode = a.getSortCode();
        number = a.getNumber();
        balance = a.getBalance();
        title = a.getTitle();
    }
}
