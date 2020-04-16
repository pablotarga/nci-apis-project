/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Resources;

import apis.CA3.Models.Transaction;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import apis.CA3.Services.TransactionService;
import java.util.List;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;

/**
 *
 * @author x19182121
 */
@Path("/transactions")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TransactionResource {
    TransactionService srv = new TransactionService();
    
    @GET
    public List<Transaction> getTtansactions(@CookieParam("cId") int cid,@PathParam("accountId") int accountId) {
        System.out.println("GetAllTransactions" + accountId);
        return srv.getAllTransactions(cid, accountId);
    }
    
    @GET
    @Path("/{id}")
    public Transaction getTransaction(@CookieParam("cId") int cid,@PathParam("id") int id, @PathParam("accountId") int accountId) {
    	System.out.println("getTransactionByID..."+accountId);
	return srv.getTransaction(cid, accountId, id);
    }
    
  
}
