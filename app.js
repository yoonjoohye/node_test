let express = require('express')
let bodyParser = require('body-parser')
let app = express()
var db = require('./modules/db')
var properties = require('./modules/properties.json')

app.set('view engine', 'html')
app.set('views', __dirname+'/public/views')
app.engine('html', require('ejs').renderFile);

app.use('/img', express.static(__dirname+'/public/assets'))

app.use(bodyParser.urlencoded({
    extended : true
}))

app.get('/user', (req, res)=>{
    let param  = req.params.id
    let query = req.query
    console.log("param : ",param)
    console.log('query : ', query)
    res.status(200).send(query.data)
})

app.post('/', (req, res)=>{
    let body = req.body
    res.status(200).send(body)
})

app.post('/register', (req, res)=>{
    let body = req.body
    let res_data =  {username : body.username, id : body.id}
    res.status(200).send(res_data)
})

app.get('/test',(req,res)=>{
    res.render('test1',{ title: 'Hey', message: 'Hello there!'});
})


app.listen(3000, (err)=>{
    if(err) throw err
    else{
        console.log('Server Running')
    }
})

app.use('/auth', require('./routes/auth')(express.Router(), db))
