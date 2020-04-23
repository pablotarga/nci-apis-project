/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Resources;

// import Transaction class from apis.CA3.Models
import apis.CA3.Models.Transaction;
// import Consumes annotation from javax.ws.rs
import javax.ws.rs.Consumes;
// import Path annotation from javax.ws.rs
import javax.ws.rs.Path;
// import Produces annotation from javax.ws.rs
import javax.ws.rs.Produces;
// import MediaType annotation from javax.ws.rs.core
import javax.ws.rs.core.MediaType;
// import TransactionService class from apis.CA3.Services
import apis.CA3.Services.TransactionService;
// import List class from java.util
import java.util.List;
// import CookieParam annotation from javax.ws.rs
import javax.ws.rs.CookieParam;
// import GET annotation from javax.ws.rs
import javax.ws.rs.GET;
// import PathParam annotation from javax.ws.rs
import javax.ws.rs.PathParam;

/**
 *
 * @author x19182121
 */
@Path("/transactions") // set resource endpoint to the path /transactions (this is set appart from the mounting point we have on the AccountsResource)
@Consumes(MediaType.APPLICATION_JSON) // defines that this resource will receive json object as request body
@Produces(MediaType.APPLICATION_JSON) // defines that this resource will respond with json 
// class transaction resource will define endpoints to list and return information about a especific transaction
// GET      /accounts/{accountId}/transactions          TransactionResource#getTtansactions         (return list of transactions attached to informed account)
// GET      /accounts/{accountId}/transactions/{id}     TransactionResource#getTtansaction          (return especific transaction attached to informed account)
public class TransactionResource {
    // transaction service
    TransactionService srv = new TransactionService();
    
    @GET // annotation to activate this method on a GET request
    // method will return list of transactions attached it accountId, and it expects a cookie param that is the current customer id and the accountId (from mounting point in AccountsResource)
    public List<Transaction> getTtansactions(@CookieParam("cId") int cid,@PathParam("accountId") int accountId) {
        // print out action was accessed
        System.out.println("GetAllTransactions" + accountId);
        // call the service informing the logged customer id and account id 
        return srv.getAllTransactions(cid, accountId);
    }
    
    @GET // annotation to activate this method on a GET request
    @Path("/{id}") // annotation to change the path appending /{id} on the resource Path resulting in /accounts/{accountId}/transactions/{id}
    public Transaction getTransaction(@CookieParam("cId") int cid,@PathParam("id") int id, @PathParam("accountId") int accountId) {
    	System.out.println("getTransactionByID..."+accountId);
        // call the service informing the logged customer id, account id and transaction id
	return srv.getTransaction(cid, accountId, id);
    }
    
  
}
