'use strict';

/**
 * Module dependencies
 */

var express     = require( 'express' ),
    http        = require( 'http' ),
    path        = require( 'path' );

// Server instance
var server = exports.server = express();

// Configure Server
server.configure( function() {
    server.set( 'port', 9000 );
    console.log(path.join( __dirname, './../app' ));
    server.set( 'views', path.join( __dirname, './../app' ) );

    server.use( express.bodyParser() );
    server.use( express.methodOverride() );
    server.use( express.static( path.join( __dirname, './../app' ) ) );
    server.use( server.router );
} );

// Start server
http.createServer( server ).listen( server.get( 'port' ), function() {
    console.log( 'Express server listening on ' + server.get( 'port' ) );
} );

// Configure Routes
require( './routes' );
