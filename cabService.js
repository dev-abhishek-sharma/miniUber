class CabService {
    findCab(riderDetails, driverDetailsList, thresholdValue) { // to connect driver and rider
        // go through the list of available drivers list and assign the driver

        let userLocation = riderDetails["location"];
        let userXCoordinate = userLocation["x"]; // lat
        let userYCoordinate = userLocation["y"]; // long

        // finding the shortest distance for available drivers.
        let distanceHolder = [];
        for (let i = 0; i < driverDetailsList.length; i++) {
            if (driverDetailsList[i]["isAvailable"] == true) { // check drivers availabilty
                let driverXCoordinate = driverDetailsList[i]["location"]["x"];
                let driverYCoordinate = driverDetailsList[i]["location"]["y"];

                let distance = Math.sqrt(Math.pow(driverXCoordinate - userXCoordinate, 2) + Math.pow(driverYCoordinate - userYCoordinate, 2));
                distanceHolder.push({ "vehicleNumber": driverDetailsList[i]["vehicleNumber"], "distance": distance });
            }
        }

        distanceHolder.sort((a, b) => {
            return a["distance"] - b["distance"];
        })
        if (distanceHolder[0]["distance"] > thresholdValue) {
            return "No nearby cabs available !!!";
        }
        return distanceHolder[0];
    }

    startTrip(mockDriverData, cab) {
        for (let i = 0; i < mockDriverData.length; i++) {
            if (mockDriverData[i]["vehicleNumber"] == cab["vehicleNumber"]) {
                mockDriverData[i]["isAvailable"] = false;
            }
        }
        return mockDriverData;
    }

    endTrip(mockDriverData, cab) {
        for (let i = 0; i < mockDriverData.length; i++) {
            if (mockDriverData[i]["vehicleNumber"] == cab["vehicleNumber"]) {
                mockDriverData[i]["isAvailable"] = true;
            }
        }
        return mockDriverData;
    }
}

module.exports = CabService;