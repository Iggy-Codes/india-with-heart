[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

[![MongoDB](https://github.com/Iggy-Codes/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![PugJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/)  

[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![SASS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)
[![Bower](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bower.png)](https://bower.io//)

# India With Heart (India con corazón)

This repo contains full-stack MEAN project to spread the responsible tourism to India.

## Motivation

This is my final project at the MEAN Stack [Skylabcoders Academy](http://www.skylabcoders.com/) bootcamp. I offered it to a non profit organization for free.


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/)

To run the server: 
```
XXXXX npm start
```
All dependencies will be installed automatically

You will need a ```.env``` files containing
```
SECRET=XXXXXXXXXXXX (seed for your web token)
API_GOOGLE_MAPS=XXXXXXXXXXX (your Google Maps API Key)
PORT=XXXX (Port where the server will listen petitions)
MAIL_GOOGLE_USER=XXXXXXXXXX ( mail of your Gmail account)
MAIL_GOOGLE_PASS=XXXXXXXXXX (password of your Gmail account)
```
## Parts

#### 1. Restfull API
The project constaint a restfull API at ```server/api``` with these endpoints:
* ```/trip``` for managing your trips
* ```/destination``` for managing the cities of your trips
* ```/img``` for managing the photos of your cities

#### 2. Angular application
The project serves an angular applicattion at ```server/admin``` to interact with your endpoints

#### 3. Trip information 
At ```server/``` the project will give the information of the organization, trip and destinations in html. 

## Coding Style

All the code has been developed under the [JavaScript Standard Style](http://standardjs.com/)   
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Built With

* [SublimeText](http://https://https:/npmdejs.org/www.sublimetext.com) - Text editor

## Authors

* [Ignasi Amargós](http://github.com/Iggy-Codes) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
* [JuanMa Garrido](https://github.com/juanmaguitar)
* [AlejandroDG](https://github.com/agandia9)

And my mates from Skylab Coders Academy
* [Franscico López](https://github.com/FransLopez)
* [Stívali Serna](https://github.com/stivaliserna)
* [Bijay Timilsina](https://github.com/bijay007)
* [Josep Otal](https://github.com/josepotal)
* [Xavier Meroño](https://github.com/xmero)
* [Ernesto](https://github.com/ERPG)
* [Alejandro Vázquez](https://github.com/alejovp)
* [Carles](https://github.com/LITULANDIO)