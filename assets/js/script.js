const userInput = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchBtn");
const dropDown = document.querySelector("#dropDown");
const resultsMain = document.querySelector("#resultsMain");

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    const searchInput = userInput.value.trim("").replaceAll(" ", "+");
    dropDownValue = dropDown.value + "/"
    const searchUrl = "https://www.loc.gov/search/" + dropDownValue + "?q=" + searchInput + "&fo=json"

    if(dropDownValue === "/" || searchInput === ""){
        console.log("invalid search");
        return
    }
    // console.log(searchInput);
    // console.log(dropDownValue);
    // console.log("click");
    // console.log(searchUrl);
    fetch(searchUrl)
        .then(function(responce){
            return responce.json();
        }).then(function(json){
                apiObject = json.results
                console.log(apiObject);
                
                for (let i = 0; i < apiObject.length; i++) {
                    let resultsDiv = document.createElement("div");
                    let resultsTitle = document.createElement("p");
                    let resultsDate = document.createElement("p");
                    let resultsDescription = document.createElement("p");

                    resultsDiv.setAttribute("class", "card");
                    resultsTitle.setAttribute("class", "title");
                    resultsDate.setAttribute("class", "date");
                    resultsDescription.setAttribute("class", "descrition");

                    resultsTitle.textContent = apiObject[i].title;
                    resultsDate.textContent = apiObject[i].date;
                    resultsDescription.textContent = apiObject[i].description;

                    resultsMain.appendChild(resultsDiv);
                    resultsDiv.appendChild(resultsTitle);
                    resultsDiv.appendChild(resultsDate);
                    resultsDiv.appendChild(resultsDescription);
            }

            // document.location.replace("./results.html")
        })
    
})





