
const users = [
  {
    name: "Farheen Laraib",
    role: "Frontend Developer",
    bio: "JavaScript & CSS expert focused on performance.",
    img: "https://picsum.photos/400/300?random=2",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    bio: "Creative UI/UX designer who loves simple clean designs.",
    img: "https://picsum.photos/400/300?random=1",
  },
  {
    name: "Carla Mendes",
    role: "Product Manager",
    bio: "Helps teams build features that customers love.",
    img: "https://picsum.photos/400/300?random=3",
  },
  {
    name: "Daniel Kim",
    role: "DevOps Engineer",
    bio: "Automation, deployment and cloud infrastructure specialist.",
    img: "https://picsum.photos/400/300?random=4",
  },
  {
    name: "Esha Patel",
    role: "Backend Developer",
    bio: "Builds scalable APIs and secure server systems.",
    img: "https://picsum.photos/400/300?random=5",
  },
  {
    name: "Frank Liu",
    role: "Data Scientist",
    bio: "Turns data into actionable insights.",
    img: "https://picsum.photos/400/300?random=6",
  },
  {
    name: "Grace Hopper",
    role: "Software Engineer",
    bio: "Passionate about coding and problem solving.",
    img: "https://picsum.photos/400/300?random=7",
  },
  {
    name: "Hiro Tanaka",
    role: "Mobile Developer",
    bio: "Creates seamless mobile experiences on iOS and Android.",
    img: "https://picsum.photos/400/300?random=8",
  },
  {
    name: "Isabella Rossi",
    role: "QA Engineer",
    bio: "Ensures software quality through rigorous testing.",
    img: "https://picsum.photos/400/300?random=9",
  },
  {
    name: "Jason Lee",
    role: "Full Stack Developer",
    bio: "Builds web applications from front to back with passion.",
    img: "https://picsum.photos/400/300?random=10",
  },
  {
    name: "Maya Singh",
    role: "UX Researcher",
    bio: "Studies user behavior to create better experiences.",
    img: "https://picsum.photos/400/300?random=11",
  },
  {
    name: "Liam Brown",
    role: "Cloud Architect",
    bio: "Designs scalable cloud infrastructures for modern apps.",
    img: "https://picsum.photos/400/300?random=12",
  },
  {
    name: "Sofia Martinez",
    role: "Marketing Specialist",
    bio: "Crafts campaigns that engage and convert audiences.",
    img: "https://picsum.photos/400/300?random=13",
  },
  {
    name: "Noah Wilson",
    role: "AI Engineer",
    bio: "Creates intelligent systems using machine learning.",
    img: "https://picsum.photos/400/300?random=14",
  },
  {
    name: "Olivia Kim",
    role: "Product Designer",
    bio: "Designs products that solve real problems for users.",
    img: "https://picsum.photos/400/300?random=15",
  },
  {
    name: "Ethan Clark",
    role: "Security Analyst",
    bio: "Protects systems from vulnerabilities and cyber attacks.",
    img: "https://picsum.photos/400/300?random=16",
  },
  {
    name: "Chloe Davis",
    role: "Content Writer",
    bio: "Writes compelling content for web and social media.",
    img: "https://picsum.photos/400/300?random=17",
  },
  {
    name: "Liam Brown",
    role: "DevOps Engineer",
    bio: "Ensures smooth CI/CD pipelines and system stability.",
    img: "https://picsum.photos/400/300?random=18",
  },
  {
    name: "Amelia Johnson",
    role: "Frontend Developer",
    bio: "Creates responsive and interactive web interfaces.",
    img: "https://picsum.photos/400/300?random=19",
  },
  {
    name: "Lucas Garcia",
    role: "Data Analyst",
    bio: "Analyzes data trends to inform business decisions.",
    img: "https://picsum.photos/400/300?random=20",
  },
  {
    name: "Mia Wilson",
    role: "Graphic Designer",
    bio: "Designs visual content that communicates brand messages.",
    img: "https://picsum.photos/400/300?random=21",
  },
  {
    name: "Alexander Smith",
    role: "Software Architect",
    bio: "Designs high-level software structures and frameworks.",
    img: "https://picsum.photos/400/300?random=22",
  },
  {
    name: "Sienna Brooks",
    role: "QA Analyst",
    bio: "Ensures software quality with detailed testing processes.",
    img: "https://picsum.photos/400/300?random=23",
  },
  {
    name: "Benjamin Lee",
    role: "Full Stack Developer",
    bio: "Builds end-to-end web applications with modern technologies.",
    img: "https://picsum.photos/400/300?random=24",
  },
];



const DOM = {
  cardsContainer: document.getElementById("cardsContainer"),
  searchInput: document.getElementById("searchInput"),
  resultMeta: document.getElementById("resultMeta"),
  cardTemplate: document.getElementById("cardTpl"),
};



