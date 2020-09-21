var os = require( 'os' );

function printing(){
    console.log(os.hostname());
}

exports.print = printing;