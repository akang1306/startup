 var matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [0]
 ];

function fade() {
        document.getElementById('fadein').style.opacity =  1;           
}
setTimeout(fade,500);

/*
function onClick() {
   
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      document.getElementById("ran").innerHTML =
      response.value.joke;
    }
  };
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xhttp.send();
}
*/

setTimeout("createTable(matrix)",6000);


var text = document.getElementById('texto');

function read(){
	return new Promise(function(resolve, reject){
		var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        resolve(response);
      }  
    }
		xhttp.open("GET", "https://api.github.com/search/repositories?q=" + text.value , true);
  	xhttp.send();
})
}

function write(content){
  console.log(content);
	//document.getElementById("ran").innerHTML = content.items[0].full_name;
  for (var i = 0  ; i <= content.items.length - 1 ; i++) {
    addList (content.items[i].full_name);
  }
  document.getElementById('fadein').style.backgroundColor =  "white";
}

function onClick(){
	read()
	.then(response => write(response))
  .catch(reject => document.getElementById('fadein').style.backgroundColor =  "red")
}

function addList(content) {
  var ul = document.getElementById("lista");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  ul.appendChild(li);
}

function createTable(m){
  for (var i = 0; i <= m.length - 1 ; i++) {
    createRow(i);
    for (var j = 0 ; j <= m[i].length - 1 ; j++) {
    createData(m[i][j],i);
    }
  } 
}

function createRow(i){
  var table = document.getElementById("tabla");
  var tr = document.createElement("tr");
  table.appendChild(tr);
  tr.setAttribute("id", "row" + i);
  
}

function createData(data,i){
  var tr = document.getElementById("row" + i);
  var td = document.createElement("td");
  td.appendChild(document.createTextNode(data));
  tr.appendChild(td);

}