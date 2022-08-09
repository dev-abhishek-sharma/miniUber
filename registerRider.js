// module to register a rider

function registerRider(firstName, lastName, phoneNumber, city, xCoordinate, yCoordinate, mockData) { // name, phone, city, 
    let riderDetails = {};
    riderDetails["firstName"] = firstName;
    riderDetails["lastName"] = lastName;
    riderDetails["phoneNumber"] = phoneNumber;
    riderDetails["city"] = city;
    riderDetails["location"] = { "x": xCoordinate, "y": yCoordinate }

    mockData.push(riderDetails);

    return mockData;


}

module.exports = registerRider;
