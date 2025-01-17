function salary(){
  const rows = document.querySelectorAll("#tableOfEmploye tbody tr");
    rows.forEach(row => {
         if (salary > 15){
              row.classList.remove();
            }
            else {
              row.classList.add();
            }
    });
}

function experience(years){
  const rows = document.querySelectorAll("#tableOfEmploye tbody tr");
    rows.forEach(row => {
         if (experience > years){
              row.classList.remove();
            }
            else {
              row.classList.add();
            }
    });
}

function age(age1){
  const rows = document.querySelectorAll("#tableOfEmploye tbody tr");
    rows.forEach(row => {
         if (age > age1){
              row.classList.remove();
            }
            else {
              row.classList.add();
            }
    });
}