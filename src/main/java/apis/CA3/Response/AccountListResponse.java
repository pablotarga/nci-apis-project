/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Response;

import java.util.List;
import apis.CA3.Models.Account;
import java.util.ArrayList;


/**
 *
 * @author x19183500
 */
public class AccountListResponse {
    public List<AccountResponse> list;
    
    AccountListResponse(List<Account> l){
        list = new ArrayList<>();
        
        for(Account a : l)
            list.add( new AccountResponse(a) );
    }
}
