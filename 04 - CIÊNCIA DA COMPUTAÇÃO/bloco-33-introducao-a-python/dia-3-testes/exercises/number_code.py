import re


cypher = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "WXYZ": 9,
}

def number_code(value: str):
    if len(re.findall(r"[a-zA-Z0-1-\s]", value)) != len(value) or value == "":
        return "Input can only contain letters, hyphens (-), 0 and 1"

    print(value)
    coded_value = ""
    for letter in value.upper():
        if letter in "01-": coded_value += letter
        elif letter == " ": coded_value += "-"
        else: 
            for key, num in cypher.items():
                if letter in key:
                    coded_value += str(num)
                    break

    return coded_value
