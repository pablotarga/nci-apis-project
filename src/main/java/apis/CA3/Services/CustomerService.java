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
    
    // fake database instance
    private static final Database DB = new Database();
    
    
    // encapsulation to call database method
    public Customer add(Customer c){
        c = DB.add(c);
        return c;
    }
    
    // method to find customer by id
    public Customer findById(int id){
        // traverse the result of search and check id by id, return customer when they match
        for(Customer c: search()){
            if(c.getId() == id){
                return c;
            }
        }
        
        // return null if not found
        return null;
        
    }
        
    // method to find customer by email
    public Customer find(String email){
        // traverse the result of search and check email by email, return customer when they emails are equals
        for(Customer c: search()){
            if(c.getEmail().equals(email)){
                return c;
            }
        }
        
        // return null if not found
        return null;
    }
    
    // get a list of customers
    public List<Customer> search(){
        // return full list of customers from the fake database
        return DB.getCustomerDB();
    }
    
    // login method that receives the AuthParams
    public Customer login(AuthParams params){
        // call login extracting the email and password from params
        return login(params.email, params.password);
    }
    
    // login methid that receives  emails and password
    public Customer login(String email, String secret){
        // return null unless email is informed
        if(email == null)
            return null;
        
        // find customer by email
        Customer c = find(email);
        
        // return null if customer not found
        if(c == null)
            return null;
        
        // call customer.authenticate informing the password
        if(c.authenticate(secret))
            return c; // return customer on successful authentication
        else
            return null; // return null otherwise
    }
    
    // method to register a new customer, from RegistrationParams
    public Customer register(RegistrationParams p){
        // check if params are informed and valid
        if(p == null || !p.isValid())
            return null; //return if not
        
        // extract attributes from params and call registration method
        return register(p.name, p.address, p.sortCode, p.email, p.password);
    }
    
    // method to register a new customer, receives name, address, sortCode, emails and password
    public Customer register(String name, String address, String sortCode, String email, String password){
        // check if already registered        
        if(find(email) != null)
            return null; // return null if email is included on the database
        
        // create a new instance of customer
        Customer c = new Customer(name, address, email, password);
        
        // Add customer to DB        
        DB.add(c);
        
        // Add current account to customer
        DB.add(c, new Account(sortCode));
        
        // return the customer
        return c;
    }
}
        
        
       
    

