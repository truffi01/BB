# Basic Shopping List App 

![GitHub release (latest by date)](https://img.shields.io/github/release/truffi01/BB/all.svg)
[![Build Status](https://travis-ci.com/truffi01/BB.svg?branch=master)](https://travis-ci.com/truffi01/BB)
![GitHub](https://img.shields.io/github/license/truffi01/BB)

This code allows users to make a basic shopping list app. 


##Development 

##Requirements
Make sure these are installed on your computer. 
- [Python](https://www.python.org/downloads/release/python-374/) (3.7+)
- [Node.js](https://nodejs.org/en/) (12.13.0+)
- [Django](https://www.djangoproject.com/download/) (Django==3.0.1)


##Instructions 
#### Clone repository and open terminal in directory.

#### Setup environment automatically
```
npm run setup
```
This script automatically:
1. Installs [pipenv](https://github.com/pypa/pipenv) to manage Python virtual environment and dependencies. [Learn more about pipenv.](https://realpython.com/pipenv-guide/)
    - `pip install pipenv`
2. Creates a Python virtual environment using pipenv and installs dependencies in Pipfile
    - `pipenv install` 
3. Installs node modules using npm
    - `npm install`


#### Start local server
```
npm start
```
This script runs `pipenv run manage.py runserver`

#### Visit local server
Open server in browser at [http://localhost:8000/](http://localhost:8000/)

## Code of Conduct

Everyone interacting in this project’s codebase, issue trackers, chat rooms and mailing lists is expected to adhere to the code of Conduct. Credit to Krystian Czekalsi and Stephan Grider. This code template will also be used to public works projects in collaboration with Code for America. This project is completely open sourced. 