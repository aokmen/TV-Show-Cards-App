# TV-Show-Cards-App
<h3>visit: https://aokmen.github.io/TV-Show-Cards-App/ </h3>
<img alt="alt_text" src="./img/tv-show.gif"/>
---
# Description:

## In this project, a TV show list is displayed and filtered based on user input. Here is a summary of what has been done:
---
HTML Structure:

* The project includes a container with a search input field and a TV show list container.
* The TV show list container has a class of "tvShowList" and uses the Bootstrap grid system.
---  
CSS Styling:

* The project imports the Bootstrap CSS framework to style the elements.
--- 
JavaScript Functionality:

* Variables: tvShowList represents the HTML element with the class "tvShowList", and showList is an empty array that will store the TV show data retrieved from the JSON file.
getUsers Function:

* This asynchronous function is responsible for fetching the TV show data from the "tv-shows.json" file using the Fetch API.
* If the response is not successful (status code other than 200), an error message is displayed with a 404 image.
* If the response is successful, the JSON data is extracted and stored in the showList array.
* The showItems function is called to display the TV show items on the page.
showItems Function:

* This function receives the TV show data as a parameter and clears the HTML content of the TV show list container.
* It iterates over the data and generates HTML for each TV show item, including the show name, image, summary, and a link to the show details.
* The generated HTML is appended to the TV show list container.
* Event Listener for Search Input:

* The input element with the id "search" has an event listener that triggers when the user inputs text.
* The event listener callback function retrieves the search term from the input element's value.
* The showList array is filtered based on the search term using the filter method and a case-insensitive comparison.
* The showItems function is called with the filtered data to update the displayed TV show list.
Initialization:

* The getUsers function is called initially to fetch the TV show data and display the initial list.
