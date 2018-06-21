# BankTest
Bank Test is a command line app written in JavaScript. It simulates a simple  bank account management app. This app was created as a practice tech test.

## My Approach
Project started off with a short initial planning session, where I extracted user stories from the brief and planned out the basic design on the app using the user stories. Initially I mapped out two classes (Account and print) and decided upon which behaviors and states should belong to each class, including how the classes should interact.

I decided to use ES6 JS class syntax as a chance to experiment writing JavaScript in a different way opposed to prototype syntax, the negatives which I discovered further into the project was this choice forced me into a Ruby mindset.

For my testing framework I settled on an unfamiliar testing framework for the fun of it. I did enjoy the chance to work with something relatively new.

Whilst authoring the bank test source code I did manage to follow TDD principles. BDD and OOP but stumbled when it became evident that my design was flawed. I had to redesign my app and it was a struggle and panic to try and maintain TDD whilst experimenting and refactoring. The end result left me with 4 classes (account, log, statement and transaction).


## Technologies

Javascript</br>Node.js


#### Testing frameworks

Mocha - framework</br>Chai - expect/assertion library</br>Istanbul - code coverage</br>Sinon - mocking/spies

## Getting started

`$ git clone https://github.com/SiobhanGi/banktest_js.git`
`$ npm install`

## Interaction

In its current form can only be accessed via the console log

To start, copy path of test.html and paste the url in to your browser

Open console log via developer tools and use the following commands to interact with the app

#### Commands

Start app  
```javascript
> var account = new Account
```

Deposit  
```JavaScript
> account.deposit(amount_you_want)
```

Withdraw
```JavaScript
> account.withdraw(amount_you_want)
```

Print statement
```JavaScript
> statement = new Statement(account)
> statement.print()
```

## Running tests

Achieved 100% test coverage.

To run tests with coverage</br>`$ npm test`

To specify the file</br>`$ npm test test/file.js`


## Issues

Originally used simple-mocks as a mocking add-on to Mocha, which I uninstalled and replaced with Sinon because of its larger documentation and support.
