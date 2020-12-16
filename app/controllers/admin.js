module.exports.formulario_inclusao_cliente = function(app, req, res){
	res.render("admin/form_add_cliente", {validacao : {}, cliente : {}});
}  

module.exports.salvar_cliente = function(app, req, res){
var cliente = {
		nome_cliente : req.body.nome_cliente,
		ddd_cliente : req.body.ddd_cliente,
		telefone_cliente : req.body.telefone_cliente,
		email_cliente : req.body.email_cliente,
		cidade_cliente : req.body.cidade_cliente
	}        
  
	req.assert('nome_cliente','Nome é obrigatório').notEmpty();
	req.assert('ddd_cliente','O DDD é obrigatório').notEmpty();
	req.assert('ddd_cliente','O DDD deve ter 3 caracteres').len(3,3);
	req.assert('telefone_cliente','O telefone é obrigatório').notEmpty();
	req.assert('email_cliente','O Email é obrigatório').notEmpty();
	req.assert('cidade_cliente','Cidade é obrigatória').notEmpty();
  
	var erros = req.validationErrors();
	var alert;
  
		if (erros){
			res.render("admin/form_add_cliente", {validacao : erros, cliente : cliente});
			return;
		}       
 
	var connection = app.config.dbConnection();
	var clienteModel = new app.app.models.ClientesDAO(connection);

	clienteModel.salvarCliente(cliente, function(error, result){
		res.redirect('/formulario_inclusao_cliente');
	});
}
