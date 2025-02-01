import{r as d,j as e,i as g,L as x}from"./app-l6ZLxY85.js";import{H as m,F as p}from"./Footer-v73ZmQH6.js";import{m as f}from"./Helper-CwtbQ7Sp.js";import"./portal-CMyym3Mn.js";import"./use-server-handoff-complete-v4NkrL3O.js";import"./index-Bpz-ctME.js";import"./floating-ui.dom-80UF8ZUd.js";const j=({products:a})=>{var o;const[s,i]=d.useState([]),n=f("crud-modal");function l(r){n.show(),i(r)}function u(){n.hide()}const h=e.jsx("div",{className:"container",children:e.jsx("div",{id:"crud-modal",tabIndex:"-1",className:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",children:e.jsx("div",{className:"relative p-4 w-full max-w-2xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsx("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:e.jsx("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-1 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>u(),children:e.jsxs("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",fill:"#0F1729"})})]})})}),e.jsxs("div",{className:"px-5 py-2",style:{overflow:"auto"},children:[e.jsx("div",{children:e.jsxs("div",{id:"product-carousel",className:"relative w-full","data-carousel":"static",children:[e.jsxs("div",{className:"relative h-72 overflow-hidden md:h-96",children:[e.jsx("div",{className:"h-96 w-full xl:h-112 hidden duration-700 ease-in-out","data-carousel-item":"true",children:e.jsx("img",{src:s.image!==null?s.image:"",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"h-96 w-full xl:h-112 hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:s.image_2!==null?s.image_2:"",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"h-96 w-full xl:h-112 hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:s.image_3!==null?s.image_3:"",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"h-96 w-full xl:h-112 hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:s.image_4!==null?s.image_4:"",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"h-96 w-full xl:h-112 hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:s.image_5!==null?s.image_5:"",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})})]}),e.jsx("button",{type:"button",className:"absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})}),e.jsx("span",{className:"sr-only",children:"Previous"})]})}),e.jsx("button",{type:"button",className:"absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),e.jsx("span",{className:"sr-only",children:"Next"})]})})]})}),e.jsx("h1",{className:"font-sans text-xl",children:"DESCRIPTION"}),e.jsx("hr",{}),e.jsxs("div",{className:"px-3 pt-2 pb-5",children:[e.jsxs("h5",{className:"font-semibold tracking-tight text-gray-900 dark:text-white",children:[s.product_category," | ",s.name]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-1xl font-bold text-gray-900 dark:text-white",children:Number(s.price).toLocaleString("en-US",{style:"currency",currency:"PHP"})})}),e.jsx("p",{dangerouslySetInnerHTML:{__html:(o=s.description)==null?void 0:o.replace(/\n/g,"<br>")}})]})]})]})})})});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"grid grid-cols-4 auto-cols-max gap-10",children:a.map((r,t)=>{if(t<=3)return e.jsxs("div",{onClick:()=>l(r),className:"cursor-pointer w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"h-80",children:e.jsx("img",{className:"p-8 rounded-t-lg h-full w-full",src:r.image,alt:"product image"})}),e.jsxs("div",{className:"px-5 pb-5",children:[e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.name}),e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.product_category}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-1xl font-bold text-gray-900 dark:text-white",children:Number(r.price).toLocaleString("en-US",{style:"currency",currency:"PHP"})})})]})]},r.product_category+"_"+t)})})}),e.jsx("div",{className:"hidden sm:block mt-5",children:e.jsx("div",{className:"grid grid-cols-4 auto-cols-max gap-10",children:a.map((r,t)=>{if(t>3&&t<=7)return e.jsxs("div",{onClick:()=>l(r),className:"cursor-pointer w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"h-80",children:e.jsx("img",{className:"p-8 rounded-t-lg h-full w-full",src:r.image,alt:"product image"})}),e.jsxs("div",{className:"px-5 pb-5",children:[e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.name}),e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.product_category}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-1xl font-bold text-gray-900 dark:text-white",children:Number(r.price).toLocaleString("en-US",{style:"currency",currency:"PHP"})})})]})]},r.product_category+"_"+t)})})}),e.jsx("div",{className:"sm:hidden",children:e.jsxs("div",{className:"relative w-full","data-carousel":"static",children:[e.jsx("div",{className:"relative h-115 overflow-hidden",children:a.map((r,t)=>{if(t<=3)return e.jsx("div",{onClick:()=>l(r),className:"cursor-pointer hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsxs("div",{className:"w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"h-80",children:e.jsx("img",{className:"p-8 rounded-t-lg h-full w-full",src:r.image})}),e.jsxs("div",{className:"px-8 pb-5",children:[e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.name}),e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.product_category}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-1xl font-bold text-gray-900 dark:text-white",children:Number(r.price).toLocaleString("en-US",{style:"currency",currency:"PHP"})})})]})]})},r.model+"_"+t+"carousel")})}),e.jsx("button",{type:"button",className:"absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})}),e.jsx("span",{className:"sr-only",children:"Previous"})]})}),e.jsx("button",{type:"button",className:"absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),e.jsx("span",{className:"sr-only",children:"Next"})]})})]})}),a.length>3&&e.jsx("div",{className:"sm:hidden",children:e.jsxs("div",{className:"relative w-full","data-carousel":"static",children:[e.jsx("div",{className:"relative h-115 overflow-hidden",children:a.map((r,t)=>{if(t>3&&t<=7)return e.jsx("div",{onClick:()=>l(r),className:"cursor-pointer hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsxs("div",{className:"w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"h-80",children:e.jsx("img",{className:"p-8 rounded-t-lg h-full w-full",src:r.image})}),e.jsxs("div",{className:"px-8 pb-5",children:[e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.name}),e.jsx("h5",{className:"text-lg font-semibold tracking-tight text-gray-900 dark:text-white",children:r.product_category}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-1xl font-bold text-gray-900 dark:text-white",children:Number(r.price).toLocaleString("en-US",{style:"currency",currency:"PHP"})})})]})]})},r.model+"_"+t+"carousel")})}),e.jsx("button",{type:"button",className:"absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})}),e.jsx("span",{className:"sr-only",children:"Previous"})]})}),e.jsx("button",{type:"button",className:"absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),e.jsx("span",{className:"sr-only",children:"Next"})]})})]})}),h]})},c=[{brand:"YAMAHA",imagePath:"/docs/images/brands/yamaha.svg"},{brand:"KAWAI",imagePath:"/docs/images/brands/kawai.png"},{brand:"CASIO",imagePath:"/docs/images/brands/casio.png"},{brand:"SAMICK",imagePath:"/docs/images/brands/samick.jpg"},{brand:"PEARL RIVER",imagePath:"/docs/images/brands/pearl-river.png"},{brand:"STEIWAY AND SONS",imagePath:"/docs/images/brands/steinway-and-sons.png"},{brand:"YOUNG CHANG",imagePath:"/docs/images/brands/young-chang.jpeg"}];function C({consoles:a}){return d.useEffect(()=>{g()},[]),e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Home"}),e.jsx("header",{children:e.jsx(m,{pages:"Home"})}),e.jsxs("main",{children:[e.jsx("div",{children:e.jsxs("div",{id:"default-carousel",className:"relative w-full","data-carousel":"slide",children:[e.jsxs("div",{className:"relative h-72 overflow-hidden md:h-96 xl:96 2xl:96",children:[e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":"true",children:e.jsx("img",{src:"/docs/images/carousel/img-1.jpg",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:"/docs/images/carousel/img-2.jpg",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:"/docs/images/carousel/img-3.jpg",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:"/docs/images/carousel/img-4.jpg",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})}),e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("img",{src:"/docs/images/carousel/img-5.jpg",className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",alt:"..."})})]}),e.jsxs("div",{className:"absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse",children:[e.jsx("button",{type:"button",className:"w-3 h-3 rounded-full","aria-current":"true","aria-label":"Slide 1","data-carousel-slide-to":"0"}),e.jsx("button",{type:"button",className:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 2","data-carousel-slide-to":"1"}),e.jsx("button",{type:"button",className:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 3","data-carousel-slide-to":"2"}),e.jsx("button",{type:"button",className:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 4","data-carousel-slide-to":"3"}),e.jsx("button",{type:"button",className:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 5","data-carousel-slide-to":"4"})]}),e.jsx("button",{type:"button",className:"absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})}),e.jsx("span",{className:"sr-only",children:"Previous"})]})}),e.jsx("button",{type:"button",className:"absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":!0,children:e.jsxs("span",{className:"inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e.jsx("svg",{className:"w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),e.jsx("span",{className:"sr-only",children:"Next"})]})})]})}),e.jsxs("div",{className:"container mx-auto p-5",children:[e.jsx("div",{children:e.jsx("h1",{className:"font-sans text-xl font-black",children:"BRANDS"})}),e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"grid grid-cols-7 auto-cols-max gap-10 text-center items-center",children:c.map(s=>e.jsx("div",{children:e.jsx("a",{href:"#",children:e.jsx("img",{className:"object-fill h-25 w-full",src:s.imagePath,alt:s.brand})})},s.brand))})}),e.jsx("div",{className:"sm:hidden",children:e.jsx("div",{className:"relative w-full","data-carousel":"slide",children:e.jsx("div",{className:"relative h-28 overflow-hidden items-center",children:c.map((s,i)=>e.jsx("div",{className:"hidden duration-700 ease-in-out","data-carousel-item":!0,children:e.jsx("div",{className:"h-28 ",children:e.jsx("a",{href:"#",children:e.jsx("img",{className:"object-fill w-full",style:{height:"100px"},src:s.imagePath,alt:s.brand})})})},s.brand+"_"+i+"carousel"))})})})]}),e.jsx("div",{className:"container mx-auto p-5",children:e.jsxs("div",{className:"pb-5",children:[e.jsx("h1",{className:"font-sans text-xl font-black",children:"PIANO"}),e.jsx(j,{products:a})]})})]}),e.jsx("footer",{className:"bottom-0 mt-7",children:e.jsx(p,{})})]})}export{C as default};
