var addData,
    someData;

addData  = function (dataPointsAdded, originalDataPoints) {
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

someData = [{data: 2}];
console.log(addData([{data: 30}, {data: 20}, {data: 3}], someData));

console.log(someData);
