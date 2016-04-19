var tx = require('../index.js');

tx.init('test1');
tx.init('test2');
tx.init('test3');

setTimeout(function(){
  tx.endAll();
  tx.reportAll();
},5005);
