

 //Dia option checkbox
//  adminbut.addEventListener("click", eventoption());
 var arraystorageitems = [];
 function eventoption(){
 arraystorageitems = [];
	//localStorage.setItem("eventoptionyesno", 'yes');
	eventoption1(); //put all storage items in arraystorageitems
	eventoption2(); //populate mydia with arraystorageitems
		}
	
	function eventoption1(){
	 //arraystorageitems = [];
	 arraystorageitems.push('Print Event Full');
	 arraystorageitems.push('Print Event Limited');
	  arraystorageitems.push('Edit Existing Event');
	 arraystorageitems.push('Create New Event');
   
console.log (arraystorageitems);
   // return values;
	}
	
	
	function eventoption2(){


document.getElementById("mydia").showModal();  
 mydia = document.getElementById("mydia");
 
    while (mydia.firstChild) {
    mydia.removeChild(mydia.lastChild);
  }
 
 var i = 0;
arraystorageitems.forEach (myarrayfunction);
function myarrayfunction(value){
//radio	
  //<input type="radio" id="male" name="gender" value="male">
  //<label for="male">Male</label><br>
  var labelvar = document.createElement("label");
   labelvar.setAttribute("id", "label"+i);
   labelvar.setAttribute("name", "labelgroup");
   var inputvar = document.createElement("input");
   inputvar.setAttribute("type", "radio");
   inputvar.setAttribute("id", "radio"+i);
   inputvar.setAttribute("name", "radiogroup");
   
  
   mydia.insertAdjacentElement("afterbegin", inputvar);
    inputvar.insertAdjacentElement("afterend", labelvar);
	labelvar.innerHTML = value;
	
		var mybreak = document.createElement('br');
  inputvar.insertAdjacentElement("beforebegin", mybreak);
  var mybreak = document.createElement('br');
  inputvar.insertAdjacentElement("beforebegin", mybreak);
	
	i=i+1;
}



 var butcancel = document.createElement('button');
 butcancel.innerHTML = ('Cancel');
  mydia.insertAdjacentElement("beforeend", butcancel);
  
  var butok = document.createElement('button');
  butok.innerHTML = ('OK');
  butcancel.insertAdjacentElement("beforebegin", butok);
butok.addEventListener("click", openeventoption);
butcancel.addEventListener("click", closeeventoption);

		var mybreak1 = document.createElement('br');
  butok.insertAdjacentElement("beforebegin", mybreak1);
  
		var mybreak1 = document.createElement('br');
  butok.insertAdjacentElement("beforebegin", mybreak1);

	}
	
	
	function closeeventoption(){
		 var myNode = document.getElementById("mydia");
  // while (myNode.firstChild) {
 //   myNode.removeChild(myNode.lastChild);
 // }
  myNode.close();
	}
	
	
 function openeventoption(){
/* 
 Line 1: get a reference to the control that (a) is an <input> type, 
(b) has a name attribute of genderS, and (c) is checked.
Line 2: If there is such a control, return its value. If there isn't, 
return an empty string. The genderSRadio variable is truthy if Line 1 
finds the control and null/falsey if it doesn't.
*/

var mdia = document.getElementById("mydia");


//	var radioname = document.querySelector("input[name=radiogroup]:checked");
//var radioonoff = radioname ? radioname.value : "";


var labels = document.getElementsByName('labelgroup');
var radios = document.getElementsByName('radiogroup');
var ele = document.getElementsByName('radiogroup');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
					var selectedoption  = (labels[i].innerText);
				              console.log ("Selected Option: "+labels[i].innerText);
							}
							              }
	
 //alert ("This is openeventoption");
 var myNode = document.getElementById("mydia");
 //  while (myNode.firstChild) {
 //   myNode.removeChild(myNode.lastChild);
 // }
  myNode.close();
  
  if (selectedoption == 'Create New Event'){
	  createnewevent();
  }else if (selectedoption == 'Edit Existing Event'){
	  console.log ('eeeyes');
  }else if (selectedoption == 'Print Quotaion Receipt'){
	   console.log ('pqryes');
	   }else if (selectedoption == 'Print Event Full Details'){
		  console.log ('pefdyes');  
	   }
 
	
}
 
 
function createnewevent(){
	createnewevent1(); //creates and lays out form for user input
}

function createnewevent1(){
	// document.getElementById("createneweventform").showModal();  
// var cneform = document.getElementById("createneweventform");
 
  document.getElementById("neweventform").style.display = "block";
 
}


