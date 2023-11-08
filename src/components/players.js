import axios from "axios";
import { useEffect, useState } from "react";

/**

Functionality
-------------
The balldontlie.io API (https://www.balldontlie.io/home.html#introduction) 
contains statistics from the National Basketball Association (NBA). 

For this task, your goal is to make a GET request to https://www.balldontlie.io/api/v1/players
and display information about a list of players. The format in which you display this information 
is up to you, but we would recommend creating a column or grid of cards. For each player, 
display their
    1. full name (first_name and last_name)
    2. position 
    3. weight
    3. height (in feet and inches). **Note that height may not be available
    4. team in the format `team_name (team_abbreviation)` (e.g. Los Angeles Lakers (LAL))

Here is an example JSON object returned from an API call: 
{
  "data":[
    {
      "id":237,
      "first_name":"LeBron",
      "last_name":"James",
      "position":"F",
      "height_feet": 6,
      "height_inches": 8,
      "weight_pounds": 250,
      "team":{
        "id":14,
        "abbreviation":"LAL",
        "city":"Los Angeles",
        "conference":"West",
        "division":"Pacific",
        "full_name":"Los Angeles Lakers",
        "name":"Lakers"
      }
    }
    ...
 ],
 "meta": {
    "total_pages": 50,
    "current_page": 1,
    "next_page": 2,
    "per_page": 25,
    "total_count": 9999
  }
}

Stretch Goal: From the API documentation, you'll notice that the /players endpoint 
is paginated, such that there is a maximum of 25 results per page. Modify the Players 
component to take in a prop `N` and extract results from the first N pages. In the part above, 
since we did not specify the `page` parameter, only the results from the first page are shown.

Styling
--------
Feel free to use Tailwind, in-line CSS styling, and/or a stylesheet. 
**/

const Players = () => {
  return <div></div>;
};

export default Players;
