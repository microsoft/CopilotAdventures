## The Celestial Alignment of Lumoria

<a href="#">
    <img src="../../Images/lumoria.jpg" style="width: 830px" />
</a>

### Background

In the vast expanse of the Galaxia Nebulae, a rare phenomenon is about to occur in the Lumoria star system. The planets, revolving around the Lumorian Sun, are aligning in a celestial dance that happens only once every few millennia. This alignment has a unique effect on how the light from the Lumorian Sun reaches each planet.

### Objective

Your task is to calculate the intensity of light each planet receives during this alignment. Given the distances of the planets from the Lumorian Sun and their relative positions, determine which planets might experience a decrease in light intensity due to other planets casting shadows on them.

### Specifications

1. **Planetary Data:**

| Planet Name | Distance (AU) | Size (km) |
|-------------|---------------|----------|
| Mercuria    | 0.4           | 4879     |
| Earthia     | 1             | 12742    |
| Marsia      | 1.5           | 6779     |
| Venusia     | 0.7           | 12104    |

The planets aren't sorted by their distance from the Lumorian Sun so you'll need to handle that.

2. **Light Dynamics:**
- If a smaller planet is behind a larger planet (relative to the Lumorian Sun), it will be in the shadow and will receive no light (`None`).
- If a larger planet is behind a smaller planet (relative to the Lumorian Sun), it will have `Partial` light.
- If a planet is in the shadow of multiple planets, it will be marked as `None (Multiple Shadows)`.
- If two planets are of similar size and are near each other in alignment, they might partially eclipse each other, but for simplicity, you can consider them both to receive full light.

3. **Output:**
    - Your system should output a list of planets and the light intensity they receive: `Full`, `Partial`, `None`, or `None (Multiple Shadows)`.

### Constraints

- Use GitHub Copilot and write the simulation in any language you'd like.
- Focus on clear and concise code that handles planet checks efficiently. Ask GitHub Copilot/Chat, "How can I make this code more readable and maintainable?".
- Creating a visual SVG representation for the planets is optional but encouraged if you have time.

### Summary of High-Level Steps to Perform

1. Sort the list of planets based on their distance from the Lumorian Sun.
1. Traverse the sorted list of planets.
1. For each planet, check the planets that are closer to the Lumorian Sun to see if they cast a shadow on other planets.
1. Output the light intensity each planet receives.

### GitHub Copilot Tips

<a href="#">
    <img src="../../Images/copilot-tips.jpg"  style="width: 830px" />
</a>

First, you're going to need to get the planets into a data structure that you can work with.

1. Copy the Markdown table shown earlier.
1. Open the [GitHub Copilot Chat view](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) and enter the following text. Substitute your language of choice for "JavaScript".
    
    ```text
    turn this markdown list into a JavaScript array of objects
    ```

1. Paste the Markdown table under your comment and press ENTER
1. Insert the generated planets array into your code.

```js
// light intensity array

// traverse the sorted array

    // create an object to track the count of Larger and Smaller planets that are closer to the sun than the current planet

    // for all the planets that come before this planet in the planets array, increment Larger if they are larger than the current planet or Smaller if they are smaller than the current planet

    // if count.larger === 0 and count.smaller === 0 push planet name and "Full" to lightIntensity 

    // if count.smaller > 0 and count.larger === 0 push planet name and "Partial" to lightIntensity

    // if count.larger === 1 push planet name and "None" to lightIntensity

    // if count.larger > 1 push planet name and "None (Multiple Shadows)" to lightIntensity

// print the lightIntensity array
```

#### Use Copilot to improve efficiency

See if you can use Copilot to find out the complexity (BigO notation) of the code.

1. Open the [GitHub Copilot Chat view](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat#asking-your-first-question) in the sidebar if it's not already open. Make sure your solution file is still open as well.

1. Ask Copilot Chat what the complexity of the code is.

1. Ask Copilot Chat to make the code more efficient.

1. Ask for the complexity again - is it better?

#### Use Copilot to generate code comments

1. Highlight all of the code with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>.

1. Press <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>I</kbd> to open the inline chat. 

1. Type "/doc"

1. Ask Copilot Chat to document the function.

#### Use Copilot to simplify your code

1. Open GitHub Copilot Chat in the sidebar.

1. Type "/simplify" and press <kbd>Enter</kbd>. You can also add any text you want after the "/simplify" to give Copilot more instructions.

1. What did Copilot Chat suggest you do to make it simpler?

#### Got Errors?

Copilot Chat can help with that too! Just copy the error message and paste it into Chat. Often that's all Copilot needs to resolve your issue.