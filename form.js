const typeOfAnimal = ["COW", "GOAT", "CAMEL", "SHEEP", "BULL"];

const products = [
  // Cows
  {
    name: "Desi Cow",
    price: 120000,
    category: "COW",
    breed: "Sahiwal",
    source: "Lahore Farm",
    img: "https://www.google.com/imgres?q=desi%20cow%20pic&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2F0a%2F3a%2F9f%2F0a3a9f3f985ccfbf398c345807117cf8.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F320107485984677497%2F&docid=S__72Kjt5iH_6M&tbnid=L2xMBGXz2Y3eFM&vet=12ahUKEwieqZ3KsMCNAxXmRaQEHY-SGPUQM3oECGYQAA..i&w=300&h=250&hcbhttps://i.pinimg.com/474x/0a/3a/9f/0a3a9f3f985ccfbf398c345807117cf8.jpg=2&ved=2ahUKEwieqZ3KsMCNAxXmRaQEHY-SGPUQM3oECGYQAA",
  },
  {
    name: "Australian Cow",
    price: 200000,
    category: "COW",
    breed: "Australian Friesian",
    source: "Imported Ranch",
    img: "https://www.australiaslivestockexporters.com/wp-content/uploads/2024/11/holstein-fresians-1.jpg",
  },
  {
    name: "Sindhi Cow",
    price: 140000,
    category: "COW",
    breed: "Red Sindhi",
    source: "Hyderabad Cattle Market",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FE9XMY26KKpgUxMJ6vWJY3RQuERp5LFMHw&s",
  },

  // Goats
  {
    name: "Beetal Goat",
    price: 45000,
    category: "GOAT",
    breed: "Beetal",
    source: "Okara Goat Farm",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyl7U1KeS_wHof5rt5pZw8gSvShKn8jhWZg&s",
  },
  {
    name: "Kamori Goat",
    price: 70000,
    category: "GOAT",
    breed: "Kamori",
    source: "Sindh Rural Area",
    img: "https://texasgoat.com/wp-content/uploads/2023/03/kamori-goat-16-edited.webp",
  },
  {
    name: "Teddy Goat",
    price: 30000,
    category: "GOAT",
    breed: "Teddy",
    source: "Rawalpindi Breeders",
    img: "https://portal.farmghar.com/images/seo-pages/168959760556001718.png",
  },

  // Camels
  {
    name: "White Camel",
    price: 350000,
    category: "CAMEL",
    breed: "White Bactrian",
    source: "Cholistan Desert",
    img: "https://live-production.wcms.abc-cdn.net.au/71fd154ddcb41643ba8da53df81ec4b3?impolicy=wcms_crop_resize&cropH=1147&cropW=2036&xPos=0&yPos=157&width=862&height=485",
  },
  {
    name: "Brown Camel",
    price: 280000,
    category: "CAMEL",
    breed: "Dromedary",
    source: "Tharparkar Area",
    img: "https://source.unsplash.com/400x300/?brown-camel",
  },

  // Sheep
  {
    name: "Dumba Sheep",
    price: 55000,
    category: "SHEEP",
    breed: "Dumba",
    source: "Peshawar Livestock",
    img: "https://i.ytimg.com/vi/do-vX2WB7xs/sddefault.jpg ",
  },
  {
    name: "Bakharwal Sheep",
    price: 60000,
    category: "SHEEP",
    breed: "Bakharwal",
    source: "Northern Areas",
    img: "https://source.unsplash.com/400x300/?sheep",
  },

  // Bulls
  {
    name: "Heavy Bull",
    price: 250000,
    category: "BULL",
    breed: "Sahiwal Bull",
    source: "Multan Mandi",
    img: "https://source.unsplash.com/400x300/?bull",
  },
  {
    name: "Cross Breed Bull",
    price: 220000,
    category: "BULL",
    breed: "Crossbred",
    source: "Imported Stockyard",
    img: "https://source.unsplash.com/400x300/?cross-bull",
  },
];

const inputGroupDiv = document.querySelector(".input-group");

const selectElement = inputGroupDiv.querySelector("#animal-type");

const options = selectElement.options;
const priceEstimateDiv = document.querySelector(".price-estimate");
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("animal-type");
  const priceEstimateDiv = document.querySelector(".price-estimate");

  let priceGoat = 35000;
  let priceSheep = 20000;
  let priceCow = 135000;
  let priceCamel = 500000;

  selectElement.addEventListener("change", () => {
    const options = selectElement.options;
    const selectedValue = selectElement.value;

    if (selectedValue === "goat") {
      priceEstimateDiv.innerHTML = `Estimated Price: <span id="price">PKR ${priceGoat.toLocaleString()}</span>;`;
    } else if (selectedValue === "sheep") {
      priceEstimateDiv.innerHTML = `Estimated Price: <span id="price">PKR ${priceSheep.toLocaleString()}</span>;`;
    } else if (selectedValue === "cow") {
      priceEstimateDiv.innerHTML = `Estimated Price: <span id="price">PKR ${priceCow.toLocaleString()}</span>;`;
    } else if (selectedValue === "camel") {
      priceEstimateDiv.innerHTML = `Estimated Price: <span id="price">PKR ${priceCamel.toLocaleString()}</span>;`;
    } else {
      priceEstimateDiv.innerHTML = `Estimated Price: <span id="price">PKR 0</span>;`;
    }
  });
});
