//Opgave 1
const person = {
    navn: "HC",
    alder: "27",
    job: "studerende",
    beskrivelse: function() {
        return person.navn + " " + person.alder + " " + person.job
    }
    
}
console.log(person);
//Opgave 2
console.log(person.beskrivelse());
//Opgave 3
const person2 = {
    navn: "person2",
    alder: "45",
    job: "job"
}

const person3 = {
    navn: "person3",
    alder: "95",
    job: "job"
}

const person4 = {
    navn: "person4",
    alder: "67",
    job: "job"
}

let personer =[person, person2, person3, person4]

personer.forEach((element) => console.log(element.navn))

//Opgave 4

const speedDemon = {
    mærke: "peugeot",
    model: "107",
    år: "2008"
}

const bilejer = {
    navn: "HC",
    alder: "27",
    bil: speedDemon
}
console.log(bilejer.bil)

//Opgave 5

const copy = Object.assign({}, person, {alder: "30"})
console.log(copy);
console.log(person);









    
