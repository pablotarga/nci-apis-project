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
public class NewTransactionParams {
    public double amount;
    
    public boolean isValid(){
        return amount>0;
    }
    
}
