/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Models;

//import the service PasswordEncryptionService from apis.CA3.Services
import apis.CA3.Services.PasswordEncryptionService;

//import ArrayList class from java.util
import java.util.ArrayList;

//import Base64 class from java.util
import java.util.Base64;

//import List class from java.util
import java.util.List;
/**
 *
 * @author x19183500
 * sources: https://docs.oracle.com/javase/8/docs/api/java/util/Base64.Decoder.html
 * sources: https://en.wikipedia.org/wiki/Base64
 * sources: https://stackoverflow.com/questions/14833008/java-string-split-with-dot
 */
// class to represent a Customer 
public class Customer {
    // services as static to be used on the setPassword and authentication methods
    private static PasswordEncryptionService PSSWD = new PasswordEncryptionService();
    
    // attribute to store the id
    private int id;
    // attribute to store the name
    private String name;
    // attribute to store the email
    private String email;
    // attribute to store the address
    private String address;

    // attribute to store the hashed, salted and base64 encoded password digest
    private String passwordDigest;
    
    // attribute to store the list of accounts of this customer
    private List<Account> accounts = new ArrayList<>();
    
    // default constructor
    public Customer(){}
    
    // constructor that takers name, address, email and password
    public Customer(String name, String address, String email, String password){
        // call setName setter
        setName(name);
        // call setAddress setter
        setAddress(address);
        // call setEmail setter
        setEmail(email);
        // call setPassword setter
        setPassword(password);
    }
    
    // setter to set the id
    public void setId(int id){
        // set attribute id with informed id
        this.id = id;
    }
    
    // setter to set the name
    public void setName(String name){
        // set attribute name with informed name
        this.name = name;
    }
    
    // setter to set the email
    public void setEmail(String email){
        // set attribute email with informed email
        this.email = email;
    }
    
    // setter to set the address
    public void setAddress(String address){
        // set attribute address with informed address
        this.address = address;
    }
    
    // setter to set the password, it generates a salt and encrypt the password using the newly generated salt
    public void setPassword(String secret){

        try{            
            // generate a new salt
            byte[] salt = PSSWD.generateSalt();
            
            // encrypt secret with salt
            byte[] password = PSSWD.getEncryptedPassword(secret, salt); 
            
            // base64 encode into string the encrypted password and the salt and set the attribute passwordDigest 
            passwordDigest = Base64.getEncoder().encodeToString(password) + '.' + Base64.getEncoder().encodeToString(salt);
        } catch(Exception e){
        }
    }
    
    // getter to retrieve the id
    public int getId(){
        // return attribute id
        return id;
    }
    
    // getter to retrieve the name
    public String getName(){
        // return attribute name
        return name;
    }
    
    // getter to retrieve the email
    public String getEmail(){
        // return attribute email
        return email;
    }
    
    // getter to retrieve the address
    public String getAddress(){
        // return attribute address
        return address;
    }
    
    // getter to retrieve the password
    public String getPassword(){
        // return attribute passwordDigest
        return passwordDigest;
    }
    
    // check informed password with stored passwordDigest
    public boolean authenticate(String secret){
        // separate the password from the salt
        String[] bits = this.passwordDigest.split("\\.");
        // decode the password from base64 to byte[]
        byte[] password = Base64.getDecoder().decode(bits[0]);
        // decode the salt from base64 to byte[]
        byte[] salt = Base64.getDecoder().decode(bits[1]);
        
        try{
            // call PasswordEncryptionService function to check secret, password and salt
            return PSSWD.authenticate(secret, password, salt);
        } catch(Exception e){
            // on catch returns false
            return false;
        }
    }
    
    // getter to retrieve the accounts
    public List<Account> getAccounts(){
        // return the list of accounts
        return accounts;
    }
    
    // function to append an account into the accounts list
    public void appendAccount(Account a){
        // append informed account into accounts list
        accounts.add(a);
    }
}
