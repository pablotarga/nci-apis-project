/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Test;

import apis.CA3.Models.Customer;

/**
 *
 * @author x19183500
 */
public class CustomerTest {
    public static void main(String[] args){
        Customer c = new Customer();
        c.setPassword("123456");
//        System.out.println("toJson : " + c);
        System.out.println("password digest : " + c.getPassword());
        System.out.println("authenticate : " + c.authenticate("321321321"));
        System.out.println("authenticate : " + c.authenticate("123123123"));
        System.out.println("authenticate : " + c.authenticate("123456"));
    }
}
