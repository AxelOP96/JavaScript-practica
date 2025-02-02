/*
Escribe un bucle que realice siete llamadas a console.log para mostrar el
siguiente triángulo:
#
##
###
####
#####
######
####### */
let hashtag = "*";
for (let index = 0; index < 7; index++) {
    console.log(hashtag);
    hashtag+= "*";
}