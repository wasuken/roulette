#!/bin/sh

colors=(Black
White
Red
Lime
Blue
Yellow
Cyan
Magenta
Silver
Gray
Maroon
Olive
Green
Purple
Teal
Navy)

for var in ${colors[@]}
do
	convert -size 30x30 xc:$var ./dist/img/$var.jpg
done
