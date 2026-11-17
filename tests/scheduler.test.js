import test from "node:test";
import assert from "node:assert/strict";
import {scheduleReview,dueCards} from "../public/scheduler.js";
const DAY=86400000;
test("good advances one box",()=>{const card=scheduleReview({box:1,dueAt:0},"good",1000);assert.equal(card.box,2);assert.equal(card.dueAt,1000+3*DAY);});
test("again resets box and schedules a short retry",()=>{const card=scheduleReview({box:4},"again",500);assert.equal(card.box,1);assert.equal(card.dueAt,600500);});
test("dueCards filters future cards",()=>assert.equal(dueCards([{dueAt:0},{dueAt:20}],10).length,1));
