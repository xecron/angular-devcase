# Planes, trains and automobiles

## The Traffic Meister application assignment

 - Create a form which behaves as follows
    - It will display the following drop down menus
      - A list of vehicle types
      - A list of vehicle brands
      - A list of vehicle brand colors
    - All three lists are enabled when data is available.
    - When selecting an option in on of the list, the other lists are filtered accordingly.
    - At the bottom of the form all selections will be shown.
  - Use the framework based on the vacancy you're applying for. So if you applied to an Angular vacancy, use Angular. The same goes for React, VueJS, etc.
  - Except the framework restriction above, you are free to use any tool and/or framework you like. We do encourage you to remain critical when you include an additional dependency. Is this dependency really needed/useful? As long as it runs inside a browser and you can explain why that solution is the most favorable.
  - You are allowed/encouraged to design your own layout.
  - Your implementation should be
      - tested
      - visually attractive
      - deployable

### For example.
1. When yellow is selected all types and brands that have no yellow vehicles are filtered out
2. When selecting "Bugatti Veyron", only the car type and the available colors are selectable

## Data library

The data are provided by a small service you can find in the `service` folder.

This service can be accessed by a the global variable `trafficMeister` and provide a single method `fetchData`.

```
trafficMeister.fetchData(callBack);
```

The callback is called with the full data list as first parameter.

```
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var trafficMeister = require('traffic-meister');
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

## Coding Assignment Evaluation Guidelines

To give you an idea what we expect from the implementation of the assignment we came up with the following guidelines. In general, treat it as code that will go in production for one of our clients.

**Important!** We will provide you with a Github repository where you can create your assignment in. As soon as you create a pull request to `master` our bot will immediately lock you out of the repository and the assignment is over. So before you put in a pull request, make sure you are done!

### Assignment
* Does the code work.
* Does the code still work when encountering edge cases.
* Does the code come with instructions.
* Do all included artifacts have purpose.

### Code quality
* Is the code structured in a logical way.
* Could the code be extended.
* Do functions, classes and modules use the right level of abstraction.
* Does the code show software engineering best practices and design patterns where applicable.
* Is the code consistent.
* Does the code contain descriptive names.
* Is the code production ready.
* Does the code base scale to a bigger feature set.

### Frameworks + Language
* What framework was chosen.
* Are the features of the framework used according to community best practices.
* Does the code use features of the framework or language when possible.
* Are common pitfalls avoided.

### Testing
* Are there automated test.
* How are the tests written.
* What choices are made in testing certain parts of the code.
* Are the tests written with the right level of abstraction.
* What test cases are chosen.
* Does the test code make use of the features of the test framework when applicable.

### Design + CSS
* How much effort is taken into making the app look nice.
* Is user experience taken into consideration.
* How was the UI implemented.
* Does the application work on all devices.



## Assignment Documentation by Batu

### Chapter 0
Hello,

Well, for the assignment. I will be guiding you much as possible via documentation and side notes.

I use Angular, RxJS, Material Design. There is not necessity to use them of course, however I want to display
my knowledge related to application since the vacancy is for Angular. 

I try to keep things simple much as possible, 
initial steps that I took:
- use Angular-ClI to create angular enviroment in a default way possible
- add Material design via Angular-CLI
- add RxJS library
- Generate vehicle component via Angular-CLI

Personally I prefer to strict myself to not use external dependencies, only super popular things that everybody knows
like Angular, React, RxJs, NgRx, Material design.

And whenever I use them, I try to keep them simple possible for anybody who never used any of them should understand
simply by checking the official docs.

I spent 16 hours more and less.

### Getting Started
#####Dependencies:
- Node@12
- Npm

Then simply install dependencies by
```
npm install
```
#####
To serve the application: http://localhost:4200/

```
npm run start
```

#####
To run unit tests

```
npm run test
```

#####
Additionally I make something fun for showcase reason.
This is not for integration test purposes, it is just for magic :)
```
npm run e2e
```

#####


### Details

* app.module is to check all the dependencies or modules we are importing

* normally I would go for layout module for application layout, since this is demo I didn't want to go overkill
Therefore layout is also party happening in vehicle.component

* app.component.ts I am using matIconRegistry to use Sytac's Logo for better UI (that part is totally copy paste from internet)

* I create the service file as a first thing to extract data, 
to do that, I create a singleton file as vehicle.service.ts,
create a subject vehicles$, to feed that subject I created a fetchVehicles method to use fetchData from trafficMeister.
So whenever we fetchdata our vehicles$ subject will be emit value

* Since we have the data correspondingly, I start building the layout and vehicle component together. As a design I thought 
sidenav would be nice for both desktop and mobile views. And also application is something like media asset management.
So for UX purposes more space for Images would be great.

* As you can see fetchServices && ResetFilter buttons in vehicle.component is to help debug the app, I thought
It also could be helpful for you guys to test and check edge cases too thats why I keep it

* For the view parts, there is nothing super fancy, I follow default way of material-design. For responnsiveness and sizing
I use media decorators with flex-box see -> vehile.component.scss

* I think the most complex part is the pipes within the app, I wanted to use Angular Pipe's for filtering
I find it quite reusable, My personal critism for that part could be more readable perhaps.

* I write unit test after I finish the coding but I am able to go TDD as well.

* For the broken Images, I choose blue-screen for windows for fun :)

* In E2E I actually wanted to write integration tests too however I am really tired to be honest, instead I make a little
showcase demo to make it up :)



### Summary

Well, It was fun a bit stressful for me because of the time. I actually ask 3 weeks but unexpected problems happen
couldn't able to spare time as I've expected.

I like the assignment overall, thanks for review in advance.

Good Luck,
Best,
Batu
