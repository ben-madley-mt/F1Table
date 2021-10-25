import Utility from "./Utility";


class NormalScore {
    points = {
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
    };

    pointsFor(rawPosition) {
        const isFastestLapPoint = Utility.isFastestLap(rawPosition);
        const position = Utility.extractPosition(rawPosition);

        if (position in this.points) {
            return this.points[position] + isFastestLapPoint;
        } else {
            return 0;
        }
    }
}

export default NormalScore;