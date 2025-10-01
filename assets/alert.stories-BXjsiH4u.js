import{j as e}from"./iframe-DRpxYrfo.js";import{A as t}from"./index-DZ6SYAwo.js";import"./preload-helper-D9Z9MdNV.js";/* empty css                 */const d={title:"Atoms/Alert",component:t,tags:["docsPage"]},s={args:{title:"Success",message:"used to confirm a completed task or the successful submission of a form",alertType:"success",onCloseClick:()=>{console.log("The success alert was dismissed")}}},r={args:{title:"Success html",message:e.jsxs("ul",{children:[e.jsx("li",{children:"First"}),e.jsx("li",{children:"Second"}),e.jsx("li",{children:"Third"})]}),alertType:"success",onCloseClick:()=>{console.log("The success alert was dismissed")}}},n={args:{title:"Information",message:"used to display an interesting yet non-critical information",alertType:"info",onCloseClick:()=>{console.log("The info alert was dismissed")}}},o={args:{title:"Warning",message:"used for unexpected events, that people must pay attention",alertType:"warning",onCloseClick:()=>{console.log("The warning alert was dismissed")}}},a={args:{title:"Danger",message:"used for critical information: an error or the unavailability of a service",alertType:"danger",onCloseClick:()=>{console.log("The critical alert was dismissed")}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Success",
    message: "used to confirm a completed task or the successful submission of a form",
    alertType: "success",
    onCloseClick: () => {
      console.log("The success alert was dismissed");
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Success html",
    message: <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>,
    alertType: "success",
    onCloseClick: () => {
      console.log("The success alert was dismissed");
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Information",
    message: "used to display an interesting yet non-critical information",
    alertType: "info",
    onCloseClick: () => {
      console.log("The info alert was dismissed");
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Warning",
    message: "used for unexpected events, that people must pay attention",
    alertType: "warning",
    onCloseClick: () => {
      console.log("The warning alert was dismissed");
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Danger",
    message: "used for critical information: an error or the unavailability of a service",
    alertType: "danger",
    onCloseClick: () => {
      console.log("The critical alert was dismissed");
    }
  }
}`,...a.parameters?.docs?.source}}};const u=["Success","SuccessHtml","Info","Warning","Danger"];export{a as Danger,n as Info,s as Success,r as SuccessHtml,o as Warning,u as __namedExportsOrder,d as default};
