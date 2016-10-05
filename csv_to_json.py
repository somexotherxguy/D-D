import json
barg = open("D&D Info.csv")
carg = barg.read()
barg.close()
aarg = [i.split(',') for i in carg.split('\n')]

print(json.dumps(aarg))
