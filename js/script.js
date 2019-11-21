function init(){
//add your javascrip between these two lines of code

document.getElementById('entrybutton').addEventListener('click', function(){alert('Ayobami Adebowale has seen your message: ' + document.getElementById('entryinput').value);
	document.getElementById('textoutput').innerHTML = document.getElementById('entryinput').value;
});}

window.addEventListener('load', init);
