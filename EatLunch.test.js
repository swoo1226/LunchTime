let should = require('should');
var vm = require('vm');
var fs = require('fs');

if(typeof window === 'undefined'){
    // looks for a file with the same name as this one but with
    // `.test.js` replaced with `.js`
    var filename = __filename.replace(/\.test\.js$/, '.js');
    vm.runInThisContext(fs.readFileSync(filename), filename);
  }

var Member = ['A','B','C','D','E','F','G'];
var Menu = ['1','2','3','4','5','6','7','8','9','10'];

describe('EatLunch', function(){
    it('각 식사조는 같은 추천 메뉴를 받지 않습니다', function(){
        let isNotDuplicatedMenu = function(lunchParty) {
          let menus = {};
          for(let i = 0; i < lunchParty.length; i++) {
            if(menus[lunchParty[i]['추천 메뉴']] === undefined){
              menus[lunchParty[i]['추천 메뉴']] = 'picked'
            } else {
              return false;
            }            
          }
          return true;
        }
        
        var lunchSet = EatLunch(Member,1,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,2,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)  
        lunchSet = EatLunch(Member,3,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,4,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,5,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,6,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,7,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,8,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,9,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,10,Menu)
        isNotDuplicatedMenu(lunchSet).should.be.equal(true)
    }),
    it('각 식사조에 겹치는 인원은 없어야 합니다', function(){
      let isNotDuplicatedMember = function(lunchParty) {
        let team = {};
        for(let i = 0; i < lunchParty.length; i++) {
          let group = lunchParty[i][(i+1).toString()];
          for(let j = 0; j < lunchParty[i][(i+1).toString()].length; j++){
            if(team[group[j]] === undefined) {
              team[group[j]]  = true;
            } else {
              return false;
            }
          }
        }
        return true;
      }
      var lunchSet = EatLunch(Member,1,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,2,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)  
        lunchSet = EatLunch(Member,3,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,4,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,5,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,6,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,7,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,8,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,9,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
        lunchSet = EatLunch(Member,10,Menu)
        isNotDuplicatedMember(lunchSet).should.be.equal(true)
    }),
    it('나누고자 하는 그룹수가 총 인원 보다 많으면, 각자 혼밥을 한다', function(){
      
    })
})