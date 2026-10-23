const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-Dbz-Wnhj.js","./webworkerAll-BfeyY58w.js","./CanvasPool-BRDjgChA.js","./colorToUniform-ByLmCCkM.js","./_commonjsHelpers-CqkleIqs.js","./actions-CElnbrmF.js","./index-BKnvilyc.js","./index-CRxA3_CA.css","./WebGPURenderer-ZNcRkZ-u.js","./SharedSystems-BUvwK-vd.js","./WebGLRenderer-s5TTHXRB.js"])))=>i.map(i=>d[i]);
import{l as js,k as yt,b as Fc,j as vt,n as Dl,h as Ic,s as Ec,t as Yr,c as gt,C as Uc,f as ir,o as kc,i as vr,z as Ll,d as Yn,g as qr,m as Gl,B as Zs,e as Nl,a as Dc}from"./actions-CElnbrmF.js";import{_ as Vo}from"./index-BKnvilyc.js";import{g as Bl}from"./_commonjsHelpers-CqkleIqs.js";const te={},At={},ut={},ee={HW:64,HH:32,N:48,OX:48*64,ZK:78.4};function Lc(){const t=window.MAP;ee.HW=t.HW,ee.HH=t.HH,ee.N=t.N,ee.OX=t.N*t.HW}const T=(t,e,n=0)=>[(t-e)*ee.HW+ee.OX,(t+e)*ee.HH-n*ee.ZK],to=1.1,b={game:null,mode:"solo",localId:"local",W:1280,H:720,cam:{x:0,y:0,z:to,tz:to,shake:0,zoomMsgT:0},mouse:{x:0,y:0,wx:0,wy:0,rd:!1,md:!1,mmDrag:!1,inWorld:!0},camFollow:!1,shadowsOn:!0,gpuName:"",softGpu:!1,visible:new Set,visionSrc:[],aim:null,amove:!1,hoverUnit:null,hoverAbil:null,marker:null,wind:0,T:0},ts={blue:"#4aa8ff",red:"#ff5a4a",neutral:"#ffd24a"},Yo={hero:8.5,minion:5.5,tower:8,nexus:9},m=(t,e)=>t+Math.random()*(e-t);function Ft(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function rt(t){const e=b.game&&b.game.player;return!e||t.team===e.team?!1:t.invisible&&t.invisible()||!b.visible.has(t.id)}function Ve(t){return b.game&&b.game.units.find(e=>e.id===t)}function tn(t=b.mouse.x,e=b.mouse.y){const{HW:n,HH:r,OX:o}=ee,i=b.cam,l=(t-b.W/2)/i.z+i.x-o,s=(e-b.H/2)/i.z+i.y;return{x:(l/n+s/r)/2,y:(s/r-l/n)/2}}const Me={sfx:(t,e,n,r,o)=>{},say:t=>{},banner:(t,e,n,r,o)=>{},play:(t,e)=>{},t:t=>t,babble:(t,e,n,r)=>{}},br={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let ns=null;const rs=t=>br[ns&&ns[t]||t]||br.fire,Ot=t=>{const e=rs(t);return e[Math.random()*e.length|0]};let ln=[],Hn=[],lr=[],sn=[],qo=1,os=1;function $l(){ln=[],Hn=[],lr=[],sn=[]}function I(t,e,n,r,o,i,l,s,u=2,a=0,f=!1,c=.94){qo<1&&Math.random()>qo||ln.push({x:t,y:e,z:n,vx:r,vy:o,vz:i,life:l,max:l,col:s,size:u,grav:a,glow:f,drag:c})}function pt(t,e,n,r,o=12,i=2.5,l=.6,s=1.5,u=!0,a=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;I(t,e,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,l*(.6+Math.random()*.6),Ot(r),a+(Math.random()<.3?1:0),4,u)}}function se(t){b.cam.shake=Math.max(b.cam.shake,t*os)}function z(t){return t.t=0,Hn.push(t),t}function Rn(t){t.t=0,lr.push(t)}const _a={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},Sa=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),Gc=new Set(["gato","zorra"]);function Nc(){const t=b.game;window.SIM.HEROES;for(const e of t.fx){if(e.done)continue;e.done=!0;const n=!t.player||e.uid===t.player.id||e.uid===void 0;qo=n?1:.4,os=n?1:.3;const r=e.key&&e.hero&&e.type!=="hit"&&e.type!=="transform"?e.hero+"_"+e.key:"",o=r?te[r]:void 0,i=r&&e.type!=="heal"&&!e.impact,l=r?i?"ab_"+r:e.impact&&!o?_a[e.type]:null:_a[e.type];if(e.key==="R"&&e.hero&&e.type!=="hit"&&Me.babble(e.hero,"ult",e.x,e.y),l&&Me.sfx(l,e.x,e.y,e.type==="levelup"&&t.player&&e.uid!==t.player.id?.4:1),o)try{if(o(e)!==!1)continue}catch(s){console.error(s)}switch(e.type){case"fire":{z({type:"cone",x:e.x,y:e.y,ux:e.ux,uy:e.uy,range:e.range,angle:e.angle,dur:.45});for(let s=0;s<90;s++){const u=Math.atan2(e.uy,e.ux)+(Math.random()-.5)*e.angle*2,a=(.4+Math.random())*e.range*2.4;I(e.x+e.ux*.4,e.y+e.uy*.4,.35,Math.cos(u)*a,Math.sin(u)*a,Math.random()*1.2,.5,Ot("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Rn({type:"scorch",x:e.x+e.ux*e.range*.5,y:e.y+e.uy*e.range*.5,r:e.range*.5,dur:4}),se(3);break}case"quake":{z({type:"cracks",x:e.x,y:e.y,ux:e.ux||1,uy:e.uy||0,range:e.range,angle:e.angle,dur:1.2,seed:Math.random()*99}),z({type:"ring",x:e.x,y:e.y,r:e.range,dur:.4,col:"#f4e0c0",w:5});for(let s=0;s<50;s++){const u=Math.random()*6.28,a=Math.random()*e.range*2.5;I(e.x,e.y,.1,Math.cos(u)*a,Math.sin(u)*a,1+Math.random()*2,.7,Ot("quake"),3,6,!1)}se(e.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const s=e.type==="firering"?"fire":e.type==="healring"?"heal":e.type;z({type:"ring",x:e.x,y:e.y,r:e.radius,dur:.45,col:rs(s)[1],w:7}),z({type:"ring",x:e.x,y:e.y,r:e.radius*.7,dur:.6,col:rs(s)[0],w:3,delay:.08}),e.type==="roar"&&(z({type:"ring",x:e.x,y:e.y,r:e.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),se(8)),e.type==="firering"&&(z({type:"flash",x:e.x,y:e.y,r:e.radius,dur:.25,col:"rgba(255,200,80,"}),se(9),Rn({type:"scorch",x:e.x,y:e.y,r:e.radius*.9,dur:6})),e.type==="frost"&&Rn({type:"frost",x:e.x,y:e.y,r:e.radius,dur:3}),e.type==="splash"&&Rn({type:"wet",x:e.x,y:e.y,r:e.radius*.8,dur:2.5});const u=e.type==="spores"?40:90;for(let a=0;a<u;a++){const f=Math.random()*Math.PI*2,c=e.radius*(1.6+Math.random()*1.6);I(e.x,e.y,.2,Math.cos(f)*c,Math.sin(f)*c,Math.random()*2,.6,Ot(s),e.type==="spores"?5:3,3,e.type!=="spores"&&e.type!=="splash")}if(e.type==="spores")for(let a=0;a<14;a++)z({type:"puff",x:e.x+m(-1,1)*e.radius*.7,y:e.y+m(-1,1)*e.radius*.7,r:m(14,26),dur:m(.7,1.3),col:[140,210,90]});break}case"heal":z({type:"pillar",x:e.x,y:e.y,dur:.8,col:[110,255,140]});for(let s=0;s<16;s++)I(e.x+m(-.4,.4),e.y+m(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Ot("heal"),3,0,!0);break;case"shield":case"stoneskin":z({type:"bubble",uid:e.uid,x:e.x,y:e.y,dur:e.dur||3,col:e.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":z({type:"swirl",uid:e.uid,x:e.x,y:e.y,dur:e.dur||4});break;case"smoke":for(let s=0;s<12;s++)z({type:"puff",x:e.x+m(-.6,.6),y:e.y+m(-.6,.6),r:m(12,22),dur:m(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const s=e.type==="firedash"?"fire":"dust",u=e.ex||e.x+(e.ux||0)*(e.range||0),a=e.ey||e.y+(e.uy||0)*(e.range||0);for(let f=0;f<30;f++){const c=f/30;I(e.x+(u-e.x)*c+m(-.2,.2),e.y+(a-e.y)*c+m(-.2,.2),.15,m(-.5,.5),m(-.5,.5),m(.3,1.2),.5+c*.4,Ot(s),4,0,s==="fire")}z({type:"streak",x:e.x,y:e.y,ex:u,ey:a,dur:.35,col:s==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const s=e.ex||e.x,u=e.ey||e.y;z({type:"flash",x:e.x,y:e.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),z({type:"flash",x:s,y:u,r:1.1,dur:.3,col:"rgba(220,170,255,"}),z({type:"streak",x:e.x,y:e.y,ex:s,ey:u,dur:.3,col:"#d8a8ff"}),pt(e.x,e.y,.4,"arcane",16,2,.5),pt(s,u,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let s=0;s<20;s++){const u=Math.random()*6.28,a=Math.random()*e.radius;I(e.x+Math.cos(u)*a,e.y+Math.sin(u)*a,.1,0,0,2,.6,Ot("arcane"),2,0,!0)}break;case"starfall":for(let s=0;s<18;s++)z({type:"meteor",x:e.x+m(-1,1)*e.radius*.8,y:e.y+m(-1,1)*e.radius*.8,dur:.35,delay:s*.02});z({type:"flash",x:e.x,y:e.y,r:e.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),z({type:"ring",x:e.x,y:e.y,r:e.radius,dur:.5,col:"#e2b8ff",w:7}),pt(e.x,e.y,.2,"arcane",70,6,.8,3),Rn({type:"scorch",x:e.x,y:e.y,r:e.radius*.8,dur:5,col:[60,30,90]}),se(10);break;case"slash":z({type:"xslash",x:e.x,y:e.y,dur:.35}),pt(e.x,e.y,.5,"blood",20,4,.5,2,!1),pt(e.x,e.y,.5,"slash",14,4,.4),se(7);break;case"hit":{if(e.hero&&(e.kind==="hero"||e.proj)){const u=e.proj&&e.pkey||"A";if(u==="A"&&ut[e.hero]){if(Gc.has(e.hero)||Me.sfx("atk_"+e.hero,e.x,e.y,e.big?1:.8),!(e.proj&&Sa.has(e.hero+"_A")))try{ut[e.hero](e)}catch(a){console.error(a)}break}if(u!=="A"&&Sa.has(e.hero+"_"+u))break}const s=e.col&&br[e.col]?e.col:e.hero==="dragon"?"fire":"slash";z({type:"spark",x:e.x,y:e.y,dur:.15,big:!!e.big,col:br[s][0]}),pt(e.x,e.y,.45,s,e.big?10:5,e.big?3:2,.35,1.5,!0,2),Me.sfx(e.big||e.skill?"hitbig":"hit",e.x,e.y,e.kind==="minion"?.35:e.kind==="monster"?.6:.8),e.skill&&se(2);break}case"shoot":if(e.kind==="hero"&&e.hero){Me.sfx("shot_"+e.hero,e.x,e.y,.6);break}Me.sfx(e.proj==="arrow"?"arrow":e.proj==="tower"?"tower":e.proj==="spear"?"spear":"arcane",e.x,e.y,e.kind==="minion"?.3:.6);break;case"bite":z({type:"jaws",x:e.x,y:e.y,dur:.35}),pt(e.x,e.y,.3,"bite",24,3,.5),se(5);break;case"transform":{const s=e.kind==="fire",u=s?[255,140,50]:[255,220,90];z({type:"pillar",x:e.x,y:e.y,uid:e.uid,dur:1.2,col:u}),z({type:"ring",x:e.x,y:e.y,r:2.6,dur:.7,col:s?"#ff9a3a":"#ffe070",w:6}),pt(e.x,e.y,.6,s?"fire":"gold",70,5,.9,3,!0,4),se(e.uid===(t.player&&t.player.id)?10:4),Me.sfx("roar",e.x,e.y,.8);break}case"levelup":z({type:"pillar",x:e.x,y:e.y,uid:e.uid,dur:1,col:[255,220,90]}),z({type:"ring",x:e.x,y:e.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":e.kind==="hero"?(e.sprite&&Me.babble(e.sprite,"die",e.x,e.y),pt(e.x,e.y,.4,"smoke",22,2.5,.9,2,!1,4),z({type:"wisp",x:e.x,y:e.y,dur:1.5,team:e.team}),Me.sfx("death",e.x,e.y)):e.kind==="minion"?(pt(e.x,e.y,.3,"smoke",8,1.5,.6,1,!1,3),Me.sfx("mdeath",e.x,e.y,.3)):e.kind==="monster"&&(pt(e.x,e.y,.3,"spores",18,2.5,.8,2,!1,4),Me.sfx("mdeath",e.x,e.y,.5));break;case"towerdown":for(let s=0;s<26;s++){const u=Math.random()*6.28,a=m(1.5,5);I(e.x+m(-.3,.3),e.y+m(-.3,.3),m(.8,2.2),Math.cos(u)*a,Math.sin(u)*a,m(3,9),m(1.2,2),Ot("stone"),Math.random()*4+4|0,14,!1,.97)}for(let s=0;s<14;s++)z({type:"puff",x:e.x+m(-1.2,1.2),y:e.y+m(-1.2,1.2),r:m(26,46),dur:m(1.2,2.2),col:[150,140,130]});z({type:"pillar",x:e.x,y:e.y,dur:.8,col:[255,200,120]}),Rn({type:"scorch",x:e.x,y:e.y,r:1.8,dur:30}),Me.say(e.team===(t.player&&t.player.team)?"tower_ally":"tower_enemy"),Me.banner(e.team===(t.player&&t.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",e.team===(t.player&&t.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":e.type==="bossdown"&&Me.say(e.monster==="serpent"?"serpent":"boss"),pt(e.x,e.y,1,e.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let s=0;s<30;s++)I(e.x,e.y,1,m(-4,4),m(-4,4),m(3,8),1.4,Ot("stone"),5,12,!1);z({type:"flash",x:e.x,y:e.y,r:3,dur:.4,col:e.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),z({type:"ring",x:e.x,y:e.y,r:4,dur:.7,col:"#ffe0a0",w:8}),se(14);break;case"killbanner":{const s=t.player,u=s&&e.uid===s.id;if(z({type:"wisp",x:e.x,y:e.y,dur:1.6}),pt(e.x,e.y,.8,"gold",u?40:14,4,.9,3,!0,3),!e.hero)break;const a=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],f=e.big===1,c=e.big===2,h=e.dur||0,d=f?"first":e.skill>=2?"multi":c?"ace":h>=7?"godlike":h>=5?"unstoppable":h===4?"rampage":h===3?"spree":"kill",g=d==="multi"?a[Math.min(5,e.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[d],y=s&&e.team===s.team;Me.banner(g,y?"#7fd0ff":"#ff7a6a",e.hero,e.kind,!!(f||c||e.skill>=2||u));const x=s&&s.heroKey===e.kind&&s.dead&&e.team!==s.team,M=["","","double","triple","quadra","penta"];Me.say(d==="first"?"first_blood":d==="multi"?M[Math.min(5,e.skill)]:d==="kill"?x?"you_died":y?"kill":"ally_killed":d),u&&se(6);break}case"runespawn":Me.say("rune");break;case"ping":{const s=t.player;if(!s||e.team!==s.team)break;const u=e.kind==="danger"?"#ff5a4a":e.kind==="omw"?"#7fd0ff":e.kind==="missing"?"#ffd24a":"#8ae08a";for(let a=0;a<3;a++)z({type:"ring",x:e.x,y:e.y,r:1.4,dur:.9,col:u,w:4,delay:a*.18});z({type:"pingmark",x:e.x,y:e.y,dur:3,col:u,kind:e.kind}),Me.play(e.kind==="danger"?"deny":"aim",.7);break}case"laser":z({type:"streak",x:e.x,y:e.y,ex:e.ex,ey:e.ey,dur:.25,col:e.team==="blue"?"#9ae8ff":"#ffb070"}),pt(e.ex,e.ey,.5,e.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),Me.sfx("tower",e.ex,e.ey,.7);break;case"rooted":z({type:"vines",uid:e.uid,x:e.x,y:e.y,dur:e.dur||1.3});break;case"announce":if(e.snd==="end"){const s=t.player&&t.winner===t.player.team;Me.play(s?"victory":"defeat",1),Me.say(s?"victory":"defeat")}else Me.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":z({type:"flash",x:e.x+(e.ux||0)*.5,y:e.y+(e.uy||0)*.5,r:.45,dur:.15,col:e.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}qo=1,os=1,ns=null}function Bc(t){for(const e of ln)e.life-=t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.vz-=e.grav*t,e.vx*=e.drag,e.vy*=e.drag,e.z<0&&(e.z=0,e.vz=0);ln=ln.filter(e=>e.life>0),ln.length>2500&&ln.splice(0,ln.length-2500);for(const e of Hn)e.t+=t;Hn=Hn.filter(e=>e.t<e.dur+(e.delay||0));for(const e of lr)e.t+=t;lr=lr.filter(e=>e.t<e.dur),b.cam.shake=Math.max(0,b.cam.shake-t*30)}let di=6,Qn=0;function $c(t,e,n,r,o,i){const{HW:l,HH:s,N:u,OX:a}=ee,f=window.MAP,c=b.T;if(di-=t,di<=0&&(Qn=m(.6,1),di=m(8,16)),Qn=Math.max(0,Qn-t*.25),b.wind=.35+.15*Math.sin(c*.4)+Qn,Qn>.3&&Math.random()<Qn*.9){const h=n+Math.random()*o,p=e-20-a,g=(p/l+h/s)/2,y=(h/s-p/l)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];sn.push({k:"leaf",x:g,y,z:m(.4,2.2),ph:Math.random()*6,life:m(2.5,4),col:x,sp:m(9,15)})}if(sn.length<70&&Math.random()<.8){const h=e+Math.random()*r,d=n+Math.random()*o,p=h-a,g=d,y=(p/l+g/s)/2,x=(g/s-p/l)/2;if(y>1&&x>1&&y<u-1&&x<u-1){const M=f.grid[Math.floor(x)][Math.floor(y)];M===0||M===4?sn.push({k:"fly",x:y,y:x,z:m(.2,.9),ph:Math.random()*6,life:m(4,9),vx:m(-.3,.3),vy:m(-.3,.3)}):M===3&&sn.push({k:"spark",x:y,y:x,z:0,ph:Math.random()*6,life:m(.4,1),max:1})}}for(const h of sn)h.life-=t,h.k==="leaf"&&(h.x+=h.sp*t*.5,h.y-=h.sp*t*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=m(-.6,.6)*t,h.vy+=m(-.6,.6)*t,h.x+=h.vx*t,h.y+=h.vy*t,h.z+=Math.sin(c*2+h.ph)*.003);if(sn=sn.filter(h=>h.life>0).slice(-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,p]=T(h.x,h.y);d>e&&d<e+r&&p>n&&p<n+o+100&&I(h.x+m(-.4,.4),h.y+m(-.4,.4),1.4,m(-.3,.3),m(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let P,Ro,xn=null;function wa(t,e){P=Ro=t,xn=e||null}let is=!1;function Hc(){const t=is;return is=!1,t}function Pe(t){if(t&&(is=!0),!xn){P.globalCompositeOperation=t?"lighter":"source-over";return}if(t){if(P===xn)return;xn.setTransform(Ro.getTransform()),xn.globalAlpha=Ro.globalAlpha,xn.globalCompositeOperation="lighter",xn.imageSmoothingEnabled=!1,P=xn}else P=Ro}function ze(t,e,n,r,o,i=2,l){const{HW:s,HH:u}=ee,[a,f]=T(t,e);P.beginPath(),P.ellipse(a,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*u*Math.SQRT2),0,0,Math.PI*2),o&&(P.fillStyle=o,P.fill()),r&&(P.lineWidth=i,P.strokeStyle=r,l&&P.setLineDash(l),P.stroke(),P.setLineDash([]))}function Ca(t,e,n){P.beginPath(),t.forEach(([r,o],i)=>{const[l,s]=T(r,o);i?P.lineTo(l,s):P.moveTo(l,s)}),P.closePath(),P.fillStyle=n,P.fill(),P.strokeStyle=e,P.lineWidth=2,P.stroke()}function Wc(){for(const t of lr){const e=Math.min(1,(t.dur-t.t)/1.5);if(t.type==="scorch"){const n=t.col||[30,20,15];ze(t.x,t.y,t.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*e})`)}t.type==="frost"&&ze(t.x,t.y,t.r,`rgba(220,250,255,${.5*e})`,`rgba(160,220,255,${.25*e})`,2),t.type==="wet"&&ze(t.x,t.y,t.r,null,`rgba(40,90,120,${.3*e})`)}}function Hl(t,e){if(!(e>1)){t.add&&Pe(!0),P.save();try{t.draw(P,e,t)}catch(n){console.error(n)}P.restore(),t.add&&Pe(!1)}}function qe(t){Pe(t)}function Wt(){return P}function Xc(){const{HW:t}=ee;for(const e of Hn){const n=e.t-(e.delay||0);if(n<0)continue;const r=n/e.dur;if(e.type==="custom"){e.layer==="ground"&&Hl(e,r);continue}if(e.type==="ring")P.globalAlpha=Math.max(0,1-r),ze(e.x,e.y,e.r*Math.min(1,.25+r*1.4),e.col,null,e.w*(1-r*.6)),P.globalAlpha=1;else if(e.type==="cone"){const[o,i]=T(e.x,e.y),l=Math.atan2(e.uy,e.ux);P.save(),Pe(!0),P.globalAlpha=Math.max(0,.75*(1-r)),P.beginPath(),P.moveTo(o,i);for(let f=0;f<=16;f++){const c=l-e.angle+2*e.angle*f/16,h=e.range*(.4+Math.min(1,r*3)*.6),[d,p]=T(e.x+Math.cos(c)*h,e.y+Math.sin(c)*h);P.lineTo(d,p)}P.closePath();const[s,u]=T(e.x+e.ux*e.range,e.y+e.uy*e.range),a=P.createLinearGradient(o,i,s,u);a.addColorStop(0,"rgba(255,240,170,0.9)"),a.addColorStop(.5,"rgba(255,130,40,0.6)"),a.addColorStop(1,"rgba(200,40,10,0)"),P.fillStyle=a,P.fill(),Pe(!1),P.restore()}else if(e.type==="cracks"){P.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,P.lineWidth=2;const o=Math.atan2(e.uy,e.ux);for(let i=0;i<7;i++){const l=o+(i/6-.5)*Math.min(e.angle,3)*1.6;P.beginPath();let[s,u]=T(e.x,e.y);P.moveTo(s,u);for(let a=1;a<=5;a++){const f=e.range*a/5,c=l+(Ft(e.seed+i*7+a)-.5)*.6;[s,u]=T(e.x+Math.cos(c)*f,e.y+Math.sin(c)*f),P.lineTo(s,u)}P.stroke()}}else if(e.type==="flash"){const[o,i]=T(e.x,e.y,.3),l=e.r*t*1.3;Pe(!0);const s=P.createRadialGradient(o,i,0,o,i,l);s.addColorStop(0,e.col+.8*(1-r)+")"),s.addColorStop(1,e.col+"0)"),P.fillStyle=s,P.fillRect(o-l,i-l,l*2,l*2),Pe(!1)}else if(e.type==="streak"){const[o,i]=T(e.x,e.y,.4),[l,s]=T(e.ex,e.ey,.4);Pe(!0),P.strokeStyle=e.col,P.globalAlpha=Math.max(0,.9*(1-r)),P.lineWidth=8*(1-r)+1,P.beginPath(),P.moveTo(o,i),P.lineTo(l,s),P.stroke(),P.globalAlpha=1,Pe(!1)}else if(e.type==="puff"){const[o,i]=T(e.x,e.y,.3+r*.4),l=e.col;P.fillStyle=`rgba(${l[0]},${l[1]},${l[2]},${.5*(1-r)})`;const s=e.r*(.6+r*.7);P.beginPath(),P.ellipse(o,i,s,s*.75,0,0,7),P.fill()}}}function Vc(){const t=b.T;for(const e of Hn){const n=e.t-(e.delay||0);if(n<0)continue;const r=n/e.dur;if(e.type==="custom"){e.layer!=="ground"&&Hl(e,r);continue}const o=e.uid?Ve(e.uid):null,i=o?o.x:e.x,l=o?o.y:e.y;if(e.type==="pillar"){const[s,u]=T(i,l),a=e.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));Pe(!0);const h=P.createLinearGradient(s,u,s,u-f);h.addColorStop(0,`rgba(${a[0]},${a[1]},${a[2]},${c})`),h.addColorStop(1,`rgba(${a[0]},${a[1]},${a[2]},0)`),P.fillStyle=h,P.fillRect(s-18,u-f,36,f),Pe(!1)}else if(e.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,u]=T(i,l,.35),a=e.col;Pe(!0),P.strokeStyle=`rgba(${a[0]},${a[1]},${a[2]},0.8)`,P.lineWidth=2,P.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},0.12)`,P.beginPath(),P.ellipse(s,u,34,38,0,0,7),P.fill(),P.stroke();for(let f=0;f<6;f++){const c=t*1.5+f*1.05;P.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(t*4+f)})`,P.fillRect(s+Math.cos(c)*30-1,u+Math.sin(c)*34-1,3,3)}Pe(!1)}else if(e.type==="swirl"){if(!o||o.dead)continue;const[s,u]=T(i,l,.3);P.strokeStyle="rgba(160,255,190,0.7)",P.lineWidth=2;for(let a=0;a<3;a++){const f=t*6+a*2.1;P.beginPath(),P.ellipse(s,u,26,12,0,f,f+1.4),P.stroke()}}else if(e.type==="vines"){if(!o||o.dead)continue;const[s,u]=T(i,l);P.strokeStyle="#4a7a2a",P.lineWidth=3;for(let a=0;a<5;a++){const f=a*1.26;P.beginPath(),P.moveTo(s+Math.cos(f)*16,u+Math.sin(f)*7),P.quadraticCurveTo(s+Math.cos(f)*22,u-18,s+Math.cos(f+1.2)*6,u-30),P.stroke()}P.fillStyle="#8ad050";for(let a=0;a<5;a++){const f=a*1.26+.5;P.fillRect(s+Math.cos(f)*14-2,u-14+Math.sin(f)*6,4,3)}}else if(e.type==="meteor"){const[s,u]=T(e.x,e.y,3*(1-r));Pe(!0),P.strokeStyle="rgba(240,200,255,0.9)",P.lineWidth=4,P.beginPath(),P.moveTo(s-18,u-50),P.lineTo(s,u),P.stroke(),P.fillStyle="#ffffff",P.fillRect(s-3,u-3,6,6),Pe(!1)}else if(e.type==="xslash"){const[s,u]=T(e.x,e.y,.5),a=40*Math.min(1,r*3);P.globalAlpha=Math.max(0,1-r),P.strokeStyle="#ffffff",P.lineWidth=6,P.beginPath(),P.moveTo(s-a,u-a),P.lineTo(s+a,u+a),P.moveTo(s+a,u-a),P.lineTo(s-a,u+a),P.stroke(),P.strokeStyle="#ff4040",P.lineWidth=2,P.stroke(),P.globalAlpha=1}else if(e.type==="spark"){const[s,u]=T(e.x,e.y,.45),a=(e.big?16:10)*(1-r);Pe(!0),P.fillStyle=e.col,P.fillRect(s-a,u-1,a*2,3),P.fillRect(s-1,u-a,3,a*2),P.fillRect(s-a*.5,u-a*.5,a,a),Pe(!1)}else if(e.type==="jaws"){const[s,u]=T(e.x,e.y,.5),a=26*(1-Math.min(1,r*2.5));P.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",P.lineWidth=5,P.beginPath(),P.arc(s,u-a,24,.2,Math.PI-.2),P.stroke(),P.beginPath(),P.arc(s,u+a,24,Math.PI+.2,-.2),P.stroke()}else if(e.type==="pingmark"){const[s,u]=T(e.x,e.y,.9+Math.sin(t*6)*.05);Yc(e.col,Math.max(0,1-Math.max(0,r-.8)*5)),P.beginPath(),P.moveTo(s,u+14),P.lineTo(s-9,u-2),P.arc(s,u-6,10,Math.PI*.85,Math.PI*.15),P.closePath(),P.fill(),P.stroke(),P.fillStyle="#120c1a",P.font="bold 13px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText(e.kind==="danger"?"!":e.kind==="omw"?"»":e.kind==="missing"?"?":"+",s,u-6),P.globalAlpha=1}else if(e.type==="wisp"){const[s,u]=T(e.x,e.y,.5+r*2);Pe(!0),P.fillStyle=(e.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",P.beginPath(),P.arc(s+Math.sin(r*12)*6,u,7,0,7),P.fill(),Pe(!1)}}}function Yc(t,e){P.globalAlpha=e,P.fillStyle=t,P.strokeStyle="#120c1a",P.lineWidth=2}function qc(){for(const t of ln){const[e,n]=T(t.x,t.y,t.z),r=Math.min(1,t.life/t.max*1.5);t.glow?(Pe(!0),P.globalAlpha=r*.35,P.fillStyle=t.col,P.fillRect(Math.round(e-t.size),Math.round(n-t.size),t.size*2,t.size*2),P.globalAlpha=r,P.fillRect(Math.round(e-t.size/2),Math.round(n-t.size/2),t.size,t.size),Pe(!1)):(P.globalAlpha=r,P.fillStyle=t.col,P.fillRect(Math.round(e-t.size/2),Math.round(n-t.size/2),t.size,t.size))}P.globalAlpha=1}function Kc(){const t=b.T;Pe(!0);for(const e of sn){const[n,r]=T(e.x,e.y,e.z);if(e.k==="leaf"){Pe(!1);const o=Math.abs(Math.sin(t*8+e.ph))*4+1;P.fillStyle="#00000040",P.fillRect(n-o/2+2,r+2,o,3),P.fillStyle=e.col,P.fillRect(n-o/2,r,o,3),Pe(!0);continue}if(e.k==="fly"){const o=.5+.5*Math.sin(t*3+e.ph);P.fillStyle=`rgba(210,255,120,${.25*o})`,P.fillRect(n-3,r-3,6,6),P.fillStyle=`rgba(250,255,200,${.9*o})`,P.fillRect(n-1,r-1,2,2)}else{const o=Math.max(0,Math.sin(e.life*Math.PI));P.fillStyle=`rgba(255,255,255,${.7*o})`,P.fillRect(n-1,r,3,1),P.fillRect(n,r-1,1,3)}}Pe(!1)}function jc(t){if(typeof t!="string"||!/^\d+[QWERA]$/.test(t))return null;const e=window.SIM.HERO_KEYS[parseInt(t,10)];return e?e+"_"+t.slice(-1):null}function Zc(){const{HW:t,HH:e}=ee,n=b.T;for(const r of b.game.projs){const o=r.z||.45,[i,l]=T(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*e,((r.vx||0)-(r.vy||0))*t),u=jc(r.look||r.fx),a=u?At[u]:void 0;if(a){P.save();try{a(P,r,i,l,s,n)}catch(c){console.error(c)}P.restore(),Pe(!1);continue}const f=br[r.fx]||br.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;P.save(),P.translate(i,l),P.rotate(s),P.fillStyle="#3a2a1a",P.fillRect(-c,-2,c,4),P.fillStyle="#e8d8b0",P.fillRect(-c,-1,c,2),P.fillStyle="#ffffff",P.beginPath(),P.moveTo(5,0),P.lineTo(-2,-4),P.lineTo(-2,4),P.fill(),P.fillStyle="#e05050",P.fillRect(-c-3,-3,5,2),P.fillRect(-c-3,1,5,2),P.restore(),r.skill&&I(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")P.save(),P.translate(i,l),P.rotate(n*25),P.fillStyle="#1a1020",P.fillRect(-9,-3,18,6),P.fillStyle="#e0e8f0",P.fillRect(-8,-2,14,4),P.fillStyle="#c8a040",P.fillRect(-10,-3,4,6),P.restore();else if(r.fx==="root")P.fillStyle="#5a3a20",P.beginPath(),P.arc(i,l,7,0,7),P.fill(),P.fillStyle="#8ad050",P.beginPath(),P.arc(i+3,l-3,4,0,7),P.fill(),I(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;Pe(!0);const h=P.createRadialGradient(i,l,0,i,l,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),P.fillStyle=h,P.fillRect(i-c*2.4,l-c*2.4,c*4.8,c*4.8),Pe(!1),P.fillStyle=f[0],P.fillRect(i-3,l-3,6,6),Math.random()<.8&&I(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const he=Math.round,W={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function It(t,e,n,r,o){t.fillStyle=o,t.fillRect(he(e-r/2),he(n-r/2),r,r)}const Qc=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1,mi={};function Jc(t){if(mi[t])return mi[t];const e=[];for(let n=-t;n<=t;n++)for(let r=-t;r<=t;r++){const o=Math.hypot(r,n);o<=t+.5&&o>t-.5&&e.push([r,n])}return mi[t]=e}function Mr(t,e,n,r,o,i,l,s=1,u=1,a=!1){const f=Jc(r);for(let c=0;c<f.length;c++){if(a&&c%2)continue;const[h,d]=f[c];t.fillStyle=h+d>r*.6?l:i,t.fillRect(he(e+h*o*s-o/2),he(n+d*o*u-o/2),o,o)}a||(t.fillStyle=W.white,t.fillRect(he(e-r*o*.45*s-o/2),he(n-r*o*.5*u-o/2),o,o))}function eh(t,e,n,r,o,i,l=1,s=1){t.fillStyle=i;for(let u=-r+1;u<r;u++){const a=Math.floor(Math.sqrt(r*r-u*u));t.fillRect(he(e-a*o*l),he(n+u*o*s-o/2),he(a*2*o*l),o)}}function th(t,e){if(t._aw||!t.hit)return;t._aw=1;let n=0;z({type:"custom",layer:"top",dur:(t.life||2)+.3,x:t.x,y:t.y,draw(r,o,i){for(;n<t.hit.size;)n++,e(t.x,t.y);t.life<=0&&(i.dur=0)}})}const Aa=["#.#","###",".#.",".#."];function nh(t,e){z({type:"custom",layer:"top",dur:.3,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),l=4+he(r*5);n.globalAlpha=1-r,Mr(n,o,i,l,2,W.pink1,W.pink2,1,1,!0);for(let s=0;s<8;s++){const u=s/8*6.283+.4,a=l*2+4+r*10;It(n,o+Math.cos(u)*a,i+Math.sin(u)*a*.8,2,s%2?W.white:W.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=m(0,6.283),o=m(1,2.5);I(t,e,.5,Math.cos(r)*o,Math.sin(r)*o,m(1,2.5),.4,n<3?W.water:W.pink1,2,8,!1)}for(let n=0;n<3;n++)I(t,e,.5,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3),.5,n%2?W.coral:W.orange,3,10,!1)}te.ajolote_Q=t=>{if(t.type!=="cast_splash")return!1;const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=(r-o)*64,l=(r+o)*32,s=Math.atan2(l,i);z({type:"custom",layer:"top",dur:.35,x:e,y:n,draw(u,a){const[f,c]=T(e,n,.55);u.globalAlpha=1-a;for(let h=0;h<3;h++){const d=s+(h-1)*.5,p=10+a*(22+h*6);Mr(u,f+Math.cos(d)*p,c+Math.sin(d)*p-a*8,1+h%2,2,W.pink2,W.coral)}u.globalAlpha=1}});for(let u=0;u<6;u++)I(e+r*.4,n+o*.4,.5,r*m(1,2.5)+m(-.5,.5),o*m(1,2.5)+m(-.5,.5),m(.5,1.5),.35,u%2?W.water:W.pink1,2,6,!1);return!0};At.ajolote_Q=(t,e,n,r,o,i)=>{th(e,nh);const l=Math.sin(i*17+e.x*2)*.13,s=1+l,u=1-l;t.globalAlpha=.35,eh(t,n,r,6,2,W.pink2,s,u),t.globalAlpha=1;const a=(i*3|0)%2;for(let h=0;h<Aa.length;h++)for(let d=0;d<3;d++)Aa[h][a?2-d:d]==="#"&&It(t,n-2+d*2,r-3+h*2,2,h<1?W.orange:W.coral);Mr(t,n,r,6,2,W.pink2,W.coral2,s,u);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,p=Math.sin(i*12+h*2)*3;Mr(t,n-f*d-c*p,r-c*d+f*p,2-(h>>1),2,W.pink1,W.pink2)}Math.random()<.35&&I(e.x,e.y,(e.z||.45)+.05,m(-.2,.2),m(-.2,.2),.6,.45,W.pink1,2,-.5,!1)};function rh(t,e){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return z({type:"custom",layer:"top",dur:.85,x:t,y:e,draw(r,o){const i=o*.85,[l,s]=T(t,e);for(let u=0;u<n.length;u++){const a=i-u*.05,f=.25+u*.08;if(a<0)continue;const c=l+n[u][0],h=s+n[u][1]-a*6;if(a<f)Mr(r,c,h,2,2,W.pink2,W.coral);else if(a<f+.3){const d=(a-f)/.3,p=he(h-d*14),g=he(c);r.globalAlpha=1-d,r.fillStyle=W.pink1,r.fillRect(g-4,p-1,8,2),r.fillRect(g-1,p-4,2,8),r.fillStyle=W.white;for(const[y,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(g+y*(.6+d),p+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}te.ajolote_W=t=>{if(t.type==="heal")return rh(t.x,t.y);if(t.type!=="healring")return!1;const e=t.x,n=t.y,r=t.radius||2.5,o=t.uid,i=1.3,l=[-.55,-.15,.25];z({type:"custom",layer:"top",dur:.9,x:e,y:n,draw(a,f){const c=Ve(o),[h,d]=T(c?c.x:e,c?c.y:n,.85),p=Math.min(1,f*5),g=f>.6?(1-f)/.4:1;a.globalAlpha=g;for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const M=y>0?l[x]:Math.PI-l[x],v=Math.sin(f*16+x*1.3)*.12,_=M+v*y,S=Math.cos(_),R=Math.sin(_),F=he(22*p)-(x===1?0:4);for(let O=6;O<=F;O+=2)It(a,h+S*O,d+R*O,2,O>F-2?W.pink1:W.gill),O%4===0&&O>8&&(It(a,h+S*O-R*3,d+R*O+S*3,2,W.pink2),It(a,h+S*O+R*3,d+R*O-S*3,2,W.pink2))}a.globalAlpha=1}});const s=[];for(let a=0;a<12;a++)s.push(a/12*6.283+m(-.12,.12));z({type:"custom",layer:"ground",dur:1,x:e,y:n,draw(a,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),p=he(d*3)*2,[g,y]=T(e+Math.cos(s[c])*r,n+Math.sin(s[c])*r),x=he(g),M=he(y);a.fillStyle=W.coral,a.fillRect(x-1,M-2,2,4),!(p<2)&&(a.fillStyle=W.pink2,a.fillRect(x-p-1,M-3,2,2),a.fillRect(x+p-1,M-3,2,2),a.fillRect(x-1,M-3-p,2,2),a.fillRect(x-p+1,M-1-p,2,2),a.fillRect(x+p-3,M-1-p,2,2),a.fillStyle=W.pink1,a.fillRect(x-1,M-4,2,2))}}});const u=[];for(let a=0;a<16;a++){const f=m(0,6.283),c=r*.9*Math.sqrt(Math.random());u.push({x:e+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+a%3,t0:m(0,.35),pop:m(.4,.9),ph:m(0,6.283),done:!1})}return z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(a,f){const c=f*i;for(const h of u){const d=c-h.t0;if(d<0)continue;const[p,g]=T(h.x,h.y,.1+Math.min(d,h.pop)*.9),y=p+Math.sin(d*9+h.ph)*3;if(d<h.pop){Mr(a,y,g,h.n,2,W.pink2,W.coral);continue}h.done||(h.done=!0,I(h.x,h.y,.1+h.pop*.9,m(-.5,.5),m(-.5,.5),.8,.5,W.pink1,2,0,!0),I(h.x,h.y,.1+h.pop*.9,m(-.5,.5),m(-.5,.5),.5,.4,W.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;a.globalAlpha=1-x;const M=h.n*2+2+x*6;for(const[v,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])It(a,y+v*M,g+_*M,2,W.pink1);a.globalAlpha=1}}}),!0};function oh(t,e,n,r,o){const i=-o,l=r;for(let s=0;s<=22;s+=2)It(t,e-r*s,n-o*s,2,s>18?W.coral2:W.orange);for(let s=-6;s<=6;s+=2)It(t,e+i*s,n+l*s,2,W.orange);for(const s of[-6,0,6]){const u=s===0?11:8;for(let a=2;a<=u;a+=2)It(t,e+i*s+r*a,n+l*s+o*a,2,a>=u-1?W.white:W.pink1)}}te.ajolote_E=t=>{if(t.type!=="dust")return!1;const e=t.x,n=t.y,r=t.ex||e+(t.ux||0)*(t.range||0),o=t.ey||n+(t.uy||0)*(t.range||0),i=Math.max(.12,t.dur||.28),l=i+.6,s=Math.hypot(r-e,o-n),u=(r-e)/(s||1),a=(o-n)/(s||1),f=(u-a)*64,c=(u+a)*32,h=Math.hypot(f,c)||1,d=f/h,p=c/h,g=Math.max(2,Math.ceil(s/.1)),y={n:0,end:!1};return z({type:"custom",layer:"ground",dur:l,x:e,y:n,draw(x,M){const v=M*l,_=Math.min(1,v/i);for(let S=0;S<=g*_;S++){const R=S/g,F=v-R*i,O=Math.max(0,1-F/.55);if(O<=0)continue;const[k,U]=T(e+(r-e)*R,n+(o-n)*R),B=U+Math.sin(R*14-v*25)*2,H=he(4+6*R);x.globalAlpha=O,x.fillStyle=W.pink2,x.fillRect(he(k)-H,he(B)-3,H*2,1),x.fillRect(he(k)-H,he(B)+2,H*2,1),x.fillStyle=W.water,x.fillRect(he(k)-H,he(B)-2,H*2,4),S%3===0&&(x.fillStyle=W.white,x.fillRect(he(k)-1,he(B)-1,3,2))}if(x.globalAlpha=1,_<1&&y.n<22)for(let S=0;S<2;S++){y.n++;const R=e+(r-e)*_,F=n+(o-n)*_;I(R,F,.2,-u*m(.5,1.5)+m(-.8,.8),-a*m(.5,1.5)+m(-.8,.8),m(1,2.5),.45,S?W.water:W.pink1,2,8,!1)}if(!y.end&&_>=1){y.end=!0;for(let S=0;S<10;S++)I(r+u*.4,o+a*.4,.4,u*m(1.5,3.5)+m(-.8,.8),a*m(1.5,3.5)+m(-.8,.8),m(1,3),.5,S%2?W.water:W.white,2,9,!1);se(4)}}}),z({type:"custom",layer:"top",dur:i+.25,x:e,y:n,draw(x,M){const v=M*(i+.25),_=Math.min(1,v/i),[S,R]=T(e+(r-e)*_,n+(o-n)*_,.5);if(x.globalAlpha=_<1?1:Math.max(0,1-(v-i)/.25),oh(x,S+d*10,R+p*10,d,p),_>=1){const F=(v-i)/.25,O=6+F*30;for(const k of[-6,0,6])for(let U=12;U<12+O;U+=2)It(x,S+d*(10+U)-p*k,R+p*(10+U)+d*k,2,U>8+O?W.pink1:W.white)}x.globalAlpha=1}}),!0};function ih(t,e,n,r,o){const i=he(e),l=he(n),s=(Ft(o)-.5)*.3;for(let a=0;a<r;a+=2){const f=he(a*s),c=a<r*.5?6:4;t.fillStyle=W.coral,t.fillRect(i+f-c/2,l-a-2,c,2),t.fillStyle=W.deep,t.fillRect(i+f+c/2-2,l-a-2,2,2)}const u=Ft(o+3)<.5?-1:1;for(const[a,f,c]of[[.35+Ft(o+1)*.15,.38,u],[.58+Ft(o+2)*.12,.28,-u]]){const h=r*a,d=i+he(h*s),p=r*f;let g=d,y=l-h;for(let x=0;x<p;x+=2)g=d+c*(3+x*.7),y=l-h-x,t.fillStyle=W.coral2,t.fillRect(he(g)-2,he(y)-2,4,2);t.fillStyle=W.pink1,t.fillRect(he(g)-2,he(y)-4,4,2)}t.fillStyle=W.pink1,t.fillRect(i+he(r*s)-2,l-r-3,4,3)}te.ajolote_R=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const u=s?8:6,a=r*(s?.85:.45);for(let f=0;f<u;f++){const c=f/u*6.283+s*.4+m(-.15,.15);i.push({x:e+Math.cos(c)*a,y:n+Math.sin(c)*a,d:.04+s*.13+m(0,.05),H:m(24,40)*(s?1:.85),seed:m(0,99),up:!1})}}i.sort((s,u)=>s.x+s.y-(u.x+u.y));const l=(s,u)=>{const a=Math.min(1,Math.max(0,(u-s.d)/.1)),f=Math.min(1,Math.max(0,(u-.95)/.3));return s.H*(a<1?a*1.15:1)*(1-f)};z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(s,u){const a=u*o;s.globalAlpha=u>.75?(1-u)/.25:.8;for(const f of i){if(a<f.d)continue;const[c,h]=T(f.x,f.y);s.fillStyle=W.hole,s.fillRect(he(c)-6,he(h)-2,12,4),s.fillRect(he(c)-3,he(h)-3,6,6)}s.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.7,x:e,y:n,draw(s,u){const a=-u*12.6,f=Qc(u,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const p=d/18,g=a+p*1.9,[y,x]=T(e+Math.cos(g)*h,n+Math.sin(g)*h,.45);s.globalAlpha=f*(1-p),It(s,y,x,p<.15?3:2,p<.15?W.white:c===1?W.pink2:W.water)}}s.globalAlpha=1}}),z({type:"custom",layer:"top",dur:o,x:e,y:n,draw(s,u){const a=u*o;for(const f of i){a>=f.d&&!f.up&&(f.up=!0,I(f.x,f.y,.1,m(-1,1),m(-1,1),m(2,3.5),.5,Math.random()<.5?W.coral:W.orange,3,10,!1),I(f.x,f.y,.1,m(-1,1),m(-1,1),m(2,4),.45,W.water,2,10,!1));const c=l(f,a);if(c<2)continue;const[h,d]=T(f.x,f.y);ih(s,h,d,he(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const u=m(0,6.283),a=m(2,5);I(e+Math.cos(u)*.4,n+Math.sin(u)*.4,.4,Math.cos(u)*a,Math.sin(u)*a,m(3,6),m(.7,1),[W.water,W.pink1,W.white,W.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return se(9),!0};ut.ajolote=t=>{const e=t.x,n=t.y,r=!!t.big,o=Ve(t.uid);let i=1,l=0;if(o){const d=e-o.x,p=n-o.y,g=Math.hypot(d,p);g>.05&&(i=d/g,l=p/g)}const s=(i-l)*64,u=(i+l)*32,a=Math.hypot(s,u)||1,f=s/a,c=u/a;z({type:"custom",layer:"top",add:!0,dur:.22,x:e,y:n,draw(d,p){const[g,y]=T(e,n,.5),x=(r?20:14)*Math.min(1,p*4);d.globalAlpha=1-p;for(const M of[-5,0,5])for(let v=-x/2;v<=x/2;v+=2)It(d,g+f*v-c*M,y+c*v+f*M,2,v>x/2-4?W.white:W.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)I(e,n,.45,i*m(.5,2)+m(-.7,.7),l*m(.5,2)+m(-.7,.7),m(1,2.5),.35,d%2?W.pink1:W.water,2,8,!1)};const fe=Math.round,j={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function bt(t,e,n,r,o){t.fillStyle=o,t.fillRect(fe(e-r/2),fe(n-r/2),r,r)}const ss=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1;function Ko(t,e,n,r,o,i,l){const s=e.length,u=e[0].length,a=fe(n-u*o/2),f=fe(r-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<u;h++){const d=l[e[c][h]];d&&(t.fillStyle=d,t.fillRect(a+h*o,f+c*i,o,i))}}function fi(t,e,n,r,o,i,l,s,u,a){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,p=e-r*h,g=n-o*h,y=d<.85?l*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=y;x+=2){const M=x>y-2?s:u,v=x*.5;((h>>1)+(x>>1))%4!==3&&bt(t,p+f*x-r*v,g+c*x-o*v,2,M),((h>>1)+(x>>1)+2)%4!==3&&bt(t,p-f*x-r*v,g-c*x-o*v,2,M)}bt(t,p,g,2,a)}}function jo(t,e,n,r,o,i,l){const s=fe(e),u=fe(n);for(let a=0;a<r;a+=2){const f=Math.max(2,fe(o*(1-a/r)/2)*2),c=fe(a*i),h=l<0?u-a-2:u+a;t.fillStyle=j.ice3,t.fillRect(s+c-f/2,h,f,2),t.fillStyle=j.ice1,t.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}t.fillStyle=j.snow,t.fillRect(s+fe(r*i)-1,l<0?u-r-1:u+r-2,2,3)}function Wl(t,e){if(t._bw||!t.hit&&!t.homing)return;t._bw=1;let n=0;z({type:"custom",layer:"top",dur:(t.life||3)+.3,x:t.x,y:t.y,draw(r,o,i){if(t.homing){if(t.life<=0){const l=t.homing;!n&&Math.hypot(l.x-t.x,l.y-t.y)<1.2&&e(l.x,l.y),n=1,i.dur=0}return}for(;n<t.hit.size;)n++,e(t.x,t.y);t.life<=0&&(i.dur=0)}})}function sh(t,e){z({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),l=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const u=s/9*6.283+.2,a=Math.cos(u),f=Math.sin(u)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)bt(n,o+a*(l+h),i+f*(l+h),2,h>=c-2?j.snow:j.ice2)}if(r<.35){const s=fe(10*(1-r/.35))+2;n.fillStyle=j.snow,n.fillRect(fe(o)-s/2,fe(i)-s/2,s,s)}n.globalAlpha=1}}),z({type:"custom",layer:"top",dur:.6,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5);n.globalAlpha=1-r;for(let l=0;l<3;l++){const s=Math.sin(r*10+l*2),u=-Math.PI/2+s*.6;fi(n,o+(l-1)*9+s*4,i-r*26-l*3,Math.cos(u),Math.sin(u),8,2,j.ice3,j.ice1,j.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=m(0,6.283),o=m(1.2,3);I(t,e,.5,Math.cos(r)*o,Math.sin(r)*o,m(.5,2),.4,n%2?j.ice2:j.ice3,2,6,!1)}}te.buho_Q=t=>{if(t.type!=="cast_frost")return!1;const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=(r-o)*64,l=(r+o)*32,s=Math.atan2(l,i);z({type:"custom",layer:"top",dur:.32,x:e,y:n,draw(u,a){const[f,c]=T(e,n,.6);u.globalAlpha=1-a;for(let h=0;h<5;h++){const d=s+(h-2)*.32,p=8+a*28,g=Math.cos(d),y=Math.sin(d);fi(u,f+g*p,c+y*p,g,y,10,3,j.ice3,j.ice1,j.snow)}u.globalAlpha=1}});for(let u=0;u<6;u++)I(e+r*.4,n+o*.4,.6,r*m(.5,1.5)+m(-.4,.4),o*m(.5,1.5)+m(-.4,.4),m(0,.6),.45,j.snow,2,.5,!0);return!0};At.buho_Q=(t,e,n,r,o,i)=>{Wl(e,sh);const l=Math.cos(o),s=Math.sin(o),u=Math.sin(i*28+(e.x+e.y)*3)*1.5,a=n+l*12-s*u,f=r+s*12+l*u;qe(!0);const c=Wt();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,bt(c,n-l*h*6,r-s*h*6,8-h,h<3?j.ice2:j.ice3);c.globalAlpha=1,qe(!1),fi(t,a,f,l,s,24,6,j.ice3,j.ice1,j.snow),Math.random()<.55&&I(e.x,e.y,e.z||.45,m(-.3,.3),m(-.3,.3),m(-.2,.3),.5,Math.random()<.5?j.snow:j.ice1,2,0,!0)};const ah=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],lh=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];te.buho_W=t=>{if(t.type!=="frost")return!1;const e=t.x,n=t.y,r=t.radius||2,o=2.4;z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(s,u){const a=ss(u,.08,.75);ze(e,n,r*Math.min(1,.4+u*6),null,`rgba(150,215,255,${.2*a})`)}}),z({type:"custom",layer:"ground",add:!0,dur:o,x:e,y:n,draw(s,u){const a=ss(u,.1,.75),f=u*.8;s.globalAlpha=a*.9;for(const[d,p]of[[r,40],[r*.82,34]])for(let g=0;g<p;g++){if(g%5===4)continue;const y=g/p*6.283+(d===r?f:-f),[x,M]=T(e+Math.cos(y)*d,n+Math.sin(y)*d);bt(s,x,M,2,j.ice2)}for(let d=0;d<8;d++){const p=d/8*6.283+f,[g,y]=T(e+Math.cos(p)*r*.91,n+Math.sin(p)*r*.91),x=.6+.4*Math.sin(u*20+d*1.7);s.globalAlpha=a*x,Ko(s,ah[d%4],g,y,2,2,{"#":j.ice1})}const[c,h]=T(e,n);s.globalAlpha=a*(.75+.25*Math.sin(u*14)),Ko(s,lh,c,h,3,2,{"#":j.ice2,o:j.amber,v:j.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const u=s/8*6.283+m(-.3,.3),a=r*(.3+.55*Math.sqrt(Ft(s+e*7.3)));i.push({x:e+Math.cos(u)*a,y:n+Math.sin(u)*a,d:.04+s*.035,h:m(16,28),lean:m(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,u)=>s.x+s.y-(u.x+u.y));const l={shat:!1};z({type:"custom",layer:"top",dur:o,x:e,y:n,draw(s,u){const a=u*o,f=Math.max(0,(u-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(a-c.d)/.12));if(h<=0)continue;const[d,p]=T(c.x,c.y),g=c.h*h*(1-f);g<2||(jo(s,d,p,g,8,c.lean,-1),jo(s,d+c.side*6,p+2,g*.6,6,c.lean+c.side*.35,-1))}if(!l.shat&&f>0){l.shat=!0;for(const c of i)for(let h=0;h<2;h++)I(c.x,c.y,.25,m(-1.5,1.5),m(-1.5,1.5),m(1,2.5),.45,h?j.ice2:j.snow,2,8,!0)}}});for(let s=0;s<20;s++){const u=m(0,6.283),a=m(0,r);I(e+Math.cos(u)*a,n+Math.sin(u)*a,m(.6,1.4),m(-.6,.6)+.8,m(-.6,.6)-.4,-.6,m(.6,1),Math.random()<.6?j.snow:j.ice1,2,-.5,!1,.98)}return!0};const Xl=["......####","...#######","##########",".#########","..#.#.#.#."],uh=Xl.map(t=>t.split("").reverse().join(""));te.buho_E=t=>{if(t.type!=="blink")return!1;const e=t.x,n=t.y,r=t.ex||e,o=t.ey||n,i=[];for(let l=0;l<12;l++)i.push({vx:m(-45,45),vy:m(-55,-15),ph:m(0,6.283),L:Math.random()<.4?12:9});z({type:"custom",layer:"top",dur:1,x:e,y:n,draw(l,s){const u=s*1,[a,f]=T(e,n,.6);l.globalAlpha=ss(s,.02,.55);for(const c of i){const h=Math.sin(u*6+c.ph),d=a+c.vx*u*(1-u*.5)+h*6,p=f+c.vy*u+60*u*u,g=Math.PI/2+h*.9;fi(l,d+Math.cos(g)*c.L*.5,p+Math.sin(g)*c.L*.5,Math.cos(g),Math.sin(g),c.L,3,j.ice3,j.ice1,j.snow)}l.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(l,s){for(let u=0;u<10;u++){const a=s*1.4-u*.03;if(a<=0||a>=1)continue;const f=u/9,[c,h]=T(e+(r-e)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=fe(4*(1-a))+1;l.globalAlpha=1-a,l.fillStyle=j.ice1,l.fillRect(fe(c)-d,fe(h),d*2,1),l.fillRect(fe(c),fe(h)-d,1,d*2)}l.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(l,s){const[u,a]=T(r,o,.75),f=8+s*24;l.globalAlpha=(1-s)*.9,Ko(l,Xl,u+f+15,a-s*6,3,3,{"#":j.ice1}),Ko(l,uh,u-f-15,a-s*6,3,3,{"#":j.ice1}),l.globalAlpha=1}});for(let l=0;l<16;l++)I(e+m(-.3,.3),n+m(-.3,.3),m(.3,.9),m(-.8,.8),m(-.8,.8),m(-.3,.4),m(.6,1),j.snow,2,.4,!1,.97);for(let l=0;l<16;l++){const s=m(0,6.283),u=m(1,2.5);I(r,o,.6,Math.cos(s)*u,Math.sin(s)*u,m(0,1),.5,l%3?j.ice1:j.moon2,2,1,!0)}return!0};function Ta(t,e,n,r,o,i,l){t.fillStyle=l;const s=fe(e),u=fe(n),a=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=a*a-f*f,d=-c,p=c;if(h<=0){t.fillRect(s+fe(d),u+fe(f*i),fe(p-d),Math.max(1,fe(2*i)));continue}const g=Math.sqrt(h),y=o-g,x=o+g;y>d&&t.fillRect(s+fe(d),u+fe(f*i),fe(Math.min(p,y)-d),Math.max(1,fe(2*i))),x<p&&t.fillRect(s+fe(x),u+fe(f*i),fe(p-x),Math.max(1,fe(2*i)))}}const Ir=[];function Pa(t,e,n){z({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:e,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let l=0;l<36;l++){const s=l/36*6.283,[u,a]=T(t+Math.cos(s)*i,e+Math.sin(s)*i);bt(r,u,a,l%3?2:3,l%2?j.ice2:j.moon)}r.globalAlpha=1}}),z({type:"custom",layer:"ground",dur:2.2,x:t,y:e,draw(r,o){ze(t,e,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),se(9)}te.buho_R=t=>{if(t.type==="starfall"){const a=Ir.findIndex(f=>Math.abs(f.x-t.x)<.3&&Math.abs(f.y-t.y)<.3);return a>=0?Ir.splice(a,1):Pa(t.x,t.y,t.radius||3.4),!0}if(t.type!=="cast_stars")return!1;const e=t.x,n=t.y,r=t.radius||3.4,o=.85,i=1.75,l={x:e,y:n,t:0};Ir.push(l),Ir.length>6&&Ir.shift(),z({type:"custom",layer:"ground",add:!0,dur:i,x:e,y:n,draw(a,f){const c=f*i,h=Math.min(1,c/.15)*(c>o?Math.max(0,1-(c-o)/.6):1);a.globalAlpha=h;for(const[g,y,x]of[[r,56,1],[r*.9,48,-1]])for(let M=0;M<y;M++){if((M+(x>0?0:2))%4===3)continue;const v=M/y*6.283+c*.7*x,[_,S]=T(e+Math.cos(v)*g,n+Math.sin(v)*g);bt(a,_,S,2,x>0?j.moon2:j.ice2)}for(let g=0;g<12;g++){const y=g/12*6.283-c*.35,[x,M]=T(e+Math.cos(y)*r*.62,n+Math.sin(y)*r*.62),[v,_]=T(e+Math.cos(y)*r*.82,n+Math.sin(y)*r*.82);for(let S=0;S<=4;S++)bt(a,x+(v-x)*S/4,M+(_-M)*S/4,2,j.moon)}const[d,p]=T(e,n);if(Ta(a,d,p,30,12,.5,j.moon),c>.45){const g=Math.min(1,(c-.45)/.1);a.globalAlpha=h*g,bt(a,d-26,p-3,4,j.amber),bt(a,d+26,p-3,4,j.amber)}a.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:i,x:e,y:n,draw(a,f){const c=f*i,h=Math.min(1,c/.2)*(c>o?Math.max(0,1-(c-o)/.5):1),[d,p]=T(e,n,4.4),g=a.createRadialGradient(d,p,4,d,p,60);g.addColorStop(0,`rgba(200,190,255,${.45*h})`),g.addColorStop(1,"rgba(120,110,220,0)"),a.fillStyle=g,a.fillRect(fe(d)-60,fe(p)-60,120,120),a.globalAlpha=h,Ta(a,d,p,20,9,1,j.moon),a.globalAlpha=1}});const s=[];for(let a=0;a<14;a++){const f=m(0,6.283),c=r*.85*Math.sqrt(Math.random());s.push({x:e+Math.cos(f)*c,y:n+Math.sin(f)*c,fall:o-.12+a*.025,ap:.08+a*.025,L:m(18,28),hit:!1})}s.sort((a,f)=>a.x+a.y-(f.x+f.y));const u={boom:!1};z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(a,f){const c=f*i;for(const h of s){const d=(c-h.fall)/.12;if(d>=1){if(!h.hit){h.hit=!0;for(let v=0;v<3;v++)I(h.x,h.y,.1,m(-1.8,1.8),m(-1.8,1.8),m(1.5,3),.45,v?j.ice2:j.snow,2,10,!0)}const M=(c-h.fall-.12)/.2;if(M<1){const[v,_]=T(h.x,h.y),S=fe(10*(1-M))+2;a.globalAlpha=1-M,a.fillStyle=j.snow,a.fillRect(fe(v)-S,fe(_)-1,S*2,2),a.fillRect(fe(v)-1,fe(_)-S/2,2,S),a.globalAlpha=1}continue}const p=Math.min(1,Math.max(0,(c-h.ap)/.25));if(p<=0)continue;const g=d>0?3.6*(1-d*d):3.6+Math.sin(c*9+h.x)*.03,[y,x]=T(h.x,h.y,g);a.globalAlpha=p,d>0&&(a.fillStyle="rgba(226,247,255,0.5)",a.fillRect(fe(y)-1,fe(x)-h.L-30,2,28)),jo(a,y,x-h.L,h.L,7,0,1),a.globalAlpha=1}!u.boom&&c>=o&&(u.boom=!0,l.t===0&&(l.t=1,Pa(e,n,r)))}});for(let a=0;a<10;a++){const f=m(0,6.283),c=m(0,r);I(e+Math.cos(f)*c,n+Math.sin(f)*c,.05,0,0,m(1,2),.7,a%2?j.moon2:j.ice1,2,0,!0)}return!0};function Vl(t,e,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:m(-9,9),oy:m(-3,4),h:m(8,n?16:12),lean:m(-.35,.35)});z({type:"custom",layer:"top",dur:.38,x:t,y:e,draw(i,l){const[s,u]=T(t,e,.15),a=Math.min(1,l*7);i.globalAlpha=l>.6?(1-l)/.4:1;for(const f of r)jo(i,s+f.ox,u+f.oy,f.h*a,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const l=m(0,6.283),s=m(.8,2);I(t,e,.4,Math.cos(l)*s,Math.sin(l)*s,m(.5,1.8),.35,i%2?j.snow:j.ice2,2,5,!0)}}const Yl=[];for(let t=-4;t<=4;t++)for(let e=-4;e<=4;e++){const n=Math.hypot(e,t);n<=4.4&&Math.hypot(e-1.6,t)>3.4&&Yl.push([e,t,n>3.6?1:0])}At.buho_A=(t,e,n,r,o,i)=>{Wl(e,(h,d)=>Vl(h,d,!1));const l=Math.cos(o),s=Math.sin(o);qe(!0);const u=Wt();for(let h=1;h<=4;h++)u.globalAlpha=.45-h*.09,bt(u,n-l*h*5,r-s*h*5,6-h,j.moon2);u.globalAlpha=1,qe(!1);const a=i*13,f=Math.cos(a),c=Math.sin(a);for(const[h,d,p]of Yl)bt(t,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,p?j.ice3:j.ice1);bt(t,n+-3*f*2,r+-3*c*2,2,j.snow),Math.random()<.45&&I(e.x,e.y,e.z||.45,0,0,-.2,.35,j.ice1,2,0,!0)};ut.buho=t=>Vl(t.x,t.y,!!t.big);let De=0,Le=0;function Pt(t,e,n=0){De=(t-e)*ee.HW+ee.OX,Le=(t+e)*ee.HH-n*ee.ZK}function xt(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const ql=t=>t<0?0:t>1?1:t,We=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],fh="#3a2420",Qs="#2a1410",Js=t=>t>=5?fh:We[t<0?0:t|0];function Zo(t,e,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let l=0;l<i;l++){const s=(l+.5)/i*2-1,u=r*Math.sqrt(1-s*s);t.fillRect(Math.round(e-u/2),Math.round(n-o/2+l*3),Math.max(1,Math.round(u)),3)}}te.dragon_Q=t=>{const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=t.range||3.4,l=t.angle||.85,s=Math.atan2(o,r),u=6,a=6,f=new Float32Array(u*(a+1)*2);for(let h=0;h<u;h++){let d=s+(h/(u-1)-.5)*l*1.5;const p=i*m(.7,1);for(let g=0;g<=a;g++){const y=.35+(p-.35)*g/a;d+=m(-.13,.13);const x=(h*(a+1)+g)*2;f[x]=e+Math.cos(d)*y,f[x+1]=n+Math.sin(d)*y}}const c=(h,d,p)=>{const g=ql(d/.25)*a;for(let y=0;y<u;y++)for(let x=0;x<a&&x<g;x++){const M=Math.min(1,g-x),v=(y*(a+1)+x)*2;Pt(f[v],f[v+1]);const _=De,S=Le;Pt(f[v+2],f[v+3]);const R=_+(De-_)*M,F=S+(Le-S)*M,O=Math.max(1,Math.round(Math.hypot(R-_,F-S)/3)),k=p*(1-x/a*.5);for(let U=0;U<=O;U++)xt(h,_+(R-_)*U/O,S+(F-S)*U/O,k)}};z({type:"custom",layer:"ground",dur:1.8,x:e,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=Qs,c(h,d*1.8,6)}}),z({type:"custom",layer:"ground",add:!0,dur:1.4,x:e,y:n,draw(h,d){const p=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Js(p/.3),c(h,p,3)}}),z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(h,d){for(let p=0;p<4;p++){const g=d*1.5-p*.13;if(g<=0||g>=1)continue;const y=.4+(i-.4)*g,x=l*(.45+.55*g),M=5+Math.round(y*3);h.globalAlpha=1-g,h.fillStyle=We[Math.min(3,p+(g*2|0))];for(let v=0;v<=M;v++){const _=s+(v/M-.5)*2*x,S=y*(.9+.1*Math.sin(v*2.3+p*1.7));Pt(e+Math.cos(_)*S,n+Math.sin(_)*S,.35+.12*Math.sin(v*1.3+d*18)),xt(h,De,Le,8-p-g*4)}}}});for(let h=0;h<32;h++){const d=s+m(-l,l)*.9,p=m(.3,1)*i*2.4;I(e+r*.45,n+o*.45,.45,Math.cos(d)*p,Math.sin(d)*p,m(1.2,3),m(.7,1.05),We[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+m(-l,l),p=m(.6,1)*i*3.2;I(e+r*.45,n+o*.45,.5,Math.cos(d)*p,Math.sin(d)*p,m(.4,1.4),.35,We[0],2,1,!0,.98)}se(3)};const ch=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],as=[],Kl=[],jl=[];ch.forEach((t,e)=>{for(let n=0;n<t.length;n++){const r="Ohrd".indexOf(t[n]);r>=0&&(as.push(n-2),Kl.push(e),jl.push(r))}});const Zl=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function hh(t,e,n,r,o){for(let i=0;i<4;i++){t.fillStyle=o?i===0?"#ffd84a":We[0]:Zl[i];for(let l=0;l<as.length;l++)jl[l]===i&&t.fillRect(Math.round(e+as[l]*r),Math.round(n+Kl[l]*r),r,r)}}te.dragon_W=t=>{const e=t.dur||3,n=8,r=6,o=(i,l)=>{for(let s=0;s<14;s++)I(i+m(-.3,.3),l+m(-.3,.3),m(.2,.8),m(-1.8,1.8),m(-1.8,1.8),m(1.5,3),m(.5,.8),Zl[2+(s&1)],4,9,!1,.95)};z({type:"custom",layer:"top",dur:e,x:t.x,y:t.y,uid:t.uid,lx:t.x,ly:t.y,draw(i,l,s){const u=Ve(s.uid),a=l*e;if(!u||u.dead||b.mode!=="guest"&&a>.15&&!(u.shield>0)||l>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=u.x,s.ly=u.y;const c=u.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let p=0;p<n+r;p++){const g=p<n?0:1,M=(g?p-n:p)/(g?r:n)*Math.PI*2+(g?-a*1.1+.3:a*.8),v=Math.sin(M)>0;if(d===0===v)continue;const _=p*.035,S=ql((a-_)/.08);if(S<=0)continue;const R=(g?22:30)*c,F=(g?8:11)*c;Pt(u.x,u.y,g?.62:.22),i.globalAlpha=v?1:.4,hh(i,De+Math.cos(M)*R,Le+Math.sin(M)*F-10*(1-S)-6*c,h,a-_<.12)}i.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.28,x:t.x,y:t.y,draw(i,l){Pt(t.x,t.y,.55);const s=6+l*26;i.globalAlpha=1-l,i.fillStyle=We[1];for(let u=2;u<s;u+=3)xt(i,De+u,Le+u*.7,4),xt(i,De-u,Le+u*.7,4),xt(i,De+u,Le-u*.7,4),xt(i,De-u,Le-u*.7,4);i.fillStyle=We[0],xt(i,De,Le,8*(1-l)+2)}});for(let i=0;i<10;i++){const l=i/10*6.28;I(t.x+Math.cos(l)*.4,t.y+Math.sin(l)*.4,.05,0,0,m(.6,1.2),m(.5,.8),We[1+i%3],2,-1,!0,.9)}};te.dragon_E=t=>{const e=t.x,n=t.y,r=t.dur||.3,o=t.ex??e+(t.ux||0)*(t.range||0),i=t.ey??n+(t.uy||0)*(t.range||0),l=o-e,s=i-n,u=Math.hypot(l,s)||.01,a=l/u,f=s/u,c=Math.min(16,Math.max(4,Math.round(u/.28))),h=new Float32Array(c*4);for(let p=0;p<c;p++){const g=(p+.5)/c,y=m(-.16,.16);h[p*4]=e+l*g-f*y,h[p*4+1]=n+s*g+a*y,h[p*4+2]=m(18,30),h[p*4+3]=g*r}const d=r+1.9;z({type:"custom",layer:"ground",dur:d,x:e,y:n,draw(p,g){const y=g*d;for(let x=0;x<c;x++){const M=y-h[x*4+3];if(M<0)continue;const v=M>1.5?Math.max(0,1-(M-1.5)/.4):1;if(v<=0)continue;Pt(h[x*4],h[x*4+1]);const _=h[x*4+2];p.globalAlpha=v*.8,p.fillStyle=Qs,Zo(p,De,Le+1,_+6);const S=M/.3|0;p.globalAlpha=v,p.fillStyle=Js(S),Zo(p,De,Le,_*(S<5?.8:.6)),S<4&&Ft(x*7+(y*12|0))>.72&&(p.fillStyle=We[0],p.fillRect(Math.round(De+(Ft(x*3+(y*12|0))-.5)*_*.5),Math.round(Le-2),2,2))}p.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:r+.12,x:e,y:n,uid:t.uid,n:0,end:!1,draw(p,g,y){const x=Ve(y.uid),M=x?x.x:o,v=x?x.y:i;Pt(M,v,.4);const _=De,S=Le;Pt(M+a,v+f,.4);let R=De-_,F=Le-S;const O=Math.hypot(R,F)||1;R/=O,F/=O;const k=1-g*.6;for(let U=0;U<9;U++){const B=(10+U*5*(.8+Math.random()*.4))*k;p.globalAlpha=1-U/10,p.fillStyle=We[Math.min(4,U>>1)],xt(p,_-R*B+(Math.random()-.5)*3,S-F*B+(Math.random()-.5)*3,(10-U)*k)}if(y.n<22&&g<.9){for(let U=0;U<2;U++){const B=m(-2.5,2.5);I(M,v,.35,-a*2-f*B,-f*2+a*B,m(.5,1.6),.5,We[1+(Math.random()*3|0)],3,4,!0)}y.n+=2}if(!y.end&&g>.85){y.end=!0;for(let U=0;U<8;U++){const B=U/8*6.28;I(M,v,.1,Math.cos(B)*2.5+a,Math.sin(B)*2.5+f,.4,.6,U&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let p=0;p<8;p++){const g=p/8*6.28;I(e,n,.1,Math.cos(g)*3,Math.sin(g)*3,.3,.5,p&1?"#6a5a56":"#40322e",5,0,!1,.9)}se(4)};const zo=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],Oo=[],Ql=[],Jl=[];zo.forEach((t,e)=>{for(let n=0;n<t.length;n++){const r=t[n];if(r===".")continue;const o=(i,l)=>l<0||l>=zo.length||i<0||i>=t.length||zo[l][i]===".";Oo.push(n-9),Ql.push(e),Jl.push(r==="o"?2:o(n-1,e)||o(n+1,e)||o(n,e-1)||o(n,e+1)?1:0)}});const dh=["#ff7a20","#ffd84a","#fffbe0"];te.dragon_R=t=>{const e=t.x,n=t.y,r=t.radius||3.6,o=r*.82,i=8,l=Math.random()*6.28,s=new Float32Array(i),u=new Float32Array(i);for(let a=0;a<i;a++){const f=l+a/i*6.28;s[a]=e+Math.cos(f)*o,u[a]=n+Math.sin(f)*o}z({type:"custom",layer:"ground",dur:2.6,x:e,y:n,draw(a,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const p=c-d*.05;p<0||(Pt(s[d],u[d]),a.globalAlpha=h*.85,a.fillStyle=Qs,Zo(a,De,Le+1,46),a.globalAlpha=h,a.fillStyle=Js(p/.45),Zo(a,De,Le,26))}a.globalAlpha=1}}),z({type:"custom",layer:"ground",add:!0,dur:.4,x:e,y:n,draw(a,f){const c=r*(1-(1-f)*(1-f)),h=36;a.globalAlpha=1-f;for(let d=0;d<h;d++){const p=d/h*6.28;Pt(e+Math.cos(p)*c,n+Math.sin(p)*c),a.fillStyle=We[d&1],xt(a,De,Le,7*(1-f)+2)}}}),z({type:"custom",layer:"top",add:!0,dur:1.15,x:e,y:n,fired:0,draw(a,f,c){const h=f*1.15;for(let d=0;d<i;d++){const p=h-d*.05;if(p<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let _=0;_<5;_++)I(s[d],u[d],.3,m(-.8,.8)+(s[d]-e)*.4,m(-.8,.8)+(u[d]-n)*.4,m(3,5),m(.6,.9),We[_%4],3,6,!0,.97)}const g=p<.12?p/.12:p<.4?1:Math.max(0,1-(p-.4)/.35);if(g<=0)continue;const y=95*g;Pt(s[d],u[d]);const x=De,M=Le;a.globalAlpha=Math.min(1,g*1.5);const v=h*24|0;for(let _=0;_<y;_+=4){const S=_/y,R=16*(1-S*.75)+(Ft(d*31+_+v)-.5)*4,F=(Ft(d*17+_*3+v)-.5)*7*S;if(a.fillStyle=S<.25?We[1]:S<.6?We[2]:We[3],a.fillRect(Math.round(x+F-R/2),Math.round(M-_-4),Math.round(R),4),S<.7){a.fillStyle=We[0];const O=R*.4;a.fillRect(Math.round(x+F-O/2),Math.round(M-_-4),Math.max(2,Math.round(O)),4)}}}}}),z({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:e,y:n,draw(a,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;a.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,Pt(e,n,h);const p=De,g=Le-zo.length*d*.5;for(let y=0;y<3;y++){a.fillStyle=dh[y];for(let x=0;x<Oo.length;x++){if(Jl[x]!==y)continue;const M=Math.abs(Oo[x]),v=M>=4?Math.round(Math.sin(c*14)*(M-3)*.45):0;a.fillRect(Math.round(p+Oo[x]*d-d/2),Math.round(g+(Ql[x]+v)*d),d,d)}}}}),se(9)};ut.dragon=t=>{const e=t.x,n=t.y,r=!!t.big;for(let o=0;o<(r?8:5);o++)I(e,n,.45,m(-1.3,1.3),m(-1.3,1.3),m(1.6,3.2),m(.3,.5),o<3?We[0]:We[1],2,10,!0,.97);I(e,n,.45,m(-.5,.5),m(-.5,.5),1,.45,We[2],3,8,!0,.95),z({type:"custom",layer:"top",add:!0,dur:.2,x:e,y:n,draw(o,i){Pt(e,n,.45);const l=4+i*(r?16:11),s=Math.max(2,Math.round(l/3));o.globalAlpha=1-i,o.fillStyle=i<.4?We[1]:We[2];for(let u=0;u<s;u++){const a=u/s,f=l*(1-a),c=l*a*.7;xt(o,De+f,Le+c,3),xt(o,De-c/.7,Le+f*.7,3),xt(o,De-f,Le-c,3),xt(o,De+c/.7,Le-f*.7,3)}i<.3&&(o.fillStyle=We[0],xt(o,De,Le,6))}})};const it="#fff2d6",zt="#e2b878",_r="#9a6232",qn="#4e2e16",co="#e8643a",no="#ffcc66",ea="#a07a48",mt=Math.round,_n=Math.PI*2;function je(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(mt(e),mt(n),r,o)}function Yt(t,e,n,r,o,i,l){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=l;for(let u=0;u<=s;u++)t.fillRect(mt(e+(r-e)*u/s-i/2),mt(n+(o-n)*u/s-i/2),i,i)}function Sr(t,e,n,r,o,i=co){const l=Math.max(3,Math.ceil(Math.hypot(r-e,o-n)/1.5));for(let s=0;s<=l;s++){const u=s/l,a=u<.35?3:u<.8?2:1;t.fillStyle=u<.3?_r:u>.82?i:it,t.fillRect(mt(e+(r-e)*u-a/2),mt(n+(o-n)*u-a/2),a,a)}}function pi(t,e,n,r,o){t.fillStyle=o;for(let i=-r;i<=r;i+=2){const l=mt(Math.sqrt(Math.max(0,r*r-i*i)));t.fillRect(mt(e-l),mt(n+i),l*2,2)}}function eu(t,e){const n=(t-e)*ee.HW,r=(t+e)*ee.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const tu=t=>{const e=Ve(t);return e&&!e.dead&&!rt(e)?e:null},mh=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},ph=t=>(t=Math.min(1,Math.max(0,t))-1,1+2.9*t*t*t+1.9*t*t);At.erizo_A=(t,e,n,r,o)=>{t.translate(mt(n),mt(r)),t.rotate(o),je(t,-15,-2,16,4,qn),je(t,-14,-1,14,2,zt),je(t,-9,-1,3,2,it),je(t,-4,-1,3,2,it),je(t,0,-2,3,4,qn),je(t,3,-1,3,2,co),je(t,6,0,2,1,no),je(t,-17,-4,5,2,it),je(t,-17,2,5,2,it),Math.random()<.3&&I(e.x,e.y,e.z||.45,0,0,-.3,.25,zt,2,0,!1)};ut.erizo=t=>{const e=Array.from({length:t.big?4:3},()=>({a:m(0,_n),l:m(8,12)}));z({type:"custom",layer:"top",dur:.4,x:t.x,y:t.y,draw(n,r){const[o,i]=T(t.x,t.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const l of e)Sr(n,o+Math.cos(l.a)*l.l,i+Math.sin(l.a)*l.l*.8,o,i)}});for(let n=0;n<5;n++)I(t.x,t.y,.45,m(-2,2),m(-2,2),m(.5,2),.3,n%2?zt:it,2,6,!1)};At.erizo_Q=(t,e,n,r,o,i)=>{const s=e.z||.45;t.translate(mt(n),mt(r)),t.rotate(o),je(t,-31,-3,32,6,qn);for(let a=0;a<30;a+=6)je(t,-30+a,-2,3,4,it),je(t,-30+a+3,-2,3,4,_r);je(t,0,-3,4,6,qn),je(t,4,-2,4,4,co),je(t,8,-1,3,2,no);for(let a=0;a<3;a++)je(t,-36+a*3,-6+a,4,2,it),je(t,-36+a*3,4-a,4,2,it);qe(!0);const u=Wt();u.globalAlpha=.55,u.fillStyle="#ffe2a8",u.fillRect(-64,-7,28,1),u.fillRect(-74,6,36,1),u.fillRect(-56,0,20,1),u.globalAlpha=1,u.fillStyle=no;for(let a=0;a<5;a++)u.fillRect(-6-a*6,mt(Math.sin(i*38+a*1.3)*5)-1,2,2);qe(!1),Math.random()<.5&&I(e.x,e.y,s,m(-.4,.4),m(-.4,.4),.3,.35,Math.random()<.5?it:zt,2,3,!1)};te.erizo_Q=t=>{if(t.type!=="cast_arrow")return;const e=t.ux||0,n=t.uy||0,[r,o]=eu(e,n),i=-o,l=r;z({type:"custom",layer:"top",dur:.32,x:t.x,y:t.y,draw(u,a){const[f,c]=T(t.x+e*.35,t.y+n*.35,.45),h=a*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),p=f+r*d,g=c+o*d,y=f+i*15-r*5,x=c+l*15-o*5,M=f-i*15-r*5,v=c-l*15-o*5;u.globalAlpha=1-a,Yt(u,f+r*3,c+o*3,y,x,3,_r),Yt(u,f+r*3,c+o*3,M,v,3,_r),Yt(u,y,x,p,g,2,it),Yt(u,M,v,p,g,2,it)}}),z({type:"custom",layer:"top",add:!0,dur:.14,x:t.x,y:t.y,draw(u,a){const[f,c]=T(t.x+e*.5,t.y+n*.5,.45),h=24*(1-a);for(const d of[0,.45,-.45]){const p=Math.cos(d),g=Math.sin(d),y=r*p-o*g,x=r*g+o*p,M=d?h*.55:h;Yt(u,f,c,f+y*M,c+x*M,3,no),Yt(u,f,c,f+y*M*.5,c+x*M*.5,1,"#ffffff")}}});for(let u=0;u<6;u++)I(t.x-e*.2,t.y-n*.2,.4,-e*m(1,2.5)+m(-.5,.5),-n*m(1,2.5)+m(-.5,.5),m(.3,1),.45,u%2?zt:ea,3,2,!1,.9);const s=Math.atan2(n,e);for(let u=0;u<7;u++){const a=s+m(-.25,.25),f=m(5,9);I(t.x+e*.5,t.y+n*.5,.45,Math.cos(a)*f,Math.sin(a)*f,m(0,.6),.22,u%2?no:it,2,0,!0,.86)}se(1.5)};te.erizo_W=t=>{const e=t.dur||2.5,n=18,r=o=>(i,l,s)=>{const u=tu(t.uid);if(!u)return;const a=l*s.dur,f=a<.2?ph(a/.2):a>e?Math.max(0,1-(a-e)/.25):1;if(f<=0)return;const[c,h]=T(u.x,u.y,.4);for(let d=0;d<n;d++){const p=d/n*_n+.17,g=Math.sin(p);if(g>=0!==o)continue;const y=a<e?Math.sin(b.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,M=c+Math.cos(p)*16,v=h+g*12,_=M+Math.cos(p)*x+y,S=v+g*x*.75-x*.3;Sr(i,M,v,_,S,(b.T*7+d*.37)%1<.12?"#ffffff":co)}};z({type:"custom",layer:"ground",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!1)}),z({type:"custom",layer:"top",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!0)}),z({type:"custom",layer:"ground",dur:.35,x:t.x,y:t.y,draw(o,i){const l=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const u=s/20*_n,[a,f]=T(t.x+Math.cos(u)*l,t.y+Math.sin(u)*l),[c,h]=T(t.x+Math.cos(u)*(l+.22),t.y+Math.sin(u)*(l+.22));Yt(o,a,f,c,h,2,s%2?zt:_r)}}});for(let o=0;o<14;o++){const i=o/14*_n,l=m(2,3.5);I(t.x,t.y,.45,Math.cos(i)*l,Math.sin(i)*l,m(1.5,3),.5,o%3?it:zt,2,8,!1,.92)}se(2)};te.erizo_E=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=Math.max(.12,t.dur||.25),o=e-t.x,i=n-t.y,l=Math.hypot(o,i)||1,s=-i/l,u=o/l,[a,f]=eu(o,i),c=a>=0?1:-1;z({type:"custom",layer:"top",dur:r+.12,x:t.x,y:t.y,draw(p,g,y){const x=g*y.dur,M=Math.min(1,x/r);let v=t.x+o*M,_=t.y+i*M;const S=Ve(t.uid);if(S){if(S.dead||rt(S))return;v=S.x,_=S.y}const[R,F]=T(v,_,.32),O=16,k=x*36*c;p.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let U=0;U<3;U++){const B=(U-1)*9;Yt(p,R-a*(O+4)-f*B,F-f*(O+4)+a*B,R-a*(O+18+U*5)-f*B,F-f*(O+18+U*5)+a*B,2,zt)}pi(p,R,F,O+1,qn),pi(p,R,F,O-1,_r),pi(p,R-4,F-4,O-9,zt);for(let U=0;U<10;U++){const B=k+U*_n/10,H=Math.cos(B),Y=Math.sin(B);Sr(p,R+H*(O-3),F+Y*(O-3),R+H*(O+10),F+Y*(O+10))}}});const h=Math.max(4,Math.min(10,mt(l*2.2))),d=Array.from({length:h},(p,g)=>({k:(g+.5)/h,o:m(-.28,.28),lean:m(-6,6),h:m(9,14)}));z({type:"custom",layer:"ground",dur:r+1.8,x:t.x,y:t.y,draw(p,g,y){const x=g*y.dur,M=Math.min(1,(y.dur-x)/.5);for(const v of d){if(x<v.k*r)continue;const _=Math.min(1,(x-v.k*r)/.08),[S,R]=T(t.x+o*v.k+s*v.o,t.y+i*v.k+u*v.o);p.globalAlpha=M*.45,je(p,S-4,R-1,8,3,qn),p.globalAlpha=M,Sr(p,S+v.lean*_,R-v.h*_,S,R)}}});for(let p=0;p<12;p++){const g=Math.random();I(t.x+o*g+m(-.2,.2),t.y+i*g+m(-.2,.2),.1,m(-.6,.6),m(-.6,.6),m(.5,1.4),m(.4,.7),p%2?zt:ea,3,4,!1,.9)}for(let p=0;p<6;p++){const g=p%2?1:-1;I(t.x,t.y,.35,s*g*m(2,4),u*g*m(2,4),m(1.5,3),.45,it,2,8,!1,.92)}se(2)};te.erizo_R=t=>{if(t.type!=="cast_arrows")return;const e=t.radius||3,n=mh(t),r=n&&n.dur||3,o=.16,i=36,l=Array.from({length:i},(u,a)=>{const f=Math.random()*_n,c=Math.sqrt(Math.random())*e*.95;return{x:t.x+Math.cos(f)*c,y:t.y+Math.sin(f)*c,t0:.12+a/i*(r-.5)+m(0,.08),lean:m(-7,7),h:m(10,15),hit:!1}});z({type:"custom",layer:"ground",dur:r+.5,x:t.x,y:t.y,draw(u,a,f){const c=a*f.dur,h=Math.min(1,(f.dur-c)/.5),d=e*(c<.3?1.5-.5*(c/.3):1);u.globalAlpha=.85*h;for(let p=0;p<8;p++){const g=p*_n/8+c*.4;for(const y of[-.09,.09]){const[x,M]=T(t.x+Math.cos(g+y)*d,t.y+Math.sin(g+y)*d),[v,_]=T(t.x+Math.cos(g)*(d-.35),t.y+Math.sin(g)*(d-.35));Yt(u,x,M,v,_,3,co)}}u.globalAlpha=.45*h;for(let p=0;p<48;p++){const g=p/48*_n-c*.2,[y,x]=T(t.x+Math.cos(g)*e,t.y+Math.sin(g)*e);je(u,y-1,x-1,2,2,zt)}for(const p of l){if(c<p.t0+o)continue;const[g,y]=T(p.x,p.y);u.globalAlpha=.4*h,je(u,g-4,y-1,8,3,qn),u.globalAlpha=h,Sr(u,g+p.lean,y-p.h,g,y)}}}),z({type:"custom",layer:"top",dur:r+.2,x:t.x,y:t.y,draw(u,a,f){const c=a*f.dur;for(const h of l){const d=(c-h.t0)/o;if(d<0)continue;if(d>=1){h.hit||(h.hit=!0,I(h.x,h.y,.05,m(-.6,.6),m(-.6,.6),m(.8,1.6),.4,Math.random()<.5?zt:ea,2,7,!1));continue}const[p,g]=T(h.x,h.y,3.6*(1-d)),y=h.lean*1.4;u.globalAlpha=.35,Yt(u,p+y*2.4,g-52,p+y,g-22,1,it),u.globalAlpha=1,Sr(u,p+y,g-22,p,g)}}});const s=tu(t.uid);if(s)for(let u=0;u<10;u++)I(s.x,s.y,.6,m(-.4,.4),m(-.4,.4),m(7,10),.45,u%2?it:zt,2,0,!1,1);se(2)};let Ee=0,Ue=0;function ct(t,e,n=0){Ee=(t-e)*ee.HW+ee.OX,Ue=(t+e)*ee.HH-n*ee.ZK}function Gt(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const ta=t=>t<0?0:t>1?1:t,nu=t=>1-(1-t)*(1-t),Te=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],lt=["#ffe0f4","#ff9ad8","#e060b0"],An=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],ot=["#ffffff","#fff2a0","#ffd24a"];function na(t,e,n,r){const o=[],i=[],l=[],s=[],u=t.length,a=(f,c)=>c<0||c>=u||f<0||f>=t[c].length||e.indexOf(t[c][f])<0;return t.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=e.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),l.push(d),s.push(a(h-1,c)||a(h+1,c)||a(h,c-1)||a(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(l),B:Uint8Array.from(s),n:o.length,h:u}}const gi=na(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function ru(t,e,n,r){for(let o=0;o<gi.n;o++)t.fillRect(Math.round(e+gi.X[o]*r-r/2),Math.round(n+gi.Y[o]*r-r/2),r,r)}function Gn(t,e,n,r){Gt(t,e,n,3);for(let o=2;o<=r;o+=2)Gt(t,e+o,n+o,2),Gt(t,e-o,n+o,2),Gt(t,e+o,n-o,2),Gt(t,e-o,n-o,2)}function ls(t,e,n,r,o,i,l){for(let s=0;s<4;s++){const u=o+s*Math.PI/2,a=u+Math.PI/2,f=Math.cos(u)*r,c=Math.sin(u)*r*i,h=Math.cos(a)*r,d=Math.sin(a)*r*i,p=Math.max(2,Math.round(r*1.41/(l+1)));for(let g=0;g<p;g++){const y=g/p;Gt(t,e+f+(h-f)*y,n+c+(d-c)*y,l)}}}function Ra(t,e,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));t.fillRect(Math.round(e-i/2),Math.round(n+o),Math.round(i),2)}}const Er=new Map;function ou(t,e,n=!1){if(t.id==null)return;let r=Er.get(t.id);if(!r){Er.size>200&&Er.clear(),r={x:t.x,y:t.y,life:9,tx:0,ty:0,tgt:!1,crit:n},Er.set(t.id,r);const o=t.id;z({type:"custom",layer:"ground",dur:(t.life||3)+.6,x:t.x,y:t.y,draw(i,l,s){if(s.fin)return;const u=b.game;if(u){for(const a of u.projs)if(a.id===o)return;s.fin=!0,s.dur=s.t,Er.delete(o),e(r)}}})}r.x=t.x,r.y=t.y,r.life=t.life==null?9:t.life,t.homing&&!t.homing.dead&&(r.tgt=!0,r.tx=t.homing.x,r.ty=t.homing.y)}te.gato_Q=t=>{const e=t.x+(t.ux||0)*.5,n=t.y+(t.uy||0)*.5;z({type:"custom",layer:"top",add:!0,dur:.32,x:e,y:n,draw(r,o){ct(e,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=Te[1],ls(r,Ee,Ue,i,o*Math.PI,.75,3),r.fillStyle=lt[1],ls(r,Ee,Ue,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=Te[0],Gt(r,Ee,Ue,4)}});for(let r=0;r<6;r++)I(e,n,.45,m(-1,1),m(-1,1),m(.3,1),.4,r&1?lt[1]:Te[1],2,0,!0)};At.gato_Q=(t,e,n,r,o,i)=>{ou(e,gh);const l=-Math.cos(o),s=-Math.sin(o),u=-s,a=l;for(let h=1;h<16;h++){const d=8+h*3.2,p=Math.sin(h*.7-i*22)*(2+h*.35);t.globalAlpha=1-h/16,t.fillStyle=h&1?lt[1]:lt[2],t.fillRect(Math.round(n+l*d+u*p),Math.round(r+s*d+a*p),2,2)}t.globalAlpha=1,qe(!0);const f=Wt();f.fillStyle=Te[3],f.globalAlpha=.16,Ra(f,n,r,20),f.globalAlpha=.22,Ra(f,n,r,13),f.globalAlpha=1,qe(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const p=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(p>9)continue;let g;p>6?g=Te[4]:d===-2&&h===-2?g=Te[0]:g=((d*.8+h+c)%4+4)%4<1.3?Te[1]:Te[2],t.fillStyle=g,t.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function gh(t){const e=t.x,n=t.y;if(t.life<.07){for(let o=0;o<6;o++)I(e,n,.45,m(-.6,.6),m(-.6,.6),m(0,.6),.4,o&1?lt[1]:Te[2],2,1,!0);return}const r=Math.random()*6.28;z({type:"custom",layer:"top",add:!0,dur:.5,x:e,y:n,draw(o,i){ct(e,n,.45);const l=Math.round(14*ta(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const u=r+s/5*6.28;for(let a=0;a<l;a++){const f=4+a*3,c=u+a*.3;o.fillStyle=a+s&1?lt[1]:Te[1],o.fillRect(Math.round(Ee+Math.cos(c)*f),Math.round(Ue+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=Te[0],Gt(o,Ee,Ue,10*(1-i*3)))}});for(let o=0;o<10;o++)I(e,n,.45,m(-1.4,1.4),m(-1.4,1.4),m(.5,1.5),m(.4,.6),o&1?lt[0]:Te[1],2,2,!0);se(2)}const nn=na(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);te.gato_W=t=>{const e=t.x,n=t.y,r=t.radius||2.8,o=[],i=(u,a,f,c)=>{for(let h=0;h<u;h++){const d=c+h/u*6.28,p=Math.cos(d),g=Math.sin(d),y=Math.atan2(p+g,p-g),x=y+Math.PI/2,M=Math.cos(x),v=Math.sin(x),_=new Float32Array(nn.n*2);for(let S=0;S<nn.n;S++)_[S*2]=nn.X[S]*M-nn.Y[S]*v,_[S*2+1]=nn.X[S]*v+nn.Y[S]*M;o.push({x:e+p*a,y:n+g*a,t:f+h*.014,c:_})}},l=Math.random()*6.28;i(5,r*.38,.03,l),i(9,r*.78,.14,l+.35),z({type:"custom",layer:"ground",dur:1.6,x:e,y:n,draw(u,a){const f=a*1.6,c=a>.55?(1-a)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const p=d<.08?1.4-d/.08*.4:1,g=3*p,y=Math.max(2,Math.round(g*.6)),x=Math.round(g);ct(h.x,h.y),u.globalAlpha=c*.9;for(let M=0;M<3;M++){u.fillStyle=M===0?An[3]:M===1?An[1]:An[0];for(let v=0;v<nn.n;v++){const _=nn.B[v]===1,S=nn.Y[v]<0;(M===0?!_:M===1?_||S:_||!S)||u.fillRect(Math.round(Ee+h.c[v*2]*g-x/2),Math.round(Ue+h.c[v*2+1]*g*.5-y/2),x,y)}}}u.globalAlpha=1}});const s=Math.random()*6.28;z({type:"custom",layer:"ground",add:!0,dur:.55,x:e,y:n,draw(u,a){const f=r*nu(ta(a*1.8));u.globalAlpha=1-a;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),p=Math.sin(h);for(let g=.25;g<f;g+=.16)ct(e+d*g,n+p*g),u.fillStyle=g<f*.5?An[1]:An[2],Gt(u,Ee,Ue,4-g/r*2);if(f>r*.4){const g=f*.6;for(let y=-1;y<=1;y+=2){const x=h+y*.75;for(let M=.12;M<.45;M+=.12)ct(e+d*g+Math.cos(x)*M,n+p*g+Math.sin(x)*M),u.fillStyle=An[0],Gt(u,Ee,Ue,3)}}}}});for(let u=0;u<22;u++){const a=Math.random()*6.28,f=Math.random()*r;I(e+Math.cos(a)*f*.5,n+Math.sin(a)*f*.5,m(.3,1.1),Math.cos(a)*m(.5,2),Math.sin(a)*m(.5,2),m(0,.4),m(.7,1.1),An[u%2],2,.5,!0,.95)}se(4)};const Tn=na([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);te.gato_E=t=>{const e=t.x,n=t.y,r=t.ex??e,o=t.ey??n,i=Math.random()*99;z({type:"custom",layer:"top",add:!0,dur:.85,x:e,y:n,draw(l,s){ct(e,n);const u=3,a=Ee,f=Ue-2;for(let c=0;c<3;c++){l.fillStyle=c===0?Te[3]:c===1?Te[1]:ot[1];for(let h=0;h<Tn.n;h++){if((Tn.K[h]===1?2:Tn.B[h]?1:0)!==c)continue;const p=Ft(h*7.13+i),g=-Tn.Y[h]/(Tn.h-1);p*.6+g*.6+.2<s*1.3||(l.globalAlpha=.85*(1-s*.5),l.fillRect(Math.round(a+Tn.X[h]*u-u/2),Math.round(f+Tn.Y[h]*u-s*18*p),u,u))}}}}),z({type:"custom",layer:"top",add:!0,dur:.45,x:e,y:n,draw(l,s){const u=s*.45;for(let a=0;a<8;a++){const f=(a+.5)/8,c=(u-f*.12)/.3;c<0||c>=1||(ct(e+(r-e)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),l.globalAlpha=1-c,l.fillStyle=a&1?lt[1]:Te[1],Gn(l,Ee,Ue,8*(1-c)+2))}}}),z({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(l,s){ct(r,o,1.05);const u=Ee,a=Ue,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=u+h*9;for(let p=0;p<5;p++){const g=c[p]*2,y=Math.max(1,Math.round(2*f));l.fillStyle=p===0||p===4?ot[2]:ot[1],l.fillRect(Math.round(d-g/2),Math.round(a+(p-2.5)*2*f),g,y)}l.fillStyle="#2a1040",l.fillRect(Math.round(d-1),Math.round(a-5*f),2,Math.max(1,Math.round(10*f)))}l.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,l.fillStyle=lt[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);l.fillRect(Math.round(u+Math.cos(d)*15-1),Math.round(a+7+Math.sin(d)*6),3,2)}l.fillStyle=Te[0],l.fillRect(Math.round(u-6),Math.round(a+9),2,2),l.fillRect(Math.round(u+4),Math.round(a+9),2,2)}});for(let l=0;l<6;l++)I(e,n,.5,m(-.8,.8),m(-.8,.8),m(.5,1.5),.5,Te[1+l%3],2,0,!0);for(let l=0;l<10;l++){const s=l/10*6.28;I(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,m(.2,1),.45,l&1?lt[1]:Te[1],2,0,!0,.9)}};const ho=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],yi=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],xi=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0];te.gato_R=t=>{if(t.type==="starfall")return;const e=t.x,n=t.y,r=t.radius||3,o=1,i=r*.8*ee.HW*Math.SQRT2;z({type:"custom",layer:"ground",add:!0,dur:1.1,x:e,y:n,draw(x,M){const v=M*1.1;ct(e,n);const _=Ee,S=Ue;x.globalAlpha=M>.85?(1-M)/.15:1;const R=xi.length/2,F=ta(v/.45)*R;x.fillStyle=Te[1];for(let O=0;O<R&&O<F;O++){const k=xi[O*2],U=xi[O*2+1],B=Math.min(1,F-O),H=_+ho[k]*i,Y=S+yi[k]*i*.55,ne=_+ho[U]*i,ue=S+yi[U]*i*.55,w=Math.hypot(ne-H,ue-Y)*B,C=Math.round(w/6);for(let A=0;A<=C;A++){const E=A*6/(w||1)*B;x.fillRect(Math.round(H+(ne-H)*E),Math.round(Y+(ue-Y)*E),2,2)}}for(let O=0;O<ho.length;O++)x.fillStyle=O>=9?ot[2]:ot[1],Gn(x,_+ho[O]*i,S+yi[O]*i*.55,3+3*(.5+.5*Math.sin(b.T*9+O*1.7)))}});const l=12,s=new Float32Array(l),u=new Float32Array(l),a=new Float32Array(l);for(let x=0;x<l;x++){const M=Math.random()*6.28,v=Math.sqrt(Math.random())*r*.9;s[x]=e+Math.cos(M)*v,u[x]=n+Math.sin(M)*v,a[x]=.45+x/(l-1)*.55+m(-.03,.03)}const f=.32,c=Math.hypot(40,4.5*ee.ZK),h=40/c,d=-352.8/c;z({type:"custom",layer:"top",add:!0,dur:1.2,x:e,y:n,landed:0,draw(x,M,v){const _=M*1.2;for(let S=0;S<l;S++){const R=_-(a[S]-f);if(!(R<0))if(R<f){const F=R/f;ct(s[S],u[S],4.5*(1-F));const O=Ee+(1-F)*40,k=Ue;for(let U=-1;U<=1;U++){const B=U*.12,H=h*Math.cos(B)-d*Math.sin(B),Y=h*Math.sin(B)+d*Math.cos(B);x.fillStyle=U===0?lt[1]:Te[1];for(let ne=1;ne<10;ne++)x.globalAlpha=1-ne/10,x.fillRect(Math.round(O+H*ne*3.2+U*3),Math.round(k+Y*ne*3.2),2,2)}x.globalAlpha=1,x.fillStyle=ot[1],x.fillRect(Math.round(O-6),Math.round(k-1),12,2),x.fillRect(Math.round(O-1),Math.round(k-6),2,12),x.fillStyle=ot[0],x.fillRect(Math.round(O-2),Math.round(k-2),4,4)}else{if(!(v.landed&1<<S)){v.landed|=1<<S;for(let O=0;O<2;O++)I(s[S],u[S],.1,m(-1,1),m(-1,1),m(1,2),.45,O?ot[1]:lt[1],2,4,!0)}const F=(R-f)/.2;if(F>=1)continue;ct(s[S],u[S]),x.globalAlpha=1-F,x.fillStyle=ot[1],Gn(x,Ee,Ue,2+F*8)}}x.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:e,y:n,boom:!1,draw(x,M,v){if(!v.boom){v.boom=!0,se(8);for(let O=0;O<28;O++){const k=Math.random()*6.28,U=m(1,3.5);I(e,n,.3,Math.cos(k)*U,Math.sin(k)*U,m(1.5,3.5),m(.5,.8),[ot[1],Te[1],lt[1],Te[0]][O&3],3,5,!0,.95)}}const _=.3+(r-.3)*nu(M),S=M*2;ct(e,n,.2);const R=Ee,F=Ue;if(M<.35){const O=1-M/.35;x.fillStyle=Te[1],x.globalAlpha=O*.25,x.fillRect(Math.round(R-70),Math.round(F-35),140,70),x.globalAlpha=O*.4,x.fillRect(Math.round(R-40),Math.round(F-20),80,40),x.fillStyle=Te[0],x.globalAlpha=O*.7,x.fillRect(Math.round(R-15),Math.round(F-8),30,16)}x.globalAlpha=1-M*M;for(let O=0;O<10;O++){const k=S+O/10*6.28;ct(e+Math.cos(k)*_,n+Math.sin(k)*_,.35+.2*Math.sin(M*6+O)),x.fillStyle=O&1?ot[2]:ot[1],ru(x,Ee,Ue,3),x.fillStyle=ot[0],x.fillRect(Math.round(Ee-1),Math.round(Ue-1),2,2)}}});const p=24,g=new Float32Array(p),y=new Float32Array(p);for(let x=0;x<p;x++){const M=Math.random()*6.28,v=Math.sqrt(Math.random())*r;g[x]=e+Math.cos(M)*v,y[x]=n+Math.sin(M)*v}z({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:e,y:n,draw(x,M){const v=b.T*8|0;for(let _=0;_<p;_++){const S=Ft(_*13+v);S<.25||(ct(g[_],y[_]),x.globalAlpha=(1-M)*S,x.fillStyle=_%3?Te[1]:ot[1],x.fillRect(Math.round(Ee),Math.round(Ue),2,2))}}})};At.gato_A=(t,e,n,r,o,i)=>{const l=!!(e.dmg&&e.src&&e.dmg>(e.src.ad||0)*1.3);ou(e,yh,l),qe(!0);const s=Wt(),u=Math.cos(o),a=Math.sin(o);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?lt[1]:Te[1],Gt(s,n-u*h*5,r-a*h*5,4-h*.6);s.globalAlpha=1;const f=l?7:5,c=(i*16|0)&1;if(s.fillStyle=Te[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(s.fillStyle=lt[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),l){s.fillStyle=ot[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}qe(!1)};function iu(t,e,n){z({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:t,y:e,draw(r,o){ct(t,e,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=Te[1],ls(r,Ee,Ue,i,Math.PI/4,.75,2),r.fillStyle=lt[1],Gn(r,Ee+i,Ue,3),Gn(r,Ee-i,Ue,3),Gn(r,Ee,Ue+i*.75,3),Gn(r,Ee,Ue-i*.75,3),n&&(r.fillStyle=ot[1],ru(r,Ee,Ue-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)I(t,e,.45,m(-1,1),m(-1,1),m(.3,1.2),.35,n&&r&1?ot[1]:Te[1],2,1,!0)}function yh(t){const e=t.tgt?t.tx:t.x,n=t.tgt?t.ty:t.y;iu(e,n,t.crit),Me.sfx("atk_gato",e,n,t.crit?.9:.6)}ut.gato=t=>iu(t.x,t.y,!!t.big);let ve=0,be=0;function nt(t,e,n=0){ve=(t-e)*ee.HW+ee.OX,be=(t+e)*ee.HH-n*ee.ZK}function $t(t,e,n,r){const o=Math.max(1,Math.round(r));t.fillRect(Math.round(e-o/2),Math.round(n-o/2),o,o)}const ro=t=>t<0?0:t>1?1:t,oo=t=>(t-=1,1+t*t*((2.2+1)*t+2.2)),jt=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Jn=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Zt=["#8a6a48","#5a3a20","#3a2414"],yn=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Kr=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function su(t,e){const n=[],r=[],o=[];return t.forEach((i,l)=>{for(let s=0;s<i.length;s++){const u=e.indexOf(i[s]);u>=0&&(n.push(s),r.push(l),o.push(u))}}),{w:t[0].length,h:t.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function us(t,e,n,r,o,i,l=-1){const s=Math.round(n-e.w*o/2),u=Math.round(r-e.h*o);for(let a=0;a<i.length;a++)if(!(l>=0&&a!==l)){t.fillStyle=i[a];for(let f=0;f<e.x.length;f++)e.c[f]===a&&t.fillRect(s+e.x[f]*o,u+e.y[f]*o,o,o)}}const xh=su(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),vh=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],za=su(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),Oa=[Kr[3],Kr[2],Kr[0],"#4a2a6a","#e0d8f0","#a898c0"],Ur=new Map;function bh(t,e){if(t.id==null)return;let n=Ur.get(t.id);if(!n){Ur.size>200&&Ur.clear(),n={x:t.x,y:t.y,life:9,tx:0,ty:0,tgt:!1},Ur.set(t.id,n);const r=t.id;z({type:"custom",layer:"ground",dur:(t.life||3)+.6,x:t.x,y:t.y,draw(o,i,l){if(l.fin)return;const s=b.game;if(s){for(const u of s.projs)if(u.id===r)return;l.fin=!0,l.dur=l.t,Ur.delete(r),e(n)}}})}n.x=t.x,n.y=t.y,n.life=t.life==null?9:t.life,t.homing&&!t.homing.dead&&(n.tgt=!0,n.tx=t.homing.x,n.ty=t.homing.y)}te.hongo_Q=t=>{const e=t.x,n=t.y,r=t.radius||1.8,o=7,i=new Float32Array(o*4);for(let a=0;a<o;a++){const f=Math.random()*6.28,c=a===0?0:r*m(.45,.9);i[a*4]=e+Math.cos(f)*c,i[a*4+1]=n+Math.sin(f)*c,i[a*4+2]=a===0?12:m(7,11),i[a*4+3]=.16+a*.05}const l=18,s=new Float32Array(l),u=new Float32Array(l);for(let a=0;a<l;a++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;s[a]=e+Math.cos(f)*c,u[a]=n+Math.sin(f)*c}z({type:"custom",layer:"ground",dur:2.2,x:e,y:n,draw(a,f){const c=f*2.2;for(let h=0;h<l;h++){const d=ro((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(nt(s[h],u[h]),a.globalAlpha=d*.75,a.fillStyle=jt[1+h%3],a.fillRect(Math.round(ve),Math.round(be),h%3?3:4,2))}a.globalAlpha=1}}),z({type:"custom",layer:"top",dur:.95,x:e,y:n,popped:0,draw(a,f,c){const h=f*.95;for(let d=0;d<o;d++){const p=i[d*4+3],g=p-.16,y=i[d*4+2];if(nt(i[d*4],i[d*4+1]),h<p){if(h<g)continue;const v=oo(ro((h-g)/.13)),_=y*v*(1+.12*Math.sin(h*60+d)),S=Math.max(1,Math.round(_*2/3));for(let R=0;R<S;R++){const F=(R+.5)/S*2-1,O=_*2*Math.sqrt(1-F*F);a.fillStyle=R===0?Jn[0]:F<.3?Jn[1]:Jn[2],a.fillRect(Math.round(ve-O/2),Math.round(be-_*2+R*3),Math.max(1,Math.round(O)),3)}a.fillStyle=Jn[3],a.fillRect(Math.round(ve-_*.2),Math.round(be-_*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let v=0;v<4;v++)I(i[d*4],i[d*4+1],.25,m(-.6,.6),m(-.6,.6),m(.4,1.1),m(.9,1.4),jt[v%3],3,.25,!1,.92)}const x=(h-p)/.35;if(x>=1)continue;const M=y*(.6+x*2.2);a.globalAlpha=1-x;for(let v=0;v<8;v++){const _=v/8*6.28+d;a.fillStyle=jt[v&1?1:2],$t(a,ve+Math.cos(_)*M,be-y+Math.sin(_)*M*.6,4-x*2)}a.globalAlpha=(1-x)*.55,a.fillStyle=Jn[0];for(let v=0;v<3;v++)$t(a,ve+(v-1)*y*.6,be-y-x*8-(v&1)*4,y*(.8+x*.6));a.globalAlpha=1}}}),se(2)};te.hongo_W=t=>{if(t.type==="heal"){const i=t.x,l=t.y;z({type:"custom",layer:"top",dur:.9,x:i,y:l,drops:0,draw(s,u,a){const f=u<.2?oo(u/.2):u>.8?(1-u)/.2:1,c=3;nt(i,l,1.35);const h=ve,d=be,p=[4,8,10,12,12];for(let g=0;g<5;g++){const y=Math.round(p[g]*f)*c;y<=0||(s.fillStyle=g===0?yn[1]:yn[2],s.fillRect(Math.round(h-y/2),Math.round(d+(g-5)*c*f),y,Math.max(1,Math.round(c*f))))}s.fillStyle=yn[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=yn[0],$t(s,h-3*c*f,d-3*c*f,3*f),$t(s,h+2*c*f,d-2*c*f,3*f),a.drops<10&&u>.12&&u<.75&&(a.drops++,I(i+m(-.25,.25),l+m(-.25,.25),1.25,0,0,0,.5,a.drops&1?yn[0]:yn[1],2,6,!0,1))}});return}const e=t.x,n=t.y,r=(t.radius||4)*.78,o=12;z({type:"custom",layer:"top",dur:1.5,x:e,y:n,emitted:0,draw(i,l,s){const u=l*1.5,a=b.T;for(let f=0;f<o;f++){const c=f*.035,h=u-c;if(h<0)continue;const d=f/o*6.28,p=e+Math.cos(d)*r,g=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let S=0;S<2;S++)I(p,g,.2,m(-.2,.2),m(-.2,.2),m(.8,1.6),m(.7,1.1),yn[S],2,0,!0,.95)}const y=oo(ro(h/.18)),x=l>.8?(1-l)/.2:1,M=Math.max(1,Math.round(3*y*x)),v=Math.abs(Math.sin(a*9+f*1.3))*5*x,_=Math.round(Math.sin(a*6+f)*2);nt(p,g),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(ve-9),Math.round(be-1),18,3),i.globalAlpha=1,us(i,xh,ve+_,be-v,M,vh)}}}),z({type:"custom",layer:"ground",add:!0,dur:1.5,x:e,y:n,draw(i,l){const u=l*1.2;i.globalAlpha=(l<.2?l/.2:1-(l-.2)/.8)*.8;for(let a=0;a<40;a++){const f=u+a/40*6.28;nt(e+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=yn[a%3+1],$t(i,ve,be,a%3?3:4)}}})};te.hongo_E=t=>{const e=t.x+(t.ux||0)*.5,n=t.y+(t.uy||0)*.5;z({type:"custom",layer:"ground",dur:.7,x:e,y:n,draw(r,o){nt(e,n),r.globalAlpha=1-o,r.fillStyle=Zt[2];for(let i=0;i<3;i++){const l=i*2.1+.4;for(let s=0;s<6;s++)$t(r,ve+Math.cos(l+s*.25)*s*3.5,be+Math.sin(l-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)I(e,n,.1,m(-1.2,1.2),m(-1.2,1.2),m(1.5,3),m(.4,.6),Zt[r%3],3,9,!1,.95)};const Fa=10;At.hongo_E=(t,e,n,r,o,i)=>{bh(e,Mh);const l=Math.hypot(e.vx||0,e.vy||0)||1,s=-(e.vx||0)/l,u=-(e.vy||0)/l;nt(e.x,e.y),t.fillStyle=Zt[1],t.fillRect(Math.round(ve-8),Math.round(be-1),16,4),t.fillStyle=Zt[0],t.fillRect(Math.round(ve-5),Math.round(be-2),10,2);for(let a=Fa-1;a>=0;a--){const f=e.x+s*a*.17,c=e.y+u*a*.17,h=.04+.3*Math.max(0,Math.sin(i*14-a*.9))*(1-a/Fa);nt(f,c,h);const d=7-a*.45;t.fillStyle=Zt[2],$t(t,ve,be+1,d+2),t.fillStyle=a&1?"#7a5030":"#6a4428",$t(t,ve,be,d),t.fillStyle="#a07040",t.fillRect(Math.round(ve-d/4),Math.round(be-d/2),2,1),(a===3||a===7)&&(t.fillStyle=jt[2],t.fillRect(Math.round(ve+d/2),Math.round(be-d/2-1),2,2))}nt(e.x,e.y,.12+.2*Math.max(0,Math.sin(i*14))),t.fillStyle=jt[3],t.fillRect(Math.round(ve-2),Math.round(be-6),4,7),t.fillStyle=jt[1],t.fillRect(Math.round(ve-6),Math.round(be-6),4,2),t.fillRect(Math.round(ve+2),Math.round(be-8),4,2),t.fillStyle=jt[0],t.fillRect(Math.round(ve-1),Math.round(be-8),2,2),Math.random()<.35&&I(e.x,e.y,.05,m(-.6,.6),m(-.6,.6),m(.8,1.6),.4,Zt[Math.random()*3|0],2,7,!1,.95)};function Mh(t){const e=t.x,n=t.y;if(t.life<.07){for(let l=0;l<6;l++)I(e,n,.1,m(-.5,.5),m(-.5,.5),m(.5,1),.5,l&1?Zt[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;z({type:"custom",layer:"top",dur:r,x:e,y:n,draw(l,s){const u=s*r,a=u<.18?oo(u/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);nt(e+h*.55,n+d*.55,0);const p=ve,g=be;nt(e+h*.8,n+d*.8,.55);const y=ve,x=be;nt(e+h*.12,n+d*.12,.75);const M=ve,v=be,_=Math.min(10,Math.round(10*a));for(let S=0;S<=_;S++){const R=S/10,F=1-R,O=F*F*p+2*F*R*y+R*R*M,k=F*F*g+2*F*R*x+R*R*v,U=6-R*4;l.fillStyle=Zt[2],$t(l,O,k+1,U+2),l.fillStyle=S&1?"#7a5030":"#6a4428",$t(l,O,k,U),(S===4||S===7)&&(l.fillStyle="#c8f080",l.fillRect(Math.round(O+(f&1?3:-5)),Math.round(k-1),2,2))}}}});for(let l=0;l<12;l++)I(e,n,.1,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3.2),m(.4,.7),Zt[l%3],3,9,!1,.95);se(2)}te.hongo_R=t=>{const e=t.x,n=t.y,r=t.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(t.dur||o&&o.abil.R.dur||4)+.3,l=[];for(let f=0;f<13;f++){let c=null;for(let h=0;h<8&&!c;h++){const d=Math.random()*6.28,p=f===0?0:Math.sqrt(Math.random())*r*.88,g=e+Math.cos(d)*p,y=n+Math.sin(d)*p;l.every(x=>Math.hypot(x.x-g,x.y-y)>.7)&&(c={x:g,y,cs:f===0?4:Math.random()<.5?3:2,ts:p/r*.5})}c&&l.push(c)}l.sort((f,c)=>f.x+f.y-(c.x+c.y));const s=l.length,u=new Int8Array(s).fill(-1);for(let f=0;f<s;f++){let c=1e9;for(let h=0;h<s;h++)if(h!==f){const d=Math.hypot(l[f].x-l[h].x,l[f].y-l[h].y);d<c&&(c=d,u[f]=h)}}z({type:"custom",layer:"ground",dur:i,x:e,y:n,draw(f,c){const h=c*i,d=ro((h-.1)/.5),p=c>.88?(1-c)/.12:1;f.globalAlpha=.5*p,f.fillStyle="#e8f0d0";for(let g=0;g<s;g++){const y=u[g];if(y<0)continue;nt(l[g].x,l[g].y);const x=ve,M=be;nt(l[y].x,l[y].y);const v=Math.hypot(ve-x,be-M),_=Math.round(v/6*d);for(let S=0;S<=_;S++){const R=S*6/v;f.fillRect(Math.round(x+(ve-x)*R),Math.round(M+(be-M)*R+Math.sin(S*1.7+g)*2),2,2)}}f.globalAlpha=1}});const a=(f,c,h)=>{const d=oo(ro((c-f.ts)/.22)),p=h>.88?(1-h)/.12:1;return Math.max(0,Math.round(f.cs*d*p))};z({type:"custom",layer:"top",dur:i,x:e,y:n,draw(f,c){const h=c*i;for(let d=0;d<s;d++){const p=l[d],g=a(p,h,c);g<=0||(nt(p.x,p.y),f.fillStyle="rgba(20,10,30,0.35)",f.fillRect(Math.round(ve-g*4),Math.round(be-1),g*8,3),us(f,za,ve+Math.round(Math.sin(b.T*2+d)*g*.4),be,g,Oa))}}}),z({type:"custom",layer:"top",add:!0,dur:i,x:e,y:n,acc:0,last:0,puffs:0,draw(f,c,h){const d=c*i;for(let p=0;p<s;p++){const g=l[p],y=a(g,d,c);y<=0||(nt(g.x,g.y),f.globalAlpha=.45+.4*Math.sin(b.T*5+p*1.9),us(f,za,ve+Math.round(Math.sin(b.T*2+p)*y*.4),be,y,Oa,2),f.globalAlpha=.18,f.fillStyle=Kr[1],f.fillRect(Math.round(ve-y*4),Math.round(be-y*9),y*8,y*4))}for(f.globalAlpha=1,h.acc+=Math.max(0,d-h.last),h.last=d;h.acc>.085&&h.puffs<46&&c<.88;){h.acc-=.085,h.puffs++;const p=l[Math.random()*s|0];I(p.x+m(-.1,.1),p.y+m(-.1,.1),.12*p.cs*1.6,m(-.25,.25),m(-.25,.25),m(.5,1),m(.9,1.3),h.puffs&1?Kr[0]:jt[1],2,.15,!0,.97)}}});for(let f=0;f<14;f++){const c=Math.random()*6.28,h=Math.random()*r*.8;I(e+Math.cos(c)*h,n+Math.sin(c)*h,.05,0,0,m(1.5,2.5),.5,Zt[f%3],3,8,!1)}se(3)};ut.hongo=t=>{const e=t.x,n=t.y;z({type:"custom",layer:"ground",dur:.4,x:e,y:n,draw(r,o){const i=.2+o*.55,l=10;r.globalAlpha=1-o;for(let s=0;s<l;s++){const u=s/l*6.28;nt(e+Math.cos(u)*i,n+Math.sin(u)*i),r.fillStyle=jt[1+s%3],r.fillRect(Math.round(ve-2),Math.round(be-1),4,2)}}}),z({type:"custom",layer:"top",dur:.35,x:e,y:n,draw(r,o){nt(e,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Jn[i],$t(r,ve+(i-1)*8*(.6+o),be-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)I(e,n,.4,m(-1,1),m(-1,1),m(.5,1.5),.6,jt[r%3],3,2,!1,.92)};const sr="#1e0f30",ur="#4b2272",dn="#8b3cd2",mn="#d6b4ff",fn="#f6f2ff",Qo="#ff2f5f",au="#2c1446",Ke=Math.round,Wn=Math.PI*2,_h=[0,1,2,1];function Lt(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(Ke(e),Ke(n),r,o)}function Sh(t,e,n,r,o,i,l){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=l;for(let u=0;u<=s;u++)t.fillRect(Ke(e+(r-e)*u/s-i/2),Ke(n+(o-n)*u/s-i/2),i,i)}function fs(t,e,n,r,o,i,l,s){e=Ke(e),n=Ke(n),t.fillStyle=i,t.fillRect(e-r,n-r,2*r,3*r),t.fillRect(e-r,n-2*r,r,r),t.fillRect(e,n-2*r,r,r),t.fillStyle=l,o===0?(t.fillRect(e-3*r,n-2*r,2*r,r),t.fillRect(e-5*r,n-3*r,2*r,r),t.fillRect(e-2*r,n-r,r,r),t.fillRect(e+r,n-2*r,2*r,r),t.fillRect(e+3*r,n-3*r,2*r,r),t.fillRect(e+r,n-r,r,r)):o===1?(t.fillRect(e-5*r,n-r,4*r,r),t.fillRect(e-5*r,n,r,r),t.fillRect(e-3*r,n,r,r),t.fillRect(e+r,n-r,4*r,r),t.fillRect(e+4*r,n,r,r),t.fillRect(e+2*r,n,r,r)):(t.fillRect(e-3*r,n,2*r,r),t.fillRect(e-4*r,n+r,2*r,r),t.fillRect(e-2*r,n-r,r,r),t.fillRect(e+r,n,2*r,r),t.fillRect(e+2*r,n+r,2*r,r),t.fillRect(e+r,n-r,r,r));{const u=Math.max(1,r>>1);t.fillStyle=s,t.fillRect(e-r,n-r,u,u),t.fillRect(e+r-u,n-r,u,u)}}function kn(t,e,n,r,o,i,l,s=1){const u=Math.cos(o)*r*i,a=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Ke(2*s));t.fillStyle=l;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),p=h-a,g=Ke(n+h*s);if(Math.abs(p)>=f){t.fillRect(Ke(e-d),g,Ke(2*d),c);continue}const y=Math.sqrt(f*f-p*p),x=u-y,M=u+y;if(x>-d&&t.fillRect(Ke(e-d),g,Ke(Math.min(x,d)+d),c),M<d){const v=Math.max(M,-d);t.fillRect(Ke(e+v),g,Ke(d-v),c)}}}function cs(t,e,n,r,o){const[i,l]=T(e,n),s=r*ee.HW*Math.SQRT2,u=s*.5;t.fillStyle=o;for(let a=-u;a<=u;a+=2){const f=s*Math.sqrt(Math.max(0,1-a*a/(u*u)));t.fillRect(Ke(i-f),Ke(l+a),Ke(f*2),2)}}const lu=t=>{const e=Ve(t);return e&&!e.dead&&!rt(e)?e:null},wh=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},hs=(t,e=16)=>_h[((b.T*e|0)+t)%4];ut.murcielago=t=>{const e=m(0,Wn),n=t.big?17:13;z({type:"custom",layer:"top",add:!0,dur:.2,x:t.x,y:t.y,draw(r,o){const[i,l]=T(t.x,t.y,.5);r.globalAlpha=1-o,kn(r,i,l,n+2,e+o*1.4,.45,dn),kn(r,i,l,n,e+o*1.4,.52,fn)}});for(let r=0;r<5;r++)I(t.x,t.y,.5,m(-2.5,2.5),m(-2.5,2.5),m(0,1),.28,r%2?mn:dn,2,0,!0,.9)};te.murcielago_Q=t=>{const e=t.ux||0,n=t.uy||0,r=Math.atan2(n,e),o=t.range||3.2,i=t.angle||.8,l=t.x+e*.3,s=t.y+n*.3,u=.6;z({type:"custom",layer:"top",add:!0,dur:.62,x:t.x,y:t.y,draw(a,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const p=d/.32,g=.3+p*(o-.3),y=Math.max(6,Math.ceil(i*2*g*7)),x=h%2?dn:mn,M=h%2?3:2;a.globalAlpha=(1-p)*.95;for(let v=0;v<=y;v++){const _=r-i+2*i*v/y,S=Math.sin(v*1.7+h*2.3+c*40)*.07*(1+p),[R,F]=T(l+Math.cos(_)*(g+S),s+Math.sin(_)*(g+S),u-p*.35);Lt(a,R-M/2,F-M/2,M,M,x),v===y>>1&&Lt(a,R-1,F-1,2,2,fn)}}}}),z({type:"custom",layer:"ground",dur:.5,x:t.x,y:t.y,draw(a,f){a.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const p=.4+(o-.4)*d/9,[g,y]=T(l+Math.cos(h)*p,s+Math.sin(h)*p);Lt(a,g-1,y-1,3,2,ur)}}}});for(let a=0;a<14;a++){const f=r+m(-i,i),c=m(.6,o);I(l+Math.cos(f)*c,s+Math.sin(f)*c,u*.7,Math.cos(f)*.8,Math.sin(f)*.8,m(0,.5),.5,a%3?mn:fn,2,0,!0,.92)}se(2)};te.murcielago_W=t=>{const e=t.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*Wn+m(-.2,.2),sp:m(1.2,2.4),up:m(.8,1.8),ph:Math.random()*4|0}));z({type:"custom",layer:"ground",dur:.8,x:t.x,y:t.y,draw(r,o){r.globalAlpha=.6*(1-o),cs(r,t.x,t.y,.75*(1-o*.6),sr),r.globalAlpha=.8*(1-o),cs(r,t.x,t.y,.3*(1-o),au)}}),z({type:"custom",layer:"top",dur:1,x:t.x,y:t.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const l of n){const s=l.sp*i,[u,a]=T(t.x+Math.cos(l.a)*s,t.y+Math.sin(l.a)*s,.5+l.up*i+Math.sin(i*9+l.a)*.08);fs(r,u,a,2,hs(l.ph),sr,ur,Qo)}}}),z({type:"custom",layer:"top",dur:e,x:t.x,y:t.y,uid:t.uid,draw(r){const o=lu(t.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,l]=T(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const u=b.T*5+s*Math.PI;fs(r,i+Math.cos(u)*24,l+Math.sin(u)*9,1,hs(s*2,20),ur,dn,Qo)}r.globalAlpha=.35;for(let s=0;s<4;s++)Lt(r,i-8+s*5,l+26+(b.T*30+s*7)%8,2,2,sr)}});for(let r=0;r<16;r++)I(t.x+m(-.3,.3),t.y+m(-.3,.3),m(.2,.8),m(-.5,.5),m(-.5,.5),m(1,2.2),m(.5,.9),r%2?sr:ur,3,0,!1,.95);for(let r=0;r<6;r++)I(t.x+m(-.3,.3),t.y+m(-.3,.3),m(.4,1),0,0,m(.5,1.2),.5,mn,2,0,!0)};te.murcielago_E=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=t.dur||.45,o=wh(t),i=o&&o.radius||1.4,l=m(0,Wn);let s=!1;z({type:"custom",layer:"ground",dur:r+1.4,x:e,y:n,draw(u,a,f){const c=a*f.dur,[h,d]=T(e,n);if(c<r){u.globalAlpha=.5,kn(u,h,d,Ke(i*26*(1.4-.4*c/r)),l+c*6,.45,ur,.5);return}u.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),kn(u,h,d+2,Ke(i*30),l+Math.PI*1.1,.42,au,.5)}}),z({type:"custom",layer:"top",add:!0,dur:r+.5,x:e,y:n,draw(u,a,f){const c=a*f.dur;if(c<r){const M=lu(t.uid);if(!M)return;const[v,_]=T(M.x,M.y,.7),[S,R]=T(e,n,.3),F=Math.hypot(S-v,R-_)||1,O=(S-v)/F,k=(R-_)/F;u.globalAlpha=.75;for(let U=0;U<4;U++){const B=(U-1.5)*7,H=18+U%2*12;Sh(u,v-k*B-O*8,_+O*B-k*8,v-k*B-O*(8+H),_+O*B-k*(8+H),2,U%2?mn:dn)}return}const h=(c-r)/.5;if(!s){s=!0,se(6);for(let M=0;M<22;M++){const v=m(0,Wn),_=m(2,5);I(e,n,.45,Math.cos(v)*_,Math.sin(v)*_,m(.3,1.5),m(.3,.55),M%3?mn:M%2?fn:dn,2,3,!0,.9)}}const d=Math.min(1,h/.45),[p,g]=T(e,n,.45),y=Ke(26+14*d),x=l+d*Math.PI*1.1;u.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),kn(u,p,g,y+3,x,.42,dn,.85),kn(u,p,g,y,x,.48,fn,.85),u.globalAlpha*=.35,kn(u,p,g,y,x-.6,.48,mn,.85)}})};te.murcielago_R=t=>{const e=t.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,u)=>({p:u/r*Wn,r0:e*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,u)=>{const a=Math.min(1,u/.35),f=Math.max(0,(u-(n-.4))/.4),c=(s.r0+(1-a)*(1-a)*e*1.4+f*f*e*1.5)*(.85+.15*Math.sin(u*5+s.p*3)),h=s.p+u*s.w;return[t.x+Math.cos(h)*c,t.y+Math.sin(h)*c,s.z+Math.sin(u*4+s.p)*.25+f*1.5,f]},l=Array.from({length:8},()=>({t:m(.3,n-.4),x:t.x+m(-1,1)*e*.6,y:t.y+m(-1,1)*e*.6}));z({type:"custom",layer:"ground",dur:n,x:t.x,y:t.y,draw(s,u){const a=u*n,f=Math.min(1,a/.3,(n-a)/.4);s.globalAlpha=.32*f,cs(s,t.x,t.y,e,sr),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*Wn+a*.8,[d,p]=T(t.x+Math.cos(h)*e,t.y+Math.sin(h)*e);Lt(s,d-1,p-1,c%2?2:3,2,c%2?mn:dn)}s.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,a),[p,g]=T(h,d);Lt(s,p-4,g-1,8,2,"#000000")}}}),z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,draw(s,u){const a=u*n;for(const f of o){const[c,h,d,p]=i(f,a),[g,y]=T(c,h,d);s.globalAlpha=Math.min(1,a/.15)*(1-p),fs(s,g,y,f.s,hs(f.ph,18),sr,ur,Qo)}}}),z({type:"custom",layer:"top",add:!0,dur:n,x:t.x,y:t.y,draw(s,u){const a=u*n;for(const f of l){const c=(a-f.t)/.14;if(c<0||c>1)continue;const[h,d]=T(f.x,f.y,.55),p=Ke(4-c*3);s.globalAlpha=1-c;for(const g of[-1,1]){const y=h+g*4;Lt(s,y-2,d-6-p,4,2,fn),Lt(s,y-1,d-4-p,2,3,fn),Lt(s,y-2,d+4+p,4,2,fn),Lt(s,y-1,d+1+p,2,3,fn)}Lt(s,h-1,d-1,3,3,Qo)}}});for(let s=0;s<20;s++){const u=m(0,Wn),a=e*m(.3,1);I(t.x+Math.cos(u)*a,t.y+Math.sin(u)*a,m(.3,1.5),-Math.sin(u)*2.5,Math.cos(u)*2.5,m(0,.6),m(.6,1.1),s%3?dn:mn,2,0,!0,.97)}se(5)};const Z=Math.round,Qt=Math.PI*2,q={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},Ch=t=>t*ee.HW*Math.SQRT2;function $r(t,e,n,r){r=Math.max(1,Z(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),l=r/2;for(let s=0;s<=i;s++)t.fillRect(Z(e[0]+(n[0]-e[0])*s/i-l),Z(e[1]+(n[1]-e[1])*s/i-l),r,r)}function Jo(t,e,n,r,o,i){const l=e[0].length,s=e.length,u=Z(n-l*o/2),a=Z(r-s*o/2);for(const f in i){t.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<l;h++)e[c][h]===f&&t.fillRect(u+h*o,a+c*o,o,o)}}function uu(t,e,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=t+m(-.35,.35),l=e*o/n;r.push([Math.cos(i)*l,Math.sin(i)*l])}return r}function fu(t,e,n,r,o){const i=r.length-1,l=o*i;for(let s=0;s<i&&s<l;s++){const u=Math.min(1,l-s),a=T(e+r[s][0],n+r[s][1]),f=T(e+r[s+1][0],n+r[s+1][1]);$r(t,a,[a[0]+(f[0]-a[0])*u,a[1]+(f[1]-a[1])*u],s<2?3:2)}}const Ah=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],Th=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],Ia=["t.t.t",".....",".ppp.","ppppp",".ppp."];te.oso_Q=t=>{const e=t.x,n=t.y,r=t.ux||1,o=t.uy||0,i=t.range||2.5,l=Math.min(t.angle||1.2,1.4),s=Math.atan2(o,r),u=e+r*1,a=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,p)=>{const g=3+p*2;for(let y=0;y<g;y++){const x=s+(g===1?0:(y/(g-1)*2-1)*l*.8)+m(-.06,.06),M=d*i/2.5;c.push({x:e+Math.cos(x)*M,y:n+Math.sin(x)*M,t0:f+.02+p*.08,w:Math.random()<.5?10:12,h:m(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>uu(s+d*l,i*m(.75,1)));z({type:"custom",layer:"top",dur:.34,x:u,y:a,draw(d,p){const g=p*.34,y=Math.min(1,g/f),x=1.5*(1-y*y),[M,v]=T(u,a,x+.25);if(d.globalAlpha=g<.22?1:Math.max(0,1-(g-.22)/.12),Jo(d,Ah,M,v,3,{h:q.wood,d:q.i0,b:q.brass,l:q.i4,i:q.i2}),y<1){d.globalAlpha=.5,d.fillStyle=q.i3;for(let _=1;_<=3;_++)d.fillRect(Z(M-15+_*7),Z(v-26-_*8),2,8)}}}),z({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:u,y:a,draw(d,p){const[g,y]=T(u,a,.1),x=Z(26*(1-p))+4;d.fillStyle=q.amberL,d.fillRect(g-x,y-2,x*2,4),d.fillRect(g-2,y-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(g-5,y-3,10,6)}}),z({type:"custom",layer:"ground",dur:1.15,x:e,y:n,draw(d,p,g){const y=p*1.15;if(y>=f&&!g.hit){g.hit=!0,se(7);for(let v=0;v<14;v++){const _=s+m(-l,l),S=m(1,3);I(u,a,.1,Math.cos(_)*S,Math.sin(_)*S,m(.3,1),m(.6,.9),v%2?q.dust:q.e3,5,-.4,!1,.9)}}if(y<f)return;const x=y-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=q.e0;for(const v of h)fu(d,e,n,v,Math.min(1,x*5));const M=Math.min(1,x/.32);if(M<1){const v=i*(.3+.8*M);d.globalAlpha=1-M,d.fillStyle=q.dust;for(let _=0;_<=16;_++){const S=s-l+2*l*_/16,[R,F]=T(e+Math.cos(S)*v,n+Math.sin(S)*v);d.fillRect(Z(R)-3,Z(F)-2,6,4)}}for(const v of c){const _=(y-v.t0)/.5;if(_<0||_>1)continue;v.done||(v.done=!0,I(v.x,v.y,.2,m(-1,1),m(-1,1),m(3,5),m(.7,1),[q.e1,q.e2,q.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const S=Z(v.h*(_<.2?_/.2:1-(_-.2)/.8)),[R,F]=T(v.x,v.y);d.globalAlpha=1,d.fillStyle=q.e0,d.fillRect(Z(R-v.w/2-1),Z(F-2),v.w+2,4),d.fillStyle=q.e1,d.fillRect(Z(R-v.w/2),Z(F-S),v.w,S),d.fillStyle=q.e3,d.fillRect(Z(R-v.w/2),Z(F-S-5),v.w,5),d.fillStyle=q.e2,d.fillRect(Z(R-v.w/2),Z(F-S-1),v.w,1)}}})};function mo(t,e,n,r,o,i){const l=Math.cos(i);return[t+n*Math.cos(o)*l,e+n*.5*Math.sin(o)*l-r*Math.sin(i)]}te.oso_W=t=>{const e=t.uid,n=t.dur||3;let r=t.x,o=t.y;z({type:"custom",layer:"top",add:!0,dur:.2,x:t.x,y:t.y,uid:e,draw(i,l){const s=Ve(e),[u,a]=T(s?s.x:r,s?s.y:o,.6),f=Z(18*(1-l))+3;i.fillStyle=q.amber;for(let c=0;c<8;c++){const h=c/8*Qt;i.fillRect(Z(u+Math.cos(h)*f*1.4)-2,Z(a+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(u-3,a-3,6,6)}});for(let i=0;i<10;i++){const l=Math.random()*Qt;I(t.x,t.y,.6,Math.cos(l)*m(1,3),Math.sin(l)*m(1,3),m(1.5,3),.4,i%2?q.brassL:q.amber,2,9,!0)}z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,uid:e,draw(i,l,s){const u=Ve(e),a=l*n;if(u&&(r=u.x,o=u.y),!u||u.dead||a>.2&&u.status&&!u.status.dr||l>.985){for(let R=0;R<16;R++){const F=Math.random()*Qt,O=m(1,2.5);I(r+Math.cos(F)*.4,o+Math.sin(F)*.4,m(.2,.8),Math.cos(F)*O,Math.sin(F)*O,m(1.5,3.5),.7,[q.i1,q.i2,q.i3][R%3],4,10,!1,.95)}for(let R=0;R<6;R++)I(r,o,.6,m(-2,2),m(-2,2),m(1,3),.35,q.brassL,2,6,!0);s.t=1e9;return}const c=u&&u.scale||1,[h,d]=T(r,o),p=Z(40*c),g=Z(56*c),y=Math.min(1,a/.25),x=Math.PI/2*y;if(y>=1&&!s.done){s.done=!0;const[R,F]=[r,o];for(let O=0;O<6;O++)I(R,F,.75*c,m(-1.5,1.5),m(-1.5,1.5),m(.5,2),.3,q.i4,2,3,!0)}const M=.85+.15*Math.sin(a*8);i.globalAlpha=.16*M,i.fillStyle=q.i2;const v=g*Math.sin(x);for(let R=0;R<v;R+=3){const F=p*Math.sqrt(Math.max(0,1-(R/g)**2));i.fillRect(Z(h-F),Z(d-R-3),Z(F*2),3)}for(let R=0;R<p*.5;R+=3){const F=p*Math.sqrt(Math.max(0,1-(R/(p*.5))**2));i.fillRect(Z(h-F),Z(d+R),Z(F*2),3)}for(let R=0;R<32;R++){const F=R/32*Qt,O=mo(h,d,p,g,F,0),k=Math.sin(F)>0;i.globalAlpha=k?.95:.4,i.fillStyle=k?q.i3:q.i1,i.fillRect(Z(O[0])-2,Z(O[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=q.i2;for(const R of[.12,.3,.5,.7,.88]){const F=Math.PI*R;for(let O=0;O<=x;O+=.16){const k=mo(h,d,p,g,F,O);i.fillRect(Z(k[0])-1,Z(k[1])-1,2,3)}}const _=a*14|0;let S=0;for(const R of[.42,.9])if(!(R>x))for(let F=0;F<=14;F++){const O=Math.PI*F/14,k=mo(h,d,p,g,O,R);i.globalAlpha=.9,i.fillStyle=q.i3,i.fillRect(Z(k[0])-2,Z(k[1])-1,4,2),F%2===0&&(S++,i.globalAlpha=1,i.fillStyle=S%16===_%16?"#ffffff":q.brass,i.fillRect(Z(k[0])-1,Z(k[1])-3,3,3))}if(y>=1){const R=mo(h,d,p,g,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=q.i0,i.fillRect(Z(R[0])-5,Z(R[1])-4,10,6),i.fillStyle=q.brass,i.fillRect(Z(R[0])-4,Z(R[1])-3,8,4),i.fillStyle=q.brassL,i.fillRect(Z(R[0])-3,Z(R[1])-3,3,1)}}})};te.oso_E=t=>{const e=t.uid,n=t.x,r=t.y,o=t.ex??t.x,i=t.ey??t.y,l=t.dur||.3,s=o-n,u=i-r,a=Math.hypot(s,u)||1,f=T(n,r),c=T(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,p=(c[1]-f[1])/h,g=[],y=Math.max(2,Math.floor(a/.5));for(let x=1;x<=y;x++){const M=x/(y+1),v=x%2?1:-1;g.push({s:M,x:n+s*M-u/a*.17*v,y:r+u*M+s/a*.17*v})}z({type:"custom",layer:"ground",dur:l+2,x:n,y:r,draw(x,M){const v=M*(l+2);for(const _ of g){const S=v-_.s*l;if(S<0)continue;const[R,F]=T(_.x,_.y);x.globalAlpha=Math.max(0,.7*(1-S/2)),Jo(x,Ia,R,F,3,{t:q.e0,p:q.e0}),x.globalAlpha*=.6,Jo(x,Ia,R-1,F-1,3,{p:q.e1})}}}),z({type:"custom",layer:"top",dur:l+.3,x:n,y:r,draw(x,M,v){const _=M*(l+.3),S=Ve(e),R=Math.min(1,_/l),F=S&&_<l?S.x:n+s*R,O=S&&_<l?S.y:r+u*R;if(_<l){if(v.n=v.n||0,v.n<30){v.n+=2;for(let ue=0;ue<2;ue++)I(F+m(-.2,.2),O+m(-.2,.2),.1,-s/a*m(.5,1.5)+m(-.5,.5),-u/a*m(.5,1.5)+m(-.5,.5),m(.4,1.2),m(.5,.8),ue?q.e2:q.dust,5,-.3,!1,.9)}const[k,U]=T(F,O,.45),B=k+d*26,H=U+p*26,Y=-p,ne=d;for(let ue=0;ue<3;ue++){const w=ue*8+_*120%8;x.globalAlpha=.9-ue*.25,x.fillStyle=ue?q.dust:"#ffffff";const C=[B-d*w,H-p*w];$r(x,C,[C[0]-d*10+Y*13,C[1]-p*10+ne*13],3),$r(x,C,[C[0]-d*10-Y*13,C[1]-p*10-ne*13],3)}x.globalAlpha=.6,x.fillStyle=q.i3;for(let ue=0;ue<4;ue++){const w=(ue-1.5)*9,C=14+(ue*7+_*200)%12;$r(x,[k-d*20+Y*w,U-p*20+ne*w],[k-d*(20+C)+Y*w,U-p*(20+C)+ne*w],2)}}else{if(!v.end){v.end=!0,se(5);for(let H=0;H<14;H++){const Y=Math.random()*Qt,ne=m(1.5,3);I(o,i,.15,Math.cos(Y)*ne,Math.sin(Y)*ne,m(.8,2),.6,H%2?q.dust:q.e3,5,2,!1,.9)}}const k=(_-l)/.3,[U,B]=T(o+s/a*.5,i+u/a*.5,.45);x.globalAlpha=1-k;for(let H=0;H<8;H++){const Y=H/8*Qt+.2,ne=6+k*14,ue=ne+10*(1-k);x.fillStyle=H%2?q.amberL:"#ffffff",$r(x,[U+Math.cos(Y)*ne,B+Math.sin(Y)*ne*.7],[U+Math.cos(Y)*ue,B+Math.sin(Y)*ue*.7],4)}}}})};te.oso_R=t=>{const e=t.uid,n=t.x,r=t.y,o=t.radius||3.6,i=Array.from({length:8},(l,s)=>uu(s/8*Qt+m(-.2,.2),o*m(.45,.65),5));se(10),z({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(l,s){const[u,a]=T(n,r),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=Ch(o)*(.15+.95*(1-(1-h)*(1-h))),p=5-c;l.globalAlpha=1-h;for(let g=0;g<56;g++){if(g%7>=5)continue;const y=g/56*Qt+c*.2,x=u+Math.cos(y)*d,M=a+Math.sin(y)*d*.5;l.fillStyle=c===0?q.amberL:q.amber,l.fillRect(Z(x-p/2),Z(M-p/2),p,p),g%7===2&&(l.fillStyle=q.amberD,l.fillRect(Z(x*.94+u*.06-1),Z(M*.94+a*.06-1),3,3))}}}}),z({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(l,s){l.globalAlpha=.8*(1-s),l.fillStyle=q.e0;for(const u of i)fu(l,n,r,u,Math.min(1,s*7))}}),z({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:e,draw(l,s){const u=Ve(e),a=u?u.x:n,f=u?u.y:r,c=u&&u.scale||1,[h,d]=T(a,f,1.7*c+s*.5),p=s<.07?2:s<.14?3:4;l.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,l.globalAlpha*=.85+.15*Math.sin(s*60),Jo(l,Th,h,d,p,{e:q.amberD,i:q.amberL,h:q.amber,s:q.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let g=0;g<3;g++){const y=34+(s*90+g*22)%66,x=1-(s*90+g*22)%66/66;l.globalAlpha=x*(s>.7?(1-s)/.3:1),l.fillStyle=q.amberL;for(let M=-.7;M<=.71;M+=.175){const v=Math.cos(M)*y,_=Math.sin(M)*y*.8;l.fillRect(Z(h+v)-2,Z(d+6+_)-2,4,4),l.fillRect(Z(h-v)-2,Z(d+6+_)-2,4,4)}}}});for(let l=0;l<30;l++){const s=Math.random()*Qt,u=Math.sqrt(Math.random())*o*.9;I(n+Math.cos(s)*u,r+Math.sin(s)*u,0,Math.cos(s)*.4,Math.sin(s)*.4,m(2,4),m(.5,.8),[q.e1,q.e2,q.e3][l%3],l%4?3:4,12,!1,.97)}for(let l=0;l<12;l++){const s=Math.random()*Qt,u=m(.3,1.2);I(n+Math.cos(s)*u,r+Math.sin(s)*u,.5,0,0,m(.8,1.6),m(.8,1.2),q.amberL,2,-.3,!0,.98)}};ut.oso=t=>{const e=t.x,n=t.y;z({type:"custom",layer:"top",dur:.24,x:e,y:n,draw(r,o){const[i,l]=T(e,n,.08),s=Z(8+o*26),u=1-o;r.globalAlpha=u,r.fillStyle=q.i0,r.fillRect(i-s-1,l-2,s*2+2,5),r.fillStyle=q.dust,r.fillRect(i-s,l-1,Z(s*.7),3),r.fillRect(i+s-Z(s*.7),l-1,Z(s*.7),3);const[a,f]=T(e,n,.5),c=Z(12*(1-o));r.fillStyle=q.i3,r.fillRect(a-c-4,f-3,8,6),r.fillRect(a+c-4,f-3,8,6),r.fillStyle=q.i4,r.fillRect(a-2,f-6,4,12)}});for(let r=0;r<4;r++)I(e,n,.5,m(-1.5,1.5),m(-1.5,1.5),m(2,3.5),.3,q.brassL,2,12,!0);for(let r=0;r<3;r++)I(e,n,.05,m(-1,1),m(-1,1),m(1,2),.45,q.e2,3,10,!1)};const Et="#ffffff",St="#e6eeff",Xn="#bfe9ff",ei="#7fdcf4",Ph="#3a9ab8",Ze="#fff0b4",Ea="#efe0b8",Ua="#c8a878",Rh="#34408a",ka="#a9bfdc",pe=Math.round,Nn=Math.PI*2;function Ie(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(pe(e),pe(n),r,o)}function ds(t,e,n,r,o){t.fillStyle=o;for(let i=-r;i<=r;i+=2){const l=pe(Math.sqrt(Math.max(0,r*r-i*i)));t.fillRect(pe(e-l),pe(n+i),l*2,2)}}function jr(t,e,n,r,o,i,l,s=1){const u=Math.cos(o)*r*i,a=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,pe(2*s));t.fillStyle=l;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),p=h-a,g=pe(n+h*s);if(Math.abs(p)>=f){t.fillRect(pe(e-d),g,pe(2*d),c);continue}const y=Math.sqrt(f*f-p*p),x=u-y,M=u+y;if(x>-d&&t.fillRect(pe(e-d),g,pe(Math.min(x,d)+d),c),M<d){const v=Math.max(M,-d);t.fillRect(pe(e+v),g,pe(d-v),c)}}}function zh(t,e,n,r,o,i,l){e=pe(e),n=pe(n);const s=[3,2,1,2][o],u=Math.max(1,s-1),a=r>>1;t.fillStyle=i,t.fillRect(e-a-r*s,n-2*r,r*s,2*r),t.fillRect(e+a,n-2*r,r*s,2*r),t.fillRect(e-a-r*u,n,r*u,r),t.fillRect(e+a,n,r*u,r),t.fillStyle=l,t.fillRect(e-a,n-2*r,r,3*r),t.fillRect(e-a-1,n-3*r,1,r),t.fillRect(e+a,n-3*r,1,r)}function Da(t,e,n,r,o,i,l,s,u){for(let a=-o;a<=o;a+=2){const f=r*Math.sqrt(Math.max(0,1-a*a/(o*o)));if(f<1)continue;const c=pe(e+a*i-f),h=pe(e+a*i+f),d=pe(n+a);t.globalAlpha=.45*u,t.fillStyle=l,t.fillRect(c,d,h-c,2),t.globalAlpha=.95*u,t.fillStyle=s,t.fillRect(c,d,2,2),t.fillRect(h-2,d,2,2)}}function Oh(t,e,n,r,o){e=pe(e),n=pe(n),t.fillStyle=o,t.fillRect(e,n,3*r,r),t.fillRect(e+r,n+r,r,r),t.fillRect(e,n+2*r,3*r,r)}const cu=t=>{const e=Ve(t);return e&&!e.dead&&!rt(e)?e:null},Fh=t=>{const e=window.SIM&&window.SIM.HEROES;return e&&e[t.hero]&&e[t.hero].abil[t.key]},hu=t=>(t=Math.min(1,Math.max(0,t))-1,1+2.9*t*t*t+1.9*t*t);At.polilla_A=(t,e,n,r,o,i)=>{qe(!0);const l=Wt(),s=.65+.35*Math.sin(i*20),u=pe(5+s*3);l.globalAlpha=s,Ie(l,n-u,r-1,u*2,2,ei),Ie(l,n-1,r-u,2,u*2,ei),l.globalAlpha=1,Ie(l,n-2,r-2,4,4,Et);const a=i*14;Ie(l,n+Math.cos(a)*8-1,r+Math.sin(a)*4-1,2,2,Ze),Ie(l,n-Math.cos(a)*8-1,r-Math.sin(a)*4-1,2,2,Ze),qe(!1)};ut.polilla=t=>{z({type:"custom",layer:"top",add:!0,dur:.25,x:t.x,y:t.y,draw(e,n){const[r,o]=T(t.x,t.y,.5),i=pe(10*(1-n))+2;e.globalAlpha=1-n,Ie(e,r-i,o-1,i*2,2,St),Ie(e,r-1,o-i,2,i*2,St),Ie(e,r-2,o-2,4,4,Et)}});for(let e=0;e<5;e++)I(t.x,t.y,.5,m(-1,1),m(-1,1),m(.2,.8),.6,e%2?Ze:Xn,2,.4,!0,.9)};At.polilla_Q=(t,e,n,r,o,i)=>{const s=e.z||.45;n=pe(n),r=pe(r),qe(!0);const u=Wt(),a=u.createRadialGradient(n,r,0,n,r,9*2.6);a.addColorStop(0,"rgba(190,233,255,0.55)"),a.addColorStop(1,"rgba(127,220,244,0)"),u.fillStyle=a,u.fillRect(n-9*3,r-9*3,9*6,9*6),qe(!1),ds(t,n,r,10,Ph),ds(t,n,r,9,St),jr(t,n,r,9,Math.PI*.85,.55,ka);for(let h=0;h<3;h++){const d=i*2+h*2.1;Ie(t,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,ka)}Ie(t,n-4,r-5,2,2,Et);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,p=14+h*10;t.globalAlpha=1-d,Oh(t,n-f*p,r-c*p-6-d*14,h<2?1:2,h%2?Ze:St)}t.globalAlpha=1,Math.random()<.4&&I(e.x,e.y,s,m(-.3,.3),m(-.3,.3),-.4,.6,Math.random()<.5?Ze:St,2,.5,!0,.9)};te.polilla_Q=t=>{const e=t.ux||0,n=t.uy||0;z({type:"custom",layer:"top",add:!0,dur:.35,x:t.x,y:t.y,draw(r,o){const[i,l]=T(t.x+e*.4,t.y+n*.4,.75),s=pe(14*(1-o))+2,u=pe(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)Ie(r,i-s,l-1,s*2,2,Ze),Ie(r,i-1,l-s,2,s*2,Ze);else for(let a=1;a<=u;a+=2)Ie(r,i+a,l+a,2,2,Ze),Ie(r,i-a-2,l+a,2,2,Ze),Ie(r,i+a,l-a-2,2,2,Ze),Ie(r,i-a-2,l-a-2,2,2,Ze);Ie(r,i-2,l-2,4,4,Et);for(let a=0;a<6;a++){const f=-1.2+a*.4+o*2,c=16+a;Ie(r,i+Math.cos(f)*c-1,l+Math.sin(f)*c*.6-1,2,2,a%2?Ze:St)}}});for(let r=0;r<10;r++)I(t.x+e*.4,t.y+n*.4,.75,e*m(.5,1.5)+m(-.4,.4),n*m(.5,1.5)+m(-.4,.4),m(0,.4),m(.6,1),r%2?Ze:St,2,.6,!0,.9)};te.polilla_W=t=>{if(t.type==="heal"){z({type:"custom",layer:"top",add:!0,dur:.9,x:t.x,y:t.y,draw(n,r){const[o,i]=T(t.x,t.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),jr(n,o,i,7,-.6,.5,St);for(let l=0;l<3;l++){const s=(r*1.6+l/3)%1;Ie(n,o-10+l*10,i+s*50,2,4,l%2?Xn:Et)}}});for(let n=0;n<8;n++)I(t.x+m(-.35,.35),t.y+m(-.35,.35),m(1,1.6),0,0,-m(.6,1.2),m(.7,1.1),n%2?St:Ze,2,0,!0,.98);return}if(t.type!=="healring")return;const e=t.radius||4.2;z({type:"custom",layer:"top",add:!0,dur:1.2,x:t.x,y:t.y,draw(n,r){const o=cu(t.uid),i=o?o.x:t.x,l=o?o.y:t.y,[s,u]=T(i,l,2.2),a=r*1.2,f=pe(15*hu(a/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),jr(n,s,u,f+2,-.7,.5,ei),jr(n,s,u,f,-.7,.55,Et);for(let c=0;c<5;c++){const h=b.T*2+c*1.26;(b.T*6+c)%2<1&&Ie(n,s+Math.cos(h)*(f+10)-1,u+Math.sin(h)*(f+6)-1,2,2,Ze)}}}),z({type:"custom",layer:"ground",add:!0,dur:1.2,x:t.x,y:t.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const l=Math.max(0,Math.min(1,(r-i)/(1-i)));if(l<=0)continue;const s=e*o*(.3+.7*(1-(1-l)*(1-l)));n.globalAlpha=.85*(1-l);for(let u=0;u<36;u++){const a=u/36*Nn,[f,c]=T(t.x+Math.cos(a)*s,t.y+Math.sin(a)*s);Ie(n,f-1,c-1,u%3?2:3,2,u%2?Xn:Et)}}}});for(let n=0;n<40;n++){const r=m(0,Nn),o=Math.sqrt(Math.random())*e*.9;I(t.x+Math.cos(r)*o,t.y+Math.sin(r)*o,m(2.2,3),m(-.15,.15),m(-.15,.15),-m(1.2,2),m(1.1,1.6),[St,Xn,Et,Ze][n%4],2,.4,!0,.99)}};te.polilla_E=t=>{const e=t.dur||3;z({type:"custom",layer:"top",dur:e+.3,x:t.x,y:t.y,uid:t.uid,draw(n,r,o){const i=cu(t.uid);if(!i)return;const l=r*o.dur;!o.end&&l>.3&&(l>e||typeof i.shield=="number"&&i.shield<=0)&&(o.end=l);const s=o.end?Math.max(0,1-(l-o.end)/.25):1;if(s<=0)return;const u=l<.22?hu(l/.22):1,a=.85+.15*Math.sin(b.T*8),[f,c]=T(i.x,i.y,.75);for(const d of[-1,1]){const p=f+d*(9+15*u),g=c-9-3*u,y=f+d*(7+10*u),x=c+9;Da(n,y,x,10*u*a,8,.4*d,Ua,Ea,s),Da(n,p,g,15*u*a,13,-.45*d,Ea,Ua,s),n.globalAlpha=.9*s,u>.5&&(ds(n,p+d*2,g-1,4,Rh),Ie(n,p+d*2-1,g-2,2,2,Ze),Ie(n,p+d*2-2,g-3,1,1,Et))}qe(!0);const h=Wt();for(let d=0;d<6;d++){const p=d%2?1:-1,g=(b.T*3+d*.37)%1;g>.3||(h.globalAlpha=(1-g/.3)*s,Ie(h,f+p*(12+(d>>1)*9)*u-1,c-20+(d>>1)*10,2,2,Et))}qe(!1)}});for(let n=0;n<18;n++){const r=m(0,Nn),o=m(1,2.2);I(t.x,t.y,.75,Math.cos(r)*o,Math.sin(r)*o,m(.3,1.2),m(.5,.9),n%3?Ze:St,2,.5,!0,.92)}};te.polilla_R=t=>{if(t.type!=="cast_spores")return;const e=t.radius||3,n=Fh(t),r=n&&n.dur||4,o=10,i=e*ee.HW*Math.SQRT2,l=e*ee.HH*Math.SQRT2,s=Array.from({length:o},(f,c)=>({ox:m(-.6,.6)*e,oy:m(-.6,.6)*e,w:m(.8,1.6),p:m(0,Nn),z:m(.6,2.4),ph:c})),u=Array.from({length:7},(f,c)=>({o:(c/6-.5)*1.7,w:pe(m(8,26)),p:m(0,Nn)}));let a=0;z({type:"custom",layer:"ground",add:!0,dur:r,x:t.x,y:t.y,draw(f,c){const h=c*r,d=Math.min(1,h/.25,(r-h)/.4),[p,g]=T(t.x,t.y);f.globalAlpha=.13*d,f.fillStyle=ei;for(let y=-l;y<=l;y+=2){const x=i*Math.sqrt(Math.max(0,1-y*y/(l*l)));f.fillRect(pe(p-x),pe(g+y),pe(x*2),2)}f.globalAlpha=.4*d,jr(f,p,g,pe(e*30),-.5,.5,Xn,.5),f.globalAlpha=.85*d;for(let y=0;y<40;y++){const x=y/40*Nn+h*.35,[M,v]=T(t.x+Math.cos(x)*e,t.y+Math.sin(x)*e);Ie(f,M-1,v-1,2,2,y%4?Xn:Et)}}}),z({type:"custom",layer:"top",add:!0,dur:r,x:t.x,y:t.y,draw(f,c){const h=c*r,d=Math.min(1,(r-h)/.4),p=Math.min(1,h/.25),[g,y]=T(t.x,t.y),x=330,M=f.createLinearGradient(0,y-x,0,y);M.addColorStop(0,"rgba(160,230,255,0)"),M.addColorStop(1,"rgba(160,230,255,0.14)"),f.globalAlpha=d,f.fillStyle=M,f.fillRect(pe(g-i*p),pe(y-x),pe(i*2*p),x);for(const v of u){const _=g+v.o*i*p,S=(_-g)/i,R=y-l*Math.sqrt(Math.max(0,1-S*S));f.globalAlpha=d*(.07+.06*Math.sin(b.T*3+v.p))*(h<.25?2:1),Ie(f,_-v.w/2,y-x,v.w,pe(R-(y-x)),St)}for(const v of s){const _=h*v.w+v.p,S=t.x+v.ox+Math.cos(_)*.6+Math.sin(_*2.3)*.2,R=t.y+v.oy+Math.sin(_)*.6,[F,O]=T(S,R,v.z+Math.sin(h*1.7+v.p)*.4);f.globalAlpha=d*Math.min(1,h/.4),zh(f,F,O,2,((b.T*14|0)+v.ph)%4,v.ph%3?St:Et,Xn)}if(a<50&&Math.random()<.3){a++;const v=m(0,Nn),_=Math.sqrt(Math.random())*e;I(t.x+Math.cos(v)*_,t.y+Math.sin(v)*_,m(2.5,3.5),0,0,-m(.8,1.4),m(1.5,2.2),a%3?St:Ze,2,0,!0,.99)}}}),se(2)};const ie=Math.round,en=Math.PI*2,K={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},vi=t=>t*ee.HW*Math.SQRT2;function cn(t,e,n,r){r=Math.max(1,ie(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),l=r/2;for(let s=0;s<=i;s++)t.fillRect(ie(e[0]+(n[0]-e[0])*s/i-l),ie(e[1]+(n[1]-e[1])*s/i-l),r,r)}function fr(t,e,n,r,o,i=2){if(!(r<1||o<1))for(let l=-o;l<o;l+=i){const s=(l+i/2)/o,u=r*Math.sqrt(Math.max(0,1-s*s));u>=.5&&t.fillRect(ie(e-u),ie(n+l),Math.max(1,ie(u*2)),i)}}function ms(t,e,n,r,o,i){const l=e[0].length,s=e.length,u=ie(n-l*o/2),a=ie(r-s*o/2);for(const f in i){t.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<l;h++)e[c][h]===f&&t.fillRect(u+h*o,a+c*o,o,o)}}function wr(t,e,n,r,o,i,l=0,s=0){for(let u=0;u<o;u++){if(s&&u%s===0)continue;const a=l+u/o*en;t.fillRect(ie(e+Math.cos(a)*r-i/2),ie(n+Math.sin(a)*r*.5-i/2),i,i)}}const kr=new Map;function Ih(t){if(kr.has(t))return!1;if(kr.size>300)for(const[e,n]of kr)b.T-n>4&&kr.delete(e);return kr.set(t,b.T),!0}function Eh(t){const e=b.game,n=[];if(!e)return n;const r=(t.w||.55)*.6;for(const o of e.units)o.dead||o.team===t.team||o.team==="neutral"&&o.kind!=="monster"||rt(o)||Math.hypot(o.x-t.x,o.y-t.y)<r+(o.r||.4)&&n.push(o);return n}const La=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],Uh=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function du(t,e,n,r){ms(t,La,e+1,n+1,r,{g:K.deep,v:K.deep}),ms(t,La,e,n,r,{g:K.pad,v:K.moss})}function kh(t,e){const n=Math.random()*6;z({type:"custom",layer:"ground",dur:.6,x:t,y:e,draw(r,o){const[i,l]=T(t,e);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=K.waterD,wr(r,i,l,8+o*14,10,2,n,3),du(r,i,l+ie(Math.sin(o*9+n)),o<.55?2:1)}})}function Dh(t,e,n,r){const o=Math.cos(r),i=Math.sin(r),l=u=>[e+o*u,n+i*u];t.fillStyle=K.ink,cn(t,l(-11),l(11),5),t.fillStyle=K.moss,cn(t,l(-8),l(-1),3),t.fillStyle="#d8e2ea",cn(t,l(0),l(8),3),t.fillStyle="#ffffff",cn(t,l(7),l(11),2);const s=l(-11);t.fillStyle="#c8a040",t.fillRect(ie(s[0]-2),ie(s[1]-2),4,4),t.fillStyle=K.ink,t.fillRect(ie(s[0]-1),ie(s[1]-1),2,2)}function Lh(t,e){z({type:"custom",layer:"ground",dur:.45,x:t,y:e,draw(n,r){const[o,i]=T(t,e);n.globalAlpha=1-r,n.fillStyle=K.foam,wr(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=K.water,wr(n,o,i,3+r*16,10,2)}}),z({type:"custom",layer:"top",add:!0,dur:.16,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.5),l=ie(12*(1-r))+2;n.fillStyle=K.padL,n.fillRect(o-l,i-1,l*2,3),n.fillRect(o-1,i-l,3,l*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*en,o=m(.8,2);I(t,e,.45,Math.cos(r)*o,Math.sin(r)*o,m(1.5,3),.5,n%3?K.water:K.padL,2,9,!1,.95)}}const Dr=new Map;function Gh(t){let e=Dr.get(t.id);if(!e&&(e={p:[],drop:0,seen:b.T},Dr.set(t.id,e),Dr.size>40))for(const[n,r]of Dr)b.T-r.seen>2&&Dr.delete(n);return e.seen=b.T,e}te.rana_Q=t=>{const e=t.ux||1,n=t.uy||0,r=t.x+e*.45,o=t.y+n*.45;z({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,l){const[s,u]=T(r,o,.55),a=ie(9*(1-l))+2;i.fillStyle=K.pad;for(let f=-a;f<=a;f+=2){const c=a-Math.abs(f);i.fillRect(s-c,u+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-a-3,u,a*2+6,1),i.fillRect(s,u-a-3,1,a*2+6)}});for(let i=0;i<9;i++)I(r,o,.5,e*m(2,4)+m(-.7,.7),n*m(2,4)+m(-.7,.7),m(.6,1.6),.4,i%2?K.water:K.padL,2,6,!1,.9)};At.rana_Q=(t,e,n,r,o,i)=>{const l=e.z||.45,s=Gh(e);s.p.unshift([e.x,e.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,kh(e.x,e.y)),qe(!0);const u=Wt();for(let a=1;a<s.p.length;a++)u.globalAlpha=.75*(1-a/s.p.length),u.fillStyle=a<3?K.padL:K.pad,cn(u,T(s.p[a-1][0],s.p[a-1][1],l),T(s.p[a][0],s.p[a][1],l),Math.max(2,7-a));u.globalAlpha=1,qe(!1),Dh(t,n,r,i*26);for(const a of Eh(e))Ih("rq"+e.id+":"+a.id)&&Lh(a.x,a.y)};function Nh(t,e,n){const r=Array.from({length:5},(i,l)=>({a:l/5*en+m(-.3,.3),d:n*m(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,l)=>({a:l/12*en,h:m(26,44),w:Math.random()<.5?4:6}));z({type:"custom",layer:"ground",dur:1.1,x:t,y:e,draw(i,l,s){if(!s.fired){s.fired=!0,se(4),Rn({type:"wet",x:t,y:e,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*en,d=m(1,3.2);I(t+Math.cos(h)*.3,e+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,m(2.5,5),m(.5,.8),c%4?K.foam:K.water,3,12,!1,.97)}for(let c=0;c<6;c++)I(t+m(-.6,.6),e+m(-.6,.6),.1,m(-.4,.4),m(-.4,.4),m(1,2),.7,K.mud,4,8,!1)}const[u,a]=T(t,e),f=vi(n);i.globalAlpha=.35*(1-l),i.fillStyle=K.waterD,fr(i,u,a,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=l*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?K.foam:K.water,wr(i,u,a,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-l)*2.5);for(const c of r){const h=vi(c.d)*(.6+l*.4);du(i,u+Math.cos(c.a)*h,a+Math.sin(c.a)*h*.5+Math.sin(l*10+c.ph)*1.5,2)}l>.08&&ms(i,Uh,u,a-4,l<.2?2:3,{g:K.moss,p:K.pink,P:K.pinkL,y:K.eye})}}),z({type:"custom",layer:"top",dur:.55,x:t,y:e,draw(i,l){const[s,u]=T(t,e),a=vi(n)*(.35+l*.25),f=Math.sin(Math.PI*Math.min(1,l*1.2));i.globalAlpha=Math.min(1,(1-l)*2);for(const c of o){const h=s+Math.cos(c.a)*a,d=u+Math.sin(c.a)*a*.5,p=ie(c.h*f),g=Math.cos(c.a)*l*10;p<2||(i.fillStyle=K.waterD,i.fillRect(ie(h-c.w/2+g*.5),ie(d-p),c.w,p),i.fillStyle=K.water,i.fillRect(ie(h-c.w/2+g*.5),ie(d-p),c.w-2,p-2),i.fillStyle=K.foam,i.fillRect(ie(h-c.w/2+g-1),ie(d-p-3),c.w+2,4))}}})}te.rana_W=t=>{if(t.ex===void 0)return;const e=t.x,n=t.y,r=t.ex,o=t.ey,i=t.dur||.45,l=1.7,s=r-e,u=o-n,a=Math.hypot(s,u)||1;z({type:"custom",layer:"ground",dur:.5,x:e,y:n,draw(f,c){const[h,d]=T(e,n);f.globalAlpha=1-c,f.fillStyle=K.waterD,wr(f,h,d,10+c*34,18,3,0,3),f.fillStyle=K.foam,wr(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)I(e,n,.15,-s/a*m(1,2.5)+m(-.8,.8),-u/a*m(1,2.5)+m(-.8,.8),m(1.5,3),.5,f%3?K.mud:K.water,3,9,!1);z({type:"custom",layer:"top",dur:i+.25,x:e,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),p=c>.75?(1-c)*4:1;for(let g=d;g<=h;g+=.05){const[y,x]=T(e+s*g,n+u*g,.3+6.8*g*(1-g)),M=(g-d)/Math.max(.01,h-d);f.globalAlpha=p*(.3+.7*M),f.fillStyle=K.deep,f.fillRect(ie(y)-3,ie(x)-3,6,6),f.fillStyle=M>.7?K.padL:K.pad,f.fillRect(ie(y)-2,ie(x)-2,4,4)}}}),z({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,Nh(r,o,l))}})};te.rana_E=t=>{const e=t.x,n=t.y,r=Array.from({length:9},(i,l)=>{const s=l/9*en+m(-.3,.3),u=l===0?0:m(.3,.85);return{x:e+Math.cos(s)*u,y:n+Math.sin(s)*u,r:m(14,22),z:m(.15,.6),up:m(.2,.5),col:[K.smokeA,K.smokeB,K.smokeC][l%3],dl:m(0,.12)}}),o=[0,3,6].map((i,l)=>({p:r[i+1],t0:.15+l*.1,blink:m(.3,.6)}));z({type:"custom",layer:"top",add:!0,dur:.14,x:e,y:n,draw(i,l){const[s,u]=T(e,n,.2),a=ie(14*(1-l))+3;i.fillStyle="#fff6c0",i.fillRect(s-a,u-2,a*2,4),i.fillRect(s-2,u-a,4,a*2),i.fillStyle=K.padL,i.fillRect(s-a/2,u-a/2,a,a)}}),z({type:"custom",layer:"top",dur:1.5,x:e,y:n,draw(i,l){const s=l*1.5;for(const u of r){const a=Math.max(0,Math.min(1,(s-u.dl)/1.3));if(a<=0)continue;const[f,c]=T(u.x,u.y,u.z+u.up*a),h=ie(u.r*(.35+.65*Math.sqrt(a)));i.globalAlpha=a<.55?.92:Math.max(0,.92*(1-(a-.55)/.45)),i.fillStyle="#3e4a3c",fr(i,f+2,c+3,h,h*.8,3),i.fillStyle=u.col,fr(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",fr(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const u of o){const a=s-u.t0;if(a<0||a>.95)continue;const[f,c]=T(u.p.x,u.p.y,u.p.z+u.p.up*.4);i.globalAlpha=a>.75?(.95-a)*5:1;const h=Math.abs(a-u.blink)<.06;for(const d of[-1,1]){const p=ie(f+d*6)-3,g=ie(c)-3;if(i.fillStyle=K.deep,i.fillRect(p-1,g-1,8,h?3:7),h){i.fillStyle=K.moss,i.fillRect(p,g,6,1);continue}i.fillStyle=K.eye,i.fillRect(p,g,6,5),i.fillStyle=K.ink,i.fillRect(p+1,g+2,4,1),i.fillStyle="#ffffff",i.fillRect(p+1,g,1,1)}}}});for(let i=0;i<14;i++){const l=Math.random()*en,s=m(1,2.6);I(e,n,.3,Math.cos(l)*s,Math.sin(l)*s,m(1,2.5),.6,i%2?K.ink:K.moss,2,7,!1,.92)}};function Bh(t,e,n,r){z({type:"custom",layer:"top",dur:.42,x:t,y:e,draw(o,i){const l=T(t,e,.35),s=T(n,r,.35),u=Math.min(1,i*5),a=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?K.ink:K.moss;for(let c=a;c<=u;c+=.03){const h=ie((2+8*Math.sin(Math.PI*c))*(1-a*.6))+(f?0:3),d=l[0]+(s[0]-l[0])*c,p=l[1]+(s[1]-l[1])*c+Math.sin(c*14)*1.5;o.fillRect(ie(d-h/2),ie(p-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();I(t+(n-t)*i,e+(r-e)*i,.35,m(-.6,.6),m(-.6,.6),m(.2,1),.5,K.ink,3,6,!1)}}function Ga(t,e,n,r,o,i,l){const s=Math.cos(r),u=Math.sin(r),a=14;for(let f=0;f<3;f++){t.fillStyle=f===0?K.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=a;d++){const p=(d/a*2-1)*l,g=Math.max(1,ie(h*(1-Math.abs(d/a*2-1))));t.fillRect(ie(e+s*p*o/2-g/2+c),ie(n+u*p*o/2-g/2+c),g,g)}}}function $h(t,e){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+m(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));z({type:"custom",layer:"top",dur:.5,x:t,y:e,draw(o,i){const l=i*.5,[s,u]=T(t,e,.5);for(const a of n){const f=l-a.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),Ga(o,s+a.ox,u+a.oy,a.a,a.len,ie(6*h)+1,c),Ga(o,s+a.ox,u+a.oy,a.a+Math.PI/2,a.len,ie(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),z({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:e,draw(o,i){const l=i*.4,[s,u]=T(t,e,.5);for(const a of n){const f=l-a.t0;if(f<0||f>.1)continue;const c=ie(16*(1-f/.1))+2;o.fillStyle=K.padL,o.fillRect(s+a.ox-c,u+a.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*en,i=m(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:m(5,11),drips:[m(-1,1),m(-1,1),m(-1,1)]}});z({type:"custom",layer:"ground",dur:1.8,x:t,y:e,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const l of r){const[s,u]=T(t+l.dx,e+l.dy),a=l.r*Math.min(1,i*12);o.fillStyle=K.inkP,fr(o,s,u,a,a*.5,2),o.fillStyle=K.ink,fr(o,s-1,u-1,a*.6,a*.3,2);for(const f of l.drips)o.fillRect(ie(s+f*a*1.8),ie(u+f*a*.6),3,2);o.fillStyle=K.moss,o.fillRect(ie(s+a*.4),ie(u-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*en,l=m(1.5,4.5);I(t,e,.5,Math.cos(i)*l,Math.sin(i)*l,m(1,3),m(.4,.7),o%5?K.ink:K.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*en;I(t,e,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,K.padL,2,0,!0)}se(8)}te.rana_R=t=>{if(t.type==="blink"){Bh(t.x,t.y,t.ex??t.x,t.ey??t.y);return}$h(t.x,t.y)};ut.rana=t=>{const e=t.x,n=t.y,r=Math.random()<.5?-1:1;z({type:"custom",layer:"top",dur:.2,x:e,y:n,draw(o,i){const[l,s]=T(e,n,.5),u=Math.min(1,i*4),a=[l-9*r,s-3],f=[l-2*r,s+6],c=[l+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=u<.35?[a[0]+(f[0]-a[0])*u/.35,a[1]+(f[1]-a[1])*u/.35]:f,d=u<.35?h:[f[0]+(c[0]-f[0])*(u-.35)/.65,f[1]+(c[1]-f[1])*(u-.35)/.65];o.fillStyle=K.moss,cn(o,a,h,5),u>=.35&&cn(o,f,d,5),o.fillStyle="#ffffff",cn(o,a,h,2),u>=.35&&cn(o,f,d,2)}});for(let o=0;o<5;o++)I(e,n,.45,m(-1.2,1.2),m(-1.2,1.2),m(1,2.2),.35,o%2?K.water:K.padL,2,8,!1)};const Hh="#7a879c",Wh="#363e50",Xh="#c9d3e2",Na="#e8b858",Vh="#ffa040",mu="#f2e8d2",io="#cdbb9a",ra="#a08f72",pu="#6f6250",Cr="#33241a",Yh="#8a7356",gu="#9a948a",yu="#7a7468",xu="#5e584e",qh="#c4beb2",Kh="#ffe2a0",jh="#d89a3a",Zh="#fff8e6",Qh="#ff5a1a",Ge=Math.round,bi=Math.PI*2;function et(t,e,n,r,o,i){t.fillStyle=i,t.fillRect(Ge(e),Ge(n),r,o)}function po(t,e,n,r,o,i,l){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-e),Math.abs(o-n))/Math.max(1,i*.8)));t.fillStyle=l;for(let u=0;u<=s;u++)t.fillRect(Ge(e+(r-e)*u/s-i/2),Ge(n+(o-n)*u/s-i/2),i,i)}function Ba(t,e,n,r,o){const[i,l]=T(e,n),s=r*ee.HW*Math.SQRT2,u=s*.5;t.fillStyle=o;for(let a=-u;a<=u;a+=2){const f=s*Math.sqrt(Math.max(0,1-a*a/(u*u)));t.fillRect(Ge(i-f),Ge(l+a),Ge(f*2),2)}}function vu(t,e){const n=(t-e)*ee.HW,r=(t+e)*ee.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const bu=t=>{const e=Ve(t);return e&&!e.dead&&!rt(e)?e:null},ti=()=>[gu,yu,xu,ra][Math.random()*4|0];function Jh(t,e,n,r,o){if(e=Ge(e)-6,n=Ge(n)-5,et(t,e,n,12,10,Wh),et(t,e+1,n+1,10,8,Hh),et(t,e+1,n+1,10,2,Xh),et(t,e+2,n+6,2,2,o),et(t,e+8,n+6,2,2,o),r>=0&&r<9){const i=t.globalAlpha;t.globalAlpha=i*.7,et(t,e+1+r,n+1,2,8,"#ffffff"),t.globalAlpha=i}}const e0=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],t0=[Kh,jh,Zh,Qh];function Mi(t,e,n,r,o){e=Ge(e),n=Ge(n);for(const[i,l,s,u,a]of e0){const f=o>0?i:-i-s;t.fillStyle=t0[a],t.fillRect(e+f*r,n+l*r,s*r,u*r)}}ut.rino=t=>{z({type:"custom",layer:"top",add:!0,dur:.24,x:t.x,y:t.y,draw(e,n){const[r,o]=T(t.x,t.y,.4),i=Ge(10*Math.min(1,n*2.5));e.globalAlpha=1-n;for(let l=0;l<=i;l++){const s=Math.PI*.75-l*.16;et(e,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,l>i-3?2:3,l>i-3?2:3,l>i-2?"#ffffff":mu)}}});for(let e=0;e<3;e++)I(t.x,t.y,.3,m(-1.5,1.5),m(-1.5,1.5),m(1.5,3),.5,ti(),3,10,!1,.95);for(let e=0;e<2;e++)I(t.x+m(-.2,.2),t.y+m(-.2,.2),.1,m(-.4,.4),m(-.4,.4),.5,.5,io,5,0,!1,.9);se(1.5)};te.rino_Q=t=>{const e=t.ex||t.x,n=t.ey||t.y,r=Math.max(.12,t.dur||.3),o=e-t.x,i=n-t.y,l=Math.hypot(o,i)||1,s=-i/l,u=o/l,a=o/l,f=i/l,[c,h]=vu(o,i),d=Math.max(4,Math.ceil(l*4)),p=Array.from({length:d+1},(v,_)=>m(-.06,.06)+(_%2?.05:-.05)),g=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:m(.15,.35)}:null),y=Array.from({length:8},(v,_)=>({k:(_+.5)/8,o:m(-.35,.35),r:Array.from({length:4},()=>[m(-10,6),m(-8,2),Ge(m(6,12)),Ge(m(5,8)),[io,ra,io,pu][Math.random()*4|0]])}));let x=0,M=!1;z({type:"custom",layer:"ground",dur:r+1.6,x:t.x,y:t.y,draw(v,_,S){const R=_*S.dur,F=Math.min(1,R/r),O=Math.floor(F*d);v.globalAlpha=.8*Math.min(1,(S.dur-R)/.6);for(const k of[-.3,.3]){const U=k>0?1:-1;let[B,H]=T(t.x+s*k,t.y+u*k);for(let Y=1;Y<=O;Y++){const ne=Y/d,ue=k+p[Y]*U,[w,C]=T(t.x+o*ne+s*ue,t.y+i*ne+u*ue);po(v,B,H+1,w,C+1,2,Yh),po(v,B,H,w,C,2,Cr);const A=g[Y];if(A&&A.s===U){const[E,D]=T(t.x+o*ne+s*(ue+U*A.l)+a*A.l*.5,t.y+i*ne+u*(ue+U*A.l)+f*A.l*.5);po(v,w,C,E,D,1,Cr)}B=w,H=C}}}}),z({type:"custom",layer:"top",dur:r+1,x:t.x,y:t.y,draw(v,_,S){const R=_*S.dur,F=Math.min(1,R/r);for(;x<18*F;){x++;const O=Math.random()*F;I(t.x+o*O+m(-.3,.3),t.y+i*O+m(-.3,.3),.1,-a*m(.5,2)+m(-1,1),-f*m(.5,2)+m(-1,1),m(2,4),m(.5,.8),ti(),3,12,!1,.95)}if(R>=r&&!M){M=!0,se(5);for(let O=0;O<12;O++){const k=Math.atan2(f,a)+m(-.9,.9),U=m(2,4.5);I(e+a*.5,n+f*.5,.2,Math.cos(k)*U,Math.sin(k)*U,m(2,4),m(.5,.8),ti(),3,12,!1,.95)}}for(const O of y){const k=R-O.k*r;if(k<0||k>.9)continue;const U=k/.9,B=1+U*1.2,[H,Y]=T(t.x+o*O.k+s*O.o,t.y+i*O.k+u*O.o,.15+U*.5);v.globalAlpha=.6*(1-U);for(const ne of O.r)et(v,H+ne[0]*B,Y+ne[1]*B,Ge(ne[2]*B),Ge(ne[3]*B),ne[4])}}}),z({type:"custom",layer:"top",add:!0,dur:r+.08,x:t.x,y:t.y,draw(v,_,S){const R=bu(t.uid);if(!R)return;const F=_*S.dur;v.globalAlpha=F>r?Math.max(0,1-(F-r)/.08):1;const[O,k]=T(R.x+a*.6,R.y+f*.6,.45);for(let H=0;H<6;H++){const Y=7-H;et(v,O+c*H*2.5-Y/2,k+h*H*2.5-Y/2,Y,Y,H<2?mu:"#ffffff")}const[U,B]=T(R.x,R.y,.5);v.globalAlpha*=.6;for(let H=0;H<5;H++){const Y=(H-2)*9,ne=24+H*13%3*10;po(v,U-h*Y-c*26,B+c*Y-h*26,U-h*Y-c*(26+ne),B+c*Y-h*(26+ne),1,"#fff6e0")}}})};te.rino_W=t=>{const e=t.dur||3,n=Array.from({length:8},(o,i)=>{const l=i<5;return{a:l?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:l,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,l,s)=>{const u=bu(t.uid);if(!u)return;const a=l*s.dur,f=a>e?Math.max(0,1-(a-e)/.25):1;if(f<=0)return;const[c,h]=T(u.x,u.y,.42);for(const d of n){if(d.front!==o)continue;const p=Math.min(1,Math.max(0,(a-d.t0)/.18));if(p<=0)continue;if(p>=1&&!d.hit){d.hit=!0;for(let v=0;v<3;v++)I(u.x+Math.cos(d.a)*.4,u.y+Math.sin(d.a)*.4,.45,m(-2,2),m(-2,2),m(1,2.5),.3,v?Vh:Na,2,8,!0,.9)}const g=(1-p)*(1-p)*46,y=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,M=a-d.t0-.18;i.globalAlpha=f,Jh(i,y+Math.cos(d.a)*g,x+Math.sin(d.a)*g*.5-g*.6,Ge((b.T*30+d.a*6)%30),M>=0&&M<.14?"#ffffff":Na)}};z({type:"custom",layer:"ground",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!1)}),z({type:"custom",layer:"top",dur:e+.25,x:t.x,y:t.y,uid:t.uid,draw:r(!0)}),se(3)};te.rino_E=t=>{const e=t.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*bi+m(-.08,.08),j:m(.9,1.08),w:Ge(m(4,7)),h:Ge(m(3,6)),col:[gu,yu,xu][i%3]}));z({type:"custom",layer:"ground",dur:1.4,x:t.x,y:t.y,draw(o,i){const l=i*1.4,s=Math.min(1,l/.45),u=e*(1-(1-s)*(1-s)),a=Math.min(1,(1.4-l)/.5);o.globalAlpha=.45*a,Ba(o,t.x,t.y,.75,"#3a2a1c"),o.globalAlpha=.55*a,Ba(o,t.x,t.y,.4,"#24180e");for(const[f,c,h]of[[.45,Cr,2],[.7,Cr,2],[.95,io,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const p=d/36*bi,[g,y]=T(t.x+Math.cos(p)*u*f,t.y+Math.sin(p)*u*f);et(o,g-h/2,y-1,h,2,c)}}for(const f of r){const[c,h]=T(t.x+Math.cos(f.a)*u*f.j,t.y+Math.sin(f.a)*u*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*a,et(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=a,et(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),et(o,c-f.w/2,h-f.h-d,f.w,1,qh)}}}),z({type:"custom",layer:"top",add:!0,dur:.18,x:t.x,y:t.y,draw(o,i){const[l,s]=T(t.x,t.y,.05),u=Ge(30+110*i);o.globalAlpha=1-i,et(o,l-u,s-1,u*2,2,"#fff2d0"),et(o,l-u*.6,s-3,Ge(u*1.2),1,"#ffd890");for(const a of[-1,1])et(o,l+a*(u+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=m(0,bi),l=e*m(1.5,2.5);I(t.x+Math.cos(i)*.3,t.y+Math.sin(i)*.3,.1,Math.cos(i)*l,Math.sin(i)*l,m(3,6),m(.5,.9),ti(),Math.random()<.3?4:3,14,!1,.96)}se(8)};te.rino_R=t=>{const e=t.ux||0,n=t.uy||0,r=Math.atan2(n,e),o=t.range||3.6,i=t.angle||1.1,l=1,s=[0,-1,1,-2,2].map(a=>({a:r+a*i*.4,del:Math.abs(a)*.06})),u=(a,f)=>{const c=Math.min(1,Math.max(0,(f-a.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[t.x+Math.cos(a.a)*h,t.y+Math.sin(a.a)*h,c,h]};z({type:"custom",layer:"ground",dur:1.7,x:t.x,y:t.y,draw(a,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);a.globalAlpha=.2*h,a.fillStyle="#4a3420",a.beginPath();let[d,p]=T(t.x,t.y);a.moveTo(Ge(d),Ge(p));for(let g=0;g<=12;g++){const y=r-i+2*i*g/12;[d,p]=T(t.x+Math.cos(y)*o,t.y+Math.sin(y)*o),a.lineTo(Ge(d),Ge(p))}a.closePath(),a.fill(),a.globalAlpha=.7*h;for(const g of s){const[,,,y]=u(g,c),x=g.a+Math.PI/2;for(let M=.6;M<y;M+=.55){const v=Math.round(M/.55)%2?.12:-.12,[_,S]=T(t.x+Math.cos(g.a)*M+Math.cos(x)*v,t.y+Math.sin(g.a)*M+Math.sin(x)*v);et(a,_-4,S-1,3,3,Cr),et(a,_+1,S-1,3,3,Cr)}}}}),z({type:"custom",layer:"top",add:!0,dur:l,x:t.x,y:t.y,draw(a,f){const c=f*l;for(const h of s){const[d,p,g]=u(h,c);if(c<h.del)continue;const y=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(y<=0)continue;const[x,M]=T(d,p,.55),[v]=vu(Math.cos(h.a),Math.sin(h.a)),_=v>=0?1:-1,S=g<.5?3:4,[R,F]=T(t.x,t.y,.55),O=x-R,k=M-F;a.globalAlpha=y*.18,Mi(a,x-O*.35,M-k*.35,S,_),a.globalAlpha=y*.35,Mi(a,x-O*.17,M-k*.17,S,_),a.globalAlpha=y,Mi(a,x,M,S,_)}}});for(let a=0;a<40;a++){const f=r+m(-i,i),c=m(.4,o*.8),h=m(2,5);I(t.x+Math.cos(f)*c,t.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,m(.5,1.5),m(.5,.9),[io,ra,pu][a%3],4,3,!1,.9)}se(10)};const Re=Math.round,le={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function ni(t,e,n,r,o){t.fillStyle=o,t.fillRect(Re(e-r/2),Re(n-r/2),r,r)}const so=(t,e=.15,n=.7)=>t<e?t/e:t>n?Math.max(0,(1-t)/(1-n)):1;function n0(t,e,n,r,o,i){const l=e.length,s=e[0].length,u=Re(n-s*o/2),a=Re(r-l*o/2);for(let f=0;f<l;f++)for(let c=0;c<s;c++){const h=i[e[f][c]];h&&(t.fillStyle=h,t.fillRect(u+c*o,a+f*o,o,o))}}function Mu(t,e,n,r,o){const i=Re(e),l=Re(n);o&&(t.fillStyle=o,t.fillRect(i-5,l-3,10,2),t.fillRect(i-7,l-1,14,2),t.fillRect(i-5,l+1,10,2)),t.fillStyle=r,t.fillRect(i-5,l-5,10,2),t.fillRect(i-5,l+3,10,2),t.fillRect(i-7,l-3,2,2),t.fillRect(i+5,l-3,2,2),t.fillRect(i-9,l-1,2,2),t.fillRect(i+7,l-1,2,2),t.fillRect(i-7,l+1,2,2),t.fillRect(i+5,l+1,2,2)}function _i(t,e,n,r,o,i,l,s){const u=Math.max(1,Math.ceil(Math.hypot(r-e,o-n)/i));t.fillStyle=s;for(let a=0;a<=u;a++){const f=a/u;t.fillRect(Re(e+(r-e)*f-l/2),Re(n+(o-n)*f-l/2),l,l)}}const r0=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function _u(t,e,n,r,o,i,l,s){t.fillStyle=le.deep,t.fillRect(e,n-o,r,o),t.fillStyle=le.teal,t.fillRect(e,n-o,r,Re(o*.62)),t.fillStyle=le.aqua,t.fillRect(e,n-o,r,Re(o*.3)),t.fillStyle=le.foam,t.fillRect(e+i,n-o-2+l,r,3),s&&(t.fillStyle=le.white,t.fillRect(e+i*2,n-o-4+l,3,2))}te.tortuga_Q=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||1.7,o=Ve(t.uid);let i=1,l=0;if(o){const v=e-o.x,_=n-o.y,S=Math.hypot(v,_);S>.05&&(i=v/S,l=_/S)}const s=-l,u=i,a=s+u>=0?1:-1,f=(s-u)*ee.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-l)*ee.HW,p=(i+l)*ee.HH,g=Math.hypot(d,p)||1,y=Re(d/g*3),x=Re(p/g*2);z({type:"custom",layer:"ground",dur:2,x:e,y:n,draw(v,_){const S=Math.min(1,_*3)*(_>.6?(1-_)/.4:1);ze(e,n,r*.95,null,`rgba(18,80,110,${.32*S})`);for(let R=0;R<2;R++){const F=(_*2.4+R*.5)%1,O=r*.9*F;v.globalAlpha=S*(1-F);for(let k=0;k<22;k++){const U=k/22*6.283,[B,H]=T(e+Math.cos(U)*O,n+Math.sin(U)*O);ni(v,B,H,2,le.sea)}}v.globalAlpha=1}});const M={n:0,sp:!1};return z({type:"custom",layer:"top",dur:.75,x:e,y:n,draw(v,_){const S=-r*.95+_*r*1.9,R=Math.sin(Math.min(1,_*1.08)*Math.PI),F=Math.sqrt(Math.max(0,r*r-S*S))+.25,O=Math.floor(F*2/c);for(let k=0;k<=O;k++){const U=a>0?-F+k*c:F-k*c,B=1-Math.abs(U)/F,H=.85+.15*Math.sin(U*9+_*24),Y=Re((8+30*Math.sqrt(Math.max(0,B)))*R*H/2)*2;if(Y<4)continue;const[ne,ue]=T(e+i*S+s*U,n+l*S+u*U);_u(v,Re(ne-h/2),Re(ue),h,Y,y,x,(U*7.7+_*30|0)%3===0)}if(M.n<32&&R>.3)for(let k=0;k<2;k++){M.n++;const U=m(-F,F);I(e+i*S+s*U,n+l*S+u*U,.35*R,i*m(.8,2),l*m(.8,2),m(1,2.5),.45,Math.random()<.5?le.foam:le.sea,2,7,!1)}if(!M.sp&&_>.82){M.sp=!0;for(let k=0;k<14;k++){const U=m(-r*.6,r*.6);I(e+i*r*.8+s*U,n+l*r*.8+u*U,.2,i*m(1,3)+m(-.5,.5),l*m(1,3)+m(-.5,.5),m(2,4),.55,le.aqua,3,9,!1)}se(3)}}}),!0};function o0(t,e){z({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:e,draw(n,r){const[o,i]=T(t,e,.1),l=so(r,.1,.6);for(let s=0;s<10;s++){const u=s*.628+r*11,a=r*58+s*4,f=18*(1-r*.5),c=Math.sin(u)>0;n.globalAlpha=l*(c?1:.45),ni(n,o+Math.cos(u)*f,i-a+Math.sin(u)*f*.45,c?3:2,s%2?le.sea:le.foam)}if(r>.45){n.globalAlpha=so((r-.45)/.55,.2,.6);const s=Re(i-72-(r-.45)*20),u=Re(o);n.fillStyle=le.lamp,n.fillRect(u-5,s-1,10,3),n.fillRect(u-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)I(t+m(-.3,.3),e+m(-.3,.3),.2,0,0,m(1.2,2.2),.8,Math.random()<.5?le.sea:le.foam,2,0,!0);return!0}te.tortuga_W=t=>{if(t.type==="heal")return o0(t.x,t.y);if(t.type!=="healring")return!1;const e=t.x,n=t.y,r=t.radius||4.2,o=t.uid;z({type:"custom",layer:"ground",add:!0,dur:1.1,x:e,y:n,draw(s,u){const a=so(u,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,p=f*2.094+h*5+u*9,[g,y]=T(e+Math.cos(p)*d,n+Math.sin(p)*d);s.globalAlpha=a*(.35+.65*h),ni(s,g,y,h>.6?3:2,c%3===0?le.foam:c%3===1?le.sea:le.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+m(-.2,.2),d:s*.03+m(0,.05)});const l={"#":le.shell,a:le.sand};return z({type:"custom",layer:"top",dur:1.15,x:e,y:n,draw(s,u){for(const a of i){const f=Math.min(1,Math.max(0,(u-a.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=a.a0+c*4.2+u*2,[p,g]=T(e+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),n0(s,r0,p,g,2,l)}s.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:n,draw(s,u){const a=Ve(o),f=a?a.x:e,c=a?a.y:n,[h,d]=T(f,c,.95),p=Re(h),g=Re(d),y=so(u,.08,.5),x=Re(6+16*Math.sin(Math.min(1,u*2)*Math.PI/2));s.globalAlpha=y*.3,s.fillStyle=le.lamp,s.fillRect(p-8,g-8,16,16),s.globalAlpha=y,s.fillRect(p-x,g-1,x*2,2),s.fillRect(p-1,g-x,2,x*2),s.fillStyle=le.lampW,s.fillRect(p-3,g-3,6,6);for(let M=0;M<8;M++){const v=M*.785+u*5,_=10+u*30;ni(s,p+Math.cos(v)*_,g+Math.sin(v)*_*.5+u*40,2,le.lamp)}s.globalAlpha=1}}),!0};const Su=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([t,e],n)=>{for(let r=0;r<e;r++)Su.push({th:r/e*6.283+n*.31,ph:t,row:n})});te.tortuga_E=t=>{if(t.type!=="stoneskin")return!1;const e=t.uid,n=t.dur||3,r=t.x,o=t.y,i={broke:!1};z({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(l,s){const u=Ve(e);if(!u||u.dead)return;const a=s*n,[f,c]=T(u.x,u.y),h=Math.min(1,a/.18),d=1+(1-h)*.7,p=Math.max(0,(a-(n-.25))/.25),g=36*d,y=18*d,x=62*d,M=a*1.6%2.2-.3,v=Su.map(_=>{const S=_.th+a*.5,R=Math.cos(_.ph);return{d:_,th:S,x:f+Math.cos(S)*g*R+Math.cos(S)*p*30,y:c+Math.sin(S)*y*R-Math.sin(_.ph)*x-4-p*10+p*p*30,z:Math.sin(S)*R}}).sort((_,S)=>_.z-S.z);for(const _ of v){const S=a-(3-_.d.row)*.05;if(S<0)continue;_.y-=(1-Math.min(1,S/.1))*14;const R=_.z>-.15,F=Math.abs(_.d.ph-M)<.22;l.globalAlpha=(R?.85:.35)*(1-p)*Math.min(1,S*10),Mu(l,_.x,_.y,S<.06||F?le.white:le.foam,F?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(l.globalAlpha=1,!i.broke&&p>0){i.broke=!0;for(let _=0;_<16;_++){const S=m(0,6.283),R=m(1.5,3.5);I(u.x,u.y,m(.2,.9),Math.cos(S)*R,Math.sin(S)*R,m(1,3),.5,Math.random()<.5?le.foam:le.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let l=0;l<10;l++){const s=l/10*6.283;I(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,m(1.5,2.5),.4,Math.random()<.5?le.sand:le.shell,2,3,!1)}return!0};te.tortuga_R=t=>{if(t.type!=="splash")return!1;const e=t.x,n=t.y,r=t.radius||3.4,o=r*.24,i=[[0,0]];for(let a=0;a<6;a++){const f=Math.PI/6+a*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}z({type:"custom",layer:"ground",dur:1.9,x:e,y:n,draw(a,f){const c=so(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);ze(e,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(p,g)=>T(e+p*h,n+g*h);for(let p=0;p<2;p++){a.globalAlpha=c*(p?.75:.85);const g=p?le.lamp:le.shellD,y=p?2:3,x=p?-1:0,M=p?-2:0;for(const[v,_]of i)for(let S=0;S<6;S++){const R=S*Math.PI/3,F=(S+1)*Math.PI/3,[O,k]=d(v+Math.cos(R)*o,_+Math.sin(R)*o),[U,B]=d(v+Math.cos(F)*o,_+Math.sin(F)*o);_i(a,O+x,k+M,U+x,B+M,5,y,g)}for(let v=0;v<22;v++){const _=v/22*6.283,[S,R]=d(Math.cos(_)*r*.66,Math.sin(_)*r*.66),[F,O]=d(Math.cos(_)*r*.86,Math.sin(_)*r*.86);_i(a,S+x,R+M,F+x,O+M,5,y,g);const k=(v+1)/22*6.283,[U,B]=d(Math.cos(k)*r*.86,Math.sin(k)*r*.86);_i(a,F+x,O+M,U+x,B+M,6,y,g)}}a.globalAlpha=1}});const l=60,s=Array.from({length:l},(a,f)=>f).sort((a,f)=>{const c=a/l*6.283,h=f/l*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),u={crash:!1};z({type:"custom",layer:"top",dur:.95,x:e,y:n,draw(a,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),p=Math.sin(Math.min(1,f*1.05)*Math.PI),g=[];for(let y=0;y<l;y++){const x=y/l*6.283;g.push(T(e+Math.cos(x)*d,n+Math.sin(x)*d))}for(const y of s){const x=y/l*6.283,[M,v]=g[y],_=g[(y+1)%l][0],S=Math.max(4,Math.ceil(Math.abs(_-M))+2),R=Re((20+34*p)*(.82+.18*Math.sin(x*5+f*20))*p/2)*2;if(R<4)continue;const F=Math.cos(x)+Math.sin(x)>0;a.globalAlpha=F?.82:1;const O=F?2:-2;_u(a,Re(Math.min(M,_)-1),Re(v),S,R,Re(Math.cos(x-.785)*3),O,(y*7+(f*25|0))%4===0)}if(a.globalAlpha=1,!u.crash&&f>.7){u.crash=!0;for(let y=0;y<16;y++){const x=m(0,6.283);I(e+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*m(1,2.5),Math.sin(x)*m(1,2.5),m(1.5,3),.6,Math.random()<.5?le.foam:le.white,3,8,!1)}}}});for(let a=0;a<36;a++){const f=m(0,6.283),c=m(2,5);I(e+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,m(3.5,6.5),m(.8,1.1),[le.aqua,le.sea,le.foam,le.teal][a%4],Math.random()<.3?4:3,12,!1,.97)}return se(10),!0};ut.tortuga=t=>{const e=t.x,n=t.y,r=!!t.big;z({type:"custom",layer:"ground",dur:r?.5:.4,x:e,y:n,draw(i,l){const[s,u]=T(e,n),a=Re(s),f=Re(u);for(let c=0;c<(r?3:2);c++){const h=l*1.3-c*.18;if(h<=0||h>=1)continue;const d=Re(6+h*(r?34:24)),p=Re(d/2);i.globalAlpha=1-h,i.fillStyle=c?le.sea:le.foam,i.fillRect(a-d,f-p,d*2,2),i.fillRect(a-d,f+p-2,d*2,2),i.fillRect(a-d,f-p,2,p*2),i.fillRect(a+d-2,f-p,2,p*2)}i.globalAlpha=1}}),z({type:"custom",layer:"top",add:!0,dur:.18,x:e,y:n,draw(i,l){const[s,u]=T(e,n,.5);i.globalAlpha=1-l,Mu(i,s,u-l*8,le.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const l=m(0,6.283),s=m(1,2.5);I(e,n,.4,Math.cos(l)*s,Math.sin(l)*s,m(1.5,3),.4,i%2?le.aqua:le.foam,2,9,!1)}};const Q=Math.round,Kn=Math.PI*2,V={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},wu=t=>t*ee.HW*Math.SQRT2;function Ne(t,e,n,r){r=Math.max(1,Q(r));const o=Math.hypot(n[0]-e[0],n[1]-e[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),l=r/2;for(let s=0;s<=i;s++)t.fillRect(Q(e[0]+(n[0]-e[0])*s/i-l),Q(e[1]+(n[1]-e[1])*s/i-l),r,r)}function i0(t,e,n,r,o,i,l=!1){const s=e[0].length,u=e.length,a=Q(n-s*o/2),f=Q(r-u*o/2);for(const c in i){t.fillStyle=i[c];for(let h=0;h<u;h++)for(let d=0;d<s;d++)e[h][l?s-1-d:d]===c&&t.fillRect(a+d*o,f+h*o,o,o)}}function s0(t,e,n,r,o,i){const l=Math.abs(r),s=Q(e),u=Q(n);t.fillStyle=i,t.fillRect(s-1,u+2,1,2),l>.55?(t.fillStyle=o,t.fillRect(s-3,u,6,2),t.fillRect(s-2,u-1,4,1),t.fillRect(s-2,u+2,3,1),t.fillStyle=i,t.fillRect(s-2,u+1,4,1)):l>.2?(t.fillStyle=o,t.fillRect(s-2,u-1,3,4),t.fillStyle=i,t.fillRect(s-1,u,1,2)):(t.fillStyle=i,t.fillRect(s-1,u-1,1,4))}const Lr=new Map;function Cu(t){if(Lr.has(t))return!1;if(Lr.size>300)for(const[e,n]of Lr)b.T-n>4&&Lr.delete(e);return Lr.set(t,b.T),!0}function a0(t){const e=b.game,n=[];if(!e)return n;const r=(t.w||.6)*.6;for(const o of e.units)o.dead||o.team===t.team||o.team==="neutral"&&o.kind!=="monster"||rt(o)||Math.hypot(o.x-t.x,o.y-t.y)<r+(o.r||.4)&&n.push(o);return n}const l0=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];ut.zorra=t=>{const e=t.x,n=t.y,r=!!t.big;if(z({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:e,y:n,draw(o,i){const[l,s]=T(e,n,.5),u=Q(4+i*(r?18:12)),a=r?4:3;o.globalAlpha=1-i,o.fillStyle=V.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(l+f*u-a/2,s+c*u*.8-a/2,a,a);o.fillStyle=V.f2;for(let f=0;f<6;f++){const c=f/6*Kn+i*3;o.fillRect(Q(l+Math.cos(c)*(6+i*8))-1,Q(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=V.cream,o.fillRect(l-2,s-2,4,4))}}),I(e,n,.6,m(-.5,.5),m(-.5,.5),.4,.8,Math.random()<.5?V.leaf:V.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)I(e,n,.5,m(-1.5,1.5),m(-1.5,1.5),m(1,2),.3,V.f1,2,4,!0)};At.zorra_A=(t,e,n,r,o,i)=>{const l=Math.cos(o),s=Math.sin(o),u=(c,h=0)=>[n+l*c-s*h,r+s*c+l*h];qe(!0);const a=Wt();for(let c=0;c<3;c++){a.globalAlpha=.8-c*.22,a.fillStyle=c?V.f2:V.f1;const h=u(-15-c*4,Math.sin(i*40+c)*1.5);a.fillRect(Q(h[0])-2+(c>>1),Q(h[1])-2+(c>>1),4-c,4-c)}a.globalAlpha=1,qe(!1),t.fillStyle=V.woodD,Ne(t,u(-13),u(3),3),t.fillStyle=V.wood,Ne(t,u(-12),u(2),1),t.fillStyle=V.steel,Ne(t,u(3),u(7),3),t.fillStyle="#ffffff",Ne(t,u(6),u(8),1),t.fillStyle=V.leaf,Ne(t,u(-13,0),u(-9,-3),2),t.fillStyle=V.leafD,Ne(t,u(-13,1),u(-10,2),2);const f=typeof e.homing=="object"?e.homing:e.homing!=null?Ve(e.homing):null;f&&!f.dead&&Math.hypot(f.x-e.x,f.y-e.y)<.25+(f.r||.4)*.5+(e.speed||15)*.035&&Cu("za"+e.id)&&(ut.zorra({x:f.x,y:f.y,big:e.dmg>(e.src&&e.src.ad||0)*1.3}),Me.sfx("atk_zorra",f.x,f.y,.6))};te.zorra_Q=t=>{const e=t.ux||1,n=t.uy||0,r=t.x+e*.45,o=t.y+n*.45,i=T(t.x,t.y),l=T(t.x+e,t.y+n),s=Math.hypot(l[0]-i[0],l[1]-i[1])||1,u=(l[0]-i[0])/s,a=(l[1]-i[1])/s;z({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),p=-a,g=u;f.globalAlpha=c<.6?1:(1-c)/.4;const y=[];for(let v=-5;v<=5;v++)y.push([h+p*v*3.4-u*v*v*.45,d+g*v*3.4-a*v*v*.45]);f.fillStyle=V.woodD;for(const v of y)f.fillRect(Q(v[0])-2,Q(v[1])-2,4,4);f.fillStyle=V.wood;for(const v of y)f.fillRect(Q(v[0])-1,Q(v[1])-1,2,2);f.fillStyle=V.leaf;for(const v of[y[0],y[10]])f.fillRect(Q(v[0])-2,Q(v[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),M=[h-u*(11.25+x),d-a*(11.25+x)];f.fillStyle=V.cream,Ne(f,y[0],M,1),Ne(f,M,y[10],1)}}),z({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),p=4+c*16;f.fillStyle=V.f1;for(let g=0;g<8;g++){const y=g/8*Kn;f.fillRect(Q(h+u*8+Math.cos(y)*p)-2,Q(d+a*8+Math.sin(y)*p*.7)-2,4,4)}}});for(let f=0;f<5;f++)I(r,o,.55,-n*m(-2,2)+e*m(0,1),e*m(-2,2)+n*m(0,1),m(.5,1.5),.9,f%2?V.leaf:V.leafL,3,1.5,!1,.95)};At.zorra_Q=(t,e,n,r,o,i)=>{const l=Math.cos(o),s=Math.sin(o),u=(f,c=0)=>[n+l*f-s*c,r+s*f+l*c];qe(!0);const a=Wt();for(let f=0;f<=16;f++){const c=f/16,h=Q(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,p=u(-22-c*46,d);a.globalAlpha=.85-c*.35,a.fillStyle=c>.8?V.cream:c>.45?V.fox:V.f1,a.fillRect(Q(p[0]-h/2),Q(p[1]-h/2),h,h)}a.globalAlpha=1,qe(!1),t.fillStyle=V.woodD,Ne(t,u(-22),u(4),4),t.fillStyle=V.wood,Ne(t,u(-21),u(3),2),t.fillStyle="#20202a",Ne(t,u(3,-4),u(12),3),Ne(t,u(3,4),u(12),3),t.fillStyle=V.steel,Ne(t,u(4,-2),u(11),2),Ne(t,u(4,2),u(11),2),t.fillStyle="#ffffff",Ne(t,u(9),u(13),2);for(const f of[-1,1])t.fillStyle=V.leafD,Ne(t,u(-23,0),u(-15,f*5),3),t.fillStyle=V.leaf,Ne(t,u(-22,f),u(-16,f*4),2),t.fillStyle=V.leafL,t.fillRect(Q(u(-17,f*4)[0]),Q(u(-17,f*4)[1]),2,2);Math.random()<.3&&I(e.x,e.y,e.z||.45,m(-.4,.4),m(-.4,.4),-.2,.7,Math.random()<.6?V.leaf:V.autumn,3,.6,!1,.95);for(const f of a0(e))if(Cu("zq"+e.id+":"+f.id)){const c=e.vx||1,h=e.vy||0,d=Math.hypot(c,h)||1;z({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(p,g){const y=T(f.x-c/d*.7,f.y-h/d*.7,.5),x=T(f.x+c/d*.9,f.y+h/d*.9,.5);p.globalAlpha=1-g,p.fillStyle=V.fox,Ne(p,y,x,Q(6*(1-g))+1),p.fillStyle=V.cream,Ne(p,y,x,2)}});for(let p=0;p<6;p++)I(f.x,f.y,.5,c/d*m(1,3)+m(-.8,.8),h/d*m(1,3)+m(-.8,.8),m(.5,1.5),.35,p%2?V.f1:V.fox,2,3,!0)}};te.zorra_W=t=>{const e=t.uid,n=t.dur||4;let r=t.x,o=t.y;const i=Array.from({length:9},(l,s)=>({a:s/9*Kn,h:s/9,sp:m(4.5,6),col:[V.leaf,V.leafL,V.autumn][s%3],dk:s%3===2?V.foxD:V.leafD,r:m(.5,.65)}));for(let l=0;l<14;l++){const s=l/14*Kn,u=m(1.5,2.5);I(t.x+Math.cos(s)*.3,t.y+Math.sin(s)*.3,m(.2,.8),Math.cos(s+1.3)*u,Math.sin(s+1.3)*u,m(.8,1.6),m(.6,.9),[V.leaf,V.leafL,V.autumn][l%3],3,1,!1,.94)}z({type:"custom",layer:"top",dur:n,x:t.x,y:t.y,uid:e,draw(l,s,u){const a=Ve(e),f=s*n;if(a&&(r=a.x,o=a.y),!a||a.dead||f>.2&&a.status&&!a.status.atkspd){for(const g of i)I(r+Math.cos(g.a+f*g.sp)*g.r,o+Math.sin(g.a+f*g.sp)*g.r,.5,Math.cos(g.a)*2,Math.sin(g.a)*2,.5,.7,g.col,3,1,!1,.93);u.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,p]=T(r,o,.35);l.globalAlpha=.55*h,l.fillStyle="#e8fff0";for(let g=0;g<2;g++){const y=f*7+g*Math.PI,x=wu(.62)*c;for(let M=0;M<7;M++){const v=y+M*.16;l.fillRect(Q(d+Math.cos(v)*x)-1,Q(p+Math.sin(v)*x*.45-g*14),3-(M>4?1:0),2)}}for(const g of i){const y=g.a+f*g.sp,x=(g.h+f*.45)%1,M=g.r*c*(1-x*.35),[v,_]=T(r+Math.cos(y)*M,o+Math.sin(y)*M,.15+x*1.1);l.globalAlpha=h*(Math.sin(y)>0?1:.55)*Math.min(1,(1-x)*4),s0(l,v,_,Math.sin(f*11+g.a*3),g.col,g.dk)}}})};te.zorra_E=t=>{const e=t.x,n=t.y,r=t.ex??t.x,o=t.ey??t.y,i=t.dur||.22,l=T(e,n),s=T(r,o),u=s[0]<l[0],a=[0,.34,.67,1].map(f=>({s:f,x:e+(r-e)*f,y:n+(o-n)*f}));z({type:"custom",layer:"top",add:!0,dur:i+.45,x:e,y:n,draw(f,c){const h=c*(i+.45);for(const d of a){const p=h-d.s*i;if(p<0||p>.42)continue;const g=.8*(1-p/.42),[y,x]=T(d.x,d.y,.32+p*.3);f.globalAlpha=g,i0(f,l0,y,x,3,{o:V.f2,t:V.f1,c:V.f0,w:"#ffffff"},u);for(let M=0;M<4;M++){const v=y+(M-1.5)*9*(u?-1:1),_=Q(4+5*Math.abs(Math.sin(h*30+M*1.7))+p*14);f.fillStyle=M%2?V.f3:V.f1,f.fillRect(Q(v)-2,Q(x-12-_),4,_),f.fillStyle=V.f0,f.fillRect(Q(v)-1,Q(x-12-_),2,2)}}}}),z({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.3+c*.4),p=14+c*10;for(let g=0;g<6;g++){const y=g/6*Kn+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+g)),f.fillStyle=g%2?V.f3:V.f2,f.fillRect(Q(h+Math.cos(y)*p)-3,Q(d+Math.sin(y)*p*.5)-3,6,6),f.fillStyle=V.f0,f.fillRect(Q(h+Math.cos(y)*p)-1,Q(d+Math.sin(y)*p*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();I(e+(r-e)*c+m(-.2,.2),n+(o-n)*c+m(-.2,.2),.3,m(-.3,.3),m(-.3,.3),m(.8,1.6),m(.5,.8),[V.f1,V.f2,V.f3][f%3],3,-.5,!0,.95)}};te.zorra_R=t=>{const e=t.x,n=t.y,r=t.radius||3.2,o=3.2,i=Ve(t.uid),l=i?i.x:e-3,s=i?i.y:n-3;let u=l-e,a=s-n;const f=Math.hypot(u,a)||1;u/=f,a/=f,f<.5&&(u=-.7,a=-.7);const c=Array.from({length:7},(y,x)=>({ox:m(-.3,.3),oy:m(-.3,.3),dl:x*.03}));z({type:"custom",layer:"top",add:!0,dur:.5,x:l,y:s,draw(y,x){const M=x*.5;for(const v of c){const _=(M-v.dl)/.35;if(_<0||_>1)continue;const S=.6+_*4.5,R=l+v.ox-u*_*.8,F=s+v.oy-a*_*.8,O=T(R,F,S),k=T(R+u*.15,F+a*.15,S-.4);y.globalAlpha=1-_*.5,y.fillStyle=V.fox,Ne(y,k,O,3),y.fillStyle=V.f0,y.fillRect(Q(O[0])-2,Q(O[1])-2,4,4)}}});for(let y=0;y<8;y++)I(l,s,.6,m(-.5,.5),m(-.5,.5),m(2,4),.4,y%2?V.gold:V.f1,2,2,!0);const h=28,d=.45,p=Array.from({length:h},(y,x)=>{const M=Math.random()*Kn,v=Math.sqrt(Math.random())*r*.92,_=e+Math.cos(M)*v,S=n+Math.sin(M)*v;return{t0:.3+x*(2.5/h)+m(-.04,.04),lx:_,ly:S,sx:_+u*1.8+m(-.3,.3),sy:S+a*1.8+m(-.3,.3),landed:!1,tang:[0,1]}}),g=(y,x)=>T(y.sx+(y.lx-y.sx)*x,y.sy+(y.ly-y.sy)*x,4*(1-x*x));z({type:"custom",layer:"top",add:!0,dur:o,x:e,y:n,draw(y,x){const M=x*o;for(const v of p){const _=(M-v.t0)/d;if(_<0)continue;if(_>=1){if(!v.landed){v.landed=!0,I(v.lx,v.ly,.1,m(-.8,.8),m(-.8,.8),m(1,2),.35,Math.random()<.7?V.f1:V.leaf,2,6,!0);const B=g(v,1),H=g(v,.93),Y=Math.hypot(B[0]-H[0],B[1]-H[1])||1;v.tang=[(B[0]-H[0])/Y,(B[1]-H[1])/Y]}const U=(M-v.t0-d)/.14;if(U<1){const[B,H]=T(v.lx,v.ly),Y=Q(3+U*9);y.globalAlpha=1-U,y.fillStyle=V.gold,y.fillRect(B-Y,H-1,Y*2,2),y.fillRect(B-1,H-Q(Y/2),2,Y)}continue}const S=g(v,_),R=g(v,Math.max(0,_-.07)),F=Math.hypot(S[0]-R[0],S[1]-R[1])||1,O=(S[0]-R[0])/F,k=(S[1]-R[1])/F;y.globalAlpha=.35,y.fillStyle=V.f2;for(let U=1;U<=4;U++){const B=g(v,Math.max(0,_-U*.05));y.fillRect(Q(B[0])-1,Q(B[1])-1,3,3)}y.globalAlpha=1,y.fillStyle=V.fox,Ne(y,[S[0]-O*16,S[1]-k*16],S,3),y.fillStyle=V.gold,Ne(y,[S[0]-O*14,S[1]-k*14],S,1),y.fillStyle="#ffffff",y.fillRect(Q(S[0])-2,Q(S[1])-2,4,4)}}}),z({type:"custom",layer:"ground",dur:o,x:e,y:n,draw(y,x,M){const v=x*o,_=x>.85?(1-x)/.15:Math.min(1,v*4),[S,R]=T(e,n),F=wu(r);!M.sh&&v>.75&&(M.sh=!0,se(3)),y.globalAlpha=.7*_,y.fillStyle=V.fox;for(let O=0;O<10;O++){const k=O/10*Kn+v*.6,U=S+Math.cos(k)*F,B=R+Math.sin(k)*F*.5,H=-Math.cos(k),Y=-Math.sin(k)*.5;y.fillRect(Q(U)-2,Q(B)-2,4,4),y.fillRect(Q(U+H*6-Y*4)-1,Q(B+Y*6+H*2)-1,3,3),y.fillRect(Q(U+H*6+Y*4)-1,Q(B+Y*6-H*2)-1,3,3)}for(const O of p){if(!O.landed)continue;const[k,U]=T(O.lx,O.ly),B=O.tang[0],H=O.tang[1];y.globalAlpha=_,y.fillStyle="#00000055",y.fillRect(Q(k)-3,Q(U),6,2),y.fillStyle=V.woodD,Ne(y,[k-B*13,U-H*13],[k,U],3),y.fillStyle=V.wood,Ne(y,[k-B*12,U-H*12],[k-B*2,U-H*2],1),y.fillStyle=V.leaf,y.fillRect(Q(k-B*13)-2,Q(U-H*13)-1,2,3),y.fillStyle=V.autumn,y.fillRect(Q(k-B*13),Q(U-H*13)-2,2,3)}}})};var Xe=(t=>(t.Application="application",t.WebGLPipes="webgl-pipes",t.WebGLPipesAdaptor="webgl-pipes-adaptor",t.WebGLSystem="webgl-system",t.WebGPUPipes="webgpu-pipes",t.WebGPUPipesAdaptor="webgpu-pipes-adaptor",t.WebGPUSystem="webgpu-system",t.CanvasSystem="canvas-system",t.CanvasPipesAdaptor="canvas-pipes-adaptor",t.CanvasPipes="canvas-pipes",t.Asset="asset",t.LoadParser="load-parser",t.ResolveParser="resolve-parser",t.CacheParser="cache-parser",t.DetectionParser="detection-parser",t.MaskEffect="mask-effect",t.BlendMode="blend-mode",t.TextureSource="texture-source",t.Environment="environment",t.ShapeBuilder="shape-builder",t.Batcher="batcher",t))(Xe||{});const ps=t=>{if(typeof t=="function"||typeof t=="object"&&t.extension){if(!t.extension)throw new Error("Extension class must have an extension object");t={...typeof t.extension!="object"?{type:t.extension}:t.extension,ref:t}}if(typeof t=="object")t={...t};else throw new Error("Invalid extension type");return typeof t.type=="string"&&(t.type=[t.type]),t},go=(t,e)=>ps(t).priority??e,Cn={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...t){return t.map(ps).forEach(e=>{e.type.forEach(n=>this._removeHandlers[n]?.(e))}),this},add(...t){return t.map(ps).forEach(e=>{e.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(e):(o[n]=o[n]||[],o[n]?.push(e))})}),this},handle(t,e,n){const r=this._addHandlers,o=this._removeHandlers;if(r[t]||o[t])throw new Error(`Extension type ${t} already has a handler`);r[t]=e,o[t]=n;const i=this._queue;return i[t]&&(i[t]?.forEach(l=>e(l)),delete i[t]),this},handleByMap(t,e){return this.handle(t,n=>{n.name&&(e[n.name]=n.ref)},n=>{n.name&&delete e[n.name]})},handleByNamedList(t,e,n=-1){return this.handle(t,r=>{e.findIndex(i=>i.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((i,l)=>go(l.value,n)-go(i.value,n)))},r=>{const o=e.findIndex(i=>i.name===r.name);o!==-1&&e.splice(o,1)})},handleByList(t,e,n=-1){return this.handle(t,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((o,i)=>go(i,n)-go(o,n)))},r=>{const o=e.indexOf(r.ref);o!==-1&&e.splice(o,1)})}},u0={extension:{type:Xe.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Vo(()=>import("./browserAll-Dbz-Wnhj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},f0={extension:{type:Xe.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Vo(()=>import("./webworkerAll-BfeyY58w.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Qe{constructor(e,n,r){this._x=n||0,this._y=r||0,this._observer=e}clone(e){return new Qe(e??this._observer,this._x,this._y)}set(e=0,n=e){return(this._x!==e||this._y!==n)&&(this._x=e,this._y=n,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}var Si={exports:{}},$a;function c0(){return $a||($a=1,function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(u,a,f){this.fn=u,this.context=a,this.once=f||!1}function i(u,a,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||u,h),p=n?n+a:a;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],d]:u._events[p].push(d):(u._events[p]=d,u._eventsCount++),u}function l(u,a){--u._eventsCount===0?u._events=new r:delete u._events[a]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var a=[],f,c;if(this._eventsCount===0)return a;for(c in f=this._events)e.call(f,c)&&a.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(f)):a},s.prototype.listeners=function(a){var f=n?n+a:a,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,p=new Array(d);h<d;h++)p[h]=c[h].fn;return p},s.prototype.listenerCount=function(a){var f=n?n+a:a,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(a,f,c,h,d,p){var g=n?n+a:a;if(!this._events[g])return!1;var y=this._events[g],x=arguments.length,M,v;if(y.fn){switch(y.once&&this.removeListener(a,y.fn,void 0,!0),x){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,c),!0;case 4:return y.fn.call(y.context,f,c,h),!0;case 5:return y.fn.call(y.context,f,c,h,d),!0;case 6:return y.fn.call(y.context,f,c,h,d,p),!0}for(v=1,M=new Array(x-1);v<x;v++)M[v-1]=arguments[v];y.fn.apply(y.context,M)}else{var _=y.length,S;for(v=0;v<_;v++)switch(y[v].once&&this.removeListener(a,y[v].fn,void 0,!0),x){case 1:y[v].fn.call(y[v].context);break;case 2:y[v].fn.call(y[v].context,f);break;case 3:y[v].fn.call(y[v].context,f,c);break;case 4:y[v].fn.call(y[v].context,f,c,h);break;default:if(!M)for(S=1,M=new Array(x-1);S<x;S++)M[S-1]=arguments[S];y[v].fn.apply(y[v].context,M)}}return!0},s.prototype.on=function(a,f,c){return i(this,a,f,c,!1)},s.prototype.once=function(a,f,c){return i(this,a,f,c,!0)},s.prototype.removeListener=function(a,f,c,h){var d=n?n+a:a;if(!this._events[d])return this;if(!f)return l(this,d),this;var p=this._events[d];if(p.fn)p.fn===f&&(!h||p.once)&&(!c||p.context===c)&&l(this,d);else{for(var g=0,y=[],x=p.length;g<x;g++)(p[g].fn!==f||h&&!p[g].once||c&&p[g].context!==c)&&y.push(p[g]);y.length?this._events[d]=y.length===1?y[0]:y:l(this,d)}return this},s.prototype.removeAllListeners=function(a){var f;return a?(f=n?n+a:a,this._events[f]&&l(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,t.exports=s}(Si)),Si.exports}var h0=c0();const zr=Bl(h0),d0=Math.PI*2,m0=180/Math.PI,Ar=Math.PI/180;class Jt{constructor(e=0,n=0){this.x=0,this.y=0,this.x=e,this.y=n}clone(){return new Jt(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,n=e){return this.x=e,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return wi.x=0,wi.y=0,wi}}const wi=new Jt;class Be{constructor(e=1,n=0,r=0,o=1,i=0,l=0){this.array=null,this.a=e,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=l}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,n,r,o,i,l){return this.a=e,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=l,this}toArray(e,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,n){n=n||new Jt;const r=e.x,o=e.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(e,n){n=n||new Jt;const r=this.a,o=this.b,i=this.c,l=this.d,s=this.tx,u=this.ty,a=1/(r*l+i*-o),f=e.x,c=e.y;return n.x=l*a*f+-i*a*c+(u*i-s*l)*a,n.y=r*a*c+-o*a*f+(-u*r+s*o)*a,n}translate(e,n){return this.tx+=e,this.ty+=n,this}scale(e,n){return this.a*=e,this.d*=n,this.c*=e,this.b*=n,this.tx*=e,this.ty*=n,this}rotate(e){const n=Math.cos(e),r=Math.sin(e),o=this.a,i=this.c,l=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=l*n-this.ty*r,this.ty=l*r+this.ty*n,this}append(e){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=e.a*n+e.b*o,this.b=e.a*r+e.b*i,this.c=e.c*n+e.d*o,this.d=e.c*r+e.d*i,this.tx=e.tx*n+e.ty*o+this.tx,this.ty=e.tx*r+e.ty*i+this.ty,this}appendFrom(e,n){const r=e.a,o=e.b,i=e.c,l=e.d,s=e.tx,u=e.ty,a=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*a+o*c,this.b=r*f+o*h,this.c=i*a+l*c,this.d=i*f+l*h,this.tx=s*a+u*c+n.tx,this.ty=s*f+u*h+n.ty,this}setTransform(e,n,r,o,i,l,s,u,a){return this.a=Math.cos(s+a)*i,this.b=Math.sin(s+a)*i,this.c=-Math.sin(s-u)*l,this.d=Math.cos(s-u)*l,this.tx=e-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(e){const n=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,o=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=o*e.a+this.d*e.c,this.d=o*e.b+this.d*e.d}return this.tx=n*e.a+this.ty*e.c+e.tx,this.ty=n*e.b+this.ty*e.d+e.ty,this}decompose(e){const n=this.a,r=this.b,o=this.c,i=this.d,l=e.pivot,s=-Math.atan2(-o,i),u=Math.atan2(r,n),a=Math.abs(s+u);return a<1e-5||Math.abs(d0-a)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(n*n+r*r),e.scale.y=Math.sqrt(o*o+i*i),e.position.x=this.tx+(l.x*n+l.y*o),e.position.y=this.ty+(l.x*r+l.y*i),e}invert(){const e=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,l=e*o-n*r;return this.a=o/l,this.b=-n/l,this.c=-r/l,this.d=e/l,this.tx=(r*this.ty-o*i)/l,this.ty=-(e*this.ty-n*i)/l,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new Be;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return g0.identity()}static get shared(){return p0.identity()}}const p0=new Be,g0=new Be,zn=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],On=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Fn=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],In=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],gs=[],Au=[],yo=Math.sign;function y0(){for(let t=0;t<16;t++){const e=[];gs.push(e);for(let n=0;n<16;n++){const r=yo(zn[t]*zn[n]+Fn[t]*On[n]),o=yo(On[t]*zn[n]+In[t]*On[n]),i=yo(zn[t]*Fn[n]+Fn[t]*In[n]),l=yo(On[t]*Fn[n]+In[t]*In[n]);for(let s=0;s<16;s++)if(zn[s]===r&&On[s]===o&&Fn[s]===i&&In[s]===l){e.push(s);break}}}for(let t=0;t<16;t++){const e=new Be;e.set(zn[t],On[t],Fn[t],In[t],0,0),Au.push(e)}}y0();const He={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:t=>zn[t],uY:t=>On[t],vX:t=>Fn[t],vY:t=>In[t],inv:t=>t&8?t&15:-t&7,add:(t,e)=>gs[t][e],sub:(t,e)=>gs[t][He.inv(e)],rotate180:t=>t^4,isVertical:t=>(t&3)===2,byDirection:(t,e)=>Math.abs(t)*2<=Math.abs(e)?e>=0?He.S:He.N:Math.abs(e)*2<=Math.abs(t)?t>0?He.E:He.W:e>0?t>0?He.SE:He.SW:t>0?He.NE:He.NW,matrixAppendRotationInv:(t,e,n=0,r=0)=>{const o=Au[He.inv(e)];o.tx=n,o.ty=r,t.append(o)}},xo=[new Jt,new Jt,new Jt,new Jt];class Ut{constructor(e=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(e),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Ut(0,0,0,0)}clone(){return new Ut(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,n){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(e,n,r,o=.5){const{width:i,height:l}=this;if(i<=0||l<=0)return!1;const s=this.x,u=this.y,a=r*(1-o),f=r-a,c=s-a,h=s+i+a,d=u-a,p=u+l+a,g=s+f,y=s+i-f,x=u+f,M=u+l-f;return e>=c&&e<=h&&n>=d&&n<=p&&!(e>g&&e<y&&n>x&&n<M)}intersects(e,n){if(!n){const O=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=O)return!1;const U=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>U}const r=this.left,o=this.right,i=this.top,l=this.bottom;if(o<=r||l<=i)return!1;const s=xo[0].set(e.left,e.top),u=xo[1].set(e.left,e.bottom),a=xo[2].set(e.right,e.top),f=xo[3].set(e.right,e.bottom);if(a.x<=s.x||u.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(u,u),n.apply(a,a),n.apply(f,f),Math.max(s.x,u.x,a.x,f.x)<=r||Math.min(s.x,u.x,a.x,f.x)>=o||Math.max(s.y,u.y,a.y,f.y)<=i||Math.min(s.y,u.y,a.y,f.y)>=l))return!1;const h=c*(u.y-s.y),d=c*(s.x-u.x),p=h*r+d*i,g=h*o+d*i,y=h*r+d*l,x=h*o+d*l;if(Math.max(p,g,y,x)<=h*s.x+d*s.y||Math.min(p,g,y,x)>=h*f.x+d*f.y)return!1;const M=c*(s.y-a.y),v=c*(a.x-s.x),_=M*r+v*i,S=M*o+v*i,R=M*r+v*l,F=M*o+v*l;return!(Math.max(_,S,R,F)<=M*s.x+v*s.y||Math.min(_,S,R,F)>=M*f.x+v*f.y)}pad(e=0,n=e){return this.x-=e,this.y-=n,this.width+=e*2,this.height+=n*2,this}fit(e){const n=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),o=Math.max(this.y,e.y),i=Math.min(this.y+this.height,e.y+e.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(e=1,n=.001){const r=Math.ceil((this.x+this.width-n)*e)/e,o=Math.ceil((this.y+this.height-n)*e)/e;return this.x=Math.floor((this.x+n)*e)/e,this.y=Math.floor((this.y+n)*e)/e,this.width=r-this.x,this.height=o-this.y,this}enlarge(e){const n=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),o=Math.min(this.y,e.y),i=Math.max(this.y+this.height,e.y+e.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(e){return e||(e=new Ut),e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Ci={default:-1};function Nt(t="default"){return Ci[t]===void 0&&(Ci[t]=-1),++Ci[t]}const Ha={},Ht="8.0.0",m1="8.3.4";function ce(t,e,n=3){if(Ha[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${t}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${t}`),console.warn(r))),Ha[e]=!0}const Tu=()=>{};function Wa(t){return t+=t===0?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function Xa(t){return!(t&t-1)&&!!t}function x0(t){const e={};for(const n in t)t[n]!==void 0&&(e[n]=t[n]);return e}const Va=Object.create(null);function v0(t){const e=Va[t];return e===void 0&&(Va[t]=Nt("resource")),e}const Pu=class Ru extends zr{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...Ru.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){ce(Ht,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=v0(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Pu.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let b0=Pu;const zu=class Ou extends zr{constructor(e={}){super(),this.options=e,this.uid=Nt("textureSource"),this._resourceType="textureSource",this._resourceId=Nt("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...Ou.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new b0(x0(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){this.style!==e&&(this._style?.off("change",this._onStyleChange,this),this._style=e,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Nt("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,n,r){r||(r=this._resolution),e||(e=this.width),n||(n=this.height);const o=Math.round(e*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Nt("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Xa(this.pixelWidth)&&Xa(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};zu.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let wt=zu;class oa extends wt{constructor(e){const n=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...e,resource:n,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}oa.extension=Xe.TextureSource;const Ya=new Be;class M0{constructor(e,n){this.mapCoord=new Be,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){this.texture!==e&&(this._texture?.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,n){n===void 0&&(n=e);const r=this.mapCoord;for(let o=0;o<e.length;o+=2){const i=e[o],l=e[o+1];n[o]=i*r.a+l*r.c+r.tx,n[o+1]=i*r.b+l*r.d+r.ty}return n}update(){const e=this._texture;this._updateID++;const n=e.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=e.orig,o=e.trim;o&&(Ya.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Ya));const i=e.source,l=this.uClampFrame,s=this.clampMargin/i._resolution,u=this.clampOffset/i._resolution;return l[0]=(e.frame.x+s+u)/i.width,l[1]=(e.frame.y+s+u)/i.height,l[2]=(e.frame.x+e.frame.width-s+u)/i.width,l[3]=(e.frame.y+e.frame.height-s+u)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=e.frame.width===i.width&&e.frame.height===i.height&&e.rotate===0,!0}}class ae extends zr{constructor({source:e,label:n,frame:r,orig:o,trim:i,defaultAnchor:l,defaultBorders:s,rotate:u,dynamic:a}={}){if(super(),this.uid=Nt("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Ut,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=e?.source??new wt,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=u??0,this.defaultAnchor=l,this.defaultBorders=s,this.destroyed=!1,this.dynamic=a||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new M0(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,l=n.y/o,s=n.width/r,u=n.height/o;let a=this.rotate;if(a){const f=s/2,c=u/2,h=i+f,d=l+c;a=He.add(a,He.NW),e.x0=h+f*He.uX(a),e.y0=d+c*He.uY(a),a=He.add(a,2),e.x1=h+f*He.uX(a),e.y1=d+c*He.uY(a),a=He.add(a,2),e.x2=h+f*He.uX(a),e.y2=d+c*He.uY(a),a=He.add(a,2),e.x3=h+f*He.uX(a),e.y3=d+c*He.uY(a)}else e.x0=i,e.y0=l,e.x1=i+s,e.y1=l,e.x2=i+s,e.y2=l+u,e.x3=i,e.y3=l+u}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ce(Ht,"Texture.baseTexture is now Texture.source"),this._source}}ae.EMPTY=new ae({label:"EMPTY",source:new wt({label:"EMPTY"})});ae.EMPTY.destroy=Tu;ae.WHITE=new ae({source:new oa({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});ae.WHITE.destroy=Tu;function _0(t,e,n,r){const{width:o,height:i}=n.orig,l=n.trim;if(l){const s=l.width,u=l.height;t.minX=l.x-e._x*o-r,t.maxX=t.minX+s,t.minY=l.y-e._y*i-r,t.maxY=t.minY+u}else t.minX=-e._x*o-r,t.maxX=t.minX+o,t.minY=-e._y*i-r,t.maxY=t.minY+i}const qa=new Be;class jn{constructor(e=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=qa,this.minX=e,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Ut);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=qa,this}set(e,n,r,o){this.minX=e,this.minY=n,this.maxX=r,this.maxY=o}addFrame(e,n,r,o,i){i||(i=this.matrix);const l=i.a,s=i.b,u=i.c,a=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,p=this.maxX,g=this.maxY,y=l*e+u*n+f,x=s*e+a*n+c;y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=l*r+u*n+f,x=s*r+a*n+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=l*e+u*o+f,x=s*e+a*o+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),y=l*r+u*o+f,x=s*r+a*o+c,y<h&&(h=y),x<d&&(d=x),y>p&&(p=y),x>g&&(g=x),this.minX=h,this.minY=d,this.maxX=p,this.maxY=g}addRect(e,n){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,n)}addBounds(e,n){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,n)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a:l,b:s,c:u,d:a,tx:f,ty:c}=e;let h=l*n+u*r+f,d=s*n+a*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=l*o+u*r+f,d=s*o+a*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=l*n+u*i+f,d=s*n+a*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=l*o+u*i+f,d=s*o+a*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,n,r,o){return this.minX<e&&(this.minX=e),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(e,n=e){return this.minX-=e,this.maxX+=e,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new jn(this.minX,this.minY,this.maxX,this.maxY)}scale(e,n=e){return this.minX*=e,this.minY*=n,this.maxX*=e,this.maxY*=n,this}get x(){return this.minX}set x(e){const n=this.maxX-this.minX;this.minX=e,this.maxX=e+n}get y(){return this.minY}set y(e){const n=this.maxY-this.minY;this.minY=e,this.maxY=e+n}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,n,r,o){let i=this.minX,l=this.minY,s=this.maxX,u=this.maxY;o||(o=this.matrix);const a=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,p=o.ty;for(let g=n;g<r;g+=2){const y=e[g],x=e[g+1],M=a*y+c*x+d,v=f*y+h*x+p;i=M<i?M:i,l=v<l?v:l,s=M>s?M:s,u=v>u?v:u}this.minX=i,this.minY=l,this.maxX=s,this.maxY=u}containsPoint(e,n){return this.minX<=e&&this.minY<=n&&this.maxX>=e&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(e){return this.minX=e.minX,this.minY=e.minY,this.maxX=e.maxX,this.maxY=e.maxY,this}}var S0={grad:.9,turn:360,rad:360/(2*Math.PI)},rn=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},Je=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n+0},kt=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t>e?t:e},Fu=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},Ka=function(t){return{r:kt(t.r,0,255),g:kt(t.g,0,255),b:kt(t.b,0,255),a:kt(t.a)}},Ai=function(t){return{r:Je(t.r),g:Je(t.g),b:Je(t.b),a:Je(t.a,3)}},w0=/^#([0-9a-f]{3,8})$/i,vo=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Iu=function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=Math.max(e,n,r),l=i-Math.min(e,n,r),s=l?i===e?(n-r)/l:i===n?2+(r-e)/l:4+(e-n)/l:0;return{h:60*(s<0?s+6:s),s:i?l/i*100:0,v:i/255*100,a:o}},Eu=function(t){var e=t.h,n=t.s,r=t.v,o=t.a;e=e/360*6,n/=100,r/=100;var i=Math.floor(e),l=r*(1-n),s=r*(1-(e-i)*n),u=r*(1-(1-e+i)*n),a=i%6;return{r:255*[r,s,l,l,u,r][a],g:255*[u,r,r,s,l,l][a],b:255*[l,l,u,r,r,s][a],a:o}},ja=function(t){return{h:Fu(t.h),s:kt(t.s,0,100),l:kt(t.l,0,100),a:kt(t.a)}},Za=function(t){return{h:Je(t.h),s:Je(t.s),l:Je(t.l),a:Je(t.a,3)}},Qa=function(t){return Eu((n=(e=t).s,{h:e.h,s:(n*=((r=e.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:e.a}));var e,n,r},Zr=function(t){return{h:(e=Iu(t)).h,s:(o=(200-(n=e.s))*(r=e.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:e.a};var e,n,r,o},C0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A0=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,P0=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ys={string:[[function(t){var e=w0.exec(t);return e?(t=e[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?Je(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?Je(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var e=T0.exec(t)||P0.exec(t);return e?e[2]!==e[4]||e[4]!==e[6]?null:Ka({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(t){var e=C0.exec(t)||A0.exec(t);if(!e)return null;var n,r,o=ja({h:(n=e[1],r=e[2],r===void 0&&(r="deg"),Number(n)*(S0[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Qa(o)},"hsl"]],object:[[function(t){var e=t.r,n=t.g,r=t.b,o=t.a,i=o===void 0?1:o;return rn(e)&&rn(n)&&rn(r)?Ka({r:Number(e),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(t){var e=t.h,n=t.s,r=t.l,o=t.a,i=o===void 0?1:o;if(!rn(e)||!rn(n)||!rn(r))return null;var l=ja({h:Number(e),s:Number(n),l:Number(r),a:Number(i)});return Qa(l)},"hsl"],[function(t){var e=t.h,n=t.s,r=t.v,o=t.a,i=o===void 0?1:o;if(!rn(e)||!rn(n)||!rn(r))return null;var l=function(s){return{h:Fu(s.h),s:kt(s.s,0,100),v:kt(s.v,0,100),a:kt(s.a)}}({h:Number(e),s:Number(n),v:Number(r),a:Number(i)});return Eu(l)},"hsv"]]},Ja=function(t,e){for(var n=0;n<e.length;n++){var r=e[n][0](t);if(r)return[r,e[n][1]]}return[null,void 0]},R0=function(t){return typeof t=="string"?Ja(t.trim(),ys.string):typeof t=="object"&&t!==null?Ja(t,ys.object):[null,void 0]},Ti=function(t,e){var n=Zr(t);return{h:n.h,s:kt(n.s+100*e,0,100),l:n.l,a:n.a}},Pi=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},el=function(t,e){var n=Zr(t);return{h:n.h,s:n.s,l:kt(n.l+100*e,0,100),a:n.a}},xs=function(){function t(e){this.parsed=R0(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return Je(Pi(this.rgba),2)},t.prototype.isDark=function(){return Pi(this.rgba)<.5},t.prototype.isLight=function(){return Pi(this.rgba)>=.5},t.prototype.toHex=function(){return e=Ai(this.rgba),n=e.r,r=e.g,o=e.b,l=(i=e.a)<1?vo(Je(255*i)):"","#"+vo(n)+vo(r)+vo(o)+l;var e,n,r,o,i,l},t.prototype.toRgb=function(){return Ai(this.rgba)},t.prototype.toRgbString=function(){return e=Ai(this.rgba),n=e.r,r=e.g,o=e.b,(i=e.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var e,n,r,o,i},t.prototype.toHsl=function(){return Za(Zr(this.rgba))},t.prototype.toHslString=function(){return e=Za(Zr(this.rgba)),n=e.h,r=e.s,o=e.l,(i=e.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var e,n,r,o,i},t.prototype.toHsv=function(){return e=Iu(this.rgba),{h:Je(e.h),s:Je(e.s),v:Je(e.v),a:Je(e.a,3)};var e},t.prototype.invert=function(){return Xt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},t.prototype.saturate=function(e){return e===void 0&&(e=.1),Xt(Ti(this.rgba,e))},t.prototype.desaturate=function(e){return e===void 0&&(e=.1),Xt(Ti(this.rgba,-e))},t.prototype.grayscale=function(){return Xt(Ti(this.rgba,-1))},t.prototype.lighten=function(e){return e===void 0&&(e=.1),Xt(el(this.rgba,e))},t.prototype.darken=function(e){return e===void 0&&(e=.1),Xt(el(this.rgba,-e))},t.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},t.prototype.alpha=function(e){return typeof e=="number"?Xt({r:(n=this.rgba).r,g:n.g,b:n.b,a:e}):Je(this.rgba.a,3);var n},t.prototype.hue=function(e){var n=Zr(this.rgba);return typeof e=="number"?Xt({h:e,s:n.s,l:n.l,a:n.a}):Je(n.h)},t.prototype.isEqual=function(e){return this.toHex()===Xt(e).toHex()},t}(),Xt=function(t){return t instanceof xs?t:new xs(t)},tl=[],z0=function(t){t.forEach(function(e){tl.indexOf(e)<0&&(e(xs,ys),tl.push(e))})};function O0(t,e){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};t.prototype.toName=function(l){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,u,a=r[this.toHex()];if(a)return a;if(l?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new t(n[d]).toRgb();for(var p in n){var g=(s=f,u=i[p],Math.pow(s.r-u.r,2)+Math.pow(s.g-u.g,2)+Math.pow(s.b-u.b,2));g<c&&(c=g,h=p)}return h}},e.string.push([function(l){var s=l.toLowerCase(),u=s==="transparent"?"#0000":n[s];return u?new t(u).toRgb():null},"name"])}z0([O0]);const Tr=class Hr{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Hr)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._value=this._cloneSource(e),this._normalize(this._value))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,n){const r=typeof e;if(r!==typeof n)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===n;if(Array.isArray(e)&&Array.isArray(n)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(n))return e.length!==n.length?!1:e.every((i,l)=>i===n[l]);if(e!==null&&n!==null){const i=Object.keys(e),l=Object.keys(n);return i.length!==l.length?!1:i.every(s=>e[s]===n[s])}return e===n}toRgba(){const[e,n,r,o]=this._components;return{r:e,g:n,b:r,a:o}}toRgb(){const[e,n,r]=this._components;return{r:e,g:n,b:r}}toRgbaString(){const[e,n,r]=this.toUint8RgbArray();return`rgba(${e},${n},${r},${this.alpha})`}toUint8RgbArray(e){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb),e[0]=Math.round(n*255),e[1]=Math.round(r*255),e[2]=Math.round(o*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e||(e=this._arrayRgba);const[n,r,o,i]=this._components;return e[0]=n,e[1]=r,e[2]=o,e[3]=i,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e||(e=this._arrayRgb);const[n,r,o]=this._components;return e[0]=n,e[1]=r,e[2]=o,e}toNumber(){return this._int}toBgrNumber(){const[e,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[n,r,o,i]=Hr._temp.setValue(e)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(e,n=!0){return n&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,n=!0){if(e===1)return(255<<24)+this._int;if(e===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*e+.5|0,o=o*e+.5|0,i=i*e+.5|0),(e*255<<24)+(r<<16)+(o<<8)+i}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let n,r,o,i;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const l=e;n=(l>>16&255)/255,r=(l>>8&255)/255,o=(l&255)/255,i=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[n,r,o,i=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[n,r,o,i=255]=e,n/=255,r/=255,o/=255,i/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const s=Hr.HEX_PATTERN.exec(e);s&&(e=`#${s[2]}`)}const l=Xt(e);l.isValid()&&({r:n,g:r,b:o,a:i}=l.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,n,r]=this._components;this._int=(e*255<<16)+(n*255<<8)+(r*255|0)}_clamp(e,n=0,r=1){return typeof e=="number"?Math.min(Math.max(e,n),r):(e.forEach((o,i)=>{e[i]=Math.min(Math.max(o,n),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Hr||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};Tr.shared=new Tr;Tr._temp=new Tr;Tr.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let st=Tr;const F0={cullArea:null,cullable:!1,cullableChildren:!0};class ia{constructor(e,n){this._pool=[],this._count=0,this._index=0,this._classType=e,n&&this.prepopulate(n)}prepopulate(e){for(let n=0;n<e;n++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(e),n}return(e){e.reset?.(),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class I0{constructor(){this._poolsByClass=new Map}prepopulate(e,n){this.getPool(e).prepopulate(n)}get(e,n){return this.getPool(e).get(n)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new ia(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(n=>{const r=e[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;e[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),e}}const ri=new I0,E0={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(t){typeof t=="boolean"&&t===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(t===!0?{}:t))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(t){ce("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(t)}};function U0(t,e,n){const r=t.length;let o;if(e>=r||n===0)return;n=e+n>r?r-e:n;const i=r-n;for(o=e;o<i;++o)t[o]=t[o+n];t.length=i}const k0={allowChildren:!0,removeChildren(t=0,e){const n=e??this.children.length,r=n-t,o=[];if(r>0&&r<=n){for(let l=n-1;l>=t;l--){const s=this.children[l];s&&(o.push(s),s.parent=null)}U0(this.children,t,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let l=0;l<o.length;++l)this.emit("childRemoved",o[l],this,l),o[l].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(t){const e=this.getChildAt(t);return this.removeChild(e)},getChildAt(t){if(t<0||t>=this.children.length)throw new Error(`getChildAt: Index (${t}) does not exist.`);return this.children[t]},setChildIndex(t,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(t),this.addChildAt(t,e)},getChildIndex(t){const e=this.children.indexOf(t);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(t,e){this.allowChildren||ce(Ht,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(e<0||e>n.length)throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${n.length}`);if(t.parent){const o=t.parent.children.indexOf(t);if(t.parent===this&&o===e)return t;o!==-1&&t.parent.children.splice(o,1)}e===n.length?n.push(t):n.splice(e,0,t),t.parent=this,t.didChange=!0,t._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(t),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",t,this,e),t.emit("added",this),t},swapChildren(t,e){if(t===e)return;const n=this.getChildIndex(t),r=this.getChildIndex(e);this.children[n]=e,this.children[r]=t;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...t){return t.length===1?this.reparentChildAt(t[0],this.children.length):(t.forEach(e=>this.reparentChildAt(e,this.children.length)),t[0])},reparentChildAt(t,e){if(t.parent===this)return this.setChildIndex(t,e),t;const n=t.worldTransform.clone();t.removeFromParent(),this.addChildAt(t,e);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),t.setFromMatrix(n),t}};class nl{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class D0{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(e))return ri.get(r.maskClass,e)}return e}returnMaskEffect(e){ri.return(e)}}const vs=new D0;Cn.handleByList(Xe.MaskEffect,vs._effectClasses);const L0={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0)},addEffect(t){this.effects.indexOf(t)===-1&&(this.effects.push(t),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(t){const e=this.effects.indexOf(t);e!==-1&&(this.effects.splice(e,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(t){const e=this._maskEffect;e?.mask!==t&&(e&&(this.removeEffect(e),vs.returnMaskEffect(e),this._maskEffect=null),t!=null&&(this._maskEffect=vs.getMaskEffect(t),this.addEffect(this._maskEffect)))},setMask(t){this._maskOptions={...this._maskOptions,...t},t.mask&&(this.mask=t.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(t){!Array.isArray(t)&&t&&(t=[t]);const e=this._filterEffect||(this._filterEffect=new nl);t=t;const n=t?.length>0,r=e.filters?.length>0,o=n!==r;t=Array.isArray(t)?t.slice(0):t,e.filters=Object.freeze(t),o&&(n?this.addEffect(e):(this.removeEffect(e),e.filters=t??null))},get filters(){return this._filterEffect?.filters},set filterArea(t){this._filterEffect||(this._filterEffect=new nl),this._filterEffect.filterArea=t},get filterArea(){return this._filterEffect?.filterArea}},G0={label:null,get name(){return ce(Ht,"Container.name property has been removed, use Container.label instead"),this.label},set name(t){ce(Ht,"Container.name property has been removed, use Container.label instead"),this.label=t},getChildByName(t,e=!1){return this.getChildByLabel(t,e)},getChildByLabel(t,e=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===t||t instanceof RegExp&&t.test(o.label))return o}if(e)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(t,!0);if(i)return i}return null},getChildrenByLabel(t,e=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===t||t instanceof RegExp&&t.test(i.label))&&n.push(i)}if(e)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(t,!0,n);return n}},ht=new ia(Be),Pr=new ia(jn);function Uu(t,e,n){n.clear();let r,o;return t.parent?e?r=t.parent.worldTransform:(o=ht.get().identity(),r=sa(t,o)):r=Be.IDENTITY,ku(t,n,r,e),o&&ht.return(o),n.isValid||n.set(0,0,0,0),n}function ku(t,e,n,r){if(!t.visible||!t.measurable)return;let o;r?o=t.worldTransform:(t.updateLocalTransform(),o=ht.get(),o.appendFrom(t.localTransform,n));const i=e,l=!!t.effects.length;if(l&&(e=Pr.get().clear()),t.boundsArea)e.addRect(t.boundsArea,o);else{t.bounds&&(e.matrix=o,e.addBounds(t.bounds));for(let s=0;s<t.children.length;s++)ku(t.children[s],e,o,r)}if(l){for(let s=0;s<t.effects.length;s++)t.effects[s].addBounds?.(e);i.addBounds(e,Be.IDENTITY),Pr.return(e)}r||ht.return(o)}function sa(t,e){const n=t.parent;return n&&(sa(n,e),n.updateLocalTransform(),e.append(n.localTransform)),e}function N0(t,e){if(t===16777215||!e)return e;if(e===16777215||!t)return t;const n=t>>16&255,r=t>>8&255,o=t&255,i=e>>16&255,l=e>>8&255,s=e&255,u=n*i/255|0,a=r*l/255|0,f=o*s/255|0;return(u<<16)+(a<<8)+f}const rl=16777215;function ol(t,e){return t===rl?e:e===rl?t:N0(t,e)}function Fo(t){return((t&255)<<16)+(t&65280)+(t>>16&255)}const B0={getGlobalAlpha(t){if(t)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let e=this.alpha,n=this.parent;for(;n;)e*=n.alpha,n=n.parent;return e},getGlobalTransform(t,e){if(e)return t.copyFrom(this.worldTransform);this.updateLocalTransform();const n=sa(this,ht.get().identity());return t.appendFrom(this.localTransform,n),ht.return(n),t},getGlobalTint(t){if(t)return this.renderGroup?Fo(this.renderGroup.worldColor):this.parentRenderGroup?Fo(ol(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let e=this.localColor,n=this.parent;for(;n;)e=ol(e,n.localColor),n=n.parent;return Fo(e)}};let Ri=0;const il=500;function pn(...t){Ri!==il&&(Ri++,Ri===il?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...t))}function Du(t,e,n){return e.clear(),n||(n=Be.IDENTITY),Lu(t,e,n,t,!0),e.isValid||e.set(0,0,0,0),e}function Lu(t,e,n,r,o){let i;if(o)i=ht.get(),i=n.copyTo(i);else{if(!t.visible||!t.measurable)return;t.updateLocalTransform();const u=t.localTransform;i=ht.get(),i.appendFrom(u,n)}const l=e,s=!!t.effects.length;if(s&&(e=Pr.get().clear()),t.boundsArea)e.addRect(t.boundsArea,i);else{t.renderPipeId&&(e.matrix=i,e.addBounds(t.bounds));const u=t.children;for(let a=0;a<u.length;a++)Lu(u[a],e,i,r,!1)}if(s){for(let u=0;u<t.effects.length;u++)t.effects[u].addLocalBounds?.(e,r);l.addBounds(e,Be.IDENTITY),Pr.return(e)}ht.return(i)}function Gu(t,e){const n=t.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,l=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=e.index;(e.data[s]!==i||e.data[s+1]!==l)&&(e.data[e.index]=i,e.data[e.index+1]=l,e.didChange=!0),e.index=s+2,o.children.length&&Gu(o,e)}return e.didChange}const $0=new Be,H0={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(t,e){const n=Math.sign(this.scale.x)||1;e!==0?this.scale.x=t/e*n:this.scale.x=n},_setHeight(t,e){const n=Math.sign(this.scale.y)||1;e!==0?this.scale.y=t/e*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new jn});const t=this._localBoundsCacheData;return t.index=1,t.didChange=!1,t.data[0]!==this._didViewChangeTick&&(t.didChange=!0,t.data[0]=this._didViewChangeTick),Gu(this,t),t.didChange&&Du(this,t.localBounds,$0),t.localBounds},getBounds(t,e){return Uu(this,t,e||new jn)}},W0={_onRender:null,set onRender(t){const e=this.renderGroup||this.parentRenderGroup;if(!t){this._onRender&&e?.removeOnRender(this),this._onRender=null;return}this._onRender||e?.addOnRender(this),this._onRender=t},get onRender(){return this._onRender}},X0={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(t){this._zIndex!==t&&(this._zIndex=t,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(V0))}};function V0(t,e){return t._zIndex-e._zIndex}const Y0={getGlobalPosition(t=new Jt,e=!1){return this.parent?this.parent.toGlobal(this._position,t,e):(t.x=this._position.x,t.y=this._position.y),t},toGlobal(t,e,n=!1){const r=this.getGlobalTransform(ht.get(),n);return e=r.apply(t,e),ht.return(r),e},toLocal(t,e,n,r){e&&(t=e.toGlobal(t,n,r));const o=this.getGlobalTransform(ht.get(),r);return n=o.applyInverse(t,n),ht.return(o),n}};class q0{constructor(){this.uid=Nt("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let K0=0;class j0{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,n,r){const o=new wt({...this.textureOptions,width:e,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new ae({source:o,label:`texturePool_${K0++}`})}getOptimalTexture(e,n,r=1,o){let i=Math.ceil(e*r-1e-6),l=Math.ceil(n*r-1e-6);i=Wa(i),l=Wa(l);const s=(i<<17)+(l<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let u=this._texturePool[s].pop();return u||(u=this.createTexture(i,l,o)),u.source._resolution=r,u.source.width=i/r,u.source.height=l/r,u.source.pixelWidth=i,u.source.pixelHeight=l,u.frame.x=0,u.frame.y=0,u.frame.width=e,u.frame.height=n,u.updateUvs(),this._poolKeyHash[u.uid]=s,u}getSameSizeTexture(e,n=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,n)}returnTexture(e){const n=this._poolKeyHash[e.uid];this._texturePool[n].push(e)}clear(e){if(e=e!==!1,e)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const Rt=new j0;class Z0{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new Be,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new q0,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const n=e.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(e={}){this.textureOptions=e,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Rt.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const n=this.childrenToUpdate[e];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const n=this.renderGroupChildren.indexOf(e);n>-1&&this.renderGroupChildren.splice(n,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const n=e.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const n=e.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(e){for(let n=0;n<e.length;n++)this.removeChild(e[n])}onChildUpdate(e){let n=this.childrenToUpdate[e.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e),e.didViewUpdate=!1)}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],e);return e}_getChildren(e,n=[]){if(n.push(e),e.renderGroup)return n;const r=e.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new Be),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new Be),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const e=this._parentCacheAsTextureRenderGroup;return e?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new Be),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x,-e._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Q0(t,e,n={}){for(const r in e)!n[r]&&e[r]!==void 0&&(t[r]=e[r])}const zi=new Qe(null),Oi=new Qe(null),Fi=new Qe(null,1,1),sl=1,J0=2,Ii=4;class Ye extends zr{constructor(e={}){super(),this.uid=Nt("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new Be,this.relativeGroupTransform=new Be,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Qe(this,0,0),this._scale=Fi,this._pivot=Oi,this._skew=zi,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Q0(this,e,{children:!0,parent:!0,effects:!0}),e.children?.forEach(n=>this.addChild(n)),e.parent?.addChild(this)}static mixin(e){Object.defineProperties(Ye.prototype,Object.getOwnPropertyDescriptors(e))}set _didChangeId(e){this._didViewChangeTick=e>>12&4095,this._didContainerChangeTick=e&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...e){if(this.allowChildren||ce(Ht,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let o=0;o<e.length;o++)this.addChild(e[o]);return e[0]}const n=e[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...e){if(e.length>1){for(let o=0;o<e.length;o++)this.removeChild(e[o]);return e[0]}const n=e[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e?.removeChild(this),this.renderGroup=ri.get(Z0,this),this.groupTransform=Be.IDENTITY,e?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e?.removeChild(this),ri.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new Be),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*m0}set angle(e){this.rotation=e*Ar}get pivot(){return this._pivot===Oi&&(this._pivot=new Qe(this,0,0)),this._pivot}set pivot(e){this._pivot===Oi&&(this._pivot=new Qe(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===zi&&(this._skew=new Qe(this,0,0)),this._skew}set skew(e){this._skew===zi&&(this._skew=new Qe(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===Fi&&(this._scale=new Qe(this,1,1)),this._scale}set scale(e){this._scale===Fi&&(this._scale=new Qe(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const n=this.getLocalBounds().width;this._setWidth(e,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const n=this.getLocalBounds().height;this._setHeight(e,n)}getSize(e){e||(e={});const n=this.getLocalBounds();return e.width=Math.abs(this.scale.x*n.width),e.height=Math.abs(this.scale.y*n.height),e}setSize(e,n){const r=this.getLocalBounds();typeof e=="object"?(n=e.height??e.width,e=e.width):n??(n=e),e!==void 0&&this._setWidth(e,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const e=this._rotation,n=this._skew;this._cx=Math.cos(e+n._y),this._sx=Math.sin(e+n._y),this._cy=-Math.sin(e-n._x),this._sy=Math.cos(e-n._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){const e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e)return;this._didLocalTransformChangeId=e;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,l=r._x,s=r._y,u=o._x,a=o._y;n.a=this._cx*l,n.b=this._sx*l,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(u*n.a+a*n.c),n.ty=i._y-(u*n.b+a*n.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=sl,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=st.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=sl,this._onUpdate())}get tint(){return Fo(this.localColor)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=J0,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const n=e?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ii,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const n=e?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ii,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const n=e?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Ii,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof e=="boolean"?e:e?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(e);this.renderGroup?.destroy(),this.renderGroup=null}}Ye.mixin(k0);Ye.mixin(Y0);Ye.mixin(W0);Ye.mixin(H0);Ye.mixin(L0);Ye.mixin(G0);Ye.mixin(X0);Ye.mixin(F0);Ye.mixin(E0);Ye.mixin(B0);class Nu extends Ye{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new jn(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}containsPoint(e){const n=this.bounds,{x:r,y:o}=e;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){super.destroy(e),this._bounds=null}}class tt extends Nu{constructor(e=ae.EMPTY){e instanceof ae&&(e={texture:e});const{texture:n=ae.EMPTY,anchor:r,roundPixels:o,width:i,height:l,...s}=e;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Qe({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),l!==void 0&&(this.height=l)}static from(e,n=!1){return e instanceof ae?new tt(e):new tt(ae.from(e,n))}set texture(e){e||(e=ae.EMPTY);const n=this._texture;n!==e&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return _0(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return ce("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const e=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-e._x*o,r.maxX=r.minX+o,r.minY=-e._y*i,r.maxY=r.minY+i}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){const r=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,n){typeof e=="object"?(n=e.height??e.width,e=e.width):n??(n=e),e!==void 0&&this._setWidth(e,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const ed=new jn;function Bu(t,e,n){const r=ed;t.measurable=!0,Uu(t,n,r),e.addBoundsMask(r),t.measurable=!1}function $u(t,e,n){const r=Pr.get();t.measurable=!0;const o=ht.get().identity(),i=Hu(t,n,o);Du(t,r,i),t.measurable=!1,e.addBoundsMask(r),ht.return(o),Pr.return(r)}function Hu(t,e,n){return t?(t!==e&&(Hu(t.parent,e,n),t.updateLocalTransform(),n.append(t.localTransform)),n):(pn("Mask bounds, renderable is not inside the root container"),n)}class Wu{constructor(e){this.priority=0,this.inverse=!1,this.pipe="alphaMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof tt),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,n){this.inverse||Bu(this.mask,e,n)}addLocalBounds(e,n){$u(this.mask,e,n)}containsPoint(e,n){const r=this.mask;return n(r,e)}destroy(){this.reset()}static test(e){return e instanceof tt}}Wu.extension=Xe.MaskEffect;class Xu{constructor(e){this.priority=0,this.pipe="colorMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}Xu.extension=Xe.MaskEffect;class Vu{constructor(e){this.priority=0,this.pipe="stencilMask",e?.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,n){Bu(this.mask,e,n)}addLocalBounds(e,n){$u(this.mask,e,n)}containsPoint(e,n){const r=this.mask;return n(r,e)}destroy(){this.reset()}static test(e){return e instanceof Ye}}Vu.extension=Xe.MaskEffect;const td={createCanvas:(t,e)=>{const n=document.createElement("canvas");return n.width=t,n.height=e,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(t,e)=>fetch(t,e),parseXML:t=>new DOMParser().parseFromString(t,"text/xml")};let al=td;const wn={get(){return al},set(t){al=t}};class ci extends wt{constructor(e){e.resource||(e.resource=wn.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity,this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,n=this.height,r=this._resolution){const o=super.resize(e,n,r);return o&&this.resizeCanvas(),o}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}ci.extension=Xe.TextureSource;class aa extends wt{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const n=wn.get().createCanvas(e.resource.width,e.resource.height);n.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height),e.resource=n,pn("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}}aa.extension=Xe.TextureSource;var bs=(t=>(t[t.INTERACTION=50]="INTERACTION",t[t.HIGH=25]="HIGH",t[t.NORMAL=0]="NORMAL",t[t.LOW=-25]="LOW",t[t.UTILITY=-50]="UTILITY",t))(bs||{});class Ei{constructor(e,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=n,this.priority=r,this._once=o}match(e,n=null){return this._fn===e&&this._context===n}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=e?null:n,this.previous=null,n}}const Yu=class Tt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Ei(null,null,1/0),this.deltaMS=1/Tt.targetFPMS,this.elapsedMS=1/Tt.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,n,r=bs.NORMAL){return this._addListener(new Ei(e,n,r))}addOnce(e,n,r=bs.NORMAL){return this._addListener(new Ei(e,n,r,!0))}_addListener(e){let n=this._head.next,r=this._head;if(!n)e.connect(r);else{for(;n;){if(e.priority>n.priority){e.connect(r);break}r=n,n=n.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,n){let r=this._head.next;for(;r;)r.match(e,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,n=this._head;for(;n=n.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let n;if(e>this.lastTime){if(n=this.elapsedMS=e-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=e-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=e-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Tt.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const n=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,n)/1e3,Tt.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,e);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Tt._shared){const e=Tt._shared=new Tt;e.autoStart=!0,e._protected=!0}return Tt._shared}static get system(){if(!Tt._system){const e=Tt._system=new Tt;e.autoStart=!0,e._protected=!0}return Tt._system}};Yu.targetFPMS=.06;let bo=Yu,Ui;async function nd(){return Ui??(Ui=(async()=>{const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const n=await new Promise(l=>{const s=document.createElement("video");s.onloadeddata=()=>l(s),s.onerror=()=>l(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,i),e.deleteFramebuffer(o),e.deleteTexture(r),e.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Ui}const hi=class qu extends wt{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...qu.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=bo.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,n=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await nd(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(bo.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(bo.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(bo.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};hi.extension=Xe.TextureSource;hi.defaultOptions={...wt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};hi.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let rd=hi;const er=(t,e,n=!1)=>(Array.isArray(t)||(t=[t]),e?t.map(r=>typeof r=="string"||n?e(r):r):t);class od{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const n=this._cache.get(e);return n||pn(`[Assets] Asset id ${e} was not found in the Cache`),n}set(e,n){const r=er(e);let o;for(let u=0;u<this.parsers.length;u++){const a=this.parsers[u];if(a.test(n)){o=a.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(u=>{i.set(u,n)});const l=[...i.keys()],s={cacheKeys:l,keys:r};r.forEach(u=>{this._cacheMap.set(u,s)}),l.forEach(u=>{const a=o?o[u]:n;this._cache.has(u)&&this._cache.get(u)!==a&&pn("[Cache] already has key:",u),this._cache.set(u,i.get(u))})}remove(e){if(!this._cacheMap.has(e)){pn(`[Assets] Asset id ${e} was not found in the Cache`);return}const n=this._cacheMap.get(e);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Dn=new od,Ms=[];Cn.handleByList(Xe.TextureSource,Ms);function Ku(t={}){const e=t&&t.resource,n=e?t.resource:t,r=e?t:{resource:t};for(let o=0;o<Ms.length;o++){const i=Ms[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function id(t={},e=!1){const n=t&&t.resource,r=n?t.resource:t,o=n?t:{resource:t};if(!e&&Dn.has(r))return Dn.get(r);const i=new ae({source:Ku(o)});return i.on("destroy",()=>{Dn.has(r)&&Dn.remove(r)}),e||Dn.set(r,i),i}function sd(t,e=!1){return typeof t=="string"?Dn.get(t):t instanceof wt?new ae({source:t}):id(t,e)}ae.from=sd;wt.from=Ku;Cn.add(Wu,Xu,Vu,rd,aa,ci,oa);var ju=(t=>(t[t.Low=0]="Low",t[t.Normal=1]="Normal",t[t.High=2]="High",t))(ju||{});function Dt(t){if(typeof t!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(t)}`)}function Gr(t){return t.split("?")[0].split("#")[0]}function ad(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ld(t,e,n){return t.replace(new RegExp(ad(e),"g"),n)}function ud(t,e){let n="",r=0,o=-1,i=0,l=-1;for(let s=0;s<=t.length;++s){if(s<t.length)l=t.charCodeAt(s);else{if(l===47)break;l=47}if(l===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const u=n.lastIndexOf("/");if(u!==n.length-1){u===-1?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${t.slice(o+1,s)}`:n=t.slice(o+1,s),r=s-o-1;o=s,i=0}else l===46&&i!==-1?++i:i=-1}return n}const ao={toPosix(t){return ld(t,"\\","/")},isUrl(t){return/^https?:/.test(this.toPosix(t))},isDataUrl(t){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t)},isBlobUrl(t){return t.startsWith("blob:")},hasProtocol(t){return/^[^/:]+:/.test(this.toPosix(t))},getProtocol(t){Dt(t),t=this.toPosix(t);const e=/^file:\/\/\//.exec(t);if(e)return e[0];const n=/^[^/:]+:\/{0,2}/.exec(t);return n?n[0]:""},toAbsolute(t,e,n){if(Dt(t),this.isDataUrl(t)||this.isBlobUrl(t))return t;const r=Gr(this.toPosix(e??wn.get().getBaseUrl())),o=Gr(this.toPosix(n??this.rootname(r)));return t=this.toPosix(t),t.startsWith("/")?ao.join(o,t.slice(1)):this.isAbsolute(t)?t:this.join(r,t)},normalize(t){if(Dt(t),t.length===0)return".";if(this.isDataUrl(t)||this.isBlobUrl(t))return t;t=this.toPosix(t);let e="";const n=t.startsWith("/");this.hasProtocol(t)&&(e=this.rootname(t),t=t.slice(e.length));const r=t.endsWith("/");return t=ud(t),t.length>0&&r&&(t+="/"),n?`/${t}`:e+t},isAbsolute(t){return Dt(t),t=this.toPosix(t),this.hasProtocol(t)?!0:t.startsWith("/")},join(...t){if(t.length===0)return".";let e;for(let n=0;n<t.length;++n){const r=t[n];if(Dt(r),r.length>0)if(e===void 0)e=r;else{const o=t[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(t){if(Dt(t),t.length===0)return".";t=this.toPosix(t);let e=t.charCodeAt(0);const n=e===47;let r=-1,o=!0;const i=this.getProtocol(t),l=t;t=t.slice(i.length);for(let s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),e===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(l)?i+t:i:n&&r===1?"//":i+t.slice(0,r)},rootname(t){Dt(t),t=this.toPosix(t);let e="";if(t.startsWith("/")?e="/":e=this.getProtocol(t),this.isUrl(t)){const n=t.indexOf("/",e.length);n!==-1?e=t.slice(0,n):e=t,e.endsWith("/")||(e+="/")}return e},basename(t,e){Dt(t),e&&Dt(e),t=Gr(this.toPosix(t));let n=0,r=-1,o=!0,i;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";let l=e.length-1,s=-1;for(i=t.length-1;i>=0;--i){const u=t.charCodeAt(i);if(u===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),l>=0&&(u===e.charCodeAt(l)?--l===-1&&(r=i):(l=-1,r=s))}return n===r?r=s:r===-1&&(r=t.length),t.slice(n,r)}for(i=t.length-1;i>=0;--i)if(t.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":t.slice(n,r)},extname(t){Dt(t),t=Gr(this.toPosix(t));let e=-1,n=0,r=-1,o=!0,i=0;for(let l=t.length-1;l>=0;--l){const s=t.charCodeAt(l);if(s===47){if(!o){n=l+1;break}continue}r===-1&&(o=!1,r=l+1),s===46?e===-1?e=l:i!==1&&(i=1):e!==-1&&(i=-1)}return e===-1||r===-1||i===0||i===1&&e===r-1&&e===n+1?"":t.slice(e,r)},parse(t){Dt(t);const e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;t=Gr(this.toPosix(t));let n=t.charCodeAt(0);const r=this.isAbsolute(t);let o;e.root=this.rootname(t),r||this.hasProtocol(t)?o=1:o=0;let i=-1,l=0,s=-1,u=!0,a=t.length-1,f=0;for(;a>=o;--a){if(n=t.charCodeAt(a),n===47){if(!u){l=a+1;break}continue}s===-1&&(u=!1,s=a+1),n===46?i===-1?i=a:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===l+1?s!==-1&&(l===0&&r?e.base=e.name=t.slice(1,s):e.base=e.name=t.slice(l,s)):(l===0&&r?(e.name=t.slice(1,i),e.base=t.slice(1,s)):(e.name=t.slice(l,i),e.base=t.slice(l,s)),e.ext=t.slice(i,s)),e.dir=this.dirname(t),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function Zu(t,e,n,r,o){const i=e[n];for(let l=0;l<i.length;l++){const s=i[l];n<e.length-1?Zu(t.replace(r[n],s),e,n+1,r,o):o.push(t.replace(r[n],s))}}function fd(t){const e=/\{(.*?)\}/g,n=t.match(e),r=[];if(n){const o=[];n.forEach(i=>{const l=i.substring(1,i.length-1).split(",");o.push(l)}),Zu(t,o,0,n,r)}else r.push(t);return r}const ll=t=>!Array.isArray(t);class Qu{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,n)=>`${e}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(e,n)=>n.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const n=e;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(e){const{alias:n,src:r}=e;return er(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(l=>l?.src??l):i?.src?i.src:i,!0)}addManifest(e){this._manifest&&pn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(e,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,l])=>typeof l=="string"||Array.isArray(l)?{alias:i,src:l}:{alias:i,...l})),o.forEach(i=>{const l=i.src,s=i.alias;let u;if(typeof s=="string"){const a=this._createBundleAssetId(e,s);r.push(a),u=[s,a]}else{const a=s.map(f=>this._createBundleAssetId(e,f));r.push(...a),u=[...s,...a]}this.add({...i,alias:u,src:l})}),this._bundles[e]=r}add(e){const n=[];Array.isArray(e)?n.push(...e):n.push(e);let r;r=i=>{this.hasKey(i)&&pn(`[Resolver] already has key: ${i} overwriting`)},er(n).forEach(i=>{const{src:l}=i;let{data:s,format:u,loadParser:a}=i;const f=er(l).map(d=>typeof d=="string"?fd(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let y=0;y<this._parsers.length;y++){const x=this._parsers[y];if(x.test(p)){g=x.parse(p);break}}}else s=p.data??s,u=p.format??u,a=p.loadParser??a,g={...g,...p};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:c,data:s,format:u,loadParser:a}),h.push(g)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(e){const n=ll(e);e=er(e);const r={};return e.forEach(o=>{const i=this._bundles[o];if(i){const l=this.resolve(i),s={};for(const u in l){const a=l[u];s[this._extractAssetIdFromBundle(o,u)]=a}r[o]=s}}),n?r[e[0]]:r}resolveUrl(e){const n=this.resolve(e);if(typeof e!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(e){const n=ll(e);e=er(e);const r={};return e.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const l=this._getPreferredOrder(i);l?.priority.forEach(s=>{l.params[s].forEach(u=>{const a=i.filter(f=>f[s]?f[s]===u:!1);a.length&&(i=a)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let n=0;n<e.length;n++){const r=e[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const n=/\?/.test(e)?"&":"?";return`${e}${n}${this._defaultSearchParams}`}_buildResolvedAsset(e,n){const{aliases:r,data:o,loadParser:i,format:l}=n;return(this._basePath||this._rootPath)&&(e.src=ao.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...o||{},...e.data},e.loadParser=i??e.loadParser,e.format=l??e.format??cd(e.src),e}}Qu.RETINA_PREFIX=/@([0-9\.]+)x/;function cd(t){return t.split(".").pop().split("?").shift().split("#").shift()}const ul=(t,e)=>{const n=e.split("?")[1];return n&&(t+=`?${n}`),t},Ju=class Wr{constructor(e,n){this.linkedSheets=[],this._texture=e instanceof ae?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Wr.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let n=e;const r=Wr.BATCH_SIZE;for(;n-e<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],l=i.frame;if(l){let s=null,u=null;const a=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new Ut(0,0,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution);i.rotated?s=new Ut(Math.floor(l.x)/this.resolution,Math.floor(l.y)/this.resolution,Math.floor(l.h)/this.resolution,Math.floor(l.w)/this.resolution):s=new Ut(Math.floor(l.x)/this.resolution,Math.floor(l.y)/this.resolution,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(u=new Ut(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution)),this.textures[o]=new ae({source:this.textureSource,frame:s,orig:f,trim:u,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const e=this.data.animations||{};for(const n in e){this.animations[n]=[];for(let r=0;r<e[n].length;r++){const o=e[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Wr.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Wr.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Ju.BATCH_SIZE=1e3;let fl=Ju;const hd=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function ef(t,e,n){const r={};if(t.forEach(o=>{r[o]=e}),Object.keys(e.textures).forEach(o=>{r[o]=e.textures[o]}),!n){const o=ao.dirname(t[0]);e.linkedSheets.forEach((i,l)=>{const s=ef([`${o}/${e.data.meta.related_multi_packs[l]}`],i,!0);Object.assign(r,s)})}return r}const dd={extension:Xe.Asset,cache:{test:t=>t instanceof fl,getCacheableAssets:(t,e)=>ef(t,e,!1)},resolver:{extension:{type:Xe.ResolveParser,name:"resolveSpritesheet"},test:t=>{const n=t.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&hd.includes(o)},parse:t=>{const e=t.split(".");return{resolution:parseFloat(Qu.RETINA_PREFIX.exec(t)?.[1]??"1"),format:e[e.length-2],src:t}}},loader:{name:"spritesheetLoader",extension:{type:Xe.LoadParser,priority:ju.Normal,name:"spritesheetLoader"},async testParse(t,e){return ao.extname(e.src).toLowerCase()===".json"&&!!t.frames},async parse(t,e,n){const{texture:r,imageFilename:o}=e?.data??{};let i=ao.dirname(e.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let l;if(r instanceof ae)l=r;else{const a=ul(i+(o??t.meta.image),e.src);l=(await n.load([a]))[a]}const s=new fl(l.source,t);await s.parse();const u=t?.meta?.related_multi_packs;if(Array.isArray(u)){const a=[];for(const c of u){if(typeof c!="string")continue;let h=i+c;e.data?.ignoreMultiPack||(h=ul(h,e.src),a.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(a);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(t,e,n){await n.unload(t.textureSource._sourceOrigin),t.destroy(!1)}}};Cn.add(dd);const ki=Object.create(null),cl=Object.create(null);function la(t,e){let n=cl[t];return n===void 0&&(ki[e]===void 0&&(ki[e]=1),cl[t]=n=ki[e]++),n}let Mo;function md(){return(!Mo||Mo?.isContextLost())&&(Mo=wn.get().createCanvas().getContext("webgl",{})),Mo}let _o;function pd(){if(!_o){_o="mediump";const t=md();t&&t.getShaderPrecisionFormat&&(_o=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision?"highp":"mediump")}return _o}function gd(t,e,n){return e?t:n?(t=t.replace("out vec4 finalColor;",""),`
        
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
        `}function yd(t,e,n){const r=n?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(t.substring(0,9)!=="precision"){let o=n?e.requestedFragmentPrecision:e.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${t}`}else if(r!=="highp"&&t.substring(0,15)==="precision highp")return t.replace("precision highp","precision mediump");return t}function xd(t,e){return e?`#version 300 es
${t}`:t}const vd={},bd={};function Md(t,{name:e="pixi-program"},n=!0){e=e.replace(/\s+/g,"-"),e+=n?"-fragment":"-vertex";const r=n?vd:bd;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,t.indexOf("#define SHADER_NAME")!==-1?t:`${`#define SHADER_NAME ${e}`}
${t}`}function _d(t,e){return e?t.replace("#version 300 es",""):t}const Di={stripVersion:_d,ensurePrecision:yd,addProgramDefines:gd,setProgramName:Md,insertVersion:xd},Li=Object.create(null),tf=class _s{constructor(e){e={..._s.defaultOptions,...e};const n=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:pd()},setProgramName:{name:e.name},addProgramDefines:n,insertVersion:n};let o=e.fragment,i=e.vertex;Object.keys(Di).forEach(l=>{const s=r[l];o=Di[l](o,s,!0),i=Di[l](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=e.transformFeedbackVaryings,this._key=la(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const n=`${e.vertex}:${e.fragment}`;return Li[n]||(Li[n]=new _s(e)),Li[n]}};tf.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let ge=tf;const hl={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Sd(t){return hl[t]??hl.float32}const wd={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Cd({source:t,entryPoint:e}){const n={},r=t.indexOf(`fn ${e}`);if(r!==-1){const o=t.indexOf("->",r);if(o!==-1){const i=t.substring(r,o),l=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=l.exec(i))!==null;){const u=wd[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:u,stride:Sd(u).stride,offset:0,instance:!1,start:0}}}}return n}function Gi(t){const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,l=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,u=/struct\s+(\w+)/,a=t.match(e)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!a)return{groups:[],structs:[]};const f=t.match(l)?.map(c=>{const h=c.match(u)[1],d=c.match(s).reduce((p,g)=>{const[y,x]=g.split(":");return p[y.trim()]=x.trim(),p},{});return d?{name:h,members:d}:null}).filter(({name:c})=>a.some(h=>h.type===c))??[];return{groups:a,structs:f}}var Xr=(t=>(t[t.VERTEX=1]="VERTEX",t[t.FRAGMENT=2]="FRAGMENT",t[t.COMPUTE=4]="COMPUTE",t))(Xr||{});function Ad({groups:t}){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Xr.VERTEX|Xr.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Xr.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Xr.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function Td({groups:t}){const e=[];for(let n=0;n<t.length;n++){const r=t[n];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function Pd(t,e){const n=new Set,r=new Set,o=[...t.structs,...e.structs].filter(l=>n.has(l.name)?!1:(n.add(l.name),!0)),i=[...t.groups,...e.groups].filter(l=>{const s=`${l.name}-${l.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const Ni=Object.create(null);class me{constructor(e){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:l}=e;if(this.name=l,this.fragment=n,this.vertex=r,n.source===r.source){const s=Gi(n.source);this.structsAndGroups=s}else{const s=Gi(r.source),u=Gi(n.source);this.structsAndGroups=Pd(s,u)}this.layout=o??Td(this.structsAndGroups),this.gpuLayout=i??Ad(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:n}=this,r=e.source+n.source+e.entryPoint+n.entryPoint;this._layoutKey=la(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Cd(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const n=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return Ni[n]||(Ni[n]=new me(e)),Ni[n]}}const nf=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Rd=nf.reduce((t,e)=>(t[e]=!0,t),{});function zd(t,e){switch(t){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const rf=class of{constructor(e,n){this._touched=0,this.uid=Nt("uniform"),this._resourceType="uniformGroup",this._resourceId=Nt("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...of.defaultOptions,...n},this.uniformStructures=e;const r={};for(const o in e){const i=e[o];if(i.name=o,i.size=i.size??1,!Rd[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${nf.join(", ")}`);i.value??(i.value=zd(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=la(Object.keys(r).map(o=>`${o}-${e[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};rf.defaultOptions={ubo:!1,isStatic:!1};let sf=rf;class Bi{constructor(e){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in e){const o=e[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let n=0;for(const r in this.resources)e[n++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,n){const r=this.resources[n];e!==r&&(r&&e.off?.("change",this.onResourceChange,this),e.on?.("change",this.onResourceChange,this),this.resources[n]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const n=this.resources;for(const r in n)n[r]._touched=e}destroy(){const e=this.resources;for(const n in e)e[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const n=this.resources;for(const r in n)n[r]===e&&(n[r]=null)}else this._updateKey()}}var oi=(t=>(t[t.WEBGL=1]="WEBGL",t[t.WEBGPU=2]="WEBGPU",t[t.BOTH=3]="BOTH",t))(oi||{});class ua extends zr{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:l,groupMap:s}=e;this.gpuProgram=n,this.glProgram=r,l===void 0&&(l=0,n&&(l|=oi.WEBGPU),r&&(l|=oi.WEBGL)),this.compatibleRenderers=l;const u={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const a in s)for(const f in s[a]){const c=s[a][f];u[c]={group:a,binding:f,name:c}}else if(n&&o&&!s){const a=n.structsAndGroups.groups;s={},a.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,u[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,u[c.name]=c});let a=0;for(const f in i)u[f]||(o[99]||(o[99]=new Bi,this._ownedBindGroups.push(o[99])),u[f]={group:99,binding:a,name:f},s[99]=s[99]||{},s[99][a]=f,a++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new sf(h));const d=u[c];d&&(o[d.group]||(o[d.group]=new Bi,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,u)}addResource(e,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=e),this.groups[n]||(this.groups[n]=new Bi,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(e,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return e[i.group].getResource(i.binding)},set(l){e[i.group].setResource(l,i.binding)}})}return r}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:n,gl:r,...o}=e;let i,l;return n&&(i=me.from(n)),r&&(l=ge.from(r)),new ua({gpuProgram:i,glProgram:l,...o})}}const Od={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},$i=0,Hi=1,Wi=2,Xi=3,Vi=4,Yi=5,Ss=class af{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<$i)}set blend(e){!!(this.data&1<<$i)!==e&&(this.data^=1<<$i)}get offsets(){return!!(this.data&1<<Hi)}set offsets(e){!!(this.data&1<<Hi)!==e&&(this.data^=1<<Hi)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Wi)}set culling(e){!!(this.data&1<<Wi)!==e&&(this.data^=1<<Wi)}get depthTest(){return!!(this.data&1<<Xi)}set depthTest(e){!!(this.data&1<<Xi)!==e&&(this.data^=1<<Xi)}get depthMask(){return!!(this.data&1<<Yi)}set depthMask(e){!!(this.data&1<<Yi)!==e&&(this.data^=1<<Yi)}get clockwiseFrontFace(){return!!(this.data&1<<Vi)}set clockwiseFrontFace(e){!!(this.data&1<<Vi)!==e&&(this.data^=1<<Vi)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=Od[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new af;return e.depthTest=!1,e.blend=!0,e}};Ss.default2d=Ss.for2d();let Fd=Ss;const lf=class ws extends ua{constructor(e){e={...ws.defaultOptions,...e},super(e),this.enabled=!0,this._state=Fd.for2d(),this.blendMode=e.blendMode,this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.clipToViewport=e.clipToViewport,this.addResource("uTexture",0,1)}apply(e,n,r,o){e.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:n,gl:r,...o}=e;let i,l;return n&&(i=me.from(n)),r&&(l=ge.from(r)),new ws({gpuProgram:i,glProgram:l,...o})}};lf.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ye=lf;const Cs=[];Cn.handleByNamedList(Xe.Environment,Cs);async function Id(t){if(!t)for(let e=0;e<Cs.length;e++){const n=Cs[e];if(n.value.test()){await n.value.load();return}}}let Nr;function Ed(){if(typeof Nr=="boolean")return Nr;try{Nr=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Nr=!1}return Nr}var So={exports:{}},dl;function Ud(){if(dl)return So.exports;dl=1,So.exports=t,So.exports.default=t;function t(w,C,A){A=A||2;var E=C&&C.length,D=E?C[0]*A:w.length,G=e(w,0,D,A,!0),N=[];if(!G||G.next===G.prev)return N;var X,oe,re,$e,Oe,we,at;if(E&&(G=u(w,C,G,A)),w.length>80*A){X=re=w[0],oe=$e=w[1];for(var Fe=A;Fe<D;Fe+=A)Oe=w[Fe],we=w[Fe+1],Oe<X&&(X=Oe),we<oe&&(oe=we),Oe>re&&(re=Oe),we>$e&&($e=we);at=Math.max(re-X,$e-oe),at=at!==0?32767/at:0}return r(G,N,A,X,oe,at,0),N}function e(w,C,A,E,D){var G,N;if(D===ue(w,C,A,E)>0)for(G=C;G<A;G+=E)N=H(G,w[G],w[G+1],N);else for(G=A-E;G>=C;G-=E)N=H(G,w[G],w[G+1],N);return N&&_(N,N.next)&&(Y(N),N=N.next),N}function n(w,C){if(!w)return w;C||(C=w);var A=w,E;do if(E=!1,!A.steiner&&(_(A,A.next)||v(A.prev,A,A.next)===0)){if(Y(A),A=C=A.prev,A===A.next)break;E=!0}else A=A.next;while(E||A!==C);return C}function r(w,C,A,E,D,G,N){if(w){!N&&G&&d(w,E,D,G);for(var X=w,oe,re;w.prev!==w.next;){if(oe=w.prev,re=w.next,G?i(w,E,D,G):o(w)){C.push(oe.i/A|0),C.push(w.i/A|0),C.push(re.i/A|0),Y(w),w=re.next,X=re.next;continue}if(w=re,w===X){N?N===1?(w=l(n(w),C,A),r(w,C,A,E,D,G,2)):N===2&&s(w,C,A,E,D,G):r(n(w),C,A,E,D,G,1);break}}}}function o(w){var C=w.prev,A=w,E=w.next;if(v(C,A,E)>=0)return!1;for(var D=C.x,G=A.x,N=E.x,X=C.y,oe=A.y,re=E.y,$e=D<G?D<N?D:N:G<N?G:N,Oe=X<oe?X<re?X:re:oe<re?oe:re,we=D>G?D>N?D:N:G>N?G:N,at=X>oe?X>re?X:re:oe>re?oe:re,Fe=E.next;Fe!==C;){if(Fe.x>=$e&&Fe.x<=we&&Fe.y>=Oe&&Fe.y<=at&&x(D,X,G,oe,N,re,Fe.x,Fe.y)&&v(Fe.prev,Fe,Fe.next)>=0)return!1;Fe=Fe.next}return!0}function i(w,C,A,E){var D=w.prev,G=w,N=w.next;if(v(D,G,N)>=0)return!1;for(var X=D.x,oe=G.x,re=N.x,$e=D.y,Oe=G.y,we=N.y,at=X<oe?X<re?X:re:oe<re?oe:re,Fe=$e<Oe?$e<we?$e:we:Oe<we?Oe:we,Or=X>oe?X>re?X:re:oe>re?oe:re,Fr=$e>Oe?$e>we?$e:we:Oe>we?Oe:we,ba=g(at,Fe,C,A,E),Ma=g(Or,Fr,C,A,E),Ce=w.prevZ,Ae=w.nextZ;Ce&&Ce.z>=ba&&Ae&&Ae.z<=Ma;){if(Ce.x>=at&&Ce.x<=Or&&Ce.y>=Fe&&Ce.y<=Fr&&Ce!==D&&Ce!==N&&x(X,$e,oe,Oe,re,we,Ce.x,Ce.y)&&v(Ce.prev,Ce,Ce.next)>=0||(Ce=Ce.prevZ,Ae.x>=at&&Ae.x<=Or&&Ae.y>=Fe&&Ae.y<=Fr&&Ae!==D&&Ae!==N&&x(X,$e,oe,Oe,re,we,Ae.x,Ae.y)&&v(Ae.prev,Ae,Ae.next)>=0))return!1;Ae=Ae.nextZ}for(;Ce&&Ce.z>=ba;){if(Ce.x>=at&&Ce.x<=Or&&Ce.y>=Fe&&Ce.y<=Fr&&Ce!==D&&Ce!==N&&x(X,$e,oe,Oe,re,we,Ce.x,Ce.y)&&v(Ce.prev,Ce,Ce.next)>=0)return!1;Ce=Ce.prevZ}for(;Ae&&Ae.z<=Ma;){if(Ae.x>=at&&Ae.x<=Or&&Ae.y>=Fe&&Ae.y<=Fr&&Ae!==D&&Ae!==N&&x(X,$e,oe,Oe,re,we,Ae.x,Ae.y)&&v(Ae.prev,Ae,Ae.next)>=0)return!1;Ae=Ae.nextZ}return!0}function l(w,C,A){var E=w;do{var D=E.prev,G=E.next.next;!_(D,G)&&S(D,E,E.next,G)&&k(D,G)&&k(G,D)&&(C.push(D.i/A|0),C.push(E.i/A|0),C.push(G.i/A|0),Y(E),Y(E.next),E=w=G),E=E.next}while(E!==w);return n(E)}function s(w,C,A,E,D,G){var N=w;do{for(var X=N.next.next;X!==N.prev;){if(N.i!==X.i&&M(N,X)){var oe=B(N,X);N=n(N,N.next),oe=n(oe,oe.next),r(N,C,A,E,D,G,0),r(oe,C,A,E,D,G,0);return}X=X.next}N=N.next}while(N!==w)}function u(w,C,A,E){var D=[],G,N,X,oe,re;for(G=0,N=C.length;G<N;G++)X=C[G]*E,oe=G<N-1?C[G+1]*E:w.length,re=e(w,X,oe,E,!1),re===re.next&&(re.steiner=!0),D.push(y(re));for(D.sort(a),G=0;G<D.length;G++)A=f(D[G],A);return A}function a(w,C){return w.x-C.x}function f(w,C){var A=c(w,C);if(!A)return C;var E=B(A,w);return n(E,E.next),n(A,A.next)}function c(w,C){var A=C,E=w.x,D=w.y,G=-1/0,N;do{if(D<=A.y&&D>=A.next.y&&A.next.y!==A.y){var X=A.x+(D-A.y)*(A.next.x-A.x)/(A.next.y-A.y);if(X<=E&&X>G&&(G=X,N=A.x<A.next.x?A:A.next,X===E))return N}A=A.next}while(A!==C);if(!N)return null;var oe=N,re=N.x,$e=N.y,Oe=1/0,we;A=N;do E>=A.x&&A.x>=re&&E!==A.x&&x(D<$e?E:G,D,re,$e,D<$e?G:E,D,A.x,A.y)&&(we=Math.abs(D-A.y)/(E-A.x),k(A,w)&&(we<Oe||we===Oe&&(A.x>N.x||A.x===N.x&&h(N,A)))&&(N=A,Oe=we)),A=A.next;while(A!==oe);return N}function h(w,C){return v(w.prev,w,C.prev)<0&&v(C.next,w,w.next)<0}function d(w,C,A,E){var D=w;do D.z===0&&(D.z=g(D.x,D.y,C,A,E)),D.prevZ=D.prev,D.nextZ=D.next,D=D.next;while(D!==w);D.prevZ.nextZ=null,D.prevZ=null,p(D)}function p(w){var C,A,E,D,G,N,X,oe,re=1;do{for(A=w,w=null,G=null,N=0;A;){for(N++,E=A,X=0,C=0;C<re&&(X++,E=E.nextZ,!!E);C++);for(oe=re;X>0||oe>0&&E;)X!==0&&(oe===0||!E||A.z<=E.z)?(D=A,A=A.nextZ,X--):(D=E,E=E.nextZ,oe--),G?G.nextZ=D:w=D,D.prevZ=G,G=D;A=E}G.nextZ=null,re*=2}while(N>1);return w}function g(w,C,A,E,D){return w=(w-A)*D|0,C=(C-E)*D|0,w=(w|w<<8)&16711935,w=(w|w<<4)&252645135,w=(w|w<<2)&858993459,w=(w|w<<1)&1431655765,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,w|C<<1}function y(w){var C=w,A=w;do(C.x<A.x||C.x===A.x&&C.y<A.y)&&(A=C),C=C.next;while(C!==w);return A}function x(w,C,A,E,D,G,N,X){return(D-N)*(C-X)>=(w-N)*(G-X)&&(w-N)*(E-X)>=(A-N)*(C-X)&&(A-N)*(G-X)>=(D-N)*(E-X)}function M(w,C){return w.next.i!==C.i&&w.prev.i!==C.i&&!O(w,C)&&(k(w,C)&&k(C,w)&&U(w,C)&&(v(w.prev,w,C.prev)||v(w,C.prev,C))||_(w,C)&&v(w.prev,w,w.next)>0&&v(C.prev,C,C.next)>0)}function v(w,C,A){return(C.y-w.y)*(A.x-C.x)-(C.x-w.x)*(A.y-C.y)}function _(w,C){return w.x===C.x&&w.y===C.y}function S(w,C,A,E){var D=F(v(w,C,A)),G=F(v(w,C,E)),N=F(v(A,E,w)),X=F(v(A,E,C));return!!(D!==G&&N!==X||D===0&&R(w,A,C)||G===0&&R(w,E,C)||N===0&&R(A,w,E)||X===0&&R(A,C,E))}function R(w,C,A){return C.x<=Math.max(w.x,A.x)&&C.x>=Math.min(w.x,A.x)&&C.y<=Math.max(w.y,A.y)&&C.y>=Math.min(w.y,A.y)}function F(w){return w>0?1:w<0?-1:0}function O(w,C){var A=w;do{if(A.i!==w.i&&A.next.i!==w.i&&A.i!==C.i&&A.next.i!==C.i&&S(A,A.next,w,C))return!0;A=A.next}while(A!==w);return!1}function k(w,C){return v(w.prev,w,w.next)<0?v(w,C,w.next)>=0&&v(w,w.prev,C)>=0:v(w,C,w.prev)<0||v(w,w.next,C)<0}function U(w,C){var A=w,E=!1,D=(w.x+C.x)/2,G=(w.y+C.y)/2;do A.y>G!=A.next.y>G&&A.next.y!==A.y&&D<(A.next.x-A.x)*(G-A.y)/(A.next.y-A.y)+A.x&&(E=!E),A=A.next;while(A!==w);return E}function B(w,C){var A=new ne(w.i,w.x,w.y),E=new ne(C.i,C.x,C.y),D=w.next,G=C.prev;return w.next=C,C.prev=w,A.next=D,D.prev=A,E.next=A,A.prev=E,G.next=E,E.prev=G,E}function H(w,C,A,E){var D=new ne(w,C,A);return E?(D.next=E.next,D.prev=E,E.next.prev=D,E.next=D):(D.prev=D,D.next=D),D}function Y(w){w.next.prev=w.prev,w.prev.next=w.next,w.prevZ&&(w.prevZ.nextZ=w.nextZ),w.nextZ&&(w.nextZ.prevZ=w.prevZ)}function ne(w,C,A){this.i=w,this.x=C,this.y=A,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}t.deviation=function(w,C,A,E){var D=C&&C.length,G=D?C[0]*A:w.length,N=Math.abs(ue(w,0,G,A));if(D)for(var X=0,oe=C.length;X<oe;X++){var re=C[X]*A,$e=X<oe-1?C[X+1]*A:w.length;N-=Math.abs(ue(w,re,$e,A))}var Oe=0;for(X=0;X<E.length;X+=3){var we=E[X]*A,at=E[X+1]*A,Fe=E[X+2]*A;Oe+=Math.abs((w[we]-w[Fe])*(w[at+1]-w[we+1])-(w[we]-w[at])*(w[Fe+1]-w[we+1]))}return N===0&&Oe===0?0:Math.abs((Oe-N)/N)};function ue(w,C,A,E){for(var D=0,G=C,N=A-E;G<A;G+=E)D+=(w[N]-w[G])*(w[G+1]+w[N+1]),N=G;return D}return t.flatten=function(w){for(var C=w[0][0].length,A={vertices:[],holes:[],dimensions:C},E=0,D=0;D<w.length;D++){for(var G=0;G<w[D].length;G++)for(var N=0;N<C;N++)A.vertices.push(w[D][G][N]);D>0&&(E+=w[D-1].length,A.holes.push(E))}return A},So.exports}var kd=Ud();const p1=Bl(kd);var uf=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(uf||{});class Dd{constructor(e){this.items=[],this._name=e}emit(e,n,r,o,i,l,s,u){const{name:a,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][a](e,n,r,o,i,l,s,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const n=this.items.indexOf(e);return n!==-1&&this.items.splice(n,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ld=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],ff=class cf extends zr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const n=[...Ld,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(e={}){const n=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Id(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...cf.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,n){let r=e;if(r instanceof Ye&&(r={container:r},n&&(ce(Ht,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:st.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,n,r){const o=this.view.resolution;this.view.resize(e,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(e={}){const n=this;e.target||(e.target=n.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=uf.ALL);const{clear:r,clearColor:o,target:i}=e;st.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,st.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(n=>{this.runners[n]=new Dd(n)})}_addSystems(e){let n;for(n in e){const r=e[n];this._addSystem(r.value,r.name)}}_addSystem(e,n){const r=new e(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(e,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});e.forEach(o=>{const i=o.value,l=o.name,s=r[l];this.renderPipes[l]=new i(this,s?new s:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ed())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};ff.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let hf=ff,wo;function Gd(t){return wo!==void 0||(wo=(()=>{const e={stencil:!0,failIfMajorPerformanceCaveat:t??hf.defaultOptions.failIfMajorPerformanceCaveat};try{if(!wn.get().getWebGLRenderingContext())return!1;let r=wn.get().createCanvas().getContext("webgl",e);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),wo}let Co;async function Nd(t={}){return Co!==void 0||(Co=await(async()=>{const e=wn.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Co}const ml=["webgl","webgpu","canvas"];async function Bd(t){let e=[];t.preference?(e.push(t.preference),ml.forEach(i=>{i!==t.preference&&e.push(i)})):e=ml.slice();let n,r={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Nd()){const{WebGPURenderer:s}=await Vo(async()=>{const{WebGPURenderer:u}=await import("./WebGPURenderer-ZNcRkZ-u.js");return{WebGPURenderer:u}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...t,...t.webgpu};break}else if(l==="webgl"&&Gd(t.failIfMajorPerformanceCaveat??hf.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await Vo(async()=>{const{WebGLRenderer:u}=await import("./WebGLRenderer-s5TTHXRB.js");return{WebGLRenderer:u}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...t,...t.webgl};break}else if(l==="canvas")throw r={...t},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const df="8.6.6";class mf{static init(){globalThis.__PIXI_APP_INIT__?.(this,df)}static destroy(){}}mf.extension=Xe.Application;class $d{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,df)}destroy(){this._renderer=null}}$d.extension={type:[Xe.WebGLSystem,Xe.WebGPUSystem],name:"initHook",priority:-10};const pf=class As{constructor(...e){this.stage=new Ye,e[0]!==void 0&&ce(Ht,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Bd(e),As._plugins.forEach(n=>{n.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ce(Ht,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,n=!1){const r=As._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(e),this.renderer=null}};pf._plugins=[];let gf=pf;Cn.handleByList(Xe.Application,gf._plugins);Cn.add(mf);var Hd=`in vec2 aPosition;
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
`,Wd=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,pl=`struct GlobalFilterUniforms {
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
}`;const yf=class xf extends ye{constructor(e){e={...xf.defaultOptions,...e};const n=me.from({vertex:{source:pl,entryPoint:"mainVertex"},fragment:{source:pl,entryPoint:"mainFragment"}}),r=ge.from({vertex:Hd,fragment:Wd,name:"alpha-filter"}),{alpha:o,...i}=e,l=new sf({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:l}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};yf.defaultOptions={alpha:1};let Xd=yf;const vf={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Vd=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Yd(t){const e=vf[t],n=e.length;let r=Vd,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let l;for(let s=0;s<t;s++){let u=i.replace("%index%",s.toString());l=s,s>=n&&(l=t-s-1),u=u.replace("%value%",e[l].toString()),o+=u,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",t.toString()),r}const qd=`
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
    }`;function Kd(t,e){const n=Math.ceil(t/2);let r=qd,o="",i;e?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let l=0;l<t;l++){let s=i.replace("%index%",l.toString());s=s.replace("%sampleIndex%",`${l-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",t.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function jd(t,e){const n=Kd(e,t),r=Yd(e);return ge.from({vertex:n,fragment:r,name:`blur-${t?"horizontal":"vertical"}-pass-filter`})}var Zd=`

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
}`;function Qd(t,e){const n=vf[e],r=n.length,o=[],i=[],l=[];for(let c=0;c<e;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,t?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:e-c-1,d=n[h].toString();l[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=o.join(`
`),u=i.join(`
`),a=l.join(`
`),f=Zd.replace("%blur-struct%",s).replace("%blur-vertex-out%",u).replace("%blur-fragment-in%",s).replace("%blur-sampling%",a).replace("%dimension%",t?"z":"w");return me.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const bf=class Mf extends ye{constructor(e){e={...Mf.defaultOptions,...e};const n=jd(e.horizontal,e.kernelSize),r=Qd(e.horizontal,e.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,n,r,o);else{const i=Rt.getSameSizeTexture(n);let l=n,s=i;this._state.blend=!1;const u=e.renderer.type===oi.WEBGPU;for(let a=0;a<this.passes-1;a++){e.applyFilter(this,l,s,a===0?!0:u);const f=s;s=l,l=f}this._state.blend=!0,e.applyFilter(this,l,r,o),Rt.returnTexture(i)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};bf.defaultOptions={strength:8,quality:4,kernelSize:5};let gl=bf;class Jd{constructor({matrix:e,observer:n}={}){this.dirty=!0,this._matrix=e??new Be,this.observer=n,this.position=new Qe(this,0,0),this.scale=new Qe(this,1,1),this.pivot=new Qe(this,0,0),this.skew=new Qe(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const e=this._matrix;return this.dirty&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1),e}_onUpdate(e){this.dirty=!0,e===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}}const _f=class Io extends Nu{constructor(...e){let n=e[0]||{};n instanceof ae&&(n={texture:n}),e.length>1&&(ce(Ht,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=e[1],n.height=e[2]),n={...Io.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:l,tileRotation:s,width:u,height:a,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Qe({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=u??r.width,this._height=a??r.height,this._tileTransform=new Jd({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=l,this.tileRotation=s,this.roundPixels=c??!1}static from(e,n={}){return typeof e=="string"?new Io({texture:Dn.get(e),...n}):new Io({texture:e,...n})}get uvRespectAnchor(){return pn("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(e){pn("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=e}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e=="number"?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(e){e||(e=ae.EMPTY);const n=this._texture;n!==e&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}setSize(e,n){typeof e=="object"&&(n=e.height??e.width,e=e.width),this._width=e,this._height=n??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}updateBounds(){const e=this._bounds,n=this._anchor,r=this._width,o=this._height;e.maxX=-n._x*r,e.minX=e.maxX+r,e.maxY=-n._y*o,e.minY=e.maxY+o}containsPoint(e){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return e.x>=o&&e.x<=o+n&&(i=-r*this._anchor._y,e.y>=i&&e.y<=i+r)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e=="boolean"?e:e?.texture){const r=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(r)}this._texture=null}};_f.defaultOptions={texture:ae.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let em=_f;const Br=new Map;function tm(t,e){if(!Br.has(t)){const n=new ae({source:new ci({resource:t,...e})}),r=()=>{Br.get(t)===n&&Br.delete(t)};n.once("destroy",r),n.source.once("destroy",r),Br.set(t,n)}return Br.get(t)}const Sf=class wf{constructor(e={}){if(this.uid=Nt("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,e={...wf.defaultOptions,...e},this.stencil=e.stencil,this.depth=e.depth,this.isRoot=e.isRoot,typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<e.colorTextures;n++)this.colorTextures.push(new wt({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}else{this.colorTextures=[...e.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(e.depthStencilTexture||this.stencil)&&(e.depthStencilTexture instanceof ae||e.depthStencilTexture instanceof wt?this.depthStencilTexture=e.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new wt({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(e,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,l)=>{o&&l===0||i.source.resize(e,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(e,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(e=>{e.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Sf.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let nm=Sf;const fa=class Cf{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){e={...Cf.defaultOptions,...e},e.view&&(ce(Ht,"ViewSystem.view has been renamed to ViewSystem.canvas"),e.canvas=e.view),this.screen=new Ut(0,0,e.width,e.height),this.canvas=e.canvas||wn.get().createCanvas(),this.antialias=!!e.antialias,this.texture=tm(this.canvas,e),this.renderTarget=new nm({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0}),this.texture.source.transparent=e.backgroundAlpha<1,this.resolution=e.resolution}resize(e,n,r){this.texture.source.resize(e,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e=="boolean"?e:!!e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};fa.extension={type:[Xe.WebGLSystem,Xe.WebGPUSystem,Xe.CanvasSystem],name:"view",priority:0};fa.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let rm=fa;Cn.add(u0,f0);const ke={},lo={},yl=new Map,gn={};function Ts(t){return new Promise(e=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>e(n),n.src=t})}async function om(t){const e=window.MAP;Object.assign(ke,window.META,e.decometa||{});for(const s of Object.keys(ke)){const u=ke[s].gear;if(u)for(const a in u)for(const f of u[a])ke[s+"__"+a+f]=ke[s]}const n=Object.keys(ke).filter(s=>!s.includes("__")),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const l=()=>t(++i/o);await Promise.all([...n.map(async s=>{const u=await Ts("assets/"+s+".png");if(gn[s]=u,u.naturalWidth){const a=ae.from(u);a.source.scaleMode="nearest",lo[s]=a}l()}),...r.map(async s=>{gn[s]=await Ts("assets/"+s+(s==="ground"?".webp":".png")),l()})])}function ca(t){return!!lo[t]}const xl=new Set;function Af(t){lo[t]||xl.has(t)||!ke[t]||(xl.add(t),Ts("assets/"+t+".png").then(e=>{if(gn[t]=e,e.naturalWidth){const n=ae.from(e);n.source.scaleMode="nearest",lo[t]=n}}))}function im(t){for(const e of t){const n=ke[e]&&ke[e].gear;n&&n.w&&n.w.includes(0)&&Af(e+"__w0")}}function cr(t,e,n,r){const o=ke[t],i=lo[t];if(o&&!i&&t.includes("__"))return Af(t),null;if(!o||!i)return null;let l=0,s=0;if(o.anims&&e){const f=o.anims[e]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],c=o.dirs||1,h=c>=16?(n%16+16)%16:c>1?Math.round(n/2)%c:0;l=f.row+h,s=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(s=(r%o.frames+o.frames)%o.frames);const u=t+"|"+l+"|"+s;let a=yl.get(u);if(!a){if((s+1)*o.fw>i.width||(l+1)*o.fh>i.height)return null;a=new ae({source:i.source,frame:new Ut(s*o.fw,l*o.fh,o.fw,o.fh)}),yl.set(u,a)}return a}function Tf(t,e,n){const r=ke[t];if(!r||!r.anims)return 0;const o=r.anims[e]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function sm(){const t=gn.ground;if(!t||!t.naturalWidth)return[];const e=2048,n=[];for(let r=0;r<t.naturalHeight;r+=e)for(let o=0;o<t.naturalWidth;o+=e){const i=Math.min(e,t.naturalWidth-o),l=Math.min(e,t.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=l,s.getContext("2d").drawImage(t,o,r,i,l,0,0,i,l);const u=ae.from(s);u.source.scaleMode="nearest",n.push({tex:u,x:o,y:r})}return n}var _e=`in vec2 aPosition;
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
}`,am=`in vec2 vTextureCoord;
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
`,lm=`struct AdjustmentUniforms {
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
}`,um=Object.defineProperty,fm=(t,e,n)=>e in t?um(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pf=(t,e,n)=>(fm(t,typeof e!="symbol"?e+"":e,n),n);const cm=class Rf extends ye{constructor(e){e={...Rf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:lm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:am,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),Pf(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};Pf(cm,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var hm=`
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
}`,dm=`struct KawaseBlurUniforms {
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
}`,mm=`
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
`,pm=`struct KawaseBlurUniforms {
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
}`,gm=Object.defineProperty,ym=(t,e,n)=>e in t?gm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,En=(t,e,n)=>(ym(t,typeof e!="symbol"?e+"":e,n),n);const zf=class Of extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n))&&(ce("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},e[1]!==void 0&&(n.quality=e[1]),e[2]!==void 0&&(n.clamp=e[2])),n={...Of.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:n?.clamp?pm:dm,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:n?.clamp?mm:hm,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),En(this,"uniforms"),En(this,"_pixelSize",{x:0,y:0}),En(this,"_clamp"),En(this,"_kernels",[]),En(this,"_blur"),En(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(e,n,r,o){const i=this.pixelSizeX/n.source.width,l=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*l,e.applyFilter(this,n,r,o);else{const u=Rt.getSameSizeTexture(n);let a=n,f=u,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*l,e.applyFilter(this,a,f,!0),c=a,a=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*l,e.applyFilter(this,a,r,o),Rt.returnTexture(u)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,n)=>e+n+.5,0))}_generateKernels(){const e=this._blur,n=this._quality,r=[e];if(e>0){let o=e;const i=e/n;for(let l=1;l<n;l++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};En(zf,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Ff=zf;var xm=`in vec2 vTextureCoord;
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
`,vm=`struct AdvancedBloomUniforms {
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
`,bm=`
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
`,Mm=`struct ExtractBrightnessUniforms {
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
`,_m=Object.defineProperty,Sm=(t,e,n)=>e in t?_m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,If=(t,e,n)=>(Sm(t,typeof e!="symbol"?e+"":e,n),n);const Ef=class Uf extends ye{constructor(e){e={...Uf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Mm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:bm,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),If(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};If(Ef,"DEFAULT_OPTIONS",{threshold:.5});let wm=Ef;var Cm=Object.defineProperty,Am=(t,e,n)=>e in t?Cm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tr=(t,e,n)=>(Am(t,typeof e!="symbol"?e+"":e,n),n);const kf=class Df extends ye{constructor(e){e={...Df.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:vm,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:xm,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:ae.WHITE}}),tr(this,"uniforms"),tr(this,"bloomScale",1),tr(this,"brightness",1),tr(this,"_extractFilter"),tr(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new wm({threshold:e.threshold}),this._blurFilter=new Ff({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);this._extractFilter.apply(e,n,i,!0);const l=Rt.getSameSizeTexture(n);this._blurFilter.apply(e,i,l,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=l.source,e.applyFilter(this,n,r,o),Rt.returnTexture(l),Rt.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};tr(kf,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let Tm=kf;var Pm=`precision highp float;
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
`,Rm=`struct AsciiUniforms {
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
}`,zm=Object.defineProperty,Om=(t,e,n)=>e in t?zm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ps=(t,e,n)=>(Om(t,typeof e!="symbol"?e+"":e,n),n);const Fm=class Lf extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...Lf.DEFAULT_OPTIONS,...n};const o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Rm,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:Pm,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Ps(this,"uniforms"),Ps(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new st,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};Ps(Fm,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Im=`precision highp float;
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
`,Em=`struct BevelUniforms {
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
}`,Um=Object.defineProperty,km=(t,e,n)=>e in t?Um(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,nr=(t,e,n)=>(km(t,typeof e!="symbol"?e+"":e,n),n);const Dm=class Gf extends ye{constructor(e){e={...Gf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Em,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Im,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),nr(this,"uniforms"),nr(this,"_thickness"),nr(this,"_rotation"),nr(this,"_lightColor"),nr(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new st,this._shadowColor=new st,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/Ar}set rotation(e){this._rotation=e*Ar,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};nr(Dm,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Lm=Object.defineProperty,Gm=(t,e,n)=>e in t?Lm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Eo=(t,e,n)=>(Gm(t,typeof e!="symbol"?e+"":e,n),n);const Nm=class Nf extends Xd{constructor(...e){let n=e[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){ce("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},e[1]!==void 0&&(n.quality=e[1]),e[2]!==void 0&&(n.resolution=e[2]),e[3]!==void 0&&(n.kernelSize=e[3])}n={...Nf.DEFAULT_OPTIONS,...n},super(),Eo(this,"_blurXFilter"),Eo(this,"_blurYFilter"),Eo(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new gl({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new gl({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);e.applyFilter(this,n,r,o),this._blurXFilter.apply(e,n,i,!0),this._blurYFilter.apply(e,i,r,!1),Rt.returnTexture(i)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return ce("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){ce("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return ce("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){ce("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return ce("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){ce("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};Eo(Nm,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Bm=`precision highp float;
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
`,$m=`struct BulgePinchUniforms {
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
}`,Hm=Object.defineProperty,Wm=(t,e,n)=>e in t?Hm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bf=(t,e,n)=>(Wm(t,typeof e!="symbol"?e+"":e,n),n);const Xm=class $f extends ye{constructor(e){e={...$f.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:$m,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Bm,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),Bf(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,e.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};Bf(Xm,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Vm=`precision highp float;
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
`,Ym=`in vec2 aPosition;
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
`,vl=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Zn=Zn||{};Zn.stringify=function(){var t={"visit_linear-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return t.visit_gradient(e)},"visit_radial-gradient":function(e){return t.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return t.visit_gradient(e)},visit_gradient:function(e){var n=t.visit(e.orientation);return n&&(n+=", "),e.type+"("+n+t.visit(e.colorStops)+")"},visit_shape:function(e){var n=e.value,r=t.visit(e.at),o=t.visit(e.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(e){var n="",r=t.visit(e.at);return r&&(n+=r),n},"visit_extent-keyword":function(e){var n=e.value,r=t.visit(e.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return t.visit(e.value.x)+" "+t.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return t.visit_color(e.value,e)},visit_hex:function(e){return t.visit_color("#"+e.value,e)},visit_rgb:function(e){return t.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return t.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,n){var r=e,o=t.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var n="",r=e.length;return e.forEach(function(o,i){n+=t.visit(o),i<r-1&&(n+=", ")}),n},visit:function(e){if(!e)return"";if(e instanceof Array)return t.visit_array(e);if(e.type){var n=t["visit_"+e.type];if(n)return n(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return t.visit(e)}}();var Zn=Zn||{};Zn.parse=function(){var t={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function n(C){var A=new Error(e+": "+C);throw A.source=e,A}function r(){var C=o();return e.length>0&&n("Invalid input not EOF"),C}function o(){return v(i)}function i(){return l("linear-gradient",t.linearGradient,u)||l("repeating-linear-gradient",t.repeatingLinearGradient,u)||l("radial-gradient",t.radialGradient,c)||l("repeating-radial-gradient",t.repeatingRadialGradient,c)}function l(C,A,E){return s(A,function(D){var G=E();return G&&(ue(t.comma)||n("Missing comma before color stops")),{type:C,orientation:G,colorStops:v(_)}})}function s(C,A){var E=ue(C);if(E){ue(t.startCall)||n("Missing (");var D=A(E);return ue(t.endCall)||n("Missing )"),D}}function u(){return a()||f()}function a(){return ne("directional",t.sideOrCorner,1)}function f(){return ne("angular",t.angleValue,1)}function c(){var C,A=h(),E;return A&&(C=[],C.push(A),E=e,ue(t.comma)&&(A=h(),A?C.push(A):e=E)),C}function h(){var C=d()||p();if(C)C.at=y();else{var A=g();if(A){C=A;var E=y();E&&(C.at=E)}else{var D=x();D&&(C={type:"default-radial",at:D})}}return C}function d(){var C=ne("shape",/^(circle)/i,0);return C&&(C.style=Y()||g()),C}function p(){var C=ne("shape",/^(ellipse)/i,0);return C&&(C.style=B()||g()),C}function g(){return ne("extent-keyword",t.extentKeywords,1)}function y(){if(ne("position",/^at/,0)){var C=x();return C||n("Missing positioning value"),C}}function x(){var C=M();if(C.x||C.y)return{type:"position",value:C}}function M(){return{x:B(),y:B()}}function v(C){var A=C(),E=[];if(A)for(E.push(A);ue(t.comma);)A=C(),A?E.push(A):n("One extra comma");return E}function _(){var C=S();return C||n("Expected color definition"),C.length=B(),C}function S(){return F()||k()||O()||R()}function R(){return ne("literal",t.literalColor,0)}function F(){return ne("hex",t.hexColor,1)}function O(){return s(t.rgbColor,function(){return{type:"rgb",value:v(U)}})}function k(){return s(t.rgbaColor,function(){return{type:"rgba",value:v(U)}})}function U(){return ue(t.number)[1]}function B(){return ne("%",t.percentageValue,1)||H()||Y()}function H(){return ne("position-keyword",t.positionKeywords,1)}function Y(){return ne("px",t.pixelValue,1)||ne("em",t.emValue,1)}function ne(C,A,E){var D=ue(A);if(D)return{type:C,value:D[E]}}function ue(C){var A,E;return E=/^[\n\r\t\s]+/.exec(e),E&&w(E[0].length),A=C.exec(e),A&&w(A[0].length),A}function w(C){e=e.substr(C)}return function(C){return e=C.toString(),r()}}();var qm=Zn.parse;Zn.stringify;function Km(t){const e=qm(rp(t));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=e[0],r=jm(n.type),o=Zm(n.colorStops),i=tp(n.orientation);return{type:r,stops:o,angle:i}}function jm(t){const e={"linear-gradient":0,"radial-gradient":1};if(!(t in e))throw new Error(`Unsupported gradient type "${t}"`);return e[t]}function Zm(t){const e=Jm(t),n=[],r=new st;for(let o=0;o<t.length;o++){const i=Qm(t[o]),l=r.setValue(i).toArray();n.push({offset:e[o],color:l.slice(0,3),alpha:l[3]})}return n}function Qm(t){switch(t.type){case"hex":return`#${t.value}`;case"literal":return t.value;default:return`${t.type}(${t.value.join(",")})`}}function Jm(t){const e=[];for(let i=0;i<t.length;i++){const l=t[i];let s=-1;l.type==="literal"&&l.length&&"type"in l.length&&l.length.type==="%"&&"value"in l.length&&(s=parseFloat(l.length.value)/100),e.push(s)}const r=i=>{for(let l=i;l<e.length;l++)if(e[l]!==-1)return{indexDelta:l-i,offset:e[l]};return{indexDelta:e.length-1-i,offset:1}};let o=0;for(let i=0;i<e.length;i++){const l=e[i];if(l!==-1)o=l;else if(i===0)e[i]=0;else if(i+1===e.length)e[i]=1;else{const s=r(i),a=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)e[i+f]=o+(f+1)*a;i+=s.indexDelta,o=e[i]}}return e.map(ep)}function ep(t){return t.toString().length>6?parseFloat(t.toString().substring(0,6)):t}function tp(t){if(typeof t>"u")return 0;if("type"in t&&"value"in t)switch(t.type){case"angular":return parseFloat(t.value);case"directional":return np(t.value)}return 0}function np(t){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(t in e))throw new Error(`Unsupported directional value "${t}"`);return e[t]}function rp(t){let e=t.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var op=Object.defineProperty,ip=(t,e,n)=>e in t?op(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vn=(t,e,n)=>(ip(t,typeof e!="symbol"?e+"":e,n),n);const qi=90;function sp(t){return[...t].sort((e,n)=>e.offset-n.offset)}const uo=class Uo extends ye{constructor(e){if(e&&"css"in e?e={...Km(e.css||""),alpha:e.alpha??Uo.defaults.alpha,maxColors:e.maxColors??Uo.defaults.maxColors}:e={...Uo.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=me.from({vertex:{source:vl,entryPoint:"mainVertex"},fragment:{source:vl,entryPoint:"mainFragment"}}),r=ge.from({vertex:Ym,fragment:Vm,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??qi,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Vn(this,"baseUniforms"),Vn(this,"stopsUniforms"),Vn(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const n=sp(e),r=new st;let o,i,l;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const u=s*3;[o,i,l]=r.toArray(),this.stopsUniforms.uColors[u]=o,this.stopsUniforms.uColors[u+1]=i,this.stopsUniforms.uColors[u+2]=l,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+qi}set angle(e){this.baseUniforms.uOptions[1]=e-qi}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};Vn(uo,"LINEAR",0);Vn(uo,"RADIAL",1);Vn(uo,"CONIC",2);Vn(uo,"defaults",{type:uo.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var ap=`in vec2 vTextureCoord;
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

}`,lp=`struct ColorMapUniforms {
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
}`,up=Object.defineProperty,fp=(t,e,n)=>e in t?up(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,on=(t,e,n)=>(fp(t,typeof e!="symbol"?e+"":e,n),n);const cp=class Hf extends ye{constructor(...e){let n=e[0]??{};if((n instanceof ae||n instanceof wt)&&(ce("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},e[1]!==void 0&&(n.nearest=e[1]),e[2]!==void 0&&(n.mix=e[2])),n={...Hf.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:lp,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:ap,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),on(this,"uniforms"),on(this,"_size",0),on(this,"_sliceSize",0),on(this,"_slicePixelSize",0),on(this,"_sliceInnerSize",0),on(this,"_nearest",!1),on(this,"_scaleMode","linear"),on(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const n=e instanceof ae?e.source:e;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const e=this._colorMap;e?.source&&(e.source.update(),this.colorMap=e)}destroy(){this._colorMap?.destroy(),super.destroy()}};on(cp,"DEFAULT_OPTIONS",{colorMap:ae.WHITE,nearest:!1,mix:1});var hp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,dp=`struct ColorOverlayUniforms {
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
`,mp=Object.defineProperty,pp=(t,e,n)=>e in t?mp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Rs=(t,e,n)=>(pp(t,typeof e!="symbol"?e+"":e,n),n);const gp=class Wf extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(ce("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},e[1]!==void 0&&(n.alpha=e[1])),n={...Wf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:dp,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:hp,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Rs(this,"uniforms"),Rs(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new st,this.color=n.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Rs(gp,"DEFAULT_OPTIONS",{color:0,alpha:1});var yp=`in vec2 vTextureCoord;
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
`,xp=`struct ColorReplaceUniforms {
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
}`,vp=Object.defineProperty,bp=(t,e,n)=>e in t?vp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ko=(t,e,n)=>(bp(t,typeof e!="symbol"?e+"":e,n),n);const Mp=class Xf extends ye{constructor(...e){let n=e[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(ce("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},e[1]!==void 0&&(n.targetColor=e[1]),e[2]!==void 0&&(n.tolerance=e[2])),n={...Xf.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:xp,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:yp,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),ko(this,"uniforms"),ko(this,"_originalColor"),ko(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new st,this._targetColor=new st,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){ce("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return ce("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){ce("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return ce("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};ko(Mp,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var _p=`in vec2 vTextureCoord;
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
}`,Sp=`struct ConvolutionUniforms {
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
}`,wp=Object.defineProperty,Cp=(t,e,n)=>e in t?wp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vf=(t,e,n)=>(Cp(t,typeof e!="symbol"?e+"":e,n),n);const Ap=class Yf extends ye{constructor(...e){let n=e[0]??{};Array.isArray(n)&&(ce("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},e[1]!==void 0&&(n.width=e[1]),e[2]!==void 0&&(n.height=e[2])),n={...Yf.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Sp,entryPoint:"mainFragment"}}),l=ge.from({vertex:_e,fragment:_p,name:"convolution-filter"});super({gpuProgram:i,glProgram:l,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Vf(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};Vf(Ap,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Tp=`precision highp float;
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
`,Pp=`struct CRTUniforms {
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
}`,Rp=Object.defineProperty,zp=(t,e,n)=>e in t?Rp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Do=(t,e,n)=>(zp(t,typeof e!="symbol"?e+"":e,n),n);const Op=class qf extends ye{constructor(e){e={...qf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Pp,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Tp,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Do(this,"uniforms"),Do(this,"seed"),Do(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};Do(Op,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Fp=`precision highp float;
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
`,Ip=`struct DotUniforms {
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
}`,Ep=Object.defineProperty,Up=(t,e,n)=>e in t?Ep(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kp=(t,e,n)=>(Up(t,e+"",n),n);const Dp=class Kf extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},e[1]!==void 0&&(n.angle=e[1]),e[2]!==void 0&&(n.grayscale=e[2])),n={...Kf.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Ip,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:Fp,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};kp(Dp,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Lp=`precision highp float;
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
}`,Gp=`struct DropShadowUniforms {
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
}`,Np=Object.defineProperty,Bp=(t,e,n)=>e in t?Np(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rr=(t,e,n)=>(Bp(t,typeof e!="symbol"?e+"":e,n),n);const $p=class jf extends ye{constructor(e){e={...jf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Gp,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Lp,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),rr(this,"uniforms"),rr(this,"shadowOnly",!1),rr(this,"_color"),rr(this,"_blurFilter"),rr(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new st,this.color=e.color??0,this._blurFilter=new Ff({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new ye({gpuProgram:me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:`
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
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,n,r,o){const i=Rt.getSameSizeTexture(n);e.applyFilter(this,n,i,!0),this._blurFilter.apply(e,i,r,o),this.shadowOnly||e.applyFilter(this._basePass,n,r,!1),Rt.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};rr($p,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Hp=`precision highp float;
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
`,Wp=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,Xp=Object.defineProperty,Vp=(t,e,n)=>e in t?Xp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vt=(t,e,n)=>(Vp(t,typeof e!="symbol"?e+"":e,n),n);const Yp=class Zf extends ye{constructor(e){e={...Zf.defaults,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Wp,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Hp,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=e.sampleSize??512;const i=new ae({source:new aa({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:e?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:e?.fillMode??0,type:"f32"},uOffset:{value:e?.offset??100,type:"f32"},uDirection:{value:e?.direction??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),Vt(this,"uniforms"),Vt(this,"average",!1),Vt(this,"minSize",8),Vt(this,"sampleSize",512),Vt(this,"_canvas"),Vt(this,"texture"),Vt(this,"_slices",0),Vt(this,"_sizes",new Float32Array(1)),Vt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,e)}apply(e,n,r,o){const{width:i,height:l}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=l,this.uniforms.uAspect=l/i,e.applyFilter(this,n,r,o)}_randomizeSizes(){const e=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let l=1;for(let s=0;s<n;s++){const u=l/(i-s),a=Math.max(u*(1-Math.random()*.6),o);e[s]=a,l-=a}e[n]=l}else{let i=1;const l=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const u=Math.max(l*i*Math.random(),o);e[s]=u,i-=u}e[n]=i}this.shuffle()}shuffle(){const e=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=e[r];e[r]=e[o],e[o]=i}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let o,i=0;for(let l=0;l<this._slices;l++){o=Math.floor(this._offsets[l]*256);const s=this._sizes[l]*e,u=o>0?o:0,a=o<0?-o:0;r.fillStyle=`rgba(${u}, ${a}, 0, 1)`,r.fillRect(0,i>>0,e,s+1>>0),i+=s}n.source.update()}set sizes(e){const n=Math.min(this._slices,e.length);for(let r=0;r<n;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const n=Math.min(this._slices,e.length);for(let r=0;r<n;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/Ar}set direction(e){this.uniforms.uDirection=e*Ar}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Vt(Yp,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var qp=`precision highp float;
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
`,Kp=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,jp=Object.defineProperty,Zp=(t,e,n)=>e in t?jp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zs=(t,e,n)=>(Zp(t,typeof e!="symbol"?e+"":e,n),n);const Qp=class Qf extends ye{constructor(e){e={...Qf.DEFAULT_OPTIONS,...e};const n=e.distance??10,r=e.quality??.1,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Kp,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:qp.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:e?.knockout??!1?1:0,type:"f32"}}},padding:n}),zs(this,"uniforms"),zs(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new st,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};zs(Qp,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Jp=`precision highp float;
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
`,e2=`struct GodrayUniforms {
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

\${PERLIN}`,t2=`vec3 mod289(vec3 x)
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
`,n2=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,r2=Object.defineProperty,o2=(t,e,n)=>e in t?r2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,or=(t,e,n)=>(o2(t,typeof e!="symbol"?e+"":e,n),n);const i2=class Jf extends ye{constructor(e){e={...Jf.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:e2.replace("${PERLIN}",n2),entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:Jp.replace("${PERLIN}",t2),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),or(this,"uniforms"),or(this,"time",0),or(this,"_angleLight",[0,0]),or(this,"_angle",0),or(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){const i=n.frame.width,l=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=l,this.uniforms.uAspect=l/i,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(e){this._angle=e;const n=e*Ar;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};or(i2,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var s2=`in vec2 vTextureCoord;
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
`,a2=`struct HslUniforms {
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
}`,l2=Object.defineProperty,u2=(t,e,n)=>e in t?l2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Os=(t,e,n)=>(u2(t,typeof e!="symbol"?e+"":e,n),n);const f2=class ec extends ye{constructor(e){e={...ec.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:a2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:s2,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),Os(this,"uniforms"),Os(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,e)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(e){this.uniforms.uHsl[1]=e}get lightness(){return this.uniforms.uHsl[2]}set lightness(e){this.uniforms.uHsl[2]=e}get colorize(){return this.uniforms.uColorize===1}set colorize(e){this.uniforms.uColorize=e?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Os(f2,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var c2=`precision highp float;
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
`,h2=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,d2=Object.defineProperty,m2=(t,e,n)=>e in t?d2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fs=(t,e,n)=>(m2(t,typeof e!="symbol"?e+"":e,n),n);const p2=class tc extends ye{constructor(...e){let n=e[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Qe){ce("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],l="y"in n?n.y:n[1];n={velocity:{x:i,y:l}},e[1]!==void 0&&(n.kernelSize=e[1]),e[2]!==void 0&&(n.offset=e[2])}n={...tc.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:h2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:c2,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Fs(this,"uniforms"),Fs(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Fs(p2,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var g2=`in vec2 vTextureCoord;
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
`,y2=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,x2=Object.defineProperty,v2=(t,e,n)=>e in t?x2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Lo=(t,e,n)=>(v2(t,typeof e!="symbol"?e+"":e,n),n);const b2=class nc extends ye{constructor(...e){let n=e[0]??{};Array.isArray(n)&&(ce("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},e[1]&&(n.tolerance=e[1]),e[2]&&(n.maxColors=e[2])),n={...nc.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:y2.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:g2.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),Lo(this,"uniforms"),Lo(this,"_replacements",[]),Lo(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(e){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=e.length,i=new st;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let l,s,u;for(let a=0;a<o;a++){const f=e[a];i.setValue(f[0]),[l,s,u]=i.toArray(),n[a*3]=l,n[a*3+1]=s,n[a*3+2]=u,i.setValue(f[1]),[l,s,u]=i.toArray(),r[a*3]=l,r[a*3+1]=s,r[a*3+2]=u}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){ce("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return ce("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Lo(b2,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var M2=`precision highp float;
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
}`,_2=`struct OldFilmUniforms {
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
}`,S2=Object.defineProperty,w2=(t,e,n)=>e in t?S2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Is=(t,e,n)=>(w2(t,typeof e!="symbol"?e+"":e,n),n);const C2=class rc extends ye{constructor(e){e={...rc.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:_2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:M2,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Is(this,"uniforms"),Is(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};Is(C2,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var A2=`precision highp float;
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
`,T2=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,P2=Object.defineProperty,R2=(t,e,n)=>e in t?P2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bn=(t,e,n)=>(R2(t,typeof e!="symbol"?e+"":e,n),n);const ha=class Un extends ye{constructor(...e){let n=e[0]??{};typeof n=="number"&&(ce("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},e[1]!==void 0&&(n.color=e[1]),e[2]!==void 0&&(n.quality=e[2]),e[3]!==void 0&&(n.alpha=e[3]),e[4]!==void 0&&(n.knockout=e[4])),n={...Un.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:T2,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:A2.replace(/\$\{ANGLE_STEP\}/,Un.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),Bn(this,"uniforms"),Bn(this,"_thickness"),Bn(this,"_quality"),Bn(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Un.getAngleStep(r),this._color=new st,this.color=n.color??0,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,e.applyFilter(this,n,r,o)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Un.MAX_SAMPLES,Un.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Un.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};Bn(ha,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Bn(ha,"MIN_SAMPLES",1);Bn(ha,"MAX_SAMPLES",100);var z2=`precision highp float;
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
`,O2=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,F2=Object.defineProperty,I2=(t,e,n)=>e in t?F2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Go=(t,e,n)=>(I2(t,typeof e!="symbol"?e+"":e,n),n);const E2=class oc extends ye{constructor(...e){let n=e[0]??{};if(typeof n=="number"){if(ce("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},e[1]){const i="x"in e[1]?e[1].x:e[1][0],l="y"in e[1]?e[1].y:e[1][1];n.center={x:i,y:l}}e[2]&&(n.kernelSize=e[2]),e[3]&&(n.radius=e[3])}n={...oc.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:O2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:z2,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),Go(this,"uniforms"),Go(this,"_angle"),Go(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};Go(E2,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var U2=`precision highp float;
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
`,k2=`struct ReflectionUniforms {
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
}`,D2=Object.defineProperty,L2=(t,e,n)=>e in t?D2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Es=(t,e,n)=>(L2(t,typeof e!="symbol"?e+"":e,n),n);const G2=class ic extends ye{constructor(e){e={...ic.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:k2,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:U2,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Es(this,"uniforms"),Es(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};Es(G2,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var N2=`precision highp float;
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
`,B2=`struct RgbSplitUniforms {
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
`,$2=Object.defineProperty,H2=(t,e,n)=>e in t?$2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,sc=(t,e,n)=>(H2(t,typeof e!="symbol"?e+"":e,n),n);const W2=class ac extends ye{constructor(...e){let n=e[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(ce("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},e[1]!==void 0&&(n.green=e[1]),e[2]!==void 0&&(n.blue=e[2])),n={...ac.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:B2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:N2,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),sc(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};sc(W2,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var X2=`
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
`,V2=`
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
`,Y2=Object.defineProperty,q2=(t,e,n)=>e in t?Y2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Us=(t,e,n)=>(q2(t,typeof e!="symbol"?e+"":e,n),n);const K2=class lc extends ye{constructor(...e){let n=e[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(ce("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...e[1]},e[2]!==void 0&&(n.time=e[2])),n={...lc.DEFAULT_OPTIONS,...n};const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:V2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:X2,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Us(this,"uniforms"),Us(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uTime=this.time,e.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};Us(K2,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var j2=`precision highp float;
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
`,Z2=`struct SimpleLightmapUniforms {
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
}`,Q2=Object.defineProperty,J2=(t,e,n)=>e in t?Q2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,No=(t,e,n)=>(J2(t,typeof e!="symbol"?e+"":e,n),n);const eg=class uc extends ye{constructor(...e){let n=e[0]??{};if(n instanceof ae&&(ce("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},e[1]!==void 0&&(n.color=e[1]),e[2]!==void 0&&(n.alpha=e[2])),n={...uc.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:Z2,entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:j2,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),No(this,"uniforms"),No(this,"_color"),No(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new st,this.color=n.color??0,Object.assign(this,n)}apply(e,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,e.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};No(eg,"DEFAULT_OPTIONS",{lightMap:ae.WHITE,color:0,alpha:1});var tg=`in vec2 vTextureCoord;
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
`,ng=`struct TiltShiftUniforms {
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
}`,rg=Object.defineProperty,og=(t,e,n)=>e in t?rg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ks=(t,e,n)=>(og(t,typeof e!="symbol"?e+"":e,n),n);const ig=class fc extends ye{constructor(e){const{width:n,height:r}=rm.defaultOptions;e={...fc.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...e};const o=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:ng,entryPoint:"mainFragment"}}),i=ge.from({vertex:_e,fragment:tg,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur,e.gradientBlur]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),ks(this,"uniforms"),ks(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis}updateDimensions(e){const{uDimensions:n}=this.uniforms;n[0]=e.frame.width,n[1]=e.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,n=this.uniforms.uStart,r=e.x-n.x,o=e.y-n.y,i=Math.sqrt(r*r+o*o),l=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=l?-o/i:r/i,this.uniforms.uDelta[1]=l?r/i:o/i}};ks(ig,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var sg=`precision highp float;
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
`,ag=`struct TwistUniforms {
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
`,lg=Object.defineProperty,ug=(t,e,n)=>e in t?lg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,cc=(t,e,n)=>(ug(t,typeof e!="symbol"?e+"":e,n),n);const fg=class hc extends ye{constructor(e){e={...hc.DEFAULT_OPTIONS,...e};const n=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:ag,entryPoint:"mainFragment"}}),r=ge.from({vertex:_e,fragment:sg,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),cc(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};cc(fg,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var cg=`precision highp float;
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
`,hg=`struct ZoomBlurUniforms {
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
}`,dg=Object.defineProperty,mg=(t,e,n)=>e in t?dg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dc=(t,e,n)=>(mg(t,typeof e!="symbol"?e+"":e,n),n);const pg=class mc extends ye{constructor(e){e={...mc.DEFAULT_OPTIONS,...e};const n=e.maxKernelSize??32,r=me.from({vertex:{source:Se,entryPoint:"mainVertex"},fragment:{source:hg.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=ge.from({vertex:_e,fragment:cg.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),dc(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};dc(pg,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let Ln;const xe={};let hr,dr,vn,mr,ii,si,Qr,ai,Ds,Ls,pr,Jr,Bo,$o=null,Ho=null,pc,Gs=[],Ns=[];const li=[],Rr=new Map,bn=[],Ao=[];function da(){return Ln.canvas}let To;function gg(){try{const t=Ln.renderer.gl,e=t.getExtension("WEBGL_debug_renderer_info");return String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER))}catch{return"?"}}async function yg(t){Ln=new gf,await Ln.init({resizeTo:window,background:"#100d18",antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1}),b.gpuName=gg(),b.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(b.gpuName),t.appendChild(Ln.canvas),Ln.canvas.style.display="block";for(const n of["ground","fxGround","world","fxTop","lights","fog","top"])xe[n]=new Ye,Ln.stage.addChild(xe[n]);xe.groundCam=new Ye,xe.ground.addChild(xe.groundCam),xe.worldCam=new Ye,xe.world.addChild(xe.worldCam),xe.shadows=new Ye,xe.entities=new Ye,xe.entities.sortableChildren=!0,xe.worldCam.addChild(xe.shadows,xe.entities),xe.lightsCam=new Ye,xe.lights.addChild(xe.lightsCam),To=new Tm({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),To.resolution=.5,To.blendMode="add",xe.lights.filters=[To],hr=document.createElement("canvas"),dr=document.createElement("canvas"),vn=document.createElement("canvas"),mr=document.createElement("canvas");for(const n of[hr,dr,vn,mr])n.getContext("2d",{willReadFrequently:!0});const e=n=>new ae({source:new ci({resource:n,resolution:1})});ii=e(hr),si=e(dr),Qr=e(vn),ai=e(mr),Qr.source.scaleMode="linear",Ds=new tt(ii),Ls=new tt(si),pr=new tt(Qr),xe.fxGround.addChild(Ds),xe.fxTop.addChild(Ls),xe.fog.addChild(pr),Bo=new tt(ai),Bo.blendMode="add",xe.lights.addChild(Bo),pc=ae.from(xg(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),Jr=new tt(ae.WHITE),xe.top.addChild(Jr),bl(),window.addEventListener("resize",bl)}function xg(t,e){const n=document.createElement("canvas");n.width=n.height=t;const r=n.getContext("2d"),o=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[i,l]of e)o.addColorStop(i,l);return r.fillStyle=o,r.fillRect(0,0,t,t),n}function bl(){b.W=window.innerWidth,b.H=window.innerHeight;const t=i=>Math.ceil(i*$s);hr.width=mr.width=t(b.W),hr.height=mr.height=t(b.H),dr.width=b.W,dr.height=b.H,ii.source.resize(t(b.W),t(b.H),1),ai.source.resize(t(b.W),t(b.H),1),si.source.resize(b.W,b.H,1);for(const i of[Ds,Ls,Bo])i.position.set(0,0),i.width=b.W,i.height=b.H;const e=document.createElement("canvas");e.width=256,e.height=144;const n=e.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=ae.from(e);o.source.scaleMode="linear",Jr.texture=o,Jr.width=b.W,Jr.height=b.H}function vg(){const t=window.MAP;for(const o of sm()){const i=new tt(o.tex);i.x=o.x,i.y=o.y,xe.groundCam.addChild(i)}const e=bg(),n=gn.ground.naturalWidth,r=gn.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const l=gn[o];if(!l||!l.naturalWidth)continue;const s=ae.from(l);s.source.scaleMode="linear";const u=new tt(s);u.width=n,u.height=r;const a=new em({texture:e,width:n,height:r});a.blendMode="add",a.alpha=i==="flow"?.5:.35,a.mask=u,xe.groundCam.addChild(u,a),i==="flow"?$o=a:Ho=a}Gs=(t.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),Ns=(t.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Gs)Bs(o,!0);for(const o of Ns)Bs(o,!1)}function Bs(t,e){const n=ke[t.sprite];if(!n||!ca(t.sprite))return;const r=cr(t.sprite,null,0,0);if(!r)return;const o=new tt(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,l]=T(t.x,t.y);o.x=i,o.y=l,o.zIndex=(t.x+t.y)*100,xe.entities.addChild(o),li.push({o:t,spr:o,tree:e&&t.tree,animated:!e&&(n.frames||1)>1})}function bg(){const t=document.createElement("canvas");t.width=192,t.height=96;const e=t.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,l=4+Math.random()*12,s=.25+Math.random()*.55;e.fillStyle=`rgba(210,245,255,${s})`;for(const u of[-192,0,192])for(const a of[-96,0,96])e.fillRect(Math.round(o+u),Math.round(i+a),Math.round(l),1),l>9&&e.fillRect(Math.round(o+u+2),Math.round(i+a+1),Math.round(l-4),1)}const n=ae.from(t);return n.source.scaleMode="nearest",n}function Mg(t){const e=ke[t.sprite];if(!e||!e.anims)return["idle",0];if(t.atkAnim>0&&e.anims.attack){const n=e.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-t.atkAnim/.45)*n))]}return t.moving&&e.anims.walk?["walk",Math.floor((t.animT||0)*1e3/e.anims.walk.ms*((t.speedNow?t.speedNow():3.4)/3.4))]:e.anims.idle?["idle",Tf(t.sprite,"idle",t.animT||0)]:["walk",0]}const _g={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194};function Sg(t){let e=Rr.get(t.id);if(!e){const n=()=>{const r=new tt(ae.EMPTY);return xe.entities.addChild(r),r};e={spr:n(),glow:n(),shadow:new tt(ae.EMPTY),gear:[],seen:0},e.glow.blendMode="add",e.shadow.tint=656916,e.shadow.alpha=.28,xe.shadows.addChild(e.shadow),Rr.set(t.id,e)}return e}function Po(t,e,n,r,o,i,l){if(!e){t.visible=!1;return}const s=ke[n];t.texture=e,t.visible=!0,t.anchor.set(s.ax/s.fw,s.ay/s.fh),t.scale.set(i),t.x=Math.round(r),t.y=Math.round(o),t.zIndex=l}function wg(){const t=b.game,e=t.player,n=b.T,r=++Cg;for(const o of t.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=Sg(o);i.seen=r;const l=o.kind==="tower"||o.kind==="nexus";if(o.dead){Po(i.spr,cr("prop_boulder",null,0,0),"prop_boulder",...T(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const O of i.gear)O.visible=!1;continue}if(rt(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const O of i.gear)O.visible=!1;continue}const[s,u]=T(o.x,o.y);let a=u;if(o.dash&&o.dash.leap){const O=Math.min(1,o.dash.t/o.dash.dur);a-=Math.sin(O*Math.PI)*50}o.leaping&&(a-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),e&&o.team!==e.team&&!l&&(f*=Math.min(1,o._va===void 0?1:o._va)),e&&o.team===e.team&&o._bush>=0&&(f*=.6);const[c,h]=Mg(o),d=l||ke[o.sprite]&&ke[o.sprite].dirs===1?0:o.dir;let p=o.scale||1;o.monster==="serpent"&&(p=1.45);const g=o.status&&o.status.transform;if(g){o._tfT=(o._tfT||0)+1/60;const O=Math.min(1,o._tfT*4),k=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*O*k}else o._tfT=0;const y=o.status||{};let x=s;y.stun&&["quake","roar","dust","firedash"].includes(y.stun.fx)&&(x+=Math.round(Math.sin(n*60+o.id)*1.5));const M=(o.x+o.y)*100+1,v=cr(o.sprite,c,d,l?Tf(o.sprite,"idle",n):h);Po(i.spr,v,o.sprite,x,a,p,M),i.spr.alpha=f;let _=0,S=0;if(o.hitFlash>.06?(_=16777215,S=.75):y.slow?(_=_g[y.slow.fx]||8050943,S=.35):y.root?(_=3836458,S=.3):y.stun&&y.stun.fx==="arcane"?(_=11563263,S=.35):y.burn?(_=16742954,S=.25+.15*Math.sin(n*14+o.id)):g&&(_=g.kind==="fire"?16747066:16765514,S=.25+.1*Math.sin(n*6)),S>0&&v?(Po(i.glow,v,o.sprite,x,a,p,M+.5),i.glow.tint=_,i.glow.alpha=S*f):i.glow.visible=!1,b.shadowsOn&&!l&&v&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(ke[o.sprite]&&ke[o.sprite].fly)){const O=ke[o.sprite];i.shadow.texture=v,i.shadow.visible=!0,i.shadow.anchor.set(O.ax/O.fw,O.ay/O.fh),i.shadow.setFromMatrix(new Be(p,0,-.8*p,-.38*p,Math.round(x),Math.round(u))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const R=ke[o.sprite]&&ke[o.sprite].gear;let F=0;if(R&&o.kind==="hero"){const O=b.mode==="guest"?o.gear||0:t.gearCode(o),k={w:O&3,h:O>>2&3,a:O>>4&3,b:O>>6&3};for(const U of["a","b","h","w"]){const B=k[U];if((B>0||U==="w")&&R[U]&&R[U].includes(B)){const H=o.sprite+"__"+U+B;if(!i.gear[F]){const Y=new tt(ae.EMPTY);xe.entities.addChild(Y),i.gear[F]=Y}Po(i.gear[F],cr(H,c,d,h),H,x,a,p,M+.2+F*.05),i.gear[F].alpha=f,F++}}}for(;F<i.gear.length;F++)i.gear[F].visible=!1}for(const[o,i]of Rr)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const l of i.gear)l.destroy();Rr.delete(o)}}let Cg=0;function Ag(t){if(!t.sprite||!ca(t.sprite))return;const e=cr(t.sprite,"idle",t.dir||0,0);if(!e)return;const n=new tt(e),r=ke[t.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=T(t.x,t.y);n.x=o,n.y=i,n.scale.set(t.scale||1),n.tint=7829384,n.zIndex=(t.x+t.y)*100,xe.entities.addChild(n),bn.push({spr:n,t:0,vy:20})}function Tg(t){const e=b.cam,n=b.T,r=(Math.random()-.5)*e.shake,o=(Math.random()-.5)*e.shake,i=Math.round(b.W/2-e.x*e.z+r),l=Math.round(b.H/2-e.y*e.z+o);for(const p of["groundCam","worldCam","lightsCam"])xe[p].scale.set(e.z),xe[p].position.set(i,l);const s=e.x-b.W/2/e.z-2,u=e.y-b.H/2/e.z-2,a=b.W/e.z+4,f=b.H/e.z+4;$o&&($o.tilePosition.set(-n*14,-n*3),$o.alpha=.45+.12*Math.sin(n*1.3)),Ho&&(Ho.tilePosition.set(Math.sin(n*.3)*6,0),Ho.alpha=.25+.15*Math.sin(n*.9));const c=b.game&&b.game.player,[h,d]=c?T(c.x,c.y):[0,0];for(const p of li){const[g,y]=T(p.o.x,p.o.y),x=g>s-200&&g<s+a+200&&y>u-100&&y<u+f+400;if(p.spr.visible=x,!!x){if(p.animated){const M=cr(p.o.sprite,null,0,Math.floor(n*9+p.o.x));M&&(p.spr.texture=M)}if(p.tree){const M=ke[p.o.sprite];if(p.spr.alpha=c&&p.o.x+p.o.y>c.x+c.y&&M&&Math.abs(h-g)<M.fw*.42&&d<y&&d>y-M.ay?.42:1,p.o.sprite.startsWith("prop_")){const v=p.o,_=(v.x*12.9898+v.y*78.233)%6.28,S=.8+(v.x*7.1+v.y*3.3)%1*.7,R=(.02+(v.x*3.7+v.y*9.1)%1*.025)*(.6+b.wind);p.spr.skew.x=-(Math.sin(n*S*1.6+_)*R+Math.sin(n*S*3.1+_*2)*R*.3+b.wind*.02)}}}}b.game&&($c(t,s,u,a,f,Gs),wg());for(const p of bn)p.t+=t,p.spr.alpha=Math.max(0,1-p.t/.8),p.spr.y+=p.vy*t;for(let p=bn.length-1;p>=0;p--)bn[p].t>.8&&(bn[p].spr.destroy(),bn.splice(p,1));Rg(),Ig(),b.game&&b.game.player?Ug():pr.visible=!1}let Ml=!0;const $s=1;function gc(t){const e=t.look;if(typeof e!="string"&&typeof e!="number")return!1;const n=String(e),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&te[r+"_"+n.slice(-1)])}function Ki(t,e=1){const n=t.getContext("2d"),r=b.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,t.width,t.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*e,0,0,r.z*e,Math.round(b.W/2-r.x*r.z+o)*e,Math.round(b.H/2-r.y*r.z+0)*e),n.imageSmoothingEnabled=!1,n}const Pg={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function Rg(){const t=b.game,e=b.T,n=Ki(mr,$s);let r=Ki(hr,$s);if(wa(r,n),t&&t.player){const i=t.player,l=window.SIM.HEROES;Wc();for(const a of t.zones)if(!gc(a))if(a.once){const f=1-a.t/a.dur;ze(a.x,a.y,a.r,"#ffe070","rgba(200,120,255,"+(.12+.25*f)+")",2,[6,4]),ze(a.x,a.y,a.r*f,"#ffffff",null,2)}else{const f=a.fx==="spores";if(ze(a.x,a.y,a.r,f?"#9ae060":"#ffe0a0",f?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),f&&Math.random()<.35&&z({type:"puff",x:a.x+m(-1,1)*a.r*.8,y:a.y+m(-1,1)*a.r*.8,r:m(12,22),dur:m(.8,1.4),col:[130,200,80]}),a.fx==="arrows")for(let c=0;c<3;c++){const h=Math.random()*6.28,d=Math.random()*a.r;z({type:"meteor",x:a.x+Math.cos(h)*d,y:a.y+Math.sin(h)*d,dur:.25})}}Xc();for(const a of t.runes||[]){const f=window.SIM.RUNES[a.kind];ze(a.x,a.y,.45+Math.sin(e*4)*.05,f.col,null,2)}for(const a of t.heroes)a.dead||rt(a)||ze(a.x,a.y,.42,a===i?"#ffd24a":ts[a.team],a===i?"rgba(255,210,74,0.12)":null,a===i?2:1.5);const s=b.hoverUnit;s&&s!==i.target&&!s.dead&&ze(s.x,s.y,(s.r||.4)*(s.scale||1)+.22,s.team===i.team?"#ffffff":"#ff6a5a",s.team===i.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const a of t.units)if(a.kind==="tower"&&!a.dead&&a.team!==i.team&&(a.target===i||a.targetId===i.id)){const[f,c]=T(a.x,a.y,1.3),[h,d]=T(i.x,i.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(e*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-e*40,r.beginPath(),r.moveTo(f,c),r.lineTo(h,d),r.stroke(),r.restore()}i.target&&!i.target.dead&&ze(i.target.x,i.target.y,(i.target.r||.4)+.2,"#ff4a4a",null,2,[4,3]);for(const a of t.units)a.kind==="tower"&&!a.dead&&Math.hypot(a.x-i.x,a.y-i.y)<6.2+2.5&&a.team!==i.team&&ze(a.x,a.y,6.2,"#ff5a4a90",null,2,[8,6]);if(zg(i),b.hoverAbil){const a=l[i.heroKey].abil[b.hoverAbil];a.range&&ze(i.x,i.y,a.range,"#ffe07090",null,2,[6,6]),a.radius&&(a.type==="aoe_self"||a.type==="heal_aoe")&&ze(i.x,i.y,a.radius,"#ffe07090",null,2,[6,6])}const u=b.marker;if(u){const a=u.t/.3;a<1&&(r.globalAlpha=1-a*.7,ze(u.x,u.y,.28*(1-a)+.06,u.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const a of t.units){if(a.dead||a.kind==="tower"||a.kind==="nexus"||rt(a))continue;a.status&&a.status.slow&&ze(a.x,a.y,(a.r||.35)*(a.scale||1)+.12,Pg[a.status.slow.fx]||"#bff4ff",null,2,[3,3]);const f=a.status&&a.status.transform;if(f){const c=f.kind==="fire",h=.5+.5*Math.sin(e*6);ze(a.x,a.y,1+h*.15,c?"#ff9a3a":"#ffd24a",c?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),c&&ze(a.x,a.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let d=0;d<3;d++)Math.random()<.7&&I(a.x+m(-.6,.6),a.y+m(-.6,.6),m(.1,1.2),m(-.3,.3),m(-.3,.3),m(1,2.4),.6,c?Ot("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}a.status&&a.status.redbuff&&ze(a.x,a.y,.5,"#ff6a4a90",null,1.5,[2,4]),a.status&&a.status.bluebuff&&ze(a.x,a.y,.55,"#6ab8ff90",null,1.5,[2,4]),a.aegis&&Math.random()<.2&&I(a.x+m(-.3,.3),a.y+m(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),a.recall&&(ze(a.x,a.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&I(a.x+m(-.4,.4),a.y+m(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0))}}if(ii.source.update(),r=Ki(dr),wa(r,n),t){if(t.player){for(const l of t.runes||[]){const s=window.SIM.RUNES[l.kind],u=Math.sin(e*3+l.id)*.08,[a,f]=T(l.x,l.y,.55+u),c=r.createRadialGradient(a,f,2,a,f,22);c.addColorStop(0,"#ffffff"),c.addColorStop(.3,s.col),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.beginPath(),r.arc(a,f,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(a-3,f-3,6,6)}Zc(),Vc(),Og(r)}qc()}Kc(),t&&t.player&&Fg(r),si.source.update();const o=Hc();(o||Ml)&&ai.source.update(),Ml=o}function zg(t){if(!b.aim)return;const e=window.SIM.HEROES[t.heroKey].abil[b.aim.k],n=b.mouse.wx,r=b.mouse.wy;let o=n-t.x,i=r-t.y;const l=Math.hypot(o,i)||1;o/=l,i/=l;const s="#7fe0ff",u="rgba(120,220,255,0.16)";if(e.range&&ze(t.x,t.y,e.range,"#7fe0ff80",null,2,[6,6]),e.type==="proj"||e.type==="dash"){const a=e.range,f=(e.width||1)/2,c=-i*f,h=o*f;Ca([[t.x+c,t.y+h],[t.x+o*a+c,t.y+i*a+h],[t.x+o*(a+f*1.5),t.y+i*(a+f*1.5)],[t.x+o*a-c,t.y+i*a-h],[t.x-c,t.y-h]],s,u)}else if(e.type==="cone"){const a=Math.atan2(i,o),f=[[t.x,t.y]];for(let c=0;c<=12;c++){const h=a-e.angle+2*e.angle*c/12;f.push([t.x+Math.cos(h)*e.range,t.y+Math.sin(h)*e.range])}Ca(f,s,u)}else{const a=Math.min(l,e.range||0),f=t.x+o*a,c=t.y+i*a;ze(f,c,e.radius||.6,s,u,2)}}function Og(t){const e=b.T;for(const n of b.game.units){if(n.dead||rt(n))continue;const r=n.status||{};if(!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const u=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;I(n.x+m(-.3,.3),n.y+m(-.3,.3),u<0?1.1:.2,m(-.2,.2),m(-.2,.2),u,.7,Ot(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,u<0?2:-.5,!0)}r.burn&&Math.random()<.5&&I(n.x+m(-.25,.25),n.y+m(-.25,.25),.3,0,0,1.4,.4,Ot("fire"),3,-1,!0);continue}const o=ke[n.sprite],i=n.scale||1,[l,s]=T(n.x,n.y);if(r.root){t.save(),t.lineWidth=3,t.strokeStyle="#2a6a1a";for(let u=0;u<4;u++){const a=u*1.57+e*.6,f=14*i;t.beginPath(),t.moveTo(l+Math.cos(a)*f,s+Math.sin(a)*f*.5),t.quadraticCurveTo(l+Math.cos(a+.8)*f*.4,s-10*i,l+Math.cos(a+1.6)*f*.6,s-18*i+Math.sin(e*3+u)*2),t.stroke(),t.fillStyle="#6ac04a",t.fillRect(l+Math.cos(a+1.6)*f*.6-2,s-18*i-2,4,3)}t.restore()}if(r.stun){const u=r.stun.fx||"",a=s-(o?o.ay*.8:50)*i;if(u==="arcane")for(let f=0;f<3;f++){const c=e*3+f*2.09;t.fillStyle=f%2?"#e0b8ff":"#9a50ff",t.fillRect(l+Math.cos(c)*16-3,a+Math.sin(c)*5-3,6,6),t.fillStyle="#ffffff",t.fillRect(l+Math.cos(c)*16-1,a+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=e*5+f*2.09,h=l+Math.cos(c)*14,d=a+Math.sin(c)*4;t.fillStyle="#ffe070",t.fillRect(h-3,d-1,6,2),t.fillRect(h-1,d-3,2,6),t.fillStyle="#fff6c8",t.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(u))for(let f=0;f<2;f++){const c=-e*4+f*3.14,h=l+Math.cos(c)*20,d=a-6+Math.sin(c)*6;t.fillStyle="#ffffff",t.fillRect(h-3,d,3,2),t.fillRect(h,d-2,3,2)}}u==="splash"&&Math.random()<.3&&I(n.x+m(-.3,.3),n.y+m(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}function Fg(t){const e=b.game,n=e.player,r=b.cam,o=window.SIM.HEROES,i=r.x-b.W/2/r.z,l=r.y-b.H/2/r.z,s=b.W/r.z,u=b.H/r.z,a=(c,h,d,p,g,y,x)=>{t.fillStyle="#000000c0",t.fillRect(c-1,h-1,d+2,p+2),t.fillStyle=x,t.fillRect(c,h,d,p),t.fillStyle=y,t.fillRect(c,h,Math.max(0,Math.min(1,g))*d,p),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(c,h,Math.max(0,Math.min(1,g))*d,Math.max(1,p/3))},f=(c,h,d,p,g)=>{t.font=`600 ${g}px "Pixelify Sans", "Nunito", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.lineWidth=Math.max(2,g/4),t.strokeStyle="#000000d0",t.strokeText(c,h,d),t.fillStyle=p,t.fillText(c,h,d)};for(const c of e.units){if(c.dead||rt(c))continue;const[h,d]=T(c.x,c.y);if(h<i-60||h>i+s+60||d<l-60||d>l+u+160||c.kind==="monster"&&c.hp>=c.maxHp-1&&!c.boss)continue;const p=ke[c.sprite],y=d-(c.leaping?40:0)-(p?p.ay*(c.scale||1)*(c.monster==="serpent"?1.4:.92):50)-6,x=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,M=x?66:34,v=x?7:4,_=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":ts[c.team];if(t.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,a(h-M/2,y,M,v,c.hp/c.maxHp,_,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(t.strokeStyle="#ffffff",t.lineWidth=1.5,t.strokeRect(h-M/2-1.5,y-1.5,M+3,v+3)),c.kind==="hero")for(let S=1;S<6;S++)t.fillStyle="#00000080",t.fillRect(h-M/2+M*S/6,y,1,v);c.shield>0&&b.mode!=="guest"&&(t.fillStyle="#e8f4ff",t.fillRect(h-M/2+c.hp/c.maxHp*M,y,Math.min(M*(1-c.hp/c.maxHp),c.shield/c.maxHp*M),v)),c.kind==="hero"&&(t.fillStyle="#120c1a",t.fillRect(h-M/2-16,y-2,14,v+4),t.strokeStyle="#d0a050",t.lineWidth=1,t.strokeRect(h-M/2-16,y-2,14,v+4),f(String(c.level),h-M/2-9,y+v/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,y-9,ts[c.team],11)),t.globalAlpha=1}for(const c of e.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=T(c.x,c.y,1.1+c.t*.9);t.globalAlpha=Math.max(0,1-c.t/1.1);const p=c.t<.12?1.4-c.t*3:1;f(Me.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*p)}t.globalAlpha=1}function Ig(){let t=0;const e=b.T,n=(r,o,i,l,s,u)=>{let a=Ao[t];a||(a=new tt(pc),a.anchor.set(.5),a.blendMode="add",xe.lightsCam.addChild(a),Ao[t]=a),t++;const[f,c]=T(r,o,i);a.visible=!0,a.x=f,a.y=c,a.width=a.height=l*2,a.tint=s,a.alpha=u};for(const r of Ns)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(e*9+r.x*3)*Math.sin(e*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&I(r.x+m(-.1,.1),r.y+m(-.1,.1),.9,m(-.2,.2),m(-.2,.2),m(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(b.game){for(const r of b.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(e*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(e*1.5)),rt(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45)}for(const r of b.game.zones)r.once&&!gc(r)&&n(r.x,r.y,0,r.r*ee.HW*1.4,13143295,.35);for(const r of b.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;t<Ao.length;t++)Ao[t].visible=!1}let Pn=null;function Eg(){if(Pn)return Pn;Pn=document.createElement("canvas"),Pn.width=Pn.height=128;const t=Pn.getContext("2d"),e=t.createRadialGradient(64,64,64*.45,64,64,64);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Pn}function Ug(){const e=Math.ceil(b.W/4),n=Math.ceil(b.H/4),r=b.cam;(vn.width!==e||vn.height!==n)&&(Qr.source.resize(e,n,1),vn.width=e,vn.height=n);const o=vn.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,e,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,e,n),o.globalCompositeOperation="destination-out";for(const i of b.visionSrc){const[l,s]=T(i.x,i.y),u=((l-r.x)*r.z+b.W/2)/4,a=((s-r.y)*r.z+b.H/2)/4,f=Yo[i.kind]*ee.HW*Math.SQRT2*r.z/4;u<-f||a<-f/2||u>e+f||a>n+f/2||o.drawImage(Eg(),u-f,a-f/2,f*2,f)}Qr.source.update(),pr.visible=!0,pr.width=b.W,pr.height=b.H}function kg(t){if(!ca("prop_bush"))return;let e=3;const n=()=>(e=e*16807%2147483647)/2147483647;for(const r of t)for(let o=0;o<9;o++){const i=n()*6.28,l=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*l,u=r.y+Math.sin(i)*l;Bs({x:s,y:u,sprite:"prop_bush",tree:!1},!1);const f=li[li.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function yc(){for(const[,t]of Rr){t.spr.destroy(),t.glow.destroy(),t.shadow.destroy();for(const e of t.gear)e.destroy()}Rr.clear();for(const t of bn)t.spr.destroy();bn.length=0}let Mt,dt,Ct,$,J,_t="dragon",hn="blue",L=null,_l=0,gr=0,ji=0,Zi=!1,ar=!1,Hs=!1,qt={},Kt=null,Wo=!1,Sl=0,wl=0,Dg=0,Cl=performance.now(),Al=-9,Ws=!1;const Lg=["buff","aoe_self","heal_aoe","execute"],Gg=["facil","normal","dificil"],Vr=new Map;let Xs=!1;function de(t){if(t==null)return"";if(t=String(t),Xs||js.value==="es"||!window.I18N)return t;const e=Vr.get(t);if(e!==void 0)return e;const n=window.I18N.en;let r=n.exact[t];if(r===void 0){r=t;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Vr.size>5e3&&Vr.clear(),Vr.set(t,r),r}function Ng(){const t=window.I18N&&window.I18N.en;if(t){t.exact=t.exact||{},t.frag=t.frag||[];for(const e in t.heroes||{}){const n=dt[e],r=t.heroes[e];if(n){r.title&&(t.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(t.exact[n.abil[o].name]=r.abil[o][0],t.exact[n.abil[o].desc]=r.abil[o][1])}}for(const e in t.items||{}){const n=Mt.ITEMS.find(r=>r.id===e);n&&(t.exact[n.name]=t.items[e][0],t.exact[n.desc]=t.items[e][1])}for(const e in t.roles||{})t.exact[e]=t.roles[e],t.exact[e.toUpperCase()]=t.roles[e].toUpperCase();for(const e in t.runes||{}){const n=Mt.RUNES[e];n&&(t.exact[n.name]=t.runes[e][0],t.exact[n.desc]=t.runes[e][1])}for(const e in t.bot||{})t.exact[e]=t.bot[e]}}function xc(t,e,n,r=1,o=1){if(e===void 0||n===void 0){$.play(t,r,0,.03,o);return}const[i,l]=T(e,n),s=b.cam,u=(i-s.x)*s.z,a=(l-s.y)*s.z;let f=Math.hypot(u/b.W,a/b.H);const c=b.game&&b.game.player;if(c&&!c.dead){const[h,d]=T(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/b.W,(l-d)*s.z/b.H))}$.play(t,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,u/(b.W*.6))),.03,o)}function ma(t,e,n,r){if(!$.babble)return;const o=Math.max(0,Ct.indexOf(t))*7+3;if(n===void 0||r===void 0){$.babble(o,e,.5,0);return}const[i,l]=T(n,r),s=b.cam,u=(i-s.x)*s.z,a=(l-s.y)*s.z,f=Math.hypot(u/b.W,a/b.H),c=.5*Math.max(0,1-f*1.1);c>.05&&$.babble(o,e,c,Math.max(-1,Math.min(1,u/(b.W*.6))))}let Tl=0;function $n(t){try{window.VOICE&&window.VOICE.play(t)}catch{}}function Sn(t,e="#ffe7b0",n=1.5){b.game&&b.game.msg(t,e,n)}async function Bg(t){Mt=window.SIM,dt=Mt.HEROES,Ct=Mt.HERO_KEYS,$=window.AUDIO,J=new window.Net,Lc();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(js.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");Gg.includes(r)&&(yt.value={...yt.value,difficulty:r})}catch{}try{b.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}Ng(),Me.babble=ma,Me.sfx=xc,Me.say=$n,Me.play=(r,o)=>$.play(r,o??1),Me.t=de,Me.banner=(r,o,i,l,s)=>{const u=vr.value.slice(-3);vr.value=[...u,{id:++Dg,title:de(r),color:o,killerKey:i,victimKey:l,big:s}]},Fc(un),bc(),yt.value={...yt.value,volMaster:$.volume?$.volume("m"):1,volMusic:$.volume?$.volume("mu"):1,volSfx:$.volume?$.volume("s"):1,soundStyle:$.style?$.style():"epic",shadows:b.shadowsOn},await om(r=>Dc.value=r),await yg(t),vg();try{const r=new Mt.Game(window.MAP,{humans:[]});kg(r._makeBushes())}catch(r){console.warn(r)}Zg(),Qg();const[e,n]=T(ee.N/2,ee.N/2);b.cam.x=e,b.cam.y=n,vt.value="menu",J.init().then(r=>{Dl.value=!!r}).catch(()=>{}),J.onChange=()=>eo(),f1(),requestAnimationFrame(_c)}function vc(t){const e=Mt.PASSIVES&&Mt.PASSIVES[t];return e?{name:de(e[0]),desc:de(e[1])}:{name:"",desc:""}}function bc(){Ic.value=Ct.map(t=>{const e=dt[t];return{key:t,name:e.name,title:de(e.title),role:de(e.role),ranged:!!e.ranged,hp:e.hp,ad:e.ad,speed:e.speed,range:e.range,as:e.as,abil:["Q","W","E","R"].map(n=>({key:n,name:de(e.abil[n].name),desc:de(e.abil[n].desc),cd:e.abil[n].cd,type:e.abil[n].type,fx:e.abil[n].fx})),passive:vc(t)}}),Ec.value=Mt.ITEMS.map(t=>({id:t.id,name:de(t.name),desc:de(t.desc),cost:t.cost,line:t.line||null,tier:t.tier||0,stack:t.stack||0}))}let Pl="";function pa(t){const e=String(t&&(t.stack||t.message)||t).split(`
`).slice(0,3).join(" | ");if(e===Pl)return;Pl=e;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+e}const Mc="v8.0";{const t=document.createElement("div");t.id="build-tag",t.textContent=Mc,t.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(t)}window.addEventListener("error",t=>pa(t.error||t.message));window.addEventListener("unhandledrejection",t=>pa(t.reason));function _c(t){const e=Math.min(.05,(t-Cl)/1e3);Cl=t,b.T=t/1e3;try{const n=vt.value;n==="pick"&&L&&(e1(e),yr()),n==="lobby"&&n1(e),n==="play"&&b.game?Wg(e):Hg(e),b.marker&&(b.marker.t+=e,b.marker.t>.3&&(b.marker=null)),Bc(e),Tg(e),(wl-=e)<=0&&b.game&&(wl=.1,u1()),(zl-=e)<=0&&(zl=.5,$g()),n!=="play"&&(Rl-=e)<=0&&(Rl=1,J.available&&(kc.value=J.openGames()))}catch(n){console.error(n),pa(n)}requestAnimationFrame(_c)}let Rl=0,zl=0;function $g(){if(!$.setAmbient)return;const t=tn(b.W/2,b.H/2),e=ee.N,n=window.MAP,r=Math.abs(t.x+t.y-e)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[u,a,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(t.x-u,t.y-a)-f)/4)*.7);const i=Math.min(Math.hypot(t.x-n.bases.red[0],t.y-n.bases.red[1]),Math.hypot(t.x-n.bases.blue[0],t.y-n.bases.blue[1])),l=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-l)*.9;$.setAmbient(o,s,l)}function Hg(t){const e=b.T*.05,n=ee.N/2+Math.cos(e)*12,r=ee.N/2+Math.sin(e*1.3)*12,[o,i]=T(n,r);b.cam.x+=(o-b.cam.x)*Math.min(1,t*.5),b.cam.y+=(i-b.cam.y)*Math.min(1,t*.5),b.cam.z=b.cam.tz=1.25}function Wg(t){const e=b.game;if(i1(t),b.mode==="guest")e.guestTick(t),J.hostState&&J.hostState.st==="end"&&!e.winner&&(e.winner="blue");else{if(b.mode==="host")for(const[o,i]of J.pullCommands())e.input(o,i);if(!(qr.value&&b.mode==="solo")&&!Pc()&&e.update(t),b.mode==="host"&&(gr-=t,gr<=0)){gr=1/12;const o=e.heroes.filter(i=>i.human);J.publish(e.winner?"end":"play",e.snapshot(3300,o),o.map(i=>[i.human,i.team,i.heroKey]))}}const n=e.player;if(!n)return;for(const o of e.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&Ag(o);Xg(t),b.mouse.wx=tn().x,b.mouse.wy=tn().y,b.mouse.rd&&!e.winner&&!b.aim&&b.mouse.inWorld&&(ji-=t,ji<=0&&(ji=.12,wc(!1))),Nc(),Kg(t),!Hs&&e.t>7.5&&(Hs=!0,$n("minions"));const r=e.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;$.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),Vg(t),b.hoverUnit=!b.mouse.md&&!b.aim&&b.mouse.inWorld?Sc():null,Jg(),Ws=!n.dead&&e.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Ws&&b.T-Al>3&&(Al=b.T,$.play("deny",.5)),(Sl-=t)<=0&&(Sl=1/15,Oc())}function Xg(t){const e=b.game.player,n=b.cam,r=b.mouse;if(e&&!e.dead&&!r.md&&!r.mmDrag&&(b.camFollow||qt[" "])){const[o,i]=T(e.x,e.y);n.x+=(o-n.x)*Math.min(1,t*8),n.y+=(i-30-n.y)*Math.min(1,t*8)}else if(!r.md&&!r.mmDrag){const i=900*t/n.z;qt.ArrowLeft&&(n.x-=i),qt.ArrowRight&&(n.x+=i),qt.ArrowUp&&(n.y-=i),qt.ArrowDown&&(n.y+=i),r.inWorld&&(r.x<18&&(n.x-=i),r.x>b.W-18&&(n.x+=i),r.y<18&&(n.y-=i),r.y>b.H-18&&(n.y+=i))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-b.W/2)/n.z+n.x,i=(r.y-b.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,t*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),e&&!e.dead&&(b.camFollow||qt[" "])||(n.x=o-(r.x-b.W/2)/n.z,n.y=i-(r.y-b.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-t),n.x=Math.max(0,Math.min(2*ee.N*ee.HW,n.x)),n.y=Math.max(0,Math.min(2*ee.N*ee.HH,n.y))}function Ol(t,e){const n=window.MAP.hg;return!!(n&&n[Math.floor(e)]&&n[Math.floor(e)][Math.floor(t)])}function Vg(t){const e=b.game,n=e.player;b.visionSrc=e.units.filter(o=>!o.dead&&o.team===n.team&&Yo[o.kind]),e.bushes||(e.bushes=e._makeBushes());for(const o of e.units)o._bush=o.dead?-1:e.bushOf(o);const r=new Set;for(const o of e.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=Ol(o.x,o.y);let l=0;for(const s of b.visionSrc){const u=Yo[s.kind];if(Math.abs(o.x-s.x)>=u||Math.abs(o.y-s.y)>=u)continue;const a=Math.hypot(o.x-s.x,o.y-s.y);if(a<u&&(!i||Ol(s.x,s.y)||a<2.2)&&(l=Math.max(l,Math.min(1,(u-a)/1.4)),l>=1))break}l>0&&e.bushHidden(o,n.team)&&(l=0),o._va=(o._va||0)+(l-(o._va||0))*Math.min(1,t*5),o._va>.04&&r.add(o.id)}b.visible=r}let Qi=null;function Yg(t){try{const e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const n=e.getContext("2d");return n.drawImage(t,0,0),{w:e.width,h:e.height,d:n.getImageData(0,0,e.width,e.height).data}}catch{return null}}function qg(t,e){Qi===null&&(Qi=[gn.water_mask,gn.water_calm].filter(i=>i&&i.naturalWidth).map(Yg).filter(Boolean));const[n,r]=T(t,e);for(const i of Qi){const l=Math.floor(n/4),s=Math.floor(r/4);if(l>=0&&s>=0&&l<i.w&&s<i.h&&i.d[(s*i.w+l)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(e)]&&window.MAP.grid[Math.floor(e)][Math.floor(t)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function Kg(t){const e=b.game,n=e.player,r=b.cam;for(const o of e.units){if(o.dead||!o.moving||o.speed===0||rt(o)||o.dash)continue;const[i,l]=T(o.x,o.y);if(Math.abs(i-r.x)>b.W/r.z||Math.abs(l-r.y)>b.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-t*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=qg(o.x,o.y);if(s==="water"){z({type:"ring",x:o.x+m(-.1,.1),y:o.y+m(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let u=0;u<3;u++)I(o.x,o.y,.1,m(-.8,.8),m(-.8,.8),m(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&I(o.x,o.y,.05,m(-.3,.3),m(-.3,.3),m(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?$.play("step_"+s,.32,0,80):Math.random()<.5&&xc("step_"+s,o.x,o.y,.12))}}function ft(t){b.mode==="guest"?J.send(t):b.game.input(b.localId,t)}function Sc(){const t=b.game,e=t.player,n=b.cam,r=window.META;let o=null,i=1e9;const l=tn();for(const s of t.units){if(s.dead||rt(s)||s.team!==e.team&&s._va!==void 0&&s._va<.4||s.team===e.team&&!(s.kind==="minion"&&t.deniable(s,e))||b.mode!=="guest"&&s.team!==e.team&&!t.targetable(s,e))continue;const u=r[s.sprite],[a,f]=T(s.x,s.y),c=(a-n.x)*n.z+b.W/2,h=(f-n.y)*n.z+b.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),p=s.kind==="tower"||s.kind==="nexus"||s.boss,g=(u?u.ay*.9:50)*d,y=(p?40:s.kind==="minion"?20:26)*d;let x=1e9;if(Math.abs(b.mouse.x-c)<y&&b.mouse.y<h+12*d&&b.mouse.y>h-g)x=Math.abs(b.mouse.x-c)/y+Math.abs(b.mouse.y-(h-g/2))/g;else{const M=Math.hypot(l.x-s.x,l.y-s.y);M<s.r*(s.scale||1)+.6&&(x=1.5+M)}x>1e8||(s.kind==="hero"&&(x-=.4),x<i&&(i=x,o=s))}return o}function jg(){const t=b.cam,e=window.META;let n=null,r=1e9;for(const o of b.game.heroes){if(o.dead||rt(o))continue;const[i,l]=T(o.x,o.y),s=(i-t.x)*t.z+b.W/2,u=(l-t.y)*t.z+b.H/2,a=(e[o.sprite]?e[o.sprite].ay*.9:50)*t.z,f=26*t.z;if(Math.abs(b.mouse.x-s)<f&&b.mouse.y<u+10*t.z&&b.mouse.y>u-a){const c=Math.abs(b.mouse.x-s)+Math.abs(b.mouse.y-(u-a/2));c<r&&(r=c,n=o)}}return n}function wc(t){const e=tn();if(!t&&Zi)return;const n=t?Sc():null;if(t&&(Kt=n&&n.kind==="hero"&&n!==b.game.player&&n.team===b.game.player.team?n.id:null),n){Zi=!0,ft(["a",n.id]),$.play("click",.3),b.marker={x:n.x,y:n.y,t:0,atk:!0};return}Zi=!1,ft(["m",e.x,e.y]),t&&(b.marker={x:e.x,y:e.y,t:0},$.play("move",.25),b.T-Tl>7&&Math.random()<.5&&(Tl=b.T,ma(b.game.player.heroKey,"ok")))}function Cc(t){const e=b.game.player;if(e.ranks&&!e.ranks[t]){Sn(e.points>0&&b.game.canRankUp(e,t)?"Primero aprendela: clic en el + (o Shift + "+t+")":t==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),$.play("deny",.6);return}if((e.cds[t]||0)>.05){Sn("En enfriamiento","#bbbbbb",.8),$.play("deny",.5);return}const n=dt[e.heroKey].abil[t],r=tn();if(Kt=null,Lg.includes(n.type)){ft(["c",t,r.x,r.y]),b.aim=null;return}if(b.aim&&b.aim.k===t){Ac();return}b.aim={k:t},$.play("aim",.3)}function Ac(){if(!b.aim)return;const t=tn();ft(["c",b.aim.k,t.x,t.y]),b.aim=null}function Vs(t){const e=b.game&&b.game.player;e&&(b.game.canRankUp(e,t)?(ft(["l",t]),$.play("levelup",.5)):(Sn(t==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),$.play("deny",.4)))}function Fl(){const t=b.game&&b.game.player;if(!t)return;const[e,n]=T(t.x,t.y);b.cam.x=e,b.cam.y=n-30}function Ys(){b.cam.tz=to,b.cam.zoomMsgT=1.2}function Zg(){const t=da();window.addEventListener("contextmenu",e=>{const n=e.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||e.preventDefault()}),window.addEventListener("mousemove",e=>{b.mouse.md&&(b.cam.x-=(e.clientX-b.mouse.x)/b.cam.z,b.cam.y-=(e.clientY-b.mouse.y)/b.cam.z),b.mouse.x=e.clientX,b.mouse.y=e.clientY,b.mouse.inWorld=e.target===t}),t.addEventListener("wheel",e=>{vt.value==="play"&&(b.cam.tz=Math.max(.75,Math.min(3,b.cam.tz*(e.deltaY>0?.9:1.1))),b.cam.zoomMsgT=1.2),e.preventDefault()},{passive:!1}),t.addEventListener("auxclick",e=>{e.preventDefault(),e.button===1&&e.detail===2&&Ys()}),t.addEventListener("mousedown",e=>{$.init(),$.startMusic(),window.VOICE&&window.VOICE.init(),b.mouse.x=e.clientX,b.mouse.y=e.clientY;const n=b.game;if(!(vt.value!=="play"||!n||!n.player||n.winner)){if(e.button===1){b.mouse.md=!0,e.preventDefault();return}if(!qr.value){if(e.button===0&&e.altKey){un.ping(e.ctrlKey?"missing":"danger");return}if(e.button===0){if(b.aim){Ac();return}if(b.amove){b.amove=!1;const o=tn();ft(["am",o.x,o.y]),b.marker={x:o.x,y:o.y,t:0,atk:!0},$.play("click",.3);return}const r=jg();(!r||r.team===n.player.team)&&(Kt=r&&r!==n.player?r.id:null)}e.button===2&&(b.aim&&(b.aim=null),b.amove=!1,b.mouse.rd=!0,wc(!0))}}}),window.addEventListener("mouseup",e=>{e.button===2&&(b.mouse.rd=!1),e.button===1&&(b.mouse.md=!1),e.button===0&&(b.mouse.mmDrag=!1)}),window.addEventListener("keydown",e=>{const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;$.init();const r=b.game,o=e.key.toUpperCase();if(vt.value==="play"&&r&&r.player&&e.key==="Enter"){Ll.value=e.shiftKey?"all":"team",e.preventDefault();return}if(o==="M"){$.toggleMute();return}if(o==="N"){$.toggleMusic();return}if(vt.value!=="play"||!r||!r.player)return;if(Pc()){(e.key===" "||e.key==="Escape"||e.key==="Enter")&&(zc(),e.preventDefault());return}const i=r.player;if(e.key==="Escape"){b.aim||ir.value?(b.aim=null,ir.value=!1):qr.value=!qr.value;return}if(e.key==="Tab"){Yr.value=!0,e.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(e.shiftKey||e.ctrlKey)){Vs(o),e.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(ar=!ar,$.play("aim",.4)):(Sn("No tenés puntos de habilidad","#bbbbbb",1),$.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&ar){ar=!1,Vs(o);return}if("QWER".includes(o)&&o.length===1){Cc(o);return}if(e.key==="F1"||e.key==="1"){Fl(),e.preventDefault();return}if(e.key.startsWith("Arrow")){qt[e.key]=!0,e.preventDefault();return}if(o==="P"){ir.value=!ir.value,$.play("click",.4);return}if(o==="H"){un.useItem((i.items||[]).indexOf("pocion"));return}if(o==="K"){$.setStyle&&(un.setSoundStyle($.style()==="epic"?"pixel":"epic"),Sn("Sonido: "+($.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){b.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){un.spell(o);return}if(o==="G"&&o.length===1){un.ping(e.shiftKey?"omw":"danger");return}if(o==="S"&&ft(["s"]),o==="B"){un.recall();return}o==="Y"&&(b.camFollow=!b.camFollow),o==="Z"&&Ys(),e.key===" "&&(qt[" "]=!0,Fl(),e.preventDefault())}),window.addEventListener("keyup",e=>{e.key==="Tab"&&(Yr.value=!1,e.preventDefault()),delete qt[e.key]}),window.addEventListener("blur",()=>{Yr.value=!1,qt={},b.mouse.md=!1,b.mouse.rd=!1})}const Mn={};function Qg(){const t=(r,o,i,l)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const u=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(u.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,u.fillRect(d*2,c*2,2,2))})),l){for(let h=0;h<7;h++)u.fillStyle="#0a0610",u.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)u.fillStyle=h<5?"#e8eef8":"#ffd24a",u.fillRect(18+h*2,26-h*2,2,2);u.fillStyle="#ffd24a",u.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};Mn.normal=t("#ffd24a","#fff2b0","#8a5a10",!1),Mn.enemy=t("#ff4a3a","#ffb0a0","#7a1010",!0),Mn.ally=t("#ffffff","#ffffff","#8a8a9a",!1);const e=document.createElement("canvas");e.width=32,e.height=32;const n=e.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);Mn.aim=`url(${e.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=Mn.normal}let Il="";function Jg(){const t=b.game&&b.game.player,e=b.hoverUnit,n=b.aim||b.amove?"aim":e&&t?e.team!==t.team?"enemy":"ally":"normal";n!==Il&&(Il=n,da().style.cursor=Mn[n],document.documentElement.style.cursor=Mn.normal)}function ga(){const t=b.mode==="solo"?"local":J.myPeer||"host";return L&&L.h&&L.h[t]}function qs(t){const e=t?[{id:J.myPeer||"host",team:hn},...J.guests().map(l=>({id:l.id,team:l.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const l of e)r[l.team]<5&&(n[l.id]=[l.team,r[l.team]++,0]);const o=[];let i=0;for(const l of["blue","red"])for(let s=r[l];s<5;s++)o.push({team:l,slot:s,at:2+Math.random()*24,q:i++});o.sort((l,s)=>l.q%2-s.q%2||l.q-s.q),o.forEach((l,s)=>l.q=s),L={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:_t||Ct[0],locked:!1,prep:-1,online:!!t},t&&(b.mode="host"),vt.value="pick",$.setMode("menu"),$.play("announce",.6),yr()}function ui(t,e){if(!L||!t)return;const n=e===void 0;if(n&&b.mode==="guest"){L.locked||(J.send(["lock",t]),_t=t,L.pending=t,$.play("levelup",.7));return}const r=n?b.mode==="solo"?"local":J.myPeer||"host":e,o=L.h[r];if(!o||o[2])return;const[i,l]=o,s=u=>L.blue.includes(u)||L.red.includes(u);if(s(t))if(n){$.play("deny",.6);return}else{const u=Ct.filter(a=>!s(a));t=u[Math.random()*u.length|0]}L[i][l]=t,o[2]=1,n&&(L.locked=!0,_t=t,L.view=t,$.play("levelup",.7),ma(t,"select"))}function Ji(t){const e=L[t],n=[...L.blue,...L.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(l=>!e.some(s=>s&&dt[s].role===l));let o=Ct.filter(l=>!n.includes(l));const i=o.filter(l=>r.includes(dt[l].role));return i.length&&(o=i),o[Math.random()*o.length|0]||Ct[Math.random()*Ct.length|0]}function e1(t){if(b.mode==="guest")return t1();if(L.online){for(const[r,o]of J.pullCommands())o[0]==="lock"&&ui(o[1],r);(_l-=t)<=0&&(_l=.25,J.publishDraft({t:Math.round(L.t*10)/10,p:Math.round(L.prep*10)/10,b:L.blue,r:L.red,h:L.h}))}if(L.prep>=0){L.prep-=t,L.prep<=0&&(L.online?r1():ya());return}if(!L.online){if(L.locked){L.bt=(L.bt||0)+t;for(const r of L.order)!r.done&&L.bt>=.3+r.q*.28&&(r.done=!0,L[r.team][r.slot]=Ji(r.team),$.play("click",.35))}L.locked&&L.order.every(r=>r.done)&&(L.prep=3,$.play("announce",.7));return}L.t-=t;const e=30-L.t;for(const r of L.order)!r.done&&e>=r.at&&(r.done=!0,L[r.team][r.slot]=Ji(r.team),$.play("click",.35));if(L.t<=0){for(const r in L.h)if(!L.h[r][2]){const o=L.h[r][0],i=Ct.filter(l=>!L.blue.includes(l)&&!L.red.includes(l));ui(i[Math.random()*i.length|0],r),L.h[r]===ga()&&(L.locked=!0,_t=L[o][L.h[r][1]])}}if(Object.values(L.h).every(r=>r[2])&&L.order.every(r=>r.done))L.prep=5,$.play("announce",.7);else if(L.t<=0)for(const r of L.order)r.done||(r.done=!0,L[r.team][r.slot]=Ji(r.team))}function t1(){const t=J.hostState;if(t&&t.st==="play"&&t.S){L=null,Yn.value=null,Tc();return}const e=t&&t.D;if(!e)return;const n=L.blue.join()+L.red.join();L.t=e.t,L.prep=e.p,L.blue=e.b,L.red=e.r,L.h=e.h,n!==L.blue.join()+L.red.join()&&$.play("click",.35);const r=ga();r&&r[2]?(L.locked=!0,_t=L[r[0]][r[1]],L.view=_t||L.view):L.pending&&performance.now()-(L.sentAt||0)>1e3&&(L.sentAt=performance.now(),J.send(["lock",L.pending]))}function yr(){if(!L){Yn.value=null;return}const t=ga(),e=b.mode==="solo"?"local":J.myPeer||"host";Yn.value={online:!!L.online,t:L.t,prep:L.prep,blue:[...L.blue],red:[...L.red],mySlot:t?[t[0],t[1]]:null,humans:Object.entries(L.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===e})),locked:!!L.locked,pending:L.pending||null,view:L.view}}function n1(t){J.role==="guest"&&J.hostState&&J.hostState.st==="pick"&&J.hostState.D&&(b.mode="guest",b.localId=J.myPeer,L={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:_t||Ct[0],locked:!1,prep:-1,online:!0},vt.value="pick",$.play("announce",.6)),J.role==="guest"&&J.hostState&&J.hostState.st==="play"&&J.hostState.S&&Tc(),J.role==="host"&&(gr-=t,gr<=0&&(gr=1.5,J.setChoice(_t,hn))),(El-=t)<=0&&(El=.3,eo())}let El=0;function eo(){const t=[];if(J.role==="host"){t.push({name:de("Vos (anfitrión)"),team:hn,me:!0});for(const e of J.guests())t.push({name:de("Invitado"),team:e.team,me:!1})}else J.role==="guest"&&(t.push({name:de("Vos"),team:hn,me:!0}),J.hostState&&t.push({name:de("Anfitrión"),team:J.hostState.team,me:!1}));gt.value={...gt.value,role:J.role,code:J.code,myTeam:hn,players:t,hostFound:!!J.hostState}}function ya(){b.mode="solo",b.localId="local";const t=L?{blue:L.blue.slice(1).filter(Boolean),red:L.red.filter(Boolean)}:null;b.game=new Mt.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:_t}],localId:"local",picks:t,difficulty:yt.value.difficulty,aram:Wo}),Wo&&(Wo=!1,b.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),L=null,Yn.value=null,va(),b.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function r1(){b.mode="host",b.localId=J.myPeer||"host";const t=[],e={blue:[],red:[]};if(L){for(const n in L.h){const[r,o]=L.h[n];t.push({id:n,team:r,hero:L[r][o]||Ct[0]})}for(const n of["blue","red"])L[n].forEach((r,o)=>{r&&!Object.values(L.h).some(i=>i[0]===n&&i[1]===o)&&e[n].push(r)})}L=null,Yn.value=null,b.game=new Mt.Game(window.MAP,{humans:t,localId:b.localId,picks:e,difficulty:yt.value.difficulty}),J.lastSeq={};for(const n of J.guests())J.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;J.onGuests=(n,r)=>{for(const o of r.left||[]){const i=b.game&&b.game.slots[o.peer];i&&!i.bot&&(i.bot=!0,b.game.msg("Un jugador salió: lo reemplaza un bot","#ffb070"))}},va(),b.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function Tc(){b.mode="guest",b.localId=J.myPeer,b.game=new Mt.Game(window.MAP,{humans:[],localId:b.localId}),b.game.units=[],b.game.heroes=[],b.game.player=null,J.onSnapshot=t=>{b.game&&b.mode==="guest"&&b.game.applySnapshot(t,b.localId)},J.hostState&&J.hostState.S&&b.game.applySnapshot(J.hostState.S,b.localId),va()}const an={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let Xo=0,Bt=-1,xr=[],o1=0,fo=!1;function Pc(){return Bt>=0}function Rc(){const t=b.game,e=t.player;im(t.heroes.map(l=>l.sprite||l.heroKey));const n=l=>{const s=dt[l.heroKey]||{};return{key:l.heroKey,name:s.name||l.heroKey,title:s.title||"",role:s.role||"",me:l===e,human:!!l.human}},r=l=>t.heroes.filter(s=>s.team===l).sort((s,u)=>(u===e?1:0)-(s===e?1:0)||(u.human?1:0)-(s.human?1:0)).map(n),o=r("blue"),i=r("red");if(!e||o.length+i.length<2){fo=!0;return}fo=!1,Zs.value={blue:o,red:i,myTeam:e?e.team:"blue",id:++o1},Bt=0,Xo=0,xr=[[.15,()=>$n("blue_team")],...o.map((l,s)=>[an.blue+s*an.step+.05,()=>$.play("reveal",.8)]),[an.red-.35,()=>$n("red_team")],...i.map((l,s)=>[an.red+s*an.step+.05,()=>$.play("reveal",.8)]),[an.vs-.02,()=>{$.play("vsslam",1),$n("versus")}],[an.go,()=>{$.play("warhorn",.9),$n("battle"),$.setMode("battle")}]],$.setMode("menu")}function i1(t){if(fo&&b.game&&Rc(),Bt<0)return;const e=performance.now()/1e3,n=Xo?e-Xo:0;for(Xo=e,Bt+=n>2?.05:n||t;xr.length&&xr[0][0]<=Bt;)xr.shift()[1]();Bt>=an.end&&xa()}function xa(){fo=!1,!(Bt<0)&&(Bt=-1,xr=[],Zs.value=null,$.setMode("battle"))}function zc(){Bt<0||(Bt<an.go&&($.play("warhorn",.7),$n("battle")),xa())}function va(){if($l(),yc(),vt.value="play",vr.value=[],$.setMode("battle"),Hs=!1,Rc(),Kt=null,b.aim=null,b.amove=!1,ar=!1,b.cam.z=b.cam.tz=to,b.game.player){const[t,e]=T(b.game.player.x,b.game.player.y);b.cam.x=t,b.cam.y=e-30}}async function Ul(){Bt=-1,xr=[],fo=!1,Zs.value=null,qr.value=!1,ir.value=!1,Yr.value=!1,b.aim=null,L=null,Yn.value=null,b.mode!=="solo"&&await J.leave(),b.game=null,b.mode="solo",yc(),$l(),Nl.value=null,Gl.value=null,vr.value=[],vt.value="menu",$.setMode("menu"),da().style.cursor=Mn.normal}function s1(t){const e=dt[t.heroKey],n=(t.items||[]).map(o=>Mt.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,l)=>i+(l[o]||0),0);return[{label:de("Ataque"),value:String(Math.round(e.ad*(1+.07*(t.level-1))+r("ad")))},{label:de("Vel. de ataque"),value:(e.as*(1+.02*(t.level-1)+r("asp"))).toFixed(2)},{label:de("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:de("Reducción de daño"),value:Math.round(Math.min(.6,(e.armor||0)+r("armor"))*100)+"%"},{label:de("Velocidad"),value:(e.speed+r("ms")).toFixed(2)},{label:de("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:de("Alcance"),value:String(e.range)}]}function es(t){const e=b.game,n=dt[t.heroKey],r=e.player,o=t===r,i=[];for(const u of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])t.status&&t.status[u]&&i.push(u);t.aegis&&(b.mode==="guest"||t.aegis>e.t)&&i.push("aegis"),t.shield>0&&i.push("shield");const l=(t.items||[]).map((u,a)=>{const f=Mt.ITEM[u];return{id:u,slot:a,name:de(f.name),desc:de(f.desc),tier:f.tier||0,line:f.line||null,count:f.stack?t.pots||0:1}}),s=o||t.team===r.team||b.mode!=="guest";return{id:t.id,heroKey:t.heroKey,name:n.name,title:de(n.title),role:de(n.role),team:t.team,level:t.level,hp:Math.max(0,t.hp),maxHp:t.maxHp,shield:t.shield||0,mana:Math.max(0,t.mana||0),maxMana:t.maxMana||0,passive:vc(t.heroKey),xpFrac:b.mode==="guest"?t.xpFrac||0:t.level>=12?1:t.xp/e.xpNeed(t.level),gold:t.gold!==void 0&&s?Math.floor(t.gold):null,kills:t.kills,deaths:t.deaths,assists:t.assists,cs:t.cs,points:t.points||0,dead:!!t.dead,respawn:Math.ceil(t.respawn||0),recall:t.recall?t.recall.t:null,abil:["Q","W","E","R"].map(u=>{const a=n.abil[u],f=t.ranks?t.ranks[u]:1;return{key:u,name:de(a.name),desc:de(a.desc),cd:t.cds&&t.cds[u]||0,cdMax:a.cd,rank:f,cost:e.manaCost?e.manaCost(t,u):0,canRankUp:o&&!!(t.ranks&&e.canRankUp(t,u)),dmg:a.dmg?Math.round(a.dmg*e.abilMul(t,u)):null,type:a.type,fx:a.fx}}),items:l,spells:[{key:"D",name:de("Destello"),cd:t.spCd&&t.spCd.D||0,cdMax:90},{key:"F",name:de("Fantasma"),cd:t.spCd&&t.spCd.F||0,cdMax:70}],stats:s1(t),human:!!t.human,isMe:o,status:i}}function Oc(){const t=b.game,e=t.player;if(!e)return;const n=Kt?Ve(Kt):null;n&&(n.kind!=="hero"||rt(n))&&(Kt=null);const r=t.msgs.filter(i=>!i.to||i.to===b.localId).slice(-3).map(i=>({id:i.id,text:de(i.txt),color:i.col,t:i.t,dur:i.dur})),o=(t.chat||[]).filter(i=>i.scope==="all"||i.team===e.team).slice(-8).map(i=>{Xs=i.human;const l=de(i.txt);return Xs=!1,{id:i.id,scope:i.scope,team:i.team,heroKey:i.hero,heroName:dt[i.hero]?dt[i.hero].name:"?",human:!!i.human,text:l,age:t.t-i.t}});Nl.value={me:es(e),inspected:Kt?es(Ve(Kt)):null,allies:t.heroes.filter(i=>i.team===e.team&&i!==e).map(es),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(i=>({id:i.id,killerKey:i.killerKey||null,killerName:i.killerKey?dt[i.killerKey].name:de(i.killerName),killerTeam:i.killerTeam,victimKey:i.victimKey,victimTeam:i.victimTeam})),msgs:r,chat:o,buffs:{serpent:t.buffs[e.team].serpent||0,stone:t.buffs[e.team].stone||0},towerWarn:Ws,inShop:t.inShop(e),levelMode:ar,aim:b.aim?b.aim.k:null,amove:b.amove,winner:t.winner||null,myTeam:e.team,zoomPct:Math.round(b.cam.tz/to*100),zoomMsg:b.cam.zoomMsgT,camFollow:b.camFollow,scoreboard:t.heroes.map(i=>({id:i.id,heroKey:i.heroKey,name:dt[i.heroKey].name,team:i.team,level:i.level,kills:i.kills,deaths:i.deaths,assists:i.assists,cs:i.cs,gold:i.gold!==void 0&&(i.team===e.team||b.mode!=="guest")?Math.floor(i.gold):null,items:i.items||[],human:!!i.human,isMe:i===e,dead:!!i.dead,respawn:Math.ceil(i.respawn||0)})),mode:b.mode,netLost:!!J.lost,deathRecap:e.dead?a1(e):Ks=null}}let Ks=null,kl=null;function a1(t){return Ks!==t&&(Ks=t,kl=l1(t)),kl}function l1(t){const e=(t.dmgLog||[]).filter(r=>b.game.t-r.t<15);if(!e.length)return null;const n={};for(const r of e){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&dt[r.h]?dt[r.h].name:de(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function u1(){const t=b.game,e=t.player;if(!e)return;const{N:n,HW:r,HH:o}=ee,i=2*n*r,l=2*n*o,s=(h,d)=>{const[p,g]=T(h,d);return{x:p/i,y:g/l}},u=[];for(const h of t.units){if(h.dead||rt(h))continue;const d=s(h.x,h.y);u.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===e,human:!!h.human})}const a=b.cam,f=b.W/a.z,c=b.H/a.z;Gl.value={units:u,camps:t.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(a.x-f/2)/i,y0:(a.y-c/2)/l,x1:(a.x+f/2)/i,y1:(a.y+c/2)/l},vision:b.visionSrc.map(h=>({...s(h.x,h.y),r:Yo[h.kind]*r*Math.SQRT2/i})),pings:(t.pings||[]).filter(h=>h.team===e.team&&t.t-h.t<3).map(h=>({...s(h.x,h.y),t:t.t-h.t,kind:h.kind}))}}const un={skipIntro(){zc()},playVsBots(){$.init(),$.startMusic(),qs(!1)},playAram(){$.init(),$.startMusic(),L=null,_t=Ct[Math.random()*Ct.length|0],Wo=!0,ya()},async hostOnline(){gt.value={...gt.value,msg:de("Creando sala...")};try{await J.host(_t,hn),vt.value="lobby",gt.value={...gt.value,msg:""},eo()}catch{gt.value={...gt.value,msg:de("No se pudo crear la sala")}}},async joinOnline(t){gt.value={...gt.value,msg:de("Entrando...")};try{await J.join(t,_t,hn),vt.value="lobby",gt.value={...gt.value,msg:""},eo()}catch{gt.value={...gt.value,msg:de("No se pudo entrar")}}},setLobbyTeam(t){hn=t,J.setChoice(_t,hn),eo()},startOnlinePick(){qs(!0)},async leaveLobby(){await J.leave(),vt.value="menu"},viewHero(t){L&&!L.locked&&(L.view=t,$.play("aim",.3),yr())},lockHero(t){ui(t),yr()},randomHero(){const t=Ct.filter(e=>!L.blue.includes(e)&&!L.red.includes(e));ui(t[Math.random()*t.length|0]),yr()},backToMenu(){L&&L.online?Ul():(L=null,Yn.value=null,vt.value="menu")},buy(t){const e=b.game&&b.game.player;if(e){if(!b.game.inShop(e)){Sn("Solo podés comprar en tu base (o muerto)","#ffb070",1.6),$.play("deny",.5);return}ft(["i",t]),$.play("buy",.6)}},sell(t){const e=b.game&&b.game.player;if(!(!e||!e.items||!e.items[t])){if(!b.game.inShop(e)){Sn("Solo podés vender en tu base","#ffb070",1.4),$.play("deny",.4);return}ft(["v",t]),$.play("buy",.4)}},useItem(t){const e=b.game&&b.game.player;if(!e||t<0||!e.items||e.items[t]!=="pocion"){$.play("deny",.4);return}ft(["u",t]),$.play("heal",.5)},rankUp(t){Vs(t)},castKey(t){b.game&&b.game.player&&Cc(t)},spell(t){const e=b.game&&b.game.player;if(!e)return;const n=e.spCd&&e.spCd[t]||0;if(n>.05){Sn(de(t==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),$.play("deny",.5);return}const r=tn();ft(["sp",t,r.x,r.y]),$.play(t==="D"?"blink":"wind",.6)},recall(){const t=b.game&&b.game.player;t&&ft(t.recall?["bc"]:["b"])},inspect(t){Kt=t&&b.game&&b.game.player&&t===b.game.player.id?null:t,Oc()},centerOn(t){const e=Ve(t);if(!e)return;const[n,r]=T(e.x,e.y);b.cam.x=n,b.cam.y=r-30,b.camFollow=!1},minimapClick(t,e,n){const{N:r,HW:o,HH:i,OX:l}=ee,s=t*(2*r*o)-l,u=e*(2*r*i),a=(s/o+u/i)/2,f=(u/i-s/o)/2;a<0||f<0||a>r||f>r||(n==="right"?(ft(["m",a,f]),b.marker={x:a,y:f,t:0}):(b.cam.x=t*2*r*o,b.cam.y=e*2*r*i,b.mouse.mmDrag=!0))},minimapDrag(t,e){const{N:n,HW:r,HH:o}=ee;b.cam.x=Math.max(0,Math.min(1,t))*2*n*r,b.cam.y=Math.max(0,Math.min(1,e))*2*n*o},ping(t,e,n){if(!b.game||!b.game.player)return;let r,o;if(e!==void 0&&n!==void 0){const{N:i,HW:l,HH:s,OX:u}=ee,a=e*(2*i*l)-u,f=n*(2*i*s);r=(a/l+f/s)/2,o=(f/s-a/l)/2}else{const i=tn();r=i.x,o=i.y}ft(["pg",t,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(t,e){const n=e.trim();n&&b.game&&ft(["t",t,n]),Ll.value=null},bannerDone(t){vr.value=vr.value.filter(e=>e.id!==t)},quitMatch(){Ul()},setVolume(t,e){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};$.setVolume&&$.setVolume(n[t],e),yt.value={...yt.value,[t]:e}},setSoundStyle(t){$.setStyle&&$.setStyle(t),yt.value={...yt.value,soundStyle:t}},setShadows(t){b.shadowsOn=t;try{localStorage.setItem("moba_shadows",t?"1":"0")}catch{}yt.value={...yt.value,shadows:t}},setCamFollow(t){b.camFollow=t},resetZoom(){Ys()},setLang(t){js.value=t,Vr.clear();try{localStorage.setItem("moba_lang",t)}catch{}bc()},setDifficulty(t){yt.value={...yt.value,difficulty:t};try{localStorage.setItem("moba_diff",t)}catch{}},uiSound(t){$.init();const e={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=e[t]||e.click;$.play(n[0],n[1])},t:t=>de(t)};function f1(){const t=new URLSearchParams(location.search);window.__g=()=>({S:b,draft:L,st:Uc,act:un,net:J});const e=t.get("sala");if(e){const o=i=>{Dl.value?un.joinOnline(e.toLowerCase()):i>0&&setTimeout(()=>o(i-1),300)};o(20)}const n=t.get("auto");if(!n)return;if(n==="pick"){qs(!1),t.get("view")&&(L.view=t.get("view")),yr();return}if(n==="menu")return;_t=n,ya(),t.get("intro")||xa(),t.get("allbots")&&(b.game.player.bot=!0);const r=+(t.get("ff")||0);for(let o=0;o<r*30;o++)b.game.update(1/30),b.game.fx.forEach(i=>i.done=!0);if(t.get("follow")&&(b.camFollow=!0),t.get("shop")&&(ir.value=!0),t.get("tab")&&(Yr.value=!0),t.get("cam")){const[o,i]=t.get("cam").split(",").map(Number),[l,s]=T(o,i);b.cam.x=l,b.cam.y=s}t.get("mx")&&(b.mouse.x=+t.get("mx"),b.mouse.y=+t.get("my"))}const g1=Object.freeze(Object.defineProperty({__proto__:null,BUILD:Mc,startClient:Bg},Symbol.toStringTag,{value:"Module"}));export{N0 as $,hf as A,Bi as B,Ye as C,wn as D,Xe as E,ye as F,ge as G,tm as H,nm as I,ol as J,Ii as K,sl as L,Be as M,J0 as N,st as O,Jt as P,Du as Q,oi as R,Fd as S,ae as T,bs as U,df as V,rm as W,$d as X,ce as Y,Ht as Z,aa as _,bo as a,p1 as a0,q0 as a1,m1 as a2,Dn as a3,Pr as a4,Nu as a5,b0 as a6,_0 as a7,g1 as a8,zr as b,la as c,uf as d,Cn as e,ci as f,wt as g,sf as h,ua as i,md as j,jn as k,me as l,M0 as m,Wa as n,ri as o,Uu as p,Rt as q,U0 as r,nl as s,tt as t,Nt as u,Sd as v,pn as w,Ed as x,Ut as y,Dd as z};
