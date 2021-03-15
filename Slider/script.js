var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jfif",
    link:
      "https://www.webtekno.com/bir-tasarimci-bmw-i8-in-hayali-m-versiyonunu-tasarladi-h75189.html#!",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jfif",
    link: "https://tr.motor1.com/news/265267/yeni-mazda-cx-3-soylentiler/",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jfif",
    link: "https://www.euroncap.com/tr/results/volvo/s60/34631",
  },
  {
    name: "Mercedes Benz",
    image: "img/mercedes.jfif",
    link: "http://tehad.org/2020/12/05/mercedes-benz-eqc-turkiyede/",
  },
  {
    name: "Audi TT",
    image: "img/audi.jfif",
    link:
      "https://tr.motor1.com/news/304139/audi-tt-rs-coupe-roadster-tanitim/",
  },
];

var index = 0;
var slidecount = models.length;
var interval;
var firstsettings = {
  duration: "1000",
  random: true,
};
init(firstsettings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(firstsettings);
  });
});

document.querySelector(".changeSetting").addEventListener("click", function () {
  let settings = {
    duration: String(document.querySelector("#txtDuration").value * 1000),
    random: Boolean(
      document.querySelector("#chkRandom").hasAttribute("checked")
    ),
  };
  firstsettings = settings;
  console.log(firstsettings);
  clearInterval(interval);
  init(firstsettings);
});

document
  .querySelector(".changeSetting")
  .addEventListener("mouseup", function () {
    init(firstsettings);
  });

document.querySelector("#chkRandom").addEventListener("click", function () {
  let chk = document.querySelector("#chkRandom");
  if (chk.hasAttribute("checked")) {
    chk.removeAttribute("checked");
  } else {
    chk.setAttribute("checked", "");
  }
});

function changeSetting(settings) {
  init(settings);
}

function init(firstsettings) {
  var prev;

  interval = setInterval(function () {
    if (firstsettings.random) {
      do {
        index = Math.floor(Math.random() * slidecount);
      } while (index == prev);
      prev = index;
    } else {
      if (slidecount == index) {
        index = 0;
      }
      index++;
      console.log(index, firstsettings.duration);
      showSlide(index);
    }
  }, firstsettings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slidecount - 1;
  }
  if (i >= slidecount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
