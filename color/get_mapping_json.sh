#!/bin/bash
#grabs the t.co URLs from the Albums.txt file and runs an R script which pulls out the mappings to the color.com URLs

grep -oh http://t\\.co/[a-zA-Z0-9]\\{7\\} Albums.txt > t.co.urls
Rscript get_color_urls.R
