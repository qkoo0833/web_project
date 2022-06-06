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

document.getElementById("main").setAttribute('src','../image/'+array[0].value+"_detail.png");