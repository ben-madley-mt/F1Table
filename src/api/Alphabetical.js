class Alphabetical {
    getOrder(positions) {
        positions.sort((a, b) => a[0].localeCompare(b[0]));
        return positions;
    }
}

export default Alphabetical;

