### Mac Installation
Run each command in a Terminal, in order.
On a Mac, you may have to use sudo depending on your system configuration.

Homebrew (Requires a bash-compatible shell):
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
If it gets stuck installing Xcode Command Line Tools, cancel out and run `xcode-select --install`.

Node.js:
```
brew install node
```

Ionic and Cordova:
```
npm install -g cordova ionic
```

Ionic app-scripts
```
npm install @ionic/app-scripts@latest --save-dev
```

Papaparse:
```
npm install papaparse
```

### Optional
(You don't have to do this if you pull from GitLab. Just if you're starting an app from scratch.)

Make sure you're in an Ionic directory to install the following:

SQLite:
```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite
```

File:
```
ionic cordova plugin add cordova-plugin-file
npm install --save @ionic-native/file
```

Http:
```
ionic cordova plugin add cordova-plugin-advanced-http
npm install --save @ionic-native/http
```

Toast:
```
ionic cordova plugin add cordova-plugin-x-toast
npm install --save @ionic-native/toast
```

#### Linux Installation
(yet to be tested)

Install npm

Node.js:
```
Ubuntu:
sudo apt-get install -y nodejs
RHEL:
sudo yum install nodejs
```

Ionic and Cordova:
```
npm install -g cordova ionic
npm install @ionic/app-scripts@latest --save-dev
```

Helpful link: https://ionicframework.com/docs/intro/installation/

### See Android Testing for more: https://code.ornl.gov/6tm/ruby_epa_app/wikis/android-testing

### Optional
(You don't have to do this if you pull from GitLab. Just if you're starting an app from scratch.)
Make sure you're in an Ionic directory when you install the following (These should install automatically from previous steps, but just in case):

Papaparse:
```
npm install papaparse
```

SQLite:
```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite
```

File:
```
ionic cordova plugin add cordova-plugin-file
npm install --save @ionic-native/file
```

Http:
```
ionic cordova plugin add cordova-plugin-advanced-http
npm install --save @ionic-native/http
```

Splash Screen:
```
ionic cordova plugin add cordova-plugin-splashscreen
npm install --save @ionic-native/splash-screen
```

Toast:
```
ionic cordova plugin add cordova-plugin-x-toast
npm install --save @ionic-native/toast
```
