var j=1;
    function insertRow(){
var age=txtAge;
var no =  document.getElementById('txtCount').value;
var table=document.getElementById("myTable");
            if (!isNaN(no)) {
                var rows = parseInt(no);
              }
        if(j<rows){
          for (var index = j; index < rows; index++) {
                        
                         var row=table.insertRow(table.rows.length);
                         var cell1=row.insertCell(0);
                         var t1=document.createElement("input");
                             t1.id = "txtSno";
				t1.className="form-control";
                             cell1.appendChild(t1);
                         var cell2=row.insertCell(1);
                         var t2=document.createElement("input");
                             t2.id = "txtName";
			t2.className="form-control";
                             cell2.appendChild(t2);
                         var cell3=row.insertCell(2);
                         var t3=document.createElement("input");
                             t3.id = "txtAge";
				t3.className="form-control";
                              
                             cell3.appendChild(t3);
                         var cell4=row.insertCell(3);
                         var t4=document.createElement("input");
                             t4.id = "txtFare";
				t4.className="form-control";
                             cell4.appendChild(t4);
                   }



        }
        if(j>rows){

            for(var p=j;p>rows;p--){
               document.getElementById("myTable").deleteRow(p);
            }

        }
          j=rows;

  }


    
   function  posting(){

	   var name1= document.getElementById('name1').value;

	   var name2= document.getElementById('name2').value;
	   var address1= document.getElementById('address1').value;
	   var address2= document.getElementById('address2').value;
	   var age= document.getElementById('age').value;
	   var mobileno= document.getElementById('mobileno').value;
	   var lanelineno= document.getElementById('lanelineno').value;
	   var state= document.getElementById('state').value;
	   var accompanies= document.getElementById('accompanies').value;
	   var city= document.getElementById('city').value;
	   var specialrequest= document.getElementById('specialrequest').value;
	   var txtCount= document.getElementById('txtCount').value;
	   var txtSno= document.getElementById('txtSno').value;
	   var txtName= document.getElementById('txtName').value;
	   var txtAge= document.getElementById('txtAge').value;
	   var txtFare= document.getElementById('txtFare').value;



var data= { name1: name1, name2: name2, address1: 'address1', address2: 'address2', age: age, mobile: mobileno, landline: lanelineno
, state: state, accompanies: accompanies, city: city, specialrequest: 'specialrequest' };



	   
	   
	   
	   var xhr = new XMLHttpRequest();
	   var url ='https://3al0mzwndf.execute-api.us-east-2.amazonaws.com/retreat/addattendees';
	   xhr.open("POST", url, true);
	   xhr.setRequestHeader("Content-type", "application/json");


	   xhr.onreadystatechange = function () {

	       if ( xhr.readyState === 4 ) {
	   		
	   alert(xhr.responseText);
	       }
	   };

	  
	   xhr.send(JSON.stringify(data));

	   
   }    