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
public class TransferParams {
    public int targetid;
    public String sortCode;
    public String number;
    public double amount;
    
    public boolean isValid() {
        return amount > 0 && (targetid != 0 || (sortCode != null && number !=null));   
    }
    
}
