simple gallery_app using express, multer to catch file and Cloudinary to stock picture files.

Download the project via "git clone address ...."
With the CLI, go to the downloaded folder
Go to the backend folder
Launch: NPM install
Change the name of .env-local to .env and fill in the file with your cloudinary credentials.
Launch the command: "npm start"
Once the backend has been started: With the CLI, goback to the previous folder and go to the Frontend folder
Launch the command: NPM install
Launch the command: npm start
The program start and you are able now to upload, delete and search pictures on the cloud.
#Pictures are catch with multer and send directly to the Cloudinary API Cloud.

I dev this project only for training purpose in a short time to see the possibility of multer with express and the V2 Cloudinary API.

#Possible enhancements, i see:

Error management could be improved
Authorization option with token
Access to anybody
Modify pictures and picture names
