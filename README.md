# webportfolio-code


This is the source code for the existing webportfolio repository


This sample portfolio is built using various technologies, such as React, Javascript, HTML and CSS, which is deployed and showcased under the GitHub pages.

The main objective of this webpage was to demonstrate a sample of my set of skills, regarding Front-end and Back-end development. It features three views: the homescreen, a personal webpage, and a simple chat user interface capable of speaking to a simple virtual assistant, which purpose serves to tell the weather of a city (for example purposes).    
Apart from the icons displayed in these views (source: Material UI - https://mui.com/), all effects and business-logic was implemented using vanilla JavaScript and CSS, without recurring to external libraries.



Front-end:
- This webpage is hosted in Github Pages.

- Technologies implemented - React, JavaScript ES6, CSS, HTML. 

- Regarding page viewing/routing, its implementation was built using React Router (source: https://reactrouter.com/en/main). 

- GitHub Pages lacks support for this feature, failing to fetch resources when refreshing the page (source: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing ) Note: Inside my local environment, everything works as intented, i.e. I'm able to successfully refresh and render the corresponding pages without errors. In order to navigate, use the "Back Arrow" icon.
 

Back-end:
- The virtual assistant is built under Rasa Open Source, which is hosted and on my local machine. It uses YAML when registering bot utterances, and its actions (i.e. performing any access to a database/peforming API calls) are programmed in Python.
- In order to respond to the user, via API calls performed on message sent through the chat interface, the virtual assistant was made accessible through ngrok (source: https://ngrok.com/) by performing a reverse proxy, allowing the bot to respond to the user's utterances.
- When the virtual assistant is prompted about the weather of a city, an API call is performed to OpenWeatherMap (source: https://openweathermap.org/), in order to respond accordingly.


Note: The virtual assistant followed a conversation driven development, which allowed the bot to learn from past conversations when these were reviewed and corrected. However, this is no longer supported as of earlier this year.
