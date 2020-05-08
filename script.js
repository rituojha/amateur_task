function onDocLoad(){
	var data;
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			 data = JSON.parse(this.responseText);
			 loadData();
		}
	};
	http.open("GET", "data.json", true);
	http.send(); 
		function loadData(){
			data.map((v)=>{
				var x = document.createElement("li");
				var innerText = document.createTextNode(v.name + " " + v.age);
				x.appendChild(innerText);
				document.getElementById("list").appendChild(x);
			})
		}
}