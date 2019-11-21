function init(){

document.getElementById('entrybutton').addEventListener('click', function(){alert('Ayobami Adebowale has seen your message: ' + document.getElementById('entryinput').value);
	document.getElementById('textoutput').innerHTML = document.getElementById('entryinput').value;
});}
/*if syntax?*/
window.addEventListener('load', init);
