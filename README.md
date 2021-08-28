AngularJS fundamentals

# NESTED CONTROLLERS

## How to structure model in each controller

1. wrapping all things relating a model associated with controller into an object.
2. Using controller alternatives in a view

# SERVICES

## Custom services are singleton, to share data on different routes, controllers, you can use them

## Use custom services to group the common features and inject them in places where you want to use them

# CUSTOM DIRECTIVES

## To make the piece of HTML section reusable in many places and many controllers.

1. Define custom directives through Element, Atrribute, Class or Even Comment.

- The dash and camelCase in convention to get custom directives work.
  <search-result></search-result> -> custom directive name: `searchResult`
- The isolation scope in `Directives`
- The scope would be:
  `{ restrict: 'EACM', template: 'string template' or templateUrl: 'path to template html', replace: true | false scope: { byValue: '@', byReference: '=', byFunction: '&' } }`
- Using object map to pass value to function

# BASIC APPLICATION STRUCTURE

- index.html
- app.js
- controllers
  - controllerA
  - controllerB
  - ...
- services
  - serviceA
  - serviceB
  - ...
- directives
  - directiveA
  - directiveB
  - ...
- pages
  - pageA
  - pageB
  - ...
- route.js
