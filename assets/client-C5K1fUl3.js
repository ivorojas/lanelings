const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-GwXI5RKY.js","./webworkerAll-DxcMVSzJ.js","./CanvasPool-MUT7J_lF.js","./colorToUniform-DbzcHrQB.js","./_commonjsHelpers-CqkleIqs.js","./actions-CElnbrmF.js","./index-BmzI8_JN.js","./index-CRxA3_CA.css","./WebGPURenderer-DW8LHMst.js","./SharedSystems-BJ6SGZ6h.js","./WebGLRenderer-DBP-7iNY.js"])))=>i.map(i=>d[i]);
import{l as Vs,k as gt,b as Tc,j as xt,n as Il,h as Pc,s as Rc,t as Kr,c as pt,C as zc,f as sr,o as Oc,i as vr,z as El,d as qn,g as jr,m as Ul,B as Ys,e as kl,a as Fc}from"./actions-CElnbrmF.js";import{_ as Vo}from"./index-BmzI8_JN.js";import{g as Dl}from"./_commonjsHelpers-CqkleIqs.js";const te={},At={},lt={},ee={HW:64,HH:32,N:48,OX:48*64,ZK:78.4};function Ic(){const t=window.MAP;ee.HW=t.HW,ee.HH=t.HH,ee.N=t.N,ee.OX=t.N*t.HW}const T=(t,e,n=0)=>[(t-e)*ee.HW+ee.OX,(t+e)*ee.HH-n*ee.ZK],no=1.1,b={game:null,mode:"solo",localId:"local",W:1280,H:720,cam:{x:0,y:0,z:no,tz:no,shake:0,zoomMsgT:0},mouse:{x:0,y:0,wx:0,wy:0,rd:!1,md:!1,mmDrag:!1,inWorld:!0},camFollow:!1,shadowsOn:!0,gpuName:"",softGpu:!1,visible:new Set,visionSrc:[],aim:null,amove:!1,hoverUnit:null,hoverAbil:null,marker:null,wind:0,T:0},Ji={blue:"#4aa8ff",red:"#ff5a4a",neutral:"#ffd24a"},Yo={hero:8.5,minion:5.5,tower:8,nexus:9},m=(t,e)=>t+Math.random()*(e-t);function It(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function nt(t){const e=b.game&&b.game.player;return!e||t.team===e.team?!1:t.invisible&&t.invisible()||!b.visible.has(t.id)}function Ye(t){return b.game&&b.game.units.find(e=>e.id===t)}function nn(t=b.mouse.x,e=b.mouse.y){const{HW:n,HH:r,OX:o}=ee,i=b.cam,a=(t-b.W/2)/i.z+i.x-o,s=(e-b.H/2)/i.z+i.y;return{x:(a/n+s/r)/2,y:(s/r-a/n)/2}}const Me={sfx:(t,e,n,r,o)=>{},say:t=>{},banner:(t,e,n,r,o)=>{},play:(t,e)=>{},t:t=>t,babble:(t,e,n,r)=>{}},br={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let es=null;const ts=t=>br[es&&es[t]||t]||br.fire,Ot=t=>{const e=ts(t);return e[Math.random()*e.length|0]};let un=[],Wn=[],ur=[],an=[],qo=1,ns=1;function Ll(){un=[],Wn=[],ur=[],an=[]}function I(t,e,n,r,o,i,a,s,l=2,u=0,f=!1,c=.94){qo<1&&Math.random()>qo||un.push({x:t,y:e,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:c})}function mt(t,e,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;I(t,e,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,a*(.6+Math.random()*.6),Ot(r),u+(Math.random()<.3?1:0),4,l)}}function se(t){b.cam.shake=Math.max(b.cam.shake,t*ns)}function z(t){return t.t=0,Wn.push(t),t}function On(t){t.t=0,ur.push(t)}const va={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},ba=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),Ec=new Set(["gato","zorra"]);function Uc(){const t=b.game;window.SIM.HEROES;for(const e of t.fx){if(e.done)continue;e.done=!0;const n=!t.player||e.uid===t.player.id||e.uid===void 0;qo=n?1:.4,ns=n?1:.3;const r=e.key&&e.hero&&e.type!=="hit"&&e.type!=="transform"?e.hero+"_"+e.key:"",o=r?te[r]:void 0,i=r&&e.type!=="heal"&&!e.impact,a=r?i?"ab_"+r:e.impact&&!o?va[e.type]:null:va[e.type];if(e.key==="R"&&e.hero&&e.type!=="hit"&&Me.babble(e.hero,"ult",e.x,e.y),a&&Me.sfx(a,e.x,e.y,e.type==="levelup"&&t.player&&e.uid!==t.player.id?.4:1),o)try{if(o(e)!==!1)continue}catch(s){console.error(s)}switch(e.type){case"fire":{z({type:"cone",x:e.x,y:e.y,ux:e.ux,uy:e.uy,range:e.range,angle:e.angle,dur:.45});for(let s=0;s<90;s++){const l=Math.atan2(e.uy,e.ux)+(Math.random()-.5)*e.angle*2,u=(.4+Math.random())*e.range*2.4;I(e.x+e.ux*.4,e.y+e.uy*.4,.35,Math.cos(l)*u,Math.sin(l)*u,Math.random()*1.2,.5,Ot("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}On({type:"scorch",x:e.x+e.ux*e.range*.5,y:e.y+e.uy*e.range*.5,r:e.range*.5,dur:4}),se(3);break}case"quake":{z({type:"cracks",x:e.x,y:e.y,ux:e.ux||1,uy:e.uy||0,range:e.range,angle:e.angle,dur:1.2,seed:Math.random()*99}),z({type:"ring",x:e.x,y:e.y,r:e.range,dur:.4,col:"#f4e0c0",w:5});for(let s=0;s<50;s++){const l=Math.random()*6.28,u=Math.random()*e.range*2.5;I(e.x,e.y,.1,Math.cos(l)*u,Math.sin(l)*u,1+Math.random()*2,.7,Ot("quake"),3,6,!1)}se(e.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const s=e.type==="firering"?"fire":e.type==="healring"?"heal":e.type;z({type:"ring",x:e.x,y:e.y,r:e.radius,dur:.45,col:ts(s)[1],w:7}),z({type:"ring",x:e.x,y:e.y,r:e.radius*.7,dur:.6,col:ts(s)[0],w:3,delay:.08}),e.type==="roar"&&(z({type:"ring",x:e.x,y:e.y,r:e.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),se(8)),e.type==="firering"&&(z({type:"flash",x:e.x,y:e.y,r:e.radius,dur:.25,col:"rgba(255,200,80,"}),se(9),On({type:"scorch",x:e.x,y:e.y,r:e.radius*.9,dur:6})),e.type==="frost"&&On({type:"frost",x:e.x,y:e.y,r:e.radius,dur:3}),e.type==="splash"&&On({type:"wet",x:e.x,y:e.y,r:e.radius*.8,dur:2.5});const l=e.type==="spores"?40:90;for(let u=0;u<l;u++){const f=Math.random()*Math.PI*2,c=e.radius*(1.6+Math.random()*1.6);I(e.x,e.y,.2,Math.cos(f)*c,Math.sin(f)*c,Math.random()*2,.6,Ot(s),e.type==="spores"?5:3,3,e.type!=="spores"&&e.type!=="splash")}if(e.type==="spores")for(let u=0;u<14;u++)z({type:"puff",x:e.x+m(-1,1)*e.radius*.7,y:e.y+m(-1,1)*e.radius*.7,r:m(14,26),dur:m(.7,1.3),col:[140,210,90]});break}case"heal":z({type:"pillar",x:e.x,y:e.y,dur:.8,col:[110,255,140]});for(let s=0;s<16;s++)I(e.x+m(-.4,.4),e.y+m(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Ot("heal"),3,0,!0);break;case"shield":case"stoneskin":z({type:"bubble",uid:e.uid,x:e.x,y:e.y,dur:e.dur||3,col:e.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":z({type:"swirl",uid:e.uid,x:e.x,y:e.y,dur:e.dur||4});break;case"smoke":for(let s=0;s<12;s++)z({type:"puff",x:e.x+m(-.6,.6),y:e.y+m(-.6,.6),r:m(12,22),dur:m(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const s=e.type==="firedash"?"fire":"dust",l=e.ex||e.x+(e.ux||0)*(e.range||0),u=e.ey||e.y+(e.uy||0)*(e.range||0);for(let f=0;f<30;f++){const c=f/30;I(e.x+(l-e.x)*c+m(-.2,.2),e.y+(u-e.y)*c+m(-.2,.2),.15,m(-.5,.5),m(-.5,.5),m(.3,1.2),.5+c*.4,Ot(s),4,0,s==="fire")}z({type:"streak",x:e.x,y:e.y,ex:l,ey:u,dur:.35,col:s==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const s=e.ex||e.x,l=e.ey||e.y;z({type:"flash",x:e.x,y:e.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),z({type:"flash",x:s,y:l,r:1.1,dur:.3,col:"rgba(220,170,255,"}),z({type:"streak",x:e.x,y:e.y,ex:s,ey:l,dur:.3,col:"#d8a8ff"}),mt(e.x,e.y,.4,"arcane",16,2,.5),mt(s,l,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let s=0;s<20;s++){const l=Math.random()*6.28,u=Math.random()*e.radius;I(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.1,0,0,2,.6,Ot("arcane"),2,0,!0)}break;case"starfall":for(let s=0;s<18;s++)z({type:"meteor",x:e.x+m(-1,1)*e.radius*.8,y:e.y+m(-1,1)*e.radius*.8,dur:.35,delay:s*.02});z({type:"flash",x:e.x,y:e.y,r:e.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),z({type:"ring",x:e.x,y:e.y,r:e.radius,dur:.5,col:"#e2b8ff",w:7}),mt(e.x,e.y,.2,"arcane",70,6,.8,3),On({type:"scorch",x:e.x,y:e.y,r:e.radius*.8,dur:5,col:[60,30,90]}),se(10);break;case"slash":z({type:"xslash",x:e.x,y:e.y,dur:.35}),mt(e.x,e.y,.5,"blood",20,4,.5,2,!1),mt(e.x,e.y,.5,"slash",14,4,.4),se(7);break;case"hit":{if(e.hero&&(e.kind==="hero"||e.proj)){const l=e.proj&&e.pkey||"A";if(l==="A"&&lt[e.hero]){if(Ec.has(e.hero)||Me.sfx("atk_"+e.hero,e.x,e.y,e.big?1:.8),!(e.proj&&ba.has(e.hero+"_A")))try{lt[e.hero](e)}catch(u){console.error(u)}break}if(l!=="A"&&ba.has(e.hero+"_"+l))break}const s=e.col&&br[e.col]?e.col:e.hero==="dragon"?"fire":"slash";z({type:"spark",x:e.x,y:e.y,dur:.15,big:!!e.big,col:br[s][0]}),mt(e.x,e.y,.45,s,e.big?10:5,e.big?3:2,.35,1.5,!0,2),Me.sfx(e.big||e.skill?"hitbig":"hit",e.x,e.y,e.kind==="minion"?.35:e.kind==="monster"?.6:.8),e.skill&&se(2);break}case"shoot":if(e.kind==="hero"&&e.hero){Me.sfx("shot_"+e.hero,e.x,e.y,.6);break}Me.sfx(e.proj==="arrow"?"arrow":e.proj==="tower"?"tower":e.proj==="spear"?"spear":"arcane",e.x,e.y,e.kind==="minion"?.3:.6);break;case"bite":z({type:"jaws",x:e.x,y:e.y,dur:.35}),mt(e.x,e.y,.3,"bite",24,3,.5),se(5);break;case"transform":{const s=e.kind==="fire",l=s?[255,140,50]:[255,220,90];z({type:"pillar",x:e.x,y:e.y,uid:e.uid,dur:1.2,col:l}),z({type:"ring",x:e.x,y:e.y,r:2.6,dur:.7,col:s?"#ff9a3a":"#ffe070",w:6}),mt(e.x,e.y,.6,s?"fire":"gold",70,5,.9,3,!0,4),se(e.uid===(t.player&&t.player.id)?10:4),Me.sfx("roar",e.x,e.y,.8);break}case"levelup":z({type:"pillar",x:e.x,y:e.y,uid:e.uid,dur:1,col:[255,220,90]}),z({type:"ring",x:e.x,y:e.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":e.kind==="hero"?(e.sprite&&Me.babble(e.sprite,"die",e.x,e.y),mt(e.x,e.y,.4,"smoke",22,2.5,.9,2,!1,4),z({type:"wisp",x:e.x,y:e.y,dur:1.5,team:e.team}),Me.sfx("death",e.x,e.y)):e.kind==="minion"?(mt(e.x,e.y,.3,"smoke",8,1.5,.6,1,!1,3),Me.sfx("mdeath",e.x,e.y,.3)):e.kind==="monster"&&(mt(e.x,e.y,.3,"spores",18,2.5,.8,2,!1,4),Me.sfx("mdeath",e.x,e.y,.5));break;case"towerdown":for(let s=0;s<26;s++){const l=Math.random()*6.28,u=m(1.5,5);I(e.x+m(-.3,.3),e.y+m(-.3,.3),m(.8,2.2),Math.cos(l)*u,Math.sin(l)*u,m(3,9),m(1.2,2),Ot("stone"),Math.random()*4+4|0,14,!1,.97)}for(let s=0;s<14;s++)z({type:"puff",x:e.x+m(-1.2,1.2),y:e.y+m(-1.2,1.2),r:m(26,46),dur:m(1.2,2.2),col:[150,140,130]});z({type:"pillar",x:e.x,y:e.y,dur:.8,col:[255,200,120]}),On({type:"scorch",x:e.x,y:e.y,r:1.8,dur:30}),Me.say(e.team===(t.player&&t.player.team)?"tower_ally":"tower_enemy"),Me.banner(e.team===(t.player&&t.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",e.team===(t.player&&t.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":e.type==="bossdown"&&Me.say(e.monster==="serpent"?"serpent":"boss"),mt(e.x,e.y,1,e.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let s=0;s<30;s++)I(e.x,e.y,1,m(-4,4),m(-4,4),m(3,8),1.4,Ot("stone"),5,12,!1);z({type:"flash",x:e.x,y:e.y,r:3,dur:.4,col:e.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),z({type:"ring",x:e.x,y:e.y,r:4,dur:.7,col:"#ffe0a0",w:8}),se(14);break;case"killbanner":{const s=t.player,l=s&&e.uid===s.id;if(z({type:"wisp",x:e.x,y:e.y,dur:1.6}),mt(e.x,e.y,.8,"gold",l?40:14,4,.9,3,!0,3),!e.hero)break;const u=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],f=e.big===1,c=e.big===2,h=e.dur||0,d=f?"first":e.skill>=2?"multi":c?"ace":h>=7?"godlike":h>=5?"unstoppable":h===4?"rampage":h===3?"spree":"kill",g=d==="multi"?u[Math.min(5,e.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[d],y=s&&e.team===s.team;Me.banner(g,y?"#7fd0ff":"#ff7a6a",e.hero,e.kind,!!(f||c||e.skill>=2||l));const x=s&&s.heroKey===e.kind&&s.dead&&e.team!==s.team,M=["","","double","triple","quadra","penta"];Me.say(d==="first"?"first_blood":d==="multi"?M[Math.min(5,e.skill)]:d==="kill"?x?"you_died":y?"kill":"ally_killed":d),l&&se(6);break}case"runespawn":Me.say("rune");break;case"ping":{const s=t.player;if(!s||e.team!==s.team)break;const l=e.kind==="danger"?"#ff5a4a":e.kind==="omw"?"#7fd0ff":e.kind==="missing"?"#ffd24a":"#8ae08a";for(let u=0;u<3;u++)z({type:"ring",x:e.x,y:e.y,r:1.4,dur:.9,col:l,w:4,delay:u*.18});z({type:"pingmark",x:e.x,y:e.y,dur:3,col:l,kind:e.kind}),Me.play(e.kind==="danger"?"deny":"aim",.7);break}case"laser":z({type:"streak",x:e.x,y:e.y,ex:e.ex,ey:e.ey,dur:.25,col:e.team==="blue"?"#9ae8ff":"#ffb070"}),mt(e.ex,e.ey,.5,e.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),Me.sfx("tower",e.ex,e.ey,.7);break;case"rooted":z({type:"vines",uid:e.uid,x:e.x,y:e.y,dur:e.dur||1.3});break;case"announce":if(e.snd==="end"){const s=t.player&&t.winner===t.player.team;Me.play(s?"victory":"defeat",1),Me.say(s?"victory":"defeat")}else Me.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":z({type:"flash",x:e.x+(e.ux||0)*.5,y:e.y+(e.uy||0)*.5,r:.45,dur:.15,col:e.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}qo=1,ns=1,es=null}function kc(t){for(const e of un)e.life-=t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.vz-=e.grav*t,e.vx*=e.drag,e.vy*=e.drag,e.z<0&&(e.z=0,e.vz=0);un=un.filter(e=>e.life>0),un.length>2500&&un.splice(0,un.length-2500);for(const e of Wn)e.t+=t;Wn=Wn.filter(e=>e.t<e.dur+(e.delay||0));for(const e of ur)e.t+=t;ur=ur.filter(e=>e.t<e.dur),b.cam.shake=Math.max(0,b.cam.shake-t*30)}let ui=6,Jn=0;function Dc(t,e,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=ee,f=window.MAP,c=b.T;if(ui-=t,ui<=0&&(Jn=m(.6,1),ui=m(8,16)),Jn=Math.max(0,Jn-t*.25),b.wind=.35+.15*Math.sin(c*.4)+Jn,Jn>.3&&Math.random()<Jn*.9){const h=n+Math.random()*o,p=e-20-u,g=(p/a+h/s)/2,y=(h/s-p/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];an.push({k:"leaf",x:g,y,z:m(.4,2.2),ph:Math.random()*6,life:m(2.5,4),col:x,sp:m(9,15)})}if(an.length<70&&Math.random()<.8){const h=e+Math.random()*r,d=n+Math.random()*o,p=h-u,g=d,y=(p/a+g/s)/2,x=(g/s-p/a)/2;if(y>1&&x>1&&y<l-1&&x<l-1){const M=f.grid[Math.floor(x)][Math.floor(y)];M===0||M===4?an.push({k:"fly",x:y,y:x,z:m(.2,.9),ph:Math.random()*6,life:m(4,9),vx:m(-.3,.3),vy:m(-.3,.3)}):M===3&&an.push({k:"spark",x:y,y:x,z:0,ph:Math.random()*6,life:m(.4,1),max:1})}}for(const h of an)h.life-=t,h.k==="leaf"&&(h.x+=h.sp*t*.5,h.y-=h.sp*t*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=m(-.6,.6)*t,h.vy+=m(-.6,.6)*t,h.x+=h.vx*t,h.y+=h.vy*t,h.z+=Math.sin(c*2+h.ph)*.003);if(an=an.filter(h=>h.life>0).slice(-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,p]=T(h.x,h.y);d>e&&d<e+r&&p>n&&p<n+o+100&&I(h.x+m(-.4,.4),h.y+m(-.4,.4),1.4,m(-.3,.3),m(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let P,Ro,vn=null;function Ma(t,e){P=Ro=t,vn=e||null}function Pe(t){if(!vn){P.globalCompositeOperation=t?"lighter":"source-over";return}if(t){if(P===vn)return;vn.setTransform(Ro.getTransform()),vn.globalAlpha=Ro.globalAlpha,vn.globalCompositeOperation="lighter",vn.imageSmoothingEnabled=!1,P=vn}else P=Ro}function ze(t,e,n,r,o,i=2,a){const{HW:s,HH:l}=ee,[u,f]=T(t,e);P.beginPath(),P.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(P.fillStyle=o,P.fill()),r&&(P.lineWidth=i,P.strokeStyle=r,a&&P.setLineDash(a),P.stroke(),P.setLineDash([]))}function _a(t,e,n){P.beginPath(),t.forEach(([r,o],i)=>{const[a,s]=T(r,o);i?P.lineTo(a,s):P.moveTo(a,s)}),P.closePath(),P.fillStyle=n,P.fill(),P.strokeStyle=e,P.lineWidth=2,P.stroke()}function Lc(){for(const t of ur){const e=Math.min(1,(t.dur-t.t)/1.5);if(t.type==="scorch"){const n=t.col||[30,20,15];ze(t.x,t.y,t.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*e})`)}t.type==="frost"&&ze(t.x,t.y,t.r,`rgba(220,250,255,${.5*e})`,`rgba(160,220,255,${.25*e})`,2),t.type==="wet"&&ze(t.x,t.y,t.r,null,`rgba(40,90,120,${.3*e})`)}}function Gl(t,e){if(!(e>1)){t.add&&Pe(!0),P.save();try{t.draw(P,e,t)}catch(n){console.error(n)}P.restore(),t.add&&Pe(!1)}}function qe(t){Pe(t)}function Xt(){return P}function Gc(){const{HW:t}=ee;for(const e of Wn){const n=e.t-(e.delay||0);if(n<0)continue;const r=n/e.dur;if(e.type==="custom"){e.layer==="ground"&&Gl(e,r);continue}if(e.type==="ring")P.globalAlpha=Math.max(0,1-r),ze(e.x,e.y,e.r*Math.min(1,.25+r*1.4),e.col,null,e.w*(1-r*.6)),P.globalAlpha=1;else if(e.type==="cone"){const[o,i]=T(e.x,e.y),a=Math.atan2(e.uy,e.ux);P.save(),Pe(!0),P.globalAlpha=Math.max(0,.75*(1-r)),P.beginPath(),P.moveTo(o,i);for(let f=0;f<=16;f++){const c=a-e.angle+2*e.angle*f/16,h=e.range*(.4+Math.min(1,r*3)*.6),[d,p]=T(e.x+Math.cos(c)*h,e.y+Math.sin(c)*h);P.lineTo(d,p)}P.closePath();const[s,l]=T(e.x+e.ux*e.range,e.y+e.uy*e.range),u=P.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),P.fillStyle=u,P.fill(),Pe(!1),P.restore()}else if(e.type==="cracks"){P.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,P.lineWidth=2;const o=Math.atan2(e.uy,e.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(e.angle,3)*1.6;P.beginPath();let[s,l]=T(e.x,e.y);P.moveTo(s,l);for(let u=1;u<=5;u++){const f=e.range*u/5,c=a+(It(e.seed+i*7+u)-.5)*.6;[s,l]=T(e.x+Math.cos(c)*f,e.y+Math.sin(c)*f),P.lineTo(s,l)}P.stroke()}}else if(e.type==="flash"){const[o,i]=T(e.x,e.y,.3),a=e.r*t*1.3;Pe(!0);const s=P.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,e.col+.8*(1-r)+")"),s.addColorStop(1,e.col+"0)"),P.fillStyle=s,P.fillRect(o-a,i-a,a*2,a*2),Pe(!1)}else if(e.type==="streak"){const[o,i]=T(e.x,e.y,.4),[a,s]=T(e.ex,e.ey,.4);Pe(!0),P.strokeStyle=e.col,P.globalAlpha=Math.max(0,.9*(1-r)),P.lineWidth=8*(1-r)+1,P.beginPath(),P.moveTo(o,i),P.lineTo(a,s),P.stroke(),P.globalAlpha=1,Pe(!1)}else if(e.type==="puff"){const[o,i]=T(e.x,e.y,.3+r*.4),a=e.col;P.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=e.r*(.6+r*.7);P.beginPath(),P.ellipse(o,i,s,s*.75,0,0,7),P.fill()}}}function Nc(){const t=b.T;for(const e of Wn){const n=e.t-(e.delay||0);if(n<0)continue;const r=n/e.dur;if(e.type==="custom"){e.layer!=="ground"&&Gl(e,r);continue}const o=e.uid?Ye(e.uid):null,i=o?o.x:e.x,a=o?o.y:e.y;if(e.type==="pillar"){const[s,l]=T(i,a),u=e.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));Pe(!0);const h=P.createLinearGradient(s,l,s,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),P.fillStyle=h,P.fillRect(s-18,l-f,36,f),Pe(!1)}else if(e.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=T(i,a,.35),u=e.col;Pe(!0),P.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,P.lineWidth=2,P.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,P.beginPath(),P.ellipse(s,l,34,38,0,0,7),P.fill(),P.stroke();for(let f=0;f<6;f++){const c=t*1.5+f*1.05;P.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(t*4+f)})`,P.fillRect(s+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}Pe(!1)}else if(e.type==="swirl"){if(!o||o.dead)continue;const[s,l]=T(i,a,.3);P.strokeStyle="rgba(160,255,190,0.7)",P.lineWidth=2;for(let u=0;u<3;u++){const f=t*6+u*2.1;P.beginPath(),P.ellipse(s,l,26,12,0,f,f+1.4),P.stroke()}}else if(e.type==="vines"){if(!o||o.dead)continue;const[s,l]=T(i,a);P.strokeStyle="#4a7a2a",P.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;P.beginPath(),P.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),P.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),P.stroke()}P.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;P.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(e.type==="meteor"){const[s,l]=T(e.x,e.y,3*(1-r));Pe(!0),P.strokeStyle="rgba(240,200,255,0.9)",P.lineWidth=4,P.beginPath(),P.moveTo(s-18,l-50),P.lineTo(s,l),P.stroke(),P.fillStyle="#ffffff",P.fillRect(s-3,l-3,6,6),Pe(!1)}else if(e.type==="xslash"){const[s,l]=T(e.x,e.y,.5),u=40*Math.min(1,r*3);P.globalAlpha=Math.max(0,1-r),P.strokeStyle="#ffffff",P.lineWidth=6,P.beginPath(),P.moveTo(s-u,l-u),P.lineTo(s+u,l+u),P.moveTo(s+u,l-u),P.lineTo(s-u,l+u),P.stroke(),P.strokeStyle="#ff4040",P.lineWidth=2,P.stroke(),P.globalAlpha=1}else if(e.type==="spark"){const[s,l]=T(e.x,e.y,.45),u=(e.big?16:10)*(1-r);Pe(!0),P.fillStyle=e.col,P.fillRect(s-u,l-1,u*2,3),P.fillRect(s-1,l-u,3,u*2),P.fillRect(s-u*.5,l-u*.5,u,u),Pe(!1)}else if(e.type==="jaws"){const[s,l]=T(e.x,e.y,.5),u=26*(1-Math.min(1,r*2.5));P.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",P.lineWidth=5,P.beginPath(),P.arc(s,l-u,24,.2,Math.PI-.2),P.stroke(),P.beginPath(),P.arc(s,l+u,24,Math.PI+.2,-.2),P.stroke()}else if(e.type==="pingmark"){const[s,l]=T(e.x,e.y,.9+Math.sin(t*6)*.05);Bc(e.col,Math.max(0,1-Math.max(0,r-.8)*5)),P.beginPath(),P.moveTo(s,l+14),P.lineTo(s-9,l-2),P.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),P.closePath(),P.fill(),P.stroke(),P.fillStyle="#120c1a",P.font="bold 13px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText(e.kind==="danger"?"!":e.kind==="omw"?"»":e.kind==="missing"?"?":"+",s,l-6),P.globalAlpha=1}else if(e.type==="wisp"){const[s,l]=T(e.x,e.y,.5+r*2);Pe(!0),P.fillStyle=(e.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",P.beginPath(),P.arc(s+Math.sin(r*12)*6,l,7,0,7),P.fill(),Pe(!1)}}}function Bc(t,e){P.globalAlpha=e,P.fillStyle=t,P.strokeStyle="#120c1a",P.lineWidth=2}function $c(){for(const t of un){const[e,n]=T(t.x,t.y,t.z),r=Math.min(1,t.life/t.max*1.5);t.glow?(Pe(!0),P.globalAlpha=r*.35,P.fillStyle=t.col,P.fillRect(Math.round(e-t.size),Math.round(n-t.size),t.size*2,t.size*2),P.globalAlpha=r,P.fillRect(Math.round(e-t.size/2),Math.round(n-t.size/2),t.size,t.size),Pe(!1)):(P.globalAlpha=r,P.fillStyle=t.col,P.fillRect(Math.round(e-t.size/2),Math.round(n-t.size/2),t.size,t.size))}P.globalAlpha=1}function Hc(){const t=b.T;Pe(!0);for(const e of an){const[n,r]=T(e.x,e.y,e.z);if(e.k==="leaf"){Pe(!1);const o=Math.abs(Math.sin(t*8+e.ph))*4+1;P.fillStyle="#00000040",P.fillRect(n-o/2+2,r+2,o,3),P.fillStyle=e.col,P.fillRect(n-o/2,r,o,3),Pe(!0);continue}if(e.k==="fly"){const o=.5+.5*Math.sin(t*3+e.ph);P.fillStyle=`rgba(210,255,120,${.25*o})`,P.fillRect(n-3,r-3,6,6),P.fillStyle=`rgba(250,255,200,${.9*o})`,P.fillRect(n-1,r-1,2,2)}else{const o=Math.max(0,Math.sin(e.life*Math.PI));P.fillStyle=`rgba(255,255,255,${.7*o})`,P.fillRect(n-1,r,3,1),P.fillRect(n,r-1,1,3)}}Pe(!1)}function Wc(t){if(typeof t!="string"||!/^\d+[QWERA]$/.test(t))return null;const e=window.SIM.HERO_KEYS[parseInt(t,10)];return e?e+"_"+t.slice(-1):null}function Xc(){const{HW:t,HH:e}=ee,n=b.T;for(const r of b.game.projs){const o=r.z||.45,[i,a]=T(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*e,((r.vx||0)-(r.vy||0))*t),l=Wc(r.look||r.fx),u=l?At[l]:void 0;if(u){P.save();try{u(P,r,i,a,s,n)}catch(c){console.error(c)}P.restore(),Pe(!1);continue}const f=br[r.fx]||br.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;P.save(),P.translate(i,a),P.rotate(s),P.fillStyle="#3a2a1a",P.fillRect(-c,-2,c,4),P.fillStyle="#e8d8b0",P.fillRect(-c,-1,c,2),P.fillStyle="#ffffff",P.beginPath(),P.moveTo(5,0),P.lineTo(-2,-4),P.lineTo(-2,4),P.fill(),P.fillStyle="#e05050",P.fillRect(-c-3,-3,5,2),P.fillRect(-c-3,1,5,2),P.restore(),r.skill&&I(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")P.save(),P.translate(i,a),P.rotate(n*25),P.fillStyle="#1a1020",P.fillRect(-9,-3,18,6),P.fillStyle="#e0e8f0",P.fillRect(-8,-2,14,4),P.fillStyle="#c8a040",P.fillRect(-10,-3,4,6),P.restore();else if(r.fx==="root")P.fillStyle="#5a3a20",P.beginPath(),P.arc(i,a,7,0,7),P.fill(),P.fillStyle="#8ad050",P.beginPath(),P.arc(i+3,a-3,4,0,7),P.fill(),I(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;Pe(!0);const h=P.createRadialGradient(i,a,0,i,a,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),P.fillStyle=h,P.fillRect(i-c*2.4,a-c*2.4,c*4.8,c*4.8),Pe(!1),P.fillStyle=f[0],P.fillRect(i-3,a-3,6,6),Math.random()<.8&&I(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const he=Math.round,W={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function Et(t,e,n,r,o){t.fillStyle=o,t.fillRect(he(e-r/2),he(n-r/2),r,r)}const Vc=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1,fi={};function Yc(t){if(fi[t])return fi[t];const e=[];for(let n=-t;n<=t;n++)for(let r=-t;r<=t;r++){const o=Math.hypot(r,n);o<=t+.5&&o>t-.5&&e.push([r,n])}return fi[t]=e}function Mr(t,e,n,r,o,i,a,s=1,l=1,u=!1){const f=Yc(r);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];t.fillStyle=h+d>r*.6?a:i,t.fillRect(he(e+h*o*s-o/2),he(n+d*o*l-o/2),o,o)}u||(t.fillStyle=W.white,t.fillRect(he(e-r*o*.45*s-o/2),he(n-r*o*.5*l-o/2),o,o))}function qc(t,e,n,r,o,i,a=1,s=1){t.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));t.fillRect(he(e-u*o*a),he(n+l*o*s-o/2),he(u*2*o*a),o)}}function Kc(t,e){if(t._aw||!t.hit)return;t._aw=1;let n=0;z({type:"custom",layer:"top",dur:(t.life||2)+.3,x:t.x,y:t.y,draw(r,o,i){for(;n<t.hit.size;)n++,e(t.x,t.y);t.life<=0&&(i.dur=0)}})}const Sa=["#.#","###",".#.",".#."];function jc(t,e){z({type:"custom",layer:"top",dur:.3,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),a=4+he(r*5);n.globalAlpha=1-r,Mr(n,o,i,a,2,W.pink1,W.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;Et(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?W.white:W.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=m(0,6.283),o=m(1,2.5);I(t,e,.5,Math.cos(r)*o,Math.sin(r)*o,m(1,2.5),.4,n<3?W.water:W.pink1,2,8,!1)}for(let n=0;n<3;n++)I(t,e,.5,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3),.5,n%2?W.coral:W.orange,3,10,!1)}te.ajolote_Q=t=>{if(t.type!=="cast_splash")return!1;const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);z({type:"custom",layer:"top",dur:.35,x:e,y:n,draw(l,u){const[f,c]=T(e,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=s+(h-1)*.5,p=10+u*(22+h*6);Mr(l,f+Math.cos(d)*p,c+Math.sin(d)*p-u*8,1+h%2,2,W.pink2,W.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(e+r*.4,n+o*.4,.5,r*m(1,2.5)+m(-.5,.5),o*m(1,2.5)+m(-.5,.5),m(.5,1.5),.35,l%2?W.water:W.pink1,2,6,!1);return!0};At.ajolote_Q=(t,e,n,r,o,i)=>{Kc(e,jc);const a=Math.sin(i*17+e.x*2)*.13,s=1+a,l=1-a;t.globalAlpha=.35,qc(t,n,r,6,2,W.pink2,s,l),t.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<Sa.length;h++)for(let d=0;d<3;d++)Sa[h][u?2-d:d]==="#"&&Et(t,n-2+d*2,r-3+h*2,2,h<1?W.orange:W.coral);Mr(t,n,r,6,2,W.pink2,W.coral2,s,l);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,p=Math.sin(i*12+h*2)*3;Mr(t,n-f*d-c*p,r-c*d+f*p,2-(h>>1),2,W.pink1,W.pink2)}Math.random()<.35&&I(e.x,e.y,(e.z||.45)+.05,m(-.2,.2),m(-.2,.2),.6,.45,W.pink1,2,-.5,!1)};function Zc(t,e){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return z({type:"custom",layer:"top",dur:.85,x:t,y:e,draw(r,o){const i=o*.85,[a,s]=T(t,e);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=a+n[l][0],h=s+n[l][1]-u*6;if(u<f)Mr(r,c,h,2,2,W.pink2,W.coral);else if(u<f+.3){const d=(u-f)/.3,p=he(h-d*14),g=he(c);r.globalAlpha=1-d,r.fillStyle=W.pink1,r.fillRect(g-4,p-1,8,2),r.fillRect(g-1,p-4,2,8),r.fillStyle=W.white;for(const[y,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(g+y*(.6+d),p+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}te.ajolote_W=t=>{if(t.type==="heal")return Zc(t.x,t.y);if(t.type!=="healring")return!1;const e=t.x,n=t.y,r=t.radius||2.5,o=t.uid,i=1.3,a=[-.55,-.15,.25];z({type:"custom",layer:"top",dur:.9,x:e,y:n,draw(u,f){const c=Ye(o),[h,d]=T(c?c.x:e,c?c.y:n,.85),p=Math.min(1,f*5),g=f>.6?(1-f)/.4:1;u.globalAlpha=g;for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const M=y>0?a[x]:Math.PI-a[x],v=Math.sin(f*16+x*1.3)*.12,_=M+v*y,S=Math.cos(_),R=Math.sin(_),F=he(22*p)-(x===1?0:4);for(let O=6;O<=F;O+=2)Et(u,h+S*O,d+R*O,2,O>F-2?W.pink1:W.gill),O%4===0&&O>8&&(Et(u,h+S*O-R*3,d+R*O+S*3,2,W.pink2),Et(u,h+S*O+R*3,d+R*O-S*3,2,W.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+m(-.12,.12));z({type:"custom",layer:"ground",dur:1,x:e,y:n,draw(u,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),p=he(d*3)*2,[g,y]=T(e+Math.cos(s[c])*r,n+Math.sin(s[c])*r),x=he(g),M=he(y);u.fillStyle=W.coral,u.fillRect(x-1,M-2,2,4),!(p<2)&&(u.fillStyle=W.pink2,u.fillRect(x-p-1,M-3,2,2),u.fillRect(x+p-1,M-3,2,2),u.fillRect(x-1,M-3-p,2,2),u.fillRect(x-p+1,M-1-p,2,2),u.fillRect(x+p-3,M-1-p,2,2),u.fillStyle=W.pink1,u.fillRect(x-1,M-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=m(0,6.283),c=r*.9*Math.sqrt(Math.random());l.push({x:e+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:m(0,.35),pop:m(.4,.9),ph:m(0,6.283),done:!1})}return z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[p,g]=T(h.x,h.y,.1+Math.min(d,h.pop)*.9),y=p+Math.sin(d*9+h.ph)*3;if(d<h.pop){Mr(u,y,g,h.n,2,W.pink2,W.coral);continue}h.done||(h.done=!0,I(h.x,h.y,.1+h.pop*.9,m(-.5,.5),m(-.5,.5),.8,.5,W.pink1,2,0,!0),I(h.x,h.y,.1+h.pop*.9,m(-.5,.5),m(-.5,.5),.5,.4,W.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const M=h.n*2+2+x*6;for(const[v,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])Et(u,y+v*M,g+_*M,2,W.pink1);u.globalAlpha=1}}}),!0};function Qc(t,e,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)Et(t,e-r*s,n-o*s,2,s>18?W.coral2:W.orange);for(let s=-6;s<=6;s+=2)Et(t,e+i*s,n+a*s,2,W.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)Et(t,e+i*s+r*u,n+a*s+o*u,2,u>=l-1?W.white:W.pink1)}}te.ajolote_E=t=>{if(t.type!=="dust")return!1;const e=t.x,n=t.y,r=t.ex||e+(t.ux||0)*(t.range||0),o=t.ey||n+(t.uy||0)*(t.range||0),i=Math.max(.12,t.dur||.28),a=i+.6,s=Math.hypot(r-e,o-n),l=(r-e)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,p=c/h,g=Math.max(2,Math.ceil(s/.1)),y={n:0,end:!1};return z({type:"custom",layer:"ground",dur:a,x:e,y:n,draw(x,M){const v=M*a,_=Math.min(1,v/i);for(let S=0;S<=g*_;S++){const R=S/g,F=v-R*i,O=Math.max(0,1-F/.55);if(O<=0)continue;const[k,U]=T(e+(r-e)*R,n+(o-n)*R),B=U+Math.sin(R*14-v*25)*2,H=he(4+6*R);x.globalAlpha=O,x.fillStyle=W.pink2,x.fillRect(he(k)-H,he(B)-3,H*2,1),x.fillRect(he(k)-H,he(B)+2,H*2,1),x.fillStyle=W.water,x.fillRect(he(k)-H,he(B)-2,H*2,4),S%3===0&&(x.fillStyle=W.white,x.fillRect(he(k)-1,he(B)-1,3,2))}if(x.globalAlpha=1,_<1&&y.n<22)for(let S=0;S<2;S++){y.n++;const R=e+(r-e)*_,F=n+(o-n)*_;I(R,F,.2,-l*m(.5,1.5)+m(-.8,.8),-u*m(.5,1.5)+m(-.8,.8),m(1,2.5),.45,S?W.water:W.pink1,2,8,!1)}if(!y.end&&_>=1){y.end=!0;for(let S=0;S<10;S++)I(r+l*.4,o+u*.4,.4,l*m(1.5,3.5)+m(-.8,.8),u*m(1.5,3.5)+m(-.8,.8),m(1,3),.5,S%2?W.water:W.white,2,9,!1);se(4)}}}),z({type:"custom",layer:"top",dur:i+.25,x:e,y:n,draw(x,M){const v=M*(i+.25),_=Math.min(1,v/i),[S,R]=T(e+(r-e)*_,n+(o-n)*_,.5);if(x.globalAlpha=_<1?1:Math.max(0,1-(v-i)/.25),Qc(x,S+d*10,R+p*10,d,p),_>=1){const F=(v-i)/.25,O=6+F*30;for(const k of[-6,0,6])for(let U=12;U<12+O;U+=2)Et(x,S+d*(10+U)-p*k,R+p*(10+U)+d*k,2,U>8+O?W.pink1:W.white)}x.globalAlpha=1}}),!0};function Jc(t,e,n,r,o){const i=he(e),a=he(n),s=(It(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=he(u*s),c=u<r*.5?6:4;t.fillStyle=W.coral,t.fillRect(i+f-c/2,a-u-2,c,2),t.fillStyle=W.deep,t.fillRect(i+f+c/2-2,a-u-2,2,2)}const l=It(o+3)<.5?-1:1;for(const[u,f,c]of[[.35+It(o+1)*.15,.38,l],[.58+It(o+2)*.12,.28,-l]]){const h=r*u,d=i+he(h*s),p=r*f;let g=d,y=a-h;for(let x=0;x<p;x+=2)g=d+c*(3+x*.7),y=a-h-x,t.fillStyle=W.coral2,t.fillRect(he(g)-2,he(y)-2,4,2);t.fillStyle=W.pink1,t.fillRect(he(g)-2,he(y)-4,4,2)}t.fillStyle=W.pink1,t.fillRect(i+he(r*s)-2,a-r-3,4,3)}te.ajolote_R=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+s*.4+m(-.15,.15);i.push({x:e+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+s*.13+m(0,.05),H:m(24,40)*(s?1:.85),seed:m(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=T(f.x,f.y);s.fillStyle=W.hole,s.fillRect(he(c)-6,he(h)-2,12,4),s.fillRect(he(c)-3,he(h)-3,6,6)}s.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.7,x:e,y:n,draw(s,l){const u=-l*12.6,f=Vc(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const p=d/18,g=u+p*1.9,[y,x]=T(e+Math.cos(g)*h,n+Math.sin(g)*h,.45);s.globalAlpha=f*(1-p),Et(s,y,x,p<.15?3:2,p<.15?W.white:c===1?W.pink2:W.water)}}s.globalAlpha=1}}),z({type:"custom",layer:"top",dur:o,x:e,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,I(f.x,f.y,.1,m(-1,1),m(-1,1),m(2,3.5),.5,Math.random()<.5?W.coral:W.orange,3,10,!1),I(f.x,f.y,.1,m(-1,1),m(-1,1),m(2,4),.45,W.water,2,10,!1));const c=a(f,u);if(c<2)continue;const[h,d]=T(f.x,f.y);Jc(s,h,d,he(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=m(0,6.283),u=m(2,5);I(e+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,m(3,6),m(.7,1),[W.water,W.pink1,W.white,W.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return se(9),!0};lt.ajolote=t=>{const e=t.x,n=t.y,r=!!t.big,o=Ye(t.uid);let i=1,a=0;if(o){const d=e-o.x,p=n-o.y,g=Math.hypot(d,p);g>.05&&(i=d/g,a=p/g)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,c=l/u;z({type:"custom",layer:"top",add:!0,dur:.22,x:e,y:n,draw(d,p){const[g,y]=T(e,n,.5),x=(r?20:14)*Math.min(1,p*4);d.globalAlpha=1-p;for(const M of[-5,0,5])for(let v=-x/2;v<=x/2;v+=2)Et(d,g+f*v-c*M,y+c*v+f*M,2,v>x/2-4?W.white:W.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)I(e,n,.45,i*m(.5,2)+m(-.7,.7),a*m(.5,2)+m(-.7,.7),m(1,2.5),.35,d%2?W.pink1:W.water,2,8,!1)};const fe=Math.round,j={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function vt(t,e,n,r,o){t.fillStyle=o,t.fillRect(fe(e-r/2),fe(n-r/2),r,r)}const rs=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1;function Ko(t,e,n,r,o,i,a){const s=e.length,l=e[0].length,u=fe(n-l*o/2),f=fe(r-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<l;h++){const d=a[e[c][h]];d&&(t.fillStyle=d,t.fillRect(u+h*o,f+c*i,o,i))}}function ai(t,e,n,r,o,i,a,s,l,u){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,p=e-r*h,g=n-o*h,y=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=y;x+=2){const M=x>y-2?s:l,v=x*.5;((h>>1)+(x>>1))%4!==3&&vt(t,p+f*x-r*v,g+c*x-o*v,2,M),((h>>1)+(x>>1)+2)%4!==3&&vt(t,p-f*x-r*v,g-c*x-o*v,2,M)}vt(t,p,g,2,u)}}function jo(t,e,n,r,o,i,a){const s=fe(e),l=fe(n);for(let u=0;u<r;u+=2){const f=Math.max(2,fe(o*(1-u/r)/2)*2),c=fe(u*i),h=a<0?l-u-2:l+u;t.fillStyle=j.ice3,t.fillRect(s+c-f/2,h,f,2),t.fillStyle=j.ice1,t.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}t.fillStyle=j.snow,t.fillRect(s+fe(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function Nl(t,e){if(t._bw||!t.hit&&!t.homing)return;t._bw=1;let n=0;z({type:"custom",layer:"top",dur:(t.life||3)+.3,x:t.x,y:t.y,draw(r,o,i){if(t.homing){if(t.life<=0){const a=t.homing;!n&&Math.hypot(a.x-t.x,a.y-t.y)<1.2&&e(a.x,a.y),n=1,i.dur=0}return}for(;n<t.hit.size;)n++,e(t.x,t.y);t.life<=0&&(i.dur=0)}})}function eh(t,e){z({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)vt(n,o+u*(a+h),i+f*(a+h),2,h>=c-2?j.snow:j.ice2)}if(r<.35){const s=fe(10*(1-r/.35))+2;n.fillStyle=j.snow,n.fillRect(fe(o)-s/2,fe(i)-s/2,s,s)}n.globalAlpha=1}}),z({type:"custom",layer:"top",dur:.6,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;ai(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,j.ice3,j.ice1,j.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=m(0,6.283),o=m(1.2,3);I(t,e,.5,Math.cos(r)*o,Math.sin(r)*o,m(.5,2),.4,n%2?j.ice2:j.ice3,2,6,!1)}}te.buho_Q=t=>{if(t.type!=="cast_frost")return!1;const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);z({type:"custom",layer:"top",dur:.32,x:e,y:n,draw(l,u){const[f,c]=T(e,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=s+(h-2)*.32,p=8+u*28,g=Math.cos(d),y=Math.sin(d);ai(l,f+g*p,c+y*p,g,y,10,3,j.ice3,j.ice1,j.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(e+r*.4,n+o*.4,.6,r*m(.5,1.5)+m(-.4,.4),o*m(.5,1.5)+m(-.4,.4),m(0,.6),.45,j.snow,2,.5,!0);return!0};At.buho_Q=(t,e,n,r,o,i)=>{Nl(e,eh);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(e.x+e.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;qe(!0);const c=Xt();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,vt(c,n-a*h*6,r-s*h*6,8-h,h<3?j.ice2:j.ice3);c.globalAlpha=1,qe(!1),ai(t,u,f,a,s,24,6,j.ice3,j.ice1,j.snow),Math.random()<.55&&I(e.x,e.y,e.z||.45,m(-.3,.3),m(-.3,.3),m(-.2,.3),.5,Math.random()<.5?j.snow:j.ice1,2,0,!0)};const th=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],nh=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];te.buho_W=t=>{if(t.type!=="frost")return!1;const e=t.x,n=t.y,r=t.radius||2,o=2.4;z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(s,l){const u=rs(l,.08,.75);ze(e,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),z({type:"custom",layer:"ground",add:!0,dur:o,x:e,y:n,draw(s,l){const u=rs(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,p]of[[r,40],[r*.82,34]])for(let g=0;g<p;g++){if(g%5===4)continue;const y=g/p*6.283+(d===r?f:-f),[x,M]=T(e+Math.cos(y)*d,n+Math.sin(y)*d);vt(s,x,M,2,j.ice2)}for(let d=0;d<8;d++){const p=d/8*6.283+f,[g,y]=T(e+Math.cos(p)*r*.91,n+Math.sin(p)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,Ko(s,th[d%4],g,y,2,2,{"#":j.ice1})}const[c,h]=T(e,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),Ko(s,nh,c,h,3,2,{"#":j.ice2,o:j.amber,v:j.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+m(-.3,.3),u=r*(.3+.55*Math.sqrt(It(s+e*7.3)));i.push({x:e+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:m(16,28),lean:m(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};z({type:"custom",layer:"top",dur:o,x:e,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,p]=T(c.x,c.y),g=c.h*h*(1-f);g<2||(jo(s,d,p,g,8,c.lean,-1),jo(s,d+c.side*6,p+2,g*.6,6,c.lean+c.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const c of i)for(let h=0;h<2;h++)I(c.x,c.y,.25,m(-1.5,1.5),m(-1.5,1.5),m(1,2.5),.45,h?j.ice2:j.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=m(0,6.283),u=m(0,r);I(e+Math.cos(l)*u,n+Math.sin(l)*u,m(.6,1.4),m(-.6,.6)+.8,m(-.6,.6)-.4,-.6,m(.6,1),Math.random()<.6?j.snow:j.ice1,2,-.5,!1,.98)}return!0};const Bl=["......####","...#######","##########",".#########","..#.#.#.#."],rh=Bl.map(t=>t.split("").reverse().join(""));te.buho_E=t=>{if(t.type!=="blink")return!1;const e=t.x,n=t.y,r=t.ex||e,o=t.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:m(-45,45),vy:m(-55,-15),ph:m(0,6.283),L:Math.random()<.4?12:9});z({type:"custom",layer:"top",dur:1,x:e,y:n,draw(a,s){const l=s*1,[u,f]=T(e,n,.6);a.globalAlpha=rs(s,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,p=f+c.vy*l+60*l*l,g=Math.PI/2+h*.9;ai(a,d+Math.cos(g)*c.L*.5,p+Math.sin(g)*c.L*.5,Math.cos(g),Math.sin(g),c.L,3,j.ice3,j.ice1,j.snow)}a.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=T(e+(r-e)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=fe(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=j.ice1,a.fillRect(fe(c)-d,fe(h),d*2,1),a.fillRect(fe(c),fe(h)-d,1,d*2)}a.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=T(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,Ko(a,Bl,l+f+15,u-s*6,3,3,{"#":j.ice1}),Ko(a,rh,l-f-15,u-s*6,3,3,{"#":j.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)I(e+m(-.3,.3),n+m(-.3,.3),m(.3,.9),m(-.8,.8),m(-.8,.8),m(-.3,.4),m(.6,1),j.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=m(0,6.283),l=m(1,2.5);I(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,m(0,1),.5,a%3?j.ice1:j.moon2,2,1,!0)}return!0};function wa(t,e,n,r,o,i,a){t.fillStyle=a;const s=fe(e),l=fe(n),u=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=u*u-f*f,d=-c,p=c;if(h<=0){t.fillRect(s+fe(d),l+fe(f*i),fe(p-d),Math.max(1,fe(2*i)));continue}const g=Math.sqrt(h),y=o-g,x=o+g;y>d&&t.fillRect(s+fe(d),l+fe(f*i),fe(Math.min(p,y)-d),Math.max(1,fe(2*i))),x<p&&t.fillRect(s+fe(x),l+fe(f*i),fe(p-x),Math.max(1,fe(2*i)))}}const Ir=[];function Ca(t,e,n){z({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:e,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=T(t+Math.cos(s)*i,e+Math.sin(s)*i);vt(r,l,u,a%3?2:3,a%2?j.ice2:j.moon)}r.globalAlpha=1}}),z({type:"custom",layer:"ground",dur:2.2,x:t,y:e,draw(r,o){ze(t,e,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),se(9)}te.buho_R=t=>{if(t.type==="starfall"){const u=Ir.findIndex(f=>Math.abs(f.x-t.x)<.3&&Math.abs(f.y-t.y)<.3);return u>=0?Ir.splice(u,1):Ca(t.x,t.y,t.radius||3.4),!0}if(t.type!=="cast_stars")return!1;const e=t.x,n=t.y,r=t.radius||3.4,o=.85,i=1.75,a={x:e,y:n,t:0};Ir.push(a),Ir.length>6&&Ir.shift(),z({type:"custom",layer:"ground",add:!0,dur:i,x:e,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.15)*(c>o?Math.max(0,1-(c-o)/.6):1);u.globalAlpha=h;for(const[g,y,x]of[[r,56,1],[r*.9,48,-1]])for(let M=0;M<y;M++){if((M+(x>0?0:2))%4===3)continue;const v=M/y*6.283+c*.7*x,[_,S]=T(e+Math.cos(v)*g,n+Math.sin(v)*g);vt(u,_,S,2,x>0?j.moon2:j.ice2)}for(let g=0;g<12;g++){const y=g/12*6.283-c*.35,[x,M]=T(e+Math.cos(y)*r*.62,n+Math.sin(y)*r*.62),[v,_]=T(e+Math.cos(y)*r*.82,n+Math.sin(y)*r*.82);for(let S=0;S<=4;S++)vt(u,x+(v-x)*S/4,M+(_-M)*S/4,2,j.moon)}const[d,p]=T(e,n);if(wa(u,d,p,30,12,.5,j.moon),c>.45){const g=Math.min(1,(c-.45)/.1);u.globalAlpha=h*g,vt(u,d-26,p-3,4,j.amber),vt(u,d+26,p-3,4,j.amber)}u.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:i,x:e,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.2)*(c>o?Math.max(0,1-(c-o)/.5):1),[d,p]=T(e,n,4.4),g=u.createRadialGradient(d,p,4,d,p,60);g.addColorStop(0,`rgba(200,190,255,${.45*h})`),g.addColorStop(1,"rgba(120,110,220,0)"),u.fillStyle=g,u.fillRect(fe(d)-60,fe(p)-60,120,120),u.globalAlpha=h,wa(u,d,p,20,9,1,j.moon),u.globalAlpha=1}});const s=[];for(let u=0;u<14;u++){const f=m(0,6.283),c=r*.85*Math.sqrt(Math.random());s.push({x:e+Math.cos(f)*c,y:n+Math.sin(f)*c,fall:o-.12+u*.025,ap:.08+u*.025,L:m(18,28),hit:!1})}s.sort((u,f)=>u.x+u.y-(f.x+f.y));const l={boom:!1};z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(u,f){const c=f*i;for(const h of s){const d=(c-h.fall)/.12;if(d>=1){if(!h.hit){h.hit=!0;for(let v=0;v<3;v++)I(h.x,h.y,.1,m(-1.8,1.8),m(-1.8,1.8),m(1.5,3),.45,v?j.ice2:j.snow,2,10,!0)}const M=(c-h.fall-.12)/.2;if(M<1){const[v,_]=T(h.x,h.y),S=fe(10*(1-M))+2;u.globalAlpha=1-M,u.fillStyle=j.snow,u.fillRect(fe(v)-S,fe(_)-1,S*2,2),u.fillRect(fe(v)-1,fe(_)-S/2,2,S),u.globalAlpha=1}continue}const p=Math.min(1,Math.max(0,(c-h.ap)/.25));if(p<=0)continue;const g=d>0?3.6*(1-d*d):3.6+Math.sin(c*9+h.x)*.03,[y,x]=T(h.x,h.y,g);u.globalAlpha=p,d>0&&(u.fillStyle="rgba(226,247,255,0.5)",u.fillRect(fe(y)-1,fe(x)-h.L-30,2,28)),jo(u,y,x-h.L,h.L,7,0,1),u.globalAlpha=1}!l.boom&&c>=o&&(l.boom=!0,a.t===0&&(a.t=1,Ca(e,n,r)))}});for(let u=0;u<10;u++){const f=m(0,6.283),c=m(0,r);I(e+Math.cos(f)*c,n+Math.sin(f)*c,.05,0,0,m(1,2),.7,u%2?j.moon2:j.ice1,2,0,!0)}return!0};function $l(t,e,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:m(-9,9),oy:m(-3,4),h:m(8,n?16:12),lean:m(-.35,.35)});z({type:"custom",layer:"top",dur:.38,x:t,y:e,draw(i,a){const[s,l]=T(t,e,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)jo(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=m(0,6.283),s=m(.8,2);I(t,e,.4,Math.cos(a)*s,Math.sin(a)*s,m(.5,1.8),.35,i%2?j.snow:j.ice2,2,5,!0)}}const Hl=[];for(let t=-4;t<=4;t++)for(let e=-4;e<=4;e++){const n=Math.hypot(e,t);n<=4.4&&Math.hypot(e-1.6,t)>3.4&&Hl.push([e,t,n>3.6?1:0])}At.buho_A=(t,e,n,r,o,i)=>{Nl(e,(h,d)=>$l(h,d,!1));const a=Math.cos(o),s=Math.sin(o);qe(!0);const l=Xt();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,vt(l,n-a*h*5,r-s*h*5,6-h,j.moon2);l.globalAlpha=1,qe(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,p]of Hl)vt(t,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,p?j.ice3:j.ice1);vt(t,n+-3*f*2,r+-3*c*2,2,j.snow),Math.random()<.45&&I(e.x,e.y,e.z||.45,0,0,-.2,.35,j.ice1,2,0,!0)};lt.buho=t=>$l(t.x,t.y,!!t.big);let De=0,Le=0;function Pt(t,e,n=0){De=(t-e)*ee.HW+ee.OX,Le=(t+e)*ee.HH-n*ee.ZK}function yt(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const Wl=t=>t<0?0:t>1?1:t,Xe=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],oh="#3a2420",qs="#2a1410",Ks=t=>t>=5?oh:Xe[t<0?0:t|0];function Zo(t,e,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);t.fillRect(Math.round(e-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}te.dragon_Q=t=>{const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=t.range||3.4,a=t.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=s+(h/(l-1)-.5)*a*1.5;const p=i*m(.7,1);for(let g=0;g<=u;g++){const y=.35+(p-.35)*g/u;d+=m(-.13,.13);const x=(h*(u+1)+g)*2;f[x]=e+Math.cos(d)*y,f[x+1]=n+Math.sin(d)*y}}const c=(h,d,p)=>{const g=Wl(d/.25)*u;for(let y=0;y<l;y++)for(let x=0;x<u&&x<g;x++){const M=Math.min(1,g-x),v=(y*(u+1)+x)*2;Pt(f[v],f[v+1]);const _=De,S=Le;Pt(f[v+2],f[v+3]);const R=_+(De-_)*M,F=S+(Le-S)*M,O=Math.max(1,Math.round(Math.hypot(R-_,F-S)/3)),k=p*(1-x/u*.5);for(let U=0;U<=O;U++)yt(h,_+(R-_)*U/O,S+(F-S)*U/O,k)}};z({type:"custom",layer:"ground",dur:1.8,x:e,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=qs,c(h,d*1.8,6)}}),z({type:"custom",layer:"ground",add:!0,dur:1.4,x:e,y:n,draw(h,d){const p=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Ks(p/.3),c(h,p,3)}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(h,d){for(let p=0;p<4;p++){const g=d*1.5-p*.13;if(g<=0||g>=1)continue;const y=.4+(i-.4)*g,x=a*(.45+.55*g),M=5+Math.round(y*3);h.globalAlpha=1-g,h.fillStyle=Xe[Math.min(3,p+(g*2|0))];for(let v=0;v<=M;v++){const _=s+(v/M-.5)*2*x,S=y*(.9+.1*Math.sin(v*2.3+p*1.7));Pt(e+Math.cos(_)*S,n+Math.sin(_)*S,.35+.12*Math.sin(v*1.3+d*18)),yt(h,De,Le,8-p-g*4)}}}});for(let h=0;h<32;h++){const d=s+m(-a,a)*.9,p=m(.3,1)*i*2.4;I(e+r*.45,n+o*.45,.45,Math.cos(d)*p,Math.sin(d)*p,m(1.2,3),m(.7,1.05),Xe[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+m(-a,a),p=m(.6,1)*i*3.2;I(e+r*.45,n+o*.45,.5,Math.cos(d)*p,Math.sin(d)*p,m(.4,1.4),.35,Xe[0],2,1,!0,.98)}se(3)};const ih=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],os=[],Xl=[],Vl=[];ih.forEach((t,e)=>{for(let n=0;n<t.length;n++){const r="Ohrd".indexOf(t[n]);r>=0&&(os.push(n-2),Xl.push(e),Vl.push(r))}});const Yl=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function sh(t,e,n,r,o){for(let i=0;i<4;i++){t.fillStyle=o?i===0?"#ffd84a":Xe[0]:Yl[i];for(let a=0;a<os.length;a++)Vl[a]===i&&t.fillRect(Math.round(e+os[a]*r),Math.round(n+Xl[a]*r),r,r)}}te.dragon_W=t=>{const e=t.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)I(i+m(-.3,.3),a+m(-.3,.3),m(.2,.8),m(-1.8,1.8),m(-1.8,1.8),m(1.5,3),m(.5,.8),Yl[2+(s&1)],4,9,!1,.95)};z({type:"custom",layer:"top",dur:e,x:t.x,y:t.y,uid:t.uid,lx:t.x,ly:t.y,draw(i,a,s){const l=Ye(s.uid),u=a*e;if(!l||l.dead||b.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let p=0;p<n+r;p++){const g=p<n?0:1,M=(g?p-n:p)/(g?r:n)*Math.PI*2+(g?-u*1.1+.3:u*.8),v=Math.sin(M)>0;if(d===0===v)continue;const _=p*.035,S=Wl((u-_)/.08);if(S<=0)continue;const R=(g?22:30)*c,F=(g?8:11)*c;Pt(l.x,l.y,g?.62:.22),i.globalAlpha=v?1:.4,sh(i,De+Math.cos(M)*R,Le+Math.sin(M)*F-10*(1-S)-6*c,h,u-_<.12)}i.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.28,x:t.x,y:t.y,draw(i,a){Pt(t.x,t.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=Xe[1];for(let l=2;l<s;l+=3)yt(i,De+l,Le+l*.7,4),yt(i,De-l,Le+l*.7,4),yt(i,De+l,Le-l*.7,4),yt(i,De-l,Le-l*.7,4);i.fillStyle=Xe[0],yt(i,De,Le,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;I(t.x+Math.cos(a)*.4,t.y+Math.sin(a)*.4,.05,0,0,m(.6,1.2),m(.5,.8),Xe[1+i%3],2,-1,!0,.9)}};te.dragon_E=t=>{const e=t.x,n=t.y,r=t.dur||.3,o=t.ex??e+(t.ux||0)*(t.range||0),i=t.ey??n+(t.uy||0)*(t.range||0),a=o-e,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let p=0;p<c;p++){const g=(p+.5)/c,y=m(-.16,.16);h[p*4]=e+a*g-f*y,h[p*4+1]=n+s*g+u*y,h[p*4+2]=m(18,30),h[p*4+3]=g*r}const d=r+1.9;z({type:"custom",layer:"ground",dur:d,x:e,y:n,draw(p,g){const y=g*d;for(let x=0;x<c;x++){const M=y-h[x*4+3];if(M<0)continue;const v=M>1.5?Math.max(0,1-(M-1.5)/.4):1;if(v<=0)continue;Pt(h[x*4],h[x*4+1]);const _=h[x*4+2];p.globalAlpha=v*.8,p.fillStyle=qs,Zo(p,De,Le+1,_+6);const S=M/.3|0;p.globalAlpha=v,p.fillStyle=Ks(S),Zo(p,De,Le,_*(S<5?.8:.6)),S<4&&It(x*7+(y*12|0))>.72&&(p.fillStyle=Xe[0],p.fillRect(Math.round(De+(It(x*3+(y*12|0))-.5)*_*.5),Math.round(Le-2),2,2))}p.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:r+.12,x:e,y:n,uid:t.uid,n:0,end:!1,draw(p,g,y){const x=Ye(y.uid),M=x?x.x:o,v=x?x.y:i;Pt(M,v,.4);const _=De,S=Le;Pt(M+u,v+f,.4);let R=De-_,F=Le-S;const O=Math.hypot(R,F)||1;R/=O,F/=O;const k=1-g*.6;for(let U=0;U<9;U++){const B=(10+U*5*(.8+Math.random()*.4))*k;p.globalAlpha=1-U/10,p.fillStyle=Xe[Math.min(4,U>>1)],yt(p,_-R*B+(Math.random()-.5)*3,S-F*B+(Math.random()-.5)*3,(10-U)*k)}if(y.n<22&&g<.9){for(let U=0;U<2;U++){const B=m(-2.5,2.5);I(M,v,.35,-u*2-f*B,-f*2+u*B,m(.5,1.6),.5,Xe[1+(Math.random()*3|0)],3,4,!0)}y.n+=2}if(!y.end&&g>.85){y.end=!0;for(let U=0;U<8;U++){const B=U/8*6.28;I(M,v,.1,Math.cos(B)*2.5+u,Math.sin(B)*2.5+f,.4,.6,U&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let p=0;p<8;p++){const g=p/8*6.28;I(e,n,.1,Math.cos(g)*3,Math.sin(g)*3,.3,.5,p&1?"#6a5a56":"#40322e",5,0,!1,.9)}se(4)};const zo=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],Oo=[],ql=[],Kl=[];zo.forEach((t,e)=>{for(let n=0;n<t.length;n++){const r=t[n];if(r===".")continue;const o=(i,a)=>a<0||a>=zo.length||i<0||i>=t.length||zo[a][i]===".";Oo.push(n-9),ql.push(e),Kl.push(r==="o"?2:o(n-1,e)||o(n+1,e)||o(n,e-1)||o(n,e+1)?1:0)}});const ah=["#ff7a20","#ffd84a","#fffbe0"];te.dragon_R=t=>{const e=t.x,n=t.y,r=t.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=e+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}z({type:"custom",layer:"ground",dur:2.6,x:e,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const p=c-d*.05;p<0||(Pt(s[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=qs,Zo(u,De,Le+1,46),u.globalAlpha=h,u.fillStyle=Ks(p/.45),Zo(u,De,Le,26))}u.globalAlpha=1}}),z({type:"custom",layer:"ground",add:!0,dur:.4,x:e,y:n,draw(u,f){const c=r*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const p=d/h*6.28;Pt(e+Math.cos(p)*c,n+Math.sin(p)*c),u.fillStyle=Xe[d&1],yt(u,De,Le,7*(1-f)+2)}}}),z({type:"custom",layer:"top",add:!0,dur:1.15,x:e,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const p=h-d*.05;if(p<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let _=0;_<5;_++)I(s[d],l[d],.3,m(-.8,.8)+(s[d]-e)*.4,m(-.8,.8)+(l[d]-n)*.4,m(3,5),m(.6,.9),Xe[_%4],3,6,!0,.97)}const g=p<.12?p/.12:p<.4?1:Math.max(0,1-(p-.4)/.35);if(g<=0)continue;const y=95*g;Pt(s[d],l[d]);const x=De,M=Le;u.globalAlpha=Math.min(1,g*1.5);const v=h*24|0;for(let _=0;_<y;_+=4){const S=_/y,R=16*(1-S*.75)+(It(d*31+_+v)-.5)*4,F=(It(d*17+_*3+v)-.5)*7*S;if(u.fillStyle=S<.25?Xe[1]:S<.6?Xe[2]:Xe[3],u.fillRect(Math.round(x+F-R/2),Math.round(M-_-4),Math.round(R),4),S<.7){u.fillStyle=Xe[0];const O=R*.4;u.fillRect(Math.round(x+F-O/2),Math.round(M-_-4),Math.max(2,Math.round(O)),4)}}}}}),z({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:e,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,Pt(e,n,h);const p=De,g=Le-zo.length*d*.5;for(let y=0;y<3;y++){u.fillStyle=ah[y];for(let x=0;x<Oo.length;x++){if(Kl[x]!==y)continue;const M=Math.abs(Oo[x]),v=M>=4?Math.round(Math.sin(c*14)*(M-3)*.45):0;u.fillRect(Math.round(p+Oo[x]*d-d/2),Math.round(g+(ql[x]+v)*d),d,d)}}}}),se(9)};lt.dragon=t=>{const e=t.x,n=t.y,r=!!t.big;for(let o=0;o<(r?8:5);o++)I(e,n,.45,m(-1.3,1.3),m(-1.3,1.3),m(1.6,3.2),m(.3,.5),o<3?Xe[0]:Xe[1],2,10,!0,.97);I(e,n,.45,m(-.5,.5),m(-.5,.5),1,.45,Xe[2],3,8,!0,.95),z({type:"custom",layer:"top",add:!0,dur:.2,x:e,y:n,draw(o,i){Pt(e,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?Xe[1]:Xe[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),c=a*u*.7;yt(o,De+f,Le+c,3),yt(o,De-c/.7,Le+f*.7,3),yt(o,De-f,Le-c,3),yt(o,De+c/.7,Le-f*.7,3)}i<.3&&(o.fillStyle=Xe[0],yt(o,De,Le,6))}})};const ot="#fff2d6",zt="#e2b878",_r="#9a6232",Kn="#4e2e16",ho="#e8643a",ro="#ffcc66",js="#a07a48",dt=Math.round,Sn=Math.PI*2;function je(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(dt(e),dt(n),r,o)}function qt(t,e,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=a;for(let l=0;l<=s;l++)t.fillRect(dt(e+(r-e)*l/s-i/2),dt(n+(o-n)*l/s-i/2),i,i)}function Sr(t,e,n,r,o,i=ho){const a=Math.max(3,Math.ceil(Math.hypot(r-e,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;t.fillStyle=l<.3?_r:l>.82?i:ot,t.fillRect(dt(e+(r-e)*l-u/2),dt(n+(o-n)*l-u/2),u,u)}}function ci(t,e,n,r,o){t.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=dt(Math.sqrt(Math.max(0,r*r-i*i)));t.fillRect(dt(e-a),dt(n+i),a*2,2)}}function jl(t,e){const n=(t-e)*ee.HW,r=(t+e)*ee.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Zl=t=>{const e=Ye(t);return e&&!e.dead&&!nt(e)?e:null},lh=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},uh=t=>(t=Math.min(1,Math.max(0,t))-1,1+2.9*t*t*t+1.9*t*t);At.erizo_A=(t,e,n,r,o)=>{t.translate(dt(n),dt(r)),t.rotate(o),je(t,-15,-2,16,4,Kn),je(t,-14,-1,14,2,zt),je(t,-9,-1,3,2,ot),je(t,-4,-1,3,2,ot),je(t,0,-2,3,4,Kn),je(t,3,-1,3,2,ho),je(t,6,0,2,1,ro),je(t,-17,-4,5,2,ot),je(t,-17,2,5,2,ot),Math.random()<.3&&I(e.x,e.y,e.z||.45,0,0,-.3,.25,zt,2,0,!1)};lt.erizo=t=>{const e=Array.from({length:t.big?4:3},()=>({a:m(0,Sn),l:m(8,12)}));z({type:"custom",layer:"top",dur:.4,x:t.x,y:t.y,draw(n,r){const[o,i]=T(t.x,t.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of e)Sr(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)I(t.x,t.y,.45,m(-2,2),m(-2,2),m(.5,2),.3,n%2?zt:ot,2,6,!1)};At.erizo_Q=(t,e,n,r,o,i)=>{const s=e.z||.45;t.translate(dt(n),dt(r)),t.rotate(o),je(t,-31,-3,32,6,Kn);for(let u=0;u<30;u+=6)je(t,-30+u,-2,3,4,ot),je(t,-30+u+3,-2,3,4,_r);je(t,0,-3,4,6,Kn),je(t,4,-2,4,4,ho),je(t,8,-1,3,2,ro);for(let u=0;u<3;u++)je(t,-36+u*3,-6+u,4,2,ot),je(t,-36+u*3,4-u,4,2,ot);qe(!0);const l=Xt();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=ro;for(let u=0;u<5;u++)l.fillRect(-6-u*6,dt(Math.sin(i*38+u*1.3)*5)-1,2,2);qe(!1),Math.random()<.5&&I(e.x,e.y,s,m(-.4,.4),m(-.4,.4),.3,.35,Math.random()<.5?ot:zt,2,3,!1)};te.erizo_Q=t=>{if(t.type!=="cast_arrow")return;const e=t.ux||0,n=t.uy||0,[r,o]=jl(e,n),i=-o,a=r;z({type:"custom",layer:"top",dur:.32,x:t.x,y:t.y,draw(l,u){const[f,c]=T(t.x+e*.35,t.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),p=f+r*d,g=c+o*d,y=f+i*15-r*5,x=c+a*15-o*5,M=f-i*15-r*5,v=c-a*15-o*5;l.globalAlpha=1-u,qt(l,f+r*3,c+o*3,y,x,3,_r),qt(l,f+r*3,c+o*3,M,v,3,_r),qt(l,y,x,p,g,2,ot),qt(l,M,v,p,g,2,ot)}}),z({type:"custom",layer:"top",add:!0,dur:.14,x:t.x,y:t.y,draw(l,u){const[f,c]=T(t.x+e*.5,t.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const p=Math.cos(d),g=Math.sin(d),y=r*p-o*g,x=r*g+o*p,M=d?h*.55:h;qt(l,f,c,f+y*M,c+x*M,3,ro),qt(l,f,c,f+y*M*.5,c+x*M*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)I(t.x-e*.2,t.y-n*.2,.4,-e*m(1,2.5)+m(-.5,.5),-n*m(1,2.5)+m(-.5,.5),m(.3,1),.45,l%2?zt:js,3,2,!1,.9);const s=Math.atan2(n,e);for(let l=0;l<7;l++){const u=s+m(-.25,.25),f=m(5,9);I(t.x+e*.5,t.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,m(0,.6),.22,l%2?ro:ot,2,0,!0,.86)}se(1.5)};te.erizo_W=t=>{const e=t.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=Zl(t.uid);if(!l)return;const u=a*s.dur,f=u<.2?uh(u/.2):u>e?Math.max(0,1-(u-e)/.25):1;if(f<=0)return;const[c,h]=T(l.x,l.y,.4);for(let d=0;d<n;d++){const p=d/n*Sn+.17,g=Math.sin(p);if(g>=0!==o)continue;const y=u<e?Math.sin(b.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,M=c+Math.cos(p)*16,v=h+g*12,_=M+Math.cos(p)*x+y,S=v+g*x*.75-x*.3;Sr(i,M,v,_,S,(b.T*7+d*.37)%1<.12?"#ffffff":ho)}};z({type:"custom",layer:"ground",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!1)}),z({type:"custom",layer:"top",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!0)}),z({type:"custom",layer:"ground",dur:.35,x:t.x,y:t.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*Sn,[u,f]=T(t.x+Math.cos(l)*a,t.y+Math.sin(l)*a),[c,h]=T(t.x+Math.cos(l)*(a+.22),t.y+Math.sin(l)*(a+.22));qt(o,u,f,c,h,2,s%2?zt:_r)}}});for(let o=0;o<14;o++){const i=o/14*Sn,a=m(2,3.5);I(t.x,t.y,.45,Math.cos(i)*a,Math.sin(i)*a,m(1.5,3),.5,o%3?ot:zt,2,8,!1,.92)}se(2)};te.erizo_E=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=Math.max(.12,t.dur||.25),o=e-t.x,i=n-t.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=jl(o,i),c=u>=0?1:-1;z({type:"custom",layer:"top",dur:r+.12,x:t.x,y:t.y,draw(p,g,y){const x=g*y.dur,M=Math.min(1,x/r);let v=t.x+o*M,_=t.y+i*M;const S=Ye(t.uid);if(S){if(S.dead||nt(S))return;v=S.x,_=S.y}const[R,F]=T(v,_,.32),O=16,k=x*36*c;p.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let U=0;U<3;U++){const B=(U-1)*9;qt(p,R-u*(O+4)-f*B,F-f*(O+4)+u*B,R-u*(O+18+U*5)-f*B,F-f*(O+18+U*5)+u*B,2,zt)}ci(p,R,F,O+1,Kn),ci(p,R,F,O-1,_r),ci(p,R-4,F-4,O-9,zt);for(let U=0;U<10;U++){const B=k+U*Sn/10,H=Math.cos(B),Y=Math.sin(B);Sr(p,R+H*(O-3),F+Y*(O-3),R+H*(O+10),F+Y*(O+10))}}});const h=Math.max(4,Math.min(10,dt(a*2.2))),d=Array.from({length:h},(p,g)=>({k:(g+.5)/h,o:m(-.28,.28),lean:m(-6,6),h:m(9,14)}));z({type:"custom",layer:"ground",dur:r+1.8,x:t.x,y:t.y,draw(p,g,y){const x=g*y.dur,M=Math.min(1,(y.dur-x)/.5);for(const v of d){if(x<v.k*r)continue;const _=Math.min(1,(x-v.k*r)/.08),[S,R]=T(t.x+o*v.k+s*v.o,t.y+i*v.k+l*v.o);p.globalAlpha=M*.45,je(p,S-4,R-1,8,3,Kn),p.globalAlpha=M,Sr(p,S+v.lean*_,R-v.h*_,S,R)}}});for(let p=0;p<12;p++){const g=Math.random();I(t.x+o*g+m(-.2,.2),t.y+i*g+m(-.2,.2),.1,m(-.6,.6),m(-.6,.6),m(.5,1.4),m(.4,.7),p%2?zt:js,3,4,!1,.9)}for(let p=0;p<6;p++){const g=p%2?1:-1;I(t.x,t.y,.35,s*g*m(2,4),l*g*m(2,4),m(1.5,3),.45,ot,2,8,!1,.92)}se(2)};te.erizo_R=t=>{if(t.type!=="cast_arrows")return;const e=t.radius||3,n=lh(t),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(l,u)=>{const f=Math.random()*Sn,c=Math.sqrt(Math.random())*e*.95;return{x:t.x+Math.cos(f)*c,y:t.y+Math.sin(f)*c,t0:.12+u/i*(r-.5)+m(0,.08),lean:m(-7,7),h:m(10,15),hit:!1}});z({type:"custom",layer:"ground",dur:r+.5,x:t.x,y:t.y,draw(l,u,f){const c=u*f.dur,h=Math.min(1,(f.dur-c)/.5),d=e*(c<.3?1.5-.5*(c/.3):1);l.globalAlpha=.85*h;for(let p=0;p<8;p++){const g=p*Sn/8+c*.4;for(const y of[-.09,.09]){const[x,M]=T(t.x+Math.cos(g+y)*d,t.y+Math.sin(g+y)*d),[v,_]=T(t.x+Math.cos(g)*(d-.35),t.y+Math.sin(g)*(d-.35));qt(l,x,M,v,_,3,ho)}}l.globalAlpha=.45*h;for(let p=0;p<48;p++){const g=p/48*Sn-c*.2,[y,x]=T(t.x+Math.cos(g)*e,t.y+Math.sin(g)*e);je(l,y-1,x-1,2,2,zt)}for(const p of a){if(c<p.t0+o)continue;const[g,y]=T(p.x,p.y);l.globalAlpha=.4*h,je(l,g-4,y-1,8,3,Kn),l.globalAlpha=h,Sr(l,g+p.lean,y-p.h,g,y)}}}),z({type:"custom",layer:"top",dur:r+.2,x:t.x,y:t.y,draw(l,u,f){const c=u*f.dur;for(const h of a){const d=(c-h.t0)/o;if(d<0)continue;if(d>=1){h.hit||(h.hit=!0,I(h.x,h.y,.05,m(-.6,.6),m(-.6,.6),m(.8,1.6),.4,Math.random()<.5?zt:js,2,7,!1));continue}const[p,g]=T(h.x,h.y,3.6*(1-d)),y=h.lean*1.4;l.globalAlpha=.35,qt(l,p+y*2.4,g-52,p+y,g-22,1,ot),l.globalAlpha=1,Sr(l,p+y,g-22,p,g)}}});const s=Zl(t.uid);if(s)for(let l=0;l<10;l++)I(s.x,s.y,.6,m(-.4,.4),m(-.4,.4),m(7,10),.45,l%2?ot:zt,2,0,!1,1);se(2)};let Ee=0,Ue=0;function ft(t,e,n=0){Ee=(t-e)*ee.HW+ee.OX,Ue=(t+e)*ee.HH-n*ee.ZK}function Nt(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const Zs=t=>t<0?0:t>1?1:t,Ql=t=>1-(1-t)*(1-t),Te=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],at=["#ffe0f4","#ff9ad8","#e060b0"],Tn=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],rt=["#ffffff","#fff2a0","#ffd24a"];function Qs(t,e,n,r){const o=[],i=[],a=[],s=[],l=t.length,u=(f,c)=>c<0||c>=l||f<0||f>=t[c].length||e.indexOf(t[c][f])<0;return t.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=e.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),a.push(d),s.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const hi=Qs(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function Jl(t,e,n,r){for(let o=0;o<hi.n;o++)t.fillRect(Math.round(e+hi.X[o]*r-r/2),Math.round(n+hi.Y[o]*r-r/2),r,r)}function Nn(t,e,n,r){Nt(t,e,n,3);for(let o=2;o<=r;o+=2)Nt(t,e+o,n+o,2),Nt(t,e-o,n+o,2),Nt(t,e+o,n-o,2),Nt(t,e-o,n-o,2)}function is(t,e,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,c=Math.sin(l)*r*i,h=Math.cos(u)*r,d=Math.sin(u)*r*i,p=Math.max(2,Math.round(r*1.41/(a+1)));for(let g=0;g<p;g++){const y=g/p;Nt(t,e+f+(h-f)*y,n+c+(d-c)*y,a)}}}function Aa(t,e,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));t.fillRect(Math.round(e-i/2),Math.round(n+o),Math.round(i),2)}}const Er=new Map;function eu(t,e,n=!1){if(t.id==null)return;let r=Er.get(t.id);if(!r){Er.size>200&&Er.clear(),r={x:t.x,y:t.y,life:9,tx:0,ty:0,tgt:!1,crit:n},Er.set(t.id,r);const o=t.id;z({type:"custom",layer:"ground",dur:(t.life||3)+.6,x:t.x,y:t.y,draw(i,a,s){if(s.fin)return;const l=b.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,Er.delete(o),e(r)}}})}r.x=t.x,r.y=t.y,r.life=t.life==null?9:t.life,t.homing&&!t.homing.dead&&(r.tgt=!0,r.tx=t.homing.x,r.ty=t.homing.y)}te.gato_Q=t=>{const e=t.x+(t.ux||0)*.5,n=t.y+(t.uy||0)*.5;z({type:"custom",layer:"top",add:!0,dur:.32,x:e,y:n,draw(r,o){ft(e,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=Te[1],is(r,Ee,Ue,i,o*Math.PI,.75,3),r.fillStyle=at[1],is(r,Ee,Ue,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=Te[0],Nt(r,Ee,Ue,4)}});for(let r=0;r<6;r++)I(e,n,.45,m(-1,1),m(-1,1),m(.3,1),.4,r&1?at[1]:Te[1],2,0,!0)};At.gato_Q=(t,e,n,r,o,i)=>{eu(e,fh);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let h=1;h<16;h++){const d=8+h*3.2,p=Math.sin(h*.7-i*22)*(2+h*.35);t.globalAlpha=1-h/16,t.fillStyle=h&1?at[1]:at[2],t.fillRect(Math.round(n+a*d+l*p),Math.round(r+s*d+u*p),2,2)}t.globalAlpha=1,qe(!0);const f=Xt();f.fillStyle=Te[3],f.globalAlpha=.16,Aa(f,n,r,20),f.globalAlpha=.22,Aa(f,n,r,13),f.globalAlpha=1,qe(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const p=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(p>9)continue;let g;p>6?g=Te[4]:d===-2&&h===-2?g=Te[0]:g=((d*.8+h+c)%4+4)%4<1.3?Te[1]:Te[2],t.fillStyle=g,t.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function fh(t){const e=t.x,n=t.y;if(t.life<.07){for(let o=0;o<6;o++)I(e,n,.45,m(-.6,.6),m(-.6,.6),m(0,.6),.4,o&1?at[1]:Te[2],2,1,!0);return}const r=Math.random()*6.28;z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(o,i){ft(e,n,.45);const a=Math.round(14*Zs(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,c=l+u*.3;o.fillStyle=u+s&1?at[1]:Te[1],o.fillRect(Math.round(Ee+Math.cos(c)*f),Math.round(Ue+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=Te[0],Nt(o,Ee,Ue,10*(1-i*3)))}});for(let o=0;o<10;o++)I(e,n,.45,m(-1.4,1.4),m(-1.4,1.4),m(.5,1.5),m(.4,.6),o&1?at[0]:Te[1],2,2,!0);se(2)}const rn=Qs(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);te.gato_W=t=>{const e=t.x,n=t.y,r=t.radius||2.8,o=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,p=Math.cos(d),g=Math.sin(d),y=Math.atan2(p+g,p-g),x=y+Math.PI/2,M=Math.cos(x),v=Math.sin(x),_=new Float32Array(rn.n*2);for(let S=0;S<rn.n;S++)_[S*2]=rn.X[S]*M-rn.Y[S]*v,_[S*2+1]=rn.X[S]*v+rn.Y[S]*M;o.push({x:e+p*u,y:n+g*u,t:f+h*.014,c:_})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),z({type:"custom",layer:"ground",dur:1.6,x:e,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const p=d<.08?1.4-d/.08*.4:1,g=3*p,y=Math.max(2,Math.round(g*.6)),x=Math.round(g);ft(h.x,h.y),l.globalAlpha=c*.9;for(let M=0;M<3;M++){l.fillStyle=M===0?Tn[3]:M===1?Tn[1]:Tn[0];for(let v=0;v<rn.n;v++){const _=rn.B[v]===1,S=rn.Y[v]<0;(M===0?!_:M===1?_||S:_||!S)||l.fillRect(Math.round(Ee+h.c[v*2]*g-x/2),Math.round(Ue+h.c[v*2+1]*g*.5-y/2),x,y)}}}l.globalAlpha=1}});const s=Math.random()*6.28;z({type:"custom",layer:"ground",add:!0,dur:.55,x:e,y:n,draw(l,u){const f=r*Ql(Zs(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),p=Math.sin(h);for(let g=.25;g<f;g+=.16)ft(e+d*g,n+p*g),l.fillStyle=g<f*.5?Tn[1]:Tn[2],Nt(l,Ee,Ue,4-g/r*2);if(f>r*.4){const g=f*.6;for(let y=-1;y<=1;y+=2){const x=h+y*.75;for(let M=.12;M<.45;M+=.12)ft(e+d*g+Math.cos(x)*M,n+p*g+Math.sin(x)*M),l.fillStyle=Tn[0],Nt(l,Ee,Ue,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;I(e+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,m(.3,1.1),Math.cos(u)*m(.5,2),Math.sin(u)*m(.5,2),m(0,.4),m(.7,1.1),Tn[l%2],2,.5,!0,.95)}se(4)};const Pn=Qs([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);te.gato_E=t=>{const e=t.x,n=t.y,r=t.ex??e,o=t.ey??n,i=Math.random()*99;z({type:"custom",layer:"top",add:!0,dur:.85,x:e,y:n,draw(a,s){ft(e,n);const l=3,u=Ee,f=Ue-2;for(let c=0;c<3;c++){a.fillStyle=c===0?Te[3]:c===1?Te[1]:rt[1];for(let h=0;h<Pn.n;h++){if((Pn.K[h]===1?2:Pn.B[h]?1:0)!==c)continue;const p=It(h*7.13+i),g=-Pn.Y[h]/(Pn.h-1);p*.6+g*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+Pn.X[h]*l-l/2),Math.round(f+Pn.Y[h]*l-s*18*p),l,l))}}}}),z({type:"custom",layer:"top",add:!0,dur:.45,x:e,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(ft(e+(r-e)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-c,a.fillStyle=u&1?at[1]:Te[1],Nn(a,Ee,Ue,8*(1-c)+2))}}}),z({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){ft(r,o,1.05);const l=Ee,u=Ue,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let p=0;p<5;p++){const g=c[p]*2,y=Math.max(1,Math.round(2*f));a.fillStyle=p===0||p===4?rt[2]:rt[1],a.fillRect(Math.round(d-g/2),Math.round(u+(p-2.5)*2*f),g,y)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=at[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=Te[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)I(e,n,.5,m(-.8,.8),m(-.8,.8),m(.5,1.5),.5,Te[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;I(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,m(.2,1),.45,a&1?at[1]:Te[1],2,0,!0,.9)}};const mo=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],di=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],mi=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0];te.gato_R=t=>{if(t.type==="starfall")return;const e=t.x,n=t.y,r=t.radius||3,o=1,i=r*.8*ee.HW*Math.SQRT2;z({type:"custom",layer:"ground",add:!0,dur:1.1,x:e,y:n,draw(x,M){const v=M*1.1;ft(e,n);const _=Ee,S=Ue;x.globalAlpha=M>.85?(1-M)/.15:1;const R=mi.length/2,F=Zs(v/.45)*R;x.fillStyle=Te[1];for(let O=0;O<R&&O<F;O++){const k=mi[O*2],U=mi[O*2+1],B=Math.min(1,F-O),H=_+mo[k]*i,Y=S+di[k]*i*.55,ne=_+mo[U]*i,ue=S+di[U]*i*.55,w=Math.hypot(ne-H,ue-Y)*B,C=Math.round(w/6);for(let A=0;A<=C;A++){const E=A*6/(w||1)*B;x.fillRect(Math.round(H+(ne-H)*E),Math.round(Y+(ue-Y)*E),2,2)}}for(let O=0;O<mo.length;O++)x.fillStyle=O>=9?rt[2]:rt[1],Nn(x,_+mo[O]*i,S+di[O]*i*.55,3+3*(.5+.5*Math.sin(b.T*9+O*1.7)))}});const a=12,s=new Float32Array(a),l=new Float32Array(a),u=new Float32Array(a);for(let x=0;x<a;x++){const M=Math.random()*6.28,v=Math.sqrt(Math.random())*r*.9;s[x]=e+Math.cos(M)*v,l[x]=n+Math.sin(M)*v,u[x]=.45+x/(a-1)*.55+m(-.03,.03)}const f=.32,c=Math.hypot(40,4.5*ee.ZK),h=40/c,d=-352.8/c;z({type:"custom",layer:"top",add:!0,dur:1.2,x:e,y:n,landed:0,draw(x,M,v){const _=M*1.2;for(let S=0;S<a;S++){const R=_-(u[S]-f);if(!(R<0))if(R<f){const F=R/f;ft(s[S],l[S],4.5*(1-F));const O=Ee+(1-F)*40,k=Ue;for(let U=-1;U<=1;U++){const B=U*.12,H=h*Math.cos(B)-d*Math.sin(B),Y=h*Math.sin(B)+d*Math.cos(B);x.fillStyle=U===0?at[1]:Te[1];for(let ne=1;ne<10;ne++)x.globalAlpha=1-ne/10,x.fillRect(Math.round(O+H*ne*3.2+U*3),Math.round(k+Y*ne*3.2),2,2)}x.globalAlpha=1,x.fillStyle=rt[1],x.fillRect(Math.round(O-6),Math.round(k-1),12,2),x.fillRect(Math.round(O-1),Math.round(k-6),2,12),x.fillStyle=rt[0],x.fillRect(Math.round(O-2),Math.round(k-2),4,4)}else{if(!(v.landed&1<<S)){v.landed|=1<<S;for(let O=0;O<2;O++)I(s[S],l[S],.1,m(-1,1),m(-1,1),m(1,2),.45,O?rt[1]:at[1],2,4,!0)}const F=(R-f)/.2;if(F>=1)continue;ft(s[S],l[S]),x.globalAlpha=1-F,x.fillStyle=rt[1],Nn(x,Ee,Ue,2+F*8)}}x.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:e,y:n,boom:!1,draw(x,M,v){if(!v.boom){v.boom=!0,se(8);for(let O=0;O<28;O++){const k=Math.random()*6.28,U=m(1,3.5);I(e,n,.3,Math.cos(k)*U,Math.sin(k)*U,m(1.5,3.5),m(.5,.8),[rt[1],Te[1],at[1],Te[0]][O&3],3,5,!0,.95)}}const _=.3+(r-.3)*Ql(M),S=M*2;ft(e,n,.2);const R=Ee,F=Ue;if(M<.35){const O=1-M/.35;x.fillStyle=Te[1],x.globalAlpha=O*.25,x.fillRect(Math.round(R-70),Math.round(F-35),140,70),x.globalAlpha=O*.4,x.fillRect(Math.round(R-40),Math.round(F-20),80,40),x.fillStyle=Te[0],x.globalAlpha=O*.7,x.fillRect(Math.round(R-15),Math.round(F-8),30,16)}x.globalAlpha=1-M*M;for(let O=0;O<10;O++){const k=S+O/10*6.28;ft(e+Math.cos(k)*_,n+Math.sin(k)*_,.35+.2*Math.sin(M*6+O)),x.fillStyle=O&1?rt[2]:rt[1],Jl(x,Ee,Ue,3),x.fillStyle=rt[0],x.fillRect(Math.round(Ee-1),Math.round(Ue-1),2,2)}}});const p=24,g=new Float32Array(p),y=new Float32Array(p);for(let x=0;x<p;x++){const M=Math.random()*6.28,v=Math.sqrt(Math.random())*r;g[x]=e+Math.cos(M)*v,y[x]=n+Math.sin(M)*v}z({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:e,y:n,draw(x,M){const v=b.T*8|0;for(let _=0;_<p;_++){const S=It(_*13+v);S<.25||(ft(g[_],y[_]),x.globalAlpha=(1-M)*S,x.fillStyle=_%3?Te[1]:rt[1],x.fillRect(Math.round(Ee),Math.round(Ue),2,2))}}})};At.gato_A=(t,e,n,r,o,i)=>{const a=!!(e.dmg&&e.src&&e.dmg>(e.src.ad||0)*1.3);eu(e,ch,a),qe(!0);const s=Xt(),l=Math.cos(o),u=Math.sin(o);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?at[1]:Te[1],Nt(s,n-l*h*5,r-u*h*5,4-h*.6);s.globalAlpha=1;const f=a?7:5,c=(i*16|0)&1;if(s.fillStyle=Te[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(s.fillStyle=at[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=rt[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}qe(!1)};function tu(t,e,n){z({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:t,y:e,draw(r,o){ft(t,e,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=Te[1],is(r,Ee,Ue,i,Math.PI/4,.75,2),r.fillStyle=at[1],Nn(r,Ee+i,Ue,3),Nn(r,Ee-i,Ue,3),Nn(r,Ee,Ue+i*.75,3),Nn(r,Ee,Ue-i*.75,3),n&&(r.fillStyle=rt[1],Jl(r,Ee,Ue-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)I(t,e,.45,m(-1,1),m(-1,1),m(.3,1.2),.35,n&&r&1?rt[1]:Te[1],2,1,!0)}function ch(t){const e=t.tgt?t.tx:t.x,n=t.tgt?t.ty:t.y;tu(e,n,t.crit),Me.sfx("atk_gato",e,n,t.crit?.9:.6)}lt.gato=t=>tu(t.x,t.y,!!t.big);let ve=0,be=0;function tt(t,e,n=0){ve=(t-e)*ee.HW+ee.OX,be=(t+e)*ee.HH-n*ee.ZK}function Ht(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const oo=t=>t<0?0:t>1?1:t,io=t=>(t-=1,1+t*t*((2.2+1)*t+2.2)),Zt=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],er=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Qt=["#8a6a48","#5a3a20","#3a2414"],xn=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Zr=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function nu(t,e){const n=[],r=[],o=[];return t.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=e.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:t[0].length,h:t.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function ss(t,e,n,r,o,i,a=-1){const s=Math.round(n-e.w*o/2),l=Math.round(r-e.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){t.fillStyle=i[u];for(let f=0;f<e.x.length;f++)e.c[f]===u&&t.fillRect(s+e.x[f]*o,l+e.y[f]*o,o,o)}}const hh=nu(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),dh=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],Ta=nu(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),Pa=[Zr[3],Zr[2],Zr[0],"#4a2a6a","#e0d8f0","#a898c0"],Ur=new Map;function mh(t,e){if(t.id==null)return;let n=Ur.get(t.id);if(!n){Ur.size>200&&Ur.clear(),n={x:t.x,y:t.y,life:9,tx:0,ty:0,tgt:!1},Ur.set(t.id,n);const r=t.id;z({type:"custom",layer:"ground",dur:(t.life||3)+.6,x:t.x,y:t.y,draw(o,i,a){if(a.fin)return;const s=b.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,Ur.delete(r),e(n)}}})}n.x=t.x,n.y=t.y,n.life=t.life==null?9:t.life,t.homing&&!t.homing.dead&&(n.tgt=!0,n.tx=t.homing.x,n.ty=t.homing.y)}te.hongo_Q=t=>{const e=t.x,n=t.y,r=t.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,c=u===0?0:r*m(.45,.9);i[u*4]=e+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:m(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;s[u]=e+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}z({type:"custom",layer:"ground",dur:2.2,x:e,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<a;h++){const d=oo((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(tt(s[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=Zt[1+h%3],u.fillRect(Math.round(ve),Math.round(be),h%3?3:4,2))}u.globalAlpha=1}}),z({type:"custom",layer:"top",dur:.95,x:e,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<o;d++){const p=i[d*4+3],g=p-.16,y=i[d*4+2];if(tt(i[d*4],i[d*4+1]),h<p){if(h<g)continue;const v=io(oo((h-g)/.13)),_=y*v*(1+.12*Math.sin(h*60+d)),S=Math.max(1,Math.round(_*2/3));for(let R=0;R<S;R++){const F=(R+.5)/S*2-1,O=_*2*Math.sqrt(1-F*F);u.fillStyle=R===0?er[0]:F<.3?er[1]:er[2],u.fillRect(Math.round(ve-O/2),Math.round(be-_*2+R*3),Math.max(1,Math.round(O)),3)}u.fillStyle=er[3],u.fillRect(Math.round(ve-_*.2),Math.round(be-_*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let v=0;v<4;v++)I(i[d*4],i[d*4+1],.25,m(-.6,.6),m(-.6,.6),m(.4,1.1),m(.9,1.4),Zt[v%3],3,.25,!1,.92)}const x=(h-p)/.35;if(x>=1)continue;const M=y*(.6+x*2.2);u.globalAlpha=1-x;for(let v=0;v<8;v++){const _=v/8*6.28+d;u.fillStyle=Zt[v&1?1:2],Ht(u,ve+Math.cos(_)*M,be-y+Math.sin(_)*M*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=er[0];for(let v=0;v<3;v++)Ht(u,ve+(v-1)*y*.6,be-y-x*8-(v&1)*4,y*(.8+x*.6));u.globalAlpha=1}}}),se(2)};te.hongo_W=t=>{if(t.type==="heal"){const i=t.x,a=t.y;z({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?io(l/.2):l>.8?(1-l)/.2:1,c=3;tt(i,a,1.35);const h=ve,d=be,p=[4,8,10,12,12];for(let g=0;g<5;g++){const y=Math.round(p[g]*f)*c;y<=0||(s.fillStyle=g===0?xn[1]:xn[2],s.fillRect(Math.round(h-y/2),Math.round(d+(g-5)*c*f),y,Math.max(1,Math.round(c*f))))}s.fillStyle=xn[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=xn[0],Ht(s,h-3*c*f,d-3*c*f,3*f),Ht(s,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,I(i+m(-.25,.25),a+m(-.25,.25),1.25,0,0,0,.5,u.drops&1?xn[0]:xn[1],2,6,!0,1))}});return}const e=t.x,n=t.y,r=(t.radius||4)*.78,o=12;z({type:"custom",layer:"top",dur:1.5,x:e,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=b.T;for(let f=0;f<o;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/o*6.28,p=e+Math.cos(d)*r,g=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let S=0;S<2;S++)I(p,g,.2,m(-.2,.2),m(-.2,.2),m(.8,1.6),m(.7,1.1),xn[S],2,0,!0,.95)}const y=io(oo(h/.18)),x=a>.8?(1-a)/.2:1,M=Math.max(1,Math.round(3*y*x)),v=Math.abs(Math.sin(u*9+f*1.3))*5*x,_=Math.round(Math.sin(u*6+f)*2);tt(p,g),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(ve-9),Math.round(be-1),18,3),i.globalAlpha=1,ss(i,hh,ve+_,be-v,M,dh)}}}),z({type:"custom",layer:"ground",add:!0,dur:1.5,x:e,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;tt(e+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=xn[u%3+1],Ht(i,ve,be,u%3?3:4)}}})};te.hongo_E=t=>{const e=t.x+(t.ux||0)*.5,n=t.y+(t.uy||0)*.5;z({type:"custom",layer:"ground",dur:.7,x:e,y:n,draw(r,o){tt(e,n),r.globalAlpha=1-o,r.fillStyle=Qt[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)Ht(r,ve+Math.cos(a+s*.25)*s*3.5,be+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)I(e,n,.1,m(-1.2,1.2),m(-1.2,1.2),m(1.5,3),m(.4,.6),Qt[r%3],3,9,!1,.95)};const Ra=10;At.hongo_E=(t,e,n,r,o,i)=>{mh(e,ph);const a=Math.hypot(e.vx||0,e.vy||0)||1,s=-(e.vx||0)/a,l=-(e.vy||0)/a;tt(e.x,e.y),t.fillStyle=Qt[1],t.fillRect(Math.round(ve-8),Math.round(be-1),16,4),t.fillStyle=Qt[0],t.fillRect(Math.round(ve-5),Math.round(be-2),10,2);for(let u=Ra-1;u>=0;u--){const f=e.x+s*u*.17,c=e.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/Ra);tt(f,c,h);const d=7-u*.45;t.fillStyle=Qt[2],Ht(t,ve,be+1,d+2),t.fillStyle=u&1?"#7a5030":"#6a4428",Ht(t,ve,be,d),t.fillStyle="#a07040",t.fillRect(Math.round(ve-d/4),Math.round(be-d/2),2,1),(u===3||u===7)&&(t.fillStyle=Zt[2],t.fillRect(Math.round(ve+d/2),Math.round(be-d/2-1),2,2))}tt(e.x,e.y,.12+.2*Math.max(0,Math.sin(i*14))),t.fillStyle=Zt[3],t.fillRect(Math.round(ve-2),Math.round(be-6),4,7),t.fillStyle=Zt[1],t.fillRect(Math.round(ve-6),Math.round(be-6),4,2),t.fillRect(Math.round(ve+2),Math.round(be-8),4,2),t.fillStyle=Zt[0],t.fillRect(Math.round(ve-1),Math.round(be-8),2,2),Math.random()<.35&&I(e.x,e.y,.05,m(-.6,.6),m(-.6,.6),m(.8,1.6),.4,Qt[Math.random()*3|0],2,7,!1,.95)};function ph(t){const e=t.x,n=t.y;if(t.life<.07){for(let a=0;a<6;a++)I(e,n,.1,m(-.5,.5),m(-.5,.5),m(.5,1),.5,a&1?Qt[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;z({type:"custom",layer:"top",dur:r,x:e,y:n,draw(a,s){const l=s*r,u=l<.18?io(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);tt(e+h*.55,n+d*.55,0);const p=ve,g=be;tt(e+h*.8,n+d*.8,.55);const y=ve,x=be;tt(e+h*.12,n+d*.12,.75);const M=ve,v=be,_=Math.min(10,Math.round(10*u));for(let S=0;S<=_;S++){const R=S/10,F=1-R,O=F*F*p+2*F*R*y+R*R*M,k=F*F*g+2*F*R*x+R*R*v,U=6-R*4;a.fillStyle=Qt[2],Ht(a,O,k+1,U+2),a.fillStyle=S&1?"#7a5030":"#6a4428",Ht(a,O,k,U),(S===4||S===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(O+(f&1?3:-5)),Math.round(k-1),2,2))}}}});for(let a=0;a<12;a++)I(e,n,.1,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3.2),m(.4,.7),Qt[a%3],3,9,!1,.95);se(2)}te.hongo_R=t=>{const e=t.x,n=t.y,r=t.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(t.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let f=0;f<13;f++){let c=null;for(let h=0;h<8&&!c;h++){const d=Math.random()*6.28,p=f===0?0:Math.sqrt(Math.random())*r*.88,g=e+Math.cos(d)*p,y=n+Math.sin(d)*p;a.every(x=>Math.hypot(x.x-g,x.y-y)>.7)&&(c={x:g,y,cs:f===0?4:Math.random()<.5?3:2,ts:p/r*.5})}c&&a.push(c)}a.sort((f,c)=>f.x+f.y-(c.x+c.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let f=0;f<s;f++){let c=1e9;for(let h=0;h<s;h++)if(h!==f){const d=Math.hypot(a[f].x-a[h].x,a[f].y-a[h].y);d<c&&(c=d,l[f]=h)}}z({type:"custom",layer:"ground",dur:i,x:e,y:n,draw(f,c){const h=c*i,d=oo((h-.1)/.5),p=c>.88?(1-c)/.12:1;f.globalAlpha=.5*p,f.fillStyle="#e8f0d0";for(let g=0;g<s;g++){const y=l[g];if(y<0)continue;tt(a[g].x,a[g].y);const x=ve,M=be;tt(a[y].x,a[y].y);const v=Math.hypot(ve-x,be-M),_=Math.round(v/6*d);for(let S=0;S<=_;S++){const R=S*6/v;f.fillRect(Math.round(x+(ve-x)*R),Math.round(M+(be-M)*R+Math.sin(S*1.7+g)*2),2,2)}}f.globalAlpha=1}});const u=(f,c,h)=>{const d=io(oo((c-f.ts)/.22)),p=h>.88?(1-h)/.12:1;return Math.max(0,Math.round(f.cs*d*p))};z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(f,c){const h=c*i;for(let d=0;d<s;d++){const p=a[d],g=u(p,h,c);g<=0||(tt(p.x,p.y),f.fillStyle="rgba(20,10,30,0.35)",f.fillRect(Math.round(ve-g*4),Math.round(be-1),g*8,3),ss(f,Ta,ve+Math.round(Math.sin(b.T*2+d)*g*.4),be,g,Pa))}}}),z({type:"custom",layer:"top",add:!0,dur:i,x:e,y:n,acc:0,last:0,puffs:0,draw(f,c,h){const d=c*i;for(let p=0;p<s;p++){const g=a[p],y=u(g,d,c);y<=0||(tt(g.x,g.y),f.globalAlpha=.45+.4*Math.sin(b.T*5+p*1.9),ss(f,Ta,ve+Math.round(Math.sin(b.T*2+p)*y*.4),be,y,Pa,2),f.globalAlpha=.18,f.fillStyle=Zr[1],f.fillRect(Math.round(ve-y*4),Math.round(be-y*9),y*8,y*4))}for(f.globalAlpha=1,h.acc+=Math.max(0,d-h.last),h.last=d;h.acc>.085&&h.puffs<46&&c<.88;){h.acc-=.085,h.puffs++;const p=a[Math.random()*s|0];I(p.x+m(-.1,.1),p.y+m(-.1,.1),.12*p.cs*1.6,m(-.25,.25),m(-.25,.25),m(.5,1),m(.9,1.3),h.puffs&1?Zr[0]:Zt[1],2,.15,!0,.97)}}});for(let f=0;f<14;f++){const c=Math.random()*6.28,h=Math.random()*r*.8;I(e+Math.cos(c)*h,n+Math.sin(c)*h,.05,0,0,m(1.5,2.5),.5,Qt[f%3],3,8,!1)}se(3)};lt.hongo=t=>{const e=t.x,n=t.y;z({type:"custom",layer:"ground",dur:.4,x:e,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;tt(e+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=Zt[1+s%3],r.fillRect(Math.round(ve-2),Math.round(be-1),4,2)}}}),z({type:"custom",layer:"top",dur:.35,x:e,y:n,draw(r,o){tt(e,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=er[i],Ht(r,ve+(i-1)*8*(.6+o),be-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)I(e,n,.4,m(-1,1),m(-1,1),m(.5,1.5),.6,Zt[r%3],3,2,!1,.92)};const ar="#1e0f30",fr="#4b2272",mn="#8b3cd2",pn="#d6b4ff",cn="#f6f2ff",Qo="#ff2f5f",ru="#2c1446",Ke=Math.round,Xn=Math.PI*2,gh=[0,1,2,1];function Gt(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(Ke(e),Ke(n),r,o)}function yh(t,e,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=a;for(let l=0;l<=s;l++)t.fillRect(Ke(e+(r-e)*l/s-i/2),Ke(n+(o-n)*l/s-i/2),i,i)}function as(t,e,n,r,o,i,a,s){e=Ke(e),n=Ke(n),t.fillStyle=i,t.fillRect(e-r,n-r,2*r,3*r),t.fillRect(e-r,n-2*r,r,r),t.fillRect(e,n-2*r,r,r),t.fillStyle=a,o===0?(t.fillRect(e-3*r,n-2*r,2*r,r),t.fillRect(e-5*r,n-3*r,2*r,r),t.fillRect(e-2*r,n-r,r,r),t.fillRect(e+r,n-2*r,2*r,r),t.fillRect(e+3*r,n-3*r,2*r,r),t.fillRect(e+r,n-r,r,r)):o===1?(t.fillRect(e-5*r,n-r,4*r,r),t.fillRect(e-5*r,n,r,r),t.fillRect(e-3*r,n,r,r),t.fillRect(e+r,n-r,4*r,r),t.fillRect(e+4*r,n,r,r),t.fillRect(e+2*r,n,r,r)):(t.fillRect(e-3*r,n,2*r,r),t.fillRect(e-4*r,n+r,2*r,r),t.fillRect(e-2*r,n-r,r,r),t.fillRect(e+r,n,2*r,r),t.fillRect(e+2*r,n+r,2*r,r),t.fillRect(e+r,n-r,r,r));{const l=Math.max(1,r>>1);t.fillStyle=s,t.fillRect(e-r,n-r,l,l),t.fillRect(e+r-l,n-r,l,l)}}function Ln(t,e,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Ke(2*s));t.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),p=h-u,g=Ke(n+h*s);if(Math.abs(p)>=f){t.fillRect(Ke(e-d),g,Ke(2*d),c);continue}const y=Math.sqrt(f*f-p*p),x=l-y,M=l+y;if(x>-d&&t.fillRect(Ke(e-d),g,Ke(Math.min(x,d)+d),c),M<d){const v=Math.max(M,-d);t.fillRect(Ke(e+v),g,Ke(d-v),c)}}}function ls(t,e,n,r,o){const[i,a]=T(e,n),s=r*ee.HW*Math.SQRT2,l=s*.5;t.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));t.fillRect(Ke(i-f),Ke(a+u),Ke(f*2),2)}}const ou=t=>{const e=Ye(t);return e&&!e.dead&&!nt(e)?e:null},xh=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},us=(t,e=16)=>gh[((b.T*e|0)+t)%4];lt.murcielago=t=>{const e=m(0,Xn),n=t.big?17:13;z({type:"custom",layer:"top",add:!0,dur:.2,x:t.x,y:t.y,draw(r,o){const[i,a]=T(t.x,t.y,.5);r.globalAlpha=1-o,Ln(r,i,a,n+2,e+o*1.4,.45,mn),Ln(r,i,a,n,e+o*1.4,.52,cn)}});for(let r=0;r<5;r++)I(t.x,t.y,.5,m(-2.5,2.5),m(-2.5,2.5),m(0,1),.28,r%2?pn:mn,2,0,!0,.9)};te.murcielago_Q=t=>{const e=t.ux||0,n=t.uy||0,r=Math.atan2(n,e),o=t.range||3.2,i=t.angle||.8,a=t.x+e*.3,s=t.y+n*.3,l=.6;z({type:"custom",layer:"top",add:!0,dur:.62,x:t.x,y:t.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const p=d/.32,g=.3+p*(o-.3),y=Math.max(6,Math.ceil(i*2*g*7)),x=h%2?mn:pn,M=h%2?3:2;u.globalAlpha=(1-p)*.95;for(let v=0;v<=y;v++){const _=r-i+2*i*v/y,S=Math.sin(v*1.7+h*2.3+c*40)*.07*(1+p),[R,F]=T(a+Math.cos(_)*(g+S),s+Math.sin(_)*(g+S),l-p*.35);Gt(u,R-M/2,F-M/2,M,M,x),v===y>>1&&Gt(u,R-1,F-1,2,2,cn)}}}}),z({type:"custom",layer:"ground",dur:.5,x:t.x,y:t.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const p=.4+(o-.4)*d/9,[g,y]=T(a+Math.cos(h)*p,s+Math.sin(h)*p);Gt(u,g-1,y-1,3,2,fr)}}}});for(let u=0;u<14;u++){const f=r+m(-i,i),c=m(.6,o);I(a+Math.cos(f)*c,s+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,m(0,.5),.5,u%3?pn:cn,2,0,!0,.92)}se(2)};te.murcielago_W=t=>{const e=t.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*Xn+m(-.2,.2),sp:m(1.2,2.4),up:m(.8,1.8),ph:Math.random()*4|0}));z({type:"custom",layer:"ground",dur:.8,x:t.x,y:t.y,draw(r,o){r.globalAlpha=.6*(1-o),ls(r,t.x,t.y,.75*(1-o*.6),ar),r.globalAlpha=.8*(1-o),ls(r,t.x,t.y,.3*(1-o),ru)}}),z({type:"custom",layer:"top",dur:1,x:t.x,y:t.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=T(t.x+Math.cos(a.a)*s,t.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);as(r,l,u,2,us(a.ph),ar,fr,Qo)}}}),z({type:"custom",layer:"top",dur:e,x:t.x,y:t.y,uid:t.uid,draw(r){const o=ou(t.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=T(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=b.T*5+s*Math.PI;as(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,us(s*2,20),fr,mn,Qo)}r.globalAlpha=.35;for(let s=0;s<4;s++)Gt(r,i-8+s*5,a+26+(b.T*30+s*7)%8,2,2,ar)}});for(let r=0;r<16;r++)I(t.x+m(-.3,.3),t.y+m(-.3,.3),m(.2,.8),m(-.5,.5),m(-.5,.5),m(1,2.2),m(.5,.9),r%2?ar:fr,3,0,!1,.95);for(let r=0;r<6;r++)I(t.x+m(-.3,.3),t.y+m(-.3,.3),m(.4,1),0,0,m(.5,1.2),.5,pn,2,0,!0)};te.murcielago_E=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=t.dur||.45,o=xh(t),i=o&&o.radius||1.4,a=m(0,Xn);let s=!1;z({type:"custom",layer:"ground",dur:r+1.4,x:e,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=T(e,n);if(c<r){l.globalAlpha=.5,Ln(l,h,d,Ke(i*26*(1.4-.4*c/r)),a+c*6,.45,fr,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),Ln(l,h,d+2,Ke(i*30),a+Math.PI*1.1,.42,ru,.5)}}),z({type:"custom",layer:"top",add:!0,dur:r+.5,x:e,y:n,draw(l,u,f){const c=u*f.dur;if(c<r){const M=ou(t.uid);if(!M)return;const[v,_]=T(M.x,M.y,.7),[S,R]=T(e,n,.3),F=Math.hypot(S-v,R-_)||1,O=(S-v)/F,k=(R-_)/F;l.globalAlpha=.75;for(let U=0;U<4;U++){const B=(U-1.5)*7,H=18+U%2*12;yh(l,v-k*B-O*8,_+O*B-k*8,v-k*B-O*(8+H),_+O*B-k*(8+H),2,U%2?pn:mn)}return}const h=(c-r)/.5;if(!s){s=!0,se(6);for(let M=0;M<22;M++){const v=m(0,Xn),_=m(2,5);I(e,n,.45,Math.cos(v)*_,Math.sin(v)*_,m(.3,1.5),m(.3,.55),M%3?pn:M%2?cn:mn,2,3,!0,.9)}}const d=Math.min(1,h/.45),[p,g]=T(e,n,.45),y=Ke(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),Ln(l,p,g,y+3,x,.42,mn,.85),Ln(l,p,g,y,x,.48,cn,.85),l.globalAlpha*=.35,Ln(l,p,g,y,x-.6,.48,pn,.85)}})};te.murcielago_R=t=>{const e=t.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*Xn,r0:e*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(s.r0+(1-u)*(1-u)*e*1.4+f*f*e*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),h=s.p+l*s.w;return[t.x+Math.cos(h)*c,t.y+Math.sin(h)*c,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:m(.3,n-.4),x:t.x+m(-1,1)*e*.6,y:t.y+m(-1,1)*e*.6}));z({type:"custom",layer:"ground",dur:n,x:t.x,y:t.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,ls(s,t.x,t.y,e,ar),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*Xn+u*.8,[d,p]=T(t.x+Math.cos(h)*e,t.y+Math.sin(h)*e);Gt(s,d-1,p-1,c%2?2:3,2,c%2?pn:mn)}s.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,u),[p,g]=T(h,d);Gt(s,p-4,g-1,8,2,"#000000")}}}),z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,draw(s,l){const u=l*n;for(const f of o){const[c,h,d,p]=i(f,u),[g,y]=T(c,h,d);s.globalAlpha=Math.min(1,u/.15)*(1-p),as(s,g,y,f.s,us(f.ph,18),ar,fr,Qo)}}}),z({type:"custom",layer:"top",add:!0,dur:n,x:t.x,y:t.y,draw(s,l){const u=l*n;for(const f of a){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=T(f.x,f.y,.55),p=Ke(4-c*3);s.globalAlpha=1-c;for(const g of[-1,1]){const y=h+g*4;Gt(s,y-2,d-6-p,4,2,cn),Gt(s,y-1,d-4-p,2,3,cn),Gt(s,y-2,d+4+p,4,2,cn),Gt(s,y-1,d+1+p,2,3,cn)}Gt(s,h-1,d-1,3,3,Qo)}}});for(let s=0;s<20;s++){const l=m(0,Xn),u=e*m(.3,1);I(t.x+Math.cos(l)*u,t.y+Math.sin(l)*u,m(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,m(0,.6),m(.6,1.1),s%3?mn:pn,2,0,!0,.97)}se(5)};const Z=Math.round,Jt=Math.PI*2,q={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},vh=t=>t*ee.HW*Math.SQRT2;function Wr(t,e,n,r){r=Math.max(1,Z(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)t.fillRect(Z(e[0]+(n[0]-e[0])*s/i-a),Z(e[1]+(n[1]-e[1])*s/i-a),r,r)}function Jo(t,e,n,r,o,i){const a=e[0].length,s=e.length,l=Z(n-a*o/2),u=Z(r-s*o/2);for(const f in i){t.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)e[c][h]===f&&t.fillRect(l+h*o,u+c*o,o,o)}}function iu(t,e,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=t+m(-.35,.35),a=e*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function su(t,e,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=T(e+r[s][0],n+r[s][1]),f=T(e+r[s+1][0],n+r[s+1][1]);Wr(t,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const bh=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],Mh=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],za=["t.t.t",".....",".ppp.","ppppp",".ppp."];te.oso_Q=t=>{const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=t.range||2.5,a=Math.min(t.angle||1.2,1.4),s=Math.atan2(o,r),l=e+r*1,u=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,p)=>{const g=3+p*2;for(let y=0;y<g;y++){const x=s+(g===1?0:(y/(g-1)*2-1)*a*.8)+m(-.06,.06),M=d*i/2.5;c.push({x:e+Math.cos(x)*M,y:n+Math.sin(x)*M,t0:f+.02+p*.08,w:Math.random()<.5?10:12,h:m(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>iu(s+d*a,i*m(.75,1)));z({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,p){const g=p*.34,y=Math.min(1,g/f),x=1.5*(1-y*y),[M,v]=T(l,u,x+.25);if(d.globalAlpha=g<.22?1:Math.max(0,1-(g-.22)/.12),Jo(d,bh,M,v,3,{h:q.wood,d:q.i0,b:q.brass,l:q.i4,i:q.i2}),y<1){d.globalAlpha=.5,d.fillStyle=q.i3;for(let _=1;_<=3;_++)d.fillRect(Z(M-15+_*7),Z(v-26-_*8),2,8)}}}),z({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,p){const[g,y]=T(l,u,.1),x=Z(26*(1-p))+4;d.fillStyle=q.amberL,d.fillRect(g-x,y-2,x*2,4),d.fillRect(g-2,y-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(g-5,y-3,10,6)}}),z({type:"custom",layer:"ground",dur:1.15,x:e,y:n,draw(d,p,g){const y=p*1.15;if(y>=f&&!g.hit){g.hit=!0,se(7);for(let v=0;v<14;v++){const _=s+m(-a,a),S=m(1,3);I(l,u,.1,Math.cos(_)*S,Math.sin(_)*S,m(.3,1),m(.6,.9),v%2?q.dust:q.e3,5,-.4,!1,.9)}}if(y<f)return;const x=y-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=q.e0;for(const v of h)su(d,e,n,v,Math.min(1,x*5));const M=Math.min(1,x/.32);if(M<1){const v=i*(.3+.8*M);d.globalAlpha=1-M,d.fillStyle=q.dust;for(let _=0;_<=16;_++){const S=s-a+2*a*_/16,[R,F]=T(e+Math.cos(S)*v,n+Math.sin(S)*v);d.fillRect(Z(R)-3,Z(F)-2,6,4)}}for(const v of c){const _=(y-v.t0)/.5;if(_<0||_>1)continue;v.done||(v.done=!0,I(v.x,v.y,.2,m(-1,1),m(-1,1),m(3,5),m(.7,1),[q.e1,q.e2,q.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const S=Z(v.h*(_<.2?_/.2:1-(_-.2)/.8)),[R,F]=T(v.x,v.y);d.globalAlpha=1,d.fillStyle=q.e0,d.fillRect(Z(R-v.w/2-1),Z(F-2),v.w+2,4),d.fillStyle=q.e1,d.fillRect(Z(R-v.w/2),Z(F-S),v.w,S),d.fillStyle=q.e3,d.fillRect(Z(R-v.w/2),Z(F-S-5),v.w,5),d.fillStyle=q.e2,d.fillRect(Z(R-v.w/2),Z(F-S-1),v.w,1)}}})};function po(t,e,n,r,o,i){const a=Math.cos(i);return[t+n*Math.cos(o)*a,e+n*.5*Math.sin(o)*a-r*Math.sin(i)]}te.oso_W=t=>{const e=t.uid,n=t.dur||3;let r=t.x,o=t.y;z({type:"custom",layer:"top",add:!0,dur:.2,x:t.x,y:t.y,uid:e,draw(i,a){const s=Ye(e),[l,u]=T(s?s.x:r,s?s.y:o,.6),f=Z(18*(1-a))+3;i.fillStyle=q.amber;for(let c=0;c<8;c++){const h=c/8*Jt;i.fillRect(Z(l+Math.cos(h)*f*1.4)-2,Z(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Jt;I(t.x,t.y,.6,Math.cos(a)*m(1,3),Math.sin(a)*m(1,3),m(1.5,3),.4,i%2?q.brassL:q.amber,2,9,!0)}z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,uid:e,draw(i,a,s){const l=Ye(e),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let R=0;R<16;R++){const F=Math.random()*Jt,O=m(1,2.5);I(r+Math.cos(F)*.4,o+Math.sin(F)*.4,m(.2,.8),Math.cos(F)*O,Math.sin(F)*O,m(1.5,3.5),.7,[q.i1,q.i2,q.i3][R%3],4,10,!1,.95)}for(let R=0;R<6;R++)I(r,o,.6,m(-2,2),m(-2,2),m(1,3),.35,q.brassL,2,6,!0);s.t=1e9;return}const c=l&&l.scale||1,[h,d]=T(r,o),p=Z(40*c),g=Z(56*c),y=Math.min(1,u/.25),x=Math.PI/2*y;if(y>=1&&!s.done){s.done=!0;const[R,F]=[r,o];for(let O=0;O<6;O++)I(R,F,.75*c,m(-1.5,1.5),m(-1.5,1.5),m(.5,2),.3,q.i4,2,3,!0)}const M=.85+.15*Math.sin(u*8);i.globalAlpha=.16*M,i.fillStyle=q.i2;const v=g*Math.sin(x);for(let R=0;R<v;R+=3){const F=p*Math.sqrt(Math.max(0,1-(R/g)**2));i.fillRect(Z(h-F),Z(d-R-3),Z(F*2),3)}for(let R=0;R<p*.5;R+=3){const F=p*Math.sqrt(Math.max(0,1-(R/(p*.5))**2));i.fillRect(Z(h-F),Z(d+R),Z(F*2),3)}for(let R=0;R<32;R++){const F=R/32*Jt,O=po(h,d,p,g,F,0),k=Math.sin(F)>0;i.globalAlpha=k?.95:.4,i.fillStyle=k?q.i3:q.i1,i.fillRect(Z(O[0])-2,Z(O[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=q.i2;for(const R of[.12,.3,.5,.7,.88]){const F=Math.PI*R;for(let O=0;O<=x;O+=.16){const k=po(h,d,p,g,F,O);i.fillRect(Z(k[0])-1,Z(k[1])-1,2,3)}}const _=u*14|0;let S=0;for(const R of[.42,.9])if(!(R>x))for(let F=0;F<=14;F++){const O=Math.PI*F/14,k=po(h,d,p,g,O,R);i.globalAlpha=.9,i.fillStyle=q.i3,i.fillRect(Z(k[0])-2,Z(k[1])-1,4,2),F%2===0&&(S++,i.globalAlpha=1,i.fillStyle=S%16===_%16?"#ffffff":q.brass,i.fillRect(Z(k[0])-1,Z(k[1])-3,3,3))}if(y>=1){const R=po(h,d,p,g,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=q.i0,i.fillRect(Z(R[0])-5,Z(R[1])-4,10,6),i.fillStyle=q.brass,i.fillRect(Z(R[0])-4,Z(R[1])-3,8,4),i.fillStyle=q.brassL,i.fillRect(Z(R[0])-3,Z(R[1])-3,3,1)}}})};te.oso_E=t=>{const e=t.uid,n=t.x,r=t.y,o=t.ex??t.x,i=t.ey??t.y,a=t.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=T(n,r),c=T(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,p=(c[1]-f[1])/h,g=[],y=Math.max(2,Math.floor(u/.5));for(let x=1;x<=y;x++){const M=x/(y+1),v=x%2?1:-1;g.push({s:M,x:n+s*M-l/u*.17*v,y:r+l*M+s/u*.17*v})}z({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,M){const v=M*(a+2);for(const _ of g){const S=v-_.s*a;if(S<0)continue;const[R,F]=T(_.x,_.y);x.globalAlpha=Math.max(0,.7*(1-S/2)),Jo(x,za,R,F,3,{t:q.e0,p:q.e0}),x.globalAlpha*=.6,Jo(x,za,R-1,F-1,3,{p:q.e1})}}}),z({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,M,v){const _=M*(a+.3),S=Ye(e),R=Math.min(1,_/a),F=S&&_<a?S.x:n+s*R,O=S&&_<a?S.y:r+l*R;if(_<a){if(v.n=v.n||0,v.n<30){v.n+=2;for(let ue=0;ue<2;ue++)I(F+m(-.2,.2),O+m(-.2,.2),.1,-s/u*m(.5,1.5)+m(-.5,.5),-l/u*m(.5,1.5)+m(-.5,.5),m(.4,1.2),m(.5,.8),ue?q.e2:q.dust,5,-.3,!1,.9)}const[k,U]=T(F,O,.45),B=k+d*26,H=U+p*26,Y=-p,ne=d;for(let ue=0;ue<3;ue++){const w=ue*8+_*120%8;x.globalAlpha=.9-ue*.25,x.fillStyle=ue?q.dust:"#ffffff";const C=[B-d*w,H-p*w];Wr(x,C,[C[0]-d*10+Y*13,C[1]-p*10+ne*13],3),Wr(x,C,[C[0]-d*10-Y*13,C[1]-p*10-ne*13],3)}x.globalAlpha=.6,x.fillStyle=q.i3;for(let ue=0;ue<4;ue++){const w=(ue-1.5)*9,C=14+(ue*7+_*200)%12;Wr(x,[k-d*20+Y*w,U-p*20+ne*w],[k-d*(20+C)+Y*w,U-p*(20+C)+ne*w],2)}}else{if(!v.end){v.end=!0,se(5);for(let H=0;H<14;H++){const Y=Math.random()*Jt,ne=m(1.5,3);I(o,i,.15,Math.cos(Y)*ne,Math.sin(Y)*ne,m(.8,2),.6,H%2?q.dust:q.e3,5,2,!1,.9)}}const k=(_-a)/.3,[U,B]=T(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-k;for(let H=0;H<8;H++){const Y=H/8*Jt+.2,ne=6+k*14,ue=ne+10*(1-k);x.fillStyle=H%2?q.amberL:"#ffffff",Wr(x,[U+Math.cos(Y)*ne,B+Math.sin(Y)*ne*.7],[U+Math.cos(Y)*ue,B+Math.sin(Y)*ue*.7],4)}}}})};te.oso_R=t=>{const e=t.uid,n=t.x,r=t.y,o=t.radius||3.6,i=Array.from({length:8},(a,s)=>iu(s/8*Jt+m(-.2,.2),o*m(.45,.65),5));se(10),z({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=T(n,r),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=vh(o)*(.15+.95*(1-(1-h)*(1-h))),p=5-c;a.globalAlpha=1-h;for(let g=0;g<56;g++){if(g%7>=5)continue;const y=g/56*Jt+c*.2,x=l+Math.cos(y)*d,M=u+Math.sin(y)*d*.5;a.fillStyle=c===0?q.amberL:q.amber,a.fillRect(Z(x-p/2),Z(M-p/2),p,p),g%7===2&&(a.fillStyle=q.amberD,a.fillRect(Z(x*.94+l*.06-1),Z(M*.94+u*.06-1),3,3))}}}}),z({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=q.e0;for(const l of i)su(a,n,r,l,Math.min(1,s*7))}}),z({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:e,draw(a,s){const l=Ye(e),u=l?l.x:n,f=l?l.y:r,c=l&&l.scale||1,[h,d]=T(u,f,1.7*c+s*.5),p=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),Jo(a,Mh,h,d,p,{e:q.amberD,i:q.amberL,h:q.amber,s:q.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let g=0;g<3;g++){const y=34+(s*90+g*22)%66,x=1-(s*90+g*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=q.amberL;for(let M=-.7;M<=.71;M+=.175){const v=Math.cos(M)*y,_=Math.sin(M)*y*.8;a.fillRect(Z(h+v)-2,Z(d+6+_)-2,4,4),a.fillRect(Z(h-v)-2,Z(d+6+_)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Jt,l=Math.sqrt(Math.random())*o*.9;I(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,m(2,4),m(.5,.8),[q.e1,q.e2,q.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Jt,l=m(.3,1.2);I(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,m(.8,1.6),m(.8,1.2),q.amberL,2,-.3,!0,.98)}};lt.oso=t=>{const e=t.x,n=t.y;z({type:"custom",layer:"top",dur:.24,x:e,y:n,draw(r,o){const[i,a]=T(e,n,.08),s=Z(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=q.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=q.dust,r.fillRect(i-s,a-1,Z(s*.7),3),r.fillRect(i+s-Z(s*.7),a-1,Z(s*.7),3);const[u,f]=T(e,n,.5),c=Z(12*(1-o));r.fillStyle=q.i3,r.fillRect(u-c-4,f-3,8,6),r.fillRect(u+c-4,f-3,8,6),r.fillStyle=q.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)I(e,n,.5,m(-1.5,1.5),m(-1.5,1.5),m(2,3.5),.3,q.brassL,2,12,!0);for(let r=0;r<3;r++)I(e,n,.05,m(-1,1),m(-1,1),m(1,2),.45,q.e2,3,10,!1)};const Ut="#ffffff",_t="#e6eeff",Vn="#bfe9ff",ei="#7fdcf4",_h="#3a9ab8",Ze="#fff0b4",Oa="#efe0b8",Fa="#c8a878",Sh="#34408a",Ia="#a9bfdc",pe=Math.round,Bn=Math.PI*2;function Ie(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(pe(e),pe(n),r,o)}function fs(t,e,n,r,o){t.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=pe(Math.sqrt(Math.max(0,r*r-i*i)));t.fillRect(pe(e-a),pe(n+i),a*2,2)}}function Qr(t,e,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,pe(2*s));t.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),p=h-u,g=pe(n+h*s);if(Math.abs(p)>=f){t.fillRect(pe(e-d),g,pe(2*d),c);continue}const y=Math.sqrt(f*f-p*p),x=l-y,M=l+y;if(x>-d&&t.fillRect(pe(e-d),g,pe(Math.min(x,d)+d),c),M<d){const v=Math.max(M,-d);t.fillRect(pe(e+v),g,pe(d-v),c)}}}function wh(t,e,n,r,o,i,a){e=pe(e),n=pe(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;t.fillStyle=i,t.fillRect(e-u-r*s,n-2*r,r*s,2*r),t.fillRect(e+u,n-2*r,r*s,2*r),t.fillRect(e-u-r*l,n,r*l,r),t.fillRect(e+u,n,r*l,r),t.fillStyle=a,t.fillRect(e-u,n-2*r,r,3*r),t.fillRect(e-u-1,n-3*r,1,r),t.fillRect(e+u,n-3*r,1,r)}function Ea(t,e,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const c=pe(e+u*i-f),h=pe(e+u*i+f),d=pe(n+u);t.globalAlpha=.45*l,t.fillStyle=a,t.fillRect(c,d,h-c,2),t.globalAlpha=.95*l,t.fillStyle=s,t.fillRect(c,d,2,2),t.fillRect(h-2,d,2,2)}}function Ch(t,e,n,r,o){e=pe(e),n=pe(n),t.fillStyle=o,t.fillRect(e,n,3*r,r),t.fillRect(e+r,n+r,r,r),t.fillRect(e,n+2*r,3*r,r)}const au=t=>{const e=Ye(t);return e&&!e.dead&&!nt(e)?e:null},Ah=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},lu=t=>(t=Math.min(1,Math.max(0,t))-1,1+2.9*t*t*t+1.9*t*t);At.polilla_A=(t,e,n,r,o,i)=>{qe(!0);const a=Xt(),s=.65+.35*Math.sin(i*20),l=pe(5+s*3);a.globalAlpha=s,Ie(a,n-l,r-1,l*2,2,ei),Ie(a,n-1,r-l,2,l*2,ei),a.globalAlpha=1,Ie(a,n-2,r-2,4,4,Ut);const u=i*14;Ie(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,Ze),Ie(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,Ze),qe(!1)};lt.polilla=t=>{z({type:"custom",layer:"top",add:!0,dur:.25,x:t.x,y:t.y,draw(e,n){const[r,o]=T(t.x,t.y,.5),i=pe(10*(1-n))+2;e.globalAlpha=1-n,Ie(e,r-i,o-1,i*2,2,_t),Ie(e,r-1,o-i,2,i*2,_t),Ie(e,r-2,o-2,4,4,Ut)}});for(let e=0;e<5;e++)I(t.x,t.y,.5,m(-1,1),m(-1,1),m(.2,.8),.6,e%2?Ze:Vn,2,.4,!0,.9)};At.polilla_Q=(t,e,n,r,o,i)=>{const s=e.z||.45;n=pe(n),r=pe(r),qe(!0);const l=Xt(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),qe(!1),fs(t,n,r,10,_h),fs(t,n,r,9,_t),Qr(t,n,r,9,Math.PI*.85,.55,Ia);for(let h=0;h<3;h++){const d=i*2+h*2.1;Ie(t,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,Ia)}Ie(t,n-4,r-5,2,2,Ut);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,p=14+h*10;t.globalAlpha=1-d,Ch(t,n-f*p,r-c*p-6-d*14,h<2?1:2,h%2?Ze:_t)}t.globalAlpha=1,Math.random()<.4&&I(e.x,e.y,s,m(-.3,.3),m(-.3,.3),-.4,.6,Math.random()<.5?Ze:_t,2,.5,!0,.9)};te.polilla_Q=t=>{const e=t.ux||0,n=t.uy||0;z({type:"custom",layer:"top",add:!0,dur:.35,x:t.x,y:t.y,draw(r,o){const[i,a]=T(t.x+e*.4,t.y+n*.4,.75),s=pe(14*(1-o))+2,l=pe(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)Ie(r,i-s,a-1,s*2,2,Ze),Ie(r,i-1,a-s,2,s*2,Ze);else for(let u=1;u<=l;u+=2)Ie(r,i+u,a+u,2,2,Ze),Ie(r,i-u-2,a+u,2,2,Ze),Ie(r,i+u,a-u-2,2,2,Ze),Ie(r,i-u-2,a-u-2,2,2,Ze);Ie(r,i-2,a-2,4,4,Ut);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,c=16+u;Ie(r,i+Math.cos(f)*c-1,a+Math.sin(f)*c*.6-1,2,2,u%2?Ze:_t)}}});for(let r=0;r<10;r++)I(t.x+e*.4,t.y+n*.4,.75,e*m(.5,1.5)+m(-.4,.4),n*m(.5,1.5)+m(-.4,.4),m(0,.4),m(.6,1),r%2?Ze:_t,2,.6,!0,.9)};te.polilla_W=t=>{if(t.type==="heal"){z({type:"custom",layer:"top",add:!0,dur:.9,x:t.x,y:t.y,draw(n,r){const[o,i]=T(t.x,t.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),Qr(n,o,i,7,-.6,.5,_t);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;Ie(n,o-10+a*10,i+s*50,2,4,a%2?Vn:Ut)}}});for(let n=0;n<8;n++)I(t.x+m(-.35,.35),t.y+m(-.35,.35),m(1,1.6),0,0,-m(.6,1.2),m(.7,1.1),n%2?_t:Ze,2,0,!0,.98);return}if(t.type!=="healring")return;const e=t.radius||4.2;z({type:"custom",layer:"top",add:!0,dur:1.2,x:t.x,y:t.y,draw(n,r){const o=au(t.uid),i=o?o.x:t.x,a=o?o.y:t.y,[s,l]=T(i,a,2.2),u=r*1.2,f=pe(15*lu(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),Qr(n,s,l,f+2,-.7,.5,ei),Qr(n,s,l,f,-.7,.55,Ut);for(let c=0;c<5;c++){const h=b.T*2+c*1.26;(b.T*6+c)%2<1&&Ie(n,s+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,Ze)}}}),z({type:"custom",layer:"ground",add:!0,dur:1.2,x:t.x,y:t.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=e*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*Bn,[f,c]=T(t.x+Math.cos(u)*s,t.y+Math.sin(u)*s);Ie(n,f-1,c-1,l%3?2:3,2,l%2?Vn:Ut)}}}});for(let n=0;n<40;n++){const r=m(0,Bn),o=Math.sqrt(Math.random())*e*.9;I(t.x+Math.cos(r)*o,t.y+Math.sin(r)*o,m(2.2,3),m(-.15,.15),m(-.15,.15),-m(1.2,2),m(1.1,1.6),[_t,Vn,Ut,Ze][n%4],2,.4,!0,.99)}};te.polilla_E=t=>{const e=t.dur||3;z({type:"custom",layer:"top",dur:e+.3,x:t.x,y:t.y,uid:t.uid,draw(n,r,o){const i=au(t.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>e||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?lu(a/.22):1,u=.85+.15*Math.sin(b.T*8),[f,c]=T(i.x,i.y,.75);for(const d of[-1,1]){const p=f+d*(9+15*l),g=c-9-3*l,y=f+d*(7+10*l),x=c+9;Ea(n,y,x,10*l*u,8,.4*d,Fa,Oa,s),Ea(n,p,g,15*l*u,13,-.45*d,Oa,Fa,s),n.globalAlpha=.9*s,l>.5&&(fs(n,p+d*2,g-1,4,Sh),Ie(n,p+d*2-1,g-2,2,2,Ze),Ie(n,p+d*2-2,g-3,1,1,Ut))}qe(!0);const h=Xt();for(let d=0;d<6;d++){const p=d%2?1:-1,g=(b.T*3+d*.37)%1;g>.3||(h.globalAlpha=(1-g/.3)*s,Ie(h,f+p*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,Ut))}qe(!1)}});for(let n=0;n<18;n++){const r=m(0,Bn),o=m(1,2.2);I(t.x,t.y,.75,Math.cos(r)*o,Math.sin(r)*o,m(.3,1.2),m(.5,.9),n%3?Ze:_t,2,.5,!0,.92)}};te.polilla_R=t=>{if(t.type!=="cast_spores")return;const e=t.radius||3,n=Ah(t),r=n&&n.dur||4,o=10,i=e*ee.HW*Math.SQRT2,a=e*ee.HH*Math.SQRT2,s=Array.from({length:o},(f,c)=>({ox:m(-.6,.6)*e,oy:m(-.6,.6)*e,w:m(.8,1.6),p:m(0,Bn),z:m(.6,2.4),ph:c})),l=Array.from({length:7},(f,c)=>({o:(c/6-.5)*1.7,w:pe(m(8,26)),p:m(0,Bn)}));let u=0;z({type:"custom",layer:"ground",add:!0,dur:r,x:t.x,y:t.y,draw(f,c){const h=c*r,d=Math.min(1,h/.25,(r-h)/.4),[p,g]=T(t.x,t.y);f.globalAlpha=.13*d,f.fillStyle=ei;for(let y=-a;y<=a;y+=2){const x=i*Math.sqrt(Math.max(0,1-y*y/(a*a)));f.fillRect(pe(p-x),pe(g+y),pe(x*2),2)}f.globalAlpha=.4*d,Qr(f,p,g,pe(e*30),-.5,.5,Vn,.5),f.globalAlpha=.85*d;for(let y=0;y<40;y++){const x=y/40*Bn+h*.35,[M,v]=T(t.x+Math.cos(x)*e,t.y+Math.sin(x)*e);Ie(f,M-1,v-1,2,2,y%4?Vn:Ut)}}}),z({type:"custom",layer:"top",add:!0,dur:r,x:t.x,y:t.y,draw(f,c){const h=c*r,d=Math.min(1,(r-h)/.4),p=Math.min(1,h/.25),[g,y]=T(t.x,t.y),x=330,M=f.createLinearGradient(0,y-x,0,y);M.addColorStop(0,"rgba(160,230,255,0)"),M.addColorStop(1,"rgba(160,230,255,0.14)"),f.globalAlpha=d,f.fillStyle=M,f.fillRect(pe(g-i*p),pe(y-x),pe(i*2*p),x);for(const v of l){const _=g+v.o*i*p,S=(_-g)/i,R=y-a*Math.sqrt(Math.max(0,1-S*S));f.globalAlpha=d*(.07+.06*Math.sin(b.T*3+v.p))*(h<.25?2:1),Ie(f,_-v.w/2,y-x,v.w,pe(R-(y-x)),_t)}for(const v of s){const _=h*v.w+v.p,S=t.x+v.ox+Math.cos(_)*.6+Math.sin(_*2.3)*.2,R=t.y+v.oy+Math.sin(_)*.6,[F,O]=T(S,R,v.z+Math.sin(h*1.7+v.p)*.4);f.globalAlpha=d*Math.min(1,h/.4),wh(f,F,O,2,((b.T*14|0)+v.ph)%4,v.ph%3?_t:Ut,Vn)}if(u<50&&Math.random()<.3){u++;const v=m(0,Bn),_=Math.sqrt(Math.random())*e;I(t.x+Math.cos(v)*_,t.y+Math.sin(v)*_,m(2.5,3.5),0,0,-m(.8,1.4),m(1.5,2.2),u%3?_t:Ze,2,0,!0,.99)}}}),se(2)};const ie=Math.round,tn=Math.PI*2,K={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},pi=t=>t*ee.HW*Math.SQRT2;function hn(t,e,n,r){r=Math.max(1,ie(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)t.fillRect(ie(e[0]+(n[0]-e[0])*s/i-a),ie(e[1]+(n[1]-e[1])*s/i-a),r,r)}function cr(t,e,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&t.fillRect(ie(e-l),ie(n+a),Math.max(1,ie(l*2)),i)}}function cs(t,e,n,r,o,i){const a=e[0].length,s=e.length,l=ie(n-a*o/2),u=ie(r-s*o/2);for(const f in i){t.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)e[c][h]===f&&t.fillRect(l+h*o,u+c*o,o,o)}}function wr(t,e,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*tn;t.fillRect(ie(e+Math.cos(u)*r-i/2),ie(n+Math.sin(u)*r*.5-i/2),i,i)}}const kr=new Map;function Th(t){if(kr.has(t))return!1;if(kr.size>300)for(const[e,n]of kr)b.T-n>4&&kr.delete(e);return kr.set(t,b.T),!0}function Ph(t){const e=b.game,n=[];if(!e)return n;const r=(t.w||.55)*.6;for(const o of e.units)o.dead||o.team===t.team||o.team==="neutral"&&o.kind!=="monster"||nt(o)||Math.hypot(o.x-t.x,o.y-t.y)<r+(o.r||.4)&&n.push(o);return n}const Ua=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],Rh=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function uu(t,e,n,r){cs(t,Ua,e+1,n+1,r,{g:K.deep,v:K.deep}),cs(t,Ua,e,n,r,{g:K.pad,v:K.moss})}function zh(t,e){const n=Math.random()*6;z({type:"custom",layer:"ground",dur:.6,x:t,y:e,draw(r,o){const[i,a]=T(t,e);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=K.waterD,wr(r,i,a,8+o*14,10,2,n,3),uu(r,i,a+ie(Math.sin(o*9+n)),o<.55?2:1)}})}function Oh(t,e,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[e+o*l,n+i*l];t.fillStyle=K.ink,hn(t,a(-11),a(11),5),t.fillStyle=K.moss,hn(t,a(-8),a(-1),3),t.fillStyle="#d8e2ea",hn(t,a(0),a(8),3),t.fillStyle="#ffffff",hn(t,a(7),a(11),2);const s=a(-11);t.fillStyle="#c8a040",t.fillRect(ie(s[0]-2),ie(s[1]-2),4,4),t.fillStyle=K.ink,t.fillRect(ie(s[0]-1),ie(s[1]-1),2,2)}function Fh(t,e){z({type:"custom",layer:"ground",dur:.45,x:t,y:e,draw(n,r){const[o,i]=T(t,e);n.globalAlpha=1-r,n.fillStyle=K.foam,wr(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=K.water,wr(n,o,i,3+r*16,10,2)}}),z({type:"custom",layer:"top",add:!0,dur:.16,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),a=ie(12*(1-r))+2;n.fillStyle=K.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*tn,o=m(.8,2);I(t,e,.45,Math.cos(r)*o,Math.sin(r)*o,m(1.5,3),.5,n%3?K.water:K.padL,2,9,!1,.95)}}const Dr=new Map;function Ih(t){let e=Dr.get(t.id);if(!e&&(e={p:[],drop:0,seen:b.T},Dr.set(t.id,e),Dr.size>40))for(const[n,r]of Dr)b.T-r.seen>2&&Dr.delete(n);return e.seen=b.T,e}te.rana_Q=t=>{const e=t.ux||1,n=t.uy||0,r=t.x+e*.45,o=t.y+n*.45;z({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=T(r,o,.55),u=ie(9*(1-a))+2;i.fillStyle=K.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(s-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)I(r,o,.5,e*m(2,4)+m(-.7,.7),n*m(2,4)+m(-.7,.7),m(.6,1.6),.4,i%2?K.water:K.padL,2,6,!1,.9)};At.rana_Q=(t,e,n,r,o,i)=>{const a=e.z||.45,s=Ih(e);s.p.unshift([e.x,e.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,zh(e.x,e.y)),qe(!0);const l=Xt();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?K.padL:K.pad,hn(l,T(s.p[u-1][0],s.p[u-1][1],a),T(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));l.globalAlpha=1,qe(!1),Oh(t,n,r,i*26);for(const u of Ph(e))Th("rq"+e.id+":"+u.id)&&Fh(u.x,u.y)};function Eh(t,e,n){const r=Array.from({length:5},(i,a)=>({a:a/5*tn+m(-.3,.3),d:n*m(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*tn,h:m(26,44),w:Math.random()<.5?4:6}));z({type:"custom",layer:"ground",dur:1.1,x:t,y:e,draw(i,a,s){if(!s.fired){s.fired=!0,se(4),On({type:"wet",x:t,y:e,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*tn,d=m(1,3.2);I(t+Math.cos(h)*.3,e+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,m(2.5,5),m(.5,.8),c%4?K.foam:K.water,3,12,!1,.97)}for(let c=0;c<6;c++)I(t+m(-.6,.6),e+m(-.6,.6),.1,m(-.4,.4),m(-.4,.4),m(1,2),.7,K.mud,4,8,!1)}const[l,u]=T(t,e),f=pi(n);i.globalAlpha=.35*(1-a),i.fillStyle=K.waterD,cr(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=a*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?K.foam:K.water,wr(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const c of r){const h=pi(c.d)*(.6+a*.4);uu(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(a*10+c.ph)*1.5,2)}a>.08&&cs(i,Rh,l,u-4,a<.2?2:3,{g:K.moss,p:K.pink,P:K.pinkL,y:K.eye})}}),z({type:"custom",layer:"top",dur:.55,x:t,y:e,draw(i,a){const[s,l]=T(t,e),u=pi(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const c of o){const h=s+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,p=ie(c.h*f),g=Math.cos(c.a)*a*10;p<2||(i.fillStyle=K.waterD,i.fillRect(ie(h-c.w/2+g*.5),ie(d-p),c.w,p),i.fillStyle=K.water,i.fillRect(ie(h-c.w/2+g*.5),ie(d-p),c.w-2,p-2),i.fillStyle=K.foam,i.fillRect(ie(h-c.w/2+g-1),ie(d-p-3),c.w+2,4))}}})}te.rana_W=t=>{if(t.ex===void 0)return;const e=t.x,n=t.y,r=t.ex,o=t.ey,i=t.dur||.45,a=1.7,s=r-e,l=o-n,u=Math.hypot(s,l)||1;z({type:"custom",layer:"ground",dur:.5,x:e,y:n,draw(f,c){const[h,d]=T(e,n);f.globalAlpha=1-c,f.fillStyle=K.waterD,wr(f,h,d,10+c*34,18,3,0,3),f.fillStyle=K.foam,wr(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)I(e,n,.15,-s/u*m(1,2.5)+m(-.8,.8),-l/u*m(1,2.5)+m(-.8,.8),m(1.5,3),.5,f%3?K.mud:K.water,3,9,!1);z({type:"custom",layer:"top",dur:i+.25,x:e,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),p=c>.75?(1-c)*4:1;for(let g=d;g<=h;g+=.05){const[y,x]=T(e+s*g,n+l*g,.3+6.8*g*(1-g)),M=(g-d)/Math.max(.01,h-d);f.globalAlpha=p*(.3+.7*M),f.fillStyle=K.deep,f.fillRect(ie(y)-3,ie(x)-3,6,6),f.fillStyle=M>.7?K.padL:K.pad,f.fillRect(ie(y)-2,ie(x)-2,4,4)}}}),z({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,Eh(r,o,a))}})};te.rana_E=t=>{const e=t.x,n=t.y,r=Array.from({length:9},(i,a)=>{const s=a/9*tn+m(-.3,.3),l=a===0?0:m(.3,.85);return{x:e+Math.cos(s)*l,y:n+Math.sin(s)*l,r:m(14,22),z:m(.15,.6),up:m(.2,.5),col:[K.smokeA,K.smokeB,K.smokeC][a%3],dl:m(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:m(.3,.6)}));z({type:"custom",layer:"top",add:!0,dur:.14,x:e,y:n,draw(i,a){const[s,l]=T(e,n,.2),u=ie(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=K.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),z({type:"custom",layer:"top",dur:1.5,x:e,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,c]=T(l.x,l.y,l.z+l.up*u),h=ie(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",cr(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,cr(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",cr(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,c]=T(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const p=ie(f+d*6)-3,g=ie(c)-3;if(i.fillStyle=K.deep,i.fillRect(p-1,g-1,8,h?3:7),h){i.fillStyle=K.moss,i.fillRect(p,g,6,1);continue}i.fillStyle=K.eye,i.fillRect(p,g,6,5),i.fillStyle=K.ink,i.fillRect(p+1,g+2,4,1),i.fillStyle="#ffffff",i.fillRect(p+1,g,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*tn,s=m(1,2.6);I(e,n,.3,Math.cos(a)*s,Math.sin(a)*s,m(1,2.5),.6,i%2?K.ink:K.moss,2,7,!1,.92)}};function Uh(t,e,n,r){z({type:"custom",layer:"top",dur:.42,x:t,y:e,draw(o,i){const a=T(t,e,.35),s=T(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?K.ink:K.moss;for(let c=u;c<=l;c+=.03){const h=ie((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*c,p=a[1]+(s[1]-a[1])*c+Math.sin(c*14)*1.5;o.fillRect(ie(d-h/2),ie(p-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();I(t+(n-t)*i,e+(r-e)*i,.35,m(-.6,.6),m(-.6,.6),m(.2,1),.5,K.ink,3,6,!1)}}function ka(t,e,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){t.fillStyle=f===0?K.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const p=(d/u*2-1)*a,g=Math.max(1,ie(h*(1-Math.abs(d/u*2-1))));t.fillRect(ie(e+s*p*o/2-g/2+c),ie(n+l*p*o/2-g/2+c),g,g)}}}function kh(t,e){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+m(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));z({type:"custom",layer:"top",dur:.5,x:t,y:e,draw(o,i){const a=i*.5,[s,l]=T(t,e,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),ka(o,s+u.ox,l+u.oy,u.a,u.len,ie(6*h)+1,c),ka(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,ie(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),z({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:e,draw(o,i){const a=i*.4,[s,l]=T(t,e,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const c=ie(16*(1-f/.1))+2;o.fillStyle=K.padL,o.fillRect(s+u.ox-c,l+u.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*tn,i=m(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:m(5,11),drips:[m(-1,1),m(-1,1),m(-1,1)]}});z({type:"custom",layer:"ground",dur:1.8,x:t,y:e,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=T(t+a.dx,e+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=K.inkP,cr(o,s,l,u,u*.5,2),o.fillStyle=K.ink,cr(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(ie(s+f*u*1.8),ie(l+f*u*.6),3,2);o.fillStyle=K.moss,o.fillRect(ie(s+u*.4),ie(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*tn,a=m(1.5,4.5);I(t,e,.5,Math.cos(i)*a,Math.sin(i)*a,m(1,3),m(.4,.7),o%5?K.ink:K.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*tn;I(t,e,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,K.padL,2,0,!0)}se(8)}te.rana_R=t=>{if(t.type==="blink"){Uh(t.x,t.y,t.ex??t.x,t.ey??t.y);return}kh(t.x,t.y)};lt.rana=t=>{const e=t.x,n=t.y,r=Math.random()<.5?-1:1;z({type:"custom",layer:"top",dur:.2,x:e,y:n,draw(o,i){const[a,s]=T(e,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],c=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];o.fillStyle=K.moss,hn(o,u,h,5),l>=.35&&hn(o,f,d,5),o.fillStyle="#ffffff",hn(o,u,h,2),l>=.35&&hn(o,f,d,2)}});for(let o=0;o<5;o++)I(e,n,.45,m(-1.2,1.2),m(-1.2,1.2),m(1,2.2),.35,o%2?K.water:K.padL,2,8,!1)};const Dh="#7a879c",Lh="#363e50",Gh="#c9d3e2",Da="#e8b858",Nh="#ffa040",fu="#f2e8d2",so="#cdbb9a",Js="#a08f72",cu="#6f6250",Cr="#33241a",Bh="#8a7356",hu="#9a948a",du="#7a7468",mu="#5e584e",$h="#c4beb2",Hh="#ffe2a0",Wh="#d89a3a",Xh="#fff8e6",Vh="#ff5a1a",Ge=Math.round,gi=Math.PI*2;function et(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(Ge(e),Ge(n),r,o)}function go(t,e,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=a;for(let l=0;l<=s;l++)t.fillRect(Ge(e+(r-e)*l/s-i/2),Ge(n+(o-n)*l/s-i/2),i,i)}function La(t,e,n,r,o){const[i,a]=T(e,n),s=r*ee.HW*Math.SQRT2,l=s*.5;t.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));t.fillRect(Ge(i-f),Ge(a+u),Ge(f*2),2)}}function pu(t,e){const n=(t-e)*ee.HW,r=(t+e)*ee.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const gu=t=>{const e=Ye(t);return e&&!e.dead&&!nt(e)?e:null},ti=()=>[hu,du,mu,Js][Math.random()*4|0];function Yh(t,e,n,r,o){if(e=Ge(e)-6,n=Ge(n)-5,et(t,e,n,12,10,Lh),et(t,e+1,n+1,10,8,Dh),et(t,e+1,n+1,10,2,Gh),et(t,e+2,n+6,2,2,o),et(t,e+8,n+6,2,2,o),r>=0&&r<9){const i=t.globalAlpha;t.globalAlpha=i*.7,et(t,e+1+r,n+1,2,8,"#ffffff"),t.globalAlpha=i}}const qh=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],Kh=[Hh,Wh,Xh,Vh];function yi(t,e,n,r,o){e=Ge(e),n=Ge(n);for(const[i,a,s,l,u]of qh){const f=o>0?i:-i-s;t.fillStyle=Kh[u],t.fillRect(e+f*r,n+a*r,s*r,l*r)}}lt.rino=t=>{z({type:"custom",layer:"top",add:!0,dur:.24,x:t.x,y:t.y,draw(e,n){const[r,o]=T(t.x,t.y,.4),i=Ge(10*Math.min(1,n*2.5));e.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;et(e,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":fu)}}});for(let e=0;e<3;e++)I(t.x,t.y,.3,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3),.5,ti(),3,10,!1,.95);for(let e=0;e<2;e++)I(t.x+m(-.2,.2),t.y+m(-.2,.2),.1,m(-.4,.4),m(-.4,.4),.5,.5,so,5,0,!1,.9);se(1.5)};te.rino_Q=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=Math.max(.12,t.dur||.3),o=e-t.x,i=n-t.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[c,h]=pu(o,i),d=Math.max(4,Math.ceil(a*4)),p=Array.from({length:d+1},(v,_)=>m(-.06,.06)+(_%2?.05:-.05)),g=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:m(.15,.35)}:null),y=Array.from({length:8},(v,_)=>({k:(_+.5)/8,o:m(-.35,.35),r:Array.from({length:4},()=>[m(-10,6),m(-8,2),Ge(m(6,12)),Ge(m(5,8)),[so,Js,so,cu][Math.random()*4|0]])}));let x=0,M=!1;z({type:"custom",layer:"ground",dur:r+1.6,x:t.x,y:t.y,draw(v,_,S){const R=_*S.dur,F=Math.min(1,R/r),O=Math.floor(F*d);v.globalAlpha=.8*Math.min(1,(S.dur-R)/.6);for(const k of[-.3,.3]){const U=k>0?1:-1;let[B,H]=T(t.x+s*k,t.y+l*k);for(let Y=1;Y<=O;Y++){const ne=Y/d,ue=k+p[Y]*U,[w,C]=T(t.x+o*ne+s*ue,t.y+i*ne+l*ue);go(v,B,H+1,w,C+1,2,Bh),go(v,B,H,w,C,2,Cr);const A=g[Y];if(A&&A.s===U){const[E,D]=T(t.x+o*ne+s*(ue+U*A.l)+u*A.l*.5,t.y+i*ne+l*(ue+U*A.l)+f*A.l*.5);go(v,w,C,E,D,1,Cr)}B=w,H=C}}}}),z({type:"custom",layer:"top",dur:r+1,x:t.x,y:t.y,draw(v,_,S){const R=_*S.dur,F=Math.min(1,R/r);for(;x<18*F;){x++;const O=Math.random()*F;I(t.x+o*O+m(-.3,.3),t.y+i*O+m(-.3,.3),.1,-u*m(.5,2)+m(-1,1),-f*m(.5,2)+m(-1,1),m(2,4),m(.5,.8),ti(),3,12,!1,.95)}if(R>=r&&!M){M=!0,se(5);for(let O=0;O<12;O++){const k=Math.atan2(f,u)+m(-.9,.9),U=m(2,4.5);I(e+u*.5,n+f*.5,.2,Math.cos(k)*U,Math.sin(k)*U,m(2,4),m(.5,.8),ti(),3,12,!1,.95)}}for(const O of y){const k=R-O.k*r;if(k<0||k>.9)continue;const U=k/.9,B=1+U*1.2,[H,Y]=T(t.x+o*O.k+s*O.o,t.y+i*O.k+l*O.o,.15+U*.5);v.globalAlpha=.6*(1-U);for(const ne of O.r)et(v,H+ne[0]*B,Y+ne[1]*B,Ge(ne[2]*B),Ge(ne[3]*B),ne[4])}}}),z({type:"custom",layer:"top",add:!0,dur:r+.08,x:t.x,y:t.y,draw(v,_,S){const R=gu(t.uid);if(!R)return;const F=_*S.dur;v.globalAlpha=F>r?Math.max(0,1-(F-r)/.08):1;const[O,k]=T(R.x+u*.6,R.y+f*.6,.45);for(let H=0;H<6;H++){const Y=7-H;et(v,O+c*H*2.5-Y/2,k+h*H*2.5-Y/2,Y,Y,H<2?fu:"#ffffff")}const[U,B]=T(R.x,R.y,.5);v.globalAlpha*=.6;for(let H=0;H<5;H++){const Y=(H-2)*9,ne=24+H*13%3*10;go(v,U-h*Y-c*26,B+c*Y-h*26,U-h*Y-c*(26+ne),B+c*Y-h*(26+ne),1,"#fff6e0")}}})};te.rino_W=t=>{const e=t.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=gu(t.uid);if(!l)return;const u=a*s.dur,f=u>e?Math.max(0,1-(u-e)/.25):1;if(f<=0)return;const[c,h]=T(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const p=Math.min(1,Math.max(0,(u-d.t0)/.18));if(p<=0)continue;if(p>=1&&!d.hit){d.hit=!0;for(let v=0;v<3;v++)I(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,m(-2,2),m(-2,2),m(1,2.5),.3,v?Nh:Da,2,8,!0,.9)}const g=(1-p)*(1-p)*46,y=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,M=u-d.t0-.18;i.globalAlpha=f,Yh(i,y+Math.cos(d.a)*g,x+Math.sin(d.a)*g*.5-g*.6,Ge((b.T*30+d.a*6)%30),M>=0&&M<.14?"#ffffff":Da)}};z({type:"custom",layer:"ground",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!1)}),z({type:"custom",layer:"top",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!0)}),se(3)};te.rino_E=t=>{const e=t.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*gi+m(-.08,.08),j:m(.9,1.08),w:Ge(m(4,7)),h:Ge(m(3,6)),col:[hu,du,mu][i%3]}));z({type:"custom",layer:"ground",dur:1.4,x:t.x,y:t.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=e*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,La(o,t.x,t.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,La(o,t.x,t.y,.4,"#24180e");for(const[f,c,h]of[[.45,Cr,2],[.7,Cr,2],[.95,so,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const p=d/36*gi,[g,y]=T(t.x+Math.cos(p)*l*f,t.y+Math.sin(p)*l*f);et(o,g-h/2,y-1,h,2,c)}}for(const f of r){const[c,h]=T(t.x+Math.cos(f.a)*l*f.j,t.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,et(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=u,et(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),et(o,c-f.w/2,h-f.h-d,f.w,1,$h)}}}),z({type:"custom",layer:"top",add:!0,dur:.18,x:t.x,y:t.y,draw(o,i){const[a,s]=T(t.x,t.y,.05),l=Ge(30+110*i);o.globalAlpha=1-i,et(o,a-l,s-1,l*2,2,"#fff2d0"),et(o,a-l*.6,s-3,Ge(l*1.2),1,"#ffd890");for(const u of[-1,1])et(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=m(0,gi),a=e*m(1.5,2.5);I(t.x+Math.cos(i)*.3,t.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,m(3,6),m(.5,.9),ti(),Math.random()<.3?4:3,14,!1,.96)}se(8)};te.rino_R=t=>{const e=t.ux||0,n=t.uy||0,r=Math.atan2(n,e),o=t.range||3.6,i=t.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[t.x+Math.cos(u.a)*h,t.y+Math.sin(u.a)*h,c,h]};z({type:"custom",layer:"ground",dur:1.7,x:t.x,y:t.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,p]=T(t.x,t.y);u.moveTo(Ge(d),Ge(p));for(let g=0;g<=12;g++){const y=r-i+2*i*g/12;[d,p]=T(t.x+Math.cos(y)*o,t.y+Math.sin(y)*o),u.lineTo(Ge(d),Ge(p))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const g of s){const[,,,y]=l(g,c),x=g.a+Math.PI/2;for(let M=.6;M<y;M+=.55){const v=Math.round(M/.55)%2?.12:-.12,[_,S]=T(t.x+Math.cos(g.a)*M+Math.cos(x)*v,t.y+Math.sin(g.a)*M+Math.sin(x)*v);et(u,_-4,S-1,3,3,Cr),et(u,_+1,S-1,3,3,Cr)}}}}),z({type:"custom",layer:"top",add:!0,dur:a,x:t.x,y:t.y,draw(u,f){const c=f*a;for(const h of s){const[d,p,g]=l(h,c);if(c<h.del)continue;const y=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(y<=0)continue;const[x,M]=T(d,p,.55),[v]=pu(Math.cos(h.a),Math.sin(h.a)),_=v>=0?1:-1,S=g<.5?3:4,[R,F]=T(t.x,t.y,.55),O=x-R,k=M-F;u.globalAlpha=y*.18,yi(u,x-O*.35,M-k*.35,S,_),u.globalAlpha=y*.35,yi(u,x-O*.17,M-k*.17,S,_),u.globalAlpha=y,yi(u,x,M,S,_)}}});for(let u=0;u<40;u++){const f=r+m(-i,i),c=m(.4,o*.8),h=m(2,5);I(t.x+Math.cos(f)*c,t.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,m(.5,1.5),m(.5,.9),[so,Js,cu][u%3],4,3,!1,.9)}se(10)};const Re=Math.round,le={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function ni(t,e,n,r,o){t.fillStyle=o,t.fillRect(Re(e-r/2),Re(n-r/2),r,r)}const ao=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1;function jh(t,e,n,r,o,i){const a=e.length,s=e[0].length,l=Re(n-s*o/2),u=Re(r-a*o/2);for(let f=0;f<a;f++)for(let c=0;c<s;c++){const h=i[e[f][c]];h&&(t.fillStyle=h,t.fillRect(l+c*o,u+f*o,o,o))}}function yu(t,e,n,r,o){const i=Re(e),a=Re(n);o&&(t.fillStyle=o,t.fillRect(i-5,a-3,10,2),t.fillRect(i-7,a-1,14,2),t.fillRect(i-5,a+1,10,2)),t.fillStyle=r,t.fillRect(i-5,a-5,10,2),t.fillRect(i-5,a+3,10,2),t.fillRect(i-7,a-3,2,2),t.fillRect(i+5,a-3,2,2),t.fillRect(i-9,a-1,2,2),t.fillRect(i+7,a-1,2,2),t.fillRect(i-7,a+1,2,2),t.fillRect(i+5,a+1,2,2)}function xi(t,e,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-e,o-n)/i));t.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;t.fillRect(Re(e+(r-e)*f-a/2),Re(n+(o-n)*f-a/2),a,a)}}const Zh=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function xu(t,e,n,r,o,i,a,s){t.fillStyle=le.deep,t.fillRect(e,n-o,r,o),t.fillStyle=le.teal,t.fillRect(e,n-o,r,Re(o*.62)),t.fillStyle=le.aqua,t.fillRect(e,n-o,r,Re(o*.3)),t.fillStyle=le.foam,t.fillRect(e+i,n-o-2+a,r,3),s&&(t.fillStyle=le.white,t.fillRect(e+i*2,n-o-4+a,3,2))}te.tortuga_Q=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||1.7,o=Ye(t.uid);let i=1,a=0;if(o){const v=e-o.x,_=n-o.y,S=Math.hypot(v,_);S>.05&&(i=v/S,a=_/S)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*ee.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-a)*ee.HW,p=(i+a)*ee.HH,g=Math.hypot(d,p)||1,y=Re(d/g*3),x=Re(p/g*2);z({type:"custom",layer:"ground",dur:2,x:e,y:n,draw(v,_){const S=Math.min(1,_*3)*(_>.6?(1-_)/.4:1);ze(e,n,r*.95,null,`rgba(18,80,110,${.32*S})`);for(let R=0;R<2;R++){const F=(_*2.4+R*.5)%1,O=r*.9*F;v.globalAlpha=S*(1-F);for(let k=0;k<22;k++){const U=k/22*6.283,[B,H]=T(e+Math.cos(U)*O,n+Math.sin(U)*O);ni(v,B,H,2,le.sea)}}v.globalAlpha=1}});const M={n:0,sp:!1};return z({type:"custom",layer:"top",dur:.75,x:e,y:n,draw(v,_){const S=-r*.95+_*r*1.9,R=Math.sin(Math.min(1,_*1.08)*Math.PI),F=Math.sqrt(Math.max(0,r*r-S*S))+.25,O=Math.floor(F*2/c);for(let k=0;k<=O;k++){const U=u>0?-F+k*c:F-k*c,B=1-Math.abs(U)/F,H=.85+.15*Math.sin(U*9+_*24),Y=Re((8+30*Math.sqrt(Math.max(0,B)))*R*H/2)*2;if(Y<4)continue;const[ne,ue]=T(e+i*S+s*U,n+a*S+l*U);xu(v,Re(ne-h/2),Re(ue),h,Y,y,x,(U*7.7+_*30|0)%3===0)}if(M.n<32&&R>.3)for(let k=0;k<2;k++){M.n++;const U=m(-F,F);I(e+i*S+s*U,n+a*S+l*U,.35*R,i*m(.8,2),a*m(.8,2),m(1,2.5),.45,Math.random()<.5?le.foam:le.sea,2,7,!1)}if(!M.sp&&_>.82){M.sp=!0;for(let k=0;k<14;k++){const U=m(-r*.6,r*.6);I(e+i*r*.8+s*U,n+a*r*.8+l*U,.2,i*m(1,3)+m(-.5,.5),a*m(1,3)+m(-.5,.5),m(2,4),.55,le.aqua,3,9,!1)}se(3)}}}),!0};function Qh(t,e){z({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.1),a=ao(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),c=Math.sin(l)>0;n.globalAlpha=a*(c?1:.45),ni(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,s%2?le.sea:le.foam)}if(r>.45){n.globalAlpha=ao((r-.45)/.55,.2,.6);const s=Re(i-72-(r-.45)*20),l=Re(o);n.fillStyle=le.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)I(t+m(-.3,.3),e+m(-.3,.3),.2,0,0,m(1.2,2.2),.8,Math.random()<.5?le.sea:le.foam,2,0,!0);return!0}te.tortuga_W=t=>{if(t.type==="heal")return Qh(t.x,t.y);if(t.type!=="healring")return!1;const e=t.x,n=t.y,r=t.radius||4.2,o=t.uid;z({type:"custom",layer:"ground",add:!0,dur:1.1,x:e,y:n,draw(s,l){const u=ao(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,p=f*2.094+h*5+l*9,[g,y]=T(e+Math.cos(p)*d,n+Math.sin(p)*d);s.globalAlpha=u*(.35+.65*h),ni(s,g,y,h>.6?3:2,c%3===0?le.foam:c%3===1?le.sea:le.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+m(-.2,.2),d:s*.03+m(0,.05)});const a={"#":le.shell,a:le.sand};return z({type:"custom",layer:"top",dur:1.15,x:e,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=u.a0+c*4.2+l*2,[p,g]=T(e+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),jh(s,Zh,p,g,2,a)}s.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:n,draw(s,l){const u=Ye(o),f=u?u.x:e,c=u?u.y:n,[h,d]=T(f,c,.95),p=Re(h),g=Re(d),y=ao(l,.08,.5),x=Re(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=y*.3,s.fillStyle=le.lamp,s.fillRect(p-8,g-8,16,16),s.globalAlpha=y,s.fillRect(p-x,g-1,x*2,2),s.fillRect(p-1,g-x,2,x*2),s.fillStyle=le.lampW,s.fillRect(p-3,g-3,6,6);for(let M=0;M<8;M++){const v=M*.785+l*5,_=10+l*30;ni(s,p+Math.cos(v)*_,g+Math.sin(v)*_*.5+l*40,2,le.lamp)}s.globalAlpha=1}}),!0};const vu=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([t,e],n)=>{for(let r=0;r<e;r++)vu.push({th:r/e*6.283+n*.31,ph:t,row:n})});te.tortuga_E=t=>{if(t.type!=="stoneskin")return!1;const e=t.uid,n=t.dur||3,r=t.x,o=t.y,i={broke:!1};z({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=Ye(e);if(!l||l.dead)return;const u=s*n,[f,c]=T(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,p=Math.max(0,(u-(n-.25))/.25),g=36*d,y=18*d,x=62*d,M=u*1.6%2.2-.3,v=vu.map(_=>{const S=_.th+u*.5,R=Math.cos(_.ph);return{d:_,th:S,x:f+Math.cos(S)*g*R+Math.cos(S)*p*30,y:c+Math.sin(S)*y*R-Math.sin(_.ph)*x-4-p*10+p*p*30,z:Math.sin(S)*R}}).sort((_,S)=>_.z-S.z);for(const _ of v){const S=u-(3-_.d.row)*.05;if(S<0)continue;_.y-=(1-Math.min(1,S/.1))*14;const R=_.z>-.15,F=Math.abs(_.d.ph-M)<.22;a.globalAlpha=(R?.85:.35)*(1-p)*Math.min(1,S*10),yu(a,_.x,_.y,S<.06||F?le.white:le.foam,F?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&p>0){i.broke=!0;for(let _=0;_<16;_++){const S=m(0,6.283),R=m(1.5,3.5);I(l.x,l.y,m(.2,.9),Math.cos(S)*R,Math.sin(S)*R,m(1,3),.5,Math.random()<.5?le.foam:le.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;I(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,m(1.5,2.5),.4,Math.random()<.5?le.sand:le.shell,2,3,!1)}return!0};te.tortuga_R=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}z({type:"custom",layer:"ground",dur:1.9,x:e,y:n,draw(u,f){const c=ao(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);ze(e,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(p,g)=>T(e+p*h,n+g*h);for(let p=0;p<2;p++){u.globalAlpha=c*(p?.75:.85);const g=p?le.lamp:le.shellD,y=p?2:3,x=p?-1:0,M=p?-2:0;for(const[v,_]of i)for(let S=0;S<6;S++){const R=S*Math.PI/3,F=(S+1)*Math.PI/3,[O,k]=d(v+Math.cos(R)*o,_+Math.sin(R)*o),[U,B]=d(v+Math.cos(F)*o,_+Math.sin(F)*o);xi(u,O+x,k+M,U+x,B+M,5,y,g)}for(let v=0;v<22;v++){const _=v/22*6.283,[S,R]=d(Math.cos(_)*r*.66,Math.sin(_)*r*.66),[F,O]=d(Math.cos(_)*r*.86,Math.sin(_)*r*.86);xi(u,S+x,R+M,F+x,O+M,5,y,g);const k=(v+1)/22*6.283,[U,B]=d(Math.cos(k)*r*.86,Math.sin(k)*r*.86);xi(u,F+x,O+M,U+x,B+M,6,y,g)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const c=u/a*6.283,h=f/a*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};z({type:"custom",layer:"top",dur:.95,x:e,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),p=Math.sin(Math.min(1,f*1.05)*Math.PI),g=[];for(let y=0;y<a;y++){const x=y/a*6.283;g.push(T(e+Math.cos(x)*d,n+Math.sin(x)*d))}for(const y of s){const x=y/a*6.283,[M,v]=g[y],_=g[(y+1)%a][0],S=Math.max(4,Math.ceil(Math.abs(_-M))+2),R=Re((20+34*p)*(.82+.18*Math.sin(x*5+f*20))*p/2)*2;if(R<4)continue;const F=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=F?.82:1;const O=F?2:-2;xu(u,Re(Math.min(M,_)-1),Re(v),S,R,Re(Math.cos(x-.785)*3),O,(y*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let y=0;y<16;y++){const x=m(0,6.283);I(e+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*m(1,2.5),Math.sin(x)*m(1,2.5),m(1.5,3),.6,Math.random()<.5?le.foam:le.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=m(0,6.283),c=m(2,5);I(e+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,m(3.5,6.5),m(.8,1.1),[le.aqua,le.sea,le.foam,le.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return se(10),!0};lt.tortuga=t=>{const e=t.x,n=t.y,r=!!t.big;z({type:"custom",layer:"ground",dur:r?.5:.4,x:e,y:n,draw(i,a){const[s,l]=T(e,n),u=Re(s),f=Re(l);for(let c=0;c<(r?3:2);c++){const h=a*1.3-c*.18;if(h<=0||h>=1)continue;const d=Re(6+h*(r?34:24)),p=Re(d/2);i.globalAlpha=1-h,i.fillStyle=c?le.sea:le.foam,i.fillRect(u-d,f-p,d*2,2),i.fillRect(u-d,f+p-2,d*2,2),i.fillRect(u-d,f-p,2,p*2),i.fillRect(u+d-2,f-p,2,p*2)}i.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.18,x:e,y:n,draw(i,a){const[s,l]=T(e,n,.5);i.globalAlpha=1-a,yu(i,s,l-a*8,le.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=m(0,6.283),s=m(1,2.5);I(e,n,.4,Math.cos(a)*s,Math.sin(a)*s,m(1.5,3),.4,i%2?le.aqua:le.foam,2,9,!1)}};const Q=Math.round,jn=Math.PI*2,V={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},bu=t=>t*ee.HW*Math.SQRT2;function Ne(t,e,n,r){r=Math.max(1,Q(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)t.fillRect(Q(e[0]+(n[0]-e[0])*s/i-a),Q(e[1]+(n[1]-e[1])*s/i-a),r,r)}function Jh(t,e,n,r,o,i,a=!1){const s=e[0].length,l=e.length,u=Q(n-s*o/2),f=Q(r-l*o/2);for(const c in i){t.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<s;d++)e[h][a?s-1-d:d]===c&&t.fillRect(u+d*o,f+h*o,o,o)}}function e0(t,e,n,r,o,i){const a=Math.abs(r),s=Q(e),l=Q(n);t.fillStyle=i,t.fillRect(s-1,l+2,1,2),a>.55?(t.fillStyle=o,t.fillRect(s-3,l,6,2),t.fillRect(s-2,l-1,4,1),t.fillRect(s-2,l+2,3,1),t.fillStyle=i,t.fillRect(s-2,l+1,4,1)):a>.2?(t.fillStyle=o,t.fillRect(s-2,l-1,3,4),t.fillStyle=i,t.fillRect(s-1,l,1,2)):(t.fillStyle=i,t.fillRect(s-1,l-1,1,4))}const Lr=new Map;function Mu(t){if(Lr.has(t))return!1;if(Lr.size>300)for(const[e,n]of Lr)b.T-n>4&&Lr.delete(e);return Lr.set(t,b.T),!0}function t0(t){const e=b.game,n=[];if(!e)return n;const r=(t.w||.6)*.6;for(const o of e.units)o.dead||o.team===t.team||o.team==="neutral"&&o.kind!=="monster"||nt(o)||Math.hypot(o.x-t.x,o.y-t.y)<r+(o.r||.4)&&n.push(o);return n}const n0=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];lt.zorra=t=>{const e=t.x,n=t.y,r=!!t.big;if(z({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:e,y:n,draw(o,i){const[a,s]=T(e,n,.5),l=Q(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=V.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+c*l*.8-u/2,u,u);o.fillStyle=V.f2;for(let f=0;f<6;f++){const c=f/6*jn+i*3;o.fillRect(Q(a+Math.cos(c)*(6+i*8))-1,Q(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=V.cream,o.fillRect(a-2,s-2,4,4))}}),I(e,n,.6,m(-.5,.5),m(-.5,.5),.4,.8,Math.random()<.5?V.leaf:V.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)I(e,n,.5,m(-1.5,1.5),m(-1.5,1.5),m(1,2),.3,V.f1,2,4,!0)};At.zorra_A=(t,e,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(c,h=0)=>[n+a*c-s*h,r+s*c+a*h];qe(!0);const u=Xt();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?V.f2:V.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(Q(h[0])-2+(c>>1),Q(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,qe(!1),t.fillStyle=V.woodD,Ne(t,l(-13),l(3),3),t.fillStyle=V.wood,Ne(t,l(-12),l(2),1),t.fillStyle=V.steel,Ne(t,l(3),l(7),3),t.fillStyle="#ffffff",Ne(t,l(6),l(8),1),t.fillStyle=V.leaf,Ne(t,l(-13,0),l(-9,-3),2),t.fillStyle=V.leafD,Ne(t,l(-13,1),l(-10,2),2);const f=typeof e.homing=="object"?e.homing:e.homing!=null?Ye(e.homing):null;f&&!f.dead&&Math.hypot(f.x-e.x,f.y-e.y)<.25+(f.r||.4)*.5+(e.speed||15)*.035&&Mu("za"+e.id)&&(lt.zorra({x:f.x,y:f.y,big:e.dmg>(e.src&&e.src.ad||0)*1.3}),Me.sfx("atk_zorra",f.x,f.y,.6))};te.zorra_Q=t=>{const e=t.ux||1,n=t.uy||0,r=t.x+e*.45,o=t.y+n*.45,i=T(t.x,t.y),a=T(t.x+e,t.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;z({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),p=-u,g=l;f.globalAlpha=c<.6?1:(1-c)/.4;const y=[];for(let v=-5;v<=5;v++)y.push([h+p*v*3.4-l*v*v*.45,d+g*v*3.4-u*v*v*.45]);f.fillStyle=V.woodD;for(const v of y)f.fillRect(Q(v[0])-2,Q(v[1])-2,4,4);f.fillStyle=V.wood;for(const v of y)f.fillRect(Q(v[0])-1,Q(v[1])-1,2,2);f.fillStyle=V.leaf;for(const v of[y[0],y[10]])f.fillRect(Q(v[0])-2,Q(v[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),M=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=V.cream,Ne(f,y[0],M,1),Ne(f,M,y[10],1)}}),z({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),p=4+c*16;f.fillStyle=V.f1;for(let g=0;g<8;g++){const y=g/8*jn;f.fillRect(Q(h+l*8+Math.cos(y)*p)-2,Q(d+u*8+Math.sin(y)*p*.7)-2,4,4)}}});for(let f=0;f<5;f++)I(r,o,.55,-n*m(-2,2)+e*m(0,1),e*m(-2,2)+n*m(0,1),m(.5,1.5),.9,f%2?V.leaf:V.leafL,3,1.5,!1,.95)};At.zorra_Q=(t,e,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,c=0)=>[n+a*f-s*c,r+s*f+a*c];qe(!0);const u=Xt();for(let f=0;f<=16;f++){const c=f/16,h=Q(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,p=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?V.cream:c>.45?V.fox:V.f1,u.fillRect(Q(p[0]-h/2),Q(p[1]-h/2),h,h)}u.globalAlpha=1,qe(!1),t.fillStyle=V.woodD,Ne(t,l(-22),l(4),4),t.fillStyle=V.wood,Ne(t,l(-21),l(3),2),t.fillStyle="#20202a",Ne(t,l(3,-4),l(12),3),Ne(t,l(3,4),l(12),3),t.fillStyle=V.steel,Ne(t,l(4,-2),l(11),2),Ne(t,l(4,2),l(11),2),t.fillStyle="#ffffff",Ne(t,l(9),l(13),2);for(const f of[-1,1])t.fillStyle=V.leafD,Ne(t,l(-23,0),l(-15,f*5),3),t.fillStyle=V.leaf,Ne(t,l(-22,f),l(-16,f*4),2),t.fillStyle=V.leafL,t.fillRect(Q(l(-17,f*4)[0]),Q(l(-17,f*4)[1]),2,2);Math.random()<.3&&I(e.x,e.y,e.z||.45,m(-.4,.4),m(-.4,.4),-.2,.7,Math.random()<.6?V.leaf:V.autumn,3,.6,!1,.95);for(const f of t0(e))if(Mu("zq"+e.id+":"+f.id)){const c=e.vx||1,h=e.vy||0,d=Math.hypot(c,h)||1;z({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(p,g){const y=T(f.x-c/d*.7,f.y-h/d*.7,.5),x=T(f.x+c/d*.9,f.y+h/d*.9,.5);p.globalAlpha=1-g,p.fillStyle=V.fox,Ne(p,y,x,Q(6*(1-g))+1),p.fillStyle=V.cream,Ne(p,y,x,2)}});for(let p=0;p<6;p++)I(f.x,f.y,.5,c/d*m(1,3)+m(-.8,.8),h/d*m(1,3)+m(-.8,.8),m(.5,1.5),.35,p%2?V.f1:V.fox,2,3,!0)}};te.zorra_W=t=>{const e=t.uid,n=t.dur||4;let r=t.x,o=t.y;const i=Array.from({length:9},(a,s)=>({a:s/9*jn,h:s/9,sp:m(4.5,6),col:[V.leaf,V.leafL,V.autumn][s%3],dk:s%3===2?V.foxD:V.leafD,r:m(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*jn,l=m(1.5,2.5);I(t.x+Math.cos(s)*.3,t.y+Math.sin(s)*.3,m(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,m(.8,1.6),m(.6,.9),[V.leaf,V.leafL,V.autumn][a%3],3,1,!1,.94)}z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,uid:e,draw(a,s,l){const u=Ye(e),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const g of i)I(r+Math.cos(g.a+f*g.sp)*g.r,o+Math.sin(g.a+f*g.sp)*g.r,.5,Math.cos(g.a)*2,Math.sin(g.a)*2,.5,.7,g.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,p]=T(r,o,.35);a.globalAlpha=.55*h,a.fillStyle="#e8fff0";for(let g=0;g<2;g++){const y=f*7+g*Math.PI,x=bu(.62)*c;for(let M=0;M<7;M++){const v=y+M*.16;a.fillRect(Q(d+Math.cos(v)*x)-1,Q(p+Math.sin(v)*x*.45-g*14),3-(M>4?1:0),2)}}for(const g of i){const y=g.a+f*g.sp,x=(g.h+f*.45)%1,M=g.r*c*(1-x*.35),[v,_]=T(r+Math.cos(y)*M,o+Math.sin(y)*M,.15+x*1.1);a.globalAlpha=h*(Math.sin(y)>0?1:.55)*Math.min(1,(1-x)*4),e0(a,v,_,Math.sin(f*11+g.a*3),g.col,g.dk)}}})};te.zorra_E=t=>{const e=t.x,n=t.y,r=t.ex??t.x,o=t.ey??t.y,i=t.dur||.22,a=T(e,n),s=T(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:e+(r-e)*f,y:n+(o-n)*f}));z({type:"custom",layer:"top",add:!0,dur:i+.45,x:e,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const p=h-d.s*i;if(p<0||p>.42)continue;const g=.8*(1-p/.42),[y,x]=T(d.x,d.y,.32+p*.3);f.globalAlpha=g,Jh(f,n0,y,x,3,{o:V.f2,t:V.f1,c:V.f0,w:"#ffffff"},l);for(let M=0;M<4;M++){const v=y+(M-1.5)*9*(l?-1:1),_=Q(4+5*Math.abs(Math.sin(h*30+M*1.7))+p*14);f.fillStyle=M%2?V.f3:V.f1,f.fillRect(Q(v)-2,Q(x-12-_),4,_),f.fillStyle=V.f0,f.fillRect(Q(v)-1,Q(x-12-_),2,2)}}}}),z({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.3+c*.4),p=14+c*10;for(let g=0;g<6;g++){const y=g/6*jn+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+g)),f.fillStyle=g%2?V.f3:V.f2,f.fillRect(Q(h+Math.cos(y)*p)-3,Q(d+Math.sin(y)*p*.5)-3,6,6),f.fillStyle=V.f0,f.fillRect(Q(h+Math.cos(y)*p)-1,Q(d+Math.sin(y)*p*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();I(e+(r-e)*c+m(-.2,.2),n+(o-n)*c+m(-.2,.2),.3,m(-.3,.3),m(-.3,.3),m(.8,1.6),m(.5,.8),[V.f1,V.f2,V.f3][f%3],3,-.5,!0,.95)}};te.zorra_R=t=>{const e=t.x,n=t.y,r=t.radius||3.2,o=3.2,i=Ye(t.uid),a=i?i.x:e-3,s=i?i.y:n-3;let l=a-e,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(y,x)=>({ox:m(-.3,.3),oy:m(-.3,.3),dl:x*.03}));z({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(y,x){const M=x*.5;for(const v of c){const _=(M-v.dl)/.35;if(_<0||_>1)continue;const S=.6+_*4.5,R=a+v.ox-l*_*.8,F=s+v.oy-u*_*.8,O=T(R,F,S),k=T(R+l*.15,F+u*.15,S-.4);y.globalAlpha=1-_*.5,y.fillStyle=V.fox,Ne(y,k,O,3),y.fillStyle=V.f0,y.fillRect(Q(O[0])-2,Q(O[1])-2,4,4)}}});for(let y=0;y<8;y++)I(a,s,.6,m(-.5,.5),m(-.5,.5),m(2,4),.4,y%2?V.gold:V.f1,2,2,!0);const h=28,d=.45,p=Array.from({length:h},(y,x)=>{const M=Math.random()*jn,v=Math.sqrt(Math.random())*r*.92,_=e+Math.cos(M)*v,S=n+Math.sin(M)*v;return{t0:.3+x*(2.5/h)+m(-.04,.04),lx:_,ly:S,sx:_+l*1.8+m(-.3,.3),sy:S+u*1.8+m(-.3,.3),landed:!1,tang:[0,1]}}),g=(y,x)=>T(y.sx+(y.lx-y.sx)*x,y.sy+(y.ly-y.sy)*x,4*(1-x*x));z({type:"custom",layer:"top",add:!0,dur:o,x:e,y:n,draw(y,x){const M=x*o;for(const v of p){const _=(M-v.t0)/d;if(_<0)continue;if(_>=1){if(!v.landed){v.landed=!0,I(v.lx,v.ly,.1,m(-.8,.8),m(-.8,.8),m(1,2),.35,Math.random()<.7?V.f1:V.leaf,2,6,!0);const B=g(v,1),H=g(v,.93),Y=Math.hypot(B[0]-H[0],B[1]-H[1])||1;v.tang=[(B[0]-H[0])/Y,(B[1]-H[1])/Y]}const U=(M-v.t0-d)/.14;if(U<1){const[B,H]=T(v.lx,v.ly),Y=Q(3+U*9);y.globalAlpha=1-U,y.fillStyle=V.gold,y.fillRect(B-Y,H-1,Y*2,2),y.fillRect(B-1,H-Q(Y/2),2,Y)}continue}const S=g(v,_),R=g(v,Math.max(0,_-.07)),F=Math.hypot(S[0]-R[0],S[1]-R[1])||1,O=(S[0]-R[0])/F,k=(S[1]-R[1])/F;y.globalAlpha=.35,y.fillStyle=V.f2;for(let U=1;U<=4;U++){const B=g(v,Math.max(0,_-U*.05));y.fillRect(Q(B[0])-1,Q(B[1])-1,3,3)}y.globalAlpha=1,y.fillStyle=V.fox,Ne(y,[S[0]-O*16,S[1]-k*16],S,3),y.fillStyle=V.gold,Ne(y,[S[0]-O*14,S[1]-k*14],S,1),y.fillStyle="#ffffff",y.fillRect(Q(S[0])-2,Q(S[1])-2,4,4)}}}),z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(y,x,M){const v=x*o,_=x>.85?(1-x)/.15:Math.min(1,v*4),[S,R]=T(e,n),F=bu(r);!M.sh&&v>.75&&(M.sh=!0,se(3)),y.globalAlpha=.7*_,y.fillStyle=V.fox;for(let O=0;O<10;O++){const k=O/10*jn+v*.6,U=S+Math.cos(k)*F,B=R+Math.sin(k)*F*.5,H=-Math.cos(k),Y=-Math.sin(k)*.5;y.fillRect(Q(U)-2,Q(B)-2,4,4),y.fillRect(Q(U+H*6-Y*4)-1,Q(B+Y*6+H*2)-1,3,3),y.fillRect(Q(U+H*6+Y*4)-1,Q(B+Y*6-H*2)-1,3,3)}for(const O of p){if(!O.landed)continue;const[k,U]=T(O.lx,O.ly),B=O.tang[0],H=O.tang[1];y.globalAlpha=_,y.fillStyle="#00000055",y.fillRect(Q(k)-3,Q(U),6,2),y.fillStyle=V.woodD,Ne(y,[k-B*13,U-H*13],[k,U],3),y.fillStyle=V.wood,Ne(y,[k-B*12,U-H*12],[k-B*2,U-H*2],1),y.fillStyle=V.leaf,y.fillRect(Q(k-B*13)-2,Q(U-H*13)-1,2,3),y.fillStyle=V.autumn,y.fillRect(Q(k-B*13),Q(U-H*13)-2,2,3)}}})};var Ve=(t=>(t.Application="application",t.WebGLPipes="webgl-pipes",t.WebGLPipesAdaptor="webgl-pipes-adaptor",t.WebGLSystem="webgl-system",t.WebGPUPipes="webgpu-pipes",t.WebGPUPipesAdaptor="webgpu-pipes-adaptor",t.WebGPUSystem="webgpu-system",t.CanvasSystem="canvas-system",t.CanvasPipesAdaptor="canvas-pipes-adaptor",t.CanvasPipes="canvas-pipes",t.Asset="asset",t.LoadParser="load-parser",t.ResolveParser="resolve-parser",t.CacheParser="cache-parser",t.DetectionParser="detection-parser",t.MaskEffect="mask-effect",t.BlendMode="blend-mode",t.TextureSource="texture-source",t.Environment="environment",t.ShapeBuilder="shape-builder",t.Batcher="batcher",t))(Ve||{});const hs=t=>{if(typeof t=="function"||typeof t=="object"&&t.extension){if(!t.extension)throw new Error("Extension class must have an extension object");t={...typeof t.extension!="object"?{type:t.extension}:t.extension,ref:t}}if(typeof t=="object")t={...t};else throw new Error("Invalid extension type");return typeof t.type=="string"&&(t.type=[t.type]),t},yo=(t,e)=>hs(t).priority??e,An={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...t){return t.map(hs).forEach(e=>{e.type.forEach(n=>this._removeHandlers[n]?.(e))}),this},add(...t){return t.map(hs).forEach(e=>{e.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(e):(o[n]=o[n]||[],o[n]?.push(e))})}),this},handle(t,e,n){const r=this._addHandlers,o=this._removeHandlers;if(r[t]||o[t])throw new Error(`Extension type ${t} already has a handler`);r[t]=e,o[t]=n;const i=this._queue;return i[t]&&(i[t]?.forEach(a=>e(a)),delete i[t]),this},handleByMap(t,e){return this.handle(t,n=>{n.name&&(e[n.name]=n.ref)},n=>{n.name&&delete e[n.name]})},handleByNamedList(t,e,n=-1){return this.handle(t,r=>{e.findIndex(i=>i.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((i,a)=>yo(a.value,n)-yo(i.value,n)))},r=>{const o=e.findIndex(i=>i.name===r.name);o!==-1&&e.splice(o,1)})},handleByList(t,e,n=-1){return this.handle(t,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((o,i)=>yo(i,n)-yo(o,n)))},r=>{const o=e.indexOf(r.ref);o!==-1&&e.splice(o,1)})}},r0={extension:{type:Ve.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Vo(()=>import("./browserAll-GwXI5RKY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},o0={extension:{type:Ve.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Vo(()=>import("./webworkerAll-DxcMVSzJ.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Qe{constructor(e,n,r){this._x=n||0,this._y=r||0,this._observer=e}clone(e){return new Qe(e??this._observer,this._x,this._y)}set(e=0,n=e){return(this._x!==e||this._y!==n)&&(this._x=e,this._y=n,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}var vi={exports:{}},Ga;function i0(){return Ga||(Ga=1,function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||l,h),p=n?n+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)e.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,p=new Array(d);h<d;h++)p[h]=c[h].fn;return p},s.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(u,f,c,h,d,p){var g=n?n+u:u;if(!this._events[g])return!1;var y=this._events[g],x=arguments.length,M,v;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),x){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,c),!0;case 4:return y.fn.call(y.context,f,c,h),!0;case 5:return y.fn.call(y.context,f,c,h,d),!0;case 6:return y.fn.call(y.context,f,c,h,d,p),!0}for(v=1,M=new Array(x-1);v<x;v++)M[v-1]=arguments[v];y.fn.apply(y.context,M)}else{var _=y.length,S;for(v=0;v<_;v++)switch(y[v].once&&this.removeListener(u,y[v].fn,void 0,!0),x){case 1:y[v].fn.call(y[v].context);break;case 2:y[v].fn.call(y[v].context,f);break;case 3:y[v].fn.call(y[v].context,f,c);break;case 4:y[v].fn.call(y[v].context,f,c,h);break;default:if(!M)for(S=1,M=new Array(x-1);S<x;S++)M[S-1]=arguments[S];y[v].fn.apply(y[v].context,M)}}return!0},s.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},s.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},s.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var p=this._events[d];if(p.fn)p.fn===f&&(!h||p.once)&&(!c||p.context===c)&&a(this,d);else{for(var g=0,y=[],x=p.length;g<x;g++)(p[g].fn!==f||h&&!p[g].once||c&&p[g].context!==c)&&y.push(p[g]);y.length?this._events[d]=y.length===1?y[0]:y:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,t.exports=s}(vi)),vi.exports}var s0=i0();const zr=Dl(s0),a0=Math.PI*2,l0=180/Math.PI,Ar=Math.PI/180;class en{constructor(e=0,n=0){this.x=0,this.y=0,this.x=e,this.y=n}clone(){return new en(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,n=e){return this.x=e,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return bi.x=0,bi.y=0,bi}}const bi=new en;class $e{constructor(e=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=e,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,n,r,o,i,a){return this.a=e,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(e,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,n){n=n||new en;const r=e.x,o=e.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(e,n){n=n||new en;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=e.x,c=e.y;return n.x=a*u*f+-i*u*c+(l*i-s*a)*u,n.y=r*u*c+-o*u*f+(-l*r+s*o)*u,n}translate(e,n){return this.tx+=e,this.ty+=n,this}scale(e,n){return this.a*=e,this.d*=n,this.c*=e,this.b*=n,this.tx*=e,this.ty*=n,this}rotate(e){const n=Math.cos(e),r=Math.sin(e),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(e){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=e.a*n+e.b*o,this.b=e.a*r+e.b*i,this.c=e.c*n+e.d*o,this.d=e.c*r+e.d*i,this.tx=e.tx*n+e.ty*o+this.tx,this.ty=e.tx*r+e.ty*i+this.ty,this}appendFrom(e,n){const r=e.a,o=e.b,i=e.c,a=e.d,s=e.tx,l=e.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*u+o*c,this.b=r*f+o*h,this.c=i*u+a*c,this.d=i*f+a*h,this.tx=s*u+l*c+n.tx,this.ty=s*f+l*h+n.ty,this}setTransform(e,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=e-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(e){const n=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,o=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=o*e.a+this.d*e.c,this.d=o*e.b+this.d*e.d}return this.tx=n*e.a+this.ty*e.c+e.tx,this.ty=n*e.b+this.ty*e.d+e.ty,this}decompose(e){const n=this.a,r=this.b,o=this.c,i=this.d,a=e.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(a0-u)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=l),e.scale.x=Math.sqrt(n*n+r*r),e.scale.y=Math.sqrt(o*o+i*i),e.position.x=this.tx+(a.x*n+a.y*o),e.position.y=this.ty+(a.x*r+a.y*i),e}invert(){const e=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=e*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=e/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(e*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new $e;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return f0.identity()}static get shared(){return u0.identity()}}const u0=new $e,f0=new $e,Fn=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],In=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],En=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Un=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],ds=[],_u=[],xo=Math.sign;function c0(){for(let t=0;t<16;t++){const e=[];ds.push(e);for(let n=0;n<16;n++){const r=xo(Fn[t]*Fn[n]+En[t]*In[n]),o=xo(In[t]*Fn[n]+Un[t]*In[n]),i=xo(Fn[t]*En[n]+En[t]*Un[n]),a=xo(In[t]*En[n]+Un[t]*Un[n]);for(let s=0;s<16;s++)if(Fn[s]===r&&In[s]===o&&En[s]===i&&Un[s]===a){e.push(s);break}}}for(let t=0;t<16;t++){const e=new $e;e.set(Fn[t],In[t],En[t],Un[t],0,0),_u.push(e)}}c0();const We={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:t=>Fn[t],uY:t=>In[t],vX:t=>En[t],vY:t=>Un[t],inv:t=>t&8?t&15:-t&7,add:(t,e)=>ds[t][e],sub:(t,e)=>ds[t][We.inv(e)],rotate180:t=>t^4,isVertical:t=>(t&3)===2,byDirection:(t,e)=>Math.abs(t)*2<=Math.abs(e)?e>=0?We.S:We.N:Math.abs(e)*2<=Math.abs(t)?t>0?We.E:We.W:e>0?t>0?We.SE:We.SW:t>0?We.NE:We.NW,matrixAppendRotationInv:(t,e,n=0,r=0)=>{const o=_u[We.inv(e)];o.tx=n,o.ty=r,t.append(o)}},vo=[new en,new en,new en,new en];class kt{constructor(e=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(e),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new kt(0,0,0,0)}clone(){return new kt(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,n){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(e,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,c=s-u,h=s+i+u,d=l-u,p=l+a+u,g=s+f,y=s+i-f,x=l+f,M=l+a-f;return e>=c&&e<=h&&n>=d&&n<=p&&!(e>g&&e<y&&n>x&&n<M)}intersects(e,n){if(!n){const O=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=O)return!1;const U=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>U}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=vo[0].set(e.left,e.top),l=vo[1].set(e.left,e.bottom),u=vo[2].set(e.right,e.top),f=vo[3].set(e.right,e.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const h=c*(l.y-s.y),d=c*(s.x-l.x),p=h*r+d*i,g=h*o+d*i,y=h*r+d*a,x=h*o+d*a;if(Math.max(p,g,y,x)<=h*s.x+d*s.y||Math.min(p,g,y,x)>=h*f.x+d*f.y)return!1;const M=c*(s.y-u.y),v=c*(u.x-s.x),_=M*r+v*i,S=M*o+v*i,R=M*r+v*a,F=M*o+v*a;return!(Math.max(_,S,R,F)<=M*s.x+v*s.y||Math.min(_,S,R,F)>=M*f.x+v*f.y)}pad(e=0,n=e){return this.x-=e,this.y-=n,this.width+=e*2,this.height+=n*2,this}fit(e){const n=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),o=Math.max(this.y,e.y),i=Math.min(this.y+this.height,e.y+e.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(e=1,n=.001){const r=Math.ceil((this.x+this.width-n)*e)/e,o=Math.ceil((this.y+this.height-n)*e)/e;return this.x=Math.floor((this.x+n)*e)/e,this.y=Math.floor((this.y+n)*e)/e,this.width=r-this.x,this.height=o-this.y,this}enlarge(e){const n=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),o=Math.min(this.y,e.y),i=Math.max(this.y+this.height,e.y+e.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(e){return e||(e=new kt),e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Mi={default:-1};function Bt(t="default"){return Mi[t]===void 0&&(Mi[t]=-1),++Mi[t]}const Na={},Wt="8.0.0",l1="8.3.4";function ce(t,e,n=3){if(Na[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${t}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`),console.warn(r))),Na[e]=!0}const Su=()=>{};function Ba(t){return t+=t===0?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function $a(t){return!(t&t-1)&&!!t}function h0(t){const e={};for(const n in t)t[n]!==void 0&&(e[n]=t[n]);return e}const Ha=Object.create(null);function d0(t){const e=Ha[t];return e===void 0&&(Ha[t]=Bt("resource")),e}const wu=class Cu extends zr{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...Cu.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){ce(Wt,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=d0(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};wu.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let m0=wu;const Au=class Tu extends zr{constructor(e={}){super(),this.options=e,this.uid=Bt("textureSource"),this._resourceType="textureSource",this._resourceId=Bt("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Tu.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new m0(h0(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){this.style!==e&&(this._style?.off("change",this._onStyleChange,this),this._style=e,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Bt("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,n,r){r||(r=this._resolution),e||(e=this.width),n||(n=this.height);const o=Math.round(e*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Bt("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=$a(this.pixelWidth)&&$a(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};Au.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let St=Au;class ea extends St{constructor(e){const n=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...e,resource:n,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}ea.extension=Ve.TextureSource;const Wa=new $e;class p0{constructor(e,n){this.mapCoord=new $e,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){this.texture!==e&&(this._texture?.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,n){n===void 0&&(n=e);const r=this.mapCoord;for(let o=0;o<e.length;o+=2){const i=e[o],a=e[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const e=this._texture;this._updateID++;const n=e.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=e.orig,o=e.trim;o&&(Wa.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Wa));const i=e.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(e.frame.x+s+l)/i.width,a[1]=(e.frame.y+s+l)/i.height,a[2]=(e.frame.x+e.frame.width-s+l)/i.width,a[3]=(e.frame.y+e.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=e.frame.width===i.width&&e.frame.height===i.height&&e.rotate===0,!0}}class ae extends zr{constructor({source:e,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=Bt("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new kt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=e?.source??new St,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new p0(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,c=l/2,h=i+f,d=a+c;u=We.add(u,We.NW),e.x0=h+f*We.uX(u),e.y0=d+c*We.uY(u),u=We.add(u,2),e.x1=h+f*We.uX(u),e.y1=d+c*We.uY(u),u=We.add(u,2),e.x2=h+f*We.uX(u),e.y2=d+c*We.uY(u),u=We.add(u,2),e.x3=h+f*We.uX(u),e.y3=d+c*We.uY(u)}else e.x0=i,e.y0=a,e.x1=i+s,e.y1=a,e.x2=i+s,e.y2=a+l,e.x3=i,e.y3=a+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ce(Wt,"Texture.baseTexture is now Texture.source"),this._source}}ae.EMPTY=new ae({label:"EMPTY",source:new St({label:"EMPTY"})});ae.EMPTY.destroy=Su;ae.WHITE=new ae({source:new ea({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});ae.WHITE.destroy=Su;function g0(t,e,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;t.minX=a.x-e._x*o-r,t.maxX=t.minX+s,t.minY=a.y-e._y*i-r,t.maxY=t.minY+l}else t.minX=-e._x*o-r,t.maxX=t.minX+o,t.minY=-e._y*i-r,t.maxY=t.minY+i}const Xa=new $e;class Zn{constructor(e=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Xa,this.minX=e,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new kt);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Xa,this}set(e,n,r,o){this.minX=e,this.minY=n,this.maxX=r,this.maxY=o}addFrame(e,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,p=this.maxX,g=this.maxY,y=a*e+l*n+f,x=s*e+u*n+c;y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=a*r+l*n+f,x=s*r+u*n+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=a*e+l*o+f,x=s*e+u*o+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=a*r+l*o+f,x=s*r+u*o+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),this.minX=h,this.minY=d,this.maxX=p,this.maxY=g}addRect(e,n){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,n)}addBounds(e,n){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,n)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:c}=e;let h=a*n+l*r+f,d=s*n+u*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=a*o+l*r+f,d=s*o+u*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*n+l*i+f,d=s*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*o+l*i+f,d=s*o+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,n,r,o){return this.minX<e&&(this.minX=e),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(e,n=e){return this.minX-=e,this.maxX+=e,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Zn(this.minX,this.minY,this.maxX,this.maxY)}scale(e,n=e){return this.minX*=e,this.minY*=n,this.maxX*=e,this.maxY*=n,this}get x(){return this.minX}set x(e){const n=this.maxX-this.minX;this.minX=e,this.maxX=e+n}get y(){return this.minY}set y(e){const n=this.maxY-this.minY;this.minY=e,this.maxY=e+n}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,p=o.ty;for(let g=n;g<r;g+=2){const y=e[g],x=e[g+1],M=u*y+c*x+d,v=f*y+h*x+p;i=M<i?M:i,a=v<a?v:a,s=M>s?M:s,l=v>l?v:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(e,n){return this.minX<=e&&this.minY<=n&&this.maxX>=e&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(e){return this.minX=e.minX,this.minY=e.minY,this.maxX=e.maxX,this.maxY=e.maxY,this}}var y0={grad:.9,turn:360,rad:360/(2*Math.PI)},on=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Je=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n+0},Dt=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t>e?t:e},Pu=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Va=function(t){return{r:Dt(t.r,0,255),g:Dt(t.g,0,255),b:Dt(t.b,0,255),a:Dt(t.a)}},_i=function(t){return{r:Je(t.r),g:Je(t.g),b:Je(t.b),a:Je(t.a,3)}},x0=/^#([0-9a-f]{3,8})$/i,bo=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Ru=function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=Math.max(e,n,r),a=i-Math.min(e,n,r),s=a?i===e?(n-r)/a:i===n?2+(r-e)/a:4+(e-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},zu=function(t){var e=t.h,n=t.s,r=t.v,o=t.a;e=e/360*6,n/=100,r/=100;var i=Math.floor(e),a=r*(1-n),s=r*(1-(e-i)*n),l=r*(1-(1-e+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},Ya=function(t){return{h:Pu(t.h),s:Dt(t.s,0,100),l:Dt(t.l,0,100),a:Dt(t.a)}},qa=function(t){return{h:Je(t.h),s:Je(t.s),l:Je(t.l),a:Je(t.a,3)}},Ka=function(t){return zu((n=(e=t).s,{h:e.h,s:(n*=((r=e.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:e.a}));var e,n,r},Jr=function(t){return{h:(e=Ru(t)).h,s:(o=(200-(n=e.s))*(r=e.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:e.a};var e,n,r,o},v0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,b0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,M0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ms={string:[[function(t){var e=x0.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Je(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Je(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=M0.exec(t)||_0.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Va({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=v0.exec(t)||b0.exec(t);if(!e)return null;var n,r,o=Ya({h:(n=e[1],r=e[2],r===void 0&&(r="deg"),Number(n)*(y0[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Ka(o)},"hsl"]],object:[[function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=o===void 0?1:o;return on(e)&&on(n)&&on(r)?Va({r:Number(e),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(t){var e=t.h,n=t.s,r=t.l,o=t.a,i=o===void 0?1:o;if(!on(e)||!on(n)||!on(r))return null;var a=Ya({h:Number(e),s:Number(n),l:Number(r),a:Number(i)});return Ka(a)},"hsl"],[function(t){var e=t.h,n=t.s,r=t.v,o=t.a,i=o===void 0?1:o;if(!on(e)||!on(n)||!on(r))return null;var a=function(s){return{h:Pu(s.h),s:Dt(s.s,0,100),v:Dt(s.v,0,100),a:Dt(s.a)}}({h:Number(e),s:Number(n),v:Number(r),a:Number(i)});return zu(a)},"hsv"]]},ja=function(t,e){for(var n=0;n<e.length;n++){var r=e[n][0](t);if(r)return[r,e[n][1]]}return[null,void 0]},S0=function(t){return typeof t=="string"?ja(t.trim(),ms.string):typeof t=="object"&&t!==null?ja(t,ms.object):[null,void 0]},Si=function(t,e){var n=Jr(t);return{h:n.h,s:Dt(n.s+100*e,0,100),l:n.l,a:n.a}},wi=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},Za=function(t,e){var n=Jr(t);return{h:n.h,s:n.s,l:Dt(n.l+100*e,0,100),a:n.a}},ps=function(){function t(e){this.parsed=S0(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Je(wi(this.rgba),2)},t.prototype.isDark=function(){return wi(this.rgba)<.5},t.prototype.isLight=function(){return wi(this.rgba)>=.5},t.prototype.toHex=function(){return e=_i(this.rgba),n=e.r,r=e.g,o=e.b,a=(i=e.a)<1?bo(Je(255*i)):"","#"+bo(n)+bo(r)+bo(o)+a;var e,n,r,o,i,a},t.prototype.toRgb=function(){return _i(this.rgba)},t.prototype.toRgbString=function(){return e=_i(this.rgba),n=e.r,r=e.g,o=e.b,(i=e.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var e,n,r,o,i},t.prototype.toHsl=function(){return qa(Jr(this.rgba))},t.prototype.toHslString=function(){return e=qa(Jr(this.rgba)),n=e.h,r=e.s,o=e.l,(i=e.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var e,n,r,o,i},t.prototype.toHsv=function(){return e=Ru(this.rgba),{h:Je(e.h),s:Je(e.s),v:Je(e.v),a:Je(e.a,3)};var e},t.prototype.invert=function(){return Vt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),Vt(Si(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),Vt(Si(this.rgba,-e))},t.prototype.grayscale=function(){return Vt(Si(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),Vt(Za(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),Vt(Za(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?Vt({r:(n=this.rgba).r,g:n.g,b:n.b,a:e}):Je(this.rgba.a,3);var n},t.prototype.hue=function(e){var n=Jr(this.rgba);return typeof e=="number"?Vt({h:e,s:n.s,l:n.l,a:n.a}):Je(n.h)},t.prototype.isEqual=function(e){return this.toHex()===Vt(e).toHex()},t}(),Vt=function(t){return t instanceof ps?t:new ps(t)},Qa=[],w0=function(t){t.forEach(function(e){Qa.indexOf(e)<0&&(e(ps,ms),Qa.push(e))})};function C0(t,e){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};t.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new t(n[d]).toRgb();for(var p in n){var g=(s=f,l=i[p],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));g<c&&(c=g,h=p)}return h}},e.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new t(l).toRgb():null},"name"])}w0([C0]);const Tr=class Xr{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Xr)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,n){const r=typeof e;if(r!==typeof n)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===n;if(Array.isArray(e)&&Array.isArray(n)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(n))return e.length!==n.length?!1:e.every((i,a)=>i===n[a]);if(e!==null&&n!==null){const i=Object.keys(e),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>e[s]===n[s])}return e===n}toRgba(){const[e,n,r,o]=this._components;return{r:e,g:n,b:r,a:o}}toRgb(){const[e,n,r]=this._components;return{r:e,g:n,b:r}}toRgbaString(){const[e,n,r]=this.toUint8RgbArray();return`rgba(${e},${n},${r},${this.alpha})`}toUint8RgbArray(e){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb),e[0]=Math.round(n*255),e[1]=Math.round(r*255),e[2]=Math.round(o*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e||(e=this._arrayRgba);const[n,r,o,i]=this._components;return e[0]=n,e[1]=r,e[2]=o,e[3]=i,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb);const[n,r,o]=this._components;return e[0]=n,e[1]=r,e[2]=o,e}toNumber(){return this._int}toBgrNumber(){const[e,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[n,r,o,i]=Xr._temp.setValue(e)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(e,n=!0){return n&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,n=!0){if(e===1)return(255<<24)+this._int;if(e===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*e+.5|0,o=o*e+.5|0,i=i*e+.5|0),(e*255<<24)+(r<<16)+(o<<8)+i}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let n,r,o,i;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const a=e;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[n,r,o,i=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[n,r,o,i=255]=e,n/=255,r/=255,o/=255,i/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const s=Xr.HEX_PATTERN.exec(e);s&&(e=`#${s[2]}`)}const a=Vt(e);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,n,r]=this._components;this._int=(e*255<<16)+(n*255<<8)+(r*255|0)}_clamp(e,n=0,r=1){return typeof e=="number"?Math.min(Math.max(e,n),r):(e.forEach((o,i)=>{e[i]=Math.min(Math.max(o,n),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Xr||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};Tr.shared=new Tr;Tr._temp=new Tr;Tr.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let it=Tr;const A0={cullArea:null,cullable:!1,cullableChildren:!0};class ta{constructor(e,n){this._pool=[],this._count=0,this._index=0,this._classType=e,n&&this.prepopulate(n)}prepopulate(e){for(let n=0;n<e;n++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(e),n}return(e){e.reset?.(),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class T0{constructor(){this._poolsByClass=new Map}prepopulate(e,n){this.getPool(e).prepopulate(n)}get(e,n){return this.getPool(e).get(n)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new ta(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(n=>{const r=e[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;e[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),e}}const ri=new T0,P0={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(t){typeof t=="boolean"&&t===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(t===!0?{}:t))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(t){ce("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(t)}};function R0(t,e,n){const r=t.length;let o;if(e>=r||n===0)return;n=e+n>r?r-e:n;const i=r-n;for(o=e;o<i;++o)t[o]=t[o+n];t.length=i}const z0={allowChildren:!0,removeChildren(t=0,e){const n=e??this.children.length,r=n-t,o=[];if(r>0&&r<=n){for(let a=n-1;a>=t;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}R0(this.children,t,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(t){const e=this.getChildAt(t);return this.removeChild(e)},getChildAt(t){if(t<0||t>=this.children.length)throw new Error(`getChildAt: Index (${t}) does not exist.`);return this.children[t]},setChildIndex(t,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(t),this.addChildAt(t,e)},getChildIndex(t){const e=this.children.indexOf(t);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(t,e){this.allowChildren||ce(Wt,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(e<0||e>n.length)throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${n.length}`);if(t.parent){const o=t.parent.children.indexOf(t);if(t.parent===this&&o===e)return t;o!==-1&&t.parent.children.splice(o,1)}e===n.length?n.push(t):n.splice(e,0,t),t.parent=this,t.didChange=!0,t._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(t),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",t,this,e),t.emit("added",this),t},swapChildren(t,e){if(t===e)return;const n=this.getChildIndex(t),r=this.getChildIndex(e);this.children[n]=e,this.children[r]=t;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...t){return t.length===1?this.reparentChildAt(t[0],this.children.length):(t.forEach(e=>this.reparentChildAt(e,this.children.length)),t[0])},reparentChildAt(t,e){if(t.parent===this)return this.setChildIndex(t,e),t;const n=t.worldTransform.clone();t.removeFromParent(),this.addChildAt(t,e);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),t.setFromMatrix(n),t}};class Ja{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class O0{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(e))return ri.get(r.maskClass,e)}return e}returnMaskEffect(e){ri.return(e)}}const gs=new O0;An.handleByList(Ve.MaskEffect,gs._effectClasses);const F0={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0)},addEffect(t){this.effects.indexOf(t)===-1&&(this.effects.push(t),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(t){const e=this.effects.indexOf(t);e!==-1&&(this.effects.splice(e,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(t){const e=this._maskEffect;e?.mask!==t&&(e&&(this.removeEffect(e),gs.returnMaskEffect(e),this._maskEffect=null),t!=null&&(this._maskEffect=gs.getMaskEffect(t),this.addEffect(this._maskEffect)))},setMask(t){this._maskOptions={...this._maskOptions,...t},t.mask&&(this.mask=t.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(t){!Array.isArray(t)&&t&&(t=[t]);const e=this._filterEffect||(this._filterEffect=new Ja);t=t;const n=t?.length>0,r=e.filters?.length>0,o=n!==r;t=Array.isArray(t)?t.slice(0):t,e.filters=Object.freeze(t),o&&(n?this.addEffect(e):(this.removeEffect(e),e.filters=t??null))},get filters(){return this._filterEffect?.filters},set filterArea(t){this._filterEffect||(this._filterEffect=new Ja),this._filterEffect.filterArea=t},get filterArea(){return this._filterEffect?.filterArea}},I0={label:null,get name(){return ce(Wt,"Container.name property has been removed, use Container.label instead"),this.label},set name(t){ce(Wt,"Container.name property has been removed, use Container.label instead"),this.label=t},getChildByName(t,e=!1){return this.getChildByLabel(t,e)},getChildByLabel(t,e=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===t||t instanceof RegExp&&t.test(o.label))return o}if(e)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(t,!0);if(i)return i}return null},getChildrenByLabel(t,e=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===t||t instanceof RegExp&&t.test(i.label))&&n.push(i)}if(e)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(t,!0,n);return n}},ct=new ta($e),Pr=new ta(Zn);function Ou(t,e,n){n.clear();let r,o;return t.parent?e?r=t.parent.worldTransform:(o=ct.get().identity(),r=na(t,o)):r=$e.IDENTITY,Fu(t,n,r,e),o&&ct.return(o),n.isValid||n.set(0,0,0,0),n}function Fu(t,e,n,r){if(!t.visible||!t.measurable)return;let o;r?o=t.worldTransform:(t.updateLocalTransform(),o=ct.get(),o.appendFrom(t.localTransform,n));const i=e,a=!!t.effects.length;if(a&&(e=Pr.get().clear()),t.boundsArea)e.addRect(t.boundsArea,o);else{t.bounds&&(e.matrix=o,e.addBounds(t.bounds));for(let s=0;s<t.children.length;s++)Fu(t.children[s],e,o,r)}if(a){for(let s=0;s<t.effects.length;s++)t.effects[s].addBounds?.(e);i.addBounds(e,$e.IDENTITY),Pr.return(e)}r||ct.return(o)}function na(t,e){const n=t.parent;return n&&(na(n,e),n.updateLocalTransform(),e.append(n.localTransform)),e}function E0(t,e){if(t===16777215||!e)return e;if(e===16777215||!t)return t;const n=t>>16&255,r=t>>8&255,o=t&255,i=e>>16&255,a=e>>8&255,s=e&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const el=16777215;function tl(t,e){return t===el?e:e===el?t:E0(t,e)}function Fo(t){return((t&255)<<16)+(t&65280)+(t>>16&255)}const U0={getGlobalAlpha(t){if(t)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let e=this.alpha,n=this.parent;for(;n;)e*=n.alpha,n=n.parent;return e},getGlobalTransform(t,e){if(e)return t.copyFrom(this.worldTransform);this.updateLocalTransform();const n=na(this,ct.get().identity());return t.appendFrom(this.localTransform,n),ct.return(n),t},getGlobalTint(t){if(t)return this.renderGroup?Fo(this.renderGroup.worldColor):this.parentRenderGroup?Fo(tl(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let e=this.localColor,n=this.parent;for(;n;)e=tl(e,n.localColor),n=n.parent;return Fo(e)}};let Ci=0;const nl=500;function gn(...t){Ci!==nl&&(Ci++,Ci===nl?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...t))}function Iu(t,e,n){return e.clear(),n||(n=$e.IDENTITY),Eu(t,e,n,t,!0),e.isValid||e.set(0,0,0,0),e}function Eu(t,e,n,r,o){let i;if(o)i=ct.get(),i=n.copyTo(i);else{if(!t.visible||!t.measurable)return;t.updateLocalTransform();const l=t.localTransform;i=ct.get(),i.appendFrom(l,n)}const a=e,s=!!t.effects.length;if(s&&(e=Pr.get().clear()),t.boundsArea)e.addRect(t.boundsArea,i);else{t.renderPipeId&&(e.matrix=i,e.addBounds(t.bounds));const l=t.children;for(let u=0;u<l.length;u++)Eu(l[u],e,i,r,!1)}if(s){for(let l=0;l<t.effects.length;l++)t.effects[l].addLocalBounds?.(e,r);a.addBounds(e,$e.IDENTITY),Pr.return(e)}ct.return(i)}function Uu(t,e){const n=t.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=e.index;(e.data[s]!==i||e.data[s+1]!==a)&&(e.data[e.index]=i,e.data[e.index+1]=a,e.didChange=!0),e.index=s+2,o.children.length&&Uu(o,e)}return e.didChange}const k0=new $e,D0={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(t,e){const n=Math.sign(this.scale.x)||1;e!==0?this.scale.x=t/e*n:this.scale.x=n},_setHeight(t,e){const n=Math.sign(this.scale.y)||1;e!==0?this.scale.y=t/e*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Zn});const t=this._localBoundsCacheData;return t.index=1,t.didChange=!1,t.data[0]!==this._didViewChangeTick&&(t.didChange=!0,t.data[0]=this._didViewChangeTick),Uu(this,t),t.didChange&&Iu(this,t.localBounds,k0),t.localBounds},getBounds(t,e){return Ou(this,t,e||new Zn)}},L0={_onRender:null,set onRender(t){const e=this.renderGroup||this.parentRenderGroup;if(!t){this._onRender&&e?.removeOnRender(this),this._onRender=null;return}this._onRender||e?.addOnRender(this),this._onRender=t},get onRender(){return this._onRender}},G0={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(t){this._zIndex!==t&&(this._zIndex=t,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(N0))}};function N0(t,e){return t._zIndex-e._zIndex}const B0={getGlobalPosition(t=new en,e=!1){return this.parent?this.parent.toGlobal(this._position,t,e):(t.x=this._position.x,t.y=this._position.y),t},toGlobal(t,e,n=!1){const r=this.getGlobalTransform(ct.get(),n);return e=r.apply(t,e),ct.return(r),e},toLocal(t,e,n,r){e&&(t=e.toGlobal(t,n,r));const o=this.getGlobalTransform(ct.get(),r);return n=o.applyInverse(t,n),ct.return(o),n}};class $0{constructor(){this.uid=Bt("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let H0=0;class W0{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,n,r){const o=new St({...this.textureOptions,width:e,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new ae({source:o,label:`texturePool_${H0++}`})}getOptimalTexture(e,n,r=1,o){let i=Math.ceil(e*r-1e-6),a=Math.ceil(n*r-1e-6);i=Ba(i),a=Ba(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(e,n=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,n)}returnTexture(e){const n=this._poolKeyHash[e.uid];this._texturePool[n].push(e)}clear(e){if(e=e!==!1,e)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const Rt=new W0;class X0{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new $e,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new $0,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const n=e.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(e={}){this.textureOptions=e,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Rt.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const n=this.childrenToUpdate[e];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const n=this.renderGroupChildren.indexOf(e);n>-1&&this.renderGroupChildren.splice(n,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const n=e.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const n=e.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(e){for(let n=0;n<e.length;n++)this.removeChild(e[n])}onChildUpdate(e){let n=this.childrenToUpdate[e.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e),e.didViewUpdate=!1)}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],e);return e}_getChildren(e,n=[]){if(n.push(e),e.renderGroup)return n;const r=e.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new $e),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new $e),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const e=this._parentCacheAsTextureRenderGroup;return e?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new $e),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x,-e._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function V0(t,e,n={}){for(const r in e)!n[r]&&e[r]!==void 0&&(t[r]=e[r])}const Ai=new Qe(null),Ti=new Qe(null),Pi=new Qe(null,1,1),rl=1,Y0=2,Ri=4;class Be extends zr{constructor(e={}){super(),this.uid=Bt("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new $e,this.relativeGroupTransform=new $e,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Qe(this,0,0),this._scale=Pi,this._pivot=Ti,this._skew=Ai,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],V0(this,e,{children:!0,parent:!0,effects:!0}),e.children?.forEach(n=>this.addChild(n)),e.parent?.addChild(this)}static mixin(e){Object.defineProperties(Be.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||ce(Wt,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let o=0;o<e.length;o++)this.addChild(e[o]);return e[0]}const n=e[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...e){if(e.length>1){for(let o=0;o<e.length;o++)this.removeChild(e[o]);return e[0]}const n=e[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e?.removeChild(this),this.renderGroup=ri.get(X0,this),this.groupTransform=$e.IDENTITY,e?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e?.removeChild(this),ri.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new $e),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*l0}set angle(e){this.rotation=e*Ar}get pivot(){return this._pivot===Ti&&(this._pivot=new Qe(this,0,0)),this._pivot}set pivot(e){this._pivot===Ti&&(this._pivot=new Qe(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===Ai&&(this._skew=new Qe(this,0,0)),this._skew}set skew(e){this._skew===Ai&&(this._skew=new Qe(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Pi&&(this._scale=new Qe(this,1,1)),this._scale}set scale(e){this._scale===Pi&&(this._scale=new Qe(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const n=this.getLocalBounds().width;this._setWidth(e,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const n=this.getLocalBounds().height;this._setHeight(e,n)}getSize(e){e||(e={});const n=this.getLocalBounds();return e.width=Math.abs(this.scale.x*n.width),e.height=Math.abs(this.scale.y*n.height),e}setSize(e,n){const r=this.getLocalBounds();typeof e=="object"?(n=e.height??e.width,e=e.width):n??(n=e),e!==void 0&&this._setWidth(e,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const e=this._rotation,n=this._skew;this._cx=Math.cos(e+n._y),this._sx=Math.sin(e+n._y),this._cy=-Math.sin(e-n._x),this._sy=Math.cos(e-n._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=rl,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=it.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=rl,this._onUpdate())}get tint(){return Fo(this.localColor)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Y0,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const n=e?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ri,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const n=e?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ri,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const n=e?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Ri,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof e=="boolean"?e:e?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(e);this.renderGroup?.destroy(),this.renderGroup=null}}Be.mixin(z0);Be.mixin(B0);Be.mixin(L0);Be.mixin(D0);Be.mixin(F0);Be.mixin(I0);Be.mixin(G0);Be.mixin(A0);Be.mixin(P0);Be.mixin(U0);class ku extends Be{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Zn(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const n=this.bounds,{x:r,y:o}=e;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){super.destroy(e),this._bounds=null}}class Ct extends ku{constructor(e=ae.EMPTY){e instanceof ae&&(e={texture:e});const{texture:n=ae.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=e;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Qe({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(e,n=!1){return e instanceof ae?new Ct(e):new Ct(ae.from(e,n))}set texture(e){e||(e=ae.EMPTY);const n=this._texture;n!==e&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return g0(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return ce("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const e=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-e._x*o,r.maxX=r.minX+o,r.minY=-e._y*i,r.maxY=r.minY+i}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){const r=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,n){typeof e=="object"?(n=e.height??e.width,e=e.width):n??(n=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const q0=new Zn;function Du(t,e,n){const r=q0;t.measurable=!0,Ou(t,n,r),e.addBoundsMask(r),t.measurable=!1}function Lu(t,e,n){const r=Pr.get();t.measurable=!0;const o=ct.get().identity(),i=Gu(t,n,o);Iu(t,r,i),t.measurable=!1,e.addBoundsMask(r),ct.return(o),Pr.return(r)}function Gu(t,e,n){return t?(t!==e&&(Gu(t.parent,e,n),t.updateLocalTransform(),n.append(t.localTransform)),n):(gn("Mask bounds, renderable is not inside the root container"),n)}class Nu{constructor(e){this.priority=0,this.inverse=!1,this.pipe="alphaMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof Ct),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,n){this.inverse||Du(this.mask,e,n)}addLocalBounds(e,n){Lu(this.mask,e,n)}containsPoint(e,n){const r=this.mask;return n(r,e)}destroy(){this.reset()}static test(e){return e instanceof Ct}}Nu.extension=Ve.MaskEffect;class Bu{constructor(e){this.priority=0,this.pipe="colorMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}Bu.extension=Ve.MaskEffect;class $u{constructor(e){this.priority=0,this.pipe="stencilMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,n){Du(this.mask,e,n)}addLocalBounds(e,n){Lu(this.mask,e,n)}containsPoint(e,n){const r=this.mask;return n(r,e)}destroy(){this.reset()}static test(e){return e instanceof Be}}$u.extension=Ve.MaskEffect;const K0={createCanvas:(t,e)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(t,e)=>fetch(t,e),parseXML:t=>new DOMParser().parseFromString(t,"text/xml")};let ol=K0;const Cn={get(){return ol},set(t){ol=t}};class ra extends St{constructor(e){e.resource||(e.resource=Cn.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity,this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,n=this.height,r=this._resolution){const o=super.resize(e,n,r);return o&&this.resizeCanvas(),o}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}ra.extension=Ve.TextureSource;class oa extends St{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const n=Cn.get().createCanvas(e.resource.width,e.resource.height);n.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=n,gn("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}oa.extension=Ve.TextureSource;var ys=(t=>(t[t.INTERACTION=50]="INTERACTION",t[t.HIGH=25]="HIGH",t[t.NORMAL=0]="NORMAL",t[t.LOW=-25]="LOW",t[t.UTILITY=-50]="UTILITY",t))(ys||{});class zi{constructor(e,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=n,this.priority=r,this._once=o}match(e,n=null){return this._fn===e&&this._context===n}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=e?null:n,this.previous=null,n}}const Hu=class Tt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new zi(null,null,1/0),this.deltaMS=1/Tt.targetFPMS,this.elapsedMS=1/Tt.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,n,r=ys.NORMAL){return this._addListener(new zi(e,n,r))}addOnce(e,n,r=ys.NORMAL){return this._addListener(new zi(e,n,r,!0))}_addListener(e){let n=this._head.next,r=this._head;if(!n)e.connect(r);else{for(;n;){if(e.priority>n.priority){e.connect(r);break}r=n,n=n.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,n){let r=this._head.next;for(;r;)r.match(e,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,n=this._head;for(;n=n.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let n;if(e>this.lastTime){if(n=this.elapsedMS=e-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=e-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=e-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Tt.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const n=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,n)/1e3,Tt.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,e);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Tt._shared){const e=Tt._shared=new Tt;e.autoStart=!0,e._protected=!0}return Tt._shared}static get system(){if(!Tt._system){const e=Tt._system=new Tt;e.autoStart=!0,e._protected=!0}return Tt._system}};Hu.targetFPMS=.06;let Mo=Hu,Oi;async function j0(){return Oi??(Oi=(async()=>{const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,i),e.deleteFramebuffer(o),e.deleteTexture(r),e.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Oi}const li=class Wu extends St{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...Wu.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=Mo.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,n=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await j0(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Mo.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Mo.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Mo.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};li.extension=Ve.TextureSource;li.defaultOptions={...St.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};li.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Z0=li;const tr=(t,e,n=!1)=>(Array.isArray(t)||(t=[t]),e?t.map(r=>typeof r=="string"||n?e(r):r):t);class Q0{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const n=this._cache.get(e);return n||gn(`[Assets] Asset id ${e} was not found in the Cache`),n}set(e,n){const r=tr(e);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&gn("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(e){if(!this._cacheMap.has(e)){gn(`[Assets] Asset id ${e} was not found in the Cache`);return}const n=this._cacheMap.get(e);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Gn=new Q0,xs=[];An.handleByList(Ve.TextureSource,xs);function Xu(t={}){const e=t&&t.resource,n=e?t.resource:t,r=e?t:{resource:t};for(let o=0;o<xs.length;o++){const i=xs[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function J0(t={},e=!1){const n=t&&t.resource,r=n?t.resource:t,o=n?t:{resource:t};if(!e&&Gn.has(r))return Gn.get(r);const i=new ae({source:Xu(o)});return i.on("destroy",()=>{Gn.has(r)&&Gn.remove(r)}),e||Gn.set(r,i),i}function ed(t,e=!1){return typeof t=="string"?Gn.get(t):t instanceof St?new ae({source:t}):J0(t,e)}ae.from=ed;St.from=Xu;An.add(Nu,Bu,$u,Z0,oa,ra,ea);var Vu=(t=>(t[t.Low=0]="Low",t[t.Normal=1]="Normal",t[t.High=2]="High",t))(Vu||{});function Lt(t){if(typeof t!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)}function Gr(t){return t.split("?")[0].split("#")[0]}function td(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function nd(t,e,n){return t.replace(new RegExp(td(e),"g"),n)}function rd(t,e){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=t.length;++s){if(s<t.length)a=t.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${t.slice(o+1,s)}`:n=t.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const lo={toPosix(t){return nd(t,"\\","/")},isUrl(t){return/^https?:/.test(this.toPosix(t))},isDataUrl(t){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t)},isBlobUrl(t){return t.startsWith("blob:")},hasProtocol(t){return/^[^/:]+:/.test(this.toPosix(t))},getProtocol(t){Lt(t),t=this.toPosix(t);const e=/^file:\/\/\//.exec(t);if(e)return e[0];const n=/^[^/:]+:\/{0,2}/.exec(t);return n?n[0]:""},toAbsolute(t,e,n){if(Lt(t),this.isDataUrl(t)||this.isBlobUrl(t))return t;const r=Gr(this.toPosix(e??Cn.get().getBaseUrl())),o=Gr(this.toPosix(n??this.rootname(r)));return t=this.toPosix(t),t.startsWith("/")?lo.join(o,t.slice(1)):this.isAbsolute(t)?t:this.join(r,t)},normalize(t){if(Lt(t),t.length===0)return".";if(this.isDataUrl(t)||this.isBlobUrl(t))return t;t=this.toPosix(t);let e="";const n=t.startsWith("/");this.hasProtocol(t)&&(e=this.rootname(t),t=t.slice(e.length));const r=t.endsWith("/");return t=rd(t),t.length>0&&r&&(t+="/"),n?`/${t}`:e+t},isAbsolute(t){return Lt(t),t=this.toPosix(t),this.hasProtocol(t)?!0:t.startsWith("/")},join(...t){if(t.length===0)return".";let e;for(let n=0;n<t.length;++n){const r=t[n];if(Lt(r),r.length>0)if(e===void 0)e=r;else{const o=t[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(t){if(Lt(t),t.length===0)return".";t=this.toPosix(t);let e=t.charCodeAt(0);const n=e===47;let r=-1,o=!0;const i=this.getProtocol(t),a=t;t=t.slice(i.length);for(let s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),e===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+t:i:n&&r===1?"//":i+t.slice(0,r)},rootname(t){Lt(t),t=this.toPosix(t);let e="";if(t.startsWith("/")?e="/":e=this.getProtocol(t),this.isUrl(t)){const n=t.indexOf("/",e.length);n!==-1?e=t.slice(0,n):e=t,e.endsWith("/")||(e+="/")}return e},basename(t,e){Lt(t),e&&Lt(e),t=Gr(this.toPosix(t));let n=0,r=-1,o=!0,i;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";let a=e.length-1,s=-1;for(i=t.length-1;i>=0;--i){const l=t.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===e.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=t.length),t.slice(n,r)}for(i=t.length-1;i>=0;--i)if(t.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":t.slice(n,r)},extname(t){Lt(t),t=Gr(this.toPosix(t));let e=-1,n=0,r=-1,o=!0,i=0;for(let a=t.length-1;a>=0;--a){const s=t.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?e===-1?e=a:i!==1&&(i=1):e!==-1&&(i=-1)}return e===-1||r===-1||i===0||i===1&&e===r-1&&e===n+1?"":t.slice(e,r)},parse(t){Lt(t);const e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;t=Gr(this.toPosix(t));let n=t.charCodeAt(0);const r=this.isAbsolute(t);let o;e.root=this.rootname(t),r||this.hasProtocol(t)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=t.length-1,f=0;for(;u>=o;--u){if(n=t.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?e.base=e.name=t.slice(1,s):e.base=e.name=t.slice(a,s)):(a===0&&r?(e.name=t.slice(1,i),e.base=t.slice(1,s)):(e.name=t.slice(a,i),e.base=t.slice(a,s)),e.ext=t.slice(i,s)),e.dir=this.dirname(t),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function Yu(t,e,n,r,o){const i=e[n];for(let a=0;a<i.length;a++){const s=i[a];n<e.length-1?Yu(t.replace(r[n],s),e,n+1,r,o):o.push(t.replace(r[n],s))}}function od(t){const e=/\{(.*?)\}/g,n=t.match(e),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),Yu(t,o,0,n,r)}else r.push(t);return r}const il=t=>!Array.isArray(t);class qu{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,n)=>`${e}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(e,n)=>n.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const n=e;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(e){const{alias:n,src:r}=e;return tr(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(e){this._manifest&&gn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(e,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(e,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(e,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[e]=r}add(e){const n=[];Array.isArray(e)?n.push(...e):n.push(e);let r;r=i=>{this.hasKey(i)&&gn(`[Resolver] already has key: ${i} overwriting`)},tr(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=tr(a).map(d=>typeof d=="string"?od(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let y=0;y<this._parsers.length;y++){const x=this._parsers[y];if(x.test(p)){g=x.parse(p);break}}}else s=p.data??s,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:c,data:s,format:l,loadParser:u}),h.push(g)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(e){const n=il(e);e=tr(e);const r={};return e.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[e[0]]:r}resolveUrl(e){const n=this.resolve(e);if(typeof e!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(e){const n=il(e);e=tr(e);const r={};return e.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let n=0;n<e.length;n++){const r=e[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const n=/\?/.test(e)?"&":"?";return`${e}${n}${this._defaultSearchParams}`}_buildResolvedAsset(e,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(e.src=lo.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...o||{},...e.data},e.loadParser=i??e.loadParser,e.format=a??e.format??id(e.src),e}}qu.RETINA_PREFIX=/@([0-9\.]+)x/;function id(t){return t.split(".").pop().split("?").shift().split("#").shift()}const sl=(t,e)=>{const n=e.split("?")[1];return n&&(t+=`?${n}`),t},Ku=class Vr{constructor(e,n){this.linkedSheets=[],this._texture=e instanceof ae?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Vr.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let n=e;const r=Vr.BATCH_SIZE;for(;n-e<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new kt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new kt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new kt(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new kt(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new ae({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const e=this.data.animations||{};for(const n in e){this.animations[n]=[];for(let r=0;r<e[n].length;r++){const o=e[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Vr.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Vr.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Ku.BATCH_SIZE=1e3;let al=Ku;const sd=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function ju(t,e,n){const r={};if(t.forEach(o=>{r[o]=e}),Object.keys(e.textures).forEach(o=>{r[o]=e.textures[o]}),!n){const o=lo.dirname(t[0]);e.linkedSheets.forEach((i,a)=>{const s=ju([`${o}/${e.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const ad={extension:Ve.Asset,cache:{test:t=>t instanceof al,getCacheableAssets:(t,e)=>ju(t,e,!1)},resolver:{extension:{type:Ve.ResolveParser,name:"resolveSpritesheet"},test:t=>{const n=t.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&sd.includes(o)},parse:t=>{const e=t.split(".");return{resolution:parseFloat(qu.RETINA_PREFIX.exec(t)?.[1]??"1"),format:e[e.length-2],src:t}}},loader:{name:"spritesheetLoader",extension:{type:Ve.LoadParser,priority:Vu.Normal,name:"spritesheetLoader"},async testParse(t,e){return lo.extname(e.src).toLowerCase()===".json"&&!!t.frames},async parse(t,e,n){const{texture:r,imageFilename:o}=e?.data??{};let i=lo.dirname(e.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof ae)a=r;else{const u=sl(i+(o??t.meta.image),e.src);a=(await n.load([u]))[u]}const s=new al(a.source,t);await s.parse();const l=t?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;e.data?.ignoreMultiPack||(h=sl(h,e.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(t,e,n){await n.unload(t.textureSource._sourceOrigin),t.destroy(!1)}}};An.add(ad);const Fi=Object.create(null),ll=Object.create(null);function ia(t,e){let n=ll[t];return n===void 0&&(Fi[e]===void 0&&(Fi[e]=1),ll[t]=n=Fi[e]++),n}let _o;function ld(){return(!_o||_o?.isContextLost())&&(_o=Cn.get().createCanvas().getContext("webgl",{})),_o}let So;function ud(){if(!So){So="mediump";const t=ld();t&&t.getShaderPrecisionFormat&&(So=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision?"highp":"mediump")}return So}function fd(t,e,n){return e?t:n?(t=t.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${t}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${t}
        `}function cd(t,e,n){const r=n?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(t.substring(0,9)!=="precision"){let o=n?e.requestedFragmentPrecision:e.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${t}`}else if(r!=="highp"&&t.substring(0,15)==="precision highp")return t.replace("precision highp","precision mediump");return t}function hd(t,e){return e?`#version 300 es
${t}`:t}const dd={},md={};function pd(t,{name:e="pixi-program"},n=!0){e=e.replace(/\s+/g,"-"),e+=n?"-fragment":"-vertex";const r=n?dd:md;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,t.indexOf("#define SHADER_NAME")!==-1?t:`${`#define SHADER_NAME ${e}`}
${t}`}function gd(t,e){return e?t.replace("#version 300 es",""):t}const Ii={stripVersion:gd,ensurePrecision:cd,addProgramDefines:fd,setProgramName:pd,insertVersion:hd},Ei=Object.create(null),Zu=class vs{constructor(e){e={...vs.defaultOptions,...e};const n=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:ud()},setProgramName:{name:e.name},addProgramDefines:n,insertVersion:n};let o=e.fragment,i=e.vertex;Object.keys(Ii).forEach(a=>{const s=r[a];o=Ii[a](o,s,!0),i=Ii[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=e.transformFeedbackVaryings,this._key=ia(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const n=`${e.vertex}:${e.fragment}`;return Ei[n]||(Ei[n]=new vs(e)),Ei[n]}};Zu.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let ge=Zu;const ul={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function yd(t){return ul[t]??ul.float32}const xd={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function vd({source:t,entryPoint:e}){const n={},r=t.indexOf(`fn ${e}`);if(r!==-1){const o=t.indexOf("->",r);if(o!==-1){const i=t.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=xd[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:yd(l).stride,offset:0,instance:!1,start:0}}}}return n}function Ui(t){const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=t.match(e)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=t.match(a)?.map(c=>{const h=c.match(l)[1],d=c.match(s).reduce((p,g)=>{const[y,x]=g.split(":");return p[y.trim()]=x.trim(),p},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var Yr=(t=>(t[t.VERTEX=1]="VERTEX",t[t.FRAGMENT=2]="FRAGMENT",t[t.COMPUTE=4]="COMPUTE",t))(Yr||{});function bd({groups:t}){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Yr.VERTEX|Yr.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Yr.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Yr.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Md({groups:t}){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function _d(t,e){const n=new Set,r=new Set,o=[...t.structs,...e.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...t.groups,...e.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const ki=Object.create(null);class me{constructor(e){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=e;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=Ui(n.source);this.structsAndGroups=s}else{const s=Ui(r.source),l=Ui(n.source);this.structsAndGroups=_d(s,l)}this.layout=o??Md(this.structsAndGroups),this.gpuLayout=i??bd(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:n}=this,r=e.source+n.source+e.entryPoint+n.entryPoint;this._layoutKey=ia(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=vd(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const n=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return ki[n]||(ki[n]=new me(e)),ki[n]}}const Qu=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Sd=Qu.reduce((t,e)=>(t[e]=!0,t),{});function wd(t,e){switch(t){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Ju=class ef{constructor(e,n){this._touched=0,this.uid=Bt("uniform"),this._resourceType="uniformGroup",this._resourceId=Bt("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...ef.defaultOptions,...n},this.uniformStructures=e;const r={};for(const o in e){const i=e[o];if(i.name=o,i.size=i.size??1,!Sd[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Qu.join(", ")}`);i.value??(i.value=wd(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=ia(Object.keys(r).map(o=>`${o}-${e[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Ju.defaultOptions={ubo:!1,isStatic:!1};let tf=Ju;class Di{constructor(e){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in e){const o=e[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let n=0;for(const r in this.resources)e[n++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,n){const r=this.resources[n];e!==r&&(r&&e.off?.("change",this.onResourceChange,this),e.on?.("change",this.onResourceChange,this),this.resources[n]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const n=this.resources;for(const r in n)n[r]._touched=e}destroy(){const e=this.resources;for(const n in e)e[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const n=this.resources;for(const r in n)n[r]===e&&(n[r]=null)}else this._updateKey()}}var oi=(t=>(t[t.WEBGL=1]="WEBGL",t[t.WEBGPU=2]="WEBGPU",t[t.BOTH=3]="BOTH",t))(oi||{});class sa extends zr{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=e;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=oi.WEBGPU),r&&(a|=oi.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const c=s[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new Di,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new tf(h));const d=l[c];d&&(o[d.group]||(o[d.group]=new Di,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(e,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=e),this.groups[n]||(this.groups[n]=new Di,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(e,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return e[i.group].getResource(i.binding)},set(a){e[i.group].setResource(a,i.binding)}})}return r}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:n,gl:r,...o}=e;let i,a;return n&&(i=me.from(n)),r&&(a=ge.from(r)),new sa({gpuProgram:i,glProgram:a,...o})}}const Cd={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Li=0,Gi=1,Ni=2,Bi=3,$i=4,Hi=5,bs=class nf{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Li)}set blend(e){!!(this.data&1<<Li)!==e&&(this.data^=1<<Li)}get offsets(){return!!(this.data&1<<Gi)}set offsets(e){!!(this.data&1<<Gi)!==e&&(this.data^=1<<Gi)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Ni)}set culling(e){!!(this.data&1<<Ni)!==e&&(this.data^=1<<Ni)}get depthTest(){return!!(this.data&1<<Bi)}set depthTest(e){!!(this.data&1<<Bi)!==e&&(this.data^=1<<Bi)}get depthMask(){return!!(this.data&1<<Hi)}set depthMask(e){!!(this.data&1<<Hi)!==e&&(this.data^=1<<Hi)}get clockwiseFrontFace(){return!!(this.data&1<<$i)}set clockwiseFrontFace(e){!!(this.data&1<<$i)!==e&&(this.data^=1<<$i)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Cd[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new nf;return e.depthTest=!1,e.blend=!0,e}};bs.default2d=bs.for2d();let Ad=bs;const rf=class Ms extends sa{constructor(e){e={...Ms.defaultOptions,...e},super(e),this.enabled=!0,this._state=Ad.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.clipToViewport=e.clipToViewport,this.addResource("uTexture",0,1)}apply(e,n,r,o){e.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:n,gl:r,...o}=e;let i,a;return n&&(i=me.from(n)),r&&(a=ge.from(r)),new Ms({gpuProgram:i,glProgram:a,...o})}};rf.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ye=rf;const _s=[];An.handleByNamedList(Ve.Environment,_s);async function Td(t){if(!t)for(let e=0;e<_s.length;e++){const n=_s[e];if(n.value.test()){await n.value.load();return}}}let Nr;function Pd(){if(typeof Nr=="boolean")return Nr;try{Nr=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Nr=!1}return Nr}var wo={exports:{}},fl;function Rd(){if(fl)return wo.exports;fl=1,wo.exports=t,wo.exports.default=t;function t(w,C,A){A=A||2;var E=C&&C.length,D=E?C[0]*A:w.length,G=e(w,0,D,A,!0),N=[];if(!G||G.next===G.prev)return N;var X,oe,re,He,Oe,we,st;if(E&&(G=l(w,C,G,A)),w.length>80*A){X=re=w[0],oe=He=w[1];for(var Fe=A;Fe<D;Fe+=A)Oe=w[Fe],we=w[Fe+1],Oe<X&&(X=Oe),we<oe&&(oe=we),Oe>re&&(re=Oe),we>He&&(He=we);st=Math.max(re-X,He-oe),st=st!==0?32767/st:0}return r(G,N,A,X,oe,st,0),N}function e(w,C,A,E,D){var G,N;if(D===ue(w,C,A,E)>0)for(G=C;G<A;G+=E)N=H(G,w[G],w[G+1],N);else for(G=A-E;G>=C;G-=E)N=H(G,w[G],w[G+1],N);return N&&_(N,N.next)&&(Y(N),N=N.next),N}function n(w,C){if(!w)return w;C||(C=w);var A=w,E;do if(E=!1,!A.steiner&&(_(A,A.next)||v(A.prev,A,A.next)===0)){if(Y(A),A=C=A.prev,A===A.next)break;E=!0}else A=A.next;while(E||A!==C);return C}function r(w,C,A,E,D,G,N){if(w){!N&&G&&d(w,E,D,G);for(var X=w,oe,re;w.prev!==w.next;){if(oe=w.prev,re=w.next,G?i(w,E,D,G):o(w)){C.push(oe.i/A|0),C.push(w.i/A|0),C.push(re.i/A|0),Y(w),w=re.next,X=re.next;continue}if(w=re,w===X){N?N===1?(w=a(n(w),C,A),r(w,C,A,E,D,G,2)):N===2&&s(w,C,A,E,D,G):r(n(w),C,A,E,D,G,1);break}}}}function o(w){var C=w.prev,A=w,E=w.next;if(v(C,A,E)>=0)return!1;for(var D=C.x,G=A.x,N=E.x,X=C.y,oe=A.y,re=E.y,He=D<G?D<N?D:N:G<N?G:N,Oe=X<oe?X<re?X:re:oe<re?oe:re,we=D>G?D>N?D:N:G>N?G:N,st=X>oe?X>re?X:re:oe>re?oe:re,Fe=E.next;Fe!==C;){if(Fe.x>=He&&Fe.x<=we&&Fe.y>=Oe&&Fe.y<=st&&x(D,X,G,oe,N,re,Fe.x,Fe.y)&&v(Fe.prev,Fe,Fe.next)>=0)return!1;Fe=Fe.next}return!0}function i(w,C,A,E){var D=w.prev,G=w,N=w.next;if(v(D,G,N)>=0)return!1;for(var X=D.x,oe=G.x,re=N.x,He=D.y,Oe=G.y,we=N.y,st=X<oe?X<re?X:re:oe<re?oe:re,Fe=He<Oe?He<we?He:we:Oe<we?Oe:we,Or=X>oe?X>re?X:re:oe>re?oe:re,Fr=He>Oe?He>we?He:we:Oe>we?Oe:we,ya=g(st,Fe,C,A,E),xa=g(Or,Fr,C,A,E),Ce=w.prevZ,Ae=w.nextZ;Ce&&Ce.z>=ya&&Ae&&Ae.z<=xa;){if(Ce.x>=st&&Ce.x<=Or&&Ce.y>=Fe&&Ce.y<=Fr&&Ce!==D&&Ce!==N&&x(X,He,oe,Oe,re,we,Ce.x,Ce.y)&&v(Ce.prev,Ce,Ce.next)>=0||(Ce=Ce.prevZ,Ae.x>=st&&Ae.x<=Or&&Ae.y>=Fe&&Ae.y<=Fr&&Ae!==D&&Ae!==N&&x(X,He,oe,Oe,re,we,Ae.x,Ae.y)&&v(Ae.prev,Ae,Ae.next)>=0))return!1;Ae=Ae.nextZ}for(;Ce&&Ce.z>=ya;){if(Ce.x>=st&&Ce.x<=Or&&Ce.y>=Fe&&Ce.y<=Fr&&Ce!==D&&Ce!==N&&x(X,He,oe,Oe,re,we,Ce.x,Ce.y)&&v(Ce.prev,Ce,Ce.next)>=0)return!1;Ce=Ce.prevZ}for(;Ae&&Ae.z<=xa;){if(Ae.x>=st&&Ae.x<=Or&&Ae.y>=Fe&&Ae.y<=Fr&&Ae!==D&&Ae!==N&&x(X,He,oe,Oe,re,we,Ae.x,Ae.y)&&v(Ae.prev,Ae,Ae.next)>=0)return!1;Ae=Ae.nextZ}return!0}function a(w,C,A){var E=w;do{var D=E.prev,G=E.next.next;!_(D,G)&&S(D,E,E.next,G)&&k(D,G)&&k(G,D)&&(C.push(D.i/A|0),C.push(E.i/A|0),C.push(G.i/A|0),Y(E),Y(E.next),E=w=G),E=E.next}while(E!==w);return n(E)}function s(w,C,A,E,D,G){var N=w;do{for(var X=N.next.next;X!==N.prev;){if(N.i!==X.i&&M(N,X)){var oe=B(N,X);N=n(N,N.next),oe=n(oe,oe.next),r(N,C,A,E,D,G,0),r(oe,C,A,E,D,G,0);return}X=X.next}N=N.next}while(N!==w)}function l(w,C,A,E){var D=[],G,N,X,oe,re;for(G=0,N=C.length;G<N;G++)X=C[G]*E,oe=G<N-1?C[G+1]*E:w.length,re=e(w,X,oe,E,!1),re===re.next&&(re.steiner=!0),D.push(y(re));for(D.sort(u),G=0;G<D.length;G++)A=f(D[G],A);return A}function u(w,C){return w.x-C.x}function f(w,C){var A=c(w,C);if(!A)return C;var E=B(A,w);return n(E,E.next),n(A,A.next)}function c(w,C){var A=C,E=w.x,D=w.y,G=-1/0,N;do{if(D<=A.y&&D>=A.next.y&&A.next.y!==A.y){var X=A.x+(D-A.y)*(A.next.x-A.x)/(A.next.y-A.y);if(X<=E&&X>G&&(G=X,N=A.x<A.next.x?A:A.next,X===E))return N}A=A.next}while(A!==C);if(!N)return null;var oe=N,re=N.x,He=N.y,Oe=1/0,we;A=N;do E>=A.x&&A.x>=re&&E!==A.x&&x(D<He?E:G,D,re,He,D<He?G:E,D,A.x,A.y)&&(we=Math.abs(D-A.y)/(E-A.x),k(A,w)&&(we<Oe||we===Oe&&(A.x>N.x||A.x===N.x&&h(N,A)))&&(N=A,Oe=we)),A=A.next;while(A!==oe);return N}function h(w,C){return v(w.prev,w,C.prev)<0&&v(C.next,w,w.next)<0}function d(w,C,A,E){var D=w;do D.z===0&&(D.z=g(D.x,D.y,C,A,E)),D.prevZ=D.prev,D.nextZ=D.next,D=D.next;while(D!==w);D.prevZ.nextZ=null,D.prevZ=null,p(D)}function p(w){var C,A,E,D,G,N,X,oe,re=1;do{for(A=w,w=null,G=null,N=0;A;){for(N++,E=A,X=0,C=0;C<re&&(X++,E=E.nextZ,!!E);C++);for(oe=re;X>0||oe>0&&E;)X!==0&&(oe===0||!E||A.z<=E.z)?(D=A,A=A.nextZ,X--):(D=E,E=E.nextZ,oe--),G?G.nextZ=D:w=D,D.prevZ=G,G=D;A=E}G.nextZ=null,re*=2}while(N>1);return w}function g(w,C,A,E,D){return w=(w-A)*D|0,C=(C-E)*D|0,w=(w|w<<8)&16711935,w=(w|w<<4)&252645135,w=(w|w<<2)&858993459,w=(w|w<<1)&1431655765,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,w|C<<1}function y(w){var C=w,A=w;do(C.x<A.x||C.x===A.x&&C.y<A.y)&&(A=C),C=C.next;while(C!==w);return A}function x(w,C,A,E,D,G,N,X){return(D-N)*(C-X)>=(w-N)*(G-X)&&(w-N)*(E-X)>=(A-N)*(C-X)&&(A-N)*(G-X)>=(D-N)*(E-X)}function M(w,C){return w.next.i!==C.i&&w.prev.i!==C.i&&!O(w,C)&&(k(w,C)&&k(C,w)&&U(w,C)&&(v(w.prev,w,C.prev)||v(w,C.prev,C))||_(w,C)&&v(w.prev,w,w.next)>0&&v(C.prev,C,C.next)>0)}function v(w,C,A){return(C.y-w.y)*(A.x-C.x)-(C.x-w.x)*(A.y-C.y)}function _(w,C){return w.x===C.x&&w.y===C.y}function S(w,C,A,E){var D=F(v(w,C,A)),G=F(v(w,C,E)),N=F(v(A,E,w)),X=F(v(A,E,C));return!!(D!==G&&N!==X||D===0&&R(w,A,C)||G===0&&R(w,E,C)||N===0&&R(A,w,E)||X===0&&R(A,C,E))}function R(w,C,A){return C.x<=Math.max(w.x,A.x)&&C.x>=Math.min(w.x,A.x)&&C.y<=Math.max(w.y,A.y)&&C.y>=Math.min(w.y,A.y)}function F(w){return w>0?1:w<0?-1:0}function O(w,C){var A=w;do{if(A.i!==w.i&&A.next.i!==w.i&&A.i!==C.i&&A.next.i!==C.i&&S(A,A.next,w,C))return!0;A=A.next}while(A!==w);return!1}function k(w,C){return v(w.prev,w,w.next)<0?v(w,C,w.next)>=0&&v(w,w.prev,C)>=0:v(w,C,w.prev)<0||v(w,w.next,C)<0}function U(w,C){var A=w,E=!1,D=(w.x+C.x)/2,G=(w.y+C.y)/2;do A.y>G!=A.next.y>G&&A.next.y!==A.y&&D<(A.next.x-A.x)*(G-A.y)/(A.next.y-A.y)+A.x&&(E=!E),A=A.next;while(A!==w);return E}function B(w,C){var A=new ne(w.i,w.x,w.y),E=new ne(C.i,C.x,C.y),D=w.next,G=C.prev;return w.next=C,C.prev=w,A.next=D,D.prev=A,E.next=A,A.prev=E,G.next=E,E.prev=G,E}function H(w,C,A,E){var D=new ne(w,C,A);return E?(D.next=E.next,D.prev=E,E.next.prev=D,E.next=D):(D.prev=D,D.next=D),D}function Y(w){w.next.prev=w.prev,w.prev.next=w.next,w.prevZ&&(w.prevZ.nextZ=w.nextZ),w.nextZ&&(w.nextZ.prevZ=w.prevZ)}function ne(w,C,A){this.i=w,this.x=C,this.y=A,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}t.deviation=function(w,C,A,E){var D=C&&C.length,G=D?C[0]*A:w.length,N=Math.abs(ue(w,0,G,A));if(D)for(var X=0,oe=C.length;X<oe;X++){var re=C[X]*A,He=X<oe-1?C[X+1]*A:w.length;N-=Math.abs(ue(w,re,He,A))}var Oe=0;for(X=0;X<E.length;X+=3){var we=E[X]*A,st=E[X+1]*A,Fe=E[X+2]*A;Oe+=Math.abs((w[we]-w[Fe])*(w[st+1]-w[we+1])-(w[we]-w[st])*(w[Fe+1]-w[we+1]))}return N===0&&Oe===0?0:Math.abs((Oe-N)/N)};function ue(w,C,A,E){for(var D=0,G=C,N=A-E;G<A;G+=E)D+=(w[N]-w[G])*(w[G+1]+w[N+1]),N=G;return D}return t.flatten=function(w){for(var C=w[0][0].length,A={vertices:[],holes:[],dimensions:C},E=0,D=0;D<w.length;D++){for(var G=0;G<w[D].length;G++)for(var N=0;N<C;N++)A.vertices.push(w[D][G][N]);D>0&&(E+=w[D-1].length,A.holes.push(E))}return A},wo.exports}var zd=Rd();const u1=Dl(zd);var of=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(of||{});class Od{constructor(e){this.items=[],this._name=e}emit(e,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](e,n,r,o,i,a,s,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const n=this.items.indexOf(e);return n!==-1&&this.items.splice(n,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Fd=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],sf=class af extends zr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const n=[...Fd,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(e={}){const n=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Td(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...af.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,n){let r=e;if(r instanceof Be&&(r={container:r},n&&(ce(Wt,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:it.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,n,r){const o=this.view.resolution;this.view.resize(e,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(e={}){const n=this;e.target||(e.target=n.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=of.ALL);const{clear:r,clearColor:o,target:i}=e;it.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,it.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(n=>{this.runners[n]=new Od(n)})}_addSystems(e){let n;for(n in e){const r=e[n];this._addSystem(r.value,r.name)}}_addSystem(e,n){const r=new e(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(e,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});e.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Pd())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};sf.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let lf=sf,Co;function Id(t){return Co!==void 0||(Co=(()=>{const e={stencil:!0,failIfMajorPerformanceCaveat:t??lf.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Cn.get().getWebGLRenderingContext())return!1;let r=Cn.get().createCanvas().getContext("webgl",e);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Co}let Ao;async function Ed(t={}){return Ao!==void 0||(Ao=await(async()=>{const e=Cn.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ao}const cl=["webgl","webgpu","canvas"];async function Ud(t){let e=[];t.preference?(e.push(t.preference),cl.forEach(i=>{i!==t.preference&&e.push(i)})):e=cl.slice();let n,r={};for(let i=0;i<e.length;i++){const a=e[i];if(a==="webgpu"&&await Ed()){const{WebGPURenderer:s}=await Vo(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-DW8LHMst.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...t,...t.webgpu};break}else if(a==="webgl"&&Id(t.failIfMajorPerformanceCaveat??lf.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await Vo(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-DBP-7iNY.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...t,...t.webgl};break}else if(a==="canvas")throw r={...t},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const uf="8.6.6";class ff{static init(){globalThis.__PIXI_APP_INIT__?.(this,uf)}static destroy(){}}ff.extension=Ve.Application;class kd{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,uf)}destroy(){this._renderer=null}}kd.extension={type:[Ve.WebGLSystem,Ve.WebGPUSystem],name:"initHook",priority:-10};const cf=class Ss{constructor(...e){this.stage=new Be,e[0]!==void 0&&ce(Wt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Ud(e),Ss._plugins.forEach(n=>{n.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ce(Wt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,n=!1){const r=Ss._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(e),this.renderer=null}};cf._plugins=[];let Io=cf;An.handleByList(Ve.Application,Io._plugins);An.add(ff);var Dd=`in vec2 aPosition;
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
`,Ld=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,hl=`struct GlobalFilterUniforms {
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
}`;const hf=class df extends ye{constructor(e){e={...df.defaultOptions,...e};const n=me.from({vertex:{source:hl,entryPoint:"mainVertex"},fragment:{source:hl,entryPoint:"mainFragment"}}),r=ge.from({vertex:Dd,fragment:Ld,name:"alpha-filter"}),{alpha:o,...i}=e,a=new tf({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};hf.defaultOptions={alpha:1};let Gd=hf;const mf={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Nd=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Bd(t){const e=mf[t],n=e.length;let r=Nd,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<t;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=t-s-1),l=l.replace("%value%",e[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",t.toString()),r}const $d=`
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
    }`;function Hd(t,e){const n=Math.ceil(t/2);let r=$d,o="",i;e?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<t;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",t.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function Wd(t,e){const n=Hd(e,t),r=Bd(e);return ge.from({vertex:n,fragment:r,name:`blur-${t?"horizontal":"vertical"}-pass-filter`})}var Xd=`

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
}`;function Vd(t,e){const n=mf[e],r=n.length,o=[],i=[],a=[];for(let c=0;c<e;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,t?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:e-c-1,d=n[h].toString();a[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=Xd.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",t?"z":"w");return me.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const pf=class gf extends ye{constructor(e){e={...gf.defaultOptions,...e};const n=Wd(e.horizontal,e.kernelSize),r=Vd(e.horizontal,e.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,n,r,o);else{const i=Rt.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=e.renderer.type===oi.WEBGPU;for(let u=0;u<this.passes-1;u++){e.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,e.applyFilter(this,a,r,o),Rt.returnTexture(i)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};pf.defaultOptions={strength:8,quality:4,kernelSize:5};let dl=pf;class Yd{constructor({matrix:e,observer:n}={}){this.dirty=!0,this._matrix=e??new $e,this.observer=n,this.position=new Qe(this,0,0),this.scale=new Qe(this,1,1),this.pivot=new Qe(this,0,0),this.skew=new Qe(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const e=this._matrix;return this.dirty&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1),e}_onUpdate(e){this.dirty=!0,e===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}}const yf=class Eo extends ku{constructor(...e){let n=e[0]||{};n instanceof ae&&(n={texture:n}),e.length>1&&(ce(Wt,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=e[1],n.height=e[2]),n={...Eo.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Qe({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new Yd({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=c??!1}static from(e,n={}){return typeof e=="string"?new Eo({texture:Gn.get(e),...n}):new Eo({texture:e,...n})}get uvRespectAnchor(){return gn("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(e){gn("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=e}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e=="number"?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(e){e||(e=ae.EMPTY);const n=this._texture;n!==e&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}setSize(e,n){typeof e=="object"&&(n=e.height??e.width,e=e.width),this._width=e,this._height=n??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}updateBounds(){const e=this._bounds,n=this._anchor,r=this._width,o=this._height;e.maxX=-n._x*r,e.minX=e.maxX+r,e.maxY=-n._y*o,e.minY=e.maxY+o}containsPoint(e){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return e.x>=o&&e.x<=o+n&&(i=-r*this._anchor._y,e.y>=i&&e.y<=i+r)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e=="boolean"?e:e?.texture){const r=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(r)}this._texture=null}};yf.defaultOptions={texture:ae.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let qd=yf;const Br=new Map;function Kd(t,e){if(!Br.has(t)){const n=new ae({source:new ra({resource:t,...e})}),r=()=>{Br.get(t)===n&&Br.delete(t)};n.once("destroy",r),n.source.once("destroy",r),Br.set(t,n)}return Br.get(t)}const xf=class vf{constructor(e={}){if(this.uid=Bt("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,e={...vf.defaultOptions,...e},this.stencil=e.stencil,this.depth=e.depth,this.isRoot=e.isRoot,typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<e.colorTextures;n++)this.colorTextures.push(new St({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}else{this.colorTextures=[...e.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(e.depthStencilTexture||this.stencil)&&(e.depthStencilTexture instanceof ae||e.depthStencilTexture instanceof St?this.depthStencilTexture=e.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new St({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(e,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(e,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};xf.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let jd=xf;const aa=class bf{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e={...bf.defaultOptions,...e},e.view&&(ce(Wt,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new kt(0,0,e.width,e.height),this.canvas=e.canvas||Cn.get().createCanvas(),this.antialias=!!e.antialias,this.texture=Kd(this.canvas,e),this.renderTarget=new jd({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,n,r){this.texture.source.resize(e,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};aa.extension={type:[Ve.WebGLSystem,Ve.WebGPUSystem,Ve.CanvasSystem],name:"view",priority:0};aa.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let Zd=aa;An.add(r0,o0);const ke={},uo={},ml=new Map,yn={};function ws(t){return new Promise(e=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>e(n),n.src=t})}async function Qd(t){const e=window.MAP;Object.assign(ke,window.META,e.decometa||{});for(const s of Object.keys(ke)){const l=ke[s].gear;if(l)for(const u in l)for(const f of l[u])ke[s+"__"+u+f]=ke[s]}const n=Object.keys(ke).filter(s=>!s.includes("__")),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>t(++i/o);await Promise.all([...n.map(async s=>{const l=await ws("assets/"+s+".png");if(yn[s]=l,l.naturalWidth){const u=ae.from(l);u.source.scaleMode="nearest",uo[s]=u}a()}),...r.map(async s=>{yn[s]=await ws("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function la(t){return!!uo[t]}const pl=new Set;function Mf(t){uo[t]||pl.has(t)||!ke[t]||(pl.add(t),ws("assets/"+t+".png").then(e=>{if(yn[t]=e,e.naturalWidth){const n=ae.from(e);n.source.scaleMode="nearest",uo[t]=n}}))}function Jd(t){for(const e of t){const n=ke[e]&&ke[e].gear;n&&n.w&&n.w.includes(0)&&Mf(e+"__w0")}}function hr(t,e,n,r){const o=ke[t],i=uo[t];if(o&&!i&&t.includes("__"))return Mf(t),null;if(!o||!i)return null;let a=0,s=0;if(o.anims&&e){const f=o.anims[e]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],c=o.dirs||1,h=c>=16?(n%16+16)%16:c>1?Math.round(n/2)%c:0;a=f.row+h,s=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(s=(r%o.frames+o.frames)%o.frames);const l=t+"|"+a+"|"+s;let u=ml.get(l);if(!u){if((s+1)*o.fw>i.width||(a+1)*o.fh>i.height)return null;u=new ae({source:i.source,frame:new kt(s*o.fw,a*o.fh,o.fw,o.fh)}),ml.set(l,u)}return u}function _f(t,e,n){const r=ke[t];if(!r||!r.anims)return 0;const o=r.anims[e]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function em(){const t=yn.ground;if(!t||!t.naturalWidth)return[];const e=2048,n=[];for(let r=0;r<t.naturalHeight;r+=e)for(let o=0;o<t.naturalWidth;o+=e){const i=Math.min(e,t.naturalWidth-o),a=Math.min(e,t.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(t,o,r,i,a,0,0,i,a);const l=ae.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}var _e=`in vec2 aPosition;
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
`,Se=`struct GlobalFilterUniforms {
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
}`,tm=`in vec2 vTextureCoord;
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
`,nm=`struct AdjustmentUniforms {
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
}`,rm=Object.defineProperty,om=(t,e,n)=>e in t?rm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Sf=(t,e,n)=>(om(t,typeof e!="symbol"?e+"":e,n),n);const im=class wf extends ye{constructor(e){e={...wf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:nm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:tm,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),Sf(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};Sf(im,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var sm=`
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
}`,am=`struct KawaseBlurUniforms {
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
}`,lm=`
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
`,um=`struct KawaseBlurUniforms {
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
}`,fm=Object.defineProperty,cm=(t,e,n)=>e in t?fm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kn=(t,e,n)=>(cm(t,typeof e!="symbol"?e+"":e,n),n);const Cf=class Af extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n))&&(ce("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},e[1]!==void 0&&(n.quality=e[1]),e[2]!==void 0&&(n.clamp=e[2])),n={...Af.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:n?.clamp?um:am,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:n?.clamp?lm:sm,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),kn(this,"uniforms"),kn(this,"_pixelSize",{x:0,y:0}),kn(this,"_clamp"),kn(this,"_kernels",[]),kn(this,"_blur"),kn(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(e,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,e.applyFilter(this,n,r,o);else{const l=Rt.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,e.applyFilter(this,u,f,!0),c=u,u=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,e.applyFilter(this,u,r,o),Rt.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,n)=>e+n+.5,0))}_generateKernels(){const e=this._blur,n=this._quality,r=[e];if(e>0){let o=e;const i=e/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};kn(Cf,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Tf=Cf;var hm=`in vec2 vTextureCoord;
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
`,dm=`struct AdvancedBloomUniforms {
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
`,mm=`
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
`,pm=`struct ExtractBrightnessUniforms {
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
`,gm=Object.defineProperty,ym=(t,e,n)=>e in t?gm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pf=(t,e,n)=>(ym(t,typeof e!="symbol"?e+"":e,n),n);const Rf=class zf extends ye{constructor(e){e={...zf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:pm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:mm,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),Pf(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};Pf(Rf,"DEFAULT_OPTIONS",{threshold:.5});let xm=Rf;var vm=Object.defineProperty,bm=(t,e,n)=>e in t?vm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nr=(t,e,n)=>(bm(t,typeof e!="symbol"?e+"":e,n),n);const Of=class Ff extends ye{constructor(e){e={...Ff.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:dm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:hm,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:ae.WHITE}}),nr(this,"uniforms"),nr(this,"bloomScale",1),nr(this,"brightness",1),nr(this,"_extractFilter"),nr(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new xm({threshold:e.threshold}),this._blurFilter=new Tf({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);this._extractFilter.apply(e,n,i,!0);const a=Rt.getSameSizeTexture(n);this._blurFilter.apply(e,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,e.applyFilter(this,n,r,o),Rt.returnTexture(a),Rt.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};nr(Of,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let Mm=Of;var _m=`precision highp float;
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
`,Sm=`struct AsciiUniforms {
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
}`,wm=Object.defineProperty,Cm=(t,e,n)=>e in t?wm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Cs=(t,e,n)=>(Cm(t,typeof e!="symbol"?e+"":e,n),n);const Am=class If extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...If.DEFAULT_OPTIONS,...n};const o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Sm,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:_m,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Cs(this,"uniforms"),Cs(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new it,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};Cs(Am,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Tm=`precision highp float;
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
`,Pm=`struct BevelUniforms {
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
}`,Rm=Object.defineProperty,zm=(t,e,n)=>e in t?Rm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rr=(t,e,n)=>(zm(t,typeof e!="symbol"?e+"":e,n),n);const Om=class Ef extends ye{constructor(e){e={...Ef.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Pm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Tm,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),rr(this,"uniforms"),rr(this,"_thickness"),rr(this,"_rotation"),rr(this,"_lightColor"),rr(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new it,this._shadowColor=new it,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/Ar}set rotation(e){this._rotation=e*Ar,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};rr(Om,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Fm=Object.defineProperty,Im=(t,e,n)=>e in t?Fm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Uo=(t,e,n)=>(Im(t,typeof e!="symbol"?e+"":e,n),n);const Em=class Uf extends Gd{constructor(...e){let n=e[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){ce("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},e[1]!==void 0&&(n.quality=e[1]),e[2]!==void 0&&(n.resolution=e[2]),e[3]!==void 0&&(n.kernelSize=e[3])}n={...Uf.DEFAULT_OPTIONS,...n},super(),Uo(this,"_blurXFilter"),Uo(this,"_blurYFilter"),Uo(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new dl({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new dl({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);e.applyFilter(this,n,r,o),this._blurXFilter.apply(e,n,i,!0),this._blurYFilter.apply(e,i,r,!1),Rt.returnTexture(i)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return ce("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){ce("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return ce("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){ce("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return ce("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){ce("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};Uo(Em,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Um=`precision highp float;
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
`,km=`struct BulgePinchUniforms {
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
}`,Dm=Object.defineProperty,Lm=(t,e,n)=>e in t?Dm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kf=(t,e,n)=>(Lm(t,typeof e!="symbol"?e+"":e,n),n);const Gm=class Df extends ye{constructor(e){e={...Df.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:km,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Um,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),kf(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,e.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};kf(Gm,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Nm=`precision highp float;
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
`,Bm=`in vec2 aPosition;
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
`,gl=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Qn=Qn||{};Qn.stringify=function(){var t={"visit_linear-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return t.visit_gradient(e)},"visit_radial-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return t.visit_gradient(e)},visit_gradient:function(e){var n=t.visit(e.orientation);return n&&(n+=", "),e.type+"("+n+t.visit(e.colorStops)+")"},visit_shape:function(e){var n=e.value,r=t.visit(e.at),o=t.visit(e.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(e){var n="",r=t.visit(e.at);return r&&(n+=r),n},"visit_extent-keyword":function(e){var n=e.value,r=t.visit(e.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return t.visit(e.value.x)+" "+t.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return t.visit_color(e.value,e)},visit_hex:function(e){return t.visit_color("#"+e.value,e)},visit_rgb:function(e){return t.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return t.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,n){var r=e,o=t.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var n="",r=e.length;return e.forEach(function(o,i){n+=t.visit(o),i<r-1&&(n+=", ")}),n},visit:function(e){if(!e)return"";if(e instanceof Array)return t.visit_array(e);if(e.type){var n=t["visit_"+e.type];if(n)return n(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return t.visit(e)}}();var Qn=Qn||{};Qn.parse=function(){var t={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function n(C){var A=new Error(e+": "+C);throw A.source=e,A}function r(){var C=o();return e.length>0&&n("Invalid input not EOF"),C}function o(){return v(i)}function i(){return a("linear-gradient",t.linearGradient,l)||a("repeating-linear-gradient",t.repeatingLinearGradient,l)||a("radial-gradient",t.radialGradient,c)||a("repeating-radial-gradient",t.repeatingRadialGradient,c)}function a(C,A,E){return s(A,function(D){var G=E();return G&&(ue(t.comma)||n("Missing comma before color stops")),{type:C,orientation:G,colorStops:v(_)}})}function s(C,A){var E=ue(C);if(E){ue(t.startCall)||n("Missing (");var D=A(E);return ue(t.endCall)||n("Missing )"),D}}function l(){return u()||f()}function u(){return ne("directional",t.sideOrCorner,1)}function f(){return ne("angular",t.angleValue,1)}function c(){var C,A=h(),E;return A&&(C=[],C.push(A),E=e,ue(t.comma)&&(A=h(),A?C.push(A):e=E)),C}function h(){var C=d()||p();if(C)C.at=y();else{var A=g();if(A){C=A;var E=y();E&&(C.at=E)}else{var D=x();D&&(C={type:"default-radial",at:D})}}return C}function d(){var C=ne("shape",/^(circle)/i,0);return C&&(C.style=Y()||g()),C}function p(){var C=ne("shape",/^(ellipse)/i,0);return C&&(C.style=B()||g()),C}function g(){return ne("extent-keyword",t.extentKeywords,1)}function y(){if(ne("position",/^at/,0)){var C=x();return C||n("Missing positioning value"),C}}function x(){var C=M();if(C.x||C.y)return{type:"position",value:C}}function M(){return{x:B(),y:B()}}function v(C){var A=C(),E=[];if(A)for(E.push(A);ue(t.comma);)A=C(),A?E.push(A):n("One extra comma");return E}function _(){var C=S();return C||n("Expected color definition"),C.length=B(),C}function S(){return F()||k()||O()||R()}function R(){return ne("literal",t.literalColor,0)}function F(){return ne("hex",t.hexColor,1)}function O(){return s(t.rgbColor,function(){return{type:"rgb",value:v(U)}})}function k(){return s(t.rgbaColor,function(){return{type:"rgba",value:v(U)}})}function U(){return ue(t.number)[1]}function B(){return ne("%",t.percentageValue,1)||H()||Y()}function H(){return ne("position-keyword",t.positionKeywords,1)}function Y(){return ne("px",t.pixelValue,1)||ne("em",t.emValue,1)}function ne(C,A,E){var D=ue(A);if(D)return{type:C,value:D[E]}}function ue(C){var A,E;return E=/^[\n\r\t\s]+/.exec(e),E&&w(E[0].length),A=C.exec(e),A&&w(A[0].length),A}function w(C){e=e.substr(C)}return function(C){return e=C.toString(),r()}}();var $m=Qn.parse;Qn.stringify;function Hm(t){const e=$m(Zm(t));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=e[0],r=Wm(n.type),o=Xm(n.colorStops),i=Km(n.orientation);return{type:r,stops:o,angle:i}}function Wm(t){const e={"linear-gradient":0,"radial-gradient":1};if(!(t in e))throw new Error(`Unsupported gradient type "${t}"`);return e[t]}function Xm(t){const e=Ym(t),n=[],r=new it;for(let o=0;o<t.length;o++){const i=Vm(t[o]),a=r.setValue(i).toArray();n.push({offset:e[o],color:a.slice(0,3),alpha:a[3]})}return n}function Vm(t){switch(t.type){case"hex":return`#${t.value}`;case"literal":return t.value;default:return`${t.type}(${t.value.join(",")})`}}function Ym(t){const e=[];for(let i=0;i<t.length;i++){const a=t[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),e.push(s)}const r=i=>{for(let a=i;a<e.length;a++)if(e[a]!==-1)return{indexDelta:a-i,offset:e[a]};return{indexDelta:e.length-1-i,offset:1}};let o=0;for(let i=0;i<e.length;i++){const a=e[i];if(a!==-1)o=a;else if(i===0)e[i]=0;else if(i+1===e.length)e[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)e[i+f]=o+(f+1)*u;i+=s.indexDelta,o=e[i]}}return e.map(qm)}function qm(t){return t.toString().length>6?parseFloat(t.toString().substring(0,6)):t}function Km(t){if(typeof t>"u")return 0;if("type"in t&&"value"in t)switch(t.type){case"angular":return parseFloat(t.value);case"directional":return jm(t.value)}return 0}function jm(t){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(t in e))throw new Error(`Unsupported directional value "${t}"`);return e[t]}function Zm(t){let e=t.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var Qm=Object.defineProperty,Jm=(t,e,n)=>e in t?Qm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yn=(t,e,n)=>(Jm(t,typeof e!="symbol"?e+"":e,n),n);const Wi=90;function ep(t){return[...t].sort((e,n)=>e.offset-n.offset)}const fo=class ko extends ye{constructor(e){if(e&&"css"in e?e={...Hm(e.css||""),alpha:e.alpha??ko.defaults.alpha,maxColors:e.maxColors??ko.defaults.maxColors}:e={...ko.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=me.from({vertex:{source:gl,entryPoint:"mainVertex"},fragment:{source:gl,entryPoint:"mainFragment"}}),r=ge.from({vertex:Bm,fragment:Nm,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??Wi,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Yn(this,"baseUniforms"),Yn(this,"stopsUniforms"),Yn(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const n=ep(e),r=new it;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+Wi}set angle(e){this.baseUniforms.uOptions[1]=e-Wi}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};Yn(fo,"LINEAR",0);Yn(fo,"RADIAL",1);Yn(fo,"CONIC",2);Yn(fo,"defaults",{type:fo.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var tp=`in vec2 vTextureCoord;
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

}`,np=`struct ColorMapUniforms {
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
}`,rp=Object.defineProperty,op=(t,e,n)=>e in t?rp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sn=(t,e,n)=>(op(t,typeof e!="symbol"?e+"":e,n),n);const ip=class Lf extends ye{constructor(...e){let n=e[0]??{};if((n instanceof ae||n instanceof St)&&(ce("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},e[1]!==void 0&&(n.nearest=e[1]),e[2]!==void 0&&(n.mix=e[2])),n={...Lf.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:np,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:tp,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),sn(this,"uniforms"),sn(this,"_size",0),sn(this,"_sliceSize",0),sn(this,"_slicePixelSize",0),sn(this,"_sliceInnerSize",0),sn(this,"_nearest",!1),sn(this,"_scaleMode","linear"),sn(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const n=e instanceof ae?e.source:e;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const e=this._colorMap;e?.source&&(e.source.update(),this.colorMap=e)}destroy(){this._colorMap?.destroy(),super.destroy()}};sn(ip,"DEFAULT_OPTIONS",{colorMap:ae.WHITE,nearest:!1,mix:1});var sp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,ap=`struct ColorOverlayUniforms {
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
`,lp=Object.defineProperty,up=(t,e,n)=>e in t?lp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,As=(t,e,n)=>(up(t,typeof e!="symbol"?e+"":e,n),n);const fp=class Gf extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(ce("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},e[1]!==void 0&&(n.alpha=e[1])),n={...Gf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:ap,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:sp,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),As(this,"uniforms"),As(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new it,this.color=n.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};As(fp,"DEFAULT_OPTIONS",{color:0,alpha:1});var cp=`in vec2 vTextureCoord;
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
`,hp=`struct ColorReplaceUniforms {
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
}`,dp=Object.defineProperty,mp=(t,e,n)=>e in t?dp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Do=(t,e,n)=>(mp(t,typeof e!="symbol"?e+"":e,n),n);const pp=class Nf extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(ce("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},e[1]!==void 0&&(n.targetColor=e[1]),e[2]!==void 0&&(n.tolerance=e[2])),n={...Nf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:hp,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:cp,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),Do(this,"uniforms"),Do(this,"_originalColor"),Do(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new it,this._targetColor=new it,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){ce("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return ce("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){ce("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return ce("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Do(pp,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var gp=`in vec2 vTextureCoord;
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
}`,yp=`struct ConvolutionUniforms {
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
}`,xp=Object.defineProperty,vp=(t,e,n)=>e in t?xp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bf=(t,e,n)=>(vp(t,typeof e!="symbol"?e+"":e,n),n);const bp=class $f extends ye{constructor(...e){let n=e[0]??{};Array.isArray(n)&&(ce("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},e[1]!==void 0&&(n.width=e[1]),e[2]!==void 0&&(n.height=e[2])),n={...$f.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:yp,entryPoint:"mainFragment"}}),a=ge.from({vertex:_e,fragment:gp,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Bf(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};Bf(bp,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Mp=`precision highp float;
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
`,_p=`struct CRTUniforms {
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
}`,Sp=Object.defineProperty,wp=(t,e,n)=>e in t?Sp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Lo=(t,e,n)=>(wp(t,typeof e!="symbol"?e+"":e,n),n);const Cp=class Hf extends ye{constructor(e){e={...Hf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:_p,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Mp,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Lo(this,"uniforms"),Lo(this,"seed"),Lo(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};Lo(Cp,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Ap=`precision highp float;
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
`,Tp=`struct DotUniforms {
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
}`,Pp=Object.defineProperty,Rp=(t,e,n)=>e in t?Pp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zp=(t,e,n)=>(Rp(t,e+"",n),n);const Op=class Wf extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},e[1]!==void 0&&(n.angle=e[1]),e[2]!==void 0&&(n.grayscale=e[2])),n={...Wf.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Tp,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:Ap,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};zp(Op,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Fp=`precision highp float;
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
}`,Ip=`struct DropShadowUniforms {
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
}`,Ep=Object.defineProperty,Up=(t,e,n)=>e in t?Ep(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,or=(t,e,n)=>(Up(t,typeof e!="symbol"?e+"":e,n),n);const kp=class Xf extends ye{constructor(e){e={...Xf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Ip,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Fp,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),or(this,"uniforms"),or(this,"shadowOnly",!1),or(this,"_color"),or(this,"_blurFilter"),or(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new it,this.color=e.color??0,this._blurFilter=new Tf({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new ye({gpuProgram:me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:ge.from({vertex:_e,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);e.applyFilter(this,n,i,!0),this._blurFilter.apply(e,i,r,o),this.shadowOnly||e.applyFilter(this._basePass,n,r,!1),Rt.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};or(kp,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Dp=`precision highp float;
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
`,Lp=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,Gp=Object.defineProperty,Np=(t,e,n)=>e in t?Gp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yt=(t,e,n)=>(Np(t,typeof e!="symbol"?e+"":e,n),n);const Bp=class Vf extends ye{constructor(e){e={...Vf.defaults,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Lp,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Dp,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=e.sampleSize??512;const i=new ae({source:new oa({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:e?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:e?.fillMode??0,type:"f32"},uOffset:{value:e?.offset??100,type:"f32"},uDirection:{value:e?.direction??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),Yt(this,"uniforms"),Yt(this,"average",!1),Yt(this,"minSize",8),Yt(this,"sampleSize",512),Yt(this,"_canvas"),Yt(this,"texture"),Yt(this,"_slices",0),Yt(this,"_sizes",new Float32Array(1)),Yt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,e)}apply(e,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,e.applyFilter(this,n,r,o)}_randomizeSizes(){const e=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);e[s]=u,a-=u}e[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);e[s]=l,i-=l}e[n]=i}this.shuffle()}shuffle(){const e=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=e[r];e[r]=e[o],e[o]=i}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*e,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,e,s+1>>0),i+=s}n.source.update()}set sizes(e){const n=Math.min(this._slices,e.length);for(let r=0;r<n;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const n=Math.min(this._slices,e.length);for(let r=0;r<n;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/Ar}set direction(e){this.uniforms.uDirection=e*Ar}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Yt(Bp,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var $p=`precision highp float;
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
`,Hp=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,Wp=Object.defineProperty,Xp=(t,e,n)=>e in t?Wp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ts=(t,e,n)=>(Xp(t,typeof e!="symbol"?e+"":e,n),n);const Vp=class Yf extends ye{constructor(e){e={...Yf.DEFAULT_OPTIONS,...e};const n=e.distance??10,r=e.quality??.1,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Hp,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:$p.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:e?.knockout??!1?1:0,type:"f32"}}},padding:n}),Ts(this,"uniforms"),Ts(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new it,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Ts(Vp,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Yp=`precision highp float;
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
`,qp=`struct GodrayUniforms {
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

\${PERLIN}`,Kp=`vec3 mod289(vec3 x)
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
`,jp=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,Zp=Object.defineProperty,Qp=(t,e,n)=>e in t?Zp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ir=(t,e,n)=>(Qp(t,typeof e!="symbol"?e+"":e,n),n);const Jp=class qf extends ye{constructor(e){e={...qf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:qp.replace("${PERLIN}",jp),entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Yp.replace("${PERLIN}",Kp),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ir(this,"uniforms"),ir(this,"time",0),ir(this,"_angleLight",[0,0]),ir(this,"_angle",0),ir(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(e){this._angle=e;const n=e*Ar;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};ir(Jp,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var e2=`in vec2 vTextureCoord;
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
`,t2=`struct HslUniforms {
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
}`,n2=Object.defineProperty,r2=(t,e,n)=>e in t?n2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ps=(t,e,n)=>(r2(t,typeof e!="symbol"?e+"":e,n),n);const o2=class Kf extends ye{constructor(e){e={...Kf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:t2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:e2,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),Ps(this,"uniforms"),Ps(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,e)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(e){this.uniforms.uHsl[1]=e}get lightness(){return this.uniforms.uHsl[2]}set lightness(e){this.uniforms.uHsl[2]=e}get colorize(){return this.uniforms.uColorize===1}set colorize(e){this.uniforms.uColorize=e?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Ps(o2,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var i2=`precision highp float;
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
`,s2=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,a2=Object.defineProperty,l2=(t,e,n)=>e in t?a2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Rs=(t,e,n)=>(l2(t,typeof e!="symbol"?e+"":e,n),n);const u2=class jf extends ye{constructor(...e){let n=e[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Qe){ce("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},e[1]!==void 0&&(n.kernelSize=e[1]),e[2]!==void 0&&(n.offset=e[2])}n={...jf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:s2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:i2,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Rs(this,"uniforms"),Rs(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Rs(u2,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var f2=`in vec2 vTextureCoord;
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
`,c2=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,h2=Object.defineProperty,d2=(t,e,n)=>e in t?h2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Go=(t,e,n)=>(d2(t,typeof e!="symbol"?e+"":e,n),n);const m2=class Zf extends ye{constructor(...e){let n=e[0]??{};Array.isArray(n)&&(ce("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},e[1]&&(n.tolerance=e[1]),e[2]&&(n.maxColors=e[2])),n={...Zf.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:c2.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:f2.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),Go(this,"uniforms"),Go(this,"_replacements",[]),Go(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(e){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=e.length,i=new it;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=e[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){ce("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return ce("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Go(m2,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var p2=`precision highp float;
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
}`,g2=`struct OldFilmUniforms {
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
}`,y2=Object.defineProperty,x2=(t,e,n)=>e in t?y2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zs=(t,e,n)=>(x2(t,typeof e!="symbol"?e+"":e,n),n);const v2=class Qf extends ye{constructor(e){e={...Qf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:g2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:p2,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),zs(this,"uniforms"),zs(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};zs(v2,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var b2=`precision highp float;
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
`,M2=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,_2=Object.defineProperty,S2=(t,e,n)=>e in t?_2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$n=(t,e,n)=>(S2(t,typeof e!="symbol"?e+"":e,n),n);const ua=class Dn extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},e[1]!==void 0&&(n.color=e[1]),e[2]!==void 0&&(n.quality=e[2]),e[3]!==void 0&&(n.alpha=e[3]),e[4]!==void 0&&(n.knockout=e[4])),n={...Dn.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:M2,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:b2.replace(/\$\{ANGLE_STEP\}/,Dn.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),$n(this,"uniforms"),$n(this,"_thickness"),$n(this,"_quality"),$n(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Dn.getAngleStep(r),this._color=new it,this.color=n.color??0,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,e.applyFilter(this,n,r,o)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Dn.MAX_SAMPLES,Dn.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Dn.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};$n(ua,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});$n(ua,"MIN_SAMPLES",1);$n(ua,"MAX_SAMPLES",100);var w2=`precision highp float;
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
`,C2=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,A2=Object.defineProperty,T2=(t,e,n)=>e in t?A2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,No=(t,e,n)=>(T2(t,typeof e!="symbol"?e+"":e,n),n);const P2=class Jf extends ye{constructor(...e){let n=e[0]??{};if(typeof n=="number"){if(ce("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},e[1]){const i="x"in e[1]?e[1].x:e[1][0],a="y"in e[1]?e[1].y:e[1][1];n.center={x:i,y:a}}e[2]&&(n.kernelSize=e[2]),e[3]&&(n.radius=e[3])}n={...Jf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:C2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:w2,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),No(this,"uniforms"),No(this,"_angle"),No(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};No(P2,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var R2=`precision highp float;
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
`,z2=`struct ReflectionUniforms {
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
}`,O2=Object.defineProperty,F2=(t,e,n)=>e in t?O2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Os=(t,e,n)=>(F2(t,typeof e!="symbol"?e+"":e,n),n);const I2=class ec extends ye{constructor(e){e={...ec.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:z2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:R2,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Os(this,"uniforms"),Os(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Os(I2,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var E2=`precision highp float;
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
`,U2=`struct RgbSplitUniforms {
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
`,k2=Object.defineProperty,D2=(t,e,n)=>e in t?k2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tc=(t,e,n)=>(D2(t,typeof e!="symbol"?e+"":e,n),n);const L2=class nc extends ye{constructor(...e){let n=e[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(ce("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},e[1]!==void 0&&(n.green=e[1]),e[2]!==void 0&&(n.blue=e[2])),n={...nc.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:U2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:E2,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),tc(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};tc(L2,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var G2=`
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
`,N2=`
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
`,B2=Object.defineProperty,$2=(t,e,n)=>e in t?B2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fs=(t,e,n)=>($2(t,typeof e!="symbol"?e+"":e,n),n);const H2=class rc extends ye{constructor(...e){let n=e[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(ce("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...e[1]},e[2]!==void 0&&(n.time=e[2])),n={...rc.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:N2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:G2,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Fs(this,"uniforms"),Fs(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};Fs(H2,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var W2=`precision highp float;
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
`,X2=`struct SimpleLightmapUniforms {
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
}`,V2=Object.defineProperty,Y2=(t,e,n)=>e in t?V2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bo=(t,e,n)=>(Y2(t,typeof e!="symbol"?e+"":e,n),n);const q2=class oc extends ye{constructor(...e){let n=e[0]??{};if(n instanceof ae&&(ce("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},e[1]!==void 0&&(n.color=e[1]),e[2]!==void 0&&(n.alpha=e[2])),n={...oc.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:X2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:W2,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),Bo(this,"uniforms"),Bo(this,"_color"),Bo(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new it,this.color=n.color??0,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,e.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Bo(q2,"DEFAULT_OPTIONS",{lightMap:ae.WHITE,color:0,alpha:1});var K2=`in vec2 vTextureCoord;
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
`,j2=`struct TiltShiftUniforms {
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
}`,Z2=Object.defineProperty,Q2=(t,e,n)=>e in t?Z2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Is=(t,e,n)=>(Q2(t,typeof e!="symbol"?e+"":e,n),n);const J2=class ic extends ye{constructor(e){const{width:n,height:r}=Zd.defaultOptions;e={...ic.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...e};const o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:j2,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:K2,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur,e.gradientBlur]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Is(this,"uniforms"),Is(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis}updateDimensions(e){const{uDimensions:n}=this.uniforms;n[0]=e.frame.width,n[1]=e.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,n=this.uniforms.uStart,r=e.x-n.x,o=e.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};Is(J2,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var eg=`precision highp float;
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
`,tg=`struct TwistUniforms {
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
`,ng=Object.defineProperty,rg=(t,e,n)=>e in t?ng(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sc=(t,e,n)=>(rg(t,typeof e!="symbol"?e+"":e,n),n);const og=class ac extends ye{constructor(e){e={...ac.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:tg,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:eg,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),sc(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};sc(og,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ig=`precision highp float;
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
`,sg=`struct ZoomBlurUniforms {
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
}`,ag=Object.defineProperty,lg=(t,e,n)=>e in t?ag(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,lc=(t,e,n)=>(lg(t,typeof e!="symbol"?e+"":e,n),n);const ug=class uc extends ye{constructor(e){e={...uc.DEFAULT_OPTIONS,...e};const n=e.maxKernelSize??32,r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:sg.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:ig.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),lc(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};lc(ug,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let bn;const xe={};let dr,mr,Ft,pr,eo,$o=null,Ho=null,fc,Es=[],Us=[];const ii=[],Rr=new Map,Mn=[],To=[];function fa(){return bn.canvas}let Xi;function fg(){try{const t=bn.renderer.gl,e=t.getExtension("WEBGL_debug_renderer_info");return String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))}catch{return"?"}}let $r,Hr;const Vi={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function Rn(t,e,n){t.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${e};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function cg(t){$r=new Io,bn=new Io,Hr=new Io,await $r.init({...Vi,background:"#100d18"}),await bn.init({...Vi,backgroundAlpha:0}),await Hr.init({...Vi,backgroundAlpha:0}),b.gpuName=fg(),b.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(b.gpuName),t.style.position="fixed",dr=document.createElement("canvas"),mr=document.createElement("canvas"),Ft=document.createElement("canvas"),pr=document.createElement("canvas"),Rn($r.canvas,1),Rn(dr,2),Rn(bn.canvas,3),Rn(Hr.canvas,4,"plus-lighter"),Rn(Ft,5),Rn(mr,6),Rn(pr,7,"plus-lighter"),Ft.style.imageRendering="auto",bn.canvas.style.pointerEvents="auto",t.append($r.canvas,dr,bn.canvas,Hr.canvas,Ft,mr,pr);for(const e of["ground"])xe[e]=new Be,$r.stage.addChild(xe[e]);for(const e of["world","top"])xe[e]=new Be,bn.stage.addChild(xe[e]);xe.lights=new Be,Hr.stage.addChild(xe.lights),xe.groundCam=new Be,xe.ground.addChild(xe.groundCam),xe.worldCam=new Be,xe.world.addChild(xe.worldCam),xe.shadows=new Be,xe.entities=new Be,xe.entities.sortableChildren=!0,xe.worldCam.addChild(xe.shadows,xe.entities),xe.lightsCam=new Be,xe.lights.addChild(xe.lightsCam),Xi=new Mm({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Xi.resolution=.5,xe.lights.filters=[Xi],fc=ae.from(hg(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),eo=new Ct(ae.WHITE),xe.top.addChild(eo),yl(),window.addEventListener("resize",yl)}function hg(t,e){const n=document.createElement("canvas");n.width=n.height=t;const r=n.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[i,a]of e)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,t,t),n}function yl(){b.W=window.innerWidth,b.H=window.innerHeight;const t=i=>Math.ceil(i*Ls);dr.width=pr.width=t(b.W),dr.height=pr.height=t(b.H),mr.width=b.W,mr.height=b.H;const e=document.createElement("canvas");e.width=256,e.height=144;const n=e.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=ae.from(e);o.source.scaleMode="linear",eo.texture=o,eo.width=b.W,eo.height=b.H}function dg(){const t=window.MAP;for(const o of em()){const i=new Ct(o.tex);i.x=o.x,i.y=o.y,xe.groundCam.addChild(i)}const e=mg(),n=yn.ground.naturalWidth,r=yn.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=yn[o];if(!a||!a.naturalWidth)continue;const s=ae.from(a);s.source.scaleMode="linear";const l=new Ct(s);l.width=n,l.height=r;const u=new qd({texture:e,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,xe.groundCam.addChild(l,u),i==="flow"?$o=u:Ho=u}Es=(t.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),Us=(t.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Es)ks(o,!0);for(const o of Us)ks(o,!1)}function ks(t,e){const n=ke[t.sprite];if(!n||!la(t.sprite))return;const r=hr(t.sprite,null,0,0);if(!r)return;const o=new Ct(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=T(t.x,t.y);o.x=i,o.y=a,o.zIndex=(t.x+t.y)*100,xe.entities.addChild(o),ii.push({o:t,spr:o,tree:e&&t.tree,animated:!e&&(n.frames||1)>1})}function mg(){const t=document.createElement("canvas");t.width=192,t.height=96;const e=t.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;e.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])e.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&e.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=ae.from(t);return n.source.scaleMode="nearest",n}function pg(t){const e=ke[t.sprite];if(!e||!e.anims)return["idle",0];if(t.atkAnim>0&&e.anims.attack){const n=e.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-t.atkAnim/.45)*n))]}return t.moving&&e.anims.walk?["walk",Math.floor((t.animT||0)*1e3/e.anims.walk.ms*((t.speedNow?t.speedNow():3.4)/3.4))]:e.anims.idle?["idle",_f(t.sprite,"idle",t.animT||0)]:["walk",0]}const gg={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194};function yg(t){let e=Rr.get(t.id);if(!e){const n=()=>{const r=new Ct(ae.EMPTY);return xe.entities.addChild(r),r};e={spr:n(),glow:n(),shadow:new Ct(ae.EMPTY),gear:[],seen:0},e.glow.blendMode="add",e.shadow.tint=656916,e.shadow.alpha=.28,xe.shadows.addChild(e.shadow),Rr.set(t.id,e)}return e}function Po(t,e,n,r,o,i,a){if(!e){t.visible=!1;return}const s=ke[n];t.texture=e,t.visible=!0,t.anchor.set(s.ax/s.fw,s.ay/s.fh),t.scale.set(i),t.x=Math.round(r),t.y=Math.round(o),t.zIndex=a}function xg(){const t=b.game,e=t.player,n=b.T,r=++vg;for(const o of t.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=yg(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){Po(i.spr,hr("prop_boulder",null,0,0),"prop_boulder",...T(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const O of i.gear)O.visible=!1;continue}if(nt(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const O of i.gear)O.visible=!1;continue}const[s,l]=T(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const O=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(O*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),e&&o.team!==e.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),e&&o.team===e.team&&o._bush>=0&&(f*=.6);const[c,h]=pg(o),d=a||ke[o.sprite]&&ke[o.sprite].dirs===1?0:o.dir;let p=o.scale||1;o.monster==="serpent"&&(p=1.45);const g=o.status&&o.status.transform;if(g){o._tfT=(o._tfT||0)+1/60;const O=Math.min(1,o._tfT*4),k=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*O*k}else o._tfT=0;const y=o.status||{};let x=s;y.stun&&["quake","roar","dust","firedash"].includes(y.stun.fx)&&(x+=Math.round(Math.sin(n*60+o.id)*1.5));const M=(o.x+o.y)*100+1,v=hr(o.sprite,c,d,a?_f(o.sprite,"idle",n):h);Po(i.spr,v,o.sprite,x,u,p,M),i.spr.alpha=f;let _=0,S=0;if(o.hitFlash>.06?(_=16777215,S=.75):y.slow?(_=gg[y.slow.fx]||8050943,S=.35):y.root?(_=3836458,S=.3):y.stun&&y.stun.fx==="arcane"?(_=11563263,S=.35):y.burn?(_=16742954,S=.25+.15*Math.sin(n*14+o.id)):g&&(_=g.kind==="fire"?16747066:16765514,S=.25+.1*Math.sin(n*6)),S>0&&v?(Po(i.glow,v,o.sprite,x,u,p,M+.5),i.glow.tint=_,i.glow.alpha=S*f):i.glow.visible=!1,b.shadowsOn&&!a&&v&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(ke[o.sprite]&&ke[o.sprite].fly)){const O=ke[o.sprite];i.shadow.texture=v,i.shadow.visible=!0,i.shadow.anchor.set(O.ax/O.fw,O.ay/O.fh),i.shadow.setFromMatrix(new $e(p,0,-.8*p,-.38*p,Math.round(x),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const R=ke[o.sprite]&&ke[o.sprite].gear;let F=0;if(R&&o.kind==="hero"){const O=b.mode==="guest"?o.gear||0:t.gearCode(o),k={w:O&3,h:O>>2&3,a:O>>4&3,b:O>>6&3};for(const U of["a","b","h","w"]){const B=k[U];if((B>0||U==="w")&&R[U]&&R[U].includes(B)){const H=o.sprite+"__"+U+B;if(!i.gear[F]){const Y=new Ct(ae.EMPTY);xe.entities.addChild(Y),i.gear[F]=Y}Po(i.gear[F],hr(H,c,d,h),H,x,u,p,M+.2+F*.05),i.gear[F].alpha=f,F++}}}for(;F<i.gear.length;F++)i.gear[F].visible=!1}for(const[o,i]of Rr)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();Rr.delete(o)}}let vg=0;function bg(t){if(!t.sprite||!la(t.sprite))return;const e=hr(t.sprite,"idle",t.dir||0,0);if(!e)return;const n=new Ct(e),r=ke[t.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=T(t.x,t.y);n.x=o,n.y=i,n.scale.set(t.scale||1),n.tint=7829384,n.zIndex=(t.x+t.y)*100,xe.entities.addChild(n),Mn.push({spr:n,t:0,vy:20})}function Mg(t){const e=b.cam,n=b.T,r=(Math.random()-.5)*e.shake,o=(Math.random()-.5)*e.shake,i=Math.round(b.W/2-e.x*e.z+r),a=Math.round(b.H/2-e.y*e.z+o);for(const p of["groundCam","worldCam","lightsCam"])xe[p].scale.set(e.z),xe[p].position.set(i,a);const s=e.x-b.W/2/e.z-2,l=e.y-b.H/2/e.z-2,u=b.W/e.z+4,f=b.H/e.z+4;$o&&($o.tilePosition.set(-n*14,-n*3),$o.alpha=.45+.12*Math.sin(n*1.3)),Ho&&(Ho.tilePosition.set(Math.sin(n*.3)*6,0),Ho.alpha=.25+.15*Math.sin(n*.9));const c=b.game&&b.game.player,[h,d]=c?T(c.x,c.y):[0,0];for(const p of ii){const[g,y]=T(p.o.x,p.o.y),x=g>s-200&&g<s+u+200&&y>l-100&&y<l+f+400;if(p.spr.visible=x,!!x){if(p.animated){const M=hr(p.o.sprite,null,0,Math.floor(n*9+p.o.x));M&&(p.spr.texture=M)}if(p.tree){const M=ke[p.o.sprite];if(p.spr.alpha=c&&p.o.x+p.o.y>c.x+c.y&&M&&Math.abs(h-g)<M.fw*.42&&d<y&&d>y-M.ay?.42:1,p.o.sprite.startsWith("prop_")){const v=p.o,_=(v.x*12.9898+v.y*78.233)%6.28,S=.8+(v.x*7.1+v.y*3.3)%1*.7,R=(.02+(v.x*3.7+v.y*9.1)%1*.025)*(.6+b.wind);p.spr.skew.x=-(Math.sin(n*S*1.6+_)*R+Math.sin(n*S*3.1+_*2)*R*.3+b.wind*.02)}}}}b.game&&(Dc(t,s,l,u,f,Es),xg());for(const p of Mn)p.t+=t,p.spr.alpha=Math.max(0,1-p.t/.8),p.spr.y+=p.vy*t;for(let p=Mn.length-1;p>=0;p--)Mn[p].t>.8&&(Mn[p].spr.destroy(),Mn.splice(p,1));Sg(),Tg(),b.game&&b.game.player?Rg():Ds&&(Ds=!1,Ft.getContext("2d").clearRect(0,0,Ft.width,Ft.height))}let Ds=!1;const Ls=1;function cc(t){const e=t.look;if(typeof e!="string"&&typeof e!="number")return!1;const n=String(e),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&te[r+"_"+n.slice(-1)])}function Yi(t,e=1){const n=t.getContext("2d"),r=b.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,t.width,t.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*e,0,0,r.z*e,Math.round(b.W/2-r.x*r.z+o)*e,Math.round(b.H/2-r.y*r.z+0)*e),n.imageSmoothingEnabled=!1,n}const _g={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function Sg(){const t=b.game,e=b.T,n=Yi(pr,Ls);let r=Yi(dr,Ls);if(Ma(r,n),t&&t.player){const o=t.player,i=window.SIM.HEROES;Lc();for(const l of t.zones)if(!cc(l))if(l.once){const u=1-l.t/l.dur;ze(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),ze(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(ze(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&z({type:"puff",x:l.x+m(-1,1)*l.r*.8,y:l.y+m(-1,1)*l.r*.8,r:m(12,22),dur:m(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;z({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}Gc();for(const l of t.runes||[]){const u=window.SIM.RUNES[l.kind];ze(l.x,l.y,.45+Math.sin(e*4)*.05,u.col,null,2)}for(const l of t.heroes)l.dead||nt(l)||ze(l.x,l.y,.42,l===o?"#ffd24a":Ji[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=b.hoverUnit;a&&a!==o.target&&!a.dead&&ze(a.x,a.y,(a.r||.4)*(a.scale||1)+.22,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of t.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=T(l.x,l.y,1.3),[c,h]=T(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(e*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-e*40,r.beginPath(),r.moveTo(u,f),r.lineTo(c,h),r.stroke(),r.restore()}o.target&&!o.target.dead&&ze(o.target.x,o.target.y,(o.target.r||.4)+.2,"#ff4a4a",null,2,[4,3]);for(const l of t.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&ze(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(wg(o),b.hoverAbil){const l=i[o.heroKey].abil[b.hoverAbil];l.range&&ze(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe")&&ze(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=b.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,ze(s.x,s.y,.28*(1-l)+.06,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of t.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||nt(l))continue;l.status&&l.status.slow&&ze(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,_g[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u){const f=u.kind==="fire",c=.5+.5*Math.sin(e*6);ze(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&ze(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&I(l.x+m(-.6,.6),l.y+m(-.6,.6),m(.1,1.2),m(-.3,.3),m(-.3,.3),m(1,2.4),.6,f?Ot("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&ze(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&ze(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&I(l.x+m(-.3,.3),l.y+m(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(ze(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&I(l.x+m(-.4,.4),l.y+m(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0))}}if(r=Yi(mr),Ma(r,n),t){if(t.player){for(const i of t.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(e*3+i.id)*.08,[l,u]=T(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}Xc(),Nc(),Cg(r)}$c()}Hc(),t&&t.player&&Ag(r)}function wg(t){if(!b.aim)return;const e=window.SIM.HEROES[t.heroKey].abil[b.aim.k],n=b.mouse.wx,r=b.mouse.wy;let o=n-t.x,i=r-t.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(e.range&&ze(t.x,t.y,e.range,"#7fe0ff80",null,2,[6,6]),e.type==="proj"||e.type==="dash"){const u=e.range,f=(e.width||1)/2,c=-i*f,h=o*f;_a([[t.x+c,t.y+h],[t.x+o*u+c,t.y+i*u+h],[t.x+o*(u+f*1.5),t.y+i*(u+f*1.5)],[t.x+o*u-c,t.y+i*u-h],[t.x-c,t.y-h]],s,l)}else if(e.type==="cone"){const u=Math.atan2(i,o),f=[[t.x,t.y]];for(let c=0;c<=12;c++){const h=u-e.angle+2*e.angle*c/12;f.push([t.x+Math.cos(h)*e.range,t.y+Math.sin(h)*e.range])}_a(f,s,l)}else{const u=Math.min(a,e.range||0),f=t.x+o*u,c=t.y+i*u;ze(f,c,e.radius||.6,s,l,2)}}function Cg(t){const e=b.T;for(const n of b.game.units){if(n.dead||nt(n))continue;const r=n.status||{};if(!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;I(n.x+m(-.3,.3),n.y+m(-.3,.3),l<0?1.1:.2,m(-.2,.2),m(-.2,.2),l,.7,Ot(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&I(n.x+m(-.25,.25),n.y+m(-.25,.25),.3,0,0,1.4,.4,Ot("fire"),3,-1,!0);continue}const o=ke[n.sprite],i=n.scale||1,[a,s]=T(n.x,n.y);if(r.root){t.save(),t.lineWidth=3,t.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+e*.6,f=14*i;t.beginPath(),t.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),t.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(e*3+l)*2),t.stroke(),t.fillStyle="#6ac04a",t.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}t.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="arcane")for(let f=0;f<3;f++){const c=e*3+f*2.09;t.fillStyle=f%2?"#e0b8ff":"#9a50ff",t.fillRect(a+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),t.fillStyle="#ffffff",t.fillRect(a+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=e*5+f*2.09,h=a+Math.cos(c)*14,d=u+Math.sin(c)*4;t.fillStyle="#ffe070",t.fillRect(h-3,d-1,6,2),t.fillRect(h-1,d-3,2,6),t.fillStyle="#fff6c8",t.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-e*4+f*3.14,h=a+Math.cos(c)*20,d=u-6+Math.sin(c)*6;t.fillStyle="#ffffff",t.fillRect(h-3,d,3,2),t.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&I(n.x+m(-.3,.3),n.y+m(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}function Ag(t){const e=b.game,n=e.player,r=b.cam,o=window.SIM.HEROES,i=r.x-b.W/2/r.z,a=r.y-b.H/2/r.z,s=b.W/r.z,l=b.H/r.z,u=(c,h,d,p,g,y,x)=>{t.fillStyle="#000000c0",t.fillRect(c-1,h-1,d+2,p+2),t.fillStyle=x,t.fillRect(c,h,d,p),t.fillStyle=y,t.fillRect(c,h,Math.max(0,Math.min(1,g))*d,p),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(c,h,Math.max(0,Math.min(1,g))*d,Math.max(1,p/3))},f=(c,h,d,p,g)=>{t.font=`600 ${g}px "Pixelify Sans", "Nunito", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.lineWidth=Math.max(2,g/4),t.strokeStyle="#000000d0",t.strokeText(c,h,d),t.fillStyle=p,t.fillText(c,h,d)};for(const c of e.units){if(c.dead||nt(c))continue;const[h,d]=T(c.x,c.y);if(h<i-60||h>i+s+60||d<a-60||d>a+l+160||c.kind==="monster"&&c.hp>=c.maxHp-1&&!c.boss)continue;const p=ke[c.sprite],y=d-(c.leaping?40:0)-(p?p.ay*(c.scale||1)*(c.monster==="serpent"?1.4:.92):50)-6,x=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,M=x?66:34,v=x?7:4,_=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":Ji[c.team];if(t.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-M/2,y,M,v,c.hp/c.maxHp,_,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(t.strokeStyle="#ffffff",t.lineWidth=1.5,t.strokeRect(h-M/2-1.5,y-1.5,M+3,v+3)),c.kind==="hero")for(let S=1;S<6;S++)t.fillStyle="#00000080",t.fillRect(h-M/2+M*S/6,y,1,v);c.shield>0&&b.mode!=="guest"&&(t.fillStyle="#e8f4ff",t.fillRect(h-M/2+c.hp/c.maxHp*M,y,Math.min(M*(1-c.hp/c.maxHp),c.shield/c.maxHp*M),v)),c.kind==="hero"&&(t.fillStyle="#120c1a",t.fillRect(h-M/2-16,y-2,14,v+4),t.strokeStyle="#d0a050",t.lineWidth=1,t.strokeRect(h-M/2-16,y-2,14,v+4),f(String(c.level),h-M/2-9,y+v/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,y-9,Ji[c.team],11)),t.globalAlpha=1}for(const c of e.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=T(c.x,c.y,1.1+c.t*.9);t.globalAlpha=Math.max(0,1-c.t/1.1);const p=c.t<.12?1.4-c.t*3:1;f(Me.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*p)}t.globalAlpha=1}function Tg(){let t=0;const e=b.T,n=(r,o,i,a,s,l)=>{let u=To[t];u||(u=new Ct(fc),u.anchor.set(.5),u.blendMode="add",xe.lightsCam.addChild(u),To[t]=u),t++;const[f,c]=T(r,o,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=a*2,u.tint=s,u.alpha=l};for(const r of Us)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(e*9+r.x*3)*Math.sin(e*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&I(r.x+m(-.1,.1),r.y+m(-.1,.1),.9,m(-.2,.2),m(-.2,.2),m(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(b.game){for(const r of b.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(e*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(e*1.5)),nt(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45)}for(const r of b.game.zones)r.once&&!cc(r)&&n(r.x,r.y,0,r.r*ee.HW*1.4,13143295,.35);for(const r of b.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;t<To.length;t++)To[t].visible=!1}let zn=null;function Pg(){if(zn)return zn;zn=document.createElement("canvas"),zn.width=zn.height=128;const t=zn.getContext("2d"),e=t.createRadialGradient(64,64,64*.45,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),zn}function Rg(){const e=Math.ceil(b.W/4),n=Math.ceil(b.H/4),r=b.cam;(Ft.width!==e||Ft.height!==n)&&(Ft.width=e,Ft.height=n),Ds=!0;const o=Ft.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,e,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,e,n),o.globalCompositeOperation="destination-out";for(const i of b.visionSrc){const[a,s]=T(i.x,i.y),l=((a-r.x)*r.z+b.W/2)/4,u=((s-r.y)*r.z+b.H/2)/4,f=Yo[i.kind]*ee.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>e+f||u>n+f/2||o.drawImage(Pg(),l-f,u-f/2,f*2,f)}}function zg(t){if(!la("prop_bush"))return;let e=3;const n=()=>(e=e*16807%2147483647)/2147483647;for(const r of t)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;ks({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=ii[ii.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function hc(){for(const[,t]of Rr){t.spr.destroy(),t.glow.destroy(),t.shadow.destroy();for(const e of t.gear)e.destroy()}Rr.clear();for(const t of Mn)t.spr.destroy();Mn.length=0}let bt,ht,wt,$,J,Mt="dragon",dn="blue",L=null,xl=0,gr=0,qi=0,Ki=!1,lr=!1,Gs=!1,Kt={},jt=null,Wo=!1,vl=0,bl=0,Og=0,Ml=performance.now(),_l=-9,Ns=!1;const Fg=["buff","aoe_self","heal_aoe","execute"],Ig=["facil","normal","dificil"],qr=new Map;let Bs=!1;function de(t){if(t==null)return"";if(t=String(t),Bs||Vs.value==="es"||!window.I18N)return t;const e=qr.get(t);if(e!==void 0)return e;const n=window.I18N.en;let r=n.exact[t];if(r===void 0){r=t;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return qr.size>5e3&&qr.clear(),qr.set(t,r),r}function Eg(){const t=window.I18N&&window.I18N.en;if(t){t.exact=t.exact||{},t.frag=t.frag||[];for(const e in t.heroes||{}){const n=ht[e],r=t.heroes[e];if(n){r.title&&(t.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(t.exact[n.abil[o].name]=r.abil[o][0],t.exact[n.abil[o].desc]=r.abil[o][1])}}for(const e in t.items||{}){const n=bt.ITEMS.find(r=>r.id===e);n&&(t.exact[n.name]=t.items[e][0],t.exact[n.desc]=t.items[e][1])}for(const e in t.roles||{})t.exact[e]=t.roles[e],t.exact[e.toUpperCase()]=t.roles[e].toUpperCase();for(const e in t.runes||{}){const n=bt.RUNES[e];n&&(t.exact[n.name]=t.runes[e][0],t.exact[n.desc]=t.runes[e][1])}for(const e in t.bot||{})t.exact[e]=t.bot[e]}}function dc(t,e,n,r=1,o=1){if(e===void 0||n===void 0){$.play(t,r,0,.03,o);return}const[i,a]=T(e,n),s=b.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/b.W,u/b.H);const c=b.game&&b.game.player;if(c&&!c.dead){const[h,d]=T(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/b.W,(a-d)*s.z/b.H))}$.play(t,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(b.W*.6))),.03,o)}function ca(t,e,n,r){if(!$.babble)return;const o=Math.max(0,wt.indexOf(t))*7+3;if(n===void 0||r===void 0){$.babble(o,e,.5,0);return}const[i,a]=T(n,r),s=b.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/b.W,u/b.H),c=.5*Math.max(0,1-f*1.1);c>.05&&$.babble(o,e,c,Math.max(-1,Math.min(1,l/(b.W*.6))))}let Sl=0;function Hn(t){try{window.VOICE&&window.VOICE.play(t)}catch{}}function wn(t,e="#ffe7b0",n=1.5){b.game&&b.game.msg(t,e,n)}async function Ug(t){bt=window.SIM,ht=bt.HEROES,wt=bt.HERO_KEYS,$=window.AUDIO,J=new window.Net,Ic();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(Vs.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");Ig.includes(r)&&(gt.value={...gt.value,difficulty:r})}catch{}try{b.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}Eg(),Me.babble=ca,Me.sfx=dc,Me.say=Hn,Me.play=(r,o)=>$.play(r,o??1),Me.t=de,Me.banner=(r,o,i,a,s)=>{const l=vr.value.slice(-3);vr.value=[...l,{id:++Og,title:de(r),color:o,killerKey:i,victimKey:a,big:s}]},Tc(fn),pc(),gt.value={...gt.value,volMaster:$.volume?$.volume("m"):1,volMusic:$.volume?$.volume("mu"):1,volSfx:$.volume?$.volume("s"):1,soundStyle:$.style?$.style():"epic",shadows:b.shadowsOn},await Qd(r=>Fc.value=r),await cg(t),dg();try{const r=new bt.Game(window.MAP,{humans:[]});zg(r._makeBushes())}catch(r){console.warn(r)}Xg(),Vg();const[e,n]=T(ee.N/2,ee.N/2);b.cam.x=e,b.cam.y=n,xt.value="menu",J.init().then(r=>{Il.value=!!r}).catch(()=>{}),J.onChange=()=>to(),o1(),requestAnimationFrame(yc)}function mc(t){const e=bt.PASSIVES&&bt.PASSIVES[t];return e?{name:de(e[0]),desc:de(e[1])}:{name:"",desc:""}}function pc(){Pc.value=wt.map(t=>{const e=ht[t];return{key:t,name:e.name,title:de(e.title),role:de(e.role),ranged:!!e.ranged,hp:e.hp,ad:e.ad,speed:e.speed,range:e.range,as:e.as,abil:["Q","W","E","R"].map(n=>({key:n,name:de(e.abil[n].name),desc:de(e.abil[n].desc),cd:e.abil[n].cd,type:e.abil[n].type,fx:e.abil[n].fx})),passive:mc(t)}}),Rc.value=bt.ITEMS.map(t=>({id:t.id,name:de(t.name),desc:de(t.desc),cost:t.cost,line:t.line||null,tier:t.tier||0,stack:t.stack||0}))}let wl="";function ha(t){const e=String(t&&(t.stack||t.message)||t).split(`
`).slice(0,3).join(" | ");if(e===wl)return;wl=e;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+e}const gc="v8.2";{const t=document.createElement("div");t.id="build-tag",t.textContent=gc,t.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(t)}window.addEventListener("error",t=>ha(t.error||t.message));window.addEventListener("unhandledrejection",t=>ha(t.reason));function yc(t){const e=Math.min(.05,(t-Ml)/1e3);Ml=t,b.T=t/1e3;try{const n=xt.value;n==="pick"&&L&&(qg(e),yr()),n==="lobby"&&jg(e),n==="play"&&b.game?Lg(e):Dg(e),b.marker&&(b.marker.t+=e,b.marker.t>.3&&(b.marker=null)),kc(e),Mg(e),(bl-=e)<=0&&b.game&&(bl=.1,r1()),(Al-=e)<=0&&(Al=.5,kg()),n!=="play"&&(Cl-=e)<=0&&(Cl=1,J.available&&(Oc.value=J.openGames()))}catch(n){console.error(n),ha(n)}requestAnimationFrame(yc)}let Cl=0,Al=0;function kg(){if(!$.setAmbient)return;const t=nn(b.W/2,b.H/2),e=ee.N,n=window.MAP,r=Math.abs(t.x+t.y-e)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(t.x-l,t.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(t.x-n.bases.red[0],t.y-n.bases.red[1]),Math.hypot(t.x-n.bases.blue[0],t.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;$.setAmbient(o,s,a)}function Dg(t){const e=b.T*.05,n=ee.N/2+Math.cos(e)*12,r=ee.N/2+Math.sin(e*1.3)*12,[o,i]=T(n,r);b.cam.x+=(o-b.cam.x)*Math.min(1,t*.5),b.cam.y+=(i-b.cam.y)*Math.min(1,t*.5),b.cam.z=b.cam.tz=1.25}function Lg(t){const e=b.game;if(Jg(t),b.mode==="guest")e.guestTick(t),J.hostState&&J.hostState.st==="end"&&!e.winner&&(e.winner="blue");else{if(b.mode==="host")for(const[o,i]of J.pullCommands())e.input(o,i);if(!(jr.value&&b.mode==="solo")&&!Sc()&&e.update(t),b.mode==="host"&&(gr-=t,gr<=0)){gr=1/12;const o=e.heroes.filter(i=>i.human);J.publish(e.winner?"end":"play",e.snapshot(3300,o),o.map(i=>[i.human,i.team,i.heroKey]))}}const n=e.player;if(!n)return;for(const o of e.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&bg(o);Gg(t),b.mouse.wx=nn().x,b.mouse.wy=nn().y,b.mouse.rd&&!e.winner&&!b.aim&&b.mouse.inWorld&&(qi-=t,qi<=0&&(qi=.12,vc(!1))),Uc(),Hg(t),!Gs&&e.t>7.5&&(Gs=!0,Hn("minions"));const r=e.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;$.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),Ng(t),b.hoverUnit=!b.mouse.md&&!b.aim&&b.mouse.inWorld?xc():null,Yg(),Ns=!n.dead&&e.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Ns&&b.T-_l>3&&(_l=b.T,$.play("deny",.5)),(vl-=t)<=0&&(vl=1/15,Ac())}function Gg(t){const e=b.game.player,n=b.cam,r=b.mouse;if(e&&!e.dead&&!r.md&&!r.mmDrag&&(b.camFollow||Kt[" "])){const[o,i]=T(e.x,e.y);n.x+=(o-n.x)*Math.min(1,t*8),n.y+=(i-30-n.y)*Math.min(1,t*8)}else if(!r.md&&!r.mmDrag){const i=900*t/n.z;Kt.ArrowLeft&&(n.x-=i),Kt.ArrowRight&&(n.x+=i),Kt.ArrowUp&&(n.y-=i),Kt.ArrowDown&&(n.y+=i),r.inWorld&&(r.x<18&&(n.x-=i),r.x>b.W-18&&(n.x+=i),r.y<18&&(n.y-=i),r.y>b.H-18&&(n.y+=i))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-b.W/2)/n.z+n.x,i=(r.y-b.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,t*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),e&&!e.dead&&(b.camFollow||Kt[" "])||(n.x=o-(r.x-b.W/2)/n.z,n.y=i-(r.y-b.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-t),n.x=Math.max(0,Math.min(2*ee.N*ee.HW,n.x)),n.y=Math.max(0,Math.min(2*ee.N*ee.HH,n.y))}function Tl(t,e){const n=window.MAP.hg;return!!(n&&n[Math.floor(e)]&&n[Math.floor(e)][Math.floor(t)])}function Ng(t){const e=b.game,n=e.player;b.visionSrc=e.units.filter(o=>!o.dead&&o.team===n.team&&Yo[o.kind]),e.bushes||(e.bushes=e._makeBushes());for(const o of e.units)o._bush=o.dead?-1:e.bushOf(o);const r=new Set;for(const o of e.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=Tl(o.x,o.y);let a=0;for(const s of b.visionSrc){const l=Yo[s.kind];if(Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||Tl(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&e.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,t*5),o._va>.04&&r.add(o.id)}b.visible=r}let ji=null;function Bg(t){try{const e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const n=e.getContext("2d");return n.drawImage(t,0,0),{w:e.width,h:e.height,d:n.getImageData(0,0,e.width,e.height).data}}catch{return null}}function $g(t,e){ji===null&&(ji=[yn.water_mask,yn.water_calm].filter(i=>i&&i.naturalWidth).map(Bg).filter(Boolean));const[n,r]=T(t,e);for(const i of ji){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(e)]&&window.MAP.grid[Math.floor(e)][Math.floor(t)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function Hg(t){const e=b.game,n=e.player,r=b.cam;for(const o of e.units){if(o.dead||!o.moving||o.speed===0||nt(o)||o.dash)continue;const[i,a]=T(o.x,o.y);if(Math.abs(i-r.x)>b.W/r.z||Math.abs(a-r.y)>b.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-t*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=$g(o.x,o.y);if(s==="water"){z({type:"ring",x:o.x+m(-.1,.1),y:o.y+m(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)I(o.x,o.y,.1,m(-.8,.8),m(-.8,.8),m(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&I(o.x,o.y,.05,m(-.3,.3),m(-.3,.3),m(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?$.play("step_"+s,.32,0,80):Math.random()<.5&&dc("step_"+s,o.x,o.y,.12))}}function ut(t){b.mode==="guest"?J.send(t):b.game.input(b.localId,t)}function xc(){const t=b.game,e=t.player,n=b.cam,r=window.META;let o=null,i=1e9;const a=nn();for(const s of t.units){if(s.dead||nt(s)||s.team!==e.team&&s._va!==void 0&&s._va<.4||s.team===e.team&&!(s.kind==="minion"&&t.deniable(s,e))||b.mode!=="guest"&&s.team!==e.team&&!t.targetable(s,e))continue;const l=r[s.sprite],[u,f]=T(s.x,s.y),c=(u-n.x)*n.z+b.W/2,h=(f-n.y)*n.z+b.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),p=s.kind==="tower"||s.kind==="nexus"||s.boss,g=(l?l.ay*.9:50)*d,y=(p?40:s.kind==="minion"?20:26)*d;let x=1e9;if(Math.abs(b.mouse.x-c)<y&&b.mouse.y<h+12*d&&b.mouse.y>h-g)x=Math.abs(b.mouse.x-c)/y+Math.abs(b.mouse.y-(h-g/2))/g;else{const M=Math.hypot(a.x-s.x,a.y-s.y);M<s.r*(s.scale||1)+.6&&(x=1.5+M)}x>1e8||(s.kind==="hero"&&(x-=.4),x<i&&(i=x,o=s))}return o}function Wg(){const t=b.cam,e=window.META;let n=null,r=1e9;for(const o of b.game.heroes){if(o.dead||nt(o))continue;const[i,a]=T(o.x,o.y),s=(i-t.x)*t.z+b.W/2,l=(a-t.y)*t.z+b.H/2,u=(e[o.sprite]?e[o.sprite].ay*.9:50)*t.z,f=26*t.z;if(Math.abs(b.mouse.x-s)<f&&b.mouse.y<l+10*t.z&&b.mouse.y>l-u){const c=Math.abs(b.mouse.x-s)+Math.abs(b.mouse.y-(l-u/2));c<r&&(r=c,n=o)}}return n}function vc(t){const e=nn();if(!t&&Ki)return;const n=t?xc():null;if(t&&(jt=n&&n.kind==="hero"&&n!==b.game.player&&n.team===b.game.player.team?n.id:null),n){Ki=!0,ut(["a",n.id]),$.play("click",.3),b.marker={x:n.x,y:n.y,t:0,atk:!0};return}Ki=!1,ut(["m",e.x,e.y]),t&&(b.marker={x:e.x,y:e.y,t:0},$.play("move",.25),b.T-Sl>7&&Math.random()<.5&&(Sl=b.T,ca(b.game.player.heroKey,"ok")))}function bc(t){const e=b.game.player;if(e.ranks&&!e.ranks[t]){wn(e.points>0&&b.game.canRankUp(e,t)?"Primero aprendela: clic en el + (o Shift + "+t+")":t==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),$.play("deny",.6);return}if((e.cds[t]||0)>.05){wn("En enfriamiento","#bbbbbb",.8),$.play("deny",.5);return}const n=ht[e.heroKey].abil[t],r=nn();if(jt=null,Fg.includes(n.type)){ut(["c",t,r.x,r.y]),b.aim=null;return}if(b.aim&&b.aim.k===t){Mc();return}b.aim={k:t},$.play("aim",.3)}function Mc(){if(!b.aim)return;const t=nn();ut(["c",b.aim.k,t.x,t.y]),b.aim=null}function $s(t){const e=b.game&&b.game.player;e&&(b.game.canRankUp(e,t)?(ut(["l",t]),$.play("levelup",.5)):(wn(t==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),$.play("deny",.4)))}function Pl(){const t=b.game&&b.game.player;if(!t)return;const[e,n]=T(t.x,t.y);b.cam.x=e,b.cam.y=n-30}function Hs(){b.cam.tz=no,b.cam.zoomMsgT=1.2}function Xg(){const t=fa();window.addEventListener("contextmenu",e=>{const n=e.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||e.preventDefault()}),window.addEventListener("mousemove",e=>{b.mouse.md&&(b.cam.x-=(e.clientX-b.mouse.x)/b.cam.z,b.cam.y-=(e.clientY-b.mouse.y)/b.cam.z),b.mouse.x=e.clientX,b.mouse.y=e.clientY,b.mouse.inWorld=e.target===t}),t.addEventListener("wheel",e=>{xt.value==="play"&&(b.cam.tz=Math.max(.75,Math.min(3,b.cam.tz*(e.deltaY>0?.9:1.1))),b.cam.zoomMsgT=1.2),e.preventDefault()},{passive:!1}),t.addEventListener("auxclick",e=>{e.preventDefault(),e.button===1&&e.detail===2&&Hs()}),t.addEventListener("mousedown",e=>{$.init(),$.startMusic(),window.VOICE&&window.VOICE.init(),b.mouse.x=e.clientX,b.mouse.y=e.clientY;const n=b.game;if(!(xt.value!=="play"||!n||!n.player||n.winner)){if(e.button===1){b.mouse.md=!0,e.preventDefault();return}if(!jr.value){if(e.button===0&&e.altKey){fn.ping(e.ctrlKey?"missing":"danger");return}if(e.button===0){if(b.aim){Mc();return}if(b.amove){b.amove=!1;const o=nn();ut(["am",o.x,o.y]),b.marker={x:o.x,y:o.y,t:0,atk:!0},$.play("click",.3);return}const r=Wg();(!r||r.team===n.player.team)&&(jt=r&&r!==n.player?r.id:null)}e.button===2&&(b.aim&&(b.aim=null),b.amove=!1,b.mouse.rd=!0,vc(!0))}}}),window.addEventListener("mouseup",e=>{e.button===2&&(b.mouse.rd=!1),e.button===1&&(b.mouse.md=!1),e.button===0&&(b.mouse.mmDrag=!1)}),window.addEventListener("keydown",e=>{const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;$.init();const r=b.game,o=e.key.toUpperCase();if(xt.value==="play"&&r&&r.player&&e.key==="Enter"){El.value=e.shiftKey?"all":"team",e.preventDefault();return}if(o==="M"){$.toggleMute();return}if(o==="N"){$.toggleMusic();return}if(xt.value!=="play"||!r||!r.player)return;if(Sc()){(e.key===" "||e.key==="Escape"||e.key==="Enter")&&(Cc(),e.preventDefault());return}const i=r.player;if(e.key==="Escape"){b.aim||sr.value?(b.aim=null,sr.value=!1):jr.value=!jr.value;return}if(e.key==="Tab"){Kr.value=!0,e.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(e.shiftKey||e.ctrlKey)){$s(o),e.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(lr=!lr,$.play("aim",.4)):(wn("No tenés puntos de habilidad","#bbbbbb",1),$.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&lr){lr=!1,$s(o);return}if("QWER".includes(o)&&o.length===1){bc(o);return}if(e.key==="F1"||e.key==="1"){Pl(),e.preventDefault();return}if(e.key.startsWith("Arrow")){Kt[e.key]=!0,e.preventDefault();return}if(o==="P"){sr.value=!sr.value,$.play("click",.4);return}if(o==="H"){fn.useItem((i.items||[]).indexOf("pocion"));return}if(o==="K"){$.setStyle&&(fn.setSoundStyle($.style()==="epic"?"pixel":"epic"),wn("Sonido: "+($.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){b.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){fn.spell(o);return}if(o==="G"&&o.length===1){fn.ping(e.shiftKey?"omw":"danger");return}if(o==="S"&&ut(["s"]),o==="B"){fn.recall();return}o==="Y"&&(b.camFollow=!b.camFollow),o==="Z"&&Hs(),e.key===" "&&(Kt[" "]=!0,Pl(),e.preventDefault())}),window.addEventListener("keyup",e=>{e.key==="Tab"&&(Kr.value=!1,e.preventDefault()),delete Kt[e.key]}),window.addEventListener("blur",()=>{Kr.value=!1,Kt={},b.mouse.md=!1,b.mouse.rd=!1})}const _n={};function Vg(){const t=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,l.fillRect(d*2,c*2,2,2))})),a){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};_n.normal=t("#ffd24a","#fff2b0","#8a5a10",!1),_n.enemy=t("#ff4a3a","#ffb0a0","#7a1010",!0),_n.ally=t("#ffffff","#ffffff","#8a8a9a",!1);const e=document.createElement("canvas");e.width=32,e.height=32;const n=e.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);_n.aim=`url(${e.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=_n.normal}let Rl="";function Yg(){const t=b.game&&b.game.player,e=b.hoverUnit,n=b.aim||b.amove?"aim":e&&t?e.team!==t.team?"enemy":"ally":"normal";n!==Rl&&(Rl=n,fa().style.cursor=_n[n],document.documentElement.style.cursor=_n.normal)}function da(){const t=b.mode==="solo"?"local":J.myPeer||"host";return L&&L.h&&L.h[t]}function Ws(t){const e=t?[{id:J.myPeer||"host",team:dn},...J.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of e)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),L={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Mt||wt[0],locked:!1,prep:-1,online:!!t},t&&(b.mode="host"),xt.value="pick",$.setMode("menu"),$.play("announce",.6),yr()}function si(t,e){if(!L||!t)return;const n=e===void 0;if(n&&b.mode==="guest"){L.locked||(J.send(["lock",t]),Mt=t,L.pending=t,$.play("levelup",.7));return}const r=n?b.mode==="solo"?"local":J.myPeer||"host":e,o=L.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>L.blue.includes(l)||L.red.includes(l);if(s(t))if(n){$.play("deny",.6);return}else{const l=wt.filter(u=>!s(u));t=l[Math.random()*l.length|0]}L[i][a]=t,o[2]=1,n&&(L.locked=!0,Mt=t,L.view=t,$.play("levelup",.7),ca(t,"select"))}function Zi(t){const e=L[t],n=[...L.blue,...L.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!e.some(s=>s&&ht[s].role===a));let o=wt.filter(a=>!n.includes(a));const i=o.filter(a=>r.includes(ht[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||wt[Math.random()*wt.length|0]}function qg(t){if(b.mode==="guest")return Kg();if(L.online){for(const[r,o]of J.pullCommands())o[0]==="lock"&&si(o[1],r);(xl-=t)<=0&&(xl=.25,J.publishDraft({t:Math.round(L.t*10)/10,p:Math.round(L.prep*10)/10,b:L.blue,r:L.red,h:L.h}))}if(L.prep>=0){L.prep-=t,L.prep<=0&&(L.online?Zg():ma());return}if(!L.online){if(L.locked){L.bt=(L.bt||0)+t;for(const r of L.order)!r.done&&L.bt>=.3+r.q*.28&&(r.done=!0,L[r.team][r.slot]=Zi(r.team),$.play("click",.35))}L.locked&&L.order.every(r=>r.done)&&(L.prep=3,$.play("announce",.7));return}L.t-=t;const e=30-L.t;for(const r of L.order)!r.done&&e>=r.at&&(r.done=!0,L[r.team][r.slot]=Zi(r.team),$.play("click",.35));if(L.t<=0){for(const r in L.h)if(!L.h[r][2]){const o=L.h[r][0],i=wt.filter(a=>!L.blue.includes(a)&&!L.red.includes(a));si(i[Math.random()*i.length|0],r),L.h[r]===da()&&(L.locked=!0,Mt=L[o][L.h[r][1]])}}if(Object.values(L.h).every(r=>r[2])&&L.order.every(r=>r.done))L.prep=5,$.play("announce",.7);else if(L.t<=0)for(const r of L.order)r.done||(r.done=!0,L[r.team][r.slot]=Zi(r.team))}function Kg(){const t=J.hostState;if(t&&t.st==="play"&&t.S){L=null,qn.value=null,_c();return}const e=t&&t.D;if(!e)return;const n=L.blue.join()+L.red.join();L.t=e.t,L.prep=e.p,L.blue=e.b,L.red=e.r,L.h=e.h,n!==L.blue.join()+L.red.join()&&$.play("click",.35);const r=da();r&&r[2]?(L.locked=!0,Mt=L[r[0]][r[1]],L.view=Mt||L.view):L.pending&&performance.now()-(L.sentAt||0)>1e3&&(L.sentAt=performance.now(),J.send(["lock",L.pending]))}function yr(){if(!L){qn.value=null;return}const t=da(),e=b.mode==="solo"?"local":J.myPeer||"host";qn.value={online:!!L.online,t:L.t,prep:L.prep,blue:[...L.blue],red:[...L.red],mySlot:t?[t[0],t[1]]:null,humans:Object.entries(L.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===e})),locked:!!L.locked,pending:L.pending||null,view:L.view}}function jg(t){J.role==="guest"&&J.hostState&&J.hostState.st==="pick"&&J.hostState.D&&(b.mode="guest",b.localId=J.myPeer,L={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Mt||wt[0],locked:!1,prep:-1,online:!0},xt.value="pick",$.play("announce",.6)),J.role==="guest"&&J.hostState&&J.hostState.st==="play"&&J.hostState.S&&_c(),J.role==="host"&&(gr-=t,gr<=0&&(gr=1.5,J.setChoice(Mt,dn))),(zl-=t)<=0&&(zl=.3,to())}let zl=0;function to(){const t=[];if(J.role==="host"){t.push({name:de("Vos (anfitrión)"),team:dn,me:!0});for(const e of J.guests())t.push({name:de("Invitado"),team:e.team,me:!1})}else J.role==="guest"&&(t.push({name:de("Vos"),team:dn,me:!0}),J.hostState&&t.push({name:de("Anfitrión"),team:J.hostState.team,me:!1}));pt.value={...pt.value,role:J.role,code:J.code,myTeam:dn,players:t,hostFound:!!J.hostState}}function ma(){b.mode="solo",b.localId="local";const t=L?{blue:L.blue.slice(1).filter(Boolean),red:L.red.filter(Boolean)}:null;b.game=new bt.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Mt}],localId:"local",picks:t,difficulty:gt.value.difficulty,aram:Wo}),Wo&&(Wo=!1,b.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),L=null,qn.value=null,ga(),b.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function Zg(){b.mode="host",b.localId=J.myPeer||"host";const t=[],e={blue:[],red:[]};if(L){for(const n in L.h){const[r,o]=L.h[n];t.push({id:n,team:r,hero:L[r][o]||wt[0]})}for(const n of["blue","red"])L[n].forEach((r,o)=>{r&&!Object.values(L.h).some(i=>i[0]===n&&i[1]===o)&&e[n].push(r)})}L=null,qn.value=null,b.game=new bt.Game(window.MAP,{humans:t,localId:b.localId,picks:e,difficulty:gt.value.difficulty}),J.lastSeq={};for(const n of J.guests())J.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;J.onGuests=(n,r)=>{for(const o of r.left||[]){const i=b.game&&b.game.slots[o.peer];i&&!i.bot&&(i.bot=!0,b.game.msg("Un jugador salió: lo reemplaza un bot","#ffb070"))}},ga(),b.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function _c(){b.mode="guest",b.localId=J.myPeer,b.game=new bt.Game(window.MAP,{humans:[],localId:b.localId}),b.game.units=[],b.game.heroes=[],b.game.player=null,J.onSnapshot=t=>{b.game&&b.mode==="guest"&&b.game.applySnapshot(t,b.localId)},J.hostState&&J.hostState.S&&b.game.applySnapshot(J.hostState.S,b.localId),ga()}const ln={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let Xo=0,$t=-1,xr=[],Qg=0,co=!1;function Sc(){return $t>=0}function wc(){const t=b.game,e=t.player;Jd(t.heroes.map(a=>a.sprite||a.heroKey));const n=a=>{const s=ht[a.heroKey]||{};return{key:a.heroKey,name:s.name||a.heroKey,title:s.title||"",role:s.role||"",me:a===e,human:!!a.human}},r=a=>t.heroes.filter(s=>s.team===a).sort((s,l)=>(l===e?1:0)-(s===e?1:0)||(l.human?1:0)-(s.human?1:0)).map(n),o=r("blue"),i=r("red");if(!e||o.length+i.length<2){co=!0;return}co=!1,Ys.value={blue:o,red:i,myTeam:e?e.team:"blue",id:++Qg},$t=0,Xo=0,xr=[[.15,()=>Hn("blue_team")],...o.map((a,s)=>[ln.blue+s*ln.step+.05,()=>$.play("reveal",.8)]),[ln.red-.35,()=>Hn("red_team")],...i.map((a,s)=>[ln.red+s*ln.step+.05,()=>$.play("reveal",.8)]),[ln.vs-.02,()=>{$.play("vsslam",1),Hn("versus")}],[ln.go,()=>{$.play("warhorn",.9),Hn("battle"),$.setMode("battle")}]],$.setMode("menu")}function Jg(t){if(co&&b.game&&wc(),$t<0)return;const e=performance.now()/1e3,n=Xo?e-Xo:0;for(Xo=e,$t+=n>2?.05:n||t;xr.length&&xr[0][0]<=$t;)xr.shift()[1]();$t>=ln.end&&pa()}function pa(){co=!1,!($t<0)&&($t=-1,xr=[],Ys.value=null,$.setMode("battle"))}function Cc(){$t<0||($t<ln.go&&($.play("warhorn",.7),Hn("battle")),pa())}function ga(){if(Ll(),hc(),xt.value="play",vr.value=[],$.setMode("battle"),Gs=!1,wc(),jt=null,b.aim=null,b.amove=!1,lr=!1,b.cam.z=b.cam.tz=no,b.game.player){const[t,e]=T(b.game.player.x,b.game.player.y);b.cam.x=t,b.cam.y=e-30}}async function Ol(){$t=-1,xr=[],co=!1,Ys.value=null,jr.value=!1,sr.value=!1,Kr.value=!1,b.aim=null,L=null,qn.value=null,b.mode!=="solo"&&await J.leave(),b.game=null,b.mode="solo",hc(),Ll(),kl.value=null,Ul.value=null,vr.value=[],xt.value="menu",$.setMode("menu"),fa().style.cursor=_n.normal}function e1(t){const e=ht[t.heroKey],n=(t.items||[]).map(o=>bt.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:de("Ataque"),value:String(Math.round(e.ad*(1+.07*(t.level-1))+r("ad")))},{label:de("Vel. de ataque"),value:(e.as*(1+.02*(t.level-1)+r("asp"))).toFixed(2)},{label:de("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:de("Reducción de daño"),value:Math.round(Math.min(.6,(e.armor||0)+r("armor"))*100)+"%"},{label:de("Velocidad"),value:(e.speed+r("ms")).toFixed(2)},{label:de("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:de("Alcance"),value:String(e.range)}]}function Qi(t){const e=b.game,n=ht[t.heroKey],r=e.player,o=t===r,i=[];for(const l of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])t.status&&t.status[l]&&i.push(l);t.aegis&&(b.mode==="guest"||t.aegis>e.t)&&i.push("aegis"),t.shield>0&&i.push("shield");const a=(t.items||[]).map((l,u)=>{const f=bt.ITEM[l];return{id:l,slot:u,name:de(f.name),desc:de(f.desc),tier:f.tier||0,line:f.line||null,count:f.stack?t.pots||0:1}}),s=o||t.team===r.team||b.mode!=="guest";return{id:t.id,heroKey:t.heroKey,name:n.name,title:de(n.title),role:de(n.role),team:t.team,level:t.level,hp:Math.max(0,t.hp),maxHp:t.maxHp,shield:t.shield||0,mana:Math.max(0,t.mana||0),maxMana:t.maxMana||0,passive:mc(t.heroKey),xpFrac:b.mode==="guest"?t.xpFrac||0:t.level>=12?1:t.xp/e.xpNeed(t.level),gold:t.gold!==void 0&&s?Math.floor(t.gold):null,kills:t.kills,deaths:t.deaths,assists:t.assists,cs:t.cs,points:t.points||0,dead:!!t.dead,respawn:Math.ceil(t.respawn||0),recall:t.recall?t.recall.t:null,abil:["Q","W","E","R"].map(l=>{const u=n.abil[l],f=t.ranks?t.ranks[l]:1;return{key:l,name:de(u.name),desc:de(u.desc),cd:t.cds&&t.cds[l]||0,cdMax:u.cd,rank:f,cost:e.manaCost?e.manaCost(t,l):0,canRankUp:o&&!!(t.ranks&&e.canRankUp(t,l)),dmg:u.dmg?Math.round(u.dmg*e.abilMul(t,l)):null,type:u.type,fx:u.fx}}),items:a,spells:[{key:"D",name:de("Destello"),cd:t.spCd&&t.spCd.D||0,cdMax:90},{key:"F",name:de("Fantasma"),cd:t.spCd&&t.spCd.F||0,cdMax:70}],stats:e1(t),human:!!t.human,isMe:o,status:i}}function Ac(){const t=b.game,e=t.player;if(!e)return;const n=jt?Ye(jt):null;n&&(n.kind!=="hero"||nt(n))&&(jt=null);const r=t.msgs.filter(i=>!i.to||i.to===b.localId).slice(-3).map(i=>({id:i.id,text:de(i.txt),color:i.col,t:i.t,dur:i.dur})),o=(t.chat||[]).filter(i=>i.scope==="all"||i.team===e.team).slice(-8).map(i=>{Bs=i.human;const a=de(i.txt);return Bs=!1,{id:i.id,scope:i.scope,team:i.team,heroKey:i.hero,heroName:ht[i.hero]?ht[i.hero].name:"?",human:!!i.human,text:a,age:t.t-i.t}});kl.value={me:Qi(e),inspected:jt?Qi(Ye(jt)):null,allies:t.heroes.filter(i=>i.team===e.team&&i!==e).map(Qi),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(i=>({id:i.id,killerKey:i.killerKey||null,killerName:i.killerKey?ht[i.killerKey].name:de(i.killerName),killerTeam:i.killerTeam,victimKey:i.victimKey,victimTeam:i.victimTeam})),msgs:r,chat:o,buffs:{serpent:t.buffs[e.team].serpent||0,stone:t.buffs[e.team].stone||0},towerWarn:Ns,inShop:t.inShop(e),levelMode:lr,aim:b.aim?b.aim.k:null,amove:b.amove,winner:t.winner||null,myTeam:e.team,zoomPct:Math.round(b.cam.tz/no*100),zoomMsg:b.cam.zoomMsgT,camFollow:b.camFollow,scoreboard:t.heroes.map(i=>({id:i.id,heroKey:i.heroKey,name:ht[i.heroKey].name,team:i.team,level:i.level,kills:i.kills,deaths:i.deaths,assists:i.assists,cs:i.cs,gold:i.gold!==void 0&&(i.team===e.team||b.mode!=="guest")?Math.floor(i.gold):null,items:i.items||[],human:!!i.human,isMe:i===e,dead:!!i.dead,respawn:Math.ceil(i.respawn||0)})),mode:b.mode,netLost:!!J.lost,deathRecap:e.dead?t1(e):Xs=null}}let Xs=null,Fl=null;function t1(t){return Xs!==t&&(Xs=t,Fl=n1(t)),Fl}function n1(t){const e=(t.dmgLog||[]).filter(r=>b.game.t-r.t<15);if(!e.length)return null;const n={};for(const r of e){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&ht[r.h]?ht[r.h].name:de(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function r1(){const t=b.game,e=t.player;if(!e)return;const{N:n,HW:r,HH:o}=ee,i=2*n*r,a=2*n*o,s=(h,d)=>{const[p,g]=T(h,d);return{x:p/i,y:g/a}},l=[];for(const h of t.units){if(h.dead||nt(h))continue;const d=s(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===e,human:!!h.human})}const u=b.cam,f=b.W/u.z,c=b.H/u.z;Ul.value={units:l,camps:t.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/a,x1:(u.x+f/2)/i,y1:(u.y+c/2)/a},vision:b.visionSrc.map(h=>({...s(h.x,h.y),r:Yo[h.kind]*r*Math.SQRT2/i})),pings:(t.pings||[]).filter(h=>h.team===e.team&&t.t-h.t<3).map(h=>({...s(h.x,h.y),t:t.t-h.t,kind:h.kind}))}}const fn={skipIntro(){Cc()},playVsBots(){$.init(),$.startMusic(),Ws(!1)},playAram(){$.init(),$.startMusic(),L=null,Mt=wt[Math.random()*wt.length|0],Wo=!0,ma()},async hostOnline(){pt.value={...pt.value,msg:de("Creando sala...")};try{await J.host(Mt,dn),xt.value="lobby",pt.value={...pt.value,msg:""},to()}catch{pt.value={...pt.value,msg:de("No se pudo crear la sala")}}},async joinOnline(t){pt.value={...pt.value,msg:de("Entrando...")};try{await J.join(t,Mt,dn),xt.value="lobby",pt.value={...pt.value,msg:""},to()}catch{pt.value={...pt.value,msg:de("No se pudo entrar")}}},setLobbyTeam(t){dn=t,J.setChoice(Mt,dn),to()},startOnlinePick(){Ws(!0)},async leaveLobby(){await J.leave(),xt.value="menu"},viewHero(t){L&&!L.locked&&(L.view=t,$.play("aim",.3),yr())},lockHero(t){si(t),yr()},randomHero(){const t=wt.filter(e=>!L.blue.includes(e)&&!L.red.includes(e));si(t[Math.random()*t.length|0]),yr()},backToMenu(){L&&L.online?Ol():(L=null,qn.value=null,xt.value="menu")},buy(t){const e=b.game&&b.game.player;if(e){if(!b.game.inShop(e)){wn("Solo podés comprar en tu base (o muerto)","#ffb070",1.6),$.play("deny",.5);return}ut(["i",t]),$.play("buy",.6)}},sell(t){const e=b.game&&b.game.player;if(!(!e||!e.items||!e.items[t])){if(!b.game.inShop(e)){wn("Solo podés vender en tu base","#ffb070",1.4),$.play("deny",.4);return}ut(["v",t]),$.play("buy",.4)}},useItem(t){const e=b.game&&b.game.player;if(!e||t<0||!e.items||e.items[t]!=="pocion"){$.play("deny",.4);return}ut(["u",t]),$.play("heal",.5)},rankUp(t){$s(t)},castKey(t){b.game&&b.game.player&&bc(t)},spell(t){const e=b.game&&b.game.player;if(!e)return;const n=e.spCd&&e.spCd[t]||0;if(n>.05){wn(de(t==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),$.play("deny",.5);return}const r=nn();ut(["sp",t,r.x,r.y]),$.play(t==="D"?"blink":"wind",.6)},recall(){const t=b.game&&b.game.player;t&&ut(t.recall?["bc"]:["b"])},inspect(t){jt=t&&b.game&&b.game.player&&t===b.game.player.id?null:t,Ac()},centerOn(t){const e=Ye(t);if(!e)return;const[n,r]=T(e.x,e.y);b.cam.x=n,b.cam.y=r-30,b.camFollow=!1},minimapClick(t,e,n){const{N:r,HW:o,HH:i,OX:a}=ee,s=t*(2*r*o)-a,l=e*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;u<0||f<0||u>r||f>r||(n==="right"?(ut(["m",u,f]),b.marker={x:u,y:f,t:0}):(b.cam.x=t*2*r*o,b.cam.y=e*2*r*i,b.mouse.mmDrag=!0))},minimapDrag(t,e){const{N:n,HW:r,HH:o}=ee;b.cam.x=Math.max(0,Math.min(1,t))*2*n*r,b.cam.y=Math.max(0,Math.min(1,e))*2*n*o},ping(t,e,n){if(!b.game||!b.game.player)return;let r,o;if(e!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=ee,u=e*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=nn();r=i.x,o=i.y}ut(["pg",t,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(t,e){const n=e.trim();n&&b.game&&ut(["t",t,n]),El.value=null},bannerDone(t){vr.value=vr.value.filter(e=>e.id!==t)},quitMatch(){Ol()},setVolume(t,e){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};$.setVolume&&$.setVolume(n[t],e),gt.value={...gt.value,[t]:e}},setSoundStyle(t){$.setStyle&&$.setStyle(t),gt.value={...gt.value,soundStyle:t}},setShadows(t){b.shadowsOn=t;try{localStorage.setItem("moba_shadows",t?"1":"0")}catch{}gt.value={...gt.value,shadows:t}},setCamFollow(t){b.camFollow=t},resetZoom(){Hs()},setLang(t){Vs.value=t,qr.clear();try{localStorage.setItem("moba_lang",t)}catch{}pc()},setDifficulty(t){gt.value={...gt.value,difficulty:t};try{localStorage.setItem("moba_diff",t)}catch{}},uiSound(t){$.init();const e={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=e[t]||e.click;$.play(n[0],n[1])},t:t=>de(t)};function o1(){const t=new URLSearchParams(location.search);window.__g=()=>({S:b,draft:L,st:zc,act:fn,net:J});const e=t.get("sala");if(e){const o=i=>{Il.value?fn.joinOnline(e.toLowerCase()):i>0&&setTimeout(()=>o(i-1),300)};o(20)}const n=t.get("auto");if(!n)return;if(n==="pick"){Ws(!1),t.get("view")&&(L.view=t.get("view")),yr();return}if(n==="menu")return;Mt=n,ma(),t.get("intro")||pa(),t.get("allbots")&&(b.game.player.bot=!0);const r=+(t.get("ff")||0);for(let o=0;o<r*30;o++)b.game.update(1/30),b.game.fx.forEach(i=>i.done=!0);if(t.get("follow")&&(b.camFollow=!0),t.get("shop")&&(sr.value=!0),t.get("tab")&&(Kr.value=!0),t.get("cam")){const[o,i]=t.get("cam").split(",").map(Number),[a,s]=T(o,i);b.cam.x=a,b.cam.y=s}t.get("mx")&&(b.mouse.x=+t.get("mx"),b.mouse.y=+t.get("my"))}const f1=Object.freeze(Object.defineProperty({__proto__:null,BUILD:gc,startClient:Ug},Symbol.toStringTag,{value:"Module"}));export{E0 as $,lf as A,Di as B,Be as C,Cn as D,Ve as E,ye as F,ge as G,Kd as H,jd as I,tl as J,Ri as K,rl as L,$e as M,Y0 as N,it as O,en as P,Iu as Q,oi as R,Ad as S,ae as T,ys as U,uf as V,Zd as W,kd as X,ce as Y,Wt as Z,oa as _,Mo as a,u1 as a0,$0 as a1,l1 as a2,Gn as a3,Pr as a4,ku as a5,m0 as a6,g0 as a7,f1 as a8,zr as b,ia as c,of as d,An as e,ra as f,St as g,tf as h,sa as i,ld as j,Zn as k,me as l,p0 as m,Ba as n,ri as o,Ou as p,Rt as q,R0 as r,Ja as s,Ct as t,Bt as u,yd as v,gn as w,Pd as x,kt as y,Od as z};
