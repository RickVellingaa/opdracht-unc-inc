# Assignment UNC INC

My idea for this assignment was to create some sort of overview pages with a project component and a about us component. Since the styling is not that important for this assignment i just made some quick designs in Figma (https://github.com/RickVellingaa/opdracht-unc-inc/wiki/2.-Ontwerpen#figma-design) so i can give myself an idea of how the website will look like. After i made some designs i immediatly started the project in Visual Studio Code and installed the project using `yarn create react-app my-app --template typescript` with Yarn. 

## Building the website

When i installed the project, the first thing i did i was to delete the unnecessary files that React creates in the project. After setting up the project i started creating the pages and components so i can easily import them into the necessary files. Since I had a little experience in React before this assignment I knew how most things worked, what I did struggle with however was the Authentication with the React Router. The main reason for this is because I never authenticated a user in React (or any framework), after doing some research over the AuthContext and the React Router and asking for some help from Youssra, i began to understand how to Authenticate the user. I will document some code with further information in my wiki: https://github.com/RickVellingaa/opdracht-unc-inc/wiki/3.-Developen

## Testing the product

Around the end of the assignment when I was happy with what ive built, i ran some tests to see what kind of performance and accessibility scores i would get on the site. I expected the scores to be near 100 since there isnt really like data that is being fetched or a ton of extra imports that are being handled. As expected the scores ended up being 100 for Performance and 94 for Accessibility (not 100 because of color contrast of the active nav item). Images from tests: https://github.com/RickVellingaa/opdracht-unc-inc/wiki/5.-Testen

## Result

The website i built i deployed through Vercel. There are a total of 3 diffirent pages in the website, which are:

* Home page "/" or "/home"
* Login page "/login"
* Dashboard page "/dashboard"

The dashboard is only available when you login with certain credentials (username: uncinc & password: letmein). All the tasks i managed to complete (and the ones i did not) i put in a projectboard: https://github.com/users/RickVellingaa/projects/6.
