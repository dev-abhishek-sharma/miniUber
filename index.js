let registerRider = require("./registerRider");
let registerDriver = require("./registerDriver");
let cabService = require("./cabService");

// config to set threshold for distance.
let setThreshHoldValue = 150;

let mockDriverData = [];
let mockRiderData = [];

// set mock data for drivers.
mockDriverData = registerDriver("abhishek", "sharma", 1234567890, "Jaipur", "car", "RJ-14-123", "demoDriver123456", true, 100, 100, mockDriverData);
mockDriverData = registerDriver("avinash", "sharma", 1236667890, "Jaipur", "car", "RJ-14-456", "demoDriver8765432", true, 99, 99, mockDriverData);

// set mock data for riders.
mockRiderData = registerRider("praba", "sharma", 11234567890, "Jaipur", 4, 4, mockRiderData);


let findDriver = new cabService();

let cab = findDriver.findCab(mockRiderData[0], mockDriverData, setThreshHoldValue);

console.log(`Found the cab${JSON.stringify(cab)} for the user ${JSON.stringify(mockRiderData[0])}`);

// assign the driver to rider and change the drivers availability...
// update the driver avaialabilty to false or not available
console.log("Trip has started!!!");
mockDriverData = [...findDriver.startTrip(mockDriverData, cab)];
console.log("List of available drivers updated!!", mockDriverData);

mockDriverData = [...findDriver.endTrip(mockDriverData, cab)];

console.log("Ending the trip, list of available drivers updated!!", mockDriverData);




