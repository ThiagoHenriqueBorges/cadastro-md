module.exports = function(app){	
	app.get('/formulario_inclusao_cliente', function(req, res){
		app.app.controllers.admin.formulario_inclusao_cliente(app, req, res);
	});

	app.post('/clientes/salvar', function(req, res){
		app.app.controllers.admin.salvar_cliente(app, req, res); 
	});
}	     