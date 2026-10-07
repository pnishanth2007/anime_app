// ==========================================
// ANIMESIA 2.0 - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// ANIME DATABASE
// ==========================================

const animeData = {

    naruto: {
        title: "Naruto",
        rating: "8.7",
        year: "2002",
        genres: ["Action", "Adventure"],
        image: "naruto.jpg",
        description: "Enter a world of legendary warriors, powerful friendships, dangerous battles and unforgettable adventures."
    },

    onepiece: {
        title: "One Piece",
        rating: "9.0",
        year: "1999",
        genres: ["Action", "Adventure"],
        image: "onepiece.png",
        description: "Join an unforgettable pirate adventure filled with friendship, battles, mysteries and the search for the legendary One Piece."
    },

    demon: {
        title: "Demon Slayer",
        rating: "8.6",
        year: "2019",
        genres: ["Action", "Fantasy"],
        image: "demon.png",
        description: "Follow Tanjiro as he enters a dangerous world of demons, sword battles, family and determination."
    },

    solo: {
        title: "Solo Leveling",
        rating: "8.8",
        year: "2024",
        genres: ["Action", "Fantasy"],
        image: "solo.jpg",
        description: "Enter a world of hunters and mysterious dungeons as Sung Jin-Woo begins his journey to become stronger than anyone imagined."
    },

    bleach: {
        title: "Bleach",
        rating: "8.2",
        year: "2004",
        genres: ["Action", "Fantasy"],
        image: "bleach.jpg",
        description: "Ichigo Kurosaki gains the powers of a Soul Reaper and begins protecting the world from dangerous supernatural threats."
    },

    blackclover: {
        title: "Black Clover",
        rating: "8.3",
        year: "2017",
        genres: ["Action", "Fantasy"],
        image: "blackclover.jpg",
        description: "Asta dreams of becoming the Wizard King despite having no magic, relying on determination and powerful anti-magic."
    },

    attackontitan: {
        title: "Attack on Titan",
        rating: "9.1",
        year: "2013",
        genres: ["Action", "Drama"],
        image: "aot.jpg",
        description: "Humanity fights for survival against terrifying Titans while uncovering secrets hidden behind the walls."
    },

    jujutsukaisen: {
        title: "Jujutsu Kaisen",
        rating: "8.6",
        year: "2020",
        genres: ["Action", "Fantasy"],
        image: "jujutsu.jpg",
        description: "Yuji Itadori enters the dangerous world of cursed spirits after becoming connected to a powerful curse."
    },

    myheroacademia: {
        title: "My Hero Academia",
        rating: "8.0",
        year: "2016",
        genres: ["Action", "Adventure"],
        image: "mha.jpg",
        description: "Izuku Midoriya dreams of becoming a hero in a world where most people possess extraordinary abilities."
    },

    windbreaker: {
        title: "Wind Breaker",
        rating: "8.4",
        year: "2024",
        genres: ["Action", "School"],
        image: "windbreaker.jpg",
        description: "Haruka Sakura enters a school known for powerful fighters and discovers the meaning of strength and friendship."
    }

};
// ==========================================
// BACKGROUND PARTICLES
// ==========================================

const particlesContainer =
    document.querySelector(".particles");

if (particlesContainer) {

    for (let i = 0; i < 50; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.animationDuration =
            4 + Math.random() * 6 + "s";

        particlesContainer.appendChild(particle);
    }
}


// ==========================================
// PASSWORD TOGGLE
// ==========================================

function setupPasswordToggle(buttonId, inputId) {

    const button =
        document.getElementById(buttonId);

    const input =
        document.getElementById(inputId);

    if (!button || !input) {
        return;
    }

    button.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";
            button.textContent = "🙈";

        } else {

            input.type = "password";
            button.textContent = "👁";
        }
    });
}


setupPasswordToggle(
    "togglePassword",
    "password"
);

setupPasswordToggle(
    "toggleRegisterPassword",
    "registerPassword"
);

setupPasswordToggle(
    "toggleConfirmPassword",
    "confirmPassword"
);


// ==========================================
// REGISTER
// ==========================================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const username =
                document
                    .getElementById("username")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("registerPassword")
                    .value;

            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;


            if (username.length < 3) {

                alert(
                    "❌ Username must contain at least 3 characters."
                );

                return;
            }


            if (password.length < 6) {

                alert(
                    "❌ Password must contain at least 6 characters."
                );

                return;
            }


            if (password !== confirmPassword) {

                alert(
                    "❌ Passwords do not match."
                );

                return;
            }


            const existingUser =
                localStorage.getItem(
                    "ANIMESIAUser"
                );


            if (existingUser) {

                const oldUser =
                    JSON.parse(existingUser);


                if (
                    oldUser.username.toLowerCase() ===
                    username.toLowerCase()
                ) {

                    alert(
                        "❌ Username already exists."
                    );

                    return;
                }


                if (
                    oldUser.email.toLowerCase() ===
                    email.toLowerCase()
                ) {

                    alert(
                        "❌ Email already exists."
                    );

                    return;
                }
            }


            const user = {

                username: username,
                email: email,
                password: password,

                createdAt:
                    new Date().toISOString()
            };


            localStorage.setItem(
                "ANIMESIAUser",
                JSON.stringify(user)
            );


            localStorage.setItem(
                "ANIMESIAMyList",
                JSON.stringify([])
            );


            alert(
                "✅ Account created successfully!"
            );


            window.location.href =
                "index.html";
        }
    );
}


