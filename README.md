# BankTest
Bank Test is a command line app written in JavaScript. It simulates a simple  bank account management app. This app was created as a practise tech test.
</br>
</br>
## My Approach
Project started off with a short initial planning session, where I extracted user stories from the brief and planned out the basic design on the app using the user stories. Initially I mapped out two classes (Account and print) and decided upon which behaviours and states should belong to each class, including how the classes should interact.
</br>
I decided to use ES6 JS class syntax as a chance to experiment writing JavaScript in a different way opposed to prototype syntax, the negatives which I discovered further into the project was this choice forced me into a Ruby mindset.
</br>
For my testing framework I settled on an unfamiliar testing framework for the fun of it. I did enjoy the chance to work with something relatively new.
</br>
Whilst authoring the bank test source code I did manage to follow TDD principles. BDD and OOP but stumbled when it became evident that my design was flawed. I had to redesign my app and it was a struggle and panic to try and maintain TDD whilst experimenting and refactoring. The end result left me with 4 classes (account, log, statement and transaction).
</br>
</br>
</br>
## Technologies
</br>
Javascript  Node.js
</br>
</br>
</br>
#### Testing frameworks
</br>
Mocha - framework  Chai - expect/assertion library  Istanbul - code coverage  Sinon - mocking/spies
</br>
</br>
</br>
## Getting started
</br>
`$ git clone https://github.com/SiobhanGi/banktest_js.git`
</br>
`$ npm install`
</br>
</br>
</br>
## Interaction
</br>
</br>
In its current form can only be accessed via the console log

To start, copy path of test.html and paste the url in to your browser

Open console log via developer tools and use the following commands to interact with the app
</br>
</br>
#### Commands
</br>
</br>
Start app  
```javascript
> var account = new Account
```
</br>
Deposit  
```JavaScript
> account.deposit(amount_you_want)
```
</br>
Withdraw
```JavaScript
> account.withdraw(amount_you_want)
```
</br>
Print statement
```JavaScript
> statement = new Statement(account)
> statement.print()
```
</br>
</br>
</br>
## Running tests
</br>
</br>
Achieved 100% test coverage.
</br>
To run tests with coverage
</br>
`$ npm test`
</br>
To specify the file
</br>
`$ npm test test/file.js`
</br>
</br>
</br>
## Issues
</br>
</br>
Originally used simple-mocks as a mocking add-on to Mocha, which I uninstalled to use sinon as the mocking because of its larger documentation and support. Was still unable to find out how to mock dependencies of my Account class constructor.
</br>
If I could redo these 2 days I would not have experimented with different ways of writing Javascript during a ‘soft timed’ tech test, I was curious of using the ES6 classes and this led me to planning the app with a Ruby OOP mindset. I therefore had to redesign the app and greatly refactor delaying the app’s my completion.