/**
 * Escapes special regex characters in a string
 * @param {string} string - The string to escape
 * @returns {string} The escaped string
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Debounces a function to limit execution frequency
 * @param {Function} fn - The function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(fn, wait = 150) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Highlights matching text in a given string
 * @param {string} text - The text to search in
 * @param {string} query - The query to search for
 * @returns {string} HTML string with highlighted matches
 */
function highlightMatches(text, query) {
  if (!query || query.length === 0) return text;
  const escapedQuery = escapeRegExp(query.trim());
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  return text.replace(regex, '<span class="match">$1</span>');
}



/**
 * Creates a card DOM node for a person
 * @param {Object} person - Person object with name, role, bio, img
 * @param {string} query - Optional search query for highlighting
 * @returns {DocumentFragment} Card node
 */
function createCardNode(person, query = "") {
  const node = DOM.cardTemplate.content.cloneNode(true);
  const card = node.querySelector(".card");
  card.tabIndex = 0;

  const img = node.querySelector(".photo");
  const nameEl = node.querySelector(".name");
  const roleEl = node.querySelector(".role");
  const bioEl = node.querySelector(".bio");

  img.src = person.img;
  img.alt = `Photo of ${person.name}`;

  if (query && query.trim().length > 0) {
    nameEl.innerHTML = highlightMatches(person.name, query);
    roleEl.innerHTML = highlightMatches(person.role, query);
    bioEl.innerHTML = highlightMatches(person.bio, query);
  } else {
    nameEl.textContent = person.name;
    roleEl.textContent = person.role;
    bioEl.textContent = person.bio;
  }

  return node;
}

/**
 * Renders the list of people cards
 * @param {Array} list - Array of person objects
 * @param {string} query - Search query for highlighting
 */
function renderList(list, query = "") {
  DOM.cardsContainer.classList.remove("no-results");
  DOM.cardsContainer.innerHTML = "";

  const resultCount = list.length;
  DOM.resultMeta.textContent = `${resultCount} result${resultCount !== 1 ? "s" : ""}`;

  if (!Array.isArray(list) || resultCount === 0) {
    DOM.cardsContainer.classList.add("no-results");
    const wrapper = document.createElement("div");
    wrapper.className = "message";
    wrapper.textContent = "No results found";
    DOM.cardsContainer.appendChild(wrapper);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "grid";
  const frag = document.createDocumentFragment();

  list.forEach((person) => {
    frag.appendChild(createCardNode(person, query));
  });

  grid.appendChild(frag);
  DOM.cardsContainer.appendChild(grid);
}


/**
 * Filters users based on search query
 * @param {string} q - Search query
 * @returns {Array} Filtered array of users
 */
function filterUsers(q) {
  const ql = q.trim().toLowerCase();
  if (ql === "") return users.slice();

  return users.filter((person) => {
    const searchableText = `${person.name} ${person.role} ${person.bio}`.toLowerCase();
    return searchableText.includes(ql);
  });
}


let gridColumns = 1;

/**
 * Updates the grid column count based on container width
 */
function updateGridColumns() {
  const cards = DOM.cardsContainer.querySelectorAll(".card");
  if (cards.length > 0) {
    gridColumns = Math.max(
      1,
      Math.floor(DOM.cardsContainer.offsetWidth / cards[0].offsetWidth)
    );
  }
}

/**
 * Handles keyboard navigation through cards
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyboardNavigation(event) {
  const cards = Array.from(DOM.cardsContainer.querySelectorAll(".card"));
  if (cards.length === 0) return;

  const currentIndex = cards.indexOf(document.activeElement);
  if (currentIndex === -1) return;

  let nextIndex;

  switch (event.key) {
    case "ArrowRight":
      nextIndex = (currentIndex + 1) % cards.length;
      cards[nextIndex].focus();
      event.preventDefault();
      break;
    case "ArrowLeft":
      nextIndex = (currentIndex - 1 + cards.length) % cards.length;
      cards[nextIndex].focus();
      event.preventDefault();
      break;
    case "ArrowDown":
      nextIndex = currentIndex + gridColumns;
      if (nextIndex < cards.length) {
        cards[nextIndex].focus();
        event.preventDefault();
      }
      break;
    case "ArrowUp":
      nextIndex = currentIndex - gridColumns;
      if (nextIndex >= 0) {
        cards[nextIndex].focus();
        event.preventDefault();
      }
      break;
  }
}


// Initial render
renderList(users);
updateGridColumns();

// Focus first card
const firstCard = DOM.cardsContainer.querySelector(".card");
if (firstCard) firstCard.focus();

// Event listeners
const handleSearch = debounce(function (e) {
  const q = e.target.value;
  const filtered = filterUsers(q);
  renderList(filtered, q);
}, 150);

DOM.searchInput.addEventListener("input", handleSearch);
window.addEventListener("resize", updateGridColumns);
document.addEventListener("keydown", handleKeyboardNavigation);
