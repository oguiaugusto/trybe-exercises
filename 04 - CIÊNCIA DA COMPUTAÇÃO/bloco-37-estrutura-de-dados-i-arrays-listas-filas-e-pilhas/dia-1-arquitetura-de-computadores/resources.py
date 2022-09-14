from subprocess import check_output


raw_cpu_informations = check_output("lscpu").decode("UTF-8").split("\n")
cpu_informations = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}


for name, showing_name in cpu_informations.items():
    for cpu_information in raw_cpu_informations:
        if cpu_information.lower().startswith(name):
            cpu_information_entries = cpu_information.split("  ")
            cpu_information_value = cpu_information_entries[-1].strip()
            print(f"{showing_name}: {cpu_information_value}")


print("\n")
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
print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)
