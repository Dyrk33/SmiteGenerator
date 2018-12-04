with open("index.txt") as f:
    content = f.readlines()
    content = [x.strip() for x in content]
    print(content)
#for line in content:
#    print("<option>" + line + "<option>")
