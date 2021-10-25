class SeasonTotal {
    getScoreForSeason(scoringFunction, results) {
        return results.map(scoringFunction.pointsFor.bind(scoringFunction)).reduce((a, b) => a + b);
    }
}

export default SeasonTotal;