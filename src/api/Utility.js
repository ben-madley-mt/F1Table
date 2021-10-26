const Utility = {
    isFastestLap: function (rawPosition) {
        return rawPosition.includes('F');
    },
    extractPosition: function (rawPosition) {
        return parseInt(rawPosition);
    }
}

export default Utility;