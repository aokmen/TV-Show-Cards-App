const tvShowList = document.querySelector(".tvShowList")
let showList=[]

const getUsers = async () => {
    try {
        const res = await fetch("tv-shows.json")
        if (!res.ok){
            tvShowList.innerHTML = `<h1 class="text-danger">An error occured</h1>
            <img src="./img/404.jpg" alt="404.jpg" />`
           
            throw new Error(`Error: ${res.status}`)
        }
        const data = await res.json()
        showList=data
        showItems(data)
    } catch (error) {
        console.log(error);
    }
  
}

const showItems = (data) => {
    tvShowList.innerHTML = ""; 
    data.forEach(item => {
     if (item.show.image && item.show.image.medium) { 
        tvShowList.innerHTML += `<div class="card mx-auto " style="width: 18rem;">
        <img class="card-img-top" src="${item.show.image.medium}" alt="Card image cap">
        <div class="card-body ">
          <h5 class="card-title" style="height: 2.5rem;">${item.show.name}</h5>
          <p class="card-text "><div class="overflow-auto" style="height: 6rem;">${item.show.summary}</div></p>
          <a href="${item.show.url}" class="btn btn-success">Details</a>
        </div>
      </div>`
     }
    });   
}
getUsers()

document.querySelector("input").oninput = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let filteredData = showList.filter((item) => {
        const showName = item.show.name.toLowerCase();   
        return showName.includes(searchTerm)
    })


    showItems(filteredData)
}