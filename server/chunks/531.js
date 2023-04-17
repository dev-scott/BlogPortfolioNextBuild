"use strict";
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 6531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_PER_PAGE": () => (/* binding */ POSTS_PER_PAGE),
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6668);
/* harmony import */ var _layouts_MDX_ListLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4896);
/* harmony import */ var _lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const POSTS_PER_PAGE = 5;
const getStaticProps = async ()=>{
    const activePosts = contentlayer_generated__WEBPACK_IMPORTED_MODULE_6__/* .allBlogs.filter */ .R6.filter((p)=>p.draft === false);
    const posts = (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_5__/* .sortedBlogPost */ .Rm)(activePosts);
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
    };
    return {
        props: {
            initialDisplayPosts: (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_5__/* .allCoreContent */ .ND)(initialDisplayPosts),
            posts: (0,_lib_utils_contentlayer__WEBPACK_IMPORTED_MODULE_5__/* .allCoreContent */ .ND)(posts),
            pagination
        }
    };
};
function Blog({ posts , initialDisplayPosts , pagination  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSEO */ .TQ, {
                title: `Blog - ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().author)}`,
                description: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_MDX_ListLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
                posts: posts,
                initialDisplayPosts: initialDisplayPosts,
                pagination: pagination,
                title: "Blog"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;