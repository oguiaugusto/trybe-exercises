from abc import abstractmethod
from datetime import datetime
from typing import List


class LogManipulator():
    @abstractmethod
    def log(self):
        raise NotImplementedError


class LogManipulatorFile(LogManipulator):
    def __init__(self, filename: str):
        self.filename = filename


    def log(self, message: str):
        with open(self.filename, mode="+a") as file:
            file.writelines(message + '\n')


class Log():
    def __init__(self, manipulators: List[LogManipulator]):
        self.__manipulators = manipulators


    def add_manipulator(self, manipulator: LogManipulator):
        self.__manipulators.append(manipulator)


    def info(self, message: str):
        self.__log("INFO", message)


    def error(self, message: str):
        self.__log("ERROR", message)


    def alert(self, message: str):
        self.__log("ALERT", message)


    def debug(self, message: str):
        self.__log("DEBUG", message)


    def __log(self, level: str, message: str):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, message))


    def __format(self, level: str, message: str):
        date = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        return f"[{level} - {date}]: {message}"


if __name__ == "__main__":
    manipulator = LogManipulatorFile("log.txt")
    log = Log([manipulator])
    log.info("Hello World")
    log.error("Error")
    log.alert("Alert")
    log.debug("Debug")
