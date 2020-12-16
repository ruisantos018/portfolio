const projContainer = document.getElementById('projContainer')
const projects = document.querySelectorAll('.proj')

const projArr = []
for(proj of projects) {
   projArr.push(proj)
}

// sort projArr
function sortProj(t) {
   if(t === 'asc') {
      projArr.sort( (a,b) => {
         if(a.dataset.date > b.dataset.date) { return 1 }
         if(a.dataset.date < b.dataset.date) { return -1 }
         return 0;
      })
      printArr();
   } else if(t === 'desc') {
      projArr.sort( (a,b) => {
         if(a.dataset.date < b.dataset.date) { return 1 }
         if(a.dataset.date > b.dataset.date) { return -1 }
         return 0;
      })
      printArr();
   }
}

function printArr() {
   projContainer.innerHTML = ""
   for(proj of projArr) {
      projContainer.innerHTML += proj.outerHTML;
   }
}