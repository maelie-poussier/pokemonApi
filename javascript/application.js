// https://opendata.paris.fr/api/explore/v2.1/catalog/datasets?q=wifi

// déclarer une variable -> sélectionner le bouton
const btn = document.querySelector(".btn");
// On récupère la div list
const list = document.querySelector(".list");
// écouter le click du bouton

// déclarer la fonction async
const fetchData = async () => {
  try {
    // Récupérer les données de l'API -> fetch
    const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=10")
    // Transformer en json -> .json()
    const data = await response.json()
    console.log(data)
    // On itère sur l'array
    data.results.forEach((element) => {
      console.log(element)
      // On génère le html
      const paragraphe = `<p class="text"> ${element.lead_text} </p>`
      // const paragraphe =  document.createElement("p")
      // paragraphe.class =
      // paragraphe.innerText =
      // Afficher chaque element dans le html
      list.insertAdjacentHTML("beforeend", paragraphe)
    })
  } catch (erreur) {
    console.error(erreur.message)
  }
}

btn.addEventListener("click", () => {
  // Appeler la fonction
  fetchData()
})

// Pour une barre recherche :
  // -> créer un form avec input + bouton dans le html
  // -> écouter le submit du formulaire

