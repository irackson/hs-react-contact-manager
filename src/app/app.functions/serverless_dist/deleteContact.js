/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/ // The require scope
/******/var t={
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n:e=>{
/******/var r=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return t.d(r,{a:r}),r;
/******/},
/******/ // define getter functions for harmony exports
/******/d:(e,r)=>{
/******/for(var o in r)
/******/t.o(r,o)&&!t.o(e,o)&&
/******/Object.defineProperty(e,o,{enumerable:!0,get:r[o]})
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
const r=require("axios");var o=t.n(r);// ./serverless_src/deleteContact.ts
const a=async({parameters:t})=>{const{id:e}=t;if(!e||"string"!=typeof e||!e.trim())throw Error("A valid contact id must be provided to perform a delete");const r=process.env.PRIVATE_APP_ACCESS_TOKEN_SECRET;if(!r)throw Error("Missing PRIVATE_APP_ACCESS_TOKEN_SECRET");const a=`https://api.hubapi.com/crm/v3/objects/contacts/${e}`;try{const t=await o().delete(a,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},validateStatus:()=>!0});if(204!==t.status)throw Error(`Failed to delete contact. Expected status 204, but got ${t.status}`);return{success:!0}}catch(t){throw Error(`Failed to delete contact: ${t}`)}};module.exports=e})
/******/();