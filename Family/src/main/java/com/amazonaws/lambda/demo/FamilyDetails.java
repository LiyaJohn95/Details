package com.amazonaws.lambda.demo;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;


import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;


public class FamilyDetails implements RequestHandler<String, String> {
	CallableStatement stmt = null;
	ResultSet rs;
	FamilyModel fm = new FamilyModel();
	DependentModel dm = new DependentModel();
	
    @Override
    public String handleRequest(String input, Context context) {
        //context.getLogger().log("Input: " + input);

        // TODO: implement your handler
    	
    	try {
			
    		Class.forName("com.mysql.jdbc.Driver");
    		Connection con = DriverManager.getConnection("jdbc:mysql://parkingapp.cz8yo6kwaby4.us-east-2.rds.amazonaws.com/familydetails","genioparking","genio#1234");
    		context.getLogger().log("Test Started");
    		String getDetails = "{call getDetails(?)}" + input;	
    		stmt = con.prepareCall(getDetails);
    		
    		
			  
            rs = stmt.executeQuery();
            
            while (rs.next()) {
            	
            	fm.setFamily_id(rs.getInt(1));
 	            fm.setName(rs.getString(2));
 	            fm.setAge(rs.getInt(3));
 	            fm.setAddress(rs.getString(4));
 	            fm.setMobile(rs.getInt(5));
 	            fm.setMerital_status(rs.getString(6));
 	            dm.setMenber_id(rs.getInt(7));
 	            dm.setFamily_id(rs.getInt(8));
 	            dm.setName(rs.getString(9));
 	            dm.setAge(rs.getInt(10));
 	            dm.setRelationship(rs.getString(11));
 	            dm.setMerital_status(rs.getString(12));
 	           String output=" fm.getFamily_id()"+"fm.getName()"+"fm.getAge()"+"fm.getAddress()"+"fm.getMobile()"+" fm.getMerital_status()"+" dm.getMenber_id()"+" dm.getFamily_id()"+"dm.getName()"+" dm.getAge()"+" dm.getRelationship()"+"dm.getMerital_status() ";
 	           context.getLogger().log(fm.getFamily_id()+" "+fm.getName()+" "+fm.getAge()+" "+fm.getAddress()+" "+fm.getMobile()+" "+fm.getMerital_status()+" "+dm.getMenber_id()+" "+dm.getFamily_id()+" "+dm.getName()+" "+dm.getAge()+" "+dm.getRelationship()+" "+dm.getMerital_status());
             
 	         return output;
          }
           
    		
    	}  catch (Exception e) {
    		  
    	  }
    	
    	   return null;
    }
    	
        
}
