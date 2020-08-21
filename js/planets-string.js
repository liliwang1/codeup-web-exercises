(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? **/
     var newPlanetsString = planetsArray.join('<br>');
     console.log(newPlanetsString);

    /* BONUS:
    * Create another string that would display your planets in an undordered
    * list. You will need an opening AND closing <ul> tags around the entire
    * string, and <li> tags around each planet.
    */
    var planetsList = planetsArray.join(' </li> <li> ').split(' ');
    planetsList.unshift('<ul>','<li>');
    planetsList.push('</li>','</ul>');
    console.log(planetsList.join('')); //join('\n')

    var planetsList1 = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    console.log('<ul>\n<li>' + planetsArray.join('\n</li>\n<li>\n') + '</li>\n</ul>');

    let planetsList2 = '<ul>' + planetsArray.map(function(planet) {return '<li>' + planet + '</li>';}).join('') + '</ul>';

})();