// ==========================================
// LOGIN
// ==========================================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const loginInput =
                document
                    .getElementById("loginInput")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("password")
                    .value;


            const savedUser =
                localStorage.getItem(
                    "ANIMESIAUser"
                );


            if (!savedUser) {

                alert(
                    "❌ No account found. Please create an account first."
                );

                return;
            }


            const user =
                JSON.parse(savedUser);


            const validUser =
                loginInput.toLowerCase() ===
                    user.username.toLowerCase()
                ||
                loginInput.toLowerCase() ===
                    user.email.toLowerCase();


            if (!validUser) {

                alert(
                    "❌ Invalid username or email."
                );

                return;
            }


            if (password !== user.password) {

                alert(
                    "❌ Invalid password."
                );

                return;
            }


            localStorage.setItem(
                "ANIMESIALoggedIn",
                "true"
            );


            alert(
                "✅ Welcome back, " +
                user.username +
                "!"
            );


            window.location.href =
                "home.html";
        }
    );
}


// ==========================================
// GET CURRENT USER
// ==========================================

function getCurrentUser() {

    const savedUser =
        localStorage.getItem(
            "ANIMESIAUser"
        );


    if (!savedUser) {
        return null;
    }


    try {

        return JSON.parse(savedUser);

    } catch (error) {

        return null;
    }
}


// ==========================================
// DISPLAY USERNAME
// ==========================================

const welcomeUser =
    document.getElementById(
        "welcomeUser"
    );


if (welcomeUser) {

    const user =
        getCurrentUser();


    if (user) {

        welcomeUser.textContent =
            user.username;

    } else {

        welcomeUser.textContent =
            "User";
    }
}


// ==========================================
// LOGOUT
// ==========================================

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "ANIMESIALoggedIn"
            );


            alert(
                "✅ Logged out successfully!"
            );


            window.location.href =
                "index.html";
        }
    );
}


// ==========================================
// MY LIST FUNCTIONS
// ==========================================

function getMyList() {

    try {

        return JSON.parse(
            localStorage.getItem("ANIMESIAMyList")
        ) || [];

    } catch (error) {

        return [];
    }
}


function saveMyList(myList) {

    localStorage.setItem(
        "ANIMESIAMyList",
        JSON.stringify(myList)
    );
}


function addToMyList(animeName) {

    let myList = getMyList();

    if (myList.includes(animeName)) {

        alert(
            "⭐ " +
            animeName +
            " is already in My List!"
        );

        updateMyListButtons();

        return;
    }

    myList.push(animeName);

    saveMyList(myList);

    updateMyListButtons();

    renderMyList();

    alert(
        "✅ " +
        animeName +
        " added to My List!"
    );
}


function removeFromMyList(animeName) {

    let myList = getMyList();

    myList = myList.filter(
        function (anime) {
            return anime !== animeName;
        }
    );

    saveMyList(myList);

    renderMyList();

    updateMyListButtons();
}


function isInMyList(animeName) {

    const myList = getMyList();

    return myList.includes(animeName);
}

// ==========================================
// UPDATE MY LIST BUTTONS
// ==========================================

function updateMyListButtons() {

    const buttons =
        document.querySelectorAll(
            ".list-btn, #heroMyListBtn"
        );


    buttons.forEach(
        function (button) {

            let animeName =
                button.dataset.anime;


            if (!animeName) {

                if (
                    button.id ===
                    "heroMyListBtn"
                ) {

                    animeName =
                        "Naruto";
                }
            }


            if (isInMyList(animeName)) {

                button.textContent =
                    "✓ IN MY LIST";

                button.classList.add(
                    "added"
                );

            } else {

                button.textContent =
                    "+ MY LIST";

                button.classList.remove(
                    "added"
                );
            }
        }
    );
}


// ==========================================
// HERO MY LIST STATE
// ==========================================

const heroMyListBtn =
    document.getElementById(
        "heroMyListBtn"
    );


if (heroMyListBtn) {

    heroMyListBtn.dataset.anime =
        "Naruto";

    updateMyListButtons();
}


// ==========================================
// MY LIST PAGE
// ==========================================

