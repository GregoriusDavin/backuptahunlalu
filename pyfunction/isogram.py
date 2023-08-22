def is_isogram(string):
    string = string.lower()
    unique_C = set()
    for c in string:
        if c.isalpha():
            if c in unique_C:
                return False
            unique_C.add(c)
    return True

print(is_isogram("shiroko")) 
#output => false