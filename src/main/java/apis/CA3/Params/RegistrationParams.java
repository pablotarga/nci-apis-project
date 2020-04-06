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
public class RegistrationParams {
    public String name;
    public String address;
    public String sortCode;
    public String email;
    public String password;
    
    public boolean isValid(){
        return name != null && address != null && sortCode != null && email != null && password != null;
    }
}