function renderMyList() {

    const container =
        document.getElementById(
            "myListContainer"
        );


    if (!container) {
        return;
    }


    const myList =
        getMyList();


    container.innerHTML = "";


    if (myList.length === 0) {

        container.innerHTML = `
            <div class="empty-list">
                <div>🎬</div>
                <h2>Your My List is Empty</h2>
                <p>Add your favourite anime from the Home page.</p>
                <button onclick="window.location.href='home.html'">
                    Browse Anime
                </button>
            </div>
        `;

        return;
    }


    myList.forEach(
        function (animeName) {

            const anime =
                Object.values(
                    animeData
                ).find(
                    function (item) {

                        return item.title ===
                            animeName;
                    }
                );


            if (!anime) {
                return;
            }


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "my-list-item";


            const animeCode =
                getAnimeCode(
                    animeName
                );


            item.innerHTML = `

                <div class="my-list-poster">

                    <img
                        src="${anime.image}"
                        alt="${anime.title}"
                    >

                </div>

                <div class="my-list-details">

                    <h2>
                        ${anime.title}
                    </h2>

                    <p>
                        ⭐ ${anime.rating}
                        &nbsp; • &nbsp;
                        ${anime.year}
                        &nbsp; • &nbsp;
                        ${anime.genres.join(", ")}
                    </p>

                    <div class="my-list-actions">

                        <button
                            onclick="window.location.href='watch.html?anime=${animeCode}'"
                        >
                            ▶ WATCH
                        </button>

                        <button
                            class="remove-list-btn"
                            onclick="removeFromMyList('${anime.title}')"
                        >
                            ✕ REMOVE
                        </button>

                    </div>

                </div>
            `;


            container.appendChild(item);
        }
    );
}


if (
    document.getElementById(
        "myListContainer"
    )
) {

    renderMyList();
}


// ==========================================
// GET ANIME CODE
// ==========================================

function getAnimeCode(animeName) {

    for (
        const code in animeData
    ) {

        if (
            animeData[code].title ===
            animeName
        ) {

            return code;
        }
    }


    return "";
}


// ==========================================
// OPEN ANIME
// ==========================================

function openAnime(animeName) {

    const code =
        getAnimeCode(animeName);


    if (code) {

        window.location.href =
            "watch.html?anime=" +
            code;
    }
}


// ==========================================
// ADVANCED SEARCH ANIME
// ==========================================

const animeSearch =
    document.getElementById("animeSearch");

const searchBtn =
    document.getElementById("searchBtn");

function searchAnime() {

    if (!animeSearch) {
        return;
    }

    const searchText =
        animeSearch.value
            .toLowerCase()
            .trim();

    const animeCards =
        document.querySelectorAll(
            ".anime-grid .anime-card"
        );

    let foundAnime = false;

    animeCards.forEach(function (card) {

        const titleElement =
            card.querySelector("h3");

        const infoElement =
            card.querySelector(".anime-info p");

        const ratingElement =
            card.querySelector(".rating");

        const yearElement =
            card.querySelector(".year");

        if (!titleElement) {
            return;
        }

        const title =
            titleElement.textContent
                .toLowerCase();

        const description =
            infoElement
                ? infoElement.textContent.toLowerCase()
                : "";

        const rating =
            ratingElement
                ? ratingElement.textContent.toLowerCase()
                : "";

        const year =
            yearElement
                ? yearElement.textContent.toLowerCase()
                : "";

        const searchData =
            title +
            " " +
            description +
            " " +
            rating +
            " " +
            year;

        if (
            searchText === "" ||
            searchData.includes(searchText)
        ) {

            card.style.display = "block";

            foundAnime = true;

        } else {

            card.style.display = "none";
        }

    });

    const noAnimeMessage =
        document.getElementById(
            "noAnimeMessage"
        );

    if (noAnimeMessage) {

        if (
            searchText !== "" &&
            !foundAnime
        ) {

            noAnimeMessage.style.display =
                "block";

        } else {

            noAnimeMessage.style.display =
                "none";
        }
    }
}


if (animeSearch) {

    animeSearch.addEventListener(
        "input",
        searchAnime
    );
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchAnime
    );
}

// ==========================================
// GENRE FILTER
// ==========================================

