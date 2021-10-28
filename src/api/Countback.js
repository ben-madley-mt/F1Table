class Countback {
    getOrder(positionsObject) {
        let positions = this.formatData(positionsObject);

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
        return Object.entries(newPositions).map((positionsList) => {
            return {
                "driver": positionsList[0],
                "positionsRank": positionsList[1].positions.map((x) => parseInt(x)),
                "pointsTotal": positionsList[1].total,
            };
        });
    }
}

export default Countback;

