# BankTest

Bank Test is a command line app written in JavaScript. It simulates a simple  bank account management app. This app was created as a practise tech test.



## Technologies

Javascript

Node.js

#### Testing frameworks

Mocha - framework

Chai - expect/assertion library

Istanbul - code coverage

Sinon - mocking/spies



## Getting started

`git clone https://github.com/SiobhanGi/banktest_js.git`
`npm install`



## Interaction

In its current form can only be accessed via the console log.

Copy path of test.html and paste the url in to your browser

Open console log via developer tools


#### Commands


Start app

`var account = new Account`

Deposit

`account.deposit(amount_you_want)

Withdraw

`account.withdraw(amount_you_want)`

Print statement

`account.print()`



## Running tests

To run tests with coverage

`npm test`

To specify the file

`npm test test/file.js`




## Issues

Originally used simple-mocks as a mocking add-on to Mocha, which I uninstalled to use sinon as the mocking because of its larger documentation and support. Was still unable to find out how to mock dependencies of my Account class constructor.

If I could redo these 2 days I would not have experimented with different ways of writing Javascript during a ‘soft timed’ tech test, I was curious of using the ES6 classes and this led me to planning the app with a Ruby OOP mindset. I therefore had to redesign the app and greatly refactor delaying the app’s my completion.
