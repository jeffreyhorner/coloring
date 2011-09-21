#!/usr/bin/env Rscript
library(methods)
library(RJSONIO)

# Use like this:
# cp /dev/null ALBUMS_0.csv
# for i in `grep  -l -m 1 ^{$ json/* | awk -F: '{print $1}'`;
#   do ./JSONToCSV_0.R $i >> ALBUMS_0.csv;
# done

# Read into R like this:

# x <- read.csv('ALBUMS_0.csv',header=FALSE,col.names=c('hash','timestamp','type','ID','user','userid'),stringsAsFactors=FALSE,colClasses=c('character','character','character','double','character','double'))



json_file <- commandArgs(trailingOnly=TRUE)
json_hash <- sub('.json','',basename(json_file))
x <- try(fromJSON(content=gsub('(\\w+):','"\\1":',paste(readLines(json_file,warn=FALSE),collapse=''))))

# Build user hash
user <- list()
# If no user data exist, then this file is faulty. It won't even show
# up on the color.com website. So skip it.
if (is.null(x$user)){
	# cat('FAIL',json_file,'\n')
	q(save='no')
}
for (i in 1:length(x$user)){

	user[[as.character(x$user[[i]]$id)]] <- x$user[[i]]$name
}

# Now loop through assets
for (i in 1:length(x$item[[1]]$child_item)){
		item <- x$item[[1]]$child_item[[i]]
		cat(json_hash,',',sep='')	
		cat(format(as.POSIXct(item$timestamp_client/1000,origin='1970-01-01')),',',sep='')	
		if (!is.null(item$photo)){
			cat('photo,')
			cat(item$photo,user[[as.character(item$user_id)]],item$user_id,sep=',')	
		} else if (!is.null(item$video)){
			cat('video,')
			cat(item$video,user[[as.character(item$user_id)]],item$user_id,sep=',')	
		}
		cat('\n')
}
