def sort(items):
    sorted_items = items[:]
    for outer_num in range(len(sorted_items)):
        smallest_num = sorted_items[outer_num]
        for inner_num in range(len(sorted_items) - outer_num):
            if sorted_items[inner_num + outer_num] < smallest_num:
                smallest_num = sorted_items[inner_num + outer_num]
                (
                    sorted_items[outer_num],
                    sorted_items[outer_num + inner_num],
                ) = (
                    sorted_items[outer_num + inner_num],
                    sorted_items[outer_num],
                )
    return sorted_items


# unsorted_list = [3, 1, 7, 0]
unsorted_list = [2, 3, 1, 7, 0, 8, 4, 9]
sorted_list = sort(unsorted_list)
print(unsorted_list)
print(sorted_list)
