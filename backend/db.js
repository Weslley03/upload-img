const mongoose = require('mongoose')

async function conexao(){
    mongoose.connect('mongodb+srv://oweslley03:BancoMongo03Weslley@cluster0.btani6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('banco conectado')
}

conexao().catch(err => {console.log('banco fail, ', err)})

module.exports = conexao