function filterGenre(genre) {

    const animeCards = document.querySelectorAll(
        ".anime-grid .anime-card"
    );

    let found = false;

    animeCards.forEach(function (card) {

        const animeCode = card.dataset.anime;

        const anime = animeData[animeCode];

        if (!anime) {
            return;
        }

        if (anime.genres.includes(genre)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    const noMessage = document.getElementById("noAnimeMessage");

    if (noMessage) {
        noMessage.style.display = found ? "none" : "block";
    }

    const section = document.querySelector(".anime-section");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ==========================================
// SHOW ALL ANIME
// ==========================================

function showAllAnime() {

    const animeCards =
        document.querySelectorAll(
            ".anime-grid .anime-card"
        );


    animeCards.forEach(
        function (card) {

            card.style.display =
                "block";
        }
    );


    if (animeSearch) {

        animeSearch.value = "";
    }


    const noAnimeMessage =
        document.getElementById(
            "noAnimeMessage"
        );


    if (noAnimeMessage) {

        noAnimeMessage.style.display =
            "none";
    }
}


// ==========================================
// WATCH PAGE
// ==========================================

const animeTitle =
    document.getElementById(
        "animeTitle"
    );


if (animeTitle) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const animeCode =
        params.get("anime");


    const selectedAnime =
        animeData[animeCode];


    if (selectedAnime) {

        animeTitle.textContent =
            selectedAnime.title;


        const description =
            document.getElementById(
                "animeDescription"
            );


        if (description) {

            description.textContent =
                selectedAnime.description;
        }


        const animeMeta =
            document.getElementById(
                "animeMeta"
            );


        if (animeMeta) {

            animeMeta.innerHTML = `

                <span class="rating">
                    ⭐ ${selectedAnime.rating}
                </span>

                <span>
                    📅 ${selectedAnime.year}
                </span>

                ${selectedAnime.genres
                    .map(
                        function (genre) {

                            return `
                                <span>
                                    🎭 ${genre}
                                </span>
                            `;
                        }
                    )
                    .join("")}
            `;
        }


        const videoBox =
            document.getElementById(
                "videoBox"
            );


        if (videoBox) {

            videoBox.style.backgroundImage = `

                linear-gradient(
                    rgba(0, 0, 0, 0.35),
                    rgba(0, 0, 0, 0.75)
                ),

                url("${selectedAnime.image}")
            `;
        }


        const playingText =
            document.getElementById(
                "playingText"
            );


        if (playingText) {

            playingText.textContent =
                "NOW PLAYING — EPISODE 1";
        }
    }
}


// ==========================================
// WATCH PLAYER
// ==========================================

const playButton =
    document.getElementById(
        "playButton"
    );


const videoBox =
    document.getElementById(
        "videoBox"
    );


const playingText =
    document.getElementById(
        "playingText"
    );


const controlPlay =
    document.getElementById(
        "controlPlay"
    );


const progressFill =
    document.getElementById(
        "progressFill"
    );


const videoTime =
    document.getElementById(
        "videoTime"
    );


let progress = 0;

let progressTimer = null;

const totalSeconds = 24 * 60;


function updateProgress(move = true) {

    if (move) {

        progress +=
            100 / totalSeconds;
    }


    if (progress >= 100) {

        progress = 100;


        if (progressTimer) {

            clearInterval(
                progressTimer
            );

            progressTimer = null;
        }
    }


    if (progressFill) {

        progressFill.style.width =
            progress + "%";
    }


    if (videoTime) {

        const currentSeconds =
            Math.floor(
                totalSeconds *
                progress /
                100
            );


        const minutes =
            Math.floor(
                currentSeconds / 60
            );


        const seconds =
            currentSeconds % 60;


        videoTime.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0") +
            " / 24:00";
    }
}


function startPlayer() {

    if (progressTimer) {
        return;
    }


    progressTimer =
        setInterval(
            function () {

                updateProgress();

            },
            1000
        );
}


function stopPlayer() {

    if (progressTimer) {

        clearInterval(
            progressTimer
        );

        progressTimer = null;
    }
}


function togglePlayer() {

    if (!videoBox) {
        return;
    }


    videoBox.classList.toggle(
        "playing"
    );


    const isPlaying =
        videoBox.classList.contains(
            "playing"
        );


    if (isPlaying) {

        if (playButton) {
            playButton.textContent =
                "❚❚";
        }


        if (controlPlay) {
            controlPlay.textContent =
                "❚❚";
        }


        if (playingText) {
            playingText.style.opacity =
                "1";
        }


        startPlayer();

    } else {

        if (playButton) {
            playButton.textContent =
                "▶";
        }


        if (controlPlay) {
            controlPlay.textContent =
                "▶";
        }


        if (playingText) {
            playingText.style.opacity =
                "0";
        }


        stopPlayer();
    }
}


if (playButton) {

    playButton.addEventListener(
        "click",
        togglePlayer
    );
}


if (controlPlay) {

    controlPlay.addEventListener(
        "click",
        togglePlayer
    );
}


// ==========================================
// PROGRESS BAR
// ==========================================

const progressBar =
    document.querySelector(
        ".progress-bar"
    );


if (progressBar) {

    progressBar.addEventListener(
        "click",
        function (event) {

            const rect =
                progressBar.getBoundingClientRect();


            const clickPosition =
                event.clientX -
                rect.left;


            const percentage =
                (
                    clickPosition /
                    rect.width
                ) * 100;


            progress =
                Math.max(
                    0,
                    Math.min(
                        100,
                        percentage
                    )
                );


            updateProgress(false);
        }
    );
}


// ==========================================
// VOLUME / MUTE
// ==========================================

const muteButton =
    document.getElementById(
        "muteButton"
    );


const volumeSlider =
    document.getElementById(
        "volumeSlider"
    );


let isMuted = false;


if (
    volumeSlider &&
    muteButton
) {

    volumeSlider.addEventListener(
        "input",
        function () {

            if (
                Number(
                    volumeSlider.value
                ) === 0
            ) {

                isMuted = true;

                muteButton.textContent =
                    "🔇";

            } else {

                isMuted = false;

                muteButton.textContent =
                    "🔊";
            }
        }
    );


    muteButton.addEventListener(
        "click",
        function () {

            if (isMuted) {

                volumeSlider.value =
                    100;

                muteButton.textContent =
                    "🔊";

                isMuted = false;

            } else {

                volumeSlider.value =
                    0;

                muteButton.textContent =
                    "🔇";

                isMuted = true;
            }
        }
    );
}


// ==========================================
// FULLSCREEN
// ==========================================

const fullscreenButton =
    document.getElementById(
        "fullscreenButton"
    );


if (
    fullscreenButton &&
    videoBox
) {

    fullscreenButton.addEventListener(
        "click",
        function () {

            if (
                !document.fullscreenElement
            ) {

                if (
                    videoBox.requestFullscreen
                ) {

                    videoBox.requestFullscreen();
                }

            } else {

                document.exitFullscreen();
            }
        }
    );
}


// ==========================================
// EPISODES
// ==========================================

const episodeButtons =
    document.querySelectorAll(
        ".episode-btn"
    );


episodeButtons.forEach(
    function (button, index) {

        button.addEventListener(
            "click",
            function () {

                episodeButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );
                    }
                );


                button.classList.add(
                    "active"
                );


                const episodeNumber =
                    index + 1;


                if (playingText) {

                    playingText.textContent =
                        "▶ NOW PLAYING — EPISODE " +
                        episodeNumber;

                    playingText.style.opacity =
                        "1";
                }


                progress = 0;

                updateProgress(false);


                if (
                    videoBox &&
                    videoBox.classList.contains(
                        "playing"
                    )
                ) {

                    stopPlayer();

                    startPlayer();
                }
            }
        );
    }
);


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.target.tagName ===
            "INPUT"
        ) {

            return;
        }


        // SPACE = PLAY / PAUSE

        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            togglePlayer();
        }


        // F = FULLSCREEN

        if (
            event.key.toLowerCase() ===
            "f"
        ) {

            if (fullscreenButton) {

                fullscreenButton.click();
            }
        }


        // M = MUTE

        if (
            event.key.toLowerCase() ===
            "m"
        ) {

            if (muteButton) {

                muteButton.click();
            }
        }


        // RIGHT ARROW = +5 SEC

        if (
            event.key ===
            "ArrowRight"
        ) {

            progress =
                Math.min(
                    100,
                    progress +
                    (
                        5 /
                        totalSeconds
                    ) *
                    100
                );


            updateProgress(false);
        }


        // LEFT ARROW = -5 SEC

        if (
            event.key ===
            "ArrowLeft"
        ) {

            progress =
                Math.max(
                    0,
                    progress -
                    (
                        5 /
                        totalSeconds
                    ) *
                    100
                );


            updateProgress(false);
        }
    }
);


