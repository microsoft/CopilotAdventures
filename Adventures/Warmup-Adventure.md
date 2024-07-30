## GitHub Copilot Warmup Adventure

<a href="#">
    <img src="../Images/warm-up.jpg" style="width: 830px" />
</a>

GitHub Copilot is an AI pair programmer that helps you write better code. In this warm up adventure you'll get to know Copilot and try it out for yourself. Here are a few things you can do with GitHub Copilot:

- Convert comments into code. Need to make an HTTP call, filter an array, or perform another task? Write a comment and Copilot will convert it into code for you. 
- Create a UI. Use pure HTML/CSS/JavaScript or a library/framework of your choosing. 
- Create SQL queries.
- Create unit tests. 
- Write code in a new language.
- Explain code you're working on.
- And more!

If you're brand new to GitHub Copilot check out this video to learn more about the benefits it can bring to your development workflow. Once you've watched the video, come back here and choose an adventure to get started.
    
[![GitHub Copilot Video](../Images/copilot-video.png)](https://www.youtube.com/watch?v=Dlt-DCLHnxM)

## Getting Started: Installing the GitHub Copilot Extension

Follow the steps below to install the GitHub Copilot extension in Visual Studio or Visual Studio Code.

1. Install [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/) if you don't have it already.

1. Install GitHub Copilot by following the steps at https://docs.github.com/en/copilot/getting-started-with-github-copilot. 

1. Install GitHub Copilot Chat by following the steps at https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat.

## What If I Don't Have a GitHub Copilot License?

**Are you a student?** Learn more about how to [setup and access GitHub Copilot here](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-setting-up-github-student-and-github-copilot-as-an/ba-p/3736279). 

If you don't currently have a GitHub Copilot license, you can:

- [Sign up for a free trial](https://github.com/login?return_to=%2fgithub-copilot%2fsignup). 
<!-- - If you have a coupon code, <a href="../README.md#coupon">view the instructions to use it.</a>. -->

## Your First Adventure: The Chamber of Echoes

Let's get started with your first adventure!

<a href="#">
    <img src="../Images/echo-castle.jpg" style="width: 830px" />
</a>

### Background:

Perched atop the highest hill, overlooking the kingdom, stands the majestic Echo Castle. Within its stone walls is a chamber known as the Echo Room. This chamber, unlike any other, has the mystic power to echo numbers to anyone who enters. However, the Echo Room doesn't just echo back any numbers; it always echoes the next number in a sequence.

Legends tell of a wizard who enchanted this chamber to test the intellect of visitors. The room would echo numbers in sequence, and only those who could predict the next echo were deemed worthy of the castle's hidden treasures.

### Objective:

Your task is to enter the Echo Room and listen to its sequence, then predict the next number it will echo. You have been provided with a series of numbers the room has echoed in the past. Use these numbers to determine the next one in the sequence.

### Specifications:

1. **Input**:
    - A list of at least three numbers that form a sequence. This list represents the numbers the room has echoed in the past.
    
2. **Output**:
    - A single number representing the next number in the sequence.

3. **Assumptions**:
    - The sequence will always be an arithmetic progression (The difference between consecutive numbers is constant).

### Sample Data:

Consider the sequence: [3, 6, 9, 12]

The next number echoed by the room should be: 15

### Constraints:

- The following solution uses JavaScript and Node.js, but you can use Copilot to write the code in another language if you'd like. 

### Summary of High-Level Tasks to Perform:

1. Use a console application to render the output.
1. Create a constant to hold the provided number sequence.
1. Determine the common difference between consecutive numbers.
1. Predict the next number in the sequence using the identified pattern.


### GitHub Copilot Steps

This solution uses JavaScript and [Node.js](https://nodejs.org). Feel free to use another language/framework if you'd like.

1. Create a file named `echo-chamber.js` in a folder of your choosing.

1. Add a `const` named `echoes` to hold the numeric sequence into the file:

    ```js
    const echoes = [3, 6, 9, 12];
    ```

1. Type the following code after the `echoes` constant. Copilot should suggest code to help you determine the difference between consecutive numbers in the sequence.

    ```js
    function predictNext(echoes) {
    ```

1. To accept the suggestion, press <kbd>Tab</kbd>. The following function body should be added. Note that you may see a different code suggestion.

    ```js
    function predictNext(echoes) {
        let difference = echoes[1] - echoes[0];
        let next = echoes[echoes.length - 1] + difference;
        return next;
    } 
    ```

1. Enter a new line after the function and Copilot should suggest code similar to the following. If it doesn't, begin typing `console.log`. To accept the suggestion, press <kbd>Tab</kbd>.

    ```js
    console.log(predictNext(echoes));
    ```

1. Move your cursor above the `predictNext` function and select <kbd>CTRL + i</kbd> (Windows) or <kbd>CMD + i</kbd> (Mac).

1. Enter `/doc` into the textbox that appears and press <kbd>Enter</kbd>. You should see a comment generated for the function.

    ![inline chat in vs code](../Images/inline-chat.png)

1. Select `Accept` to accept the suggestion.

1. You should see that a comment is generated for the function.

    **NOTE:** In addition to generating documentation, you can also use comments to generate code.

1. Now let's assume that you want to store the "memories" of the previous numbers echoed by the room. Add the following code after the `echoes` variable.

    ```js
    const memories = [];
    ```

1. Add the following comment immediately **above** the `return next` statement in the `predictNext` function and press <kbd>Enter</kbd>. Accept the suggestion by pressing <kbd>Tab</kbd>.

    ```js
    // Store the full sequence including the predicted number in memories
    ```

1. You should see code similar to the following generated:

    ```js
    memories.push(...echoes, next);
    ```

1. Save `echo-chamber.js` and open a terminal window in the folder where you created the file.

1. Run the following command to execute the code. This assumes you have [Node.js](https://nodejs.org) installed.

    ```bash
    node echo-chamber.js
    ```

1. You should see `15` printed to the console which is the next number in the sequence. 

1. See if you can get Copilot to output the memories to the console for you by adding a comment.

## Echo Castle's Hidden Treasure is Now Yours!

<a href="#">
    <img src="../Images/echo-castle-treasure.jpg" style="width: 830px" />
</a>

You've completed your first GitHub Copilot "warmup" adventure! Check out the other adventures located in the [Adventures](../Adventures) folder to see other ways GitHub Copilot can be used.








