"use strict";
(() => {
var exports = {};
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ now_playing)
});

;// CONCATENATED MODULE: ./types/Spotify.ts
const nowPlayingEmptyState = {
    album: "",
    albumImageUrl: "",
    artist: "",
    isPlaying: false,
    songUrl: "",
    title: ""
};

// EXTERNAL MODULE: ./lib/spotify.ts
var spotify = __webpack_require__(7108);
;// CONCATENATED MODULE: ./pages/api/now-playing.ts


const nowPlaying = async (req, res)=>{
    const response = await (0,spotify/* getNowPlaying */.e)();
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json(nowPlayingEmptyState);
    }
    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist)=>artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title
    });
};
/* harmony default export */ const now_playing = (nowPlaying);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [108], () => (__webpack_exec__(7526)));
module.exports = __webpack_exports__;

})();