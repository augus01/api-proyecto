let charactersSW = [];
let photos = [
    {
        name: "Luke Skywalker",
        img: "./sources/img/characters/luke-skywalker.jpeg"
    },
    {
        name: "C-3PO",
        img: "./sources/img/characters/C-3PO.jpeg"
    },
    {
        name: "R2-D2",
        img: "./sources/img/characters/r2-d2.jpg"
    },
    {
        name: "Darth Vader",
        img: "./sources/img/characters/dar-vader.jpg"
    },
    {
        name: "Leia Organa",
        img: "./sources/img/characters/leia-organa.jpeg"
    },
    {
        name: "Owen Lars",
        img: "./sources/img/characters/owen-lores.jpeg"
    },
    {
        name: "Beru Whitesun lars",
        img: "./sources/img/characters/beru-whitesun-lars.jpeg"
    },
    {
        name: "R5-D4",
        img: "./sources/img/characters/R5-D4.jpeg"
    },
    {
        name: "Biggs Darklighter",
        img: "./sources/img/characters/Biggs-Darklighter.jpeg"
    },
    {
        name: "Obi-Wan Kenobi",
        img: "./sources/img/characters/Obi-Wan-Kenobi.jpeg"
    }];
let sectionCharacters = document.querySelector("#container-characters");
let buscador = document.querySelector("#buscar");




buscador.addEventListener("keyup", (evento) => {
    sectionCharacters.innerHTML = ""
    let valorEncontrado = evento.target.value.toLocaleLowerCase()
    let encontrado = charactersSW.filter(({ name }) =>
        name.toLocaleLowerCase().includes(evento.target.value.toLocaleLowerCase())
    );
    imprimirCharacters(encontrado)
    if (valorEncontrado) {
        console.log(valorEncontrado)
    }
});

let imprimirCharacters = (characters) => {
    console.log(characters)
    characters = characters.map(character => {
        let hasPhoto = photos.find(photo => (
            character.name === photo.name
        ))
        
        let merge = {...character,...hasPhoto}
        return merge
    })
    characters.forEach(element => {
        let divContainer = document.createElement("div");
        let nombrePrincipal = document.createElement("div");
        let divContainerDatos = document.createElement("div");
        let imgCharacters = document.createElement("div");
        let datosCharacters = document.createElement("div");
        let nombreSecundario = document.createElement("div");
        let añoNacimiento = document.createElement("span");
        let genero = document.createElement("span");
        let colorOjos = document.createElement("span");
        let colorCabello = document.createElement("span");
        let charaImg = document.createElement("img")

        divContainer.classList.add("container-character");
        nombrePrincipal.classList.add("nombre-principal")
        divContainerDatos.classList.add("container-datos")
        imgCharacters.classList.add("imagen-character");
        datosCharacters.classList.add("datos-character");
        nombreSecundario.classList.add("datos-name")
        añoNacimiento.classList.add("datos-texto")
        genero.classList.add("datos-texto")
        colorOjos.classList.add("datos-texto")
        colorCabello.classList.add("datos-texto")

        nombrePrincipal.textContent = element.name
        nombreSecundario.textContent = element.name;
        charaImg.setAttribute("src", `${element.img}`)  
        genero.textContent = `Gender: ${element.gender}`
        añoNacimiento.textContent = `Year of birth: ${element.birth_year}`
        colorOjos.textContent = `Eye color: ${element.eye_color}`
        colorCabello.textContent = `Hair color: ${element.hair_color}`

        sectionCharacters.appendChild(divContainer);
        divContainer.appendChild(nombrePrincipal)
        divContainer.appendChild(divContainerDatos)
        divContainerDatos.appendChild(imgCharacters)
        imgCharacters.appendChild(charaImg)
        divContainerDatos.appendChild(datosCharacters)
        datosCharacters.appendChild(nombreSecundario)
        datosCharacters.appendChild(genero)
        datosCharacters.appendChild(añoNacimiento)
        datosCharacters.appendChild(colorOjos)
        datosCharacters.appendChild(colorCabello)


    })
};

fetch('https://swapi.dev/api/people/?format=json')
    .then(res => res.json())
    .then(results => (charactersSW = results.results))
    .then(() => imprimirCharacters(charactersSW))


