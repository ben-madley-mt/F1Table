class Countback {
    getOrder(newPositions) {
        let positions = this.formatData(newPositions);

        positions.sort((a, b) => {
            if (b.pointsTotal !== a.pointsTotal) {
                return b.pointsTotal - a.pointsTotal
            }

            for (let i = 0; i < a.positionsRank.length; i++) {
                if (a.positionsRank[i] !== b.positionsRank[i]) {
                    if (isNaN(a.positionsRank[i])) {
                        return 1
                    }
                    if (isNaN(b.positionsRank[i])) {
                        return -1
                    }
                    
                    return a.positionsRank[i] - b.positionsRank[i];
                }
            }

            return 0
        });
        
        return positions.map((positionsObject) => positionsObject.driver);
    }


    formatData(newPositions) {
        let positions = Object.entries(newPositions).map((a) => [a[0]].concat(a[1]));

        const seasonLength = positions[0].length - 2;

        positions = positions.map((positionsList) => {
            return {
                "driver": positionsList[0],
                "positionsRank": positionsList.slice(1, seasonLength + 1).map((x) => parseInt(x)),
                "pointsTotal": positionsList[seasonLength + 1],
                "original": positionsList
            };
        });
        return positions;
    }
}

export default Countback;

