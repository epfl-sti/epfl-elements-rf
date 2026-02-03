import{j as e}from"./iframe-veTx4RId.js";/* empty css                 */import"./preload-helper-D9Z9MdNV.js";function n({picture:a,children:d,link:r}){const o=()=>e.jsxs("div",{className:"card",children:[a&&e.jsx("picture",{className:"card-img-top",children:e.jsx("img",{src:a.src,className:"img-fluid",title:a.title,alt:a.alt})}),e.jsx("div",{className:"card-body",children:d})]}),p=()=>e.jsxs("a",{href:r,className:"card link-trapeze-horizontal",children:[a&&e.jsx("picture",{className:"card-img-top",children:e.jsx("img",{src:a.src,className:"img-fluid",title:a.title,alt:a.alt})}),e.jsx("div",{className:"card-body",children:d})]});return e.jsxs(e.Fragment,{children:[r&&p(),!r&&o()]})}try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{picture:{defaultValue:null,description:"",name:"picture",required:!1,type:{name:"PictureProps"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Molecules/Card",component:n,tags:["docsPage"]},m={render:({items:a,wrapperClass:d})=>e.jsx("div",{className:d,children:a.map(r=>e.jsx(n,{...r}))})},s={picture:{src:"https://epfl-si.github.io/elements/images/styleguide/event_teaser.png",title:"Event placeholder",alt:"event teaser image"},children:e.jsx("p",{children:"This is a test card"})},t={};t.args={...s};const c={};c.args={...s,link:"https://epfl-si.github.io/elements/#/molecules/card"};const l={...m,args:{items:[s,s,s,s],wrapperClass:"card-deck"}},i={...m,args:{items:[s,s,s,s],wrapperClass:"card-deck mini-cards"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...MultipleCardsTemplate,
  args: {
    items: [baseSampleCard, baseSampleCard, baseSampleCard, baseSampleCard],
    wrapperClass: "card-deck"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...MultipleCardsTemplate,
  args: {
    items: [baseSampleCard, baseSampleCard, baseSampleCard, baseSampleCard],
    wrapperClass: "card-deck mini-cards"
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","WithLink","InCardDeck","InMiniCardDeck"];export{t as Default,l as InCardDeck,i as InMiniCardDeck,c as WithLink,x as __namedExportsOrder,h as default};
