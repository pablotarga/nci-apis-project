/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//define the package
package apis.CA3.Resources;

// import Customer class from apis.CA3.Models
import apis.CA3.Models.Customer;
// import CustomerService class from apis.CA3.Services
import apis.CA3.Services.CustomerService;
// import AuthParams class from apis.CA3.Params
import apis.CA3.Params.AuthParams;
// import RegistrationParams class from apis.CA3.Params
import apis.CA3.Params.RegistrationParams;
// import Consumes annotation from javax.ws.rs
import javax.ws.rs.Consumes;

// import CookieParam annotation from javax.ws.rs
import javax.ws.rs.CookieParam;

// import DELETE annotation from javax.ws.rs
import javax.ws.rs.DELETE;

// import GET annotation from javax.ws.rs
import javax.ws.rs.GET;

// import POST annotation from javax.ws.rs
import javax.ws.rs.POST;

// import Path annotation from javax.ws.rs
import javax.ws.rs.Path;

// import Produces annotation from javax.ws.rs
import javax.ws.rs.Produces;

// import MediaType annotation from javax.ws.rs.core
import javax.ws.rs.core.MediaType;

// import NewCookie annotation from javax.ws.rs.core
import javax.ws.rs.core.NewCookie;

// import Response annotation from javax.ws.rs.core
import javax.ws.rs.core.Response;

/**
 *
 * @author x19183500
 */
@Path("") // set resource endpoint to the path "/"
@Consumes(MediaType.APPLICATION_JSON) // defines that this resource will receive json object as request body
@Produces(MediaType.APPLICATION_JSON) // defines that this resource will respond with json 
// class auth resource will define endpoints to login, register, return logged customer info and logout
// GET      /me                         AuthResource#me             (logged customer info)
// POST     /login                      AuthResource#login          (authenticate the customer and create a cookie)
// POST     /register                   AuthResource#register       (create a new customer and create a cookie)
// DELETE   /logout                     AuthResource#logout         (delete cookie)
public class AuthResource {
    // service that contains the business logic reusable
    CustomerService srv = new CustomerService();
    
    @GET // annotation to activate this method on a GET request
    @Path("/me") // annotation to change the path appending /me on the resource Path resulting in /me
    // method will return the logged customer info, and it expects a cookie param that is the current customer id
    public Response me(@CookieParam("cId") int id){
        // try to find the customer from the cookie cId
        Customer c = srv.findById(id);
        
        
        if(c == null){
            return Response.status(401).entity("").build(); // if customer not found return response 401
        } else {
            Response.ResponseBuilder rb = Response.ok(c); // get a response builder containing the customer
            Response response = rb.type(MediaType.APPLICATION_JSON).build(); // build response as json
            
            return response; //return the response
        }
    }
    
    @POST // annotation to activate this method on a POST request
    @Path("/login") // annotation to change the path appending /login on the resource Path resulting in /login
    // method will return a Response containing the cookie and the customer info, and it expects AuthParams, if authentication fail the Response will be empty with status 401
    public Response login(AuthParams p){
        // call service.login informing received AuthParam
        Customer c = srv.login(p);
        
        // if authentication failed
        if(c == null){
            return Response.status(401).entity("").build(); //return 401 with empty content
        } else {
            return writeCookieWithCustomer(c); // write the cookie on the response, return 200 containing the customer info
        }
    }
    
    @POST // annotation to activate this method on a POST request
    @Path("/register") // annotation to change the path appending /register on the resource Path resulting in /register
    // method will return a Response containing the cookie and the customer info, and it expects RegistrationParams, if registration fail the Response will contain the error with status 400
    public Response register(RegistrationParams p){
        // check if RegistrationParams is valid
        if(p.isValid()){
            // call register method
            Customer c = srv.register(p);
            
            // if registration fail
            if(c == null)
                return Response.status(400).entity("\"Email already taken\"").build(); // return 400 with the error
            else
                return writeCookieWithCustomer(c); // write the cookie on the response, return 200 containing the customer info
            
        } else {
            return Response.status(400).entity("\"Invalid Params\"").build(); // return 400 with the error
        }
    }
    
    @DELETE // annotation to activate this method on a DELETE request
    @Path("/logout") // annotation to change the path appending /logout on the resource Path resulting in /logout
    // method will return a Response removing the cookie (set expiration time to now) with no content and status 200, will always success as it doesnt check cookie validity
    public Response logout(){
        // write the cookie to expire now
        NewCookie authCookie = new NewCookie("cId", null, "/api", null, null, 0, false, true);
        // get a response build with 200 (status ok) and no content 
        Response.ResponseBuilder rb = Response.ok("");
        // use the response builder to writhe the cookie (expiration) and set the type to be json
        Response response = rb.cookie(authCookie).type(MediaType.APPLICATION_JSON).build();
        // return the response
        return response;
    }
    
    // helper method to DRY setting the cookie and preparing the response to include the customer
    // method accepts the authenticated customer (returned from service.login or service.register)
    private Response writeCookieWithCustomer(Customer c){
        // create a new instance of the class new cookie
        NewCookie authCookie = new NewCookie("cId", ""+c.getId(), "/api", null, null, 600, false, true);
        // get a response builder to with status 200 and customer info as content
        Response.ResponseBuilder rb = Response.ok(c);
        // write the cookie on the response and set the type of the response to be json and build
        Response response = rb.cookie(authCookie).type(MediaType.APPLICATION_JSON).build();
        // return the response
        return response;
    }
}
