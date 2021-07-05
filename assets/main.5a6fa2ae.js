var t=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,s=(t,e)=>{for(var o in e||(e={}))i.call(e,o)&&l(t,o,e[o]);if(n)for(var o of n(e))r.call(e,o)&&l(t,o,e[o]);return t};import{T as a,o as u,a as d,i as c,c as p,b as v,r as b,h as w,n as $}from"./vendor.640289d1.js";const m=t=>{var e,o,n,i,r;return a` <mwc-icon-button
    @click=${()=>t.callback()}
    slot=${null!=(e=null==t?void 0:t.slot)?e:""}
    action=${null!=(o=null==t?void 0:t.action)?o:""}
    type=${null!=(n=null==t?void 0:t.type)?n:""}
    form=${null!=(i=null==t?void 0:t.form)?i:""}
    icon=${null!=(r=t.icon)?r:""}
  >
  </mwc-icon-button>`},y=(t,e="menu")=>m({icon:e,slot:"navigationIcon",callback:()=>t()}),h=(t,e)=>m({icon:t,slot:"actionItems",callback:()=>e()}),f=t=>{return(t=>{var e,o,n;return a`
    <mwc-drawer hasHeader type="modal" ?open=${null!=(e=null==t?void 0:t.open)&&e}>
      ${(null==t?void 0:t.title)?a` <span slot="title">${t.title}e</span>`:""}
      ${(null==t?void 0:t.subtitle)?a` <span slot="subtitle">${t.subtitle}e</span>`:""}
      <div>${null!=(o=null==t?void 0:t.drawerContent)?o:""}</div>
      <div slot="appContent">${null!=(n=null==t?void 0:t.appContent)?n:""}</div>
    </mwc-drawer>
  `})({appContent:(e={title:t.title,navigation:y((()=>(t=>{const e=t.querySelector("mwc-drawer");e.open=!e.open})(t.root))),content:t.body(),actions:t.actions?t.actions:g},a` <mwc-top-app-bar-fixed>
    ${null!=(o=null==e?void 0:e.navigation)?o:""}
    <div slot="title">${null!=(n=null==e?void 0:e.title)?n:"TODOS"}</div>
    ${null!=(i=null==e?void 0:e.actions)?i:""}
    <div>${null!=(r=null==e?void 0:e.content)?r:""}</div>
  </mwc-top-app-bar-fixed>`)});var e,o,n,i,r},g=[],O=(t,e,o="")=>{const n=t.querySelector(`#${e}`).value;return n.length>0?n:o},j=a`<span>Loading...</span>`,q=(t,e,o=j)=>{const n=t.then((t=>e(t)));return a`${u(n,o)}`};function N(t){var e,o,n;return{title:t.title,description:null!=(e=null==t?void 0:t.description)?e:t.title,version:null!=(o=null==t?void 0:t.version)?o:0,keyCompression:null==(n=null==t?void 0:t.keyCompression)||n,type:"object",properties:s({id:{type:"string",primary:!0}},t.properties),required:["id",...Object.entries(t.properties).filter((t=>{const[e,o]=t;return o.required})).map((t=>{const[e,o]=t;return e}))]}}const k={},C={};const D={schema:N({title:"todos",properties:{title:{type:"string"}}}),methods:k,statics:C};var P;d(c);const S=(t,e=j)=>q(async function(){return P||(P=await p({name:"todosdb",adapter:"idb"}),await P.addCollections({todos:D}),P)}(),(e=>t(e)),e);var I=Object.defineProperty,x=Object.getOwnPropertyDescriptor,T=(t,e,o,n)=>{for(var i,r=n>1?void 0:n?x(e,o):e,l=t.length-1;l>=0;l--)(i=t[l])&&(r=(n?i(e,o,r):i(r))||r);return n&&r&&I(e,o,r),r};let U=class extends w{constructor(){super(...arguments),this.showNew=!1}render(){return S((t=>(t.todos.$.subscribe((()=>{this.requestUpdate()})),f({title:"TODOS",root:this.shadowRoot,actions:[h("delete",(async()=>{await t.todos.remove(),this.requestUpdate()})),h("add",(async()=>{this.showNew=!this.showNew}))],body:()=>a`
            ${((t,e,o=j)=>q(t.exec(),(t=>e(t)),o))(t.todos.find(),(e=>{return Array.isArray(e)?(n=e=>this.buildItem(t,e),a` <ul>
    ${null==(o=e)?void 0:o.map(((t,e)=>a`<li>${n(t,e)}</li>`))}
  </ul>`):this.buildItem(t,e);var o,n}))}
            ${(t=>{var e;return a`<mwc-dialog
    ?open=${null!=(e=null==t?void 0:t.open)&&e}
    heading="${t.title}"
    @closed=${e=>t.dismiss(e.target)}
  >
    <div>${t.content()}</div>
  </mwc-dialog>`})({title:"New Todo",open:this.showNew,dismiss:()=>{this.showNew&&(this.showNew=!1)},content:()=>{return a`
                  ${e=a` ${((t,e,o)=>{var n,i;return a`
    <div>
      <label for="${t}">${e}</label><br />
      <input
        id="${t}"
        type="${null!=(n=null==o?void 0:o.type)?n:"text"}"
        ?required=${null!=(i=null==o?void 0:o.required)&&i}
      />
    </div>
  `})("title","Title",{required:!0})} `,o=async e=>{await t.todos.insert({id:`${Date.now()}`,title:O(e,"title")}),this.showNew=!1},a`<form
    @submit=${t=>{t.preventDefault();const e=t.currentTarget;o(e)}}
  >
    ${e} <br />
    <input type="submit" value="Submit" />
  </form>`}
                `;var e,o}})}
          `}))))}buildItem(t,n){return a` <div>
      <input
        .value=${n.title}
        @change=${async i=>{const r=i.target.value;var l,a;await t.todos.upsert((l=s({},n.toJSON()),a={title:r},e(l,o(a)))),this.requestUpdate()}}
      />
      <button
        @click=${async()=>{await n.remove(),this.requestUpdate()}}
      >
        Delete
      </button>
    </div>`}};U.styles=v``,T([b()],U.prototype,"showNew",2),U=T([$("todo-view")],U);
