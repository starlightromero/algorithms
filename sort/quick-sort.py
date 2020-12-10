def sort(items):
    copied_list = items[:]
    if len(copied_list) <= 1:
        return copied_list
    smaller_list = []
    bigger_list = []
    pivot_element = copied_list.pop()
    center_list = [pivot_element]
    while len(copied_list) > 0:
        current_element = copied_list.pop()
        if current_element == pivot_element:
            center_list.append(current_element)
        elif current_element > pivot_element:
            bigger_list.append(current_element)
        else:
            smaller_list.append(current_element)
    smaller_sorted_list = sort(smaller_list)
    bigger_sorted_list = sort(bigger_list)
    return smaller_sorted_list + center_list + bigger_sorted_list


unsorted_list = [2, 3, 1, 7, 0, 8, 4, 9]
sorted_list = sort(unsorted_list)
print(unsorted_list)
print(sorted_list)
