function testUser(){
    var XHR;
	if (window.ActiveXObject) {
    	//For Microsoft Browsers
        XHR=new ActiveXObject("Microsoft.XMLHTTP");		
    }
    else if (window.XMLHttpRequest){
    	//For Mozilla and Non Microsoft Browsers
    	XHR=new XMLHttpRequest();	
    }
    XHR.open("GET", "login.json" ,true);	
    //XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    XHR.onreadystatechange = function(){displayMessage(XHR);};
    //XHR.send("adminName="+str);
    XHR.send();
}
    	
function displayMessage(XHR){
    if(XHR.readyState==4){
 		if(XHR.status==200){
    		console.log("Hi ajax call made");
    		var d=JSON.parse(XHR.responseText);
    		var check=0;
    		for(i=0;i<3;i++){
    			var name=document.getElementById("username1").value;
    			console.log("name "+name);
    			var password= document.getElementById("password1").value;
    			console.log("pass "+password);
    			if(d[i].user===name){
    				if(d[i].password===password){
    					alert("Login Successfull");
    					localStorage.name=name;
    					check=1;                 
    					location.assign("./Home.html");		
    				}
    			}				
    		}
    		if(check===0){
    			alert("wrong UserID/Password:");	
    		    location.reload();
    		}					
    	}
    }
}
    	
    
    
    
    /*var count=data.length;
    var i=0;
    var check=0;
    while(i<count)
    {
        var name=document.getElementById("username1").value;
        console.log("name "+name);
        var password= document.getElementById("password1").value;
        console.log("pass "+password);
        if(data[i].user==name)
        {
            console.log(data[i].user);
            if(data[i].password==password)
            {
                console.log(data[i].password);
                alert("Login Successfull");
                localStorage.name=name;
                check=1;
                break;					
            }
        }
        i++;				
    }
    if(check==0)
    {
        alert("wrong UserID/Password:");	
        location.reload();		
    }
 
 }*/
