require( 'dotenv' ).config();

const mongoose = require( 'mongoose' );
const express = require( 'express' );

mongoose.connect( 'mongodb://<dbuser>:<dbpassword>@ds155862.mlab.com:55862/heroku_h0m5rgf0' );


const app = express();

app.get( '/', ( req, res ) => {
    res.json( { status: 200, message: 'This is the home endpoint!' } );
} );

app.listen( process.env.PORT );