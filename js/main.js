/* PROJECTS */
const projects = document.querySelectorAll('.proj')
const projArr = []
for(proj of projects) {
   projArr.push(proj)
}

// sort array by ascending date
function sortArr(arr) {
   arr.sort( (a,b) => {
      if(a.dataset.date > b.dataset.date) { return 1 }
      if(a.dataset.date < b.dataset.date) { return -1 }
      return 0;
   })
}

// recreate the projects in the page ordered by ascending/descending date
function printSortedArr(t) {
   const projContainer = document.getElementById('projContainer')
   let newArr = projArr
   sortArr(newArr)
   if(t == 'desc') {
      newArr = newArr.reverse()
   }
   
   projContainer.innerHTML = ""
   for(proj of newArr) {
      projContainer.innerHTML += proj.outerHTML;
   }
}

/* FORM VALIDATION */

function validateForm(form) {
   const name = form.querySelector('#name').value;
   const email = form.querySelector('#email').value;
   const msg = form.querySelector('#message').value;

   if(name === '' || name === null) {
      //form.querySelector('#nome').style.border = "1px solid red"
      console.log('erro nome')
   }

   if(email === '' || email === null) {
      //form.querySelector('#email').style.border = "1px solid red"
      console.log('erro email')
   }

   if(msg === '' || msg === null) {
      //form.querySelector('#message').style.border = "1px solid red"
      console.log('erro mensagem')
   }
}