
module.exports.addData  = function (dataPointsAdded, originalDataPoints) {
    "use strict";

    var completeDataPoints = [],
        originalDataPoint,
        currentDataPoint;

    for (originalDataPoint = 0; originalDataPoint < originalDataPoints.length; originalDataPoint += 1) {
        completeDataPoints.push(originalDataPoints[originalDataPoint]);
    }
    for (currentDataPoint = 0; currentDataPoint < dataPointsAdded.length; currentDataPoint += 1) {
        completeDataPoints.push(dataPointsAdded[currentDataPoint]);
    }
    return completeDataPoints;
};

module.exports.average = function (dataPoints) {
    "use strict";
    var total = 0;

    dataPoints.forEach(function (currentValue) {
        total += currentValue.measurement;
    });

    return total / dataPoints.length;
};
