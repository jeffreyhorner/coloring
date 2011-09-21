#!/bin/bash
rm -f albums.txt albums2.txt albums3.txt t.co.urls

./AlbumScraper.R | sort -k 1 >> Albums.txt

cp Albums.txt Albums.txt.bak 
sort -u Albums.txt > Albums.txt.new
mv Albums.txt.new Albums.txt

# Find json albums from color.com urls
grep -oh color.com/s/[a-zA-Z0-9]* Albums.txt | sed -e s'/color.com\/s\///' | sort -u > albums.txt

# Update mapping from t.co -> color.com urls
grep -oh http://t\\.co/[a-zA-Z0-9]* Albums.txt | sort -u > t.co.urls

awk -F, '{print $1}' t.co.color.urls | sort -u > t.co.$$.txt
for i in `comm -1 -3 t.co.$$.txt t.co.urls`; do 
	echo -n $i,
	wget -O /dev/null $i 2>&1 | grep Location | awk '{print $2}'; 
done | grep color.com | sort -t, -k2 -u >> t.co.color.urls
rm t.co.$$.txt
sort -t, -k2 -u t.co.color.urls > t.co.$$.txt
rm t.co.color.urls
mv t.co.$$.txt t.co.color.urls

# Grab the json album from last string in each line
grep -oh '[a-zA-Z0-9]*$' t.co.color.urls | sort -u >> albums.txt

sort -u albums.txt >> albums.$$.txt
rm albums.txt
mv albums.$$.txt albums.txt

ls -1 json/ | sed -e 's/\.json//' | sort -u > albums2.txt
comm -2 -3 albums.txt albums2.txt > albums3.txt
for i in `cat albums3.txt`; do
	echo Getting $i
	./AlbumToJSON.sh $i > json/$i.json
	sleep 1
done
