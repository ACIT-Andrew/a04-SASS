// Handle hamburger menu

$(".site-header__menu-btn").on("click", () => {
  $(".site-header__menu-btn").toggleClass("selected");

  if ($(".site-header__menu-btn").hasClass("selected")) {
    $(".site-header__menu-btn span:nth-child(1)").text("E");
    $(".site-header__menu-btn span:nth-child(2)").text("I");
    $(".site-header__menu-btn span:nth-child(3)").text("T");
  } else {
    $(".site-header__menu-btn span:nth-child(1)").text("M");
    $(".site-header__menu-btn span:nth-child(2)").text("N");
    $(".site-header__menu-btn span:nth-child(3)").text("U");
  }

  $(".site-header__nav").toggleClass("show");
});

// Handle sub menu

$(".site-header__sub-menu-title")
  .off("click")
  .on("click", function () {
    const arrow = $(this).find("svg");
    $(".bi").not(arrow).removeClass("rotated");
    arrow.toggleClass("rotated");

    const subMenu = $(this).next(".site-header__sub-menu");
    $(".site-header__sub-menu").not(subMenu).slideUp("fast");
    subMenu.slideToggle("fast");
  });

// Define media query
const mql = window.matchMedia("(min-width: 50em)");

// Add the event listener to the MediaQueryList object
mql.addEventListener("change", removeTransition);
function removeTransition(e) {
  if (e.matches) {
    $(".site-header__menu-btn").removeClass("selected");
    $(".site-header__nav").removeClass("show");

    $(".site-header__sub-menu").hide();
    $(".bi").removeClass("rotated");
  }
}

const images = {
  latest: {
    url: "images/story-images/flat-earth.png",
    alt: "flat earth in space",
  },
  top: {
    url: "images/story-images/google-insta.png",
    alt: "google logo and instagram logo",
  },
  insider: {
    url: "images/story-images/compost.png",
    alt: "compost and hands holding soil",
  },
};
const articlesLatest = [
  {
    title: "Confirmed: Earth is flat",
    author: "Willy",
    text: "After years of scientific research, the Earth is again, flat.",
  },
  {
    title: "AI is dying, here's why",
    author: "Yilong Ma",
    text: 'Elon Musk says, "It\'s not even that good".',
  },
  {
    title: "Covid-19 was a 'flu-ke'",
    author: "Juaceen Oppa",
    text: "Someone sneezed by accident.",
  },
];
const articlesTop = [
  {
    title: "Google seeking to acquire Instagram",
    author: "Mark Zuckerberg",
    text: "Google will know everything - and everyone.",
  },
  {
    title: "Meta sells Instagram",
    author: "Mark Zuckerberg",
    text: "This is surprising, but just wait for it...",
  },
  {
    title: "Meta seeking to acquire Google",
    author: "Mark Zuckerberg",
    text: "I own the world. I am God.",
  },
];
const articlesInsider = [
  {
    title: "Composting is actually bad for the environment",
    author: "Greta Thunberg",
    text: "The world is getting warmer, so all that compost is gonna stink even more.",
  },
  {
    title: "TikTok is confusing by design",
    author: "Sara Morrison",
    text: "Addictive and fast-paced, the way China will take over the world.",
  },
  {
    title: "1 + 1 = 2",
    author: "Neel Degrass Tysun",
    text: "I've thought about this, long and hard.",
  },
];

// Latest Stories
const latestColumn = $("#latest");
articlesLatest.forEach(function (article) {
  let newArticle = `
  <section class="news-column-section">
  <article class="news-content">
  <h3><a href="#0">${article.title}</a></h3>
  <p>By <a href="#0">${article.author}</a></p>
  <p>${article.text}</p>
  </article>
  </section>
  `;

  latestColumn.append(newArticle);
});

// Top Stories
const topStoriesColumn = $("#top-stories");
articlesTop.forEach(function (article) {
  let newArticle = `
  <section class="news-column-section">
  <article class="news-content">
  <h3><a href="#0">${article.title}</a></h3>
  <p>By <a href="#0">${article.author}</a></p>
  <p>${article.text}</p>
  </article>
  </section>
  `;

  let image = `<img src="${images.top.url}" alt="${images.top.alt}">`;

  topStoriesColumn.append(newArticle);
});

// Insider Stories
const insiderColumn = $("#insider");
articlesInsider.forEach(function (article) {
  let newArticle = `
  <section class="news-column-section">
  <article class="news-content">
  <h3><a href="#0">${article.title}</a></h3>
  <p>By <a href="#0">${article.author}</a></p>
  <p>${article.text}</p>
  </article>
  </section>
  `;

  let image = `<img src="${images.insider.url}" alt="${images.insider.alt}">`;

  insiderColumn.append(newArticle);
});

// Add image to top article
function addImage({ latest, top, insider }) {
  // Latest image
  $("#latest .news-column-section:nth-child(2) .news-content").prepend(
    `<a href="#0" class="thumbnail"><img src="${latest.url}" alt="${latest.alt}"></a>`
  );
  // Top stories image
  $("#top-stories .news-column-section:nth-child(2) .news-content").prepend(
    `<a href="#0" class="thumbnail"><img src="${top.url}" alt="${top.alt}"></a>`
  );
  // Insider image
  $("#insider .news-column-section:nth-child(2) .news-content").prepend(
    `<a href="#0" class="thumbnail"><img src="${insider.url}" alt="${insider.alt}"></a>`
  );
}
addImage(images);
