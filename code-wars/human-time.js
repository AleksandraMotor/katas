// Description:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    const getHours = Math.floor(seconds / 3600);
    const getMinutes = Math.floor((seconds % 3600) / 60);
    const getSeconds = seconds % 60;
    const getTime = getHours.toString().padStart(2, '0') + ':' + getMinutes.toString().padStart(2, '0') + ':' + getSeconds.toString().padStart(2, '0');
    return getTime;
};