var div=document.createElement("div");

 div.innerHTML='hey hello';
 div.style.color="yellow";
 div.style.fontSize="32px";
 var span=document.createElement("span");
 span.innerHTML="<p> everything is okey<h1>hey hello</h1></p>";
 span.style.color="blue";
 div.append(span);
document.body.append(div);

 var container=document.createElement("div");
 container.setAttribute("class","container");

 var row=document.createElement("div")
 row.setAttribute("class","row");

 var col=document.createElement("div");
col.setAttribute("class","col");


 row.append(col);
 container.append(row);
 document.body.append(container);

 var foo=function(){
     var p=document.createElement("div");
     p.setAttribute("class","main");
     p.innerHTML="p element"
     p.style.color="blue";
     document.body.append(p);
 }

var table=document.createElement("table");
table.setAttribute("class","table");


var thead=document.createElement("thead");
thead.setAttribute("class","thead");
var tr=document.createElement("tr");
var th1=createtrth("th","Fname");
var th2=createtrth("th","Lname");
var th3=createtrth("th","email");
tr.append(th1,th2,th3);
thead.append(tr);



var tbody=document.createElement("tbody");
var tbodytr=document.createElement("tr");
var td1=createtrth("td","guvi");
var td2=createtrth("td","geek");
var td3=createtrth("td","guvigeek");
tbodytr.append(td1,td2,td3);
tbody.append(tbodytr);



var tbody1=document.createElement("tbody");
var tbodytr=document.createElement("tr");
var td11=createtrth("td","ram");
var td12=createtrth("td","sam");
var td13=createtrth("td","samram");
tbodytr.append(td11,td12,td13);
tbody.append(tbodytr);



var tbody2=document.createElement("tbody");
var tbodytr=document.createElement("tr");
var td21=createtrth("td","chota");
var td22=createtrth("td","bheem");
var td23=createtrth("td","chotabheem");
tbodytr.append(td21,td22,td23);
tbody.append(tbodytr);



thead.style.backgroundColor="yellow";
thead.style.color="blue";
tbody.style.backgroundColor="pink";
tbody.style.color="green";



table.append(thead,tbody,tbody1,tbody2);

document.body.append(table);





function createtrth(elementname,value=""){
var td=document.createElement(elementname);
td.innerHTML=value;
return td;
}
