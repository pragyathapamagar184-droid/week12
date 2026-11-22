// --- Week 10: Existing Greeting & Age Calculation ---
let userName = "Pragya Thapa Magar";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

let birthYear = 2006;
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// --- Week 11: Dark Mode Toggle ---
const themeBtn = document.querySelector("#theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
  });
}

// --- Week 12 Step 1: Hobby/Skill List Rendering ---
const hobbies = ["Web Development", "Photography", "Reading & Traveling"];
const listContainer = document.getElementById("hobby-list");

if (listContainer) {
  const ul = document.createElement("ul");

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }

  listContainer.appendChild(ul);
  console.log("Rendered " + hobbies.length + " hobbies.");
}

// --- Week 12 Step 2: Hobby Gallery (Extension) ---
const galleryImages = [
  "https://picsum.photos/seed/pragyahobby1/600/350",
  "https://picsum.photos/seed/pragyahobby2/600/350",
  "https://picsum.photos/seed/pragyahobby3/600/350"
];

let currentIndex = 0;
const galleryImg = document.getElementById("gallery-img");
const nextPhotoBtn = document.getElementById("next-photo-btn");

if (galleryImg && nextPhotoBtn && galleryImages.length > 0) {
  galleryImg.src = galleryImages[currentIndex];

  nextPhotoBtn.addEventListener("click", function () {
    currentIndex++;

    // Reset index to 0 when reaching the end of the array
    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    galleryImg.src = galleryImages[currentIndex];
    console.log("Showing gallery image index:", currentIndex);
  });
}
