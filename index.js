const express = require("express");
const { waitForDebugger } = require("inspector");
const app = express();
const connection = require("./database/connection");
const Item = require("./database/Item");
const cors = require("cors")

const listaDeItems = require("./database/listaDeItens")

connection.authenticate().then(()=>{
    console.log('Conectado com sucesso ao banco de dados.');
}).catch((erro)=>{
    console.log(erro);
});

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
})
app.use(express.json({extended: true}));


app.get("/admin3325", (req, res)=>{
    Item.findAll({ where: {escolhido: true}}).then((items => {
        res.send(items)
    }))
})

app.post("/escolhido", (req, res)=> {
    Item.update({escolhido: true}, {where: {id: `${req.body.item.id}`}})
    console.log(req.body)

});

app.get("/reload", (req, res)=> {
    listaDeItems.forEach(item => {
        Item.create({
            nome: item.nome,
            escolhido: item.escolhido
        })
    });
    res.send("criado dados no bd")
})

app.get("/", (req, res) => {
    Item.findAll({
        raw: true, order: [["id"]]
    }).then(items => {
        res.send(items)
    })
});


app.listen(8081, (error) => {
    console.log("servidor online")
});