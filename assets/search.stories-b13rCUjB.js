import{j as r}from"./iframe-C7IqK5wC.js";import{S as i,a as l}from"./index-DYBvEpOb.js";import"./preload-helper-D9Z9MdNV.js";/* empty css                 */const n={title:"Molecules/Search",tags:["docsPage"]},a={render:e=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem",minHeight:"60px"},children:r.jsx(i,{...e})}),args:{action:"#",placeholder:"Search",label:"Search the site",submitLabel:"Submit",onSubmit:e=>{}},parameters:{viewport:{defaultViewport:"desktop"}}},t={render:e=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem",minHeight:"60px"},children:r.jsx(i,{...e})}),args:{placeholder:"Search the site",label:"Search",submitLabel:"Go"},parameters:{viewport:{defaultViewport:"desktop"}}},s={render:e=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem",minHeight:"60px"},children:r.jsx(l,{...e})}),args:{action:"#",placeholder:"Search",label:"Search the site",toggleLabel:"Show / hide search form",closeLabel:"Hide search form",onSubmit:e=>{},onToggle:e=>{}},parameters:{viewport:{defaultViewport:"mobile"}}},o={render:e=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem",minHeight:"60px"},children:r.jsx(l,{...e})}),args:{placeholder:"Search",toggleLabel:"Show / hide search form",closeLabel:"Hide search form"},parameters:{viewport:{defaultViewport:"mobile"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minHeight: '60px'
  }}>
      <Search {...args} />
    </div>,
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    submitLabel: "Submit",
    onSubmit: (query: string) => {
      // Handle search query
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Classic desktop search: dropdown with search form (visible from xl breakpoint)",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minHeight: '60px'
  }}>
      <Search {...args} />
    </div>,
  args: {
    placeholder: "Search the site",
    label: "Search",
    submitLabel: "Go"
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minHeight: '60px'
  }}>
      <SearchMobile {...args} />
    </div>,
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form",
    onSubmit: (query: string) => {
      // Handle search query
    },
    onToggle: (open: boolean) => {
      // Toggle handler
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Mobile search: form with toggle and close (visible below xl breakpoint)",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    minHeight: '60px'
  }}>
      <SearchMobile {...args} />
    </div>,
  args: {
    placeholder: "Search",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form"
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["Classic","ClassicCustomLabels","Mobile","MobileCustomLabels"];export{a as Classic,t as ClassicCustomLabels,s as Mobile,o as MobileCustomLabels,h as __namedExportsOrder,n as default};
