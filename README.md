# Apps-Script-collection

This is a collection of snippets and functions that I have written in the course of the past years. I am storing them with the community in hope that it could benefit others ;-)
I have written this code for me and my projects and you should adapt it to yours;-)

## Drive_SearchbyDate.gs
This function **"SearchDaterange()"** basically list all files within google drive that have not been modified for more than 365 days. The time limit is hard coded in the file but could easily be picked from a cell if needed.
The logic of the function is just to build a search query that is well formated to give you a workable output.
The function has been made to be called from a spreadsheet and will output all the data in the current active spreadsheet... So call it only on blank spreadsheet.
I had use it to review old files for archiving/cleaning of a team drive and I had other function that would read the last columns and perform action based on it.


## Gmail_No-response.gs
*This script has been written by Jonathan Kim ( http://jonathan-kim.com/2013/Gmail-No-Response/) but the link is no longer active and I did not find easily the code, so I am allowing myself to store it here. If you re-use the code please do credit him.*
The idea behind the script is to flag with a given label message that are waiting for an answer. The is a second label that can be applied to message where you do not expect any answer and also a time limit after which the label will be removed (to unclutter the label "waiting". I find it quite handy when I build my set of tools to perform automatic treatment of my inbox.

## Invitation_not_answered.gs
This script a bit like the previous one is looking for invitation that I received that I did not reply to... (I know it is really bad). The status "INVITED" correspond to that exact situation. The script does not output any data, it should be incorporated in a larger function to put it in a page/speadsheet...

## Save_Email_eml.gs
Very handy function to export emails from gmail as a eml files!!
The function should have a list of threads as input and will save all files in Drive preserving all data (sender, recipients, subject and attached files). Note that the process is not very quick and you can rapidly reach maximum execution time, so make sure to select threads with not too many emails and modify the output if you need to save in specific folders or so.

## Transfer_email.gs
Basic function to forward all emails with a given label to another email. The function remove the label after forwarding.

## Search mail.gs
Personnal experience here when performing search on emails and having a lot of results.... It stopped and had issues with execution time and calling the email service...
So the script test if there is more than 50 results and if so build an array with all emails by calling fifty emails at a time.
The same logic can be used for action on that array in some case.

## Ping_website.gs
This function will ping every 15 minutes during day and 30 minutes during night a given website. The script does nothing with the ping information but is nice to play around with triggers!

## Ping_website.gs
This function will ping every 15 minutes during day and 30 minutes during night a given website. The script does nothing with the ping information but is nice to play around with triggers!

## Collection from *Learning Google Apps script* website
*This script colection is published here( http://sites.google.com/view/googlappsscript/) and I am allowing myself to store them and expand based on those results. If you re-use those code please reference the original website as well.*
### Description of the scripts:
- Multiple Page Webapp: A basis to create a multi page website from Google Apps script. The visual is pretty minimalist but it allows to expand from here.
- Converting Images to DataURIs: A great workflow to use base64 encoded url to serve images.

