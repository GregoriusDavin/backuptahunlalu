def to_camel_case(text):
    sentece = text.replace('-', '_').split('_')
    camel_case = sentece[0] + ''.join(word.capitalize() for word in sentece[1:])
    return camel_case
print(to_camel_case("AKU JAWA"))