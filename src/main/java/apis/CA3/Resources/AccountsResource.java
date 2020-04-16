/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Resources;

import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import apis.CA3.Models.Transaction;
import apis.CA3.Services.AccountService;
import apis.CA3.Services.CustomerService;
import apis.CA3.Params.NewAccountParams;
import apis.CA3.Params.NewTransactionParams;
import apis.CA3.Params.TransferParams;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author x19183500
 */
@Path("/accounts")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AccountsResource {
    AccountService srv = new AccountService();
    
    @GET
    public List<Account> index(@CookieParam("cId") int id){
        if(srv.withCustomer(id).isAuthenticated())
            return srv.search();
        else 
            return null;
    }
    
    @GET
    @Path("/{id}")
    public Account show(@CookieParam("cId") int cid, @PathParam("id") int id){        
        if(srv.withCustomer(cid).isAuthenticated())
            return srv.find(id);
        else
            return null;
    }
    
    @POST
    public Account create(@CookieParam("cId") int cid, NewAccountParams np) {
        return srv.withCustomer(cid).openaccount(np);
    }
   
    @POST
    @Path("/{id}/withdraw")
    public Transaction withdraw(@CookieParam("cId") int cid,@PathParam("id") int id, NewTransactionParams t) {
        return srv.withCustomer(cid).withdrawal(id, t);
    }
    
    @POST
    @Path("/{id}/lodge")
    public Transaction lodge(@CookieParam("cId") int cid,@PathParam("id") int id, NewTransactionParams t) {
        return srv.withCustomer(cid).lodge(id, t);
    }
    
    @POST
    @Path("/{id}/transfer")
    public List<Transaction> transfer(@CookieParam("cId") int cid,@PathParam("id") int id, TransferParams t) {
        return srv.withCustomer(cid).transfer(id, t);
    }
    
    @Path("/{accountId}/transactions")
    public TransactionResource mountTransactions(){
        return new TransactionResource();
    }
}
