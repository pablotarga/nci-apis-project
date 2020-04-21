/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Params;

/**
 *
 * @author x19182121
 */
// class to list permitted attributes when creating a new transaction
public class NewTransactionParams {
    // attribute amount
    public double amount;
    
    // attribute description 
    public String description;
    
    // method to check if parameters are valid
    public boolean isValid(){
        // check if received amount is greater than 0
        return amount>0;
    }
    
}
