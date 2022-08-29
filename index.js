class Bender {
  constructor(name,element){
    this.name = name;
    this.element = element;
  }

  describe () {
    return `${this.name} bends ${this.element}.`
  }
}

class Nation {
  constructor(name){
    this.name = name;
    this.benders =[];
  }

  addBender(bender){
    if (bender instanceof Bender) {
      this.benders.push(bender);
    } else {
      throw new Error (`You can only add an instance of bender. Argument is not a bender: ${bender}`);
    }
  }
  
  describe (){
    return `${this.name} has ${this.benders.length} benders.`;
  }
}

class Menu {
  constructor() {
    this.nations=[];
    this.selectedNation = null;
  }

  start (){
    let selection = this.showMainMenuOptions();
    
    while (selection !=0){
      switch (selection) {
        case '1':
          this.createNation();
          break;
        case '2':
          this.viewNation();
          break;
        case '3':
          this.deleteNation();
          break;
        case '4':
          this.displayNations();
          break;
        default:
            selection = 0;
      }
selection = this.showMainMenuOptions();
    }

    alert ("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt (`
    0) exit
    1) create new nation 
    2) view nation
    3) delete nation
    4) display all nations
    `); 
  }

  showNationMenuOptions(nationInfo){
    return prompt (`
    0) back
    1) create bender 
    2) delete bender
    --------------------
    ${nationInfo}
  `); 
}
 
  displayNations() {
    let nationString = '';
    for (let i=0; i< this.nations.length; i++){
      nationString += i + ')' + this.nations[i].name + '\n';
    }
    alert(nationString);
  }

  createNation() {
    let name = prompt ('Enter name for new nation')
    this.nations.push(new Nation(name));
  }

  viewNation() {
    let index = prompt("Enter the index of the nation you wish to view:");
    if (index > -1 && index < this.nations.length) {
      this.selectedNation = this.nations[index];
      let description = 'Nation Name: ' + this.selectedNation.name + '\n';
      
      for (let i = 0; i < this.selectedNation.benders.length; i++) {
        description += i + ') ' + this.selectedNation.benders[i].name 
        + ' - ' + this.selectedNation.benders[i].element + '\n';
      }
    
      let selection = this.showNationMenuOptions(description);
      switch (selection) {
        case '1': 
          this.createBender();
          break;
        case '2':
          this.deleteBender();
      }
    }  
  }

  deleteNation(){
    let index= prompt ("Enter the index of the nation you wish to delete")
    if (index >-1 && index < this.nations.length){
      this.nations.splice(index,1);
    }
  }
  createBender(){
    let name = prompt ('Enter Name for new bender');
    let element = prompt ('Enter element for new bender:');
    this.selectedNation.benders.push(new Bender(name,element));
  }

  deleteBender(){
    let index = prompt ('Enter the index of the bender you wish to delte:');
    if (index >-1 && index < this.selectedNation.benders.length){
      this.selectedNation.benders.splice(index,1);
    }
  }
} 

let menu = new Menu ();
menu.start();