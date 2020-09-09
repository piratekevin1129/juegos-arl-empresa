function setModal(data){
	var modal = getE('modal')
	if(data.close){
		getE('modal-close-btn').style.display = 'block'
		if(data.action){
			getE('modal-close-btn').setAttribute('onclick',data.action+"()")
		}else{
			getE('modal-button').setAttribute('onclick',"unsetModal(null)")
		}
	}else{
		getE('modal-close-btn').style.display = 'none'
	}

	if(data.title!=null&&data.title!=undefined){
		if(data.title!=''){
			getE('modal-title').style.display = 'block'
			getE('modal-title').innerHTML = data.title
		}else{
			getE('modal-title').style.display = 'none'
		}
	}else{
		getE('modal-title').style.display = 'none'
	}
	getE('modal-content').innerHTML = data.content

	if(data.button){
		if(data.value!=null){
			getE('modal-button').innerHTML = data.value
		}else{
			getE('modal-button').innerHTML = 'aceptar'
		}

		getE('modal-button').style.display = 'block'
		if(data.action){
			getE('modal-button').setAttribute('onclick',data.action+"()")
		}else{
			getE('modal-button').setAttribute('onclick',"unsetModal(null)")
		}
	}else{
		getE('modal-button').style.display = 'none'
		getE('modal-button').setAttribute('onclick','')
	}

	if(data.orientation!=null&&data.orientation!=undefined){
		if(data.orientation=='left'){
			getE('modal-box').className = 'modal-box-left'
		}else{
			getE('modal-box').className = ''
		}
	}else{
		getE('modal-box').className = ''
	}

	modal.style.top = '0px'
	modal.className = 'modal-on'
	animacion_modal = setTimeout(function(){
		clearTimeout(animacion_modal)
		animacion_modal = null
		if(data.callBack!=null&&data.callBack!=undefined){
			data.callBack()
		}
	},500)
}

var animacion_modal = null
function unsetModal(callBack){
	var modal = getE('modal')
	modal.className = 'modal-off'
	
	boton_mp3.play()

	animacion_modal = setTimeout(function(){
		clearTimeout(animacion_modal)
		animacion_modal = null

		if(callBack!=null){
			callBack()
		}
		modal.style.top = '-1000px'
	},500)
}


////////////////////VIDEO INSTRUCCIONES////////////////
function setVideoInstrucciones(div){
	var video = div.getElementsByTagName('video')[0]
	var btn = div.getElementsByTagName('button')[0]
	if(btn.className==''){
		btn.className = 'video-playing'
		video.play()
	}else{
		btn.className = ''
		video.pause()
	}
}

var animacion_mensaje = null
var showing_mensaje = false
function setMensaje(data){
	if(!showing_mensaje){
		getE('mensaje').innerHTML = data.content
		getE('mensaje').className = 'mensaje-on'

		clearTimeout(animacion_mensaje)
		showing_mensaje = true

		animacion_mensaje = setTimeout(function(){
			showing_mensaje = false
			clearTimeout(animacion_mensaje)
			animacion_mensaje = null

			getE('mensaje').className = 'mensaje-off'
		},data.delay)
	}else{
		//console.log("mostrando")
	}
}