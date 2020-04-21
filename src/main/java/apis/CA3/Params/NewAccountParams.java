/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// define the package
package apis.CA3.Params;

/**
 *
 * @author x19182121
 */
// class to list permitted attributes when creating a new account
public class NewAccountParams {
    // attribute sortCode
    public String sortCode;
    // attribute title
    public String title;  
  
    // method to check if parameters are valid
    public boolean isValid(){
        // check if sortCode is present and title is present
        return sortCode != null && title != null;
    }
}
