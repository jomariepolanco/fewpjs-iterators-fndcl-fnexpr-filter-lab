// Code your solution here
function findMatching(drivers, name) {
    let result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return result 
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(driver => driver.charAt(0) === string.charAt(0))
    return result
}

function matchName(drivers, string) {
    let result = drivers.filter(driver => driver.name === string)
    return result
}