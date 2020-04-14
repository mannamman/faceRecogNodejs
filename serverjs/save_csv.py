import os
import sys
print(sys.argv)
date = sys.argv[1]
date = date.split(',')
if len(date)==3:
    date=date[::2]
path = '/home/namth/serverjs/log.csv'
date1,date2 = date
if not os.path.exists(path):
    with open(path,'w') as f:
        f.write(date1)
        f.write(', ')
        f.write(date2)
        f.write('\n')
else:
    with open(path,'a') as f:
        f.write(date1)
        f.write(', ')
        f.write(date2)
        f.write('\n')
