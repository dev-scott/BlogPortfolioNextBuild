exports.id = 447;
exports.ids = [447];
exports.modules = {

/***/ 5425:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 7587,
	"./AuthorLayout.tsx": 7587,
	"./ListLayout": 4896,
	"./ListLayout.tsx": 4896,
	"./PostLayout": 1090,
	"./PostLayout.tsx": 1090,
	"./UsesLayout": 5540,
	"./UsesLayout.tsx": 5540
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5425;

/***/ }),

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Image = ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 6447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ MDXLayoutRenderer)
/* harmony export */ });
/* unused harmony export MDXComponents */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(203);
/* harmony import */ var _dlarroder_playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1887);
/* harmony import */ var _dlarroder_playground__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dlarroder_playground__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8037);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5988);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7966);
/* harmony import */ var _Pre__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5601);
/* harmony import */ var _TOCInline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__]);
next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react/display-name */ 







const Wrapper = ({ layout , content , ...rest })=>{
    const Layout = __webpack_require__(5425)(`./${layout}`).default;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
        content: content,
        ...rest
    });
};
const MDXComponents = {
    Image: _Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    TOCInline: _TOCInline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    a: _Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    pre: _Pre__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    wrapper: Wrapper,
    LinkButton: _dlarroder_playground__WEBPACK_IMPORTED_MODULE_2__.LinkButton
};
const MDXLayoutRenderer = ({ layout , content , ...rest })=>{
    const MDXLayout = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_3__.useMDXComponent)(content.body.code);
    const mainContent = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_1__/* .coreContent */ .gT)(content);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        layout: layout,
        content: mainContent,
        components: MDXComponents,
        ...rest
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-2xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
}


/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Pre = ({ children  })=>{
    const textInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current?.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-sky-400 focus:border-sky-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-sky-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pre);


/***/ }),

/***/ 2053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude =""  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value));
    const tocList = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: heading.url,
                    className: "not-prose border-b border-primary-400 no-underline dark:border-primary-500",
                    children: heading.value
                })
            }, heading.value))
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOCInline);


/***/ }),

/***/ 7587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5988);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9829);



function AuthorLayout({ children , content  }) {
    const { name , avatar , occupation , company  } = content;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center sm:text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-xl font-bold md:text-3xl lg:text-4xl",
                                        children: "Dale Larroder"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-sm font-normal md:text-base",
                                        children: [
                                            occupation,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-semibold",
                                                children: company
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    alt: "Dale Larroder",
                                    height: 130,
                                    width: 130,
                                    src: avatar || "",
                                    className: "rounded-full object-scale-down grayscale"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/PageTitle.tsx
var PageTitle = __webpack_require__(2866);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/PostComments/index.tsx


const GiscusComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PostComments\\index.tsx -> " + "./Giscus"
        ]
    },
    ssr: false
});
const PostComments = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "comment",
        children: /*#__PURE__*/ jsx_runtime_.jsx(GiscusComponent, {})
    });
};
/* harmony default export */ const components_PostComments = (PostComments);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/PostNavigation.tsx


function PostNavigation({ prev , next  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-rows-2 gap-3 pt-4 sm:grid-cols-2 sm:pt-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: prev && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center space-y-1 sm:items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "italic",
                            children: "Previous Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `/blog/${prev.slug}`,
                            className: "underline-magical max-w-sm truncate sm:max-w-[250px] xl:max-w-md",
                            children: [
                                "← ",
                                prev.title
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: next && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center space-y-1 sm:items-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "italic",
                            children: "Next Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `/blog/${next.slug}`,
                            className: "underline-magical max-w-sm truncate sm:max-w-[250px] xl:max-w-md",
                            children: [
                                next.title,
                                " →"
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/SEO.tsx
var SEO = __webpack_require__(9829);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./layouts/MDX/PostLayout.tsx






const postDateTemplate = {
    year: "numeric",
    month: "long",
    day: "numeric"
};
function PostLayout({ content , authorDetails , children , next , prev  }) {
    const { slug , date , title , author , readingTime  } = content;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* BlogSEO */.Uy, {
                url: `${(siteMetadata_default()).siteUrl}/blog/${slug}`,
                authorDetails: authorDetails,
                ...content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: "space-y-1 rounded-lg bg-primary-500 py-4 px-2 text-center sm:py-6 md:py-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PageTitle/* default */.Z, {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Published on"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                        className: "flex flex-col justify-center text-base font-medium leading-6 text-white sm:flex-row sm:space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center justify-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: author
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: `${new Date(date).toLocaleDateString((siteMetadata_default()).locale, postDateTemplate)}`
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "hidden sm:block",
                                                children: "-"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: readingTime.text
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "divide-y divide-gray-200 font-medium dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",
                        style: {
                            gridTemplateRows: "auto 1fr"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "prose max-w-none pt-8 pb-8 dark:prose-dark",
                                children: [
                                    children,
                                    /*#__PURE__*/ jsx_runtime_.jsx(PostNavigation, {
                                        prev: prev,
                                        next: next
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_PostComments, {})
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsesLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);


function UsesLayout({ children , content  }) {
    const { name  } = content;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSEO */ .TQ, {
                title: `Uses - ${name}`,
                description: `What I Use - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-8 flex flex-col space-y-2 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
                                children: "What I Use"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-gray-700 dark:text-gray-300",
                                children: [
                                    "Inspired by",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://wesbos.com/uses",
                                        className: "underline-magical",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Wes bos"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;