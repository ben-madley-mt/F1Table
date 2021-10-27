class Countback {
    getOrder(positions) {
        const seasonLength = positions[0].length - 2

        positions = positions.map((positionsList) => {
            return {
                "driver": positionsList[0],
                "positions": positionsList.slice(1, seasonLength + 1).map((x) => parseInt(x)),
                "pointsTotal": positionsList[seasonLength + 1],
                "positionsAchieved": this.getPositionsAchieved(positionsList.slice(1, seasonLength + 1).map((x) => parseInt(x))),
                "original": positionsList
            }
        });

        positions.sort(function (a, b) {
            if (b.pointsTotal - a.pointsTotal !== 0) {
                return b.pointsTotal - a.pointsTotal;
            } else {

                for (let i = 0; i < Math.min(a.positionsAchieved.length, b.positionsAchieved.length); i++) {
                    if (b.positionsAchieved[i] - a.positionsAchieved[i] !== 0) {
                        return b.positionsAchieved[i] - a.positionsAchieved[i]
                    }
                }

                return b.positionsAchieved.length - a.positionsAchieved.length
            }
        })

        console.log(positions);

        return positions.map((positionsObject) => positionsObject.original);
    }

    getPositionsAchieved(positions) {
        var positionCounts = [];
        positions.forEach(element => {
            if (isNaN(element)) {
                return;
            }

            if (element in positionCounts) {
                positionCounts[element] += 1;
            } else {
                positionCounts[element] = 1;
            }
        });

        for (let i = 0; i < positionCounts.length; i++) {
            if (!positionCounts[i]) {
                positionCounts[i] = 0;
            }
        }

        console.log(positionCounts);

        return positionCounts;
    }
}

export default Countback;