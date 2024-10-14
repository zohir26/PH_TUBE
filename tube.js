
//get the time
const getTimeString = (time) => {
    const hour = parseInt(time/3600);
    const remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond/60)
    const seconds= remainingSecond % 60;
       return `${hour} hour ${minute} minute ${seconds} seconds ago`
       }




// Fetch category wise button
const categoryAPI = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => showCategoryAPI(data.categories))
        .then(error => console.log(error))
}

const showCategoryAPI = (id) => {
    const dynamicButtonContainer = document.getElementById("dynamic-button");
    id.forEach(categoryId => {
        const dynamicButtonDiv = document.createElement("div")
        dynamicButtonDiv.innerHTML = `
    <button class = 'btn'>  ${categoryId.category}  </button>
    `
        // const dynamicButton = document.createElement("button")
        // dynamicButton.innerHTML=`${categoryId.id}` 
        // dynamicButtonContainer.appendChild(dynamicButton)
        dynamicButtonContainer.appendChild(dynamicButtonDiv)
    });
}
// }
// const videoAPI = () => {
//     fetch (' https://openapi.programming-hero.com/api/phero-tube/videos')
//     .then(response => response.json())
//     .then(data => showVideo(data.videos))
//     .then(error => console.log(error))
// }
const videoApi = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await response.json()
    showVideo(data.videos)
    console.log(data.videos);
}

// "videos": [
//     {
//       "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
//       },
//       "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     },


const showVideo = (video) => {
    const cardContainer = document.getElementById("card-container")
    video.forEach(card => {
        const videoCard = document.createElement("div")
        videoCard.classList = "";
        videoCard.innerHTML = `
        <figure class= "h-[200px] object-cover relative">
        <img  class= "rounded-xl h-full w-full "
        src="${card.thumbnail}"
        alt="Shoes"/>
        ${
            card.others.posted_date ?.length == 0 ? ""  : `<span class = " absolute  bg-black -mt-8 px-5 text-white text-xl"> ${getTimeString(card.others.posted_date)}</span> `
        }
        
       
    </figure>
    <div class="card-body">
    <div class = "flex gap-2">
        <div class = "rounded-profile" > 
        <img src = "${card.authors[0].profile_picture}" class = "h-10 w-10 rounded-full object-cover"/>       
        </div>
            <div class = "title-author_name-check-views-container">         
            <h4 class = " text-xl font-bold"> ${card.title}  </h4>
                <div class= "flex  gap-2 text-center justify-center items-center text-xl"> 
                <p> ${card.authors[0].profile_name}  </p>

            ${card.authors[0].verified == true?                `<img src = "ph-tube-resources/icon_check.png" class= "h-10" />` : ""
            }
                </div>

                <P class = "text-lg font-semibold">  ${card.others.views} Views </p>
            </div>
        
        </div>
    </div>
        
        `
        cardContainer.appendChild(videoCard)
    })
}

videoApi();

categoryAPI();

