let isArrayEmptyOrInvalid = (array) => {
    if (array === undefined || array.length === 0) {
        return true;
    }
    if (!array.some((element) => typeof element === "number")) {
        return true;
    }
    return false;
};

exports.min = function min(array) {
    if (isArrayEmptyOrInvalid(array)) {
        return 0;
    }
    return array.reduce((a, b) => Math.min(a, b));
};

exports.max = function max(array) {
    if (isArrayEmptyOrInvalid(array)) {
        return 0;
    }
    return array.reduce((a, b) => Math.max(a, b));
};

exports.avg = function avg(array) {
    if (isArrayEmptyOrInvalid(array)) {
        return 0;
    }
    return array.reduce((a, b) => a + b, 0) / array.length;
};
