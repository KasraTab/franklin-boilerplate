import{jsxs as g,jsx as n,Fragment as N}from"@dropins/tools/preact-jsx-runtime.js";import{classes as L,Slot as A}from"@dropins/tools/lib.js";import{Card as o,Header as v,Accordion as x,AccordionSection as E,ContentGrid as $,Image as R}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{useState as _,useEffect as Z}from"@dropins/tools/preact-hooks.js";import{events as P}from"@dropins/tools/event-bus.js";import"@dropins/tools/preact.js";import{u as k}from"../chunks/useIsMobile.js";import{Text as V,useText as D}from"@dropins/tools/i18n.js";import{C as ii}from"../chunks/OrderLoaders.js";import"@dropins/tools/preact-compat.js";var G=(e=>(e.PENDING="pending",e.SHIPPING="shipping",e.COMPLETE="complete",e.PROCESSING="processing",e.HOLD="on hold",e.CANCELED="Canceled",e.SUSPECTED_FRAUD="suspected fraud",e.PAYMENT_REVIEW="payment review",e))(G||{});const ni=({orderData:e})=>{const[t,i]=_(!0),[s,h]=_(e),[f,C]=_(!1);return Z(()=>{const a=P.on("order/data",u=>{h(u),C(u==null?void 0:u.isVirtual),i(!1)},{eager:!0});return()=>{a==null||a.off()}},[]),{loading:t,order:s,isVirtualProduct:f}},ei=({slots:e,collapseThreshold:t,translations:i,returnData:s,routeTracking:h,routeProductDetails:f})=>{var u;const C=k(),a=f?"a":"span";return g(o,{variant:"secondary",className:L(["order-shipping-status-card","order-shipping-status-card--return-order"]),children:[n(v,{title:i.returnOrderCardTitle}),g("div",{children:[(u=s==null?void 0:s.tracking)==null?void 0:u.map((l,m)=>{var S,T;return g("p",{children:[`${i.carrier} ${(T=(S=l==null?void 0:l.carrier)==null?void 0:S.label)==null?void 0:T.toLocaleUpperCase()}: `,n("a",{href:`${(h==null?void 0:h(l))??"#"}`,rel:"noreferrer",children:l.trackingNumber})]},`${l.trackingNumber}_${m}`)}),e!=null&&e.ReturnItemsDetails?n(A,{"data-testid":"returnItemsDetails",name:"ReturnItemsDetails",slot:e==null?void 0:e.ReturnItemsDetails,context:{items:s.items}}):null,n(x,{actionIconPosition:"right","data-testid":"dropinAccordion",children:n(E,{defaultOpen:t>=s.items.length,title:n(V,{id:"Order.ShippingStatusCard.itemText",plural:s.items.reduce((l,m)=>l+m.totalQuantity,0),fields:{count:s.items.reduce((l,m)=>l+m.totalQuantity,0)}}),children:n($,{maxColumns:C?3:9,emptyGridContent:n(N,{}),className:L(["order-shipping-status-card__images",["order-shipping-status-card__images-3",C]]),children:s.items.map((l,m)=>{var c,b;const S=(c=l.thumbnail)==null?void 0:c.label,T=(b=l.thumbnail)==null?void 0:b.url;return n(a,{href:(f==null?void 0:f(l))??"#","data-testid":`${m}${l.uid}`,children:n(R,{alt:S,src:T,width:85,height:114})},`${m}${l.uid}`)})})})})]})]})},pi=({translations:e,slots:t,orderData:i,collapseThreshold:s=10,routeProductDetails:h,routeTracking:f})=>{var q,w,M,U,H,j,F;const C=!!(i!=null&&i.returnNumber),a=i==null?void 0:i.returnNumber,u=h?"a":"span",l=(q=i==null?void 0:i.status)==null?void 0:q.toLocaleLowerCase(),S=((w=i==null?void 0:i.shipments)==null?void 0:w.length)===1&&(l==null?void 0:l.includes(G.COMPLETE)),T=(M=i==null?void 0:i.shipments)==null?void 0:M.every(p=>p.tracking.length===0),c=(U=i==null?void 0:i.items)==null?void 0:U.filter(p=>(p==null?void 0:p.quantityShipped)===0||(p==null?void 0:p.quantityShipped)<(p==null?void 0:p.quantityOrdered)),b=(H=i==null?void 0:i.items)==null?void 0:H.reduce((p,d)=>{const I=d.quantityOrdered-d.quantityShipped;return p+(I>0?I:0)},0);if(C&&(i!=null&&i.returns.length)){const p=i.returns.find(d=>d.returnNumber===a);return!p||p.tracking.length===0?null:n(ei,{slots:t,collapseThreshold:s,translations:e,returnData:p,routeTracking:f,routeProductDetails:h})}return!i||l!=null&&l.includes(G.CANCELED)?null:(j=i==null?void 0:i.shipments)!=null&&j.length?T&&!(c!=null&&c.length)&&S?null:g(N,{children:[(F=i==null?void 0:i.shipments)==null?void 0:F.map(({tracking:p,items:d,id:I},X)=>{const Q=d.reduce((r,O)=>{var y;return(r??0)+(((y=O.orderItem)==null?void 0:y.quantityShipped)??0)},0);return g(o,{variant:"secondary",className:"order-shipping-status-card",children:[n(v,{title:e.shippingCardTitle}),p==null?void 0:p.map(r=>{var O;return g("div",{className:"order-shipping-status-card__header",role:"status",children:[g("div",{className:"order-shipping-status-card__header--content",children:[g("p",{children:[e.carrier," ",(O=r==null?void 0:r.carrier)==null?void 0:O.toLocaleUpperCase()," | ",r==null?void 0:r.number]}),n("p",{children:r==null?void 0:r.title})]}),t!=null&&t.DeliveryTrackActions?n(A,{"data-testid":"deliverySlotActions",name:"DeliveryTrackActions",slot:t==null?void 0:t.DeliveryTrackActions,context:{trackInformation:r}}):null]},r.number)}),S?null:n(x,{actionIconPosition:"right","data-testid":"dropinAccordion",children:n(E,{"data-position":X+1,defaultOpen:s>=(d==null?void 0:d.length),title:n(N,{children:n(V,{id:"Order.ShippingStatusCard.notYetShippedImagesTitle",plural:Q,fields:{count:Q}})}),children:n($,{maxColumns:6,emptyGridContent:n(N,{}),className:"order-shipping-status-card__images",children:d==null?void 0:d.map(r=>{var y,Y,z,B,J,K;const O=(z=(Y=(y=r==null?void 0:r.orderItem)==null?void 0:y.product)==null?void 0:Y.thumbnail)==null?void 0:z.label,W=(K=(J=(B=r==null?void 0:r.orderItem)==null?void 0:B.product)==null?void 0:J.thumbnail)==null?void 0:K.url;return n(u,{href:(h==null?void 0:h(r))??"#",children:n(R,{alt:O,src:W||"",width:85,height:114})},r.id)})})})}),t!=null&&t.DeliveryTimeLine?n(A,{"data-testid":"deliverySlotTimeLine",name:"DeliveryTimeLine",slot:t==null?void 0:t.DeliveryTimeLine,context:{}}):null]},I)}),c!=null&&c.length?g(o,{variant:"secondary",className:"order-shipping-status-card","data-testid":"dropinAccordionNotYetShipped2",children:[n(v,{title:e.notYetShippedTitle}),n(x,{actionIconPosition:"right",children:n(E,{defaultOpen:s>=(c==null?void 0:c.length),title:n(V,{id:"Order.ShippingStatusCard.notYetShippedImagesTitle",plural:b,fields:{count:b}}),children:n($,{maxColumns:6,emptyGridContent:n(N,{}),className:"order-shipping-status-card__images",children:c==null?void 0:c.map(p=>{var d,I;return n(u,{href:(h==null?void 0:h(p))??"#",children:n(R,{alt:(d=p.thumbnail)==null?void 0:d.label,src:((I=p.thumbnail)==null?void 0:I.url)||"",width:85,height:114})},p.id)})})})})]}):null]}):g(o,{variant:"secondary",className:"order-shipping-status-card",children:[n(v,{title:e.shippingInfoTitle}),n("div",{className:"order-shipping-status-card__header",children:g("div",{className:"order-shipping-status-card__header--content",children:[i!=null&&i.carrier?n("p",{children:i==null?void 0:i.carrier}):null,n("p",{children:e.noInfoTitle})]})})]})},ai=({slots:e,className:t,collapseThreshold:i,orderData:s,routeOrderDetails:h,routeTracking:f,routeProductDetails:C})=>{const{loading:a,order:u,isVirtualProduct:l}=ni({orderData:s}),m=D({carrier:"Order.ShippingStatusCard.carrier",prepositionOf:"Order.ShippingStatusCard.prepositionOf",returnOrderCardTitle:"Order.ShippingStatusCard.returnOrderCardTitle",shippingCardTitle:"Order.ShippingStatusCard.shippingCardTitle",shippingInfoTitle:"Order.ShippingStatusCard.shippingInfoTitle",notYetShippedTitle:"Order.ShippingStatusCard.notYetShippedTitle",noInfoTitle:"Order.ShippingStatusCard.noInfoTitle",returnNumber:"Order.ShippingStatusCard.returnNumber",orderNumber:"Order.ShippingStatusCard.orderNumber"});return!a&&l?null:n("div",{className:L(["order-shipping-status",t]),children:!a&&u?n(pi,{translations:m,routeOrderDetails:h,routeTracking:f,slots:e,orderData:u,collapseThreshold:i,routeProductDetails:C}):n(ii,{withCard:!1})})};export{ai as ShippingStatus,ai as default};
