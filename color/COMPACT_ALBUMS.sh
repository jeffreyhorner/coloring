#!/bin/bash
crontab -e
cp Albums.txt Albums.txt.bak 
sort -u Albums.txt > Albums.txt.new
mv Albums.txt.new Albums.txt
crontab -e
