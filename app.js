const express = require('express');
const cors = require('cors');
const fs = require('fs');
const {create} = require('express-handlebars');
const fileUpload = require('express-fileupload');
const path = require('path');
const apiRoutes = require('./routes/api.routes') ;
const viewsRouter = require('./routes/views.routes');
const app = express();

app.listen(3000, () => console.log("http://localhost:3000"));

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "La imágen que está subiendo sobrepasa los 5mb permitidos."
  }));
app.use(cors());
app.use('/public', express.static('public'));

app.use(viewsRouter);
app.use(apiRoutes);

//configuracion de handlebars

const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


