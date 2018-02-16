# Angular CLI 
Listed here are some cli commands I feel are useful to know and use as you get comfortable in the Angualr framework. 

## Installation
The Angular CLI is one of those rare npm packages that needs to be installed both globally and sometimes locally to a project. For instance when you are creating a new project you rely on the global installation for the path to the `ng` tool. But, sometimes, you may want to use a specific version of the `ng` tool with a project. Either way the best way to install it for both is:

### Globally
```bash
$ npm i -g @angular/cli
```

### Locally
```bash
$ npm i @angular/cli
```


## Common Commands
These are the commands I used in the simple demo as well as few that I think will be helpful

#### What version do I have? 
```bash
$ ng -v (or ng --version
```

#### Is there a full list of commands available? 

```bash
$ ng --help
```

#### How can I learn more about a specific command?
```bash
$ ng new --help
```

#### How do I create a new Angular project with a specific component prefix that also uses scss? 
```bash
$ ng new angular-timer --prefix at --style scss
```

#### How can I add a new (parent/top-level) component to my app?
Note: g: generate && c: component
```bash
$ ng g c timer
```

#### How can I generate a child component fort a specific parent component?
```bash
$ ng g c timer/timer-control
```

#### How can I add a service to my component?
Note: remember to use the `--module` if you want it to uodate your `app.module.ts` file
```bash
$ ng g s timer/timer-service --module=app.module
```

#### How can I serve my app for development and automatically open the default browser? 
```bash
$ ng serve -o
```

#### How can I build my app so its ready to be used in production?
```bash
$ ng build --prod
```

#### Not covered but useful: What if I want to run [tslint](https://palantir.github.io/tslint/) on my project?
Note: there are several options worth reading up on that will try to fix and format your code to established code quality practices (which are also customizable to your preferences).
```bash
$ ng lint
```

