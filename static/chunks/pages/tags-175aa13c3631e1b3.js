(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{8468:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return n(5978)}])},7966:function(t,e,n){"use strict";var r=n(5893),i=n(2048),a=n(1664),s=n.n(a);let o=t=>{let{href:e,...n}=t,a=e&&e.startsWith("/"),o=e&&e.startsWith("#");return a?(0,r.jsx)(s(),{href:e,legacyBehavior:!0,children:(0,r.jsx)(i.LinkButton,{...n})}):o?(0,r.jsx)(i.LinkButton,{href:e,...n}):(0,r.jsx)(i.LinkButton,{target:"_blank",rel:"noopener noreferrer",href:e,...n})};e.Z=o},9829:function(t,e,n){"use strict";n.d(e,{$t:function(){return d},TQ:function(){return m},Uy:function(){return x}});var r=n(5893),i=n(1576),a=n.n(i),s=n(9008),o=n.n(s),c=n(1163);let l=t=>{let{title:e,description:n,ogType:i,ogImage:s,twImage:l}=t,m=(0,c.useRouter)();return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(a().siteUrl).concat(m.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:a().title}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:e}),Array.isArray(s)?s.map(t=>{let{url:e}=t;return(0,r.jsx)("meta",{property:"og:image",content:e},e)}):(0,r.jsx)("meta",{property:"og:image",content:s},s),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:a().twitter}),(0,r.jsx)("meta",{name:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:l})]})},m=t=>{let{title:e,description:n}=t,i=a().siteUrl+a().socialBanner,s=a().siteUrl+a().socialBanner;return(0,r.jsx)(l,{title:e,description:n,ogType:"website",ogImage:i,twImage:s})},d=t=>{let{title:e,description:n}=t,i=a().siteUrl+a().socialBanner,s=a().siteUrl+a().socialBanner,m=(0,c.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{title:e,description:n,ogType:"website",ogImage:i,twImage:s}),(0,r.jsx)(o(),{children:(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(a().siteUrl).concat(m.asPath,"/feed.xml")})})]})},x=t=>{let e,{authorDetails:n,title:i,summary:s,date:m,lastmod:d,url:x,images:u=[]}=t,p=(0,c.useRouter)(),g=new Date(m).toISOString(),h=new Date(d||m).toISOString(),j=0===u.length?[a().socialBanner]:"string"==typeof u?[u]:u,y=j.map(t=>({"@type":"ImageObject",url:"".concat(a().siteUrl).concat(t)}));n&&(e={"@type":"Person",name:a().author});let f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":x},headline:i,image:y,datePublished:g,dateModified:h,author:e,publisher:{"@type":"Organization",name:a().author,logo:{"@type":"ImageObject",url:"".concat(a().siteUrl).concat(a().siteLogo)}},description:s},b=y[0].url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{title:i,description:s||"",ogType:"article",ogImage:y,twImage:b}),(0,r.jsxs)(o(),{children:[m&&(0,r.jsx)("meta",{property:"article:published_time",content:g}),d&&(0,r.jsx)("meta",{property:"article:modified_time",content:h}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(a().siteUrl).concat(p.asPath)}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},2065:function(t,e,n){"use strict";var r=n(5893),i=n(195),a=n(1664),s=n.n(a);let o=t=>{let{text:e}=t;return(0,r.jsx)(s(),{href:"/tags/".concat((0,i.Z)(e)),className:"rounded-md bg-primary-600 p-1 px-3 text-xs font-semibold uppercase text-white duration-300 hover:bg-primary-400 active:bg-primary-500",children:e.split(" ").join("-")})};e.Z=o},6668:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5893),i=n(4167),a=n(4260),s=n(3680),o=n(1536);function c(t){let{children:e}=t;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[(0,r.jsx)(i.E.main,{className:"mb-auto",initial:"hidden",animate:"enter",exit:"exit",variants:{hidden:{opacity:0,x:-200},enter:{opacity:1,x:0},exit:{opacity:0,x:0}},transition:{type:"linear"},children:e}),(0,r.jsx)(a.Z,{})]})]})}},5978:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d},default:function(){return x}});var r=n(5893),i=n(7966),a=n(9829),s=n(2065),o=n(1576),c=n.n(o),l=n(6668),m=n(195),d=!0;function x(t){let{tags:e}=t,n=Object.keys(e).sort((t,n)=>e[n]-e[t]);return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.TQ,{title:"Tags - ".concat(c().author),description:"Things I blog about"}),(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0",children:[(0,r.jsx)("div",{className:"space-x-2 pt-6 pb-8 md:space-y-5",children:(0,r.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14",children:"Tags"})}),(0,r.jsxs)("div",{className:"flex max-w-lg flex-wrap",children:[0===Object.keys(e).length&&"No tags found.",n.map(t=>(0,r.jsxs)("div",{className:"mt-2 mb-2 mr-5",children:[(0,r.jsx)(s.Z,{text:t}),(0,r.jsx)(i.Z,{href:"/tags/".concat((0,m.Z)(t)),className:"-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300",children:" (".concat(e[t],")")})]},t))]})]})]})}}},function(t){t.O(0,[445,907,13,617,556,805,276,954,789,774,888,179],function(){return t(t.s=8468)}),_N_E=t.O()}]);