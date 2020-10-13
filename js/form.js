
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
	e.preventDefault();
	console.log('Diste Clik');

	var datos = new FormData('formulario');

	console.log(datos)
	console.log(datos.get('name'))
	console.log(datos.get('email'))
	console.log(datos.get('asunto'))
	console.log(datos.get('message'))
})
