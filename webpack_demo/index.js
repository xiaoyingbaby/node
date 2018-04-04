/**
 * Created by ghostwu(吴华).
 */

function say(){
    alert( 'ghostwu' );
}
say();

function show(){
    alert( '你好' );
}
show();

var oCalc = require( './calc' );
alert( oCalc.add( 10, 20 ) );

require( 'style-loader!css-loader!./style.css' );


