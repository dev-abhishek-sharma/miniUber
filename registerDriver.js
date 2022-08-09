function registerDriver(firstName, lastName, phoneNumber, city, vehicleType, vehicleNumber, DriverLicenceNumber, isAvailable, xCoordinate, yCoordinate, mockData) {
    // name, phone, city, 
    let driverDetails = {};
    driverDetails["firstName"] = firstName;
    driverDetails["lastName"] = lastName;
    driverDetails["phoneNumber"] = phoneNumber;
    driverDetails["city"] = city;
    driverDetails["vehicleType"] = vehicleType;
    driverDetails["vehicleNumber"] = vehicleNumber;
    driverDetails["DriverLicenceNumber"] = DriverLicenceNumber;
    driverDetails["isAvailable"] = isAvailable
    driverDetails["location"] = { "x": xCoordinate, "y": yCoordinate }

    mockData.push(driverDetails);
    return mockData

}

module.exports = registerDriver;