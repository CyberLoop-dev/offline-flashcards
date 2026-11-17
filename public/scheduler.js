const DAY=24*60*60*1000;
export function scheduleReview(card,rating,now=Date.now()){
 let box=Number(card.box)||1;
 if(rating==="again") return {...card,box:1,dueAt:now+10*60*1000};
 if(rating==="good") box=Math.min(5,box+1);
 else if(rating==="easy") box=Math.min(5,box+2);
 else throw new Error("rating must be again, good, or easy");
 const days=[0,1,3,7,14,30];
 return {...card,box,dueAt:now+days[box]*DAY};
}
export function dueCards(cards,now=Date.now()){return cards.filter(card=>(card.dueAt||0)<=now);}
