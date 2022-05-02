const reviews = [
    {
      id: 1,
      name: "Jennie Kim",
      job: "Rapper, Vocalist",
      img:
        "https://larepublica.pe/resizer/aNAlQld13TFhO1b67JpJLm-P-zQ=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/RUICX63CLNF3XB44KNBVPG5GTQ.jpg",
      text:
        "Jennie Kim is the designated rapper and vocalist for the group. She takes either position based on the type of song the group is performing.",
    },
    {
      id: 2,
      name: "Lalisa Manoban",
      job: "Rapper, Dancer, Vocalist",
      img:
        "http://pm1.narvii.com/7272/0387f4e67badd2c92e4904dc304b7c3939acbe8dr1-715-697v2_00.jpg",
      text:
        "Lisa Manoban is BLACKPINK's main dancer, lead rapper, and vocalist. Having joined YG Entertainment as a trainee in 2011, she went on to train for around 5 years, until BLACKPINK's debut in 2016.",
    },
    {
      id: 3,
      name: "Rosé Park",
      job: "Vocalist, Dancer",
      img:
        "https://www.milenio.com/uploads/media/2022/02/10/rose-cumple-anos-fans-celebran.jpg",
      text:
        "Rosé is BLACKPINK's resident vocalist, and a lead dancer for the group. Her birth name is Roseanne Park, but her Korean name is Park Chaeyoung.",
    },
    {
      id: 4,
      name: "Jisoo",
      job: "Visual, Vocalist",
      img:
        "https://www.musicmundial.com/wp-content/uploads/2021/03/K-drama-que-protagoniza-Jisoo-de-BLACKPINK-corre-riesgo-de-ser-cancelado.jpg",
      text:
        "Jisoo or Kim Ji-soo is the oldest member of BLACKPINK. The 26-year-old is considered the visual and one of the vocalists for the group.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });