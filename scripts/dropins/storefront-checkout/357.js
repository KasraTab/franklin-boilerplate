export const id=357;export const ids=[357];export const modules={7357:(r,e,t)=>{t.d(e,{H:()=>W,Y:()=>H});var n=t(5587),a=t(1892),o=t.n(a),c=t(5760),u=t.n(c),s=t(8311),i=t.n(s),m=t(8192),l=t.n(m),d=t(8060),y=t.n(d),p=t(4865),h=t.n(p),v=t(5509),x={};x.styleTagTransform=h(),x.setAttributes=l(),x.insert=i().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=y(),o()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;var b=t(3483),g=t(9724),f=t(4462),_=t(51),j=t(6802),k=t(1988),w=t(7188);function O(r){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(r)}var S=["className","summary","isLoading"];function P(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function T(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?P(Object(t),!0).forEach((function(e){var n,a,o;n=r,a=e,o=t[e],(a=function(r){var e=function(r,e){if("object"!==O(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===O(e)?e:String(e)}(a))in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var N=function(r){var e=r.className,t=r.summary,a=r.isLoading,o=void 0!==a&&a,c=function(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}(r,S),u=t.total,s=t.subtotal,i=t.shipping,m=t.tax;return(0,w.jsxs)(f.Z,T(T({},c),{},{className:(0,n.S)(["checkout-order-summary",["checkout-order-summary--loading",o],e]),children:[(0,w.jsx)(b.X,{level:2,className:"checkout-order-summary__title",children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.title"})}),(0,w.jsx)(_.i,{variant:"primary"}),o&&(0,w.jsx)(j.G,{className:"checkout-order-summary__spinner"}),(0,w.jsxs)("div",{"data-testid":"order-summary-subtotal",className:"checkout-order-summary__row",children:[(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.subtotal"})}),(0,w.jsx)(k.t,{amount:s.amount,currency:s.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]}),s.isTaxIncl&&(0,w.jsx)("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.includingTaxes"})})}),null!=i&&(0,w.jsxs)("div",{"data-testid":"order-summary-shipping",className:"checkout-order-summary__row",children:[(0,w.jsx)("p",{"data-testid":"order-summary-shipping-label",children:i.isEstimated?(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.estimatedShipping"}):(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.shipping"})}),0===i.amount?(0,w.jsx)("p",{className:"checkout-order-summary__price",children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.freeShipping"})}):(0,w.jsx)(k.t,{amount:i.amount,currency:i.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]}),null!=m&&!m.breakdown&&(0,w.jsxs)("div",{"data-testid":"order-summary-tax",className:"checkout-order-summary__row",children:[(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.tax"})}),(0,w.jsx)(k.t,{amount:m.amount,currency:m.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]}),null!=m&&m.breakdown&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_.i,{variant:"secondary"}),(0,w.jsx)("div",{className:"checkout-order-summary__row checkout-order-summary__row--margin-bottom",children:(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.taxBreakdown"})})}),m.breakdown.map((function(r){return(0,w.jsxs)("div",{"data-testid":"order-summary-tax-breakdown",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,w.jsx)("p",{children:r.label}),(0,w.jsx)(k.t,{amount:r.amount.value,currency:r.amount.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]},r.label)})),(0,w.jsxs)("div",{"data-testid":"order-summary-tax-breakdown-total",className:"checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",children:[(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.taxTotal"})}),(0,w.jsx)(k.t,{amount:m.amount,currency:m.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]}),(0,w.jsx)(_.i,{variant:"secondary"})]}),(0,w.jsxs)("div",{"data-testid":"order-summary-total-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--emphasized",children:[(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.total"})}),(0,w.jsx)(k.t,{amount:u.inclTax.amount,currency:u.inclTax.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]}),null!=u.exclTax&&(0,w.jsxs)("div",{"data-testid":"order-summary-total-excl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,w.jsx)("p",{children:(0,w.jsx)(g.xv,{id:"Checkout.OrderSummary.totalExclTax"})}),(0,w.jsx)(k.t,{amount:u.exclTax.amount,currency:u.exclTax.currency,className:(0,n.S)(["checkout-order-summary__price",e])})]})]}))},C=t(9578),D=function(){return(0,w.jsxs)(C.O,{className:"order-summary__skeleton",children:[(0,w.jsx)(C.d,{variant:"heading",size:"medium"}),(0,w.jsx)(C.d,{variant:"empty",size:"medium"}),(0,w.jsx)(C.d,{size:"large",fullWidth:!0,lines:3})]})},E=0,z=t(6261),Z=t(3042),L=t(5963);function I(r){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},I(r)}function A(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function B(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(Object(t),!0).forEach((function(e){var n,a,o;n=r,a=e,o=t[e],(a=function(r){var e=function(r,e){if("object"!==I(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===I(e)?e:String(e)}(a))in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function F(){return F=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},F.apply(this,arguments)}var G=2;function H(){var r,e,t=(0,z.BE)(),n=t.shoppingCartDisplaySubtotal===G,a=Z.t.value.data,o=!!a,c=null==a?void 0:a.shipping_addresses,u=!(null==c||!c.length),s=null==a?void 0:a.prices,i=null==s?void 0:s.grand_total,m=!!i,l=n?null==s?void 0:s.subtotal_including_tax:null==s?void 0:s.subtotal_excluding_tax,d=(null==s?void 0:s.applied_taxes)||[],y=!!d.length,p={isLoading:!1};if(!o||!m)return p;if(p.summary={total:{inclTax:{amount:i.value,currency:i.currency}},subtotal:{amount:l.value,currency:l.currency,isTaxIncl:n}},y){var h=d.reduce((function(r,e){return r+e.amount.value}),E),v=d[0];p.summary.tax={amount:h,currency:v.amount.currency},t.shoppingCartDisplayFullSummary&&(p.summary.tax.breakdown=d)}if(!y&&t.shoppingCartDisplayZeroTax&&(p.summary.tax={amount:E,currency:p.summary.total.inclTax.currency}),t.shoppingCartDisplayGrandTotal){var x=p.summary.tax?p.summary.total.inclTax.amount-p.summary.tax.amount:p.summary.total.inclTax.amount;p.summary.total.exclTax={amount:x,currency:p.summary.total.inclTax.currency}}if(u){var b=c[0],g=null==b?void 0:b.selected_shipping_method;return g?(p.summary.shipping={amount:null==g?void 0:g.amount.value,currency:null==g?void 0:g.amount.currency,isEstimated:!1},p):p}return L.b.value.localData?(p.summary.shipping={amount:null===(r=L.b.value.localData)||void 0===r?void 0:r.amount.value,currency:null===(e=L.b.value.localData)||void 0===e?void 0:e.amount.currency,isEstimated:!0},p.summary.total.inclTax.amount+=p.summary.shipping.amount,p.summary.total.exclTax&&(p.summary.total.exclTax.amount+=p.summary.shipping.amount),p):p}var W=function(r){var e=F({},(function(r){if(null==r)throw new TypeError("Cannot destructure "+r)}(r),r)),t=H(),n=t.isLoading,a=t.summary;return(0,w.jsxs)("div",B(B({},e),{},{children:[!a&&(0,w.jsx)(D,{}),a&&(0,w.jsx)(N,{isLoading:n,summary:a})]}))}},5509:(r,e,t)=>{t.d(e,{Z:()=>u});var n=t(4933),a=t.n(n),o=t(3476),c=t.n(o)()(a());c.push([r.id,".checkout-order-summary .elsie-card__content {\n  gap: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__title {\n  color: var(--color-neutral-800);\n  font: var(--type-headline-2-default-font);\n  letter-spacing: var(--type-headline-2-default-letter-spacing);\n  margin: 0;\n}\n\n.checkout-order-summary .elsie-divider--primary {\n  margin: 0 0 var(--spacing-medium) 0 !important;\n}\n\n.checkout-order-summary .elsie-divider--secondary {\n  margin: var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;\n}\n\n.checkout-order-summary__breakdown {\n  margin: var(--spacing-big) 0 var(--spacing-medium) 0;\n}\n\n.checkout-order-summary__breakdown .elsie-divider:last-child {\n  margin-bottom: 0;\n}\n\n.checkout-order-summary__row {\n  display: flex;\n  justify-content: space-between;\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row--margin-top {\n  margin-top: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row--margin-bottom {\n  margin-bottom: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row p {\n  margin: 0;\n}\n\n.checkout-order-summary__row--strong {\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--strong .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--emphasized {\n  font: var(--type-body-1-emphasized-font);\n  letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n  margin-top: var(--spacing-small);\n}\n\n.checkout-order-summary__row--emphasized .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-emphasized-font);\n  letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n}\n\n.checkout-order-summary__row--muted {\n  color: var(--color-neutral-700);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n  margin-top: calc(-1 * var(--spacing-xxsmall));\n}\n\n.checkout-order-summary__row--muted .checkout-order-summary__price {\n  color: var(--color-neutral-700);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n}\n\n.checkout-order-summary--loading .checkout-order-summary__row {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.checkout-order-summary__spinner {\n  margin: 0 auto;\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  top: 50%;\n  bottom: 0;\n}\n\n.order-summary__skeleton {\n  margin-top: var(--spacing-medium);\n}\n\n@media only screen and (min-width: 320px) and (max-width: 768px) {\n  .checkout-order-summary {\n    border-top: var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-radius: 0;\n  }\n\n  .checkout-order-summary__title {\n    display: none;\n  }\n\n  .checkout-order-summary .elsie-divider {\n    display: none;\n  }\n\n  .checkout-order-summary__breakdown {\n    margin-top: 0;\n  }\n}\n",""]);const u=c}};