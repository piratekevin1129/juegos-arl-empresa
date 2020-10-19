var oficinas = [
	{
		id:1,
		piso:1,
		llave:null,
		empleado:null,
		premio:null,
		posx:354,
		posy:175,
		puerta:{
			locked:false,
			x:292,
			y:301,
			w:30,
			h:20,
			direccion:'horizontal',
			orientacion:'norte'
		},
		ref:'Oficina sin nada'
	},
	{
		id:2,
		piso:1,
		llave:null,
		premio:null,
		empleado:1,
		posx:248,
		posy:523,
		puerta:null,
		ref:'Oficina con empleado'
	},
	{
		id:3,
		piso:1,
		llave:null,
		premio:{
			id:1,
			x:451,
			y:280,
			recogido:'no',
			ref:null
		},
		empleado:null,
		posx:430,
		posy:229,
		puerta:{
			locked:true,
			x:449,
			y:343,
			w:30,
			h:15,
			direccion:'horizontal',
			orientacion:'norte'
		},
		ref:'Oficina sin nada'
	},
	{
		id:4,
		piso:1,
		llave:null,
		premio:null,
		empleado:null,
		posx:458,
		posy:526,
		puerta:{
			locked:false,
			x:514,
			y:398,
			w:30,
			h:15,
			direccion:'horizontal',
			orientacion:'sur'
		},
		ref:'Oficina sola con un premio'
	},
	{
		id:5,
		piso:1,
		llave:null,
		premio:null,
		empleado:null,
		posx:584,
		posy:180,
		puerta:{
			locked:false,
			x:630,
			y:287,
			w:30,
			h:15,
			direccion:'horizontal',
			orientacion:'norte'
		},
		ref:'Oficina sin nada'
	},
	{
		id:6,
		piso:1,
		llave:null,
		premio:null,
		empleado:2,
		posx:850,
		posy:225,
		puerta:null,
		ref:'Oficina con empleado'
	},
	{
		id:7,
		piso:1,
		llave:null,
		premio:{
			id:2,
			x:654,
			y:400,
			recogido:'no',
			ref:null
		},
		empleado:null,
		posx:626,
		posy:524,
		puerta:{
			locked:true,
			x:751,
			y:380,
			w:30,
			h:15,
			direccion:'horizontal',
			orientacion:'sur'
		},
		ref:'Oficina sola con un premio'
	},
	{
		id:8,
		piso:1,
		llave:null,
		premio:{
			id:3,
			x:960,
			y:270,
			recogido:'no',
			ref:null
		},
		empleado:null,
		posx:930,
		posy:180,
		puerta:{
			locked:true,
			x:908,
			y:293,
			w:20,
			h:30,
			direccion:'vertical',
			orientacion:'este'
		},
		ref:'Oficina sola con un premio'
	},
	{
		id:9,
		piso:1,
		llave:1,
		premio:null,
		empleado:null,
		posx:970,
		posy:570,
		puerta:{
			locked:true,
			x:935,
			y:416,
			w:30,
			h:15,
			direccion:'horizontal',
			orientacion:'sur'
		},
		ref:'Oficina con llaves del carro'
	},

	////////piso 2///////
	{
		id:10,
		piso:2,
		llave:null,
		premio:null,
		empleado:null,
		posx:52,
		posy:180,
		puerta:{
			locked:false,
			x:348,
			y:89,
			w:20,
			h:40,
			direccion:'vertical',
			orientacion:'oeste'
		},
		ref:'Baño'
	},
	{
		id:11,
		piso:2,
		llave:null,
		premio:null,
		empleado:3,
		posx:658,
		posy:432,
		puerta:null,
		ref:'Oficina con empleado'
	},
	{
		id:12,
		piso:2,
		llave:null,
		premio:{
			id:5,
			x:525,
			y:86,
			recogido:'no',
			ref:null
		},
		empleado:null,
		posx:441,
		posy:171,
		puerta:{
			locked:true,
			x:679,
			y:99,
			w:20,
			h:40,
			direccion:'vertical',
			orientacion:'oeste'
		},
		ref:'Concineta'
	},
	{
		id:13,
		piso:2,
		llave:null,
		premio:{
			id:4,
			x:880,
			y:110,
			recogido:'no',
			ref:null
		},
		empleado:null,
		posx:835,
		posy:30,
		puerta:{
			locked:true,
			x:810,
			y:98,
			w:20,
			h:40,
			direccion:'vertical',
			orientacion:'este'
		},
		ref:'Patio sola con un premio'
	},
	{
		id:14,
		piso:2,
		llave:null,
		premio:null,
		empleado:4,
		posx:759,
		posy:495,
		puerta:null,
		ref:'Oficina con una maquina que necesita epp'
	},

	//patio
	{
		id:15,
		piso:1,
		llave:null,
		premio:null,
		empleado:5,
		posx:0,
		posy:0,
		puerta:null,
		ref:'Patio con empleado',
		icon:false
	},
	{
		id:16,
		piso:1,
		llave:null,
		premio:null,
		empleado:6,
		posx:0,
		posy:0,
		puerta:null,
		ref:'Parqueadero con empleado',
		icon:false
	}
]

