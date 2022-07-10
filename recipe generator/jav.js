
/* this is to define what does getRandom(x) do, or the function of it*/
function getRandom(x) {
    /*Randomly generate a random number from 0 to x*/
    /the x be representing the food below/
    return Math.floor(Math.random()*x);  
}

/* this is the fucntion that generate new food*/
var randnum= getRandom(50);
/*generate a number from 0-50*/
var recipe = {
    /*write the "name" and and "links" which we can use to represent in the html*/
    name : ["BestBeefBurgur","Beef and Cheddar Casserole"," Pork Chops Stuffed with Sun-Dried Tomatoes and Spinach","Crab Cake","Tuna Tartare","Midwest Meatball Casserole","Creamy Mac-and-Cheese Chicken Soup","Creamy Potato Salad With Bacon","Southern-Fried Pork Chops","BLT Egg Bake","Bruschetta","Focaccia Bread","Mushroom Risotto","Pasta Con Pomodoro E Basilico","Stamp-of-Approval Spaghetti Sauce","Caprese Salad with Pesto Sauce","Panzenella","Pasta Carbonara","Margherita Pizza","Lasagna","Omurice","Japanese Curry","Miso Ramen","Yaki Udon","Japanese Fried Rice","Baked Chicken Katsu","Spicy Miso Tsukemen","Dashi Tamagoyaki","Chawan Mushi","Hayashi Ground Beef","Wonton soup","Honey Walnut Shrimp","Slow-Cooker Beef & Broccoli","General Tso's Shrimp 'n Broccoli ","Chinese Barbecue Pork ","Sesame-Ginger Beef","Sweet and Sour Chicken","Chinese Chicken Wingettes ","Shanghai Noodles","Chinese Greens with Oyster Sauce","Tom Yum Goong ","Soup Nuea(Beef Soup)","Moo Satay","Gai Yang (Grilled Chicken)","Gai Tod (Fried Chicken)","Khao Moo Daeng (Red Pork w/ Red Sauce) "," Nam Tok Moo (Grilled Pork with Spice)","Larb Moo (Minced Pork Salad)","Yum Talay (Seafood Salad)","Thawt Man Goong (Deep Fried )"],
        links: ["food0american.html","food1american.html","food2american.html","food3american.html","food4american.html","food5american.html","food6american.html","food7american.html","food8american.html","food9american.html","food0italian.html","food1italian.html","food2italian.html","food3italian.html","food4italian.html","food5italian.html","food6italian.html","food7italian.html","food8italian.html","food9italian.html","food0japanese.html","food1japanese.html","food2japanese.html","food3japanese.html","food4japanese.html","food5japanese.html","food6japanese.html","food7japanese.html","food8japanese.html","food9japanese.html","food0chinese.html","food1chinese.html","food2chinese.html","food3chinese.html","food4chinese.html","food5chinese.html","food6chinese.html","food7chinese.html","food8chinese.html","food9chinese.html","food0thai.html","food1thai.html","food2thai.html","food3thai.html","food4thai.html","food5thai.html","food6thai.html","food7thai.html","food8thai.html","food9thai.html"]
}

/* this is an array that gernerate 50 recipe, the var name is the name it match the links*/







