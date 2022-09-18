from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operations: ')
    print('1. Add vehicle')
    print('2. Remove a vehicle')
    print('3. Parked vehicles')
    print('4. Close the program')
    option = int(input('\nOption: '))

    if option == 1:
        plate_number = input('plate number: ')
        garage.push(plate_number)
        print('\nVehicle ' + plate_number + ' parked\n')
    elif option == 2:
        vehicle_plate = input('plate number: ')
        street = Stack()
        removed = False
        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print('\nVehicle ' + vehicle_plate + ' removed\n')
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print('\nThere is no vehicle parked with this plate\n')
    elif option == 3:
        print('\nParked vehicles: ' + str(garage) + '\n')
    else:
        print('\nFinishing The garage Plus 2000!')
        option = 4
