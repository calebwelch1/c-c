import{B as h}from"./BlogHeader.12f668a7.js";import{_ as g,o as n,c,b as s,F as m,f as u,n as d,t as _,a as p,u as b,e as y}from"./index.69e938a7.js";/* empty css                                                   */var v="/c-c/assets/code-box-html.4953e736.jpg",x="/c-c/assets/code-box-css-1.863c6a13.jpg",f="/c-c/assets/code-box-css-2.a374251b.jpg",w="/c-c/assets/code-box-js-1.05cab177.jpg",S="/c-c/assets/code-box-js-2.287224b2.jpg",B="/c-c/assets/code-snippet.bd02dd16.jpg",C="/c-c/assets/copy_icon.79b064cc.svg";const T={name:"CodeBox",props:{tabsArr:{type:Array,required:!0,default:[{title:"HTML",content:`
            <div>
            some html...
            </div>`},{title:"CSS",content:`
              .some-css {
              content: "coding is fun"
              }
              `},{title:"JS",content:`
              while (coding === true) {
              return "this is awesome"
              }
              `}]},uid:{type:String,required:!1,default:"0"},width:{type:String,required:!1,default:"50vw"}},mounted(){document.getElementById(`${this.tabsArr[0].title}-button-${this.uid}`).click()},data(){return{currentTab:"",copyIcon:C}},methods:{openTab(r,o){let t,a,i;for(a=document.getElementsByClassName("tabcontent"),t=0;t<a.length;t++)a[t].style.display="none";for(i=document.getElementsByClassName("tablinks"),t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");document.getElementById(o).style.display="block",document.getElementById(`${o}-button-${this.uid}`).className+=" active",this.currentTab=o},copyText(){let r=document.getElementById(`${this.currentTab}-content`);navigator.clipboard.writeText(r.innerHTML)}}},$=["id","onClick"],k=["src"],j=["id"],A=["id"];function E(r,o,t,a,i,l){return n(),c("div",{id:"code-box",style:d(`width:${t.width};`)},[s("div",{class:"tab",style:d(`width:${t.width};`)},[(n(!0),c(m,null,u(t.tabsArr,e=>(n(),c("button",{id:`${e.title}-button-${this.uid}`,class:"tablinks",onClick:F=>l.openTab(r.event,`${e.title}`)},_(e.title),9,$))),256)),s("button",{id:"copy-button",onClick:o[0]||(o[0]=(...e)=>l.copyText&&l.copyText(...e))},[s("img",{src:i.copyIcon,class:"copy-icon"},null,8,k)])],4),(n(!0),c(m,null,u(t.tabsArr,e=>(n(),c("div",{id:`${e.title}`,class:"tabcontent",style:d(`width:${t.width};`)},[s("textarea",{id:`${e.title}-content`,style:{"white-space":"pre-wrap",width:"inherit"}},`\r
    `+_(e.content)+`\r
    `,9,A)],12,j))),256))],4)}var I=g(T,[["render",E]]);const H={class:"container hide-scroll"},L={class:"content"},N=s("h2",null," Code Snippet Box ",-1),M=s("p",null," Found on many coding forums and websites the CodeBox is a staple for quickly sharing code snippets. ",-1),q=s("p",null," Really It's just a basic tab box, with some increased utility by adding a copy button. ",-1),J=y('<h2> HTML </h2><div class="flex-col"><img src="'+v+'"></div><h2> CSS </h2><div class="flex-col"><img src="'+x+'" style="transform:scale(0.6);margin-top:0rem;margin-bottom:0rem;"><img src="'+f+'" style="transform:scale(0.6);margin-top:0rem;margin-bottom:0rem;"></div><h2> JS </h2><div class="flex-col"><img src="'+w+'" style="transform:scale(0.6);margin-top:0rem;margin-bottom:0rem;"><img src="'+S+'" style="transform:scale(0.6);margin-top:0rem;margin-bottom:0rem;"></div>',6),R={setup(r){return(o,t)=>(n(),c("div",H,[p(h,{title:"Code Box",description:"HTML/CSS/JS for the CodeBox component",img:b(B)},null,8,["img"]),s("div",L,[N,M,q,p(I,{style:{"margin-right":"2rem"},tabsArr:[{title:"HTML",content:`
          <div id="code-box">
          The most fun Div
          </div>
          `},{title:"CSS",content:`
          #code-box{
            color: white;
              margin: 15px;
              width: auto;
          }
          `},{title:"JS",content:`
          while (coding === true) {
              return "this is awesome"
              }
          `}]},null,8,["tabsArr"]),J])]))}};export{R as default};
