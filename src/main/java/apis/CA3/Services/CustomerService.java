/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Services;

import apis.CA3.Database.Database;
import apis.CA3.Models.Customer;
import java.util.List;

/**
 *
 * @author x19182121
 */
public class CustomerService {
    
    private static final Database DB = new Database();
    
    
    public Customer add(Customer c){
        c = DB.add(c);
        return c;
    }
    
    public Customer find(String email){
        for(Customer c: search()){
            if(c.getEmail().equals(email)){
                return c;
            }
        }
        return null;
        
    }
    
    public List<Customer> search(){
        return DB.getCustomerDB();
    }
    
    public Customer login(String email, String secret){
        
    
        if(email == null)
            return null;
        
        Customer c = find(email);
        
        if(c == null)
            return null;
        if(c.authenticate(secret))
            return c;
        else
            return null;
    }
}
        
        
       
    

