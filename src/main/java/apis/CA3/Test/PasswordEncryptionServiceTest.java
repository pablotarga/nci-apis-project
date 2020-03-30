/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Test;

import apis.CA3.Services.PasswordEncryptionService;

/**
 *
 * @author x19183500
 */
public class PasswordEncryptionServiceTest {
    public static void main(String[] args){
        String secret = "123123123";
        
        PasswordEncryptionService enc = new PasswordEncryptionService();
        try{
            byte[] salt = enc.generateSalt();
            byte[] enc_password = enc.getEncryptedPassword(secret, salt);
            
            System.out.println(enc.authenticate("123123123", enc_password, salt));
            System.out.println(enc.authenticate("111111111", enc_password, salt));
            System.out.println(enc.authenticate("123123123 ", enc_password, salt));
        } catch(Exception e){
            
        }
        
    }
}
