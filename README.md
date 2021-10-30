## What does this app do?
in the textArea, put in a string which defines elements to be rendered. 
the string should look like a number of rows, that look like this:
row;col;header;type;value 
row;col;header;type;value
row;col;header;type;value
...

note that they're separated by \n
type could be either SELECT (dropdown) or TEXT_INPUT (just an input field)
value in case of SELECT can be a list of strings separated by ','
## input examples
1;1;select these;SELECT;val1,val2,val3,val4
1;2;t1;SELECT;val2
2;1;t1;SELECT;val3
2;2;t1;TEXT_INPUT;some initial input

2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;maritalstatus;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name

1;1;gender;SELECT;Male,Female
2;2;First Name;TEXT_INPUT;Enter your first name
3;3;maritalstatus;SELECT;Single,Maried,Divorced
4;4;last Name;TEXT_INPUT;Enter your last name


