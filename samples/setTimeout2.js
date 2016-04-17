var tx = require('../index.js');

tx.init('ok');
tx.init('test');

setTimeout(function(){
  tx.end('test');
  tx.report('test');
},4507);

setTimeout(function(){
  tx.end('ok');
  tx.report('ok');
},1000);
