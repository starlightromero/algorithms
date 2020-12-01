def sort(items):
    sorted_items = items[:]
    for outer_num in range(len(sorted_items) - 1):
        for inner_num in range(len(sorted_items) - 1):
            if sorted_items[inner_num] > sorted_items[inner_num + 1]:
                sorted_items[inner_num], sorted_items[inner_num + 1] = (
                    sorted_items[inner_num + 1],
                    sorted_items[inner_num],
                )
    return sorted_items


unsorted_list = [3, 1, 7, 0]
sorted_list = sort(unsorted_list)
print(unsorted_list)
print(sorted_list)
