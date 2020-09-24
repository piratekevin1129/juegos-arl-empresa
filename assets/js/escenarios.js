//////////CODIGO PARA OFICINA 4////////////
//areas
//1, casco
//2, gafas
//3, tapabocas
//4, guantes
//5, cuerda
//6, botas
var elementos_epp = [
	{
		id:1,
		nombre:'Botas',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:15,
		y:299,
		area:6,
		ropa:1
	},
	{
		id:2,
		nombre:'Casco',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:32,
		y:-10,
		area:1,
		ropa:2
	},
	{
		id:3,
		nombre:'Cuerda',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:0,
		y:200,
		area:5,
		ropa:3
	},
	{
		id:4,
		nombre:'Gafas',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:36,
		y:31,
		area:2,
		ropa:4
	},
	{
		id:5,
		nombre:'Guantes',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:9,
		y:182,
		area:4,
		ropa:5
	},
	{
		id:6,
		nombre:'Tapabocas',
		img:'',
		img2:'',
		w1:0,
		h1:0,
		w2:0,
		h2:0,
		x:41,
		y:45,
		area:3,
		ropa:6
	}
]

var elementos_epp_correcto = [
	{id:1,value:'no'},
	{id:2,value:'no'},
	{id:3,value:'no'},
	{id:4,value:'yes'},
	{id:5,value:'yes'},
	{id:6,value:'no'}
]

var casilleros_epp = []
var casilleros_epp_unorder = []
var areas_epp = []
var ropas_epp = []

function fillCasilleros(){
	while(casilleros_epp_unorder.length<9){
		var c = getRand(0,8)
		if(!casilleros_epp_unorder.includes(c)){
			casilleros_epp_unorder.push(c)
		}
	}
	for(i = 0;i<casilleros_epp_unorder.length;i++){
		if(casilleros_epp_unorder[i]<=5){
			casilleros_epp.push(casilleros_epp_unorder[i])
		}
	}
}

function findElementoInd(id){
	var ind = -1
	for(var f = 0;f<elementos_epp.length;f++){
		if(elementos_epp[f].id==id){
			ind = f
		}
	}
	return ind
}
function findCorrectoInd(id){
	var ind = -1
	for(var f = 0;f<elementos_epp_correcto.length;f++){
		if(elementos_epp_correcto[f].id==id){
			ind = f
		}
	}
	return ind
}

var beginGame4 = null
var finishGame4 = null
var game4_finished = false

function setEppStands(callback,callback2){
	fillCasilleros()
	beginGame4 = callback
	finishGame4 = callback2
	game4_finished = false
	loadEpps(0)
}

function loadEpps(ee){
	if(ee==elementos_epp.length){
		for(i = 0;i<casilleros_epp_unorder.length;i++){
			var u = casilleros_epp_unorder[i]
			var div_epp = document.createElement('div')
			div_epp.className = 'elemento-epp'

			if(u<=5){
				var h = '<div ind="'+elementos_epp[u].id+'" style="background-image:url('+elementos_epp[u].img+'); width:'+elementos_epp[u].w1+'px; height:'+elementos_epp[u].h1+'px" onmousedown="downElementoEpp(this,event)"</div>'
				div_epp.innerHTML = h
				div_epp.id = 'elemento-epp-'+elementos_epp[u].id
				//div_epp.setAttribute('area',elementos_epp[i].area)
				//div_epp.setAttribute('ropa',elementos_epp[i].ropa)
				//div_epp.setAttribute('ind',elementos_epp[u].id)
				getE('elementos-epp').appendChild(div_epp)

				//ropas
				var div_ropa = document.createElement('div')
				div_ropa.className = 'ropa-epp ropa-epp-off'
				div_ropa.style.width = elementos_epp[u].w2+'px'
				div_ropa.style.height = elementos_epp[u].h2+'px'
				div_ropa.style.left = elementos_epp[u].x+'px'
				div_ropa.style.top = elementos_epp[u].y+'px'
				div_ropa.style.backgroundImage = 'url('+elementos_epp[u].img2+')'
				div_ropa.id = 'ropa-epp-'+elementos_epp[u].ropa
				div_ropa.setAttribute('ind',elementos_epp[u].ropa)
				div_ropa.setAttribute('occuped','no')
				div_ropa.setAttribute('onclick','quitarRopa('+elementos_epp[u].ropa+')')
				getE('personaje_ropas').appendChild(div_ropa)
				ropas_epp.push(div_ropa)

				var div_area = document.createElement('div')
				div_area.className = 'area-epp area-epp-off'
				div_area.id = 'area-epp-'+elementos_epp[u].area
				getE('personaje_areas').appendChild(div_area)
				areas_epp.push(div_area)
			}else{
				getE('elementos-epp').appendChild(div_epp)
			}
		}

		beginGame4()
	}else{
		loadImage({url:'assets/images/pregunta4/epp/'+elementos_epp[ee].id+'.png',callBack:function(data){
			elementos_epp[ee].w1 = data.width
			elementos_epp[ee].h1 = data.height
			elementos_epp[ee].img = data.src
			loadImage({url:'assets/images/pregunta4/epp/'+elementos_epp[ee].id+'-p.png',callBack:function(data){
				elementos_epp[ee].w2 = data.width
				elementos_epp[ee].h2 = data.height
				elementos_epp[ee].img2 = data.src
				ee++
				loadEpps(ee)
			}})
		}})
	}	
}

var actual_elemento_epp = null
var actual_elemento_epp_data = null
var posx_epp = 0
var posy_epp = 0

