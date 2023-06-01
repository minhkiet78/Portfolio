const listSkills = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "ReactJs",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    title: "VueJs",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    title: "Redux",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    title: "HTMl",
  },
  {
    image: "https://www.pngkey.com/png/full/377-3771917_scss-logo.png",
    title: "SASS",
  },
  {
    image: "https://cdn.kibrispdr.org/data/632/html-css-logo-25.png",
    title: "CSS",
  },
  {
    image:
      "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
    title: "Javascript",
  },
  {
    image:
      "https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+typescript-1324451507894042344.png",
    title: "Typescript",
  },
  {
    image: "https://mauricius.dev/images/jquery.png",
    title: "Jquery",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    title: "Bootstrap",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    title: "NodeJs",
  },
  {
    image:
      "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png",
    title: "MongoDB",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w",
    title: "API",
  },
  {
    image:
      "https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png",
    title: "SQL",
  },
  {
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    title: "Git",
  },
  {
    image:
      "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png",
    title: "Postman",
  },
  {
    image:
      "https://ww1.freelogovectors.net/wp-content/uploads/2021/08/figma-logo.png",
    title: "Figma",
  },
];

const listProjects = [
  {
    image: "product_1.jpg",
    name: "DAI-ICHI LIFE - CUNG ĐƯỜNG YÊU THƯƠNG 2023",
    description:
      "A website organizing running and sports events as well as online fitness activities for the community is being organized by Dai-ichi Life Vietnam (DLVN)",
    link: "https://cungduongyeuthuong.dai-ichi-life.com.vn/",
  },
  {
    image: "product_2.JPG",
    name: "App Livefit",
    description: "Irace’s number one online platform for sports training",
    link: "https://app.livefit.vn/",
  },
  {
    image: "product_3.jpg",
    name: "AddMe.vn",
    description:
      "A website that enables users to create personal information based on template designs",
    link: "https://addme.vn/",
  },
  {
    image: "product_4.jpg",
    name: "Gas sales management system",
    description: "A website that manages a nationwide gas distribution store",
    link: "http://donhangdev.crmdvs.vn",
  },
  {
    image: "product_6.jpg",
    name: "Music web",
    description: "A website to listen to music",
    link: "https://minhkiet78.github.io/music_player/",
  },
  {
    image: "product_5.jpg",
    name: "Polo Store",
    description: "A website that specializes in selling polo shirts",
    link: "https://github.com/minhkiet78/Polo_Store",
  },
];

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuMobile = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

const containerSkills = document.querySelector(".services .services-container");
const containerProducts = document.querySelector(
  ".portfolio .portfolio-container"
);

listSkills.map((item, idx) => {
  const boxItem = `<div class="services-box col-1" key=${idx}>
          <img
            src=${item.image}
          />
          <h3>${item.title}</h3>
        </div>`;
  containerSkills.innerHTML += boxItem;
});

listProjects.map((project, idx) => {
  const projectItem = `<div
          class="portfolio-box"
          style="background: url(./assets/products/${project.image})"
          key=${idx}
        >
          <div class="portfolio-layer">
            <h4>${project.name}</h4>
            <p>
              ${project.description}
            </p>
            <a href=${project.link} target="_blank"><i class="bx bx-link"></i></a>
          </div>
        </div>`;

  containerProducts.innerHTML += projectItem;
});

const btnTop = document.querySelector(".btn-top");
menuMobile.onclick = () => {
  menuMobile.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((nav) => {
        nav.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
    if (top > 1000) {
      btnTop.classList.add("active");
    } else {
      btnTop.classList.remove("active");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  menuMobile.classList.remove("bx-x");
  navBar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "40px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .btn-top",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const btnDownLoad = document.querySelector("#btn-dowload_cv");
btnDownLoad.addEventListener("click", function () {
  var anchor = document.createElement("a");
  anchor.setAttribute("href", "./assets/files/CV_NguyenMinhKiet.pdf");
  anchor.setAttribute("download", "");
  document.body.appendChild(anchor);
  anchor.click();
  anchor.parentNode.removeChild(anchor);
});
