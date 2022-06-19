input = "ccedaabecd" #  --  Print Out ==> "3c2e2d2a1b"
prep_char = list(input) # convert input to list -> ['c', 'c', 'e', 'd', 'a', 'a', 'b', 'e', 'c', 'd']
#-----------------------------------------------------------------------
store_unique_char = []
for var in prep_char:
    count_var = 0
    if var not in store_unique_char:
        store_unique_char.append(var) # สร้าง list ที่มี unique variable ของ input --> ['c','e','d','a','b']
#-----------------------------------------------------------------------
count_arr = []
for char in store_unique_char:
    count_var = prep_char.count(char) # ใช้ Loop นับจำนวน characher ใน prep_char(line 2)
    count_arr.append(count_var)    # append ตัวเลขได้จากการนับใน array ว่าง
#-----------------------------------------------------------------------
merge_list = count_arr + store_unique_char # Merge 2 list - > [3, 2, 2, 2, 1, 'c', 'e', 'd', 'a', 'b']
# rearrange list-> [3, 'c', 2, 'e', 2, 'd', 2, 'a', 1, 'b']
new_merge_list = [merge_list[0],merge_list[5],merge_list[1],merge_list[6],merge_list[2],merge_list[7],merge_list[3],merge_list[8],merge_list[4],merge_list[9]]
#-----------------------------------------------------------------------
ans = []
for var in new_merge_list:
    ans.append(str(var)) #เอา variableทั้งหมดมา parse เป็น String เเละ append ลงใน ans list
ans = ''.join(ans)  #Convertเป็น String
print(ans)
    





# array = ["a","b","c","b","c"]
# count_arr = []
# store_arr = []
# for char in array:
#     if char not in store_arr:
#         store_arr.append(char)
#         count_var = array.count(char)
#         count_arr.append(count_var)
#     print(count_arr)
    

# y = []

# for var in x:
#     if var not in y:
#         y.append(var)
# print(y)
#     if var not in y:
#         y.append(x)
# print(y)
