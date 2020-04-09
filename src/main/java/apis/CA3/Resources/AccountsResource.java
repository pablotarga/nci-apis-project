/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Resources;

import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Services.AccountService;
import apis.CA3.Services.CustomerService;
import apis.CA3.Params.NewAccountParams;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author x19183500
 */
@Path("/accounts")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AccountsResource {
    AccountService srv = new AccountService();
    CustomerService authsrv = new CustomerService();
    
    @GET
    public List<Account> index(@CookieParam("cId") int id){
       
        Customer c = authsrv.findById(id);
        
        if(c == null){
            return null;
        } else {
            return c.getAccounts();
        }
       
    }
    
    @GET
    @Path("/{id}")
    public Account show(@CookieParam("cId") int cid, @PathParam("id") int id){
        Customer c = authsrv.findById(cid);
        
        if(c == null){
            return null;
        } else {
            
            return srv.find(id, c.getAccounts());
        }
    }
 
    
    @POST
    public Account create(@CookieParam("cId") int cid, NewAccountParams np) {
        if(np.isValid()){
            Customer c = authsrv.findById(cid);
        
            if(c == null){
                return null;
            } else {    
                return srv.openaccount(c, np);
            }
            
        } else {
            return null;
        }
    }
   
    
    
}
