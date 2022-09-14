from subprocess import check_output
import threading
import cursor


def get_memories():
    memory_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]
    total_memory = int(memory_information[1]) / 1000
    used_memory = int(memory_information[2]) / 1000

    return [total_memory, used_memory]


def main():
    threading.Timer(1.0, main).start()

    total_memory, used_memory = get_memories()
    print(
        f"{used_memory:.0f}MB used of {total_memory:.0f}MB",
        end="\r"
    )


main()
