/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Resources;

import apis.CA3.Models.Account;
import apis.CA3.Services.AccountService;
import apis.CA3.Responses.AccountListResponse;
import apis.CA3.Responses.AccountResponse;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
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
    public List<AccountResponse> index(){
        AccountListResponse resp = new AccountListResponse(srv.search());
        List<AccountResponse> list = resp.list;
        return list;
    }
    
    @GET
    @Path("/working")
    public List<Account> index2(){
        return srv.search();
    }
}
