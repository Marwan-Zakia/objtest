'use strict'
// let labB = document.getElementById('test6')
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let japan = {
//   city: 'konami',
//   minCust: 20,
//   maxCust: 60,
//   agvCookie: 3.3,
//   total: 0,
//   cookiesperhour: [],
//   getRandomCustomer: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
//       this.cookiesperhour.push(cookies);

//       this.total += cookies;

//     }

//   },

//   render: function () {
//     let h2 = document.createElement('h2');
//     labB.appendChild(h2);
//     h2.textContent = this.city;
//     let ul = document.createElement('ul');
//     labB.appendChild(ul);

//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]} for ${this.cookiesperhour[i]}`


//     }

//     let total = document.createElement('li')
//     ul.appendChild(total)
//     total.textContent = `the total is ${this.total} `
//   }
// }
// japan.getRandomCustomer();
// japan.render();







// function getRandomCustomer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


let labA = document.getElementById('test7');

function place(city, min, max, avg) {
  this.city = city;
  this.minCust = min;
  this.maxCust = max;
  this.agvCookie = avg;
  this.cookiesperhour = [];
  this.total = 0;
  place.allcookies.push(this);



}
place.allcookies = [];

place.prototype.getRandomCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

    this.cookiesperhour.push(cookies);

    this.total += cookies;
  }


}
place.prototype.render = function () {
  let tr = document.createElement('tr');
  labA.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.city;

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesperhour[i];

  }
  let total = document.createElement('th');
  tr.appendChild(total);
  total.textContent = this.total;



};


let konami = new place('konami', 23, 55, 6.7);
let canada = new place('canada', 20, 60, 3.8);


makeTableHeader()
konami.getRandomCustomer();
konami.render();

canada.getRandomCustomer();
canada.render();

makeFooter();


function makeTableHeader() {
  let tr = document.createElement('tr');
  labA.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Ctiy';

  for (let i = 0; i < hours.length; i++) {
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hours[i];
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily totals';
}




function makeFooter() {
  let tr = document.createElement('tr');
  labA.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'totals';


  let hourlyTotal = 0;
  let totaloftotals = 0;
  for (let i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (let j = 0; j < place.allcookies.length; j++) {
      let total = place.allcookies[j].cookiesperhour[i];

      hourlyTotal += total;
      totaloftotals += total;

    }
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hourlyTotal;
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = totaloftotals;


}



function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}