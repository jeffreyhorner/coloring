#!/usr/bin/ruby

require 'rubygems'
require 'base62'

STDIN.read.split("\n").each do |a|
   puts a.to_i.base62_encode
end
