/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package apis.CA3.Database;

import apis.CA3.Models.Account;
import apis.CA3.Models.Customer;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author x19183500
 */
public class Database {
//    private static final List<Candidate> CANDIDATES = new ArrayList<>();
    
    
    public Database(){
        load();
    }
    
//    public List<Candidate> getCandidatesDB(){
//        return CANDIDATES;
//    }
    
    private void load(){
//        load using the FileOutputBuffer/FileInputBuffer
    }
    
    private void save(){
//        load using the FileOutputBuffer/FileInputBuffer
    }
    
//    public Candidate add(Candidate c){
//        if(CANDIDATES.indexOf(c) >=0){
//            return c;
//        }
//
//        CANDIDATES.add(c);
//        c.setCandidateId(CANDIDATES.size());
//        save();
//        return c;
//    }  
    public Customer add(Customer c){
        return c;
    }

    public Account add(Customer c, Account a){
        return a;
    }
}
