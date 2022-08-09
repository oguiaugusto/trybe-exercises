from typing import List, Union


class Statistics():
    @staticmethod
    def average(num_list: List[Union[int, float]]):
        numbers_sum = sum(num_list)
        return numbers_sum / len(num_list)


    @staticmethod
    def median(num_list: List[Union[int, float]]):
        sorted_num_list = sorted(num_list)
        middle_index = len(sorted_num_list) // 2

        if len(num_list) % 2 != 0:
            return sorted_num_list[middle_index]

        even_mid = [sorted_num_list[middle_index - 1], sorted_num_list[middle_index]]
        return Statistics.average(even_mid)


    @staticmethod
    def mode(num_list: List[Union[int, float]]):
        longest_list = []

        for pri_num in num_list:
            curr_list = []

            for sec_num in num_list:
                if sec_num == pri_num:
                    curr_list.append(sec_num)

            if len(curr_list) > len(longest_list):
                longest_list = curr_list

        return longest_list[0]


avg = Statistics.average([1, 2, 3, 4, 5, 6])
mode = Statistics.mode([1, 2, 1, 1, 2, 2, 2, 3, 4])
medOdd = Statistics.median([1.54, 1.67, 1.50, 1.65, 1.75, 1.69, 1.60, 1.55, 1.78])
medEven = Statistics.median([32, 27, 15, 44, 15, 32])

print(f"average: {avg}")
print(f"mode: {mode}")
print(f"median odd list: {medOdd}")
print(f"median even list: {medEven}")
