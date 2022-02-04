var saves=[];
var data={};
function main(){

if (localStorage.std == undefined){
    localStorage.std=JSON.stringify(saves);
 }

 let r = document.getElementById("Output");
 saves = JSON.parse(localStorage.std);
 r.innerHTML="";
 for (let i = 0; i < saves.length; i++) {
   r.innerHTML= r.innerHTML + i +" - "+ saves[i].Name +" " + saves[i].tarich+" " +saves[i].time + "<br>";

}
}

function save(){
   
    var stdname = document.getElementById("txt").value;
    var tarich=document.getElementById("date").value;
    var time=document.getElementById("time").value;
  if( stdname!="" && tarich!="" && time!=""){
     data={Name:stdname,tarich:tarich,time:time};
     saves= JSON.parse(localStorage.std);
     saves.push(data);
     localStorage.std=JSON.stringify(saves);
     document.getElementById("txt").value="";
      }
   else{
          alert("Enter student Name and date and time" );
        }
        let r = document.getElementById("Output");
        saves = JSON.parse(localStorage.std);
        r.innerHTML="";
        for (let i = 0; i < saves.length; i++) {
           r.innerHTML= r.innerHTML + i +" - "+ saves[i].Name +" " + saves[i].tarich+" " +saves[i].time + "<br>";
        // fill();
}

}



function del(){
 
 if( saves!=""){
    
    saves= JSON.parse(localStorage.std);
    saves.pop(data);
    localStorage.std=JSON.stringify(saves);

     }
  else{
         alert("free");
       }
       let r = document.getElementById("Output");
       saves = JSON.parse(localStorage.std);
       r.innerHTML="";
       for (let i = 0; i < saves.length; i++) {
         r.innerHTML= r.innerHTML + i +" - "+ saves[i].Name +" " + saves[i].tarich+" " +saves[i].time + "<br>";
      
}

}
function removeIteme(){


localStorage.removeItem("std");
if(localStorage.getItem("stdname")==null){ 
document.getElementById("Output").innerHTML="local storge value :- " + localStorage.getItem("saves");
}

}
