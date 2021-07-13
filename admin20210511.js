
 var arraystorageitems = [];
 function eventoption(){
 arraystorageitems = [];
	eventoption1(); //put all storage items in arraystorageitems
	eventoption2(); //populate mydia with arraystorageitems
		}
	
	function eventoption1(){
	  arraystorageitems.push('Open Existing Event');
	 arraystorageitems.push('Create New Event');
   
//console.log (arraystorageitems);
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
	 
	 closeeventoption(); //closes mydia
	 
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
				            //  console.log ("Selected Option: "+labels[i].innerText);
							}
							              }
	
 //alert ("This is openeventoption");
 //var myNode = document.getElementById("mydia");
 //  while (myNode.firstChild) {
 //   myNode.removeChild(myNode.lastChild);
 // }
 // myNode.close();
  
  if (selectedoption == 'Create New Event'){
	  createnewevent();
  }else if (selectedoption == 'Open Existing Event'){
	  openexistingevent(); //opens selected event
  }
  
  
  //else if (selectedoption == 'Print Quotaion Receipt'){
	//   console.log ('pqryes');
	 //  }else if (selectedoption == 'Print Event Full Details'){
	//	  console.log ('pefdyes');  
	 //  }
 
	
}
 

 function openexistingevent(){
 openexistingevent1(); //loops thru local storage for existing EVENTS
                       //and adds found EVENTS to array
openexistingevent2(); //populate mydia with arraylocalevents
						   
 }
 
  arraylocalevents = [];
 function openexistingevent1(){
	 arraylocalevents = [];
	
	 //loops thru local storage for existing EVENT
var typeofKey = null;
   for (var key in localStorage) {
       typeofKey = (typeof localStorage[key]);
	   
	   var searchvalue = 'EVENT';
	   var localkey = key;
	  // console.log(key);
	   if (localkey.includes(searchvalue)) {
       //console.log(key);
	   
	   if (key == 'EVENTundefinedstr'){
	   	   localStorage.removeItem(key);
		   return
	   }
	 
 localkey = localkey.substring(5);
  localkey = localkey.slice(0, -3);
	   arraylocalevents.push(localkey);
	  // console.log(arraylocalevents);
	   }
	   
   
}	
arraylocalevents.sort();
arraylocalevents.reverse();	   
console.log(arraylocalevents);
 }
 
 
 function openexistingevent2(){


document.getElementById("mydia1").showModal();  
mydia = document.getElementById("mydia1");
 
    while (mydia.firstChild) {
    mydia.removeChild(mydia.lastChild);
  }
 
 var i = 0;
arraylocalevents.forEach (myarrayfunction);
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
butok.addEventListener("click", openeventselected);
butcancel.addEventListener("click", closeeventselected);

		var mybreak1 = document.createElement('br');
  butok.insertAdjacentElement("beforebegin", mybreak1);
  
		var mybreak1 = document.createElement('br');
  butok.insertAdjacentElement("beforebegin", mybreak1);

	}
	
	
	
	function closeeventselected(){
		 var myNode = document.getElementById("mydia1");
   myNode.close();
	}
	
	
	
	function openeventselected(){
	//console.log ('openeventselected');
	closeeventselected();
/* 
 Line 1: get a reference to the control that (a) is an <input> type, 
(b) has a name attribute of genderS, and (c) is checked.
Line 2: If there is such a control, return its value. If there isn't, 
return an empty string. The genderSRadio variable is truthy if Line 1 
finds the control and null/falsey if it doesn't.
*/

var mdia = document.getElementById("mydia1");


//	var radioname = document.querySelector("input[name=radiogroup]:checked");
//var radioonoff = radioname ? radioname.value : "";


var labels = document.getElementsByName('labelgroup');
var radios = document.getElementsByName('radiogroup');
var ele = document.getElementsByName('radiogroup');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
					var selectedoption  = (labels[i].innerText);
					var myNode = document.getElementById("mydia");
  myNode.close();
	openeventselected1(selectedoption); //populate form with selected EVENT data
					return;
				            //  console.log ("Selected Option: "+labels[i].innerText);
							}
							              }
	

 var myNode = document.getElementById("mydia");
  myNode.close();
  
 
 	}
	
 var namestr = '';
var namestrparsed = [];
var namestrparsedstr = ''; 

 function openeventselected1(selectedoption){
	 //populate form with selected EVENT data
	 console.log(selectedoption);
	 
	 //this saves the new event form data
		                //to a local storage string.

		var name = selectedoption;
		 namestr = "EVENT"+name+"str";			   
			  // localStorage.setItem(namestr, JSON.stringify(arraynew));
// Retrieve the JSON string
 namestr = localStorage.getItem(namestr);
// Parse the JSON string back to JS object
 namestrparsedstr = name+"strparsed";
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

	 document.getElementById("neweventname").value = name; 
		document.getElementById("neweventtheme").value = theme;
	 document.getElementById("neweventcolors").value = colors;
	 document.getElementById("neweventdate").value = eventdate;
	 document.getElementById("neweventstarttime").value = starttime;
	 document.getElementById("neweventsetuptime").value = setuptime;
	document.getElementById("neweventtotalcharges").value = totalcharges;
	 document.getElementById("neweventtotalpaid").value = totalpaid;
	balancedue = (totalcharges - totalpaid);
	 document.getElementById("neweventbalancedue").value = balancedue;
	
	 
 }
 
 
 
