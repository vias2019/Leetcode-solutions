#! /usr/bin/bash
echo Hello World!
#VARIABLES
#Uppercase by Convention
#Letters, numbers, and underscores
NAME="Brad"
echo "My name is $NAME"
echo "My name is ${NAME}"

#USER INPUT
read -p "Enter your name here: " NAME1
echo "Hello $NAME1, nice to meet you!"

#SIMPLE IF STATEMENT
if [ "$NAME1" == "Brad" ]
then 
    echo "Your name is Brad"
elif [ "$NAME1" == "Jack" ]
then
    echo "Your name is Jack"
else
    echo "Your name is NOT Brad or Jack"
fi

#COMPARISON
NUM1=3
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then    
    echo "$NUM1 is greater than $NUM2"
else
    echo "$NUM1 is less than $NUM2"
fi

#FILE CONDITIONS
FILE="test.txt"
if  [ -f "$FILE"]
then
    echo "$FILE is a file"
else
    echo "$FILE is NOT a file"
fi
echo "Memory:"
free -h
echo "Disk Usage:"
df -h    
echo "Uptime:"
uptime
exit
