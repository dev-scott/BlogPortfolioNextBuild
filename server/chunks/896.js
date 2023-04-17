"use strict";
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 6127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


const PostCardComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PostCard\\index.tsx -> " + "./PostCard"
        ]
    },
    ssr: false
});
const PostCard = ({ posts , showTags  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "comment",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostCardComponent, {
            posts: posts,
            showTags: showTags
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);


/***/ }),

/***/ 4896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(7966);
;// CONCATENATED MODULE: ./components/Pagination.tsx


function Pagination({ totalPages , currentPage  }) {
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "space-y-2 pt-6 pb-8 md:space-y-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex justify-between",
            children: [
                !prevPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !prevPage,
                    children: "Previous"
                }),
                prevPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Previous"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        currentPage,
                        " of ",
                        totalPages
                    ]
                }),
                !nextPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !nextPage,
                    children: "Next"
                }),
                nextPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: `/blog/page/${currentPage + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Next"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/PostCard/index.tsx
var PostCard = __webpack_require__(6127);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layouts/MDX/ListLayout.tsx




function ListLayout({ posts , title , initialDisplayPosts =[] , pagination  }) {
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const filteredBlogPosts = posts.filter((post)=>{
        const searchContent = post.title + post.summary + post.tags?.join(" ");
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    // If initialDisplayPosts exist, display it if no searchValue is specified.
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-2 rounded-lg pt-8 pb-3 md:space-y-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
                                children: "My Blog \uD83D\uDC4B"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative max-w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        "aria-label": "Search articles",
                                        type: "text",
                                        onChange: (e)=>setSearchValue(e.target.value),
                                        placeholder: "Search articles",
                                        className: "block w-full rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "absolute right-3 top-3 h-6 w-6 text-gray-400 dark:text-gray-300",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PostCard/* default */.Z, {
                        posts: displayPosts
                    })
                ]
            }),
            pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages
            })
        ]
    });
}


/***/ })

};
;