class Tv():
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False


    def turn_up_volume(self):
        if self.__volume < 99:
            self.__volume += 1


    def turn_down_volume(self):
        if self.__volume > 0:
            self.__volume -= 1


    def change_channel(self, channel):
        if not 1 <= channel <= 99:
            raise ValueError(f"Channel must be between 1 and 99")
        else:
            self.__channel = channel


    def turn(self):
        self.__on = self.__on is False


new_tv = Tv("50 Polegadas")
new_tv.turn()
