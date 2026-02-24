
const HAPPY = {
  "Happy by Pharrell Williams": "ZbZSe6N_BXs",
  "Don't Stop me now by Queen": "HgzGwKwLmgM",
  "Can't Stop this Feeling by Justin Timberlake": "ru0K8uYEZWw",
  "Don't Worry be Happy by Bobby McFerrin": "d-diB65scQU",
  "I'm Walking on Sunshine by Katrina & the Waves": "iPUmE-tne5U"
};

const SAD = {
  "Adele - Someone Like You": "hLQl3WQQoQ0",
  "Lewis Capaldi - Someone You Loved": "zABLecsR5UE",
  "Billie Eilish - when the party's over": "pbMwTqkKSps",
  "Sam Smith - Stay With Me": "pB-5XG-DbAA",
  "Coldplay - The Scientist": "RB-RcX5DS5A"
};

const moodSelect = document.getElementById("moodSelect");
const songsDiv = document.getElementById("songs");
const videoSection = document.getElementById("videoSection");
const player = document.getElementById("player");

let currentSongs = HAPPY;

loadSongs(currentSongs);

// change mood
moodSelect.addEventListener("change", () => {
  if (moodSelect.value == "happy") {
    currentSongs = HAPPY;
  } else{
      currentSongs = SAD;
  }
  loadSongs(currentSongs);
  hideVideo();
});

function loadSongs(songsObj){
  songsDiv.innerHTML = "";

  Object.keys(songsObj).forEach((songName) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = songName;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      playSong(songName, songsObj[songName]);
    });

    songsDiv.appendChild(a);
  });
}

function playSong(songName, videoId){
  player.src = `https://www.youtube.com/embed/${videoId}`;
  videoSection.classList.remove("hidden");
}

function hideVideo(){
  player.src = "";
  videoSection.classList.add("hidden");
}