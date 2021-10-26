const Utility = {
    isFastestLap: function (rawPosition) {
        return rawPosition.includes('F');
    },
    extractPosition: function (rawPosition) {
        return parseInt(rawPosition);
    },
    pointsSystems: {
        standard: {
            '1': 25,
            '2': 18,
            '3': 15,
            '4': 12,
            '5': 10,
            '6': 8,
            '7': 6,
            '8': 4,
            '9': 2,
            '10': 1,
        }    
    }
}

export default Utility;