// ==========================================
// PAGE PROTECTION
// ==========================================

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


const loggedIn =
    localStorage.getItem(
        "ANIMESIALoggedIn"
    );


const protectedPages = [
    "home.html",
    "watch.html",
    "mylist.html",
    "profile.html"
];


if (
    protectedPages.includes(
        currentPage
    ) &&
    loggedIn !== "true"
) {

    alert(
        "🔐 Please login to continue."
    );


    window.location.href =
        "index.html";
}


// ==========================================
// INITIALIZE
// ==========================================

updateMyListButtons();

const detailsPage = document.querySelector(".details-page");

if (detailsPage) {

    const params = new URLSearchParams(window.location.search);
    const animeCode = params.get("anime");

    const anime = animeData[animeCode] || animeData.naruto;

    const title = document.getElementById("detailsTitle");
    const image = document.getElementById("detailsImage");
    const rating = document.getElementById("detailsRating");
    const year = document.getElementById("detailsYear");
    const genre = document.getElementById("detailsGenre");
    const description = document.getElementById("detailsDescription");
    const about = document.getElementById("aboutAnime");

    if (title) {
        title.textContent = anime.title;
    }

    if (image) {
        image.src = anime.image;
        image.alt = anime.title;
    }

    if (rating) {
        rating.textContent = "⭐ " + anime.rating;
    }

    if (year) {
        year.textContent = anime.year;
    }

    if (genre) {
        genre.textContent = anime.genres.join(" • ");
    }

    const descriptions = {

    naruto:
        "Naruto Uzumaki is a young ninja who dreams of becoming the strongest ninja and earning the respect of everyone in his village.",

    onepiece:
        "Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary One Piece treasure.",

    demon:
        "Tanjiro Kamado begins a dangerous journey to fight demons and find a way to restore his sister Nezuko.",

    solo:
        "Sung Jin-Woo starts as the weakest hunter but gains a mysterious power that allows him to level up beyond normal limits.",

    bleach:
        "Ichigo Kurosaki becomes a Soul Reaper and enters a dangerous supernatural world filled with powerful enemies and mysterious battles.",

    blackclover:
        "Asta is a young boy born without magic who dreams of becoming the Wizard King through determination, hard work and anti-magic power.",

    attackontitan:
        "Humanity struggles to survive against terrifying Titans while Eren and his friends uncover the dark secrets behind their world.",

    jujutsukaisen:
        "Yuji Itadori enters the world of Jujutsu after becoming connected to a powerful curse and begins fighting dangerous cursed spirits.",

    myheroacademia:
        "Izuku Midoriya dreams of becoming a great hero despite being born without powers, until he receives an extraordinary opportunity.",

    windbreaker:
        "Haruka Sakura enters a school filled with powerful fighters and discovers that true strength is more than simply winning battles."

};

    const text = descriptions[animeCode] || descriptions.naruto;

    if (description) {
        description.textContent = text;
    }

    if (about) {
        about.textContent =
            anime.title +
            " is one of the featured anime available on ANIMESIA. Explore its story, characters, ratings and episodes.";
    }

    document.title = "ANIMESIA - " + anime.title;


    /* WATCH BUTTON */

  const watchBtn = document.getElementById("detailsWatchBtn");

if (watchBtn) {

    watchBtn.addEventListener("click", function () {

        window.location.href = "watch.html?anime=" + animeCode;

    });

}

    /* MY LIST BUTTON */

    const listBtn =
        document.getElementById("detailsListBtn");

    if (listBtn) {

        listBtn.setAttribute(
            "data-anime",
            animeCode
        );

        updateMyListButtons();

        listBtn.onclick = function () {

            addToMyList(animeCode);

            updateMyListButtons();

        };

    }

}

