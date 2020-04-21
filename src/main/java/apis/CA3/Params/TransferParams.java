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
// class to list permitted attributes when creating an account transfering
public class TransferParams {
    // attribute target id (account id that will receive the money)
    public int targetid;
    // attribute sort code
    public String sortCode;
    // attribute number
    public String number;
    // attribute amount
    public double amount;
    
    // method to check if parameters are valid
    public boolean isValid() {
        // check if amount is greater than 0 and if target id or sort code and number are informed
        return amount > 0 && (targetid != 0 || (sortCode != null && number !=null));   
    }
    
}
