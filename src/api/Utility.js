const isFastestLap = function(rawPosition) {
    return rawPosition.includes('F');
}

const extractPosition = function(rawPosition) {
    return parseInt(rawPosition);
}

export default {isFastestLap, extractPosition};