function ClientesDAO(connection){
	this.connection = connection;
}

ClientesDAO.prototype.salvarCliente = function(cliente, callback){
	this.connection.query('insert into clientes set ? ', cliente, callback);
}

module.exports = function(){
	return ClientesDAO;
}