// ==========================================
// GENERATE ANIME CARDS
// ==========================================

const animeGrid =
    document.getElementById("animeGrid");

if (animeGrid) {

    animeGrid.innerHTML = "";

    for (const code in animeData) {

        const anime = animeData[code];

        const card =
            document.createElement("div");

        card.className = "anime-card";
        card.dataset.anime = code;

        card.innerHTML = `

            <div class="anime-image">

                <img
                    src="${anime.image}"
                    alt="${anime.title}"
                >

            </div>

            <div class="anime-info">

                <h3>
                    ${anime.title}
                </h3>

                <p>
                    ${anime.description}
                </p>

                <div class="anime-meta">

                    <span class="rating">
                        ★ ${anime.rating}
                    </span>

                    <span class="year">
                        ${anime.year}
                    </span>

                </div>

                <div class="anime-actions">

                    <button
                        class="watch-btn"
                        type="button"
                        onclick="window.location.href='anime-details.html?anime=${code}'">
                        ▶ WATCH
                    </button>

                    <button
                        class="list-btn"
                        type="button"
                        data-anime="${anime.title}"
                        onclick="addToMyList('${anime.title}')">
                        + MY LIST
                    </button>

                </div>

            </div>
        `;

        animeGrid.appendChild(card);
    }

    updateMyListButtons();
}

// ==========================================
// ANIME SORTING
// ==========================================

const animeSort =
    document.getElementById("animeSort");

if (animeSort) {

    animeSort.addEventListener(
        "change",
        function () {

            const sortType =
                animeSort.value;

            const animeGrid =
                document.getElementById(
                    "animeGrid"
                );

            if (!animeGrid) {
                return;
            }

            const animeList =
                Object.entries(animeData);

            if (sortType === "ratingHigh") {

                animeList.sort(
                    function (a, b) {

                        return (
                            Number(b[1].rating) -
                            Number(a[1].rating)
                        );

                    }
                );

            }

            else if (sortType === "ratingLow") {

                animeList.sort(
                    function (a, b) {

                        return (
                            Number(a[1].rating) -
                            Number(b[1].rating)
                        );

                    }
                );

            }

            else if (sortType === "yearNew") {

                animeList.sort(
                    function (a, b) {

                        return (
                            Number(b[1].year) -
                            Number(a[1].year)
                        );

                    }
                );

            }

            else if (sortType === "yearOld") {

                animeList.sort(
                    function (a, b) {

                        return (
                            Number(a[1].year) -
                            Number(b[1].year)
                        );

                    }
                );

            }

            else if (sortType === "az") {

                animeList.sort(
                    function (a, b) {

                        return a[1].title
                            .localeCompare(
                                b[1].title
                            );

                    }
                );

            }

            else if (sortType === "za") {

                animeList.sort(
                    function (a, b) {

                        return b[1].title
                            .localeCompare(
                                a[1].title
                            );

                    }
                );

            }

            animeGrid.innerHTML = "";

            animeList.forEach(
                function (item) {

                    const code = item[0];

                    const anime = item[1];

                    const card =
                        document.createElement(
                            "div"
                        );

                    card.className =
                        "anime-card";

                    card.innerHTML = `

                        <div class="anime-image">

                            <img
                                src="${anime.image}"
                                alt="${anime.title}"
                            >

                        </div>

                        <div class="anime-info">

                            <h3>
                                ${anime.title}
                            </h3>

                            <p>
                                ${anime.description}
                            </p>

                            <div class="anime-meta">

                                <span class="rating">
                                    ★ ${anime.rating}
                                </span>

                                <span class="year">
                                    ${anime.year}
                                </span>

                            </div>

                            <div class="anime-actions">

                                <button
                                    class="watch-btn"
                                    type="button"
                                    onclick="window.location.href='anime-details.html?anime=${code}'">
                                    ▶ WATCH
                                </button>

                                <button
                                    class="list-btn"
                                    type="button"
                                    data-anime="${anime.title}"
                                    onclick="addToMyList('${anime.title}')">
                                    + MY LIST
                                </button>

                            </div>

                        </div>

                    `;

                    animeGrid.appendChild(card);

                }
            );

            updateMyListButtons();

        }
    );
}

