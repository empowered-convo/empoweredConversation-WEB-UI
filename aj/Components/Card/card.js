class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
      
        if(this.tabData == 'all'){
            this.cards = document.querySelectorAll('.team-member');
        } else {
            this.cards = document.querySelectorAll(`.team-member[data-tab='${this.tabElement.dataset.tab}']`);
        }
  
    this.cards = Array.from(this.cards).map( (card) => new TabCard(card) );
    this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
        console.log('works?');
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach( function(rmv) {
            rmv.className = rmv.className.replace(' active-tab', '');
    })
  
    const cards = document.querySelectorAll('.team-member');
    console.log(cards);
    cards.forEach( function(card) {
        card.style.display = "none";
    })
  
    this.tabElement.className += ' active-tab';
    this.cards.forEach(card => card.selectCard());
    }
  }
  
class TabCard {
    constructor(cardElement){
        this.cardElement = cardElement;
        console.log('connected?');
    }
    selectCard(){
        this.cardElement.style.display = "flex";
    }
  }
  

  
let tabs = document.querySelectorAll('.tab');
tabs.forEach( (tab) => new TabLink(tab));

console.log(tabs);