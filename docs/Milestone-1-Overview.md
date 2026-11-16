# REELHOUSE

## Movie Discovery Website

Web Applications Programming and Engineering

Semester Group Project

Milestone 1

Project Weight 10 course marks

Project team

Mohammed Abdullah Fakhri Samhan  2433192

Ahmad Emad Hussain Abdallah  2433053

## Project idea

REELHOUSE is a movie discovery website designed for visitors who want to browse films and find a title that matches their interests  The collection is presented as a clear catalog with useful movie details and a consistent visual design

The first stage focuses on the user interface and the way information is presented  Visitors can look through the collection and make their own selections using search and sorting without needing to create an account

## Pages and main functions

### Home and movie list

The home page shows the catalog together with text search genre selection and sorting controls

### Login

The login page contains a demonstration sign in form and does not authenticate users at this stage

### Registration

The registration page shows an account form with basic input checks and no account is stored or created

### About

The About page introduces the website and presents the two confirmed team members

### Movie details

The movie details page presents a poster synopsis and key information for the selected movie

## Working with the movie collection

The project includes twelve fictional movies stored in a local JavaScript data file  Every record has a title genre release year rating director duration language synopsis and an illustrated poster  This makes the prototype independent of an online database

React state holds the catalog and the current control values  Functional components use hooks for state changes and pass the required information through props  Shared parts such as the header filters and movie cards are kept in separate components

## Search filter and sort at the same time

The search field checks the title director and movie description  The genre control limits the catalog to a selected category  A sorting control then arranges the same matching records by rating year or title

These controls work together rather than resetting one another  The program filters the local array first and sorts the filtered result using native JavaScript array methods  The visible list updates when the visitor changes any of the controls

## Designed for desktop and mobile

The page layout changes with the screen width  Movie cards rearrange into smaller grids while navigation and form controls adapt to limited space  The design includes readable labels empty result messages and clear feedback on the demonstration forms

## Technical approach

The prototype uses React for the interface React Router for navigation and standard JavaScript for the data controls  CSS handles typography spacing responsive grids and the mobile layout  The movie illustrations are stored with the project so the main pages do not depend on external images

## A structure that can grow later

The movie catalog is separated from the page components  The shared header footer search controls and movie cards are reusable  This keeps the first version easier to review and provides a practical starting point for the second milestone

The later full stack version can use the same pages while replacing the local records with an Express API and MongoDB  Working registration login and user permissions would also be added during that stage

## What is ready and what remains

React pages and client side movie tools are prepared

Twelve local movie records and illustrations are prepared

Responsive interface and reusable components are prepared

Source archive and run instructions are prepared

A shared public GitHub repository is pending group action

Individual student commits are pending group action

Render Static Site publication is pending group action

Student names and university IDs are confirmed and included in the submission information

GitHub and Render links and the submitted commit hash remain pending group action

## Final checks for the group

Each member should run the website on a local computer and review the major pages  The search filter and sort controls should be tried together  The group must also confirm that the published site opens on mobile and desktop and that the final archive matches the version recorded on GitHub

Student names and student IDs have been entered  The remaining submission fields must be checked after deployment
