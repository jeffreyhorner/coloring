#gets t.co --> color.com mappings and writes out the JSON files to the /json folder as well as a mapping file color.to.mapping

urls <- read.table("t.co.urls", header=FALSE)

urls <- urls[,1]
result.frame <- data.frame(color.url=NA, to.url=NA)

for(i in 1:length(urls)){
	var<-system(paste("wget -O /dev/null", urls[i], "2>&1 | grep Location | awk '{print $2}' | sed -e 's/^.*color.com\\/s\\///'", sep=" "), intern=TRUE)
	if(length(var) > 1){
		var <- var[2]
	}	
	color.url <- paste("http://color.com/s/", as.character(var), sep="")
	cat(i, " out of ", length(urls), ": ", var, "\t", color.url, "\n")
	result.frame[i,]$color.url <- as.character(color.url)
	result.frame[i,]$to.url <- as.character(urls[i])
	system(paste("sh AlbumToJSON.sh ", as.character(var), " > json/", as.character(var), ".json", sep=""))
}

write.table(result.frame, sep=",", file="color.to.mapping", quote=FALSE, row.names=FALSE)
