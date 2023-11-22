let quizData = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which galaxy is the Milky Way a part of?",
    options: ["Andromeda", "Triangulum", "Whirlpool", "Milkomeda"],
    correctAnswer: "Milkomeda",
  },
  {
    question: "What is the closest galaxy to the Milky Way?",
    options: ["Andromeda", "Triangulum", "Whirlpool", "Pinwheel"],
    correctAnswer: "Andromeda",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest moon in our solar system?",
    options: ["Ganymede", "Titan", "Europa", "Io"],
    correctAnswer: "Ganymede",
  },
  {
    question: "Which planet has the Great Red Spot?",
    options: ["Jupiter", "Mars", "Saturn", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the name of the largest volcano in our solar system, located on Mars?",
    options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Vesuvius"],
    correctAnswer: "Olympus Mons",
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Earth", "Mercury", "Mars", "Venus"],
    correctAnswer: "Mercury",
  },
  {
    question: "Which moon of Jupiter is known for its strong volcanic activity?",
    options: ["Ganymede", "Io", "Europa", "Callisto"],
    correctAnswer: "Io",
  },
  {
    question: "What is the name of the largest moon of Saturn?",
    options: ["Titan", "Enceladus", "Mimas", "Rhea"],
    correctAnswer: "Titan",
  },
  {
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Uranus", "Neptune", "Mars"],
    correctAnswer: "Earth",
  },
  {
    question: "What is the name of the first artificial satellite launched into space?",
    options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
    correctAnswer: "Sputnik 1",
  },
  {
    question: "Which spacecraft was the first to land on the Moon?",
    options: ["Apollo 11", "Apollo 13", "Gemini 4", "Soyuz 1"],
    correctAnswer: "Apollo 11",
  },
  {
    question: "What is the largest asteroid in the asteroid belt?",
    options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
    correctAnswer: "Ceres",
  },
  {
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    question: "What is the name of the famous telescope launched into space in 1990?",
    options: ["Hubble Space Telescope", "James Webb Space Telescope", "Chandra X-ray Observatory", "Spitzer Space Telescope"],
    correctAnswer: "Hubble Space Telescope",
  },
  {
    question: "Which planet has the fastest rotation in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the name of the first human to travel in space?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
    correctAnswer: "Yuri Gagarin",
  },
  {
    question: "Which spacecraft carried the first humans to land on the Moon?",
    options: ["Apollo 11", "Apollo 13", "Gemini 4", "Soyuz 1"],
    correctAnswer: "Apollo 11",
  },
  {
    question: "What is the distance between the Earth and the Sun?",
    options: ["93 million miles", "100 million miles", "78 million miles", "120 million miles"],
    correctAnswer: "93 million miles",
  },
  {
    question: "Which gas makes up the majority of Jupiter's atmosphere?",
    options: ["Oxygen", "Methane", "Hydrogen", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What is the Kuiper Belt?",
    options: ["A belt of asteroids between Mars and Jupiter", "A belt of icy bodies beyond Neptune", "A region around the Sun with no celestial bodies", "A region of intense radiation around Saturn"],
    correctAnswer: "A belt of icy bodies beyond Neptune",
  },
  {
    question: "Which spacecraft provided the first close-up images of Pluto?",
    options: ["Voyager 2", "New Horizons", "Cassini", "Curiosity"],
    correctAnswer: "New Horizons",
  },
  {
    question: "What is the name of the largest moon of Neptune?",
    options: ["Triton", "Oberon", "Proteus", "Miranda"],
    correctAnswer: "Triton",
  },
  {
    question: "What is the main component of the tails of comets?",
    options: ["Water vapor", "Carbon dioxide", "Methane", "Helium"],
    correctAnswer: "Water vapor",
  },
  {
    question: "Which planet is known for its beautiful rings?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the average temperature on the surface of Venus?",
    options: ["-50 degrees Celsius", "25 degrees Celsius", "450 degrees Celsius", "150 degrees Celsius"],
    correctAnswer: "450 degrees Celsius",
  },
  {
    question: "Which space agency launched the Hubble Space Telescope?",
    options: ["NASA", "ESA", "Roscosmos", "ISRO"],
    correctAnswer: "NASA",
  },
  {
    question: "What is the name of the phenomenon where a massive star collapses under its own gravity?",
    options: ["Supernova", "Black hole", "Nebula", "Pulsar"],
    correctAnswer: "Black hole",
  },
  {
    question: "What is the brightest star in the night sky?",
    options: ["Betelgeuse", "Sirius", "Vega", "Alpha Centauri"],
    correctAnswer: "Sirius",
  },
  {
    question: "Which moon of Saturn is known for its geysers of water ice?",
    options: ["Titan", "Enceladus", "Mimas", "Rhea"],
    correctAnswer: "Enceladus",
  },
  {
    question: "What is the name of the largest volcano on Earth?",
    options: ["Mount Vesuvius", "Mauna Kea", "Mount Kilimanjaro", "Mauna Loa"],
    correctAnswer: "Mauna Loa",
  },
  {
    question: "Which planet is known as the 'Evening Star'?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    question: "What is the name of the first human to walk on the Moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    correctAnswer: "Neil Armstrong",
  },
  {
    question: "What is the name of the second-largest moon of Jupiter?",
    options: ["Io", "Ganymede", "Europa", "Callisto"],
    correctAnswer: "Callisto",
  },
  {
    question: "Which planet is known for its prominent ring system?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on Mars in 2021?",
    options: ["Spirit", "Opportunity", "Curiosity", "Perseverance"],
    correctAnswer: "Perseverance",
  },
  {
    question: "What is the name of the bright star closest to the Earth?",
    options: ["Proxima Centauri", "Alpha Centauri A", "Alpha Centauri B", "Betelgeuse"],
    correctAnswer: "Proxima Centauri",
  },
  {
    question: "Which moon of Uranus is known for its unique sideways rotation?",
    options: ["Oberon", "Miranda", "Ariel", "Umbriel"],
    correctAnswer: "Miranda",
  },
  {
    question: "What is the name of the first artificial satellite in orbit?",
    options: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Telstar 1"],
    correctAnswer: "Sputnik 1",
  },
  {
    question: "Which planet is known for its striking blue color due to methane in its atmosphere?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Neptune",
  },
  {
    question: "What is the name of the bright star in the constellation Orion's Belt?",
    options: ["Betelgeuse", "Sirius", "Rigel", "Alnitak"],
    correctAnswer: "Alnitak",
  },
  {
    question: "Which spacecraft holds the record for the farthest human-made object from Earth?",
    options: ["Voyager 1", "Pioneer 10", "New Horizons", "Cassini"],
    correctAnswer: "Voyager 1",
  },
  {
    question: "What is the name of the largest moon of Pluto?",
    options: ["Charon", "Nix", "Hydra", "Styx"],
    correctAnswer: "Charon",
  },
  {
    question: "Which moon of Saturn is known for its prominent equatorial ridge?",
    options: ["Titan", "Enceladus", "Iapetus", "Rhea"],
    correctAnswer: "Iapetus",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on Venus in 2020?",
    options: ["Magellan", "Venera 13", "Akatsuki", "Pioneer Venus"],
    correctAnswer: "Akatsuki",
  },
  {
    question: "Which planet is known for its extreme axial tilt, leading to extreme seasonal variations?",
    options: ["Mars", "Uranus", "Neptune", "Jupiter"],
    correctAnswer: "Uranus",
  },
  {
    question: "What is the name of the bright star in the constellation Cygnus, also known as the Northern Cross?",
    options: ["Deneb", "Altair", "Vega", "Albireo"],
    correctAnswer: "Deneb",
  },
  {
    question: "Which spacecraft discovered the first evidence of liquid water on Mars?",
    options: ["Mars Reconnaissance Orbiter", "Curiosity", "Opportunity", "Viking 1"],
    correctAnswer: "Mars Reconnaissance Orbiter",
  },
  {
    question: "What is the name of the largest volcano on Mars, often called the 'Tharsis Montes'?",
    options: ["Olympus Mons", "Elysium Mons", "Ascraeus Mons", "Pavonis Mons"],
    correctAnswer: "Olympus Mons",
  },
  {
    question: "Which moon of Neptune is known for its irregular shape and chaotic rotation?",
    options: ["Triton", "Nereid", "Proteus", "Larissa"],
    correctAnswer: "Nereid",
  },
  {
    question: "What is the name of the largest impact crater on the Moon, easily visible from Earth?",
    options: ["Tycho", "Copernicus", "Clavius", "Aristarchus"],
    correctAnswer: "Tycho",
  },
  {
    question: "Which spacecraft provided the first images of the far side of the Moon?",
    options: ["Lunar Reconnaissance Orbiter", "Apollo 11", "Chang'e-4", "Clementine"],
    correctAnswer: "Lunar Reconnaissance Orbiter",
  },
  {
    question: "What is the name of the phenomenon where a massive star explodes in a burst of light?",
    options: ["Supernova", "Nova", "Hypernova", "Pulsar"],
    correctAnswer: "Supernova",
  },
  {
    question: "Which moon of Jupiter is known for its heavily cratered surface and ancient terrain?",
    options: ["Ganymede", "Callisto", "Europa", "Io"],
    correctAnswer: "Callisto",
  },
  {
    question: "What is the name of the second-largest moon of Saturn, discovered by Giovanni Cassini?",
    options: ["Rhea", "Iapetus", "Dione", "Tethys"],
    correctAnswer: "Rhea",
  },
  {
    question: "Which spacecraft made the first successful landing on a comet in 2014?",
    options: ["Rosetta", "Philae", "Stardust", "Deep Impact"],
    correctAnswer: "Philae",
  },
  {
    question: "What is the name of the region around a black hole where escape is impossible due to gravitational pull?",
    options: ["Event Horizon", "Singularity", "Photon Sphere", "Ergosphere"],
    correctAnswer: "Event Horizon",
  },
  {
    question: "Which moon of Jupiter is considered the most volcanic object in the solar system?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    correctAnswer: "Io",
  },
  {
    question: "What is the name of the first space telescope launched by NASA in 1972?",
    options: ["Hubble Space Telescope", "Chandra X-ray Observatory", "James Webb Space Telescope", "Compton Gamma Ray Observatory"],
    correctAnswer: "Compton Gamma Ray Observatory",
  },
  {
    question: "Which moon of Uranus is known for its dark, heavily cratered surface?",
    options: ["Oberon", "Titania", "Miranda", "Umbriel"],
    correctAnswer: "Umbriel",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on Titan, Saturn's largest moon?",
    options: ["Cassini", "Huygens", "Enceladus", "Mimas"],
    correctAnswer: "Huygens",
  },
  {
    question: "Which spacecraft was the first to reach interstellar space?",
    options: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"],
    correctAnswer: "Voyager 1",
  },
  {
    question: "What is the name of the spacecraft that discovered the first potentially habitable exoplanet?",
    options: ["Kepler", "Hubble", "Spitzer", "Tess"],
    correctAnswer: "Kepler",
  },
  {
    question: "Which moon of Jupiter is known for its smooth, icy surface and bright streaks?",
    options: ["Europa", "Io", "Ganymede", "Callisto"],
    correctAnswer: "Europa",
  },
  {
    question: "What is the name of the largest volcano on Earth, located in Hawaii?",
    options: ["Mauna Kea", "Mount Everest", "Mauna Loa", "Kilauea"],
    correctAnswer: "Mauna Loa",
  },
  {
    question: "Which planet is known for its hexagonal-shaped storm at its north pole?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the name of the spacecraft that first observed the Great Red Spot on Jupiter?",
    options: ["Pioneer 10", "Voyager 1", "Galileo", "Juno"],
    correctAnswer: "Galileo",
  },
  {
    question: "Which moon of Saturn has a thick atmosphere and orange color due to organic compounds?",
    options: ["Titan", "Enceladus", "Iapetus", "Rhea"],
    correctAnswer: "Titan",
  },
  {
    question: "What is the name of the phenomenon where light is bent as it passes through a gravitational field?",
    options: ["Refraction", "Diffraction", "Gravitational Lensing", "Dispersion"],
    correctAnswer: "Gravitational Lensing",
  },
  {
    question: "Which space telescope is specifically designed to study the Sun's outer atmosphere?",
    options: ["Hubble Space Telescope", "Chandra X-ray Observatory", "Spitzer Space Telescope", "Solar Dynamics Observatory"],
    correctAnswer: "Solar Dynamics Observatory",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the asteroid Bennu?",
    options: ["Hayabusa2", "OSIRIS-REx", "Dawn", "Rosetta"],
    correctAnswer: "OSIRIS-REx",
  },
  {
    question: "Which moon of Neptune is known for its retrograde orbit and irregular shape?",
    options: ["Triton", "Nereid", "Proteus", "Larissa"],
    correctAnswer: "Triton",
  },
  {
    question: "What is the name of the region in space where gravitational forces are so strong that nothing can escape?",
    options: ["Singularity", "Event Horizon", "Quasar", "Pulsar"],
    correctAnswer: "Singularity",
  },
  {
    question: "Which planet is known for its 'Great Dark Spot,' a giant storm in its atmosphere?",
    options: ["Jupiter", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Neptune",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the dwarf planet Pluto?",
    options: ["New Horizons", "Voyager 1", "Cassini", "Hubble"],
    correctAnswer: "New Horizons",
  },
  {
    question: "Which moon of Mars is known for its large impact crater, Stickney Crater?",
    options: ["Deimos", "Phobos", "Europa", "Callisto"],
    correctAnswer: "Phobos",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the asteroid Ryugu?",
    options: ["OSIRIS-REx", "Hayabusa2", "Chang'e-4", "BepiColombo"],
    correctAnswer: "Hayabusa2",
  },
  {
    question: "Which moon of Saturn is known for its bright, icy surface and pronounced equatorial ridge?",
    options: ["Titan", "Enceladus", "Mimas", "Iapetus"],
    correctAnswer: "Enceladus",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the asteroid Itokawa?",
    options: ["Hayabusa2", "OSIRIS-REx", "Dawn", "Philae"],
    correctAnswer: "Hayabusa",
  },
  {
    question: "Which spacecraft discovered geysers of water vapor erupting from the moon Enceladus?",
    options: ["Cassini", "New Horizons", "Voyager 1", "Galileo"],
    correctAnswer: "Cassini",
  },
  {
    question: "What is the name of the largest moon of Pluto, discovered by the Hubble Space Telescope?",
    options: ["Charon", "Nix", "Hydra", "Styx"],
    correctAnswer: "Charon",
  },
  {
    question: "Which moon of Jupiter is known for its bright, multi-colored bands of clouds?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the asteroid Eros?",
    options: ["OSIRIS-REx", "Dawn", "Hayabusa2", "NEAR Shoemaker"],
    correctAnswer: "NEAR Shoemaker",
  },
  {
    question: "Which moon of Saturn is known for its two-tone coloration, with one hemisphere darker than the other?",
    options: ["Titan", "Enceladus", "Iapetus", "Rhea"],
    correctAnswer: "Iapetus",
  },
  {
    question: "What is the name of the spacecraft that successfully landed on the asteroid Toutatis?",
    options: ["Hayabusa", "OSIRIS-REx", "BepiColombo", "Dawn"],
    correctAnswer: "Hayabusa",
  },
];

// Fisher-Yates (Knuth) algorithm for shuffling array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function fetchQuestions() {
  try {
    // Shuffle the quizData array to make it 100% random
    shuffleArray(quizData);
    loadQuestion();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Rest of the code remains the same
let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const messageContainer = document.getElementById("message-container");
// ...

let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  }
  
  // ...

  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options-container button');
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      displayMessage("Correct! Yalla, next question.");
      buttons.forEach((button) => {
        if (button.textContent === selectedOption) {
          button.classList.add('correct');
        }
      });
    } else {
      displayMessage("Wrong answer. Try again!");
      buttons.forEach((button) => {
        if (button.textContent === selectedOption) {
          button.classList.add('wrong');
        }
        if (button.textContent === currentQuestion.correctAnswer) {
          button.classList.add('correct');
        }
      });
    }
  
    setTimeout(() => {
      buttons.forEach((button) => {
        button.classList.remove('correct', 'wrong'); // Remove color classes
        button.disabled = false; // Enable all buttons after a short delay
      });
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        displayResult();
      }
    }, 2000); // 2000 milliseconds = 2 seconds
  }  

function displayMessage(message) {
  messageContainer.textContent = message;
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  
    // Automatically start a new quiz after 5 seconds
    setTimeout(() => {
      resultContainer.innerHTML = ''; // Clear the result container
      score = 0; // Reset the score
      currentQuestionIndex = 0; // Reset the question index
      fetchQuestions(); // Fetch new questions
    }, 5000); // 5000 milliseconds = 5 seconds
  }

// Initial load
fetchQuestions();