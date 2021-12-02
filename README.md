Marketplace.js:

Link to the live demo: https://marketplacejs.herokuapp.com

Description of Functionality & Technical Details:

a) Description:

This is a simple web application that functions as a marketplace for college students. The user of this application can create an account either as a Seller or as a Buyer:

- Sellers have the option to make a post about the item(s) that they wish to sell. The post consists of the title of the object and a short description about it. In the case that the Seller submits their post without filling in the description part, an outside REST API is used to fill in the blank with a random Chuck Norris joke. In their home page, Sellers can also view the posts they have submitted.
- Buyers can see all the available listings made by all the Sellers. They have the ability to press the Buy button and “purchase” the item thus deleting it from the available listings catalogue and erasing it from the database.

To build this application we used Sahat Yalkabov's Hackathon Starter, a boilerplate for Node.js web applications. More info can be found here: https://github.com/sahat/hackathon-starter.

b) Technical Details:

- The outside REST API that we used is: https://geek-jokes.sameerkumar.website/api?format=json
- The framework not discussed/used in class that we utilized in this app is: Bootstrap, Got
- The database program we used to store the users’ information is: MongoDB
- The application was deployed on: Heroku

Roles:

- Adjei, Nathaniel - Database / PM
- Anderson, Henry - Backend / PM
- Karyofylli ,Eleni - Frontend
- Liu, Yuzhe - Database
- Mantoan Borges, Rafaela - Backend
- Yuan, Jiaqiang - Backend

Installation Instructions:

## Getting Started

```bash
# Get the latest snapshot
git clone https://github.com/sahat/hackathon-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install
```

After npm install, duplicate the .env.example file into a new file just called .env\
Change the second line, 'MONGO_URI =' to the respective line for your database.\
Then it should run when you start the app!\

```bash

# Then simply start your app
nodemon app.js
```

I have configured the package such that it should install nodemon by default. If it doesn't that is because I messed up.\
If `nodemon app.js` generates an error, use the command `sudo npm install -g nodemon` to install it on your machine.\
A similar issue may also occur with got. Use the command `npm install got`\

## Features

- **Local Authentication** using Email and Password
- Flash notifications
- MVC Project Structure
- Node.js clusters support
- Sass stylesheets (auto-compiled via middleware)
- Bootstrap 4 + Extra Themes
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- **Account Management**
- Gravatar
- Profile Details
- Change Password
- Forgot Password
- Delete Account
- CSRF protection

## Prerequisites

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 10+](http://nodejs.org)
- Command Line Tools
- <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
- <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) OR [Visual Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
- <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
- <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

**Note:** If you are new to Node or Express, you may find
[Node.js & Express From Scratch series](https://www.youtube.com/watch?v=Ad2ngx6CT0M&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp&index=3)
helpful for learning the basics of Node and Express. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for _login, password reset, signup, profile_.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .dockerignore                      | Folder and files ignored by docker usage.                    |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continuous integration.              |
| app.js                             | The main application file.                                   |
| docker-compose.yml                 | Docker compose configuration file.                           |
| Dockerfile                         | Docker configuration file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout` and corresponding
`res.render()` paths in controllers.

## List of Packages

| Package                     | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| @octokit/rest               | GitHub API library.                                                     |
| bcrypt                      | Library for hashing and salting user passwords.                         |
| body-parser                 | Node.js body parsing middleware.                                        |
| chai                        | BDD/TDD assertion library.                                              |
| chalk                       | Terminal string styling done right.                                     |
| cheerio                     | Scrape web pages using jQuery-style syntax.                             |
| compression                 | Node.js compression middleware.                                         |
| connect-mongo               | MongoDB session store for Express.                                      |
| dotenv                      | Loads environment variables from .env file.                             |
| errorhandler                | Development-only error handler middleware.                              |
| eslint                      | Linter JavaScript.                                                      |
| eslint-config-airbnb-base   | Configuration eslint by airbnb.                                         |
| eslint-plugin-chai-friendly | Makes eslint friendly towards Chai.js 'expect' and 'should' statements. |
| eslint-plugin-import        | ESLint plugin with rules that help validate proper imports.             |
| express                     | Node.js web framework.                                                  |
| express-flash               | Provides flash messages for Express.                                    |
| express-session             | Simple session middleware for Express.                                  |
| instagram-node              | Instagram API library.                                                  |
| lastfm                      | Last.fm API library.                                                    |
| lob                         | Lob API library.                                                        |
| lodash                      | A utility library for working with arrays, numbers, objects, strings.   |
| lusca                       | CSRF middleware.                                                        |
| mailchecker                 | Verifies that an email address is valid and not a disposable address.   |
| mocha                       | Test framework.                                                         |
| moment                      | Parse, validate, compute dates and times.                               |
| mongoose                    | MongoDB ODM.                                                            |
| morgan                      | HTTP request logger middleware for node.js.                             |
| multer                      | Node.js middleware for handling `multipart/form-data`.                  |
| node-foursquare             | Foursquare API library.                                                 |
| node-sass                   | Node.js bindings to libsass.                                            |
| node-sass-middleware        | Sass middleware compiler.                                               |
| nyc                         | Coverage test.                                                          |
| nodemailer                  | Node.js library for sending emails.                                     |
| node-quickbooks             | Quickbooks API library.                                                 |
| passport                    | Simple and elegant authentication library for node.js.                  |
| passport-facebook           | Sign-in with Facebook plugin.                                           |
| passport-github             | Sign-in with GitHub plugin.                                             |
| passport-google-oauth       | Sign-in with Google plugin.                                             |
| passport-instagram          | Sign-in with Instagram plugin.                                          |
| passport-linkedin-oauth2    | Sign-in with LinkedIn plugin.                                           |
| passport-local              | Sign-in with Username and Password plugin.                              |
| passport-openid             | Sign-in with OpenId plugin.                                             |
| passport-oauth              | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.      |
| passport-oauth2-refresh     | A library to refresh OAuth 2.0 access tokens using refresh tokens.      |
| passport-snapchat           | Sign-in with Snapchat plugin.                                           |
| passport-twitter            | Sign-in with Twitter plugin.                                            |
| passport-twitch-new         | Sign-in with Twitch plugin.                                             |
| paypal-rest-sdk             | PayPal APIs library.                                                    |
| pug                         | Template engine for Express.                                            |
| sinon                       | Test spies, stubs and mocks for JavaScript.                             |
| stripe                      | Offical Stripe API library.                                             |
| supertest                   | HTTP assertion library.                                                 |
| tumblr.js                   | Tumblr API library.                                                     |
| twilio                      | Twilio API library.                                                     |
| twitter-lite                | Twitter API library.                                                    |
| validator                   | A library of string validators and sanitizers.                          |

## License

The MIT License (MIT)

Copyright (c) 2014-2021 Henry Anderson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
