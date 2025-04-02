var vt=Object.defineProperty;var It=(c,e,t)=>e in c?vt(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var o=(c,e,t)=>(It(c,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(a){if(a.ep)return;a.ep=!0;const d=t(a);fetch(a.href,d)}})();const ft={default:"/src/assets/sprites/catricio/catricio-1.png",grab:"/src/assets/sprites/catricio/catricio-2.png"},U="/src/assets/sprites/upgrades",J=[{type:"tomato_ball",target:"catomato",name:"Bola de tomate",description:"Uma bola identica a um tomate, os gatos adoram brincar com ela, ele corre bastante pra pega-la aumentando sua velocidade em 20%",price:250,spritPath:`${U}/tomato_ball.png`,increment:1.2},{type:"tomato_rice",target:"catomato",name:"Comida de gato",description:"Um tipo de comida especial para gatos tomates, eles ficam satisfeitos por mais tempo aumentando a geração de love em 10%",price:2500,spritPath:`${U}/tomato_rice.png`,increment:1.1},{type:"tomato_toy",target:"catomato",name:"Brinquedo de tomate",description:"Todos os seus gatos tomates adoram esse brinquedo, para cada gato tomate que você tem, você ganha 1% de geração de love a mais",price:25e3,spritPath:`${U}/tomato_toy.png`,increment:1.01},{type:"butter",target:"breadoggo",name:"Manteiga",description:"Uma manteiga especial para cachorros pães, CHEGA A MANTEIGA DERRETE, aumentando a geração de love em 20%",price:2500,spritPath:`${U}/butter.png`,increment:1.2},{type:"buttery_bone",target:"breadoggo",name:"Osso Amanteigado",description:"Um osso delicinha para os seus cachorros pães, eles são totalmente atraidos por ele, aumentando a sua velocidade em 10%",price:25e3,spritPath:`${U}/buttery_bone.png`,increment:1.1},{type:"catricio_fan",target:"catricio",name:"Fã do Catricio",description:"Você gosta tanto do Catricio que faz o melhor cafuné do mundo dobrando seu love por Carinho",price:100,increment:2},{type:"pet_lover",target:"catricio",name:"Amante de Pets",description:"Você ama tanto seus pets que eles ficam mais felizes com você, aumentando seu love por Carinho para cada pet que você tem em 1",price:1e3,increment:1}],K=()=>{const c=(l,h)=>Math.random()<.5?l:h,e=()=>Math.random().toString(36).substring(2,9),t=(l,h)=>!l||!h?!1:Object.keys(l).every(v=>l[v]===h[v])&&Object.keys(h).every(v=>l[v]===h[v]),r=(l,h)=>({x:Math.random()*l,y:Math.random()*h}),a=async l=>new Promise((h,v)=>{const I=new Image;I.src=l,I.onload=()=>{const C=I.naturalWidth*5,w=I.naturalHeight*5;d(I,C,w).then(A=>{const T=document.createElement("canvas"),i=T.getContext("bitmaprenderer");T.width=A.width,T.height=A.height,i.transferFromImageBitmap(A),T.toBlob(g=>h({blob:g,width:C,height:w,url:URL.createObjectURL(g)}))})},I.onerror=v}),d=async(l,h,v)=>await createImageBitmap(l,{resizeWidth:h,resizeHeight:v,resizeQuality:"pixelated"}),p=(l,h)=>l.filter(v=>v.state.type===h),S=l=>Math.ceil(Math.round(l*100))/100;return{randomFlip:c,uuid:e,isSameObject:t,getRandomPosition:r,createBitmapImage:d,createSprite:a,filterPetsByType:p,roundUp:S,getPetPrice:(l,h)=>{const v=h.INCREMENT_PET_BUY+1,I=p(l,h.TYPE).reduce(C=>v*C,h.PRICE);return Math.floor(S(I))},sortByAsc:(l,h)=>l>h?1:l<h?-1:0}},L=class{constructor(e,t,r=K){o(this,"utils",null);o(this,"ctx",null);o(this,"filterColor",null);o(this,"canvas",null);o(this,"collisionCount",0);o(this,"gameInstance",null);o(this,"gameCanvasInstance",null);o(this,"bitmapImage",null);o(this,"state",{id:null,name:"",type:"",spritePath:"",width:0,height:0,sprite:null,position:{x:0,y:0},speed:{x:0,y:0},score:0,spriteDirection:null,improvements:[],description:""});this.utils=r(),this.gameInstance=e,this.gameCanvasInstance=e.canvasState,this.setInitialState(t),this.createSprite(),this.state.improvements.forEach(a=>this.setBonusTimeout(a))}setInitialState({name:e,type:t,width:r,height:a,position:d,scoreIncrement:p,speed:S,spriteDirection:F,sprite:N,spritePath:l,improvements:h,score:v,description:I}){Object.assign(this.state,{name:e,type:t,id:this.createId(),scoreIncrement:p??L.DEFAULT_SCORE_INCREMENT,bonusMultiplier:L.BONUS_MULTIPLIER,speed:this.getSpeed(S),direction:{x:this.utils.randomFlip(1,-1),y:this.utils.randomFlip(1,-1)},width:r??this.gameInstance.sprites.pets[t].width,height:a??this.gameInstance.sprites.pets[t].height,sprite:N??this.gameInstance.sprites.pets[t].blob,position:this.getPosition(d),spriteDirection:F??null,spritePath:l,improvements:h??[],score:v??0,description:I??""})}createSprite(){this.utils.createBitmapImage(this.state.sprite,this.state.width,this.state.height).then(e=>{this.bitmapImage=e,this.createImageCanvas()})}getInfo(){return this.state}getSpeed({x:e=L.DEFAULT_SPEED_X,y:t=L.DEFAULT_SPEED_Y}={}){return{x:e,y:t}}getPosition({x:e=500,y:t=500}={}){return{x:e,y:t}}createId(){const e=this.utils.uuid();return this.gameInstance.pets.some(t=>t.state.id===e)?this.createId():e}move(){this.canvas&&(this.incrementPosition(),this.checkCollision(),this.dispachScore(),this.render(),this.collisionCount=0)}incrementPosition(){const{incrementX:e,incrementY:t}=this.getIncrementSpeed();this.state.position.x+=e,this.state.position.y+=t}getIncrementSpeed(){const e=100/this.gameInstance.fps,t=this.getBonusIncrementSpeed(),r=this.state.speed.x*this.state.direction.x*e*t,a=this.state.speed.y*this.state.direction.y*e*t;return{incrementX:r,incrementY:a}}getBonusIncrementSpeed(){return this.hasBonus()?L.BONUS_MULTIPLIER_SPEED:1}createImageCanvas(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.ctx.imageSmoothingEnabled=!1,this.canvas.width=this.state.width,this.canvas.height=this.state.height,this.renderImage()}renderImage(){const{spriteDirection:e,direction:t}=this.state;this.clearImage(),e&&t.x!==e?this.invertImageDirection():this.ctx.drawImage(this.bitmapImage,0,0)}clearImage(){this.ctx.clearRect(0,0,this.state.width,this.state.height)}invertImageDirection(){this.ctx.save(),this.ctx.scale(-1,1),this.ctx.drawImage(this.bitmapImage,this.state.width*-1,0),this.ctx.scale(1,1),this.ctx.restore()}render(){(this.collisionCount>0||this.hasBonus())&&(this.renderImage(),this.applyColorFilter(this.getRandomColor())),this.gameCanvasInstance.ctx.drawImage(this.canvas,this.state.position.x,this.state.position.y)}hasBonus(){return this.state.improvements.some(({type:e})=>e==="bonus")}getRandomColor(){const e={r:this.utils.randomFlip(0,1),g:this.utils.randomFlip(0,1),b:this.utils.randomFlip(0,1)};return Object.values(e).every(r=>r===0)||this.utils.isSameObject(e,this.filterColor)?this.getRandomColor():(this.filterColor=e,e)}applyColorFilter({r:e,g:t,b:r}){const a=new Path2D;a.rect(0,0,this.state.width,this.state.height),this.ctx.clip(a);const d=this.ctx.getImageData(0,0,this.state.width,this.state.height);for(let p=0;p<d.data.length;p+=4)d.data[p+3]>0&&(d.data[p]*=e,d.data[p+1]*=t,d.data[p+2]*=r);this.ctx.putImageData(d,0,0)}setScoreIncrement(e){this.state.scoreIncrement=e}setSpeed(e){Object.assign(this.state.speed,e)}setPosition(e){Object.assign(this.state.position,e)}remove(){this.gameInstance.pets=this.gameInstance.pets.filter(e=>e.state.id!==this.state.id)}dispachScore(){if(this.collisionCount===1){const e=this.utils.roundUp(this.state.scoreIncrement*this.getBonusScoreIncrement());this.gameInstance.incrementScore(e,"pet",this.state),this.state.score+=e}if(this.collisionCount===2){const e=this.getBonusScoreIncrement(),t=this.utils.roundUp(this.state.scoreIncrement*this.state.bonusMultiplier*e);this.gameInstance.incrementScore(t,"pet",this.state),this.state.score+=t,this.setSpecialBonus()}}setSpecialBonus(){const e={time:1e4,increment:10,type:"bonus"};this.state.improvements.push(e),this.setBonusTimeout(e)}setBonusTimeout(e){setTimeout(()=>this.state.improvements.shift(),e.time)}getBonusScoreIncrement(){return this.state.improvements.reduce((e,t)=>e*t.increment,1)}checkCollision(){const{x:e,y:t}=this.state.position,{width:r,height:a}=this.state,{width:d,height:p}=this.gameCanvasInstance;e+r>=d&&(this.state.direction.x*=-1,this.state.position.x=d-r,this.collisionCount++),e<=0&&(this.state.direction.x*=-1,this.state.position.x=0,this.collisionCount++),t+a>=p&&(this.state.direction.y*=-1,this.state.position.y=p-a,this.collisionCount++),t<=0&&(this.state.direction.y*=-1,this.state.position.y=0,this.collisionCount++)}};let u=L;o(u,"DEFAULT_WIDTH",150),o(u,"DEFAULT_HEIGHT",150),o(u,"DEFAULT_SPEED_X",4),o(u,"DEFAULT_SPEED_Y",3),o(u,"DEFAULT_SCORE_INCREMENT",1),o(u,"SPRIT_LEFT_DIRECTION",-1),o(u,"SPRIT_RIGHT_DIRECTION",1),o(u,"BONUS_MULTIPLIER",100),o(u,"BONUS_MULTIPLIER_SPEED",1.5),o(u,"BASE_SPRITE_PATH","/src/assets/sprites/pets"),o(u,"INCREMENT_PET_BUY",.2);const G=class extends u{constructor(e,t,r){const a={...t,name:"Catomato",description:"um lindo gatinho em formato de tomate, muito poderoso",type:G.TYPE,spriteDirection:u.SPRIT_LEFT_DIRECTION,spritePath:G.SPRITE_PATH};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((d,p)=>this.getBonusIncrement(p)*d,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="tomato_ball"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){if((e==null?void 0:e.type)==="tomato_rice")return e.increment;if((e==null?void 0:e.type)==="tomato_toy"){const t=this.gameInstance.pets.filter(r=>r.state.type==="catomato");return e.increment*t.length}return 1}};let B=G;o(B,"SPRITE_PATH",`${u.BASE_SPRITE_PATH}/catomato.png`),o(B,"NAME","Catomato"),o(B,"PRICE",25),o(B,"TYPE","catomato");const W=class extends u{constructor(e,t,r){const a={...t,name:"Cachorrinho",description:"?????????????????????????????????????????????????????????????",type:W.TYPE,spritePath:W.SPRITE_PATH,spriteDirection:u.SPRIT_LEFT_DIRECTION};super(e,a,r)}};let O=W;o(O,"SPRITE_PATH",`${u.BASE_SPRITE_PATH}/scarry_dog.webp`),o(O,"NAME","Cachorrinho"),o(O,"PRICE",666),o(O,"TYPE","scarry_dog");const H=class extends u{constructor(e,t,r){const a={...t,name:"DogPao",description:"um lindo pao em formato de sabor cachorro, muito delicioso",type:H.TYPE,spriteDirection:u.SPRIT_LEFT_DIRECTION,spritePath:H.SPRITE_PATH,scoreIncrement:H.DEFAULT_SCORE_INCREMENT};super(e,a,r)}getIncrementSpeed(){const e=this.gameInstance.improvements,{incrementX:t,incrementY:r}=super.getIncrementSpeed(),a=e.reduce((d,p)=>this.getBonusIncrement(p)*d,1);return{incrementX:t*a,incrementY:r*a}}getBonusIncrement(e){return e.type==="buttery_bone"?e.increment:1}getBonusScoreIncrement(){return this.gameInstance.improvements.reduce((r,a)=>this.getBonusScore(a)*r,super.getBonusScoreIncrement())}getBonusScore(e){return(e==null?void 0:e.type)==="butter"?e.increment:1}};let x=H;o(x,"SPRITE_PATH",`${u.BASE_SPRITE_PATH}/breadoggo.png`),o(x,"NAME","Breadoggo"),o(x,"PRICE",250),o(x,"DEFAULT_SCORE_INCREMENT",5),o(x,"TYPE","breadoggo");const Y=class extends u{constructor(e,t,r){const a={...t,name:"Dripturtle",description:"uma tartaruga muito ameaçadora, que drip!",type:Y.TYPE,spriteDirection:u.SPRIT_LEFT_DIRECTION,spritePath:Y.SPRITE_PATH,scoreIncrement:Y.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};let P=Y;o(P,"SPRITE_PATH",`${u.BASE_SPRITE_PATH}/dripturtle.png`),o(P,"NAME","Dripturtle"),o(P,"PRICE",500),o(P,"DEFAULT_WIDTH",170),o(P,"DEFAULT_HEIGHT",150),o(P,"DEFAULT_SCORE_INCREMENT",10),o(P,"TYPE","dripturtle");const j=class extends u{constructor(e,t,r){const a={...t,name:"Bananhamster",description:"igual a todas as bananas do mundo",type:j.TYPE,spriteDirection:u.SPRIT_LEFT_DIRECTION,spritePath:j.SPRITE_PATH,scoreIncrement:j.DEFAULT_SCORE_INCREMENT};super(e,a,r)}};let y=j;o(y,"SPRITE_PATH",`${u.BASE_SPRITE_PATH}/bananamster.png`),o(y,"NAME","Bananhamster"),o(y,"PRICE",1250),o(y,"DEFAULT_WIDTH",130),o(y,"DEFAULT_HEIGHT",150),o(y,"DEFAULT_SCORE_INCREMENT",25),o(y,"TYPE","bananamster");const X={scarry_dog:O,catomato:B,breadoggo:x,dripturtle:P,bananamster:y},Et=c=>{const e=K(),t=()=>`
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
        `,p=i=>{var g,E,D,q;return`
            <div id="pet-photo">
                ${i?`<img draggable="false" src="${(g=c.sprites.pets[i.state.type])==null?void 0:g.url}" />`:"???"}
            </div>
            <div id="pet-attributes">
                <p id="pet-name">[${i?(E=i==null?void 0:i.state)==null?void 0:E.name:"seu pet aqui"}]</p>
                <p id="pet-personal-stats">${(D=i==null?void 0:i.state)!=null&&D.description?(q=i==null?void 0:i.state)==null?void 0:q.description:"as informações do seu pet aparecerá aqui"}</p>
            </div>
        `},S=()=>c.pets.reduce((i,g)=>{const E=i.findIndex(D=>D.state.name===g.state.name);return E!==-1?i[E].count++:i.push({...g,count:1}),i},[]).map(i=>`
                    <div id="pet-item" data-id=${i.state.id}>
                        <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
                    </div>
                `).join(""),F=i=>{var g;return`
            <div id="pet-item" data-id=${((g=i==null?void 0:i.state)==null?void 0:g.id)??""}>
                <img draggable="false" src="${c.sprites.pets[i.state.type].url}" />
            </div>
        `},N=()=>`
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
                        ${S()}
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
                    ${v()}
                </div>
                <div shop-nav-content id="improvements" class="d-none flex-column">
                    ${A()}
                </div>
            </div>
        `,v=()=>Object.values(X).filter(i=>i.TYPE!=="scarry_dog").sort((i,g)=>e.sortByAsc(i.PRICE,g.PRICE)).map(i=>w(i)).join(""),I=i=>{$(`[data-pet-type="${i.TYPE}"]`).closest("#shop-item").replaceWith(w(i))},C=i=>{$(`[data-improvement-type="${i.type}"]`).closest("#shop-item").replaceWith(T(i,!0))},w=i=>`
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
        `,A=()=>J.sort((i,g)=>e.sortByAsc(i.price,g.price)).map(i=>{const g=c.improvements.some(({type:E})=>E===i.type);return T(i,g)}).join(""),T=(i,g=!1)=>{const E=i.target==="catricio"?c.sprites.catricio.default:c.sprites.improvements[i.type];return`
            <div id="shop-item" class="${g?"disabled":""}">
                <div class="card" data-improvement-type="${i.type}" title="Comprar">
                    <div class="card-body d-flex px-2">
                        <div class="shop-pet-img">
                            <img draggable="false" class="img-fluid" src="${E.url}" />
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
        `};return{renderLayout:N,renderShop:l,updateShopItem:I,updateImprovementItem:C,addOwnedPet:F,renderCardInfo:p}},St=(c,e=K)=>{const t={fps:75,pets:[],score:0,container:null,improvements:[],sprites:{pets:{},catricio:{},improvements:{}},canvasState:{width:0,height:0,ctx:null,canvas:null,container:null,backgroundColor:"#000000"}},r=e(),a=Et(t),d=s=>{Object.assign(t,s)},p=()=>{const s=document.getElementById("canvas");S({container:s,width:s.offsetWidth,height:s.offsetHeight})},S=s=>{Object.assign(t.canvasState,s)},F=()=>{const s=document.createElement("canvas"),n=s.getContext("2d",{willReadFrequently:!0});t.canvasState.container.appendChild(s),S({canvas:s,ctx:n}),h()},N=()=>{let s=0;const n=()=>{const m=Date.now();m-s>1e3/t.fps&&(l(),s=m),requestAnimationFrame(n)};requestAnimationFrame(n)},l=()=>{const{ctx:s,width:n,height:m,backgroundColor:f}=t.canvasState;s.fillStyle=f,s.fillRect(0,0,n,m),t.pets.forEach(R=>R.move())},h=()=>{const{canvas:s,width:n,height:m}=t.canvasState;s.width=n,s.height=m},v=()=>{new ResizeObserver(()=>{p(),h(),C()}).observe(t.canvasState.container)},I=(s,n)=>{const{x:m,y:f}=r.getRandomPosition(s,n);return t.pets.some(({state:_})=>_.position.x===m&&_.position.y===f)?I(s,n):{x:m,y:f}},C=()=>{t.pets.forEach(s=>{const n=t.canvasState.width-t.sprites.pets[s.state.type].width,m=t.canvasState.height-t.sprites.pets[s.state.type].height;s.setPosition(I(n,m))})},w=s=>{const n=X[s],m=r.getPetPrice(t.pets,n),f=t.canvasState.width-t.sprites.pets[s].width,R=t.canvasState.height-t.sprites.pets[s].height;if(!n||t.score<m)return;const _=!!t.pets.find(V=>V.state.type===n.TYPE),M=new n(t,{position:I(f,R)});k(-m),i(M),_||$("#owned-pets").append(a.addOwnedPet(M)),a.updateShopItem(n),z()},A=s=>{const n=J.find(m=>m.type===s);T(n)||(k(-n.price),t.improvements.push({...n}),a.updateImprovementItem(n),z())},T=s=>!s||t.score<s.price||t.improvements.some(({type:n})=>s.type===n),i=s=>{t.pets.some(m=>m.state.id===s.state.id)||t.pets.push(s)},g=()=>{const n=t.improvements.filter(({target:m})=>m==="catricio").reduce((m,f)=>q(m,f),1);k(n)},E=s=>{const n=t.pets.find(m=>m.state.id===s);n&&($("#card-pet-info").empty(),$("#card-pet-info").append(a.renderCardInfo(n)))},D=s=>{const{name:n,type:m,improvements:f,score:R,width:_,height:M}=s,V=X[m];i(new V(t,{name:n,type:m,score:R,improvements:f,position:I(_,M)}))},q=(s,n)=>n.type==="catricio_fan"?s*n.increment:n.type==="pet_lover"?s+t.pets.length*n.increment:s,k=(s,n,m)=>{t.score+=s,Z(),z()},Z=()=>{const s=document.getElementById("points");s.innerHTML=Math.floor(t.score)},z=()=>{const s={improvements:t.improvements,pets:t.pets.map(n=>et(n)),score:t.score};localStorage.setItem("game-state",JSON.stringify(s))},tt=()=>{const s=JSON.parse(localStorage.getItem("game-state"));s&&(t.score=s.score,t.improvements=s.improvements,s.pets.forEach(n=>D(n)))},et=s=>{const{name:n,type:m,improvements:f,score:R,width:_,height:M}=s.getInfo();return{name:n,type:m,improvements:f,score:R,width:_,height:M}},st=()=>t.pets,it=s=>t.pets.find(n=>n.state.id===s),nt=()=>{t.incrementScore=k,t.buyPet=w,t.getPets=st,t.findPet=it,t.insertPet=i,t.changeToFullScreen=ot,t.resetFullScreen=rt,t.toggleShop=ct,t.shopIsOpen=Q,t.buyImprovement=A,t.dispachClick=g,t.changePetPreview=E,t.dispatchClick=g},at=()=>{t.container.innerHTML=a.renderLayout()},ot=()=>{if(Q())return;const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform=`translateX(${-s.offsetWidth}px)`,n.style.transform=`translateX(${n.offsetWidth}px)`,t.canvasState.container.style.width="100%"},rt=()=>{const s=document.getElementById("game-score"),n=document.getElementById("pet-infos");s.style.transform="translateX(0px)",n.style.transform="translateX(0px)",t.canvasState.container.style.width="50%"},Q=()=>!document.getElementById("shop").classList.contains("hidden"),ct=()=>{const s=document.getElementById("shop");$("#pet-infos").toggle("hidden"),s.classList.toggle("hidden")},dt=async()=>{await Promise.all(Object.entries(X).map(([s,n])=>ut(s,n)))},mt=async()=>{await Promise.all(J.filter(s=>s.spritPath).map(s=>pt(s)))},pt=async s=>await r.createSprite(s.spritPath).then(n=>t.sprites.improvements[s.type]=n),lt=async()=>{await Promise.all(Object.entries(ft).map(([s,n])=>ht(s,n)))},ht=async(s,n)=>await r.createSprite(n).then(m=>t.sprites.catricio[s]=m),ut=async(s,n)=>await r.createSprite(n.SPRITE_PATH).then(m=>t.sprites.pets[s]=m),gt=async()=>{await Promise.all([dt(),lt(),mt()])};return(()=>{d({container:c}),gt().then(()=>{tt(),at(),p(),F(),nt(),v(),N()})})(),t},b=St(document.getElementById("app"));$("body").on("click","#catricio",()=>b.dispatchClick(1,"normal"));$("body").on("click","#shop-button",()=>b.toggleShop());$("body").on("click","[data-pet-type]",({currentTarget:c})=>b.buyPet(c.dataset.petType));$("body").on("mousedown","#catricio",({currentTarget:c})=>{const e=c.querySelector("img");e.src=b.sprites.catricio.grab.url});$("body").on("mouseup",()=>{const c=document.querySelector("#catricio img");c.src=b.sprites.catricio.default.url});$("body").on("click","[data-improvement-type]",({currentTarget:c})=>b.buyImprovement(c.dataset.improvementType));$("body").on("mouseleave",()=>{let c=setTimeout(()=>b.changeToFullScreen(),1e4);$("body").on("mouseenter",()=>{clearTimeout(c),b.resetFullScreen(),$("body").off("mouseenter")})});$("body").on("click","[data-nav]",({currentTarget:c})=>{const{nav:e}=c.dataset;$("[data-nav]").removeClass("active"),$(`[data-nav=${e}]`).addClass("active"),$("[shop-nav-content]").addClass("d-none").removeClass("d-flex"),$(`#${e}`).removeClass("d-none").removeClass("d-flex")});$("body").on("click","#pet-item",({currentTarget:c})=>{b.changePetPreview(c.dataset.id)});
