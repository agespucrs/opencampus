var posx = 0;
var posy = 0;
var alphaRandom = 0;

function limpa() {
	var tela = document.getElementById('meucanvas').getContext('2d');
	tela.fillStyle = "#DDDDDD"
	tela.fillRect(0, 0, 400, 400);
}

function quadrados(){
	var tela = document.getElementById('meucanvas').getContext('2d');
	var corR = document.getElementById('corR').value;
	var corG = document.getElementById('corG').value;
	var corB = document.getElementById('corB').value;
	limpa();

 	for(i= 0; i < 400; i++){
	    posx = Math.random()*390;
	    posy = Math.random()*390;
	    alphaRandom = Math.random();

	    tela.fillStyle = 'rgb('+ corR +','+ corG +','+ corB +')' ;
 		tela.fillStyle = 'rgba('+ corR +','+ corG +','+ corB +',' + alphaRandom +')' ;
	    tela.fillRect(posx, posy, 15, 15);
    }
    
}

function tabuleiro(){
	limpa();
   	var tela = document.getElementById('meucanvas').getContext('2d');
	
    for(i = 0 ; i < 4; i++ ){ 
	    for(j = 0; j < 4; j++ ){
			var posx = j * 100
			var posy = i * 100    
		    
		    tela.fillStyle = 'rgb(230,0,0)' ;
	    	tela.fillRect(posx,posy,100,100);
			tela.clearRect(posx  + 10, posy + 10,80,80);
			tela.strokeRect(posx + 25,posy + 25,50,50);
	    }
	} 
    
}

function bandeira(){
   
   	var tela = document.getElementById('meucanvas').getContext('2d');
	// separei em três funções cada elemento do meu desenho
    // uma para criar o quadrado, outra para o lozango e o circulo
    limpa();
    criaQuadrado(tela);
	criaLosango(tela);
	criaBola(tela);
	criaCara(tela);
    	
}
function criaQuadrado(_tela){
			_tela.fillStyle = "#008300";
			_tela.fillRect(10,10,380,280);
		}


function criaLosango(_tela){
    
 		_tela.fillStyle = "#FCFF00";
   	  	_tela.beginPath();
		_tela.moveTo(150, 10);
		_tela.moveTo(390,150);
		_tela.lineTo(200,290);
		_tela.lineTo(10, 150);
		_tela.lineTo(200, 10);
    		_tela.fill();
		_tela.closePath(); 	
}
 
		// essa função é responsável por criar um circulo
function criaBola(_tela){
   	_tela.beginPath();
	_tela.fillStyle = "#00027F";
	_tela.arc(200,150,105,0,Math.PI*2,true);
   	_tela.fill();
   	_tela.closePath(); 
}

function criaCara(_tela){
	// Boca  
   	_tela.beginPath();
	_tela.fillStyle = "#ffffff";  //DE153B
	_tela.arc(200,150,20,10,Math.PI*2,true);
   	_tela.fill();
   	_tela.closePath(); 
   	// Olho Esquerdo
   	_tela.beginPath();
	_tela.fillStyle = "#ffffff";
	_tela.arc(180,95,10,0,Math.PI*2,true);
   	_tela.fill();
   	_tela.closePath(); 
    // Olho Direito
   	_tela.beginPath();
	_tela.fillStyle = "#ffffff";
	_tela.arc(240,115,10,0,Math.PI*2,true);
   	_tela.fill();
   	_tela.closePath(); 

}