library(RJSONIO)

# Can either be a file
# or urls 'http://color.com/json/stream/search/by-root/YSVI6G'
colorAlbum <- function(f){
	x <- try(fromJSON(content=gsub('(\\w+):','"\\1":',paste(readLines(con=f,warn=FALSE),collapse=''))))
	if (inherits(x,'try-error')) return(NULL)
	class(x) <- 'colorAlbum'
	x
}

timestampClient <- function(x){
	if (is.character(x)) x <- colorAlbum(x)
	if (!is.null(x) && inherits(x,'colorAlbum')) 
	    return(as.POSIXct(x$item[[1]]$timestamp_client/1000,origin="1970-01-01"))
	NA
}

numUsers <- function(x) {
	if (is.character(x)) x <- colorAlbum(x)
	if (!is.null(x) && inherits(x,'colorAlbum')) return(length(x$user))
	NA
}

counts <- function(x) {
	if (is.character(x)) x <- colorAlbum(x)
	if (!is.null(x) && inherits(x,'colorAlbum'))
	    return(x$item[[1]]$group_info$counts)
	NA
}

# Creates a data frame of counts from a directory of files in the form '<dir>/(*).json' where
# (*) is the encoded color album.
Counts <- function(d){
    x <- list()
    j <- 1
    lapply(file.path(d,dir(d)),function(i){
	    z <- colorAlbum(i)
	    if (!is.null(z)){
		nc <- counts(z)
		for (t in 1:length(nc)){
		    x[[names(nc)[t]]][j] <<- nc[t]
		}
		x$num_users[j] <<- numUsers(z)
		x$album[j]  <<- sub('.json','',basename(i))
		x$timestamp[j] <<- timestampClient(z)
		j <<- j + 1
	    }
    })
    x <- as.data.frame(x)
    class(x$timestamp) <- c('POSIXct','POSIXt')
    x
}

# Creates a data frame of photos (and videos) from a directory of files in the form '<dir>/(*).json' where
# (*) is the encoded color album.
Photos <- function(d){
    x <- list()
    j <- 1
    lfun <- function(i){
	    z <- colorAlbum(i)
	    if (!is.null(z)){
		album <- sub('.json','',basename(i))
		for (k in 1:length(z$item[[1]]$child_item)){
		    x$album[j] <<- album

		    n <- z$item[[1]]$child_item[[k]]
		    x$id[j] <<- n$id
		    x$type[j] <<- n$type
		    x$media[j] <<- n$media
		    x$root_item_id[j] <<- n$root_item_id
		    x$user_id[j] <<- n$user_id
		    x$timestamp[j] <<- as.POSIXct(n$timestamp_client/1000,origin="1970-01-01")
		    if (n$media == 'VIDEO')
			x$asset_id[j] <<- n$video[1]
		    else if (n$media=='PHOTO')
			x$asset_id[j] <<- n$photo[1]
		    else {
			cat(capture.output(str(n)),'\n')
			stop()
		    }
		    j <<- j + 1
		}
	    }
    }
    lapply(file.path(d,dir(d)),lfun)
    x <- as.data.frame(x)
    class(x$timestamp) <- c('POSIXct','POSIXt')
    x
}

toBase <- function(num, base=62) {
    bv <- c(seq(0,9),tolower(LETTERS),LETTERS)
    r <- num %% base
    res <- bv[r+1]
    q <- floor(num/base)
    while (q > 0L) {
	r <- q %% base
	q  <- floor(q/base)
	res <- paste(bv[r+1],res,sep='')
    }
    res
}

to10 <- function(num, base=62) {
    bv <- c(seq(0,9),tolower(LETTERS),LETTERS)
    vb <- list()
    for (i in 1:length(bv)) vb[[bv[i]]] <- i
    num <- strsplit(num,'')[[1]]
    res <- vb[[num[1]]]-1
    if (length(num) > 1)
	for (i in 2:length(num)) res <- base * res + (vb[[num[i]]]-1)
    res
}
