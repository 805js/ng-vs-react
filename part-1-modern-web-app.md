# Introduction 
How is modern web development different from the past approaches to web development?
What are the tools for maintaining your sanity in the front end of the stack? 
# You have to know about node and npm
- Node is ...
- npm is ...
# Understand Your Build
- whats in a `package.json`?
- how can you leverage `package.json` to get started? 
- What does `building` mean? 
# Demo
- npm init
- What do all the questions mean?
- What are the main sections of a package.json for and how are they used? 

# Saturday Notes
1. Intro
    - Who we are, how we got here
        - Matt - Matt works on the open source UI Component library Clarity (Spondored by VMware). He has over 10 years of experience working with front-end clients, native apps and API's. 
        - Franklin - TODO
    - What is the goal for this series?
        - Take you on a journey in the front end of the stack. 
        - Explore some of the history as it relates to front-end development today
            - Node, NPM, ES6, React, TypeScript, Angular
        - Look at common tools which make front-end development more powerful than ever before
        - Begin to explain why more power means more responsability (for the developer)
        - Tonight, the foundation. 
2. A short history of web development
    - Whats the difference between website and web app?
        - Websites are defined by content and tend to be primarily informational (cnn.com or Hacker News)
        - Web applications are defined by user interactions and data manipulation and can be a program that runs remotely in a browser - today these are called progressive web apps becuase they can run independently but still rely on a backend for data storage and processing)
        - Website: A company website, a blog (thats consumed by readers), News, portfolio of work examples
        - Web application: Blog admin to create and organize content, banking app, mapping application, photo editor, gmail google analytics, survey applications, Google docs (spreadsheets etc)
        - These are not entirely exclusive - websites can and do have functionality (applications) embedded within the content. Applications can and do have content (help, blog/news) embedded in the app.
    - Where did the whole web thing start? (html,js,css) (How much time do you have?)
        - Mid 90's
            - HTML - a way to markup text documents so a browser application could display it
            - CSS - added style and enabled the ability to design a 'look' withg html
            - JavaScript - mid 90's - paved the way for dynamic and interactive behaviors (click a button to make something happen)
            - signs of the times: browser 'wars', inconsistent implementations of the various specifications, style and design that seems crude when compared to other visual mediums
            - There was also Flash, but web developers don't talk about flash
        - 2000 (ish)
            - AJAX
            - svg's
            - web fonts
        - 2005ish
            - Firefox (2005ish) Chrome (2008ish) - gave rise to v8 and v8 gave rise to node
            - canvas elements - dynamic scriptable rendering for 2d shapes and bitmap images
            - XMLHTTPRequest2 - specs that standardized http/s requests that could be sent directly to a web server (with JavaScript)
            - AppCache - web page files that could be cached for offline work
        - jQuery era added programmetic
                - DOM navigation (DOM selectors)
                - Event handling
                - AJAX
                - Plugins  
                - Created to abstract browser inconsistencies
                - add usefule utilities - $.each, hide/show, click, new selectors (getElementByClass) 
                - standardize (to a certain extent) browser incompatabilities
                - enabled new and exciting functionality in the browser
                - brought exploding codebases and an infinate cumber of callback hells
        - Single page applications (2010-2015)
            - Mobile
            - bi-directional data flow between clients and servers
            - speed (of downloads, app behaviors)
            - data manipulation
            - Early frameworks: Backbone (2010), AngularJS (2010), React (2013)
            - if javascript is a manual hand tool, jQuery is a poower tool, frameworks are assembly lines with highly specialized 'components' for creating single page applications: routing, states, content & behavior
            - Firebug, web inspector
        - Modern era
            - Mobile first? 
            - Virtual DOM, Single Direction Data Flow, Types, Testing
            - Real debugging
            - A short discussion of node and npm
                - node is a javascript run time butil on top of Chromes V8 JavaScript engine. It uses event-driven, non-blocking I/O model that keeps it lightweight and efficient. You now have the option of running javascript without a web browser
                - npm is the node package ecosystem of open source (JavaScript) libraries
                - semantic versioning: a process by which software is upgraded and configurations an application can make to limit how much automatic upgrading an application will do automatically


3. Where do you start?
    - 'build'ing - how does everything get put together (npm+dev dependiecies)
        - no more ftp all these files to yur web server
        - related to optimization but also involves scripts that automate things: image optimization, code generation (es5 css from es6 & scss)
    - dependencies
        - keeps you from having to re-invent the wheel: momentJS is an example for managing dates and times
    - devDependencies
        - things that help you build: grunt, gulp (orchestration tools)
        - code quality tools: jslint
        - code testing tools (Karma, jasmine, Mocha Jest)
        - related to optimization
        - make it ugly (uglification)
    - optimization
        - concatenate all your files, minimize all your files and images, 
        - sourcemaps for scss and JS
    - slide full of links to resources
    - Whats node?
    - Whats npm
        - dependencies
        - devDependencies
        - scripts
    - Whats a build? A compiler for the web? wtf
    - es5 vs es2015 (ES6) and TypeScript oh my
4. Demo 'App'
- Simple Timer
    - stop start & mark
    - mark button logs a timestamp  to a list
5. Education
    - blogs, sites, mailing lists
    - shorten links and urls
    - The State of JS Survey
    - The whole ecosytem is a firehose, tips for sipping from it in comfort


# Feedback, 
    - show the finished app before we start.
    - use git tags or branchws to show progress? 




