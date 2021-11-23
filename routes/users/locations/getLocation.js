function getLocation(req, res, next) {
    res.status(200).json([
        {
            id: "001",
            locationName: "home",
            houseNumber: "House Number 70",
            street: "Ashok Chakra Gali",
            district: "Patna",
            city: "Patna City",
            state: "Bihar",
            country: "India",
            zipCode: "800008"
        },
        {
            id: "002",
            locationName: "work",
            houseNumber: "Office Number 70",
            street: "Ashok Chakra Gali",
            district: "Patna",
            city: "Patna City",
            state: "Bihar",
            country: "India",
            zipCode: "800008"
        }
    ]);

}

function getLocationById(req, res, next) {
    res.status(200).json({
        id: "001",
        houseNumber: "House Number 70",
        street: "Ashok Chakra Gali",
        district: "Patna",
        city: "Patna City",
        state: "Bihar",
        country: "India",
        zipCode: "800008"
    });
}


module.exports = {
    getLocation,
    getLocationById
}
