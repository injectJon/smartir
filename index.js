require( 'dotenv' ).config();

const mongoose = require( 'mongoose' );
const express = require( 'express' );

mongoose.connect( process.env.MONGODB_URI );


const app = express();

app.get( '/', ( req, res ) => {
    res.sendFile('index.html', {root: __dirname })
} );

app.get( '/test', ( req, res ) => {
    res.json( { status: 200, message: 'This is the home endpoint!' } );
} );

app.listen( process.env.PORT );