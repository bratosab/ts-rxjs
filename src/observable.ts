import { Observable } from "rxjs";

const ride = new Promise((resolve, reject) => {
  const arrived = true;

  if (arrived) {
    resolve("Je suis arrivé !");
  } else {
    reject("Je vais au lit, il est tard");
  }
});

// ride.then((value) => {
//   console.log(value);
// });


const ride$ = new Observable((observer) => {
    const arrived = true

    if(arrived) {
        observer.next("Je suis arrivé !")
        observer.next("Allez sortez !")
        observer.next("Je ne vais pas attendre toute la journée !")
        observer.next("Je m'en vais !")
    } else {
        throw "Je vais au lit, il est tard"
    }
})

let i = 0
ride$.subscribe((value) => {
    i++
    console.log(value, i)
})