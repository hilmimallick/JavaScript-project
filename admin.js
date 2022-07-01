let courseList = JSON.parse(localStorage.getItem("courseList"))
  ? JSON.parse(localStorage.getItem("courseList"))
  : [
      {
        image:
          "https://i.postimg.cc/XqCKqwHM/allan-nygren-xv-KQu-Nt-Oh-I-unsplash.jpg",
        title: "Atlantic Beach Links",
        type: "links",
        location: "South Africa",
        size: "36 hectares",
        price: "$ 25.6 million",
        id: "1",
      },

      {
        image: "https://i.postimg.cc/3wNvWXNL/autumn-g3d71d9883-1920.jpg",
        title: "Forest Pines Golf Course",
        type: "Parkland",
        location: "England",
        size: "40 hectares",
        price: "$ 30 million",
        id: "2",
      },

      {
        image:
          "https://i.postimg.cc/sxkc4nQD/dean-ricciardi-08-Ipbe8-Gp-Ww-unsplash.jpg",
        title: "Royal Greens Golf Club",
        type: "Desert",
        location: "Saudi Arabia",
        size: "56 hectares",
        price: "$ 36.3 million",
        id: "3",
      },

      {
        image: "https://i.postimg.cc/xTGxP2Rw/golf-course-g07a3b17bf-1920.jpg",
        title: "Kings Way Golf Club",
        type: "Executive",
        location: "United States",
        size: "42 hectares",
        price: "$ 23.1 million",
        id: "4",
      },

      {
        image: "https://i.postimg.cc/VvqR4qjq/golf-course-g3692fee17-1920.jpg",
        title: "Royal County Down Golf Club",
        type: "Championship",
        location: "Northern Ireland",
        size: "64 hectares",
        price: "$ 39 million",
        id: "5",
      },

      {
        image: "https://i.postimg.cc/mDxCqcZ8/golf-g62f5d0924-1920.jpg",
        title: "The Plantation Course at kapalua Golf",
        type: "Ocean",
        location: "Hawaii",
        size: "53 hectures",
        price: "$ 27.3 million",
        id: "6",
      },

      {
        image: "https://i.postimg.cc/3xXTpV4N/jamaica-gc4c1bbb1f-1920.jpg",
        title: "Steenberg Golf Club",
        type: "Private",
        location: "South Africa",
        size: "70 hectares",
        price: "$ 40 million",
        id: "7",
      },

      {
        image:
          "https://i.postimg.cc/9XwF0xpR/noah-rosenfield-nj-AGLWioh-CM-unsplash.jpg",
        title: "Moore Park Golf Club",
        type: "Municipal",
        location: "Australia",
        size: "49 hectares",
        price: "$ 29 million",
        id: "8",
      },

      {
        image: "https://i.postimg.cc/9FV521Nj/pexels-kelly-l-4185124.jpg",
        title: "Kinloch Club",
        type: "Heathland",
        location: "New Zealand",
        size: "62 hectares",
        price: "$ 31.4 million",
        id: "9",
      },

      {
        image: "https://i.postimg.cc/gJqsHyyv/pexels-pixabay-164250.jpg",
        title: "Shadow Creek Golf Club",
        type: "Estate",
        location: "United States",
        size: "76 hectares",
        price: "$ 43.5 million",
        id: "10",
      },
    ];

let asc = true;

const tracksContainer = document.querySelector("#tableItems");

function showCourses(courseList) {
  tracksContainer.innerHTML = "";
  console.log(courseList);
  courseList.forEach((track) => {
    tracksContainer.innerHTML += `
    
      <tr>
        <th scope="row">${track.id}</th>
        <td>${track.image}</td>
        <td>${track.title}</td>
        <td>${track.type}</td>
        <td>${track.location}</td>
        <td>${track.size}</td>
        <td>${track.price}</td>
        <td><i class="fa-solid fa-pen-to-square p-3"></i>
        <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td> 
      </tr>
  
       `;
  });
}

showCourses(courseList);

//add function
function addCourses() {
  const newCourse = {
    image: document.querySelector("#image").value,
    title: document.querySelector("#title").value,
    type: document.querySelector("#type").value,
    location: document.querySelector("#location").value,
    size: document.querySelector("#size").value,
    price: document.querySelector("#price").value,
    id: courseList.length + 1,
  };
  courseList.push(newCourse);
  localStorage.setItem("courseList", JSON.stringify(courseList));
  showCourses(courseList);
}
document.querySelector("#addNewItem").addEventListener("click", addCourses);

//delete function
function deleteTask(id) {
  courseList = courseList.filter((track) => track.id !== id);
  localStorage.setItem("courseList", JSON.stringify(courseList));
  showCourses(courseList);
}

//Filtersize
function filtersize(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "all") {
    // console.log(FilterOption);
    document.querySelector("#tableItems").innerHTML = "";
    let specificView = courseList.filter(
      (track) => track.size === FilterOption
    );
    specificView.forEach((track) => {
      document.querySelector("#tableItems").innerHTML += `
      <tr>
      <th scope="row">${track.id}</th>
      <td>${track.image}</td>
      <td>${track.title}</td>
      <td>${track.type}</td>
      <td>${track.location}</td>
      <td>${track.size}</td>
      <td>${track.price}</td>
      <td><i class="fa-solid fa-pen-to-square p-3"></i>
      <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td> 
    </tr>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}

//Filterlocation
function filterlocation(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "all") {
    // console.log(FilterOption);
    document.querySelector("#tableItems").innerHTML = "";
    let specificView = courseList.filter(
      (track) => track.location === FilterOption
    );
    specificView.forEach((track) => {
      document.querySelector("#tableItems").innerHTML += `
      <tr>
      <th scope="row">${track.id}</th>
      <td>${track.image}</td>
      <td>${track.title}</td>
      <td>${track.type}</td>
      <td>${track.location}</td>
      <td>${track.size}</td>
      <td>${track.price}</td>
      <td><i class="fa-solid fa-pen-to-square p-3"></i>
      <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td> 
    </tr>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}


//Filtertype
function filtertype(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "all") {
    // console.log(FilterOption);
    document.querySelector("#tableItems").innerHTML = "";
    let specificView = courseList.filter(
      (track) => track.type === FilterOption
    );
    specificView.forEach((track) => {
      document.querySelector("#tableItems").innerHTML += `
      <tr>
      <th scope="row">${track.id}</th>
      <td>${track.image}</td>
      <td>${track.title}</td>
      <td>${track.type}</td>
      <td>${track.location}</td>
      <td>${track.size}</td>
      <td>${track.price}</td>
      <td><i class="fa-solid fa-pen-to-square p-3"></i>
      <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td> 
    </tr>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}

//Filterprice
function filterprice(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "all") {
    // console.log(FilterOption);
    document.querySelector("#tableItems").innerHTML = "";
    let specificView = courseList.filter(
      (track) => track.price === FilterOption
    );
    specificView.forEach((track) => {
      document.querySelector("#tableItems").innerHTML += `
      <tr>
      <th scope="row">${track.id}</th>
      <td>${track.image}</td>
      <td>${track.title}</td>
      <td>${track.type}</td>
      <td>${track.location}</td>
      <td>${track.size}</td>
      <td>${track.price}</td>
      <td><i class="fa-solid fa-pen-to-square p-3"></i>
      <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td> 
    </tr>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}