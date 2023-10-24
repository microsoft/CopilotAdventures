echoes = [3, 6, 9, 12]
memories = []

# This function is predicting the next number in the sequence by finding the difference 
# between the first two numbers and adding that difference to the last number in the sequence.
def predict_next(echoes):
    difference = echoes[1] - echoes[0]
    next_value = echoes[-1] + difference
    # Store the full sequence including the predicted number in memories
    memories.extend(echoes + [next_value])
    return next_value

print(predict_next(echoes))