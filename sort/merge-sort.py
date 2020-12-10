def sort(items):
    if len(items) < 2:
        return items
    if len(items) == 2:
        if items[0] > items[1]:
            return [items[1], items[0]]
        return items
    middle = len(items) // 2
    left_sorted_items = sort(items[:middle])
    right_sorted_items = sort(items[middle:])
    merged_items = []
    left_index = 0
    right_index = 0
    while left_index < len(left_sorted_items) and right_index < len(
        right_sorted_items
    ):
        if (
            left_index >= len(left_sorted_items)
            or left_sorted_items[left_index] > right_sorted_items[right_index]
        ):
            merged_items.append(right_sorted_items[right_index])
            right_index += 1
        else:
            merged_items.append(left_sorted_items[left_index])
            left_index += 1
    while left_index < len(left_sorted_items):
        merged_items.append(left_sorted_items[left_index])
        left_index += 1
    while right_index < len(right_sorted_items):
        merged_items.append(right_sorted_items[right_index])
        right_index += 1
    return merged_items


# unsorted_list = [2, 3, 1, 7, 0, 8, 4, 9]
unsorted_list = [-25, 104, 12, 3, 6, 9, 25, -25, 13, -13]
sorted_list = sort(unsorted_list)
print(unsorted_list)
print(sorted_list)
