from abc import abstractmethod
from typing import List
from colors import COLORS


class TaskTrigger:
    @abstractmethod
    def trigger():
        pass


class Alarm:
    def __init__(self):
        self.tasks: List[TaskTrigger] = []

    def add_task(self, task: TaskTrigger):
        self.tasks.append(task)

    def execute_tasks(self):
        for task in self.tasks:
            task.trigger()

    def trigger(self):
        print(f"{COLORS['RED']}{COLORS['BOLD']}Wake Up!{COLORS['RESET']}")
        self.execute_tasks()


class TurnLightsOn(TaskTrigger):
    def __init__(self, alarm: Alarm):
        alarm.add_task(self)

    def trigger(self):
        print(f"{COLORS['ORANGE']}Turning lights on!{COLORS['RESET']}")


class PrepareBreakfast(TaskTrigger):
    def __init__(self, alarm: Alarm):
        alarm.add_task(self)

    def trigger(self):
        print(f"{COLORS['GREEN']}Preparing breakfast!{COLORS['RESET']}")


class TurnOnComputer(TaskTrigger):
    def __init__(self, alarm: Alarm):
        alarm.add_task(self)

    def trigger(self):
        print(f"{COLORS['PINK']}Turning on computer!{COLORS['RESET']}")


class TurnOffComputer(TaskTrigger):
    def __init__(self, alarm: Alarm):
        alarm.add_task(self)

    def trigger(self):
        print(f"{COLORS['BLUE']}Turning off computer!{COLORS['RESET']}")


if __name__ == "__main__":
    alarm = Alarm()

    TurnLightsOn(alarm)
    PrepareBreakfast(alarm)
    TurnOnComputer(alarm)

    alarm.trigger()
    print("\n")

    alarm2 = Alarm()
    TurnOffComputer(alarm2)
    alarm2.trigger()
