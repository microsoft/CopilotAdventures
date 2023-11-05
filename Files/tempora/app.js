// create a system that checks all the clocks in the town and synchronizes them with the Grand Clock Tower
// the Grand Clock Tower is the main clock that is always correct
// the clock times are provided in 24 hour format
// The grand clock tower is at 15:00
// The other clocks are Clock 1 at 14:45, Clock 2 at 15:05, Clock 3 at 15:00, Clock 4 at 14:40
// determine how many minutes each clock is ahead or behind the Grand Clock Tower
// The result should be an array of integers representing the time difference in minutes
// Positive values indicate the clock is ahead, and negative values indicate it's behind.
// the code should be readable and maintainable
// create a visual representation of the clocks and their times
// use a console application to print the results
// parse the time data for each clock and the Grand Clock Tower
// calculate the difference in minutes between each clock and the Grand Clock Tower
// output the list of time differences

// Function to calculate the time difference between two time values in the format 'HH:MM'
function timeDifference(time1, time2) {
    // Split the time strings into hours and minutes and convert them to numbers
    const [hour1, minute1] = time1.split(":").map(Number);
    const [hour2, minute2] = time2.split(":").map(Number);

    // Check if any of the time components are not numbers (i.e., the input was not in the expected format)
    if (isNaN(hour1) || isNaN(minute1) || isNaN(hour2) || isNaN(minute2)) {
        throw new Error("Invalid time format. Expected 'HH:MM'.");
    }

    // Calculate the time difference in minutes
    return (hour1 - hour2) * 60 + (minute1 - minute2);
}

// Function to synchronize an array of times with a reference time
function synchronizeClocks(times, referenceTime) {
    // For each time in the array, calculate the time difference with the reference time
    return times.map((time, index) => {
        const difference = timeDifference(time, referenceTime);
        console.log(`Clock ${index + 1}: ${time} (${difference >= 0 ? '+' : ''}${difference} minutes)`);
        return difference;
    });
}

// An array of times to synchronize
const times = ["14:45", "15:05", "15:00", "14:40"];
// The reference time to synchronize the times with
const referenceTime = "15:00";
// Log the result of synchronizing the times with the reference time
console.log(synchronizeClocks(times, referenceTime));  // [-15, 5, 0, -20]
