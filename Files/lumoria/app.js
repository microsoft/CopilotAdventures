// Summary of High-Level Tasks to Perform
// Use a console application to render the output.
// Sort the list of planets based on their distance from the Lumorian Sun.
// Traverse the sorted list of planets.
// For each planet, check the planets that are closer to the Lumorian Sun to see if they cast a shadow on other planets.
// Output the light intensity each planet receives.

// This array contains objects representing planets, each with a name, distance from the Lumorian Sun, and size.
const lumoriaPlanets = [
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Venusia", distance: 0.7, size: 12104 },
    { name: "Marsia", distance: 1.5, size: 6779 }
];

// This function calculates the number of planets that cast a shadow on the current planet.
// It takes an array of planets and the index of the current planet.
// It returns the number of planets closer to the sun and larger than the current planet.
function getShadowCount(planets, currentIndex) {
    return planets.slice(0, currentIndex)
        .filter(planet => planet.size > planets[currentIndex].size)
        .length;
}

// This function calculates the light intensity of a planet.
// It takes the index of the planet and the number of shadows cast on the planet.
// It returns a string representing the light intensity based on the rules provided.
function getLightIntensity(i, shadowCount) {
    if (i === 0) return 'Full';
    if (shadowCount === 1) return 'None';
    if (shadowCount > 1) return 'None (Multiple Shadows)';
    return 'Partial';
}

// This function calculates the light intensity for each planet in the provided array.
// It returns a new array of objects, each containing the name of a planet and its light intensity.
function calculateLightIntensity(planets) {
    return planets.map((planet, i) => {
        const shadowCount = getShadowCount(planets, i);
        let lightIntensity = getLightIntensity(i, shadowCount);
        return { name: planet.name, light: lightIntensity };
    });
}

// This line sorts the array of planets by their distance from the Lumorian Sun.
const sortedPlanets = lumoriaPlanets.sort((a, b) => a.distance - b.distance);

// This line calculates the light intensity for each planet and logs the results to the console.
console.log(calculateLightIntensity(sortedPlanets));