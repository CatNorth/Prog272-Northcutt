
window.onload = function()
{
  // Check for LocalStorage
  if (localStorage) {;
    // Add event listener to submit form
    document.getElementById('contactForm').addEventListener('submit', function()
    {
      // Get value of the name field
      var name=document.getElementById('name').value;
	  // Save user name in localStorage
      localStorage.setItem('name',name);
	  
	  // Get value of the email field
	  var email=document.getElementById('email').value;
	  // Save user email in localStorage
	  localStorage.setItem('email',email);
	  
	  // Get the value of the name field.
	  var message=document.getElementById('message').value;
	  // Save user message in localStorage
	  localStorage.setItem('message',message);
	  
     });
  }

}

//window.onload = function retrieveInfo() 
//{
  // Retrieve user name
  //var name = localStorage.getItem('name');

//  if (name != "undefined" || name != "null") 
//  {
//    document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";

//  	} 
//  	else
//    	document.getElementById('welcomeMessage').innerHTML = "Hello!";
//  }
//}

//function displayAllItems()
//{  
//    for (i=0; i<=localStorage.3-1; i++)  
//    {  
//        key = localStorage.key(i);  
//        alert(localStorage.getItem(key));
//    };  
//}

function display() 
{
	var userDisplay=localStorage.getItem("display");
	
	var userName=localStorage.getItem("name");
	var userEmail=localStorage.getItem("email");
	var userComments=localStorage.getItem("message");
	
	if(userComments==undefined) {
		document.getElementById("userComments").innerHTML="";
	}
	else {
		document.getElementById("userComments").innerHTML="OUTPUT <hr /><br /><br />Your Name:'+userName+'<br /><br />Your email:'+userEmail+'<br /> Your Comments:'+userComments'";
	}
}