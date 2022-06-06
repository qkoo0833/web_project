var params = location.search.substr(location.search.indexOf("?") + 1);
var array =[];
params = params.split("&");

for (var i = 0; i < params.length; i++) {
    temp = params[i].split("=");
    var tempObjct = new Object();
    tempObjct.name = temp[0];
    tempObjct.value = temp[1];
    array.push(tempObjct);
}

result = array.sort((a,b)=>b.value - a.value)
console.log(result)

for (var i=0; i< array.length; i++){
    if(i==0){
        document.getElementsByClassName("result_arr").item(0).setAttribute('src',"../image/"+array[0].name+"_l.png"); 
        document.getElementsByClassName("anchor").item(0).setAttribute('href',"./detail.html?image="+array[0].name);
    }else{
        document.getElementsByClassName("result_arr").item(i).setAttribute('src',"../image/"+array[i].name+"_s.png");
        document.getElementsByClassName("anchor").item(i).setAttribute('href',"./detail.html?image="+array[i].name); 
    }
}