function createnewevent(){
	createnewevent1(); //creates and lays out form for user input
}

function createnewevent1(){
	// document.getElementById("createneweventform").showModal();  
// var cneform = document.getElementById("createneweventform");
 
  document.getElementById("neweventform").style.display = "block";
  document.getElementById("divbut").style.display = "block";
  //This clears form of data
	 document.getElementById("neweventname").value = ''; 
		document.getElementById("neweventtheme").value = '';
	 document.getElementById("neweventcolors").value = '';
	 document.getElementById("neweventdate").value = '';
	 document.getElementById("neweventstarttime").value = '';
	 document.getElementById("neweventsetuptime").value = '';
	document.getElementById("neweventtotalcharges").value = '';
	 document.getElementById("neweventtotalpaid").value = '';
	//balancedue = (totalcharges - totalpaid);
	 document.getElementById("neweventbalancedue").value = '';

}

var saveyesno = 'no';
function savenewevent() {
	saveyesno = 'yes';
	/*This populates form with current data
	 document.getElementById("neweventname").value = name; 
		document.getElementById("neweventtheme").value = theme;
	 document.getElementById("neweventcolors").value = colors;
	 document.getElementById("neweventdate").value = eventdate;
	 document.getElementById("neweventstarttime").value = starttime;
	 document.getElementById("neweventsetuptime").value = setuptime;
	document.getElementById("neweventtotalcharges").value = totalcharges;
	 document.getElementById("neweventtotalpaid").value = totalpaid;
	balancedue = (totalcharges - totalpaid);
	 document.getElementById("neweventbalancedue").value = balancedue;
	*/
	
	
	//this save current form data to array and localestorage
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
	balancedue = (totalcharges - totalpaid);
	//var balancedue = document.getElementById("neweventbalancedue").value;
	
	//this updates balance
	 document.getElementById("neweventbalancedue").value = balancedue;

	
  var objeventdata = {
"name": name, 
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
 namestr = 'EVENT'+name+"str";			   
			   localStorage.setItem(namestr, JSON.stringify(arraynew));
// Retrieve the JSON string
 namestr = localStorage.getItem(namestr);
// Parse the JSON string back to JS object
 namestrparsedstr = name+"strparsedstr";
 namestrparsed = JSON.parse(namestr); 
	console.log(namestrparsed);
	
	if (printyesno == 'yes' && saveyesno =='yes'){
		//do nothing
	}else if (printyesno == 'no' && saveyesno =='yes'){
	alert ("Your Event has been saved");
	}

}


function updatebalance(){
	var totalcharges = document.getElementById("neweventtotalcharges").value;
	var totalpaid = document.getElementById("neweventtotalpaid").value;
	balancedue = (totalcharges - totalpaid);
	//var balancedue = document.getElementById("neweventbalancedue").value;
	
	//this updates balance
	 document.getElementById("neweventbalancedue").value = balancedue;

}


function cancelnewevent() {
	alert ('You have closed this event');
  document.getElementById("neweventform").style.display = "none";
  document.getElementById("divbut").style.display = "none";
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

var printyesno = 'no';
	
		 function printformelements(){
			 printyesno = 'yes';
			 CopyElem();
			 PrintElem('#container');
			 printnewevent();
		 }
		 
		 
	        function CopyElem(elem)
        {
           $('form input[type=text]').each(function() {
             $(this).attr('value', $(this).val());
           });

         //  $('form input[type=checkbox]').each(function() {
         //    $(this).attr('checked', $(this).prop("checked"));
         //  });
        }
    
        function PrintElem(elem)
        {
            Popup($(elem).html());
        }

        function PopupORI(data) 
        {
            var mywindow = window.open('', '', 'height=400,width=600');
           // mywindow.document.write('<html><head><title>my div</title>');
            /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('<link rel="stylesheet" href="tablestyle.css" type="text/css" />');
			mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');
    
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
    
            mywindow.print();
            mywindow.close();
    
            return true;
        }
		
		
		 function Popup(data) 
        {
            var mywindow = window.open('', '', 'height=400,width=600');
           // mywindow.document.write('<html><head><title>my div</title>');
            /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('<link rel="stylesheet" href="tablestyle.css" type="text/css" />');
			mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');
    
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
    
           // mywindow.print();
            mywindow.close();
    
            return true;
        }
		
		
		
		
 function printnewevent() {
	 loaddatatoprint();
	 printdata();
	 
       
    }
	
	function loaddatatoprint(){
		savenewevent(); //this saves the new event form data
		                //to a local storage string.

		var name = document.getElementById("neweventname").value;
		var eventnamestr = 'Event'+name+"str";			   
			  // localStorage.setItem(namestr, JSON.stringify(arraynew));
// Retrieve the JSON string
 varnamestr = localStorage.getItem(eventnamestr);
// Parse the JSON string back to JS object
 //namestrparsedstr = name+"strparsed";
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
	

		
