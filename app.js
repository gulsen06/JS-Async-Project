//! bütün fonksiyonlarda api den gelen verileri görebilmek için global e boş bir dizi açıyoruz ve verileri bu diziye atarak herkesin ulaşabilmesini sağlıyoruz
// let showList = [];
//!ilk ekrandaki resimleri api den çekiyoruz (search meal by name)

//www.themealdb.com/
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//   .then((res) => res.json())
//   .then((data) => {
//     showList = data.meals;
//     ekranaBastir(showList);
//   });
// function ekranaBastir(veri) {
//   document.querySelector(".food").innerHTML = "";
//   veri.forEach((yemek) => {
//     document.querySelector(".food").innerHTML += ` <div class="col-md-3 ">

//   <p> ${yemek.strMeal}</p>
//   <img style=width:200px src= ${yemek.strMealThumb}>
//           </div>`;
//   });
// }

//!arama inputunda arama yapma (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)
// document.querySelector("input").oninput = (e) => {
// console.log(e.target.value);
// console.log(document.querySelector("input").value);

//   let yeniDizi = showList.meals.filter((a) =>
//     a.strMeal.includes(e.target.value)
//   );

//   ekranaBastir(yeniDizi);
// };

//! bütün fonksiyonlarda api den gelen verileri görebilmek için global e boş bir dizi açıyoruz ve verileri bu diziye atarak herkesin ulaşabilmesini sağlıyoruz
let showList = [];

//!ilk ekrandaki resimleri api den çekiyoruz (search meal by name)

//www.themealdb.com/

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    showList = data;
    console.log(showList);
    ekranaBastir(showList.meals);
  });

function ekranaBastir(veri) {
  document.querySelector(".food").innerHTML = "";

  veri.forEach((yemek) => {
    document.querySelector(".food").innerHTML += ` <div class="col-md-3 ">
        
<p> ${yemek.strMeal}</p>
<img style=width:200px src= ${yemek.strMealThumb}>
        </div>`;
  });
}

//!arama inputunda arama yapma (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("input").oninput = (e) => {
  // console.log(e.target.value);
  // console.log(document.querySelector("input").value);

  let yeniDizi = showList.meals.filter((a) =>
    a.strMeal.includes(e.target.value)
  );

  ekranaBastir(yeniDizi);
};

//!bayraklara tıklanınca, tıklanan bayrağın yemekleri ekrana gelsin
const ulkeler = document.querySelectorAll(".ülke");
ulkeler.forEach((ülke) => {
  ülke.onclick = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ülke.id}`)
      .then((res) => res.json())
      .then((data) => ekranaBastir(data.meals));
  };
});
