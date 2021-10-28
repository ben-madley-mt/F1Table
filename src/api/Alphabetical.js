class Alphabetical {
    getOrder(positions) {
        let drivers = Object.keys(positions)
        drivers.sort();
        return drivers;
    }
}

export default Alphabetical;

