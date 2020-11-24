function calculateAge(birthyr, currentyr){
    currentyr = new Date().getFullYear();
    var age1 = currentyr - birthyr
        age2 = currentyr - birthyr - 1
    ;
    console.log("You are either "+age1+" or "+age2);
  }
  calculateAge(1993);
  calculateAge(1986);
  calculateAge(1950);