library(RJSONIO)

# Can either be a file
# or urls 'http://color.com/json/stream/search/by-root/YSVI6G'
colorAlbum <- function(f){
	x <- fromJSON(content=gsub('(\\w+):','"\\1":',paste(readLines(con=f,warn=FALSE),collapse='')))
	if (inherits(x,'try-error')) return(NULL)
	class(x) <- 'colorAlbum'
	x
}
numUsers <- function(x) {
	if (is.character(x)) x <- colorAlbum(x)
	if (!is.null(x) && inherits(x,'colorAlbum')) return(length(x$user))
	NA
}
