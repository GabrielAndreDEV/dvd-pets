var It=Object.defineProperty;var ft=(c,e,t)=>e in c?It(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var o=(c,e,t)=>(ft(c,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(a){if(a.ep)return;a.ep=!0;const p=t(a);fetch(a.href,p)}})();const Et="/dvd-pets/images/catricio/catricio-1.png",yt="/dvd-pets/images/catricio/catricio-2.png",Tt={default:Et,grab:yt},St="/dvd-pets/images/upgrades/tomato_ball.png",Pt="/dvd-pets/images/upgrades/tomato_rice.png",bt="/dvd-pets/images/upgrades/tomato_toy.png",Ct="/dvd-pets/images/upgrades/butter.png",Rt="/dvd-pets/images/upgrades/buttery_bone.png",k=[{type:"tomato_ball",target:"catomato",name:"Bola de tomate",description:"Uma bola identica a um tomate, os gatos adoram brincar com ela, ele corre bastante pra pega-la aumentando sua velocidade em 20%",price:250,spritPath:St,increment:1.2},{type:"tomato_rice",target:"catomato",name:"Comida de gato",description:"Um tipo de comida especial para gatos tomates, eles ficam satisfeitos por mais tempo aumentando a geração de love em 10%",price:2500,spritPath:Pt,increment:1.1},{type:"tomato_toy",target:"catomato",name:"Brinquedo de tomate",description:"Todos os seus gatos tomates adoram esse brinquedo, para cada gato tomate que você tem, você ganha 1% de geração de love a mais",price:25e3,spritPath:bt,increment:1.01},{type:"butter",target:"breadoggo",name:"Manteiga",description:"Uma manteiga especial para cachorros pães, CHEGA A MANTEIGA DERRETE, aumentando a geração de love em 20%",price:2500,spritPath:Ct,increment:1.2},{type:"buttery_bone",target:"breadoggo",name:"Osso Amanteigado",description:"Um osso delicinha para os seus cachorros pães, eles são totalmente atraidos por ele, aumentando a sua velocidade em 10%",price:25e3,spritPath:Rt,increment:1.1},{type:"catricio_fan",target:"catricio",name:"Fã do Catricio",description:"Você gosta tanto do Catricio que faz o melhor cafuné do mundo dobrando seu love por Carinho",price:100,increment:2},{type:"pet_lover",target:"catricio",name:"Amante de Pets",description:"Você ama tanto seus pets que eles ficam mais felizes com você, aumentando seu love por Carinho para cada pet que você tem em 1",price:1e3,increment:1}],J=()=>{const c=(l,h)=>Math.random()<.5?l:h,e=()=>Math.random().toString(36).substring(2,9),t=(l,h)=>!l||!h?!1:Object.keys(l).every(g=>l[g]===h[g])&&Object.keys(h).every(g=>l[g]===h[g]),r=(l,h)=>({x:Math.random()*l,y:Math.random()*h}),a=async l=>new Promise((h,g)=>{const I=new Image;I.src=l,I.onload=()=>{const w=I.naturalWidth*5,O=I.naturalHeight*5;p(I,w,O).then(N=>{const R=document.createElement("canvas"),i=R.getContext("bitmaprenderer");R.width=N.width,R.height=N.height,i.transferFromImageBitmap(N),R.toBlob(u=>h({blob:u,width:w,height:O,url:URL.createObjectURL(u)}))})},I.onerror=g}),p=async(l,h,g)=>await createImageBitmap(l,{resizeWidth:h,resizeHeight:g,resizeQuality:"pixelated"}),m=(l,h)=>l.filter(g=>g.state.type===h),b=l=>Math.ceil(Math.round(l*100))/100;return{randomFlip:c,uuid:e,isSameObject:t,getRandomPosition:r,createBitmapImage:p,createSprite:a,filterPetsByType:m,roundUp:b,getPetPrice:(l,h)=>{const g=h.INCREMENT_PET_BUY+1,I=m(l,h.TYPE).reduce(w=>g*w,h.PRICE);return Math.floor(b(I))},sortByAsc:(l,h)=>l>h?1:l<h?-1:0}},v=class v{constructor(e,t,r=J){o(this,"utils",null);o(this,"ctx",null);o(this,"filterColor",null);o(this,"canvas",null);o(this,"collisionCount",0);o(this,"gameInstance",null);o(this,"gameCanvasInstance",null);o(this,"bitmapImage",null);o(this,"state",{id:null,name:"",type:"",spritePath:"",width:0,height:0,sprite:null,position:{x:0,y:0},speed:{x:0,y:0},score:0,spriteDirection:null,improvements:[],description:""});this.utils=r(),this.gameInstance=e,this.gameCanvasInstance=e.canvasState,this.setInitialState(t),this.createSprite(),this.state.improvements.forEach(a=>this.setBonusTimeout(a))}setInitialState({name:e,type:t,width:r,height:a,position:p,scoreIncrement:m,speed:b,spriteDirection:U,sprite:F,spritePath:l,improvements:h,score:g,description:I}){Object.assign(this.state,{name:e,type:t,id:this.createId(),scoreIncrement:m??v.DEFAULT_SCORE_INCREMENT,bonusMultiplier:v.BONUS_MULTIPLIER,speed:this.getSpeed(b),direction:{x:this.utils.randomFlip(1,-1),y:this.utils.randomFlip(1,-1)},width:r??this.gameInstance.sprites.pets[t].width,height:a??this.gameInstance.sprites.pets[t].height,sprite:F??this.gameInstance.sprites.pets[t].blob,position:this.getPosition(p),spriteDirection:U??null,spritePath:l,improvements:h??[],score:g??0,description:I??""}),console.log(this.state)}createSprite(){this.utils.createBitmapImage(this.state.sprite,this.state.width,this.state.height).then(e=>{this.bitmapImage=e,this.createImageCanvas()})}getInfo(){return this.state}getSpeed({x:e=v.DEFAULT_SPEED_X,y:t=v.DEFAULT_SPEED_Y}={}){return{x:e,y:t}}getPosition({x:e=500,y:t=500}={}){return{x:e,y:t}}createId(){const e=this.utils.uuid();return this.gameInstance.pets.some(t=>t.state.id===e)?this.createId():e}move(){this.canvas&&(this.incrementPosition(),this.checkCollision(),this.dispachScore(),this.render(),this.collisionCount=0)}incrementPosition(){const{incrementX:e,incrementY:t}=this.getIncrementSpeed();this.state.position.x+=e,this.state.position.y+=t}getIncrementSpeed(){const e=100/this.gameInstance.fps,t=this.getBonusIncrementSpeed(),r=this.state.speed.x*this.state.direction.x*e*t,a=this.state.speed.y*this.state.direction.y*e*t;return{incrementX:r,incrementY:a}}getBonusIncrementSpeed(){return this.hasBonus()?v.BONUS_MULTIPLIER_SPEED:1}createImageCanvas(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.ctx.imageSmoothingEnabled=!1,this.canvas.width=this.state.width,this.canvas.height=this.state.height,this.renderImage()}renderImage(){const{spriteDirection:e,direction:t}=this.state;this.clearImage(),e&&t.x!==e?this.invertImageDirection():this.ctx.drawImage(this.bitmapImage,0,0)}clearImage(){this.ctx.clearRect(0,0,this.state.width,this.state.height)}invertImageDirection(){this.ctx.save(),this.ctx.scale(-1,1),this.ctx.drawImage(this.bitmapImage,this.state.width*-1,0),this.ctx.scale(1,1),this.ctx.restore()}render(){(this.collisionCount>0||this.hasBonus())&&(this.renderImage(),this.applyColorFilter(this.getRandomColor())),this.gameCanvasInstance.ctx.drawImage(this.canvas,this.state.position.x,this.state.position.y)}hasBonus(){return this.state.improvements.some(({type:e})=>e==="bonus")}getRandomColor(){const e={r:this.utils.randomFlip(0,1),g:this.utils.randomFlip(0,1),b:this.utils.randomFlip(0,1)};return Object.values(e).every(r=>r===0)||this.utils.isSameObject(e,this.filterColor)?this.getRandomColor():(this.filterColor=e,e)}applyColorFilter({r:e,g:t,b:r}){const a=new Path2D;a.rect(0,0,this.state.width,this.state.height),this.ctx.clip(a);const p=this.ctx.getImageData(0,0,this.state.width,this.state.height);for(let m=0;m<p.data.length;m+=4)p.data[m+3]>0&&(p.data[m]*=e,p.data[m+1]*=t,p.data[m+2]*=r);this.ctx.putImageData(p,0,0)}setScoreIncrement(e){this.state.scoreIncrement=e}setSpeed(e){Object.assign(this.state.speed,e)}setPosition(e){Object.assign(this.state.position,e)}remove(){this.gameInstance.pets=this.gameInstance.pets.filter(e=>e.state.id!==this.state.id)}dispachScore(){if(this.collisionCount===1){const e=this.utils.roundUp(this.state.scoreIncrement*this.getBonusScoreIncrement());this.gameInstance.incrementScore(e,"pet",this.state),this.state.score+=e}if(this.collisionCount===2){const e=this.getBonusScoreIncrement(),t=this.utils.roundUp(this.state.scoreIncrement*this.state.bonusMultiplier*e);this.gameInstance.incrementScore(t,"pet",this.state),this.state.score+=t,this.setSpecialBonus()}}setSpecialBonus(){const e={time:1e4,increment:10,type:"bonus"};this.state.improvements.push(e),this.setBonusTimeout(e)}setBonusTimeout(e){setTimeout(()=>this.state.improvements.shift(),e.time)}getBonusScoreIncrement(){return this.state.improvements.reduce((e,t)=>e*t.increment,1)}checkCollision(){const{x:e,y:t}=this.state.position,{width:r,height:a}=this.state,{width:p,height:m}=this.gameCanvasInstance;e+r>=p&&(this.state.direction.x*=-1,this.state.position.x=p-r,this.collisionCount++),e<=0&&(this.state.direction.x*=-1,this.state.position.x=0,this.collisionCount++),t+a>=m&&(this.state.direction.y*=-1,this.state.position.y=m-a,this.collisionCount++),t<=0&&(this.state.direction.y*=-1,this.state.position.y=0,this.collisionCount++)}};o(v,"DEFAULT_WIDTH",150),o(v,"DEFAULT_HEIGHT",150),o(v,"DEFAULT_SPEED_X",4),o(v,"DEFAULT_SPEED_Y",3),o(v,"DEFAULT_SCORE_INCREMENT",1),o(v,"SPRIT_LEFT_DIRECTION",-1),o(v,"SPRIT_RIGHT_DIRECTION",1),o(v,"BONUS_MULTIPLIER",100),o(v,"BONUS_MULTIPLIER_SPEED",1.5),o(v,"INCREMENT_PET_BUY",.2),o(v,"BUY_LIMIT",null);let f=v;const xt="/dvd-pets/images/pets/catomato.png",A=class A extends f{constructor(e,t,r){const a={...t,name:"Catomato",description:"um lindo gatinho em formato de tomate, muito poderoso",type:A.TYPE,spriteDirection:f.SPRIT_LEFT_DIRECTION,spritePath:A.SPRITE_PATH};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((p,m)=>this.getBonusIncrement(m)*p,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="tomato_ball"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){if((e==null?void 0:e.type)==="tomato_rice")return e.increment;if((e==null?void 0:e.type)==="tomato_toy"){const t=this.gameInstance.pets.filter(r=>r.state.type==="catomato");return e.increment*t.length}return 1}};o(A,"SPRITE_PATH",xt),o(A,"NAME","Catomato"),o(A,"PRICE",25),o(A,"TYPE","catomato");let X=A;const wt="/dvd-pets/images/pets/scarry_dog.png",E=class E extends f{constructor(e,t,r){const a={...t,name:"Cachorrinho",description:"????????????????????????????????????????????????????????????? scarry...",type:E.TYPE,spritePath:E.SPRITE_PATH,spriteDirection:f.SPRIT_LEFT_DIRECTION,scoreIncrement:E.DEFAULT_SCORE_INCREMENT,buyLimit:E.BUY_LIMIT,width:360,height:540,speed:{x:f.DEFAULT_SPEED_X*.75,y:f.DEFAULT_SPEED_Y*.75}};super(e,a,r)}};o(E,"SPRITE_PATH",wt),o(E,"NAME","Scarrydog"),o(E,"PRICE",1e5),o(E,"TYPE","scarry_dog"),o(E,"DEFAULT_SCORE_INCREMENT",50),o(E,"INCREMENT_PET_BUY",0),o(E,"BUY_LIMIT",1);let G=E;const $t="/dvd-pets/images/pets/breadoggo.png",C=class C extends f{constructor(e,t,r){const a={...t,name:"DogPao",description:"um lindo pao em formato de sabor cachorro, muito delicioso",type:C.TYPE,spriteDirection:f.SPRIT_LEFT_DIRECTION,spritePath:C.SPRITE_PATH,scoreIncrement:C.DEFAULT_SCORE_INCREMENT};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((p,m)=>this.getBonusIncrement(m)*p,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="buttery_bone"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){return(e==null?void 0:e.type)==="butter"?e.increment:1}};o(C,"SPRITE_PATH",$t),o(C,"NAME","Breadoggo"),o(C,"PRICE",250),o(C,"DEFAULT_SCORE_INCREMENT",5),o(C,"TYPE","breadoggo");let W=C;const Lt="/dvd-pets/images/pets/dripturtle.png",S=class S extends f{constructor(e,t,r){const a={...t,name:"Dripturtle",description:"uma tartaruga muito ameaçadora, que drip!",type:S.TYPE,spriteDirection:f.SPRIT_LEFT_DIRECTION,spritePath:S.SPRITE_PATH,scoreIncrement:S.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};o(S,"SPRITE_PATH",Lt),o(S,"NAME","Dripturtle"),o(S,"PRICE",500),o(S,"DEFAULT_WIDTH",170),o(S,"DEFAULT_HEIGHT",150),o(S,"DEFAULT_SCORE_INCREMENT",10),o(S,"TYPE","dripturtle");let z=S;const Bt="/dvd-pets/images/pets/bananamster.png",P=class P extends f{constructor(e,t,r){const a={...t,name:"Bananhamster",description:"igual a todas as bananas do mundo",type:P.TYPE,spriteDirection:f.SPRIT_LEFT_DIRECTION,spritePath:P.SPRITE_PATH,scoreIncrement:P.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};o(P,"SPRITE_PATH",Bt),o(P,"NAME","Bananhamster"),o(P,"PRICE",1250),o(P,"DEFAULT_WIDTH",130),o(P,"DEFAULT_HEIGHT",150),o(P,"DEFAULT_SCORE_INCREMENT",25),o(P,"TYPE","bananamster");let V=P;const j={scarry_dog:G,catomato:X,breadoggo:W,dripturtle:z,bananamster:V},At=c=>{const e=J(),t=()=>`
            <div id="score">
                <span class="text-danger" id="points">${c.score}</span>
                <h5 class="text-dark font-wight-bold" id="loves">Loves❤️</h5>
            </div>
        `,r=()=>`
            <div id="catricio">
                <img class="grabbable" draggable="false" src="${c.sprites.catricio.default.url}" />
                <div id="name">
                    <span>Catricio</span>
                </div>
            </div>
        `,a=()=>`
            <div id="shop-btn-container">
                <button id="shop-button">Shop</button>
            </div>
        `,p=(i=c.pets[0])=>`
            <div id="pet-card">
                <div id="card-pet-info">
                    ${m(i)}
                </div>
            </div>
        `,m=i=>{var u,y,M,_;return`
            <div id="pet-photo">
                ${i?`<img draggable="false" src="${(u=c.sprites.pets[i.state.type])==null?void 0:u.url}" />`:"???"}
            </div>
            <div id="pet-attributes">
                <p id="pet-name">[${i?(y=i==null?void 0:i.state)==null?void 0:y.name:"seu pet aqui"}]</p>
                <p id="pet-personal-stats">${(M=i==null?void 0:i.state)!=null&&M.description?(_=i==null?void 0:i.state)==null?void 0:_.description:"as informações do seu pet aparecerá aqui"}</p>
            </div>
        `},b=()=>c.pets.reduce((i,u)=>{const y=i.findIndex(M=>M.state.name===u.state.name);return y!==-1?i[y].count++:i.push({...u,count:1}),i},[]).map(i=>`
                    <div id="pet-item" data-id=${i.state.id}>
                        <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
                    </div>
                `).join(""),U=i=>{var u;return`
            <div id="pet-item" data-id=${((u=i==null?void 0:i.state)==null?void 0:u.id)??""}>
                <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
            </div>
        `},F=()=>`
            <div class="d-flex align-itens-center justify-content-center h-100 w-100 postion-relative">
                ${l()}
                <div id="game-score">
                    ${t()}
                    ${r()}
                    ${a()}
                </div>
                <div id="canvas"></div>
                <div id="pet-infos">
                    ${p()}
                    <div id="owned-pets">
                        ${b()}
                    </div>
                </div>
            </div>
        `,l=(i=!0)=>`
            <div id="shop" class="${i?"hidden":""}">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <div class="nav-link active" data-nav="pets">PETS</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" data-nav="improvements">Melhorias</div>
                    </li>
                </ul>

                ${h()}
            </div>
        `,h=()=>`
            <div id="shop-content">
                <div shop-nav-content id="pets" class="d-flex flex-column">
                    ${g()}
                </div>
                <div shop-nav-content id="improvements" class="d-none flex-column">
                    ${N()}
                </div>
            </div>
        `,g=()=>Object.values(j).sort((i,u)=>e.sortByAsc(i.PRICE,u.PRICE)).map(i=>O(i)).join(""),I=i=>{$(`[data-pet-type="${i.TYPE}"]`).closest("#shop-item").replaceWith(O(i))},w=i=>{$(`[data-improvement-type="${i.type}"]`).closest("#shop-item").replaceWith(R(i,!0))},O=i=>{const u=c.countPetsByType(i.TYPE);return`
            <div id="shop-item" class="${i.BUY_LIMIT&&u>=i.BUY_LIMIT?"disabled":""}">
                <div class="card" data-pet-type="${i.TYPE}" title="Comprar">
                    <div class="card-body d-flex px-2">
                        <div class="shop-pet-img">
                            <img
                                draggable="false"
                                class="img-fluid"
                                src="${c.sprites.pets[i.TYPE].url}" />
                        </div>
                        <div class="item-info d-flex flex-column w-100">
                            <div class="d-flex justify-content-between w-100 aling-items-center">
                                <div id="shop-item-name">
                                    <h4 class="mb-0">${i.NAME}</h4>
                                </div>
                                <div id="shop-item-price" class="text-danger">
                                    <span>${e.getPetPrice(c.pets,i)}❤️</span>
                                </div>
                            </div>
                            <small class="colision-info font-wight-bold mt-1">
                                Gera
                                <span class="text-danger">${i.DEFAULT_SCORE_INCREMENT}❤️</span>
                                por colisão
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        `},N=()=>k.sort((i,u)=>e.sortByAsc(i.price,u.price)).map(i=>{const u=c.improvements.some(({type:y})=>y===i.type);return R(i,u)}).join(""),R=(i,u=!1)=>{const y=i.target==="catricio"?c.sprites.catricio.default:c.sprites.improvements[i.type];return`
            <div id="shop-item" class="${u?"disabled":""}">
                <div class="card" data-improvement-type="${i.type}" title="Comprar">
                    <div class="card-body d-flex px-2">
                        <div class="shop-pet-img">
                            <img draggable="false" class="img-fluid" src="${y.url}" />
                        </div>
                        <div class="item-info d-flex flex-column w-100">
                            <div class="d-flex justify-content-between w-100 aling-items-center">
                                <div id="shop-item-name">
                                    <h4 class="mb-0">${i.name}</h4>
                                </div>
                                <div id="shop-item-price" class="text-danger">
                                    <span>${i.price}❤️</span>
                                </div>
                            </div>
                            <small class="colision-info font-wight-bold mt-1">
                               ${i.description}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        `};return{renderLayout:F,renderShop:l,updateShopItem:I,updateImprovementItem:w,addOwnedPet:U,renderCardInfo:m}},Ot=(c,e=J)=>{const t={fps:75,pets:[],score:0,container:null,improvements:[],sprites:{pets:{},catricio:{},improvements:{}},canvasState:{width:0,height:0,ctx:null,canvas:null,container:null,backgroundColor:"#000000"}},r=e(),a=At(t),p=s=>{Object.assign(t,s)},m=()=>{const s=document.getElementById("canvas");b({container:s,width:s.offsetWidth,height:s.offsetHeight})},b=s=>{Object.assign(t.canvasState,s)},U=()=>{const s=document.createElement("canvas"),n=s.getContext("2d",{willReadFrequently:!0});t.canvasState.container.appendChild(s),b({canvas:s,ctx:n}),h()},F=()=>{let s=0;const n=()=>{const d=Date.now();d-s>1e3/t.fps&&(l(),s=d),requestAnimationFrame(n)};requestAnimationFrame(n)},l=()=>{const{ctx:s,width:n,height:d,backgroundColor:T}=t.canvasState;s.fillStyle=T,s.fillRect(0,0,n,d),t.pets.forEach(L=>L.move())},h=()=>{const{canvas:s,width:n,height:d}=t.canvasState;s.width=n,s.height=d},g=()=>{new ResizeObserver(()=>{m(),h(),w()}).observe(t.canvasState.container)},I=(s,n)=>{const{x:d,y:T}=r.getRandomPosition(s,n);return t.pets.some(({state:B})=>B.position.x===d&&B.position.y===T)?I(s,n):{x:d,y:T}},w=()=>{t.pets.forEach(s=>{const n=t.canvasState.width-t.sprites.pets[s.state.type].width,d=t.canvasState.height-t.sprites.pets[s.state.type].height;s.setPosition(I(n,d))})},O=s=>{const n=j[s],d=r.getPetPrice(t.pets,n),T=t.canvasState.width-t.sprites.pets[s].width,L=t.canvasState.height-t.sprites.pets[s].height,B=Z(s);if(!n||t.score<d||n.BUY_LIMIT&&B>=n.BUY_LIMIT)return;const D=!!t.pets.find(vt=>vt.state.type===n.TYPE),H=new n(t,{position:I(T,L)});Y(-d),i(H),D||$("#owned-pets").append(a.addOwnedPet(H)),a.updateShopItem(n),q()},N=s=>{const n=k.find(d=>d.type===s);R(n)||(Y(-n.price),t.improvements.push({...n}),a.updateImprovementItem(n),q())},R=s=>!s||t.score<s.price||t.improvements.some(({type:n})=>s.type===n),i=s=>{t.pets.some(d=>d.state.id===s.state.id)||t.pets.push(s)},u=()=>{const n=t.improvements.filter(({target:d})=>d==="catricio").reduce((d,T)=>_(d,T),1);Y(n)},y=s=>{const n=t.pets.find(d=>d.state.id===s);n&&($("#card-pet-info").empty(),$("#card-pet-info").append(a.renderCardInfo(n)))},M=s=>{const{name:n,type:d,improvements:T,score:L,width:B,height:D}=s,H=j[d];i(new H(t,{name:n,type:d,score:L,improvements:T,position:I(B,D)}))},_=(s,n)=>n.type==="catricio_fan"?s*n.increment:n.type==="pet_lover"?s+t.pets.length*n.increment:s,Y=(s,n,d)=>{t.score+=s,tt(),q()},tt=()=>{const s=document.getElementById("points");s.innerHTML=Math.floor(t.score)},q=()=>{const s={improvements:t.improvements,pets:t.pets.map(n=>st(n)),score:t.score};localStorage.setItem("game-state",JSON.stringify(s))},et=()=>{const s=JSON.parse(localStorage.getItem("game-state"));s&&(t.score=s.score,t.improvements=s.improvements,s.pets.forEach(n=>M(n)))},st=s=>{const{name:n,type:d,improvements:T,score:L,width:B,height:D}=s.getInfo();return{name:n,type:d,improvements:T,score:L,width:B,height:D}},K=()=>t.pets,it=s=>t.pets.find(n=>n.state.id===s),nt=()=>{t.incrementScore=Y,t.buyPet=O,t.getPets=K,t.findPet=it,t.insertPet=i,t.changeToFullScreen=ot,t.resetFullScreen=rt,t.toggleShop=ct,t.shopIsOpen=Q,t.buyImprovement=N,t.dispachClick=u,t.changePetPreview=y,t.dispatchClick=u,t.countPetsByType=Z},at=()=>{t.container.innerHTML=a.renderLayout()},ot=()=>{if(Q())return;const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform=`translateX(${-s.offsetWidth}px)`,n.style.transform=`translateX(${n.offsetWidth}px)`,t.canvasState.container.style.width="100%"},rt=()=>{const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform="translateX(0px)",n.style.transform="translateX(0px)",t.canvasState.container.style.width="50%"},Q=()=>!document.getElementById("shop").classList.contains("hidden"),ct=()=>{const s=document.getElementById("shop");$("#pet-infos").toggle("hidden"),s.classList.toggle("hidden")},dt=async()=>{await Promise.all(Object.entries(j).map(([s,n])=>ut(s,n)))},pt=async()=>{await Promise.all(k.filter(s=>s.spritPath).map(s=>mt(s)))},mt=async s=>await r.createSprite(s.spritPath).then(n=>t.sprites.improvements[s.type]=n),lt=async()=>{await Promise.all(Object.entries(Tt).map(([s,n])=>ht(s,n)))},ht=async(s,n)=>await r.createSprite(n).then(d=>t.sprites.catricio[s]=d),ut=async(s,n)=>await r.createSprite(n.SPRITE_PATH).then(d=>t.sprites.pets[s]=d),gt=async()=>{await Promise.all([dt(),lt(),pt()])},Z=s=>K().filter(d=>d.state.type===s).length;return(()=>{p({container:c}),gt().then(()=>{nt(),et(),at(),m(),U(),g(),F()})})(),t},x=Ot(document.getElementById("app"));$("body").on("click","#catricio",()=>x.dispatchClick(1,"normal"));$("body").on("click","#shop-button",()=>x.toggleShop());$("body").on("click","[data-pet-type]",({currentTarget:c})=>x.buyPet(c.dataset.petType));$("body").on("mousedown","#catricio",({currentTarget:c})=>{const e=c.querySelector("img");e.src=x.sprites.catricio.grab.url});$("body").on("mouseup",()=>{const c=document.querySelector("#catricio img");c.src=x.sprites.catricio.default.url});$("body").on("click","[data-improvement-type]",({currentTarget:c})=>x.buyImprovement(c.dataset.improvementType));$("body").on("mouseleave",()=>{let c=setTimeout(()=>x.changeToFullScreen(),1e4);$("body").on("mouseenter",()=>{clearTimeout(c),x.resetFullScreen(),$("body").off("mouseenter")})});$("body").on("click","[data-nav]",({currentTarget:c})=>{const{nav:e}=c.dataset;$("[data-nav]").removeClass("active"),$(`[data-nav=${e}]`).addClass("active"),$("[shop-nav-content]").addClass("d-none").removeClass("d-flex"),$(`#${e}`).removeClass("d-none").removeClass("d-flex")});$("body").on("click","#pet-item",({currentTarget:c})=>{x.changePetPreview(c.dataset.id)});
