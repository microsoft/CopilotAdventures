# Welcome to Tempora

Imagine you're a timekeeper in a bustling train station. You have clocks from all over the world, each set to a different time zone. Every day, you have to make sure all these clocks are synchronized with the grand clock in the station's main hall.

One day, the grand clock stops working. You quickly fix it, but now all the other clocks are out of sync. You need to calculate how much each clock is off by, so you can adjust them to match the grand clock.

But there are so many clocks, and so little time! You need a faster way to calculate the time differences.

That's where your coding skills come in. You decide to write a JavaScript program to do the calculations for you. Your program will take the times on each clock and the time on the grand clock, and calculate how many minutes each clock is off by.

This is a real-world problem that can be solved with code. By writing this program, you're not just learning to code, you're also learning to think like a problem solver. And who knows? Maybe one day, your code will help keep a train station running on time!

## Prerequisites

1. Install Node.js: Node.js is a JavaScript runtime that allows you to run JavaScript on your computer. You can download it from here. After installation, you can verify it by typing node -v in your terminal. It should display the installed version of Node.js.

2. Install a code editor: You'll need a code editor to write your JavaScript code. Visual Studio Code is a good option.

## Writing the Code

1. Create a new file: Open your code editor and create a new file. Save it as app.js.

2. Write the timeDifference function:

```javascript
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
```

This function takes two time strings in the format 'HH:MM', splits them into hours and minutes, and calculates the difference in minutes.

Write the synchronizeClocks function:
```javascript
// Function to synchronize an array of times with a reference time
function synchronizeClocks(times, referenceTime) {
    // For each time in the array, calculate the time difference with the reference time
    return times.map(time => timeDifference(time, referenceTime));
}
```
This function takes an array of time strings and a reference time string, and returns a new array where each element is the difference in minutes between the corresponding time in the input array and the reference time.

4. Test the code:
```javascript
// An array of times to synchronize
const times = ["14:45", "15:05", "15:00", "14:40"];

// The reference time to synchronize the times with
const referenceTime = "15:00";

// Log the result of synchronizing the times with the reference time
console.log(synchronizeClocks(times, referenceTime));  // [-15, 5, 0, -20]
```
This code creates an array of times and a reference time, and then logs the result of synchronizing the times with the reference time.

## Running the Code

1. Open your terminal and navigate to the directory where you saved app.js.

2. Run the code by typing node app.js in your terminal. You should see the output [-15, 5, 0, -20], which represents the differences in minutes between each time in the times array and the referenceTime.



