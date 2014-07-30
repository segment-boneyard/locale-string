
var assert = require('assert');
var locale = require('./');

describe('locale-string', function(){

  describe('locale-string()', function(){
    it('should return undefined for an unrecognized `language`', function(){
      var res = locale('Dubstep', 'United States');
      assert(res === undefined);
    });

    it('should return undefined for an unrecognized `language`', function(){
      var res = locale('English', 'Murica');
      assert(res === undefined);
    });

    it('should return a correct locale string', function(){
      var res = locale('Italian', 'Italy');
      assert.equal(res, 'it-IT');
    });
  });

  describe('.parse()', function(){
    it('should return undefined for an unrecognized `language`', function(){
      var res = locale.parse('zz-US');
      assert(res === undefined);
    });

    it('should return undefined for an unrecognized `country`', function(){
      var res = locale.parse('en-GZ');
      assert(res === undefined);
    });

    it('should return a correct locale string', function(){
      var res = locale.parse('it-IT');
      assert.equal(res.language, 'Italian');
      assert.equal(res.country, 'Italy');
    });

    it('should return undefined for a bad string', function(){
      assert(!locale.parse('too-long-string'));
      assert(!locale.parse('-'));
      assert(!locale.parse('foo-'));
    });
  });
});