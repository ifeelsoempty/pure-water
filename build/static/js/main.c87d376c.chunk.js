(this["webpackJsonppure-water"]=this["webpackJsonppure-water"]||[]).push([[0],{18:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(11),n=c.n(r),s=(c(18),c(6)),d=c(12),l=c.n(d),j=[{name:"name",required:!0,placeholder:"\u0418\u043c\u044f"},{name:"phone",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",required:!0},{name:"email",placeholder:"Email",required:!0},{name:"address",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",required:!0}],o=c(0),m=function(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),i=c[0],r=c[1],n=Object(a.useState)(!0),d=Object(s.a)(n,2),l=d[0],j=d[1];return Object(o.jsx)("div",{className:"".concat(l?"input":"input input--invalid"),children:Object(o.jsx)("input",{onBlur:function(t){e.inputData.required&&!i?j(!1):j(!0)},value:i,type:"text",onChange:function(t){r(t.target.value),e.onChange(t.target.value)},name:e.inputData.name,placeholder:e.inputData.placeholder})})},u=function(e){return Object(o.jsxs)("label",{className:"checkbox",children:[Object(o.jsx)("input",{type:"checkbox",checked:e.checked,onChange:function(t){return e.onChange(t.target.checked)},name:e.inputData.name}),Object(o.jsx)("div",{className:"checkbox__btn"}),Object(o.jsx)("span",{children:e.children})]})},b=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(!1),n=Object(s.a)(r,2),d=n[0],l=n[1];return Object(o.jsxs)("div",{className:"order-customer-form",children:[Object(o.jsx)("div",{className:"order-customer-form__title",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(o.jsx)("div",{className:"order-customer-form__inputs",children:j.map((function(e,t){return Object(o.jsx)(m,{inputData:e,onChange:function(e,t){return function(e,t){var a=Object.assign({},c);a[e]=t,i(a)}(e,t)}},t)}))}),Object(o.jsx)("div",{className:"order-customer-form__policy",children:Object(o.jsxs)(u,{checked:d,onChange:l,inputData:{name:"policy"},children:["\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 ",Object(o.jsx)("a",{className:"link",target:"blank",href:"http://kremlin.ru/acts/bank/24154",rel:"noreferrer",children:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})})]})},h=function(){return Object(o.jsxs)("div",{className:"order-preview",children:[Object(o.jsx)("div",{className:"order-preview__img",children:Object(o.jsx)("img",{src:"/img/order-preview.png",alt:""})}),Object(o.jsx)("h1",{className:"order-preview__title",children:"\u0427\u0438\u0441\u0442\u0430\u044f \u0412\u043e\u0434\u0430"}),Object(o.jsx)("div",{className:"order-preview__desc",children:"\u041f\u0438\u0442\u044c\u0435\u0432\u0430\u044f \u0432\u043e\u0434\u0430, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f, \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043a\u0443\u043b\u0435\u0440\u043e\u0432. \u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0432\u043e\u0434\u044b \u0438 \u043c\u044b \u043f\u0440\u0438\u0432\u0435\u0437\u0435\u043c \u0435\u0451 \u043d\u0430 \u0434\u043e\u043c \u0438\u043b\u0438 \u0432 \u043e\u0444\u0438\u0441."})]})},O=[{id:1,price:220,size:18.9,imgPath:"/img/water/water-image_1.png"},{id:2,price:32.75,size:1.5,imgPath:"/img/water/water-image_2.png"},{id:3,price:22.5,size:.5,imgPath:"/img/water/water-image_2.png"},{id:4,price:50,size:5,imgPath:"/img/water/water-image_2.png"}],_=function(e){var t=e.item,c=function(c){c>0&&c<100&&(t.count=c,t.isActive&&e.onChange(t))};return Object(o.jsxs)("div",{className:"water-item ".concat(t.isActive?"water-item--active":""),children:[Object(o.jsxs)("div",{onClick:function(c){t.isActive||(t.count=1),t.isActive=!t.isActive,e.onChange(t)},className:"water-item__card",children:[Object(o.jsxs)("div",{className:"water-item__size",children:[t.size," \u043b"]}),Object(o.jsxs)("div",{className:"water-item__price",children:[t.price," \u20bd"]}),Object(o.jsx)("div",{className:"water-item__image",children:Object(o.jsx)("img",{src:e.item.imgPath,alt:""})}),Object(o.jsx)("div",{className:"water-item__toggle"})]}),Object(o.jsxs)("div",{className:"water-item__counter ".concat(t.isActive?"water-item__counter--visible":"water-item__counter--hidden"),children:[Object(o.jsx)("div",{onClick:function(){return c(t.count-1)},className:"water-item__arrow water-item__arrow--minus"}),Object(o.jsx)("div",{className:"water-item__amount",children:t.count}),Object(o.jsx)("div",{onClick:function(){return c(t.count+1)},className:"water-item__arrow water-item__arrow--plus"})]})]})},p=c(35),v=c(32),x=(c(10),function(e){var t=Object(a.useState)(O),c=Object(s.a)(t,2),i=c[0],r=c[1],n=function(t){var c=i.map((function(e){return t.id===e.id?t:e}));r(c),e.onChange(c)};return Object(o.jsxs)("div",{className:"water",children:[Object(o.jsx)("div",{className:"water__title",children:"\u0412\u043e\u0434\u0430"}),Object(o.jsx)("div",{className:"water__list",children:Object(o.jsx)(p.a,{slidesPerView:3,children:O.map((function(e){return Object(o.jsx)(v.a,{children:Object(o.jsx)(_,{onChange:n,item:e})},e.id)}))})})]})}),f=c(34),g=c(33),N=(c(28),c(29),c(30),["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"]),w=function(e,t){return e.filter((function(e){return e.id===t}))[0]},k=function(e){return e?[{id:1,startTime:"12:00",endTime:"13:00"},{id:2,startTime:"15:00",endTime:"16:00"}]:[{id:1,startTime:"10:00",endTime:"11:00"},{id:2,startTime:"12:00",endTime:"13:00"},{id:3,startTime:"15:00",endTime:"16:00"}]};f.a.use([g.a]);var C=function(e){var t=Object(a.useState)(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=[],c=1;c<=e;c++){var a=new Date;a.setDate(a.getDate()+c);var i="\u0441\u0431"===N[a.getDay()]||"\u0432\u0441"===N[a.getDay()];t.push({id:c,dayOfWeek:N[a.getDay()],dayOfMonth:a.getDate(),isWeekend:i,intervals:k(i)})}return t}(7)),c=Object(s.a)(t,1)[0],i=Object(a.useState)(null),r=Object(s.a)(i,2),n=r[0],d=r[1],l=Object(a.useState)(1),j=Object(s.a)(l,2),m=j[0],u=j[1],b=Object(a.useState)(null),h=Object(s.a)(b,2),O=h[0],_=h[1];return Object(a.useEffect)((function(){d(w(c,m)),e.onChangeDate(w(c,m))}),[m,c,e]),Object(a.useEffect)((function(){var t=w(c,m).intervals;e.onChangeInterval(w(t,O))}),[O,m,c,e]),Object(o.jsxs)("div",{className:"date-picker",children:[Object(o.jsx)("div",{className:"date-picker__title",children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(o.jsxs)("div",{className:"date-picker__item",children:[Object(o.jsx)("div",{className:"date-picker__subtitle",children:"\u0414\u0435\u043d\u044c"}),Object(o.jsxs)("div",{className:"date-picker__slider",children:[Object(o.jsx)("div",{className:"date-picker__button date-picker__arrow date-picker__arrow--left"}),Object(o.jsx)(p.a,{slidesPerView:5,navigation:{prevEl:".date-picker__arrow--left",nextEl:".date-picker__arrow--right"},children:c.map((function(e){return Object(o.jsx)(v.a,{children:Object(o.jsxs)("div",{className:"date-picker-item date-picker__button \n                        ".concat(e.isWeekend?"date-picker-item--weekend":""," \n                        ").concat(e.id===m?"date-picker-item--selected":""),onClick:function(){var t;(t=e.id)!==m&&u(t)},children:[Object(o.jsx)("div",{className:"date-picker-item__title",children:e.dayOfMonth}),Object(o.jsx)("div",{className:"date-picker-item__subtitle",children:e.dayOfWeek})]})},e.id)}))}),Object(o.jsx)("div",{className:"date-picker__button date-picker__arrow date-picker__arrow--right"})]})]}),Object(o.jsxs)("div",{className:"date-picker__item",children:[Object(o.jsx)("div",{className:"date-picker__subtitle",children:"\u0412\u0440\u0435\u043c\u044f"}),Object(o.jsx)("div",{className:"date-picker__slider",children:Object(o.jsx)(p.a,{slidesPerView:3,children:n&&n.intervals.map((function(e){return Object(o.jsx)(v.a,{children:Object(o.jsx)("div",{onClick:function(){var t;(t=e.id)!==O&&_(t)},className:"date-picker-item date-picker__button \n                        ".concat(e.id===O?"date-picker-item--selected":""),children:Object(o.jsx)("div",{className:"date-picker-item__title",children:"".concat(e.startTime," - ").concat(e.endTime)})})},e.id)}))})})]})]})},D=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"order",children:[Object(o.jsx)(h,{}),Object(o.jsxs)("div",{className:"order-form",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"separate"}),Object(o.jsxs)("div",{className:"order-row",children:[Object(o.jsx)("div",{className:"order-col",children:Object(o.jsx)(x,{onChange:function(e){for(var t=0,c=0;c<e.length;c++)e[c].isActive&&(t+=e[c].price*e[c].count);i(t)}})}),Object(o.jsx)("div",{className:"order-col",children:Object(o.jsx)(C,{onChangeInterval:function(e){return console.log(e)},onChangeDate:function(e){return console.log(e)}})})]}),Object(o.jsx)("div",{className:"separate"}),Object(o.jsxs)("div",{className:"order-total",children:[Object(o.jsxs)("div",{className:"order-total__top",children:[Object(o.jsx)("div",{className:"order-total__title",children:"\u0418\u0442\u043e\u0433\u043e"}),Object(o.jsx)(l.a,{className:"order-total-price",component:"div",value:c,duration:300,formatValue:function(e){return Object(o.jsxs)(o.Fragment,{children:["".concat(Math.trunc(e),"."),Object(o.jsx)("span",{className:"order-total-price__float",children:"".concat(e.toFixed(2).split(".")[1]," \u20bd")})]})}})]}),Object(o.jsx)("div",{className:"order-total__hr separate separate--solid"})]})]})]})};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c87d376c.chunk.js.map