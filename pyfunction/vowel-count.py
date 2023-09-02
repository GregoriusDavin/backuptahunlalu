def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char.lower() in vowels:
            count =+ 1
        return count