var llaves = [
	{
		id:1,
		x:888,
		y:435,
		key:15,//llaves del carro
		ref:'del carro',
		recogida:'no'
	}
]

var empleados = [
	{
		id:1,
		piso:1,
		llave:3,
		posx:299,
		posy:457,
		rotation:-90,
		idpregunta:1,
		estado:'disponible',
		ref:'oficina 2 - preguna sobre sistema de gestión de riesgos laborales',
		bienvenida:'¡Hola! te preguntaré acerca del tema Sistema de Riesgos Laborales.',
		bien:'¡Muy bien!, has respondido correctamente, aqui tienes una llave.',
		mal:'La respuesta es incorrecta, vuelve en otro momento.'
	},
	{
		id:2,
		piso:1,
		llave:7,
		posx:785,
		posy:261,
		rotation:43,
		idpregunta:2,
		estado:'disponible',
		ref:'oficina 6 - pregunta sobre ergonomía',
		bienvenida:'Ahora estás observando a dos personas en su puesto de trabajo. Selecciona la que tiene la postura correcta de trabajo.',
		bien:'¡Muy bien!. Haz respondido correctamente, aquí tienes una llave',
		mal:'¡La respuesta es incorrecta!. Vuelve en otro momento'
	},
	{
		id:3,
		piso:2,
		llave:13,
		posx:330,
		posy:290,
		rotation:0,
		idpregunta:3,
		estado:'disponible',
		ref:'oficina 11 - pregunta sobre salud ocupacional',
		bienvenida:'¡Hola! en este momento nos encontramos en un comité paritario de salud, por lo tanto te preguntaremos sobre el programa de salud ocupacional.',
		bien:'¡Muy bien!, haz respondido correctamente, aqui tienes una llave.',
		mal:'¡La respuesta es incorrecta!!, vuelve en otro momento.'
	},
	{
		id:4,
		piso:2,
		llave:12,
		posx:790,
		posy:350,
		rotation:-100,
		idpregunta:4,
		estado:'disponible',
		ref:'oficina 14 - pregunta sobre epp + juego de arrastrar',
		bienvenida:'Arrastra hacia el personaje los <span>dos</span> equipos de protección personal que le hacen falta para operar maquinaria. Luego haz clic en <span>Ver pregunta</span>.',
		bienvenida2:'¡Muy bien!. Ahora responde la siguiente pregunta',
		bien:'¡Muy bien!. Haz respondido correctamente, aquí tienes una llave.',
		mal:'¡La respuesta es incorrecta!. Vuelve en otro momento.'
	},
	{
		id:5,
		piso:1,
		llave:8,
		posx:85,
		posy:170,
		rotation:-130,
		idpregunta:5,
		estado:'disponible',
		ref:'afueras de la empresa - pregunta sobre simulacros de emergencia + interactividad de simulacro',
		bienvenida:'Plan de emergencias. En este tema veremos un simulacro de evacuación. Toca la sirena.',
		bienvenida2:'Luego de ver el simulacro de evacuación responde la siguiente pregunta.',
		bien:'¡Muy bien!. Haz respondido correctamente, aquí tienes una llave.',
		mal:'¡La respuesta es incorrecta!. Regresa en otro momento.'
	},
	{
		id:6,
		piso:1,
		llave:9,
		posx:130,
		posy:520,
		rotation:56,
		idpregunta:6,
		estado:'disponible',
		ref:'afueras de la empresa - pregunta sobre seguridad vial',
		bienvenida:'La seguridad vial también es un factor importante en las empresas. Contesta correctamente y seguro que irás por buen camino.',
		bien:'¡Muy bien!. Haz respondido correctamente, aquí tienes una llave.',
		mal:'¡La respuesta es incorrecta!. Vuelve en otro momento.'
	}
]

