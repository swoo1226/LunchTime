let should = require('should');
var vm = require('vm');
var fs = require('fs');

if(typeof window === 'undefined'){
    // looks for a file with the same name as this one but with
    // `.test.js` replaced with `.js`
    var filename = __filename.replace(/\.test\.js$/, '.js');
    vm.runInThisContext(fs.readFileSync(filename), filename);
  }

describe('index', function(){
    it('식사조에 겹치는 인원이 없어야 한다',function(){

    });
    it('나누고 싶은 식사조와 나눠진 식사조의 수는 같아야 한다', function(){

    })
})