const Utility = {
    isFastestLap: function (rawPosition) {
        return rawPosition.includes('F');
    },
    extractPosition: function (rawPosition) {
        return parseInt(rawPosition);
    },
    pointsSystems: {
        top10: {
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
        },
        top8: {
            '1': 10,
            '2': 8,
            '3': 6,
            '4': 5,
            '5': 4,
            '6': 3,
            '7': 2,
            '8': 1,
        },
        top6: {
            '1': 10,
            '2': 6,
            '3': 4,
            '4': 3,
            '5': 2,
            '6': 1,
        },
        top6trad: {
            '1': 9,
            '2': 6,
            '3': 4,
            '4': 3,
            '5': 2,
            '6': 1,
        },
        top5: {
            '1': 8,
            '2': 6,
            '3': 4,
            '4': 3,
            '5': 2,
        },
        none: {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
        },
    }
}

export default Utility;