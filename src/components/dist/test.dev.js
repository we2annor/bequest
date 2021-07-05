"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findTheHighestProductPair = void 0;
var numbers = [30, 20, 10, 40, 60, 80, 1];

var findTheHighestProductPair = function findTheHighestProductPair(num) {
  var highestProduct = 0;
  var thePair = {};
  var currNum = num[0];

  for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num.length; j++) {
      if (i !== j) {
        if (currNum * num[j] > highestProduct) {
          highestProduct = currNum * num[j];
          thePair.fNum = currNum;
          thePair.secNum = num[j];
        }
      }

      currNum = num[i];
    }
  }

  return thePair;
};

exports.findTheHighestProductPair = findTheHighestProductPair;
findTheHighestProductPair(numbers);