//Return . as [.]

var defangIPaddr = function(address) {
    const newIP = address.split('.').join('[.]')
    return newIP
};
