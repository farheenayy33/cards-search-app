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
    bio: "Creative  UI/UX designer who loves simple clean designs.",
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
    const cardsContainer = document.getElementById("cardsContainer");
    const searchInput = document.getElementById("searchInput");
    const resultMeta = document.getElementById("resultMeta");
    const tpl = document.getElementById("cardTpl");
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${ }()|[\]\\]/g, "\\$&");
      }
    function createCardNode(person, query) {
        const node = tpl.content.cloneNode(true);
    const card = node.querySelector(".card");
    card.tabIndex = 0;

    const img = node.querySelector(".photo");
    const nameEl = node.querySelector(".name");
    const roleEl = node.querySelector(".role");
    const bioEl = node.querySelector(".bio");
    img.src = person.img;
    img.alt = `Photo of ${person.name}`;
    if (query) {
          const q = escapeRegExp(query.trim());
          if (q.length > 0) {
            const re = new RegExp(`(${q})`, "ig");
    nameEl.innerHTML = person.name.replace(
    re,
    '<span class="match">$1</span>'
    );
    roleEl.innerHTML = person.role.replace(
    re,
    '<span class="match">$1</span>'
    );
    bioEl.innerHTML = person.bio.replace(
    re,
    '<span class="match">$1</span>'
    );
    return node;
          }
        }
    nameEl.textContent = person.name;
    roleEl.textContent = person.role;
    bioEl.textContent = person.bio;
    return node;
      }
    function renderList(list, query = "") {
        cardsContainer.classList.remove("no-results");
    cardsContainer.innerHTML = "";

    resultMeta.textContent = `${list.length} result${
        list.length !== 1 ? "s" : ""
    }`;
    if (!Array.isArray(list) || list.length === 0) {
        cardsContainer.classList.add("no-results");
    const wrapper = document.createElement("div");
    wrapper.className = "message";
    wrapper.textContent = "No results found";
    cardsContainer.appendChild(wrapper);
    return;
        }
    const grid = document.createElement("div");
    grid.className = "grid";
    const frag = document.createDocumentFragment();
    for (let person of list) {
        frag.appendChild(createCardNode(person, query));
        }
    grid.appendChild(frag);
    cardsContainer.appendChild(grid);
      }
    renderList(users);
    function filterUsers(q) {
        const ql = q.trim().toLowerCase();
    if (ql === "") return users.slice();
        return users.filter((person) => {
          return (
    (person.name && person.name.toLowerCase().includes(ql)) ||
    (person.role && person.role.toLowerCase().includes(ql)) ||
    (person.bio && person.bio.toLowerCase().includes(ql))
    );
        });
      }
    function debounce(fn, wait = 150) {
        let t;
    return function (...args) {
        clearTimeout(t);
          t = setTimeout(() => fn.apply(this, args), wait);
        };
      }
    const onInput = debounce(function (e) {
        const q = e.target.value;
    const filtered = filterUsers(q);
    renderList(filtered, q);
      }, 150);
    const firstCard = cardsContainer.querySelector(".card");
    if (firstCard) firstCard.focus();
    searchInput.addEventListener("input", onInput);
    let cols = 1;
    function updateCols() {
        const cards = cardsContainer.querySelectorAll(".card");
        if (cards.length > 0) {
        cols = Math.max(
            1,
            Math.floor(cardsContainer.offsetWidth / cards[0].offsetWidth)
        );
        }
      }
    updateCols();
    window.addEventListener("resize", updateCols);
      document.addEventListener("keydown", (e) => {
        const cards = Array.from(cardsContainer.querySelectorAll(".card"));
    const currentIndex = cards.indexOf(document.activeElement);
    if (currentIndex === -1) return;
    let nextIndex;
    switch (e.key) {
          case "ArrowRight":
    nextIndex = (currentIndex + 1) % cards.length;
    cards[nextIndex].focus();
    e.preventDefault();
    break;
    case "ArrowLeft":
    nextIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[nextIndex].focus();
    e.preventDefault();
    break;
    case "ArrowDown":
    nextIndex = currentIndex + cols;
            if (nextIndex >= cards.length) nextIndex = currentIndex;
    cards[nextIndex].focus();
    e.preventDefault();
    break;
    case "ArrowUp":
    nextIndex = currentIndex - cols;
    if (nextIndex < 0) nextIndex = currentIndex; // stay if no card above
    cards[nextIndex].focus();
    e.preventDefault();
    break;
        }
      });
