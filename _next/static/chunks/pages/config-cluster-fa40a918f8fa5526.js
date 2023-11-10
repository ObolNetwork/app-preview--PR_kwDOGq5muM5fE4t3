(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{62367:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-cluster",function(){return r(32171)}])},32171:function(e,s,r){"use strict";r.r(s);var i=r(85893),t=r(67294),a=r(87536),l=r(28014),n=r(71866),d=r(11771),o=r(2504),c=r(41518),p=r(11163),u=r(81259),v=r(95395),h=r(21237),m=r(28106),x=r(37005);let g=()=>{var e,s,r,g,f,w;let j=(0,c.o)(e=>e.clusterDefinition),{control:b,register:_,handleSubmit:C,formState:{errors:y,isDirty:A,isValid:S},resetField:k,setValue:R,trigger:$,getValues:N}=(0,a.cI)({mode:"onChange",defaultValues:{operators:u.fI,recipients:u.tT,singleAddress:"",feeRecipientAddress:"",principal:"",enr:"",name:""}}),{fields:T,append:E,remove:O}=(0,a.Dq)({control:b,name:"operators"}),{fields:P,append:z,remove:D}=(0,a.Dq)({control:b,name:"recipients"}),Q=(0,p.useRouter)(),V=(0,c.o)(e=>e.completeLeaderStep),I=(0,c.o)(e=>e.enableLeaderStep),W=(0,c.o)(e=>e.updateClusterDefinition),[F,q]=(0,t.useState)(100),{account:G}=(0,o.kR)(),[L,H]=(0,t.useState)((null==j?void 0:j.clusterSize)||u.dd),J=(0,o.D9)(L),[M,B]=(0,t.useState)((null==j?void 0:j.validatorsSize)||1),[X,Z]=(0,t.useState)((0,x.c)("split_withdrawal_flow")&&(!(null==j?void 0:j.principal)&&!(null==j?void 0:j.singleAddress)&&(null==j?void 0:null===(e=j.recipients)||void 0===e?void 0:e.every(e=>(0,h.H6)(e)))||!(0,x.c)("single_withdrawal_address_flow")&&!(0,x.c)("reward_split_withdrawal_flow"))?"splitter":(0,x.c)("reward_split_withdrawal_flow")&&((null==j?void 0:j.principal)&&!(null==j?void 0:j.singleAddress)&&(null==j?void 0:null===(s=j.recipients)||void 0===s?void 0:s.every(e=>(0,h.H6)(e)))||!(0,x.c)("single_withdrawal_address_flow"))?"reward_splitter":"single"),[K,U]=(0,t.useState)(),Y=()=>{z({address:"",split:""})},ee=e=>{D(e);let s=N().recipients.reduce((e,s)=>s.split?parseFloat(s.split)+e:e,0);q(s)},es=e=>{e.preventDefault(),R("operators.0",{address:G}),$("operators.0")},er=e=>{e.preventDefault(),R("singleAddress",G),$("singleAddress")},ei=e=>{e.preventDefault(),R("principal",G),$("principal")},et=e=>{e.preventDefault(),R("feeRecipientAddress",G),$("feeRecipientAddress")},ea=e=>{V("config-cluster"),W({...e,creator:{address:G},validatorsEthAmount:32*M,validators:Array(M).fill({feeRecipientAddress:e.feeRecipientAddress,withdrawalAddress:e.singleAddress})});let s=I("confirm-configuration");Q.push(s.href)};return(0,t.useEffect)(()=>{X&&(k("singleAddress"),k("feeRecipientAddress"),k("principal"),k("recipients"),W({...j,validators:[]}))},[X]),(0,t.useEffect)(()=>{if(L){let e=(0,h.zT)(L);U(e)}J&&J<L&&E({address:""},{shouldFocus:!1}),J&&J>L&&O(L-1)},[J,L]),(0,t.useEffect)(()=>{R("singleAddress",null==j?void 0:j.singleAddress),R("feeRecipientAddress",null==j?void 0:j.feeRecipientAddress),R("enr",null==j?void 0:j.enr),R("name",null==j?void 0:j.name),R("principal",null==j?void 0:j.principal),(null==j?void 0:j.operators)&&R("operators",null==j?void 0:j.operators),(null==j?void 0:j.recipients)&&R("recipients",null==j?void 0:j.recipients)},[]),(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(l.xv,{variant:"h3",children:"Configure Cluster"}),(0,i.jsx)(n.l0,{onSubmit:C(ea),children:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(l.W2,{className:"cluster-details",alignItems:"start",children:(0,i.jsx)(m.PQ,{register:_,clusterSize:L,setClusterSize:H,control:b,min:u.dd})}),(0,i.jsxs)(l.W2,{className:"cluster-operators",alignItems:"start",children:[(0,i.jsx)(l.xv,{variant:"h4",children:"Node Operators"}),T.map((e,s)=>{var r,t,a;return(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm","& div > input":{color:"$obolGreen"}},children:[(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsxs)(l.kC,{css:{gap:"$sm",justifyContent:"space-between"},children:[(0,i.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Operator ".concat(s+1,"/").concat(L)}),0===s&&(0,i.jsx)(l.zx,{ghost:!0,css:{color:"$obolGreen",fontSize:"$1",p:0,height:"100%",textTransform:"uppercase"},onClick:es,children:"use my address"})]}),(0,i.jsx)(d.bQ,{"data-testid":"Operator ".concat(s+1),control:b,trigger:$,name:"operators.".concat(s,".address"),items:N().operators,wrapperCSS:{border:"2px solid $bg04",backgroundColor:"$bg03",borderRadius:"$1",px:"$sm",py:"$xs","&:focus-within":{backgroundColor:"$bg02"}}})]}),(null===(r=y.operators)||void 0===r?void 0:r[s])&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:null===(t=null===(a=y.operators)||void 0===a?void 0:a[s].address)||void 0===t?void 0:t.message})]},":op".concat(e&&e.id,":"))})]}),(0,i.jsx)(m.J1,{control:b,contractType:X,validatorsSize:M,setValidatorsSize:B}),N().operators.some(e=>e.address===G)&&(0,i.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsxs)(l.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"What is your Charon Client's ENR?"}),(0,i.jsx)(l.KZ,{content:"An ENR is a public key and encoded networking info starting with enr:-...",children:(0,i.jsx)(l.xu,{css:{display:"flex"},children:(0,i.jsx)(l.by,{})})})]}),(0,i.jsx)(d.iA,{control:b,name:"enr"})]}),(0,i.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/quickstart/group/quickstart-group-leader-creator#step-2-create-and-back-up-a-private-key-for-charon",target:"_blank",children:["How to generate your ENR ",(0,i.jsx)(l.ZJ,{})]})]}),(0,i.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,i.jsx)(l.xv,{variant:"h4",children:"Withdrawal Configuration"}),(0,i.jsxs)(l.mQ.Tabs,{defaultValue:X,onValueChange:e=>Z(v.RJ[e]),"aria-label":"View density",css:{width:"100%"},children:[(0,i.jsxs)(l.mQ.TabsList,{"aria-label":"Configure Withdrawal",children:[(0,i.jsx)(x.T,{name:"single_withdrawal_address_flow",children:(0,i.jsx)(l.mQ.TabsTrigger,{value:"single",disabled:!(0,x.c)("single_withdrawal_address_flow"),children:"Default"})}),(0,i.jsx)(x.T,{name:"reward_split_withdrawal_flow",children:(0,i.jsx)(l.mQ.TabsTrigger,{value:"reward_splitter",disabled:!(0,x.c)("reward_split_withdrawal_flow"),children:"Split Only Rewards"})}),(0,i.jsx)(x.T,{name:"split_withdrawal_flow",children:(0,i.jsx)(l.mQ.TabsTrigger,{value:"splitter",disabled:!(0,x.c)("split_withdrawal_flow"),children:"Split Principal & Rewards"})})]}),(0,i.jsx)(l.mQ.TabsContent,{value:"single",children:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$md",pt:"$sm"},children:[(0,i.jsx)(m.AN,{control:b,trigger:$,errors:y,handleOnSetAddress:er,heading:"Principal Address",description:"Address to receive validator principal and rewards at exit.",fieldName:"singleAddress",className:"single-address-section"}),(0,i.jsx)(m.AN,{control:b,trigger:$,errors:y,handleOnSetAddress:et,heading:"Fee Recipient",description:"Enter the Fee Recipient Address to receive MEV rewards (if enabled), block proposal and priority fees.",fieldName:"feeRecipientAddress",className:"fee-recipient-address-section"})]})}),(0,i.jsx)(l.mQ.TabsContent,{value:"reward_splitter",children:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$md",pt:"$sm"},children:[(0,i.jsx)(m.AN,{control:b,trigger:$,errors:y,handleOnSetAddress:ei,heading:"Principal Recipient",description:"Address that will reclaim validator principal after exit.",fieldName:"principal",className:"splitter-principal-section"}),(0,i.jsxs)(l.kC,{direction:"column",className:"splitter-reward-recipients-section",css:{gap:"$xs"},children:[(0,i.jsx)(l.xv,{variant:"h5",children:"Rewards Split"}),(0,i.jsxs)(l.kC,{css:{justifyContent:"space-between"},direction:"column",children:[(0,i.jsx)(l.xv,{color:"body",variant:"body",css:{mb:"$lg"},children:"Enter each recipients address and their share. Ownership must add to 100%."}),(0,i.jsx)(l.xv,{color:"body",variant:"body",children:"By default, a contribution is allocated to be used by Obol for Public Goods."})]}),(0,i.jsx)(m.Cl,{columns:(0,u.TV)("Rewards"),rows:P,onAddRow:Y,onRemoveRow:ee,totalSplitFooter:F,setMaxSplit:q,control:b,trigger:$,recipients:N().recipients}),(null===(r=y.recipients)||void 0===r?void 0:r.some(e=>{var s;return null==e?void 0:null===(s=e.address)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Please enter a valid, non-duplicate Ethereum address or ENS name"}),(null===(g=y.recipients)||void 0===g?void 0:g.some(e=>{var s;return null==e?void 0:null===(s=e.split)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Split value should be greater than 0%"})]})," "]})}),(0,i.jsx)(l.mQ.TabsContent,{value:"splitter",children:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$md",pt:"$sm"},children:[(0,i.jsxs)(l.kC,{direction:"column",className:"splitter-reward-recipients-section",css:{gap:"$xs"},children:[(0,i.jsx)(l.xv,{variant:"h5",children:"Principal & Rewards Split"}),(0,i.jsxs)(l.kC,{css:{justifyContent:"space-between"},direction:"column",children:[(0,i.jsx)(l.xv,{color:"body",variant:"body",css:{mb:"$lg"},children:"Enter each recipients address and their share. Ownership must add to 100%."}),(0,i.jsx)(l.xv,{color:"body",variant:"body",children:"By default, a contribution is allocated to be used by Obol for Public Goods."})]}),(0,i.jsx)(m.Cl,{columns:(0,u.TV)("Principal & Rewards"),rows:P,onAddRow:Y,onRemoveRow:ee,totalSplitFooter:F,setMaxSplit:q,control:b,trigger:$,validatorsSize:M,recipients:N().recipients}),(null===(f=y.recipients)||void 0===f?void 0:f.some(e=>{var s;return null==e?void 0:null===(s=e.address)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Please enter a valid, non-duplicate Ethereum address or ENS name"}),(null===(w=y.recipients)||void 0===w?void 0:w.some(e=>{var s;return null==e?void 0:null===(s=e.split)||void 0===s?void 0:s.message}))&&(0,i.jsx)(l.xv,{variant:"metadata",color:"test",children:"Split value should be greater than 0%"})]})," "]})})]})]}),(0,i.jsx)(l.kC,{direction:"column",children:(0,i.jsx)(l.zx,{color:"primary",type:"submit",disabled:!A||!S||!G||100!==F,children:"Create Cluster Configuration"})})]})})]})};s.default=g,g.layout="ProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=62367)}),_N_E=e.O()}]);