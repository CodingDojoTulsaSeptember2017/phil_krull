name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]

favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]


print (name[1])

# for counter in name:
#   print(counter)

# for counter in favorite_animal:
#   print(counter)

my_dict = {}

# count = 0
# while count < len(name):
#   print(name[count])
#   my_dict[name[count]] = favorite_animal[count]
#   print(favorite_animal[count])
#   print('-'*90)
#   count+=1


# print(my_dict)







def make_dict(arr1, arr2):
  new_dict = {}

  my_zipped_list = zip(arr1, arr2)

  my_dict_from_zip = dict(my_zipped_list)

  print(my_dict_from_zip)

  # your code here
  return new_dict

make_dict(name, favorite_animal)