var name_of_guest = [];

function submit() {
    var s = document.getElementById("name1").value;
    name_of_guest.push(s);
    console.log(name_of_guest);
}

function show() {
    
    var i = name_of_guest.join("<br>");
    console.log(name_of_guest);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display = "block";
}

function search() {
    s = document.getElementById("searched_name").value;
    f = 0;
    var j;
    for (let j = 0; j < name_of_guest.length; j++) {
        f = f + 1;
        
    }
        if (j = 1) {
            document.getElementById("erty").innerHTML = "(Dear User I have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name found 1 time";
            console.log("Hey there dear user I have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name found 1 time");
        }
        if (j = 0) {
            document.getElementById("erty").innerHTML = "(Dear User I have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name not found. so sad";
            console.log("Hey there dear user I have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name found 1 time");
        } else {
            document.getElementById("erty").innerHTML = "(Dear User I  have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name found " + f + "times";
            console.log("Hey there dear user I have used if statement to use time and times and not even a single time in different places try putting a exact name twice and once and then not even a single time in the search)Name found 1 time");
        }
            
        
}