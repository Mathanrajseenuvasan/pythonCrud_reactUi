from sample import dumps


# def simplify(data):
#     outflow = data['account_detail']['1944']['period_info']['Mar-2019']['outflows']['transfer_ids']
#     inflow = data['account_detail']['1944']['period_info']['Mar-2019']['inflows']
#     nsf_info = data['account_detail']['1944']['period_info']['summary']['nsf_info']

#     print("outflow", outflow, "inflow", inflow, "nsf_info", nsf_info)



# def keys_exists(element, *keys):
#     '''
#     Check if *keys (nested) exists in `element` (dict).
#     '''
#     if not isinstance(element, dict):
#         raise AttributeError('keys_exists() expects dict as first argument.')
#     if len(keys) == 0:
#         raise AttributeError('keys_exists() expects at least two arguments, one given.')

#     _element = element
#     for key in keys:
#         try:
#             _element = _element[key]
#         except KeyError:
#             return False
#     return True
    
# def check_key(data):
#     print('(exists): {}'.format(keys_exists(data, 'accounts', '1994')))
    

# result = check_key(dumps)



# def exists( obj, chain):
#     _key = chain.pop(0)
#     if _key in obj:
#         result = exists(obj[_key], chain) if chain else obj[_key]
#         return result
#         # if exists(obj[_key], chain) if chain else obj[_key]:
#         #     return True
#     else:
#         raise  KeyError("no object found")


# result = exists(dumps, ['accounts','1944'])
# print("result", result)

# x  = dumps.get('accounts', {}).get('1944', {}).get('bank_name')
# print(x)


# def find(key, dictionary):
#     for k, v in dictionary.items():
#         print(len(dictionary.items()))
#         if k == key:
#             return True
#         else:
#             if isinstance(v, dict):
#                 print('udhaya', v, 'key: ',key)
#                 find(key, v)
#         break

    #     elif isinstance(v, dict):
    #         yield find(key, v)
    #     elif isinstance(v, list):
    #         for d in v:
    #             for result in find(key, d):
    #                 yield result

# def isValidKey(key, dict):
#     if key in dict.keys():
#         return True
#     else:
#         return False    

example = {
    "aaa": {
        "bbb": {
            "ccc": {
            "ccc11": 1,
            "ddd11": "child21",
            "fff11": "child31"
            },
            "ddd": "child2",
            "fff": "child3",
            "ccc11": 2
            },
        "bbb1": {
            "ccc1": "child11",
            "ddd1": "child21",
            "fff1": "child31",
            "ccc11": 3,
            }
        }
    }

def find(key, dictionary):
    for k, v in dictionary.items():
        if k == key:
            yield v
        elif isinstance(v, dict):
            for result in find(key, v):
                yield result
        elif isinstance(v, list):
            for d in v:
                for result in find(key, d):
                    yield result



# data = list(find('ccc11', example))
# print("data", data[0])


def myprint(d):
    for k, v in d.items():
        if isinstance(v, dict):
            myprint(v)
        else:
            # print("{0} : {1}".format(k, v))
            test(k,v)

def test(k, v):
    nsf_ids = []
    nsf_reversal_ids = []
    if k == "nsf_ids":
        dictionary = {
            "nsf_ids": v
        }
        nsf_ids.append(dictionary)
    if k == "nsf_reversal_ids":
        dictionary = {
            "nsf_reversal_ids": v
        }
        nsf_reversal_ids.append(dictionary)


            
check = myprint(dumps)


# dictionary = dumps
# search_nsf = "account_detail"
# for nsf in dictionary.keys():
#     if nsf == search_nsf:
#         name = dictionary[nsf]
#         print(name)





# data = isValidKey("ccc11", example)
# print(data)