function downElementoEpp(epp,event){
	if(!game4_finished){
		actual_elemento_epp = epp
		actual_elemento_epp_data = elementos_epp[findElementoInd(epp.getAttribute('ind'))]

		document.addEventListener('mousemove', moveElementoEpp, false)
		document.addEventListener('mouseup', upElementoEpp, false)

		getE('elemento-epp-move').style.width = actual_elemento_epp_data.w2+'px'
		getE('elemento-epp-move').style.height = actual_elemento_epp_data.h2+'px'
		getE('elemento-epp-move').style.backgroundImage = 'url('+actual_elemento_epp_data.img+')'
		getE('elemento-epp-move').className = 'elemento-epp-move-on'
		actual_elemento_epp.classList.add('elemento-epp-hide')

		var rect_parent = game.getBoundingClientRect()
		posx_epp = event.pageX
		posy_epp = event.pageY
		var py = posy_epp-rect_parent.top

		getE('elemento-epp-move').style.left = (posx_epp-(actual_elemento_epp_data.w2/2))+'px'
		getE('elemento-epp-move').style.top = (py-(actual_elemento_epp_data.h2/2))+'px'

		//brillar areas
		var area = getE('area-epp-'+actual_elemento_epp_data.area)
		area.classList.remove('area-epp-off')
		area.classList.add('area-epp-on')
	}
}

function moveElementoEpp(){
	var rect_parent = game.getBoundingClientRect()
	posx_epp = event.pageX
	posy_epp = event.pageY
	var py = posy_epp-rect_parent.top

	getE('elemento-epp-move').style.left = (posx_epp-(actual_elemento_epp_data.w2/2))+'px'
	getE('elemento-epp-move').style.top = (py-(actual_elemento_epp_data.h2/2))+'px'
}

function upElementoEpp(){
	document.removeEventListener('mousemove', moveElementoEpp, false)
	document.removeEventListener('mouseup', upElementoEpp, false)

	var correct = false
	for(i = 0;i<areas_epp.length;i++){
		var clase = areas_epp[i].className

		if(clase.indexOf('area-epp-on')!=-1){
			var rect_area1 = areas_epp[i].getBoundingClientRect()
			
			var rect_area = {
				left:rect_area1.left,
				top:rect_area1.top,
				width:areas_epp[i].offsetWidth,
				height:areas_epp[i].offsetHeight
			}
			
			//console.log(posx_epp,posy_epp,rect_area.left,rect_area.top)
			if(
				posx_epp>=rect_area.left&&
				posx_epp<=(rect_area.left+rect_area.width)&&
				posy_epp>=rect_area.top&&
				posy_epp<=(rect_area.top+rect_area.height)
			){
				//console.log("toca")
				//console.log("en el area correcta")
				//puso correctamente
				correct = true
			}
		}
	}

	getE('elemento-epp-move').className = 'elemento-epp-move-off'
	//ocultar areas
	var area = getE('area-epp-'+actual_elemento_epp_data.area)
	area.classList.remove('area-epp-on')
	area.classList.add('area-epp-off')

	if(correct){
		var ropa = getE('ropa-epp-'+actual_elemento_epp_data.ropa)
		ropa.classList.remove('ropa-epp-off')
		ropa.classList.add('ropa-epp-on')
		ropa.setAttribute('occuped','yes')
	}else{
		actual_elemento_epp.classList.remove('elemento-epp-hide')
	}
}

function quitarRopa(id){
	if(!game4_finished){
		//var data = elementos_epp[findElementoInd(epp.getAttribute('ind'))]	
		var elemento = getE('elemento-epp-'+id).getElementsByTagName('div')[0]
		elemento.classList.remove('elemento-epp-hide')

		var ropa = getE('ropa-epp-'+id)
		ropa.classList.remove('ropa-epp-on')
		ropa.classList.add('ropa-epp-off')
		ropa.setAttribute('occuped','no')
	}
}

var animacion_mensaje_alerta = null
function verPreguntaContenedor4(){
	if(!game4_finished){
		var correctos = 0
		for(i = 0;i<ropas_epp.length;i++){
			var occuped = ropas_epp[i].getAttribute('occuped')
			var id = ropas_epp[i].getAttribute('ind')

			var ind = findCorrectoInd(id)
			//console.log(elementos_epp_correcto[ind].value,occuped)
			if(elementos_epp_correcto[ind].value==occuped){
				correctos++
			}
		}

		if(correctos==ropas_epp.length){
			//quitar todos los eventos
			game4_finished = true
			finishGame4()
		}else{
			getE('contenedor-mensaje-alerta-box').innerHTML = '<p>El personaje no esta con los equipos de protección adecuados, verifica y vuelve a intentar</p>'
			getE('contenedor-mensaje-alerta').className = "contenedor-mensaje-alerta-on"
			animacion_mensaje_alerta = setTimeout(function(){
				clearTimeout(animacion_mensaje_alerta)
				animacion_mensaje_alerta = null

				getE('contenedor-mensaje-alerta').className = "contenedor-mensaje-alerta-off"
			},3000)
		}
	}
}

function resetGame4(){
	beginGame4 = null
	finishGame4 = null
	game4_finished = false

	casilleros_epp = []
	casilleros_epp_unorder = []
	areas_epp = []
	ropas_epp = []

	getE('elementos-epp').innerHTML = ''
	getE('personaje_ropas').innerHTML = ''
	getE('personaje_areas').innerHTML = ''

	actual_elemento_epp = null
	actual_elemento_epp_data = null
	posx_epp = 0
	posy_epp = 0
}