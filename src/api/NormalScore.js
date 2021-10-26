import Utility from "./Utility";


class NormalScore {
    constructor(pointsSystem, pointsForFastestLap) {
        this.pointsSystem = pointsSystem;
        this.pointsForFastestLap = pointsForFastestLap;
    }

    pointsFor(rawPosition) {
        const isFastestLapPoint = Utility.isFastestLap(rawPosition);
        const position = Utility.extractPosition(rawPosition);

        if (position in this.pointsSystem) {
            return this.pointsSystem[position] + (isFastestLapPoint ? this.pointsForFastestLap : 0);
        } else {
            return 0;
        }
    }
}

export default NormalScore;