import{ad as d,e as r}from"./vidstack-B1PqmCkk.js";import{k as i,l}from"./vidstack-DaFtTE-M.js";const m=i('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"></svg>');function p(n,s){const o=l(m);o.innerHTML=d,n.append(o);const e=document.createElement("span");e.classList.add("vds-google-cast-info"),n.append(e);const t=document.createElement("span");t.classList.add("vds-google-cast-device-name"),r(()=>{const{remotePlaybackInfo:c}=s,a=c();return a?.deviceName&&(t.textContent=a.deviceName,e.append("Google Cast on ",t)),()=>{e.textContent=""}})}export{p as insertContent};