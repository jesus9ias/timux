var tests = {};

function init(key){
  if(tests[key] != null){
    console.log('the key ' + key + ' alredy exists and is going to be re-initialized');
  }
  tests[key] = {};
  tests[key].init = Date.now();
}

function end(key){
  if(tests[key] == null){
    console.log('the key ' + key + ' was not created and can not be ended');
  }else{
      tests[key].end = Date.now();
  }
}

function report(key){
  if(tests[key] == null){
    console.log('the key ' + key + ' was not created and can not be reported');
  }else{
    if(typeof tests[key].end == 'undefined'){
      tests[key].end = Date.now();
    }
    tests[key].report = tests[key].end - tests[key].init;
    console.log(tests[key].report);
  }
}

module.exports = {
  init: init,
  end: end,
  report: report
};
