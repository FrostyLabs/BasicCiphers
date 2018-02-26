function encrypt(elemento){
	var word = document.getElementsByTagName("textarea")[0].value.replace(/[^a-zA-Z]/g, " "); 
	var word_coded = btoa(word); 
	document.getElementById("result").innerHTML = word_coded;	
}

function decrypt(elemento){
	var word = document.getElementsByTagName("textarea")[0].value; 
	var word_decoded = atob(word); 
	document.getElementById("result").innerHTML = word_decoded;
}