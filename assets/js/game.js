var i = 0
var j = 0
var k = 0

function getRand(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function unorderArrayElementos(long,_test,counter){
	var desorden = []
	while(desorden.length<long){
		var a = getRand(0,(long-1))
		var a_exists = desorden.includes(a)
		while(a_exists){
			a = getRand(0,(long-1))
			a_exists = desorden.includes(a)
		}
		desorden.push(a)
	}

	if(counter==null||counter==undefined){
		counter = false
	}

	if(_test==null||_test==undefined){
		_test = new Array()
		for(k = 0;k<long;k++){
			if(counter){
				_test.push((k+1))	
			}else{
				_test.push(k)
			}
		}
	}

	var nuevo = []
	for(var ii = 0;ii<long;ii++){
		nuevo.push(_test[desorden[ii]])
	}
	return nuevo
}

var game = getE('game')
var game_scene = getE('game-scene')
game_scene.style.visibility = 'hidden'
var game_rect = game.getBoundingClientRect()
var game_width = game_rect.width
var game_height = game_rect.height
console.log(game_width,game_height)

function setInstrucciones(start){
	var html = ''
	
	//html+='<div class="modal-instrucciones-gif"><div onclick="setVideoInstrucciones(this)"><video loop><source type="video/mp4" src="assets/images/instrucciones_sp.mp4" /></video><button></button></div></div>'
	
	
	html+='<p>Bienvenido, <span>ARL SURA</span> te invita a poner a prueba tu nivel de conocimiento por medio del juego interactivo:</p>'
	html+='<p><span>"Arma las parejas de los equipo de protección personal"</span></p>'
	
	html+='<p>Para hacerlo debes hacer clic en las cajas que se encuentran en el escenario, pero no te apresures y concéntrate, para que lo realices en el tiempo previsto.</p>'
	html+='<p><span>¡Animo! empieza a jugar.</span></p>'

    if(ismobile){
    	
    }else{
    	
    }

    if(start){
    	setModal({
	    	close:false,
			title:'Instrucciones',
			content:html,
			button:true,
			value:'jugar',
			orientation:'left',
			action:'empezarJuego',
			personaje:'off'
	    })
    }else{
    	setModal({
	    	close:false,
			title:'Instrucciones',
			content:html,
			button:true,
			value:'aceptar',
			orientation:'left',
			action:'seguirJuego',
			personaje:'off'
	    })
    }
}

var animacion_swipe = null
function empezarJuego(){
	getE('cargador').className = 'cargador-on'
	unsetModal(function(){
		game_scene.style.visibility = 'visible'
		getE('home-scene').style.display = 'none'

		setMensaje({
			content:'<p>Exploremos la empresa y encontremos todos los premios.</p>',
			delay:4000
		})
		
		getE('cargador').className = 'cargador-off'

		if(isresponsive){
			/*getE('cursor-swipe').classList.add('cursor-swipe-animation-1')
			getE('fondo-casilleros').classList.add('cursor-swipe-animation-2')
			getE('casilleros').classList.add('cursor-swipe-animation-2')
			getE('personaje').classList.add('cursor-swipe-animation-3')
			
			animacion_swipe = setTimeout(function(){
				getE('cursor-swipe').classList.remove('cursor-swipe-animation-1')
				getE('fondo-casilleros').classList.remove('cursor-swipe-animation-2')
				getE('casilleros').classList.remove('cursor-swipe-animation-2')
				getE('personaje').classList.remove('cursor-swipe-animation-3')
				getE('cursor-swipe').style.display = 'none'

				clearTimeout(animacion_swipe)
				animacion_swipe = null

				iniciarReloj()
			},6000)*/

		}else{
			
		}
	})
}

function setGame(){
	//cargar imagen de los pisos
	loadImage({url:'assets/images/piso1.jpg',callBack:function(data){
		piso1_data = {width:data.width,height:data.height,src:data.src}
		loadImage({url:'assets/images/piso2.jpg',callBack:function(data){
			piso2_data = {width:data.width,height:data.height,src:data.src}

			setFloor(1,true)
			addEvents()
			/*jQuery("body").mouseleave(function() {
				focusOut()
		  	});*/

			////////AQUI EMPIEZA TODOO///////
			
			animation_start = setTimeout(function(){
				clearTimeout(animation_start)
				animation_start = null

				getE('cargador').className = 'cargador-off'	
				//setInstrucciones(true)
				empezarJuego()
			},1000)
		}})		
	}})
}

var actual_floor = 0
var piso_container = getE('piso-container')
var piso_container_rect = piso_container.getBoundingClientRect()
var piso = getE('piso')
var paredes = getE('paredes')
var piso1_data = null
var piso2_data = null

function setFloor(floor,start){
	clearFloor()

	actual_floor = floor
	var walls = []
	if(floor==1){
		piso_container.style.width = piso1_data.width+'px'
		piso_container.style.height = piso1_data.height+'px'
		piso.style.backgroundImage = 'url('+piso1_data.src+')'
		piso_data.width = piso1_data.width
		piso_data.height = piso1_data.height
		walls = paredes_piso1 

		//carro
		var carro = document.createElement('div')
		carro.className = 'icono-auto'
		carro.innerHTML = '<div class="icono-auto-light"></div><div class="icono-auto-img"></div>'
		piso.appendChild(carro)
		//area del carro
		var carro_area = document.createElement('div')
		carro_area.className = 'icono-auto-area'

		carro_area.setAttribute('id','carro')
		carro_area.setAttribute('type','carro')
		paredes.appendChild(carro_area)
		piso_data.elementos.push(carro_area)

		//put avatar
		if(start){
			avatar_data.left = 250
			avatar_data.top = 60
			piso_data.left = 0
			piso_data.top = 0
			movex = 1
			movey = 1
		}else{
			//al pie de las escaleras
			avatar_data.left = 300
			avatar_data.top = 252
			piso_data.left = 0
			piso_data.top = -87
			movex = 1
			movey = 2
		}
		
	}else if(floor==2){
		piso_container.style.width = piso2_data.width+'px'
		piso_container.style.height = piso2_data.height+'px'
		piso.style.backgroundImage = 'url('+piso2_data.src+')'
		piso_data.width = piso2_data.width
		piso_data.height = piso2_data.height
		walls = paredes_piso2

		//put avatar
		if(start){
			//nunca va a entrar aqui pero bueno
			avatar_data.left = 250
			avatar_data.top = 60
			piso_data.left = 0
			piso_data.top = 0
			movex = 1
			movey = 1
		}else{
			//al pie de las escaleras
			avatar_data.left = 85
			avatar_data.top = 219
			piso_data.left = 0
			piso_data.top = 0
			movex = 1
			movey = 1
		}
	}

	//put avatar
	avatar.style.top = avatar_data.top+'px'
	avatar.style.left = avatar_data.left+'px'//150
	//set piso coords
	piso.style.top = piso_data.top+'px'
	piso.style.left = piso_data.left+'px'
	paredes.style.top = piso_data.top+'px'
	paredes.style.left = piso_data.left+'px'

	//poner elementos de cada oficina (icono, llave, premio, empleado y puerta)
	for(i = 0;i<oficinas.length;i++){
		var office = oficinas[i]
		if(office.piso==floor){

			if(office.icon==null||office.icon==undefined){
				var icon = document.createElement('div')
				icon.className = 'icono-oficina'
				icon.innerHTML = office.id
				icon.style.left = office.posx+'px'
				icon.style.top = office.posy+'px'
				piso.appendChild(icon)
			}			

			if(office.puerta!=null&&office.puerta!=undefined){
				if(office.puerta!=false){
					var puerta = document.createElement('div')	
					puerta.className = 'icono-puerta'
					puerta.setAttribute('id','puerta'+office.id)
					puerta.setAttribute('ind',office.id)
					puerta.setAttribute('type','puerta')
					puerta.style.width = office.puerta.w+'px'
					puerta.style.height = office.puerta.h+'px'
					puerta.style.left = office.puerta.x+'px'
					puerta.style.top = office.puerta.y+'px'
					
					piso.appendChild(puerta)
					piso_data.elementos.push(puerta)
				}
				
			}

			if(office.empleado!=null&&office.empleado!=undefined){
				if(office.empleado!=false){
					var empleado_data = getEmpleadoData(office.empleado)
					var empleado = document.createElement('div')
					empleado.className = 'icono-empleado'
					empleado.innerHTML = '<div class="icono-empleado-light"></div><div class="icono-empleado-img"></div>'
					empleado.style.left = empleado_data.posx+'px'
					empleado.style.top = empleado_data.posy+'px'
					empleado.style.transform = 'rotate('+empleado_data.rotation+'deg)'
					empleado.style.webkitTransform = 'rotate('+empleado_data.rotation+'deg)'
					empleado.style.oTransform = 'rotate('+empleado_data.rotation+'deg)'

					empleado.setAttribute('id','empleado'+empleado_data.id)
					empleado.setAttribute('ind',empleado_data.id)
					empleado.setAttribute('type','empleado')
					piso.appendChild(empleado)
					piso_data.elementos.push(empleado)
				}
			}

			if(office.premio!=null&&office.premio!=undefined){
				if(office.premio!=false){
					var premio = document.createElement('div')
					premio.className = 'icono-premio'
					premio.innerHTML = '<div class="icono-premio-light"></div><div class="icono-premio-img"></div>'
					premio.style.left = office.premio.x+'px'
					premio.style.top = office.premio.y+'px'

					premio.setAttribute('type','premio')
					empleado.setAttribute('ind',office.id)
					premio.setAttribute('id','premio'+office.premio.id)
					piso.appendChild(premio)
					piso_data.elementos.push(premio)
				}
				
			}

			if(office.llave!=null&&office.llave!=undefined){
				if(office.llave!=false){
					var llave_data = getLlaveData(office.llave)
					var llave = document.createElement('div')
					llave.className = 'icono-llave'
					llave.innerHTML = '<div class="icono-llave-light"></div><div class="icono-llave-img"></div>'
					llave.style.left = llave_data.x+'px'
					llave.style.top = llave_data.y+'px'
					
					llave.setAttribute('id','llave'+llave_data.id)
					llave.setAttribute('key',llave_data.key)
					llave.setAttribute('type','llave')
					llave.setAttribute('ind',llave_data.id)
					piso.appendChild(llave)
					piso_data.elementos.push(llave)
				}
			}
		}
	}

	//poner paredes
	piso_data.paredes = []
	for(i = 0;i<walls.length;i++){
		var pared = document.createElement('div')
		pared.className = 'icono-pared'
		pared.style.width = walls[i].w+'px'
		pared.style.height = walls[i].h+'px'
		pared.style.left = walls[i].x+'px'
		pared.style.top = walls[i].y+'px'
		paredes.appendChild(pared)
		piso_data.paredes.push(pared)
	}

	//poner area de las escaleras
	var escaleras = document.createElement('div')
	escaleras.className = 'icono-escaleras icono-escaleras-piso-'+floor
	escaleras.setAttribute('id','escaleras')
	escaleras.setAttribute('type','escaleras')

	paredes.appendChild(escaleras)
	piso_data.elementos.push(escaleras)
}

function clearFloor(){
	piso.innerHTML = ''
	paredes.innerHTML = ''
	piso_data = {
		left:0,
		top:0,
		width:0,
		height:0,
		paredes:[],
		elementos:[]
	}
	piso_data.left = 0
	piso_data.top = 0
	piso.style.left = '0px'
	piso.style.top = '0px'
	paredes.style.left = '0px'
	paredes.style.top = '0px'
	avatar_data.left = 0
	avatar_data.top = 0
	avatar.style.left = '0px'
	avatar.style.top = '0px'
}

///////////EVENTOS DEL TECLADO///////////
var avatar = getE('avatar')
var avatar_data = {
	left:0,
	top:0,
	width:30,
	height:28,
	area:8,
	llaves:[]
}
var piso_data = {
	left:0,
	top:0,
	width:0,
	height:0,
	paredes:[],
	elementos:[]
}
var avatar_speed = 0
var avatar_aceleration = 0.2
var animacion_avatar = null
var animacion_avatar_2 = null//animacion para animar el avatar detras de escena

var direccion_x = null
var direccion_y = null

function addEvents(){
	window.addEventListener('keydown',downTecla, false)
	window.addEventListener('keyup',upTecla, false)
	//document.addEventListener("visibilitychange", onchange);
	//window.addEventListener('mouseout',focusOut, false)
}
function removeEvents(){
	window.removeEventListener('keydown',downTecla, false)
	window.removeEventListener('keyup',upTecla, false)

	direccion_x = null
	direccion_y = null
	clearInterval(animacion_avatar)
	spdStopAnimation(0)
}

function focusOut(){
	getE('focus-msg').className = 'focus-on'
}

function focusOn(){
	getE('focus-msg').className = 'focus-off'
}

function downTecla(e){
	//console.log(e.keyCode)
	var put_events = false
	if(e.keyCode==37){
		//izquierda
		direccion_x = 'left'
		avatar_speed = 0
		put_events = true
		avatar.className = 'avatar-left'
	}else if(e.keyCode==39){
		//derecha
		direccion_x = 'right'
		avatar_speed = 0
		put_events = true
		avatar.className = 'avatar-right'
	}else if(e.keyCode==38){
		//arriba
		direccion_y = 'up'
		avatar_speed = 0
		put_events = true
		avatar.className = 'avatar-up'
	}else if(e.keyCode==40){
		//abajo
		direccion_y = 'down'
		avatar_speed = 0
		put_events = true
		avatar.className = 'avatar-down'
	}
	if(put_events){
		animacion_avatar = setInterval(moveAvatar,20)
		spdPlayAnimation({frame:1,stop:0,loop:true},0)
		window.removeEventListener('keydown',downTecla, false)
	}
}

function upTecla(e){
	var put_events = false
	if(e.keyCode==37){
		//izquierda
		direccion_x = null
		put_events = true
	}else if(e.keyCode==39){
		//derecha
		direccion_x = null
		put_events = true
	}else if(e.keyCode==38){
		//arriba
		direccion_y = null
		put_events = true
	}else if(e.keyCode==40){
		//abajo
		direccion_y = null
		put_events = true
	}

	if(put_events){
		window.addEventListener('keydown',downTecla, false)
		clearInterval(animacion_avatar)
		spdStopAnimation(0)
	}
}

var movex = 1
var movey = 1
function moveAvatar(back){
	if(back==undefined||back==null){
		back = false
	}
	//console.log("back: "+back)
	
	var new_left = 0
	var check_collision = null

	if(direccion_x=='left'){
		if(movex==1){
			new_left = avatar_data.left-avatar_speed
			if(new_left<0){
				new_left = 0
			}
			if(
				new_left<(game_width/2)&&
				piso_data.left==(0-(piso_data.width-game_width))
			){
				movex = 2
			}
		}

		if(movex==2){
			new_left = piso_data.left+avatar_speed
			if(new_left>0){
				piso.style.left = '0px'
				paredes.style.left = '0px'
				piso_data.left = 0
				movex = 1
				new_left = (game_width/2)
			}
		}

		
		if(movex==1){
			if(back){
				avatar.style.left = new_left+'px'
				avatar_data.left = new_left
			}else{
				check_collision = checkCollision(new_left,null,true,back)
				if(!check_collision.collision){
					avatar.style.left = new_left+'px'
					avatar_data.left = new_left
				}
			}
		}else if(movex==2){
			if(back){
				piso.style.left = new_left+'px'
				paredes.style.left = new_left+'px'
				piso_data.left = new_left
			}else{
				check_collision = checkCollision(new_left,null,false,back)
				if(!check_collision.collision){
					piso.style.left = new_left+'px'
					paredes.style.left = new_left+'px'
					piso_data.left = new_left
				}
			}
		}	
	}else if(direccion_x=='right'){
		if(movex==1){
			new_left = avatar_data.left+avatar_speed
			if(
				new_left>(game_width/2)&&
				piso_data.left==0
			){
				avatar.style.left = (game_width/2)+'px'
				avatar_data.left = (game_width/2)
				movex = 2
			}
			if(new_left>(game_width-avatar_data.width)){
				new_left = (game_width-avatar_data.width)
			}
		}
		if(movex==2){
			new_left = piso_data.left-avatar_speed
			if(new_left<(0-(piso_data.width-game_width))){
				piso.style.left = (0-(piso_data.width-game_width))+'px'
				paredes.style.left = (0-(piso_data.width-game_width))+'px'
				piso_data.left = (0-(piso_data.width-game_width))
				movex = 1
				new_left = (game_width/2)
			}
		}

		if(movex==1){
			if(back){
				avatar.style.left = new_left+'px'
				avatar_data.left = new_left	
			}else{
				check_collision = checkCollision(new_left,null,true,back)
				if(!check_collision.collision){
					avatar.style.left = new_left+'px'
					avatar_data.left = new_left	
				}
			}
				
		}else if(movex==2){
			if(back){
				piso.style.left = new_left+'px'
				paredes.style.left = new_left+'px'
				piso_data.left = new_left
			}else{
				check_collision = checkCollision(new_left,null,false,back)
				if(!check_collision.collision){
					piso.style.left = new_left+'px'
					paredes.style.left = new_left+'px'
					piso_data.left = new_left
				}
			}
		}	
	}

	var new_top = 0
	
	if(direccion_y=='up'){
		if(movey==1){
			new_top = avatar_data.top-avatar_speed
			if(new_top<0){
				new_top = 0
			}
			if(
				new_top<(game_height/2)&&
				piso_data.top==(0-(piso_data.height-game_height))
			){
				movey = 2
			}
		}

		if(movey==2){
			new_top = piso_data.top+avatar_speed
			if(new_top>0){
				piso.style.top = '0px'
				paredes.style.top = '0px'
				piso_data.top = 0
				movey = 1
				new_top = (game_height/2)
			}
		}
		
		if(movey==1){
			if(back){
				avatar.style.top = new_top+'px'
				avatar_data.top = new_top
			}else{
				check_collision = checkCollision(null,new_top,true,back)
				if(!check_collision.collision){
					avatar.style.top = new_top+'px'
					avatar_data.top = new_top
				}
			}
				
		}else if(movey==2){
			check_collision = checkCollision(null,new_top,false,back)
			if(!check_collision.collision){
				piso.style.top = new_top+'px'
				paredes.style.top = new_top+'px'
				piso_data.top = new_top
			}
		}
	}else if(direccion_y=='down'){
		if(movey==1){
			new_top = avatar_data.top+avatar_speed
			if(
				new_top>(game_height/2)&&
				piso_data.top==0
			){
				avatar.style.top = (game_height/2)+'px'
				avatar_data.top = (game_height/2)
				movey = 2
			}
			if(new_top>(game_height-avatar_data.height)){
				new_top = (game_height-avatar_data.height)
			}
		}
		if(movey==2){
			new_top = piso_data.top-avatar_speed
			if(new_top<(0-(piso_data.height-game_height))){
				piso.style.top = (0-(piso_data.height-game_height))+'px'
				paredes.style.top = (0-(piso_data.height-game_height))+'px'
				piso_data.top = (0-(piso_data.height-game_height))
				movey = 1
				new_top = (game_height/2)
			}
		}

		if(movey==1){
			if(back){
				avatar.style.top = new_top+'px'
				avatar_data.top = new_top
			}else{
				check_collision = checkCollision(null,new_top,true,back)
				if(!check_collision.collision){
					avatar.style.top = new_top+'px'
					avatar_data.top = new_top
				}
			}
				
		}else if(movey==2){
			if(back){
				piso.style.top = new_top+'px'
				paredes.style.top = new_top+'px'
				piso_data.top = new_top
			}else{
				check_collision = checkCollision(null,new_top,false,back)
				if(!check_collision.collision){
					piso.style.top = new_top+'px'
					paredes.style.top = new_top+'px'
					piso_data.top = new_top
				}
			}
		}
	}
	
	avatar_speed+=avatar_aceleration
	if(avatar_speed>3){
		avatar_speed = 3
	}

	if(!back){
		if(check_collision.stop){
			console.log("stop, collision between element")
			removeEvents()
			if(check_collision.type=='empleado'){
				setPregunta(check_collision.params)
			}else if(check_collision.type=='puerta'||check_collision.type=='escaleras'){
				setPelicula(check_collision.params)	
			}
			
		}
	}
}

function moveAvatar2(){
	for(var aa = 0;aa<16;aa++){
		moveAvatar(true)
		//console.log("move avatar")
	}
	direccion_x = null
	direccion_y = null
}

function checkCollision(x,y,a,b){
	var collision = false
	//comprobar colision

	var a_rect = null
	var dif_piso_x = 0
	var dif_piso_y = 0
	var rect_parent = paredes.getBoundingClientRect()
	//esto esta bien

	if(a){
		if(x==null){
			x = avatar_data.left
		}
		if(y==null){
			y = avatar_data.top
		}
		dif_piso_x = 0-piso_data.left
		dif_piso_y = 0-piso_data.top
		a_rect = {
			x:(x+(avatar_data.width/2))+dif_piso_x,
			y:(y+(avatar_data.height/2))+dif_piso_y
		}
	}else{
		if(x==null){
			x = piso_data.left
		}
		if(y==null){
			y = piso_data.top
		}
		dif_piso_x = 0-x
		dif_piso_y = 0-y
		a_rect = {
			x:(avatar_data.left+(avatar_data.width/2))+dif_piso_x,
			y:(avatar_data.top+(avatar_data.height/2))+dif_piso_y
		}
	}
	
	
	if(!b){//si esta detras de camaras, no detectar colisiones con paredes
		for(var c = 0;c<piso_data.paredes.length;c++){
			var rect = piso_data.paredes[c].getBoundingClientRect()
			var rect_pared = {
				w:rect.width,
				h:rect.height,
				x:(rect.left-rect_parent.left),
				y:(rect.top-rect_parent.top)
			}

			if(
				(a_rect.x+avatar_data.area)>=rect_pared.x&&
				(a_rect.x-avatar_data.area)<=(rect_pared.x+rect_pared.w)&&
				(a_rect.y+avatar_data.area)>=rect_pared.y&&
				(a_rect.y-avatar_data.area)<=(rect_pared.y+rect_pared.h)
			){
				//colision
				//type = 'pared'
				//collision = true
				//console.log("colision con "+c)
			}
		}
	}
	
	var type = ''
	var element = null
	var rect_element = null
	var stop = null
	var callBack = null
	
	var params = []
	var mov = 0

	if(!b){//si esta detras de camaras, no detectar colisiones con objetos
		for(var c = 0;c<piso_data.elementos.length;c++){
			var rect = piso_data.elementos[c].getBoundingClientRect()
			var rect_elemento = {
				w:rect.width,
				h:rect.height,
				x:(rect.left-rect_parent.left),
				y:(rect.top-rect_parent.top)
			}

			if(
				(a_rect.x+avatar_data.area)>=rect_elemento.x&&
				(a_rect.x-avatar_data.area)<=(rect_elemento.x+rect_elemento.w)&&
				(a_rect.y+avatar_data.area)>=rect_elemento.y&&
				(a_rect.y-avatar_data.area)<=(rect_elemento.y+rect_elemento.h)
			){
				//colision
				type = piso_data.elementos[c].getAttribute('type')
				element = piso_data.elementos[c]
				collision = true
				rect_element = rect_elemento
				//console.log("colision con "+c)
			}		
		}

		//carro,puerta,llave,premio,empleado,escaleras
		if(type=='puerta'){
			//mirar si la puerta esta desbloqueada
			var oficina_id = element.getAttribute('ind')
			var oficina_data = getOficinaData(oficina_id)
			var estado_puerta = ''//variable para detectar si la puerta la abre o la cierra
			var entrar_o_salir = ''

			if(oficina_data.puerta!=null){
				//mirar si va a entrar o a salir
				if(oficina_data.puerta.direccion=='horizontal'){
					if(
						(a_rect.y+avatar_data.area)>=rect_element.y&&
						(a_rect.y-avatar_data.area)<=(rect_element.y+(rect_element.h/2))
					){
						estado_puerta = 'arriba'
					}else{
						estado_puerta = 'abajo'
					}
				}else{
					if(
						(a_rect.x+avatar_data.area)>=rect_element.x&&
						(a_rect.x-avatar_data.area)<=(rect_element.x+(rect_element.w/2))
					){
						estado_puerta = 'izquierda'
					}else{
						estado_puerta = 'derecha'
					}
				}

				//console.log(estado_puerta)
				//definir si sale o entra
				if(oficina_data.puerta.orientacion=='norte'){
					if(estado_puerta=='arriba'){
						entrar_o_salir = 'sale'
					}else if(estado_puerta=='abajo'){
						entrar_o_salir = 'entra'
					}
				}else if(oficina_data.puerta.orientacion=='sur'){
					if(estado_puerta=='arriba'){
						entrar_o_salir = 'entra'
					}else if(estado_puerta=='abajo'){
						entrar_o_salir = 'sale'
					}
				}else if(oficina_data.puerta.orientacion=='oeste'){
					if(estado_puerta=='izquierda'){
						entrar_o_salir = 'sale'
					}else if(estado_puerta=='derecha'){
						entrar_o_salir = 'entra'
					}
				}else if(oficina_data.puerta.orientacion=='este'){
					if(estado_puerta=='izquierda'){
						entrar_o_salir = 'entra'
					}else if(estado_puerta=='derecha'){
						entrar_o_salir = 'sale'
					}
				}

				//console.log(entrar_o_salir)
				if(oficina_data.puerta.locked){
					//preguntar por llave
					if(!avatar_data.llaves.includes(oficina_id)){
						//normalmente esto es cuando entra, porque si va a salir es porque ya entró
						setMensaje({content:'<p>Necesito la llave de esta oficina</p>',delay:3000})
					}else{
						if(entrar_o_salir=='entra'){
							mov = 0
						}else if(entrar_o_salir=='sale'){
							mov = 1
						}
						stop = true
						params = [mov,oficina_data.puerta.direccion,oficina_data.puerta.orientacion,entrar_o_salir]
					}
				}else{
					//animacion de entrada
					if(entrar_o_salir=='entra'){
						mov = 0
					}else if(entrar_o_salir=='sale'){
						mov = 1
					}
					stop = true
					params = [mov,oficina_data.puerta.direccion,oficina_data.puerta.orientacion,entrar_o_salir]
				}
			}
		}else if(type=='escaleras'){
			var clase_escaleras = element.getAttribute('class')
			if(clase_escaleras.indexOf('piso-1')!=-1){
				//subamos pa arriba
				params = [2]
			}else{
				//bajemos pa abajo
				params = [3]
			}
			stop = true
		}else if(type=='empleado'){
			//obtener datos del empleado
			var empleado_id = element.getAttribute('ind')
			var empleado_data = getEmpleadoData(empleado_id)

			stop = true
			params = [empleado_data]
		}
	}

	return {collision:collision,stop:stop,params:params,type:type}
}

var movies = [
	'abrir-puerta',
	'cerrar-puerta',
	'subir-escaleras',
	'bajar-escaleras'
]

var animacion_pelicula = null
function setPelicula(params){
	console.log(params)
	var movie = params[0]
	var param1 = null
	var param2 = null
	var param3 = null

	var video = getE('pelicula');
	var source = document.createElement('source');

	source.setAttribute('src','assets/animations/'+movies[movie]+'.mp4');
	source.setAttribute('type','video/mp4')

	video.appendChild(source);
	video.load();
	var video_loaded = false
	
	video.onloadedmetadata = function() {
		video.onloadedmetadata = null
		getE('contenedor-peliculas').className = 'contenedor-peliculas-off'
		animacion_pelicula = setTimeout(function(){
			clearTimeout(animacion_pelicula)
			animacion_pelicula = null
			video.play();
		},500)
	}
	video.onended = function(){
		video.onended = null
		
		getE('contenedor-peliculas').className = 'contenedor-peliculas-onn'
		animacion_pelicula = setTimeout(function(){
			clearTimeout(animacion_pelicula)
			animacion_pelicula = null
			
			video.pause()
			video.removeChild(source);
			video.load()

			getE('contenedor-peliculas').style.display = 'none'
			getE('contenedor-peliculas').className = ''

			//poner eventos otra vez
			addEvents()
		},500)
	}
	getE('contenedor-peliculas').style.display = 'block'
	getE('contenedor-peliculas').className = 'contenedor-peliculas-on'

	if(movie==0||movie==1){
		param1 = params[1]
		param2 = params[2]
		param3 = params[3]
		//animacion de entrada o salida de puerta, meter o sacar al personaje
		//mirar si lo metemos al norte, sur este o oeste con tatuajes en el pecho
		if(param1=='horizontal'){
			direccion_x = null
			//mirar si sube o baja
			if(param2=='norte'){
				if(param3=='entra'){
					direccion_y = 'up'
				}else if(param3=='sale'){
					direccion_y = 'down'
				}
			}else if(param2=='sur'){
				if(param3=='entra'){
					direccion_y = 'down'
				}else if(param3=='sale'){
					direccion_y = 'up'
				}
			}
		}else if(param1=='vertical'){
			direccion_y = null
			//mirar si avanza o retrocede
			if(param2=='oeste'){
				if(param3=='entra'){
					direccion_x = 'left'
				}else if(param3=='sale'){
					direccion_x = 'right'
				}
			}else if(param2=='este'){
				if(param3=='entra'){
					direccion_x = 'right'
				}else if(param3=='sale'){
					direccion_x = 'left'
				}
			}
		}
		//console.log(param1,param2,param3)
		moveAvatar2()
	}
	else if(movie==2){
		setFloor(2,false)
	}else if(movie==3){
		setFloor(1,false)
	}
}


/////////////////COMPROBAR////////////////

var finished_game = false

function ganarJuego(){
	//ganar_mp3.play()
	
}

//terminar juego por el tiempo
function endGame(){
	//remove functions
	
	//clear all animations sprites
	//stopAllAnimations()

	finished_game = true

	
}

function repeatGame(){//repetir por ganar el juego
	location.reload()
	//unsetModal(function(){
		
	//})
}

function reiniciarJuego(){//reiniciar, por acabarse el tiempo
	
}

function continuarJuego(){
	reanudarReloj()
}
function seguirJuego(){//funcion para el modal
	unsetModal(function(){
		continuarJuego()
	})
}

function verAyuda(){
	setInstrucciones(false)
}

function getE(idname){
	return document.getElementById(idname)
}