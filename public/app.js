import {scheduleReview,dueCards} from "./scheduler.js";
const KEY="offline-flashcards-v1";
let cards=load();
const $=s=>document.querySelector(s);
function load(){try{return JSON.parse(localStorage.getItem(KEY)||"[]");}catch{return [];}}
function save(){localStorage.setItem(KEY,JSON.stringify(cards));render();}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const due=dueCards(cards);$("#count").textContent=due.length+" due · "+cards.length+" total";
 $("#deck").innerHTML=cards.map(c=>"<li><span><strong>"+escapeHtml(c.front)+"</strong><small>Box "+c.box+"</small></span><button data-delete='"+c.id+"' aria-label='Delete card'>Delete</button></li>").join("");
 const card=due[0];
 $("#study-card").innerHTML=card?"<h3>"+escapeHtml(card.front)+"</h3><button id='reveal'>Reveal answer</button><p id='answer' hidden>"+escapeHtml(card.back)+"</p>":"<p class='muted'>No cards due. Add a card or come back later.</p>";
 $("#ratings").hidden=!card;
 $("#reveal")?.addEventListener("click",()=>{$("#answer").hidden=false;});
}
$("#card-form").addEventListener("submit",e=>{e.preventDefault();const front=$("#front").value.trim(),back=$("#back").value.trim();if(!front||!back)return;cards.push({id:crypto.randomUUID(),front,back,box:1,dueAt:Date.now(),createdAt:Date.now()});e.target.reset();save();});
$("#ratings").addEventListener("click",e=>{const rating=e.target.dataset.rating;if(!rating)return;const due=dueCards(cards);if(!due.length)return;const card=due[0];cards=cards.map(c=>c.id===card.id?scheduleReview(c,rating):c);save();});
$("#deck").addEventListener("click",e=>{const id=e.target.dataset.delete;if(id){cards=cards.filter(c=>c.id!==id);save();}});
$("#export").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(cards,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="flashcards.json";a.click();URL.revokeObjectURL(a.href);});
$("#import").addEventListener("change",async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data)||data.some(c=>typeof c.front!=="string"||typeof c.back!=="string"))throw new Error("Invalid deck");cards=data.map(c=>({...c,id:c.id||crypto.randomUUID(),box:Number(c.box)||1,dueAt:Number(c.dueAt)||Date.now()}));save();}catch{alert("Could not import this JSON deck.");}e.target.value="";});
render();