/* ================================
   ANIMESIA POWER ARENA
================================ */

const characterData = {

    naruto: {
        name: "Naruto Uzumaki",
        image: "naruto.jpg",
        strength: 95,
        speed: 92,
        intelligence: 88,
        power: 97
    },

    sasuke: {
        name: "Sasuke Uchiha",
        image: "naruto.jpg",
        strength: 94,
        speed: 95,
        intelligence: 96,
        power: 98
    },

    kakashi: {
        name: "Kakashi Hatake",
        image: "naruto.jpg",
        strength: 82,
        speed: 88,
        intelligence: 98,
        power: 90
    },

    luffy: {
        name: "Monkey D. Luffy",
        image: "onepiece.png",
        strength: 98,
        speed: 91,
        intelligence: 84,
        power: 99
    },

    zoro: {
        name: "Roronoa Zoro",
        image: "onepiece.png",
        strength: 97,
        speed: 88,
        intelligence: 78,
        power: 96
    },

    tanjiro: {
        name: "Tanjiro Kamado",
        image: "demon.png",
        strength: 84,
        speed: 87,
        intelligence: 90,
        power: 89
    },

    nezuko: {
        name: "Nezuko Kamado",
        image: "demon.png",
        strength: 88,
        speed: 86,
        intelligence: 75,
        power: 91
    },

    sung: {
        name: "Sung Jin-Woo",
        image: "solo.jpg",
        strength: 99,
        speed: 98,
        intelligence: 94,
        power: 100
    },

    ichigo: {
        name: "Ichigo Kurosaki",
        image: "bleach.jpg",
        strength: 97,
        speed: 96,
        intelligence: 87,
        power: 99
    },

    asta: {
        name: "Asta",
        image: "blackclover.jpg",
        strength: 94,
        speed: 93,
        intelligence: 82,
        power: 96
    },

    yuno: {
        name: "Yuno",
        image: "blackclover.jpg",
        strength: 88,
        speed: 94,
        intelligence: 91,
        power: 95
    },

    eren: {
        name: "Eren Yeager",
        image: "aot.jpg",
        strength: 92,
        speed: 78,
        intelligence: 90,
        power: 94
    },

    levi: {
        name: "Levi Ackerman",
        image: "aot.jpg",
        strength: 91,
        speed: 99,
        intelligence: 92,
        power: 93
    },

    gojo: {
        name: "Satoru Gojo",
        image: "jujutsu.jpg",
        strength: 98,
        speed: 98,
        intelligence: 99,
        power: 100
    },

    yuji: {
        name: "Yuji Itadori",
        image: "jujutsu.jpg",
        strength: 93,
        speed: 90,
        intelligence: 82,
        power: 94
    },

    deku: {
        name: "Izuku Midoriya",
        image: "mha.jpg",
        strength: 94,
        speed: 92,
        intelligence: 95,
        power: 96
    },

    bakugo: {
        name: "Katsuki Bakugo",
        image: "mha.jpg",
        strength: 90,
        speed: 94,
        intelligence: 89,
        power: 93
    },

    haruka: {
        name: "Haruka Sakura",
        image: "windbreaker.jpg",
        strength: 86,
        speed: 90,
        intelligence: 76,
        power: 85
    },

    itachi: {
        name: "Itachi Uchiha",
        image: "naruto.jpg",
        strength: 91,
        speed: 94,
        intelligence: 100,
        power: 97
    },

    madara: {
        name: "Madara Uchiha",
        image: "naruto.jpg",
        strength: 99,
        speed: 96,
        intelligence: 98,
        power: 100
    }

};


/* CHARACTER SELECT */

const fighter1Select =
    document.getElementById("fighter1");

const fighter2Select =
    document.getElementById("fighter2");


if (fighter1Select && fighter2Select) {

    for (const code in characterData) {

        const character =
            characterData[code];

        const option1 =
            document.createElement("option");

        option1.value = code;

        option1.textContent =
            character.name;

        fighter1Select.appendChild(option1);


        const option2 =
            document.createElement("option");

        option2.value = code;

        option2.textContent =
            character.name;

        fighter2Select.appendChild(option2);

    }


    fighter1Select.value = "naruto";

    fighter2Select.value = "luffy";


    updateFighter(
        1,
        fighter1Select.value
    );

    updateFighter(
        2,
        fighter2Select.value
    );


    fighter1Select.addEventListener(
        "change",
        function () {

            updateFighter(
                1,
                this.value
            );

        }
    );


    fighter2Select.addEventListener(
        "change",
        function () {

            updateFighter(
                2,
                this.value
            );

        }
    );

}


/* UPDATE CHARACTER */

