
express = require('express');
http = require('http');
path = require('path');
mongoose = require('mongoose');

app = express();

# all environments
app.set('port', process.env.PORT ? 3000);
app.set('views', __dirname + '/../views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/../public')));

#set up db server
mongoose.connect('mongodb://localhost/personalsite');

#set up Schema
Email = mongoose.model('Email', { name: String });


# development only
if ('development' == app.get('env'))
	app.use(express.errorHandler());


app.get('/', (req, res)->
	res.render('index')
)

app.post('/sendemail', (req,res)->
	submitInfo = req.body
	console.log(submitInfo)
	email = new Email(submitInfo)
	email.save()
	console.log("email", email)
	res.send({success: "success"})
)

http.createServer(app).listen(app.get('port'), () ->
  console.log('Express server listening on port ' + app.get('port'));
)