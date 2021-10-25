const NormalScore = {
    points: {
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
    pointsFor: function(rawPosition) {
        const isFastestLap = this.isFastestLap(rawPosition);
        const position = this.extractPosition(rawPosition);

        if (position in this.points) {
            return this.points[position] + isFastestLap;
        } else {
            return 0;
        }
    },
    isFastestLap: function(rawPosition) {
        return rawPosition.includes('F');
    },
    extractPosition: function(rawPosition) {
        return parseInt(rawPosition);
    }
}

export default NormalScore;