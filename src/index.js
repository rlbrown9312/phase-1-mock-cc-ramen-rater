
fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => {

addItemsToMenu(data);
//showRamenDetails(data);

})

function addItemsToMenu(items) {

    items.forEach(item => {

    const ramenMenu = document.querySelector("#ramen-menu");
    
    const img = document.createElement("img");
    img.src = item.image;

    img.addEventListener("click", () => {
        showRamenDetails(item)

    })

    ramenMenu.append(img);

    
    })
        
}

function showRamenDetails(details) {

    const name = document.querySelector(".name");
    const restaurant = document.querySelector(".restaurant");
    const detailImage = document.querySelector(".detail-image");
    const rating = document.querySelector("#rating-display");
    const commentDisplay = document.querySelector("#comment-display");

    name.textContent = details.name;
    restaurant.textContent = details.restaurant;
    detailImage.src = details.image;
    rating.textContent = details.rating;
    commentDisplay.textContent = details.comment;


}

const newRamen = document.querySelector("#new-ramen");
newRamen.addEventListener("submit", (e) => {
    e.preventDefault();

   const userInput = e.target["new-ramen"].value //Idk if needed, but I put it for safety, although it does nothing lol.

    e.target.reset()
    

})
