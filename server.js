
var express = require("express"),
db = require("./models"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan")

var apiRouter = express.Router();

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

apiRouter.route('/api/icecreams')
.post(function(req,res){
  console.log(req.body)
  db.Icecream.create(req.body,function(error){
    if (error) return res.json({error:error.message})
    res.json({ message: 'Ice-cream created!' });
  })
})
.get(function(req,res){
  db.Icecream.find({},function(error,response){
    res.json(response);
  })
})

apiRouter.route('/api/icecreams/:icecreamId')
.get(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    res.json(icecream);
  })
})
apiRouter.route('/api/icecreams/:icecreamId')
.get(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    res.json(icecream);
  })
})

.put(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    icecream.name = req.body.name
    icecream.description = req.body.description
    icecream.save(function(err){
      if (err) res.send(err);
      res.json({message:'Ice-cream updated!'})
    })
  })
})

.delete(function(req,res){
  db.Icecream.remove({_id:req.params.icecreamId}, function(error,icecream){
      if (error) return res.send(error);
      res.json({ message: 'Ice-cream successfully deleted' });
  })
})

app.use('/api', apiRouter);


app.get('/', function(req,res){
  res.render('index.ejs');
});

PORT = 3001

app.listen(PORT,function(){
  console.log("this server is running on", PORT)
});

