const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CwJYyfHo.js","./webworkerAll-Bs7DnPt2.js","./CanvasPool-BaDOV-Zs.js","./colorToUniform-DARPFSuC.js","./_commonjsHelpers-CqkleIqs.js","./App-Bhb1oSHh.js","./index-hdCgiMmG.js","./index-B5safSb2.css","./WebGPURenderer-8eQMtros.js","./SharedSystems-BDmdJiZF.js","./WebGLRenderer-CtIkog7u.js"])))=>i.map(i=>d[i]);
import{S as M,r as p,w as C,u as lt,M as rt,q as dt,v as Fe,T as hs,x as Tf,y as Rf,z as G0,l as Fl,p as Je,b as N0,A as B0,B as $0,C as H0,D as W0,E as V0,j as nn,n as Pf,h as q0,s as Y0,t as si,c as Ze,F as K0,f as lo,o as j0,Z as El,i as Ao,G as zf,H as Yn,d as Vr,g as ai,m as If,V as Of,I as kl,e as Ff,a as Q0}from"./App-Bhb1oSHh.js";import{_ as ds}from"./index-hdCgiMmG.js";import{g as Ef}from"./_commonjsHelpers-CqkleIqs.js";const q={},ve={},xe={},vt={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},fr={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let Ia=null;const yi=e=>fr[Ia&&Ia[e]||e]||fr.fire,yn=e=>{const t=yi(e);return t[Math.random()*t.length|0]};let tr=[],Co=[],gi=[],pn=[],ms=1,Oa=1;function Wi(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function kf(){tr=[],Co=[],gi=[],pn=[]}function O(e,t,n,r,o,i,a,s,l=2,u=0,f=!1,c=.94){ms<1&&Math.random()>ms||tr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:c})}function Jt(e,t,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;O(e,t,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,a*(.6+Math.random()*.6),yn(r),u+(Math.random()<.3?1:0),4,l)}}function ot(e){M.cam.shake=Math.max(M.cam.shake,e*Oa)}function A(e){return e.t=0,Co.push(e),e}function Rr(e){e.t=0,gi.push(e)}const au={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},lu=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),Z0=new Set(["gato","zorra"]),J0={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function uu(e){const t=yi(e.col&&fr[e.col]?e.col:"gold"),n=e.uid?lt(e.uid):null;if(e.type==="windup"){vt.sfx(J0[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";A({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=lt(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,r&&e.radius)Lt(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(o&&e.radius)Lt(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!o&&e.range){const c=e.ex-u,h=e.ey-f,d=Math.hypot(c,h)||1,m=Math.min(e.range,d)*a,[y,g]=C(u,f,.1),[x,b]=C(u+c/d*m,f+h/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(y,g),i.lineTo(x,b),i.stroke(),i.setLineDash([])}Lt(u,f,.35+.35*a,t[0],null,2)}}),A({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=lt(s.uid),[u,f]=C(l?l.x:s.x,l?l.y:s.y,.75);for(let c=0;c<10;c++){const h=c/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[c%t.length],i.fillRect(Math.round(u+Math.cos(h)*d-2),Math.round(f+Math.sin(h)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(Jt(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),vt.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(A({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const a=lt(i.uid);if(!a||!a.channel&&o>.05){i.t=i.dur;return}const s=e.radius||1.2,l=M.T;r.globalAlpha=.7,Lt(i.x,i.y,s,t[1],null,3),Lt(i.x,i.y,s*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[c,h]=C(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(c-3),Math.round(h-3),6,6)}n&&Math.random()<.5&&O(n.x,n.y,.9,p(-.5,.5),p(-.5,.5),p(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),vt.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?A({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(Jt(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),vt.sfx("deny",e.x,e.y,.4)):Jt(e.x,e.y,.6,e.col&&fr[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function td(e){const t=yi(e.type.slice(5)&&fr[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;A({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(a,s,l){const[u,f]=C(l.x,l.y,.55),c=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-c/2),Math.round(f-c/2),Math.round(c),Math.round(c)),a.fillStyle=t[1];for(let h=0;h<6;h++){const d=h/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*c),Math.round(f+Math.sin(d)*c*.7),3,3)}}});for(let a=0;a<10;a++)O(o,i,.5,n*p(1.5,4)+p(-.8,.8),r*p(1.5,4)+p(-.8,.8),p(0,1),.3,t[a%t.length],3,0,!0);ot(1.5)}function ed(){const e=M.game;window.SIM.HEROES;for(const t of e.fx){if(t.done)continue;t.done=!0;const n=!e.player||t.uid===e.player.id||t.uid===void 0;if(ms=n?1:.4,Oa=n?1:.3,t.type==="channel"||t.type==="channel_tick"||t.type==="channel_end"){const s=t.hero&&t.key?q[t.hero+"_"+t.key]:void 0;if(t.type==="channel"&&vt.sfx("ab_"+t.hero+"_"+t.key,t.x,t.y,1),s)try{if(s(t)!==!1)continue}catch(l){console.error(l)}uu(t);continue}if(t.type==="windup"||t.type==="windup_cancel"){uu(t);continue}typeof t.type=="string"&&t.type.startsWith("cast_")&&td(t);const r=t.key&&t.hero&&t.type!=="hit"&&t.type!=="transform"?t.hero+"_"+t.key:"",o=r?q[r]:void 0,i=r&&t.type!=="heal"&&!t.impact,a=r?i?"ab_"+r:t.impact&&!o?au[t.type]:null:au[t.type];if(t.key==="R"&&t.hero&&t.type!=="hit"&&vt.babble(t.hero,"ult",t.x,t.y),a&&vt.sfx(a,t.x,t.y,t.type==="levelup"&&e.player&&t.uid!==e.player.id?.4:1),o)try{if(o(t)!==!1)continue}catch(s){console.error(s)}switch(t.type){case"fire":{A({type:"cone",x:t.x,y:t.y,ux:t.ux,uy:t.uy,range:t.range,angle:t.angle,dur:.45});for(let s=0;s<90;s++){const l=Math.atan2(t.uy,t.ux)+(Math.random()-.5)*t.angle*2,u=(.4+Math.random())*t.range*2.4;O(t.x+t.ux*.4,t.y+t.uy*.4,.35,Math.cos(l)*u,Math.sin(l)*u,Math.random()*1.2,.5,yn("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Rr({type:"scorch",x:t.x+t.ux*t.range*.5,y:t.y+t.uy*t.range*.5,r:t.range*.5,dur:4}),ot(3);break}case"quake":{A({type:"cracks",x:t.x,y:t.y,ux:t.ux||1,uy:t.uy||0,range:t.range,angle:t.angle,dur:1.2,seed:Math.random()*99}),A({type:"ring",x:t.x,y:t.y,r:t.range,dur:.4,col:"#f4e0c0",w:5});for(let s=0;s<50;s++){const l=Math.random()*6.28,u=Math.random()*t.range*2.5;O(t.x,t.y,.1,Math.cos(l)*u,Math.sin(l)*u,1+Math.random()*2,.7,yn("quake"),3,6,!1)}ot(t.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const s=t.type==="firering"?"fire":t.type==="healring"?"heal":t.type;A({type:"ring",x:t.x,y:t.y,r:t.radius,dur:.45,col:yi(s)[1],w:7}),A({type:"ring",x:t.x,y:t.y,r:t.radius*.7,dur:.6,col:yi(s)[0],w:3,delay:.08}),t.type==="roar"&&(A({type:"ring",x:t.x,y:t.y,r:t.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),ot(8)),t.type==="firering"&&(A({type:"flash",x:t.x,y:t.y,r:t.radius,dur:.25,col:"rgba(255,200,80,"}),ot(9),Rr({type:"scorch",x:t.x,y:t.y,r:t.radius*.9,dur:6})),t.type==="frost"&&Rr({type:"frost",x:t.x,y:t.y,r:t.radius,dur:3}),t.type==="splash"&&Rr({type:"wet",x:t.x,y:t.y,r:t.radius*.8,dur:2.5});const l=t.type==="spores"?40:90;for(let u=0;u<l;u++){const f=Math.random()*Math.PI*2,c=t.radius*(1.6+Math.random()*1.6);O(t.x,t.y,.2,Math.cos(f)*c,Math.sin(f)*c,Math.random()*2,.6,yn(s),t.type==="spores"?5:3,3,t.type!=="spores"&&t.type!=="splash")}if(t.type==="spores")for(let u=0;u<14;u++)A({type:"puff",x:t.x+p(-1,1)*t.radius*.7,y:t.y+p(-1,1)*t.radius*.7,r:p(14,26),dur:p(.7,1.3),col:[140,210,90]});break}case"heal":A({type:"pillar",x:t.x,y:t.y,dur:.8,col:[110,255,140]});for(let s=0;s<16;s++)O(t.x+p(-.4,.4),t.y+p(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,yn("heal"),3,0,!0);break;case"shield":case"stoneskin":A({type:"bubble",uid:t.uid,x:t.x,y:t.y,dur:t.dur||3,col:t.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":A({type:"swirl",uid:t.uid,x:t.x,y:t.y,dur:t.dur||4});break;case"smoke":for(let s=0;s<12;s++)A({type:"puff",x:t.x+p(-.6,.6),y:t.y+p(-.6,.6),r:p(12,22),dur:p(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const s=t.type==="firedash"?"fire":"dust",l=t.ex||t.x+(t.ux||0)*(t.range||0),u=t.ey||t.y+(t.uy||0)*(t.range||0);for(let f=0;f<30;f++){const c=f/30;O(t.x+(l-t.x)*c+p(-.2,.2),t.y+(u-t.y)*c+p(-.2,.2),.15,p(-.5,.5),p(-.5,.5),p(.3,1.2),.5+c*.4,yn(s),4,0,s==="fire")}A({type:"streak",x:t.x,y:t.y,ex:l,ey:u,dur:.35,col:s==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const s=t.ex||t.x,l=t.ey||t.y;A({type:"flash",x:t.x,y:t.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),A({type:"flash",x:s,y:l,r:1.1,dur:.3,col:"rgba(220,170,255,"}),A({type:"streak",x:t.x,y:t.y,ex:s,ey:l,dur:.3,col:"#d8a8ff"}),Jt(t.x,t.y,.4,"arcane",16,2,.5),Jt(s,l,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let s=0;s<20;s++){const l=Math.random()*6.28,u=Math.random()*t.radius;O(t.x+Math.cos(l)*u,t.y+Math.sin(l)*u,.1,0,0,2,.6,yn("arcane"),2,0,!0)}break;case"starfall":for(let s=0;s<18;s++)A({type:"meteor",x:t.x+p(-1,1)*t.radius*.8,y:t.y+p(-1,1)*t.radius*.8,dur:.35,delay:s*.02});A({type:"flash",x:t.x,y:t.y,r:t.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),A({type:"ring",x:t.x,y:t.y,r:t.radius,dur:.5,col:"#e2b8ff",w:7}),Jt(t.x,t.y,.2,"arcane",70,6,.8,3),Rr({type:"scorch",x:t.x,y:t.y,r:t.radius*.8,dur:5,col:[60,30,90]}),ot(10);break;case"slash":A({type:"xslash",x:t.x,y:t.y,dur:.35}),Jt(t.x,t.y,.5,"blood",20,4,.5,2,!1),Jt(t.x,t.y,.5,"slash",14,4,.4),ot(7);break;case"hit":{if(t.hero&&(t.kind==="hero"||t.proj)){const l=t.proj&&t.pkey||"A";if(l==="A"&&xe[t.hero]){if(Z0.has(t.hero)||vt.sfx("atk_"+t.hero,t.x,t.y,t.big?1:.8),!(t.proj&&lu.has(t.hero+"_A")))try{xe[t.hero](t)}catch(f){console.error(f)}break}if(l!=="A"&&lu.has(t.hero+"_"+l))break;const u=l!=="A"?q[t.hero+"_"+l+"_hit"]:void 0;if(u){vt.sfx("imp_"+t.hero+"_"+l,t.x,t.y,.9);try{u(t)}catch(f){console.error(f)}break}}const s=t.col&&fr[t.col]?t.col:t.hero==="dragon"?"fire":"slash";A({type:"spark",x:t.x,y:t.y,dur:.15,big:!!t.big,col:fr[s][0]}),Jt(t.x,t.y,.45,s,t.big?10:5,t.big?3:2,.35,1.5,!0,2),vt.sfx(t.big||t.skill?"hitbig":"hit",t.x,t.y,t.kind==="minion"?.35:t.kind==="monster"?.6:.8),t.skill&&ot(2);break}case"shoot":if(t.kind==="hero"&&t.hero){vt.sfx("shot_"+t.hero,t.x,t.y,.6);break}vt.sfx(t.proj==="arrow"?"arrow":t.proj==="tower"?"tower":t.proj==="spear"?"spear":"arcane",t.x,t.y,t.kind==="minion"?.3:.6);break;case"bite":A({type:"jaws",x:t.x,y:t.y,dur:.35}),Jt(t.x,t.y,.3,"bite",24,3,.5),ot(5);break;case"transform":{if(t.hero&&q[t.hero+"_T"]){vt.sfx("tf_"+t.hero,t.x,t.y,1);try{q[t.hero+"_T"](t)}catch(u){console.error(u)}break}const s=t.kind==="fire",l=s?[255,140,50]:[255,220,90];A({type:"pillar",x:t.x,y:t.y,uid:t.uid,dur:1.2,col:l}),A({type:"ring",x:t.x,y:t.y,r:2.6,dur:.7,col:s?"#ff9a3a":"#ffe070",w:6}),Jt(t.x,t.y,.6,s?"fire":"gold",70,5,.9,3,!0,4),ot(t.uid===(e.player&&e.player.id)?10:4),vt.sfx("roar",t.x,t.y,.8);break}case"levelup":A({type:"pillar",x:t.x,y:t.y,uid:t.uid,dur:1,col:[255,220,90]}),A({type:"ring",x:t.x,y:t.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":t.kind==="hero"?(t.sprite&&vt.babble(t.sprite,"die",t.x,t.y),Jt(t.x,t.y,.4,"smoke",22,2.5,.9,2,!1,4),A({type:"wisp",x:t.x,y:t.y,dur:1.5,team:t.team}),vt.sfx("death",t.x,t.y)):t.kind==="minion"?(Jt(t.x,t.y,.3,"smoke",8,1.5,.6,1,!1,3),vt.sfx("mdeath",t.x,t.y,.3)):t.kind==="monster"&&(Jt(t.x,t.y,.3,"spores",18,2.5,.8,2,!1,4),vt.sfx("mdeath",t.x,t.y,.5));break;case"towerdown":for(let s=0;s<26;s++){const l=Math.random()*6.28,u=p(1.5,5);O(t.x+p(-.3,.3),t.y+p(-.3,.3),p(.8,2.2),Math.cos(l)*u,Math.sin(l)*u,p(3,9),p(1.2,2),yn("stone"),Math.random()*4+4|0,14,!1,.97)}for(let s=0;s<14;s++)A({type:"puff",x:t.x+p(-1.2,1.2),y:t.y+p(-1.2,1.2),r:p(26,46),dur:p(1.2,2.2),col:[150,140,130]});A({type:"pillar",x:t.x,y:t.y,dur:.8,col:[255,200,120]}),Rr({type:"scorch",x:t.x,y:t.y,r:1.8,dur:30}),vt.say(t.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),vt.banner(t.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",t.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":t.type==="bossdown"&&vt.say(t.monster==="serpent"?"serpent":"boss"),Jt(t.x,t.y,1,t.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let s=0;s<30;s++)O(t.x,t.y,1,p(-4,4),p(-4,4),p(3,8),1.4,yn("stone"),5,12,!1);A({type:"flash",x:t.x,y:t.y,r:3,dur:.4,col:t.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),A({type:"ring",x:t.x,y:t.y,r:4,dur:.7,col:"#ffe0a0",w:8}),ot(14);break;case"killbanner":{const s=e.player,l=s&&t.uid===s.id;if(A({type:"wisp",x:t.x,y:t.y,dur:1.6}),Jt(t.x,t.y,.8,"gold",l?40:14,4,.9,3,!0,3),!t.hero)break;const u=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],f=t.big===1,c=t.big===2,h=t.dur||0,d=f?"first":t.skill>=2?"multi":c?"ace":h>=7?"godlike":h>=5?"unstoppable":h===4?"rampage":h===3?"spree":"kill",y=d==="multi"?u[Math.min(5,t.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[d],g=s&&t.team===s.team;vt.banner(y,g?"#7fd0ff":"#ff7a6a",t.hero,t.kind,!!(f||c||t.skill>=2||l));const x=s&&s.heroKey===t.kind&&s.dead&&t.team!==s.team,b=["","","double","triple","quadra","penta"];vt.say(d==="first"?"first_blood":d==="multi"?b[Math.min(5,t.skill)]:d==="kill"?x?"you_died":g?"kill":"ally_killed":d),l&&ot(6);break}case"runespawn":vt.say("rune");break;case"chrono":A({type:"custom",layer:"top",add:!0,dur:t.dur||3,x:t.x,y:t.y,draw(s,l,u){s.globalAlpha=.35*(l>.9?(1-l)*10:1),Lt(u.x,u.y,t.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[f,c]=C(u.x,u.y,0);for(let h=0;h<12;h++){const d=h/12*6.283;s.fillStyle="#ffffff",s.fillRect(Math.round(f+Math.cos(d)*t.radius*46),Math.round(c+Math.sin(d)*t.radius*23),3,3)}}}),ot(5);break;case"hook_pull":A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.35,col:"#d0c0a0"}),Jt(t.x,t.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":A({type:"streak",x:t.x,y:t.y-.01,ex:t.x,ey:t.y,dur:.3,col:"#ffffff"}),A({type:"ring",x:t.x,y:t.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),Jt(t.x,t.y,.8,"arcane",20,3,.5,3,!0,3),ot(3);break;case"pet_fade":Jt(t.x,t.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":vt.sfx("item_blink",t.x,t.y),Jt(t.x,t.y,.6,"arcane",18,2.5,.4,2,!0,3),Jt(t.ex,t.ey,.6,"frost",18,2.5,.4,2,!0,3),A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":vt.sfx("item_shield",t.x,t.y,.7),A({type:"ring",x:t.x,y:t.y,r:.9,dur:.5,col:"#ffe070",w:4}),Jt(t.x,t.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":vt.sfx("item_purge",t.x,t.y),A({type:"ring",x:t.x,y:t.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),Jt(t.x,t.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":vt.sfx("item_invis",t.x,t.y),Jt(t.x,t.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":vt.sfx("item_drum",t.x,t.y);for(let s=0;s<3;s++)A({type:"ring",x:t.x,y:t.y,r:t.radius||6,dur:.6,col:"#ffb060",w:3,delay:s*.14});ot(3);break;case"item_freeze":vt.sfx("item_freeze",t.ex,t.ey),A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.25,col:"#9ae8ff"}),Jt(t.ex,t.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const s=e.player;if(!s||t.team!==s.team)break;const l=t.kind==="danger"?"#ff5a4a":t.kind==="omw"?"#7fd0ff":t.kind==="missing"?"#ffd24a":"#8ae08a";for(let u=0;u<3;u++)A({type:"ring",x:t.x,y:t.y,r:1.4,dur:.9,col:l,w:4,delay:u*.18});A({type:"pingmark",x:t.x,y:t.y,dur:3,col:l,kind:t.kind}),vt.play(t.kind==="danger"?"deny":"aim",.7);break}case"laser":A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.25,col:t.team==="blue"?"#9ae8ff":"#ffb070"}),Jt(t.ex,t.ey,.5,t.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),vt.sfx("tower",t.ex,t.ey,.7);break;case"rooted":A({type:"vines",uid:t.uid,x:t.x,y:t.y,dur:t.dur||1.3});break;case"announce":if(t.snd==="end"){const s=e.player&&e.winner===e.player.team;vt.play(s?"victory":"defeat",1),vt.say(s?"victory":"defeat")}else vt.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":A({type:"flash",x:t.x+(t.ux||0)*.5,y:t.y+(t.uy||0)*.5,r:.45,dur:.15,col:t.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}ms=1,Oa=1,Ia=null}function nd(e){for(const t of tr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);Wi(tr,t=>t.life>0),tr.length>2500&&tr.splice(0,tr.length-2500);for(const t of Co)t.t+=e;Wi(Co,t=>t.t<t.dur+(t.delay||0));for(const t of gi)t.t+=e;Wi(gi,t=>t.t<t.dur),M.cam.shake=Math.max(0,M.cam.shake-e*30)}let Gs=6,Jr=0;function rd(e,t,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=rt,f=window.MAP,c=M.T;if(Gs-=e,Gs<=0&&(Jr=p(.6,1),Gs=p(8,16)),Jr=Math.max(0,Jr-e*.25),M.wind=.35+.15*Math.sin(c*.4)+Jr,Jr>.3&&Math.random()<Jr*.9){const h=n+Math.random()*o,m=t-20-u,y=(m/a+h/s)/2,g=(h/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];pn.push({k:"leaf",x:y,y:g,z:p(.4,2.2),ph:Math.random()*6,life:p(2.5,4),col:x,sp:p(9,15)})}if(pn.length<70&&Math.random()<.8){const h=t+Math.random()*r,d=n+Math.random()*o,m=h-u,y=d,g=(m/a+y/s)/2,x=(y/s-m/a)/2;if(g>1&&x>1&&g<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(g)];b===0||b===4?pn.push({k:"fly",x:g,y:x,z:p(.2,.9),ph:Math.random()*6,life:p(4,9),vx:p(-.3,.3),vy:p(-.3,.3)}):b===3&&pn.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:p(.4,1),max:1})}}for(const h of pn)h.life-=e,h.k==="leaf"&&(h.x+=h.sp*e*.5,h.y-=h.sp*e*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=p(-.6,.6)*e,h.vy+=p(-.6,.6)*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=Math.sin(c*2+h.ph)*.003);if(Wi(pn,h=>h.life>0),pn.length>160&&pn.splice(0,pn.length-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,m]=C(h.x,h.y);d>t&&d<t+r&&m>n&&m<n+o+100&&O(h.x+p(-.4,.4),h.y+p(-.4,.4),1.4,p(-.3,.3),p(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let F,Vi,hr=null;function fu(e,t){F=Vi=e,hr=t||null}function te(e){if(!hr){F.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(F===hr)return;hr.setTransform(Vi.getTransform()),hr.globalAlpha=Vi.globalAlpha,hr.globalCompositeOperation="lighter",hr.imageSmoothingEnabled=!1,F=hr}else F=Vi}function Lt(e,t,n,r,o,i=2,a){const{HW:s,HH:l}=rt,[u,f]=C(e,t);F.beginPath(),F.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(F.fillStyle=o,F.fill()),r&&(F.lineWidth=i,F.strokeStyle=r,a&&F.setLineDash(a),F.stroke(),F.setLineDash([]))}function cu(e,t,n){F.beginPath(),e.forEach(([r,o],i)=>{const[a,s]=C(r,o);i?F.lineTo(a,s):F.moveTo(a,s)}),F.closePath(),F.fillStyle=n,F.fill(),F.strokeStyle=t,F.lineWidth=2,F.stroke()}function od(){for(const e of gi){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];Lt(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&Lt(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&Lt(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function Uf(e,t){if(!(t>1)){e.add&&te(!0),F.save();try{e.draw(F,t,e)}catch(n){console.error(n)}F.restore(),e.add&&te(!1)}}function Vt(e){te(e)}function $e(){return F}function id(){const{HW:e}=rt;for(const t of Co){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&Uf(t,r);continue}if(t.type==="ring")F.globalAlpha=Math.max(0,1-r),Lt(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),F.globalAlpha=1;else if(t.type==="cone"){const[o,i]=C(t.x,t.y),a=Math.atan2(t.uy,t.ux);F.save(),te(!0),F.globalAlpha=Math.max(0,.75*(1-r)),F.beginPath(),F.moveTo(o,i);for(let f=0;f<=16;f++){const c=a-t.angle+2*t.angle*f/16,h=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=C(t.x+Math.cos(c)*h,t.y+Math.sin(c)*h);F.lineTo(d,m)}F.closePath();const[s,l]=C(t.x+t.ux*t.range,t.y+t.uy*t.range),u=F.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),F.fillStyle=u,F.fill(),te(!1),F.restore()}else if(t.type==="cracks"){F.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,F.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(t.angle,3)*1.6;F.beginPath();let[s,l]=C(t.x,t.y);F.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,c=a+(dt(t.seed+i*7+u)-.5)*.6;[s,l]=C(t.x+Math.cos(c)*f,t.y+Math.sin(c)*f),F.lineTo(s,l)}F.stroke()}}else if(t.type==="flash"){const[o,i]=C(t.x,t.y,.3),a=t.r*e*1.3;te(!0);const s=F.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,t.col+.8*(1-r)+")"),s.addColorStop(1,t.col+"0)"),F.fillStyle=s,F.fillRect(o-a,i-a,a*2,a*2),te(!1)}else if(t.type==="streak"){const[o,i]=C(t.x,t.y,.4),[a,s]=C(t.ex,t.ey,.4);te(!0),F.strokeStyle=t.col,F.globalAlpha=Math.max(0,.9*(1-r)),F.lineWidth=8*(1-r)+1,F.beginPath(),F.moveTo(o,i),F.lineTo(a,s),F.stroke(),F.globalAlpha=1,te(!1)}else if(t.type==="puff"){const[o,i]=C(t.x,t.y,.3+r*.4),a=t.col;F.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=t.r*(.6+r*.7);F.beginPath(),F.ellipse(o,i,s,s*.75,0,0,7),F.fill()}}}function sd(){const e=M.T;for(const t of Co){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&Uf(t,r);continue}const o=t.uid?lt(t.uid):null,i=o?o.x:t.x,a=o?o.y:t.y;if(t.type==="pillar"){const[s,l]=C(i,a),u=t.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));te(!0);const h=F.createLinearGradient(s,l,s,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),F.fillStyle=h,F.fillRect(s-18,l-f,36,f),te(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=C(i,a,.35),u=t.col;te(!0),F.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,F.lineWidth=2,F.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,F.beginPath(),F.ellipse(s,l,34,38,0,0,7),F.fill(),F.stroke();for(let f=0;f<6;f++){const c=e*1.5+f*1.05;F.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,F.fillRect(s+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}te(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[s,l]=C(i,a,.3);F.strokeStyle="rgba(160,255,190,0.7)",F.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;F.beginPath(),F.ellipse(s,l,26,12,0,f,f+1.4),F.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[s,l]=C(i,a);F.strokeStyle="#4a7a2a",F.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;F.beginPath(),F.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),F.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),F.stroke()}F.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;F.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=C(t.x,t.y,3*(1-r));te(!0),F.strokeStyle="rgba(240,200,255,0.9)",F.lineWidth=4,F.beginPath(),F.moveTo(s-18,l-50),F.lineTo(s,l),F.stroke(),F.fillStyle="#ffffff",F.fillRect(s-3,l-3,6,6),te(!1)}else if(t.type==="xslash"){const[s,l]=C(t.x,t.y,.5),u=40*Math.min(1,r*3);F.globalAlpha=Math.max(0,1-r),F.strokeStyle="#ffffff",F.lineWidth=6,F.beginPath(),F.moveTo(s-u,l-u),F.lineTo(s+u,l+u),F.moveTo(s+u,l-u),F.lineTo(s-u,l+u),F.stroke(),F.strokeStyle="#ff4040",F.lineWidth=2,F.stroke(),F.globalAlpha=1}else if(t.type==="spark"){const[s,l]=C(t.x,t.y,.45),u=(t.big?16:10)*(1-r);te(!0),F.fillStyle=t.col,F.fillRect(s-u,l-1,u*2,3),F.fillRect(s-1,l-u,3,u*2),F.fillRect(s-u*.5,l-u*.5,u,u),te(!1)}else if(t.type==="jaws"){const[s,l]=C(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));F.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",F.lineWidth=5,F.beginPath(),F.arc(s,l-u,24,.2,Math.PI-.2),F.stroke(),F.beginPath(),F.arc(s,l+u,24,Math.PI+.2,-.2),F.stroke()}else if(t.type==="pingmark"){const[s,l]=C(t.x,t.y,.9+Math.sin(e*6)*.05);ad(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),F.beginPath(),F.moveTo(s,l+14),F.lineTo(s-9,l-2),F.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),F.closePath(),F.fill(),F.stroke(),F.fillStyle="#120c1a",F.font="bold 13px sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",s,l-6),F.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=C(t.x,t.y,.5+r*2);te(!0),F.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",F.beginPath(),F.arc(s+Math.sin(r*12)*6,l,7,0,7),F.fill(),te(!1)}}}function ad(e,t){F.globalAlpha=t,F.fillStyle=e,F.strokeStyle="#120c1a",F.lineWidth=2}function ld(){const{HW:e,HH:t,OX:n,ZK:r}=rt;for(const o of tr){if(o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r;F.globalAlpha=Math.min(1,o.life/o.max*1.5),F.fillStyle=o.col,F.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}F.globalAlpha=1,te(!0);for(const o of tr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r,s=Math.min(1,o.life/o.max*1.5);F.globalAlpha=s*.35,F.fillStyle=o.col,F.fillRect(Math.round(i-o.size),Math.round(a-o.size),o.size*2,o.size*2),F.globalAlpha=s,F.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}F.globalAlpha=1,te(!1)}function ud(){const e=M.T,{HW:t,HH:n,OX:r,ZK:o}=rt;for(const i of pn){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;F.fillStyle="#00000040",F.fillRect(a-l/2+2,s+2,l,3),F.fillStyle=i.col,F.fillRect(a-l/2,s,l,3)}te(!0);for(const i of pn){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);F.fillStyle=`rgba(210,255,120,${.25*l})`,F.fillRect(a-3,s-3,6,6),F.fillStyle=`rgba(250,255,200,${.9*l})`,F.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));F.fillStyle=`rgba(255,255,255,${.7*l})`,F.fillRect(a-1,s,3,1),F.fillRect(a,s-1,1,3)}}te(!1)}function fd(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function cd(){const{HW:e,HH:t}=rt,n=M.T;for(const r of M.game.projs){const o=r.z||.45,[i,a]=C(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=fd(r.look||r.fx),u=l?ve[l]:void 0;if(u){F.save();try{u(F,r,i,a,s,n)}catch(c){console.error(c)}F.restore(),te(!1);continue}const f=fr[r.fx]||fr.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;F.save(),F.translate(i,a),F.rotate(s),F.fillStyle="#3a2a1a",F.fillRect(-c,-2,c,4),F.fillStyle="#e8d8b0",F.fillRect(-c,-1,c,2),F.fillStyle="#ffffff",F.beginPath(),F.moveTo(5,0),F.lineTo(-2,-4),F.lineTo(-2,4),F.fill(),F.fillStyle="#e05050",F.fillRect(-c-3,-3,5,2),F.fillRect(-c-3,1,5,2),F.restore(),r.skill&&O(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")F.save(),F.translate(i,a),F.rotate(n*25),F.fillStyle="#1a1020",F.fillRect(-9,-3,18,6),F.fillStyle="#e0e8f0",F.fillRect(-8,-2,14,4),F.fillStyle="#c8a040",F.fillRect(-10,-3,4,6),F.restore();else if(r.fx==="root")F.fillStyle="#5a3a20",F.beginPath(),F.arc(i,a,7,0,7),F.fill(),F.fillStyle="#8ad050",F.beginPath(),F.arc(i+3,a-3,4,0,7),F.fill(),O(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;te(!0);const h=F.createRadialGradient(i,a,0,i,a,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),F.fillStyle=h,F.fillRect(i-c*2.4,a-c*2.4,c*4.8,c*4.8),te(!1),F.fillStyle=f[0],F.fillRect(i-3,a-3,6,6),Math.random()<.8&&O(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const dr=Math.round,ps=Math.PI*2,Xn=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(dr(t-r/2),dr(n-r/2),r,r)},Lf=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);q.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];A({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,.9),f=Math.min(1,r*3),c=r>.7?1-(r-.7)/.3:1;n.globalAlpha=c;for(const h of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+h*(.35+d*.22*f),y=(26+d*7)*f;for(let g=0;g<y;g+=3){const x=g/Math.max(1,y),b=Math.sin(M.T*18+d+g*.3)*2;Xn(n,l+Math.cos(m)*g+b*h,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let h=0;h<14;h++){const d=h/14*ps+r*9,m=18+h%3*6,y=-r*70-h*3;Xn(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+y,3,t[h%4])}}});for(let n=0;n<40;n++){const r=Math.random()*ps,o=p(1,3.5);O(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,p(2,5),p(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}ot(Lf(e)?9:3)};q.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];A({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,1.6),f=Math.min(1,r*2.5),c=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*c;const h=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((b,v)=>{b!=="."&&Xn(n,d+(v-7)*h,m+(x-5)*h,h,b==="N"?t[4]:b==="o"?t[0]:t[1+(v+x)%2])})),r>.15&&r<.6)for(let g=0;g<3;g++){const x=40+((r-.15)*300+g*22)%90;for(let b=-.9;b<=.9;b+=.12)Xn(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),A({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),[a,s]=C(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const c=f/l*ps,h=(1-u)*120+30,d=a+Math.cos(c)*h,m=s+Math.sin(c)*h*.5;n.fillStyle=t[3],n.fillRect(dr(d-6),dr(m-4),12,8),n.fillStyle=t[1],n.fillRect(dr(d-5),dr(m-3),10,3),n.fillStyle=t[0],n.fillRect(dr(d-1),dr(m-1),2,2)}}}),ot(Lf(e)?10:4)};q.erizo_Q_hit=e=>{A({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)Xn(t,o+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,Xn(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)O(e.x,e.y,.5,p(-2,2),p(-2,2),p(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};q.polilla_Q_hit=e=>{A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<ps-.4;l+=.18)Xn(t,o+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=o+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)Xn(t,s+f*u,l,u,"#fff6c8"),Xn(t,s+f*u,l+3*u,u,"#fff6c8"),Xn(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)O(e.x,e.y,.6,p(-1,1),p(-1,1),p(.5,1.5),p(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const V=Math.round,Se=Math.PI*2;let It=0,Rt=0;function pe(e,t,n=0){It=(e-t)*rt.HW+rt.OX,Rt=(e+t)*rt.HH-n*rt.ZK}function Ce(e,t,n,r,o){e.fillStyle=o,e.fillRect(V(t-r/2),V(n-r/2),r,r)}function Fa(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(V(t+(r-t)*l/s-i/2),V(n+(o-n)*l/s-i/2),i,i)}function To(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(V(t-a/2),V(n+i*o),V(a),Math.max(1,V(2*o)))}}function mo(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let a=-r;a<r;a+=2){const s=Math.abs(a+1),l=s<=r/2?r*.866:r*.866*(r-s)/(r/2);l<.5||n+a<i||e.fillRect(V(t-l),V(n+a),V(l*2),2)}}function hd(e,t,n,r,o){e.fillStyle=o,e.fillRect(V(t-r),V(n-1),r*2,2),e.fillRect(V(t-1),V(n-r),2,r*2)}function Ea(e,t,n){e.fillStyle=j.l,e.fillRect(V(t-1),V(n-4),2,2),e.fillStyle=j.o,e.fillRect(V(t-2),V(n-2),4,4),e.fillStyle=j.w,e.fillRect(V(t-1),V(n-2),2,2)}const Hn=e=>e<0?0:e>1?1:e,qr=e=>1-(1-e)*(1-e),j={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},po="#2a1e14",dd="#eaf8ff",md="#b8e0ff",ys="#ff9ac8",Ul="#9a5ad8",pd="#9a7a48";function Df(e,t,n,r,o){const i=M.game;if(!i)return null;let a=null,s=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function yd(e,t,n,r,o){e.fillStyle=o?dd:md,o?(e.fillRect(V(t-3*r-2),V(n-9),4,5),e.fillRect(V(t+1*r-1),V(n-8),3,4)):(e.fillRect(V(t-5*r-2),V(n-5),5,3),e.fillRect(V(t+2*r-2),V(n-5),4,3)),e.fillStyle=j.y,e.fillRect(V(t-5),V(n-3),10,6),e.fillStyle=po,e.fillRect(V(t-2*r-1),V(n-3),2,6),e.fillRect(V(t+1*r),V(n-3),2,6),e.fillRect(V(t+5*r-(r>0?1:2)),V(n-2),3,4),e.fillRect(V(t-6*r-1),V(n-1),2,2)}q.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;A({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,a){pe(r,o,.6);const s=26*(1-qr(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*Se+a*3;Ce(i,It+Math.cos(u)*s,Rt+Math.sin(u)*s*.6,3,l&1?po:j.y)}a>.6&&(i.fillStyle=Ul,i.fillRect(V(It-2),V(Rt-2),4,4))}});for(let i=0;i<6;i++)O(r,o,.6,t*p(1,3)+p(-.6,.6),n*p(1,3)+p(-.6,.6),p(0,.6),.3,i&1?j.y:j.l,2,0,!0)};ve.abeja_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=i*30|0;for(let c=3;c<17;c++){const h=c*3.5,d=(c+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-c/17,e.fillStyle=c&1?j.l:j.y,e.fillRect(V(n-a*h+l*m*5),V(r-s*h+u*m*5),2,2)}e.globalAlpha=1;for(let c=0;c<=14;c++){const h=n+a*(8-c)*1.6,d=r+s*(8-c)*1.6;if(c<=1)Ce(e,h,d,2,j.w);else if(c<=8)Ce(e,h,d,2,j.b),(c===4||c===7)&&(Ce(e,h-a*2+l*2,d-s*2+u*2,2,j.b),Ce(e,h-a*2-l*2,d-s*2-u*2,2,j.b));else{const m=c-9>>1&1?po:j.y,y=c===9||c===14?1:2;for(let g=-y;g<=y;g++)Ce(e,h+l*g*2,d+u*g*2,2,m)}}f&2&&Ce(e,n+a*15,r+s*15+2,2,Ul)};q.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=lt(e.uid),o=Df(t,n,r?r.team:void 0,!1,.9);A({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,a,s){const l=s.vid?lt(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}pe(l?l.x:t,l?l.y:n,1.5);const f=It,c=Rt,h=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=V(11*h);i.globalAlpha=u>1.5?(1.8-u)/.3:1,mo(i,f,c,d,j.d),mo(i,f,c,d-2,j.y),mo(i,f,c,d-2,j.o,c+d*.35),i.fillStyle=j.w,i.fillRect(V(f-d*.5),V(c-d*.5),3,2),Fa(i,f-4,c-4,f+4,c+4,2,po),Fa(i,f+4,c-4,f-4,c+4,2,po);for(let m=0;m<2;m++){const y=(u*1.6+m*.5)%1,g=d+4+(1-y)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*y;for(const x of[-1,1])for(let b=-2;b<=2;b++){const v=(x>0?0:Math.PI)+b*.28;Ce(i,f+Math.cos(v)*g,c+Math.sin(v)*g,2,j.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,Ea(i,f-4,c+d+m*22),Ea(i,f+3,c+d+m*14)}}});for(let i=0;i<8;i++)O(t,n,.5,p(-2,2),p(-2,2),p(.6,1.8),p(.3,.5),i&1?po:j.y,2,6,!1,.9);for(let i=0;i<4;i++)O(t,n,.6,p(-.8,.8),p(-.8,.8),p(1,2),.5,Ul,3,5,!0);ot(2)};q.abeja_W=e=>{if(e.type==="heal"){gd(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(r-.3)*qr(Hn(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*Se,f=s*(1+Math.sin(u*6+a*9+o)*.045);pe(t+Math.cos(u)*f,n+Math.sin(u)*f),Ce(i,It,Rt,5,j.o),Ce(i,It,Rt-2,3,j.l),l%4===0&&(i.fillStyle=j.d,i.fillRect(V(It-1),V(Rt+2),2,V(2+6*a)))}}}),A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=Hn(a/.6);for(let l=0;l<8;l++){const u=l/8*Se+o,f=r*(.6+.3*dt(o+l))*s;pe(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,Ea(i,It,Rt)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=j.o,i.fillRect(V(It-5),V(Rt-1),10,2),i.fillStyle=j.l,i.fillRect(V(It-2),V(Rt-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*Se;O(t,n,.8,Math.cos(a)*p(.5,2),Math.sin(a)*p(.5,2),p(.5,1.5),p(.5,.9),i%3?j.l:j.w,2,-.5,!0)}};function gd(e){const t=e.x,n=e.y,r=Df(t,n,e.team,!0,.6);A({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,a){const s=a.vid?lt(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;pe(l,u,.55);const c=It,h=Rt;pe(l,u,2.6);const d=Rt,m=h-d;if(f>.15){pe(l,u);const x=Hn((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=j.o,To(o,It,Rt,V(16*x),.45),o.fillStyle=j.l,o.fillRect(V(It-6*x),V(Rt-3),V(6*x),2)}const y=Hn(f/.15)*m,g=f>.45?Hn((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=V(g);x<y;x+=3){const b=x/m*(x/m),v=Math.sin(x*.22-M.T*9)*6*b;o.fillStyle=j.o,o.fillRect(V(c+v-2),V(d+x),4,3),o.fillStyle=j.l,o.fillRect(V(c+v-2),V(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,hd(o,c+(x-1)*12,h-10-b*30,4,x&1?j.y:j.l))}}});for(let o=0;o<5;o++)O(t,n,.4,p(-.5,.5),p(-.5,.5),p(.8,1.6),p(.6,.9),o&1?j.l:j.w,2,-.5,!0)}const No=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];q.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*Se+r);A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,c=qr(Hn(f/.25)),h=f>1.15?Hn((f-1.15)/.5):0;pe(t,n,.55*c-h*.4);const d=It,m=Rt;l.globalAlpha=1-h;for(let y=0;y<No.length;y++){const g=d+No[y][0],x=m+No[y][1]*c,b=8;mo(l,g,x,b,j.d),mo(l,g,x,b-2,j.cell);const v=Hn((f-.08-y*.04)/.3),S=a.indexOf(y)>=0&&f>o;!S&&v>0&&(mo(l,g,x,b-2,j.o,x+(b-2)-v*2*(b-2)),l.fillStyle=j.l,l.fillRect(V(g-3),V(x-3),2,2)),!S&&f>.4&&a.indexOf(y)>=0&&(l.fillStyle=j.y,l.fillRect(V(g-4),V(x-1),8,3))}}}),A({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){pe(t,n,.55);const f=It,c=Rt,h=(M.T*30|0)&1;for(let d=0;d<3;d++){const m=f+No[a[d]][0],y=c+No[a[d]][1];pe(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const g=It,x=Rt,b=w=>{const T=Math.sin(w*Math.PI);return[m+(g-m)*w+Math.cos(w*Se*1.5+d)*12*T,y+(x-y)*w+Math.sin(w*Se*1.5+d)*8*T-T*18]},v=qr(u);for(let w=1;w<7;w++){const T=v-w*.04;if(T<0)break;const R=b(T);l.globalAlpha=(1-w/7)*.8,l.fillStyle=j.l,l.fillRect(V(R[0]),V(R[1]),2,2)}const S=b(v),_=b(Math.max(0,v-.02));l.globalAlpha=u>.8?(1-u)/.2:1,yd(l,S[0],S[1],S[0]>=_[0]?1:-1,!!h)}}}),A({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<9;c++)O(t,n,.6,p(-1.2,1.2),p(-1.2,1.2),p(1,2),p(.4,.6),c%3?j.y:j.d,2,6,!1,.9)}}}),A({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<14;c++)O(t+p(-.3,.3),n+p(-.3,.3),p(.2,.7),p(-.6,.6),p(-.6,.6),p(0,.5),p(.5,.8),c%3?j.d:j.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)O(t,n,.1,p(-1.5,1.5),p(-1.5,1.5),p(.3,1),.5,"#c8a878",3,3,!1,.9);ot(2)};const li=new Map;q.abeja_R=e=>{e.type==="channel"?xd(e):e.type==="channel_tick"?vd(e):e.type==="channel_end"&&bd(e)};function xd(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1};li.size>16&&li.clear(),li.set(r,l);const u=c=>{if(l.endT<0&&M.mode!=="guest"&&c.t>.1){const d=lt(r);(!d||!d.channel)&&(l.endT=M.T)}if(l.endT<0)return 1;const h=1-(M.T-l.endT)/.35;return h<=0?(c.t=c.dur+1,0):h};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i,g=qr(Hn(y/.4)),x=s+y*.3;c.globalAlpha=m;for(let b=0;b<8;b++){const v=x+b/8*Se,S=Math.cos(v),_=Math.sin(v);for(let w=0;w<10;w++){const T=w/9,R=(.15+T*.95)*g,k=Math.sin(T*Math.PI)*.24*g;for(let E=-1;E<=1;E++)pe(t+S*R-_*k*E,n+_*R+S*k*E),Ce(c,It,Rt,6,E===0&&T<.8?j.l:T>.85?j.d:j.y)}}pe(t,n),c.fillStyle=j.o,To(c,It,Rt,V(12*g),.5),c.fillStyle=ys,To(c,It,Rt,V(6*g),.5)}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i,g=qr(Hn(y/.5)),x=y*.25;c.globalAlpha=.55*m;for(let b=0;b<56;b++){const v=b/56*Se+x;pe(t+Math.cos(v)*o,n+Math.sin(v)*o),Ce(c,It,Rt,b&1?2:3,b&1?j.l:j.y)}c.globalAlpha=.28*m;for(let b=0;b<6;b++){const v=b/6*Se+x;for(let S=1;S<12;S++){const _=S/12*(Math.PI/2),w=Math.cos(_)*o;pe(t+Math.cos(v)*w,n+Math.sin(v)*w,Math.sin(_)*a*g),Ce(c,It,Rt,2,j.l)}}for(let b=0;b<32;b++){const v=b/32*Se-x,S=Math.cos(Math.PI/4)*o;pe(t+Math.cos(v)*S,n+Math.sin(v)*S,Math.sin(Math.PI/4)*a*g),Ce(c,It,Rt,2,j.y)}c.globalAlpha=m;for(let b=0;b<6;b++){const v=M.T*2.4+b/6*Se;pe(t+Math.cos(v)*.7,n+Math.sin(v)*.7,.9+Math.sin(M.T*4+b)*.2),Ce(c,It,Rt,2,b&1?j.w:ys)}}});const f=26;A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i;if(!(y<.3)){c.globalAlpha=m;for(let g=0;g<f;g++){const b=dt(g*3.7+s)*.65,v=Math.floor((y+b)/.65),S=(y+b)%.65/.65,_=dt(g*13.1+v)*Se,w=Math.sqrt(dt(g*5.3+v*1.7))*o*.9,T=t+Math.cos(_)*w,R=n+Math.sin(_)*w;if(S<.85)pe(T,R,a*.95*(1-S/.85)),c.fillStyle=j.o,c.fillRect(V(It-1),V(Rt-2),2,4),c.fillStyle=j.l,c.fillRect(V(It-1),V(Rt-4),2,2);else{pe(T,R);const k=(S-.85)/.15;c.fillStyle=j.o,c.fillRect(V(It-2-k*4),V(Rt),3,2),c.fillRect(V(It+k*4),V(Rt),3,2)}}}}})}function vd(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;A({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(r-.4)*qr(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const c=f/6*Se+Math.PI/6,h=(f+1)/6*Se+Math.PI/6;pe(t+Math.cos(c)*u,n+Math.sin(c)*u);const d=It,m=Rt;pe(t+Math.cos(h)*u,n+Math.sin(h)*u),Fa(s,d,m,It,Rt,3,f&1?j.y:j.l)}}});const i=M.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>r*r)){if(s.team===o){if(s.kind==="hero")for(let l=0;l<2;l++)O(s.x+p(-.3,.3),s.y+p(-.3,.3),.5,0,0,p(1,1.6),.6,l?j.l:j.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;A({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,c){pe(l,u),f.globalAlpha=.8*(1-c),f.fillStyle=j.d,To(f,It,Rt,13,.45),f.fillStyle=j.o,To(f,It-2,Rt-1,9,.45),f.fillStyle=j.l,f.fillRect(V(It-5),V(Rt-3),3,2),f.fillRect(V(It-8),V(Rt-10+c*8),2,V(8-c*6)),f.fillRect(V(It+7),V(Rt-8+c*6),2,V(6-c*4))}})}}}function bd(e){const t=li.get(e.uid);t&&t.endT<0&&(t.endT=M.T),li.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*Se;O(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*p(2,3.5),Math.sin(i)*p(2,3.5),p(1.5,3),p(.6,.9),o&1?j.y:j.l,4,3,!0,.93)}for(let o=0;o<12;o++)O(n,r,.8,p(-1,1),p(-1,1),p(1,2.5),p(.5,.9),o&1?ys:j.w,2,0,!0);A({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){pe(n,r),o.globalAlpha=1-i,o.fillStyle=j.l,To(o,It,Rt,V(20+i*90),.5)}}),ot(3)}else{for(let o=0;o<10;o++){const i=o/10*Se;O(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,p(.2,.6),p(.7,1),o&1?pd:j.d,4,1.5,!1,.9)}vt.sfx("deny",n,r,.35)}}ve.abeja_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const y=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?j.l:j.y,e.fillRect(V(n-a*y+l*g-1),V(r-s*y+u*g-1),2,2)}e.globalAlpha=1;const c=Math.sin(i*20+f)*3,h=n+l*c,d=r+u*c;for(let m=0;m<8;m++){const y=m/8*Se+i*6;Ce(e,h+Math.cos(y)*5,d+Math.sin(y)*5,2,j.o)}e.fillStyle=j.y,e.fillRect(V(h-3),V(d-3),6,6),e.fillStyle=j.w,e.fillRect(V(h-2),V(d-2),2,2)};xe.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Se;A({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,a){pe(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(r?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const c=o+f/5*Se;Ce(i,It+Math.cos(c)*l,Rt+Math.sin(c)*l*.8,r?5:4,f&1?j.l:j.y)}Ce(i,It,Rt,r?5:4,r?ys:j.o);const u=6+a*(r?26:18);for(let f=0;f<10;f++){const c=o+f/10*Se;Ce(i,It+Math.cos(c)*u,Rt+Math.sin(c)*u*.5+6,2,j.l)}}});for(let i=0;i<(r?8:4);i++)O(t,n,.5,p(-1,1),p(-1,1),p(.3,1.2),.4,i&1?j.y:j.w,2,2,!0)};const Pt=Math.round,J={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function xn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Pt(t-r/2),Pt(n-r/2),r,r)}const Md=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,Ns={};function Sd(e){if(Ns[e])return Ns[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return Ns[e]=t}function Ro(e,t,n,r,o,i,a,s=1,l=1,u=!1){const f=Sd(r);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];e.fillStyle=h+d>r*.6?a:i,e.fillRect(Pt(t+h*o*s-o/2),Pt(n+d*o*l-o/2),o,o)}u||(e.fillStyle=J.white,e.fillRect(Pt(t-r*o*.45*s-o/2),Pt(n-r*o*.5*l-o/2),o,o))}function _d(e,t,n,r,o,i,a=1,s=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(Pt(t-u*o*a),Pt(n+l*o*s-o/2),Pt(u*2*o*a),o)}}function wd(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const hu=["#.#","###",".#.",".#."];function Ad(e,t){A({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+Pt(r*5);n.globalAlpha=1-r,Ro(n,o,i,a,2,J.pink1,J.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;xn(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?J.white:J.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=p(0,6.283),o=p(1,2.5);O(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,p(1,2.5),.4,n<3?J.water:J.pink1,2,8,!1)}for(let n=0;n<3;n++)O(e,t,.5,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3),.5,n%2?J.coral:J.orange,3,10,!1)}q.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,c]=C(t,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=s+(h-1)*.5,m=10+u*(22+h*6);Ro(l,f+Math.cos(d)*m,c+Math.sin(d)*m-u*8,1+h%2,2,J.pink2,J.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)O(t+r*.4,n+o*.4,.5,r*p(1,2.5)+p(-.5,.5),o*p(1,2.5)+p(-.5,.5),p(.5,1.5),.35,l%2?J.water:J.pink1,2,6,!1);return!0};ve.ajolote_Q=(e,t,n,r,o,i)=>{wd(t,Ad);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,_d(e,n,r,6,2,J.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<hu.length;h++)for(let d=0;d<3;d++)hu[h][u?2-d:d]==="#"&&xn(e,n-2+d*2,r-3+h*2,2,h<1?J.orange:J.coral);Ro(e,n,r,6,2,J.pink2,J.coral2,s,l);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,m=Math.sin(i*12+h*2)*3;Ro(e,n-f*d-c*m,r-c*d+f*m,2-(h>>1),2,J.pink1,J.pink2)}Math.random()<.35&&O(t.x,t.y,(t.z||.45)+.05,p(-.2,.2),p(-.2,.2),.6,.45,J.pink1,2,-.5,!1)};function Cd(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return A({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[a,s]=C(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=a+n[l][0],h=s+n[l][1]-u*6;if(u<f)Ro(r,c,h,2,2,J.pink2,J.coral);else if(u<f+.3){const d=(u-f)/.3,m=Pt(h-d*14),y=Pt(c);r.globalAlpha=1-d,r.fillStyle=J.pink1,r.fillRect(y-4,m-1,8,2),r.fillRect(y-1,m-4,2,8),r.fillStyle=J.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(y+g*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}q.ajolote_W=e=>{if(e.type==="heal")return Cd(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,a=[-.55,-.15,.25];A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const c=lt(o),[h,d]=C(c?c.x:t,c?c.y:n,.85),m=Math.min(1,f*5),y=f>.6?(1-f)/.4:1;u.globalAlpha=y;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const b=g>0?a[x]:Math.PI-a[x],v=Math.sin(f*16+x*1.3)*.12,S=b+v*g,_=Math.cos(S),w=Math.sin(S),T=Pt(22*m)-(x===1?0:4);for(let R=6;R<=T;R+=2)xn(u,h+_*R,d+w*R,2,R>T-2?J.pink1:J.gill),R%4===0&&R>8&&(xn(u,h+_*R-w*3,d+w*R+_*3,2,J.pink2),xn(u,h+_*R+w*3,d+w*R-_*3,2,J.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+p(-.12,.12));A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),m=Pt(d*3)*2,[y,g]=C(t+Math.cos(s[c])*r,n+Math.sin(s[c])*r),x=Pt(y),b=Pt(g);u.fillStyle=J.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=J.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=J.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=p(0,6.283),c=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:p(0,.35),pop:p(.4,.9),ph:p(0,6.283),done:!1})}return A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[m,y]=C(h.x,h.y,.1+Math.min(d,h.pop)*.9),g=m+Math.sin(d*9+h.ph)*3;if(d<h.pop){Ro(u,g,y,h.n,2,J.pink2,J.coral);continue}h.done||(h.done=!0,O(h.x,h.y,.1+h.pop*.9,p(-.5,.5),p(-.5,.5),.8,.5,J.pink1,2,0,!0),O(h.x,h.y,.1+h.pop*.9,p(-.5,.5),p(-.5,.5),.5,.4,J.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=h.n*2+2+x*6;for(const[v,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])xn(u,g+v*b,y+S*b,2,J.pink1);u.globalAlpha=1}}}),!0};function Td(e,t,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)xn(e,t-r*s,n-o*s,2,s>18?J.coral2:J.orange);for(let s=-6;s<=6;s+=2)xn(e,t+i*s,n+a*s,2,J.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)xn(e,t+i*s+r*u,n+a*s+o*u,2,u>=l-1?J.white:J.pink1)}}q.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(r-t,o-n),l=(r-t)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,m=c/h,y=Math.max(2,Math.ceil(s/.1)),g={n:0,end:!1};return A({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const v=b*a,S=Math.min(1,v/i);for(let _=0;_<=y*S;_++){const w=_/y,T=v-w*i,R=Math.max(0,1-T/.55);if(R<=0)continue;const[k,E]=C(t+(r-t)*w,n+(o-n)*w),L=E+Math.sin(w*14-v*25)*2,H=Pt(4+6*w);x.globalAlpha=R,x.fillStyle=J.pink2,x.fillRect(Pt(k)-H,Pt(L)-3,H*2,1),x.fillRect(Pt(k)-H,Pt(L)+2,H*2,1),x.fillStyle=J.water,x.fillRect(Pt(k)-H,Pt(L)-2,H*2,4),_%3===0&&(x.fillStyle=J.white,x.fillRect(Pt(k)-1,Pt(L)-1,3,2))}if(x.globalAlpha=1,S<1&&g.n<22)for(let _=0;_<2;_++){g.n++;const w=t+(r-t)*S,T=n+(o-n)*S;O(w,T,.2,-l*p(.5,1.5)+p(-.8,.8),-u*p(.5,1.5)+p(-.8,.8),p(1,2.5),.45,_?J.water:J.pink1,2,8,!1)}if(!g.end&&S>=1){g.end=!0;for(let _=0;_<10;_++)O(r+l*.4,o+u*.4,.4,l*p(1.5,3.5)+p(-.8,.8),u*p(1.5,3.5)+p(-.8,.8),p(1,3),.5,_%2?J.water:J.white,2,9,!1);ot(4)}}}),A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const v=b*(i+.25),S=Math.min(1,v/i),[_,w]=C(t+(r-t)*S,n+(o-n)*S,.5);if(x.globalAlpha=S<1?1:Math.max(0,1-(v-i)/.25),Td(x,_+d*10,w+m*10,d,m),S>=1){const T=(v-i)/.25,R=6+T*30;for(const k of[-6,0,6])for(let E=12;E<12+R;E+=2)xn(x,_+d*(10+E)-m*k,w+m*(10+E)+d*k,2,E>8+R?J.pink1:J.white)}x.globalAlpha=1}}),!0};function Rd(e,t,n,r,o){const i=Pt(t),a=Pt(n),s=(dt(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=Pt(u*s),c=u<r*.5?6:4;e.fillStyle=J.coral,e.fillRect(i+f-c/2,a-u-2,c,2),e.fillStyle=J.deep,e.fillRect(i+f+c/2-2,a-u-2,2,2)}const l=dt(o+3)<.5?-1:1;for(const[u,f,c]of[[.35+dt(o+1)*.15,.38,l],[.58+dt(o+2)*.12,.28,-l]]){const h=r*u,d=i+Pt(h*s),m=r*f;let y=d,g=a-h;for(let x=0;x<m;x+=2)y=d+c*(3+x*.7),g=a-h-x,e.fillStyle=J.coral2,e.fillRect(Pt(y)-2,Pt(g)-2,4,2);e.fillStyle=J.pink1,e.fillRect(Pt(y)-2,Pt(g)-4,4,2)}e.fillStyle=J.pink1,e.fillRect(i+Pt(r*s)-2,a-r-3,4,3)}q.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+s*.4+p(-.15,.15);i.push({x:t+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+s*.13+p(0,.05),H:p(24,40)*(s?1:.85),seed:p(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=C(f.x,f.y);s.fillStyle=J.hole,s.fillRect(Pt(c)-6,Pt(h)-2,12,4),s.fillRect(Pt(c)-3,Pt(h)-3,6,6)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=Md(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const m=d/18,y=u+m*1.9,[g,x]=C(t+Math.cos(y)*h,n+Math.sin(y)*h,.45);s.globalAlpha=f*(1-m),xn(s,g,x,m<.15?3:2,m<.15?J.white:c===1?J.pink2:J.water)}}s.globalAlpha=1}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,O(f.x,f.y,.1,p(-1,1),p(-1,1),p(2,3.5),.5,Math.random()<.5?J.coral:J.orange,3,10,!1),O(f.x,f.y,.1,p(-1,1),p(-1,1),p(2,4),.45,J.water,2,10,!1));const c=a(f,u);if(c<2)continue;const[h,d]=C(f.x,f.y);Rd(s,h,d,Pt(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=p(0,6.283),u=p(2,5);O(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,p(3,6),p(.7,1),[J.water,J.pink1,J.white,J.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return ot(9),!0};xe.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=lt(e.uid);let i=1,a=0;if(o){const d=t-o.x,m=n-o.y,y=Math.hypot(d,m);y>.05&&(i=d/y,a=m/y)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,c=l/u;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[y,g]=C(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let v=-x/2;v<=x/2;v+=2)xn(d,y+f*v-c*b,g+c*v+f*b,2,v>x/2-4?J.white:J.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)O(t,n,.45,i*p(.5,2)+p(-.7,.7),a*p(.5,2)+p(-.7,.7),p(1,2.5),.35,d%2?J.pink1:J.water,2,8,!1)};const Ct=Math.round,at={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function rn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Ct(t-r/2),Ct(n-r/2),r,r)}const ka=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function gs(e,t,n,r,o,i,a){const s=t.length,l=t[0].length,u=Ct(n-l*o/2),f=Ct(r-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<l;h++){const d=a[t[c][h]];d&&(e.fillStyle=d,e.fillRect(u+h*o,f+c*i,o,i))}}function Es(e,t,n,r,o,i,a,s,l,u){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,m=t-r*h,y=n-o*h,g=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const b=x>g-2?s:l,v=x*.5;((h>>1)+(x>>1))%4!==3&&rn(e,m+f*x-r*v,y+c*x-o*v,2,b),((h>>1)+(x>>1)+2)%4!==3&&rn(e,m-f*x-r*v,y-c*x-o*v,2,b)}rn(e,m,y,2,u)}}function xs(e,t,n,r,o,i,a){const s=Ct(t),l=Ct(n);for(let u=0;u<r;u+=2){const f=Math.max(2,Ct(o*(1-u/r)/2)*2),c=Ct(u*i),h=a<0?l-u-2:l+u;e.fillStyle=at.ice3,e.fillRect(s+c-f/2,h,f,2),e.fillStyle=at.ice1,e.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}e.fillStyle=at.snow,e.fillRect(s+Ct(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function Xf(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function Pd(e,t){A({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)rn(n,o+u*(a+h),i+f*(a+h),2,h>=c-2?at.snow:at.ice2)}if(r<.35){const s=Ct(10*(1-r/.35))+2;n.fillStyle=at.snow,n.fillRect(Ct(o)-s/2,Ct(i)-s/2,s,s)}n.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;Es(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,at.ice3,at.ice1,at.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=p(0,6.283),o=p(1.2,3);O(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,p(.5,2),.4,n%2?at.ice2:at.ice3,2,6,!1)}}q.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,c]=C(t,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=s+(h-2)*.32,m=8+u*28,y=Math.cos(d),g=Math.sin(d);Es(l,f+y*m,c+g*m,y,g,10,3,at.ice3,at.ice1,at.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)O(t+r*.4,n+o*.4,.6,r*p(.5,1.5)+p(-.4,.4),o*p(.5,1.5)+p(-.4,.4),p(0,.6),.45,at.snow,2,.5,!0);return!0};ve.buho_Q=(e,t,n,r,o,i)=>{Xf(t,Pd);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;Vt(!0);const c=$e();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,rn(c,n-a*h*6,r-s*h*6,8-h,h<3?at.ice2:at.ice3);c.globalAlpha=1,Vt(!1),Es(e,u,f,a,s,24,6,at.ice3,at.ice1,at.snow),Math.random()<.55&&O(t.x,t.y,t.z||.45,p(-.3,.3),p(-.3,.3),p(-.2,.3),.5,Math.random()<.5?at.snow:at.ice1,2,0,!0)};const zd=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],Id=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];q.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=ka(l,.08,.75);Lt(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(s,l){const u=ka(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let y=0;y<m;y++){if(y%5===4)continue;const g=y/m*6.283+(d===r?f:-f),[x,b]=C(t+Math.cos(g)*d,n+Math.sin(g)*d);rn(s,x,b,2,at.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[y,g]=C(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,gs(s,zd[d%4],y,g,2,2,{"#":at.ice1})}const[c,h]=C(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),gs(s,Id,c,h,3,2,{"#":at.ice2,o:at.amber,v:at.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+p(-.3,.3),u=r*(.3+.55*Math.sqrt(dt(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:p(16,28),lean:p(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,m]=C(c.x,c.y),y=c.h*h*(1-f);y<2||(xs(s,d,m,y,8,c.lean,-1),xs(s,d+c.side*6,m+2,y*.6,6,c.lean+c.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const c of i)for(let h=0;h<2;h++)O(c.x,c.y,.25,p(-1.5,1.5),p(-1.5,1.5),p(1,2.5),.45,h?at.ice2:at.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=p(0,6.283),u=p(0,r);O(t+Math.cos(l)*u,n+Math.sin(l)*u,p(.6,1.4),p(-.6,.6)+.8,p(-.6,.6)-.4,-.6,p(.6,1),Math.random()<.6?at.snow:at.ice1,2,-.5,!1,.98)}return!0};const Gf=["......####","...#######","##########",".#########","..#.#.#.#."],Od=Gf.map(e=>e.split("").reverse().join(""));q.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:p(-45,45),vy:p(-55,-15),ph:p(0,6.283),L:Math.random()<.4?12:9});A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=C(t,n,.6);a.globalAlpha=ka(s,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,m=f+c.vy*l+60*l*l,y=Math.PI/2+h*.9;Es(a,d+Math.cos(y)*c.L*.5,m+Math.sin(y)*c.L*.5,Math.cos(y),Math.sin(y),c.L,3,at.ice3,at.ice1,at.snow)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=C(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Ct(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=at.ice1,a.fillRect(Ct(c)-d,Ct(h),d*2,1),a.fillRect(Ct(c),Ct(h)-d,1,d*2)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=C(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,gs(a,Gf,l+f+15,u-s*6,3,3,{"#":at.ice1}),gs(a,Od,l-f-15,u-s*6,3,3,{"#":at.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)O(t+p(-.3,.3),n+p(-.3,.3),p(.3,.9),p(-.8,.8),p(-.8,.8),p(-.3,.4),p(.6,1),at.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=p(0,6.283),l=p(1,2.5);O(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,p(0,1),.5,a%3?at.ice1:at.moon2,2,1,!0)}return!0};function du(e,t,n,r,o,i,a){e.fillStyle=a;const s=Ct(t),l=Ct(n),u=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=u*u-f*f,d=-c,m=c;if(h<=0){e.fillRect(s+Ct(d),l+Ct(f*i),Ct(m-d),Math.max(1,Ct(2*i)));continue}const y=Math.sqrt(h),g=o-y,x=o+y;g>d&&e.fillRect(s+Ct(d),l+Ct(f*i),Ct(Math.min(m,g)-d),Math.max(1,Ct(2*i))),x<m&&e.fillRect(s+Ct(x),l+Ct(f*i),Ct(m-x),Math.max(1,Ct(2*i)))}}const Bo=[];function mu(e,t,n){A({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=C(e+Math.cos(s)*i,t+Math.sin(s)*i);rn(r,l,u,a%3?2:3,a%2?at.ice2:at.moon)}r.globalAlpha=1}}),A({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){Lt(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),ot(9)}q.buho_R=e=>{if(e.type==="starfall"){const u=Bo.findIndex(f=>Math.abs(f.x-e.x)<.3&&Math.abs(f.y-e.y)<.3);return u>=0?Bo.splice(u,1):mu(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,a={x:t,y:n,t:0};Bo.push(a),Bo.length>6&&Bo.shift(),A({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.15)*(c>o?Math.max(0,1-(c-o)/.6):1);u.globalAlpha=h;for(const[y,g,x]of[[r,56,1],[r*.9,48,-1]])for(let b=0;b<g;b++){if((b+(x>0?0:2))%4===3)continue;const v=b/g*6.283+c*.7*x,[S,_]=C(t+Math.cos(v)*y,n+Math.sin(v)*y);rn(u,S,_,2,x>0?at.moon2:at.ice2)}for(let y=0;y<12;y++){const g=y/12*6.283-c*.35,[x,b]=C(t+Math.cos(g)*r*.62,n+Math.sin(g)*r*.62),[v,S]=C(t+Math.cos(g)*r*.82,n+Math.sin(g)*r*.82);for(let _=0;_<=4;_++)rn(u,x+(v-x)*_/4,b+(S-b)*_/4,2,at.moon)}const[d,m]=C(t,n);if(du(u,d,m,30,12,.5,at.moon),c>.45){const y=Math.min(1,(c-.45)/.1);u.globalAlpha=h*y,rn(u,d-26,m-3,4,at.amber),rn(u,d+26,m-3,4,at.amber)}u.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.2)*(c>o?Math.max(0,1-(c-o)/.5):1),[d,m]=C(t,n,4.4),y=u.createRadialGradient(d,m,4,d,m,60);y.addColorStop(0,`rgba(200,190,255,${.45*h})`),y.addColorStop(1,"rgba(120,110,220,0)"),u.fillStyle=y,u.fillRect(Ct(d)-60,Ct(m)-60,120,120),u.globalAlpha=h,du(u,d,m,20,9,1,at.moon),u.globalAlpha=1}});const s=[];for(let u=0;u<14;u++){const f=p(0,6.283),c=r*.85*Math.sqrt(Math.random());s.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,fall:o-.12+u*.025,ap:.08+u*.025,L:p(18,28),hit:!1})}s.sort((u,f)=>u.x+u.y-(f.x+f.y));const l={boom:!1};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of s){const d=(c-h.fall)/.12;if(d>=1){if(!h.hit){h.hit=!0;for(let v=0;v<3;v++)O(h.x,h.y,.1,p(-1.8,1.8),p(-1.8,1.8),p(1.5,3),.45,v?at.ice2:at.snow,2,10,!0)}const b=(c-h.fall-.12)/.2;if(b<1){const[v,S]=C(h.x,h.y),_=Ct(10*(1-b))+2;u.globalAlpha=1-b,u.fillStyle=at.snow,u.fillRect(Ct(v)-_,Ct(S)-1,_*2,2),u.fillRect(Ct(v)-1,Ct(S)-_/2,2,_),u.globalAlpha=1}continue}const m=Math.min(1,Math.max(0,(c-h.ap)/.25));if(m<=0)continue;const y=d>0?3.6*(1-d*d):3.6+Math.sin(c*9+h.x)*.03,[g,x]=C(h.x,h.y,y);u.globalAlpha=m,d>0&&(u.fillStyle="rgba(226,247,255,0.5)",u.fillRect(Ct(g)-1,Ct(x)-h.L-30,2,28)),xs(u,g,x-h.L,h.L,7,0,1),u.globalAlpha=1}!l.boom&&c>=o&&(l.boom=!0,a.t===0&&(a.t=1,mu(t,n,r)))}});for(let u=0;u<10;u++){const f=p(0,6.283),c=p(0,r);O(t+Math.cos(f)*c,n+Math.sin(f)*c,.05,0,0,p(1,2),.7,u%2?at.moon2:at.ice1,2,0,!0)}return!0};function Nf(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:p(-9,9),oy:p(-3,4),h:p(8,n?16:12),lean:p(-.35,.35)});A({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=C(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)xs(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=p(0,6.283),s=p(.8,2);O(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,p(.5,1.8),.35,i%2?at.snow:at.ice2,2,5,!0)}}const Bf=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&Bf.push([t,e,n>3.6?1:0])}ve.buho_A=(e,t,n,r,o,i)=>{Xf(t,(h,d)=>Nf(h,d,!1));const a=Math.cos(o),s=Math.sin(o);Vt(!0);const l=$e();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,rn(l,n-a*h*5,r-s*h*5,6-h,at.moon2);l.globalAlpha=1,Vt(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,m]of Bf)rn(e,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,m?at.ice3:at.ice1);rn(e,n+-3*f*2,r+-3*c*2,2,at.snow),Math.random()<.45&&O(t.x,t.y,t.z||.45,0,0,-.2,.35,at.ice1,2,0,!0)};xe.buho=e=>Nf(e.x,e.y,!!e.big);const pt=Math.round,Ge=Math.PI*2,pu=e=>e*rt.HW*Math.SQRT2,mt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},ir=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],$f=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function Ne(e,t,n,r){r=Math.max(1,pt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(pt(t[0]+(n[0]-t[0])*s/i-a),pt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Ua(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(pt(t-l),pt(n+a),Math.max(1,pt(l*2)),i)}}function $o(e,t,n,r,o,i,a=0){for(let s=0;s<o;s++){const l=a+s/o*Ge;e.fillRect(pt(t+Math.cos(l)*r-i/2),pt(n+Math.sin(l)*r*.5-i/2),i,i)}}function Fd(e,t,n,r){t=pt(t),n=pt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const Ed=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));q.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:p(-14,14),c:l+s})}A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,c]=C(t,n,.5),h=M.T*12|0;for(const d of i){const m=u-d.t0,y=m>0?1-m/.4:1;if(y<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=c+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=y,s.fillStyle=ir[(d.c+h)%6],s.fillRect(pt(g)-2,pt(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,pt(Math.hypot(r-t,o-n)*2.4)));A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=C(t,n),f=C(r,o),c=f[0]-u[0],h=f[1]-u[1],d=Math.hypot(c,h)||1,m=-h/d,y=c/d;for(let g=0;g<=a;g++){const x=g/a,b=l*4-x;if(b<0)continue;const v=g%4===0,S=v?9:5,_=u[0]+c*x,w=u[1]+h*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=mt.ink,Ne(s,[_-m*S+1,w-y*S+1],[_+m*S+1,w+y*S+1],v?4:3),s.fillStyle=v?mt.gold:ir[(g+(M.T*10|0))%6],Ne(s,[_-m*S,w-y*S],[_+m*S,w+y*S],v?3:2)}}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[u,f]=C(r,o,.5),c=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*Ge,y=d%3===0?7:3;s.fillStyle=d%3===0?mt.gold:mt.face,Ne(s,[u+Math.cos(m)*c,f+Math.sin(m)*c*.8],[u+Math.cos(m)*(c-y),f+Math.sin(m)*(c-y)*.8],2)}const h=-Math.PI/2-l*Ge*1.5;s.fillStyle=mt.face,Ne(s,[u,f],[u+Math.cos(h)*(c-8),f+Math.sin(h)*(c-8)*.8],3),s.fillStyle=mt.gold,s.fillRect(pt(u)-2,pt(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*Ge;O(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,p(.5,1.5),.45,ir[s%6],3,2,!0,.9)}};q.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>C(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let c=a.length-1;c>=0;c--){const h=a[c],d=f-h.dl;if(d<0)continue;const m=Math.min(1,d/.3),y=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=h.al;for(let g=-1,x=0;g<=y;g+=.06,x++){const b=Math.max(0,1-(y-g)/.7),v=pt(3+6*b*h.sc),[S,_]=s(g,i*h.sc);l.fillStyle=mt.ink,l.fillRect(pt(S-v/2)+1,pt(_-v/2)+1,v,v),l.fillStyle=c===0?x%2?mt.gold:mt.face:ir[(c*2+x)%6],l.fillRect(pt(S-v/2),pt(_-v/2),v,v)}if(c===0){l.fillStyle=mt.gold;for(let g=-1;g<=y;g+=.2){const x=s(g,i*1.06),b=s(g,i*1.16);Ne(l,x,b,2)}}}}if(f>.28){const c=(f-.28)/.27,[h,d]=s(-1,i);l.globalAlpha=1-c;for(let m=0;m<16;m++){const y=m*.6-c*4,g=2+m*1.1;l.fillStyle=ir[m%6],l.fillRect(pt(h+Math.cos(y)*g)-1,pt(d+Math.sin(y)*g*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=p(-1,1),f=i*p(.3,1.1),c=r+u*o;O(t+Math.cos(c)*f,n+Math.sin(c)*f,p(.2,.9),p(-.15,.15),p(-.15,.15),p(0,.2),p(.8,1.3),l%3?mt.sand:mt.time,2,.15,!0,.99)}ot($f(e)?3:1)};q.camaleon_E=e=>{const t=e.uid,n=e.dur||4;A({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=lt(t),[f,c]=C(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let h=0;h<8;h++){const d=h/8*Ge+.2,m=12+l*30;s.fillStyle=ir[h%6],Ne(s,[f+Math.cos(d)*m,c+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),c+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=lt(t);if(!f||f.dead){u.t=u.dur+1;return}if(M.T-o>.06){const h=r[r.length-1];(!h||Math.hypot(f.x-h.x,f.y-h.y)>.1)&&(r.push({x:f.x,y:f.y,t:M.T,c:i++}),r.length>8&&r.shift()),o=M.T}const c=l>.92?(1-l)/.08:1;for(const h of r){const d=1-(M.T-h.t)/.4;if(d<=0)continue;const[m,y]=C(h.x,h.y);s.globalAlpha=d*.65*c,s.fillStyle=ir[h.c%6];for(let g=0;g<a.length;g++)s.fillRect(pt(m-a[g]),pt(y-8-g*6),a[g]*2,3)}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=lt(t);if(!f||f.dead){u.t=u.dur+1;return}const[c,h]=C(f.x,f.y,1.05),d=c+24,m=h+Math.sin(M.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=mt.brassD,Ua(s,d,m,9,9,1),s.fillStyle=mt.brass,s.fillRect(pt(d)-2,pt(m)-13,5,4),s.fillStyle=mt.face,Ua(s,d,m,7,7,1),s.fillStyle=mt.ink,s.fillRect(pt(d)-1,pt(m)-7,2,2),s.fillRect(pt(d)+5,pt(m),2,2),s.fillRect(pt(d)-1,pt(m)+5,2,2),s.fillRect(pt(d)-7,pt(m),2,2);const y=M.T*14;s.fillStyle="#e03a4a",Ne(s,[d,m],[d+Math.cos(y)*6,m+Math.sin(y)*6],2)}})};function kd(e,t,n,r){t=pt(t),n=pt(n),e.fillStyle=mt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=mt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=pt(6-o*.5),a=pt(1+o*.5);e.fillStyle=mt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-a-1,n+1+o,1,1),e.fillRect(t+a+1,n+1+o,1,1),e.fillStyle=mt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-a,n+1+o,a*2+1,1)}r>.02&&r<.98&&(e.fillStyle=mt.sand,e.fillRect(t,n-1,1,12))}q.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=Array.from({length:26},(u,f)=>{const c=Math.random()*Ge,h=Math.sqrt(Math.random())*r*.85,d=Math.sqrt(Math.max(0,r*r-h*h))*.85;return{x:t+Math.cos(c)*h,y:n+Math.sin(c)*h,z:p(.15,Math.max(.2,d)),ph:Math.random()*Ge,s:f%4===0?4:2,col:[mt.glassL,mt.gold,mt.time,mt.teal][f%4]}}),a=Array.from({length:22},()=>{const u=Math.random()*Ge,f=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(u)*f,y:n+Math.sin(u)*f,z:p(.2,1.4)}}),s=u=>Ed(u/.3),l=u=>Math.max(0,Math.min(1,(o-u)/.25));A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=s(c.t),[m,y]=C(t,n),g=pu(r)*d,x=c.t;u.globalAlpha=.28*h,u.fillStyle=mt.night,Ua(u,m,y,g,g*.5,3),u.globalAlpha=.95*h,u.fillStyle=mt.gold,$o(u,m,y,g,96,3),u.fillStyle=mt.brass,$o(u,m,y,g*.94,72,2),u.fillStyle=mt.face,$o(u,m,y,g*.87,60,2);for(let T=0;T<12;T++){const R=T/12*Ge-Math.PI/2,k=T%3===0,E=[m+Math.cos(R)*g*.66,y+Math.sin(R)*g*.33],L=[m+Math.cos(R)*g*.8,y+Math.sin(R)*g*.4];u.fillStyle=mt.ink,Ne(u,[E[0]+1,E[1]+1],[L[0]+1,L[1]+1],k?6:4),u.fillStyle=k?mt.gold:mt.face,Ne(u,E,L,k?5:3)}for(let T=0;T<36;T++){const R=T/36*Ge-x*.6,k=g*(T%2?.5:.55);u.fillStyle=T%2?mt.brassD:mt.brass,u.fillRect(pt(m+Math.cos(R)*k)-2,pt(y+Math.sin(R)*k*.5)-1,5,3)}const b=-Math.PI/2-x*Ge/1.5,v=-Math.PI/2-x*Ge/12,S=[m+Math.cos(b)*g*.74,y+Math.sin(b)*g*.37],_=[m+Math.cos(v)*g*.45,y+Math.sin(v)*g*.225];u.fillStyle=mt.ink,Ne(u,[m+1,y+1],[S[0]+1,S[1]+1],6),Ne(u,[m+1,y+1],[_[0]+1,_[1]+1],8),u.fillStyle=mt.face,Ne(u,[m,y],S,4),u.fillStyle=mt.gold,Ne(u,[m,y],_,6),u.fillStyle="#e03a4a",u.fillRect(pt(m)-4,pt(y)-3,8,6),u.fillStyle=mt.gold,u.fillRect(pt(m)-2,pt(y)-2,4,4);const w=x%1;w<.3&&(u.globalAlpha=(1-w/.3)*h,u.fillStyle=mt.glassL,$o(u,m,y,g*(.87+w*.4),48,3))}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=s(c.t),m=r*d,y=M.T,g=(v,S,_,w,T,R,k)=>{const[E,L]=C(v,S,_);u.globalAlpha=h*(T?k:k*.35),u.fillStyle=R,u.fillRect(pt(E)-(w>>1),pt(L)-(w>>1),w,w)};for(const v of[0,.42,.85,1.25]){const S=m*Math.cos(v),_=m*Math.sin(v),w=v>1?22:48;for(let T=0;T<w;T++){const R=T/w*Ge+(v?y*.08:0);g(t+Math.cos(R)*S,n+Math.sin(R)*S,_,v?2:3,Math.cos(R)+Math.sin(R)>0,v?mt.glass:mt.time,v?.5:.9)}}for(let v=0;v<10;v++){const S=v/10*Ge-y*.35,_=Math.cos(S)+Math.sin(S)>0;for(let w=1;w<10;w++){const T=w/10*Math.PI/2;g(t+Math.cos(S)*m*Math.cos(T),n+Math.sin(S)*m*Math.cos(T),m*Math.sin(T),2,_,mt.glass,.4)}}for(let v=0;v<7;v++){const S=.6*Math.PI+v*.03,_=.5+v*.06;g(t+Math.cos(S)*m*Math.cos(_),n+Math.sin(S)*m*Math.cos(_),m*Math.sin(_),3,!0,mt.glassL,.8)}for(const v of i){const[S,_]=C(v.x,v.y,v.z*d),w=.5+.5*Math.sin(y*3+v.ph);u.globalAlpha=h*(.35+.65*w),u.fillStyle=v.col,Fd(u,S,_,v.s+(w>.8?1:0))}u.fillStyle=mt.sand;for(const v of a){const[S,_]=C(v.x,v.y,v.z*d);u.globalAlpha=h*.8,u.fillRect(pt(S),pt(_),1,1)}const[x,b]=C(t,n,m+.3);if(u.globalAlpha=h,kd(u,x,b,Math.min(1,c.t/o)),c.t<.3){const v=c.t/.3,[S,_]=C(t,n);u.globalAlpha=1-v,u.fillStyle=mt.glassL,$o(u,S,_,pu(r)*(.3+v*.9),56,4)}if(f>.93&&!c.shatter){c.shatter=!0;for(let v=0;v<36;v++){const S=Math.random()*Ge,_=Math.random()*1.3,w=t+Math.cos(S)*r*Math.cos(_),T=n+Math.sin(S)*r*Math.cos(_);O(w,T,r*Math.sin(_),Math.cos(S)*p(.8,2),Math.sin(S)*p(.8,2),p(0,1.5),p(.5,.9),v%3?mt.glass:mt.glassL,v%4?2:3,9,!0,.96)}}}}),ot($f(e)?6:3)};xe.camaleon=e=>{const t=e.x,n=e.y,r=p(-2.6,-.6),o=Math.random()*6|0;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=r-(1-u)*1.5,c=r+2.2-(1-u)*1.2;i.fillStyle=mt.ink,Ne(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=mt.face,Ne(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=ir[o],Ne(i,[s,l],[s+Math.cos(c)*12,l+Math.sin(c)*12],4),i.fillStyle=mt.gold;for(let h=0;h<4;h++){const d=h/4*Ge+.4,m=14+a*10;i.fillRect(pt(s+Math.cos(d)*m)-1,pt(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)O(t,n,.5,p(-1.3,1.3),p(-1.3,1.3),p(.8,2),.3,ir[(o+i)%6],2,6,!0)};let se=0,ae=0;function un(e,t,n=0){se=(e-t)*rt.HW+rt.OX,ae=(e+t)*rt.HH-n*rt.ZK}function en(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Hf=e=>e<0?0:e>1?1:e,ye=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],Ud="#3a2420",Ll="#2a1410",Dl=e=>e>=5?Ud:ye[e<0?0:e|0];function vs(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}q.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=s+(h/(l-1)-.5)*a*1.5;const m=i*p(.7,1);for(let y=0;y<=u;y++){const g=.35+(m-.35)*y/u;d+=p(-.13,.13);const x=(h*(u+1)+y)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const c=(h,d,m)=>{const y=Hf(d/.25)*u;for(let g=0;g<l;g++)for(let x=0;x<u&&x<y;x++){const b=Math.min(1,y-x),v=(g*(u+1)+x)*2;un(f[v],f[v+1]);const S=se,_=ae;un(f[v+2],f[v+3]);const w=S+(se-S)*b,T=_+(ae-_)*b,R=Math.max(1,Math.round(Math.hypot(w-S,T-_)/3)),k=m*(1-x/u*.5);for(let E=0;E<=R;E++)en(h,S+(w-S)*E/R,_+(T-_)*E/R,k)}};A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=Ll,c(h,d*1.8,6)}}),A({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(h,d){const m=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Dl(m/.3),c(h,m,3)}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(h,d){for(let m=0;m<4;m++){const y=d*1.5-m*.13;if(y<=0||y>=1)continue;const g=.4+(i-.4)*y,x=a*(.45+.55*y),b=5+Math.round(g*3);h.globalAlpha=1-y,h.fillStyle=ye[Math.min(3,m+(y*2|0))];for(let v=0;v<=b;v++){const S=s+(v/b-.5)*2*x,_=g*(.9+.1*Math.sin(v*2.3+m*1.7));un(t+Math.cos(S)*_,n+Math.sin(S)*_,.35+.12*Math.sin(v*1.3+d*18)),en(h,se,ae,8-m-y*4)}}}});for(let h=0;h<32;h++){const d=s+p(-a,a)*.9,m=p(.3,1)*i*2.4;O(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,p(1.2,3),p(.7,1.05),ye[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+p(-a,a),m=p(.6,1)*i*3.2;O(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,p(.4,1.4),.35,ye[0],2,1,!0,.98)}ot(3)};const Ld=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],La=[],Wf=[],Vf=[];Ld.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(La.push(n-2),Wf.push(t),Vf.push(r))}});const qf=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function Dd(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":ye[0]:qf[i];for(let a=0;a<La.length;a++)Vf[a]===i&&e.fillRect(Math.round(t+La[a]*r),Math.round(n+Wf[a]*r),r,r)}}q.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)O(i+p(-.3,.3),a+p(-.3,.3),p(.2,.8),p(-1.8,1.8),p(-1.8,1.8),p(1.5,3),p(.5,.8),qf[2+(s&1)],4,9,!1,.95)};A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=lt(s.uid),u=a*t;if(!l||l.dead||M.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const y=m<n?0:1,b=(y?m-n:m)/(y?r:n)*Math.PI*2+(y?-u*1.1+.3:u*.8),v=Math.sin(b)>0;if(d===0===v)continue;const S=m*.035,_=Hf((u-S)/.08);if(_<=0)continue;const w=(y?22:30)*c,T=(y?8:11)*c;un(l.x,l.y,y?.62:.22),i.globalAlpha=v?1:.4,Dd(i,se+Math.cos(b)*w,ae+Math.sin(b)*T-10*(1-_)-6*c,h,u-S<.12)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){un(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=ye[1];for(let l=2;l<s;l+=3)en(i,se+l,ae+l*.7,4),en(i,se-l,ae+l*.7,4),en(i,se+l,ae-l*.7,4),en(i,se-l,ae-l*.7,4);i.fillStyle=ye[0],en(i,se,ae,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;O(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,p(.6,1.2),p(.5,.8),ye[1+i%3],2,-1,!0,.9)}};q.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=o-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let m=0;m<c;m++){const y=(m+.5)/c,g=p(-.16,.16);h[m*4]=t+a*y-f*g,h[m*4+1]=n+s*y+u*g,h[m*4+2]=p(18,30),h[m*4+3]=y*r}const d=r+1.9;A({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,y){const g=y*d;for(let x=0;x<c;x++){const b=g-h[x*4+3];if(b<0)continue;const v=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(v<=0)continue;un(h[x*4],h[x*4+1]);const S=h[x*4+2];m.globalAlpha=v*.8,m.fillStyle=Ll,vs(m,se,ae+1,S+6);const _=b/.3|0;m.globalAlpha=v,m.fillStyle=Dl(_),vs(m,se,ae,S*(_<5?.8:.6)),_<4&&dt(x*7+(g*12|0))>.72&&(m.fillStyle=ye[0],m.fillRect(Math.round(se+(dt(x*3+(g*12|0))-.5)*S*.5),Math.round(ae-2),2,2))}m.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,y,g){const x=lt(g.uid),b=x?x.x:o,v=x?x.y:i;un(b,v,.4);const S=se,_=ae;un(b+u,v+f,.4);let w=se-S,T=ae-_;const R=Math.hypot(w,T)||1;w/=R,T/=R;const k=1-y*.6;for(let E=0;E<9;E++){const L=(10+E*5*(.8+Math.random()*.4))*k;m.globalAlpha=1-E/10,m.fillStyle=ye[Math.min(4,E>>1)],en(m,S-w*L+(Math.random()-.5)*3,_-T*L+(Math.random()-.5)*3,(10-E)*k)}if(g.n<22&&y<.9){for(let E=0;E<2;E++){const L=p(-2.5,2.5);O(b,v,.35,-u*2-f*L,-f*2+u*L,p(.5,1.6),.5,ye[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&y>.85){g.end=!0;for(let E=0;E<8;E++){const L=E/8*6.28;O(b,v,.1,Math.cos(L)*2.5+u,Math.sin(L)*2.5+f,.4,.6,E&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const y=m/8*6.28;O(t,n,.1,Math.cos(y)*3,Math.sin(y)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}ot(4)};const qi=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],Yi=[],Yf=[],Kf=[];qi.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,a)=>a<0||a>=qi.length||i<0||i>=e.length||qi[a][i]===".";Yi.push(n-9),Yf.push(t),Kf.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const Xd=["#ff7a20","#ffd84a","#fffbe0"];q.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=c-d*.05;m<0||(un(s[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=Ll,vs(u,se,ae+1,46),u.globalAlpha=h,u.fillStyle=Dl(m/.45),vs(u,se,ae,26))}u.globalAlpha=1}}),A({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const c=r*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const m=d/h*6.28;un(t+Math.cos(m)*c,n+Math.sin(m)*c),u.fillStyle=ye[d&1],en(u,se,ae,7*(1-f)+2)}}}),A({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const m=h-d*.05;if(m<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let S=0;S<5;S++)O(s[d],l[d],.3,p(-.8,.8)+(s[d]-t)*.4,p(-.8,.8)+(l[d]-n)*.4,p(3,5),p(.6,.9),ye[S%4],3,6,!0,.97)}const y=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(y<=0)continue;const g=95*y;un(s[d],l[d]);const x=se,b=ae;u.globalAlpha=Math.min(1,y*1.5);const v=h*24|0;for(let S=0;S<g;S+=4){const _=S/g,w=16*(1-_*.75)+(dt(d*31+S+v)-.5)*4,T=(dt(d*17+S*3+v)-.5)*7*_;if(u.fillStyle=_<.25?ye[1]:_<.6?ye[2]:ye[3],u.fillRect(Math.round(x+T-w/2),Math.round(b-S-4),Math.round(w),4),_<.7){u.fillStyle=ye[0];const R=w*.4;u.fillRect(Math.round(x+T-R/2),Math.round(b-S-4),Math.max(2,Math.round(R)),4)}}}}}),A({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,un(t,n,h);const m=se,y=ae-qi.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=Xd[g];for(let x=0;x<Yi.length;x++){if(Kf[x]!==g)continue;const b=Math.abs(Yi[x]),v=b>=4?Math.round(Math.sin(c*14)*(b-3)*.45):0;u.fillRect(Math.round(m+Yi[x]*d-d/2),Math.round(y+(Yf[x]+v)*d),d,d)}}}}),ot(9)};xe.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)O(t,n,.45,p(-1.3,1.3),p(-1.3,1.3),p(1.6,3.2),p(.3,.5),o<3?ye[0]:ye[1],2,10,!0,.97);O(t,n,.45,p(-.5,.5),p(-.5,.5),1,.45,ye[2],3,8,!0,.95),A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){un(t,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?ye[1]:ye[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),c=a*u*.7;en(o,se+f,ae+c,3),en(o,se-c/.7,ae+f*.7,3),en(o,se-f,ae-c,3),en(o,se+c/.7,ae-f*.7,3)}i<.3&&(o.fillStyle=ye[0],en(o,se,ae,6))}})};const Ue="#fff2d6",hn="#e2b878",Po="#9a6232",Yr="#4e2e16",Ai="#e8643a",xi="#ffcc66",Xl="#a07a48",je=Math.round,vr=Math.PI*2;function _e(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(je(t),je(n),r,o)}function Un(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(je(t+(r-t)*l/s-i/2),je(n+(o-n)*l/s-i/2),i,i)}function zo(e,t,n,r,o,i=Ai){const a=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?Po:l>.82?i:Ue,e.fillRect(je(t+(r-t)*l-u/2),je(n+(o-n)*l-u/2),u,u)}}function Bs(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=je(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(je(t-a),je(n+i),a*2,2)}}function jf(e,t){const n=(e-t)*rt.HW,r=(e+t)*rt.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Qf=e=>{const t=lt(e);return t&&!t.dead&&!Fe(t)?t:null},Gd=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Nd=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);ve.erizo_A=(e,t,n,r,o)=>{e.translate(je(n),je(r)),e.rotate(o),_e(e,-15,-2,16,4,Yr),_e(e,-14,-1,14,2,hn),_e(e,-9,-1,3,2,Ue),_e(e,-4,-1,3,2,Ue),_e(e,0,-2,3,4,Yr),_e(e,3,-1,3,2,Ai),_e(e,6,0,2,1,xi),_e(e,-17,-4,5,2,Ue),_e(e,-17,2,5,2,Ue),Math.random()<.3&&O(t.x,t.y,t.z||.45,0,0,-.3,.25,hn,2,0,!1)};xe.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:p(0,vr),l:p(8,12)}));A({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of t)zo(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)O(e.x,e.y,.45,p(-2,2),p(-2,2),p(.5,2),.3,n%2?hn:Ue,2,6,!1)};ve.erizo_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;e.translate(je(n),je(r)),e.rotate(o),_e(e,-31,-3,32,6,Yr);for(let u=0;u<30;u+=6)_e(e,-30+u,-2,3,4,Ue),_e(e,-30+u+3,-2,3,4,Po);_e(e,0,-3,4,6,Yr),_e(e,4,-2,4,4,Ai),_e(e,8,-1,3,2,xi);for(let u=0;u<3;u++)_e(e,-36+u*3,-6+u,4,2,Ue),_e(e,-36+u*3,4-u,4,2,Ue);Vt(!0);const l=$e();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=xi;for(let u=0;u<5;u++)l.fillRect(-6-u*6,je(Math.sin(i*38+u*1.3)*5)-1,2,2);Vt(!1),Math.random()<.5&&O(t.x,t.y,s,p(-.4,.4),p(-.4,.4),.3,.35,Math.random()<.5?Ue:hn,2,3,!1)};q.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=jf(t,n),i=-o,a=r;A({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,c]=C(e.x+t*.35,e.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),m=f+r*d,y=c+o*d,g=f+i*15-r*5,x=c+a*15-o*5,b=f-i*15-r*5,v=c-a*15-o*5;l.globalAlpha=1-u,Un(l,f+r*3,c+o*3,g,x,3,Po),Un(l,f+r*3,c+o*3,b,v,3,Po),Un(l,g,x,m,y,2,Ue),Un(l,b,v,m,y,2,Ue)}}),A({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,c]=C(e.x+t*.5,e.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),y=Math.sin(d),g=r*m-o*y,x=r*y+o*m,b=d?h*.55:h;Un(l,f,c,f+g*b,c+x*b,3,xi),Un(l,f,c,f+g*b*.5,c+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)O(e.x-t*.2,e.y-n*.2,.4,-t*p(1,2.5)+p(-.5,.5),-n*p(1,2.5)+p(-.5,.5),p(.3,1),.45,l%2?hn:Xl,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+p(-.25,.25),f=p(5,9);O(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,p(0,.6),.22,l%2?xi:Ue,2,0,!0,.86)}ot(1.5)};q.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=Qf(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?Nd(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=C(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*vr+.17,y=Math.sin(m);if(y>=0!==o)continue;const g=u<t?Math.sin(M.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=c+Math.cos(m)*16,v=h+y*12,S=b+Math.cos(m)*x+g,_=v+y*x*.75-x*.3;zo(i,b,v,S,_,(M.T*7+d*.37)%1<.12?"#ffffff":Ai)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),A({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*vr,[u,f]=C(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[c,h]=C(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Un(o,u,f,c,h,2,s%2?hn:Po)}}});for(let o=0;o<14;o++){const i=o/14*vr,a=p(2,3.5);O(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,p(1.5,3),.5,o%3?Ue:hn,2,8,!1,.92)}ot(2)};q.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=jf(o,i),c=u>=0?1:-1;A({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,y,g){const x=y*g.dur,b=Math.min(1,x/r);let v=e.x+o*b,S=e.y+i*b;const _=lt(e.uid);if(_){if(_.dead||Fe(_))return;v=_.x,S=_.y}const[w,T]=C(v,S,.32),R=16,k=x*36*c;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let E=0;E<3;E++){const L=(E-1)*9;Un(m,w-u*(R+4)-f*L,T-f*(R+4)+u*L,w-u*(R+18+E*5)-f*L,T-f*(R+18+E*5)+u*L,2,hn)}Bs(m,w,T,R+1,Yr),Bs(m,w,T,R-1,Po),Bs(m,w-4,T-4,R-9,hn);for(let E=0;E<10;E++){const L=k+E*vr/10,H=Math.cos(L),Q=Math.sin(L);zo(m,w+H*(R-3),T+Q*(R-3),w+H*(R+10),T+Q*(R+10))}}});const h=Math.max(4,Math.min(10,je(a*2.2))),d=Array.from({length:h},(m,y)=>({k:(y+.5)/h,o:p(-.28,.28),lean:p(-6,6),h:p(9,14)}));A({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,y,g){const x=y*g.dur,b=Math.min(1,(g.dur-x)/.5);for(const v of d){if(x<v.k*r)continue;const S=Math.min(1,(x-v.k*r)/.08),[_,w]=C(e.x+o*v.k+s*v.o,e.y+i*v.k+l*v.o);m.globalAlpha=b*.45,_e(m,_-4,w-1,8,3,Yr),m.globalAlpha=b,zo(m,_+v.lean*S,w-v.h*S,_,w)}}});for(let m=0;m<12;m++){const y=Math.random();O(e.x+o*y+p(-.2,.2),e.y+i*y+p(-.2,.2),.1,p(-.6,.6),p(-.6,.6),p(.5,1.4),p(.4,.7),m%2?hn:Xl,3,4,!1,.9)}for(let m=0;m<6;m++){const y=m%2?1:-1;O(e.x,e.y,.35,s*y*p(2,4),l*y*p(2,4),p(1.5,3),.45,Ue,2,8,!1,.92)}ot(2)};q.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=Gd(e),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(l,u)=>{const f=Math.random()*vr,c=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(f)*c,y:e.y+Math.sin(f)*c,t0:.12+u/i*(r-.5)+p(0,.08),lean:p(-7,7),h:p(10,15),hit:!1}});A({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur,h=Math.min(1,(f.dur-c)/.5),d=t*(c<.3?1.5-.5*(c/.3):1);l.globalAlpha=.85*h;for(let m=0;m<8;m++){const y=m*vr/8+c*.4;for(const g of[-.09,.09]){const[x,b]=C(e.x+Math.cos(y+g)*d,e.y+Math.sin(y+g)*d),[v,S]=C(e.x+Math.cos(y)*(d-.35),e.y+Math.sin(y)*(d-.35));Un(l,x,b,v,S,3,Ai)}}l.globalAlpha=.45*h;for(let m=0;m<48;m++){const y=m/48*vr-c*.2,[g,x]=C(e.x+Math.cos(y)*t,e.y+Math.sin(y)*t);_e(l,g-1,x-1,2,2,hn)}for(const m of a){if(c<m.t0+o)continue;const[y,g]=C(m.x,m.y);l.globalAlpha=.4*h,_e(l,y-4,g-1,8,3,Yr),l.globalAlpha=h,zo(l,y+m.lean,g-m.h,y,g)}}}),A({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur;for(const h of a){const d=(c-h.t0)/o;if(d<0)continue;if(d>=1){h.hit||(h.hit=!0,O(h.x,h.y,.05,p(-.6,.6),p(-.6,.6),p(.8,1.6),.4,Math.random()<.5?hn:Xl,2,7,!1));continue}const[m,y]=C(h.x,h.y,3.6*(1-d)),g=h.lean*1.4;l.globalAlpha=.35,Un(l,m+g*2.4,y-52,m+g,y-22,1,Ue),l.globalAlpha=1,zo(l,m+g,y-22,m,y)}}});const s=Qf(e.uid);if(s)for(let l=0;l<10;l++)O(s.x,s.y,.6,p(-.4,.4),p(-.4,.4),p(7,10),.45,l%2?Ue:hn,2,0,!1,1);ot(2)};let oe=0,ie=0;function Ve(e,t,n=0){oe=(e-t)*rt.HW+rt.OX,ie=(e+t)*rt.HH-n*rt.ZK}function Cn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Gl=e=>e<0?0:e>1?1:e,Zf=e=>1-(1-e)*(1-e),qt=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],He=["#ffe0f4","#ff9ad8","#e060b0"],wr=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],Ee=["#ffffff","#fff2a0","#ffd24a"];function Nl(e,t,n,r){const o=[],i=[],a=[],s=[],l=e.length,u=(f,c)=>c<0||c>=l||f<0||f>=e[c].length||t.indexOf(e[c][f])<0;return e.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=t.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),a.push(d),s.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const $s=Nl(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function Jf(e,t,n,r){for(let o=0;o<$s.n;o++)e.fillRect(Math.round(t+$s.X[o]*r-r/2),Math.round(n+$s.Y[o]*r-r/2),r,r)}function Lr(e,t,n,r){Cn(e,t,n,3);for(let o=2;o<=r;o+=2)Cn(e,t+o,n+o,2),Cn(e,t-o,n+o,2),Cn(e,t+o,n-o,2),Cn(e,t-o,n-o,2)}function Da(e,t,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,c=Math.sin(l)*r*i,h=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(a+1)));for(let y=0;y<m;y++){const g=y/m;Cn(e,t+f+(h-f)*g,n+c+(d-c)*g,a)}}}function yu(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const Ho=new Map;function tc(e,t,n=!1){if(e.id==null)return;let r=Ho.get(e.id);if(!r){Ho.size>200&&Ho.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},Ho.set(e.id,r);const o=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=M.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,Ho.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}q.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){Ve(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=qt[1],Da(r,oe,ie,i,o*Math.PI,.75,3),r.fillStyle=He[1],Da(r,oe,ie,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=qt[0],Cn(r,oe,ie,4)}});for(let r=0;r<6;r++)O(t,n,.45,p(-1,1),p(-1,1),p(.3,1),.4,r&1?He[1]:qt[1],2,0,!0)};ve.gato_Q=(e,t,n,r,o,i)=>{tc(t,Bd);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let h=1;h<16;h++){const d=8+h*3.2,m=Math.sin(h*.7-i*22)*(2+h*.35);e.globalAlpha=1-h/16,e.fillStyle=h&1?He[1]:He[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(r+s*d+u*m),2,2)}e.globalAlpha=1,Vt(!0);const f=$e();f.fillStyle=qt[3],f.globalAlpha=.16,yu(f,n,r,20),f.globalAlpha=.22,yu(f,n,r,13),f.globalAlpha=1,Vt(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(m>9)continue;let y;m>6?y=qt[4]:d===-2&&h===-2?y=qt[0]:y=((d*.8+h+c)%4+4)%4<1.3?qt[1]:qt[2],e.fillStyle=y,e.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function Bd(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)O(t,n,.45,p(-.6,.6),p(-.6,.6),p(0,.6),.4,o&1?He[1]:qt[2],2,1,!0);return}const r=Math.random()*6.28;A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){Ve(t,n,.45);const a=Math.round(14*Gl(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,c=l+u*.3;o.fillStyle=u+s&1?He[1]:qt[1],o.fillRect(Math.round(oe+Math.cos(c)*f),Math.round(ie+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=qt[0],Cn(o,oe,ie,10*(1-i*3)))}});for(let o=0;o<10;o++)O(t,n,.45,p(-1.4,1.4),p(-1.4,1.4),p(.5,1.5),p(.4,.6),o&1?He[0]:qt[1],2,2,!0);ot(2)}const Kn=Nl(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);q.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,m=Math.cos(d),y=Math.sin(d),g=Math.atan2(m+y,m-y),x=g+Math.PI/2,b=Math.cos(x),v=Math.sin(x),S=new Float32Array(Kn.n*2);for(let _=0;_<Kn.n;_++)S[_*2]=Kn.X[_]*b-Kn.Y[_]*v,S[_*2+1]=Kn.X[_]*v+Kn.Y[_]*b;o.push({x:t+m*u,y:n+y*u,t:f+h*.014,c:S})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,y=3*m,g=Math.max(2,Math.round(y*.6)),x=Math.round(y);Ve(h.x,h.y),l.globalAlpha=c*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?wr[3]:b===1?wr[1]:wr[0];for(let v=0;v<Kn.n;v++){const S=Kn.B[v]===1,_=Kn.Y[v]<0;(b===0?!S:b===1?S||_:S||!_)||l.fillRect(Math.round(oe+h.c[v*2]*y-x/2),Math.round(ie+h.c[v*2+1]*y*.5-g/2),x,g)}}}l.globalAlpha=1}});const s=Math.random()*6.28;A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*Zf(Gl(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),m=Math.sin(h);for(let y=.25;y<f;y+=.16)Ve(t+d*y,n+m*y),l.fillStyle=y<f*.5?wr[1]:wr[2],Cn(l,oe,ie,4-y/r*2);if(f>r*.4){const y=f*.6;for(let g=-1;g<=1;g+=2){const x=h+g*.75;for(let b=.12;b<.45;b+=.12)Ve(t+d*y+Math.cos(x)*b,n+m*y+Math.sin(x)*b),l.fillStyle=wr[0],Cn(l,oe,ie,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;O(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,p(.3,1.1),Math.cos(u)*p(.5,2),Math.sin(u)*p(.5,2),p(0,.4),p(.7,1.1),wr[l%2],2,.5,!0,.95)}ot(4)};const Ar=Nl([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);q.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;A({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){Ve(t,n);const l=3,u=oe,f=ie-2;for(let c=0;c<3;c++){a.fillStyle=c===0?qt[3]:c===1?qt[1]:Ee[1];for(let h=0;h<Ar.n;h++){if((Ar.K[h]===1?2:Ar.B[h]?1:0)!==c)continue;const m=dt(h*7.13+i),y=-Ar.Y[h]/(Ar.h-1);m*.6+y*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+Ar.X[h]*l-l/2),Math.round(f+Ar.Y[h]*l-s*18*m),l,l))}}}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(Ve(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-c,a.fillStyle=u&1?He[1]:qt[1],Lr(a,oe,ie,8*(1-c)+2))}}}),A({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){Ve(r,o,1.05);const l=oe,u=ie,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let m=0;m<5;m++){const y=c[m]*2,g=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?Ee[2]:Ee[1],a.fillRect(Math.round(d-y/2),Math.round(u+(m-2.5)*2*f),y,g)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=He[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=qt[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)O(t,n,.5,p(-.8,.8),p(-.8,.8),p(.5,1.5),.5,qt[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;O(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,p(.2,1),.45,a&1?He[1]:qt[1],2,0,!0,.9)}};const Ri=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Hs=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],Ws=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0];q.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*rt.HW*Math.SQRT2;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(x,b){const v=b*1.1;Ve(t,n);const S=oe,_=ie;x.globalAlpha=b>.85?(1-b)/.15:1;const w=Ws.length/2,T=Gl(v/.45)*w;x.fillStyle=qt[1];for(let R=0;R<w&&R<T;R++){const k=Ws[R*2],E=Ws[R*2+1],L=Math.min(1,T-R),H=S+Ri[k]*i,Q=_+Hs[k]*i*.55,ut=S+Ri[E]*i,At=_+Hs[E]*i*.55,P=Math.hypot(ut-H,At-Q)*L,z=Math.round(P/6);for(let I=0;I<=z;I++){const U=I*6/(P||1)*L;x.fillRect(Math.round(H+(ut-H)*U),Math.round(Q+(At-Q)*U),2,2)}}for(let R=0;R<Ri.length;R++)x.fillStyle=R>=9?Ee[2]:Ee[1],Lr(x,S+Ri[R]*i,_+Hs[R]*i*.55,3+3*(.5+.5*Math.sin(M.T*9+R*1.7)))}});const a=12,s=new Float32Array(a),l=new Float32Array(a),u=new Float32Array(a);for(let x=0;x<a;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r*.9;s[x]=t+Math.cos(b)*v,l[x]=n+Math.sin(b)*v,u[x]=.45+x/(a-1)*.55+p(-.03,.03)}const f=.32,c=Math.hypot(40,4.5*rt.ZK),h=40/c,d=-352.8/c;A({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(x,b,v){const S=b*1.2;for(let _=0;_<a;_++){const w=S-(u[_]-f);if(!(w<0))if(w<f){const T=w/f;Ve(s[_],l[_],4.5*(1-T));const R=oe+(1-T)*40,k=ie;for(let E=-1;E<=1;E++){const L=E*.12,H=h*Math.cos(L)-d*Math.sin(L),Q=h*Math.sin(L)+d*Math.cos(L);x.fillStyle=E===0?He[1]:qt[1];for(let ut=1;ut<10;ut++)x.globalAlpha=1-ut/10,x.fillRect(Math.round(R+H*ut*3.2+E*3),Math.round(k+Q*ut*3.2),2,2)}x.globalAlpha=1,x.fillStyle=Ee[1],x.fillRect(Math.round(R-6),Math.round(k-1),12,2),x.fillRect(Math.round(R-1),Math.round(k-6),2,12),x.fillStyle=Ee[0],x.fillRect(Math.round(R-2),Math.round(k-2),4,4)}else{if(!(v.landed&1<<_)){v.landed|=1<<_;for(let R=0;R<2;R++)O(s[_],l[_],.1,p(-1,1),p(-1,1),p(1,2),.45,R?Ee[1]:He[1],2,4,!0)}const T=(w-f)/.2;if(T>=1)continue;Ve(s[_],l[_]),x.globalAlpha=1-T,x.fillStyle=Ee[1],Lr(x,oe,ie,2+T*8)}}x.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(x,b,v){if(!v.boom){v.boom=!0,ot(8);for(let R=0;R<28;R++){const k=Math.random()*6.28,E=p(1,3.5);O(t,n,.3,Math.cos(k)*E,Math.sin(k)*E,p(1.5,3.5),p(.5,.8),[Ee[1],qt[1],He[1],qt[0]][R&3],3,5,!0,.95)}}const S=.3+(r-.3)*Zf(b),_=b*2;Ve(t,n,.2);const w=oe,T=ie;if(b<.35){const R=1-b/.35;x.fillStyle=qt[1],x.globalAlpha=R*.25,x.fillRect(Math.round(w-70),Math.round(T-35),140,70),x.globalAlpha=R*.4,x.fillRect(Math.round(w-40),Math.round(T-20),80,40),x.fillStyle=qt[0],x.globalAlpha=R*.7,x.fillRect(Math.round(w-15),Math.round(T-8),30,16)}x.globalAlpha=1-b*b;for(let R=0;R<10;R++){const k=_+R/10*6.28;Ve(t+Math.cos(k)*S,n+Math.sin(k)*S,.35+.2*Math.sin(b*6+R)),x.fillStyle=R&1?Ee[2]:Ee[1],Jf(x,oe,ie,3),x.fillStyle=Ee[0],x.fillRect(Math.round(oe-1),Math.round(ie-1),2,2)}}});const m=24,y=new Float32Array(m),g=new Float32Array(m);for(let x=0;x<m;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r;y[x]=t+Math.cos(b)*v,g[x]=n+Math.sin(b)*v}A({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(x,b){const v=M.T*8|0;for(let S=0;S<m;S++){const _=dt(S*13+v);_<.25||(Ve(y[S],g[S]),x.globalAlpha=(1-b)*_,x.fillStyle=S%3?qt[1]:Ee[1],x.fillRect(Math.round(oe),Math.round(ie),2,2))}}})};ve.gato_A=(e,t,n,r,o,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);tc(t,$d,a),Vt(!0);const s=$e(),l=Math.cos(o),u=Math.sin(o);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?He[1]:qt[1],Cn(s,n-l*h*5,r-u*h*5,4-h*.6);s.globalAlpha=1;const f=a?7:5,c=(i*16|0)&1;if(s.fillStyle=qt[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(s.fillStyle=He[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=Ee[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}Vt(!1)};function ec(e,t,n){A({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){Ve(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=qt[1],Da(r,oe,ie,i,Math.PI/4,.75,2),r.fillStyle=He[1],Lr(r,oe+i,ie,3),Lr(r,oe-i,ie,3),Lr(r,oe,ie+i*.75,3),Lr(r,oe,ie-i*.75,3),n&&(r.fillStyle=Ee[1],Jf(r,oe,ie-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)O(e,t,.45,p(-1,1),p(-1,1),p(.3,1.2),.35,n&&r&1?Ee[1]:qt[1],2,1,!0)}function $d(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;ec(t,n,e.crit),vt.sfx("atk_gato",t,n,e.crit?.9:.6)}xe.gato=e=>ec(e.x,e.y,!!e.big);const St=Math.round,ce=Math.PI*2;let gt=0,xt=0;function Yt(e,t,n=0){gt=(e-t)*rt.HW+rt.OX,xt=(e+t)*rt.HH-n*rt.ZK}function Be(e,t,n,r,o){e.fillStyle=o,e.fillRect(St(t-r/2),St(n-r/2),r,r)}function Br(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(St(t+(r-t)*l/s-i/2),St(n+(o-n)*l/s-i/2),i,i)}function Dr(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(St(t-a/2),St(n+i*o),St(a),Math.max(1,St(2*o)))}}const br=e=>e<0?0:e>1?1:e,sr=e=>1-(1-e)*(1-e),N={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},to=new Float32Array(72),eo=new Float32Array(72);function Pn(e,t,n,r,o,i,a,s,l,u,f,c,h){const d=r-t,m=o-n,y=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(y/i))),x=-m/y,b=d/y;for(let S=0;S<=g;S++){const _=S/g,w=S===0||S===g?0:(dt(s+S*7.31)-.5)*2*a*Math.sqrt(Math.sin(_*Math.PI));to[S]=t+d*_+x*w,eo[S]=n+m*_+b*w}if(f>0)for(let S=0;S<g;S++)Br(e,to[S],eo[S],to[S+1],eo[S+1],f,l);for(let S=0;S<g;S++)Br(e,to[S],eo[S],to[S+1],eo[S+1],c,u);const v=Math.atan2(m,d);for(let S=0;S<h;S++){const _=1+Math.floor(dt(s+S*3.7+50)*Math.max(1,g-1));let w=to[_],T=eo[_],R=v+(dt(s+S*9.1)>.5?1:-1)*(.45+dt(s+S*1.3)*.6);for(let k=0;k<3;k++){const E=i*(1-k*.2),L=w+Math.cos(R)*E,H=T+Math.sin(R)*E;Br(e,w,T,L,H,Math.max(1,c-1),k?l:u),w=L,T=H,R+=(dt(s+S*5+k)-.5)*1.3}}}function bs(e,t,n,r,o,i,a,s){let l=t,u=n,f=r;for(let c=0;c<5;c++){f+=(dt(o+c)-.5)*.9;const h=i*(1-c*.13),d=l+Math.cos(f)*h,m=u+Math.sin(f)*h*.5;if(Br(e,l,u,d,m,2,a),dt(o+c*3.3)>.45){const y=f+(dt(o+c*7)>.5?.85:-.85);Br(e,d,m,d+Math.cos(y)*h*.6,m+Math.sin(y)*h*.3,2,a)}l=d,u=m}s&&Be(e,l,u,3,s)}function Ms(e,t,n,r,o){e.fillStyle=N.cloudD,e.fillRect(St(t-3*r),St(n-r),6*r,2*r),e.fillStyle=o?N.cloudL:N.cloud,e.fillRect(St(t-2*r),St(n-2*r),4*r,2*r),e.fillStyle=o?N.pale:N.cloudM,e.fillRect(St(t-r),St(n-2.6*r),2*r,St(r*.8))}q.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;A({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Yt(t,n,.6);const a=gt,s=xt,l=M.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=dt(r+u+l*3)*ce,c=10+dt(r+u*2+l)*14;Pn(o,a,s,a+Math.cos(f)*c,s+Math.sin(f)*c*.7,5,3,r+u*11+l,N.cyan,N.white,0,1,0)}Be(o,a,s,St(8*(1-i))+2,N.white)}});for(let o=0;o<8;o++)O(t,n,.6,p(-1.5,1.5),p(-1.5,1.5),p(.5,2),.25,o&1?N.cyan:N.white,2,3,!0)};const Pi=new Map;ve.halcon_Q=(e,t,n,r,o,i)=>{let a=t.id!=null?Pi.get(t.id):void 0;t.id!=null&&!a&&(Pi.size>64&&Pi.clear(),a=[t.x,t.y],Pi.set(t.id,a));const s=Math.cos(o),l=Math.sin(o),u=150;let f=n-s*u,c=r-l*u;Vt(!0);const h=$e();if(a){Yt(a[0],a[1],t.z||.45);const y=Math.hypot(n-gt,r-xt);if(y<u)f=gt,c=xt;else{h.globalAlpha=.4,h.fillStyle=N.blue;const g=Math.min(80,Math.floor((y-u)/9)),x=i*20|0;for(let b=0;b<g;b++){if(dt(b*3.1+x)<.35)continue;const v=(u+b*9)/y;h.fillRect(St(n+(gt-n)*v),St(r+(xt-r)*v),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;h.globalAlpha=.16,h.fillStyle=N.blue,Dr(h,n,r,18),h.globalAlpha=1,Pn(h,n,r,f,c,11,7,d,N.cyan,N.white,4,2,2);const m=5+((i*30|0)&1)*3;h.fillStyle=N.pale,h.fillRect(St(n-m),St(r-1),m*2,2),h.fillRect(St(n-1),St(r-m),2,m*2),h.fillStyle=N.white,h.fillRect(St(n-3),St(r-3),6,6),Vt(!1)};q.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ce;A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){Yt(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)bs(i,gt,xt,o+s*ce/6,r+s*13,9,N.scorch)}}),A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){Yt(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)bs(i,gt,xt,o+s*ce/6,r+s*13,9,N.cyan,N.white)}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Yt(t,n,.5);const s=M.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=dt(r+l*5+s)*ce,f=18+dt(r+l+s*2)*16;Pn(i,gt,xt-6,gt+Math.cos(u)*f,xt+Math.sin(u)*f*.6,6,4,r+s*7+l,N.blue,N.pale,3,1,0)}a<.3&&Be(i,gt,xt,St(22*(1-a/.3))+2,N.white)}});for(let i=0;i<12;i++)O(t,n,.5,p(-2.2,2.2),p(-2.2,2.2),p(1,2.6),p(.25,.45),i%3?N.cyan:N.yel,2,7,!0,.9);ot(2)};const Ki=new Map;q.halcon_W=e=>{if(e.type==="splash"||e.impact){Hd(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Yt(t,n);const a=gt,s=xt;Yt(r,o);const l=Math.hypot(gt-a,xt-s)||1,u=(gt-a)/l,f=(xt-s)/l;Ki.size>32&&Ki.clear(),Ki.set(e.uid,[u,f]);for(let c=0;c<8;c++)O(t,n,.7,p(-1,1),p(-1,1),p(1,2.5),p(.6,.9),c%3?N.featherL:N.cream,3,1.2,!1,.9);A({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(c,h){Yt(r,o);const d=gt,m=xt,y=64*(1-sr(h))+24,g=h*2.6;c.globalAlpha=.5+.5*h;const x=h>.75&&(M.T*20|0)&1?N.white:N.cyan;for(let b=0;b<4;b++){const v=g+b*ce/4;for(let S=-3;S<=3;S++){const _=v+S*.09;Be(c,d+Math.cos(_)*y,m+Math.sin(_)*y*.5,3,x)}for(let S=1;S<=2;S++)Be(c,d+Math.cos(v)*(y-S*5),m+Math.sin(v)*(y-S*5)*.5,2,N.white)}Be(c,d,m,3,N.white)}}),A({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(c,h){const d=br(h*(i+.15)/i),m=-f,y=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;Yt(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,v=gt,S=xt-b,_=1-g/12;c.globalAlpha=_*(h>.8?(1-h)/.2:1);for(const w of[-1,1]){const T=15+Math.sin(x*30+w)*4,R=Math.cos(x*34*w)*3;Be(c,v+m*T*w+R,S+y*T*w-Math.sin(x*34)*3,g<3?3:2,g<4?N.white:N.pale)}g%3===0&&(c.fillStyle=N.cyan,c.fillRect(St(v-u*10),St(S-f*10),2,2))}}})};function Hd(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=Ki.get(e.uid)||[0,1];A({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){Yt(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*ce+dt(o+l)*.5,f=r*rt.HW*(.5+dt(o+l*3)*.4);Br(a,gt,xt,gt+Math.cos(u)*f*.6,xt+Math.sin(u)*f*.3,2,N.ash),Br(a,gt+Math.cos(u)*f*.6,xt+Math.sin(u)*f*.3,gt+Math.cos(u+.25)*f,xt+Math.sin(u+.25)*f*.5,2,N.ash)}Be(a,gt,xt,8,N.ash)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=M.T*30|0;for(let f=0;f<2;f++){const c=br(s*1.4-f*.2);if(c<=0||c>=1)continue;const h=.2+r*1.1*sr(c);a.globalAlpha=1-c;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*ce;Yt(t+Math.cos(m)*h,n+Math.sin(m)*h),Be(a,gt,xt,f?2:3,f?N.pale:N.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const c=f/u*ce+s*.8,h=(f+1)/u*ce+s*.8;Yt(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85);const d=gt,m=xt;Yt(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85),Pn(a,d,m-4,gt,xt-4,7,4,o+f*9+l,N.blue,N.pale,0,2,0),Be(a,d,m-4,4,N.white)}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+r*1.3*sr(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*ce+.2;Yt(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const c=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let h=-2;h<=2;h++){const d=c+h*.35,m=9-Math.abs(h);Be(a,gt-Math.cos(c)*6+Math.cos(d)*m,xt-Math.sin(c)*6+Math.sin(d)*m,h?2:3,h?N.pale:N.white)}}s<.2&&(a.globalAlpha=1-s/.2,Yt(t,n,.2),a.fillStyle=N.white,Dr(a,gt+i[0]*6,xt+i[1]*6,St(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*ce,l=p(1.5,3.5);O(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,p(.5,1.6),p(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)O(t,n,.6,p(-1.2,1.2),p(-1.2,1.2),p(1.5,2.5),p(.8,1.1),a&1?N.featherL:N.feather,3,1.5,!1,.92);ot(6)}q.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,a,s){const l=lt(s.uid);Yt(l?l.x:n,l?l.y:r,.8);const u=gt,f=xt,c=sr(br(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const h of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+h*(.3+c*(.45+d*.24)),y=16+d*5+c*10;for(let g=6;g<y;g+=3){const x=g>y-6;Be(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/y*c*9,x?2:3,x?N.white:d&1?N.pale:N.cyan)}}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,a){const s=.5+(o-.5)*sr(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*ce+a*1.6;for(let f=0;f<3;f++){const c=u+f*.07;Yt(n+Math.cos(c)*s,r+Math.sin(c)*s),Be(i,gt,xt,3-f,f?N.pale:N.white)}}}})}for(let n=0;n<5;n++){const r=n/5*ce;O(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,p(.8,1.5),.4,n&1?N.pale:N.white,2,0,!0)}A({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=lt(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const a=i.x-o.lx,s=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const c=Math.hypot(o.dx,o.dy),h=r*o.dur;n.globalAlpha=Math.min(1,h/.15)*(h>o.dur-.4?(o.dur-h)/.4:1),Yt(i.x,i.y,.45);const d=gt,m=xt;if(c>.35){const y=o.dx/c,g=o.dy/c,x=M.T*70%11;for(let S=0;S<3;S++){const _=14+S*11+x,w=d-y*_,T=m-g*_,R=S===0?N.white:S===1?N.pale:N.cyan;for(const k of[-1,1]){const E=Math.cos(k*.75),L=Math.sin(k*.75),H=-(y*E-g*L),Q=-(y*L+g*E);for(let ut=0;ut<4;ut++)Be(n,w+H*ut*3,T+Q*ut*3,2,R)}}const b=-g,v=y;for(const S of[-1,1])for(let _=0;_<6;_++){const w=10+_*5+M.T*90%5;(_+(S>0?1:0))%3!==0&&(n.fillStyle=N.pale,n.fillRect(St(d-y*w+b*12*S),St(m-g*w+v*12*S),2,1))}}else for(let y=0;y<3;y++){const g=M.T*5+y*ce/3;Be(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,y?N.pale:N.white)}}})};const zi=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],jn=(()=>{const e=[],t=[],n=[],r=zi.length,o=(i,a)=>a>=0&&a<r&&i>=0&&i<zi[a].length&&zi[a][i]!==".";return zi.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:o(s-1,a)&&o(s+1,a)&&o(s,a-1)&&o(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();q.halcon_R=e=>{if(e.type==="global_hit"){Wd(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,a){Yt(t,n,3);const s=gt,l=xt,u=30+60*sr(br(a*2)),f=M.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let c=0;c<9;c++){const h=c/9*ce+a*3.2;Ms(i,s+Math.cos(h)*u,l+Math.sin(h)*u*.38,5+c%3,dt(r+c+f)>.8)}Ms(i,s,l,7,dt(r+f)>.7)}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,a,s){const l=lt(s.uid),u=l?l.x:t,f=l?l.y:n;Yt(t,n,3);const c=gt,h=xt,d=30+60*sr(br(a*2)),m=M.T*15|0,y=a>.75?(1-a)/.25:1;if(i.globalAlpha=y,dt(r+m*1.7)>.45){const x=dt(r+m)*ce,b=x+1.2+dt(r+m*3)*2;Pn(i,c+Math.cos(x)*d,h+Math.sin(x)*d*.38,c+Math.cos(b)*d,h+Math.sin(b)*d*.38,9,6,r+m,N.blue,N.pale,3,1,1)}const g=a*o;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(Yt(u,f,1),Pn(i,c,h+8,gt,xt,12,10,r+(g*25|0),N.blue,N.white,5,2,2)),g>.3){const x=br((g-.3)/.35),b=St(2+2*sr(x)),v=(M.T*24|0)%5===0?.5:1;Yt(u,f,2.2+x*.4);const S=gt,_=xt;i.globalAlpha=y*v*(.4+.6*x);for(let w=0;w<3;w++){i.fillStyle=w===0?N.indigo:w===1?N.cyan:N.yel;for(let T=0;T<jn.n;T++)jn.K[T]===w&&i.fillRect(St(S+jn.X[T]*b-b/2),St(_+jn.Y[T]*b-b/2),b,b)}i.fillStyle=N.white;for(let w=0;w<jn.n;w++)jn.K[w]===1&&jn.Y[w]<-2&&i.fillRect(St(S+jn.X[w]*b-1),St(_+jn.Y[w]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*ce,s=p(2,3);O(t+Math.cos(a)*s,n+Math.sin(a)*s,p(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,p(.5,1.2),.6,i%3?N.pale:N.cloudL,2,0,i%3!==0,.97)}ot(5)};function Wd(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ce;vt.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};A({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,c=sr(br(f/.12));Yt(t,n,3.6);const h=gt,d=xt,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let y=0;y<6;y++){const g=y/6*ce+r;Ms(l,h+Math.cos(g)*38*c,d+Math.sin(g)*12*c,St(4+2*c),m&&y%2===0)}Ms(l,h,d,St(5+3*c),m)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,c=s(f);Yt(t,n,3.5);const h=gt+(dt(r)-.5)*30,d=xt;if(Yt(t,n,.1),c){const m=r+c*31;l.globalAlpha=.45,Pn(l,h,d,gt,xt,16,22,m,N.indigo,N.blue,0,9,0),l.globalAlpha=1,Pn(l,h,d,gt,xt,16,22,m,N.cyan,N.white,6,3,3),l.globalAlpha=c===1?.35:.18,l.fillStyle=N.pale,Dr(l,gt,xt-20,70,.6)}if(f>.1){const m=br((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=N.cyan,Dr(l,gt,xt,St(26*(1-m*.5)),.5),l.fillStyle=N.white,Dr(l,gt,xt,St(12*(1-m)),.5)}}}),A({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Yt(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=N.scorch,Dr(l,gt,xt,16,.5);for(let f=0;f<8;f++)bs(l,gt,xt,o+f*ce/8,r+f*17,13,N.scorch)}}),A({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Yt(t,n);const f=M.T*25|0;l.globalAlpha=1-u;for(let c=0;c<8;c++)bs(l,gt,xt,o+c*ce/8,r+c*17,13,c&1?N.blue:N.cyan,N.white);for(let c=0;c<3;c++){const h=dt(r+c+f)*ce,d=30+u*60;Pn(l,gt,xt,gt+Math.cos(h)*d,xt+Math.sin(h)*d*.5,7,5,r+f*3+c,N.blue,N.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*ce,f=p(1.5,4);O(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,p(2,4),p(.4,.8),l%3===0?N.yel:l%3===1?N.cyan:N.ash,l%3===2?3:2,8,l%3!==2,.92)}ot(8)}ve.halcon_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;for(let h=0;h<=16;h+=2){const d=h<3?0:h<12?3:2,m=n-a*h,y=r-s*h;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,b=(h===8||h===12)&&g!==0;e.fillStyle=g===0?N.white:b?N.feather:x?N.cyan:N.pale,e.fillRect(St(m+l*g-1),St(y+u*g-1),2,2)}}Vt(!0);const f=$e(),c=i*24|0;f.globalAlpha=.2,f.fillStyle=N.blue,Dr(f,n-a*6,r-s*6,12),f.globalAlpha=1;for(let h=0;h<2;h++){const d=4+dt(c+h*3+(t.id||0))*10,m=h?1:-1,y=n-a*d,g=r-s*d;Pn(f,y,g,y+l*m*9-a*6,g+u*m*9-s*6,4,2,c*7+h,N.cyan,N.white,0,1,0)}f.fillStyle=N.white,f.fillRect(St(n-2),St(r-2),4,4),Vt(!1)};xe.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;A({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(a,s){Yt(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;Pn(a,gt,xt,gt+Math.cos(u)*i*(.6+s*.5),xt+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,o+l,N.cyan,N.white,0,2,0)}Be(a,gt,xt,St((r?10:6)*(1-s))+2,N.white)}});for(let a=0;a<(r?8:4);a++)O(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(.5,1.5),.25,a&1?N.yel:N.cyan,2,5,!0)};let Dt=0,Xt=0;function Ie(e,t,n=0){Dt=(e-t)*rt.HW+rt.OX,Xt=(e+t)*rt.HH-n*rt.ZK}function zn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const vi=e=>e<0?0:e>1?1:e,bi=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),Gn=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],no=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Nn=["#8a6a48","#5a3a20","#3a2414"],cr=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],ui=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function nc(e,t){const n=[],r=[],o=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function Xa(e,t,n,r,o,i,a=-1){const s=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*o,l+t.y[f]*o,o,o)}}const Vd=nc(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),qd=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],gu=nc(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),xu=[ui[3],ui[2],ui[0],"#4a2a6a","#e0d8f0","#a898c0"],Wo=new Map;function Yd(e,t){if(e.id==null)return;let n=Wo.get(e.id);if(!n){Wo.size>200&&Wo.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},Wo.set(e.id,n);const r=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,a){if(a.fin)return;const s=M.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,Wo.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}q.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,c=u===0?0:r*p(.45,.9);i[u*4]=t+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:p(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;s[u]=t+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}A({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<a;h++){const d=vi((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Ie(s[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=Gn[1+h%3],u.fillRect(Math.round(Dt),Math.round(Xt),h%3?3:4,2))}u.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],y=m-.16,g=i[d*4+2];if(Ie(i[d*4],i[d*4+1]),h<m){if(h<y)continue;const v=bi(vi((h-y)/.13)),S=g*v*(1+.12*Math.sin(h*60+d)),_=Math.max(1,Math.round(S*2/3));for(let w=0;w<_;w++){const T=(w+.5)/_*2-1,R=S*2*Math.sqrt(1-T*T);u.fillStyle=w===0?no[0]:T<.3?no[1]:no[2],u.fillRect(Math.round(Dt-R/2),Math.round(Xt-S*2+w*3),Math.max(1,Math.round(R)),3)}u.fillStyle=no[3],u.fillRect(Math.round(Dt-S*.2),Math.round(Xt-S*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let v=0;v<4;v++)O(i[d*4],i[d*4+1],.25,p(-.6,.6),p(-.6,.6),p(.4,1.1),p(.9,1.4),Gn[v%3],3,.25,!1,.92)}const x=(h-m)/.35;if(x>=1)continue;const b=g*(.6+x*2.2);u.globalAlpha=1-x;for(let v=0;v<8;v++){const S=v/8*6.28+d;u.fillStyle=Gn[v&1?1:2],zn(u,Dt+Math.cos(S)*b,Xt-g+Math.sin(S)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=no[0];for(let v=0;v<3;v++)zn(u,Dt+(v-1)*g*.6,Xt-g-x*8-(v&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),ot(2)};q.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;A({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?bi(l/.2):l>.8?(1-l)/.2:1,c=3;Ie(i,a,1.35);const h=Dt,d=Xt,m=[4,8,10,12,12];for(let y=0;y<5;y++){const g=Math.round(m[y]*f)*c;g<=0||(s.fillStyle=y===0?cr[1]:cr[2],s.fillRect(Math.round(h-g/2),Math.round(d+(y-5)*c*f),g,Math.max(1,Math.round(c*f))))}s.fillStyle=cr[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=cr[0],zn(s,h-3*c*f,d-3*c*f,3*f),zn(s,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,O(i+p(-.25,.25),a+p(-.25,.25),1.25,0,0,0,.5,u.drops&1?cr[0]:cr[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;A({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=M.T;for(let f=0;f<o;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,y=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let _=0;_<2;_++)O(m,y,.2,p(-.2,.2),p(-.2,.2),p(.8,1.6),p(.7,1.1),cr[_],2,0,!0,.95)}const g=bi(vi(h/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*g*x)),v=Math.abs(Math.sin(u*9+f*1.3))*5*x,S=Math.round(Math.sin(u*6+f)*2);Ie(m,y),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(Dt-9),Math.round(Xt-1),18,3),i.globalAlpha=1,Xa(i,Vd,Dt+S,Xt-v,b,qd)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;Ie(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=cr[u%3+1],zn(i,Dt,Xt,u%3?3:4)}}})};q.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){Ie(t,n),r.globalAlpha=1-o,r.fillStyle=Nn[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)zn(r,Dt+Math.cos(a+s*.25)*s*3.5,Xt+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)O(t,n,.1,p(-1.2,1.2),p(-1.2,1.2),p(1.5,3),p(.4,.6),Nn[r%3],3,9,!1,.95)};const vu=10;ve.hongo_E=(e,t,n,r,o,i)=>{Yd(t,Kd);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;Ie(t.x,t.y),e.fillStyle=Nn[1],e.fillRect(Math.round(Dt-8),Math.round(Xt-1),16,4),e.fillStyle=Nn[0],e.fillRect(Math.round(Dt-5),Math.round(Xt-2),10,2);for(let u=vu-1;u>=0;u--){const f=t.x+s*u*.17,c=t.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/vu);Ie(f,c,h);const d=7-u*.45;e.fillStyle=Nn[2],zn(e,Dt,Xt+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",zn(e,Dt,Xt,d),e.fillStyle="#a07040",e.fillRect(Math.round(Dt-d/4),Math.round(Xt-d/2),2,1),(u===3||u===7)&&(e.fillStyle=Gn[2],e.fillRect(Math.round(Dt+d/2),Math.round(Xt-d/2-1),2,2))}Ie(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=Gn[3],e.fillRect(Math.round(Dt-2),Math.round(Xt-6),4,7),e.fillStyle=Gn[1],e.fillRect(Math.round(Dt-6),Math.round(Xt-6),4,2),e.fillRect(Math.round(Dt+2),Math.round(Xt-8),4,2),e.fillStyle=Gn[0],e.fillRect(Math.round(Dt-1),Math.round(Xt-8),2,2),Math.random()<.35&&O(t.x,t.y,.05,p(-.6,.6),p(-.6,.6),p(.8,1.6),.4,Nn[Math.random()*3|0],2,7,!1,.95)};function Kd(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)O(t,n,.1,p(-.5,.5),p(-.5,.5),p(.5,1),.5,a&1?Nn[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;A({type:"custom",layer:"top",dur:r,x:t,y:n,draw(a,s){const l=s*r,u=l<.18?bi(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);Ie(t+h*.55,n+d*.55,0);const m=Dt,y=Xt;Ie(t+h*.8,n+d*.8,.55);const g=Dt,x=Xt;Ie(t+h*.12,n+d*.12,.75);const b=Dt,v=Xt,S=Math.min(10,Math.round(10*u));for(let _=0;_<=S;_++){const w=_/10,T=1-w,R=T*T*m+2*T*w*g+w*w*b,k=T*T*y+2*T*w*x+w*w*v,E=6-w*4;a.fillStyle=Nn[2],zn(a,R,k+1,E+2),a.fillStyle=_&1?"#7a5030":"#6a4428",zn(a,R,k,E),(_===4||_===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(R+(f&1?3:-5)),Math.round(k-1),2,2))}}}});for(let a=0;a<12;a++)O(t,n,.1,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3.2),p(.4,.7),Nn[a%3],3,9,!1,.95);ot(2)}q.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let f=0;f<13;f++){let c=null;for(let h=0;h<8&&!c;h++){const d=Math.random()*6.28,m=f===0?0:Math.sqrt(Math.random())*r*.88,y=t+Math.cos(d)*m,g=n+Math.sin(d)*m;a.every(x=>Math.hypot(x.x-y,x.y-g)>.7)&&(c={x:y,y:g,cs:f===0?4:Math.random()<.5?3:2,ts:m/r*.5})}c&&a.push(c)}a.sort((f,c)=>f.x+f.y-(c.x+c.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let f=0;f<s;f++){let c=1e9;for(let h=0;h<s;h++)if(h!==f){const d=Math.hypot(a[f].x-a[h].x,a[f].y-a[h].y);d<c&&(c=d,l[f]=h)}}A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(f,c){const h=c*i,d=vi((h-.1)/.5),m=c>.88?(1-c)/.12:1;f.globalAlpha=.5*m,f.fillStyle="#e8f0d0";for(let y=0;y<s;y++){const g=l[y];if(g<0)continue;Ie(a[y].x,a[y].y);const x=Dt,b=Xt;Ie(a[g].x,a[g].y);const v=Math.hypot(Dt-x,Xt-b),S=Math.round(v/6*d);for(let _=0;_<=S;_++){const w=_*6/v;f.fillRect(Math.round(x+(Dt-x)*w),Math.round(b+(Xt-b)*w+Math.sin(_*1.7+y)*2),2,2)}}f.globalAlpha=1}});const u=(f,c,h)=>{const d=bi(vi((c-f.ts)/.22)),m=h>.88?(1-h)/.12:1;return Math.max(0,Math.round(f.cs*d*m))};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(f,c){const h=c*i;for(let d=0;d<s;d++){const m=a[d],y=u(m,h,c);y<=0||(Ie(m.x,m.y),f.fillStyle="rgba(20,10,30,0.35)",f.fillRect(Math.round(Dt-y*4),Math.round(Xt-1),y*8,3),Xa(f,gu,Dt+Math.round(Math.sin(M.T*2+d)*y*.4),Xt,y,xu))}}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(f,c,h){const d=c*i;for(let m=0;m<s;m++){const y=a[m],g=u(y,d,c);g<=0||(Ie(y.x,y.y),f.globalAlpha=.45+.4*Math.sin(M.T*5+m*1.9),Xa(f,gu,Dt+Math.round(Math.sin(M.T*2+m)*g*.4),Xt,g,xu,2),f.globalAlpha=.18,f.fillStyle=ui[1],f.fillRect(Math.round(Dt-g*4),Math.round(Xt-g*9),g*8,g*4))}for(f.globalAlpha=1,h.acc+=Math.max(0,d-h.last),h.last=d;h.acc>.085&&h.puffs<46&&c<.88;){h.acc-=.085,h.puffs++;const m=a[Math.random()*s|0];O(m.x+p(-.1,.1),m.y+p(-.1,.1),.12*m.cs*1.6,p(-.25,.25),p(-.25,.25),p(.5,1),p(.9,1.3),h.puffs&1?ui[0]:Gn[1],2,.15,!0,.97)}}});for(let f=0;f<14;f++){const c=Math.random()*6.28,h=Math.random()*r*.8;O(t+Math.cos(c)*h,n+Math.sin(c)*h,.05,0,0,p(1.5,2.5),.5,Nn[f%3],3,8,!1)}ot(3)};xe.hongo=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;Ie(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=Gn[1+s%3],r.fillRect(Math.round(Dt-2),Math.round(Xt-1),4,2)}}}),A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){Ie(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=no[i],zn(r,Dt+(i-1)*8*(.6+o),Xt-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)O(t,n,.4,p(-1,1),p(-1,1),p(.5,1.5),.6,Gn[r%3],3,2,!1,.92)};const et=Math.round,Tn=Math.PI*2;let re=0,jt=0;function Te(e,t,n=0){re=(e-t)*rt.HW+rt.OX,jt=(e+t)*rt.HH-n*rt.ZK}function Jo(e,t,n,r,o){e.fillStyle=o,e.fillRect(et(t-r/2),et(n-r/2),r,r)}const Wn=e=>e<0?0:e>1?1:e,Ci=e=>1-(1-e)*(1-e),Wt={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},dn={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},Me={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},fn={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},jd="#e8384a";function Qd(e,t){return Math.atan2((e+t)*rt.HH,(e-t)*rt.HW)}function Ss(e,t,n,r,o,i,a,s,l){const u=Math.cos(r),f=Math.sin(r),c=-f,h=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,y=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(et(m-o/2),et(y-o/2),o,o),d>=2&&(e.fillStyle=a,e.fillRect(et(m+c*o-o/2),et(y+h*o-o/2),o,o));else if(d===10){e.fillStyle=s;for(let g=-3;g<=3;g++)e.fillRect(et(m+c*g*o-o/2),et(y+h*g*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(et(m-o/2),et(y-o/2),o,o)):(e.fillStyle=s,e.fillRect(et(m-o),et(y-o),o*2,o*2))}}function Kr(e,t,n,r,o){e.fillStyle=o;const i=et(r);e.fillRect(et(t-i),et(n-1),i*2,2),e.fillRect(et(t-1),et(n-i),2,i*2),e.fillRect(et(t-2),et(n-2),4,4)}function rc(e,t,n,r){const o=Math.max(2,et(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=fn.d,e.fillRect(et(t-o/2),et(n-i/2),o,i),o>3&&(e.fillStyle=fn.m,e.fillRect(et(t-o/2+1),et(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=fn.l,e.fillRect(et(t-1),et(n-2),2,4))}q.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=Qd(t,n);A({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(a,s){Te(r,o,.55);const l=.55*(1-Ci(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,Ss(a,re,jt,i+u*l,2,u?Me.l:Wt.w,u?Me.m:Wt.m,fn.m,dn.d))}}),A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(a,s){Te(r,o,.55),a.globalAlpha=1-s,Kr(a,re+Math.cos(i)*12,jt+Math.sin(i)*12,10*(1-s)+3,Me.w)}});for(let a=0;a<6;a++)O(r,o,.5,p(-.8,.8),p(-.8,.8),p(.3,1),p(.4,.6),a&1?dn.m:dn.l,3,-.5,!1,.9)};ve.mapache_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=Math.sin(i*26)*.07;Vt(!0);const c=$e();for(let d=2;d<14;d++){const m=d*4,y=Math.sin(d*.9-i*18)*(2+d*.4);c.globalAlpha=(1-d/14)*.9,c.fillStyle=d&1?Me.l:Me.m,c.fillRect(et(n-a*m+l*y),et(r-s*m+u*y),2,2)}for(let d=4;d>=1;d--)c.globalAlpha=.5-d*.1,Ss(c,n-a*d*9,r-s*d*9,o+f*d,2,Me.l,Me.m,Me.m,Me.d);c.globalAlpha=.22,c.fillStyle=Me.m,c.fillRect(et(n-10),et(r-10),20,20),c.globalAlpha=1,Vt(!1),Ss(e,n,r,o+f,2,Wt.w,Wt.m,fn.m,dn.k);const h=i*4%1;h<.5&&(Vt(!0),$e().globalAlpha=1,Kr($e(),n+a*(12-h*30),r+s*(12-h*30),4,Wt.w),Vt(!1))};const bu=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];q.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){Te(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Ss(o,re-Math.cos(r)*8,jt-Math.sin(r)*8,r+Math.PI,2,Wt.w,Wt.m,fn.m,dn.k)}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){Te(t,n,1);const a=3,s=Ci(Wn(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=re,f=jt-s,c=bu.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let h=0;h<c;h++){const d=bu[h],m=i>.6?(h&1?1:-1)*(i-.6)*70:0;for(let y=0;y<d.length;y++){const g=d[y];g!=="."&&(o.fillStyle=g==="X"?Me.l:g==="M"?Me.d:g==="e"?Me.w:Me.m,o.fillRect(et(u+(y-6)*a+m-a/2),et(f+(h-4)*a*l-a/2),a,Math.max(1,et(a*l))))}}}});for(let o=0;o<8;o++)O(t,n,.5,p(-1.8,1.8),p(-1.8,1.8),p(.8,2),p(.3,.5),o&1?Wt.l:Wt.m,2,6,!0,.9);for(let o=0;o<6;o++)O(t+p(-.2,.2),n+p(-.2,.2),.4,0,0,p(.6,1.2),p(.6,.9),o&1?Me.l:Me.m,2,-.3,!0);ot(2)};function oc(e,t,n,r,o,i,a,s){const l=Math.max(2,et(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,c=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,h=n-o/2+u*2;if(c<1)continue;e.globalAlpha=s,e.fillStyle=fn.d,e.fillRect(et(t-c-2),et(h),et(c*2+4),2),e.globalAlpha=s*.85,e.fillStyle=Wt.m,e.fillRect(et(t-c),et(h),et(c*2),2);const d=t-c+(a*2.2-.6)*r-f*o*.25;d>t-c&&d<t+c-3&&(e.globalAlpha=s,e.fillStyle=Wt.w,e.fillRect(et(d),et(h),3,2))}e.globalAlpha=s,e.fillStyle=fn.l,e.fillRect(et(t-2),et(n-o/2-3),4,3)}function ic(e,t,n,r,o,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<o.length;u++)for(let f=0;f<a;f++){const c=l+u*17+f*3,h=(dt(c)-.5)*.7,d=(dt(c+1)-.5)*.7,m=Wn(s*(.85+dt(c+2)*.3));Te(t+(o[u]+h-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const y=(M.T*20+f|0)&1;e.fillStyle=y?Wt.w:Wt.m,e.fillRect(et(re-2),et(jt-1),y?4:2,y?2:4),e.fillStyle=Wt.d,e.fillRect(et(re+(y?2:0)),et(jt+(y?0:3)),2,2)}}function sc(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*Tn;r[i]=e+Math.cos(a)*1.1,o[i]=t+Math.sin(a)*1.1}return{TX:r,TY:o}}function ac(e,t,n){A({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){Te(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*Tn+o*2,l=6+o*22;Kr(r,re+Math.cos(s)*l,jt+Math.sin(s)*l*.8,4*(1-o)+2,a&1?Wt.l:Me.l)}o<.3&&Kr(r,re,jt,16*(1-o/.3)+3,Wt.w)}}}),A({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)O(e[a],t[a],.4,p(-.8,.8),p(-.8,.8),p(.3,.9),p(.4,.7),s&1?dn.l:dn.m,3,-.4,!1,.9)}}})}q.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=sc(t,n,2),a=.32,s=.45,l=.78;A({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const c=f*(s+.02),h=Ci(Wn(c/.18));if(Te(t,n,.75),oc(u,re,jt,30,52*h,!0,Wn(c/.3),.95),c>a){u.globalAlpha=1,u.fillStyle=Wt.w;const d=Wn((c-a)/(s-a)),m=re+4,y=jt-6;for(let g=0;g<6;g++){let x=dt(r+g)*Tn,b=m,v=y;for(let S=0;S<et(6*d);S++)x+=(dt(r+g*7+S)-.5)*.9,b+=Math.cos(x)*3,v+=Math.sin(x)*3,u.fillRect(et(b),et(v),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const c=f*(l+.05);c>=s&&c<s+.08&&(Te(t,n,.75),u.globalAlpha=1-(c-s)/.08,u.fillStyle=Wt.w,u.fillRect(et(re-22),et(jt-30),44,60)),u.globalAlpha=1,ic(u,t,n,.75,o,i,6,(c-s)/(l-s),r)}}),ac(o,i,l);for(let u=0;u<8;u++)O(t,n,.4,p(-1,1),p(-1,1),p(.3,.8),p(.5,.8),u&1?dn.m:dn.d,3,-.3,!1,.9)};q.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,a=(s,l,u,f,c,h,d)=>{const m=12*f,y=20*f;for(let g=0;g<18;g++){const x=g/18*Tn+c;Jo(s,l+Math.cos(x)*m,u+Math.sin(x)*y,g%3?2:3,g&1?h:d)}for(let g=0;g<8;g++){const x=g/8*Tn-c*1.7,b=.45+.25*Math.sin(c*2+g);Jo(s,l+Math.cos(x)*m*b,u+Math.sin(x)*y*b,2,d)}};A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?Ci(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,c=M.T*8;Te(t,n,.55);const h=re,d=jt;Te(r,o,.55);const m=re,y=jt;f>0&&(s.globalAlpha=1,a(s,h,d,f,c,Wt.l,Wt.d),a(s,m,y,f,-c,fn.l,fn.d));const g=Wn((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,v=x?fn.m:Wt.m,S=x?1-g:g;s.globalAlpha=.45*(1-Wn((u-.5)/.3));for(let _=0;_<=20;_++){const w=_/20;_%2||Jo(s,h+(m-h)*w,d+(y-d)*w-Math.sin(w*Math.PI)*b,2,v)}if(g>0&&g<1)for(let _=0;_<6;_++){const w=x?S+_*.03:S-_*.03;w<0||w>1||(s.globalAlpha=1-_/6,Jo(s,h+(m-h)*w,d+(y-d)*w-Math.sin(w*Math.PI)*b,_?3:5,_?v:Wt.w))}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;Te(t,n,.55);const f=re,c=jt;Te(r,o,.4);const h=re,d=jt,m=(f+h)/2,y=(c+d)/2-58,g=Wn(u/i),x=m+(h-m)*g,b=y+(d-y)*g-Math.sin(g*Math.PI)*30;s.globalAlpha=g>.85?(1-g)/.15:1,rc(s,x,b,M.T*26)}});for(const[s,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*Tn;O(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,p(0,.6),.4,s===t?Wt.l:fn.l,2,0,!0)}};const Zd=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];q.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=sc(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],c=new Float32Array(a);A({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){Te(t,n,0);const b=re,v=jt;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=fn.l;for(let S=0;S<60;S++){const _=S*6,w=70-S*.9;g.fillRect(et(b-w),et(v-_-6),et(w*2),6)}g.globalAlpha*=2,g.fillStyle=Wt.w;for(let S=0;S<18;S+=2){const _=Math.sqrt(1-S/18*(S/18))*74;g.fillRect(et(b-_),et(v-9+S),et(_*2),2)}}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(g,x){const b=x*l,v=Ci(Wn(b/.3)),S=b*1.2+b*b*4.5;for(let _=0;_<a;_++)c[_]=_/a*Tn+S;f.sort((_,w)=>Math.sin(c[_])-Math.sin(c[w]));for(const _ of f){const w=c[_];Te(t+Math.cos(w)*s,n+Math.sin(w)*s,0);const T=.45+.55*Math.abs(Math.sin(w+.8));oc(g,re,jt-22*v,et(14*T)+2,44*v,!1,(b*1.6+_*.13)%1,.9)}}}),A({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const b=x*(u+.05);if(b<l){const v=b*14|0,S=v%a,_=S/a*Tn+b*1.2+b*b*4.5;Te(t+Math.cos(_)*s,n+Math.sin(_)*s,.6),g.globalAlpha=.9,Kr(g,re,jt,9,Wt.w)}else{if(b<l+.1){g.globalAlpha=1-(b-l)/.1,Te(t,n,.4),g.fillStyle=Wt.w;for(let v=-14;v<14;v+=2){const S=Math.sqrt(1-v/14*(v/14))*90;g.fillRect(et(re-S),et(jt+v*2),et(S*2),4)}}g.globalAlpha=1,ic(g,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),ac(o,i,u);const h=16,d=new Float32Array(h),m=new Float32Array(h),y=new Float32Array(h);for(let g=0;g<h;g++){const x=Math.random()*Tn,b=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*b,m[g]=n+Math.sin(x)*b,y[g]=p(0,.35)}A({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(g,x){const b=x*1.3;for(let v=0;v<h;v++){const S=(b-y[v])/.95;if(S<0||S>1)continue;Te(d[v],m[v],3.2*(1-S));const _=Math.cos(M.T*9+v*1.7),w=re+Math.sin(M.T*4+v)*8,T=Zd[v&3],R=(v&3)<2?jd:dn.k,k=2,E=Math.max(.2,Math.abs(_));if(g.globalAlpha=S>.8?(1-S)/.2:1,g.fillStyle="#fffaf0",g.fillRect(et(w-7*E),et(jt-8),et(14*E)||1,16),E>.45){g.fillStyle=R;for(let L=0;L<5;L++)for(let H=0;H<5;H++)T[L][H]==="X"&&g.fillRect(et(w+(H-2.5)*k*E),et(jt-5+L*k),Math.max(1,et(k*E)),k)}}}});for(let g=0;g<20;g++){const x=Math.random()*Tn;O(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,p(.5,1.5),p(.5,.9),g&1?dn.l:dn.m,3,-.4,!1,.92)}A({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){b.fired||(b.fired=!0,ot(5))}})};function Mu(e,t,n,r,o,i,a,s){const l=Math.cos(r),u=Math.sin(r),f=-u,c=l,h=et(10*i);for(let d=0;d<=h;d++){const m=d/10-.5,y=Math.sin(m*Tn)*o*.18;Jo(e,t+l*m*o+f*y,n+u*m*o*.8+c*y,d===h?4:3-Math.abs(m)*2,d===h?s:a)}}xe.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+p(-.3,.3);if(A({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,a){Te(t,n,.5);const s=Wn(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,Mu(i,re,jt,o,34,s,Wt.m,Wt.w),r&&Mu(i,re,jt,o+1.6,40,s,Me.m,Me.w),a>.2&&(Kr(i,re+12,jt-10,4*(1-a)+1,Wt.w),Kr(i,re-10,jt+6,3*(1-a)+1,Wt.l))}}),r){A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){Te(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,rc(i,re+a*18,jt,M.T*30)}});for(let i=0;i<6;i++)O(t,n,.5,p(-1,1),p(-1,1),p(.5,1.4),.5,i&1?Me.l:Me.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)O(t,n,.2,p(-.8,.8),p(-.8,.8),p(.2,.6),.35,dn.l,3,0,!1,.9)};const uo="#1e0f30",yo="#4b2272",ar="#8b3cd2",lr="#d6b4ff",er="#f6f2ff",_s="#ff2f5f",lc="#2c1446",be=Math.round,$r=Math.PI*2,Jd=[0,1,2,1];function wn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(be(t),be(n),r,o)}function tm(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(be(t+(r-t)*l/s-i/2),be(n+(o-n)*l/s-i/2),i,i)}function Ga(e,t,n,r,o,i,a,s){t=be(t),n=be(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=a,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=s,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function kr(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,be(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,y=be(n+h*s);if(Math.abs(m)>=f){e.fillRect(be(t-d),y,be(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(be(t-d),y,be(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(be(t+v),y,be(d-v),c)}}}function Na(e,t,n,r,o){const[i,a]=C(t,n),s=r*rt.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(be(i-f),be(a+u),be(f*2),2)}}const uc=e=>{const t=lt(e);return t&&!t.dead&&!Fe(t)?t:null},em=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Ba=(e,t=16)=>Jd[((M.T*t|0)+e)%4];xe.murcielago=e=>{const t=p(0,$r),n=e.big?17:13;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x,e.y,.5);r.globalAlpha=1-o,kr(r,i,a,n+2,t+o*1.4,.45,ar),kr(r,i,a,n,t+o*1.4,.52,er)}});for(let r=0;r<5;r++)O(e.x,e.y,.5,p(-2.5,2.5),p(-2.5,2.5),p(0,1),.28,r%2?lr:ar,2,0,!0,.9)};q.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;A({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const m=d/.32,y=.3+m*(o-.3),g=Math.max(6,Math.ceil(i*2*y*7)),x=h%2?ar:lr,b=h%2?3:2;u.globalAlpha=(1-m)*.95;for(let v=0;v<=g;v++){const S=r-i+2*i*v/g,_=Math.sin(v*1.7+h*2.3+c*40)*.07*(1+m),[w,T]=C(a+Math.cos(S)*(y+_),s+Math.sin(S)*(y+_),l-m*.35);wn(u,w-b/2,T-b/2,b,b,x),v===g>>1&&wn(u,w-1,T-1,2,2,er)}}}}),A({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[y,g]=C(a+Math.cos(h)*m,s+Math.sin(h)*m);wn(u,y-1,g-1,3,2,yo)}}}});for(let u=0;u<14;u++){const f=r+p(-i,i),c=p(.6,o);O(a+Math.cos(f)*c,s+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,p(0,.5),.5,u%3?lr:er,2,0,!0,.92)}ot(2)};q.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*$r+p(-.2,.2),sp:p(1.2,2.4),up:p(.8,1.8),ph:Math.random()*4|0}));A({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),Na(r,e.x,e.y,.75*(1-o*.6),uo),r.globalAlpha=.8*(1-o),Na(r,e.x,e.y,.3*(1-o),lc)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=C(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);Ga(r,l,u,2,Ba(a.ph),uo,yo,_s)}}}),A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=uc(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=C(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=M.T*5+s*Math.PI;Ga(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,Ba(s*2,20),yo,ar,_s)}r.globalAlpha=.35;for(let s=0;s<4;s++)wn(r,i-8+s*5,a+26+(M.T*30+s*7)%8,2,2,uo)}});for(let r=0;r<16;r++)O(e.x+p(-.3,.3),e.y+p(-.3,.3),p(.2,.8),p(-.5,.5),p(-.5,.5),p(1,2.2),p(.5,.9),r%2?uo:yo,3,0,!1,.95);for(let r=0;r<6;r++)O(e.x+p(-.3,.3),e.y+p(-.3,.3),p(.4,1),0,0,p(.5,1.2),.5,lr,2,0,!0)};q.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=em(e),i=o&&o.radius||1.4,a=p(0,$r);let s=!1;A({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=C(t,n);if(c<r){l.globalAlpha=.5,kr(l,h,d,be(i*26*(1.4-.4*c/r)),a+c*6,.45,yo,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),kr(l,h,d+2,be(i*30),a+Math.PI*1.1,.42,lc,.5)}}),A({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const c=u*f.dur;if(c<r){const b=uc(e.uid);if(!b)return;const[v,S]=C(b.x,b.y,.7),[_,w]=C(t,n,.3),T=Math.hypot(_-v,w-S)||1,R=(_-v)/T,k=(w-S)/T;l.globalAlpha=.75;for(let E=0;E<4;E++){const L=(E-1.5)*7,H=18+E%2*12;tm(l,v-k*L-R*8,S+R*L-k*8,v-k*L-R*(8+H),S+R*L-k*(8+H),2,E%2?lr:ar)}return}const h=(c-r)/.5;if(!s){s=!0,ot(6);for(let b=0;b<22;b++){const v=p(0,$r),S=p(2,5);O(t,n,.45,Math.cos(v)*S,Math.sin(v)*S,p(.3,1.5),p(.3,.55),b%3?lr:b%2?er:ar,2,3,!0,.9)}}const d=Math.min(1,h/.45),[m,y]=C(t,n,.45),g=be(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),kr(l,m,y,g+3,x,.42,ar,.85),kr(l,m,y,g,x,.48,er,.85),l.globalAlpha*=.35,kr(l,m,y,g,x-.6,.48,lr,.85)}})};q.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*$r,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),h=s.p+l*s.w;return[e.x+Math.cos(h)*c,e.y+Math.sin(h)*c,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:p(.3,n-.4),x:e.x+p(-1,1)*t*.6,y:e.y+p(-1,1)*t*.6}));A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,Na(s,e.x,e.y,t,uo),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*$r+u*.8,[d,m]=C(e.x+Math.cos(h)*t,e.y+Math.sin(h)*t);wn(s,d-1,m-1,c%2?2:3,2,c%2?lr:ar)}s.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,u),[m,y]=C(h,d);wn(s,m-4,y-1,8,2,"#000000")}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of o){const[c,h,d,m]=i(f,u),[y,g]=C(c,h,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),Ga(s,y,g,f.s,Ba(f.ph,18),uo,yo,_s)}}}),A({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=C(f.x,f.y,.55),m=be(4-c*3);s.globalAlpha=1-c;for(const y of[-1,1]){const g=h+y*4;wn(s,g-2,d-6-m,4,2,er),wn(s,g-1,d-4-m,2,3,er),wn(s,g-2,d+4+m,4,2,er),wn(s,g-1,d+1+m,2,3,er)}wn(s,h-1,d-1,3,3,_s)}}});for(let s=0;s<20;s++){const l=p(0,$r),u=t*p(.3,1);O(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,p(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,p(0,.6),p(.6,1.1),s%3?ar:lr,2,0,!0,.97)}ot(5)};const ct=Math.round,Bn=Math.PI*2,it={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},nm=e=>e*rt.HW*Math.SQRT2;function ti(e,t,n,r){r=Math.max(1,ct(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(ct(t[0]+(n[0]-t[0])*s/i-a),ct(t[1]+(n[1]-t[1])*s/i-a),r,r)}function ws(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=ct(n-a*o/2),u=ct(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function fc(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+p(-.35,.35),a=t*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function cc(e,t,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=C(t+r[s][0],n+r[s][1]),f=C(t+r[s+1][0],n+r[s+1][1]);ti(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const rm=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],om=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],Su=["t.t.t",".....",".ppp.","ppppp",".ppp."];q.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,m)=>{const y=3+m*2;for(let g=0;g<y;g++){const x=s+(y===1?0:(g/(y-1)*2-1)*a*.8)+p(-.06,.06),b=d*i/2.5;c.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:p(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>fc(s+d*a,i*p(.75,1)));A({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const y=m*.34,g=Math.min(1,y/f),x=1.5*(1-g*g),[b,v]=C(l,u,x+.25);if(d.globalAlpha=y<.22?1:Math.max(0,1-(y-.22)/.12),ws(d,rm,b,v,3,{h:it.wood,d:it.i0,b:it.brass,l:it.i4,i:it.i2}),g<1){d.globalAlpha=.5,d.fillStyle=it.i3;for(let S=1;S<=3;S++)d.fillRect(ct(b-15+S*7),ct(v-26-S*8),2,8)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[y,g]=C(l,u,.1),x=ct(26*(1-m))+4;d.fillStyle=it.amberL,d.fillRect(y-x,g-2,x*2,4),d.fillRect(y-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(y-5,g-3,10,6)}}),A({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,y){const g=m*1.15;if(g>=f&&!y.hit){y.hit=!0,ot(7);for(let v=0;v<14;v++){const S=s+p(-a,a),_=p(1,3);O(l,u,.1,Math.cos(S)*_,Math.sin(S)*_,p(.3,1),p(.6,.9),v%2?it.dust:it.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=it.e0;for(const v of h)cc(d,t,n,v,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const v=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=it.dust;for(let S=0;S<=16;S++){const _=s-a+2*a*S/16,[w,T]=C(t+Math.cos(_)*v,n+Math.sin(_)*v);d.fillRect(ct(w)-3,ct(T)-2,6,4)}}for(const v of c){const S=(g-v.t0)/.5;if(S<0||S>1)continue;v.done||(v.done=!0,O(v.x,v.y,.2,p(-1,1),p(-1,1),p(3,5),p(.7,1),[it.e1,it.e2,it.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const _=ct(v.h*(S<.2?S/.2:1-(S-.2)/.8)),[w,T]=C(v.x,v.y);d.globalAlpha=1,d.fillStyle=it.e0,d.fillRect(ct(w-v.w/2-1),ct(T-2),v.w+2,4),d.fillStyle=it.e1,d.fillRect(ct(w-v.w/2),ct(T-_),v.w,_),d.fillStyle=it.e3,d.fillRect(ct(w-v.w/2),ct(T-_-5),v.w,5),d.fillStyle=it.e2,d.fillRect(ct(w-v.w/2),ct(T-_-1),v.w,1)}}})};function Ii(e,t,n,r,o,i){const a=Math.cos(i);return[e+n*Math.cos(o)*a,t+n*.5*Math.sin(o)*a-r*Math.sin(i)]}q.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=lt(t),[l,u]=C(s?s.x:r,s?s.y:o,.6),f=ct(18*(1-a))+3;i.fillStyle=it.amber;for(let c=0;c<8;c++){const h=c/8*Bn;i.fillRect(ct(l+Math.cos(h)*f*1.4)-2,ct(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Bn;O(e.x,e.y,.6,Math.cos(a)*p(1,3),Math.sin(a)*p(1,3),p(1.5,3),.4,i%2?it.brassL:it.amber,2,9,!0)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=lt(t),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let w=0;w<16;w++){const T=Math.random()*Bn,R=p(1,2.5);O(r+Math.cos(T)*.4,o+Math.sin(T)*.4,p(.2,.8),Math.cos(T)*R,Math.sin(T)*R,p(1.5,3.5),.7,[it.i1,it.i2,it.i3][w%3],4,10,!1,.95)}for(let w=0;w<6;w++)O(r,o,.6,p(-2,2),p(-2,2),p(1,3),.35,it.brassL,2,6,!0);s.t=1e9;return}const c=l&&l.scale||1,[h,d]=C(r,o),m=ct(40*c),y=ct(56*c),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!s.done){s.done=!0;const[w,T]=[r,o];for(let R=0;R<6;R++)O(w,T,.75*c,p(-1.5,1.5),p(-1.5,1.5),p(.5,2),.3,it.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=it.i2;const v=y*Math.sin(x);for(let w=0;w<v;w+=3){const T=m*Math.sqrt(Math.max(0,1-(w/y)**2));i.fillRect(ct(h-T),ct(d-w-3),ct(T*2),3)}for(let w=0;w<m*.5;w+=3){const T=m*Math.sqrt(Math.max(0,1-(w/(m*.5))**2));i.fillRect(ct(h-T),ct(d+w),ct(T*2),3)}for(let w=0;w<32;w++){const T=w/32*Bn,R=Ii(h,d,m,y,T,0),k=Math.sin(T)>0;i.globalAlpha=k?.95:.4,i.fillStyle=k?it.i3:it.i1,i.fillRect(ct(R[0])-2,ct(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=it.i2;for(const w of[.12,.3,.5,.7,.88]){const T=Math.PI*w;for(let R=0;R<=x;R+=.16){const k=Ii(h,d,m,y,T,R);i.fillRect(ct(k[0])-1,ct(k[1])-1,2,3)}}const S=u*14|0;let _=0;for(const w of[.42,.9])if(!(w>x))for(let T=0;T<=14;T++){const R=Math.PI*T/14,k=Ii(h,d,m,y,R,w);i.globalAlpha=.9,i.fillStyle=it.i3,i.fillRect(ct(k[0])-2,ct(k[1])-1,4,2),T%2===0&&(_++,i.globalAlpha=1,i.fillStyle=_%16===S%16?"#ffffff":it.brass,i.fillRect(ct(k[0])-1,ct(k[1])-3,3,3))}if(g>=1){const w=Ii(h,d,m,y,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=it.i0,i.fillRect(ct(w[0])-5,ct(w[1])-4,10,6),i.fillStyle=it.brass,i.fillRect(ct(w[0])-4,ct(w[1])-3,8,4),i.fillStyle=it.brassL,i.fillRect(ct(w[0])-3,ct(w[1])-3,3,1)}}})};q.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=C(n,r),c=C(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,m=(c[1]-f[1])/h,y=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const b=x/(g+1),v=x%2?1:-1;y.push({s:b,x:n+s*b-l/u*.17*v,y:r+l*b+s/u*.17*v})}A({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,b){const v=b*(a+2);for(const S of y){const _=v-S.s*a;if(_<0)continue;const[w,T]=C(S.x,S.y);x.globalAlpha=Math.max(0,.7*(1-_/2)),ws(x,Su,w,T,3,{t:it.e0,p:it.e0}),x.globalAlpha*=.6,ws(x,Su,w-1,T-1,3,{p:it.e1})}}}),A({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,b,v){const S=b*(a+.3),_=lt(t),w=Math.min(1,S/a),T=_&&S<a?_.x:n+s*w,R=_&&S<a?_.y:r+l*w;if(S<a){if(v.n=v.n||0,v.n<30){v.n+=2;for(let At=0;At<2;At++)O(T+p(-.2,.2),R+p(-.2,.2),.1,-s/u*p(.5,1.5)+p(-.5,.5),-l/u*p(.5,1.5)+p(-.5,.5),p(.4,1.2),p(.5,.8),At?it.e2:it.dust,5,-.3,!1,.9)}const[k,E]=C(T,R,.45),L=k+d*26,H=E+m*26,Q=-m,ut=d;for(let At=0;At<3;At++){const P=At*8+S*120%8;x.globalAlpha=.9-At*.25,x.fillStyle=At?it.dust:"#ffffff";const z=[L-d*P,H-m*P];ti(x,z,[z[0]-d*10+Q*13,z[1]-m*10+ut*13],3),ti(x,z,[z[0]-d*10-Q*13,z[1]-m*10-ut*13],3)}x.globalAlpha=.6,x.fillStyle=it.i3;for(let At=0;At<4;At++){const P=(At-1.5)*9,z=14+(At*7+S*200)%12;ti(x,[k-d*20+Q*P,E-m*20+ut*P],[k-d*(20+z)+Q*P,E-m*(20+z)+ut*P],2)}}else{if(!v.end){v.end=!0,ot(5);for(let H=0;H<14;H++){const Q=Math.random()*Bn,ut=p(1.5,3);O(o,i,.15,Math.cos(Q)*ut,Math.sin(Q)*ut,p(.8,2),.6,H%2?it.dust:it.e3,5,2,!1,.9)}}const k=(S-a)/.3,[E,L]=C(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-k;for(let H=0;H<8;H++){const Q=H/8*Bn+.2,ut=6+k*14,At=ut+10*(1-k);x.fillStyle=H%2?it.amberL:"#ffffff",ti(x,[E+Math.cos(Q)*ut,L+Math.sin(Q)*ut*.7],[E+Math.cos(Q)*At,L+Math.sin(Q)*At*.7],4)}}}})};q.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(a,s)=>fc(s/8*Bn+p(-.2,.2),o*p(.45,.65),5));ot(10),A({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=C(n,r),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=nm(o)*(.15+.95*(1-(1-h)*(1-h))),m=5-c;a.globalAlpha=1-h;for(let y=0;y<56;y++){if(y%7>=5)continue;const g=y/56*Bn+c*.2,x=l+Math.cos(g)*d,b=u+Math.sin(g)*d*.5;a.fillStyle=c===0?it.amberL:it.amber,a.fillRect(ct(x-m/2),ct(b-m/2),m,m),y%7===2&&(a.fillStyle=it.amberD,a.fillRect(ct(x*.94+l*.06-1),ct(b*.94+u*.06-1),3,3))}}}}),A({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=it.e0;for(const l of i)cc(a,n,r,l,Math.min(1,s*7))}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(a,s){const l=lt(t),u=l?l.x:n,f=l?l.y:r,c=l&&l.scale||1,[h,d]=C(u,f,1.7*c+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),ws(a,om,h,d,m,{e:it.amberD,i:it.amberL,h:it.amber,s:it.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let y=0;y<3;y++){const g=34+(s*90+y*22)%66,x=1-(s*90+y*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=it.amberL;for(let b=-.7;b<=.71;b+=.175){const v=Math.cos(b)*g,S=Math.sin(b)*g*.8;a.fillRect(ct(h+v)-2,ct(d+6+S)-2,4,4),a.fillRect(ct(h-v)-2,ct(d+6+S)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Bn,l=Math.sqrt(Math.random())*o*.9;O(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,p(2,4),p(.5,.8),[it.e1,it.e2,it.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Bn,l=p(.3,1.2);O(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,p(.8,1.6),p(.8,1.2),it.amberL,2,-.3,!0,.98)}};xe.oso=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.08),s=ct(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=it.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=it.dust,r.fillRect(i-s,a-1,ct(s*.7),3),r.fillRect(i+s-ct(s*.7),a-1,ct(s*.7),3);const[u,f]=C(t,n,.5),c=ct(12*(1-o));r.fillStyle=it.i3,r.fillRect(u-c-4,f-3,8,6),r.fillRect(u+c-4,f-3,8,6),r.fillStyle=it.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)O(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(2,3.5),.3,it.brassL,2,12,!0);for(let r=0;r<3;r++)O(t,n,.05,p(-1,1),p(-1,1),p(1,2),.45,it.e2,3,10,!1)};const vn="#ffffff",sn="#e6eeff",Hr="#bfe9ff",As="#7fdcf4",im="#3a9ab8",we="#fff0b4",_u="#efe0b8",wu="#c8a878",sm="#34408a",Au="#a9bfdc",Ft=Math.round,Xr=Math.PI*2;function ee(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Ft(t),Ft(n),r,o)}function $a(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=Ft(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Ft(t-a),Ft(n+i),a*2,2)}}function fi(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Ft(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,y=Ft(n+h*s);if(Math.abs(m)>=f){e.fillRect(Ft(t-d),y,Ft(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(Ft(t-d),y,Ft(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(Ft(t+v),y,Ft(d-v),c)}}}function am(e,t,n,r,o,i,a){t=Ft(t),n=Ft(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*s,n-2*r,r*s,2*r),e.fillRect(t+u,n-2*r,r*s,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=a,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function Cu(e,t,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const c=Ft(t+u*i-f),h=Ft(t+u*i+f),d=Ft(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(c,d,h-c,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(c,d,2,2),e.fillRect(h-2,d,2,2)}}function lm(e,t,n,r,o){t=Ft(t),n=Ft(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const hc=e=>{const t=lt(e);return t&&!t.dead&&!Fe(t)?t:null},um=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},dc=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);ve.polilla_A=(e,t,n,r,o,i)=>{Vt(!0);const a=$e(),s=.65+.35*Math.sin(i*20),l=Ft(5+s*3);a.globalAlpha=s,ee(a,n-l,r-1,l*2,2,As),ee(a,n-1,r-l,2,l*2,As),a.globalAlpha=1,ee(a,n-2,r-2,4,4,vn);const u=i*14;ee(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,we),ee(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,we),Vt(!1)};xe.polilla=e=>{A({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.5),i=Ft(10*(1-n))+2;t.globalAlpha=1-n,ee(t,r-i,o-1,i*2,2,sn),ee(t,r-1,o-i,2,i*2,sn),ee(t,r-2,o-2,4,4,vn)}});for(let t=0;t<5;t++)O(e.x,e.y,.5,p(-1,1),p(-1,1),p(.2,.8),.6,t%2?we:Hr,2,.4,!0,.9)};ve.polilla_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;n=Ft(n),r=Ft(r),Vt(!0);const l=$e(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),Vt(!1),$a(e,n,r,10,im),$a(e,n,r,9,sn),fi(e,n,r,9,Math.PI*.85,.55,Au);for(let h=0;h<3;h++){const d=i*2+h*2.1;ee(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,Au)}ee(e,n-4,r-5,2,2,vn);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,m=14+h*10;e.globalAlpha=1-d,lm(e,n-f*m,r-c*m-6-d*14,h<2?1:2,h%2?we:sn)}e.globalAlpha=1,Math.random()<.4&&O(t.x,t.y,s,p(-.3,.3),p(-.3,.3),-.4,.6,Math.random()<.5?we:sn,2,.5,!0,.9)};q.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x+t*.4,e.y+n*.4,.75),s=Ft(14*(1-o))+2,l=Ft(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)ee(r,i-s,a-1,s*2,2,we),ee(r,i-1,a-s,2,s*2,we);else for(let u=1;u<=l;u+=2)ee(r,i+u,a+u,2,2,we),ee(r,i-u-2,a+u,2,2,we),ee(r,i+u,a-u-2,2,2,we),ee(r,i-u-2,a-u-2,2,2,we);ee(r,i-2,a-2,4,4,vn);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,c=16+u;ee(r,i+Math.cos(f)*c-1,a+Math.sin(f)*c*.6-1,2,2,u%2?we:sn)}}});for(let r=0;r<10;r++)O(e.x+t*.4,e.y+n*.4,.75,t*p(.5,1.5)+p(-.4,.4),n*p(.5,1.5)+p(-.4,.4),p(0,.4),p(.6,1),r%2?we:sn,2,.6,!0,.9)};q.polilla_W=e=>{if(e.type==="heal"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),fi(n,o,i,7,-.6,.5,sn);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;ee(n,o-10+a*10,i+s*50,2,4,a%2?Hr:vn)}}});for(let n=0;n<8;n++)O(e.x+p(-.35,.35),e.y+p(-.35,.35),p(1,1.6),0,0,-p(.6,1.2),p(.7,1.1),n%2?sn:we,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=hc(e.uid),i=o?o.x:e.x,a=o?o.y:e.y,[s,l]=C(i,a,2.2),u=r*1.2,f=Ft(15*dc(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),fi(n,s,l,f+2,-.7,.5,As),fi(n,s,l,f,-.7,.55,vn);for(let c=0;c<5;c++){const h=M.T*2+c*1.26;(M.T*6+c)%2<1&&ee(n,s+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,we)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=t*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*Xr,[f,c]=C(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);ee(n,f-1,c-1,l%3?2:3,2,l%2?Hr:vn)}}}});for(let n=0;n<40;n++){const r=p(0,Xr),o=Math.sqrt(Math.random())*t*.9;O(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,p(2.2,3),p(-.15,.15),p(-.15,.15),-p(1.2,2),p(1.1,1.6),[sn,Hr,vn,we][n%4],2,.4,!0,.99)}};q.polilla_E=e=>{const t=e.dur||3;A({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=hc(e.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?dc(a/.22):1,u=.85+.15*Math.sin(M.T*8),[f,c]=C(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),y=c-9-3*l,g=f+d*(7+10*l),x=c+9;Cu(n,g,x,10*l*u,8,.4*d,wu,_u,s),Cu(n,m,y,15*l*u,13,-.45*d,_u,wu,s),n.globalAlpha=.9*s,l>.5&&($a(n,m+d*2,y-1,4,sm),ee(n,m+d*2-1,y-2,2,2,we),ee(n,m+d*2-2,y-3,1,1,vn))}Vt(!0);const h=$e();for(let d=0;d<6;d++){const m=d%2?1:-1,y=(M.T*3+d*.37)%1;y>.3||(h.globalAlpha=(1-y/.3)*s,ee(h,f+m*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,vn))}Vt(!1)}});for(let n=0;n<18;n++){const r=p(0,Xr),o=p(1,2.2);O(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,p(.3,1.2),p(.5,.9),n%3?we:sn,2,.5,!0,.92)}};q.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=um(e),r=n&&n.dur||4,o=10,i=t*rt.HW*Math.SQRT2,a=t*rt.HH*Math.SQRT2,s=Array.from({length:o},(f,c)=>({ox:p(-.6,.6)*t,oy:p(-.6,.6)*t,w:p(.8,1.6),p:p(0,Xr),z:p(.6,2.4),ph:c})),l=Array.from({length:7},(f,c)=>({o:(c/6-.5)*1.7,w:Ft(p(8,26)),p:p(0,Xr)}));let u=0;A({type:"custom",layer:"ground",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,h/.25,(r-h)/.4),[m,y]=C(e.x,e.y);f.globalAlpha=.13*d,f.fillStyle=As;for(let g=-a;g<=a;g+=2){const x=i*Math.sqrt(Math.max(0,1-g*g/(a*a)));f.fillRect(Ft(m-x),Ft(y+g),Ft(x*2),2)}f.globalAlpha=.4*d,fi(f,m,y,Ft(t*30),-.5,.5,Hr,.5),f.globalAlpha=.85*d;for(let g=0;g<40;g++){const x=g/40*Xr+h*.35,[b,v]=C(e.x+Math.cos(x)*t,e.y+Math.sin(x)*t);ee(f,b-1,v-1,2,2,g%4?Hr:vn)}}}),A({type:"custom",layer:"top",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,(r-h)/.4),m=Math.min(1,h/.25),[y,g]=C(e.x,e.y),x=330,b=f.createLinearGradient(0,g-x,0,g);b.addColorStop(0,"rgba(160,230,255,0)"),b.addColorStop(1,"rgba(160,230,255,0.14)"),f.globalAlpha=d,f.fillStyle=b,f.fillRect(Ft(y-i*m),Ft(g-x),Ft(i*2*m),x);for(const v of l){const S=y+v.o*i*m,_=(S-y)/i,w=g-a*Math.sqrt(Math.max(0,1-_*_));f.globalAlpha=d*(.07+.06*Math.sin(M.T*3+v.p))*(h<.25?2:1),ee(f,S-v.w/2,g-x,v.w,Ft(w-(g-x)),sn)}for(const v of s){const S=h*v.w+v.p,_=e.x+v.ox+Math.cos(S)*.6+Math.sin(S*2.3)*.2,w=e.y+v.oy+Math.sin(S)*.6,[T,R]=C(_,w,v.z+Math.sin(h*1.7+v.p)*.4);f.globalAlpha=d*Math.min(1,h/.4),am(f,T,R,2,((M.T*14|0)+v.ph)%4,v.ph%3?sn:vn,Hr)}if(u<50&&Math.random()<.3){u++;const v=p(0,Xr),S=Math.sqrt(Math.random())*t;O(e.x+Math.cos(v)*S,e.y+Math.sin(v)*S,p(2.5,3.5),0,0,-p(.8,1.4),p(1.5,2.2),u%3?sn:we,2,0,!0,.99)}}}),ot(2)};const Z=Math.round,ke=Math.PI*2,xr=e=>e*rt.HW*Math.SQRT2,K={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},Bl=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function mc(e,t,n,r){r=Math.max(1,Z(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Z(t[0]+(n[0]-t[0])*s/i-a),Z(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Oe(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(Z(t-l),Z(n+a),Math.max(1,Z(l*2)),i)}}function nr(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*ke;e.fillRect(Z(t+Math.cos(u)*r-i/2),Z(n+Math.sin(u)*r*.5-i/2),i,i)}}function fm(e,t,n,r=99){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function Ti(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?K.skinD:i===1?K.skin:K.skinL;for(let a=0;a<=o;a++){const s=n+(r-n)*a/o,l=Z(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(Z(t[a][0]-l/2),Z(t[a][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const a=n+(r-n)*i/o,s=Math.max(2,Z(a*.4)),l=Z(t[i][0]),u=Z(t[i][1]+a*.3);e.fillStyle=K.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=K.skinD,e.fillRect(l,u,1,1))}}}function pc(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const y=m/u,g=Math.sin(y*7-n*14)*7*y;f.push([e[0]+o*y+s*g,e[1]+i*y+l*g])}let[c,h]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const y=3.2*(1-m/8);c+=Math.cos(d)*y,h+=Math.sin(d)*y,f.push([c,h])}return f}q.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:r+p(-.9,.9)*o,d:i*p(.45,1),t0:p(0,.12),w:p(0,6),sz:p(6,10),bio:u%4===0}));A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const c of a){const h=(f-c.t0)/.42;if(h<0||h>1.15)continue;const d=1-Math.pow(1-Math.min(1,h),2),m=c.d*d,y=Math.sin(d*ke+c.w)*.2*d,g=t+Math.cos(c.a)*m-Math.sin(c.a)*y,x=n+Math.sin(c.a)*m+Math.cos(c.a)*y,[b,v]=C(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),S=c.sz*(1-.4*d);l.globalAlpha=h>1?(1.15-h)/.15:1,l.fillStyle=K.ink,Oe(l,b,v,S,S*.75,2),l.fillStyle=K.inkV,Oe(l,b-S*.3,v-S*.3,S*.4,S*.3,1),c.bio&&(l.fillStyle=K.bio,l.fillRect(Z(b+S*.2),Z(v),2,2))}}});const s=a.slice(0,9);A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const c of s){const h=f.t-c.t0-.42;if(h<0)continue;const d=Math.min(1,h*10),m=Math.min(1,(2.6-f.t)/.6),[y,g]=C(t+Math.cos(c.a)*c.d,n+Math.sin(c.a)*c.d),[x,b]=C(t,n),v=x-y,S=b-g,_=Math.hypot(v,S)||1;l.globalAlpha=.85*m;for(let T=0;T<4;T++){const R=(c.sz+2)*(1-T*.22)*d;l.fillStyle=T?K.inkP:K.ink,Oe(l,y+v/_*T*7*d,g+S/_*T*4*d,R,R*.5,2)}const w=.5+.5*Math.sin(M.T*4+c.w*3);l.globalAlpha=m*w,l.fillStyle=K.bio,l.fillRect(Z(y-3),Z(g-1),2,2),l.fillRect(Z(y+4),Z(g+1),2,1),c.bio&&(l.fillStyle=K.bioL,l.fillRect(Z(y),Z(g-2),1,1))}}});for(let l=0;l<12;l++){const u=r+p(-1,1)*o,f=p(2,4.5);O(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,p(.5,1.8),p(.35,.6),l%3?K.ink:K.bio,l%3?3:2,7,l%3===0,.93)}};const fo=[];function cm(e){let t=null,n=1.3;for(const r of fo){if(r.done||M.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}const yc=e=>C(e.x,e.y,.35);function gc(e,t,n){A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=lt(e);if(!i)return;const a=yc(i),s=C(t,n,.45),l=1-o*o;l<.05||Ti(r,pc(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],M.T,1+o*2),10,3)}})}q.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=fo.length-1;o>=0;o--)M.T-fo[o].t>3&&fo.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1};fo.push(r),A({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,gc(r.uid,r.lx,r.ly),a.t=a.dur+1)}});for(let o=0;o<8;o++)O(e.x+t*.3,e.y+n*.3,.3,t*p(.5,1.5)+p(-.6,.6),n*p(.5,1.5)+p(-.6,.6),p(.5,1.5),.4,o%2?K.sucker:K.skin,2,5,!1)};ve.pulpo_W=(e,t,n,r,o,i)=>{const a=cm(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=M.T);const s=a?lt(a.uid):t.src||fm(t.x,t.y,"pulpo",9),l=s&&!s.dead?yc(s):[n-Math.cos(o)*70,r-Math.sin(o)*70];Ti(e,pc(l,[n,r],i),11,3),Math.random()<.25&&O(t.x,t.y,.4,0,0,-.3,.4,K.bio,2,3,!0)};q.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?lt(e.uid):null,o=r?r.team:null;let i=null,a=1.3;for(const h of M.game?M.game.units:[]){if(h.dead||o&&h.team===o||r&&h===r||h.kind==="tower"||h.kind==="nexus")continue;const d=Math.hypot(h.x-t,h.y-n);d<a&&(a=d,i=h)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const h of fo)h.uid===e.uid&&M.T-h.t<1.5&&(!f||h.t>f.t)&&(f=h);f&&!f.done&&(f.done=!0,gc(f.uid,t,n));const c=h=>{const d=s?lt(s):null;return d&&!d.dead?[d.x,d.y]:[h.x,h.y]};A({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(h,d,m){const[y,g]=c(m),[x,b]=C(y,g),v=Math.min(1,m.t/.12),S=d>.8?(1-d)/.2:1;h.globalAlpha=.9*S,h.fillStyle=K.ink,Oe(h,x,b,30*v,13*v,2),h.fillStyle=K.inkP,Oe(h,x,b,20*v,8*v,2),h.fillStyle=K.bio,nr(h,x,b,30*v,18,2,M.T*2,3)}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(h,d,m){const[y,g]=c(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),v=M.T;h.globalAlpha=x;const S=[];for(let _=0;_<=16;_++){const w=_/16,T=w*1.15*b,R=Math.max(0,w-.6)/.4,[k,E]=C(y,g,T);S.push([k+u*(20-R*26)+Math.sin(v*5+w*4)*2,E-R*6])}Ti(h,S,12,3);for(let _=0;_<2;_++){const[,w]=C(y,g,(.22+_*.3)*b),[T]=C(y,g),R=19-2*Math.sin(v*9+_*2),k=1+.08*Math.sin(v*9);for(let E=0;E<=12;E++){const L=.1*Math.PI+E/12*.8*Math.PI,H=T+Math.cos(L)*R*k,Q=w+Math.sin(L)*7;h.fillStyle=K.skinD,h.fillRect(Z(H)-4,Z(Q)-4,8,8),h.fillStyle=K.skin,h.fillRect(Z(H)-3,Z(Q)-3,6,5),E%3===1&&(h.fillStyle=K.sucker,h.fillRect(Z(H)-1,Z(Q)+1,3,2))}}}});for(let h=0;h<10;h++){const d=Math.random()*ke,m=p(1,2.4);O(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,p(1,2.5),.5,h%3?K.ink:K.bio,3,9,h%3===0)}ot(Bl(e)?3:1)};function hm(e,t,n,r,o,i){if(r<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=C(t,n,l*r*.75),c=Math.max(0,l-.55)/.45;a.push([u+Math.sin(o*3+i+l*3)*4*l+c*c*10,f+c*c*8])}Ti(e,a,8,2)}q.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(s=>({a:s/4*ke+p(-.3,.3),d:p(.45,.75),ph:Math.random()*ke})),a=s=>Math.min(1,s/.25,(o-s)/.35);A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=Math.min(1,u.t/.3),[h,d]=C(t,n),m=xr(r)*c,y=u.t;s.globalAlpha=.6*f,s.fillStyle=K.navy,Oe(s,h,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=K.deep,Oe(s,h,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const b=(x/28+y*.55)%1,v=1-b,S=g/3*ke+y*2.2+b*5,_=h+Math.cos(S)*m*(.08+.9*v),w=d+Math.sin(S)*m*(.08+.9*v)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=v>.6?K.water:v>.3?K.bio:K.bioL;const T=v>.5?4:3;s.fillRect(Z(_)-(T>>1),Z(w)-1,T,2+(v>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=K.foam,nr(s,h,d,m*.97,56,3,y*1.4,4),s.fillStyle=K.water,nr(s,h,d,m*.85,40,2,y*1.9,3),s.globalAlpha=f,s.fillStyle=K.inkV,Oe(s,h,d,19*c,9*c,1),s.fillStyle=K.abyss,Oe(s,h,d,15*c,7*c,1)}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=M.T;s.globalAlpha=f;for(const h of i){const d=h.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+h.ph))*1.1;hm(s,t+Math.cos(d)*r*h.d,n+Math.sin(d)*r*h.d,m,c,h.ph)}for(let h=0;h<6;h++){const d=u.t*1.5+h/6,m=Math.floor(d),y=d-m,g=dt(m*11+h)*ke,x=r*.3*dt(m*5+h*7),[b,v]=C(t+Math.cos(g)*x,n+Math.sin(g)*x,y*.9),S=2+Z(y*3);s.globalAlpha=f*(1-y),s.fillStyle=K.foam,s.fillRect(Z(b)-S,Z(v),1,2),s.fillRect(Z(b)+S,Z(v),1,2),s.fillRect(Z(b),Z(v)-S,2,1),s.fillRect(Z(b),Z(v)+S,2,1)}}}),A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=C(t,n);s.globalAlpha=1-l,s.fillStyle=K.foam,nr(s,u,f,xr(r)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*ke;O(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,p(1,2.5),.5,s%3?K.foam:K.bio,3,8,s%3===0)}};const Ha=new Map;function Vs(e,t,n){const r=lt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function dm(e,t,n,r,o){const a=10*r;if(a<1){e.fillStyle=K.inkL,e.fillRect(Z(t-26),Z(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=K.inkL,e.fillRect(Z(t-u-2),Z(n+l),Z(u*2+4),2),e.fillStyle=K.eyeD,e.fillRect(Z(t-u),Z(n+l),Z(u*2),2)}const s=Math.sin(o*.8)*6;e.fillStyle=K.eye,Oe(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=K.abyss,e.fillRect(Z(t+s-8),Z(n-2),16,Math.max(2,Z(5*r))),e.fillStyle="#ffffff",e.fillRect(Z(t+s-6),Z(n-Math.min(6,a-1)),3,2)}function mm(e){const t={ended:!1,endT:0};Ha.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*ke,off:Math.random(),sp:p(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*ke,off:Math.random(),sz:Z(p(4,7))})),u=[0,1,2,3,4].map(f=>({a:f/5*ke+p(-.2,.2),ph:Math.random()*ke}));A({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(f,c,h){const d=Vs(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[y,g]=C(r,o),x=xr(i)*m;f.globalAlpha=.4*d,f.fillStyle=K.inkP,Oe(f,y,g,x*.95,x*.475,3),f.globalAlpha=.7*d,f.fillStyle=K.ink,Oe(f,y,g,x*.52,x*.26,3),f.globalAlpha=d,f.fillStyle=K.abyss,Oe(f,y,g,x*.27,x*.135,2);for(const b of s){const v=(b.off+h.t*b.sp)%1,S=1-v,_=x*(.27+.73*S),w=b.a+v*v*4+h.t*.8,T=y+Math.cos(w)*_,R=g+Math.sin(w)*_*.5,k=y+Math.cos(w-.14)*_*1.04,E=g+Math.sin(w-.14)*_*.52;f.globalAlpha=d*(.3+.7*v),f.fillStyle=S>.6?K.water:S>.3?K.bio:K.mag,mc(f,[k,E],[T,R],S>.5?2:3)}f.globalAlpha=.8*d,f.fillStyle=K.inkV,nr(f,y,g,x,64,3,-h.t*.6,4)}}),A({type:"custom",layer:"top",add:!0,dur:a,x:r,y:o,draw(f,c,h){const d=Vs(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[y,g]=C(r,o,.04),x=xr(i)*.28*m,b=M.T;for(let v=0;v<44;v++){const S=v/44*ke+b*2.5,_=.6+.4*Math.sin(b*20+v*1.7);f.globalAlpha=d*_,f.fillStyle=v%2?K.bio:K.mag,f.fillRect(Z(y+Math.cos(S)*x)-1,Z(g+Math.sin(S)*x*.5)-1,3,3)}f.globalAlpha=d*.45,f.fillStyle=K.bioL;for(let v=0;v<18;v++){const S=Math.PI+v/17*Math.PI;f.fillRect(Z(y+Math.cos(S)*x*1.15),Z(g-14+Math.sin(S)*x*.35),2,2)}}}),A({type:"custom",layer:"top",dur:a,x:r,y:o,draw(f,c,h){const d=Vs(t,n,h);if(d<=0)return;const m=M.T,y=Math.min(1,h.t/.5)*(t.ended?d:1);f.globalAlpha=d;for(const S of l){const _=(S.off+h.t*.4)%1,w=1-_,T=S.a+_*5,[R,k]=C(r+Math.cos(T)*i*.95*w,o+Math.sin(T)*i*.95*w,.05+.35*Math.sin(_*Math.PI)),E=Math.max(2,Z(S.sz*(.35+.65*w)));f.fillStyle=K.ink,f.fillRect(Z(R)-(E>>1)-1,Z(k)-(E>>1)-1,E+2,E+2),f.fillStyle=K.rock,f.fillRect(Z(R)-(E>>1),Z(k)-(E>>1),E,E),f.fillStyle=K.rockL,f.fillRect(Z(R)-(E>>1),Z(k)-(E>>1),Math.max(1,E>>1),1)}const g=u.map(S=>({t:S,a:S.a+h.t*.3})).sort((S,_)=>Math.cos(S.a)+Math.sin(S.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:S,a:_}of g){const w=[];for(let T=0;T<=18;T++){const R=T/18,k=i*(.92-.42*R*R),E=_+Math.sin(m*2+S.ph+R*3)*.12*R,L=Math.sin(R*Math.PI*.8)*1.9*y-Math.max(0,R-.8)*1.2*y;w.push(C(r+Math.cos(E)*k,o+Math.sin(E)*k,Math.max(0,L)))}Ti(f,w,15*y+2,3)}const x=t.ended?0:Math.min(1,Math.max(0,(h.t-.15)/.35)),[b,v]=C(r,o,.3);dm(f,b,v,x,m)}}),ot(Bl(e)?6:2)}q.pulpo_R=e=>{if(e.type==="channel"){mm(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[a,s]=C(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=K.mag,nr(o,a,s,xr(r)*(.25+.75*l),48,3,i*3),o.fillStyle=K.bioL,nr(o,a,s,xr(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*ke,a=r*p(.6,1);O(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,o%2?K.inkV:K.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Ha.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=M.T),Ha.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)O(t+p(-.6,.6),n+p(-.6,.6),.2,p(-1,1),p(-1,1),p(.5,1.5),.6,i%2?K.ink:K.inkV,4,2,!1);return}A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.3);if(a<.35){const u=Z(30*(1-a/.35))+2;i.fillStyle=K.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=K.mag,nr(i,s,l+20,xr(r)*u,56,4),i.fillStyle=K.bio,nr(i,s,l+20,xr(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*ke,s=p(2,5);O(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,p(1.5,3.5),p(.5,.9),[K.ink,K.inkV,K.bio,K.mag][i%4],i%3?3:4,9,i%4>1,.94)}ot(Bl(e)?8:3)}};ve.pulpo_A=(e,t,n,r,o,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(o),l=Math.sin(o);e.fillStyle=K.ink,Oe(e,n-s*11,r-l*11,3,3,1),Oe(e,n-s*18,r-l*18,2,2,1),e.fillStyle=K.ink,Oe(e,n,r,a+1,a*.8+1,2),e.fillStyle=K.inkV,Oe(e,n,r,a-1,a*.8-1,2),e.fillStyle=K.inkL,e.fillRect(Z(n-3),Z(r-4),3,2),e.fillStyle=K.bio,e.fillRect(Z(n+2),Z(r+1),2,2),Math.random()<.3&&O(t.x,t.y,t.z||.45,0,0,-.2,.35,K.ink,2,5,!1)};xe.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*ke;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=K.ink,Oe(o,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*ke,c=(u%2?13:19)*l;o.fillStyle=K.ink,mc(o,[a,s],[a+Math.cos(f)*c,s+Math.sin(f)*c*.75],4),o.fillStyle=K.inkV,o.fillRect(Z(a+Math.cos(f)*(c+4))-2,Z(s+Math.sin(f)*(c+4)*.75)-2+i*10,4,4)}o.fillStyle=K.bio,o.fillRect(Z(a-3),Z(s-2),2,2),o.fillRect(Z(a+4),Z(s+2),2,2)}});for(let o=0;o<6;o++)O(t,n,.45,p(-1.2,1.2),p(-1.2,1.2),p(.8,2),.4,o%3?K.ink:K.bio,2,8,o%3===0)};const Mt=Math.round,Vn=Math.PI*2,st={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},qs=e=>e*rt.HW*Math.SQRT2;function rr(e,t,n,r){r=Math.max(1,Mt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Mt(t[0]+(n[0]-t[0])*s/i-a),Mt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function go(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(Mt(t-l),Mt(n+a),Math.max(1,Mt(l*2)),i)}}function Wa(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=Mt(n-a*o/2),u=Mt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Io(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Vn;e.fillRect(Mt(t+Math.cos(u)*r-i/2),Mt(n+Math.sin(u)*r*.5-i/2),i,i)}}const Vo=new Map;function pm(e){if(Vo.has(e))return!1;if(Vo.size>300)for(const[t,n]of Vo)M.T-n>4&&Vo.delete(t);return Vo.set(e,M.T),!0}function ym(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Fe(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const Tu=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],gm=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function xc(e,t,n,r){Wa(e,Tu,t+1,n+1,r,{g:st.deep,v:st.deep}),Wa(e,Tu,t,n,r,{g:st.pad,v:st.moss})}function xm(e,t){const n=Math.random()*6;A({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,a]=C(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=st.waterD,Io(r,i,a,8+o*14,10,2,n,3),xc(r,i,a+Mt(Math.sin(o*9+n)),o<.55?2:1)}})}function vm(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[t+o*l,n+i*l];e.fillStyle=st.ink,rr(e,a(-11),a(11),5),e.fillStyle=st.moss,rr(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",rr(e,a(0),a(8),3),e.fillStyle="#ffffff",rr(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(Mt(s[0]-2),Mt(s[1]-2),4,4),e.fillStyle=st.ink,e.fillRect(Mt(s[0]-1),Mt(s[1]-1),2,2)}function bm(e,t){A({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=st.foam,Io(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=st.water,Io(n,o,i,3+r*16,10,2)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=Mt(12*(1-r))+2;n.fillStyle=st.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*Vn,o=p(.8,2);O(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,p(1.5,3),.5,n%3?st.water:st.padL,2,9,!1,.95)}}const qo=new Map;function Mm(e){let t=qo.get(e.id);if(!t&&(t={p:[],drop:0,seen:M.T},qo.set(e.id,t),qo.size>40))for(const[n,r]of qo)M.T-r.seen>2&&qo.delete(n);return t.seen=M.T,t}q.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=C(r,o,.55),u=Mt(9*(1-a))+2;i.fillStyle=st.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(s-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)O(r,o,.5,t*p(2,4)+p(-.7,.7),n*p(2,4)+p(-.7,.7),p(.6,1.6),.4,i%2?st.water:st.padL,2,6,!1,.9)};ve.rana_Q=(e,t,n,r,o,i)=>{const a=t.z||.45,s=Mm(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,xm(t.x,t.y)),Vt(!0);const l=$e();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?st.padL:st.pad,rr(l,C(s.p[u-1][0],s.p[u-1][1],a),C(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));l.globalAlpha=1,Vt(!1),vm(e,n,r,i*26);for(const u of ym(t))pm("rq"+t.id+":"+u.id)&&bm(u.x,u.y)};function Sm(e,t,n){const r=Array.from({length:5},(i,a)=>({a:a/5*Vn+p(-.3,.3),d:n*p(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*Vn,h:p(26,44),w:Math.random()<.5?4:6}));A({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,ot(4),Rr({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*Vn,d=p(1,3.2);O(e+Math.cos(h)*.3,t+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,p(2.5,5),p(.5,.8),c%4?st.foam:st.water,3,12,!1,.97)}for(let c=0;c<6;c++)O(e+p(-.6,.6),t+p(-.6,.6),.1,p(-.4,.4),p(-.4,.4),p(1,2),.7,st.mud,4,8,!1)}const[l,u]=C(e,t),f=qs(n);i.globalAlpha=.35*(1-a),i.fillStyle=st.waterD,go(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=a*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?st.foam:st.water,Io(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const c of r){const h=qs(c.d)*(.6+a*.4);xc(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(a*10+c.ph)*1.5,2)}a>.08&&Wa(i,gm,l,u-4,a<.2?2:3,{g:st.moss,p:st.pink,P:st.pinkL,y:st.eye})}}),A({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=qs(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const c of o){const h=s+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,m=Mt(c.h*f),y=Math.cos(c.a)*a*10;m<2||(i.fillStyle=st.waterD,i.fillRect(Mt(h-c.w/2+y*.5),Mt(d-m),c.w,m),i.fillStyle=st.water,i.fillRect(Mt(h-c.w/2+y*.5),Mt(d-m),c.w-2,m-2),i.fillStyle=st.foam,i.fillRect(Mt(h-c.w/2+y-1),Mt(d-m-3),c.w+2,4))}}})}q.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,a=1.7,s=r-t,l=o-n,u=Math.hypot(s,l)||1;A({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,c){const[h,d]=C(t,n);f.globalAlpha=1-c,f.fillStyle=st.waterD,Io(f,h,d,10+c*34,18,3,0,3),f.fillStyle=st.foam,Io(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)O(t,n,.15,-s/u*p(1,2.5)+p(-.8,.8),-l/u*p(1,2.5)+p(-.8,.8),p(1.5,3),.5,f%3?st.mud:st.water,3,9,!1);A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),m=c>.75?(1-c)*4:1;for(let y=d;y<=h;y+=.05){const[g,x]=C(t+s*y,n+l*y,.3+6.8*y*(1-y)),b=(y-d)/Math.max(.01,h-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=st.deep,f.fillRect(Mt(g)-3,Mt(x)-3,6,6),f.fillStyle=b>.7?st.padL:st.pad,f.fillRect(Mt(g)-2,Mt(x)-2,4,4)}}}),A({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,Sm(r,o,a))}})};q.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,a)=>{const s=a/9*Vn+p(-.3,.3),l=a===0?0:p(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:p(14,22),z:p(.15,.6),up:p(.2,.5),col:[st.smokeA,st.smokeB,st.smokeC][a%3],dl:p(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:p(.3,.6)}));A({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.2),u=Mt(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=st.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),A({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,c]=C(l.x,l.y,l.z+l.up*u),h=Mt(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",go(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,go(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",go(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,c]=C(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=Mt(f+d*6)-3,y=Mt(c)-3;if(i.fillStyle=st.deep,i.fillRect(m-1,y-1,8,h?3:7),h){i.fillStyle=st.moss,i.fillRect(m,y,6,1);continue}i.fillStyle=st.eye,i.fillRect(m,y,6,5),i.fillStyle=st.ink,i.fillRect(m+1,y+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,y,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*Vn,s=p(1,2.6);O(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,p(1,2.5),.6,i%2?st.ink:st.moss,2,7,!1,.92)}};function _m(e,t,n,r){A({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const a=C(e,t,.35),s=C(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?st.ink:st.moss;for(let c=u;c<=l;c+=.03){const h=Mt((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*c,m=a[1]+(s[1]-a[1])*c+Math.sin(c*14)*1.5;o.fillRect(Mt(d-h/2),Mt(m-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();O(e+(n-e)*i,t+(r-t)*i,.35,p(-.6,.6),p(-.6,.6),p(.2,1),.5,st.ink,3,6,!1)}}function Ru(e,t,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?st.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,y=Math.max(1,Mt(h*(1-Math.abs(d/u*2-1))));e.fillRect(Mt(t+s*m*o/2-y/2+c),Mt(n+l*m*o/2-y/2+c),y,y)}}}function wm(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+p(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));A({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const a=i*.5,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),Ru(o,s+u.ox,l+u.oy,u.a,u.len,Mt(6*h)+1,c),Ru(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,Mt(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const a=i*.4,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const c=Mt(16*(1-f/.1))+2;o.fillStyle=st.padL,o.fillRect(s+u.ox-c,l+u.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*Vn,i=p(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:p(5,11),drips:[p(-1,1),p(-1,1),p(-1,1)]}});A({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=C(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=st.inkP,go(o,s,l,u,u*.5,2),o.fillStyle=st.ink,go(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(Mt(s+f*u*1.8),Mt(l+f*u*.6),3,2);o.fillStyle=st.moss,o.fillRect(Mt(s+u*.4),Mt(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*Vn,a=p(1.5,4.5);O(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,p(1,3),p(.4,.7),o%5?st.ink:st.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*Vn;O(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,st.padL,2,0,!0)}ot(8)}q.rana_R=e=>{if(e.type==="blink"){_m(e.x,e.y,e.ex??e.x,e.ey??e.y);return}wm(e.x,e.y)};xe.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],c=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];o.fillStyle=st.moss,rr(o,u,h,5),l>=.35&&rr(o,f,d,5),o.fillStyle="#ffffff",rr(o,u,h,2),l>=.35&&rr(o,f,d,2)}});for(let o=0;o<5;o++)O(t,n,.45,p(-1.2,1.2),p(-1.2,1.2),p(1,2.2),.35,o%2?st.water:st.padL,2,8,!1)};const Am="#7a879c",Cm="#363e50",Tm="#c9d3e2",Pu="#e8b858",Rm="#ffa040",vc="#f2e8d2",Mi="#cdbb9a",$l="#a08f72",bc="#6f6250",Oo="#33241a",Pm="#8a7356",Mc="#9a948a",Sc="#7a7468",_c="#5e584e",zm="#c4beb2",Im="#ffe2a0",Om="#d89a3a",Fm="#fff8e6",Em="#ff5a1a",le=Math.round,Ys=Math.PI*2;function Pe(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(le(t),le(n),r,o)}function Oi(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(le(t+(r-t)*l/s-i/2),le(n+(o-n)*l/s-i/2),i,i)}function zu(e,t,n,r,o){const[i,a]=C(t,n),s=r*rt.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(le(i-f),le(a+u),le(f*2),2)}}function wc(e,t){const n=(e-t)*rt.HW,r=(e+t)*rt.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Ac=e=>{const t=lt(e);return t&&!t.dead&&!Fe(t)?t:null},Cs=()=>[Mc,Sc,_c,$l][Math.random()*4|0];function km(e,t,n,r,o){if(t=le(t)-6,n=le(n)-5,Pe(e,t,n,12,10,Cm),Pe(e,t+1,n+1,10,8,Am),Pe(e,t+1,n+1,10,2,Tm),Pe(e,t+2,n+6,2,2,o),Pe(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Pe(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const Um=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],Lm=[Im,Om,Fm,Em];function Ks(e,t,n,r,o){t=le(t),n=le(n);for(const[i,a,s,l,u]of Um){const f=o>0?i:-i-s;e.fillStyle=Lm[u],e.fillRect(t+f*r,n+a*r,s*r,l*r)}}xe.rino=e=>{A({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.4),i=le(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;Pe(t,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":vc)}}});for(let t=0;t<3;t++)O(e.x,e.y,.3,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3),.5,Cs(),3,10,!1,.95);for(let t=0;t<2;t++)O(e.x+p(-.2,.2),e.y+p(-.2,.2),.1,p(-.4,.4),p(-.4,.4),.5,.5,Mi,5,0,!1,.9);ot(1.5)};q.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[c,h]=wc(o,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(v,S)=>p(-.06,.06)+(S%2?.05:-.05)),y=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:p(.15,.35)}:null),g=Array.from({length:8},(v,S)=>({k:(S+.5)/8,o:p(-.35,.35),r:Array.from({length:4},()=>[p(-10,6),p(-8,2),le(p(6,12)),le(p(5,8)),[Mi,$l,Mi,bc][Math.random()*4|0]])}));let x=0,b=!1;A({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,T=Math.min(1,w/r),R=Math.floor(T*d);v.globalAlpha=.8*Math.min(1,(_.dur-w)/.6);for(const k of[-.3,.3]){const E=k>0?1:-1;let[L,H]=C(e.x+s*k,e.y+l*k);for(let Q=1;Q<=R;Q++){const ut=Q/d,At=k+m[Q]*E,[P,z]=C(e.x+o*ut+s*At,e.y+i*ut+l*At);Oi(v,L,H+1,P,z+1,2,Pm),Oi(v,L,H,P,z,2,Oo);const I=y[Q];if(I&&I.s===E){const[U,D]=C(e.x+o*ut+s*(At+E*I.l)+u*I.l*.5,e.y+i*ut+l*(At+E*I.l)+f*I.l*.5);Oi(v,P,z,U,D,1,Oo)}L=P,H=z}}}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,T=Math.min(1,w/r);for(;x<18*T;){x++;const R=Math.random()*T;O(e.x+o*R+p(-.3,.3),e.y+i*R+p(-.3,.3),.1,-u*p(.5,2)+p(-1,1),-f*p(.5,2)+p(-1,1),p(2,4),p(.5,.8),Cs(),3,12,!1,.95)}if(w>=r&&!b){b=!0,ot(5);for(let R=0;R<12;R++){const k=Math.atan2(f,u)+p(-.9,.9),E=p(2,4.5);O(t+u*.5,n+f*.5,.2,Math.cos(k)*E,Math.sin(k)*E,p(2,4),p(.5,.8),Cs(),3,12,!1,.95)}}for(const R of g){const k=w-R.k*r;if(k<0||k>.9)continue;const E=k/.9,L=1+E*1.2,[H,Q]=C(e.x+o*R.k+s*R.o,e.y+i*R.k+l*R.o,.15+E*.5);v.globalAlpha=.6*(1-E);for(const ut of R.r)Pe(v,H+ut[0]*L,Q+ut[1]*L,le(ut[2]*L),le(ut[3]*L),ut[4])}}}),A({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(v,S,_){const w=Ac(e.uid);if(!w)return;const T=S*_.dur;v.globalAlpha=T>r?Math.max(0,1-(T-r)/.08):1;const[R,k]=C(w.x+u*.6,w.y+f*.6,.45);for(let H=0;H<6;H++){const Q=7-H;Pe(v,R+c*H*2.5-Q/2,k+h*H*2.5-Q/2,Q,Q,H<2?vc:"#ffffff")}const[E,L]=C(w.x,w.y,.5);v.globalAlpha*=.6;for(let H=0;H<5;H++){const Q=(H-2)*9,ut=24+H*13%3*10;Oi(v,E-h*Q-c*26,L+c*Q-h*26,E-h*Q-c*(26+ut),L+c*Q-h*(26+ut),1,"#fff6e0")}}})};q.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=Ac(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=C(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let v=0;v<3;v++)O(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,p(-2,2),p(-2,2),p(1,2.5),.3,v?Rm:Pu,2,8,!0,.9)}const y=(1-m)*(1-m)*46,g=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,km(i,g+Math.cos(d.a)*y,x+Math.sin(d.a)*y*.5-y*.6,le((M.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":Pu)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),ot(3)};q.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Ys+p(-.08,.08),j:p(.9,1.08),w:le(p(4,7)),h:le(p(3,6)),col:[Mc,Sc,_c][i%3]}));A({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,zu(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,zu(o,e.x,e.y,.4,"#24180e");for(const[f,c,h]of[[.45,Oo,2],[.7,Oo,2],[.95,Mi,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*Ys,[y,g]=C(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Pe(o,y-h/2,g-1,h,2,c)}}for(const f of r){const[c,h]=C(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,Pe(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=u,Pe(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),Pe(o,c-f.w/2,h-f.h-d,f.w,1,zm)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[a,s]=C(e.x,e.y,.05),l=le(30+110*i);o.globalAlpha=1-i,Pe(o,a-l,s-1,l*2,2,"#fff2d0"),Pe(o,a-l*.6,s-3,le(l*1.2),1,"#ffd890");for(const u of[-1,1])Pe(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=p(0,Ys),a=t*p(1.5,2.5);O(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,p(3,6),p(.5,.9),Cs(),Math.random()<.3?4:3,14,!1,.96)}ot(8)};q.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[e.x+Math.cos(u.a)*h,e.y+Math.sin(u.a)*h,c,h]};A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,m]=C(e.x,e.y);u.moveTo(le(d),le(m));for(let y=0;y<=12;y++){const g=r-i+2*i*y/12;[d,m]=C(e.x+Math.cos(g)*o,e.y+Math.sin(g)*o),u.lineTo(le(d),le(m))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const y of s){const[,,,g]=l(y,c),x=y.a+Math.PI/2;for(let b=.6;b<g;b+=.55){const v=Math.round(b/.55)%2?.12:-.12,[S,_]=C(e.x+Math.cos(y.a)*b+Math.cos(x)*v,e.y+Math.sin(y.a)*b+Math.sin(x)*v);Pe(u,S-4,_-1,3,3,Oo),Pe(u,S+1,_-1,3,3,Oo)}}}}),A({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const c=f*a;for(const h of s){const[d,m,y]=l(h,c);if(c<h.del)continue;const g=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(g<=0)continue;const[x,b]=C(d,m,.55),[v]=wc(Math.cos(h.a),Math.sin(h.a)),S=v>=0?1:-1,_=y<.5?3:4,[w,T]=C(e.x,e.y,.55),R=x-w,k=b-T;u.globalAlpha=g*.18,Ks(u,x-R*.35,b-k*.35,_,S),u.globalAlpha=g*.35,Ks(u,x-R*.17,b-k*.17,_,S),u.globalAlpha=g,Ks(u,x,b,_,S)}}});for(let u=0;u<40;u++){const f=r+p(-i,i),c=p(.4,o*.8),h=p(2,5);O(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,p(.5,1.5),p(.5,.9),[Mi,$l,bc][u%3],4,3,!1,.9)}ot(10)};const X=Math.round,qe=Math.PI*2,Va=e=>e*rt.HW*Math.SQRT2,B={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},ks=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function ci(e,t,n,r){r=Math.max(1,X(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(X(t[0]+(n[0]-t[0])*s/i-a),X(t[1]+(n[1]-t[1])*s/i-a),r,r)}function on(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(X(t-l),X(n+a),Math.max(1,X(l*2)),i)}}function Cc(e,t,n,r=99){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function Dm(e,t,n,r=1.6){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}const Us=e=>C(e.x,e.y,.5);function Ls(e,t,n,r,o,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,c=Math.max(2,Math.ceil(l/3)),h=d=>{const m=Math.sin(d*Math.PI),y=Math.sin(d*9-r*28)*o*m;return[t[0]+a*d+u*y,t[1]+s*d+f*y+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?B.tongueD:d===1?B.tongue:B.tongueL;const m=d===0?7:d===1?5:2;for(let y=0;y<=c;y++){const g=y/c,x=h(g),b=d===2?m:Math.max(2,X(m*(1-g*.3)));e.fillRect(X(x[0]-b/2),X(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=h(d/l),y=X(m[0]),g=X(m[1]);e.fillStyle=B.ink,e.fillRect(y-2,g-5,5,10),e.fillStyle=B.iron,e.fillRect(y-1,g-4,3,8),e.fillStyle=B.ironL,e.fillRect(y-1,g-4,1,3)}}const js=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function Hl(e,t,n,r,o=1.5){const i=Math.cos(r),a=Math.sin(r),s=d=>[t+(i*d[0]-a*d[1])*o,n+(a*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?B.ink:d===1?B.iron:B.ironL;const m=d===0?6:d===1?4:1;for(let y=1;y<js.length;y++)ci(e,s(js[y-1]),s(js[y]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=B.ink,ci(e,l,u,4),e.fillStyle=B.ironL,ci(e,l,u,2),e.fillStyle=B.rust;const f=s([7.5,5]),c=s([-3,0]);e.fillRect(X(f[0]),X(f[1]),2,2),e.fillRect(X(c[0]),X(c[1])-1,3,2);const h=s([-12.5,0]);e.fillStyle=B.ink,e.fillRect(X(h[0])-5,X(h[1])-5,10,10),e.fillStyle=B.rust,e.fillRect(X(h[0])-4,X(h[1])-4,8,8),e.fillStyle=B.ink,e.fillRect(X(h[0])-2,X(h[1])-2,4,4)}const co=[];function Xm(e){let t=null,n=1.3;for(const r of co){if(r.done||M.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}function Gm(e,t,n){A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=lt(e);if(!i)return;const a=Us(i),s=C(t,n,.45),l=1-o*o,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&Ls(r,a,u,M.T,4*l,3*l),Hl(r,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-o*.4)}})}function Nm(e,t){A({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=B.slimeL;for(let a=0;a<10;a++){const s=a/10*qe+r;n.fillRect(X(o+Math.cos(s)*(8+r*26))-1,X(i+Math.sin(s)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)O(e,t,.5,p(-1.2,1.2),p(-1.2,1.2),p(1,2.4),.45,n%2?B.slime:B.tongueL,3,9,!1)}function Bm(e){let t=null;for(const c of co)!c.pulled&&c.team===e.team&&M.T-c.t<2.2&&(!t||c.t>t.t)&&(t=c);t&&(t.pulled=!0,t.done=!0);const n=t?lt(t.uid):Cc(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];A({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(c,h,d){const m=lt(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const y=f[f.length-1];(!y||Math.hypot(m.x-y[0],m.y-y[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const y of f){const g=1-(d.t-y[2])/1.1;if(!(g<=0)){c.globalAlpha=g*.9;for(const x of[-1,1]){const[b,v]=C(y[0]+l*x,y[1]+u*x);c.fillStyle=B.mud,c.fillRect(X(b)-2,X(v)-1,5,3),c.fillStyle=B.slime,c.fillRect(X(b)-1,X(v)-2,2,1)}}}}}),A({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(c,h,d){const m=lt(o),y=r?lt(r):null;if(!m||!y||m.dead||y.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-y.x,m.y-y.y)<(y.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){Nm(m.x,m.y),d.t=d.dur+1;return}const x=Us(y),b=C(m.x,m.y,.5);Ls(c,x,b,M.T,1.2,2),Hl(c,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),ot(ks({uid:r})?5:2)}q.sapo_Q=e=>{if(e.type==="hook_pull"){Bm(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=co.length-1;a>=0;a--)M.T-co[a].t>3&&co.splice(a,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};co.push(r),A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,r.pulled||Gm(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)O(o,i,.5,t*p(1.5,3.5)+p(-.8,.8),n*p(1.5,3.5)+p(-.8,.8),p(.8,2),.45,a%3?B.slime:B.tongueL,2+a%2,8,!1);A({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(a,s){const[l,u]=C(o,i,.5),[f,c]=C(o+t,i+n,.5),h=f-l,d=c-u,m=Math.hypot(h,d)||1;a.globalAlpha=1-s,a.fillStyle=B.fat;for(let y=-1;y<=1;y++)ci(a,[l-d/m*y*7,u+h/m*y*7],[l+h*(.3+s*.5)-d/m*y*7,u+d*(.3+s*.5)+h/m*y*7],2)}})};ve.sapo_Q=(e,t,n,r,o,i)=>{const a=Xm(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=M.T);const s=a?lt(a.uid):t.src||Cc(t.x,t.y,"sapo",11);s&&!s.dead&&Ls(e,Us(s),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),Hl(e,n,r,o),Math.random()<.3&&O(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?B.slime:B.tongueL,2,6,!1)};q.sapo_Q_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.5);for(let l=0;l<10;l++){const u=l/10*qe+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?B.fat:B.meatL,ci(r,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const s=X(10*(1-o))+2;r.fillRect(i-s/2,a-s/2,s,s)}});for(let r=0;r<14;r++){const o=Math.random()*qe,i=p(1,3);O(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,p(1.5,3.5),p(.5,.8),[B.meat,B.meatL,B.fat,B.slime][r%4],r%3?3:4,11,!1,.95)}};const qa=new Map;function Tc(e){const t={ended:!1,endT:0};return qa.set(e.uid+"_"+e.key,t),t}function Rc(e){const t=qa.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=M.T),qa.delete(e.uid+"_"+e.key)}function Ts(e,t,n){const r=lt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function $m(e){const t=Tc(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,a=s=>{const l=lt(n);return l?[l.x,l.y]:[s.x,s.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(s,l,u){const f=Ts(t,n,u);if(f<=0)return;const[c,h]=a(u),[d,m]=C(c,h),y=Va(o),g=M.T;s.globalAlpha=.22*f,s.fillStyle=B.gasD,on(s,d,m,y*.95,y*.475,3);for(let x=0;x<6;x++){const b=x/6*qe+g*.25,v=y*(.4+.35*dt(x+i));s.globalAlpha=.3*f,s.fillStyle=x%2?B.gas:B.gasD,on(s,d+Math.cos(b)*v,m+Math.sin(b)*v*.5,18+4*Math.sin(g*2+x),8,2)}for(let x=0;x<44;x++){const b=x/44*qe-g*.4,v=y*(.95+.05*Math.sin(b*5+g*3));s.globalAlpha=.85*f,s.fillStyle=x%3?B.gas:B.gasL,s.fillRect(X(d+Math.cos(b)*v)-1,X(m+Math.sin(b)*v*.5)-1,3,3)}for(let x=0;x<5;x++){const b=g*1.3+x*.2,v=Math.floor(b),S=b-v,_=dt(v*13+x+i)*qe,w=y*(.15+.75*dt(v*7+x*3+i)),T=d+Math.cos(_)*w,R=m+Math.sin(_)*w*.5;s.globalAlpha=f,s.fillStyle=S>.85?B.gasL:B.gas;const k=S>.85?4+(S-.85)*60:2+S*6;for(let E=0;E<8;E++){const L=E/8*qe;s.fillRect(X(T+Math.cos(L)*k)-1,X(R+Math.sin(L)*k*.6)-1,2,2)}}}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(s,l,u){const f=Ts(t,n,u);if(f<=0)return;const[c,h]=a(u),[d,m]=C(c,h),y=Va(o),g=M.T;for(let v=0;v<10;v++){const S=dt(v*7.3+i),_=(g*.7+S)%1,w=v/10*qe+S*2,T=y*(.15+.7*dt(v*3.1+i)),R=d+Math.cos(w)*T,k=m+Math.sin(w)*T*.5;s.globalAlpha=f*Math.sin(_*Math.PI)*.9,s.fillStyle=v%2?B.gasL:B.gas;for(let E=0;E<7;E++)s.fillRect(X(R+Math.sin(E*.9+g*6+v)*4)-1,X(k-8-_*46-E*5),3,4)}const[x,b]=C(c,h,.9);for(let v=0;v<5;v++){const S=v*1.7+i,_=x+Math.sin(g*(3.1+v*.4)+S)*(20+v*7),w=b-v*4+Math.sin(g*(6.2+v*.3)+S*2)*10;s.globalAlpha=f,s.fillStyle=B.fly,s.fillRect(X(_),X(w),3,2),s.fillStyle="#eaf4ff";const T=((g*36|0)+v)%2;s.fillRect(X(_)-1,X(w)-1-T,2,1),s.fillRect(X(_)+2,X(w)-1-T,2,1)}}})}function Ya(e,t,n,r){A({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=Va(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const c=f/26*qe,h=f%2?4:3;i.fillStyle=f%4?B.gas:B.gasL,i.fillRect(X(s+Math.cos(c)*u)-2,X(l+Math.sin(c)*u*.5)-1,h,3)}r&&(i.fillStyle=B.gasD,on(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const a=Math.random()*qe,s=p(.5,r?2.4:1.4);O(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,p(.4,1.4),p(.6,1),i%2?B.gas:B.gasL,r?5:4,-.6,!1,.9)}}q.sapo_W=e=>{if(e.type==="channel"){$m(e);return}const t=lt(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Ya(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(Rc(e),Ya(n,r,1.4,e.kind==="done"))};q.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const a=lt(t);return a&&!a.dead?a:null};A({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,c]=C(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),h=X(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=B.bellyD,on(i,f,c+1,h+2,h*.8+2,2),i.fillStyle=B.belly,on(i,f,c,h,h*.8,2),i.fillStyle="#ffffff",i.fillRect(X(f-h*.4),X(c-h*.5),3,2)}}),A({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const[u,f]=C(l.x,l.y);i.globalAlpha=1-a;for(let c=0;c<2;c++){const h=14+(a*1.2-c*.2)*52;if(!(h<14)){i.fillStyle=c?B.slime:B.belly;for(let d=0;d<22;d++){const m=d/22*qe;i.fillRect(X(u+Math.cos(m)*h)-2,X(f+Math.sin(m)*h*.45)-1,4,3)}}}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,y=l?l.y:s.y;for(let g=0;g<16;g++){const x=g/16*qe;O(m,y,.5,Math.cos(x)*p(1,2.6),Math.sin(x)*p(1,2.6),p(1,2.5),.5,g%2?B.slime:B.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,c]=C(l.x,l.y,.45),h=M.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=B.belly,on(i,f,c+6,13,11,2);for(let m=0;m<40;m++){const y=m/40*qe,g=Math.sin(y*3+h*6+r)*2.5+Math.sin(y*5-h*4)*1.5,x=f+Math.cos(y)*(30+g),b=c+Math.sin(y)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?B.slimeL:B.slime,i.fillRect(X(x)-1,X(b)-1,3,3)}for(let m=0;m<6;m++){const y=m/6*qe+h*.6,g=f+Math.cos(y)*31,x=c+Math.sin(y)*37;i.globalAlpha=d,i.fillStyle=B.skinD,i.fillRect(X(g)-2,X(x)-2,5,5),i.fillStyle=B.wart,i.fillRect(X(g)-1,X(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(X(f-18),X(c-26),4,2),i.fillRect(X(f-21),X(c-23),2,4),Math.random()<.12&&O(l.x+p(-.25,.25),l.y+p(-.25,.25),.15,0,0,-.2,.5,B.slime,2,4,!1)}})};const Hm=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function Wm(e,t,n,r,o){e.globalAlpha=r;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?B.skinD:s<12?B.skinL:B.skin,e.fillRect(X(t-l),X(n-s-2),X(l*2),2)}e.fillStyle=B.skinD;for(let s=0;s<7;s++)e.fillRect(X(t-36+dt(s)*72),X(n-14-dt(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=B.skin,on(e,l,u,12,10,2),e.fillStyle=B.eye,on(e,l,u-1,8,7,2),e.fillStyle=B.ink,e.fillRect(X(l-5+Math.sin(o*2)*1.5),X(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(X(l-4),X(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=B.ink,e.fillRect(X(l)-1,X(n)-1,7,8),e.fillStyle=B.teeth,e.fillRect(X(l),X(n),5,6-s%2*2)}}function Vm(e){const t=Tc(e),n=e.uid,r=(e.dur||3)+.5,o=lt(n),i=e.team||o&&o.team,a=Dm(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?lt(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=Ts(t,n,c);if(h<=0)return;const[d,m]=l(c),[y,g]=C(d,m),x=Math.min(1,c.t/.25);u.globalAlpha=h,u.fillStyle=B.skinD,on(u,y,g+2,58*x,27*x,2),u.fillStyle=B.mouth,on(u,y,g,50*x,22*x,2),u.fillStyle=B.mouthM,on(u,y,g+3,38*x,15*x,2),u.fillStyle=B.tongue,on(u,y,g+6,24*x,8*x,2),u.fillStyle=B.tongueL,u.fillRect(X(y-10*x),X(g+3),X(8*x),2)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=Ts(t,n,c);if(h<=0)return;const[d,m]=l(c),[y,g]=C(d,m),x=M.T,b=Math.min(1,c.t/.25),v=t.ended?0:Hm(c.t),S=g-4-b*(22+v*70);for(let w=0;w<2;w++){const[,T]=C(d,m,.3+w*.28),R=21-2*Math.sin(x*10+w),k=8;for(let E=0;E<=14;E++){const L=.12*Math.PI+E/14*.76*Math.PI,H=y+Math.cos(L)*R,Q=T+Math.sin(L)*k;u.globalAlpha=h,u.fillStyle=B.tongueD,u.fillRect(X(H)-3,X(Q)-3,6,6),u.fillStyle=B.tongue,u.fillRect(X(H)-2,X(Q)-2,4,4)}}const _=lt(n);if(_&&!_.dead){const w=Us(_),T=C(d,m,.45);if(Math.hypot(T[0]-w[0],T[1]-w[1])>18){u.globalAlpha=h,Ls(u,w,T,x,1,2);for(let R=0;R<5;R++){const k=(x*1.6+R/5)%1,E=T[0]+(w[0]-T[0])*k,L=T[1]+(w[1]-T[1])*k-3;u.fillStyle=B.meat,u.fillRect(X(E)-3,X(L)-3,6,6),u.fillStyle=B.meatL,u.fillRect(X(E)-2,X(L)-3,3,3)}}}Wm(u,y,S,h*b,x),u.globalAlpha=h*b;for(let w=0;w<=26;w++){const T=w/26*Math.PI,R=y+Math.cos(T)*54,k=g+Math.sin(T)*25;u.fillStyle=B.skinD,u.fillRect(X(R)-4,X(k)-3,8,8),u.fillStyle=B.skin,u.fillRect(X(R)-3,X(k)-3,6,5),u.fillStyle=B.skinL,u.fillRect(X(R)-3,X(k)-3,6,1),w%3===1&&w>1&&w<25&&(u.fillStyle=B.ink,u.fillRect(X(R)-3,X(k)-10,6,8),u.fillStyle=B.teeth,u.fillRect(X(R)-2,X(k)-9,4,6))}Math.random()<.2&&O(d+p(-.4,.4),m+p(-.2,.2),.9,0,0,-.5,.5,B.slimeL,2,6,!1)}}),ot(ks(e)?6:2)}function qm(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*qe,i=p(.8,2.2);O(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,p(1.5,3),.55,[B.meat,B.meatL,B.fat,B.slimeL][r%4],3,10,!1,.95)}ot(ks(n)?2.5:.6)}function Ym(e,t,n){A({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,a]=C(e,t),s=o<.3?1:1-(o-.3)/.7;r.globalAlpha=s,r.fillStyle=B.skinD,on(r,i,a-18*s,58*s,30*s,2),r.fillStyle=B.skin,on(r,i,a-22*s,52*s,25*s,2),r.fillStyle=B.skinL,r.fillRect(X(i-30*s),X(a-40*s),X(60*s),3),r.fillStyle=B.ink,r.fillRect(X(i-40*s),X(a-10*s),X(80*s),3)}}),Ya(e,t,1.8,!0),ot(ks(n)?7:2)}q.sapo_R=e=>{if(e.type==="channel"){Vm(e);return}if(e.type==="channel_tick"){qm(e.x,e.y,e);return}if(e.type==="channel_end")if(Rc(e),e.kind==="done")Ym(e.x,e.y,e);else for(let t=0;t<10;t++)O(e.x,e.y,.5,p(-1.2,1.2),p(-1.2,1.2),p(.5,1.5),.6,t%2?B.gas:B.slime,4,2,!1)};const Qs=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];xe.sapo=e=>{const t=e.x,n=e.y,r=e.uid?lt(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const c=Qs[0].length,h=X(s-(o>0?c*f-6:6)),d=X(l-14-u),m={h:"#6a3a1e",B:B.ink,b:"#a8acb4",r:B.rust,e:"#ffffff"};for(const y in m){i.fillStyle=m[y];for(let g=0;g<Qs.length;g++)for(let x=0;x<c;x++)Qs[g][x]===y&&i.fillRect(h+(o>0?x:c-1-x)*f,d+g*f,f,f)}if(a>.25){const y=(a-.25)/.75;i.fillStyle=B.fat,i.fillRect(X(s-10-y*16),X(l+6),X(8*(1-y))+1,2),i.fillRect(X(s+4+y*16),X(l+6),X(8*(1-y))+1,2)}}});for(let i=0;i<7;i++)O(t,n,.45,p(-1.4,1.4),p(-1.4,1.4),p(1,2.4),.4,[B.meat,B.meatL,B.slime][i%3],3,10,!1)};const Kt=Math.round,wt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Rs(e,t,n,r,o){e.fillStyle=o,e.fillRect(Kt(t-r/2),Kt(n-r/2),r,r)}const Si=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Km(e,t,n,r,o,i){const a=t.length,s=t[0].length,l=Kt(n-s*o/2),u=Kt(r-a*o/2);for(let f=0;f<a;f++)for(let c=0;c<s;c++){const h=i[t[f][c]];h&&(e.fillStyle=h,e.fillRect(l+c*o,u+f*o,o,o))}}function Pc(e,t,n,r,o){const i=Kt(t),a=Kt(n);o&&(e.fillStyle=o,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=r,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function Zs(e,t,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(Kt(t+(r-t)*f-a/2),Kt(n+(o-n)*f-a/2),a,a)}}const jm=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function zc(e,t,n,r,o,i,a,s){e.fillStyle=wt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=wt.teal,e.fillRect(t,n-o,r,Kt(o*.62)),e.fillStyle=wt.aqua,e.fillRect(t,n-o,r,Kt(o*.3)),e.fillStyle=wt.foam,e.fillRect(t+i,n-o-2+a,r,3),s&&(e.fillStyle=wt.white,e.fillRect(t+i*2,n-o-4+a,3,2))}q.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=lt(e.uid);let i=1,a=0;if(o){const v=t-o.x,S=n-o.y,_=Math.hypot(v,S);_>.05&&(i=v/_,a=S/_)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*rt.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-a)*rt.HW,m=(i+a)*rt.HH,y=Math.hypot(d,m)||1,g=Kt(d/y*3),x=Kt(m/y*2);A({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(v,S){const _=Math.min(1,S*3)*(S>.6?(1-S)/.4:1);Lt(t,n,r*.95,null,`rgba(18,80,110,${.32*_})`);for(let w=0;w<2;w++){const T=(S*2.4+w*.5)%1,R=r*.9*T;v.globalAlpha=_*(1-T);for(let k=0;k<22;k++){const E=k/22*6.283,[L,H]=C(t+Math.cos(E)*R,n+Math.sin(E)*R);Rs(v,L,H,2,wt.sea)}}v.globalAlpha=1}});const b={n:0,sp:!1};return A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(v,S){const _=-r*.95+S*r*1.9,w=Math.sin(Math.min(1,S*1.08)*Math.PI),T=Math.sqrt(Math.max(0,r*r-_*_))+.25,R=Math.floor(T*2/c);for(let k=0;k<=R;k++){const E=u>0?-T+k*c:T-k*c,L=1-Math.abs(E)/T,H=.85+.15*Math.sin(E*9+S*24),Q=Kt((8+30*Math.sqrt(Math.max(0,L)))*w*H/2)*2;if(Q<4)continue;const[ut,At]=C(t+i*_+s*E,n+a*_+l*E);zc(v,Kt(ut-h/2),Kt(At),h,Q,g,x,(E*7.7+S*30|0)%3===0)}if(b.n<32&&w>.3)for(let k=0;k<2;k++){b.n++;const E=p(-T,T);O(t+i*_+s*E,n+a*_+l*E,.35*w,i*p(.8,2),a*p(.8,2),p(1,2.5),.45,Math.random()<.5?wt.foam:wt.sea,2,7,!1)}if(!b.sp&&S>.82){b.sp=!0;for(let k=0;k<14;k++){const E=p(-r*.6,r*.6);O(t+i*r*.8+s*E,n+a*r*.8+l*E,.2,i*p(1,3)+p(-.5,.5),a*p(1,3)+p(-.5,.5),p(2,4),.55,wt.aqua,3,9,!1)}ot(3)}}}),!0};function Qm(e,t){A({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.1),a=Si(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),c=Math.sin(l)>0;n.globalAlpha=a*(c?1:.45),Rs(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,s%2?wt.sea:wt.foam)}if(r>.45){n.globalAlpha=Si((r-.45)/.55,.2,.6);const s=Kt(i-72-(r-.45)*20),l=Kt(o);n.fillStyle=wt.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)O(e+p(-.3,.3),t+p(-.3,.3),.2,0,0,p(1.2,2.2),.8,Math.random()<.5?wt.sea:wt.foam,2,0,!0);return!0}q.tortuga_W=e=>{if(e.type==="heal")return Qm(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=Si(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,m=f*2.094+h*5+l*9,[y,g]=C(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*h),Rs(s,y,g,h>.6?3:2,c%3===0?wt.foam:c%3===1?wt.sea:wt.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+p(-.2,.2),d:s*.03+p(0,.05)});const a={"#":wt.shell,a:wt.sand};return A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=u.a0+c*4.2+l*2,[m,y]=C(t+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),Km(s,jm,m,y,2,a)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=lt(o),f=u?u.x:t,c=u?u.y:n,[h,d]=C(f,c,.95),m=Kt(h),y=Kt(d),g=Si(l,.08,.5),x=Kt(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=g*.3,s.fillStyle=wt.lamp,s.fillRect(m-8,y-8,16,16),s.globalAlpha=g,s.fillRect(m-x,y-1,x*2,2),s.fillRect(m-1,y-x,2,x*2),s.fillStyle=wt.lampW,s.fillRect(m-3,y-3,6,6);for(let b=0;b<8;b++){const v=b*.785+l*5,S=10+l*30;Rs(s,m+Math.cos(v)*S,y+Math.sin(v)*S*.5+l*40,2,wt.lamp)}s.globalAlpha=1}}),!0};const Ic=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)Ic.push({th:r/t*6.283+n*.31,ph:e,row:n})});q.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};A({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=lt(t);if(!l||l.dead)return;const u=s*n,[f,c]=C(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,m=Math.max(0,(u-(n-.25))/.25),y=36*d,g=18*d,x=62*d,b=u*1.6%2.2-.3,v=Ic.map(S=>{const _=S.th+u*.5,w=Math.cos(S.ph);return{d:S,th:_,x:f+Math.cos(_)*y*w+Math.cos(_)*m*30,y:c+Math.sin(_)*g*w-Math.sin(S.ph)*x-4-m*10+m*m*30,z:Math.sin(_)*w}}).sort((S,_)=>S.z-_.z);for(const S of v){const _=u-(3-S.d.row)*.05;if(_<0)continue;S.y-=(1-Math.min(1,_/.1))*14;const w=S.z>-.15,T=Math.abs(S.d.ph-b)<.22;a.globalAlpha=(w?.85:.35)*(1-m)*Math.min(1,_*10),Pc(a,S.x,S.y,_<.06||T?wt.white:wt.foam,T?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let S=0;S<16;S++){const _=p(0,6.283),w=p(1.5,3.5);O(l.x,l.y,p(.2,.9),Math.cos(_)*w,Math.sin(_)*w,p(1,3),.5,Math.random()<.5?wt.foam:wt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;O(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,p(1.5,2.5),.4,Math.random()<.5?wt.sand:wt.shell,2,3,!1)}return!0};q.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}A({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const c=Si(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);Lt(t,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(m,y)=>C(t+m*h,n+y*h);for(let m=0;m<2;m++){u.globalAlpha=c*(m?.75:.85);const y=m?wt.lamp:wt.shellD,g=m?2:3,x=m?-1:0,b=m?-2:0;for(const[v,S]of i)for(let _=0;_<6;_++){const w=_*Math.PI/3,T=(_+1)*Math.PI/3,[R,k]=d(v+Math.cos(w)*o,S+Math.sin(w)*o),[E,L]=d(v+Math.cos(T)*o,S+Math.sin(T)*o);Zs(u,R+x,k+b,E+x,L+b,5,g,y)}for(let v=0;v<22;v++){const S=v/22*6.283,[_,w]=d(Math.cos(S)*r*.66,Math.sin(S)*r*.66),[T,R]=d(Math.cos(S)*r*.86,Math.sin(S)*r*.86);Zs(u,_+x,w+b,T+x,R+b,5,g,y);const k=(v+1)/22*6.283,[E,L]=d(Math.cos(k)*r*.86,Math.sin(k)*r*.86);Zs(u,T+x,R+b,E+x,L+b,6,g,y)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const c=u/a*6.283,h=f/a*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),m=Math.sin(Math.min(1,f*1.05)*Math.PI),y=[];for(let g=0;g<a;g++){const x=g/a*6.283;y.push(C(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of s){const x=g/a*6.283,[b,v]=y[g],S=y[(g+1)%a][0],_=Math.max(4,Math.ceil(Math.abs(S-b))+2),w=Kt((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(w<4)continue;const T=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=T?.82:1;const R=T?2:-2;zc(u,Kt(Math.min(b,S)-1),Kt(v),_,w,Kt(Math.cos(x-.785)*3),R,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let g=0;g<16;g++){const x=p(0,6.283);O(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*p(1,2.5),Math.sin(x)*p(1,2.5),p(1.5,3),.6,Math.random()<.5?wt.foam:wt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=p(0,6.283),c=p(2,5);O(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,p(3.5,6.5),p(.8,1.1),[wt.aqua,wt.sea,wt.foam,wt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return ot(10),!0};xe.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,a){const[s,l]=C(t,n),u=Kt(s),f=Kt(l);for(let c=0;c<(r?3:2);c++){const h=a*1.3-c*.18;if(h<=0||h>=1)continue;const d=Kt(6+h*(r?34:24)),m=Kt(d/2);i.globalAlpha=1-h,i.fillStyle=c?wt.sea:wt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5);i.globalAlpha=1-a,Pc(i,s,l-a*8,wt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=p(0,6.283),s=p(1,2.5);O(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,p(1.5,3),.4,i%2?wt.aqua:wt.foam,2,9,!1)}};const ht=Math.round,jr=Math.PI*2,nt={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},Oc=e=>e*rt.HW*Math.SQRT2;function ue(e,t,n,r){r=Math.max(1,ht(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(ht(t[0]+(n[0]-t[0])*s/i-a),ht(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Zm(e,t,n,r,o,i,a=!1){const s=t[0].length,l=t.length,u=ht(n-s*o/2),f=ht(r-l*o/2);for(const c in i){e.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<s;d++)t[h][a?s-1-d:d]===c&&e.fillRect(u+d*o,f+h*o,o,o)}}function Jm(e,t,n,r,o,i){const a=Math.abs(r),s=ht(t),l=ht(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=o,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=o,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const Yo=new Map;function Fc(e){if(Yo.has(e))return!1;if(Yo.size>300)for(const[t,n]of Yo)M.T-n>4&&Yo.delete(t);return Yo.set(e,M.T),!0}function tp(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Fe(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const ep=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];xe.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=ht(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=nt.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+c*l*.8-u/2,u,u);o.fillStyle=nt.f2;for(let f=0;f<6;f++){const c=f/6*jr+i*3;o.fillRect(ht(a+Math.cos(c)*(6+i*8))-1,ht(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=nt.cream,o.fillRect(a-2,s-2,4,4))}}),O(t,n,.6,p(-.5,.5),p(-.5,.5),.4,.8,Math.random()<.5?nt.leaf:nt.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)O(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(1,2),.3,nt.f1,2,4,!0)};ve.zorra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(c,h=0)=>[n+a*c-s*h,r+s*c+a*h];Vt(!0);const u=$e();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?nt.f2:nt.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(ht(h[0])-2+(c>>1),ht(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,Vt(!1),e.fillStyle=nt.woodD,ue(e,l(-13),l(3),3),e.fillStyle=nt.wood,ue(e,l(-12),l(2),1),e.fillStyle=nt.steel,ue(e,l(3),l(7),3),e.fillStyle="#ffffff",ue(e,l(6),l(8),1),e.fillStyle=nt.leaf,ue(e,l(-13,0),l(-9,-3),2),e.fillStyle=nt.leafD,ue(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?lt(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&Fc("za"+t.id)&&(xe.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),vt.sfx("atk_zorra",f.x,f.y,.6))};q.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=C(e.x,e.y),a=C(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;A({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.5),m=-u,y=l;f.globalAlpha=c<.6?1:(1-c)/.4;const g=[];for(let v=-5;v<=5;v++)g.push([h+m*v*3.4-l*v*v*.45,d+y*v*3.4-u*v*v*.45]);f.fillStyle=nt.woodD;for(const v of g)f.fillRect(ht(v[0])-2,ht(v[1])-2,4,4);f.fillStyle=nt.wood;for(const v of g)f.fillRect(ht(v[0])-1,ht(v[1])-1,2,2);f.fillStyle=nt.leaf;for(const v of[g[0],g[10]])f.fillRect(ht(v[0])-2,ht(v[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),b=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=nt.cream,ue(f,g[0],b,1),ue(f,b,g[10],1)}}),A({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.5),m=4+c*16;f.fillStyle=nt.f1;for(let y=0;y<8;y++){const g=y/8*jr;f.fillRect(ht(h+l*8+Math.cos(g)*m)-2,ht(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)O(r,o,.55,-n*p(-2,2)+t*p(0,1),t*p(-2,2)+n*p(0,1),p(.5,1.5),.9,f%2?nt.leaf:nt.leafL,3,1.5,!1,.95)};ve.zorra_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,c=0)=>[n+a*f-s*c,r+s*f+a*c];Vt(!0);const u=$e();for(let f=0;f<=16;f++){const c=f/16,h=ht(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,m=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?nt.cream:c>.45?nt.fox:nt.f1,u.fillRect(ht(m[0]-h/2),ht(m[1]-h/2),h,h)}u.globalAlpha=1,Vt(!1),e.fillStyle=nt.woodD,ue(e,l(-22),l(4),4),e.fillStyle=nt.wood,ue(e,l(-21),l(3),2),e.fillStyle="#20202a",ue(e,l(3,-4),l(12),3),ue(e,l(3,4),l(12),3),e.fillStyle=nt.steel,ue(e,l(4,-2),l(11),2),ue(e,l(4,2),l(11),2),e.fillStyle="#ffffff",ue(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=nt.leafD,ue(e,l(-23,0),l(-15,f*5),3),e.fillStyle=nt.leaf,ue(e,l(-22,f),l(-16,f*4),2),e.fillStyle=nt.leafL,e.fillRect(ht(l(-17,f*4)[0]),ht(l(-17,f*4)[1]),2,2);Math.random()<.3&&O(t.x,t.y,t.z||.45,p(-.4,.4),p(-.4,.4),-.2,.7,Math.random()<.6?nt.leaf:nt.autumn,3,.6,!1,.95);for(const f of tp(t))if(Fc("zq"+t.id+":"+f.id)){const c=t.vx||1,h=t.vy||0,d=Math.hypot(c,h)||1;A({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,y){const g=C(f.x-c/d*.7,f.y-h/d*.7,.5),x=C(f.x+c/d*.9,f.y+h/d*.9,.5);m.globalAlpha=1-y,m.fillStyle=nt.fox,ue(m,g,x,ht(6*(1-y))+1),m.fillStyle=nt.cream,ue(m,g,x,2)}});for(let m=0;m<6;m++)O(f.x,f.y,.5,c/d*p(1,3)+p(-.8,.8),h/d*p(1,3)+p(-.8,.8),p(.5,1.5),.35,m%2?nt.f1:nt.fox,2,3,!0)}};q.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*jr,h:s/9,sp:p(4.5,6),col:[nt.leaf,nt.leafL,nt.autumn][s%3],dk:s%3===2?nt.foxD:nt.leafD,r:p(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*jr,l=p(1.5,2.5);O(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,p(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,p(.8,1.6),p(.6,.9),[nt.leaf,nt.leafL,nt.autumn][a%3],3,1,!1,.94)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=lt(t),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const y of i)O(r+Math.cos(y.a+f*y.sp)*y.r,o+Math.sin(y.a+f*y.sp)*y.r,.5,Math.cos(y.a)*2,Math.sin(y.a)*2,.5,.7,y.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,m]=C(r,o,.35);a.globalAlpha=.55*h,a.fillStyle="#e8fff0";for(let y=0;y<2;y++){const g=f*7+y*Math.PI,x=Oc(.62)*c;for(let b=0;b<7;b++){const v=g+b*.16;a.fillRect(ht(d+Math.cos(v)*x)-1,ht(m+Math.sin(v)*x*.45-y*14),3-(b>4?1:0),2)}}for(const y of i){const g=y.a+f*y.sp,x=(y.h+f*.45)%1,b=y.r*c*(1-x*.35),[v,S]=C(r+Math.cos(g)*b,o+Math.sin(g)*b,.15+x*1.1);a.globalAlpha=h*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),Jm(a,v,S,Math.sin(f*11+y.a*3),y.col,y.dk)}}})};q.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,a=C(t,n),s=C(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));A({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const m=h-d.s*i;if(m<0||m>.42)continue;const y=.8*(1-m/.42),[g,x]=C(d.x,d.y,.32+m*.3);f.globalAlpha=y,Zm(f,ep,g,x,3,{o:nt.f2,t:nt.f1,c:nt.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const v=g+(b-1.5)*9*(l?-1:1),S=ht(4+5*Math.abs(Math.sin(h*30+b*1.7))+m*14);f.fillStyle=b%2?nt.f3:nt.f1,f.fillRect(ht(v)-2,ht(x-12-S),4,S),f.fillStyle=nt.f0,f.fillRect(ht(v)-1,ht(x-12-S),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.3+c*.4),m=14+c*10;for(let y=0;y<6;y++){const g=y/6*jr+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+y)),f.fillStyle=y%2?nt.f3:nt.f2,f.fillRect(ht(h+Math.cos(g)*m)-3,ht(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=nt.f0,f.fillRect(ht(h+Math.cos(g)*m)-1,ht(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();O(t+(r-t)*c+p(-.2,.2),n+(o-n)*c+p(-.2,.2),.3,p(-.3,.3),p(-.3,.3),p(.8,1.6),p(.5,.8),[nt.f1,nt.f2,nt.f3][f%3],3,-.5,!0,.95)}};q.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=lt(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(g,x)=>({ox:p(-.3,.3),oy:p(-.3,.3),dl:x*.03}));A({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(g,x){const b=x*.5;for(const v of c){const S=(b-v.dl)/.35;if(S<0||S>1)continue;const _=.6+S*4.5,w=a+v.ox-l*S*.8,T=s+v.oy-u*S*.8,R=C(w,T,_),k=C(w+l*.15,T+u*.15,_-.4);g.globalAlpha=1-S*.5,g.fillStyle=nt.fox,ue(g,k,R,3),g.fillStyle=nt.f0,g.fillRect(ht(R[0])-2,ht(R[1])-2,4,4)}}});for(let g=0;g<8;g++)O(a,s,.6,p(-.5,.5),p(-.5,.5),p(2,4),.4,g%2?nt.gold:nt.f1,2,2,!0);const h=28,d=.45,m=Array.from({length:h},(g,x)=>{const b=Math.random()*jr,v=Math.sqrt(Math.random())*r*.92,S=t+Math.cos(b)*v,_=n+Math.sin(b)*v;return{t0:.3+x*(2.5/h)+p(-.04,.04),lx:S,ly:_,sx:S+l*1.8+p(-.3,.3),sy:_+u*1.8+p(-.3,.3),landed:!1,tang:[0,1]}}),y=(g,x)=>C(g.sx+(g.lx-g.sx)*x,g.sy+(g.ly-g.sy)*x,4*(1-x*x));A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(g,x){const b=x*o;for(const v of m){const S=(b-v.t0)/d;if(S<0)continue;if(S>=1){if(!v.landed){v.landed=!0,O(v.lx,v.ly,.1,p(-.8,.8),p(-.8,.8),p(1,2),.35,Math.random()<.7?nt.f1:nt.leaf,2,6,!0);const L=y(v,1),H=y(v,.93),Q=Math.hypot(L[0]-H[0],L[1]-H[1])||1;v.tang=[(L[0]-H[0])/Q,(L[1]-H[1])/Q]}const E=(b-v.t0-d)/.14;if(E<1){const[L,H]=C(v.lx,v.ly),Q=ht(3+E*9);g.globalAlpha=1-E,g.fillStyle=nt.gold,g.fillRect(L-Q,H-1,Q*2,2),g.fillRect(L-1,H-ht(Q/2),2,Q)}continue}const _=y(v,S),w=y(v,Math.max(0,S-.07)),T=Math.hypot(_[0]-w[0],_[1]-w[1])||1,R=(_[0]-w[0])/T,k=(_[1]-w[1])/T;g.globalAlpha=.35,g.fillStyle=nt.f2;for(let E=1;E<=4;E++){const L=y(v,Math.max(0,S-E*.05));g.fillRect(ht(L[0])-1,ht(L[1])-1,3,3)}g.globalAlpha=1,g.fillStyle=nt.fox,ue(g,[_[0]-R*16,_[1]-k*16],_,3),g.fillStyle=nt.gold,ue(g,[_[0]-R*14,_[1]-k*14],_,1),g.fillStyle="#ffffff",g.fillRect(ht(_[0])-2,ht(_[1])-2,4,4)}}}),A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(g,x,b){const v=x*o,S=x>.85?(1-x)/.15:Math.min(1,v*4),[_,w]=C(t,n),T=Oc(r);!b.sh&&v>.75&&(b.sh=!0,ot(3)),g.globalAlpha=.7*S,g.fillStyle=nt.fox;for(let R=0;R<10;R++){const k=R/10*jr+v*.6,E=_+Math.cos(k)*T,L=w+Math.sin(k)*T*.5,H=-Math.cos(k),Q=-Math.sin(k)*.5;g.fillRect(ht(E)-2,ht(L)-2,4,4),g.fillRect(ht(E+H*6-Q*4)-1,ht(L+Q*6+H*2)-1,3,3),g.fillRect(ht(E+H*6+Q*4)-1,ht(L+Q*6-H*2)-1,3,3)}for(const R of m){if(!R.landed)continue;const[k,E]=C(R.lx,R.ly),L=R.tang[0],H=R.tang[1];g.globalAlpha=S,g.fillStyle="#00000055",g.fillRect(ht(k)-3,ht(E),6,2),g.fillStyle=nt.woodD,ue(g,[k-L*13,E-H*13],[k,E],3),g.fillStyle=nt.wood,ue(g,[k-L*12,E-H*12],[k-L*2,E-H*2],1),g.fillStyle=nt.leaf,g.fillRect(ht(k-L*13)-2,ht(E-H*13)-1,2,3),g.fillStyle=nt.autumn,g.fillRect(ht(k-L*13),ht(E-H*13)-2,2,3)}}})};var ge=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(ge||{});const Ka=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Fi=(e,t)=>Ka(e).priority??t,_r={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Ka).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(Ka).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,a)=>Fi(a.value,n)-Fi(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>Fi(i,n)-Fi(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},np={extension:{type:ge.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await ds(()=>import("./browserAll-CwJYyfHo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},rp={extension:{type:ge.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await ds(()=>import("./webworkerAll-Bs7DnPt2.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Ae{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new Ae(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var Js={exports:{}},Iu;function op(){return Iu||(Iu=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||l,h),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)t.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,m=new Array(d);h<d;h++)m[h]=c[h].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(u,f,c,h,d,m){var y=n?n+u:u;if(!this._events[y])return!1;var g=this._events[y],x=arguments.length,b,v;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,h),!0;case 5:return g.fn.call(g.context,f,c,h,d),!0;case 6:return g.fn.call(g.context,f,c,h,d,m),!0}for(v=1,b=new Array(x-1);v<x;v++)b[v-1]=arguments[v];g.fn.apply(g.context,b)}else{var S=g.length,_;for(v=0;v<S;v++)switch(g[v].once&&this.removeListener(u,g[v].fn,void 0,!0),x){case 1:g[v].fn.call(g[v].context);break;case 2:g[v].fn.call(g[v].context,f);break;case 3:g[v].fn.call(g[v].context,f,c);break;case 4:g[v].fn.call(g[v].context,f,c,h);break;default:if(!b)for(_=1,b=new Array(x-1);_<x;_++)b[_-1]=arguments[_];g[v].fn.apply(g[v].context,b)}}return!0},s.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},s.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},s.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var y=0,g=[],x=m.length;y<x;y++)(m[y].fn!==f||h&&!m[y].once||c&&m[y].context!==c)&&g.push(m[y]);g.length?this._events[d]=g.length===1?g[0]:g:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(Js)),Js.exports}var ip=op();const Do=Ef(ip),sp=Math.PI*2,ap=180/Math.PI,Fo=Math.PI/180;class $n{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new $n(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return ta.x=0,ta.y=0,ta}}const ta=new $n;class he{constructor(t=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,a){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new $n;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new $n;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=t.x,c=t.y;return n.x=a*u*f+-i*u*c+(l*i-s*a)*u,n.y=r*u*c+-o*u*f+(-l*r+s*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*u+o*c,this.b=r*f+o*h,this.c=i*u+a*c,this.d=i*f+a*h,this.tx=s*u+l*c+n.tx,this.ty=s*f+l*h+n.ty,this}setTransform(t,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(sp-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(a.x*n+a.y*o),t.position.y=this.ty+(a.x*r+a.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=t*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=t/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new he;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return up.identity()}static get shared(){return lp.identity()}}const lp=new he,up=new he,Pr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],zr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ir=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Or=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],ja=[],Ec=[],Ei=Math.sign;function fp(){for(let e=0;e<16;e++){const t=[];ja.push(t);for(let n=0;n<16;n++){const r=Ei(Pr[e]*Pr[n]+Ir[e]*zr[n]),o=Ei(zr[e]*Pr[n]+Or[e]*zr[n]),i=Ei(Pr[e]*Ir[n]+Ir[e]*Or[n]),a=Ei(zr[e]*Ir[n]+Or[e]*Or[n]);for(let s=0;s<16;s++)if(Pr[s]===r&&zr[s]===o&&Ir[s]===i&&Or[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new he;t.set(Pr[e],zr[e],Ir[e],Or[e],0,0),Ec.push(t)}}fp();const me={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Pr[e],uY:e=>zr[e],vX:e=>Ir[e],vY:e=>Or[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>ja[e][t],sub:(e,t)=>ja[e][me.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?me.S:me.N:Math.abs(t)*2<=Math.abs(e)?e>0?me.E:me.W:t>0?e>0?me.SE:me.SW:e>0?me.NE:me.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=Ec[me.inv(t)];o.tx=n,o.ty=r,e.append(o)}},ki=[new $n,new $n,new $n,new $n];class bn{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new bn(0,0,0,0)}clone(){return new bn(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,c=s-u,h=s+i+u,d=l-u,m=l+a+u,y=s+f,g=s+i-f,x=l+f,b=l+a-f;return t>=c&&t<=h&&n>=d&&n<=m&&!(t>y&&t<g&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const E=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>E}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=ki[0].set(t.left,t.top),l=ki[1].set(t.left,t.bottom),u=ki[2].set(t.right,t.top),f=ki[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const h=c*(l.y-s.y),d=c*(s.x-l.x),m=h*r+d*i,y=h*o+d*i,g=h*r+d*a,x=h*o+d*a;if(Math.max(m,y,g,x)<=h*s.x+d*s.y||Math.min(m,y,g,x)>=h*f.x+d*f.y)return!1;const b=c*(s.y-u.y),v=c*(u.x-s.x),S=b*r+v*i,_=b*o+v*i,w=b*r+v*a,T=b*o+v*a;return!(Math.max(S,_,w,T)<=b*s.x+v*s.y||Math.min(S,_,w,T)>=b*f.x+v*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new bn),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const ea={default:-1};function Rn(e="default"){return ea[e]===void 0&&(ea[e]=-1),++ea[e]}const Ou={},On="8.0.0",h3="8.3.4";function Tt(e,t,n=3){if(Ou[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),Ou[t]=!0}const kc=()=>{};function Fu(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Eu(e){return!(e&e-1)&&!!e}function cp(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const ku=Object.create(null);function hp(e){const t=ku[e];return t===void 0&&(ku[e]=Rn("resource")),t}const Uc=class Lc extends Do{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Lc.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Tt(On,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=hp(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Uc.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let dp=Uc;const Dc=class Xc extends Do{constructor(t={}){super(),this.options=t,this.uid=Rn("textureSource"),this._resourceType="textureSource",this._resourceId=Rn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Xc.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new dp(cp(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Rn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Rn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Eu(this.pixelWidth)&&Eu(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Dc.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let an=Dc;class Wl extends an{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Wl.extension=ge.TextureSource;const Uu=new he;class mp{constructor(t,n){this.mapCoord=new he,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],a=t[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(Uu.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Uu));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class _t extends Do{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=Rn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new bn,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new an,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new mp(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,c=l/2,h=i+f,d=a+c;u=me.add(u,me.NW),t.x0=h+f*me.uX(u),t.y0=d+c*me.uY(u),u=me.add(u,2),t.x1=h+f*me.uX(u),t.y1=d+c*me.uY(u),u=me.add(u,2),t.x2=h+f*me.uX(u),t.y2=d+c*me.uY(u),u=me.add(u,2),t.x3=h+f*me.uX(u),t.y3=d+c*me.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Tt(On,"Texture.baseTexture is now Texture.source"),this._source}}_t.EMPTY=new _t({label:"EMPTY",source:new an({label:"EMPTY"})});_t.EMPTY.destroy=kc;_t.WHITE=new _t({source:new Wl({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});_t.WHITE.destroy=kc;function pp(e,t,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*o-r,e.maxX=e.minX+s,e.minY=a.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const Lu=new he;class Qr{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Lu,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new bn);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Lu,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,m=this.maxX,y=this.maxY,g=a*t+l*n+f,x=s*t+u*n+c;g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*r+l*n+f,x=s*r+u*n+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*t+l*o+f,x=s*t+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*r+l*o+f,x=s*r+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),this.minX=h,this.minY=d,this.maxX=m,this.maxY=y}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:c}=t;let h=a*n+l*r+f,d=s*n+u*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=a*o+l*r+f,d=s*o+u*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*n+l*i+f,d=s*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*o+l*i+f,d=s*o+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Qr(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,m=o.ty;for(let y=n;y<r;y+=2){const g=t[y],x=t[y+1],b=u*g+c*x+d,v=f*g+h*x+m;i=b<i?b:i,a=v<a?v:a,s=b>s?b:s,l=v>l?v:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var yp={grad:.9,turn:360,rad:360/(2*Math.PI)},Qn=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Re=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Mn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Gc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Du=function(e){return{r:Mn(e.r,0,255),g:Mn(e.g,0,255),b:Mn(e.b,0,255),a:Mn(e.a)}},na=function(e){return{r:Re(e.r),g:Re(e.g),b:Re(e.b),a:Re(e.a,3)}},gp=/^#([0-9a-f]{3,8})$/i,Ui=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Nc=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),a=i-Math.min(t,n,r),s=a?i===t?(n-r)/a:i===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},Bc=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),a=r*(1-n),s=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},Xu=function(e){return{h:Gc(e.h),s:Mn(e.s,0,100),l:Mn(e.l,0,100),a:Mn(e.a)}},Gu=function(e){return{h:Re(e.h),s:Re(e.s),l:Re(e.l),a:Re(e.a,3)}},Nu=function(e){return Bc((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},hi=function(e){return{h:(t=Nc(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},xp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,vp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,bp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Mp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Qa={string:[[function(e){var t=gp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Re(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Re(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=bp.exec(e)||Mp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Du({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=xp.exec(e)||vp.exec(e);if(!t)return null;var n,r,o=Xu({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(yp[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Nu(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return Qn(t)&&Qn(n)&&Qn(r)?Du({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!Qn(t)||!Qn(n)||!Qn(r))return null;var a=Xu({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return Nu(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!Qn(t)||!Qn(n)||!Qn(r))return null;var a=function(s){return{h:Gc(s.h),s:Mn(s.s,0,100),v:Mn(s.v,0,100),a:Mn(s.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Bc(a)},"hsv"]]},Bu=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},Sp=function(e){return typeof e=="string"?Bu(e.trim(),Qa.string):typeof e=="object"&&e!==null?Bu(e,Qa.object):[null,void 0]},ra=function(e,t){var n=hi(e);return{h:n.h,s:Mn(n.s+100*t,0,100),l:n.l,a:n.a}},oa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},$u=function(e,t){var n=hi(e);return{h:n.h,s:n.s,l:Mn(n.l+100*t,0,100),a:n.a}},Za=function(){function e(t){this.parsed=Sp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Re(oa(this.rgba),2)},e.prototype.isDark=function(){return oa(this.rgba)<.5},e.prototype.isLight=function(){return oa(this.rgba)>=.5},e.prototype.toHex=function(){return t=na(this.rgba),n=t.r,r=t.g,o=t.b,a=(i=t.a)<1?Ui(Re(255*i)):"","#"+Ui(n)+Ui(r)+Ui(o)+a;var t,n,r,o,i,a},e.prototype.toRgb=function(){return na(this.rgba)},e.prototype.toRgbString=function(){return t=na(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return Gu(hi(this.rgba))},e.prototype.toHslString=function(){return t=Gu(hi(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=Nc(this.rgba),{h:Re(t.h),s:Re(t.s),v:Re(t.v),a:Re(t.a,3)};var t},e.prototype.invert=function(){return Fn({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Fn(ra(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Fn(ra(this.rgba,-t))},e.prototype.grayscale=function(){return Fn(ra(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Fn($u(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Fn($u(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Fn({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Re(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=hi(this.rgba);return typeof t=="number"?Fn({h:t,s:n.s,l:n.l,a:n.a}):Re(n.h)},e.prototype.isEqual=function(t){return this.toHex()===Fn(t).toHex()},e}(),Fn=function(e){return e instanceof Za?e:new Za(e)},Hu=[],_p=function(e){e.forEach(function(t){Hu.indexOf(t)<0&&(t(Za,Qa),Hu.push(t))})};function wp(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var y=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));y<c&&(c=y,h=m)}return h}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}_p([wp]);const Eo=class ei{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof ei)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=ei._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=ei.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=Fn(t);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof ei||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Eo.shared=new Eo;Eo._temp=new Eo;Eo.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let De=Eo;const Ap={cullArea:null,cullable:!1,cullableChildren:!0};class Vl{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Cp{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Vl(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Ps=new Cp,Tp={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Tt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function Rp(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const Pp={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}Rp(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Tt(On,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class Wu{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class zp{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return Ps.get(r.maskClass,t)}return t}returnMaskEffect(t){Ps.return(t)}}const Ja=new zp;_r.handleByList(ge.MaskEffect,Ja._effectClasses);const Ip={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),Ja.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Ja.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Wu);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Wu),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},Op={label:null,get name(){return Tt(On,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Tt(On,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},Ye=new Vl(he),ko=new Vl(Qr);function $c(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=Ye.get().identity(),r=ql(e,o)):r=he.IDENTITY,Hc(e,n,r,t),o&&Ye.return(o),n.isValid||n.set(0,0,0,0),n}function Hc(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=Ye.get(),o.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=ko.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)Hc(e.children[s],t,o,r)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,he.IDENTITY),ko.return(t)}r||Ye.return(o)}function ql(e,t){const n=e.parent;return n&&(ql(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function Fp(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const Vu=16777215;function qu(e,t){return e===Vu?t:t===Vu?e:Fp(e,t)}function ji(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const Ep={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=ql(this,Ye.get().identity());return e.appendFrom(this.localTransform,n),Ye.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?ji(this.renderGroup.worldColor):this.parentRenderGroup?ji(qu(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=qu(t,n.localColor),n=n.parent;return ji(t)}};let ia=0;const Yu=500;function ur(...e){ia!==Yu&&(ia++,ia===Yu?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function Wc(e,t,n){return t.clear(),n||(n=he.IDENTITY),Vc(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function Vc(e,t,n,r,o){let i;if(o)i=Ye.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=Ye.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=ko.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)Vc(l[u],t,i,r,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);a.addBounds(t,he.IDENTITY),ko.return(t)}Ye.return(i)}function qc(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,o.children.length&&qc(o,t)}return t.didChange}const kp=new he,Up={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Qr});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),qc(this,e),e.didChange&&Wc(this,e.localBounds,kp),e.localBounds},getBounds(e,t){return $c(this,e,t||new Qr)}},Lp={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},Dp={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Xp))}};function Xp(e,t){return e._zIndex-t._zIndex}const Gp={getGlobalPosition(e=new $n,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(Ye.get(),n);return t=r.apply(e,t),Ye.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(Ye.get(),r);return n=o.applyInverse(e,n),Ye.return(o),n}};class Np{constructor(){this.uid=Rn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Bp=0;class $p{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new an({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new _t({source:o,label:`texturePool_${Bp++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),a=Math.ceil(n*r-1e-6);i=Fu(i),a=Fu(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const cn=new $p;class Hp{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new he,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Np,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(cn.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new he),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new he),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new he),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Wp(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const sa=new Ae(null),aa=new Ae(null),la=new Ae(null,1,1),Ku=1,Vp=2,ua=4;class fe extends Do{constructor(t={}){super(),this.uid=Rn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new he,this.relativeGroupTransform=new he,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ae(this,0,0),this._scale=la,this._pivot=aa,this._skew=sa,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Wp(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(fe.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Tt(On,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Ps.get(Hp,this),this.groupTransform=he.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Ps.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new he),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*ap}set angle(t){this.rotation=t*Fo}get pivot(){return this._pivot===aa&&(this._pivot=new Ae(this,0,0)),this._pivot}set pivot(t){this._pivot===aa&&(this._pivot=new Ae(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===sa&&(this._skew=new Ae(this,0,0)),this._skew}set skew(t){this._skew===sa&&(this._skew=new Ae(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===la&&(this._scale=new Ae(this,1,1)),this._scale}set scale(t){this._scale===la&&(this._scale=new Ae(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Ku,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=De.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Ku,this._onUpdate())}get tint(){return ji(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vp,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ua,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ua,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=ua,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}fe.mixin(Pp);fe.mixin(Gp);fe.mixin(Lp);fe.mixin(Up);fe.mixin(Ip);fe.mixin(Op);fe.mixin(Dp);fe.mixin(Ap);fe.mixin(Tp);fe.mixin(Ep);class Yc extends fe{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Qr(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class Qe extends Yc{constructor(t=_t.EMPTY){t instanceof _t&&(t={texture:t});const{texture:n=_t.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Ae({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof _t?new Qe(t):new Qe(_t.from(t,n))}set texture(t){t||(t=_t.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return pp(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Tt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const qp=new Qr;function Kc(e,t,n){const r=qp;e.measurable=!0,$c(e,n,r),t.addBoundsMask(r),e.measurable=!1}function jc(e,t,n){const r=ko.get();e.measurable=!0;const o=Ye.get().identity(),i=Qc(e,n,o);Wc(e,r,i),e.measurable=!1,t.addBoundsMask(r),Ye.return(o),ko.return(r)}function Qc(e,t,n){return e?(e!==t&&(Qc(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(ur("Mask bounds, renderable is not inside the root container"),n)}class Zc{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Qe),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||Kc(this.mask,t,n)}addLocalBounds(t,n){jc(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Qe}}Zc.extension=ge.MaskEffect;class Jc{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Jc.extension=ge.MaskEffect;class th{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){Kc(this.mask,t,n)}addLocalBounds(t,n){jc(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof fe}}th.extension=ge.MaskEffect;const Yp={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let ju=Yp;const Sr={get(){return ju},set(e){ju=e}};class Yl extends an{constructor(t){t.resource||(t.resource=Sr.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Yl.extension=ge.TextureSource;class Kl extends an{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=Sr.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,ur("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Kl.extension=ge.TextureSource;var tl=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(tl||{});class fa{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const eh=class ln{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new fa(null,null,1/0),this.deltaMS=1/ln.targetFPMS,this.elapsedMS=1/ln.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=tl.NORMAL){return this._addListener(new fa(t,n,r))}addOnce(t,n,r=tl.NORMAL){return this._addListener(new fa(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*ln.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,ln.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!ln._shared){const t=ln._shared=new ln;t.autoStart=!0,t._protected=!0}return ln._shared}static get system(){if(!ln._system){const t=ln._system=new ln;t.autoStart=!0,t._protected=!0}return ln._system}};eh.targetFPMS=.06;let Li=eh,ca;async function Kp(){return ca??(ca=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),ca}const Ds=class nh extends an{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...nh.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Li.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Kp(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Li.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Li.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Li.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Ds.extension=ge.TextureSource;Ds.defaultOptions={...an.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Ds.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let jp=Ds;const ro=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class Qp{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||ur(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=ro(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&ur("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){ur(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Ur=new Qp,el=[];_r.handleByList(ge.TextureSource,el);function rh(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<el.length;o++){const i=el[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Zp(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&Ur.has(r))return Ur.get(r);const i=new _t({source:rh(o)});return i.on("destroy",()=>{Ur.has(r)&&Ur.remove(r)}),t||Ur.set(r,i),i}function Jp(e,t=!1){return typeof e=="string"?Ur.get(e):e instanceof an?new _t({source:e}):Zp(e,t)}_t.from=Jp;an.from=rh;_r.add(Zc,Jc,th,jp,Kl,Yl,Wl);var oh=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(oh||{});function _n(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Ko(e){return e.split("?")[0].split("#")[0]}function t2(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function e2(e,t,n){return e.replace(new RegExp(t2(t),"g"),n)}function n2(e,t){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const _i={toPosix(e){return e2(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){_n(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(_n(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=Ko(this.toPosix(t??Sr.get().getBaseUrl())),o=Ko(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?_i.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(_n(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=n2(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return _n(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(_n(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(_n(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){_n(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){_n(e),t&&_n(t),e=Ko(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){_n(e),e=Ko(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){_n(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Ko(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function ih(e,t,n,r,o){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?ih(e.replace(r[n],s),t,n+1,r,o):o.push(e.replace(r[n],s))}}function r2(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),ih(e,o,0,n,r)}else r.push(e);return r}const Qu=e=>!Array.isArray(e);class sh{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return ro(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&ur("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&ur(`[Resolver] already has key: ${i} overwriting`)},ro(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=ro(a).map(d=>typeof d=="string"?r2(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(m=>{let y={};if(typeof m!="object"){y.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){y=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,y={...y,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${y.src}`);y=this._buildResolvedAsset(y,{aliases:c,data:s,format:l,loadParser:u}),h.push(y)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=Qu(t);t=ro(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=Qu(t);t=ro(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=_i.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??o2(t.src),t}}sh.RETINA_PREFIX=/@([0-9\.]+)x/;function o2(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Zu=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},ah=class ni{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof _t?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=ni.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=ni.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new bn(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new bn(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new bn(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new bn(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new _t({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*ni.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*ni.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};ah.BATCH_SIZE=1e3;let Ju=ah;const i2=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function lh(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=_i.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=lh([`${o}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const s2={extension:ge.Asset,cache:{test:e=>e instanceof Ju,getCacheableAssets:(e,t)=>lh(e,t,!1)},resolver:{extension:{type:ge.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&i2.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(sh.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:ge.LoadParser,priority:oh.Normal,name:"spritesheetLoader"},async testParse(e,t){return _i.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=_i.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof _t)a=r;else{const u=Zu(i+(o??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new Ju(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;t.data?.ignoreMultiPack||(h=Zu(h,t.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};_r.add(s2);const ha=Object.create(null),tf=Object.create(null);function jl(e,t){let n=tf[e];return n===void 0&&(ha[t]===void 0&&(ha[t]=1),tf[e]=n=ha[t]++),n}let Di;function a2(){return(!Di||Di?.isContextLost())&&(Di=Sr.get().createCanvas().getContext("webgl",{})),Di}let Xi;function l2(){if(!Xi){Xi="mediump";const e=a2();e&&e.getShaderPrecisionFormat&&(Xi=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return Xi}function u2(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${e}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${e}
        `}function f2(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function c2(e,t){return t?`#version 300 es
${e}`:e}const h2={},d2={};function m2(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?h2:d2;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function p2(e,t){return t?e.replace("#version 300 es",""):e}const da={stripVersion:p2,ensurePrecision:f2,addProgramDefines:u2,setProgramName:m2,insertVersion:c2},ma=Object.create(null),uh=class nl{constructor(t){t={...nl.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:l2()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(da).forEach(a=>{const s=r[a];o=da[a](o,s,!0),i=da[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=jl(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return ma[n]||(ma[n]=new nl(t)),ma[n]}};uh.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Et=uh;const ef={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function y2(e){return ef[e]??ef.float32}const g2={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function x2({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=g2[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:y2(l).stride,offset:0,instance:!1,start:0}}}}return n}function pa(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(c=>{const h=c.match(l)[1],d=c.match(s).reduce((m,y)=>{const[g,x]=y.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var ri=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(ri||{});function v2({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:ri.VERTEX|ri.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:ri.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:ri.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function b2({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function M2(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const ya=Object.create(null);class Ot{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=pa(n.source);this.structsAndGroups=s}else{const s=pa(r.source),l=pa(n.source);this.structsAndGroups=M2(s,l)}this.layout=o??b2(this.structsAndGroups),this.gpuLayout=i??v2(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=jl(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=x2(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return ya[n]||(ya[n]=new Ot(t)),ya[n]}}const fh=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],S2=fh.reduce((e,t)=>(e[t]=!0,e),{});function _2(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const ch=class hh{constructor(t,n){this._touched=0,this.uid=Rn("uniform"),this._resourceType="uniformGroup",this._resourceId=Rn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...hh.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!S2[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${fh.join(", ")}`);i.value??(i.value=_2(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=jl(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};ch.defaultOptions={ubo:!1,isStatic:!1};let dh=ch;class ga{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var zs=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(zs||{});class Ql extends Do{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=zs.WEBGPU),r&&(a|=zs.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const c=s[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new ga,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new dh(h));const d=l[c];d&&(o[d.group]||(o[d.group]=new ga,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new ga,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Ot.from(n)),r&&(a=Et.from(r)),new Ql({gpuProgram:i,glProgram:a,...o})}}const w2={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},xa=0,va=1,ba=2,Ma=3,Sa=4,_a=5,rl=class mh{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<xa)}set blend(t){!!(this.data&1<<xa)!==t&&(this.data^=1<<xa)}get offsets(){return!!(this.data&1<<va)}set offsets(t){!!(this.data&1<<va)!==t&&(this.data^=1<<va)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<ba)}set culling(t){!!(this.data&1<<ba)!==t&&(this.data^=1<<ba)}get depthTest(){return!!(this.data&1<<Ma)}set depthTest(t){!!(this.data&1<<Ma)!==t&&(this.data^=1<<Ma)}get depthMask(){return!!(this.data&1<<_a)}set depthMask(t){!!(this.data&1<<_a)!==t&&(this.data^=1<<_a)}get clockwiseFrontFace(){return!!(this.data&1<<Sa)}set clockwiseFrontFace(t){!!(this.data&1<<Sa)!==t&&(this.data^=1<<Sa)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=w2[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new mh;return t.depthTest=!1,t.blend=!0,t}};rl.default2d=rl.for2d();let A2=rl;const ph=class ol extends Ql{constructor(t){t={...ol.defaultOptions,...t},super(t),this.enabled=!0,this._state=A2.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Ot.from(n)),r&&(a=Et.from(r)),new ol({gpuProgram:i,glProgram:a,...o})}};ph.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let Ut=ph;const il=[];_r.handleByNamedList(ge.Environment,il);async function C2(e){if(!e)for(let t=0;t<il.length;t++){const n=il[t];if(n.value.test()){await n.value.load();return}}}let jo;function T2(){if(typeof jo=="boolean")return jo;try{jo=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{jo=!1}return jo}var Gi={exports:{}},nf;function R2(){if(nf)return Gi.exports;nf=1,Gi.exports=e,Gi.exports.default=e;function e(P,z,I){I=I||2;var U=z&&z.length,D=U?z[0]*I:P.length,G=t(P,0,D,I,!0),W=[];if(!G||G.next===G.prev)return W;var tt,bt,yt,de,Qt,Bt,Xe;if(U&&(G=l(P,z,G,I)),P.length>80*I){tt=yt=P[0],bt=de=P[1];for(var Zt=I;Zt<D;Zt+=I)Qt=P[Zt],Bt=P[Zt+1],Qt<tt&&(tt=Qt),Bt<bt&&(bt=Bt),Qt>yt&&(yt=Qt),Bt>de&&(de=Bt);Xe=Math.max(yt-tt,de-bt),Xe=Xe!==0?32767/Xe:0}return r(G,W,I,tt,bt,Xe,0),W}function t(P,z,I,U,D){var G,W;if(D===At(P,z,I,U)>0)for(G=z;G<I;G+=U)W=H(G,P[G],P[G+1],W);else for(G=I-U;G>=z;G-=U)W=H(G,P[G],P[G+1],W);return W&&S(W,W.next)&&(Q(W),W=W.next),W}function n(P,z){if(!P)return P;z||(z=P);var I=P,U;do if(U=!1,!I.steiner&&(S(I,I.next)||v(I.prev,I,I.next)===0)){if(Q(I),I=z=I.prev,I===I.next)break;U=!0}else I=I.next;while(U||I!==z);return z}function r(P,z,I,U,D,G,W){if(P){!W&&G&&d(P,U,D,G);for(var tt=P,bt,yt;P.prev!==P.next;){if(bt=P.prev,yt=P.next,G?i(P,U,D,G):o(P)){z.push(bt.i/I|0),z.push(P.i/I|0),z.push(yt.i/I|0),Q(P),P=yt.next,tt=yt.next;continue}if(P=yt,P===tt){W?W===1?(P=a(n(P),z,I),r(P,z,I,U,D,G,2)):W===2&&s(P,z,I,U,D,G):r(n(P),z,I,U,D,G,1);break}}}}function o(P){var z=P.prev,I=P,U=P.next;if(v(z,I,U)>=0)return!1;for(var D=z.x,G=I.x,W=U.x,tt=z.y,bt=I.y,yt=U.y,de=D<G?D<W?D:W:G<W?G:W,Qt=tt<bt?tt<yt?tt:yt:bt<yt?bt:yt,Bt=D>G?D>W?D:W:G>W?G:W,Xe=tt>bt?tt>yt?tt:yt:bt>yt?bt:yt,Zt=U.next;Zt!==z;){if(Zt.x>=de&&Zt.x<=Bt&&Zt.y>=Qt&&Zt.y<=Xe&&x(D,tt,G,bt,W,yt,Zt.x,Zt.y)&&v(Zt.prev,Zt,Zt.next)>=0)return!1;Zt=Zt.next}return!0}function i(P,z,I,U){var D=P.prev,G=P,W=P.next;if(v(D,G,W)>=0)return!1;for(var tt=D.x,bt=G.x,yt=W.x,de=D.y,Qt=G.y,Bt=W.y,Xe=tt<bt?tt<yt?tt:yt:bt<yt?bt:yt,Zt=de<Qt?de<Bt?de:Bt:Qt<Bt?Qt:Bt,Xo=tt>bt?tt>yt?tt:yt:bt>yt?bt:yt,Go=de>Qt?de>Bt?de:Bt:Qt>Bt?Qt:Bt,iu=y(Xe,Zt,z,I,U),su=y(Xo,Go,z,I,U),$t=P.prevZ,Ht=P.nextZ;$t&&$t.z>=iu&&Ht&&Ht.z<=su;){if($t.x>=Xe&&$t.x<=Xo&&$t.y>=Zt&&$t.y<=Go&&$t!==D&&$t!==W&&x(tt,de,bt,Qt,yt,Bt,$t.x,$t.y)&&v($t.prev,$t,$t.next)>=0||($t=$t.prevZ,Ht.x>=Xe&&Ht.x<=Xo&&Ht.y>=Zt&&Ht.y<=Go&&Ht!==D&&Ht!==W&&x(tt,de,bt,Qt,yt,Bt,Ht.x,Ht.y)&&v(Ht.prev,Ht,Ht.next)>=0))return!1;Ht=Ht.nextZ}for(;$t&&$t.z>=iu;){if($t.x>=Xe&&$t.x<=Xo&&$t.y>=Zt&&$t.y<=Go&&$t!==D&&$t!==W&&x(tt,de,bt,Qt,yt,Bt,$t.x,$t.y)&&v($t.prev,$t,$t.next)>=0)return!1;$t=$t.prevZ}for(;Ht&&Ht.z<=su;){if(Ht.x>=Xe&&Ht.x<=Xo&&Ht.y>=Zt&&Ht.y<=Go&&Ht!==D&&Ht!==W&&x(tt,de,bt,Qt,yt,Bt,Ht.x,Ht.y)&&v(Ht.prev,Ht,Ht.next)>=0)return!1;Ht=Ht.nextZ}return!0}function a(P,z,I){var U=P;do{var D=U.prev,G=U.next.next;!S(D,G)&&_(D,U,U.next,G)&&k(D,G)&&k(G,D)&&(z.push(D.i/I|0),z.push(U.i/I|0),z.push(G.i/I|0),Q(U),Q(U.next),U=P=G),U=U.next}while(U!==P);return n(U)}function s(P,z,I,U,D,G){var W=P;do{for(var tt=W.next.next;tt!==W.prev;){if(W.i!==tt.i&&b(W,tt)){var bt=L(W,tt);W=n(W,W.next),bt=n(bt,bt.next),r(W,z,I,U,D,G,0),r(bt,z,I,U,D,G,0);return}tt=tt.next}W=W.next}while(W!==P)}function l(P,z,I,U){var D=[],G,W,tt,bt,yt;for(G=0,W=z.length;G<W;G++)tt=z[G]*U,bt=G<W-1?z[G+1]*U:P.length,yt=t(P,tt,bt,U,!1),yt===yt.next&&(yt.steiner=!0),D.push(g(yt));for(D.sort(u),G=0;G<D.length;G++)I=f(D[G],I);return I}function u(P,z){return P.x-z.x}function f(P,z){var I=c(P,z);if(!I)return z;var U=L(I,P);return n(U,U.next),n(I,I.next)}function c(P,z){var I=z,U=P.x,D=P.y,G=-1/0,W;do{if(D<=I.y&&D>=I.next.y&&I.next.y!==I.y){var tt=I.x+(D-I.y)*(I.next.x-I.x)/(I.next.y-I.y);if(tt<=U&&tt>G&&(G=tt,W=I.x<I.next.x?I:I.next,tt===U))return W}I=I.next}while(I!==z);if(!W)return null;var bt=W,yt=W.x,de=W.y,Qt=1/0,Bt;I=W;do U>=I.x&&I.x>=yt&&U!==I.x&&x(D<de?U:G,D,yt,de,D<de?G:U,D,I.x,I.y)&&(Bt=Math.abs(D-I.y)/(U-I.x),k(I,P)&&(Bt<Qt||Bt===Qt&&(I.x>W.x||I.x===W.x&&h(W,I)))&&(W=I,Qt=Bt)),I=I.next;while(I!==bt);return W}function h(P,z){return v(P.prev,P,z.prev)<0&&v(z.next,P,P.next)<0}function d(P,z,I,U){var D=P;do D.z===0&&(D.z=y(D.x,D.y,z,I,U)),D.prevZ=D.prev,D.nextZ=D.next,D=D.next;while(D!==P);D.prevZ.nextZ=null,D.prevZ=null,m(D)}function m(P){var z,I,U,D,G,W,tt,bt,yt=1;do{for(I=P,P=null,G=null,W=0;I;){for(W++,U=I,tt=0,z=0;z<yt&&(tt++,U=U.nextZ,!!U);z++);for(bt=yt;tt>0||bt>0&&U;)tt!==0&&(bt===0||!U||I.z<=U.z)?(D=I,I=I.nextZ,tt--):(D=U,U=U.nextZ,bt--),G?G.nextZ=D:P=D,D.prevZ=G,G=D;I=U}G.nextZ=null,yt*=2}while(W>1);return P}function y(P,z,I,U,D){return P=(P-I)*D|0,z=(z-U)*D|0,P=(P|P<<8)&16711935,P=(P|P<<4)&252645135,P=(P|P<<2)&858993459,P=(P|P<<1)&1431655765,z=(z|z<<8)&16711935,z=(z|z<<4)&252645135,z=(z|z<<2)&858993459,z=(z|z<<1)&1431655765,P|z<<1}function g(P){var z=P,I=P;do(z.x<I.x||z.x===I.x&&z.y<I.y)&&(I=z),z=z.next;while(z!==P);return I}function x(P,z,I,U,D,G,W,tt){return(D-W)*(z-tt)>=(P-W)*(G-tt)&&(P-W)*(U-tt)>=(I-W)*(z-tt)&&(I-W)*(G-tt)>=(D-W)*(U-tt)}function b(P,z){return P.next.i!==z.i&&P.prev.i!==z.i&&!R(P,z)&&(k(P,z)&&k(z,P)&&E(P,z)&&(v(P.prev,P,z.prev)||v(P,z.prev,z))||S(P,z)&&v(P.prev,P,P.next)>0&&v(z.prev,z,z.next)>0)}function v(P,z,I){return(z.y-P.y)*(I.x-z.x)-(z.x-P.x)*(I.y-z.y)}function S(P,z){return P.x===z.x&&P.y===z.y}function _(P,z,I,U){var D=T(v(P,z,I)),G=T(v(P,z,U)),W=T(v(I,U,P)),tt=T(v(I,U,z));return!!(D!==G&&W!==tt||D===0&&w(P,I,z)||G===0&&w(P,U,z)||W===0&&w(I,P,U)||tt===0&&w(I,z,U))}function w(P,z,I){return z.x<=Math.max(P.x,I.x)&&z.x>=Math.min(P.x,I.x)&&z.y<=Math.max(P.y,I.y)&&z.y>=Math.min(P.y,I.y)}function T(P){return P>0?1:P<0?-1:0}function R(P,z){var I=P;do{if(I.i!==P.i&&I.next.i!==P.i&&I.i!==z.i&&I.next.i!==z.i&&_(I,I.next,P,z))return!0;I=I.next}while(I!==P);return!1}function k(P,z){return v(P.prev,P,P.next)<0?v(P,z,P.next)>=0&&v(P,P.prev,z)>=0:v(P,z,P.prev)<0||v(P,P.next,z)<0}function E(P,z){var I=P,U=!1,D=(P.x+z.x)/2,G=(P.y+z.y)/2;do I.y>G!=I.next.y>G&&I.next.y!==I.y&&D<(I.next.x-I.x)*(G-I.y)/(I.next.y-I.y)+I.x&&(U=!U),I=I.next;while(I!==P);return U}function L(P,z){var I=new ut(P.i,P.x,P.y),U=new ut(z.i,z.x,z.y),D=P.next,G=z.prev;return P.next=z,z.prev=P,I.next=D,D.prev=I,U.next=I,I.prev=U,G.next=U,U.prev=G,U}function H(P,z,I,U){var D=new ut(P,z,I);return U?(D.next=U.next,D.prev=U,U.next.prev=D,U.next=D):(D.prev=D,D.next=D),D}function Q(P){P.next.prev=P.prev,P.prev.next=P.next,P.prevZ&&(P.prevZ.nextZ=P.nextZ),P.nextZ&&(P.nextZ.prevZ=P.prevZ)}function ut(P,z,I){this.i=P,this.x=z,this.y=I,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(P,z,I,U){var D=z&&z.length,G=D?z[0]*I:P.length,W=Math.abs(At(P,0,G,I));if(D)for(var tt=0,bt=z.length;tt<bt;tt++){var yt=z[tt]*I,de=tt<bt-1?z[tt+1]*I:P.length;W-=Math.abs(At(P,yt,de,I))}var Qt=0;for(tt=0;tt<U.length;tt+=3){var Bt=U[tt]*I,Xe=U[tt+1]*I,Zt=U[tt+2]*I;Qt+=Math.abs((P[Bt]-P[Zt])*(P[Xe+1]-P[Bt+1])-(P[Bt]-P[Xe])*(P[Zt+1]-P[Bt+1]))}return W===0&&Qt===0?0:Math.abs((Qt-W)/W)};function At(P,z,I,U){for(var D=0,G=z,W=I-U;G<I;G+=U)D+=(P[W]-P[G])*(P[G+1]+P[W+1]),W=G;return D}return e.flatten=function(P){for(var z=P[0][0].length,I={vertices:[],holes:[],dimensions:z},U=0,D=0;D<P.length;D++){for(var G=0;G<P[D].length;G++)for(var W=0;W<z;W++)I.vertices.push(P[D][G][W]);D>0&&(U+=P[D-1].length,I.holes.push(U))}return I},Gi.exports}var P2=R2();const d3=Ef(P2);var yh=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(yh||{});class z2{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](t,n,r,o,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const I2=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],gh=class xh extends Do{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...I2,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await C2(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...xh.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof fe&&(r={container:r},n&&(Tt(On,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:De.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=yh.ALL);const{clear:r,clearColor:o,target:i}=t;De.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,De.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new z2(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!T2())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};gh.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let vh=gh,Ni;function O2(e){return Ni!==void 0||(Ni=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??vh.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Sr.get().getWebGLRenderingContext())return!1;let r=Sr.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Ni}let Bi;async function F2(e={}){return Bi!==void 0||(Bi=await(async()=>{const t=Sr.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Bi}const rf=["webgl","webgpu","canvas"];async function E2(e){let t=[];e.preference?(t.push(e.preference),rf.forEach(i=>{i!==e.preference&&t.push(i)})):t=rf.slice();let n,r={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await F2()){const{WebGPURenderer:s}=await ds(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-8eQMtros.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgpu};break}else if(a==="webgl"&&O2(e.failIfMajorPerformanceCaveat??vh.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await ds(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-CtIkog7u.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgl};break}else if(a==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const bh="8.6.6";class Mh{static init(){globalThis.__PIXI_APP_INIT__?.(this,bh)}static destroy(){}}Mh.extension=ge.Application;class k2{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,bh)}destroy(){this._renderer=null}}k2.extension={type:[ge.WebGLSystem,ge.WebGPUSystem],name:"initHook",priority:-10};const Sh=class sl{constructor(...t){this.stage=new fe,t[0]!==void 0&&Tt(On,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await E2(t),sl._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Tt(On,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=sl._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Sh._plugins=[];let Qi=Sh;_r.handleByList(ge.Application,Qi._plugins);_r.add(Mh);var U2=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,L2=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,of=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const _h=class wh extends Ut{constructor(t){t={...wh.defaultOptions,...t};const n=Ot.from({vertex:{source:of,entryPoint:"mainVertex"},fragment:{source:of,entryPoint:"mainFragment"}}),r=Et.from({vertex:U2,fragment:L2,name:"alpha-filter"}),{alpha:o,...i}=t,a=new dh({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};_h.defaultOptions={alpha:1};let D2=_h;const Ah={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},X2=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function G2(e){const t=Ah[e],n=t.length;let r=X2,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const N2=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function B2(e,t){const n=Math.ceil(e/2);let r=N2,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function $2(e,t){const n=B2(t,e),r=G2(t);return Et.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var H2=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function W2(e,t){const n=Ah[t],r=n.length,o=[],i=[],a=[];for(let c=0;c<t;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,e?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:t-c-1,d=n[h].toString();a[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=H2.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Ot.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Ch=class Th extends Ut{constructor(t){t={...Th.defaultOptions,...t};const n=$2(t.horizontal,t.kernelSize),r=W2(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=cn.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===zs.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,r,o),cn.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Ch.defaultOptions={strength:8,quality:4,kernelSize:5};let sf=Ch;class V2{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new he,this.observer=n,this.position=new Ae(this,0,0),this.scale=new Ae(this,1,1),this.pivot=new Ae(this,0,0),this.skew=new Ae(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const Rh=class Zi extends Yc{constructor(...t){let n=t[0]||{};n instanceof _t&&(n={texture:n}),t.length>1&&(Tt(On,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...Zi.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Ae({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new V2({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=c??!1}static from(t,n={}){return typeof t=="string"?new Zi({texture:Ur.get(t),...n}):new Zi({texture:t,...n})}get uvRespectAnchor(){return ur("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){ur("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=_t.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};Rh.defaultOptions={texture:_t.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let q2=Rh;const Qo=new Map;function Y2(e,t){if(!Qo.has(e)){const n=new _t({source:new Yl({resource:e,...t})}),r=()=>{Qo.get(e)===n&&Qo.delete(e)};n.once("destroy",r),n.source.once("destroy",r),Qo.set(e,n)}return Qo.get(e)}const Ph=class zh{constructor(t={}){if(this.uid=Rn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...zh.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new an({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof _t||t.depthStencilTexture instanceof an?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new an({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Ph.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let K2=Ph;const Zl=class Ih{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...Ih.defaultOptions,...t},t.view&&(Tt(On,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new bn(0,0,t.width,t.height),this.canvas=t.canvas||Sr.get().createCanvas(),this.antialias=!!t.antialias,this.texture=Y2(this.canvas,t),this.renderTarget=new K2({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Zl.extension={type:[ge.WebGLSystem,ge.WebGPUSystem,ge.CanvasSystem],name:"view",priority:0};Zl.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let j2=Zl;_r.add(np,rp);const ne={},Uo={},af=new Map,In={};function al(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function Q2(e){const t=window.MAP;Object.assign(ne,window.META,t.decometa||{});for(const s of Object.keys(ne)){const l=ne[s].gear;if(l)for(const u in l)for(const f of l[u])ne[s+"__"+u+f]=ne[s]}const n=Object.keys(ne),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>e(++i/o);await Promise.all([...n.map(async s=>{const l=await al("assets/"+s+".png");if(In[s]=l,l.naturalWidth){const u=_t.from(l);u.source.scaleMode="nearest",Uo[s]=u}a()}),...r.map(async s=>{In[s]=await al("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function Jl(e){return!!Uo[e]}function Z2(){return Object.values(Uo)}const lf=new Set;function Oh(e){Uo[e]||lf.has(e)||!ne[e]||(lf.add(e),al("assets/"+e+".png").then(t=>{if(In[e]=t,t.naturalWidth){const n=_t.from(t);n.source.scaleMode="nearest",Uo[e]=n}}))}function J2(e){for(const t of e){const n=ne[t]&&ne[t].gear;n&&n.w&&n.w.includes(0)&&Oh(t+"__w0")}}function xo(e,t,n,r){const o=ne[e],i=Uo[e];if(o&&!i&&e.includes("__"))return Oh(e),null;if(!o||!i)return null;let a=0,s=0;if(o.anims&&t){const f=o.anims[t]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],c=o.dirs||1,h=c>=16?(n%16+16)%16:c>1?Math.round(n/2)%c:0;a=f.row+h,s=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(s=(r%o.frames+o.frames)%o.frames);const l=e+"|"+a+"|"+s;let u=af.get(l);if(!u){if((s+1)*o.fw>i.width||(a+1)*o.fh>i.height)return null;u=new _t({source:i.source,frame:new bn(s*o.fw,a*o.fh,o.fw,o.fh)}),af.set(l,u)}return u}function Fh(e,t,n){const r=ne[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function t1(){const e=In.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),a=Math.min(t,e.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,o,r,i,a,0,0,i,a);const l=_t.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}var Gt=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Nt=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,e1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,n1=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,r1=Object.defineProperty,o1=(e,t,n)=>t in e?r1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eh=(e,t,n)=>(o1(e,typeof t!="symbol"?t+"":t,n),n);const i1=class kh extends Ut{constructor(t){t={...kh.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:n1,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:e1,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Eh(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Eh(i1,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var s1=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,a1=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,l1=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,u1=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,f1=Object.defineProperty,c1=(e,t,n)=>t in e?f1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fr=(e,t,n)=>(c1(e,typeof t!="symbol"?t+"":t,n),n);const Uh=class Lh extends Ut{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Tt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...Lh.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:n?.clamp?u1:a1,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:n?.clamp?l1:s1,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Fr(this,"uniforms"),Fr(this,"_pixelSize",{x:0,y:0}),Fr(this,"_clamp"),Fr(this,"_kernels",[]),Fr(this,"_blur"),Fr(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,r,o);else{const l=cn.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),c=u,u=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,r,o),cn.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};Fr(Uh,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Dh=Uh;var h1=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,d1=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,m1=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,p1=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,y1=Object.defineProperty,g1=(e,t,n)=>t in e?y1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xh=(e,t,n)=>(g1(e,typeof t!="symbol"?t+"":t,n),n);const Gh=class Nh extends Ut{constructor(t){t={...Nh.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:p1,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:m1,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),Xh(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};Xh(Gh,"DEFAULT_OPTIONS",{threshold:.5});let x1=Gh;var v1=Object.defineProperty,b1=(e,t,n)=>t in e?v1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oo=(e,t,n)=>(b1(e,typeof t!="symbol"?t+"":t,n),n);const Bh=class $h extends Ut{constructor(t){t={...$h.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:d1,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:h1,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:_t.WHITE}}),oo(this,"uniforms"),oo(this,"bloomScale",1),oo(this,"brightness",1),oo(this,"_extractFilter"),oo(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new x1({threshold:t.threshold}),this._blurFilter=new Dh({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=cn.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=cn.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,r,o),cn.returnTexture(a),cn.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};oo(Bh,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let M1=Bh;var S1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,_1=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,w1=Object.defineProperty,A1=(e,t,n)=>t in e?w1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ll=(e,t,n)=>(A1(e,typeof t!="symbol"?t+"":t,n),n);const C1=class Hh extends Ut{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Tt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...Hh.DEFAULT_OPTIONS,...n};const o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:_1,entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:S1,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),ll(this,"uniforms"),ll(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new De,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};ll(C1,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var T1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,R1=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,P1=Object.defineProperty,z1=(e,t,n)=>t in e?P1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,io=(e,t,n)=>(z1(e,typeof t!="symbol"?t+"":t,n),n);const I1=class Wh extends Ut{constructor(t){t={...Wh.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:R1,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:T1,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),io(this,"uniforms"),io(this,"_thickness"),io(this,"_rotation"),io(this,"_lightColor"),io(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new De,this._shadowColor=new De,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Fo}set rotation(t){this._rotation=t*Fo,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};io(I1,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var O1=Object.defineProperty,F1=(e,t,n)=>t in e?O1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ji=(e,t,n)=>(F1(e,typeof t!="symbol"?t+"":t,n),n);const E1=class Vh extends D2{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Tt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Vh.DEFAULT_OPTIONS,...n},super(),Ji(this,"_blurXFilter"),Ji(this,"_blurYFilter"),Ji(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new sf({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new sf({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=cn.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),cn.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Tt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Tt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Tt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Tt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Tt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Tt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};Ji(E1,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var k1=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,U1=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,L1=Object.defineProperty,D1=(e,t,n)=>t in e?L1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qh=(e,t,n)=>(D1(e,typeof t!="symbol"?t+"":t,n),n);const X1=class Yh extends Ut{constructor(t){t={...Yh.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:U1,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:k1,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),qh(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};qh(X1,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var G1=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,N1=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,uf=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,Zr=Zr||{};Zr.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Zr=Zr||{};Zr.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(z){var I=new Error(t+": "+z);throw I.source=t,I}function r(){var z=o();return t.length>0&&n("Invalid input not EOF"),z}function o(){return v(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,c)||a("repeating-radial-gradient",e.repeatingRadialGradient,c)}function a(z,I,U){return s(I,function(D){var G=U();return G&&(At(e.comma)||n("Missing comma before color stops")),{type:z,orientation:G,colorStops:v(S)}})}function s(z,I){var U=At(z);if(U){At(e.startCall)||n("Missing (");var D=I(U);return At(e.endCall)||n("Missing )"),D}}function l(){return u()||f()}function u(){return ut("directional",e.sideOrCorner,1)}function f(){return ut("angular",e.angleValue,1)}function c(){var z,I=h(),U;return I&&(z=[],z.push(I),U=t,At(e.comma)&&(I=h(),I?z.push(I):t=U)),z}function h(){var z=d()||m();if(z)z.at=g();else{var I=y();if(I){z=I;var U=g();U&&(z.at=U)}else{var D=x();D&&(z={type:"default-radial",at:D})}}return z}function d(){var z=ut("shape",/^(circle)/i,0);return z&&(z.style=Q()||y()),z}function m(){var z=ut("shape",/^(ellipse)/i,0);return z&&(z.style=L()||y()),z}function y(){return ut("extent-keyword",e.extentKeywords,1)}function g(){if(ut("position",/^at/,0)){var z=x();return z||n("Missing positioning value"),z}}function x(){var z=b();if(z.x||z.y)return{type:"position",value:z}}function b(){return{x:L(),y:L()}}function v(z){var I=z(),U=[];if(I)for(U.push(I);At(e.comma);)I=z(),I?U.push(I):n("One extra comma");return U}function S(){var z=_();return z||n("Expected color definition"),z.length=L(),z}function _(){return T()||k()||R()||w()}function w(){return ut("literal",e.literalColor,0)}function T(){return ut("hex",e.hexColor,1)}function R(){return s(e.rgbColor,function(){return{type:"rgb",value:v(E)}})}function k(){return s(e.rgbaColor,function(){return{type:"rgba",value:v(E)}})}function E(){return At(e.number)[1]}function L(){return ut("%",e.percentageValue,1)||H()||Q()}function H(){return ut("position-keyword",e.positionKeywords,1)}function Q(){return ut("px",e.pixelValue,1)||ut("em",e.emValue,1)}function ut(z,I,U){var D=At(I);if(D)return{type:z,value:D[U]}}function At(z){var I,U;return U=/^[\n\r\t\s]+/.exec(t),U&&P(U[0].length),I=z.exec(t),I&&P(I[0].length),I}function P(z){t=t.substr(z)}return function(z){return t=z.toString(),r()}}();var B1=Zr.parse;Zr.stringify;function $1(e){const t=B1(Q1(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=H1(n.type),o=W1(n.colorStops),i=K1(n.orientation);return{type:r,stops:o,angle:i}}function H1(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function W1(e){const t=q1(e),n=[],r=new De;for(let o=0;o<e.length;o++){const i=V1(e[o]),a=r.setValue(i).toArray();n.push({offset:t[o],color:a.slice(0,3),alpha:a[3]})}return n}function V1(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function q1(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const r=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)o=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=s.indexDelta,o=t[i]}}return t.map(Y1)}function Y1(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function K1(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return j1(e.value)}return 0}function j1(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function Q1(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Z1=Object.defineProperty,J1=(e,t,n)=>t in e?Z1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wr=(e,t,n)=>(J1(e,typeof t!="symbol"?t+"":t,n),n);const wa=90;function ty(e){return[...e].sort((t,n)=>t.offset-n.offset)}const wi=class ts extends Ut{constructor(t){if(t&&"css"in t?t={...$1(t.css||""),alpha:t.alpha??ts.defaults.alpha,maxColors:t.maxColors??ts.defaults.maxColors}:t={...ts.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Ot.from({vertex:{source:uf,entryPoint:"mainVertex"},fragment:{source:uf,entryPoint:"mainFragment"}}),r=Et.from({vertex:N1,fragment:G1,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??wa,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Wr(this,"baseUniforms"),Wr(this,"stopsUniforms"),Wr(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=ty(t),r=new De;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+wa}set angle(t){this.baseUniforms.uOptions[1]=t-wa}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Wr(wi,"LINEAR",0);Wr(wi,"RADIAL",1);Wr(wi,"CONIC",2);Wr(wi,"defaults",{type:wi.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var ey=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,ny=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,ry=Object.defineProperty,oy=(e,t,n)=>t in e?ry(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zn=(e,t,n)=>(oy(e,typeof t!="symbol"?t+"":t,n),n);const iy=class Kh extends Ut{constructor(...t){let n=t[0]??{};if((n instanceof _t||n instanceof an)&&(Tt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Kh.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:ny,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:ey,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Zn(this,"uniforms"),Zn(this,"_size",0),Zn(this,"_sliceSize",0),Zn(this,"_slicePixelSize",0),Zn(this,"_sliceInnerSize",0),Zn(this,"_nearest",!1),Zn(this,"_scaleMode","linear"),Zn(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof _t?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Zn(iy,"DEFAULT_OPTIONS",{colorMap:_t.WHITE,nearest:!1,mix:1});var sy=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,ay=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,ly=Object.defineProperty,uy=(e,t,n)=>t in e?ly(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ul=(e,t,n)=>(uy(e,typeof t!="symbol"?t+"":t,n),n);const fy=class jh extends Ut{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Tt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...jh.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:ay,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:sy,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),ul(this,"uniforms"),ul(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new De,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};ul(fy,"DEFAULT_OPTIONS",{color:0,alpha:1});var cy=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,hy=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,dy=Object.defineProperty,my=(e,t,n)=>t in e?dy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,es=(e,t,n)=>(my(e,typeof t!="symbol"?t+"":t,n),n);const py=class Qh extends Ut{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Tt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...Qh.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:hy,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:cy,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),es(this,"uniforms"),es(this,"_originalColor"),es(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new De,this._targetColor=new De,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Tt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Tt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Tt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Tt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};es(py,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var yy=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,gy=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,xy=Object.defineProperty,vy=(e,t,n)=>t in e?xy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zh=(e,t,n)=>(vy(e,typeof t!="symbol"?t+"":t,n),n);const by=class Jh extends Ut{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Tt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Jh.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:gy,entryPoint:"mainFragment"}}),a=Et.from({vertex:Gt,fragment:yy,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Zh(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Zh(by,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var My=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Sy=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,_y=Object.defineProperty,wy=(e,t,n)=>t in e?_y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ns=(e,t,n)=>(wy(e,typeof t!="symbol"?t+"":t,n),n);const Ay=class t0 extends Ut{constructor(t){t={...t0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Sy,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:My,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ns(this,"uniforms"),ns(this,"seed"),ns(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};ns(Ay,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Cy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Ty=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Ry=Object.defineProperty,Py=(e,t,n)=>t in e?Ry(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zy=(e,t,n)=>(Py(e,t+"",n),n);const Iy=class e0 extends Ut{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Tt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...e0.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Ty,entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:Cy,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};zy(Iy,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Oy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Fy=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Ey=Object.defineProperty,ky=(e,t,n)=>t in e?Ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,so=(e,t,n)=>(ky(e,typeof t!="symbol"?t+"":t,n),n);const Uy=class n0 extends Ut{constructor(t){t={...n0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Fy,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:Oy,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),so(this,"uniforms"),so(this,"shadowOnly",!1),so(this,"_color"),so(this,"_blurFilter"),so(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new De,this.color=t.color??0,this._blurFilter=new Dh({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new Ut({gpuProgram:Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:Et.from({vertex:Gt,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=cn.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),cn.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};so(Uy,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Ly=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Dy=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Xy=Object.defineProperty,Gy=(e,t,n)=>t in e?Xy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,En=(e,t,n)=>(Gy(e,typeof t!="symbol"?t+"":t,n),n);const Ny=class r0 extends Ut{constructor(t){t={...r0.defaults,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Dy,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:Ly,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new _t({source:new Kl({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),En(this,"uniforms"),En(this,"average",!1),En(this,"minSize",8),En(this,"sampleSize",512),En(this,"_canvas"),En(this,"texture"),En(this,"_slices",0),En(this,"_sizes",new Float32Array(1)),En(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Fo}set direction(t){this.uniforms.uDirection=t*Fo}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};En(Ny,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var By=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,$y=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Hy=Object.defineProperty,Wy=(e,t,n)=>t in e?Hy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fl=(e,t,n)=>(Wy(e,typeof t!="symbol"?t+"":t,n),n);const Vy=class o0 extends Ut{constructor(t){t={...o0.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:$y,entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:By.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),fl(this,"uniforms"),fl(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new De,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};fl(Vy,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var qy=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Yy=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Ky=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,jy=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,Qy=Object.defineProperty,Zy=(e,t,n)=>t in e?Qy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ao=(e,t,n)=>(Zy(e,typeof t!="symbol"?t+"":t,n),n);const Jy=class i0 extends Ut{constructor(t){t={...i0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Yy.replace("${PERLIN}",jy),entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:qy.replace("${PERLIN}",Ky),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ao(this,"uniforms"),ao(this,"time",0),ao(this,"_angleLight",[0,0]),ao(this,"_angle",0),ao(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*Fo;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};ao(Jy,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var tg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,eg=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,ng=Object.defineProperty,rg=(e,t,n)=>t in e?ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cl=(e,t,n)=>(rg(e,typeof t!="symbol"?t+"":t,n),n);const og=class s0 extends Ut{constructor(t){t={...s0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:eg,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:tg,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),cl(this,"uniforms"),cl(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};cl(og,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var ig=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,sg=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,ag=Object.defineProperty,lg=(e,t,n)=>t in e?ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hl=(e,t,n)=>(lg(e,typeof t!="symbol"?t+"":t,n),n);const ug=class a0 extends Ut{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Ae){Tt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...a0.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:sg,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:ig,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),hl(this,"uniforms"),hl(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};hl(ug,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var fg=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,cg=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,hg=Object.defineProperty,dg=(e,t,n)=>t in e?hg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rs=(e,t,n)=>(dg(e,typeof t!="symbol"?t+"":t,n),n);const mg=class l0 extends Ut{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Tt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...l0.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:cg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:fg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),rs(this,"uniforms"),rs(this,"_replacements",[]),rs(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new De;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Tt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Tt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};rs(mg,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var pg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,yg=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,gg=Object.defineProperty,xg=(e,t,n)=>t in e?gg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dl=(e,t,n)=>(xg(e,typeof t!="symbol"?t+"":t,n),n);const vg=class u0 extends Ut{constructor(t){t={...u0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:yg,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:pg,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),dl(this,"uniforms"),dl(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};dl(vg,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var bg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,Mg=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Sg=Object.defineProperty,_g=(e,t,n)=>t in e?Sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gr=(e,t,n)=>(_g(e,typeof t!="symbol"?t+"":t,n),n);const tu=class Er extends Ut{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Tt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...Er.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Mg,entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:bg.replace(/\$\{ANGLE_STEP\}/,Er.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),Gr(this,"uniforms"),Gr(this,"_thickness"),Gr(this,"_quality"),Gr(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Er.getAngleStep(r),this._color=new De,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Er.MAX_SAMPLES,Er.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Er.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Gr(tu,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Gr(tu,"MIN_SAMPLES",1);Gr(tu,"MAX_SAMPLES",100);var wg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Ag=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,Cg=Object.defineProperty,Tg=(e,t,n)=>t in e?Cg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,os=(e,t,n)=>(Tg(e,typeof t!="symbol"?t+"":t,n),n);const Rg=class f0 extends Ut{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Tt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...f0.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Ag,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:wg,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),os(this,"uniforms"),os(this,"_angle"),os(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};os(Rg,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Pg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,zg=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Ig=Object.defineProperty,Og=(e,t,n)=>t in e?Ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ml=(e,t,n)=>(Og(e,typeof t!="symbol"?t+"":t,n),n);const Fg=class c0 extends Ut{constructor(t){t={...c0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:zg,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:Pg,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ml(this,"uniforms"),ml(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};ml(Fg,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Eg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,kg=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,Ug=Object.defineProperty,Lg=(e,t,n)=>t in e?Ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h0=(e,t,n)=>(Lg(e,typeof t!="symbol"?t+"":t,n),n);const Dg=class d0 extends Ut{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Tt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...d0.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:kg,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:Eg,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),h0(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};h0(Dg,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Xg=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Gg=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Ng=Object.defineProperty,Bg=(e,t,n)=>t in e?Ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pl=(e,t,n)=>(Bg(e,typeof t!="symbol"?t+"":t,n),n);const $g=class m0 extends Ut{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Tt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...m0.DEFAULT_OPTIONS,...n};const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Gg,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:Xg,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),pl(this,"uniforms"),pl(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};pl($g,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Hg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,Wg=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Vg=Object.defineProperty,qg=(e,t,n)=>t in e?Vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,is=(e,t,n)=>(qg(e,typeof t!="symbol"?t+"":t,n),n);const Yg=class p0 extends Ut{constructor(...t){let n=t[0]??{};if(n instanceof _t&&(Tt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...p0.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:Wg,entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:Hg,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),is(this,"uniforms"),is(this,"_color"),is(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new De,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};is(Yg,"DEFAULT_OPTIONS",{lightMap:_t.WHITE,color:0,alpha:1});var Kg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,jg=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,Qg=Object.defineProperty,Zg=(e,t,n)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yl=(e,t,n)=>(Zg(e,typeof t!="symbol"?t+"":t,n),n);const Jg=class y0 extends Ut{constructor(t){const{width:n,height:r}=j2.defaultOptions;t={...y0.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:jg,entryPoint:"mainFragment"}}),i=Et.from({vertex:Gt,fragment:Kg,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),yl(this,"uniforms"),yl(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};yl(Jg,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var tx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,ex=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,nx=Object.defineProperty,rx=(e,t,n)=>t in e?nx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g0=(e,t,n)=>(rx(e,typeof t!="symbol"?t+"":t,n),n);const ox=class x0 extends Ut{constructor(t){t={...x0.DEFAULT_OPTIONS,...t};const n=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:ex,entryPoint:"mainFragment"}}),r=Et.from({vertex:Gt,fragment:tx,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),g0(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};g0(ox,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ix=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,sx=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,ax=Object.defineProperty,lx=(e,t,n)=>t in e?ax(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v0=(e,t,n)=>(lx(e,typeof t!="symbol"?t+"":t,n),n);const ux=class b0 extends Ut{constructor(t){t={...b0.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Ot.from({vertex:{source:Nt,entryPoint:"mainVertex"},fragment:{source:sx.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=Et.from({vertex:Gt,fragment:ix.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),v0(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};v0(ux,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let An;const kt={};let vo,bo,gn,Mo,di,ss,ff="",gl=0,as=null,ls=null,Is,xl=[],vl=[];const Os=[],Lo=new Map,mr=[],$i=[];function eu(){return An.canvas}const bl=[];async function fx(e){const t=Z2();let n=0;for(const o of t){try{An.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new Qe(Is);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(M.W/2,M.H/2),kt.lights.addChild(r);for(let o=0;o<3;o++)yr.renderer.render(yr.stage),An.renderer.render(An.stage),pr.renderer.render(pr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of bl)try{pr.renderer.texture.initSource(o)}catch{}try{yr.renderer.texture.initSource(Is.source)}catch{}}let Aa;function cx(){try{const e=An.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let pr,yr;const Ca={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function Cr(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function hx(e){pr=new Qi,An=new Qi,yr=new Qi,await pr.init({...Ca,background:"#100d18"}),await An.init({...Ca,backgroundAlpha:0}),await yr.init({...Ca,backgroundAlpha:0}),M.gpuName=cx(),M.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(M.gpuName),e.style.position="fixed",vo=document.createElement("canvas"),bo=document.createElement("canvas"),gn=document.createElement("canvas"),Mo=document.createElement("canvas"),Cr(pr.canvas,1),Cr(vo,2),Cr(An.canvas,3),Cr(yr.canvas,4,"plus-lighter"),Cr(gn,5),Cr(bo,6),Cr(Mo,7,"plus-lighter"),gn.style.imageRendering="auto",An.canvas.style.pointerEvents="auto",ss=document.createElement("div"),ss.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;background:#ffffff;will-change:background-color",e.append(pr.canvas,vo,An.canvas,ss,yr.canvas,gn,bo,Mo);for(const t of["ground"])kt[t]=new fe,pr.stage.addChild(kt[t]);for(const t of["world","top"])kt[t]=new fe,An.stage.addChild(kt[t]);kt.lights=new fe,yr.stage.addChild(kt.lights),kt.groundCam=new fe,kt.ground.addChild(kt.groundCam),kt.worldCam=new fe,kt.world.addChild(kt.worldCam),kt.shadows=new fe,kt.entities=new fe,kt.entities.sortableChildren=!0,kt.worldCam.addChild(kt.shadows,kt.entities),kt.lightsCam=new fe,kt.lights.addChild(kt.lightsCam),Aa=new M1({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Aa.resolution=.5,kt.lights.filters=[Aa],Is=_t.from(dx(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),di=new Qe(_t.WHITE),kt.top.addChild(di),cf(),window.addEventListener("resize",cf)}function dx(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function cf(){M.W=window.innerWidth,M.H=window.innerHeight;const e=i=>Math.ceil(i*_l);vo.width=Mo.width=e(M.W),vo.height=Mo.height=e(M.H),bo.width=M.W,bo.height=M.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=_t.from(t);o.source.scaleMode="linear",di.texture=o,di.width=M.W,di.height=M.H}function mx(){const e=window.MAP;for(const o of t1()){const i=new Qe(o.tex);i.x=o.x,i.y=o.y,kt.groundCam.addChild(i),bl.push(o.tex.source)}const t=px(),n=In.ground.naturalWidth,r=In.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=In[o];if(!a||!a.naturalWidth)continue;const s=_t.from(a);s.source.scaleMode="linear",bl.push(s.source);const l=new Qe(s);l.width=n,l.height=r;const u=new q2({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,kt.groundCam.addChild(l,u),i==="flow"?as=u:ls=u}xl=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),vl=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of xl)Ml(o,!0);for(const o of vl)Ml(o,!1)}function Ml(e,t){const n=ne[e.sprite];if(!n||!Jl(e.sprite))return;const r=xo(e.sprite,null,0,0);if(!r)return;const o=new Qe(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=C(e.x,e.y);o.x=i,o.y=a,o.zIndex=(e.x+e.y)*100,kt.entities.addChild(o),Os.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function px(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=_t.from(e);return n.source.scaleMode="nearest",n}function yx(e){const t=ne[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",Fh(e.sprite,"idle",e.animT||0)]:["walk",0]}const gx={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194};function xx(e){let t=Lo.get(e.id);if(!t){const n=()=>{const r=new Qe(_t.EMPTY);return kt.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new Qe(_t.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,kt.shadows.addChild(t.shadow),Lo.set(e.id,t)}return t}function Hi(e,t,n,r,o,i,a){if(!t){e.visible=!1;return}const s=ne[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=a}function vx(){const e=M.game,t=e.player,n=M.T,r=++bx;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=xx(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){Hi(i.spr,xo("prop_boulder",null,0,0),"prop_boulder",...C(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const R of i.gear)R.visible=!1;continue}if(Fe(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const R of i.gear)R.visible=!1;continue}o.sprite&&!ne[o.sprite]&&(o.sprite=o.pet?"slime":"rana");const[s,l]=C(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const R=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(R*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6);const[c,h]=yx(o),d=a||ne[o.sprite]&&ne[o.sprite].dirs===1?0:o.dir;let m=o.scale||1;o.monster==="serpent"&&(m=1.45);const y=o.status&&o.status.transform;if(y){o._tfT=(o._tfT||0)+1/60;const R=Math.min(1,o._tfT*4),k=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;m*=1+(y.scale-1)*R*k}else o._tfT=0;const g=o.status||{};let x=s;g.stun&&["quake","roar","dust","firedash"].includes(g.stun.fx)&&(x+=Math.round(Math.sin(n*60+o.id)*1.5));const b=(o.x+o.y)*100+1,v=xo(o.sprite,c,d,a?Fh(o.sprite,"idle",n):h);Hi(i.spr,v,o.sprite,x,u,m,b),i.spr.alpha=f,i.spr.tint=o.illusion?10148095:16777215,o.illusion&&(i.spr.alpha=f*.8);let S=0,_=0;if(o.hitFlash>.06?(S=16777215,_=.75):g.slow?(S=gx[g.slow.fx]||8050943,_=.35):g.root?(S=3836458,_=.3):g.stun&&g.stun.fx==="arcane"?(S=11563263,_=.35):g.burn?(S=16742954,_=.25+.15*Math.sin(n*14+o.id)):y&&(S=y.kind==="fire"?16747066:16765514,_=.25+.1*Math.sin(n*6)),_>0&&v?(Hi(i.glow,v,o.sprite,x,u,m,b+.5),i.glow.tint=S,i.glow.alpha=_*f):i.glow.visible=!1,M.shadowsOn&&!a&&v&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(ne[o.sprite]&&ne[o.sprite].fly)){const R=ne[o.sprite];i.shadow.texture=v,i.shadow.visible=!0,i.shadow.anchor.set(R.ax/R.fw,R.ay/R.fh),i.shadow.setFromMatrix(new he(m,0,-.8*m,-.38*m,Math.round(x),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const w=ne[o.sprite]&&ne[o.sprite].gear;let T=0;if(w&&(o.kind==="hero"||o.illusion)){const R=o.illusion?o.owner&&M.mode!=="guest"?e.gearCode(o.owner):0:M.mode==="guest"?o.gear||0:e.gearCode(o),k={w:R&3,h:R>>2&3,a:R>>4&3,b:R>>6&3};for(const E of["a","b","h","w"]){const L=k[E];if((L>0||E==="w")&&w[E]&&w[E].includes(L)){const H=o.sprite+"__"+E+L;if(!i.gear[T]){const Q=new Qe(_t.EMPTY);kt.entities.addChild(Q),i.gear[T]=Q}Hi(i.gear[T],xo(H,c,d,h),H,x,u,m,b+.2+T*.05),i.gear[T].alpha=f,T++}}}for(;T<i.gear.length;T++)i.gear[T].visible=!1}for(const[o,i]of Lo)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();Lo.delete(o)}}let bx=0;function Mx(e){if(!e.sprite||!Jl(e.sprite))return;const t=xo(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new Qe(t),r=ne[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=C(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,kt.entities.addChild(n),mr.push({spr:n,t:0,vy:20})}function Sx(){const e=M.game&&M.game.player?Tf(M.game.t):{night:0,warm:0};gl=e.night;const t=(a,s,l)=>Math.round(a+(s-a)*l);let n=t(255,92,e.night),r=t(255,104,e.night),o=t(255,168,e.night);n=t(n,255,e.warm*.6),r=t(r,176,e.warm*.6),o=t(o,128,e.warm*.6);const i=`rgb(${n},${r},${o})`;i!==ff&&(ff=i,ss.style.backgroundColor=i)}function _x(e){Sx();const t=M.cam,n=M.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(M.W/2-t.x*t.z+r),a=Math.round(M.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])kt[m].scale.set(t.z),kt[m].position.set(i,a);const s=t.x-M.W/2/t.z-2,l=t.y-M.H/2/t.z-2,u=M.W/t.z+4,f=M.H/t.z+4;as&&(as.tilePosition.set(-n*14,-n*3),as.alpha=.45+.12*Math.sin(n*1.3)),ls&&(ls.tilePosition.set(Math.sin(n*.3)*6,0),ls.alpha=.25+.15*Math.sin(n*.9));const c=M.game&&M.game.player,[h,d]=c?C(c.x,c.y):[0,0];for(const m of Os){const[y,g]=C(m.o.x,m.o.y),x=y>s-200&&y<s+u+200&&g>l-100&&g<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=xo(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=ne[m.o.sprite];if(m.spr.alpha=c&&m.o.x+m.o.y>c.x+c.y&&b&&Math.abs(h-y)<b.fw*.42&&d<g&&d>g-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const v=m.o,S=(v.x*12.9898+v.y*78.233)%6.28,_=.8+(v.x*7.1+v.y*3.3)%1*.7,w=(.02+(v.x*3.7+v.y*9.1)%1*.025)*(.6+M.wind);m.spr.skew.x=-(Math.sin(n*_*1.6+S)*w+Math.sin(n*_*3.1+S*2)*w*.3+M.wind*.02)}}}}M.game&&(rd(e,s,l,u,f,xl),vx());for(const m of mr)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=mr.length-1;m>=0;m--)mr[m].t>.8&&(mr[m].spr.destroy(),mr.splice(m,1));Ax(),zx(),M.game&&M.game.player?Ox():Sl&&(Sl=!1,gn.getContext("2d").clearRect(0,0,gn.width,gn.height))}let Sl=!1;const _l=1;function M0(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&q[r+"_"+n.slice(-1)])}function Ta(e,t=1){const n=e.getContext("2d"),r=M.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(M.W/2-r.x*r.z+o)*t,Math.round(M.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const wx={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function Ax(){const e=M.game,t=M.T,n=Ta(Mo,_l);let r=Ta(vo,_l);if(fu(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;od();for(const l of e.zones)if(!M0(l))if(l.once){const u=1-l.t/l.dur;Lt(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),Lt(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(Lt(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&A({type:"puff",x:l.x+p(-1,1)*l.r*.8,y:l.y+p(-1,1)*l.r*.8,r:p(12,22),dur:p(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;A({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}id();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];Lt(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of e.heroes)l.dead||Fe(l)||Lt(l.x,l.y,.42,l===o?"#ffd24a":hs[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=M.hoverUnit;a&&a!==o.target&&!a.dead&&Lt(a.x,a.y,(a.r||.4)*(a.scale||1)+.22,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=C(l.x,l.y,1.3),[c,h]=C(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(c,h),r.stroke(),r.restore()}o.target&&!o.target.dead&&Lt(o.target.x,o.target.y,(o.target.r||.4)+.2,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&Lt(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(Cx(o),M.hoverAbil){const l=i[o.heroKey].abil[M.hoverAbil];l.range&&Lt(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe")&&Lt(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=M.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,Lt(s.x,s.y,.28*(1-l)+.06,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||Fe(l))continue;l.status&&l.status.slow&&Lt(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,wx[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u){const f=u.kind==="fire",c=.5+.5*Math.sin(t*6);Lt(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&Lt(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&O(l.x+p(-.6,.6),l.y+p(-.6,.6),p(.1,1.2),p(-.3,.3),p(-.3,.3),p(1,2.4),.6,f?yn("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&Lt(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&Lt(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&O(l.x+p(-.3,.3),l.y+p(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(Lt(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&O(l.x+p(-.4,.4),l.y+p(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0))}}if(r=Ta(bo),fu(r,n),e){if(e.player){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=C(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}cd(),sd(),Tx(r)}ld()}ud(),e&&e.player&&Px(r)}function Cx(e){if(!M.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[M.aim.k],n=M.mouse.wx,r=M.mouse.wy;let o=n-e.x,i=r-e.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&Lt(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),t.type==="proj"||t.type==="dash"){const u=t.range,f=(t.width||1)/2,c=-i*f,h=o*f;cu([[e.x+c,e.y+h],[e.x+o*u+c,e.y+i*u+h],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-c,e.y+i*u-h],[e.x-c,e.y-h]],s,l)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let c=0;c<=12;c++){const h=u-t.angle+2*t.angle*c/12;f.push([e.x+Math.cos(h)*t.range,e.y+Math.sin(h)*t.range])}cu(f,s,l)}else{const u=Math.min(a,t.range||0),f=e.x+o*u,c=e.y+i*u;Lt(f,c,t.radius||.6,s,l,2)}}function Tx(e){const t=M.T;for(const n of M.game.units){if(n.dead||Fe(n))continue;const r=n.status||{};if(!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;O(n.x+p(-.3,.3),n.y+p(-.3,.3),l<0?1.1:.2,p(-.2,.2),p(-.2,.2),l,.7,yn(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&O(n.x+p(-.25,.25),n.y+p(-.25,.25),.3,0,0,1.4,.4,yn("fire"),3,-1,!0);continue}const o=ne[n.sprite],i=n.scale||1,[a,s]=C(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="arcane")for(let f=0;f<3;f++){const c=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=t*5+f*2.09,h=a+Math.cos(c)*14,d=u+Math.sin(c)*4;e.fillStyle="#ffe070",e.fillRect(h-3,d-1,6,2),e.fillRect(h-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-t*4+f*3.14,h=a+Math.cos(c)*20,d=u-6+Math.sin(c)*6;e.fillStyle="#ffffff",e.fillRect(h-3,d,3,2),e.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&O(n.x+p(-.3,.3),n.y+p(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const Zo=new Map;function us(e,t,n){const r=n+"|"+t+"|"+e;let o=Zo.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,o.width=Math.ceil(i.measureText(e).width+s*2+2),o.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),Zo.size>2e3&&Zo.delete(Zo.keys().next().value),Zo.set(r,o),o}function Rx(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(hs))us(e[t].name,n,11),us("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)us(String(t),"#ffe070",10)}function Px(e){const t=M.game,n=t.player,r=M.cam,o=window.SIM.HEROES,i=r.x-M.W/2/r.z,a=r.y-M.H/2/r.z,s=M.W/r.z,l=M.H/r.z,u=(c,h,d,m,y,g,x)=>{e.fillStyle="#000000c0",e.fillRect(c-1,h-1,d+2,m+2),e.fillStyle=x,e.fillRect(c,h,d,m),e.fillStyle=g,e.fillRect(c,h,Math.max(0,Math.min(1,y))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(c,h,Math.max(0,Math.min(1,y))*d,Math.max(1,m/3))},f=(c,h,d,m,y,g=y)=>{const x=us(c,m,g),b=y/g,v=x.width*b,S=x.height*b;e.drawImage(x,Math.round(h-v/2),Math.round(d-S/2),v,S)};for(const c of t.units){if(c.dead||Fe(c))continue;const h=(c.x-c.y)*rt.HW+rt.OX,d=(c.x+c.y)*rt.HH;if(h<i-60||h>i+s+60||d<a-60||d>a+l+160||c.kind==="monster"&&c.hp>=c.maxHp-1&&!c.boss)continue;const m=ne[c.sprite],g=d-(c.leaping?40:0)-(m?m.ay*(c.scale||1)*(c.monster==="serpent"?1.4:.92):50)-6,x=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,b=x?66:34,v=x?7:4,S=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":hs[c.team];if(e.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-b/2,g,b,v,c.hp/c.maxHp,S,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(h-b/2-1.5,g-1.5,b+3,v+3)),c.kind==="hero")for(let _=1;_<6;_++)e.fillStyle="#00000080",e.fillRect(h-b/2+b*_/6,g,1,v);c.shield>0&&M.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(h-b/2+c.hp/c.maxHp*b,g,Math.min(b*(1-c.hp/c.maxHp),c.shield/c.maxHp*b),v)),c.kind==="hero"&&(e.fillStyle="#120c1a",e.fillRect(h-b/2-16,g-2,14,v+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(h-b/2-16,g-2,14,v+4),f(String(c.level),h-b/2-9,g+v/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,g-9,hs[c.team],11)),e.globalAlpha=1}for(const c of t.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=C(c.x,c.y,1.1+c.t*.9);e.globalAlpha=Math.max(0,1-c.t/1.1);const m=c.t<.12?1.4-c.t*3:1;f(vt.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*m,c.big?20:14)}e.globalAlpha=1}function zx(){let e=0;const t=M.T,n=(r,o,i,a,s,l)=>{let u=$i[e];u||(u=new Qe(Is),u.anchor.set(.5),u.blendMode="add",kt.lightsCam.addChild(u),$i[e]=u),e++;const[f,c]=C(r,o,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=a*(2+.6*gl),u.tint=s,u.alpha=Math.min(1,l*(1+1.1*gl))};for(const r of vl)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&O(r.x+p(-.1,.1),r.y+p(-.1,.1),.9,p(-.2,.2),p(-.2,.2),p(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(M.game){for(const r of M.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),Fe(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45)}for(const r of M.game.zones)r.once&&!M0(r)&&n(r.x,r.y,0,r.r*rt.HW*1.4,13143295,.35);for(const r of M.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<$i.length;e++)$i[e].visible=!1}let Tr=null;function Ix(){if(Tr)return Tr;Tr=document.createElement("canvas"),Tr.width=Tr.height=128;const e=Tr.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Tr}function Ox(){const t=Math.ceil(M.W/4),n=Math.ceil(M.H/4),r=M.cam;(gn.width!==t||gn.height!==n)&&(gn.width=t,gn.height=n),Sl=!0;const o=gn.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of M.visionSrc){const[a,s]=C(i.x,i.y),l=((a-r.x)*r.z+M.W/2)/4,u=((s-r.y)*r.z+M.H/2)/4,f=Rf(i.kind)*rt.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(Ix(),l-f,u-f/2,f*2,f)}}function Fx(e){if(!Jl("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;Ml({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=Os[Os.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function S0(){for(const[,e]of Lo){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy()}Lo.clear();for(const e of mr)e.spr.destroy();mr.length=0}let Le,Ke,mn,Y,ft,Sn="dragon",or="blue",$=null,hf=0,So=0,Ra=0,Pa=!1,ho=!1,wl=!1,Ln={},Dn=null,Mr=!1,df=0,mf=0,Ex=0,pf=performance.now(),yf=-9,Al=!1;const kx=["buff","aoe_self","heal_aoe","execute"],Ux=["facil","normal","dificil"],oi=new Map;let Cl=!1;function zt(e){if(e==null)return"";if(e=String(e),Cl||Fl.value==="es"||!window.I18N)return e;const t=oi.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return oi.size>5e3&&oi.clear(),oi.set(e,r),r}function Lx(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=Ke[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=Le.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(Le&&Le.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=Le.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function _0(e,t,n,r=1,o=1){if(t===void 0||n===void 0){Y.play(e,r,0,.03,o);return}const[i,a]=C(t,n),s=M.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/M.W,u/M.H);const c=M.game&&M.game.player;if(c&&!c.dead){const[h,d]=C(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/M.W,(a-d)*s.z/M.H))}Y.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(M.W*.6))),.03,o)}function nu(e,t,n,r){if(!Y.babble)return;const o=Math.max(0,mn.indexOf(e))*7+3;if(n===void 0||r===void 0){Y.babble(o,t,.5,0);return}const[i,a]=C(n,r),s=M.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/M.W,u/M.H),c=.5*Math.max(0,1-f*1.1);c>.05&&Y.babble(o,t,c,Math.max(-1,Math.min(1,l/(M.W*.6))))}let gf=0;function Nr(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function tn(e,t="#ffe7b0",n=1.5){M.game&&M.game.msg(e,t,n)}async function Dx(e){Le=window.SIM,Ke=Le.HEROES,mn=Le.HERO_KEYS,Y=window.AUDIO,ft=new window.Net,G0();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(Fl.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");Ux.includes(r)&&(Je.value={...Je.value,difficulty:r})}catch{}try{M.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}Lx(),vt.babble=nu,vt.sfx=_0,vt.say=Nr,vt.play=(r,o)=>Y.play(r,o??1),vt.t=zt,vt.banner=(r,o,i,a,s)=>{const l=Ao.value.slice(-3);Ao.value=[...l,{id:++Ex,title:zt(r),color:o,killerKey:i,victimKey:a,big:s}]},N0(kn),A0(),Je.value={...Je.value,volMaster:Y.volume?Y.volume("m"):1,volMusic:Y.volume?Y.volume("mu"):1,volSfx:Y.volume?Y.volume("s"):1,soundStyle:Y.style?Y.style():"epic",shadows:M.shadowsOn},await Q2(r=>Q0.value=r),await hx(e),mx(),Hx(),Rx(),await Promise.all([fx(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,B0(),$0().then(()=>Promise.all([H0(mn),W0(mn)])),document.fonts?document.fonts.ready:null]);try{const r=new Le.Game(window.MAP,{humans:[]});Fx(r._makeBushes())}catch(r){console.warn(r)}Yx(),Kx();const[t,n]=C(rt.N/2,rt.N/2);M.cam.x=t,M.cam.y=n,await V0(),nn.value="menu",ft.init().then(r=>{Pf.value=!!r}).catch(()=>{}),ft.onChange=()=>pi(),l3(),requestAnimationFrame(T0)}function w0(e){const t=Le.PASSIVES&&Le.PASSIVES[e];return t?{name:zt(t[0]),desc:zt(t[1])}:{name:"",desc:""}}function A0(){q0.value=mn.map(e=>{const t=Ke[e];return{key:e,name:t.name,title:zt(t.title),role:zt(t.role),ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:zt(t.abil[n].name),desc:zt(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:w0(e)}}),Y0.value=Le.ITEMS.map(e=>({id:e.id,name:zt(e.name),desc:zt(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.stack||0}))}let xf="";function ru(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(t===xf)return;xf=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const C0="v9.0";{const e=document.createElement("div");e.id="build-tag",e.textContent=C0,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>ru(e.error||e.message));window.addEventListener("unhandledrejection",e=>ru(e.reason));function T0(e){const t=Math.min(.05,(e-pf)/1e3);pf=e,M.T=e/1e3;try{const n=nn.value;n==="pick"&&$&&(Qx(t),_o()),n==="lobby"&&Jx(t),n==="play"&&M.game?Nx(t):Gx(t),M.marker&&(M.marker.t+=t,M.marker.t>.3&&(M.marker=null)),nd(t),_x(t),(mf-=t)<=0&&M.game&&(mf=.1,a3()),(bf-=t)<=0&&(bf=.5,Xx()),n!=="play"&&(vf-=t)<=0&&(vf=1,ft.available&&(j0.value=ft.openGames()))}catch(n){console.error(n),ru(n)}requestAnimationFrame(T0)}let vf=0,bf=0;function Xx(){if(!Y.setAmbient)return;const e=Yn(M.W/2,M.H/2),t=rt.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;Y.setAmbient(o,s,a)}function Gx(e){const t=M.T*.05,n=rt.N/2+Math.cos(t)*12,r=rt.N/2+Math.sin(t*1.3)*12,[o,i]=C(n,r);M.cam.x+=(o-M.cam.x)*Math.min(1,e*.5),M.cam.y+=(i-M.cam.y)*Math.min(1,e*.5),M.cam.z=M.cam.tz=1.25}let ii="";function Nx(e){const t=M.game;r3(e);{const o=Tf(t.t).phase;o!==ii&&(ii&&o==="dusk"&&(tn("Cae la noche: se ve menos lejos","#a8b8ff",3),Y.play("announce",.35)),ii&&o==="dawn"&&(tn("Amanece","#ffe0a0",2.5),Y.play("announce",.3)),ii=o)}if(M.mode==="guest")t.guestTick(e),ft.hostState&&ft.hostState.st==="end"&&!t.winner&&(t.winner="blue");else{if(M.mode==="host")for(const[o,i]of ft.pullCommands())t.input(o,i);if(!(ai.value&&M.mode==="solo")&&!U0()&&t.update(e),M.mode==="host"&&(So-=e,So<=0)){So=1/12;const o=t.heroes.filter(a=>a.human),i=t.snapshot(3300,o);i.I=ze>=0?Math.round(ze*10)/10:qn?0:-1,ft.publish(t.winner?"end":"play",i,o.map(a=>[a.human,a.team,a.heroKey]))}}const n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&Mx(o);Bx(e),M.mouse.wx=Yn().x,M.mouse.wy=Yn().y,M.mouse.rd&&!t.winner&&!M.aim&&M.mouse.inWorld&&(Ra-=e,Ra<=0&&(Ra=.12,z0(!1))),ed(),Vx(e),!wl&&t.t>7.5&&(wl=!0,Nr("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;Y.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),$x(e),M.hoverUnit=!M.mouse.md&&!M.aim&&M.mouse.inWorld?P0():null,jx(),Al=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Al&&M.T-yf>3&&(yf=M.T,Y.play("deny",.5)),(df-=e)<=0&&(df=1/15,X0())}function Bx(e){const t=M.game.player,n=M.cam,r=M.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(M.camFollow||Ln[" "])){const[o,i]=C(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=900*e/n.z;Ln.ArrowLeft&&(n.x-=i),Ln.ArrowRight&&(n.x+=i),Ln.ArrowUp&&(n.y-=i),Ln.ArrowDown&&(n.y+=i),r.inWorld&&(r.x<18&&(n.x-=i),r.x>M.W-18&&(n.x+=i),r.y<18&&(n.y-=i),r.y>M.H-18&&(n.y+=i))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-M.W/2)/n.z+n.x,i=(r.y-M.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(M.camFollow||Ln[" "])||(n.x=o-(r.x-M.W/2)/n.z,n.y=i-(r.y-M.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*rt.N*rt.HW,n.x)),n.y=Math.max(0,Math.min(2*rt.N*rt.HH,n.y))}function Mf(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function $x(e){const t=M.game,n=t.player;M.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&Of[o.kind]),t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=Mf(o.x,o.y);let a=0;for(const s of M.visionSrc){const l=Rf(s.kind);if(Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||Mf(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}M.visible=r}let mi=null;function R0(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function Hx(){mi===null&&(mi=[In.water_mask,In.water_calm].filter(e=>e&&e.naturalWidth).map(R0).filter(Boolean))}function Wx(e,t){mi===null&&(mi=[In.water_mask,In.water_calm].filter(i=>i&&i.naturalWidth).map(R0).filter(Boolean));const[n,r]=C(e,t);for(const i of mi){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function Vx(e){const t=M.game,n=t.player,r=M.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||Fe(o)||o.dash)continue;const[i,a]=C(o.x,o.y);if(Math.abs(i-r.x)>M.W/r.z||Math.abs(a-r.y)>M.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=Wx(o.x,o.y);if(s==="water"){A({type:"ring",x:o.x+p(-.1,.1),y:o.y+p(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)O(o.x,o.y,.1,p(-.8,.8),p(-.8,.8),p(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&O(o.x,o.y,.05,p(-.3,.3),p(-.3,.3),p(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?Y.play("step_"+s,.32,0,80):Math.random()<.5&&_0("step_"+s,o.x,o.y,.12))}}function We(e){M.mode==="guest"?ft.send(e):M.game.input(M.localId,e)}function P0(){const e=M.game,t=e.player,n=M.cam,r=window.META;let o=null,i=1e9;const a=Yn();for(const s of e.units){if(s.dead||Fe(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||M.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=r[s.sprite],[u,f]=C(s.x,s.y),c=(u-n.x)*n.z+M.W/2,h=(f-n.y)*n.z+M.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss,y=(l?l.ay*.9:50)*d,g=(m?40:s.kind==="minion"?20:26)*d;let x=1e9;if(Math.abs(M.mouse.x-c)<g&&M.mouse.y<h+12*d&&M.mouse.y>h-y)x=Math.abs(M.mouse.x-c)/g+Math.abs(M.mouse.y-(h-y/2))/y;else{const b=Math.hypot(a.x-s.x,a.y-s.y);b<s.r*(s.scale||1)+.6&&(x=1.5+b)}x>1e8||(s.kind==="hero"&&(x-=.4),x<i&&(i=x,o=s))}return o}function qx(){const e=M.cam,t=window.META;let n=null,r=1e9;for(const o of M.game.heroes){if(o.dead||Fe(o))continue;const[i,a]=C(o.x,o.y),s=(i-e.x)*e.z+M.W/2,l=(a-e.y)*e.z+M.H/2,u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;if(Math.abs(M.mouse.x-s)<f&&M.mouse.y<l+10*e.z&&M.mouse.y>l-u){const c=Math.abs(M.mouse.x-s)+Math.abs(M.mouse.y-(l-u/2));c<r&&(r=c,n=o)}}return n}function z0(e){const t=Yn();if(!e&&Pa)return;const n=e?P0():null;if(e&&(Dn=n&&n.kind==="hero"&&n!==M.game.player&&n.team===M.game.player.team?n.id:null),n){Pa=!0,We(["a",n.id]),Y.play("click",.3),M.marker={x:n.x,y:n.y,t:0,atk:!0};return}Pa=!1,We(["m",t.x,t.y]),e&&(M.marker={x:t.x,y:t.y,t:0},Y.play("move",.25),M.T-gf>7&&Math.random()<.5&&(gf=M.T,nu(M.game.player.heroKey,"ok")))}function I0(e){const t=M.game.player;if(t.ranks&&!t.ranks[e]){tn(t.points>0&&M.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),Y.play("deny",.6);return}if((t.cds[e]||0)>.05){tn("En enfriamiento","#bbbbbb",.8),Y.play("deny",.5);return}const n=Ke[t.heroKey].abil[e],r=Yn();if(Dn=null,kx.includes(n.type)){We(["c",e,r.x,r.y]),M.aim=null;return}if(M.aim&&M.aim.k===e){O0();return}M.aim={k:e},Y.play("aim",.3)}function O0(){if(!M.aim)return;const e=Yn();We(["c",M.aim.k,e.x,e.y]),M.aim=null}function Tl(e){const t=M.game&&M.game.player;t&&(M.game.canRankUp(t,e)?(We(["l",e]),Y.play("levelup",.5)):(tn(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),Y.play("deny",.4)))}function Rl(){const e=M.game&&M.game.player;if(!e)return;const[t,n]=C(e.x,e.y);M.cam.x=t,M.cam.y=n-30}function Pl(){M.cam.tz=El,M.cam.zoomMsgT=1.2}function Yx(){const e=eu();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),window.addEventListener("mousemove",t=>{M.mouse.md&&(M.cam.x-=(t.clientX-M.mouse.x)/M.cam.z,M.cam.y-=(t.clientY-M.mouse.y)/M.cam.z),M.mouse.x=t.clientX,M.mouse.y=t.clientY,M.mouse.inWorld=t.target===e}),e.addEventListener("wheel",t=>{nn.value==="play"&&(M.cam.tz=Math.max(.75,Math.min(3,M.cam.tz*(t.deltaY>0?.9:1.1))),M.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&Pl()}),e.addEventListener("mousedown",t=>{Y.init(),Y.startMusic(),window.VOICE&&window.VOICE.init(),M.mouse.x=t.clientX,M.mouse.y=t.clientY;const n=M.game;if(!(nn.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){M.mouse.md=!0,t.preventDefault();return}if(!ai.value){if(t.button===0&&t.altKey){kn.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(M.aim){O0();return}if(M.amove){M.amove=!1;const o=Yn();We(["am",o.x,o.y]),M.marker={x:o.x,y:o.y,t:0,atk:!0},Y.play("click",.3);return}const r=qx();(!r||r.team===n.player.team)&&(Dn=r&&r!==n.player?r.id:null)}t.button===2&&(M.aim&&(M.aim=null),M.amove=!1,M.mouse.rd=!0,z0(!0))}}}),window.addEventListener("mouseup",t=>{t.button===2&&(M.mouse.rd=!1),t.button===1&&(M.mouse.md=!1),t.button===0&&(M.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;Y.init();const r=M.game,o=t.key.toUpperCase();if(nn.value==="play"&&r&&r.player&&t.key==="Enter"){zf.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){Y.toggleMute();return}if(o==="N"){Y.toggleMusic();return}if(nn.value!=="play"||!r||!r.player)return;if(U0()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&M.mode==="solo"&&(D0(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){M.aim||lo.value?(M.aim=null,lo.value=!1):ai.value=!ai.value;return}if(t.key==="Tab"){t.repeat||(si.value=!si.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){Tl(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(ho=!ho,Y.play("aim",.4)):(tn("No tienes puntos de habilidad","#bbbbbb",1),Y.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&ho){ho=!1,Tl(o);return}if("QWER".includes(o)&&o.length===1){I0(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){kn.useItem(+t.key-1),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){Rl(),t.preventDefault();return}if(t.key.startsWith("Arrow")){Ln[t.key]=!0,t.preventDefault();return}if(o==="P"){lo.value=!lo.value,Y.play("click",.4);return}if(o==="H"){kn.useItem((i.items||[]).indexOf("pocion"));return}if(o==="K"){Y.setStyle&&(kn.setSoundStyle(Y.style()==="epic"?"pixel":"epic"),tn("Sonido: "+(Y.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){M.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){kn.spell(o);return}if(o==="G"&&o.length===1){kn.ping(t.shiftKey?"omw":"danger");return}if(o==="S"&&We(["s"]),o==="B"){kn.recall();return}o==="Y"&&(M.camFollow=!M.camFollow),o==="Z"&&Pl(),t.key===" "&&(Ln[" "]=!0,Rl(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete Ln[t.key]}),window.addEventListener("blur",()=>{si.value=!1,Ln={},M.mouse.md=!1,M.mouse.rd=!1,M.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{M.mouse.inWorld=!1})}const gr={};function Kx(){const e=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,l.fillRect(d*2,c*2,2,2))})),a){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};gr.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),gr.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),gr.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);gr.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=gr.normal}let Sf="";function jx(){const e=M.game&&M.game.player,t=M.hoverUnit,n=M.aim||M.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==Sf&&(Sf=n,eu().style.cursor=gr[n],document.documentElement.style.cursor=gr.normal)}function F0(){const e=M.mode==="solo"?"local":ft.myPeer||"host";return $&&$.h&&$.h[e]}function fs(e){const t=e?[{id:ft.myPeer||"host",team:or},...ft.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of t)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),$={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Sn||mn[0],locked:!1,prep:-1,online:!!e},e&&(M.mode="host"),nn.value="pick",Y.setMode("menu"),Y.play("announce",.6),_o()}function zl(e,t){if(!$||!e)return;const n=t===void 0;if(n&&M.mode==="guest"){$.locked||(ft.send(["lock",e]),Sn=e,$.pending=e,Y.play("levelup",.7));return}const r=n?M.mode==="solo"?"local":ft.myPeer||"host":t,o=$.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>$.blue.includes(l)||$.red.includes(l);if(s(e))if(n){Y.play("deny",.6);return}else{const l=mn.filter(u=>!s(u));e=l[Math.random()*l.length|0]}$[i][a]=e,o[2]=1,n&&($.locked=!0,Sn=e,$.view=e,Y.play("levelup",.7),nu(e,"select"))}function _f(e){const t=$[e],n=[...$.blue,...$.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&Ke[s].role===a));let o=mn.filter(a=>!n.includes(a));const i=o.filter(a=>r.includes(Ke[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||mn[Math.random()*mn.length|0]}function Qx(e){if(M.mode==="guest")return Zx();if($.online){for(const[n,r]of ft.pullCommands())r[0]==="lock"&&zl(r[1],n);(hf-=e)<=0&&(hf=.25,ft.publishDraft({t:Math.round($.t*10)/10,p:Math.round($.prep*10)/10,b:$.blue,r:$.red,h:$.h}))}if($.prep>=0){$.prep-=e,$.prep<=0&&($.online?t3():E0());return}if(!$.online){if($.locked){$.bt=($.bt||0)+e;for(const n of $.order)!n.done&&$.bt>=(Mr?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,$[n.team][n.slot]=_f(n.team),Y.play("click",.35))}$.locked&&$.order.every(n=>n.done)&&($.prep=Mr?1.5:3,Y.play("announce",.7));return}if(Object.values($.h).every(n=>n[2])){$.bt=($.bt||0)+e;for(const n of $.order)!n.done&&$.bt>=.3+n.q*.28&&(n.done=!0,$[n.team][n.slot]=_f(n.team),Y.play("click",.35));$.order.every(n=>n.done)&&($.prep=4,Y.play("announce",.7))}}function Zx(){const e=ft.hostState;if(e&&e.st==="play"&&e.S){$=null,Vr.value=null,k0();return}const t=e&&e.D;if(!t)return;const n=$.blue.join()+$.red.join();$.t=t.t,$.prep=t.p,$.blue=t.b,$.red=t.r,$.h=t.h,n!==$.blue.join()+$.red.join()&&Y.play("click",.35);const r=F0();r&&r[2]?($.locked=!0,Sn=$[r[0]][r[1]],$.view=Sn||$.view):$.pending&&performance.now()-($.sentAt||0)>1e3&&($.sentAt=performance.now(),ft.send(["lock",$.pending]))}function _o(){if(!$){Vr.value=null;return}const e=F0(),t=M.mode==="solo"?"local":ft.myPeer||"host";Vr.value={online:!!$.online,t:$.t,prep:$.prep,blue:[...$.blue],red:[...$.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries($.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!$.locked,pending:$.pending||null,view:$.view}}function Jx(e){ft.role==="guest"&&ft.hostState&&ft.hostState.st==="pick"&&ft.hostState.D&&(M.mode="guest",M.localId=ft.myPeer,$={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Sn||mn[0],locked:!1,prep:-1,online:!0},nn.value="pick",Y.play("announce",.6)),ft.role==="guest"&&ft.hostState&&ft.hostState.st==="play"&&ft.hostState.S&&k0(),ft.role==="host"&&(So-=e,So<=0&&(So=1.5,ft.setChoice(Sn,or))),(wf-=e)<=0&&(wf=.3,pi())}let wf=0;function pi(){const e=[];if(ft.role==="host"){e.push({name:zt("Tú (anfitrión)"),team:or,me:!0});for(const t of ft.guests())e.push({name:zt("Invitado"),team:t.team,me:!1})}else ft.role==="guest"&&(e.push({name:zt("Tú"),team:or,me:!0}),ft.hostState&&e.push({name:zt("Anfitrión"),team:ft.hostState.team,me:!1}));Ze.value={...Ze.value,role:ft.role,code:ft.code,myTeam:or,players:e,hostFound:!!ft.hostState}}function E0(){M.mode="solo",M.localId="local";const e=$?{blue:$.blue.slice(1).filter(Boolean),red:$.red.filter(Boolean)}:null;M.game=new Le.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Sn}],localId:"local",picks:e,difficulty:Je.value.difficulty,aram:Mr}),Mr&&(Mr=!1,M.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),$=null,Vr.value=null,ou(),M.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function t3(){M.mode="host",M.localId=ft.myPeer||"host";const e=[],t={blue:[],red:[]};if($){for(const n in $.h){const[r,o]=$.h[n];e.push({id:n,team:r,hero:$[r][o]||mn[0]})}for(const n of["blue","red"])$[n].forEach((r,o)=>{r&&!Object.values($.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}$=null,Vr.value=null,M.game=new Le.Game(window.MAP,{humans:e,localId:M.localId,picks:t,difficulty:Je.value.difficulty}),ft.lastSeq={};for(const n of ft.guests())ft.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;ft.onGuests=(n,r)=>{for(const o of r.left||[]){const i=M.game&&M.game.slots[o.peer];i&&!i.bot&&(i.bot=!0,M.game.msg("Un jugador salió: lo reemplaza un bot","#ffb070"))}},ou(),M.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function k0(){M.mode="guest",M.localId=ft.myPeer,M.game=new Le.Game(window.MAP,{humans:[],localId:M.localId}),M.game.units=[],M.game.heroes=[],M.game.player=null,ft.onSnapshot=e=>{M.game&&M.mode==="guest"&&M.game.applySnapshot(e,M.localId)},ft.hostState&&ft.hostState.S&&M.game.applySnapshot(ft.hostState.S,M.localId),ou()}const Jn={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let cs=0,ze=-1,wo=[],e3=0,qn=!1,Fs=0;function U0(){return ze>=0}function L0(){const e=M.game,t=e.player;J2(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=Ke[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},r=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){qn=!0;return}qn=!1;const a=Fs;Fs=0,kl.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++e3,off:a,canSkip:M.mode==="solo"},ze=a,cs=0,wo=[[.15,()=>Nr("blue_team")],...o.map((s,l)=>[Jn.blue+l*Jn.step+.05,()=>Y.play("reveal",.8)]),[Jn.red-.35,()=>Nr("red_team")],...i.map((s,l)=>[Jn.red+l*Jn.step+.05,()=>Y.play("reveal",.8)]),[Jn.vs-.02,()=>{Y.play("vsslam",1),Nr("versus")}],[Jn.go,()=>{Y.play("warhorn",.9),Nr("battle"),Y.setMode("battle")}]].filter(s=>s[0]>=a-.05),Y.setMode("menu")}function n3(){const e=ft.hostState&&ft.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?ze<0?(Fs=t,qn=!0):Math.abs(ze-t)>.6&&(ze=t):(ze>=0||qn)&&(qn=!1,ze>=0&&Xs())}function r3(e){if(M.mode==="guest"&&n3(),qn&&M.game&&L0(),ze<0)return;const t=performance.now()/1e3,n=cs?t-cs:0;for(cs=t,ze+=n>2?.05:n||e;wo.length&&wo[0][0]<=ze;)wo.shift()[1]();ze>=Jn.end&&Xs()}function Xs(){qn=!1,!(ze<0)&&(ze=-1,wo=[],kl.value=null,Rl(),Y.setMode("battle"))}function D0(){ze<0||M.mode!=="solo"||(ze<Jn.go&&(Y.play("warhorn",.7),Nr("battle")),Xs())}function ou(){if(kf(),S0(),nn.value="play",Ao.value=[],Y.setMode("battle"),wl=!1,M.mode==="guest"?qn=!1:L0(),Dn=null,M.aim=null,M.amove=!1,ho=!1,M.cam.z=M.cam.tz=El,M.game.player){const[e,t]=C(M.game.player.x,M.game.player.y);M.cam.x=e,M.cam.y=t-30}}async function Af(){Mr=!1,ii="",Il=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}ze=-1,wo=[],qn=!1,Fs=0,kl.value=null,ai.value=!1,lo.value=!1,si.value=!1,M.aim=null,$=null,Vr.value=null,M.mode!=="solo"&&await ft.leave(),M.game=null,M.mode="solo",S0(),kf(),Ff.value=null,If.value=null,Ao.value=[],nn.value="menu",Y.setMode("menu"),eu().style.cursor=gr.normal}function o3(e){const t=Ke[e.heroKey],n=(e.items||[]).map(o=>Le.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:zt("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:zt("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:zt("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:zt("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:zt("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:zt("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:zt("Alcance"),value:String(t.range)}]}function za(e){const t=M.game,n=Ke[e.heroKey],r=t.player,o=e===r,i=[];for(const l of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[l]&&i.push(l);e.aegis&&(M.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((l,u)=>{const f=Le.ITEM[l],c=f.active?{cd:f.active.cd,left:M.mode==="guest"?(e.itemCdLeft||[])[u]||0:Math.max(0,((e.itemCd||{})[l]||0)-t.t)}:null;return{id:l,slot:u,name:zt(f.name),desc:zt(f.desc),tier:f.tier||0,line:f.line||null,count:f.stack?e.pots||0:1,active:c}}),s=o||e.team===r.team||M.mode!=="guest";return{id:e.id,heroKey:e.heroKey,name:n.name,title:zt(n.title),role:zt(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:w0(e.heroKey),xpFrac:M.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&s?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,abil:["Q","W","E","R"].map(l=>{const u=n.abil[l],f=e.ranks?e.ranks[l]:1;return{key:l,name:zt(u.name),desc:zt(u.desc),cd:e.cds&&e.cds[l]||0,cdMax:u.cd,rank:f,cost:t.manaCost?t.manaCost(e,l):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,l)),dmg:u.dmg?Math.round(u.dmg*t.abilMul(e,l)):null,type:u.type,fx:u.fx}}),items:a,spells:[{key:"D",name:zt("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:zt("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:o3(e),human:!!e.human,isMe:o,status:i}}let Il=!1;function X0(){const e=!!(M.game&&M.game.player&&M.game.player.dead);if(e!==Il){Il=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=M.game,n=t.player;if(!n)return;const r=Dn?lt(Dn):null;r&&(r.kind!=="hero"||Fe(r))&&(Dn=null);const o=t.msgs.filter(a=>!a.to||a.to===M.localId).slice(-3).map(a=>({id:a.id,text:zt(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{Cl=a.human;const s=zt(a.txt);return Cl=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:Ke[a.hero]?Ke[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});Ff.value={me:za(n),inspected:Dn?za(lt(Dn)):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(za),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?Ke[a.killerKey].name:zt(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:Al,inShop:t.inShop(n),levelMode:ho,aim:M.aim?M.aim.k:null,amove:M.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(M.cam.tz/El*100),zoomMsg:M.cam.zoomMsgT,camFollow:M.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:Ke[a.heroKey].name,team:a.team,level:a.level,kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||M.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:M.mode,netLost:!!ft.lost,deathRecap:n.dead?i3(n):Ol=null}}let Ol=null,Cf=null;function i3(e){return Ol!==e&&(Ol=e,Cf=s3(e)),Cf}function s3(e){const t=(e.dmgLog||[]).filter(r=>M.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&Ke[r.h]?Ke[r.h].name:zt(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function a3(){const e=M.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=rt,i=2*n*r,a=2*n*o,s=(h,d)=>{const[m,y]=C(h,d);return{x:m/i,y:y/a}},l=[];for(const h of e.units){if(h.dead||Fe(h))continue;const d=s(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===t,human:!!h.human})}const u=M.cam,f=M.W/u.z,c=M.H/u.z;If.value={units:l,camps:e.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/a,x1:(u.x+f/2)/i,y1:(u.y+c/2)/a},vision:M.visionSrc.map(h=>({...s(h.x,h.y),r:Of[h.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(h=>h.team===t.team&&e.t-h.t<3).map(h=>({...s(h.x,h.y),t:e.t-h.t,kind:h.kind}))}}const kn={skipIntro(){D0()},shopDenied(e){tn(e,"#ffb070",2),Y.play("deny",.5)},playVsBots(){Y.init(),Y.startMusic(),fs(!1)},playAram(){Y.init(),Y.startMusic(),Mr=!0,fs(!1)},async hostOnline(){Ze.value={...Ze.value,msg:zt("Creando sala...")};try{await ft.host(Sn,or),nn.value="lobby",Ze.value={...Ze.value,msg:""},pi()}catch{Ze.value={...Ze.value,msg:zt("No se pudo crear la sala")}}},async joinOnline(e){Ze.value={...Ze.value,msg:zt("Entrando...")};try{await ft.join(e,Sn,or),nn.value="lobby",Ze.value={...Ze.value,msg:""},pi()}catch{Ze.value={...Ze.value,msg:zt("No se pudo entrar")}}},setLobbyTeam(e){or=e,ft.setChoice(Sn,or),pi()},startOnlinePick(){fs(!0)},async leaveLobby(){await ft.leave(),nn.value="menu"},viewHero(e){$&&!$.locked&&($.view=e,Y.play("aim",.3),_o())},lockHero(e){zl(e),_o()},randomHero(){const e=mn.filter(t=>!$.blue.includes(t)&&!$.red.includes(t));zl(e[Math.random()*e.length|0]),_o()},backToMenu(){Mr=!1,$&&$.online?Af():($=null,Vr.value=null,nn.value="menu")},buy(e){const t=M.game&&M.game.player;if(t){if(!M.game.inShop(t)){tn("Solo puedes comprar en tu base (o muerto)","#ffb070",1.6),Y.play("deny",.5);return}if(M.mode!=="guest"&&!M.game.canBuy(t,e)){const n=window.SIM.ITEM[e];tn(t.gold<n.cost?"Te falta oro":(t.items||[]).length>=6?"Inventario lleno (6/6): vende un objeto":"Primero compra el nivel anterior","#ffb070",2),Y.play("deny",.5);return}We(["i",e]),Y.play("buy",.6)}},sell(e){const t=M.game&&M.game.player;if(!(!t||!t.items||!t.items[e])){if(!M.game.inShop(t)){tn("Solo puedes vender en tu base","#ffb070",1.4),Y.play("deny",.4);return}We(["v",e]),Y.play("buy",.4)}},useItem(e){const t=M.game&&M.game.player,n=t&&t.items&&t.items[e];if(!t||e<0||!n){Y.play("deny",.4);return}const r=Le.ITEM[n];if(!(r&&r.active)&&n!=="pocion"){tn("Este objeto no se usa: es pasivo","#bbbbbb",1.2),Y.play("deny",.4);return}if((M.mode==="guest"?(t.itemCdLeft||[])[e]||0:Math.max(0,((t.itemCd||{})[n]||0)-M.game.t))>.05){tn("En enfriamiento","#bbbbbb",.8),Y.play("deny",.4);return}We(["u",e,M.mouse.wx,M.mouse.wy]),Y.play(n==="pocion"?"heal":"blink",.5)},rankUp(e){Tl(e)},castKey(e){M.game&&M.game.player&&I0(e)},spell(e){const t=M.game&&M.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){tn(zt(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),Y.play("deny",.5);return}const r=Yn();We(["sp",e,r.x,r.y]),Y.play(e==="D"?"blink":"wind",.6)},recall(){const e=M.game&&M.game.player;e&&We(e.recall?["bc"]:["b"])},inspect(e){Dn=e&&M.game&&M.game.player&&e===M.game.player.id?null:e,X0()},centerOn(e){const t=e==null?M.game&&M.game.player:lt(e);if(!t)return;const[n,r]=C(t.x,t.y);M.cam.x=n,M.cam.y=r-30,M.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:a}=rt,s=e*(2*r*o)-a,l=t*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;u<0||f<0||u>r||f>r||(n==="right"?(We(["m",u,f]),M.marker={x:u,y:f,t:0}):(M.cam.x=e*2*r*o,M.cam.y=t*2*r*i,M.mouse.mmDrag=!0))},minimapDrag(e,t){const{N:n,HW:r,HH:o}=rt;M.cam.x=Math.max(0,Math.min(1,e))*2*n*r,M.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!M.game||!M.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=rt,u=t*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=Yn();r=i.x,o=i.y}We(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&M.game&&We(["t",e,n]),zf.value=null},bannerDone(e){Ao.value=Ao.value.filter(t=>t.id!==e)},quitMatch(){Af()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};Y.setVolume&&Y.setVolume(n[e],t),Je.value={...Je.value,[e]:t}},setSoundStyle(e){Y.setStyle&&Y.setStyle(e),Je.value={...Je.value,soundStyle:e}},setShadows(e){M.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}Je.value={...Je.value,shadows:e}},setCamFollow(e){M.camFollow=e},resetZoom(){Pl()},setLang(e){Fl.value=e,oi.clear();try{localStorage.setItem("moba_lang",e)}catch{}A0()},setDifficulty(e){Je.value={...Je.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){Y.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;Y.play(n[0],n[1])},t:e=>zt(e)};function l3(){const e=new URLSearchParams(location.search);window.__g=()=>({S:M,draft:$,st:K0,act:kn,net:ft});const t=e.get("sala");if(t){const o=i=>{Pf.value?kn.joinOnline(t.toLowerCase()):i>0&&setTimeout(()=>o(i-1),300)};o(20)}const n=e.get("auto");if(!n)return;if(n==="pick"){fs(!1),e.get("view")&&($.view=e.get("view")),_o();return}if(n==="menu")return;Sn=n,E0(),e.get("intro")||Xs(),e.get("allbots")&&(M.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)M.game.update(1/30),M.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(M.camFollow=!0),e.get("shop")&&(lo.value=!0),e.get("tab")&&(si.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[a,s]=C(o,i);M.cam.x=a,M.cam.y=s}e.get("mx")&&(M.mouse.x=+e.get("mx"),M.mouse.y=+e.get("my"))}const m3=Object.freeze(Object.defineProperty({__proto__:null,BUILD:C0,startClient:Dx},Symbol.toStringTag,{value:"Module"}));export{Fp as $,vh as A,ga as B,fe as C,Sr as D,ge as E,Ut as F,Et as G,Y2 as H,K2 as I,qu as J,ua as K,Ku as L,he as M,Vp as N,De as O,$n as P,Wc as Q,zs as R,A2 as S,_t as T,tl as U,bh as V,j2 as W,k2 as X,Tt as Y,On as Z,Kl as _,Li as a,d3 as a0,Np as a1,h3 as a2,Ur as a3,ko as a4,Yc as a5,dp as a6,pp as a7,m3 as a8,Do as b,jl as c,yh as d,_r as e,Yl as f,an as g,dh as h,Ql as i,a2 as j,Qr as k,Ot as l,mp as m,Fu as n,Ps as o,$c as p,cn as q,Rp as r,Wu as s,Qe as t,Rn as u,y2 as v,ur as w,T2 as x,bn as y,z2 as z};
