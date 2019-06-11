# Apps-Script-collection

This is a collection of snippets and functions that I have written in the course of the past years. I am storing them with the community in hope that it could benefit others ;-)
I have written this code for me and my projects and you should adapt it to yours;-)

## Drive_SearchbyDate.gs
This function **"SearchDaterange()"** basically list all files within google drive that have not been modified for more than 365 days. The time limit is hard coded in the file but could easily be picked from a cell if needed.
The logic of the function is just to build a search query that is well formated to give you a workable output.
The function has been made to be called from a spreadsheet and will output all the data in the current active spreadsheet... So call it only on blank spreadsheet.
I had use it to review old files for archiving/cleaning of a team drive and I had other function that would read the last columns and perform action based on it.
