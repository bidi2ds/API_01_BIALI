//1 require
const express = require('express');
const mysql =  require('mysql2');
const cors = require('cors');

const mysql_config = require('./inc/mysql_config');
const functions = require('./ins/function');

//2 criaçao de duas constantes para definição da disponibilidade da api 
//da versão da api

const API_AVAILABILITY=true;
const API_VERSION='1.0.0';
 
//3 iniciar o server

const app= express();
app.listen (3000,()=>{
    Console.log("API esta executando")


})

//4 checar se a API esta disponivel

app.use((req,res,next)=>{
    if(API_AVAILABILITY){
        next();
    }else{
        res.json(functions.response("Atenção", "API esta em manutenção. Sinto muito",0,null))
    }
})

//5mysql conection

const conection = mysql.createConnection(mysql_config);

//6 cors
app.use(cors());
  
//7rotas
//rotas inicial que vai dizer que a API esta disponivel
app.get('/',(req,res)=>{
    res.json(functions.response('sucesso', 'API esta rodando',0,null))

})

//9 rota para pegar todas as tarefas

app.get('/tasks',(req,res)=>{
    conection.query('select * FROM tasks', (err,rows))
})

//8 midleware para caso alguma rota nao seja encotrada 
app.use((req,res)=>{
    res.json(fuction,response('atençao', 'rota nao encontrada',0, null))
})