function test(){
    document.getElementById("container").style.display="none";
    document.getElementById("container1").style.display="block";
}
function signup(){
    location.assign("Login.html");
}
function cancel(){
    location.assign("Login.html");
}
function logout(){
    localStorage.clear();
    alert("Logout successful");
    location.assign("Login.html");
}
/* insight webpage */
function carDetails(img){
    var XHR;
    var image=img;
    if (window.ActiveXObject){
		//For Microsoft Browsers
	XHR=new ActiveXObject("Microsoft.XMLHTTP");		
    }
    else if (window.XMLHttpRequest){
	//For Mozilla and Non Microsoft Browsers
	XHR=new XMLHttpRequest();	
    }
    XHR.open("GET", "cardetails.json" ,true);	
    //XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    XHR.onreadystatechange = function ( ) {
        displayCarDetails(XHR,image);
    };
    //XHR.send("adminName="+str);
    XHR.send();
}
function displayCarDetails(XHR,image){
    var imageClicked=image.id;
    console.log(image.id);
    if(XHR.readyState==4){		
        if(XHR.status==200){	
            var d=JSON.parse(XHR.responseText);
            console.log(d);
            var i=0;
            console.log(i);
            headings=new Array(4);
            headings[0]="Car Manufacturer";
            headings[1]="Price";
            headings[2]="Speed";
            headings[3]="Launched";
            if(document.getElementById("data").hasChildNodes()){
                while (document.getElementById("data").firstChild) 
                    document.getElementById("data").removeChild(document.getElementById("data").firstChild); 
            }
            for (i=0;i<d.length;i++){
                console.log(d[i].img_id);
                if(d[i].img_id==imageClicked){
                    var table=document.createElement("table");
                    table.setAttribute("id","table2");
                    var tr1 = document.createElement('tr'); 
                    var th1 = document.createElement('th');
                    var txt1 = document.createTextNode('Car Manufacturer');
                    th1.appendChild(txt1);                     
                    var td1 = document.createElement('td');
                    var tdtxt1 = document.createTextNode(d[i].car_manufacturer);
                    td1.appendChild(tdtxt1);  
                    tr1.appendChild(th1);
                    tr1.appendChild(td1);
                    var tr2 = document.createElement('tr'); 
                    var th2 = document.createElement('th');
                    var txt2 = document.createTextNode('Price');
                    th2.appendChild(txt2);
                    var td2 = document.createElement('td');
                    var tdtxt2 = document.createTextNode(d[i].Price);
                    td2.appendChild(tdtxt2);  
                    tr2.appendChild(th2);
                    tr2.appendChild(td2);
                    var tr3 = document.createElement('tr'); 
                    var th3 = document.createElement('th');
                    var txt3 = document.createTextNode('Speed');
                    th3.appendChild(txt3);   
                    var td3 = document.createElement('td');
                    var tdtxt3 = document.createTextNode(d[i].features.top_speed);
                    td3.appendChild(tdtxt3);  
                    tr3.appendChild(th3);
                    tr3.appendChild(td3);
                    var tr4 = document.createElement('tr'); 
                    var th4 = document.createElement('th');
                    var txt4 = document.createTextNode('Launched');
                    th4.appendChild(txt4);              
                    var td4 = document.createElement('td');
                    var tdtxt4 = document.createTextNode(d[i].features.todate);
                    td4.appendChild(tdtxt4);
                    tr4.appendChild(th4);
                    tr4.appendChild(td4);
                    table.appendChild(tr1);
                    table.appendChild(tr2);
                    table.appendChild(tr3);
                    table.appendChild(tr4);
                   document.getElementById("data").appendChild(table);                       
                }                     
            }			
	    }else{
        document.getElementId("error").innerHTML=XHR.statusText;
        document.getElementById("error").style.display="block";
	    }
    }
}
/* purchase webpage script */
function getSellItems(){
    var XHR;
    if (window.ActiveXObject) {
	//For Microsoft Browsers
	XHR=new ActiveXObject("Microsoft.XMLHTTP");		
    }
    else if (window.XMLHttpRequest){
	//For Mozilla and Non Microsoft Browsers
	XHR=new XMLHttpRequest();	
    }
    XHR.open("GET", "car_data.json" ,true);	
    //XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    XHR.onreadystatechange = function(){
        displaySellItems(XHR);
    };
    //XHR.send("adminName="+str);
    XHR.send();
}
function displaySellItems(XHR){
    var brand=document.getElementById("brand").value;
    console.log(brand);
    if(XHR.readyState==4){		
        if(XHR.status==200){	
            /*if(document.getElementById("cardetails").hasChildNodes())
            {
                while (document.getElementById("cardetails").firstChild) 
                            document.getElementById("cardetails").removeChild(document.getElementById("div1").firstChild); 
            }*/
            while(document.getElementById("cardetails").hasChildNodes())
                document.getElementById("cardetails").removeChild(document.getElementById("cardetails").lastChild);
            var data=JSON.parse(XHR.responseText);
            for(var make in data.cars){
                for(var model in data.cars[make]){
                    if(brand==make){
                        var h1Element=document.createElement("h1");
                        var txt=document.createTextNode(data.cars[make][model].heading);
                        h1Element.appendChild(txt);         
                        var paragraphElement=document.createElement("p");
                        paragraphElement.setAttribute("id","p1");
                        var paragraphText=document.createTextNode(data.cars[make][model].description);
                        paragraphElement.appendChild(paragraphText);
                        console.log(data.cars[make][model].heading);
                        var imgelem=document.createElement("img");
                        imgelem.setAttribute("class","imgclass");
                        imgelem.setAttribute("src",data.cars[make][model].img_url);
                        document.getElementById("cardetails").appendChild(h1Element);
                        document.getElementById("cardetails").insertBefore(imgelem,h1Element.nextSibling);
                        document.getElementById("cardetails").insertBefore(paragraphElement,imgelem.nextSibling);         
                        //document.getElementById("cardetails").appendChild(imgelem);
                        //document.getElementById("cardetails").appendChild(paragraphElement);
                    }
                }
            }
        }else{
            document.getElementId("error").innerHTML=XHR.statusText;
            document.getElementById("error").style.display="block";
	    }
    }
}
