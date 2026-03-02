class Song {
  constructor(title, artist, album, year, genre, img, youtube) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.img = img;
    this.youtube = youtube;
  }

  cardHTML(i) {
    return `
      <div class="card" data-i="${i}">
        <div class="card-header">
          <h3>${this.title}</h3>
          <p>By ${this.artist}</p>
        </div>
        <img src="${this.img}" alt="${this.title} cover" />
      </div>
    `;
  }
}

const songs = [
    new Song("Two-Headed Boy", "Neutral Milk Hotel", "Aeroplane Over the Sea", 1998, "Folk Music", "images/twoheaded.jpg", "s7aW1Jf2G2w"),
    new Song("Jailhouse Rock", "Elvis Presley", "Jailhouse Rock", 1957, "Rock", "images/jailhouse.jpeg", "gj0Rz-uP4Mk"),
    new Song("So What", "Miles Davis", "Kind of Blue", 1959, "Jazz", "images/sowhat.jpg", "zqNTltOGh5c"),
    new Song("Jolene", "Dolly Parton", "Jolene", 1973, "Country", "images/jolene.jpg", "Ixrje2rXLMA")
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

const yt = document.getElementById("yt");
const mTitle = document.getElementById("mTitle");
const mArtist = document.getElementById("mArtist");
const mAlbumYear = document.getElementById("mAlbumYear");
const mGenre = document.getElementById("mGenre");

gallery.innerHTML = songs.map((s, i) => s.cardHTML(i)).join("");

// Card Click
gallery.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card){
        return;
    }

    const song = songs[Number(card.dataset.i)];

    mTitle.textContent = song.title;
    mArtist.textContent = `by ${song.artist}`;
    mAlbumYear.textContent = `${song.album}, ${song.year}`;
    mGenre.textContent = song.genre;

    yt.src = `https://www.youtube.com/embed/${song.youtube}`;
    modal.style.display = "block";
});

// Close Modal
function closeModal() {
    modal.style.display = "none";
    yt.src = "";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});