/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/ // The require scope
/******/var t={
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n:e=>{
/******/var o=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return t.d(o,{a:o}),o;
/******/},
/******/ // define getter functions for harmony exports
/******/d:(e,o)=>{
/******/for(var r in o)
/******/t.o(o,r)&&!t.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:o[r]})
/******/;
/******/},
/******/o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)
/******/,
/******/ // define __esModule on exports
/******/r:t=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(t,"__esModule",{value:!0})}
/******/},e={};
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
// ESM COMPAT FLAG
t.r(e),
// EXPORTS
t.d(e,{main:()=>/* binding */a});// external "axios"
const o=require("axios");var r=t.n(o);// ./serverless_src/deleteContact.ts
const a=async({parameters:t})=>{const{id:e}=t;if(!e||"string"!=typeof e||!e.trim())throw Error("A valid contact id must be provided to perform a delete");const o="pat-na1-4dd316d2-5666-4a2c-af82-a1d77cecd1e4";const a=`https://api.hubapi.com/crm/v3/objects/contacts/${e}`;try{const t=await r().delete(a,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},validateStatus:()=>!0});if(204!==t.status)throw Error(`Failed to delete contact. Expected status 204, but got ${t.status}`);return{success:!0}}catch(t){throw Error(`Failed to delete contact: ${t}`)}};module.exports=e})
/******/();