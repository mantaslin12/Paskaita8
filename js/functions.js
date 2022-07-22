// let pname = document.getElementById("firstName")
// pname.innerText = "Mantas Linka"

// let fSingers = document.getElementById("favoriteSingers")
// // fSingers.innerHTML = "Frank Sinatra, Michelle Gurevich, Koop, Biggie Smalls, jauti."
// let arr = ["Frank Sinatra", "Michelle Gurevich", "Koop" , "Biggie Smalls", "jauti."]
// let listOfArr = ''

// for (let i = 0; i <= 4; i++) {
//     listOfArr += "<p>" + arr[i] + "</p>";
// }
// fSingers.innerHTML = listOfArr


// task1 
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;

function func1(text) {
    let task1 = document.getElementById("task1") 
    task1.innerHTML = "<h1>" + text + "</h>"
}
func1 ("Mantas")

// task2
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function func2(text, num) {
    let task2 = document.getElementById ("task2");
    task2.innerHTML += "<h" + num + ">" + text + "</h" + num + ">";
}
func2("hehe", "2")
func2("hehe", "3")
func2("hehe", "4")
func2("hehe", "5")
func2("hehe", "6")
// task3
// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.

function func3() {
    let arr = randomString(100);
    console.log(str);
    let txt = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            txt += str[i];
        }else {
            if (tmp != "") {
                console.log("["+txt+"]");
                txt = "";
            }
        console.log(str[i]);
        }
        
    }
    return;
}
task3.innerHTML = func3();