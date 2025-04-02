var gt=Object.defineProperty;var vt=(c,e,t)=>e in c?gt(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var o=(c,e,t)=>(vt(c,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(a){if(a.ep)return;a.ep=!0;const d=t(a);fetch(a.href,d)}})();const It="/dvd-pets/images/catricio/catricio-1.png",ft="/dvd-pets/images/catricio/catricio-2.png",Et={default:It,grab:ft},yt="/dvd-pets/images/upgrades/tomato_ball.png",St="/dvd-pets/images/upgrades/tomato_rice.png",Pt="/dvd-pets/images/upgrades/tomato_toy.png",Tt="/dvd-pets/images/upgrades/butter.png",bt="/dvd-pets/images/upgrades/buttery_bone.png",k=[{type:"tomato_ball",target:"catomato",name:"Bola de tomate",description:"Uma bola identica a um tomate, os gatos adoram brincar com ela, ele corre bastante pra pega-la aumentando sua velocidade em 20%",price:250,spritPath:yt,increment:1.2},{type:"tomato_rice",target:"catomato",name:"Comida de gato",description:"Um tipo de comida especial para gatos tomates, eles ficam satisfeitos por mais tempo aumentando a geração de love em 10%",price:2500,spritPath:St,increment:1.1},{type:"tomato_toy",target:"catomato",name:"Brinquedo de tomate",description:"Todos os seus gatos tomates adoram esse brinquedo, para cada gato tomate que você tem, você ganha 1% de geração de love a mais",price:25e3,spritPath:Pt,increment:1.01},{type:"butter",target:"breadoggo",name:"Manteiga",description:"Uma manteiga especial para cachorros pães, CHEGA A MANTEIGA DERRETE, aumentando a geração de love em 20%",price:2500,spritPath:Tt,increment:1.2},{type:"buttery_bone",target:"breadoggo",name:"Osso Amanteigado",description:"Um osso delicinha para os seus cachorros pães, eles são totalmente atraidos por ele, aumentando a sua velocidade em 10%",price:25e3,spritPath:bt,increment:1.1},{type:"catricio_fan",target:"catricio",name:"Fã do Catricio",description:"Você gosta tanto do Catricio que faz o melhor cafuné do mundo dobrando seu love por Carinho",price:100,increment:2},{type:"pet_lover",target:"catricio",name:"Amante de Pets",description:"Você ama tanto seus pets que eles ficam mais felizes com você, aumentando seu love por Carinho para cada pet que você tem em 1",price:1e3,increment:1}],J=()=>{const c=(l,h)=>Math.random()<.5?l:h,e=()=>Math.random().toString(36).substring(2,9),t=(l,h)=>!l||!h?!1:Object.keys(l).every(g=>l[g]===h[g])&&Object.keys(h).every(g=>l[g]===h[g]),r=(l,h)=>({x:Math.random()*l,y:Math.random()*h}),a=async l=>new Promise((h,g)=>{const v=new Image;v.src=l,v.onload=()=>{const x=v.naturalWidth*5,F=v.naturalHeight*5;d(v,x,F).then(B=>{const C=document.createElement("canvas"),i=C.getContext("bitmaprenderer");C.width=B.width,C.height=B.height,i.transferFromImageBitmap(B),C.toBlob(u=>h({blob:u,width:x,height:F,url:URL.createObjectURL(u)}))})},v.onerror=g}),d=async(l,h,g)=>await createImageBitmap(l,{resizeWidth:h,resizeHeight:g,resizeQuality:"pixelated"}),p=(l,h)=>l.filter(g=>g.state.type===h),T=l=>Math.ceil(Math.round(l*100))/100;return{randomFlip:c,uuid:e,isSameObject:t,getRandomPosition:r,createBitmapImage:d,createSprite:a,filterPetsByType:p,roundUp:T,getPetPrice:(l,h)=>{const g=h.INCREMENT_PET_BUY+1,v=p(l,h.TYPE).reduce(x=>g*x,h.PRICE);return Math.floor(T(v))},sortByAsc:(l,h)=>l>h?1:l<h?-1:0}},I=class I{constructor(e,t,r=J){o(this,"utils",null);o(this,"ctx",null);o(this,"filterColor",null);o(this,"canvas",null);o(this,"collisionCount",0);o(this,"gameInstance",null);o(this,"gameCanvasInstance",null);o(this,"bitmapImage",null);o(this,"state",{id:null,name:"",type:"",spritePath:"",width:0,height:0,sprite:null,position:{x:0,y:0},speed:{x:0,y:0},score:0,spriteDirection:null,improvements:[],description:""});this.utils=r(),this.gameInstance=e,this.gameCanvasInstance=e.canvasState,this.setInitialState(t),this.createSprite(),this.state.improvements.forEach(a=>this.setBonusTimeout(a))}setInitialState({name:e,type:t,width:r,height:a,position:d,scoreIncrement:p,speed:T,spriteDirection:N,sprite:D,spritePath:l,improvements:h,score:g,description:v}){Object.assign(this.state,{name:e,type:t,id:this.createId(),scoreIncrement:p??I.DEFAULT_SCORE_INCREMENT,bonusMultiplier:I.BONUS_MULTIPLIER,speed:this.getSpeed(T),direction:{x:this.utils.randomFlip(1,-1),y:this.utils.randomFlip(1,-1)},width:r??this.gameInstance.sprites.pets[t].width,height:a??this.gameInstance.sprites.pets[t].height,sprite:D??this.gameInstance.sprites.pets[t].blob,position:this.getPosition(d),spriteDirection:N??null,spritePath:l,improvements:h??[],score:g??0,description:v??""})}createSprite(){this.utils.createBitmapImage(this.state.sprite,this.state.width,this.state.height).then(e=>{this.bitmapImage=e,this.createImageCanvas()})}getInfo(){return this.state}getSpeed({x:e=I.DEFAULT_SPEED_X,y:t=I.DEFAULT_SPEED_Y}={}){return{x:e,y:t}}getPosition({x:e=500,y:t=500}={}){return{x:e,y:t}}createId(){const e=this.utils.uuid();return this.gameInstance.pets.some(t=>t.state.id===e)?this.createId():e}move(){this.canvas&&(this.incrementPosition(),this.checkCollision(),this.dispachScore(),this.render(),this.collisionCount=0)}incrementPosition(){const{incrementX:e,incrementY:t}=this.getIncrementSpeed();this.state.position.x+=e,this.state.position.y+=t}getIncrementSpeed(){const e=100/this.gameInstance.fps,t=this.getBonusIncrementSpeed(),r=this.state.speed.x*this.state.direction.x*e*t,a=this.state.speed.y*this.state.direction.y*e*t;return{incrementX:r,incrementY:a}}getBonusIncrementSpeed(){return this.hasBonus()?I.BONUS_MULTIPLIER_SPEED:1}createImageCanvas(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.ctx.imageSmoothingEnabled=!1,this.canvas.width=this.state.width,this.canvas.height=this.state.height,this.renderImage()}renderImage(){const{spriteDirection:e,direction:t}=this.state;this.clearImage(),e&&t.x!==e?this.invertImageDirection():this.ctx.drawImage(this.bitmapImage,0,0)}clearImage(){this.ctx.clearRect(0,0,this.state.width,this.state.height)}invertImageDirection(){this.ctx.save(),this.ctx.scale(-1,1),this.ctx.drawImage(this.bitmapImage,this.state.width*-1,0),this.ctx.scale(1,1),this.ctx.restore()}render(){(this.collisionCount>0||this.hasBonus())&&(this.renderImage(),this.applyColorFilter(this.getRandomColor())),this.gameCanvasInstance.ctx.drawImage(this.canvas,this.state.position.x,this.state.position.y)}hasBonus(){return this.state.improvements.some(({type:e})=>e==="bonus")}getRandomColor(){const e={r:this.utils.randomFlip(0,1),g:this.utils.randomFlip(0,1),b:this.utils.randomFlip(0,1)};return Object.values(e).every(r=>r===0)||this.utils.isSameObject(e,this.filterColor)?this.getRandomColor():(this.filterColor=e,e)}applyColorFilter({r:e,g:t,b:r}){const a=new Path2D;a.rect(0,0,this.state.width,this.state.height),this.ctx.clip(a);const d=this.ctx.getImageData(0,0,this.state.width,this.state.height);for(let p=0;p<d.data.length;p+=4)d.data[p+3]>0&&(d.data[p]*=e,d.data[p+1]*=t,d.data[p+2]*=r);this.ctx.putImageData(d,0,0)}setScoreIncrement(e){this.state.scoreIncrement=e}setSpeed(e){Object.assign(this.state.speed,e)}setPosition(e){Object.assign(this.state.position,e)}remove(){this.gameInstance.pets=this.gameInstance.pets.filter(e=>e.state.id!==this.state.id)}dispachScore(){if(this.collisionCount===1){const e=this.utils.roundUp(this.state.scoreIncrement*this.getBonusScoreIncrement());this.gameInstance.incrementScore(e,"pet",this.state),this.state.score+=e}if(this.collisionCount===2){const e=this.getBonusScoreIncrement(),t=this.utils.roundUp(this.state.scoreIncrement*this.state.bonusMultiplier*e);this.gameInstance.incrementScore(t,"pet",this.state),this.state.score+=t,this.setSpecialBonus()}}setSpecialBonus(){const e={time:1e4,increment:10,type:"bonus"};this.state.improvements.push(e),this.setBonusTimeout(e)}setBonusTimeout(e){setTimeout(()=>this.state.improvements.shift(),e.time)}getBonusScoreIncrement(){return this.state.improvements.reduce((e,t)=>e*t.increment,1)}checkCollision(){const{x:e,y:t}=this.state.position,{width:r,height:a}=this.state,{width:d,height:p}=this.gameCanvasInstance;e+r>=d&&(this.state.direction.x*=-1,this.state.position.x=d-r,this.collisionCount++),e<=0&&(this.state.direction.x*=-1,this.state.position.x=0,this.collisionCount++),t+a>=p&&(this.state.direction.y*=-1,this.state.position.y=p-a,this.collisionCount++),t<=0&&(this.state.direction.y*=-1,this.state.position.y=0,this.collisionCount++)}};o(I,"DEFAULT_WIDTH",150),o(I,"DEFAULT_HEIGHT",150),o(I,"DEFAULT_SPEED_X",4),o(I,"DEFAULT_SPEED_Y",3),o(I,"DEFAULT_SCORE_INCREMENT",1),o(I,"SPRIT_LEFT_DIRECTION",-1),o(I,"SPRIT_RIGHT_DIRECTION",1),o(I,"BONUS_MULTIPLIER",100),o(I,"BONUS_MULTIPLIER_SPEED",1.5),o(I,"INCREMENT_PET_BUY",.2);let S=I;const Ct="/dvd-pets/images/pets/catomato.png",A=class A extends S{constructor(e,t,r){const a={...t,name:"Catomato",description:"um lindo gatinho em formato de tomate, muito poderoso",type:A.TYPE,spriteDirection:S.SPRIT_LEFT_DIRECTION,spritePath:A.SPRITE_PATH};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((d,p)=>this.getBonusIncrement(p)*d,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="tomato_ball"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){if((e==null?void 0:e.type)==="tomato_rice")return e.increment;if((e==null?void 0:e.type)==="tomato_toy"){const t=this.gameInstance.pets.filter(r=>r.state.type==="catomato");return e.increment*t.length}return 1}};o(A,"SPRITE_PATH",Ct),o(A,"NAME","Catomato"),o(A,"PRICE",25),o(A,"TYPE","catomato");let X=A;const Rt="/dvd-pets/images/pets/scarry_dog.webp",L=class L extends S{constructor(e,t,r){const a={...t,name:"Cachorrinho",description:"?????????????????????????????????????????????????????????????",type:L.TYPE,spritePath:L.SPRITE_PATH,spriteDirection:S.SPRIT_LEFT_DIRECTION};super(e,a,r)}};o(L,"SPRITE_PATH",Rt),o(L,"NAME","Cachorrinho"),o(L,"PRICE",666),o(L,"TYPE","scarry_dog");let G=L;const xt="/dvd-pets/images/pets/breadoggo.png",b=class b extends S{constructor(e,t,r){const a={...t,name:"DogPao",description:"um lindo pao em formato de sabor cachorro, muito delicioso",type:b.TYPE,spriteDirection:S.SPRIT_LEFT_DIRECTION,spritePath:b.SPRITE_PATH,scoreIncrement:b.DEFAULT_SCORE_INCREMENT};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((d,p)=>this.getBonusIncrement(p)*d,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="buttery_bone"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){return(e==null?void 0:e.type)==="butter"?e.increment:1}};o(b,"SPRITE_PATH",xt),o(b,"NAME","Breadoggo"),o(b,"PRICE",250),o(b,"DEFAULT_SCORE_INCREMENT",5),o(b,"TYPE","breadoggo");let W=b;const wt="/dvd-pets/images/pets/dripturtle.png",E=class E extends S{constructor(e,t,r){const a={...t,name:"Dripturtle",description:"uma tartaruga muito ameaçadora, que drip!",type:E.TYPE,spriteDirection:S.SPRIT_LEFT_DIRECTION,spritePath:E.SPRITE_PATH,scoreIncrement:E.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};o(E,"SPRITE_PATH",wt),o(E,"NAME","Dripturtle"),o(E,"PRICE",500),o(E,"DEFAULT_WIDTH",170),o(E,"DEFAULT_HEIGHT",150),o(E,"DEFAULT_SCORE_INCREMENT",10),o(E,"TYPE","dripturtle");let z=E;const $t="/dvd-pets/images/pets/bananamster.png",y=class y extends S{constructor(e,t,r){const a={...t,name:"Bananhamster",description:"igual a todas as bananas do mundo",type:y.TYPE,spriteDirection:S.SPRIT_LEFT_DIRECTION,spritePath:y.SPRITE_PATH,scoreIncrement:y.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};o(y,"SPRITE_PATH",$t),o(y,"NAME","Bananhamster"),o(y,"PRICE",1250),o(y,"DEFAULT_WIDTH",130),o(y,"DEFAULT_HEIGHT",150),o(y,"DEFAULT_SCORE_INCREMENT",25),o(y,"TYPE","bananamster");let V=y;const Y={scarry_dog:G,catomato:X,breadoggo:W,dripturtle:z,bananamster:V},Ot=c=>{const e=J(),t=()=>`
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
        `,d=(i=c.pets[0])=>`
            <div id="pet-card">
                <div id="card-pet-info">
                    ${p(i)}
                </div>
            </div>
        `,p=i=>{var u,P,M,_;return`
            <div id="pet-photo">
                ${i?`<img draggable="false" src="${(u=c.sprites.pets[i.state.type])==null?void 0:u.url}" />`:"???"}
            </div>
            <div id="pet-attributes">
                <p id="pet-name">[${i?(P=i==null?void 0:i.state)==null?void 0:P.name:"seu pet aqui"}]</p>
                <p id="pet-personal-stats">${(M=i==null?void 0:i.state)!=null&&M.description?(_=i==null?void 0:i.state)==null?void 0:_.description:"as informações do seu pet aparecerá aqui"}</p>
            </div>
        `},T=()=>c.pets.reduce((i,u)=>{const P=i.findIndex(M=>M.state.name===u.state.name);return P!==-1?i[P].count++:i.push({...u,count:1}),i},[]).map(i=>`
                    <div id="pet-item" data-id=${i.state.id}>
                        <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
                    </div>
                `).join(""),N=i=>{var u;return`
            <div id="pet-item" data-id=${((u=i==null?void 0:i.state)==null?void 0:u.id)??""}>
                <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
            </div>
        `},D=()=>`
            <div class="d-flex align-itens-center justify-content-center h-100 w-100 postion-relative">
                ${l()}
                <div id="game-score">
                    ${t()}
                    ${r()}
                    ${a()}
                </div>
                <div id="canvas"></div>
                <div id="pet-infos">
                    ${d()}
                    <div id="owned-pets">
                        ${T()}
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
                    ${B()}
                </div>
            </div>
        `,g=()=>Object.values(Y).filter(i=>i.TYPE!=="scarry_dog").sort((i,u)=>e.sortByAsc(i.PRICE,u.PRICE)).map(i=>F(i)).join(""),v=i=>{$(`[data-pet-type="${i.TYPE}"]`).closest("#shop-item").replaceWith(F(i))},x=i=>{$(`[data-improvement-type="${i.type}"]`).closest("#shop-item").replaceWith(C(i,!0))},F=i=>`
            <div id="shop-item">
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
        `,B=()=>k.sort((i,u)=>e.sortByAsc(i.price,u.price)).map(i=>{const u=c.improvements.some(({type:P})=>P===i.type);return C(i,u)}).join(""),C=(i,u=!1)=>{const P=i.target==="catricio"?c.sprites.catricio.default:c.sprites.improvements[i.type];return`
            <div id="shop-item" class="${u?"disabled":""}">
                <div class="card" data-improvement-type="${i.type}" title="Comprar">
                    <div class="card-body d-flex px-2">
                        <div class="shop-pet-img">
                            <img draggable="false" class="img-fluid" src="${P.url}" />
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
        `};return{renderLayout:D,renderShop:l,updateShopItem:v,updateImprovementItem:x,addOwnedPet:N,renderCardInfo:p}},At=(c,e=J)=>{const t={fps:75,pets:[],score:0,container:null,improvements:[],sprites:{pets:{},catricio:{},improvements:{}},canvasState:{width:0,height:0,ctx:null,canvas:null,container:null,backgroundColor:"#000000"}},r=e(),a=Ot(t),d=s=>{Object.assign(t,s)},p=()=>{const s=document.getElementById("canvas");T({container:s,width:s.offsetWidth,height:s.offsetHeight})},T=s=>{Object.assign(t.canvasState,s)},N=()=>{const s=document.createElement("canvas"),n=s.getContext("2d",{willReadFrequently:!0});t.canvasState.container.appendChild(s),T({canvas:s,ctx:n}),h()},D=()=>{let s=0;const n=()=>{const m=Date.now();m-s>1e3/t.fps&&(l(),s=m),requestAnimationFrame(n)};requestAnimationFrame(n)},l=()=>{const{ctx:s,width:n,height:m,backgroundColor:f}=t.canvasState;s.fillStyle=f,s.fillRect(0,0,n,m),t.pets.forEach(w=>w.move())},h=()=>{const{canvas:s,width:n,height:m}=t.canvasState;s.width=n,s.height=m},g=()=>{new ResizeObserver(()=>{p(),h(),x()}).observe(t.canvasState.container)},v=(s,n)=>{const{x:m,y:f}=r.getRandomPosition(s,n);return t.pets.some(({state:O})=>O.position.x===m&&O.position.y===f)?v(s,n):{x:m,y:f}},x=()=>{t.pets.forEach(s=>{const n=t.canvasState.width-t.sprites.pets[s.state.type].width,m=t.canvasState.height-t.sprites.pets[s.state.type].height;s.setPosition(v(n,m))})},F=s=>{const n=Y[s],m=r.getPetPrice(t.pets,n),f=t.canvasState.width-t.sprites.pets[s].width,w=t.canvasState.height-t.sprites.pets[s].height;if(!n||t.score<m)return;const O=!!t.pets.find(q=>q.state.type===n.TYPE),U=new n(t,{position:v(f,w)});H(-m),i(U),O||$("#owned-pets").append(a.addOwnedPet(U)),a.updateShopItem(n),j()},B=s=>{const n=k.find(m=>m.type===s);C(n)||(H(-n.price),t.improvements.push({...n}),a.updateImprovementItem(n),j())},C=s=>!s||t.score<s.price||t.improvements.some(({type:n})=>s.type===n),i=s=>{t.pets.some(m=>m.state.id===s.state.id)||t.pets.push(s)},u=()=>{const n=t.improvements.filter(({target:m})=>m==="catricio").reduce((m,f)=>_(m,f),1);H(n)},P=s=>{const n=t.pets.find(m=>m.state.id===s);n&&($("#card-pet-info").empty(),$("#card-pet-info").append(a.renderCardInfo(n)))},M=s=>{const{name:n,type:m,improvements:f,score:w,width:O,height:U}=s,q=Y[m];i(new q(t,{name:n,type:m,score:w,improvements:f,position:v(O,U)}))},_=(s,n)=>n.type==="catricio_fan"?s*n.increment:n.type==="pet_lover"?s+t.pets.length*n.increment:s,H=(s,n,m)=>{t.score+=s,Q(),j()},Q=()=>{const s=document.getElementById("points");s.innerHTML=Math.floor(t.score)},j=()=>{const s={improvements:t.improvements,pets:t.pets.map(n=>tt(n)),score:t.score};localStorage.setItem("game-state",JSON.stringify(s))},Z=()=>{const s=JSON.parse(localStorage.getItem("game-state"));s&&(t.score=s.score,t.improvements=s.improvements,s.pets.forEach(n=>M(n)))},tt=s=>{const{name:n,type:m,improvements:f,score:w,width:O,height:U}=s.getInfo();return{name:n,type:m,improvements:f,score:w,width:O,height:U}},et=()=>t.pets,st=s=>t.pets.find(n=>n.state.id===s),it=()=>{t.incrementScore=H,t.buyPet=F,t.getPets=et,t.findPet=st,t.insertPet=i,t.changeToFullScreen=at,t.resetFullScreen=ot,t.toggleShop=rt,t.shopIsOpen=K,t.buyImprovement=B,t.dispachClick=u,t.changePetPreview=P,t.dispatchClick=u},nt=()=>{t.container.innerHTML=a.renderLayout()},at=()=>{if(K())return;const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform=`translateX(${-s.offsetWidth}px)`,n.style.transform=`translateX(${n.offsetWidth}px)`,t.canvasState.container.style.width="100%"},ot=()=>{const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform="translateX(0px)",n.style.transform="translateX(0px)",t.canvasState.container.style.width="50%"},K=()=>!document.getElementById("shop").classList.contains("hidden"),rt=()=>{const s=document.getElementById("shop");$("#pet-infos").toggle("hidden"),s.classList.toggle("hidden")},ct=async()=>{await Promise.all(Object.entries(Y).map(([s,n])=>ht(s,n)))},dt=async()=>{await Promise.all(k.filter(s=>s.spritPath).map(s=>mt(s)))},mt=async s=>await r.createSprite(s.spritPath).then(n=>t.sprites.improvements[s.type]=n),pt=async()=>{await Promise.all(Object.entries(Et).map(([s,n])=>lt(s,n)))},lt=async(s,n)=>await r.createSprite(n).then(m=>t.sprites.catricio[s]=m),ht=async(s,n)=>await r.createSprite(n.SPRITE_PATH).then(m=>t.sprites.pets[s]=m),ut=async()=>{await Promise.all([ct(),pt(),dt()])};return(()=>{d({container:c}),ut().then(()=>{Z(),nt(),p(),N(),it(),g(),D()})})(),t},R=At(document.getElementById("app"));$("body").on("click","#catricio",()=>R.dispatchClick(1,"normal"));$("body").on("click","#shop-button",()=>R.toggleShop());$("body").on("click","[data-pet-type]",({currentTarget:c})=>R.buyPet(c.dataset.petType));$("body").on("mousedown","#catricio",({currentTarget:c})=>{const e=c.querySelector("img");e.src=R.sprites.catricio.grab.url});$("body").on("mouseup",()=>{const c=document.querySelector("#catricio img");c.src=R.sprites.catricio.default.url});$("body").on("click","[data-improvement-type]",({currentTarget:c})=>R.buyImprovement(c.dataset.improvementType));$("body").on("mouseleave",()=>{let c=setTimeout(()=>R.changeToFullScreen(),1e4);$("body").on("mouseenter",()=>{clearTimeout(c),R.resetFullScreen(),$("body").off("mouseenter")})});$("body").on("click","[data-nav]",({currentTarget:c})=>{const{nav:e}=c.dataset;$("[data-nav]").removeClass("active"),$(`[data-nav=${e}]`).addClass("active"),$("[shop-nav-content]").addClass("d-none").removeClass("d-flex"),$(`#${e}`).removeClass("d-none").removeClass("d-flex")});$("body").on("click","#pet-item",({currentTarget:c})=>{R.changePetPreview(c.dataset.id)});
