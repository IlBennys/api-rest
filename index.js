const libreria = async function () {
  try {
    let libri = await fetch("https://striveschool-api.herokuapp.com/books")
    console.log(libri)
    if (libri.ok) {
      let data = await libri.json()
      console.log("data", data)

      let div = document.getElementById("riga")
      data.forEach((libro) => {
        div.innerHTML =
          div.innerHTML +
          `
          <div class="col-3 my-4 d-xl-flex justify-content-center caramella" >
          <div class="card" style="width: 18rem; border: aqua solid 2px">
          <img src=${libro.img} class="card-img-top" alt="copertina">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${libro.title}</h5>
            <a href="#" class="btn btn-primary">${libro.price}$</a>
            <a href="#" class="btn btn-primary mt-1" onclick="skippa(event)">SKIP</a>
            
          </div>
        </div>
        </div>
        `
      })
    } else {
      console.log("Qualcosa è andato storto con la nostra chiamata!")
    }
  } catch (error) {
    console.log(error)
  }
}

libreria()
const skippa = (e) => {
  let carta = document.querySelector(".caramella")
  carta.remove()
  console.log(typeof carta)
}
