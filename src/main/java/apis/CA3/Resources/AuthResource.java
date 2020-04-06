/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Resources;

import apis.CA3.Models.Customer;
import apis.CA3.Services.CustomerService;
import apis.CA3.Params.AuthParams;
import apis.CA3.Params.RegistrationParams;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

/**
 *
 * @author x19183500
 */
@Path("")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AuthResource {
    CustomerService srv = new CustomerService();
    
    @GET
    @Path("/me")
    public Response me(@CookieParam("cId") int id){
        Customer c = srv.findById(id);
        
        if(c == null){
            return Response.status(401).entity("").build();
        } else {
            Response.ResponseBuilder rb = Response.ok(c);
            Response response = rb.type(MediaType.APPLICATION_JSON).build();

            return response;
        }
    }
    
    @POST
    @Path("/login")
    public Response login(AuthParams p){
        Customer c = srv.login(p);
        
        if(c == null){
            return Response.status(401).entity("").build();
        } else {
            return writeCookieWithCustomer(c);
        }
    }
    
    @POST
    @Path("/register")
    public Response register(RegistrationParams p){
        if(p.isValid()){
            Customer c = srv.register(p);
            
            if(c == null)
                return Response.status(400).entity("\"Email already taken\"").build();
            else
                return writeCookieWithCustomer(c);
            
        } else {
            return Response.status(400).entity("\"Invalid Params\"").build();
        }
    }
    
    @DELETE
    @Path("/logout")
    public Response logout(){
        NewCookie authCookie = new NewCookie("cId", null, "/api", null, null, 0, false, true);
        Response.ResponseBuilder rb = Response.ok("");
        Response response = rb.cookie(authCookie).type(MediaType.APPLICATION_JSON).build();
        return response;
    }
    
    private Response writeCookieWithCustomer(Customer c){
        NewCookie authCookie = new NewCookie("cId", ""+c.getId(), "/api", null, null, 600, false, true);
        Response.ResponseBuilder rb = Response.ok(c);
        Response response = rb.cookie(authCookie).type(MediaType.APPLICATION_JSON).build();

        return response;
    }
}
