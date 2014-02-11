<script>

window.addEventListener("load",init);

function init() {

if(typeof(Storage)!=="undefined")
  {
  localStorage.lastname="name";
  document.getElementById("result").innerHTML="Name: " + localStorage.lastname;
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage.";
  }
//</script>

//	if(typeof(Storage)!=="undefined")
//	{
//		display();
		
//		var button=document.getElementById("button");
//		button.addEventListener("click",saveInfo());
//	}

//	else {
//	  document.write="Sorry, your browser does not support web storage.";
//	}
//}

function saveInfo() {
	var name=document.getElementById("name").value;
	var comments=document.getElementById("comments").value;
	
	localStorage.setItem("userName",name);
	localStorage.setItem("userComments",comments);
	display();
}

function display() {
	var rightBox=document.getElementById("useroutput");
	
	var theName=localStorage.getItem("userName");
	var theComments=localStorage.getItem("userComments");
	
	if(theComments==undefined) {
		document.getElementById("useroutput").innerHTML="";
	}
	else {
		document.getElementById("useroutput").innerHTML="OUTPUT <hr /><br /><br />Your Name:'+theName+'<br /><br /> Your Comments:'+theComments'";
	}
}

</script>