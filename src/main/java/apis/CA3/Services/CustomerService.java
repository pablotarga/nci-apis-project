/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Services;

import apis.CA3.Database.Database;
import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Params.AuthParams;
import apis.CA3.Params.RegistrationParams;
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
    
    public Customer findById(int id){
        for(Customer c: search()){
            if(c.getId() == id){
                return c;
            }
        }
        return null;
        
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
    
    public Customer login(AuthParams params){
        return login(params.email, params.password);
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
    
    public Customer register(RegistrationParams p){
        if(!p.isValid())
            return null;
        
        return register(p.name, p.address, p.sortCode, p.email, p.password);
    }
    
    public Customer register(String name, String address, String sortCode, String email, String password){
        // check if already registered        
        if(find(email) != null)
            return null;
        
        Customer c = new Customer(name, address, email, password);
        
        // Add customer to DB        
        DB.add(c);
        
        // Add current account to customer
        DB.add(c, new Account(sortCode));
        
        return c;
    }
}
        
        
       
    

