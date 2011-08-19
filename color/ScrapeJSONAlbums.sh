#!/bin/bash
rm -f albums.txt albums2.txt albums3.txt
sort -uk 1,2 Albums.txt |  awk -Fcolor.com/ '{print $2}' | awk '{print $1}' | grep '^s' | sed -e 's/^s\///' | sort -u  > albums.txt
ls -1 json/ | sed -e 's/\.json//' | sort -u > albums2.txt
comm -2 -3 albums.txt albums2.txt > albums3.txt
for i in `cat albums3.txt`; do
	echo Getting $i
	./AlbumToJSON.sh $i > json/$i.json
	sleep 1
done
