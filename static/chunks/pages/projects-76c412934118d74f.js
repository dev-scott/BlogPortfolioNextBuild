(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(2643)}])},5988:function(e,t,n){"use strict";var r=n(5893),a=n(5675),i=n.n(a);let s=e=>{let{...t}=e;return(0,r.jsx)(i(),{...t})};t.Z=s},7966:function(e,t,n){"use strict";var r=n(5893),a=n(2048),i=n(1664),s=n.n(i);let c=e=>{let{href:t,...n}=e,i=t&&t.startsWith("/"),c=t&&t.startsWith("#");return i?(0,r.jsx)(s(),{href:t,legacyBehavior:!0,children:(0,r.jsx)(a.LinkButton,{...n})}):c?(0,r.jsx)(a.LinkButton,{href:t,...n}):(0,r.jsx)(a.LinkButton,{target:"_blank",rel:"noopener noreferrer",href:t,...n})};t.Z=c},9829:function(e,t,n){"use strict";n.d(t,{$t:function(){return m},TQ:function(){return d},Uy:function(){return p}});var r=n(5893),a=n(1576),i=n.n(a),s=n(9008),c=n.n(s),o=n(1163);let l=e=>{let{title:t,description:n,ogType:a,ogImage:s,twImage:l}=e,d=(0,o.useRouter)();return(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(i().siteUrl).concat(d.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:i().title}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),Array.isArray(s)?s.map(e=>{let{url:t}=e;return(0,r.jsx)("meta",{property:"og:image",content:t},t)}):(0,r.jsx)("meta",{property:"og:image",content:s},s),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:i().twitter}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:l})]})},d=e=>{let{title:t,description:n}=e,a=i().siteUrl+i().socialBanner,s=i().siteUrl+i().socialBanner;return(0,r.jsx)(l,{title:t,description:n,ogType:"website",ogImage:a,twImage:s})},m=e=>{let{title:t,description:n}=e,a=i().siteUrl+i().socialBanner,s=i().siteUrl+i().socialBanner,d=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{title:t,description:n,ogType:"website",ogImage:a,twImage:s}),(0,r.jsx)(c(),{children:(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(i().siteUrl).concat(d.asPath,"/feed.xml")})})]})},p=e=>{let t,{authorDetails:n,title:a,summary:s,date:d,lastmod:m,url:p,images:h=[]}=e,x=(0,o.useRouter)(),g=new Date(d).toISOString(),u=new Date(m||d).toISOString(),j=0===h.length?[i().socialBanner]:"string"==typeof h?[h]:h,y=j.map(e=>({"@type":"ImageObject",url:"".concat(i().siteUrl).concat(e)}));n&&(t={"@type":"Person",name:i().author});let f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":p},headline:a,image:y,datePublished:g,dateModified:u,author:t,publisher:{"@type":"Organization",name:i().author,logo:{"@type":"ImageObject",url:"".concat(i().siteUrl).concat(i().siteLogo)}},description:s},b=y[0].url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{title:a,description:s||"",ogType:"article",ogImage:y,twImage:b}),(0,r.jsxs)(c(),{children:[d&&(0,r.jsx)("meta",{property:"article:published_time",content:g}),m&&(0,r.jsx)("meta",{property:"article:modified_time",content:u}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(i().siteUrl).concat(x.asPath)}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},6668:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),a=n(4167),i=n(4260),s=n(3680),c=n(1536);function o(e){let{children:t}=e;return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.jsx)(a.E.main,{className:"mb-auto",initial:"hidden",animate:"enter",exit:"exit",variants:{hidden:{opacity:0,x:-200},enter:{opacity:1,x:0},exit:{opacity:0,x:0}},transition:{type:"linear"},children:t}),(0,r.jsx)(i.Z,{})]})]})}},2643:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),a=n(5988),i=n(7966);function s(e){let{title:t,description:n,imgSrc:s,href:c}=e;return(0,r.jsx)("div",{className:"md p-2 md:w-1/2",style:{maxWidth:"544px"},children:(0,r.jsxs)("div",{className:"h-full overflow-hidden rounded-md border-opacity-60 hover:bg-gray-200 hover:bg-opacity-20 dark:border-gray-700",children:[c?(0,r.jsx)(i.Z,{href:c,"aria-label":"Link to ".concat(t),children:(0,r.jsx)(a.Z,{alt:t,src:s,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,r.jsx)(a.Z,{alt:t,src:s,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:c?(0,r.jsx)(i.Z,{href:c,"aria-label":"Link to ".concat(t),children:t}):t}),(0,r.jsx)("p",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:n})]})]})})}var c=n(9829),o=[{title:"mathgame",description:"Can you solve 10 basic math questions in 10 seconds? If you think you can, then give this game a try!",imgSrc:"/static/images/project/mathgame.png",tag:["javascript","css"],href:"https://mathgame-dlarroder.vercel.app/"},{title:"snakegame",description:"Recreated the classic 3310 snake game using plain HTML and JavaScript!",imgSrc:"/static/images/project/snakegame.png",tag:["javascript","css"],href:"https://snakegame-dlarroder.vercel.app/"}],l=n(1576),d=n.n(l),m=n(6668);function p(){return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(c.TQ,{title:"Projects - ".concat(d().author),description:d().description}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5 ",children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:"Projects"}),(0,r.jsx)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Here are some selected projects I'd like to share"})]}),(0,r.jsx)("div",{className:"container py-5",children:(0,r.jsx)("div",{className:"-m-4 flex flex-wrap",children:o.map(e=>(0,r.jsx)(s,{title:e.title,description:e.description,imgSrc:e.imgSrc,href:e.href},e.title))})})]})]})}}},function(e){e.O(0,[445,907,13,617,556,805,276,954,675,789,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);