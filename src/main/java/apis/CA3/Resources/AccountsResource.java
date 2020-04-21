/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Resources;

// import Account class from apis.CA3.Models
import apis.CA3.Models.Account;

// import Transaction class from apis.CA3.Models
import apis.CA3.Models.Transaction;

// import AccountService class from apis.CA3.Services
import apis.CA3.Services.AccountService;

// import NewAccountParams class from apis.CA3.Params
import apis.CA3.Params.NewAccountParams;

// import NewTransactionParams class from apis.CA3.Params
import apis.CA3.Params.NewTransactionParams;

// import TransferParams class from apis.CA3.Params
import apis.CA3.Params.TransferParams;

// import List class from java.util
import java.util.List;

// import Consumes annotation from javax.ws.rs
import javax.ws.rs.Consumes;

// import CookieParam annotation from javax.ws.rs
import javax.ws.rs.CookieParam;

// import GET annotation from javax.ws.rs
import javax.ws.rs.GET;

// import POST annotation from javax.ws.rs
import javax.ws.rs.POST;

// import Path annotation from javax.ws.rs
import javax.ws.rs.Path;

// import PathParam annotation from javax.ws.rs
import javax.ws.rs.PathParam;

// import Produces annotation from javax.ws.rs
import javax.ws.rs.Produces;

// import MediaType annotation from javax.ws.rs.core
import javax.ws.rs.core.MediaType;

/**
 *
 * @author x19183500
 */
@Path("/accounts") // set resource endpoint to the path "/accounts"
@Consumes(MediaType.APPLICATION_JSON) // defines that this resource will receive json object as request
@Produces(MediaType.APPLICATION_JSON) // defines that this resource will respond with json 
// class accounts resource will define endpoints to list accounts, show details of informed account id, create new account and change the balance of the account though withdrawal, lodgements and tranfers
// GET      /accounts                   AccountsResource#index      (list accounts)
// POST     /accounts                   AccountsResource#create     (create new account)
// GET      /accounts/{id}              AccountsResource#show       (show account)
// POST     /accounts/{id}/withdraw     AccountsResource#withdraw   (create new withdrawal transaction)
// POST     /accounts/{id}/lodge        AccountsResource#lodge      (create new lodgement transaction)
// POST     /accounts/{id}/transfer     AccountsResource#transfer   (create new account transfer from current to target account)
public class AccountsResource {
    // service to calculate and make logic reusable (basically extracting from the controller "resource")
    AccountService srv = new AccountService();
    
    @GET // annotation to activate this method on a GET request
    // by convention and to not repeat myself the accounts resource action index will list accounts no need to name it listAccounts
    // method will return a list of account, and it expects a cookie param that is the current customer id
    public List<Account> index(@CookieParam("cId") int id){
        // call the AccountService instance setting the customer with the received cookie cid and 
        // check if the customer is present
        if(srv.withCustomer(id).isAuthenticated())
            return srv.search(); // return the list of accounts attached to the customer 
        else 
            return null; // return null (no content) if customer is not found
    }

    @POST // annotation to activate this method on a POST request
    // by convention and to not repeat myself the account resource action create will create a new account no need to name it createAccount
    // method will return the newly created account, and it expects a cookie param that is the current customer id and the NewAccountParams
    public Account create(@CookieParam("cId") int cid, NewAccountParams np) {
        // call the AccountService instance setting the customer id and the NewAccountParams received
        return srv.withCustomer(cid).openaccount(np);
    }
       
    @GET // annotation to activate this method on a GET request
    @Path("/{id}") // annotation to change the path appending /{id} on the resource Path resulting in /accounts/{id}
    // by convention and to not repeat myself the account resource action show will return the account (if found) no need to name it accountDetails
    // by convention and to not repeat myself the id received on the path belongs to the account no need to name it accountId
    // method will return the account, and it expects a cookie param that is the current customer id and the path param id
    public Account show(@CookieParam("cId") int cid, @PathParam("id") int id){        
        // authenticate the customer on the AccountSerivce and check if customer is found
        if(srv.withCustomer(cid).isAuthenticated())
            return srv.find(id); // find the account among the accounts of the logged user
        else
            return null; // return null (no content) if customer is not found
    }
    
    @POST // annotation to activate this mthod on a POST request
    @Path("/{id}/withdraw") // annotation to change the path appending /{id}/withdraw on the resource Path resulting in /accounts/{id}/withdraw
    // by conventions and to not repeat myself the id received on the path belongs to the account no need to name it accountId
    // method will return the withdraw transaction, and it expects a cookie param that is the current customer id, the path param id and the NewTransactionParams
    public Transaction withdraw(@CookieParam("cId") int cid,@PathParam("id") int id, NewTransactionParams t) {
        // call the AccountService instance setting the customer id, account id and the NewTransactionParams received
        return srv.withCustomer(cid).withdrawal(id, t);
    }
    
    @POST // annotation to activate this mthod on a POST request
    @Path("/{id}/lodge") // annotation to change the path appending /{id}/lodge on the resource Path resulting in /accounts/{id}/lodge
    // by conventions and to not repeat myself the id received on the path belongs to the account no need to name it accountId
    // method will return the lodge transaction, and it expects a cookie param that is the current customer id, the path param id and the NewTransactionParams
    public Transaction lodge(@CookieParam("cId") int cid,@PathParam("id") int id, NewTransactionParams t) {
        // call the AccountService instance setting the customer id, account id and the NewTransactionParams received
        return srv.withCustomer(cid).lodge(id, t);
    }
    
    @POST // annotation to activate this mthod on a POST request
    @Path("/{id}/transfer") // annotation to change the path appending /{id}/transfer on the resource Path resulting in /accounts/{id}/transfer
    // by convention and to not repeat myself the id received on the path belongs to the account no need to name it accountId
    // method will return the transfer transaction, and it expects a cookie param that is the current customer id, the path param id and the TransferParams
    public List<Transaction> transfer(@CookieParam("cId") int cid,@PathParam("id") int id, TransferParams t) {
        // call the AccountService instance setting the customer id, account id and the TransferParams received
        return srv.withCustomer(cid).transfer(id, t);
    }
    
    @Path("/{accountId}/transactions") // annotation to change the path appending /{accountId}/transactions on the resource Path resulting in /accounts/{accountId}/transactions
    // as we are mounting the TransactionResource the scope will be different and in that scope id will be referred to the 
    // transaction id, for this reason we are changing the /{id} to /{accountId}
    // method will mount the TransactionResource on this endpoint
    public TransactionResource mountTransactions(){
        // return a new instance of the TransactionResource
        return new TransactionResource();
    }
}
