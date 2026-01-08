import{j as e}from"./iframe-FIXwCEf7.js";import"./preload-helper-D9Z9MdNV.js";function n({error:r}){return e.jsx("div",{id:"primary",className:"content-area",children:e.jsx("main",{id:"main",className:"site-main",children:e.jsx("section",{className:"error-404 not-found",children:e.jsxs("div",{className:"page-content container",children:[r.status&&e.jsx("p",{className:"h1 mt-4 error-title",children:r.status}),r.message&&e.jsx("h1",{className:"h3 text-center",children:r.message}),!r.message&&e.jsx("h1",{className:"h3 text-center",children:"Server error please try again"})]})})})})}try{n.displayName="Error",n.__docgenInfo={description:"",displayName:"Error",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"ErrorInnerProps"}}}}}catch{}const m={title:"Molecules/Error",component:n,tags:["docsPage"]},s={args:{error:{status:404,message:"Oops the page can not be found"}}},a={args:{error:{status:403,message:"Forbidden. Please contact the admin"}}},t={args:{error:{status:503,message:"Server error. Please try again or contact the admin."}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      status: 404,
      message: "Oops the page can not be found"
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      status: 403,
      message: "Forbidden. Please contact the admin"
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      status: 503,
      message: "Server error. Please try again or contact the admin."
    }
  }
}`,...t.parameters?.docs?.source}}};const i=["Status404","Status403","Status503"];export{a as Status403,s as Status404,t as Status503,i as __namedExportsOrder,m as default};
