/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Response;

import java.io.Serializable;
import apis.CA3.Models.Customer;

/**
 *
 * @author x19183500
 */
public class CustomerResponse {
    public String name;
    public String email;
    public String address;
    
    CustomerResponse(Customer c){
        name    = c.getName();
        email   = c.getEmail();
        address = c.getAddress();
    }
}
