

     function setItem(typ) {
	   var data = document.forms.entryForm.data.value;
       var name = document.forms.entryForm.name.value;
	   var email = document.forms.entryForm.email.value;
	   var comments = document.forms.entryForm.comments.value;
	   	   
       if (typ == "local") {
              localStorage.setItem("Name", name, data);
			  localStorage.setItem("Email", email, data);
			  localStorage.setItem("Comments", comments, data);
       } else {
              sessionStorage.setItem("Name", name, data);
			  sessionStorage.setItem("Email", email, data);
			  sessionStorage.setItem("Comments",comments, data);
       }

       showAll();
     }

     function getItem(typ) {
       var name = document.forms.entryForm.name.value;
       if (typ == "local") {
               document.forms.entryForm.data.value = localStorage.getItem(name);
       } else {
               document.forms.entryForm.data.value = sessionStorage.getItem(name);
       }
       showAll();
     }

     function removeItem(typ) {
       var name = document.forms.entryForm.name.value;
       if (typ == "local") {
               document.forms.entryForm.data.value = localStorage.removeItem(name);
       } else {
               document.forms.entryForm.data.value = sessionStorage.removeItem(name);
       }
       showAll();
     }

     function clearStorage(typ) {
       if (typ == "local") {
               localStorage.clear();
       } else {
               sessionStorage.clear();
       }
       showAll();
     }
     function showAll() {
       var key = "";
       var pairs = "<tr><th>Type</th><th>Name</th><th>Value</th></tr>\n";
       for (var s in window) {
            switch (s) {
                case "sessionStorage":
                    var j=0;
                    for (j=0; j<=sessionStorage.length-1; j++) {
                    key = sessionStorage.key(j);
                    pairs +=
"<tr style='background-color:#F1F0FF;width:100px;padding:5px;'><td style='border-width:medium;width:100px;padding:5px;'>session</td><td style='border-width:medium;width:100px;padding:5px;'>"+key+"</td>\n<td style='border-width:medium;width:100px;padding:5px;'>"+sessionStorage.getItem(key)+"</td></tr>\n";
                   }
               break;
               case "localStorage":
               var i=0;
               for (i=0; i<=localStorage.length-1; i++) {
               key = localStorage.key(i);
               pairs +=
"<tr style='background-color:#F1F0FF;width:100px;padding:5px;'><td style='border-width:medium;width:100px;padding:5px;'>local</td><td style='border-width:medium;width:100px;padding:5px;'>"+key+"</td>\n<td style='border-width:medium;width:100px;padding:5px;'>"+localStorage.getItem(key)+"</td></tr>\n"; }
               break;
            }
       }
       if (pairs == "<tr><th>Type</th><th>Name</th><th>Value</th></tr>\n")
       { pairs +=
"<tr><td>empty</td>\n<td>empty</td>\n<td>empty</td></tr>\n";
       }
       document.getElementById('items_tbl').innerHTML = pairs;
     }
