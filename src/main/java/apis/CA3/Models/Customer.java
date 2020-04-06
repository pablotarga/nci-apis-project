/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Models;

import apis.CA3.Services.PasswordEncryptionService;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
/**
 *
 * @author x19183500
 * sources: https://docs.oracle.com/javase/8/docs/api/java/util/Base64.Decoder.html
 * sources: https://en.wikipedia.org/wiki/Base64
 * sources: https://stackoverflow.com/questions/14833008/java-string-split-with-dot
 */
public class Customer {
    private static PasswordEncryptionService PSSWD = new PasswordEncryptionService();
    
    private int id;
    private String name;
    private String email;
    private String address;

    // hashed, salted and base64 encoded password digest
    private String passwordDigest;
    
    private List<Account> accounts = new ArrayList<>();
    
    public Customer(){}
    
    public Customer(String name, String address, String email, String password){
        setName(name);
        setAddress(address);
        setEmail(email);
        setPassword(password);
    }
    
    public void setId(int id){
        this.id = id;
    }
    
    public void setName(String name){
        this.name = name;
    }
    
    public void setEmail(String email){
        this.email = email;
    }
    
    public void setAddress(String address){
        this.address = address;
    }
    
    public void setPassword(String secret){

        try{            
            // generate a new salt
            byte[] salt = PSSWD.generateSalt();
            
            // encrypt secret with salt
            byte[] password = PSSWD.getEncryptedPassword(secret, salt); 
            
            // base64 encode into string to save into passwordDigest 
            passwordDigest = Base64.getEncoder().encodeToString(password) + '.' + Base64.getEncoder().encodeToString(salt);
        } catch(Exception e){
        }
    }
    
    
    public int getId(){
        return id;
    }
    
    public String getName(){
        return name;
    }
    
    public String getEmail(){
        return email;
    }
    
    public String getAddress(){
        return address;
    }
    
    public String getPassword(){
        return passwordDigest;
    }
    
    public boolean authenticate(String secret){
        String[] bits = this.passwordDigest.split("\\.");
        
        byte[] password = Base64.getDecoder().decode(bits[0]);
        byte[] salt = Base64.getDecoder().decode(bits[1]);
        
        try{
            return PSSWD.authenticate(secret, password, salt);
        } catch(Exception e){
            return false;
        }
    }
    
    public List<Account> getAccounts(){
        return accounts;
    }
    
    public void appendAccount(Account a){
        accounts.add(a);
    }
}
