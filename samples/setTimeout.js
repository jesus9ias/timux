var tx = require('../index.js');

tx.init('test');

setTimeout(function(){
  tx.end('test');
  tx.report('test');
},4507);
