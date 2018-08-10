Instructions adapted from (https://blog.ionicframework.com/deploying-to-a-device-without-an-apple-developer-account/)

### Prerequisites

1) Download Xcode from the App Store or Managed Resources Center.

2) Register for a free Apple ID, if you don't have one already.

3) a Mac

4) When you're ready to build the app, navigate to your working ionic directory and run:

`npm install @ionic/app-scripts@latest --save-dev` (you only need this the first time).

Then run: `ionic cordova prepare ios`. Alternatively, you can just run the prepare command and answer yes to installing ios and app-scripts. But sometimes it fusses if you do this route.

5) Plug in the device you want the app on to your computer. Click Trust this computer on the device.

6) Download the code from the repository and copy the folder in the root directory called "11.4 (15F5037c)". If it's not there, download the zip file from [here](https://github.com/xushuduo/Xcode-iOS-Developer-Disk-Image/releases/tag/11.4).

7) Go to Applications, right click on Xcode and select Show Package Contents.

8) Navigate to Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport and paste the "11.4 (15F5037c)" folder there.

9) In your working ionic directory, open the file config.xml.

10) Change where it says <widget id="io.ionic.starter" ... to something different. In the below example, I named it "io.ionic.epa".

![Screen_Shot_2018-08-10_at_9.33.50_AM](/uploads/f0af421409d5f3d6723725acdf56f5d4/Screen_Shot_2018-08-10_at_9.33.50_AM.png)

### Setting up Xcode

1) Go to Applications, right click on Xcode and select Show Package Contents.

2) Navigate to Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport and paste the "11.4 (15F5037c)" folder there.

To start, you’ll need to set up a provisioning profile to code sign your apps:

Open Xode preferences (Xcode > Preferences…)

Click the ‘Accounts’ tab

Login with your Apple ID (+ > Add Apple ID…)

![profiles](/uploads/0ac3285893b3a4bcd509b3b590b795cd/profiles.jpg)

3) Click File->Open at the top bar and navigate to your working ionic directory/platforms/ios. Click Open to open that entire folder.

4) On the left sidebar, click the folder icon on the far left and then myApp (the first folder).

![code-sign-xcode8-2](/uploads/38d2c9799092620e6f0462618402506e/code-sign-xcode8-2.png)

5) Under the Signing section, click the dropdown beside Team and click the name your Apple ID is under. (If you get an error like "Failed to create provisioning profile" change the name in config.xml to something else.) You'll know when you have a signing certificate when it shows your email and some numbers beside Signing Certificate.

6) Try to run (the play button at the top). It will give you an error about trusting the  certificate.

7) On your connected device, go to Settings->General->Device Management. You’ll see the email address associated with the Apple ID you used to code sign your app. Tap it, then tap ‘Trust <your_email>’:

![IMG_1460](/uploads/599afedabc9996929e52663750b75ae5/IMG_1460.jpg)

8) You should be able to run your new app now!

Now all you have to do from now on is `ionic cordova prepare ios` then open the ios folder in Xcode and press play.

### Changing the name of the app (temporarily)

For some reason, Xcode doesn't like it when you rename the app, which is by default named myApp. To change it when you transfer to a phone, build it by running `ionic cordova prepare ios` then open the project in Xcode. there, navigate to config.xml and change the name. Afterwards though, you have to change the name back to myApp, it won't let you build. 
