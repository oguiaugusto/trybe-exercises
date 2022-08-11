from colors import COLORS


class Log:
    def send(self, message: str):
        return message


class LogSuccess(Log):
    def __init__(self, log: Log):
        self.log = log

    def send(self, message: str):
        return f"{COLORS['GREEN']}{self.log.send(message)}{COLORS['RESET']}"


class LogWarning(Log):
    def __init__(self, log: Log):
        self.log = log

    def send(self, message: str):
        return f"{COLORS['ORANGE']}{self.log.send(message)}{COLORS['RESET']}"


class LogError(Log):
    def __init__(self, log: Log):
        self.log = log

    def send(self, message: str):
        return f"{COLORS['RED']}{self.log.send(message)}{COLORS['RESET']}"


if __name__ == "__main__":
    log = Log()
    log_success = LogSuccess(log)
    log_warning = LogWarning(log)
    log_error = LogError(log)

    print(log.send("Common Log"))
    print(log_success.send("Success Log"))
    print(log_warning.send("Warning Log"))
    print(log_error.send("Error Log"))
