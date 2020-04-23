/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Params;

/**
 *
 * @author x19183500
 */
// class to list permitted attributes when registering as new customer
public class RegistrationParams {
    // attribute name
    public String name;
    // attribute address
    public String address;
    // attribute sortCode
    public String sortCode;
    // attribute email
    public String email;
    // attribute password
    public String password;
    
    // method to check if parameters are valid
    public boolean isValid(){
        // check if name is present and address is present and sort code is present and email is present and password is present
        return name != null && address != null && sortCode != null && email != null && password != null;
    }
}
