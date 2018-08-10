# Android Testing

You may see online that you can test in browser. This will work for some of the project, but the packages "File" and "SQLite" are phone specific, and will not work properly in browser. There is code commented out that gets file information with "HTTP." This package is left in so that it can work in browser, but it will take a bit of work to do this and is not suggested.

Android Studio Install:
```
cd /opt
wget https://dl.google.com/dl/android/studio/ide-zips/3.1.3.0/android-studio-ide-173.4819257-linux.zip
apt install zip
unzip android-studio-ide-173.4819257-linux.zip
cd android-studio/
./bin/studio.sh
```

You will have to follow the installation wizard at this point. If it asks about android operating systems get Lollipop, Marshmallow, or newer. In Android studio, begin by acquiring some emulated phones for testing. Click the icon at the top right of the purple phone with the top of the android head. It should take you to a new page where you can "Create Virtual Device." Choose any phone that's somewhat recent. Next, download any system image (I'm not sure what API 28 is, I just stuck with "candy" ones such as Nougat, Marshmallow, Oreo). The download may take a moment. After that you can configure the device. You may need to set "Emulated Performance" to "Software" depending on your computer. If the emulated phone gets stuck on the Android start screen try changing emulation from automatic to software. You may get an error about virtualization when you try to run the emulator. Be sure that in the BIOS that virtualization is enabled. If it's not, it will fuss about missing bios/avd files while setting up a virtual device. Look up how to enable virtualization, it probably involves restarting the machine and pressing a key like F10 or F12 until a menu shows up. On my machine, the setting was under the Security tab.


![image](/uploads/55e96dbaeea935d52451b528f8c511f1/image.png)

![image](/uploads/3e504ec9f0df309e5b8edb1ed8e3794f/image.png)

![image](/uploads/11c1c0c4167cb6d1a5ffd73498ceb9cd/image.png)

![image](/uploads/7c40880203b6f0a1233bbdecb7df57e9/image.png)

### To test in emulator:

```
ionic cordova prepare android
```
Say yes if it asks to install platform android

If it does not detect Android Studio project:
```
ionic cordova platform rm android
ionic cordova platform add android
```

### Android Studio
Make sure you have virtualization enabled on your machine in order to emulate the phone in Studio (it will fuss about not having access to bios/avd files if it's not turned on). If it fusses at you, you'll probably have to restart your computer and frantically press F12 or F10 until a menu comes up. On my machine, the virtualization was under Security and some kind of config menu. It depends on the machine.

After preparing android, go back to android studio and open the android project:

File->Open
[Local Name]/platforms/android

Android should have an icon beside it.

Click on the play button in the top right, or the bug with the play button if you would like to see console.log(). There should be a tab for debugging in the lower left tabs.

Once you make changes, all you have to do is prepare android again, and Android Studio will automatically update, so just click play again. Gradle takes a long time to build the first time, so be patient. You can watch progress at the bottom of the main Android studio page. If it seems like nothing it going to happen, quit the emulator and stop the process, and try again. After the first time things should be much faster.

### Test on phone

The target phone will have to be put in developer mode.

To do this go to
settings>About Phone>Build number
or
settings>system>about Phone>Build number
Both these are probably at the bottom of the page. Tap Build number 7 times. This should put you in developer mode. Go to the developer options in system. Turn on USB debugging. Plug in your phone to the computer. Change USB to file transfer. Now click the play button like you do to launch the emulator, and at the top there should be a new option. Click that and it will build onto the phone.

*note: SQLite databases will last between builds since they are stored on the device and independent of the app.

If I, Talon, missed something, feel free to contact me and I will send back what you need. Luckily Ionic is popular and lots of it is on the web. 