var preguntas = [
	{
		id:1,
		preguntas:[
			{
				pregunta:'Estar cubierto por la ARL significa que tenemos derecho a:',
				respuestas:[
					'La atención médica en caso de presentarse un accidente de trabajo o una enfermedad profesional.',
					'El reconocimiento de las prestaciones económicas que puedan generarse por un accidente de trabajo o una enfermedad profesional.',
					'a y b'
				],
				correcta:2
			},
			{
				pregunta:'En caso de un accidente de trabajo o una enfermedad laboral, el trabajador afiliado cuenta con la prestación de servicios de salud como son:',
				respuestas:[
					'Asistencia médica, quirúrgica y servicios de hospitlización y rehabilitación profesional.',
					'Servicios odontológicos y prótesis.',
					'Asistencia médica, quirúrgica, servicios de hospitlización, servicios odontológicos, de rehabilitación profesional, medicamentos y prótesis.'
				],
				correcta:3
			},
			{
				pregunta:'Como trabajadores tenemos responsabilidades relacionadas con nuestra seguridad y protección laboral, algunas de ellas son:',
				respuestas:[
					'Suministrar información clara, veraz y completa sobre el estado de salud; cumplir las normas de seguridad e higiene de la empresa.',
					'Brindar la inducción y el entrenamiento a los trabajadores nuevos de la empresa.',
					'Conocer completa y detalladamente la legislación sobre Riesgos Profesionales.'
				],
				correcta:1
			},
			{
				pregunta:'Es un accidente de trabajo cuando:',
				respuestas:[
					'La actividad que está desarrollando se relaciona directamente con la labor que desempeña.',
					'El evento ocurre mientras el trabajador está ejecutando una orden de su jefe.',
					'a y b'
				],
				correcta:3
			}
		]
	},
	{
		id:2,
		preguntas:[
			{
				correcta:1
			}
		]
	},
	{
		id:3,
		preguntas:[
			{
				pregunta:'Uno de los objetivos del Programa de Salud Ocupacional es:',
				respuestas:[
					'Definir las actividades de promoción y prevención que permitan mejorar las condiciones de trabajo y de salud.',
					'Identificar el origen de los accidentes y enfermedades comunes.',
					'Controlar los factores de riesgo relacionados con el bienestar general de la persona.'
				],
				correcta:1
			},
			{
				pregunta:'El panorama de factores de riesgo permite:',
				respuestas:[
					'Identificar, localizar y valorar las situaciones de riesgo existentes.',
					'Priorizar las situaciones existentes y planificar las medidas de control necesarias.',
					'a y b'
				],
				correcta:3
			}
		]
	},
	{
		id:4,
		preguntas:[
			{
				pregunta:'La siguiente es una manera inadecuada de promover el tema de seguridad en la empresa es:',
				respuestas:[
					'Permitiendo que los equipos de trabajo establezcan sus propias metas de mejoramiento.',
					'Promoviendo en el personal la participación en la solución de problemas.',
					'Imponiendo sanciones por el incumplimiento de normas.'
				],
				correcta:3
			},
			{
				pregunta:'Las pausas activas se realizan en períodos de 5 a 7 minutos y pueden ser muy variadas durante la jornada laboral.  Algunas de ellas son:',
				respuestas:[
					'Salir de la oficina y tomar 2 minutos de sol para energizarse.',
					'Ponerse de pies mientras habla por teléfono y realizar estiramientos de brazos, el tronco, el cuello, entre otros.',
					'Leer un texto de un tema diferente al del trabajo durante 5 minutos.'
				],
				correcta:2
			},
			{
				pregunta:'Una mala postura o un diseño inadecuado del puesto de trabajo puede producir en las personas:',
				respuestas:[
					'Fatiga visual',
					'Dolor de espalda y tensión en el cuello.',
					'a y b'
				],
				correcta:3
			},
			{
				pregunta:'Cuál de las siguientes afirmaciones no es una medida preventiva para evitar accidentes de manos:',
				respuestas:[
					'Mantenga las manos húmedas al operar equipos eléctricos.',
					'Utilice las herramientas para lo que fueron diseñadas.',
					'Utilice una superficie de apoyo para cortar, triturar o pelar alimentos.'
				],
				correcta:1
			},
		]
	},
	{
		id:5,
		preguntas:[
			{
				pregunta:'Las 3 etapas básicas iniciales para diseñar un plan de emergencias en su empresa son:',
				respuestas:[
					'Definición del plan de acción, diseño del sistema de alerta y alarma, plan de evacuación.',
					'Definición del plan de acción, conformación de las brigadas de emergencias y grupos de apoyo, plan de evacuación.',
					'Identificación de las amenazas, análisis de vulnerabilidad, inventario de recursos. '
				],
				correcta:3
			},
			{
				pregunta:'Una de las acciones a tomar en caso de incendio es:',
				respuestas:[
					'Si en su ruta hay una puerta, no la toque, ábrala.',
					'Si el lugar está lleno de humo salga gateando, cubriéndose nariz y boca.',
					'Si está en un vestier, permanezca allí.'
				],
				correcta:2
			},
			{
				pregunta:'El plan de evacuación hace parte del plan de emergencias y consiste en:',
				respuestas:[
					'Definir el procedimiento y las rutas de evacuación para que las personas protejan su vida mediante el desplazamiento organizado hasta lugares de menor riesgo.',
					'Definir el procedimiento para que las personas se desplacen, retirándose del origen de la emergencia.',
					'Definir el sistema de alerta y alarma y las rutas de evacuación para proteger a las personas.'
				],
				correcta:1
			}
		]
	},
	{
		id:6,
		preguntas:[
			{
				pregunta:'La combinación perfecta para evitar accidentes de tránsito es:',
				respuestas:[
					'Las capacidades del conductor y la postura al conducir.',
					'La pericia y las capacidades del conductor.',
					'Las señales de tránsito y la pericia'
				],
				correcta:2
			},
			{
				pregunta:'Sí es posible reducir al mínimo las probabilidades de sufrir un accidente de tránsito. Frente a esta situación, podemos:',
				respuestas:[
					'Conocer las normas y señales de tránsito; mantener la atención en todo momento; estar en condiciones óptimas para transitar por la vía.',
					'Revisar la vía con anterioridad antes de transitar por ella y conocer las normas y señales de tránsito.',
					'Mantener la atención en todo momento; estar en condiciones óptimas para transitar por la vía.'
				],
				correcta:1
			},
			{
				pregunta:'Para prevenir accidentes, debemos hacer mantenimiento preventivo a nuestro vehículo, para esto, debemos reconocer algunas de las partes del vehículo como:',
				respuestas:[
					'El motor, el radiador, el carburador',
					'El depósito de aceite, los almacenadores de agua, la batería.',
					'a y b'
				],
				correcta:3
			}
		]
	}
]

function getOficinaData(id,flag){
	var o_data = null
	var o_ind = -1
	for(var o = 0;o<oficinas.length;o++){
		if(oficinas[o].id==id){
			o_data = oficinas[o]
			o_ind = o
		}
	}
	if(flag!=null&&flag!=undefined){
		return o_ind
	}else{
		return o_data
	}
	
}

function getEmpleadoData(id,flag){
	var e_data = null
	var e_ind = -1
	for(var e = 0;e<empleados.length;e++){
		if(empleados[e].id==id){
			e_data = empleados[e]
			e_ind = e
		}
	}

	if(flag!=null&&flag!=undefined){
		return e_ind
	}else{
		return e_data
	}
}

function getLlaveData(id,flag){
	var l_data = null
	var l_ind = -1
	for(var l = 0;l<llaves.length;l++){
		if(llaves[l].id==id){
			l_data = llaves[l]
			l_ind = l
		}
	}
	if(flag!=null&&flag!=undefined){
		return l_ind
	}else{
		return l_data	
	}
	
}
function getPreguntasData(id){
	var q_data = null
	for(var q = 0;q<preguntas.length;q++){
		if(preguntas[q].id==id){
			q_data = preguntas[q]
		}
	}
	return q_data
}