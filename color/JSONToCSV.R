#!/usr/bin/env Rscript

# Use like this:
# for i in `grep  -m 1 ml_items json/* | awk -F: '{print $1}'`;
#   do ./JSONToCSV.R $i >> ALBUMS.csv;
# done


json_file <- commandArgs(trailingOnly=TRUE)
json_hash <- sub('.json','',basename(json_file))
for (i in grep('^    ml_items',readLines(json_file,warn=FALSE),value=TRUE)){
	if (grepl('tsClient',i)){
		cat(json_hash,',',sep='')	
		x <- as.double(sub('.* (\\d+).*','\\1',i,perl=TRUE))/1000
		x <- as.POSIXct(x,origin='1970-01-01')
		cat(format(x),',',sep='')
	}
	if (grepl('<a href',i)){
		x <- gsub('\\\\n','',strsplit(i,"'")[[1]][2])
		x <- gsub('\\\\','',x)
		if (grepl("<video",x)){
			cat('video,',sub('^.*videoId=(\\d+)".*','\\1',x,perl=TRUE),',',sep='')
		} else {
			cat('photo,',sub('^.*id=(\\d+)".*','\\1',x,perl=TRUE),',',sep='')
		}
		cat(sub('^.*<b>([^<]+).*','\\1',x,perl=TRUE),',',sep='')
		cat(sub('^.*id=(\\d+)&type.*','\\1',x,perl=TRUE),'\n',sep='')
	}
}
