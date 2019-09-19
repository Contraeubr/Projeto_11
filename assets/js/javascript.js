//FUNCAO DO JQUERY
$(function(){

	//DECLARO UM EVENTO
	$('button').bind('click', function(){
		//PEGANDO OS DADOS DE PESO E ALTURA
		var altura = $('#altura').val();
		var peso = $('#peso').val();

		//USUARIO PODE USAR PONTO OU VIRGULAR
		altura = altura.replace(',', '.')
		peso = altura.replace(',', '.')

		//IMC = peso + altura
		var imc = peso / (altura*altura);

		//VERIFICADOR
		if(imc < 16) {
			var traducao = 'Baixo peso muito grave';
		} else if(imc >= 16 && imc < 16.99) {
			var traducao = 'Baixo peso grave';
		} else if(imc >= 17 && imc < 18.49) {
			var traducao = 'Baixo peso';
		}else if (imc >= 18.50 && imc < 24.99) {
			var traducao = 'Peso normal';
		}else if (imc >= 25 && imc < 29.99) {
			var traducao = 'Sobrepeso';
		}else if (imc >= 30 && imc < 34.99) {
			var traducao = 'Obesidade grau I';
		}else if (imc >= 35 && imc < 39.99) {
			var traducao = 'Obesidade grau II';
		}else if (imc >= 40) {
			var traducao = 'Obersidade grau III';
		}
		
		//RESULTADO
		$('#resultado').html("Seu IMC e:"+imc+" kg/m e seu status e:"+traducao);

	});
});