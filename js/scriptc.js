let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
    let catsimgdiv = document.querySelector(".catsimgdiv")
    catsimgdiv.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json()) 
    .then((data) => {
        let catsimgurl = data[0].url
        let catsimgEl = document.createElement("img")
        catsimgEl.classList.add("showcase")
        catsimgEl.setAttribute('src', `${catsimgurl}`)
        let catsimgdiv = document.querySelector(".catsimgdiv")
        catsimgdiv.appendChild(catsimgEl)
    })
    .catch(err => console.log(err));
    
    let btn = document.createElement("button")
    btn.innerHTML = "Clear Picture"
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    btn.classList.add("clear")
    let button = document.querySelector(".button")
    button.appendChild(btn)

    const clearbtn = document.querySelector(".clear")
    clearbtn.addEventListener('click', function () {
        catsimgdiv.innerHTML = ''
        clearbtn.parentNode.removeChild(clearbtn)
    })
}



let generatebtn = document.querySelector('.generatebtn')
let animaltype = document.querySelector('#animaltype')
let numfacts = document.querySelector("#numfacts")

generatebtn.addEventListener("click", function(){
    let animalvalue = animaltype.value.toLowerCase()
    if (parseInt(numfacts.value) > 500){
        alert("Max value is 500!")
        return false;
    } else {
    function fetchfacts() {
        fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalvalue}&amount=1`)
        .then(response => response.text())
      .then(data => {
            let fact = JSON.parse(data).text
            console.log(fact)
            let para = document.createElement("p")
            para.classList.add("list-group-item")
            para.classList.add("text-dark")
            para.classList.add("p-3")
            let node = document.createTextNode(fact)
            para.appendChild(node)

            let facts = document.querySelector(".facts")
            facts.appendChild(para)
        })
        .catch(err => console.log(err))
    }

    let btn = document.createElement("button")
    btn.innerHTML = "Clear"
    btn.classList.add("btn")
    btn.classList.add("btn-danger")
    btn.classList.add("clear")
    let button = document.querySelector(".button")
    button.appendChild(btn)

    const clearbtn = document.querySelector(".clear")
    clearbtn.addEventListener('click', function () {
        let facts = document.querySelector(".facts")
        facts.innerHTML = ''
        clearbtn.parentNode.removeChild(clearbtn)
    })
    for (let i = 0; i<numfacts.value; i++){
        fetchfacts()
    }
}})