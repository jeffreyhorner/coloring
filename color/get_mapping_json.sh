#!/bin/bash
#grabs the t.co URLs from the Albums.txt file and runs an R script which pulls out the mappings to the color.com URLs


grep -oh http://t\\.co/[a-zA-Z0-9]\\{7\\} Albums.txt | sort -u > t.co.urls
unlink t.co.color.urls
for i in `cat t.co.urls`; do 
	echo -n $i,
	wget -O /dev/null $i 2>&1 | grep Location | awk '{print $2}'; 
done | grep color.com | sort -t, -k2 -u > t.co.color.urls
#Rscript get_color_urls.R
