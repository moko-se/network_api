/* les modules néccessaires */
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
require('dotenv').config();
require('./config/db');
/* Création de l'application de type express */
const app = express();

/* Definition des Middlewares */
//setup express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Global variables */

/* Définition des gestionnaires de routages */
const eventRouter = require('./routes/eventRouter');
const userRouter = require('./routes/userRouter');
const groupRouter = require('./routes/groupRouter');
const threadRouter = require('./routes/threadRouter');
const albumRouter = require('./routes/albumRouter');
const surveyRouter = require('./routes/surveyRouter');
const ticketingRouter = require('./routes/ticketingRouter');

app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/groups', groupRouter);
app.use('/api/threads', threadRouter);
app.use('/api/albums', albumRouter);
app.use('/api/surveys', surveyRouter);
app.use('/api/ticketings', ticketingRouter);

/* Capture de l'erreur 404 */
app.use((req, res, next) => {
	next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// json message
	res.status(err.status || 500).json({msg: 'Page not found'})
});
/*Lancement de l'application sur lme port 3000 */
app.listen(process.env.PORT || 5000, (err) => {
	if (err) throw err;
	console.log(`success connection in port 3000`);
});