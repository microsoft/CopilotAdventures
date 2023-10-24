# Planet objects with their name, distance from Lumoria, and size
lumoria_planets = [
    { "name": "Mercuria", "distance": 0.4, "size": 4879 },
    { "name": "Earthia", "distance": 1, "size": 12742 },
    { "name": "Venusia", "distance": 0.7, "size": 12104 },
    { "name": "Marsia", "distance": 1.5, "size": 6779 }
]

# Takes an array of planets and the current index for the planet being evaluated
# and returns the number of planets that cast a shadow on the current planet
def get_shadow_count(planets, current_index):
    # Slice the array up to the current index, filter the planets that are larger than the current planet, and return the length of the resulting array
    return len([planet for planet in planets[:current_index] if planet["size"] > planets[current_index]["size"]])

# Takes the current index and the number of shadows cast on the planet
# and returns the light intensity of the planet
def get_light_intensity(i, shadow_count):
    if i == 0: return 'Full'
    if shadow_count == 1: return 'None'
    if shadow_count > 1: return 'None (Multiple Shadows)'
    return 'Partial'

# Calculates the light intensity of each planet by seeing how many shadows are cast on it from other planets
def calculate_light_intensity(planets):
    # Map over the array of planets, calculate the shadow count for each planet, 
    # and return an object with the planet name and its light intensity
    return [{"name": planet["name"], "light": get_light_intensity(i, get_shadow_count(planets, i))} for i, planet in enumerate(planets)]

# Sort the array of planets by distance
sorted_planets = sorted(lumoria_planets, key=lambda planet: planet["distance"])

# Print the light intensity of each planet
print(calculate_light_intensity(sorted_planets))