function savenewevent() {
	
	var name = document.getElementById("neweventname").value;
	if (name == ''){
		alert ('You must have a Name for your event');
		return;
	}
	var theme = document.getElementById("neweventtheme").value;
	var colors = document.getElementById("neweventcolors").value;
	var eventdate = document.getElementById("neweventdate").value;
	var starttime = document.getElementById("neweventstarttime").value;
	var setuptime = document.getElementById("neweventsetuptime").value;
	var totalcharges = document.getElementById("neweventtotalcharges").value;
	var totalpaid = document.getElementById("neweventtotalpaid").value;
	var balancedue = document.getElementById("neweventbalancedue").value;
	balancedue = (totalcharges - totalpaid);

	//alert (title);
  //document.getElementById("neweventform").style.display = "block";

  var objeventdata = {"name": name, 
"theme": theme,
"colors": colors,
"eventdate": eventdate,
"starttime": starttime,
"setuptime": setuptime,
"totalcharges": totalcharges,
"totalpaid": totalpaid,
"balancedue": balancedue};
  
arraynew = [];
			   arraynew.push(objeventdata);
var namestr = name+"str";			   
			   localStorage.setItem(namestr, JSON.stringify(arraynew));
// Retrieve the JSON string
 namestr = localStorage.getItem(namestr);
// Parse the JSON string back to JS object
var namestrparsed = name+"strparsed";
 namestrparsed = JSON.parse(namestr); //becomes arrayaddchildstrparsed[]
	console.log(namestrparsed);

}

function cancelnewevent() {
	alert ('You have closed this event');
  document.getElementById("neweventform").style.display = "none";
}

/*
Printing HTML Table using JavaScript
When the Print button is clicked, first a JavaScript popup 
window is created.
Then the Table CSS styles are extracted from the style tag and 
is written to the popup window HTML.
And then the contents of the HTML DIV i.e. HTML Table to be 
printed are extracted and written to the popup window HTML.
Finally, the popup window is printed using the JavaScript 
Window Print command.
*/

vartest = 'this is a test var';

    function PrintTable() {
        var printWindow = window.open('', '', 'height=200,width=400');
        //printWindow.document.write('<html><head><title>Table Contents</title>');
 
        //Print the Table CSS.
        var table_style = document.getElementById("table_style").innerHTML;
        printWindow.document.write('<style type = "text/css">');
        printWindow.document.write(table_style);
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');
 
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write('<body>');
        var divContents = document.getElementById("dvContents").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write('</body>');
 
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
    }



 function printnewevent() {
	 loaddatatoprint();
	 printdata();
	 
       
    }
	
	function loaddatatoprint(){
		savenewevent(); //this saves the new event form data
		                //to a local storage string.

		var name = document.getElementById("neweventname").value;
		var namestr = name+"str";			   
			  // localStorage.setItem(namestr, JSON.stringify(arraynew));
// Retrieve the JSON string
 namestr = localStorage.getItem(namestr);
// Parse the JSON string back to JS object
var namestrparsed = name+"strparsed";
 namestrparsed = JSON.parse(namestr);
	console.log(namestrparsed);
	
	name = namestrparsed[0].name;
	theme = namestrparsed[0].theme;
	colors = namestrparsed[0].colors;
	eventdate = namestrparsed[0].eventdate;
	starttime = namestrparsed[0].starttime;
	setuptime = namestrparsed[0].setuptime;
	totalcharges = namestrparsed[0].totalcharges;
	totalpaid = namestrparsed[0].totalpaid;
	balancedue = namestrparsed[0].balancedue;
	balancedue = (totalcharges - totalpaid);

		
		

		
	}
	
	function printdataORI(){
		 var printWindow = window.open('', '', 'height=200,width=400');
        //printWindow.document.write('<html><head><title>Table Contents</title>');
 
        //Print the Table CSS.
        var table_style = document.getElementById("table_style").innerHTML;
        printWindow.document.write('<style type = "text/css">');
        printWindow.document.write(table_style);
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');
 
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write('<body>');
        var divContents = document.getElementById("dvContents").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write('</body>');
 
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
	}
	
	function printdata(){
		 var printWindow = window.open('', '', 'height=400,width=800');
        //printWindow.document.write('<html><head><title>Table Contents</title>');
 
     
	  //Print the Table CSS.
        var newform_style = document.getElementById("newform_style").innerHTML;
        printWindow.document.write('<style type = "text/css">');
        printWindow.document.write(newform_style);
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');
		
 
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write('<body>');
        var divContents = document.getElementById("neweventform").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write('</body>');
 
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
	}
	
	
	        function CopyElem(elem)
        {
           $('form input[type=text]').each(function() {
             $(this).attr('value', $(this).val());
           });

           $('form input[type=checkbox]').each(function() {
             $(this).attr('checked', $(this).prop("checked"));
           });
        }
    
        function PrintElem(elem)
        {
            Popup($(elem).html());
        }

        function Popup(data) 
        {
            var mywindow = window.open('', 'my div', 'height=400,width=600');
            mywindow.document.write('<html><head><title>my div</title>');
            /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');
    
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
    
            mywindow.print();
            mywindow.close();
    
            return true;
        }

