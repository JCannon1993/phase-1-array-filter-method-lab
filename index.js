// Code your solution here
function findMatching (drivers, name ){
    let found = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase() )
    return found
}

function fuzzyMatch(drivers, init){
    let match = drivers.filter(driver => driver[0] === init[0])
    return match
}

function matchName (drivers, name){
    let foundDriver = drivers.filter(function (driver){
        let found = driver.name === name
        return found
    })
    return foundDriver
}