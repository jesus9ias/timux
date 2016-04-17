var tests = {};

function init(key){
  tests[key] = {};
  tests[key].init = Date.now();
}

function end(key){
  tests[key].end = Date.now();
}

function report(key){
  tests[key].report = tests[key].end - tests[key].init;
  console.log(tests[key].report);
}

module.exports = {
  init: init,
  end: end,
  report: report
};
