const names = ["Carol", "Alice", "Bob", "John", "Jacob", "Paul", "Saul", "Peter", "Lidia", "Lisa", "Leslie"];
const occupations = ["writer", "programmer", "teacher", "doctor", "lawyer", "vet", "firefighter", "realtor"];
const maxPeople = 10;
const people = [
  {
    name: "Alice",
    occupation: "writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "teacher",
    price: 50,
  },
  {
    name: "Carol",
    occupation: "programmer",
    price: 70,
  },
];

const addPersonIntervalId = setInterval(addPerson, 1000);
render();


function render() {
    const freelancers = document.querySelector("#freelancers");
    const freelancerElements = people.map((person) => {
      const element = document.createElement("li");
      element.classList.add(person.name, person.occupation, person.price);
      element.textContent = `${person.name} - ${person.occupation} - $${person.price}`;
      return element;
    });
    averagePrice = average()

    document.getElementById("average").textContent = `The average starting price is $${averagePrice}`;
    freelancers.replaceChildren(...freelancerElements);

}

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 81) + 20

  people.push({ name, occupation, price });

  render();

  if (people.length >= maxPeople) {
    clearInterval(addPersonIntervalId);
  }
}

function average() {
  let sum = people.reduce((accumulator, person) => {
    return accumulator + person.price;
  }, 0); 
  return sum / people.length;
}