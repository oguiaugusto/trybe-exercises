students_names = []

with open('./assets/students.txt', 'r') as students_file:
    for line in students_file:
        student = line.split(" ")
        if (int(student[1]) < 6):
            students_names.append(f"{student[0]}\n")

with open('./assets/flunked_students.txt', 'w') as flunked_students:
    flunked_students.writelines(students_names)