function updateFighter(number, code) {

    const character =
        characterData[code];

    if (!character) {
        return;
    }


    const nameElement =
        document.getElementById(
            "fighter" + number + "Name"
        );


    const imageElement =
        document.getElementById(
            "fighter" + number + "Image"
        );


    if (nameElement) {

        nameElement.textContent =
            character.name;

    }


    if (imageElement) {

        imageElement.src =
            character.image;

        imageElement.alt =
            character.name;

    }

}


/* COMPARE BUTTON */

const compareButton =
    document.getElementById("compareBtn");


if (compareButton) {

    compareButton.addEventListener(
        "click",
        compareCharacters
    );

}


/* COMPARE CHARACTERS */

function compareCharacters() {

    const code1 =
        document.getElementById(
            "fighter1"
        ).value;


    const code2 =
        document.getElementById(
            "fighter2"
        ).value;


    const character1 =
        characterData[code1];


    const character2 =
        characterData[code2];


    if (!character1 || !character2) {
        return;
    }


    const stats = [
        "strength",
        "speed",
        "intelligence",
        "power"
    ];


    let total1 = 0;
    let total2 = 0;


    stats.forEach(function (stat) {

        const value1 =
            character1[stat];

        const value2 =
            character2[stat];


        total1 += value1;

        total2 += value2;


        const valueElement1 =
            document.getElementById(
                stat + "1"
            );


        const valueElement2 =
            document.getElementById(
                stat + "2"
            );


        const barElement1 =
            document.getElementById(
                stat + "Bar1"
            );


        const barElement2 =
            document.getElementById(
                stat + "Bar2"
            );


        if (valueElement1) {

            valueElement1.textContent =
                value1;

        }


        if (valueElement2) {

            valueElement2.textContent =
                value2;

        }


        if (barElement1) {

            barElement1.style.width =
                value1 + "%";

        }


        if (barElement2) {

            barElement2.style.width =
                value2 + "%";

        }

    });


    /* ================================
       FIND WINNER
    ================================= */

    let winnerName = "DRAW";


    if (total1 > total2) {

        winnerName =
            character1.name;

    } else if (total2 > total1) {

        winnerName =
            character2.name;

    }


    /* ================================
       SHOW RESULT
    ================================= */

    const comparison =
        document.getElementById(
            "comparison"
        );


    if (comparison) {

        comparison.style.display =
            "block";

    }


    const winner =
        document.getElementById(
            "winnerName"
        );


    if (winner) {

        if (winnerName === "DRAW") {

            winner.textContent =
                "⚔ DRAW";

        } else {

            winner.textContent =
                "🏆 " + winnerName;

        }

    }


    /* ================================
       SAVE BATTLE
    ================================= */

    let battleHistory = [];

    try {

        battleHistory =
            JSON.parse(
                localStorage.getItem(
                    "ANIMESIABattleHistory"
                )
            ) || [];

    } catch (error) {

        battleHistory = [];

    }


    const battle = {

        fighter1: character1.name,

        fighter2: character2.name,

        winner: winnerName,

        fighter1Score: total1,

        fighter2Score: total2,

        date:
            new Date().toISOString()

    };


    battleHistory.push(battle);


    localStorage.setItem(
        "ANIMESIABattleHistory",
        JSON.stringify(
            battleHistory
        )
    );


    /* ================================
       SAVE TOTAL BATTLE COUNT
    ================================= */

    localStorage.setItem(
        "ANIMESIABattleCount",
        battleHistory.length.toString()
    );


    /* ================================
       SHOW COMPARISON
    ================================= */

    if (comparison) {

        comparison.scrollIntoView({
            behavior: "smooth"
        });

    }

}
/* ================================
   ALL CHARACTER POWER CARDS
================================ */

const characterGrid =
    document.getElementById("characterGrid");


if (characterGrid) {

    characterGrid.innerHTML = "";


    for (const code in characterData) {

        const character =
            characterData[code];


        const overall =
            Math.round(
                (
                    character.strength +
                    character.speed +
                    character.intelligence +
                    character.power
                ) / 4
            );


        const card =
            document.createElement("div");


        card.className =
            "character-card";


        card.innerHTML = `

            <div class="character-card-image">

                <img
                    src="${character.image}"
                    alt="${character.name}">

            </div>


            <div class="character-card-info">

                <h3>
                    ${character.name}
                </h3>


                <div class="power-row">

                    <span>
                        Strength
                    </span>

                    <strong>
                        ${character.strength}
                    </strong>

                </div>


                <div class="power-row">

                    <span>
                        Speed
                    </span>

                    <strong>
                        ${character.speed}
                    </strong>

                </div>


                <div class="power-row">

                    <span>
                        Intelligence
                    </span>

                    <strong>
                        ${character.intelligence}
                    </strong>

                </div>


                <div class="power-row">

                    <span>
                        Power
                    </span>

                    <strong>
                        ${character.power}
                    </strong>

                </div>


                <div class="overall-power">

                    <span>
                        OVERALL
                    </span>

                    <strong>
                        ${overall}
                    </strong>

                </div>

            </div>

        `;


        characterGrid.appendChild(card);

    }

}