
var should = require('should'),
    capabilityStats = require('../capabilityStatistics.js');


describe('statistical operations', function() {

    it('should compute the average of a two value data series', function() {
        var twoValueData = [{measurement: 3}, {measurement: 5}];
        capabilityStats.average(twoValueData).should.equal(4);
    });
});
