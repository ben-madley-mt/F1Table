class BestRaceTotal {
    constructor(numRaces) {
        this.numRaces = numRaces;
    }

    getScoreForSeason(scoringFunction, results) {
        let pointTotals = results.map(scoringFunction.pointsFor.bind(scoringFunction));
        pointTotals.sort((a, b) => b - a);
        pointTotals = pointTotals.slice(0, this.numRaces);
        return pointTotals.reduce((a, b) => a + b);
    }
}

export default BestRaceTotal;