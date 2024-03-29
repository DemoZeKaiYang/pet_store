if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_UNLOAD = "onUnload";
  const ON_PAGE_SCROLL = "onPageScroll";
  const ON_REACH_BOTTOM = "onReachBottom";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom2) {
    return shared.isString(component) ? easycom2 : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$15 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$d = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$v], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  let platform$1 = "other";
  const _sfc_main$14 = {
    name: "UniFab",
    emits: ["fabClick", "trigger"],
    props: {
      pattern: {
        type: Object,
        default() {
          return {};
        }
      },
      horizontal: {
        type: String,
        default: "left"
      },
      vertical: {
        type: String,
        default: "bottom"
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      content: {
        type: Array,
        default() {
          return [];
        }
      },
      show: {
        type: Boolean,
        default: false
      },
      popMenu: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fabShow: false,
        isShow: false,
        isAndroidNvue: platform$1 === "android",
        styles: {
          color: "#3c3e49",
          selectedColor: "#007AFF",
          backgroundColor: "#fff",
          buttonColor: "#007AFF",
          iconColor: "#fff",
          icon: "plusempty"
        }
      };
    },
    computed: {
      contentWidth(e2) {
        return (this.content.length + 1) * 55 + 15 + "px";
      },
      contentWidthMin() {
        return "55px";
      },
      // 动态计算宽度
      boxWidth() {
        return this.getPosition(3, "horizontal");
      },
      // 动态计算高度
      boxHeight() {
        return this.getPosition(3, "vertical");
      },
      // 计算左下位置
      leftBottom() {
        return this.getPosition(0, "left", "bottom");
      },
      // 计算右下位置
      rightBottom() {
        return this.getPosition(0, "right", "bottom");
      },
      // 计算左上位置
      leftTop() {
        return this.getPosition(0, "left", "top");
      },
      rightTop() {
        return this.getPosition(0, "right", "top");
      },
      flexDirectionStart() {
        return this.getPosition(1, "vertical", "top");
      },
      flexDirectionEnd() {
        return this.getPosition(1, "vertical", "bottom");
      },
      horizontalLeft() {
        return this.getPosition(2, "horizontal", "left");
      },
      horizontalRight() {
        return this.getPosition(2, "horizontal", "right");
      },
      // 计算 nvue bottom
      nvueBottom() {
        uni.getSystemInfoSync().windowBottom;
        return 30;
      }
    },
    watch: {
      pattern: {
        handler(val, oldVal) {
          this.styles = Object.assign({}, this.styles, val);
        },
        deep: true
      }
    },
    created() {
      this.isShow = this.show;
      if (this.top === 0) {
        this.fabShow = true;
      }
      this.styles = Object.assign({}, this.styles, this.pattern);
    },
    methods: {
      _onClick() {
        this.$emit("fabClick");
        if (!this.popMenu) {
          return;
        }
        this.isShow = !this.isShow;
      },
      open() {
        this.isShow = true;
      },
      close() {
        this.isShow = false;
      },
      /**
       * 按钮点击事件
       */
      _onItemClick(index, item) {
        if (!this.isShow) {
          return;
        }
        this.$emit("trigger", {
          index,
          item
        });
      },
      /**
       * 获取 位置信息
       */
      getPosition(types2, paramA, paramB) {
        if (types2 === 0) {
          return this.horizontal === paramA && this.vertical === paramB;
        } else if (types2 === 1) {
          return this.direction === paramA && this.vertical === paramB;
        } else if (types2 === 2) {
          return this.direction === paramA && this.horizontal === paramB;
        } else {
          return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
        }
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-cursor-point" }, [
      $props.popMenu && ($options.leftBottom || $options.rightBottom || $options.leftTop || $options.rightTop) && $props.content.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass([{
            "uni-fab--leftBottom": $options.leftBottom,
            "uni-fab--rightBottom": $options.rightBottom,
            "uni-fab--leftTop": $options.leftTop,
            "uni-fab--rightTop": $options.rightTop
          }, "uni-fab"]),
          style: vue.normalizeStyle($options.nvueBottom)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass([{
                "uni-fab__content--left": $props.horizontal === "left",
                "uni-fab__content--right": $props.horizontal === "right",
                "uni-fab__content--flexDirection": $props.direction === "vertical",
                "uni-fab__content--flexDirectionStart": $options.flexDirectionStart,
                "uni-fab__content--flexDirectionEnd": $options.flexDirectionEnd,
                "uni-fab__content--other-platform": !$data.isAndroidNvue
              }, "uni-fab__content"]),
              style: vue.normalizeStyle({ width: $options.boxWidth, height: $options.boxHeight, backgroundColor: $data.styles.backgroundColor }),
              elevation: "5"
            },
            [
              $options.flexDirectionStart || $options.horizontalLeft ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($props.content, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass([{ "uni-fab__item--active": $data.isShow }, "uni-fab__item"]),
                    onClick: ($event) => $options._onItemClick(index, item)
                  }, [
                    vue.createElementVNode("image", {
                      src: item.active ? item.selectedIconPath : item.iconPath,
                      class: "uni-fab__item-image",
                      mode: "aspectFit"
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "uni-fab__item-text",
                        style: vue.normalizeStyle({ color: item.active ? $data.styles.selectedColor : $data.styles.color })
                      },
                      vue.toDisplayString(item.text),
                      5
                      /* TEXT, STYLE */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $options.flexDirectionEnd || $options.horizontalRight ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-fab__item uni-fab__item--first"
              })) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass([{
            "uni-fab__circle--leftBottom": $options.leftBottom,
            "uni-fab__circle--rightBottom": $options.rightBottom,
            "uni-fab__circle--leftTop": $options.leftTop,
            "uni-fab__circle--rightTop": $options.rightTop,
            "uni-fab__content--other-platform": !$data.isAndroidNvue
          }, "uni-fab__circle uni-fab__plus"]),
          style: vue.normalizeStyle({ "background-color": $data.styles.buttonColor, "bottom": $options.nvueBottom }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
        },
        [
          vue.createVNode(_component_uni_icons, {
            class: vue.normalizeClass(["fab-circle-icon", { "uni-fab__plus--active": $data.isShow && $props.content.length > 0 }]),
            type: $data.styles.icon,
            color: $data.styles.iconColor,
            size: "32"
          }, null, 8, ["type", "color", "class"]),
          vue.createCommentVNode(` <view class="fab-circle-v"  :class="{'uni-fab__plus--active': isShow && content.length > 0}"></view>\r
			<view class="fab-circle-h" :class="{'uni-fab__plus--active': isShow  && content.length > 0}"></view> `)
        ],
        6
        /* CLASS, STYLE */
      )
    ]);
  }
  const __easycom_0$c = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$u], ["__scopeId", "data-v-85f34dfc"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-fab/components/uni-fab/uni-fab.vue"]]);
  var isVue2 = false;
  function set$1(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set$1(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set$1(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set$1(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set$1(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store, p2, assign({ value: store[p2] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v2) => Object.assign(provideCache, v2)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const devUrl = "http://192.168.6.3:9000";
  const WEBSOCKETURL = "ws://192.168.6.3:9000/chat";
  function request(path, params = {}, options = {}) {
    let token = null;
    token = uni.getStorageSync("token");
    return new Promise((resolve, reject) => {
      uni.request({
        url: devUrl + path,
        method: options.method || "GET",
        data: params,
        header: {
          "Authorization": token
        },
        sslVerify: false,
        ...options,
        // 其他请求配置
        success: (res) => {
          if (res.data.code === 401) {
            const store = useUserStore();
            store.resetUser();
            uni.showToast({
              title: "登录超时,请重新登录",
              duration: 3e3,
              icon: "fail"
            });
            uni.navigateTo({
              url: "/pages/login/login"
            });
            return reject(res.data);
          }
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  const updateUserApi = async (user) => {
    return await request("/user/update", user, {
      method: "post"
    });
  };
  const loginApi = async (obj) => {
    return await request("/user/login", obj, {
      method: "post"
    });
  };
  const registerApi = async (obj) => {
    return await request("/user", obj, {
      method: "post"
    });
  };
  const useUserStore = defineStore("user", () => {
    const user = vue.ref(uni.getStorageSync("user") || {});
    const token = vue.ref(uni.getStorageSync("token") || "");
    const avatar = vue.computed(() => {
      return `${devUrl}/uploads/` + user.value.user_avatar;
    });
    function updateUser(newValue) {
      user.value = newValue;
      uni.setStorageSync("user", user.value);
    }
    function updateToken(newValue) {
      token.value = newValue;
      uni.setStorageSync("token", token.value);
    }
    function resetUser() {
      user.value = {};
      uni.removeStorageSync("user");
      uni.removeStorageSync("token");
    }
    function updateDate(newValue) {
      user.value.user_birthday = newValue;
    }
    function updateAvatar(newValue) {
      user.value.user_avatar = newValue;
    }
    async function saveInfo() {
      const result = updateUserApi(user.value);
      if (result.code === 200) {
        user.value = result.data;
        uni.setStorageSync("user", user.value);
        return true;
      }
      return false;
    }
    return {
      user,
      updateUser,
      updateToken,
      token,
      resetUser,
      updateDate,
      avatar,
      updateAvatar,
      saveInfo
    };
  });
  const _sfc_main$13 = {
    __name: "PersonInfo",
    setup(__props) {
      const store = useUserStore();
      const editPerson = () => {
        uni.navigateTo({
          url: "/pages/my/EditPerson"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "my-infomation",
          onClick: editPerson
        }, [
          vue.createCommentVNode(" 头像 "),
          vue.createElementVNode("view", { class: "my-avatar" }, [
            vue.createElementVNode("img", {
              src: vue.unref(store).avatar,
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createCommentVNode(" 个人信息 "),
          vue.createElementVNode("view", { class: "person" }, [
            vue.createElementVNode(
              "h3",
              null,
              vue.toDisplayString(vue.unref(store).user.user_name),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "p",
              null,
              vue.toDisplayString(vue.unref(store).user.user_signature),
              1
              /* TEXT */
            )
          ]),
          vue.createCommentVNode(" 图标 "),
          vue.createElementVNode("view", { class: "show-icon" }, [
            vue.createVNode(_component_uni_icons, {
              type: "right",
              size: "24",
              color: "white"
            })
          ])
        ]);
      };
    }
  };
  const PersonInfo = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-a476a3a8"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/PersonInfo.vue"]]);
  const _sfc_main$12 = {
    __name: "icon-base",
    props: ["type", "size", "color"],
    setup(__props) {
      const props = __props;
      const iconName = vue.computed(() => {
        return `icon-` + props.type;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["iconfont", vue.unref(iconName)]),
            style: vue.normalizeStyle({ fontSize: __props.size + "rpx", color: __props.color })
          },
          null,
          6
          /* CLASS, STYLE */
        );
      };
    }
  };
  const __easycom_0$b = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__file", "D:/graduationProject/pet-front-end/components/icon-base/icon-base.vue"]]);
  const _sfc_main$11 = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        style: vue.normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
        class: "uni-grid-item"
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
            style: vue.normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$t], ["__scopeId", "data-v-7a807eb7"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  const _sfc_main$10 = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      // 每列显示个数
      column: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e2) {
        this.$emit("change", e2);
      },
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.width = parseInt((ret[0].width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-grid-wrap" }, [
      vue.createElementVNode("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: vue.normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: vue.normalizeStyle({ "border-left-color": $props.borderColor })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 14, ["id"])
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$s], ["__scopeId", "data-v-07acefee"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  const _sfc_main$$ = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$r], ["__scopeId", "data-v-637fd36b"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const _sfc_main$_ = {
    __name: "OrderList",
    setup(__props) {
      const gotoOrderDetail = () => {
        uni.navigateTo({
          url: "/pages/my/OrderDetail"
        });
      };
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_1$5);
        const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_2$1);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$4);
        return vue.openBlock(), vue.createBlock(_component_uni_section, {
          title: "我的订单",
          type: "line",
          padding: "",
          titleFontSize: "18px"
        }, {
          default: vue.withCtx(() => [
            vue.createCommentVNode(' <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text> '),
            vue.createVNode(_component_uni_grid, {
              column: 4,
              highlight: true,
              onChange: _ctx.change,
              showBorder: false,
              square: false
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_grid_item, null, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" },
                      onClick: gotoOrderDetail
                    }, [
                      vue.createVNode(_component_icon_base, {
                        type: "huodaofukuan",
                        size: "50"
                      }),
                      vue.createElementVNode("text", { class: "text" }, "我的订单")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_grid_item, null, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      vue.createVNode(_component_icon_base, {
                        type: "wuliyoutuihuo",
                        size: "50"
                      }),
                      vue.createElementVNode("text", { class: "text" }, "待付款")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_grid_item, null, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      vue.createVNode(_component_icon_base, {
                        type: "quanchangbaoyou",
                        size: "50"
                      }),
                      vue.createElementVNode("text", { class: "text" }, "待收货")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_grid_item, null, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      vue.createVNode(_component_icon_base, {
                        type: "zhengguifapiao",
                        size: "50"
                      }),
                      vue.createElementVNode("text", { class: "text" }, "已完成")
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange"])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const OrderList = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-98ac0607"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/OrderList.vue"]]);
  const _imports_0 = "/static/image/addCat.png";
  const getPetApi = async (user_id) => {
    return await request("/pet", {
      user_id
    });
  };
  const getKindPetApi = async (obj) => {
    return await request("/kind");
  };
  const updatePetApi = async (obj) => {
    return await request("/pet", obj, {
      method: "post"
    });
  };
  const delPetApi = async (id) => {
    return await request("/pet/del", {
      pet_id: id
    }, {
      method: "post"
    });
  };
  const reqParams = (tragetUrl, params) => {
    const queryString = Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&");
    return `${tragetUrl}?${queryString}`;
  };
  const _sfc_main$Z = {
    __name: "MyPet",
    setup(__props) {
      const userStore = useUserStore();
      const petData = vue.ref([]);
      const editPet = (item) => {
        const url = reqParams("/pages/my/EditPet", item);
        uni.navigateTo({ url });
      };
      const getPetData = async () => {
        const result = await getPetApi(userStore.user.user_id);
        if (result.code === 200) {
          petData.value = result.data;
        }
      };
      const addPet = () => {
        uni.navigateTo({
          url: `/pages/my/EditPet`
        });
      };
      vue.onMounted(() => {
        getPetData();
      });
      onLoad(() => {
        uni.$on("renderPet", getPetData);
      });
      onUnload(() => {
        uni.$off("renderPet");
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$4);
        return vue.openBlock(), vue.createBlock(_component_uni_section, {
          title: "我的宠物",
          type: "line",
          padding: "",
          titleFontSize: "18px",
          class: "pet-main"
        }, {
          right: vue.withCtx(() => [
            vue.createTextVNode(" 添加宠物"),
            vue.createVNode(_component_uni_icons, {
              type: "plusempty",
              size: "18",
              onClick: addPet
            })
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "indicator-dots": petData.value.length > 0
            }, [
              vue.createCommentVNode(" 没有宠物的时候添加一个占位 "),
              petData.value.length <= 0 ? (vue.openBlock(), vue.createElementBlock("swiper-item", {
                key: 0,
                class: "nopet-swiper-item"
              }, [
                vue.createElementVNode("view", {
                  class: "none-pet",
                  onClick: addPet
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "plusempty",
                    size: "50",
                    color: "#c3c3c3"
                  }),
                  vue.createElementVNode("view", null, " 请添加一只宠物 "),
                  vue.createCommentVNode(" 图标 "),
                  vue.createElementVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "add-pet-img"
                  })
                ])
              ])) : (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 1 },
                vue.renderList(petData.value, (p2, index) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", { class: "pet-swiper-item" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(p2, (pet, index2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "grid-item-box",
                          style: { "background-color": "#fff" },
                          onClick: ($event) => editPet(pet),
                          key: pet.pet_id
                        }, [
                          vue.createElementVNode("img", {
                            src: `${vue.unref(devUrl)}/pet_uploads/${pet.pet_avatar}`,
                            alt: "",
                            srcset: ""
                          }, null, 8, ["src"]),
                          vue.createElementVNode(
                            "text",
                            { class: "text" },
                            vue.toDisplayString(pet.pet_name),
                            1
                            /* TEXT */
                          )
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ], 8, ["indicator-dots"])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const MyPet = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-bfd5e8ec"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/MyPet.vue"]]);
  const _sfc_main$Y = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x = `${-w2 + this.offset[0]}px`;
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList2 = {
          rightTop: {
            right: x,
            top: y2
          },
          rightBottom: {
            right: x,
            bottom: y2
          },
          leftBottom: {
            left: x,
            bottom: y2
          },
          leftTop: {
            left: x,
            top: y2
          }
        };
        const match = whiteList2[this.absolute];
        return match ? match : whiteList2["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$q], ["__scopeId", "data-v-c97cb896"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$X = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e2) {
        this.$emit("switchChange", e2.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$p], ["__scopeId", "data-v-c7524739"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$W = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e2) {
        this.$emit("scrolltolower");
      },
      scroll(e2) {
        this.$emit("scroll", e2);
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$o], ["__scopeId", "data-v-c2f1266a"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$V = {
    __name: "MoreFunction",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$a);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$2);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$4);
        return vue.openBlock(), vue.createBlock(_component_uni_section, {
          type: "circle",
          title: "更多功能",
          titleFontSize: "18px"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_list, { border: "true" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_list_item, {
                  "show-extra-icon": true,
                  showArrow: "",
                  "extra-icon": {
                    color: "#2979ff",
                    size: "22",
                    type: "gear-filled"
                  },
                  title: "设置",
                  onClick: _cache[0] || (_cache[0] = () => {
                  })
                }),
                vue.createVNode(_component_uni_list_item, {
                  "show-extra-icon": true,
                  showArrow: "",
                  "extra-icon": {
                    color: "#2979ff",
                    size: "22",
                    type: "location-filled"
                  },
                  title: "收货地址",
                  to: "/pages/my/Address"
                }),
                vue.createVNode(_component_uni_list_item, {
                  "show-extra-icon": true,
                  showArrow: "",
                  "extra-icon": {
                    color: "#2979ff",
                    size: "22",
                    type: "help-filled"
                  },
                  title: "关于"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const MoreFunction = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__file", "D:/graduationProject/pet-front-end/pages/my/components/MoreFunction.vue"]]);
  const _sfc_main$U = {
    __name: "index",
    setup(__props) {
      const content = vue.ref([{
        text: "客服",
        iconPath: "/static/image/kefu.png",
        selectedIconPath: "/static/image/selectkefu.png",
        active: false
      }]);
      const store = useUserStore();
      const loginOut = () => {
        store.resetUser();
        try {
          uni.removeStorageSync("token");
          uni.removeStorageSync("user");
        } catch (e2) {
          formatAppLog("log", "at pages/my/index.vue:50", e2);
        }
        uni.switchTab({
          url: "/pages/home/index"
        });
      };
      const fabClick = () => {
        formatAppLog("log", "at pages/my/index.vue:59", 1);
      };
      const trigger = (e2) => {
        content.value[e2.index].active = !e2.item.active;
        uni.navigateTo({
          url: "/pages/messages/Chat"
        });
        formatAppLog("log", "at pages/my/index.vue:68", e2);
      };
      return (_ctx, _cache) => {
        const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0$c);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(PersonInfo),
            vue.createVNode(OrderList),
            vue.createVNode(MyPet),
            vue.createVNode(MoreFunction),
            vue.createElementVNode("button", {
              type: "primary",
              class: "loginout",
              onClick: loginOut
            }, "退出登录"),
            vue.createCommentVNode(" 悬浮按钮 "),
            vue.createElementVNode("view", { class: "" }, [
              vue.createVNode(_component_uni_fab, {
                content: content.value,
                horizontal: "right",
                vertical: "bottom",
                direction: "vertical",
                onFabClick: fabClick,
                onTrigger: trigger
              }, null, 8, ["content"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-f97bc692"], ["__file", "D:/graduationProject/pet-front-end/pages/my/index.vue"]]);
  const _sfc_main$T = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        // 默认1s滚动100px
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        // 是否单行
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        // 是否滚动，添加后控制单行效果取消
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        // 是否显示左侧icon
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        // 是否显示右侧查看更多
        type: [Boolean, String],
        default: false
      },
      showClose: {
        // 是否显示左侧关闭按钮
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    computed: {
      isShowGetMore() {
        return this.showGetMore === true || this.showGetMore === "true";
      },
      isShowClose() {
        return (this.showClose === true || this.showClose === "true") && (this.showGetMore === false || this.showGetMore === "false");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return $data.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "uni-noticebar",
        style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
      },
      [
        $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "uni-noticebar-icon",
          type: "sound",
          color: $props.color,
          size: $props.fontSize * 1.5
        }, null, 8, ["color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            ref: "textBox",
            class: vue.normalizeClass(["uni-noticebar__content-wrapper", {
              "uni-noticebar__content-wrapper--scrollable": $props.scrollable,
              "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText)
            }]),
            style: vue.normalizeStyle({ height: $props.scrollable ? $props.fontSize * 1.5 + "px" : "auto" })
          },
          [
            vue.createElementVNode("view", {
              id: $data.elIdBox,
              class: vue.normalizeClass(["uni-noticebar__content", {
                "uni-noticebar__content--scrollable": $props.scrollable,
                "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText)
              }])
            }, [
              vue.createElementVNode("text", {
                id: $data.elId,
                ref: "animationEle",
                class: vue.normalizeClass(["uni-noticebar__content-text", {
                  "uni-noticebar__content-text--scrollable": $props.scrollable,
                  "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore)
                }]),
                style: vue.normalizeStyle({
                  color: $props.color,
                  fontSize: $props.fontSize + "px",
                  lineHeight: $props.fontSize * 1.5 + "px",
                  width: $data.wrapWidth + "px",
                  "animationDuration": $data.animationDuration,
                  "-webkit-animationDuration": $data.animationDuration,
                  animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState,
                  "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState,
                  animationDelay: $data.animationDelay,
                  "-webkit-animationDelay": $data.animationDelay
                })
              }, vue.toDisplayString($props.text), 15, ["id"])
            ], 10, ["id"])
          ],
          6
          /* CLASS, STYLE */
        ),
        $options.isShowGetMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-noticebar__more uni-cursor-point",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
        }, [
          $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ color: $props.moreColor, fontSize: $props.fontSize + "px" })
            },
            vue.toDisplayString($props.moreText),
            5
            /* TEXT, STYLE */
          )) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            type: "right",
            color: $props.moreColor,
            size: $props.fontSize * 1.1
          }, null, 8, ["color", "size"]))
        ])) : vue.createCommentVNode("v-if", true),
        $options.isShowClose ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-noticebar-close uni-cursor-point"
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "closeempty",
            color: $props.color,
            size: $props.fontSize * 1.1,
            onClick: $options.close
          }, null, 8, ["color", "size", "onClick"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$n], ["__scopeId", "data-v-c3453ea3"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$S = {
    __name: "ServiceSelect",
    props: {
      title: String,
      icColor: String,
      type: String,
      bgColor: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        return vue.openBlock(), vue.createElementBlock("view", { class: "com-base" }, [
          vue.createCommentVNode(" 上方的展示 "),
          vue.createElementVNode(
            "view",
            {
              class: "show-icon",
              style: vue.normalizeStyle({ backgroundColor: __props.bgColor })
            },
            [
              vue.createVNode(_component_icon_base, {
                type: __props.type,
                size: "50",
                color: __props.icColor
              }, null, 8, ["type", "color"])
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            { class: "describe" },
            vue.toDisplayString(__props.title),
            1
            /* TEXT */
          )
        ]);
      };
    }
  };
  const ServiceSelect = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-fbb6c4ac"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/ServiceSelect.vue"]]);
  const _sfc_main$R = {
    __name: "SelectItem",
    props: {
      title: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          { class: "main" },
          vue.toDisplayString(__props.title),
          1
          /* TEXT */
        );
      };
    }
  };
  const SelectItem = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-72203b0b"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/SelectItem.vue"]]);
  const _sfc_main$Q = {
    __name: "SelectType",
    props: ["title", "imgurl"],
    setup(__props) {
      const props = __props;
      vue.ref("");
      const imageUrl = vue.computed(() => {
        return devUrl + "/service_uploads/" + props.imgurl;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
          vue.createCommentVNode(" 图片图标 "),
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("img", {
              src: vue.unref(imageUrl),
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createCommentVNode(" 文字 "),
          vue.createElementVNode(
            "view",
            { class: "right" },
            vue.toDisplayString(__props.title),
            1
            /* TEXT */
          )
        ]);
      };
    }
  };
  const SelectType = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-9e8eefd2"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/SelectType.vue"]]);
  const getServiceTypeApi = async () => {
    return await request("/getServiceType");
  };
  const getServiceAPI = async (service_type_id) => {
    return await request("/getService", {
      service_type_id
    }, {
      method: "post"
    });
  };
  const getServiceDetailAPI = async (service_id) => {
    return await request("/getServiceDetail", {
      service_id
    });
  };
  const _sfc_main$P = {
    __name: "index",
    setup(__props) {
      const serviceTypeList = vue.ref([]);
      const serviceList = vue.ref([]);
      const gotoDetailService = (service_id) => {
        const url = reqParams("/pages/home/DetailService", {
          service_id
        });
        uni.navigateTo({ url });
      };
      const getServiceTypeData = async () => {
        const result = await getServiceTypeApi();
        formatAppLog("log", "at pages/home/index.vue:88", result);
        if (result.code === 2e3) {
          serviceTypeList.value = result.data;
          getServiceData(serviceTypeList.value[0].service_type_id);
        }
      };
      const getServiceData = async (service_type_id) => {
        const result = await getServiceAPI(service_type_id);
        if (result.code === 2e3) {
          serviceList.value = result.data;
        }
      };
      const jumpAdopt = () => {
        uni.switchTab({
          url: "/pages/messages/index"
        });
      };
      vue.onMounted(() => {
        getServiceTypeData();
      });
      return (_ctx, _cache) => {
        const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_0$9);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$4);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_uni_notice_bar, {
            "show-icon": "",
            scrollable: "",
            text: "uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
          }),
          vue.createElementVNode("view", { class: "hot-service" }, [
            vue.createVNode(ServiceSelect, {
              title: "上门喂猫",
              bgColor: "#2979FF",
              type: "zhongyiguan",
              icColor: "#fff",
              onClick: _cache[0] || (_cache[0] = ($event) => gotoDetailService("62f84788-252f-4908-ba43-a19001052418"))
            }),
            vue.createVNode(ServiceSelect, {
              title: "上门喂狗",
              bgColor: "#2979FF",
              type: "liugou",
              icColor: "#fff",
              onClick: _cache[1] || (_cache[1] = ($event) => gotoDetailService("65d55764-1230-423d-8424-a5f1c9b75425"))
            }),
            vue.createVNode(ServiceSelect, {
              title: "上门喂食",
              bgColor: "#2979FF",
              type: "yuyuedingdan",
              icColor: "#fff",
              onClick: _cache[2] || (_cache[2] = ($event) => gotoDetailService("156b135f-338c-462c-a199-03f138166828"))
            }),
            vue.createVNode(ServiceSelect, {
              title: "领养宠物",
              bgColor: "#2979FF",
              type: "aixinlingyanghover",
              icColor: "#fff",
              onClick: jumpAdopt
            })
          ]),
          vue.createCommentVNode(" 服务对象 "),
          vue.createVNode(_component_uni_section, { title: "请选择服务宠物类型" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "type-service" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(serviceTypeList.value, (st2) => {
                    return vue.openBlock(), vue.createBlock(SelectItem, {
                      title: st2.service_type_name,
                      key: st2.service_type_id,
                      onClick: ($event) => getServiceData(st2.service_type_id)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(st2.service_type_name),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" 服务类型 "),
          vue.createVNode(_component_uni_section, { title: "请选择服务宠物类型" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "type-service" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(serviceList.value, (service) => {
                    return vue.openBlock(), vue.createBlock(SelectType, {
                      class: "service-type",
                      onClick: ($event) => gotoDetailService(service.service_id),
                      title: service.service_name,
                      imgurl: service.service_image
                    }, null, 8, ["onClick", "title", "imgurl"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/graduationProject/pet-front-end/pages/home/index.vue"]]);
  const easycom = {
    autoscan: true
  };
  const pages = [
    {
      path: "pages/my/index",
      style: {
        navigationBarTitleText: "个人中心"
      }
    },
    {
      path: "pages/home/index",
      style: {
        navigationBarTitleText: "首页",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/messages/index",
      style: {
        navigationBarTitleText: "消息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/shop/index",
      style: {
        navigationBarTitleText: "商城",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/category/index",
      style: {
        navigationBarTitleText: "全部分类",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/category/categoryproductlist",
      style: {
        navigationBarTitleText: "详细分类",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/category/productdetail",
      style: {
        enablePullDownRefresh: false,
        navigationBarTitleText: "详细商品"
      }
    },
    {
      path: "pages/car/car",
      style: {
        navigationBarTitleText: "购物车",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/my/Address",
      style: {
        navigationBarTitleText: "地址",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/my/EditAddress",
      style: {
        navigationBarTitleText: "编辑地址",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/my/EditPerson",
      style: {
        navigationBarTitleText: "编辑个人信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/home/DetailService",
      style: {
        navigationBarTitleText: "详细服务",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/my/OrderDetail",
      style: {
        navigationBarTitleText: "详细订单",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/community/index",
      style: {
        navigationBarTitleText: "发现",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/community/DetailArticle",
      style: {
        navigationBarTitleText: "消息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/messages/Chat",
      style: {
        navigationBarTitleText: "客服",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/community/PublishContent",
      style: {
        navigationBarTitleText: "推送内容",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/car/ConfirmAddress",
      style: {
        navigationBarTitleText: "确认地址",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/my/EditPet",
      style: {
        navigationBarTitleText: "编辑宠物",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/home/OrderService",
      style: {
        navigationBarTitleText: "服务订单",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/car/ConfirmOrder",
      style: {
        navigationBarTitleText: "确认订单",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/login",
      style: {
        navigationBarTitleText: "登录",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/register",
      style: {
        navigationBarTitleText: "注册",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/car/pay",
      style: {
        navigationBarTitleText: "支付",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/home/ComfirmAddress",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/adopt/index",
      style: {
        navigationBarTitleText: "领养中心",
        enablePullDownRefresh: false
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "white",
    navigationBarTitleText: "宠物家园",
    navigationBarBackgroundColor: "#2979ff",
    backgroundColor: "#2979ff",
    "app-plus": {
      background: "#efeff4"
    },
    onReachBottomDistance: 50
  };
  const tabBar = {
    color: "#7A7E83",
    selectedColor: "#2979ff",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        iconPath: "static/image/chongwushouye.png",
        selectedIconPath: "static/image/chongwushouye-selected.png",
        pagePath: "pages/home/index",
        text: "主页"
      },
      {
        text: "商城",
        pagePath: "pages/shop/index",
        iconPath: "static/image/shangcheng.png",
        selectedIconPath: "static/image/shangcheng-selected.png"
      },
      {
        iconPath: "static/image/faxian.png",
        selectedIconPath: "static/image/faxian-selected.png",
        pagePath: "pages/community/index",
        text: "发现"
      },
      {
        iconPath: "static/image/xiaoxi.png",
        selectedIconPath: "static/image/xiaoxi-selected.png",
        pagePath: "pages/adopt/index",
        text: "领养"
      },
      {
        iconPath: "static/image/icon7.png",
        selectedIconPath: "static/image/icon7-selected.png",
        pagePath: "pages/my/index",
        text: "我的"
      }
    ]
  };
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  const e = {
    easycom,
    pages,
    globalStyle,
    tabBar,
    condition
  };
  function t$5(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x, c3, 12, a2[1]), x = u2(x, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x, m2, 12, a2[5]), x = u2(x, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x, v2, 12, a2[9]), x = u2(x, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x, k, 12, a2[13]), x = u2(x, O2, T2, C2, A2, 17, a2[14]), T2 = h2(T2, C2 = u2(C2, x, O2, T2, P2, 22, a2[15]), x, O2, c3, 5, a2[16]), O2 = h2(O2, T2, C2, x, y2, 9, a2[17]), x = h2(x, O2, T2, C2, S2, 14, a2[18]), C2 = h2(C2, x, O2, T2, o3, 20, a2[19]), T2 = h2(T2, C2, x, O2, m2, 5, a2[20]), O2 = h2(O2, T2, C2, x, I2, 9, a2[21]), x = h2(x, O2, T2, C2, P2, 14, a2[22]), C2 = h2(C2, x, O2, T2, g2, 20, a2[23]), T2 = h2(T2, C2, x, O2, v2, 5, a2[24]), O2 = h2(O2, T2, C2, x, A2, 9, a2[25]), x = h2(x, O2, T2, C2, f2, 14, a2[26]), C2 = h2(C2, x, O2, T2, w2, 20, a2[27]), T2 = h2(T2, C2, x, O2, k, 5, a2[28]), O2 = h2(O2, T2, C2, x, p2, 9, a2[29]), x = h2(x, O2, T2, C2, _2, 14, a2[30]), T2 = l2(T2, C2 = h2(C2, x, O2, T2, b2, 20, a2[31]), x, O2, m2, 4, a2[32]), O2 = l2(O2, T2, C2, x, w2, 11, a2[33]), x = l2(x, O2, T2, C2, S2, 16, a2[34]), C2 = l2(C2, x, O2, T2, A2, 23, a2[35]), T2 = l2(T2, C2, x, O2, c3, 4, a2[36]), O2 = l2(O2, T2, C2, x, g2, 11, a2[37]), x = l2(x, O2, T2, C2, _2, 16, a2[38]), C2 = l2(C2, x, O2, T2, I2, 23, a2[39]), T2 = l2(T2, C2, x, O2, k, 4, a2[40]), O2 = l2(O2, T2, C2, x, o3, 11, a2[41]), x = l2(x, O2, T2, C2, f2, 16, a2[42]), C2 = l2(C2, x, O2, T2, y2, 23, a2[43]), T2 = l2(T2, C2, x, O2, v2, 4, a2[44]), O2 = l2(O2, T2, C2, x, b2, 11, a2[45]), x = l2(x, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = l2(C2, x, O2, T2, p2, 23, a2[47]), x, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x, _2, 10, a2[49]), x = d2(x, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x, f2, 10, a2[53]), x = d2(x, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x, P2, 10, a2[57]), x = d2(x, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x, O2, T2, k, 21, a2[59]), T2 = d2(T2, C2, x, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x, S2, 10, a2[61]), x = d2(x, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", h = "CLIENT_DB", l = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I([]), P = b, T = I(""), C = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__EA811D3";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", $ = "needLogin", B = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function G(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function V(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function he() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...ae, locale: e2, LOCALE: e2 };
  }
  var le = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new te({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return le.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = le.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = le.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  }, ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), _e = ye, we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ae = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class xe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Oe = {}, Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  class Re {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ue extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Fe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", $e = "anonymousConverted", Be = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ge() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...ze, "x-seqid": e2 } };
  }
  class Ve {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ge]), Je(this._reqClass, "upload", [Ge]), Je(this._reqClass, "download", [Ge]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Me(Ke), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Me(Be), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === He.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Me($e, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De($e, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De(Be, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De($e, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ht = async function({ fileID: e2 }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = le.sign(n2, this.config.clientSecret);
      const r2 = he();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Ot(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var Et = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn` });
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => ({ errCode: 0, success: true, requestId: e4.requestId, result: e4.data })).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = xt.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Ot.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
  };
  var Lt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new Et(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Rt({ data: e2 }) {
    let t2;
    t2 = he();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Ut({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Rt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Nt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Dt = /[\\^$.*+?()[\]{}|]/g, Mt = RegExp(Dt.source);
  function qt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Mt.test(s2) ? s2.replace(Dt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Kt = "request", jt = "response", $t = "both";
  const An = { code: 2e4, message: "System error" }, Pn = { code: 20101, message: "Invalid client" };
  function xn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || An.code, message: r2 || o2, cause: a2 });
  }
  let En;
  function Dn({ secretType: e2 } = {}) {
    return e2 === Kt || e2 === jt || e2 === $t;
  }
  function Mn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function qn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), xn(Pn);
  }
  function Fn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Kn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Rt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Dn(n3), o2 = Mn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Fn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = qt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = qt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Nt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Ut), o2 = Ut) : o2 = n2, o2 = o2.bind(e2), Mn(t3))
        a2 = n2.call(e2, t3);
      else if (Dn(t3)) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (qn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new En({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  En = class {
    constructor() {
      throw xn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const jn = Symbol("CLIENT_DB_INTERNAL");
  function $n(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = jn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Wn = ["db.Geo", "db.command", "command.aggregate"];
  function Hn(e2, t2) {
    return Wn.indexOf(`${e2}.${t2}`) > -1;
  }
  function zn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => zn(e3));
      case "object":
        return e2._internalType === jn || Object.keys(e2).forEach((t2) => {
          e2[t2] = zn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function Jn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Gn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: zn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === Jn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = Jn(e2), n2 = Jn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: zn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: zn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return $n(new Gn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Hn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Yn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Qn(e2, t2 = {}) {
    return $n(new e2(t2), { get: (e3, t3) => Hn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: zn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Xn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = $n({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = $n({}, { get: (e3, t3) => Yn({ path: ["Geo"], method: t3 }) }), this.serverDate = Yn({ path: [], method: "serverDate" }), this.RegExp = Yn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(B, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Zn = "token无效，跳转登录页面", es = "token过期，跳转登录页面", ts = { TOKEN_INVALID_TOKEN_EXPIRED: es, TOKEN_INVALID_INVALID_CLIENTID: Zn, TOKEN_INVALID: Zn, TOKEN_INVALID_WRONG_TOKEN: Zn, TOKEN_INVALID_ANONYMOUS_USER: Zn }, ns = { "uni-id-token-expired": es, "uni-id-check-token-failed": Zn, "uni-id-token-not-exist": Zn, "uni-id-check-device-feature-failed": Zn };
  function ss(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function rs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ss(t2, e3.path)) : false === e3.needLogin && s2.push(ss(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function is(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function os() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function as() {
    return is(os());
  }
  function cs(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = is(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const us = !!e.uniIdRouter;
  const { loginPage: hs, routerNeedLogin: ls, resToLogin: ds, needLoginPage: ps, notNeedLoginPage: fs, loginPageInTabBar: gs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = rs(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = rs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: cs(i2, r2) };
  }();
  if (ps.indexOf(hs) > -1)
    throw new Error(`Login page [${hs}] should not be "needLogin", please check your pages.json`);
  function ms(e2) {
    const t2 = as();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ys(e2) {
    const t2 = is(ms(e2));
    return !(fs.indexOf(t2) > -1) && (ps.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function _s({ redirect: e2 }) {
    const t2 = is(e2), n2 = is(hs);
    return as() !== n2 && t2 !== n2;
  }
  function ws({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !_s({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(hs, t2);
    gs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    });
  }
  function vs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ns[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ns[e4] };
      }
      return n3;
    }();
    if (ys(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J($).length > 0)
        return setTimeout(() => {
          Y($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Is() {
    !function() {
      const e3 = os(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = vs({ url: e3 });
      t2 || n2 && ws({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = vs({ url: e3.url });
        return t3 ? e3 : s2 ? (ws({ api: n2, redirect: ms(e3.url) }), false) : e3;
      } });
    }
  }
  function Ss() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ns;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J($);
        Z().then(() => {
          const n3 = os();
          if (n3 && _s({ redirect: n3 }))
            return t3.length > 0 ? Y($, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (hs && ws({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function bs(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        G(j, e4);
      }, e3.offResponse = function(e4) {
        V(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        G($, e4);
      }, e3.offNeedLogin = function(e4) {
        V($, e4);
      }, us && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        Is.call(e3);
      }), ds && Ss.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        G(B, e4);
      }, e3.offRefreshToken = function(e4) {
        V(B, e4);
      };
    }(e2);
  }
  let ks;
  const As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ps = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ts() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ks(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ks = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ps.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = As.indexOf(e2.charAt(i2++)) << 18 | As.indexOf(e2.charAt(i2++)) << 12 | (n2 = As.indexOf(e2.charAt(i2++))) << 6 | (s2 = As.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Cs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), xs = t$5(Cs);
  const Os = "manual";
  function Es(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === Os)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ls(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...h2) {
          let l2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: u, data: { method: c2, params: h2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            l2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, l2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(B, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...h2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
            throw n3.detail = l2.result, Y(j, { type: z, content: n3 }), n3;
          }
          return Y(j, { type: z, content: l2.result }), l2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Rs(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Us({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Rs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ns(e2) {
    const t2 = Rs(this);
    return t2.initPromise || (t2.initPromise = Us.call(this, e2)), t2.initPromise;
  }
  function Ds(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ns.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ms(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class qs extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ms("getSystemInfo")(), Ms("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Fs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ks(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await Fs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function js(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const $s = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Lt };
  let Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = $s[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Ks(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), js(t2), Kn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Qn(Xn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Qn(Xn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ts, e3.chooseAndUploadFile = xs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Es(e3);
        } }), e3.SSEChannel = qs, e3.initSecureNetworkByWeixin = Ds(e3), e3.importObject = Ls(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Es(Bs);
    } }), bs(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var Ws = Bs;
  const avatarWidth = 45;
  const _sfc_main$O = {
    name: "UniListChat",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      clickable: {
        type: Boolean,
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      badgeText: {
        type: [String, Number],
        default: ""
      },
      badgePositon: {
        type: String,
        default: "right"
      },
      time: {
        type: String,
        default: ""
      },
      avatarCircle: {
        type: Boolean,
        default: false
      },
      avatar: {
        type: String,
        default: ""
      },
      avatarList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    // inject: ['list'],
    computed: {
      isDraft() {
        return this.note.slice(0, 14) == "[uni-im-draft]";
      },
      isSingle() {
        if (this.badgeText === "dot") {
          return "uni-badge--dot";
        } else {
          const badgeText = this.badgeText.toString();
          if (badgeText.length > 1) {
            return "uni-badge--complex";
          } else {
            return "uni-badge--single";
          }
        }
      },
      computedAvatar() {
        if (this.avatarList.length > 4) {
          this.imageWidth = avatarWidth * 0.31;
          return "avatarItem--3";
        } else if (this.avatarList.length > 1) {
          this.imageWidth = avatarWidth * 0.47;
          return "avatarItem--2";
        } else {
          this.imageWidth = avatarWidth;
          return "avatarItem--1";
        }
      }
    },
    watch: {
      avatar: {
        handler(avatar) {
          if (avatar.substr(0, 8) == "cloud://") {
            Ws.getTempFileURL({
              fileList: [avatar]
            }).then((res) => {
              let fileList = res.fileList || res.result.fileList;
              this.avatarUrl = fileList[0].tempFileURL;
            });
          } else {
            this.avatarUrl = avatar;
          }
        },
        immediate: true
      }
    },
    data() {
      return {
        isFirstChild: false,
        border: true,
        // avatarList: 3,
        imageWidth: 50,
        avatarUrl: ""
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
        this.border = this.list.border;
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      "hover-class": !$props.clickable && !$props.link ? "" : "uni-list-chat--hover",
      class: "uni-list-chat",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.onClick && $options.onClick(...args), ["stop"]))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass({ "uni-list--border": $data.border, "uni-list-chat--first": $data.isFirstChild })
        },
        null,
        2
        /* CLASS */
      ),
      vue.createElementVNode("view", { class: "uni-list-chat__container" }, [
        vue.createElementVNode("view", { class: "uni-list-chat__header-warp" }, [
          $props.avatarCircle || $props.avatarList.length === 0 ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["uni-list-chat__header", { "header--circle": $props.avatarCircle }])
            },
            [
              vue.createElementVNode("image", {
                class: vue.normalizeClass(["uni-list-chat__header-image", { "header--circle": $props.avatarCircle }]),
                src: $data.avatarUrl,
                mode: "aspectFill"
              }, null, 10, ["src"])
            ],
            2
            /* CLASS */
          )) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              vue.createCommentVNode(" 头像组 "),
              vue.createElementVNode("view", { class: "uni-list-chat__header" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.avatarList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: index,
                        class: vue.normalizeClass(["uni-list-chat__header-box", $options.computedAvatar]),
                        style: vue.normalizeStyle({ width: $data.imageWidth + "px", height: $data.imageWidth + "px" })
                      },
                      [
                        vue.createElementVNode("image", {
                          class: "uni-list-chat__header-image",
                          style: vue.normalizeStyle({ width: $data.imageWidth + "px", height: $data.imageWidth + "px" }),
                          src: item.url,
                          mode: "aspectFill"
                        }, null, 12, ["src"])
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          ))
        ]),
        vue.renderSlot(_ctx.$slots, "header", {}, void 0, true),
        $props.badgeText && $props.badgePositon === "left" ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-list-chat__badge uni-list-chat__badge-pos", [$options.isSingle]])
          },
          [
            vue.createElementVNode(
              "text",
              { class: "uni-list-chat__badge-text" },
              vue.toDisplayString($props.badgeText === "dot" ? "" : $props.badgeText),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-list-chat__content" }, [
          vue.createElementVNode("view", { class: "uni-list-chat__content-main" }, [
            vue.createElementVNode(
              "text",
              { class: "uni-list-chat__content-title uni-ellipsis" },
              vue.toDisplayString($props.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { style: { "flex-direction": "row" } }, [
              $options.isDraft ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "draft"
              }, "[草稿]")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                { class: "uni-list-chat__content-note uni-ellipsis" },
                vue.toDisplayString($options.isDraft ? $props.note.slice(14) : $props.note),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-list-chat__content-extra" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode(
                "text",
                { class: "uni-list-chat__content-extra-text" },
                vue.toDisplayString($props.time),
                1
                /* TEXT */
              ),
              $props.badgeText && $props.badgePositon === "right" ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: vue.normalizeClass(["uni-list-chat__badge", [$options.isSingle, $props.badgePositon === "right" ? "uni-list-chat--right" : ""]])
                },
                [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-list-chat__badge-text" },
                    vue.toDisplayString($props.badgeText === "dot" ? "" : $props.badgeText),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true)
            ], true)
          ])
        ])
      ])
    ], 8, ["hover-class"]);
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$m], ["__scopeId", "data-v-20df4ef0"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue"]]);
  const _sfc_main$N = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_list_chat = resolveEasycom(vue.resolveDynamicComponent("uni-list-chat"), __easycom_0$8);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode('  <view class="commu-fn">\r\n    <CommuniFn title="赞与收藏" type="dianzan" icColor="#FB635E" bgColor="#FDEBE9"></CommuniFn>\r\n    <CommuniFn title="新增粉丝" type="fensi" icColor="#F88440" bgColor="#FBF3E5"></CommuniFn>\r\n    <CommuniFn title="评论与@" type="xiaoxi11" icColor="#5ED99A" bgColor="#DCF8EC"></CommuniFn>\r\n    <CommuniFn title="谁看过我" type="yanjing-" icColor="#4785FC" bgColor="#E5EEFF"></CommuniFn>\r\n    \r\n  </view> '),
            vue.createElementVNode("view", { class: "message-list" }, [
              vue.createVNode(_component_uni_list, { border: true }, {
                default: vue.withCtx(() => [
                  vue.createCommentVNode(" 显示圆形头像 "),
                  vue.createVNode(_component_uni_list_chat, {
                    "avatar-circle": true,
                    title: "uni-app",
                    avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                    note: "您收到一条新的消息",
                    time: "2020-02-02 20:20",
                    to: "/pages/messages/Chat"
                  }),
                  vue.createVNode(_component_uni_list_chat, {
                    "avatar-circle": true,
                    title: "uni-app",
                    avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                    note: "您收到一条新的消息",
                    time: "2020-02-02 20:20"
                  }),
                  vue.createVNode(_component_uni_list_chat, {
                    "avatar-circle": true,
                    title: "uni-app",
                    avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
                    note: "您收到一条新的消息",
                    time: "2020-02-02 20:20"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const PagesMessagesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__file", "D:/graduationProject/pet-front-end/pages/messages/index.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$3 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$3 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant$3 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages$2 = {
    en: en$3,
    "zh-Hans": zhHans$3,
    "zh-Hant": zhHant$3
  };
  const {
    t: t$4
  } = initVueI18n(messages$2);
  const _sfc_main$M = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$4("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$4("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e2) {
        this.$emit("focus", e2.detail);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$l], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$L = {
    __name: "ShopList",
    props: {
      goodList: Array
    },
    setup(__props) {
      const props = __props;
      vue.ref(1);
      const pageSize = vue.ref(10);
      const isNoMore = vue.ref(false);
      const isLoading = vue.ref(false);
      const isInit = vue.ref(false);
      vue.onMounted(() => {
        isLoading.value = true;
        if (props.goodList) {
          isInit.value = true;
          isLoading.value = false;
          if (!props.goodList || props.goodList.length < pageSize.value) {
            isNoMore.value = true;
          }
        }
      });
      const clickItem = (index) => {
        uni.navigateTo({
          url: reqParams("/pages/category/productdetail", { good_id: index })
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          __props.goodList && __props.goodList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "t-goods-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.goodList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "t-goods-item",
                  key: index,
                  onClick: ($event) => clickItem(item.good_id)
                }, [
                  vue.createCommentVNode(" 图片 "),
                  vue.createElementVNode("image", {
                    class: "t-goods-img",
                    src: `${vue.unref(devUrl)}/good_uploads/${item.good_image}`
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 商品名称 "),
                  vue.createElementVNode("view", { class: "t-goods-name" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.good_name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createCommentVNode(" 商品价格 "),
                  vue.createElementVNode("view", { class: "t-goods-price" }, [
                    vue.createElementVNode("text", { class: "t-rmb" }, "¥"),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p1" },
                      vue.toDisplayString(item.good_price),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p2" },
                      "¥" + vue.toDisplayString(item.good_origin_price),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "t-rate" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.good_comment_num) + "人评价",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "t-rate-percent" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.good_comment_num) + "好评",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
          isLoading.value || isNoMore.value && __props.goodList && __props.goodList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "t-loading-more"
          }, [
            isLoading.value ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: "/static/loading.png"
            })) : vue.createCommentVNode("v-if", true),
            isLoading.value || isNoMore.value ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "t-loading-desc"
              },
              vue.toDisplayString(isLoading.value ? "加载中..." : isNoMore.value ? "没有更多数据了" : ""),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ])) : isInit.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "t-empty"
          }, [
            vue.createElementVNode("image", { src: "/static/goods.png" }),
            vue.createElementVNode("view", { class: "t-empty-desc" }, "没有商品哦~")
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const ShopList = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-419b7e21"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/ShopList.vue"]]);
  const _sfc_main$K = {
    __name: "CategorySelect",
    props: {
      title: String,
      icColor: String,
      type: String,
      bgColor: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        return vue.openBlock(), vue.createElementBlock("view", { class: "com-base" }, [
          vue.createCommentVNode(" 上方的展示 "),
          vue.createElementVNode(
            "view",
            {
              class: "show-icon",
              style: vue.normalizeStyle({ backgroundColor: __props.bgColor })
            },
            [
              vue.createVNode(_component_icon_base, {
                type: __props.type,
                size: "50",
                color: __props.icColor
              }, null, 8, ["type", "color"])
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            { class: "describe" },
            vue.toDisplayString(__props.title),
            1
            /* TEXT */
          )
        ]);
      };
    }
  };
  const CategorySelect = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-b536a4fa"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/CategorySelect.vue"]]);
  const getGoodApi = async (obj) => {
    return await request("/good", obj);
  };
  const _sfc_main$J = {
    __name: "index",
    setup(__props) {
      const searchRef = vue.ref();
      const searchValue = vue.ref("");
      const goodList = vue.ref([]);
      const categoryId = vue.ref("");
      const currentPage = vue.ref(1);
      const pageSize = vue.ref(10);
      const search = async (e2) => {
        categoryId.value = "";
        goodList.value = [];
        currentPage.value = 1;
        searchValue.value = e2.value;
        getData();
      };
      const JumpCategory = () => {
        uni.navigateTo({
          url: "/pages/category/index"
        });
      };
      const getData = async () => {
        try {
          const result = await getGoodApi({
            id: categoryId.value || "",
            currentPage: currentPage.value,
            pageSize: pageSize.value,
            searchValue: searchValue.value
          });
          if (result.code === 200) {
            goodList.value = [...goodList.value, ...result.data];
          }
        } catch (e2) {
          formatAppLog("log", "at pages/shop/index.vue:72", e2);
        }
      };
      const selectType = (id) => {
        categoryId.value = id;
        goodList.value = [];
        currentPage.value = 1;
        searchValue.value = "";
        searchRef.value.clear();
        getData();
      };
      const fabClick = () => {
        uni.navigateTo({
          url: "/pages/car/car"
        });
      };
      vue.onMounted(() => {
        getData();
      });
      onReachBottom(() => {
        currentPage.value += 1;
        getData();
      });
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$7);
        const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0$c);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 搜素栏 "),
            vue.createVNode(
              _component_uni_search_bar,
              {
                onConfirm: search,
                ref_key: "searchRef",
                ref: searchRef
              },
              null,
              512
              /* NEED_PATCH */
            ),
            vue.createCommentVNode(" 分类选项 "),
            vue.createElementVNode("view", { class: "category-select" }, [
              vue.createVNode(CategorySelect, {
                bgColor: "#2979FF",
                type: "gouliang",
                title: "狗狗主粮",
                icColor: "#fff",
                onClick: _cache[0] || (_cache[0] = ($event) => selectType("5ac481da-1eb6-4694-a3ee-42a74992c903"))
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "#2979FF",
                type: "maoliang",
                title: "猫咪主粮",
                icColor: "#fff",
                onClick: _cache[1] || (_cache[1] = ($event) => selectType("563c3b0e-9362-467b-8937-924694e258c2"))
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "#2979FF",
                type: "lingshi",
                title: "肉类零食",
                icColor: "#fff",
                onClick: _cache[2] || (_cache[2] = ($event) => selectType("32240347-9250-424e-b07b-83388d772c08"))
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "#2979FF",
                type: "guantou",
                title: "罐头湿粮",
                icColor: "#fff",
                onClick: _cache[3] || (_cache[3] = ($event) => selectType("1a5382dd-990e-4c71-891d-b617831e8931"))
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "#2979FF",
                type: "fenleiorguangchangorqitatianchong",
                title: "全部分类",
                icColor: "#fff",
                onClick: JumpCategory
              })
            ]),
            vue.createCommentVNode(" 商品列表 "),
            vue.createVNode(ShopList, { goodList: goodList.value }, null, 8, ["goodList"]),
            vue.createCommentVNode(" 购物车 "),
            vue.createVNode(
              _component_uni_fab,
              {
                ref: "fab",
                horizontal: "right",
                vertical: "bottom",
                onFabClick: fabClick,
                pattern: { icon: "cart" }
              },
              null,
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesShopIndex = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-7db6cc15"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/index.vue"]]);
  const _sfc_main$I = {
    __name: "index",
    emits: ["itemClick"],
    setup(__props, { emit }) {
      const showCategoryIndex = vue.ref(0);
      const headerPosition = vue.ref("fixed");
      const kindList = vue.ref([]);
      const showAll = vue.ref(true);
      onPageScroll((e2) => {
        if (e2.scrollTop >= 0) {
          headerPosition.value = "fixed";
        } else {
          headerPosition.value = "absolute";
        }
      });
      const showCategory = (index) => {
        if (index === null) {
          showAll.value = true;
          showCategoryIndex.value = null;
        } else {
          showAll.value = false;
          showCategoryIndex.value = index;
        }
      };
      const toCategory = (item) => {
        const targetPage = "/pages/category/categoryproductlist";
        const queryString = `${encodeURIComponent("good_category_id")}=${encodeURIComponent(item)}`;
        uni.navigateTo({
          url: `${targetPage}?${queryString}`
        });
      };
      const getData = async () => {
        const result = await request("/shop/goodKind");
        if (result.code === 200) {
          kindList.value = result.data;
        }
      };
      vue.onMounted(() => {
        getData();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "category-list" }, [
            vue.createCommentVNode(" 左侧分类导航 "),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "left"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["row", [showAll.value ? "on" : ""]]),
                  onClick: _cache[0] || (_cache[0] = ($event) => showCategory(null))
                },
                [
                  vue.createElementVNode("view", { class: "text" }, [
                    vue.createElementVNode("view", { class: "block" }),
                    vue.createTextVNode(" 全部 ")
                  ])
                ],
                2
                /* CLASS */
              ),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(kindList.value, (kind, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["row", [kind.good_kind_order == showCategoryIndex.value ? "on" : ""]]),
                    key: kind.good_kind_order,
                    onClick: ($event) => showCategory(kind.good_kind_order)
                  }, [
                    vue.createElementVNode("view", { class: "text" }, [
                      vue.createElementVNode("view", { class: "block" }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(kind.good_kind_name),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 右侧子导航 "),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "right"
            }, [
              vue.createCommentVNode(` :style="{height:kind.children.length>3?'500rpx':'300rpx'}" `),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(kindList.value, (kind, index) => {
                  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                    class: "category",
                    key: kind.good_kind_order
                  }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { style: { "text-align": "center" } }, [
                        vue.createElementVNode("text", { style: { "color": "gainsboro" } }, "—"),
                        vue.createElementVNode(
                          "text",
                          { style: { "color": "#000000", "margin-right": "8px", "margin-left": "8px" } },
                          vue.toDisplayString(kind.good_kind_name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { style: { "color": "gainsboro" } }, "—")
                      ]),
                      kind.children.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "list"
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(kind.children, (category, i1) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "box",
                              key: category.good_category_order,
                              onClick: ($event) => toCategory(category.good_category_id)
                            }, [
                              vue.createElementVNode("image", {
                                src: `${vue.unref(devUrl)}/good_uploads/` + category.good_image,
                                "lazy-load": "https://taobao.xianmxkj.com/logo.png"
                              }, null, 8, ["src"]),
                              vue.createElementVNode(
                                "view",
                                { class: "text" },
                                vue.toDisplayString(category.good_category_name),
                                1
                                /* TEXT */
                              )
                            ], 8, ["onClick"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : vue.createCommentVNode("v-if", true)
                    ])
                  ])), [
                    [vue.vShow, showAll.value || kind.good_kind_order === showCategoryIndex.value]
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const PagesCategoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__file", "D:/graduationProject/pet-front-end/pages/category/index.vue"]]);
  const _sfc_main$H = {
    __name: "categoryproductlist",
    setup(__props) {
      const goodList = vue.ref([]);
      const categoryId = vue.ref("");
      const currentPage = vue.ref(1);
      const pageSize = vue.ref(10);
      const isNoMore = vue.ref(false);
      const isLoading = vue.ref(false);
      const isInit = vue.ref(false);
      const getData = async () => {
        const result = await getGoodApi({
          id: categoryId.value || "",
          currentPage: currentPage.value,
          pageSize: pageSize.value
        });
        if (result.code === 200) {
          goodList.value = [...goodList.value, ...result.data];
        }
      };
      onReachBottom(() => {
        currentPage.value += 1;
        getData();
      });
      const clickItem = (index) => {
        const url = reqParams("/pages/category/productdetail", { good_id: index });
        uni.navigateTo({ url });
      };
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          categoryId.value = obj.good_category_id;
          isLoading.value = true;
          getData();
          isInit.value = true;
          isLoading.value = false;
          if (!goodList.value || goodList.value.length < pageSize.value) {
            isNoMore.value = true;
          }
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          goodList.value && goodList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "t-goods-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(goodList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "t-goods-item",
                  key: index,
                  onClick: ($event) => clickItem(item.good_id)
                }, [
                  vue.createCommentVNode(" 图片 "),
                  vue.createElementVNode("image", {
                    class: "t-goods-img",
                    src: `${vue.unref(devUrl)}/good_uploads/` + item.good_image
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 商品名称 "),
                  vue.createElementVNode("view", { class: "t-goods-name" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.good_name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createCommentVNode(" 商品价格 "),
                  vue.createElementVNode("view", { class: "t-goods-price" }, [
                    vue.createElementVNode("text", { class: "t-rmb" }, "¥"),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p1" },
                      vue.toDisplayString(item.good_price),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p2" },
                      "¥" + vue.toDisplayString(item.good_origin_price),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "t-rate" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.good_comment_num) + "人评价",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "t-rate-percent" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.good_comment_num) + "好评",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
          isLoading.value || isNoMore.value && goodList.value && goodList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "t-loading-more"
          }, [
            isLoading.value ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: "/static/loading.png"
            })) : vue.createCommentVNode("v-if", true),
            isLoading.value || isNoMore.value ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "t-loading-desc"
              },
              vue.toDisplayString(isLoading.value ? "加载中..." : isNoMore.value ? "没有更多数据了" : ""),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ])) : isInit.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "t-empty"
          }, [
            vue.createElementVNode("image", { src: "/static/goods.png" }),
            vue.createElementVNode("view", { class: "t-empty-desc" }, "没有商品哦~")
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesCategoryCategoryproductlist = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-e66e2993"], ["__file", "D:/graduationProject/pet-front-end/pages/category/categoryproductlist.vue"]]);
  const en$2 = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  const zhHans$2 = {
    "uni-goods-nav.options.shop": "店铺",
    "uni-goods-nav.options.cart": "购物车",
    "uni-goods-nav.buttonGroup.addToCart": "加入购物车",
    "uni-goods-nav.buttonGroup.buyNow": "立即购买"
  };
  const zhHant$2 = {
    "uni-goods-nav.options.shop": "店鋪",
    "uni-goods-nav.options.cart": "購物車",
    "uni-goods-nav.buttonGroup.addToCart": "加入購物車",
    "uni-goods-nav.buttonGroup.buyNow": "立即購買"
  };
  const messages$1 = {
    en: en$2,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant$2
  };
  const { t: t$3 } = initVueI18n(messages$1);
  const _sfc_main$G = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t$3("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t$3("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t$3("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t$3("uni-goods-nav.buttonGroup.buyNow"),
              backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
              color: "#fff"
            }
          ];
        }
      },
      fill: {
        type: Boolean,
        default: false
      },
      stat: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(index, item) {
        this.$emit("click", {
          index,
          content: item
        });
      },
      buttonClick(index, item) {
        if (uni.report && this.stat) {
          uni.report(item.text, item.text);
        }
        this.$emit("buttonClick", {
          index,
          content: item
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-goods-nav" }, [
      vue.createCommentVNode(" 底部占位 "),
      vue.createElementVNode("view", { class: "uni-tab__seat" }),
      vue.createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
        vue.createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.options, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
                onClick: ($event) => $options.onClick(index, item)
              }, [
                vue.createElementVNode("view", { class: "uni-tab__icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: "#646566"
                  }, null, 8, ["type"]),
                  vue.createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "uni-tab__text" },
                  vue.toDisplayString(item.text),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
                  item.info ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: vue.normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                      style: vue.normalizeStyle({
                        "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                        color: item.infoColor ? item.infoColor : "#fff"
                      })
                    },
                    vue.toDisplayString(item.info),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.buttonGroup, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  style: vue.normalizeStyle({ background: item.backgroundColor, color: item.color }),
                  class: "flex uni-tab__cart-button-right",
                  onClick: ($event) => $options.buttonClick(index, item)
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      style: vue.normalizeStyle({ color: item.color }),
                      class: "uni-tab__cart-button-right-text"
                    },
                    vue.toDisplayString(item.text),
                    5
                    /* TEXT, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$k], ["__scopeId", "data-v-8226c5e1"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
  const useCarStore = defineStore("car", () => {
    const insideCarGoods2 = vue.ref([]);
    const checkOutCar = vue.computed(() => {
      return insideCarGoods2.value.filter((item) => {
        return item.selected;
      });
    });
    const checkOutNum = vue.computed(() => {
      let num = 0;
      checkOutCar.value.forEach((item) => {
        num += item.addNum;
      });
      return num;
    });
    const carNum = vue.computed(() => {
      let count = 0;
      insideCarGoods2.value.forEach((item) => {
        count += item.addNum;
      });
      if (count <= 99) {
        return count;
      } else {
        return 99;
      }
    });
    const isAllselected = vue.computed(() => {
      if (insideCarGoods2.value.length <= 0) {
        return false;
      }
      return insideCarGoods2.value.every((item) => {
        return item.selected;
      });
    });
    const sumPrice = vue.computed(() => {
      let price = 0;
      if (insideCarGoods2.value.length <= 0) {
        return price.toFixed(2);
      }
      insideCarGoods2.value.forEach((item) => {
        if (item.selected) {
          price += parseFloat(item.good_price * item.addNum);
        }
      });
      return price.toFixed(2);
    });
    const deleteGoods = (good_id) => {
      insideCarGoods2.value = insideCarGoods2.value.filter((item) => {
        return item.good_id !== good_id;
      });
    };
    const allSelectTap = () => {
      let temp = isAllselected.value;
      insideCarGoods2.value.forEach((item) => {
        item.selected = !temp;
      });
    };
    const selectedTap = (good_id) => {
      insideCarGoods2.value = insideCarGoods2.value.map((item) => {
        if (good_id === item.good_id) {
          return {
            ...item,
            selected: !item.selected
          };
        }
        return item;
      });
    };
    const addGoodInCar = (good) => {
      let isExist = insideCarGoods2.value.some((item) => {
        return item.good_id === good.good_id;
      });
      if (isExist) {
        insideCarGoods2.value = insideCarGoods2.value.map((item) => {
          return item.good_id === good.good_id ? {
            ...item,
            addNum: item.addNum + 1
          } : item;
        });
      } else {
        insideCarGoods2.value.push({
          ...good,
          addNum: 1
        });
      }
    };
    return {
      insideCarGoods: insideCarGoods2,
      carNum,
      checkOutNum,
      deleteGoods,
      allSelectTap,
      isAllselected,
      sumPrice,
      selectedTap,
      addGoodInCar,
      checkOutCar
    };
  }, {
    unistorage: true
  });
  const _sfc_main$F = {
    __name: "productdetail",
    setup(__props) {
      const store = useCarStore();
      const options = vue.ref([
        {
          icon: "cart",
          text: "购物车",
          info: store.carNum
        }
      ]);
      const buttonGroup = vue.ref([
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]);
      const goodId = vue.ref("");
      const good = vue.ref({});
      const getData = async () => {
        const result = await request(
          "/good",
          {
            good_id: goodId.value
          },
          {
            method: "post"
          }
        );
        if (result.code === 200) {
          good.value = result.data;
        }
      };
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          goodId.value = obj.good_id;
          getData();
        }
      });
      const onClick = (e2) => {
        uni.navigateTo({
          url: "/pages/car/car"
        });
      };
      const buttonClick = (e2) => {
        if (e2.index === 0) {
          store.addGoodInCar(good.value);
          options.value[0].info = store.carNum;
        }
        if (e2.index === 1)
          ;
      };
      onShow(() => {
        options.value[0].info = store.carNum;
      });
      return (_ctx, _cache) => {
        const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 轮播图 "),
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("swiper", {
                class: "swiper",
                circular: "",
                "indicator-dots": true,
                autoplay: _ctx.autoplay,
                interval: _ctx.interval,
                duration: _ctx.duration
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(good.value.good_images, (g2, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      [
                        g2.good_image_type === 0 ? (vue.openBlock(), vue.createElementBlock("swiper-item", { key: 0 }, [
                          vue.createElementVNode("view", { class: "swiper-item" }, [
                            vue.createElementVNode("image", {
                              class: "swiper-img",
                              src: `${vue.unref(devUrl)}/good_uploads/` + g2.good_image_url,
                              mode: "scaleToFill"
                            }, null, 8, ["src"])
                          ])
                        ])) : vue.createCommentVNode("v-if", true)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ], 8, ["autoplay", "interval", "duration"])
            ]),
            vue.createCommentVNode(" 价格 描述 "),
            vue.createElementVNode("view", { class: "detail" }, [
              vue.createCommentVNode(" 价格 "),
              vue.createElementVNode("view", { class: "price" }, [
                vue.createElementVNode(
                  "span",
                  { class: "goods-price" },
                  "￥" + vue.toDisplayString(good.value.good_price),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("span", { class: "goods-origin-price" }, [
                  vue.createTextVNode("原价￥"),
                  vue.createElementVNode(
                    "del",
                    null,
                    vue.toDisplayString(good.value.good_origin_price),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createCommentVNode(" 描述 "),
              vue.createElementVNode("view", { class: "describe" }, [
                vue.createElementVNode(
                  "b",
                  null,
                  vue.toDisplayString(good.value.good_name),
                  1
                  /* TEXT */
                )
              ]),
              vue.createCommentVNode(" 已售 "),
              vue.createElementVNode(
                "view",
                { class: "rate-num" },
                "已售" + vue.toDisplayString(good.value.good_sold_num),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(" 商品页面 "),
            vue.createElementVNode("view", { class: "goods-list-image" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(good.value.good_images, (g2, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    [
                      g2.good_image_type === 1 ? (vue.openBlock(), vue.createElementBlock("img", {
                        key: 0,
                        src: `${vue.unref(devUrl)}/good_uploads/` + g2.good_image_url,
                        alt: "",
                        mode: "scaleToFill"
                      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 加入购物车或者立即购买 "),
            vue.createElementVNode("view", { class: "goods-carts" }, [
              vue.createVNode(_component_uni_goods_nav, {
                options: options.value,
                fill: true,
                "button-group": buttonGroup.value,
                onClick,
                onButtonClick: buttonClick
              }, null, 8, ["options", "button-group"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesCategoryProductdetail = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-27533a8f"], ["__file", "D:/graduationProject/pet-front-end/pages/category/productdetail.vue"]]);
  const _sfc_main$E = {
    name: "UniNumberBox",
    emits: ["change", "input", "update:modelValue", "blur", "focus"],
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: "#f5f5f5"
      },
      color: {
        type: String,
        default: "#333"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: 0
      };
    },
    watch: {
      value(val) {
        this.inputValue = +val;
      },
      modelValue(val) {
        this.inputValue = +val;
      }
    },
    created() {
      if (this.value === 1) {
        this.inputValue = +this.modelValue;
      }
      if (this.modelValue === 1) {
        this.inputValue = +this.value;
      }
    },
    methods: {
      _calcValue(type) {
        if (this.disabled) {
          return;
        }
        const scale = this._getDecimalScale();
        let value = this.inputValue * scale;
        let step = this.step * scale;
        if (type === "minus") {
          value -= step;
          if (value < this.min * scale) {
            return;
          }
          if (value > this.max * scale) {
            value = this.max * scale;
          }
        }
        if (type === "plus") {
          value += step;
          if (value > this.max * scale) {
            return;
          }
          if (value < this.min * scale) {
            value = this.min * scale;
          }
        }
        this.inputValue = (value / scale).toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
      },
      _getDecimalScale() {
        let scale = 1;
        if (~~this.step !== this.step) {
          scale = Math.pow(10, String(this.step).split(".")[1].length);
        }
        return scale;
      },
      _onBlur(event) {
        this.$emit("blur", event);
        let value = event.detail.value;
        if (isNaN(value)) {
          this.inputValue = this.min;
          return;
        }
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        const scale = this._getDecimalScale();
        this.inputValue = value.toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
      },
      _onFocus(event) {
        this.$emit("focus", event);
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-numbox" }, [
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
          class: "uni-numbox__minus uni-numbox-btns",
          style: vue.normalizeStyle({ background: $props.background })
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
              style: vue.normalizeStyle({ color: $props.color })
            },
            "-",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      vue.withDirectives(vue.createElementVNode("input", {
        disabled: $props.disabled,
        onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
        class: "uni-numbox__value",
        type: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event),
        style: vue.normalizeStyle({ background: $props.background, color: $props.color })
      }, null, 44, ["disabled"]), [
        [vue.vModelText, $data.inputValue]
      ]),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
          class: "uni-numbox__plus uni-numbox-btns",
          style: vue.normalizeStyle({ background: $props.background })
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
              style: vue.normalizeStyle({ color: $props.color })
            },
            "+",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$j], ["__scopeId", "data-v-7ae2ee72"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
  const _sfc_main$D = {
    __name: "car",
    setup(__props) {
      const store = useCarStore();
      const initXY = vue.ref([]);
      vue.ref(true);
      const selectedList = vue.ref([]);
      vue.ref(false);
      const theIndex = vue.ref(null);
      const oldIndex = vue.ref(null);
      const isStop = vue.ref(false);
      const touchStart = (index, event) => {
        if (event.touches.length > 1) {
          isStop.value = true;
          return;
        }
        oldIndex.value = theIndex.value;
        theIndex.value = null;
        initXY.value = [event.touches[0].pageX, event.touches[0].pageY];
      };
      const touchMove = (index, event) => {
        if (event.touches.length > 1) {
          this.isStop = true;
          return;
        }
        let moveX = event.touches[0].pageX - initXY.value[0];
        let moveY = event.touches[0].pageY - initXY.value[1];
        if (isStop.value || Math.abs(moveX) < 5) {
          return;
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
          isStop.value = true;
          return;
        }
        if (moveX < 0) {
          theIndex.value = index;
          isStop.value = true;
        } else if (moveX > 0) {
          if (theIndex.value != null && oldIndex.value == theIndex.value) {
            oldIndex.value = index;
            theIndex.value = null;
            isStop.value = true;
            setTimeout(() => {
              oldIndex.value = null;
            }, 150);
          }
        }
      };
      const touchEnd = (index, event) => {
        isStop.value = false;
      };
      const deleteGoods = (id) => {
        store.deleteGoods(id);
        oldIndex.value = null;
        theIndex.value = null;
      };
      const deleteList = () => {
        insideCarGoods.value = [];
        selectedList.value = [];
        store.carNum.value = 0;
      };
      const toConfirmation = () => {
        if (store.checkOutCar.length < 1) {
          uni.showToast({
            title: "请选择商品结算",
            icon: "none"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/car/ConfirmOrder"
        });
        uni.showModal({
          title: "温馨提示",
          content: "支付后续更新调用微信支付",
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#458bd0",
          success: (res) => {
            if (res.confirm)
              ;
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_number_box = resolveEasycom(vue.resolveDynamicComponent("uni-number-box"), __easycom_0$5);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "layer-box" }, [
            vue.createCommentVNode(" 商品列表 "),
            vue.createElementVNode("view", { class: "goods-list" }, [
              vue.unref(store).insideCarGoods.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "tis"
              }, "暂无商品~")) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(store).insideCarGoods, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "row",
                    key: item.good_id
                  }, [
                    vue.createCommentVNode(" 滑动删除按钮 "),
                    vue.createElementVNode("view", {
                      class: "menu",
                      onClick: vue.withModifiers(($event) => deleteGoods(item.good_id), ["stop"])
                    }, [
                      vue.createElementVNode("image", {
                        class: "icon_dele",
                        src: "/static/image/delete.png"
                      })
                    ], 8, ["onClick"]),
                    vue.createCommentVNode(" 商品 "),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["carrier", [theIndex.value == index ? "open" : oldIndex.value == index ? "close" : ""]]),
                      onTouchstart: ($event) => touchStart(index, $event),
                      onTouchmove: ($event) => touchMove(index, $event),
                      onTouchend: ($event) => touchEnd()
                    }, [
                      vue.createCommentVNode(" checkbox "),
                      vue.createElementVNode("view", {
                        class: "checkbox-box",
                        onClick: ($event) => vue.unref(store).selectedTap(item.good_id)
                      }, [
                        vue.createElementVNode("view", { class: "checkbox" }, [
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass([item.selected ? "on" : ""])
                            },
                            null,
                            2
                            /* CLASS */
                          )
                        ])
                      ], 8, ["onClick"]),
                      vue.createCommentVNode(" 商品信息 "),
                      vue.createElementVNode("view", { class: "goods-info" }, [
                        vue.createCommentVNode(' <uni-image class="tp_img" :src="item.good_image" :fade="true" radius="5" width="80" height="80"\r\n                duration="450"></uni-image> '),
                        vue.createElementVNode("img", {
                          src: `${vue.unref(devUrl)}/good_uploads/${item.good_image}`,
                          width: "80",
                          height: "80",
                          alt: ""
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "info" }, [
                          vue.createElementVNode(
                            "view",
                            { class: "title" },
                            vue.toDisplayString(item.good_name),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "price-number" }, [
                            vue.createElementVNode(
                              "view",
                              { class: "price" },
                              "￥" + vue.toDisplayString(item.good_price),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("view", { class: "number" }, [
                              vue.createVNode(_component_uni_number_box, {
                                modelValue: item.addNum,
                                "onUpdate:modelValue": ($event) => item.addNum = $event,
                                name: index,
                                integer: "",
                                onChange: _ctx.onChange,
                                min: 1,
                                max: 999
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "onChange"])
                            ])
                          ])
                        ])
                      ])
                    ], 42, ["onTouchstart", "onTouchmove", "onTouchend"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" 底部购物车 "),
          vue.createElementVNode("view", { class: "m-footer-car" }, [
            vue.createElementVNode("view", {
              class: "allSelect_box",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(store).allSelectTap && vue.unref(store).allSelectTap(...args))
            }, [
              vue.createElementVNode("view", { class: "checkbox" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass([vue.unref(store).isAllselected ? "on" : ""])
                  },
                  null,
                  2
                  /* CLASS */
                )
              ]),
              vue.createElementVNode("view", { class: "text" }, "全选")
            ]),
            vue.createCommentVNode(" 计算选中的个数 "),
            selectedList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "delBtn",
              onClick: deleteList
            }, "删除")) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "settlement" }, [
              vue.createElementVNode("view", { class: "footer_sum" }, [
                vue.createElementVNode("span", null, "合计:"),
                vue.createElementVNode(
                  "view",
                  { class: "footer_price" },
                  "￥" + vue.toDisplayString(vue.unref(store).sumPrice),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "view",
                {
                  class: "footer_but",
                  onClick: toConfirmation
                },
                "结算(" + vue.toDisplayString(vue.unref(store).checkOutNum) + ")",
                1
                /* TEXT */
              )
            ])
          ])
        ]);
      };
    }
  };
  const PagesCarCar = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-b498d100"], ["__file", "D:/graduationProject/pet-front-end/pages/car/car.vue"]]);
  const getAddressApi = async (user_id) => {
    return await request("/address", { user_id });
  };
  const updateAddressApi = async (obj) => {
    return await request("/address", obj, {
      method: "post"
    });
  };
  const delAddressApi = async (id) => {
    return await request("/address/del", { address_id: id }, { method: "post" });
  };
  const getDefaultAddressAPI = async (id) => {
    return await request("/address/default", { user_id: id });
  };
  const _sfc_main$C = {
    __name: "Address",
    emits: ["editClick", "chooseClick"],
    setup(__props, { emit }) {
      const colors = vue.ref("#2979FF");
      const userStore = useUserStore();
      const addressList = vue.ref([]);
      const editAddress = (item) => {
        const targetPage = "/pages/my/EditAddress";
        const queryString = Object.keys(item).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(item[key])}`).join("&");
        uni.navigateTo({
          url: `${targetPage}?${queryString}`
        });
      };
      const onSetAddress = (item) => {
        emit("chooseClick", item);
      };
      const delAddress = async (item, index) => {
        const { confirm } = await uni.showModal({
          title: "提示",
          content: "确认要删除该地址吗?",
          confirmText: "删除",
          confirmColor: colors.value
        });
        if (confirm) {
          const delResult = await delAddressApi(item.address_id);
          if (delResult.code === 200) {
            uni.showToast({
              title: "删除成功~",
              icon: "none"
            });
            getAddressData();
          }
        }
      };
      const addAddress = () => {
        uni.navigateTo({
          url: "/pages/my/EditAddress"
        });
      };
      const getAddressData = async () => {
        try {
          const result = await getAddressApi(userStore.user.user_id);
          if (result.code === 1e3) {
            addressList.value = result.data;
          }
        } catch (e2) {
          uni.showToast({
            title: "获取地址失败",
            icon: "none"
          });
        }
      };
      vue.onMounted(() => {
        getAddressData();
      });
      onLoad(() => {
        uni.$on("renderAddress", getAddressData);
      });
      onUnload(() => {
        uni.$off("renderAddress", getAddressData);
      });
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "myaddress" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(addressList.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "order_address"
                  }, [
                    vue.createElementVNode("view", { class: "address_box" }, [
                      vue.createElementVNode("view", { class: "weizhi_icon" }, [
                        vue.createVNode(_component_icon_base, {
                          type: "dizhiguanli",
                          color: colors.value,
                          size: 50
                        }, null, 8, ["color"])
                      ]),
                      vue.createCommentVNode(" 编辑地址 "),
                      vue.createElementVNode("view", {
                        onClick: ($event) => onSetAddress(item)
                      }, [
                        vue.createElementVNode("view", { class: "center" }, [
                          vue.createCommentVNode(" 默认 "),
                          item.address_default == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "moren"
                          }, [
                            vue.createVNode(_component_icon_base, {
                              type: "moren",
                              color: colors.value,
                              size: 100
                            }, null, 8, ["color"])
                          ])) : vue.createCommentVNode("v-if", true),
                          vue.createElementVNode("view", { class: "name" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "text1" },
                              vue.toDisplayString(item.address_name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "phones" },
                              vue.toDisplayString(item.address_phone),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode(
                            "view",
                            { class: "address_name" },
                            vue.toDisplayString(item.address_area) + vue.toDisplayString(item.address_details),
                            1
                            /* TEXT */
                          )
                        ])
                      ], 8, ["onClick"]),
                      vue.createElementVNode("view", { class: "caozuo" }, [
                        vue.createElementVNode("view", {
                          class: "del",
                          onClick: ($event) => delAddress(item)
                        }, [
                          vue.createElementVNode("text", { class: "iconfont icon-shanchu" }),
                          vue.createTextVNode(" 删除 ")
                        ], 8, ["onClick"]),
                        vue.createElementVNode("view", {
                          class: "edit",
                          onClick: ($event) => editAddress(item)
                        }, [
                          vue.createElementVNode("text", { class: "iconfont icon-bianji" }),
                          vue.createTextVNode(" 编辑 ")
                        ], 8, ["onClick"])
                      ])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("button", {
              type: "primary",
              class: "addAddress",
              onClick: addAddress
            }, "添加地址")
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyAddress = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-eda7be84"], ["__file", "D:/graduationProject/pet-front-end/pages/my/Address.vue"]]);
  const _sfc_main$B = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度 ，默认 80
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules2 = null) {
        this.userRules = rules2;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules2 = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules2);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$i], ["__scopeId", "data-v-462874dd"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e2) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules2 = fieldValue.rules;
      let hasRequired = rules2.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules2 === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules2.length; i2++) {
        let rule = rules2[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e2) {
        result = this._getMessage(rule, e2.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules2) => {
    const isRuleNumType = rules2.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules2.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a2, b2) => a2 += `#${b2}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber(v2) ? Number(v2) : v2);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k] = value;
        return null;
      } else if (k in o2) {
        return o2[k];
      } else {
        o2[k] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k) => {
      return (o2 || {})[k];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules2) => {
    let isNoField = false;
    for (let i2 = 0; i2 < rules2.length; i2++) {
      const ruleData = rules2[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a2, b2) => {
    if (a2 === b2) {
      return a2 !== 0 || 1 / a2 === 1 / b2;
    }
    if (a2 == null || b2 == null) {
      return a2 === b2;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b2);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b2 !== +b2;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b2);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b2[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b2.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$A = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules2) {
        this.formRules = Object.assign({}, this.formRules, rules2);
        this.validator = new SchemaValidator(rules2);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => realName(v2.name) === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i2 in childrens) {
          const child = childrens[i2];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            let vName = realName(v2);
            let value = getDataValue(v2, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$h], ["__scopeId", "data-v-9a1e3c32"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  let AreaJson = [
    {
      "name": "北京市",
      "city": [
        {
          "name": "北京市",
          "area": [
            "东城区",
            "西城区",
            "海淀区",
            "朝阳区",
            "丰台区",
            "石景山区",
            "门头沟区",
            "通州区",
            "顺义区",
            "房山区",
            "大兴区",
            "昌平区",
            "怀柔区",
            "平谷区",
            "密云区",
            "延庆区"
          ]
        }
      ]
    },
    {
      "name": "上海市",
      "city": [
        {
          "name": "上海市",
          "area": [
            "黄浦区",
            "浦东新区",
            "徐汇区",
            "长宁区",
            "静安区",
            "普陀区",
            "虹口区",
            "杨浦区",
            "闵行区",
            "宝山区",
            "嘉定区",
            "金山区",
            "松江区",
            "青浦区",
            "奉贤区",
            "崇明区"
          ]
        }
      ]
    },
    {
      "name": "天津市",
      "city": [
        {
          "name": "天津市",
          "area": [
            "和平区",
            "河西区",
            "南开区",
            "河东区",
            "河北区",
            "红桥区",
            "滨海新区",
            "东丽区",
            "西青区",
            "津南区",
            "北辰区",
            "武清区",
            "宝坻区",
            "宁河区",
            "静海区",
            "蓟州区"
          ]
        }
      ]
    },
    {
      "name": "重庆市",
      "city": [
        {
          "name": "重庆市",
          "area": [
            "渝中区",
            "大渡口区",
            "江北区",
            "沙坪坝区",
            "九龙坡区",
            "南岸区",
            "北碚区",
            "渝北区",
            "巴南区",
            "涪陵区",
            "綦江区",
            "大足区",
            "长寿区",
            "江津区",
            "合川区",
            "永川区",
            "南川区",
            "璧山区",
            "铜梁区",
            "潼南区",
            "荣昌区",
            "万州区",
            "梁平区",
            "城口县",
            "丰都县",
            "垫江县",
            "忠县",
            "开州区",
            "云阳县",
            "奉节县",
            "巫山县",
            "巫溪县",
            "黔江区",
            "武隆区",
            "石柱土家族自治县",
            "秀山土家族苗族自治县",
            "酉阳土家族苗族自治县",
            "彭水苗族土家族自治县"
          ]
        }
      ]
    },
    {
      "name": "广东省",
      "city": [
        {
          "name": "广州市",
          "area": [
            "越秀区",
            "荔湾区",
            "海珠区",
            "天河区",
            "白云区",
            "黄埔区",
            "番禺区",
            "花都区",
            "南沙区",
            "增城区",
            "从化区"
          ]
        },
        {
          "name": "深圳市",
          "area": [
            "福田区",
            "罗湖区",
            "南山区",
            "盐田区",
            "宝安区",
            "龙岗区",
            "坪山区",
            "光明区",
            "龙华区",
            "大鹏新区"
          ]
        },
        {
          "name": "东莞市",
          "area": [
            "莞城区",
            "南城区",
            "东城区",
            "万江区",
            "石碣镇",
            "石龙镇",
            "茶山镇",
            "石排镇",
            "企石镇",
            "横沥镇",
            "桥头镇",
            "谢岗镇",
            "东坑镇",
            "常平镇",
            "寮步镇",
            "大朗镇",
            "麻涌镇",
            "中堂镇",
            "高埗镇",
            "樟木头镇",
            "大岭山镇",
            "望牛墩镇",
            "黄江镇",
            "洪梅镇",
            "清溪镇",
            "沙田镇",
            "道滘镇",
            "塘厦镇",
            "虎门镇",
            "厚街镇",
            "凤岗镇",
            "长安镇"
          ]
        },
        {
          "name": "惠州市",
          "area": [
            "惠城区",
            "惠阳区",
            "惠东县",
            "博罗县",
            "龙门县"
          ]
        },
        {
          "name": "珠海市",
          "area": [
            "香洲区",
            "金湾区",
            "斗门区"
          ]
        },
        {
          "name": "佛山市",
          "area": [
            "禅城区",
            "南海区",
            "顺德区",
            "三水区",
            "高明区"
          ]
        },
        {
          "name": "中山市",
          "area": [
            "石岐区",
            "东区",
            "西区",
            "南区",
            "五桂山区",
            "火炬开发区",
            "黄圃镇",
            "南头镇",
            "东凤镇",
            "阜沙镇",
            "小榄镇",
            "东升镇",
            "古镇镇",
            "横栏镇",
            "三角镇",
            "民众镇",
            "南朗镇",
            "港口镇",
            "大涌镇",
            "沙溪镇",
            "三乡镇",
            "板芙镇",
            "神湾镇",
            "坦洲镇"
          ]
        },
        {
          "name": "潮州市",
          "area": [
            "湘桥区",
            "潮安区",
            "饶平县"
          ]
        },
        {
          "name": "揭阳市",
          "area": [
            "榕城区",
            "揭东县",
            "揭西县",
            "惠来县",
            "普宁市"
          ]
        },
        {
          "name": "汕头市",
          "area": [
            "金平区",
            "龙湖区",
            "澄海区",
            "濠江区",
            "濠江区",
            "潮南区",
            "南澳县"
          ]
        },
        {
          "name": "汕尾市",
          "area": [
            "城区",
            "陆丰市",
            "海丰县",
            "陆河县"
          ]
        },
        {
          "name": "清远市",
          "area": [
            "清城区",
            "清新区",
            "英德市",
            "连州市",
            "佛冈县",
            "阳山县",
            "连南瑶族自治县",
            "连山壮族瑶族自治县"
          ]
        },
        {
          "name": "云浮市",
          "area": [
            "云城区",
            "云安县",
            "新兴县",
            "郁南县",
            "罗定市"
          ]
        },
        {
          "name": "韶关市",
          "area": [
            "浈江区",
            "武江区",
            "曲江区",
            "乐昌市",
            "南雄市",
            "始兴县",
            "仁化县",
            "翁源县",
            "新丰县",
            "乳源瑶族自治县"
          ]
        },
        {
          "name": "江门市",
          "area": [
            "蓬江区",
            "江海区",
            "新会区",
            "台山市",
            "开平市",
            "鹤山市",
            "恩平市"
          ]
        },
        {
          "name": "湛江市",
          "area": [
            "赤坎区",
            "霞山区",
            "坡头区",
            "麻章区",
            "吴川市",
            "雷州市",
            "廉江市",
            "遂溪县",
            "徐闻县"
          ]
        },
        {
          "name": "茂名市",
          "area": [
            "茂南区",
            "电白区",
            "高州市",
            "茂港区",
            "化州市",
            "信宜市"
          ]
        },
        {
          "name": "肇庆市",
          "area": [
            "端州区",
            "鼎湖区",
            "广宁县",
            "怀集县",
            "封开县",
            "德庆县",
            "高要区",
            "四会市"
          ]
        },
        {
          "name": "河源市",
          "area": [
            "源城区",
            "紫金县",
            "龙川县",
            "连平县",
            "和平县",
            "东源县"
          ]
        },
        {
          "name": "梅州市",
          "area": [
            "梅江区",
            "梅县区",
            "兴宁市",
            "平远县",
            "蕉岭县",
            "大埔县",
            "丰顺县",
            "五华县"
          ]
        },
        {
          "name": "阳江市",
          "area": [
            "江城区",
            "阳春市",
            "阳东区",
            "阳西县",
            "海陵岛经济开发试验区",
            "阳江高新技术产业开发区"
          ]
        }
      ]
    },
    {
      "name": "江苏省",
      "city": [
        {
          "name": "南京市",
          "area": [
            "玄武区",
            "秦淮区",
            "鼓楼区",
            "建邺区",
            "雨花台区",
            "浦口区",
            "六合区",
            "栖霞区",
            "江宁区",
            "溧水区",
            "高淳县"
          ]
        },
        {
          "name": "无锡市",
          "area": [
            "梁溪区",
            "滨湖区",
            "惠山区",
            "锡山区",
            "新吴区",
            "江阴市",
            "宜兴市"
          ]
        },
        {
          "name": "苏州市",
          "area": [
            "姑苏区",
            "相城区",
            "吴中区",
            "虎丘区",
            "吴江区",
            "常熟市",
            "昆山市",
            "张家港市",
            "太仓市"
          ]
        },
        {
          "name": "常州市",
          "area": [
            "金坛区",
            "武进区",
            "新北区",
            "天宁区",
            "钟楼区",
            "溧阳市"
          ]
        },
        {
          "name": "镇江市",
          "area": [
            "京口区",
            "润州区",
            "丹徒区",
            "丹阳市",
            "扬中市",
            "句容市",
            "镇江新区",
            "镇江高新区"
          ]
        },
        {
          "name": "南通市",
          "area": [
            "崇川区",
            "港闸区",
            "通州区",
            "海安县",
            "如东县",
            "启东市",
            "如皋市",
            "海门市"
          ]
        },
        {
          "name": "泰州市",
          "area": [
            "海陵区",
            "高港区",
            "姜堰市",
            "兴化市",
            "泰兴市",
            "靖江市"
          ]
        },
        {
          "name": "扬州市",
          "area": [
            "广陵区",
            "邗江区",
            "江都区",
            "开发区",
            "宝应县",
            "仪征市",
            "高邮市"
          ]
        },
        {
          "name": "盐城市",
          "area": [
            "亭湖区",
            "盐都区",
            "大丰区",
            "建湖县",
            "射阳县",
            "阜宁县",
            "滨海县",
            "响水县",
            "东台市"
          ]
        },
        {
          "name": "连云港市",
          "area": [
            "海州区",
            "连云区",
            "赣榆区",
            "灌云县",
            "东海县",
            "灌南县"
          ]
        },
        {
          "name": "徐州市",
          "area": [
            "云龙区",
            "鼓楼区",
            "贾汪区",
            "泉山区",
            "铜山区",
            "邳州市",
            "新沂市",
            "睢宁县",
            "沛县",
            "丰县"
          ]
        },
        {
          "name": "淮安市",
          "area": [
            "清江浦区",
            "淮阴区",
            "淮安区",
            "洪泽区",
            "涟水县",
            "盱眙县",
            "金湖县"
          ]
        },
        {
          "name": "宿迁市",
          "area": [
            "宿城区",
            "宿豫区",
            "沭阳县",
            "泗阳县",
            "泗洪县",
            "洋河新区",
            "湖滨新区",
            "苏宿工业园区",
            "经济开发区"
          ]
        }
      ]
    },
    {
      "name": "山东省",
      "city": [
        {
          "name": "济南市",
          "area": [
            "历下区",
            "市中区",
            "槐荫区",
            "天桥区",
            "历城区",
            "长清区",
            "章丘区",
            "济阳区",
            "莱芜区",
            "钢城区",
            "平阴县",
            "商河县",
            "高新技术产业开发区"
          ]
        },
        {
          "name": "青岛市",
          "area": [
            "市南区",
            "市北区",
            "黄岛区",
            "崂山区",
            "李沧区",
            "城阳区",
            "胶州市",
            "即墨区",
            "平度市",
            "莱西市"
          ]
        },
        {
          "name": "淄博市",
          "area": [
            "张店区",
            "淄川区",
            "博山区",
            "临淄区",
            "桓台县",
            "高青县",
            "沂源县"
          ]
        },
        {
          "name": "枣庄市",
          "area": [
            "市中区",
            "山亭区",
            "台儿庄区",
            "峄城区",
            "薛城区",
            "滕州市"
          ]
        },
        {
          "name": "东营市",
          "area": [
            "东营区",
            "河口区",
            "垦利区",
            "利津县",
            "广饶县"
          ]
        },
        {
          "name": "烟台市",
          "area": [
            "芝罘区",
            "福山区",
            "牟平区",
            "莱山区",
            "龙口市",
            "莱阳市",
            "莱州市",
            "蓬莱区",
            "招远市",
            "栖霞市",
            "海阳市",
            "烟台经济技术开发区",
            "烟台高新技术产业开发区"
          ]
        },
        {
          "name": "潍坊市",
          "area": [
            "潍城区",
            "寒亭区",
            "坊子区",
            "奎文区",
            "临朐县",
            "昌乐县",
            "青州市",
            "诸城市",
            "寿光市",
            "安丘市",
            "高密市",
            "昌邑市"
          ]
        },
        {
          "name": "济宁市",
          "area": [
            "任城区",
            "兖州区",
            "微山县",
            "鱼台县",
            "金乡县",
            "嘉祥县",
            "汶上县",
            "泗水县",
            "梁山县",
            "曲阜市",
            "邹城市"
          ]
        },
        {
          "name": "泰安市",
          "area": [
            "泰山区",
            "岱岳区",
            "新泰市",
            "肥城市",
            "宁阳县",
            "东平县"
          ]
        },
        {
          "name": "威海市",
          "area": [
            "环翠区",
            "文登区",
            "荣成市",
            "乳山市",
            "南海新区",
            "经济技术开发区",
            "火炬高技术产业开发区",
            "进出口加工保税区",
            "临港经济技术开发区"
          ]
        },
        {
          "name": "日照市",
          "area": [
            "东港区",
            "岚山区",
            "五莲县",
            "莒县"
          ]
        },
        {
          "name": "莱芜市",
          "area": [
            "莱城区",
            "钢城区"
          ]
        },
        {
          "name": "临沂市",
          "area": [
            "兰山区",
            "罗庄区",
            "河东区",
            "郯城县",
            "兰陵县",
            "莒南县",
            "沂水县",
            "蒙阴县",
            "平邑县",
            "费县",
            "沂南县",
            "临沭县"
          ]
        },
        {
          "name": "德州市",
          "area": [
            "德城区",
            "陵城区",
            "宁津县",
            "庆云县",
            "临邑县",
            "齐河县",
            "平原县",
            "夏津县",
            "武城县",
            "乐陵市",
            "禹城市"
          ]
        },
        {
          "name": "聊城市",
          "area": [
            "东昌府区",
            "茌平区",
            "临清市",
            "东阿县",
            "冠县",
            "高唐县",
            "阳谷县",
            "莘县"
          ]
        },
        {
          "name": "滨州市",
          "area": [
            "滨城区",
            "沾化区",
            "惠民县",
            "阳信县",
            "无棣县",
            "博兴县",
            "邹平市"
          ]
        },
        {
          "name": "菏泽市",
          "area": [
            "牡丹区",
            "定陶县",
            "巨野县",
            "曹县",
            "成武县",
            "单县",
            "郓城县",
            "鄄城县",
            "东明县"
          ]
        }
      ]
    },
    {
      "name": "浙江省",
      "city": [
        {
          "name": "杭州市",
          "area": [
            "上城区",
            "拱墅区",
            "西湖区",
            "滨江区",
            "萧山区",
            "余杭区",
            "富阳区",
            "临安区",
            "临平区",
            "钱塘区",
            "建德市",
            "桐庐县",
            "淳安县"
          ]
        },
        {
          "name": "宁波市",
          "area": [
            "海曙区",
            "江北区",
            "北仑区",
            "镇海区",
            "鄞州区",
            "奉化市",
            "余姚市",
            "慈溪市",
            "象山县",
            "宁海县"
          ]
        },
        {
          "name": "温州市",
          "area": [
            "鹿城区",
            "龙湾区",
            "瓯海区",
            "洞头区",
            "永嘉县",
            "平阳县",
            "苍南县",
            "文成县",
            "泰顺县",
            "瑞安市",
            "乐清市",
            "龙港市"
          ]
        },
        {
          "name": "嘉兴市",
          "area": [
            "南湖区",
            "秀洲区",
            "嘉善县",
            "海盐县",
            "海宁市",
            "平湖市",
            "桐乡市"
          ]
        },
        {
          "name": "湖州市",
          "area": [
            "吴兴区",
            "南浔区",
            "德清县",
            "长兴县",
            "安吉县"
          ]
        },
        {
          "name": "绍兴市",
          "area": [
            "越城区",
            "柯桥区",
            "上虞区",
            "新昌县",
            "嵊州市",
            "诸暨市"
          ]
        },
        {
          "name": "金华市",
          "area": [
            "婺城区",
            "金东区",
            "兰溪市",
            "义乌市",
            "东阳市",
            "永康市",
            "浦江县",
            "武义县",
            "磐安县"
          ]
        },
        {
          "name": "衢州市",
          "area": [
            "柯城区",
            "衢江区",
            "龙游县",
            "江山市",
            "常山县",
            "开化县"
          ]
        },
        {
          "name": "舟山市",
          "area": [
            "定海区",
            "普陀区",
            "岱山县",
            "嵊泗县"
          ]
        },
        {
          "name": "台州市",
          "area": [
            "椒江区",
            "黄岩区",
            "路桥区",
            "临海市",
            "温岭市",
            "玉环市",
            "天台县",
            "仙居县",
            "三门县"
          ]
        },
        {
          "name": "丽水市",
          "area": [
            "莲都区",
            "龙泉市",
            "青田县",
            "云和县",
            "庆元县",
            "缙云县",
            "遂昌县",
            "松阳县",
            "景宁畲族自治县"
          ]
        }
      ]
    },
    {
      "name": "河南省",
      "city": [
        {
          "name": "郑州市",
          "area": [
            "中原区",
            "二七区",
            "管城回族区",
            "金水区",
            "上街区",
            "惠济区",
            "中牟县",
            "巩义市",
            "荥阳市",
            "新密市",
            "新郑市",
            "登封市"
          ]
        },
        {
          "name": "开封市",
          "area": [
            "龙亭区",
            "顺河回族区",
            "鼓楼区",
            "禹王台区",
            "祥符区",
            "杞县",
            "通许县",
            "尉氏县",
            "兰考县"
          ]
        },
        {
          "name": "洛阳市",
          "area": [
            "老城区",
            "西工区",
            "瀍河回族区",
            "涧西区",
            "吉利区",
            "洛龙区",
            "孟津县",
            "新安县",
            "栾川县",
            "嵩县",
            "汝阳县",
            "宜阳县",
            "洛宁县",
            "伊川县",
            "偃师市"
          ]
        },
        {
          "name": "平顶山市",
          "area": [
            "新华区",
            "卫东区",
            "石龙区",
            "湛河区",
            "宝丰县",
            "叶县",
            "鲁山县",
            "郏县",
            "舞钢市",
            "汝州市"
          ]
        },
        {
          "name": "安阳市",
          "area": [
            "文峰区",
            "北关区",
            "殷都区",
            "龙安区",
            "安阳县",
            "汤阴县",
            "滑县",
            "内黄县",
            "林州市"
          ]
        },
        {
          "name": "鹤壁市",
          "area": [
            "鹤山区",
            "山城区",
            "淇滨区",
            "浚县",
            "淇县"
          ]
        },
        {
          "name": "新乡市",
          "area": [
            "红旗区",
            "卫滨区",
            "凤泉区",
            "牧野区",
            "新乡县",
            "获嘉县",
            "原阳县",
            "延津县",
            "封丘县",
            "卫辉市",
            "辉县市",
            "长垣市"
          ]
        },
        {
          "name": "焦作市",
          "area": [
            "解放区",
            "中站区",
            "马村区",
            "山阳区",
            "修武县",
            "博爱县",
            "武陟县",
            "温县",
            "沁阳市",
            "孟州市"
          ]
        },
        {
          "name": "濮阳市",
          "area": [
            "华龙区",
            "清丰县",
            "南乐县",
            "范县",
            "台前县",
            "濮阳县"
          ]
        },
        {
          "name": "许昌市",
          "area": [
            "魏都区",
            "建安区",
            "鄢陵县",
            "襄城县",
            "禹州市",
            "长葛市"
          ]
        },
        {
          "name": "漯河市",
          "area": [
            "源汇区",
            "郾城区",
            "召陵区",
            "舞阳县",
            "临颍县"
          ]
        },
        {
          "name": "三门峡市",
          "area": [
            "湖滨区",
            "陕州区",
            "渑池县",
            "卢氏县",
            "义马市",
            "灵宝市"
          ]
        },
        {
          "name": "南阳市",
          "area": [
            "宛城区",
            "卧龙区",
            "南召县",
            "方城县",
            "西峡县",
            "镇平县",
            "内乡县",
            "淅川县",
            "社旗县",
            "唐河县",
            "新野县",
            "桐柏县",
            "邓州市"
          ]
        },
        {
          "name": "商丘市",
          "area": [
            "梁园区",
            "睢阳区",
            "民权县",
            "睢县",
            "宁陵县",
            "柘城县",
            "虞城县",
            "夏邑县",
            "永城市"
          ]
        },
        {
          "name": "信阳市",
          "area": [
            "浉河区",
            "平桥区",
            "罗山县",
            "光山县",
            "新县",
            "商城县",
            "固始县",
            "潢川县",
            "淮滨县",
            "息县"
          ]
        },
        {
          "name": "周口市",
          "area": [
            "川汇区",
            "扶沟县",
            "淮阳区",
            "西华县",
            "商水县",
            "沈丘县",
            "郸城县",
            "太康县",
            "鹿邑县",
            "项城市"
          ]
        },
        {
          "name": "驻马店市",
          "area": [
            "驿城区",
            "西平县",
            "上蔡县",
            "平舆县",
            "正阳县",
            "确山县",
            "泌阳县",
            "汝南县",
            "遂平县",
            "新蔡县"
          ]
        },
        {
          "name": "济源市",
          "area": [
            "济水街道",
            "沁园街道",
            "北海街道",
            "天坛街道",
            "玉泉街道",
            "克井镇",
            "五龙口镇",
            "梨林镇",
            "轵城镇",
            "承留镇",
            "坡头镇",
            "大峪镇",
            "邵原镇",
            "思礼镇",
            "王屋镇",
            "下冶镇"
          ]
        }
      ]
    },
    {
      "name": "四川省",
      "city": [
        {
          "name": "成都市",
          "area": [
            "锦江区",
            "青羊区",
            "金牛区",
            "武侯区",
            "成华区",
            "龙泉驿区",
            "青白江区",
            "新都区",
            "温江区",
            "双流区",
            "郫都区",
            "新津区",
            "金堂县",
            "大邑县",
            "蒲江县",
            "都江堰市",
            "彭州市",
            "邛崃市",
            "崇州市",
            "简阳市",
            "天府区"
          ]
        },
        {
          "name": "自贡市",
          "area": [
            "自流井区",
            "贡井区",
            "大安区",
            "沿滩区",
            "荣县",
            "富顺县"
          ]
        },
        {
          "name": "攀枝花市",
          "area": [
            "东区",
            "西区",
            "仁和区",
            "米易县",
            "盐边县"
          ]
        },
        {
          "name": "泸州市",
          "area": [
            "江阳区",
            "纳溪区",
            "龙马潭区",
            "泸县",
            "合江县",
            "叙永县",
            "古蔺县"
          ]
        },
        {
          "name": "德阳市",
          "area": [
            "旌阳区",
            "罗江区",
            "中江县",
            "广汉市",
            "什邡市",
            "绵竹市"
          ]
        },
        {
          "name": "绵阳市",
          "area": [
            "涪城区",
            "游仙区",
            "安州区",
            "三台县",
            "盐亭县",
            "梓潼县",
            "北川羌族自治县",
            "平武县",
            "江油市"
          ]
        },
        {
          "name": "广元市",
          "area": [
            "利州区",
            "昭化区",
            "朝天区",
            "旺苍县",
            "青川县",
            "剑阁县",
            "苍溪县"
          ]
        },
        {
          "name": "遂宁市",
          "area": [
            "船山区",
            "安居区",
            "蓬溪县",
            "大英县",
            "射洪市"
          ]
        },
        {
          "name": "内江市",
          "area": [
            "市中区",
            "东兴区",
            "威远县",
            "资中县",
            "隆昌市"
          ]
        },
        {
          "name": "乐山市",
          "area": [
            "市中区",
            "沙湾区",
            "五通桥区",
            "金口河区",
            "犍为县",
            "井研县",
            "夹江县",
            "沐川县",
            "峨边彝族自治县",
            "马边彝族自治县",
            "峨眉山市"
          ]
        },
        {
          "name": "南充市",
          "area": [
            "顺庆区",
            "高坪区",
            "嘉陵区",
            "南部县",
            "营山县",
            "蓬安县",
            "仪陇县",
            "西充县",
            "阆中市"
          ]
        },
        {
          "name": "眉山市",
          "area": [
            "东坡区",
            "彭山区",
            "仁寿县",
            "洪雅县",
            "丹棱县",
            "青神县"
          ]
        },
        {
          "name": "宜宾市",
          "area": [
            "翠屏区",
            "南溪区",
            "叙州区",
            "江安县",
            "长宁县",
            "高县",
            "珙县",
            "筠连县",
            "兴文县",
            "屏山县"
          ]
        },
        {
          "name": "广安市",
          "area": [
            "广安区",
            "前锋区",
            "岳池县",
            "武胜县",
            "邻水县",
            "华蓥市"
          ]
        },
        {
          "name": "达州市",
          "area": [
            "通川区",
            "达川区",
            "宣汉县",
            "开江县",
            "大竹县",
            "渠县",
            "万源市"
          ]
        },
        {
          "name": "雅安市",
          "area": [
            "雨城区",
            "名山区",
            "荥经县",
            "汉源县",
            "石棉县",
            "天全县",
            "芦山县",
            "宝兴县"
          ]
        },
        {
          "name": "巴中市",
          "area": [
            "巴州区",
            "恩阳区",
            "通江县",
            "南江县",
            "平昌县"
          ]
        },
        {
          "name": "资阳市",
          "area": [
            "雁江区",
            "安岳县",
            "乐至县"
          ]
        },
        {
          "name": "阿坝藏族羌族自治州",
          "area": [
            "马尔康市",
            "汶川县",
            "理县",
            "茂县",
            "松潘县",
            "九寨沟县",
            "金川县",
            "小金县",
            "黑水县",
            "壤塘县",
            "阿坝县",
            "若尔盖县",
            "红原县"
          ]
        },
        {
          "name": "甘孜藏族自治州",
          "area": [
            "康定市",
            "泸定县",
            "丹巴县",
            "九龙县",
            "雅江县",
            "道孚县",
            "炉霍县",
            "甘孜县",
            "新龙县",
            "德格县",
            "白玉县",
            "石渠县",
            "色达县",
            "理塘县",
            "巴塘县",
            "乡城县",
            "稻城县",
            "得荣县"
          ]
        },
        {
          "name": "凉山彝族自治州",
          "area": [
            "西昌市",
            "木里藏族自治县",
            "盐源县",
            "德昌县",
            "会理县",
            "会东县",
            "宁南县",
            "普格县",
            "布拖县",
            "金阳县",
            "昭觉县",
            "喜德县",
            "冕宁县",
            "越西县",
            "甘洛县",
            "美姑县",
            "雷波县"
          ]
        }
      ]
    },
    {
      "name": "湖北省",
      "city": [
        {
          "name": "武汉市",
          "area": [
            "江岸区",
            "江汉区",
            "硚口区",
            "汉阳区",
            "武昌区",
            "青山区",
            "洪山区",
            "东西湖区",
            "汉南区",
            "蔡甸区",
            "江夏区",
            "黄陂区",
            "新洲区"
          ]
        },
        {
          "name": "黄石市",
          "area": [
            "黄石港区",
            "西塞山区",
            "下陆区",
            "铁山区",
            "阳新县",
            "大冶市"
          ]
        },
        {
          "name": "十堰市",
          "area": [
            "茅箭区",
            "张湾区",
            "郧阳区",
            "郧西县",
            "竹山县",
            "竹溪县",
            "房县",
            "丹江口市"
          ]
        },
        {
          "name": "宜昌市",
          "area": [
            "西陵区",
            "伍家岗区",
            "点军区",
            "猇亭区",
            "夷陵区",
            "远安县",
            "兴山县",
            "秭归县",
            "长阳土家族自治县",
            "五峰土家族自治县",
            "宜都市",
            "当阳市",
            "枝江市"
          ]
        },
        {
          "name": "襄阳市",
          "area": [
            "襄城区",
            "樊城区",
            "襄州区",
            "南漳县",
            "谷城县",
            "保康县",
            "老河口市",
            "枣阳市",
            "宜城市"
          ]
        },
        {
          "name": "鄂州市",
          "area": [
            "梁子湖区",
            "华容区",
            "鄂城区"
          ]
        },
        {
          "name": "荆门市",
          "area": [
            "东宝区",
            "掇刀区",
            "沙洋县",
            "钟祥市",
            "京山市"
          ]
        },
        {
          "name": "孝感市",
          "area": [
            "孝南区",
            "孝昌县",
            "大悟县",
            "云梦县",
            "应城市",
            "安陆市",
            "汉川市"
          ]
        },
        {
          "name": "荆州市",
          "area": [
            "沙市区",
            "荆州区",
            "公安县",
            "监利县",
            "江陵县",
            "石首市",
            "洪湖市",
            "松滋市"
          ]
        },
        {
          "name": "黄冈市",
          "area": [
            "黄州区",
            "团风县",
            "红安县",
            "罗田县",
            "英山县",
            "浠水县",
            "蕲春县",
            "黄梅县",
            "麻城市",
            "武穴市"
          ]
        },
        {
          "name": "咸宁市",
          "area": [
            "咸安区",
            "嘉鱼县",
            "通城县",
            "崇阳县",
            "通山县",
            "赤壁市"
          ]
        },
        {
          "name": "随州市",
          "area": [
            "曾都区",
            "随县",
            "广水市"
          ]
        },
        {
          "name": "恩施土家族苗族自治州",
          "area": [
            "恩施市",
            "利川市",
            "建始县",
            "巴东县",
            "宣恩县",
            "咸丰县",
            "来凤县",
            "鹤峰县"
          ]
        },
        {
          "name": "仙桃市",
          "area": [
            "干河街道",
            "龙华山街道",
            "沙嘴街道",
            "郑场镇",
            "毛嘴镇",
            "剅河镇",
            "三伏潭镇",
            "胡场镇",
            "长埫口镇",
            "西流河镇",
            "彭场镇",
            "沙湖镇",
            "杨林尾镇",
            "张沟镇",
            "郭河镇",
            "沔城回族镇",
            "通海口镇",
            "陈场镇",
            "仙桃经济开发区",
            "仙桃工业园",
            "沙湖原种场",
            "九合垸原种场",
            "排湖风景区"
          ]
        },
        {
          "name": "潜江市",
          "area": [
            "园林办事处",
            "广华办事处",
            "杨市办事处",
            "周矶办事处",
            "泰丰办事处",
            "高场办事处",
            "熊口镇",
            "高石碑镇",
            "老新镇",
            "王场镇",
            "渔洋镇",
            "龙湾镇",
            "浩口镇",
            "积玉口镇",
            "张金镇",
            "白鹭湖管理区",
            "总口管理区",
            "熊口农场管理区",
            "运粮湖管理区",
            "后湖管理区",
            "周矶管理区",
            "竹根滩镇"
          ]
        },
        {
          "name": "天门市",
          "area": [
            "竟陵街道",
            "候口街道",
            "杨林街道",
            "多宝镇",
            "拖市镇",
            "张港镇",
            "蒋场镇",
            "汪场镇",
            "渔薪镇",
            "黄潭镇",
            "岳口镇",
            "横林镇",
            "彭市镇",
            "麻洋镇",
            "多祥镇",
            "干驿镇",
            "马湾镇",
            "卢市镇",
            "小板镇",
            "九真镇",
            "皂市镇",
            "胡市镇",
            "石家河镇",
            "佛子山镇",
            "净潭乡"
          ]
        },
        {
          "name": "神农架林区",
          "area": [
            "松柏镇",
            "阳日镇",
            "木鱼镇",
            "红坪镇",
            "新华镇",
            "大九湖镇",
            "宋洛乡",
            "下谷坪土家族乡"
          ]
        }
      ]
    },
    {
      "name": "湖南省",
      "city": [
        {
          "name": "长沙市",
          "area": [
            "芙蓉区",
            "天心区",
            "岳麓区",
            "开福区",
            "雨花区",
            "望城区",
            "长沙县",
            "浏阳市",
            "宁乡市"
          ]
        },
        {
          "name": "株洲市",
          "area": [
            "荷塘区",
            "芦淞区",
            "石峰区",
            "天元区",
            "渌口区",
            "攸县",
            "茶陵县",
            "炎陵县",
            "醴陵市",
            "云龙示范区"
          ]
        },
        {
          "name": "湘潭市",
          "area": [
            "雨湖区",
            "岳塘区",
            "湘潭县",
            "湘乡市",
            "韶山市"
          ]
        },
        {
          "name": "衡阳市",
          "area": [
            "珠晖区",
            "雁峰区",
            "石鼓区",
            "蒸湘区",
            "南岳区",
            "衡阳县",
            "衡南县",
            "衡山县",
            "衡东县",
            "祁东县",
            "耒阳市",
            "常宁市"
          ]
        },
        {
          "name": "邵阳市",
          "area": [
            "双清区",
            "大祥区",
            "北塔区",
            "新邵县",
            "邵阳县",
            "隆回县",
            "洞口县",
            "绥宁县",
            "新宁县",
            "城步苗族自治县",
            "武冈市",
            "邵东市"
          ]
        },
        {
          "name": "岳阳市",
          "area": [
            "岳阳楼区",
            "云溪区",
            "君山区",
            "岳阳县",
            "华容县",
            "湘阴县",
            "平江县",
            "汨罗市",
            "临湘市"
          ]
        },
        {
          "name": "常德市",
          "area": [
            "武陵区",
            "鼎城区",
            "安乡县",
            "汉寿县",
            "澧县",
            "临澧县",
            "桃源县",
            "石门县",
            "津市市"
          ]
        },
        {
          "name": "张家界市",
          "area": [
            "永定区",
            "武陵源区",
            "慈利县",
            "桑植县"
          ]
        },
        {
          "name": "益阳市",
          "area": [
            "资阳区",
            "赫山区",
            "南县",
            "桃江县",
            "安化县",
            "沅江市"
          ]
        },
        {
          "name": "郴州市",
          "area": [
            "北湖区",
            "苏仙区",
            "桂阳县",
            "宜章县",
            "永兴县",
            "嘉禾县",
            "临武县",
            "汝城县",
            "桂东县",
            "安仁县",
            "资兴市"
          ]
        },
        {
          "name": "永州市",
          "area": [
            "零陵区",
            "冷水滩区",
            "祁阳县",
            "东安县",
            "双牌县",
            "道县",
            "江永县",
            "宁远县",
            "蓝山县",
            "新田县",
            "江华瑶族自治县"
          ]
        },
        {
          "name": "怀化市",
          "area": [
            "鹤城区",
            "中方县",
            "沅陵县",
            "辰溪县",
            "溆浦县",
            "会同县",
            "麻阳苗族自治县",
            "新晃侗族自治县",
            "芷江侗族自治县",
            "靖州苗族侗族自治县",
            "通道侗族自治县",
            "洪江市"
          ]
        },
        {
          "name": "娄底市",
          "area": [
            "娄星区",
            "双峰县",
            "新化县",
            "冷水江市",
            "涟源市"
          ]
        },
        {
          "name": "湘西土家族苗族自治州",
          "area": [
            "吉首市",
            "泸溪县",
            "凤凰县",
            "花垣县",
            "保靖县",
            "古丈县",
            "永顺县",
            "龙山县"
          ]
        }
      ]
    },
    {
      "name": "河北省",
      "city": [
        {
          "name": "石家庄市",
          "area": [
            "长安区",
            "桥西区",
            "新华区",
            "井陉矿区",
            "裕华区",
            "藁城区",
            "鹿泉区",
            "栾城区",
            "井陉县",
            "正定县",
            "行唐县",
            "灵寿县",
            "高邑县",
            "深泽县",
            "赞皇县",
            "无极县",
            "平山县",
            "元氏县",
            "赵县",
            "辛集市",
            "晋州市",
            "新乐市"
          ]
        },
        {
          "name": "唐山市",
          "area": [
            "路南区",
            "路北区",
            "古冶区",
            "开平区",
            "丰南区",
            "丰润区",
            "曹妃甸区",
            "滦州市",
            "滦南县",
            "乐亭县",
            "迁西县",
            "玉田县",
            "遵化市",
            "迁安市"
          ]
        },
        {
          "name": "秦皇岛市",
          "area": [
            "海港区",
            "山海关区",
            "北戴河区",
            "抚宁区",
            "青龙满族自治县",
            "昌黎县",
            "卢龙县"
          ]
        },
        {
          "name": "邯郸市",
          "area": [
            "邯山区",
            "丛台区",
            "复兴区",
            "峰峰矿区",
            "肥乡区",
            "永年区",
            "临漳县",
            "成安县",
            "大名县",
            "涉县",
            "磁县",
            "邱县",
            "鸡泽县",
            "广平县",
            "馆陶县",
            "魏县",
            "曲周县",
            "武安市"
          ]
        },
        {
          "name": "邢台市",
          "area": [
            "襄都区",
            "信都区",
            "任泽区",
            "南和区",
            "临城县",
            "内丘县",
            "柏乡县",
            "隆尧县",
            "宁晋县",
            "巨鹿县",
            "新河县",
            "广宗县",
            "平乡县",
            "威县",
            "清河县",
            "临西县",
            "南宫市",
            "沙河市"
          ]
        },
        {
          "name": "保定市",
          "area": [
            "竞秀区",
            "莲池区",
            "满城区",
            "清苑区",
            "徐水区",
            "涞水县",
            "阜平县",
            "定兴县",
            "唐县",
            "高阳县",
            "容城县",
            "涞源县",
            "望都县",
            "安新县",
            "易县",
            "曲阳县",
            "蠡县",
            "顺平县",
            "博野县",
            "雄县",
            "涿州市",
            "定州市",
            "安国市",
            "高碑店市"
          ]
        },
        {
          "name": "张家口市",
          "area": [
            "桥东区",
            "桥西区",
            "宣化区",
            "下花园区",
            "万全区",
            "崇礼区",
            "张北县",
            "康保县",
            "沽源县",
            "尚义县",
            "蔚县",
            "阳原县",
            "怀安县",
            "怀来县",
            "涿鹿县",
            "赤城县"
          ]
        },
        {
          "name": "承德市",
          "area": [
            "双桥区",
            "双滦区",
            "鹰手营子矿区",
            "承德县",
            "兴隆县",
            "滦平县",
            "隆化县",
            "丰宁满族自治县",
            "宽城满族自治县",
            "围场满族蒙古族自治县",
            "平泉市"
          ]
        },
        {
          "name": "沧州市",
          "area": [
            "新华区",
            "运河区",
            "沧县",
            "青县",
            "东光县",
            "海兴县",
            "盐山县",
            "肃宁县",
            "南皮县",
            "吴桥县",
            "献县",
            "孟村回族自治县",
            "泊头市",
            "任丘市",
            "黄骅市",
            "河间市"
          ]
        },
        {
          "name": "廊坊市",
          "area": [
            "安次区",
            "广阳区",
            "固安县",
            "永清县",
            "香河县",
            "大城县",
            "文安县",
            "大厂回族自治县",
            "霸州市",
            "三河市"
          ]
        },
        {
          "name": "衡水市",
          "area": [
            "桃城区",
            "冀州区",
            "枣强县",
            "武邑县",
            "武强县",
            "饶阳县",
            "安平县",
            "故城县",
            "景县",
            "阜城县",
            "深州市"
          ]
        }
      ]
    },
    {
      "name": "福建省",
      "city": [
        {
          "name": "福州市",
          "area": [
            "鼓楼区",
            "台江区",
            "仓山区",
            "马尾区",
            "晋安区",
            "长乐区",
            "闽侯县",
            "连江县",
            "罗源县",
            "闽清县",
            "永泰县",
            "平潭县",
            "福清市",
            "高新技术产业开发区"
          ]
        },
        {
          "name": "厦门市",
          "area": [
            "思明区",
            "海沧区",
            "湖里区",
            "集美区",
            "同安区",
            "翔安区"
          ]
        },
        {
          "name": "莆田市",
          "area": [
            "城厢区",
            "涵江区",
            "荔城区",
            "秀屿区",
            "仙游县"
          ]
        },
        {
          "name": "三明市",
          "area": [
            "梅列区",
            "三元区",
            "明溪县",
            "清流县",
            "宁化县",
            "大田县",
            "尤溪县",
            "沙县",
            "将乐县",
            "泰宁县",
            "建宁县",
            "永安市"
          ]
        },
        {
          "name": "泉州市",
          "area": [
            "鲤城区",
            "丰泽区",
            "洛江区",
            "泉港区",
            "惠安县",
            "安溪县",
            "永春县",
            "德化县",
            "金门县",
            "石狮市",
            "晋江市",
            "南安市"
          ]
        },
        {
          "name": "漳州市",
          "area": [
            "芗城区",
            "龙文区",
            "云霄县",
            "漳浦县",
            "诏安县",
            "长泰县",
            "东山县",
            "南靖县",
            "平和县",
            "华安县",
            "龙海市"
          ]
        },
        {
          "name": "南平市",
          "area": [
            "延平区",
            "建阳区",
            "顺昌县",
            "浦城县",
            "光泽县",
            "松溪县",
            "政和县",
            "邵武市",
            "武夷山市",
            "建瓯市"
          ]
        },
        {
          "name": "龙岩市",
          "area": [
            "新罗区",
            "永定区",
            "长汀县",
            "上杭县",
            "武平县",
            "连城县",
            "漳平市"
          ]
        },
        {
          "name": "宁德市",
          "area": [
            "蕉城区",
            "霞浦县",
            "古田县",
            "屏南县",
            "寿宁县",
            "周宁县",
            "柘荣县",
            "福安市",
            "福鼎市"
          ]
        }
      ]
    },
    {
      "name": "安徽省",
      "city": [
        {
          "name": "合肥市",
          "area": [
            "瑶海区",
            "庐阳区",
            "蜀山区",
            "包河区",
            "长丰县",
            "肥东县",
            "肥西县",
            "庐江县",
            "巢湖市"
          ]
        },
        {
          "name": "芜湖市",
          "area": [
            "镜湖区",
            "弋江区",
            "鸠江区",
            "三山区",
            "芜湖县",
            "繁昌县",
            "南陵县",
            "无为市"
          ]
        },
        {
          "name": "蚌埠市",
          "area": [
            "龙子湖区",
            "蚌山区",
            "禹会区",
            "淮上区",
            "怀远县",
            "五河县",
            "固镇县"
          ]
        },
        {
          "name": "淮南市",
          "area": [
            "大通区",
            "田家庵区",
            "谢家集区",
            "八公山区",
            "潘集区",
            "凤台县",
            "寿县"
          ]
        },
        {
          "name": "马鞍山市",
          "area": [
            "花山区",
            "雨山区",
            "博望区",
            "当涂县",
            "含山县",
            "和县"
          ]
        },
        {
          "name": "淮北市",
          "area": [
            "杜集区",
            "相山区",
            "烈山区",
            "濉溪县"
          ]
        },
        {
          "name": "铜陵市",
          "area": [
            "铜官区",
            "义安区",
            "郊区",
            "枞阳县"
          ]
        },
        {
          "name": "安庆市",
          "area": [
            "迎江区",
            "大观区",
            "宜秀区",
            "怀宁县",
            "太湖县",
            "宿松县",
            "望江县",
            "岳西县",
            "桐城市",
            "潜山市"
          ]
        },
        {
          "name": "黄山市",
          "area": [
            "屯溪区",
            "黄山区",
            "徽州区",
            "歙县",
            "休宁县",
            "黟县",
            "祁门县"
          ]
        },
        {
          "name": "滁州市",
          "area": [
            "琅琊区",
            "南谯区",
            "来安县",
            "全椒县",
            "定远县",
            "凤阳县",
            "天长市",
            "明光市"
          ]
        },
        {
          "name": "阜阳市",
          "area": [
            "颍州区",
            "颍东区",
            "颍泉区",
            "临泉县",
            "太和县",
            "阜南县",
            "颍上县",
            "界首市"
          ]
        },
        {
          "name": "宿州市",
          "area": [
            "埇桥区",
            "砀山县",
            "萧县",
            "灵璧县",
            "泗县"
          ]
        },
        {
          "name": "六安市",
          "area": [
            "金安区",
            "裕安区",
            "叶集区",
            "霍邱县",
            "舒城县",
            "金寨县",
            "霍山县"
          ]
        },
        {
          "name": "亳州市",
          "area": [
            "谯城区",
            "涡阳县",
            "蒙城县",
            "利辛县"
          ]
        },
        {
          "name": "池州市",
          "area": [
            "贵池区",
            "东至县",
            "石台县",
            "青阳县"
          ]
        },
        {
          "name": "宣城市",
          "area": [
            "宣州区",
            "郎溪县",
            "泾县",
            "绩溪县",
            "旌德县",
            "宁国市",
            "广德市"
          ]
        }
      ]
    },
    {
      "name": "辽宁省",
      "city": [
        {
          "name": "沈阳市",
          "area": [
            "和平区",
            "沈河区",
            "大东区",
            "皇姑区",
            "铁西区",
            "苏家屯区",
            "浑南区",
            "沈北区",
            "于洪区",
            "辽中区",
            "康平县",
            "法库县",
            "新民市"
          ]
        },
        {
          "name": "大连市",
          "area": [
            "中山区",
            "西岗区",
            "沙河口区",
            "甘井子区",
            "旅顺口区",
            "金州区",
            "普兰店区",
            "长海县",
            "瓦房店市",
            "庄河市"
          ]
        },
        {
          "name": "鞍山市",
          "area": [
            "铁东区",
            "铁西区",
            "立山区",
            "千山区",
            "台安县",
            "岫岩满族自治县",
            "海城市"
          ]
        },
        {
          "name": "抚顺市",
          "area": [
            "新抚区",
            "东洲区",
            "望花区",
            "顺城区",
            "抚顺县",
            "新宾满族自治县",
            "清原满族自治县"
          ]
        },
        {
          "name": "本溪市",
          "area": [
            "平山区",
            "溪湖区",
            "明山区",
            "南芬区",
            "本溪满族自治县",
            "桓仁满族自治县"
          ]
        },
        {
          "name": "丹东市",
          "area": [
            "元宝区",
            "振兴区",
            "振安区",
            "宽甸满族自治县",
            "东港市",
            "凤城市"
          ]
        },
        {
          "name": "锦州市",
          "area": [
            "古塔区",
            "凌河区",
            "太和区",
            "黑山县",
            "义县",
            "凌海市",
            "北镇市"
          ]
        },
        {
          "name": "营口市",
          "area": [
            "站前区",
            "西市区",
            "鲅鱼圈区",
            "老边区",
            "盖州市",
            "大石桥市"
          ]
        },
        {
          "name": "阜新市",
          "area": [
            "海州区",
            "新邱区",
            "太平区",
            "清河门区",
            "细河区",
            "阜新蒙古族自治县",
            "彰武县"
          ]
        },
        {
          "name": "辽阳市",
          "area": [
            "白塔区",
            "文圣区",
            "宏伟区",
            "弓长岭区",
            "太子河区",
            "辽阳县",
            "灯塔市"
          ]
        },
        {
          "name": "盘锦市",
          "area": [
            "双台子区",
            "兴隆台区",
            "大洼区",
            "盘山县"
          ]
        },
        {
          "name": "铁岭市",
          "area": [
            "银州区",
            "清河区",
            "铁岭县",
            "西丰县",
            "昌图县",
            "调兵山市",
            "开原市"
          ]
        },
        {
          "name": "朝阳市",
          "area": [
            "双塔区",
            "龙城区",
            "朝阳县",
            "建平县",
            "喀喇沁左翼蒙古族自治县",
            "北票市",
            "凌源市"
          ]
        },
        {
          "name": "葫芦岛市",
          "area": [
            "连山区",
            "龙港区",
            "南票区",
            "绥中县",
            "建昌县",
            "兴城市"
          ]
        }
      ]
    },
    {
      "name": "陕西省",
      "city": [
        {
          "name": "西安市",
          "area": [
            "新城区",
            "碑林区",
            "莲湖区",
            "灞桥区",
            "未央区",
            "雁塔区",
            "阎良区",
            "临潼区",
            "长安区",
            "高陵区",
            "鄠邑区",
            "蓝田县",
            "周至县",
            "西咸区"
          ]
        },
        {
          "name": "铜川市",
          "area": [
            "王益区",
            "印台区",
            "耀州区",
            "宜君县"
          ]
        },
        {
          "name": "宝鸡市",
          "area": [
            "渭滨区",
            "金台区",
            "陈仓区",
            "凤翔县",
            "岐山县",
            "扶风县",
            "眉县",
            "陇县",
            "千阳县",
            "麟游县",
            "凤县",
            "太白县"
          ]
        },
        {
          "name": "咸阳市",
          "area": [
            "秦都区",
            "杨陵区",
            "渭城区",
            "三原县",
            "泾阳县",
            "乾县",
            "礼泉县",
            "永寿县",
            "长武县",
            "旬邑县",
            "淳化县",
            "武功县",
            "兴平市",
            "彬州市"
          ]
        },
        {
          "name": "渭南市",
          "area": [
            "临渭区",
            "华州区",
            "潼关县",
            "大荔县",
            "合阳县",
            "澄城县",
            "蒲城县",
            "白水县",
            "富平县",
            "韩城市",
            "华阴市"
          ]
        },
        {
          "name": "延安市",
          "area": [
            "宝塔区",
            "安塞区",
            "延长县",
            "延川县",
            "志丹县",
            "吴起县",
            "甘泉县",
            "富县",
            "洛川县",
            "宜川县",
            "黄龙县",
            "黄陵县",
            "子长市"
          ]
        },
        {
          "name": "汉中市",
          "area": [
            "汉台区",
            "南郑区",
            "城固县",
            "洋县",
            "西乡县",
            "勉县",
            "宁强县",
            "略阳县",
            "镇巴县",
            "留坝县",
            "佛坪县"
          ]
        },
        {
          "name": "榆林市",
          "area": [
            "榆阳区",
            "横山区",
            "府谷县",
            "靖边县",
            "定边县",
            "绥德县",
            "米脂县",
            "佳县",
            "吴堡县",
            "清涧县",
            "子洲县",
            "神木市"
          ]
        },
        {
          "name": "安康市",
          "area": [
            "汉滨区",
            "汉阴县",
            "石泉县",
            "宁陕县",
            "紫阳县",
            "岚皋县",
            "平利县",
            "镇坪县",
            "旬阳县",
            "白河县"
          ]
        },
        {
          "name": "商洛市",
          "area": [
            "商州区",
            "洛南县",
            "丹凤县",
            "商南县",
            "山阳县",
            "镇安县",
            "柞水县"
          ]
        }
      ]
    },
    {
      "name": "江西省",
      "city": [
        {
          "name": "南昌市",
          "area": [
            "东湖区",
            "西湖区",
            "青云谱区",
            "青山湖区",
            "新建区",
            "红谷滩区",
            "南昌县",
            "安义县",
            "进贤县"
          ]
        },
        {
          "name": "景德镇市",
          "area": [
            "昌江区",
            "珠山区",
            "浮梁县",
            "乐平市"
          ]
        },
        {
          "name": "萍乡市",
          "area": [
            "安源区",
            "湘东区",
            "莲花县",
            "上栗县",
            "芦溪县"
          ]
        },
        {
          "name": "九江市",
          "area": [
            "濂溪区",
            "浔阳区",
            "柴桑区",
            "武宁县",
            "修水县",
            "永修县",
            "德安县",
            "都昌县",
            "湖口县",
            "彭泽县",
            "瑞昌市",
            "共青城市",
            "庐山市"
          ]
        },
        {
          "name": "新余市",
          "area": [
            "渝水区",
            "分宜县"
          ]
        },
        {
          "name": "鹰潭市",
          "area": [
            "月湖区",
            "余江区",
            "贵溪市"
          ]
        },
        {
          "name": "赣州市",
          "area": [
            "章贡区",
            "南康区",
            "赣县区",
            "信丰县",
            "大余县",
            "上犹县",
            "崇义县",
            "安远县",
            "定南县",
            "全南县",
            "宁都县",
            "于都县",
            "兴国县",
            "会昌县",
            "寻乌县",
            "石城县",
            "瑞金市",
            "龙南市"
          ]
        },
        {
          "name": "吉安市",
          "area": [
            "吉州区",
            "青原区",
            "吉安县",
            "吉水县",
            "峡江县",
            "新干县",
            "永丰县",
            "泰和县",
            "遂川县",
            "万安县",
            "安福县",
            "永新县",
            "井冈山市"
          ]
        },
        {
          "name": "宜春市",
          "area": [
            "袁州区",
            "奉新县",
            "万载县",
            "上高县",
            "宜丰县",
            "靖安县",
            "铜鼓县",
            "丰城市",
            "樟树市",
            "高安市"
          ]
        },
        {
          "name": "抚州市",
          "area": [
            "临川区",
            "东乡区",
            "南城县",
            "黎川县",
            "南丰县",
            "崇仁县",
            "乐安县",
            "宜黄县",
            "金溪县",
            "资溪县",
            "广昌县"
          ]
        },
        {
          "name": "上饶市",
          "area": [
            "信州区",
            "广丰区",
            "广信区",
            "玉山县",
            "铅山县",
            "横峰县",
            "弋阳县",
            "余干县",
            "鄱阳县",
            "万年县",
            "婺源县",
            "德兴市"
          ]
        }
      ]
    },
    {
      "name": "云南省",
      "city": [
        {
          "name": "昆明市",
          "area": [
            "五华区",
            "盘龙区",
            "官渡区",
            "西山区",
            "东川区",
            "呈贡区",
            "晋宁区",
            "富民县",
            "宜良县",
            "石林彝族自治县",
            "嵩明县",
            "禄劝彝族苗族自治县",
            "寻甸回族彝族自治县",
            "安宁市"
          ]
        },
        {
          "name": "曲靖市",
          "area": [
            "麒麟区",
            "沾益区",
            "马龙区",
            "陆良县",
            "师宗县",
            "罗平县",
            "富源县",
            "会泽县",
            "宣威市"
          ]
        },
        {
          "name": "玉溪市",
          "area": [
            "红塔区",
            "江川区",
            "通海县",
            "华宁县",
            "易门县",
            "峨山彝族自治县",
            "新平彝族傣族自治县",
            "元江哈尼族彝族傣族自治县",
            "澄江市"
          ]
        },
        {
          "name": "保山市",
          "area": [
            "隆阳区",
            "施甸县",
            "龙陵县",
            "昌宁县",
            "腾冲市"
          ]
        },
        {
          "name": "昭通市",
          "area": [
            "昭阳区",
            "鲁甸县",
            "巧家县",
            "盐津县",
            "大关县",
            "永善县",
            "绥江县",
            "镇雄县",
            "彝良县",
            "威信县",
            "水富市"
          ]
        },
        {
          "name": "丽江市",
          "area": [
            "古城区",
            "玉龙纳西族自治县",
            "永胜县",
            "华坪县",
            "宁蒗彝族自治县"
          ]
        },
        {
          "name": "普洱市",
          "area": [
            "思茅区",
            "宁洱哈尼族彝族自治县",
            "墨江哈尼族自治县",
            "景东彝族自治县",
            "景谷傣族彝族自治县",
            "镇沅彝族哈尼族拉祜族自治县",
            "江城哈尼族彝族自治县",
            "孟连傣族拉祜族佤族自治县",
            "澜沧拉祜族自治县",
            "西盟佤族自治县"
          ]
        },
        {
          "name": "临沧市",
          "area": [
            "临翔区",
            "凤庆县",
            "云县",
            "永德县",
            "镇康县",
            "双江拉祜族佤族布朗族傣族自治县",
            "耿马傣族佤族自治县",
            "沧源佤族自治县"
          ]
        },
        {
          "name": "楚雄彝族自治州",
          "area": [
            "楚雄市",
            "双柏县",
            "牟定县",
            "南华县",
            "姚安县",
            "大姚县",
            "永仁县",
            "元谋县",
            "武定县",
            "禄丰县"
          ]
        },
        {
          "name": "红河哈尼族彝族自治州",
          "area": [
            "个旧市",
            "开远市",
            "蒙自市",
            "弥勒市",
            "屏边苗族自治县",
            "建水县",
            "石屏县",
            "泸西县",
            "元阳县",
            "红河县",
            "金平苗族瑶族傣族自治县",
            "绿春县",
            "河口瑶族自治县"
          ]
        },
        {
          "name": "文山壮族苗族自治州",
          "area": [
            "文山市",
            "砚山县",
            "西畴县",
            "麻栗坡县",
            "马关县",
            "丘北县",
            "广南县",
            "富宁县"
          ]
        },
        {
          "name": "西双版纳傣族自治州",
          "area": [
            "景洪市",
            "勐海县",
            "勐腊县"
          ]
        },
        {
          "name": "大理白族自治州",
          "area": [
            "大理市",
            "漾濞彝族自治县",
            "祥云县",
            "宾川县",
            "弥渡县",
            "南涧彝族自治县",
            "巍山彝族回族自治县",
            "永平县",
            "云龙县",
            "洱源县",
            "剑川县",
            "鹤庆县"
          ]
        },
        {
          "name": "德宏傣族景颇族自治州",
          "area": [
            "瑞丽市",
            "芒市",
            "梁河县",
            "盈江县",
            "陇川县"
          ]
        },
        {
          "name": "怒江傈僳族自治州",
          "area": [
            "泸水市",
            "福贡县",
            "贡山独龙族怒族自治县",
            "兰坪白族普米族自治县"
          ]
        },
        {
          "name": "迪庆藏族自治州",
          "area": [
            "香格里拉市",
            "德钦县",
            "维西傈僳族自治县"
          ]
        }
      ]
    },
    {
      "name": "山西省",
      "city": [
        {
          "name": "太原市",
          "area": [
            "小店区",
            "迎泽区",
            "杏花岭区",
            "尖草坪区",
            "万柏林区",
            "晋源区",
            "清徐县",
            "阳曲县",
            "娄烦县",
            "古交市"
          ]
        },
        {
          "name": "大同市",
          "area": [
            "新荣区",
            "平城区",
            "云冈区",
            "云州区",
            "阳高县",
            "天镇县",
            "广灵县",
            "灵丘县",
            "浑源县",
            "左云县"
          ]
        },
        {
          "name": "阳泉市",
          "area": [
            "城区",
            "矿区",
            "郊区",
            "平定县",
            "盂县"
          ]
        },
        {
          "name": "长治市",
          "area": [
            "潞州区",
            "上党区",
            "屯留区",
            "潞城区",
            "襄垣县",
            "平顺县",
            "黎城县",
            "壶关县",
            "长子县",
            "武乡县",
            "沁县",
            "沁源县"
          ]
        },
        {
          "name": "晋城市",
          "area": [
            "城区",
            "沁水县",
            "阳城县",
            "陵川县",
            "泽州县",
            "高平市"
          ]
        },
        {
          "name": "朔州市",
          "area": [
            "朔城区",
            "平鲁区",
            "山阴县",
            "应县",
            "右玉县",
            "怀仁市"
          ]
        },
        {
          "name": "晋中市",
          "area": [
            "榆次区",
            "太谷区",
            "榆社县",
            "左权县",
            "和顺县",
            "昔阳县",
            "寿阳县",
            "祁县",
            "平遥县",
            "灵石县",
            "介休市"
          ]
        },
        {
          "name": "运城市",
          "area": [
            "盐湖区",
            "临猗县",
            "万荣县",
            "闻喜县",
            "稷山县",
            "新绛县",
            "绛县",
            "垣曲县",
            "夏县",
            "平陆县",
            "芮城县",
            "永济市",
            "河津市"
          ]
        },
        {
          "name": "忻州市",
          "area": [
            "忻府区",
            "定襄县",
            "五台县",
            "代县",
            "繁峙县",
            "宁武县",
            "静乐县",
            "神池县",
            "五寨县",
            "岢岚县",
            "河曲县",
            "保德县",
            "偏关县",
            "原平市"
          ]
        },
        {
          "name": "临汾市",
          "area": [
            "尧都区",
            "曲沃县",
            "翼城县",
            "襄汾县",
            "洪洞县",
            "古县",
            "安泽县",
            "浮山县",
            "吉县",
            "乡宁县",
            "大宁县",
            "隰县",
            "永和县",
            "蒲县",
            "汾西县",
            "侯马市",
            "霍州市"
          ]
        },
        {
          "name": "吕梁市",
          "area": [
            "离石区",
            "文水县",
            "交城县",
            "兴县",
            "临县",
            "柳林县",
            "石楼县",
            "岚县",
            "方山县",
            "中阳县",
            "交口县",
            "孝义市",
            "汾阳市"
          ]
        }
      ]
    },
    {
      "name": "吉林省",
      "city": [
        {
          "name": "长春市",
          "area": [
            "南关区",
            "宽城区",
            "朝阳区",
            "二道区",
            "绿园区",
            "双阳区",
            "九台区",
            "农安县",
            "榆树市",
            "德惠市",
            "公主岭市",
            "长德区",
            "北湖区",
            "空港区",
            "北区",
            "南区",
            "高新区",
            "汽开区",
            "净月区",
            "莲花山旅游度假区"
          ]
        },
        {
          "name": "吉林市",
          "area": [
            "昌邑区",
            "龙潭区",
            "船营区",
            "丰满区",
            "永吉县",
            "蛟河市",
            "桦甸市",
            "舒兰市",
            "磐石市"
          ]
        },
        {
          "name": "四平市",
          "area": [
            "铁西区",
            "铁东区",
            "梨树县",
            "伊通满族自治县",
            "双辽市"
          ]
        },
        {
          "name": "辽源市",
          "area": [
            "龙山区",
            "西安区",
            "东丰县",
            "东辽县"
          ]
        },
        {
          "name": "通化市",
          "area": [
            "东昌区",
            "二道江区",
            "通化县",
            "辉南县",
            "柳河县",
            "梅河口市",
            "集安市"
          ]
        },
        {
          "name": "白山市",
          "area": [
            "浑江区",
            "江源区",
            "抚松县",
            "靖宇县",
            "长白朝鲜族自治县",
            "临江市"
          ]
        },
        {
          "name": "松原市",
          "area": [
            "宁江区",
            "前郭尔罗斯蒙古族自治县",
            "长岭县",
            "乾安县",
            "扶余市"
          ]
        },
        {
          "name": "白城市",
          "area": [
            "洮北区",
            "镇赉县",
            "通榆县",
            "洮南市",
            "大安市"
          ]
        },
        {
          "name": "延边朝鲜族自治州",
          "area": [
            "延吉市",
            "图们市",
            "敦化市",
            "珲春市",
            "龙井市",
            "和龙市",
            "汪清县",
            "安图县"
          ]
        }
      ]
    },
    {
      "name": "贵州省",
      "city": [
        {
          "name": "贵阳市",
          "area": [
            "南明区",
            "云岩区",
            "花溪区",
            "乌当区",
            "白云区",
            "观山湖区",
            "开阳县",
            "息烽县",
            "修文县",
            "清镇市"
          ]
        },
        {
          "name": "六盘水市",
          "area": [
            "钟山区",
            "六枝特区",
            "水城县",
            "盘州市"
          ]
        },
        {
          "name": "遵义市",
          "area": [
            "红花岗区",
            "汇川区",
            "播州区",
            "桐梓县",
            "绥阳县",
            "正安县",
            "道真仡佬族苗族自治县",
            "务川仡佬族苗族自治县",
            "凤冈县",
            "湄潭县",
            "余庆县",
            "习水县",
            "赤水市",
            "仁怀市"
          ]
        },
        {
          "name": "安顺市",
          "area": [
            "西秀区",
            "平坝区",
            "普定县",
            "镇宁布依族苗族自治县",
            "关岭布依族苗族自治县",
            "紫云苗族布依族自治县"
          ]
        },
        {
          "name": "毕节市",
          "area": [
            "七星关区",
            "大方县",
            "黔西县",
            "金沙县",
            "织金县",
            "纳雍县",
            "威宁彝族回族苗族自治县",
            "赫章县"
          ]
        },
        {
          "name": "铜仁市",
          "area": [
            "碧江区",
            "万山区",
            "江口县",
            "玉屏侗族自治县",
            "石阡县",
            "思南县",
            "印江土家族苗族自治县",
            "德江县",
            "沿河土家族自治县",
            "松桃苗族自治县"
          ]
        },
        {
          "name": "黔西南布依族苗族自治州",
          "area": [
            "兴义市",
            "兴仁市",
            "普安县",
            "晴隆县",
            "贞丰县",
            "望谟县",
            "册亨县",
            "安龙县"
          ]
        },
        {
          "name": "黔东南苗族侗族自治州",
          "area": [
            "凯里市",
            "黄平县",
            "施秉县",
            "三穗县",
            "镇远县",
            "岑巩县",
            "天柱县",
            "锦屏县",
            "剑河县",
            "台江县",
            "黎平县",
            "榕江县",
            "从江县",
            "雷山县",
            "麻江县",
            "丹寨县"
          ]
        },
        {
          "name": "黔南布依族苗族自治州",
          "area": [
            "都匀市",
            "福泉市",
            "荔波县",
            "贵定县",
            "瓮安县",
            "独山县",
            "平塘县",
            "罗甸县",
            "长顺县",
            "龙里县",
            "惠水县",
            "三都水族自治县"
          ]
        }
      ]
    },
    {
      "name": "甘肃省",
      "city": [
        {
          "name": "兰州市",
          "area": [
            "城关区",
            "七里河区",
            "西固区",
            "安宁区",
            "红古区",
            "永登县",
            "皋兰县",
            "榆中县"
          ]
        },
        {
          "name": "嘉峪关市",
          "area": [
            "胜利街道",
            "五一街道",
            "矿山街道",
            "新华街道",
            "建设街道",
            "前进街道",
            "峪苑街道",
            "朝阳街道",
            "峪泉镇",
            "文殊镇",
            "新城镇",
            "雄关区",
            "长城区",
            "镜铁区"
          ]
        },
        {
          "name": "金昌市",
          "area": [
            "金川区",
            "永昌县"
          ]
        },
        {
          "name": "白银市",
          "area": [
            "白银区",
            "平川区",
            "靖远县",
            "会宁县",
            "景泰县"
          ]
        },
        {
          "name": "天水市",
          "area": [
            "秦州区",
            "麦积区",
            "清水县",
            "秦安县",
            "甘谷县",
            "武山县",
            "张家川回族自治县"
          ]
        },
        {
          "name": "武威市",
          "area": [
            "凉州区",
            "民勤县",
            "古浪县",
            "天祝藏族自治县"
          ]
        },
        {
          "name": "张掖市",
          "area": [
            "甘州区",
            "肃南裕固族自治县",
            "民乐县",
            "临泽县",
            "高台县",
            "山丹县"
          ]
        },
        {
          "name": "平凉市",
          "area": [
            "崆峒区",
            "泾川县",
            "灵台县",
            "崇信县",
            "庄浪县",
            "静宁县",
            "华亭市"
          ]
        },
        {
          "name": "酒泉市",
          "area": [
            "肃州区",
            "金塔县",
            "瓜州县",
            "肃北蒙古族自治县",
            "阿克塞哈萨克族自治县",
            "玉门市",
            "敦煌市"
          ]
        },
        {
          "name": "庆阳市",
          "area": [
            "西峰区",
            "庆城县",
            "环县",
            "华池县",
            "合水县",
            "正宁县",
            "宁县",
            "镇原县"
          ]
        },
        {
          "name": "定西市",
          "area": [
            "安定区",
            "通渭县",
            "陇西县",
            "渭源县",
            "临洮县",
            "漳县",
            "岷县"
          ]
        },
        {
          "name": "陇南市",
          "area": [
            "武都区",
            "成县",
            "文县",
            "宕昌县",
            "康县",
            "西和县",
            "礼县",
            "徽县",
            "两当县"
          ]
        },
        {
          "name": "临夏回族自治州",
          "area": [
            "临夏市",
            "临夏县",
            "康乐县",
            "永靖县",
            "广河县",
            "和政县",
            "东乡族自治县",
            "积石山保安族东乡族撒拉族自治县"
          ]
        },
        {
          "name": "甘南藏族自治州",
          "area": [
            "合作市",
            "临潭县",
            "卓尼县",
            "舟曲县",
            "迭部县",
            "玛曲县",
            "碌曲县",
            "夏河县"
          ]
        }
      ]
    },
    {
      "name": "海南省",
      "city": [
        {
          "name": "海口市",
          "area": [
            "秀英区",
            "龙华区",
            "琼山区",
            "美兰区"
          ]
        },
        {
          "name": "三亚市",
          "area": [
            "海棠区",
            "吉阳区",
            "天涯区",
            "崖州区"
          ]
        },
        {
          "name": "三沙市",
          "area": [
            "西沙群岛",
            "中沙群岛",
            "南沙群岛"
          ]
        },
        {
          "name": "儋州市",
          "area": [
            "那大镇",
            "和庆镇",
            "南丰镇",
            "大成镇",
            "雅星镇",
            "兰洋镇",
            "光村镇",
            "木棠镇",
            "海头镇",
            "峨蔓镇",
            "王五镇",
            "白马井镇",
            "中和镇",
            "排浦镇",
            "东成镇",
            "新州镇",
            "国营八一总场",
            "国营蓝洋农场",
            "国营西联农场",
            "国营西培农场"
          ]
        },
        {
          "name": "五指山市",
          "area": [
            "通什镇",
            "南圣镇",
            "毛阳镇",
            "番阳镇",
            "畅好乡",
            "毛道乡",
            "水满乡"
          ]
        },
        {
          "name": "琼海市",
          "area": [
            "嘉积镇",
            "博鳌镇",
            "万泉镇",
            "潭门镇",
            "长坡镇",
            "塔洋镇",
            "大路镇",
            "中原镇",
            "阳江镇",
            "龙江镇",
            "石壁镇",
            "会山镇"
          ]
        },
        {
          "name": "文昌市",
          "area": [
            "文城镇",
            "重兴镇",
            "蓬莱镇",
            "会文镇",
            "东路镇",
            "潭牛镇",
            "东阁镇",
            "文教镇",
            "东郊镇",
            "龙楼镇",
            "昌洒镇",
            "翁田镇",
            "抱罗镇",
            "冯坡镇",
            "锦山镇",
            "铺前镇",
            "公坡镇"
          ]
        },
        {
          "name": "万宁市",
          "area": [
            "万城镇",
            "龙滚镇",
            "和乐镇",
            "后安镇",
            "大茂镇",
            "东澳镇",
            "礼纪镇",
            "长丰镇",
            "山根镇",
            "北大镇",
            "南桥镇",
            "三更罗镇",
            "兴隆华侨农场",
            "地方国营六连林场"
          ]
        },
        {
          "name": "东方市",
          "area": [
            "八所镇",
            "东河镇",
            "大田镇",
            "感城镇",
            "板桥镇",
            "三家镇",
            "四更镇",
            "新龙镇",
            "天安乡",
            "江边乡"
          ]
        },
        {
          "name": "定安县",
          "area": [
            "定城镇",
            "新竹镇",
            "龙湖镇",
            "黄竹镇",
            "雷鸣镇",
            "龙门镇",
            "龙河镇",
            "岭口镇",
            "翰林镇",
            "富文镇"
          ]
        },
        {
          "name": "屯昌县",
          "area": [
            "屯城镇",
            "新兴镇",
            "枫木镇",
            "乌坡镇",
            "南吕镇",
            "南坤镇",
            "坡心镇",
            "西昌镇"
          ]
        },
        {
          "name": "澄迈县",
          "area": [
            "金江镇",
            "瑞溪镇",
            "永发镇",
            "老城镇",
            "加乐镇",
            "文儒镇",
            "福山镇",
            "桥头镇",
            "中兴镇",
            "仁兴镇",
            "大丰镇",
            "金安农场",
            "红光农场",
            "西达农场",
            "澄迈林场",
            "海南老城经济开发区",
            "海口综合保税区",
            "马村中心港区"
          ]
        },
        {
          "name": "临高县",
          "area": [
            "临城镇",
            "东英镇",
            "波莲镇",
            "调楼镇",
            "新盈镇",
            "南宝镇",
            "和舍镇",
            "多文镇",
            "博厚镇",
            "皇桐镇",
            "加来农场",
            "金牌港经济开发区",
            "临高角旅游度假开发区"
          ]
        },
        {
          "name": "白沙黎族自治县",
          "area": [
            "牙叉镇",
            "七坊镇",
            "邦溪镇",
            "打安镇",
            "细水乡",
            "元门乡",
            "南开乡",
            "阜龙乡",
            "青松乡",
            "金波乡",
            "荣邦乡"
          ]
        },
        {
          "name": "昌江黎族自治县",
          "area": [
            "石碌镇",
            "叉河镇",
            "十月田镇",
            "乌烈镇",
            "昌化镇",
            "海尾镇",
            "七叉镇",
            "王下乡"
          ]
        },
        {
          "name": "乐东黎族自治县",
          "area": [
            "抱由镇",
            "万冲镇",
            "大安镇",
            "志仲镇",
            "千家镇",
            "九所镇",
            "利国镇",
            "黄流镇",
            "佛罗镇",
            "尖峰镇",
            "莺歌海镇"
          ]
        },
        {
          "name": "陵水黎族自治县",
          "area": [
            "椰林镇",
            "新村镇",
            "英州镇",
            "本号镇",
            "光坡镇",
            "三才镇",
            "黎安镇",
            "隆广镇",
            "文罗镇",
            "提蒙乡",
            "群英乡"
          ]
        },
        {
          "name": "保亭黎族苗族自治县",
          "area": [
            "保城镇",
            "什玲镇",
            "加茂镇",
            "响水镇",
            "新政镇",
            "三道镇",
            "六弓乡",
            "南林乡",
            "毛感乡"
          ]
        },
        {
          "name": "琼中黎族苗族自治县",
          "area": [
            "营根镇",
            "湾岭镇",
            "黎母山镇",
            "红毛镇",
            "长征镇",
            "中平镇",
            "和平镇",
            "什运乡",
            "上安乡",
            "吊罗山乡",
            "阳江农场",
            "大丰农场",
            "新进农场",
            "乌石农场",
            "岭头农场",
            "南方农场",
            "新伟农场",
            "加钗农场",
            "长征农场",
            "乘坡农场",
            "太平农场"
          ]
        }
      ]
    },
    {
      "name": "青海省",
      "city": [
        {
          "name": "西宁市",
          "area": [
            "城东区",
            "城中区",
            "城西区",
            "城北区",
            "湟中区",
            "大通回族土族自治县",
            "湟源县"
          ]
        },
        {
          "name": "海东市",
          "area": [
            "乐都区",
            "平安区",
            "民和回族土族自治县",
            "互助土族自治县",
            "化隆回族自治县",
            "循化撒拉族自治县"
          ]
        },
        {
          "name": "海北藏族自治州",
          "area": [
            "门源回族自治县",
            "祁连县",
            "海晏县",
            "刚察县"
          ]
        },
        {
          "name": "黄南藏族自治州",
          "area": [
            "同仁市",
            "尖扎县",
            "泽库县",
            "河南蒙古族自治县"
          ]
        },
        {
          "name": "海南藏族自治州",
          "area": [
            "共和县",
            "同德县",
            "贵德县",
            "兴海县",
            "贵南县"
          ]
        },
        {
          "name": "果洛藏族自治州",
          "area": [
            "玛沁县",
            "班玛县",
            "甘德县",
            "达日县",
            "久治县",
            "玛多县"
          ]
        },
        {
          "name": "玉树藏族自治州",
          "area": [
            "玉树市",
            "杂多县",
            "称多县",
            "治多县",
            "囊谦县",
            "曲麻莱县"
          ]
        },
        {
          "name": "海西蒙古族藏族自治州",
          "area": [
            "格尔木市",
            "德令哈市",
            "茫崖市",
            "乌兰县",
            "都兰县",
            "天峻县"
          ]
        }
      ]
    },
    {
      "name": "黑龙江省",
      "city": [
        {
          "name": "哈尔滨市",
          "area": [
            "道里区",
            "南岗区",
            "道外区",
            "平房区",
            "松北区",
            "香坊区",
            "呼兰区",
            "阿城区",
            "双城区",
            "依兰县",
            "方正县",
            "宾县",
            "巴彦县",
            "木兰县",
            "通河县",
            "延寿县",
            "尚志市",
            "五常市"
          ]
        },
        {
          "name": "齐齐哈尔市",
          "area": [
            "龙沙区",
            "建华区",
            "铁锋区",
            "昂昂溪区",
            "富拉尔基区",
            "碾子山区",
            "梅里斯达斡尔族区",
            "龙江县",
            "依安县",
            "泰来县",
            "甘南县",
            "富裕县",
            "克山县",
            "克东县",
            "拜泉县",
            "讷河市"
          ]
        },
        {
          "name": "鸡西市",
          "area": [
            "鸡冠区",
            "恒山区",
            "滴道区",
            "梨树区",
            "城子河区",
            "麻山区",
            "鸡东县",
            "虎林市",
            "密山市"
          ]
        },
        {
          "name": "鹤岗市",
          "area": [
            "向阳区",
            "工农区",
            "南山区",
            "兴安区",
            "东山区",
            "兴山区",
            "萝北县",
            "绥滨县"
          ]
        },
        {
          "name": "双鸭山市",
          "area": [
            "尖山区",
            "岭东区",
            "四方台区",
            "宝山区",
            "集贤县",
            "友谊县",
            "宝清县",
            "饶河县"
          ]
        },
        {
          "name": "大庆市",
          "area": [
            "萨尔图区",
            "龙凤区",
            "让胡路区",
            "红岗区",
            "大同区",
            "肇州县",
            "肇源县",
            "林甸县",
            "杜尔伯特蒙古族自治县"
          ]
        },
        {
          "name": "伊春市",
          "area": [
            "伊美区",
            "乌翠区",
            "友好区",
            "嘉荫县",
            "汤旺县",
            "丰林县",
            "大箐山县",
            "南岔县",
            "金林区",
            "铁力市"
          ]
        },
        {
          "name": "佳木斯市",
          "area": [
            "向阳区",
            "前进区",
            "东风区",
            "郊区",
            "桦南县",
            "桦川县",
            "汤原县",
            "同江市",
            "富锦市",
            "抚远市"
          ]
        },
        {
          "name": "七台河市",
          "area": [
            "新兴区",
            "桃山区",
            "茄子河区",
            "勃利县"
          ]
        },
        {
          "name": "牡丹江市",
          "area": [
            "东安区",
            "阳明区",
            "爱民区",
            "西安区",
            "林口县",
            "绥芬河市",
            "海林市",
            "宁安市",
            "穆棱市",
            "东宁市"
          ]
        },
        {
          "name": "黑河市",
          "area": [
            "爱辉区",
            "逊克县",
            "孙吴县",
            "北安市",
            "五大连池市",
            "嫩江市"
          ]
        },
        {
          "name": "绥化市",
          "area": [
            "北林区",
            "望奎县",
            "兰西县",
            "青冈县",
            "庆安县",
            "明水县",
            "绥棱县",
            "安达市",
            "肇东市",
            "海伦市"
          ]
        },
        {
          "name": "大兴安岭地区",
          "area": [
            "漠河市",
            "呼玛县",
            "塔河县"
          ]
        }
      ]
    },
    {
      "name": "西藏自治区",
      "city": [
        {
          "name": "拉萨市",
          "area": [
            "城关区",
            "堆龙德庆区",
            "达孜区",
            "林周县",
            "当雄县",
            "尼木县",
            "曲水县",
            "墨竹工卡县"
          ]
        },
        {
          "name": "日喀则市",
          "area": [
            "桑珠孜区",
            "南木林县",
            "江孜县",
            "定日县",
            "萨迦县",
            "拉孜县",
            "昂仁县",
            "谢通门县",
            "白朗县",
            "仁布县",
            "康马县",
            "定结县",
            "仲巴县",
            "亚东县",
            "吉隆县",
            "聂拉木县",
            "萨嘎县",
            "岗巴县"
          ]
        },
        {
          "name": "昌都市",
          "area": [
            "卡若区",
            "江达县",
            "贡觉县",
            "类乌齐县",
            "丁青县",
            "察雅县",
            "八宿县",
            "左贡县",
            "芒康县",
            "洛隆县",
            "边坝县"
          ]
        },
        {
          "name": "林芝市",
          "area": [
            "巴宜区",
            "工布江达县",
            "米林县",
            "墨脱县",
            "波密县",
            "察隅县",
            "朗县"
          ]
        },
        {
          "name": "山南市",
          "area": [
            "乃东区",
            "扎囊县",
            "贡嘎县",
            "桑日县",
            "琼结县",
            "曲松县",
            "措美县",
            "洛扎县",
            "加查县",
            "隆子县",
            "错那县",
            "浪卡子县"
          ]
        },
        {
          "name": "那曲市",
          "area": [
            "色尼区",
            "嘉黎县",
            "比如县",
            "聂荣县",
            "安多县",
            "申扎县",
            "索县",
            "班戈县",
            "巴青县",
            "尼玛县",
            "双湖县"
          ]
        },
        {
          "name": "阿里地区",
          "area": [
            "普兰县",
            "札达县",
            "噶尔县",
            "日土县",
            "革吉县",
            "改则县",
            "措勤县"
          ]
        }
      ]
    },
    {
      "name": "内蒙古自治区",
      "city": [
        {
          "name": "呼和浩特市",
          "area": [
            "新城区",
            "回民区",
            "玉泉区",
            "赛罕区",
            "土默特左旗",
            "托克托县",
            "和林格尔县",
            "清水河县",
            "武川县"
          ]
        },
        {
          "name": "包头市",
          "area": [
            "东河区",
            "昆都仑区",
            "青山区",
            "石拐区",
            "白云鄂博矿区",
            "九原区",
            "土默特右旗",
            "固阳县",
            "达尔罕茂明安联合旗"
          ]
        },
        {
          "name": "乌海市",
          "area": [
            "海勃湾区",
            "海南区",
            "乌达区"
          ]
        },
        {
          "name": "赤峰市",
          "area": [
            "红山区",
            "元宝山区",
            "松山区",
            "阿鲁科尔沁旗",
            "巴林左旗",
            "巴林右旗",
            "林西县",
            "克什克腾旗",
            "翁牛特旗",
            "喀喇沁旗",
            "宁城县",
            "敖汉旗",
            "新城区"
          ]
        },
        {
          "name": "通辽市",
          "area": [
            "科尔沁区",
            "科尔沁左翼中旗",
            "科尔沁左翼后旗",
            "开鲁县",
            "库伦旗",
            "奈曼旗",
            "扎鲁特旗",
            "霍林郭勒市"
          ]
        },
        {
          "name": "鄂尔多斯市",
          "area": [
            "东胜区",
            "康巴什区",
            "达拉特旗",
            "准格尔旗",
            "鄂托克前旗",
            "鄂托克旗",
            "杭锦旗",
            "乌审旗",
            "伊金霍洛旗"
          ]
        },
        {
          "name": "呼伦贝尔市",
          "area": [
            "海拉尔区",
            "扎赉诺尔区",
            "阿荣旗",
            "莫力达瓦达斡尔族自治旗",
            "鄂伦春自治旗",
            "鄂温克族自治旗",
            "陈巴尔虎旗",
            "新巴尔虎左旗",
            "新巴尔虎右旗",
            "满洲里市",
            "牙克石市",
            "扎兰屯市",
            "额尔古纳市",
            "根河市"
          ]
        },
        {
          "name": "巴彦淖尔市",
          "area": [
            "临河区",
            "五原县",
            "磴口县",
            "乌拉特前旗",
            "乌拉特中旗",
            "乌拉特后旗",
            "杭锦后旗"
          ]
        },
        {
          "name": "乌兰察布市",
          "area": [
            "集宁区",
            "卓资县",
            "化德县",
            "商都县",
            "兴和县",
            "凉城县",
            "察哈尔右翼前旗",
            "察哈尔右翼中旗",
            "察哈尔右翼后旗",
            "四子王旗",
            "丰镇市"
          ]
        },
        {
          "name": "兴安盟",
          "area": [
            "乌兰浩特市",
            "阿尔山市",
            "科尔沁右翼前旗",
            "科尔沁右翼中旗",
            "扎赉特旗",
            "突泉县"
          ]
        },
        {
          "name": "锡林郭勒盟",
          "area": [
            "二连浩特市",
            "锡林浩特市",
            "阿巴嘎旗",
            "苏尼特左旗",
            "苏尼特右旗",
            "东乌珠穆沁旗",
            "西乌珠穆沁旗",
            "太仆寺旗",
            "镶黄旗",
            "正镶白旗",
            "正蓝旗",
            "多伦县"
          ]
        },
        {
          "name": "阿拉善盟",
          "area": [
            "阿拉善左旗",
            "阿拉善右旗",
            "额济纳旗"
          ]
        }
      ]
    },
    {
      "name": "广西壮族自治区",
      "city": [
        {
          "name": "南宁市",
          "area": [
            "兴宁区",
            "青秀区",
            "江南区",
            "西乡塘区",
            "良庆区",
            "邕宁区",
            "武鸣区",
            "隆安县",
            "马山县",
            "上林县",
            "宾阳县",
            "横县"
          ]
        },
        {
          "name": "柳州市",
          "area": [
            "城中区",
            "鱼峰区",
            "柳南区",
            "柳北区",
            "柳江区",
            "柳城县",
            "鹿寨县",
            "融安县",
            "融水苗族自治县",
            "三江侗族自治县"
          ]
        },
        {
          "name": "桂林市",
          "area": [
            "秀峰区",
            "叠彩区",
            "象山区",
            "七星区",
            "雁山区",
            "临桂区",
            "阳朔县",
            "灵川县",
            "全州县",
            "兴安县",
            "永福县",
            "灌阳县",
            "龙胜各族自治县",
            "资源县",
            "平乐县",
            "荔浦市",
            "恭城瑶族自治县"
          ]
        },
        {
          "name": "梧州市",
          "area": [
            "万秀区",
            "长洲区",
            "龙圩区",
            "苍梧县",
            "藤县",
            "蒙山县",
            "岑溪市"
          ]
        },
        {
          "name": "北海市",
          "area": [
            "海城区",
            "银海区",
            "铁山港区",
            "合浦县"
          ]
        },
        {
          "name": "防城港市",
          "area": [
            "港口区",
            "防城区",
            "上思县",
            "东兴市"
          ]
        },
        {
          "name": "钦州市",
          "area": [
            "钦南区",
            "钦北区",
            "灵山县",
            "浦北县"
          ]
        },
        {
          "name": "贵港市",
          "area": [
            "港北区",
            "港南区",
            "覃塘区",
            "平南县",
            "桂平市"
          ]
        },
        {
          "name": "玉林市",
          "area": [
            "玉州区",
            "福绵区",
            "容县",
            "陆川县",
            "博白县",
            "兴业县",
            "北流市"
          ]
        },
        {
          "name": "百色市",
          "area": [
            "右江区",
            "田阳区",
            "田东县",
            "德保县",
            "那坡县",
            "凌云县",
            "乐业县",
            "田林县",
            "西林县",
            "隆林各族自治县",
            "靖西市",
            "平果市"
          ]
        },
        {
          "name": "贺州市",
          "area": [
            "八步区",
            "平桂区",
            "昭平县",
            "钟山县",
            "富川瑶族自治县"
          ]
        },
        {
          "name": "河池市",
          "area": [
            "金城江区",
            "宜州区",
            "南丹县",
            "天峨县",
            "凤山县",
            "东兰县",
            "罗城仫佬族自治县",
            "环江毛南族自治县",
            "巴马瑶族自治县",
            "都安瑶族自治县",
            "大化瑶族自治县"
          ]
        },
        {
          "name": "来宾市",
          "area": [
            "兴宾区",
            "忻城县",
            "象州县",
            "武宣县",
            "金秀瑶族自治县",
            "合山市"
          ]
        },
        {
          "name": "崇左市",
          "area": [
            "江州区",
            "扶绥县",
            "宁明县",
            "龙州县",
            "大新县",
            "天等县",
            "凭祥市"
          ]
        }
      ]
    },
    {
      "name": "宁夏回族自治区",
      "city": [
        {
          "name": "银川市",
          "area": [
            "兴庆区",
            "西夏区",
            "金凤区",
            "永宁县",
            "贺兰县",
            "灵武市"
          ]
        },
        {
          "name": "石嘴山市",
          "area": [
            "大武口区",
            "惠农区",
            "平罗县"
          ]
        },
        {
          "name": "吴忠市",
          "area": [
            "利通区",
            "红寺堡区",
            "盐池县",
            "同心县",
            "青铜峡市"
          ]
        },
        {
          "name": "固原市",
          "area": [
            "原州区",
            "西吉县",
            "隆德县",
            "泾源县",
            "彭阳县"
          ]
        },
        {
          "name": "中卫市",
          "area": [
            "沙坡头区",
            "中宁县",
            "海原县"
          ]
        }
      ]
    },
    {
      "name": "新疆维吾尔自治区",
      "city": [
        {
          "name": "乌鲁木齐市",
          "area": [
            "天山区",
            "沙依巴克区",
            "新市区",
            "水磨沟区",
            "头屯河区",
            "达坂城区",
            "米东区",
            "乌鲁木齐县"
          ]
        },
        {
          "name": "克拉玛依市",
          "area": [
            "独山子区",
            "克拉玛依区",
            "白碱滩区",
            "乌尔禾区"
          ]
        },
        {
          "name": "吐鲁番市",
          "area": [
            "高昌区",
            "鄯善县",
            "托克逊县"
          ]
        },
        {
          "name": "哈密市",
          "area": [
            "伊州区",
            "巴里坤哈萨克自治县",
            "伊吾县"
          ]
        },
        {
          "name": "昌吉回族自治州",
          "area": [
            "昌吉市",
            "阜康市",
            "呼图壁县",
            "玛纳斯县",
            "奇台县",
            "吉木萨尔县",
            "木垒哈萨克自治县"
          ]
        },
        {
          "name": "博尔塔拉蒙古自治州",
          "area": [
            "博乐市",
            "阿拉山口市",
            "精河县",
            "温泉县"
          ]
        },
        {
          "name": "巴音郭楞蒙古自治州",
          "area": [
            "库尔勒市",
            "轮台县",
            "尉犁县",
            "若羌县",
            "且末县",
            "焉耆回族自治县",
            "和静县",
            "和硕县",
            "博湖县"
          ]
        },
        {
          "name": "阿克苏地区",
          "area": [
            "阿克苏市",
            "库车市",
            "温宿县",
            "沙雅县",
            "新和县",
            "拜城县",
            "乌什县",
            "阿瓦提县",
            "柯坪县"
          ]
        },
        {
          "name": "克孜勒苏柯尔克孜自治州",
          "area": [
            "阿图什市",
            "阿克陶县",
            "阿合奇县",
            "乌恰县"
          ]
        },
        {
          "name": "喀什地区",
          "area": [
            "喀什市",
            "疏附县",
            "疏勒县",
            "英吉沙县",
            "泽普县",
            "莎车县",
            "叶城县",
            "麦盖提县",
            "岳普湖县",
            "伽师县",
            "巴楚县",
            "塔什库尔干塔吉克自治县"
          ]
        },
        {
          "name": "和田地区",
          "area": [
            "和田市",
            "和田县",
            "墨玉县",
            "皮山县",
            "洛浦县",
            "策勒县",
            "于田县",
            "民丰县"
          ]
        },
        {
          "name": "伊犁哈萨克自治州",
          "area": [
            "伊宁市",
            "奎屯市",
            "霍尔果斯市",
            "伊宁县",
            "察布查尔锡伯自治县",
            "霍城县",
            "巩留县",
            "新源县",
            "昭苏县",
            "特克斯县",
            "尼勒克县"
          ]
        },
        {
          "name": "塔城地区",
          "area": [
            "塔城市",
            "乌苏市",
            "额敏县",
            "沙湾县",
            "托里县",
            "裕民县",
            "和布克赛尔蒙古自治县"
          ]
        },
        {
          "name": "阿勒泰地区",
          "area": [
            "阿勒泰市",
            "布尔津县",
            "富蕴县",
            "福海县",
            "哈巴河县",
            "青河县",
            "吉木乃县"
          ]
        },
        {
          "name": "石河子市",
          "area": [
            "新城街道",
            "向阳街道",
            "红山街道",
            "老街街道",
            "东城街道",
            "北泉镇",
            "石河子镇"
          ]
        },
        {
          "name": "阿拉尔市",
          "area": [
            "幸福路街道",
            "金银川路街道",
            "青松路街道",
            "南口街道",
            "托喀依乡",
            "一团金银川镇",
            "二团新井子镇",
            "三团甘泉镇",
            "四团永宁镇",
            "五团沙河镇",
            "六团双城镇",
            "七团玛滩镇",
            "八团塔门镇",
            "九团梨花镇",
            "十团昌安镇",
            "十一团花桥镇",
            "十二团塔南镇",
            "十三团幸福镇",
            "十四团金杨镇",
            "十五团",
            "十六团新开岭镇"
          ]
        },
        {
          "name": "图木舒克市",
          "area": [
            "锦绣街道",
            "前海街道",
            "永安坝街道",
            "四十一团草湖镇",
            "四十二团龙口镇",
            "四十四团永安镇",
            "四十五团前海镇",
            "四十六团永兴镇",
            "四十八团河东镇",
            "四十九团海安镇",
            "五十团夏河镇",
            "五十一团唐驿镇",
            "五十三团金胡杨镇",
            "五十四团兴安镇",
            "伽师总场嘉和镇"
          ]
        },
        {
          "name": "五家渠市",
          "area": [
            "军垦路街道",
            "青湖路街道",
            "人民路街道",
            "一零二团梧桐镇",
            "一零三团蔡家湖镇"
          ]
        },
        {
          "name": "北屯市",
          "area": [
            "天骄街道",
            "龙疆街道",
            "军垦街道",
            "北屯镇",
            "一八三团双渠镇",
            "一八七团丰庆镇",
            "一八八团海川镇"
          ]
        },
        {
          "name": "铁门关市",
          "area": [
            "迎宾街道",
            "二十二团河畔镇",
            "二十四团高桥镇",
            "二十七团天湖镇",
            "二十八团博古其镇",
            "三十团双丰镇",
            "三十六团米兰镇",
            "三十七团金山镇",
            "三十八团南屯镇",
            "二二三团开泽镇"
          ]
        },
        {
          "name": "双河市",
          "area": [
            "八十一团双桥镇",
            "八十四团石峪镇",
            "八十五团",
            "八十六团博河镇",
            "八十九团",
            "九十团双乐镇"
          ]
        },
        {
          "name": "可克达拉市",
          "area": [
            "六十三团榆树庄镇",
            "六十四团苇湖镇",
            "六十六团",
            "六十七团",
            "六十八团长丰镇"
          ]
        },
        {
          "name": "昆玉市",
          "area": [
            "四十七团老兵镇",
            "皮山农场昆泉镇",
            "一牧场昆牧镇",
            "二二四团",
            "二二五团玉泉镇"
          ]
        },
        {
          "name": "胡杨河市",
          "area": [
            "一二三团",
            "一二四团",
            "一二五团",
            "一二六团",
            "一二七团",
            "一二八团",
            "一二九团",
            "一三零团",
            "一三一团",
            "一三七团"
          ]
        }
      ]
    },
    {
      "name": "香港特别行政区",
      "city": [
        {
          "name": "香港特别行政区",
          "area": [
            "中西区",
            "湾仔区",
            "东区",
            "南区",
            "油尖旺区",
            "深水埗区",
            "九龙城区",
            "黄大仙区",
            "观塘区",
            "北区",
            "大埔区",
            "沙田区",
            "西贡区",
            "荃湾区",
            "屯门区",
            "元朗区",
            "葵青区",
            "离岛区"
          ]
        }
      ]
    },
    {
      "name": "澳门特别行政区",
      "city": [
        {
          "name": "澳门特别行政区",
          "area": [
            "花地玛堂区",
            "圣安多尼堂区",
            "大堂区",
            "望德堂区",
            "风顺堂区",
            "嘉模堂区",
            "圣方济各堂区",
            "路氹城"
          ]
        }
      ]
    },
    {
      "name": "台湾省",
      "city": [
        {
          "name": "台北市",
          "area": [
            "中正区",
            "大同区",
            "中山区",
            "万华区",
            "信义区",
            "松山区",
            "大安区",
            "南港区",
            "北投区",
            "内湖区",
            "士林区",
            "文山区"
          ]
        },
        {
          "name": "新北市",
          "area": [
            "板桥区",
            "土城区",
            "新庄区",
            "新店区",
            "深坑区",
            "石碇区",
            "坪林区",
            "乌来区",
            "五股区",
            "八里区",
            "林口区",
            "淡水区",
            "中和区",
            "永和区",
            "三重区",
            "芦洲区",
            "泰山区",
            "树林区",
            "莺歌区",
            "三峡区",
            "汐止区",
            "金山区",
            "万里区",
            "三芝区",
            "石门区",
            "瑞芳区",
            "贡寮区",
            "双溪区",
            "平溪区"
          ]
        },
        {
          "name": "桃园市",
          "area": [
            "桃园区",
            "中坜区",
            "平镇区",
            "八德区",
            "杨梅区",
            "芦竹区",
            "大溪区",
            "龙潭区",
            "龟山区",
            "大园区",
            "观音区",
            "新屋区",
            "复兴区"
          ]
        },
        {
          "name": "台中市",
          "area": [
            "中区",
            "东区",
            "西区",
            "南区",
            "北区",
            "西屯区",
            "南屯区",
            "北屯区",
            "丰原区",
            "大里区",
            "太平区",
            "东势区",
            "大甲区",
            "清水区",
            "沙鹿区",
            "梧栖区",
            "后里区",
            "神冈区",
            "潭子区",
            "大雅区",
            "新社区",
            "石冈区",
            "外埔区",
            "大安区",
            "乌日区",
            "大肚区",
            "龙井区",
            "雾峰区",
            "和平区"
          ]
        },
        {
          "name": "台南市",
          "area": [
            "中西区",
            "东区",
            "南区",
            "北区",
            "安平区",
            "安南区",
            "永康区",
            "归仁区",
            "新化区",
            "左镇区",
            "玉井区",
            "楠西区",
            "南化区",
            "仁德区",
            "关庙区",
            "龙崎区",
            "官田区",
            "麻豆区",
            "佳里区",
            "西港区",
            "七股区",
            "将军区",
            "学甲区",
            "北门区",
            "新营区",
            "后壁区",
            "白河区",
            "东山区",
            "六甲区",
            "下营区",
            "柳营区",
            "盐水区",
            "善化区",
            "大内区",
            "山上区",
            "新市区",
            "安定区"
          ]
        },
        {
          "name": "高雄市",
          "area": [
            "楠梓区",
            "左营区",
            "鼓山区",
            "三民区",
            "盐埕区",
            "前金区",
            "新兴区苓雅区",
            "前镇区",
            "旗津区",
            "小港区",
            "凤山区",
            "大寮区",
            "鸟松区",
            "林园区",
            "仁武区",
            "大树区",
            "大社区",
            "冈山区",
            "路竹区",
            "桥头区",
            "梓官区",
            "弥陀区",
            "永安区",
            "燕巢区",
            "阿莲区",
            "茄萣区",
            "湖内区",
            "旗山区",
            "美浓区",
            "内门区",
            "杉林区",
            "甲仙区",
            "六龟区",
            "茂林区",
            "桃源区",
            "那玛夏区"
          ]
        }
      ]
    },
    {
      "name": "海外",
      "city": [
        {
          "name": "海外",
          "area": [
            "海外"
          ]
        }
      ]
    }
  ];
  function getProvinces() {
    let provinces = [];
    for (let i2 = 0; i2 < AreaJson.length; i2++) {
      provinces.push(AreaJson[i2].name);
    }
    return provinces;
  }
  function getMyCity(provinceIndex) {
    let citys = [];
    for (let i2 = 0; i2 < AreaJson[provinceIndex].city.length; i2++) {
      citys.push(AreaJson[provinceIndex].city[i2].name);
    }
    return citys;
  }
  function getAreas(provinceIndex, cityIndex) {
    let areas = [];
    areas = AreaJson[provinceIndex].city[cityIndex].area;
    return areas;
  }
  const _sfc_main$z = {
    __name: "SelectCity",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    emits: ["hideShow", "changeClick"],
    setup(__props, { emit }) {
      const addressIndex = vue.ref([0, 0, 0]);
      const provinces = vue.ref(getProvinces());
      const selectProvinces = vue.ref(0);
      const citys = vue.ref(getMyCity(addressIndex.value[0]));
      const areas = vue.ref(getAreas(addressIndex.value[0], addressIndex.value[1]));
      const handleNYZAreaSelect = () => {
        let data1 = provinces.value[addressIndex.value[0]];
        let data2 = citys.value[addressIndex.value[1]];
        let data3 = areas.value[addressIndex.value[2]];
        emit("changeClick", data1, data2, data3);
        addressIndex.value = [0, 0, 0];
        provinces.value = getProvinces();
        citys.value = getMyCity(addressIndex.value[0]);
        areas.value = getAreas(addressIndex.value[0], addressIndex.value[1]);
        emit("hideShow");
      };
      const handleNYZAreaChange = (event) => {
        if (event.detail.value[0] !== selectProvinces.value) {
          addressIndex.value = [event.detail.value[0], 0, 0];
          citys.value = getMyCity(addressIndex.value[0]);
          areas.value = getAreas(addressIndex.value[0], addressIndex.value[1]);
          selectProvinces.value = event.detail.value[0];
        } else {
          addressIndex.value = event.detail.value;
          citys.value = getMyCity(addressIndex.value[0]);
          areas.value = getAreas(addressIndex.value[0], addressIndex.value[1]);
        }
      };
      const handleNYZAreaCancle = () => {
        addressIndex.value = [0, 0, 0];
        provinces.value = getProvinces();
        citys.value = getMyCity(addressIndex.value[0]);
        areas.value = getAreas(addressIndex.value[0], addressIndex.value[1]);
        emit("hideShow");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createCommentVNode("自定义地址选择器"),
          vue.withDirectives(vue.createElementVNode(
            "view",
            { class: "cc_area_mask" },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, __props.show]
          ]),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass("cc_area_view " + (__props.show ? "show" : "hide"))
            },
            [
              vue.createElementVNode("view", { class: "cc_area_view_btns" }, [
                vue.createElementVNode("text", {
                  class: "cc_area_view_btn_cancle",
                  onClick: handleNYZAreaCancle
                }, "取消"),
                vue.createElementVNode("text", {
                  class: "cc_area_view_btn_sure",
                  onClick: handleNYZAreaSelect,
                  "data-province": _ctx.province,
                  "data-city": _ctx.city,
                  "data-area": _ctx.area
                }, "确定", 8, ["data-province", "data-city", "data-area"])
              ]),
              vue.createElementVNode("picker-view", {
                class: "cc_area_pick_view",
                "indicator-style": "height: 35px;",
                onChange: handleNYZAreaChange,
                value: addressIndex.value
              }, [
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(provinces.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: index,
                          class: "cc_area_colum_view"
                        },
                        vue.toDisplayString(item),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(citys.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: index,
                          class: "cc_area_colum_view"
                        },
                        vue.toDisplayString(item),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(areas.value, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: index,
                          class: "cc_area_colum_view"
                        },
                        vue.toDisplayString(item),
                        1
                        /* TEXT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ], 40, ["value"])
            ],
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const SelectCit = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-79233ee6"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/SelectCity.vue"]]);
  const rules$1 = {
    address_name: {
      rules: [{
        required: true,
        errorMessage: "请输入收货人姓名"
      }]
    },
    address_phone: {
      rules: [
        {
          required: true,
          errorMessage: "请输入电话号码"
        },
        {
          pattern: /^1[3-9]\d{9}$/,
          errorMessage: "请输入11位数字的电话号码"
        }
      ]
    },
    address_area: {
      rules: [
        {
          required: true,
          errorMessage: "请选择所在地区"
        },
        {
          pattern: /^[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+$/,
          errorMessage: "请输入正确的省市区"
        }
      ]
    },
    address_details: {
      rules: [
        {
          required: true,
          errorMessage: "请输入详细地址"
        }
      ]
    }
  };
  const _sfc_main$y = {
    __name: "EditAddress",
    setup(__props) {
      const store = useUserStore();
      const formData = vue.ref({
        address_name: "",
        address_phone: "",
        address_area: "请选择省市区",
        address_details: "",
        address_default: 0,
        user_id: store.user.user_id
      });
      const form = vue.ref();
      const selectArea = vue.ref();
      const show = vue.ref(false);
      vue.ref(true);
      const saveAddress = async () => {
        try {
          await form.value.validate();
          const result = await updateAddressApi(formData.value);
          if (result.code === 200) {
            uni.showToast({
              title: "修改成功"
            });
            uni.$emit("renderAddress");
            uni.navigateBack({
              delta: 1,
              animationType: "slide-out-left",
              animationDuration: 1e3
            });
          } else {
            uni.showToast({
              title: result.message
            });
          }
        } catch (e2) {
          formatAppLog("log", "at pages/my/EditAddress.vue:136", e2);
        }
      };
      const openPicker = () => {
        formatAppLog("log", "at pages/my/EditAddress.vue:141", "执行打开地址选择器");
        show.value = true;
      };
      const changeClick = (value, value2, value3) => {
        formData.value.address_area = value + "-" + value2 + "-" + value3;
      };
      const onhideShow = () => {
        show.value = false;
        formatAppLog("log", "at pages/my/EditAddress.vue:149", "执行了关闭地址选择器");
      };
      const switchChange = (e2) => {
        if (e2.detail.value) {
          formData.value.address_default = 1;
        } else {
          formData.value.address_default = 0;
        }
      };
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          formData.value = obj;
        }
      });
      onReady(() => {
        form.value.setRules(rules$1);
      });
      return (_ctx, _cache) => {
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$4);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "editaddress" }, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createVNode(_component_uni_forms, {
                modelValue: formData.value,
                ref_key: "form",
                ref: form
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_forms_item, { name: "address_name" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "row" }, [
                        vue.createElementVNode("view", { class: "nominal" }, "收货人"),
                        vue.createElementVNode("view", { class: "input" }, [
                          vue.withDirectives(vue.createElementVNode(
                            "input",
                            {
                              placeholder: "请输入收货人姓名",
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.address_name = $event),
                              type: "text"
                            },
                            null,
                            512
                            /* NEED_PATCH */
                          ), [
                            [vue.vModelText, formData.value.address_name]
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { name: "address_phone" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "row" }, [
                        vue.createElementVNode("view", { class: "nominal" }, "电话号码"),
                        vue.createElementVNode("view", { class: "input" }, [
                          vue.withDirectives(vue.createElementVNode(
                            "input",
                            {
                              placeholder: "请输入收货人电话号码",
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.address_phone = $event),
                              type: "number",
                              maxlength: "11"
                            },
                            null,
                            512
                            /* NEED_PATCH */
                          ), [
                            [vue.vModelText, formData.value.address_phone]
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { name: "address_area" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "row" }, [
                        vue.createElementVNode("view", { class: "nominal" }, "所在地区"),
                        vue.createElementVNode("view", {
                          class: "input selectcity",
                          onClick: openPicker
                        }, [
                          vue.createElementVNode(
                            "view",
                            { style: { "color": "#808080" } },
                            vue.toDisplayString(formData.value.address_area),
                            1
                            /* TEXT */
                          ),
                          vue.withDirectives(vue.createElementVNode(
                            "input",
                            {
                              placeholder: "请选择省市区",
                              readonly: "",
                              type: "text",
                              disabled: "",
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.address_area = $event),
                              ref_key: "selectArea",
                              ref: selectArea,
                              style: { "display": "none" }
                            },
                            null,
                            512
                            /* NEED_PATCH */
                          ), [
                            [vue.vModelText, formData.value.address_area]
                          ]),
                          vue.createCommentVNode(' <image src="/static/right.png" class="rights"></image> ')
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { name: "address_details" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "row" }, [
                        vue.createElementVNode("view", { class: "nominal" }, "详细地址"),
                        vue.createElementVNode("view", { class: "input" }, [
                          show.value == false ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                            "textarea",
                            {
                              key: 0,
                              style: { "font-size": "28rpx" },
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.address_details = $event),
                              "auto-height": "true",
                              placeholder: "输入详细地址"
                            },
                            null,
                            512
                            /* NEED_PATCH */
                          )), [
                            [vue.vModelText, formData.value.address_details]
                          ]) : vue.createCommentVNode("v-if", true)
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { name: "address_default" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "row" }, [
                        vue.createElementVNode("view", {
                          class: "nominal",
                          style: { "color": "#2979ff", "margin-top": "10rpx" }
                        }, "设为默认地址"),
                        vue.createElementVNode("view", { class: "input switch" }, [
                          vue.createElementVNode("switch", {
                            color: _ctx.colors,
                            style: { "transform": "scale(0.8)" },
                            onChange: switchChange,
                            checked: formData.value.address_default == 1
                          }, null, 40, ["color", "checked"])
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "save" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "btn",
                  style: vue.normalizeStyle("background:" + _ctx.colors),
                  onClick: saveAddress
                },
                "保存地址",
                4
                /* STYLE */
              )
            ]),
            vue.createCommentVNode(" 省市区选择 province city area初始省市区设置 show:是否显示  @sureSelectArea：确认事件 @hideShow：隐藏事件"),
            vue.createVNode(SelectCit, {
              show: show.value,
              onChangeClick: changeClick,
              onSureSelectArea: _ctx.onsetCity,
              onHideShow: onhideShow
            }, null, 8, ["show", "onSureSelectArea"])
          ])
        ]);
      };
    }
  };
  const PagesMyEditAddress = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-039ae533"], ["__file", "D:/graduationProject/pet-front-end/pages/my/EditAddress.vue"]]);
  const _sfc_main$x = {
    __name: "EditPerson",
    setup(__props) {
      const store = useUserStore();
      const bindDateChange = (e2) => {
        store.updateDate(e2.detail.value);
      };
      const avatarChoose = async () => {
        const res = await uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"]
        });
        if (res) {
          let token = null;
          token = uni.getStorageSync("token");
          const {
            data
          } = await uni.uploadFile({
            url: "http://192.168.6.3:9000/user/upload",
            filePath: res.tempFilePaths[0],
            name: "avatar",
            fileType: "image",
            header: {
              "Authorization": token
            }
          });
          const result = JSON.parse(data);
          store.updateAvatar(result.data.user_avatar);
          uni.showToast({
            title: "上传图像成功"
          });
        }
      };
      const saveInfo = () => {
        const namePattern = /^[\u0041-\u005A\u0061-\u007A\u4E00-\u9FFF0-9_]{4,16}$/;
        const birthdayPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (store.user.user_name === "" || !store.user.user_name) {
          uni.showToast({
            title: "请填写昵称",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        if (!namePattern.test(store.user.user_name)) {
          uni.showToast({
            title: "请填写昵称的正确格式,由4到16位(字母，数字，下划线，中文)",
            icon: "none",
            duration: 4e3
          });
          return;
        }
        if (store.user.user_birthday === "" || !store.user.user_birthday) {
          uni.showToast({
            title: "请选择日期",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        if (!birthdayPattern.test(store.user.user_birthday)) {
          uni.showToast({
            title: "请选择正确的时间",
            icon: "none",
            duration: 4e3
          });
          return;
        }
        let today = /* @__PURE__ */ new Date();
        let date = new Date(store.user.user_birthday);
        if (date > today) {
          uni.showToast({
            title: "您选择的生日是未来",
            icon: "none",
            duration: 4e3
          });
          return;
        }
        if (store.saveInfo()) {
          uni.showToast({
            title: "修改用户成功"
          });
          uni.switchTab({
            url: "/pages/my/index"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "ui-all" }, [
            vue.createElementVNode("view", {
              class: "avatar",
              onClick: avatarChoose
            }, [
              vue.createElementVNode("view", { class: "imgAvatar" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: "iavatar",
                    style: vue.normalizeStyle("background: url(" + vue.unref(store).avatar + ") no-repeat center/cover #eeeeee;")
                  },
                  null,
                  4
                  /* STYLE */
                )
              ]),
              vue.createElementVNode("text", null, "修改头像")
            ]),
            vue.createElementVNode("view", { class: "ui-list" }, [
              vue.createElementVNode("text", null, "昵称"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "text",
                  placeholder: "请填写用户名4到16位(字母，数字，下划线)",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(store).user.user_name = $event),
                  "placeholder-class": "place"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(store).user.user_name]
              ])
            ]),
            vue.createElementVNode("view", { class: "ui-list right" }, [
              vue.createElementVNode("text", null, "生日"),
              vue.createElementVNode("picker", {
                mode: "date",
                value: vue.unref(store).user.user_birthday,
                onChange: bindDateChange
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "picker" },
                  vue.toDisplayString(vue.unref(store).user.user_birthday),
                  1
                  /* TEXT */
                )
              ], 40, ["value"])
            ]),
            vue.createElementVNode("view", { class: "ui-list" }, [
              vue.createElementVNode("text", null, "签名"),
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  placeholder: "请填写",
                  "placeholder-class": "place",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(store).user.user_signature = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, vue.unref(store).user.user_signature]
              ])
            ]),
            vue.createElementVNode("button", {
              class: "save",
              onClick: saveInfo
            }, "保 存 修 改")
          ])
        ]);
      };
    }
  };
  const PagesMyEditPerson = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "D:/graduationProject/pet-front-end/pages/my/EditPerson.vue"]]);
  const _sfc_main$w = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e2) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e2) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e2) {
      },
      mousemove(e2) {
      },
      mouseleave(e2) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        const _this = this;
        this._getSize(function() {
          const size = Number(_this.size);
          if (isNaN(size)) {
            return new Error("size 属性只能设置为数字");
          }
          const rateMoveRange = clientX - _this._rateBoxLeft;
          let index = parseInt(rateMoveRange / (size + _this.marginNumber));
          index = index < 0 ? 0 : index;
          index = index > _this.max ? _this.max : index;
          const range = parseInt(rateMoveRange - (size + _this.marginNumber) * index);
          let value = 0;
          if (_this._oldValue === index && !_this.PC)
            return;
          _this._oldValue = index;
          if (_this.allowHalf) {
            if (range > size / 2) {
              value = index + 1;
            } else {
              value = index + 0.5;
            }
          } else {
            value = index + 1;
          }
          value = Math.max(0.5, Math.min(value, _this.max));
          _this.valueSync = value;
          _this._onChange();
        });
      },
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
            fn && fn();
          }
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$g], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const _sfc_main$v = {
    __name: "Evaluate",
    props: {
      service_comments: {
        type: Array,
        value: []
      }
    },
    setup(__props) {
      const defaultAvatar = vue.ref(`${devUrl}/uploads/default.png`);
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "commentcomponent" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.service_comments, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item.service_comment_id,
                class: "commentitem"
              }, [
                vue.createElementVNode("view", { class: "comment_top" }, [
                  vue.createElementVNode("image", {
                    class: "headpic",
                    src: item.service_comment_avatar ? `${vue.unref(devUrl)}/uploads/${item.service_comment_avatar}` : defaultAvatar.value
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "content" }, [
                    vue.createElementVNode("view", { class: "content_top" }, [
                      vue.createElementVNode("view", { class: "" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "cm_name" },
                          vue.toDisplayString(item.service_comment_name ? item.service_comment_name : "匿名用户"),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
                      vue.createElementVNode("view", { class: "cm_rate" }, [
                        vue.createVNode(_component_uni_rate, {
                          value: item.service_comment_star,
                          readonly: ""
                        }, null, 8, ["value"])
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "cm_time" },
                        vue.toDisplayString(item.service_comment_date),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "contents" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "cm_info_comment" },
                    vue.toDisplayString(item.service_comment_content),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const Evaluate = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-32f129a4"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/Evaluate.vue"]]);
  const _sfc_main$u = {
    __name: "DetailService",
    setup(__props) {
      const serviceDetail = vue.ref({});
      const options = vue.ref([{ icon: "headphones", text: "客服" }]);
      const buttonGroup = vue.ref([
        {
          text: "立即上门",
          backgroundColor: "#ffbd23",
          color: "#fff"
        },
        {
          text: "预约上门",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]);
      const getServiceDetailData = async (service_id) => {
        const result = await getServiceDetailAPI(service_id);
        if (result.code === 2e3) {
          serviceDetail.value = result.data;
          formatAppLog("log", "at pages/home/DetailService.vue:111", serviceDetail.value);
        }
      };
      const showEvaluate = vue.ref(true);
      const buttonClick = ({ index, content }) => {
        formatAppLog("log", "at pages/home/DetailService.vue:120", index, content);
        const url = reqParams("/pages/home/OrderService", {
          isReserve: index === 1
        });
        uni.navigateTo({ url });
      };
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          getServiceDetailData(obj.service_id);
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("swiper", {
                class: "swiper",
                circular: "",
                "indicator-dots": true,
                autoplay: true,
                interval: 2e3,
                duration: 500
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(serviceDetail.value.service_images, (image) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      [
                        image.service_image_type === 1 ? (vue.openBlock(), vue.createElementBlock("swiper-item", { key: 0 }, [
                          vue.createElementVNode("img", {
                            src: vue.unref(devUrl) + "/service_uploads/" + image.service_image_name,
                            alt: "",
                            model: "scaleToFill",
                            class: "swiper-image"
                          }, null, 8, ["src"])
                        ])) : vue.createCommentVNode("v-if", true)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 商品 "),
            vue.createElementVNode("view", { class: "goods" }, [
              vue.createCommentVNode(" 商品简介 "),
              vue.createElementVNode("view", { class: "meta" }, [
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "name ellipsis" },
                    vue.toDisplayString(serviceDetail.value.service_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "number" }, [
                    vue.createElementVNode("text", { class: "symbol" }, "¥"),
                    vue.createTextVNode(
                      vue.toDisplayString(serviceDetail.value.service_price),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "desc" },
                  vue.toDisplayString(serviceDetail.value.service_detail_describe),
                  1
                  /* TEXT */
                )
              ]),
              vue.createCommentVNode(" 操作面板 "),
              vue.createElementVNode("view", { class: "action" }, [
                vue.createElementVNode("view", { class: "item arrow" }, [
                  vue.createElementVNode("text", { class: "label" }, "服务"),
                  vue.createElementVNode("text", { class: "text ellipsis" }, " 无忧退 快速退款 免费包邮 ")
                ])
              ])
            ]),
            vue.createCommentVNode(" 选项卡，详情服务，评论 "),
            vue.createElementVNode("view", { style: { "margin-top": "20px" } }, [
              vue.createElementVNode("view", { class: "detail-info" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["left", { active: !showEvaluate.value }]),
                    onClick: _cache[0] || (_cache[0] = ($event) => showEvaluate.value = false)
                  },
                  " 服务介绍 ",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["right", { active: showEvaluate.value }]),
                    onClick: _cache[1] || (_cache[1] = ($event) => showEvaluate.value = true)
                  },
                  " 服务评价 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            showEvaluate.value ? (vue.openBlock(), vue.createBlock(Evaluate, {
              key: 0,
              service_comments: serviceDetail.value.service_comments
            }, null, 8, ["service_comments"])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(serviceDetail.value.service_images, (image) => {
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    [
                      image.service_image_type === 2 ? (vue.openBlock(), vue.createElementBlock("img", {
                        key: 0,
                        src: vue.unref(devUrl) + "/service_uploads/" + image.service_image_name,
                        alt: "",
                        model: "scaleToFill",
                        style: { "width": "750rpx", "height": "750rpx" }
                      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])),
            vue.createCommentVNode(" 固定购物车 "),
            vue.createElementVNode("view", { class: "goods-carts" }, [
              vue.createVNode(_component_uni_goods_nav, {
                options: options.value,
                fill: true,
                "button-group": buttonGroup.value,
                onClick: _ctx.onClick,
                onButtonClick: buttonClick
              }, null, 8, ["options", "button-group", "onClick"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesHomeDetailService = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-76f1c5f4"], ["__file", "D:/graduationProject/pet-front-end/pages/home/DetailService.vue"]]);
  const _sfc_main$t = {
    props: {
      // 线条宽度 单位px
      lineW: {
        type: [Number, String],
        default: 0
      },
      // 选中的文字样式
      optStyle: {
        type: [String],
        default: "color: #333333;"
      },
      // 其他未选中的文字样式
      optStyleElse: {
        type: [String],
        default: "color: #999999;"
      },
      // 自定义样式
      tabStyle: {
        type: [String],
        default: ""
      },
      // 自定义进度条样式
      lineStyle: {
        type: [String],
        default: ""
      },
      // 是否固定
      fixed: {
        type: Boolean,
        default: true
      },
      // 默认选中值
      defaultKey: {
        type: [String, Number],
        default: ""
      },
      // 菜单导航
      tabnav: {
        type: Array,
        default: [
          //                 {
          // 	type: '', //状态值
          // 	name: '全部',
          // 	list: [], //数据
          // },
        ]
      }
    },
    data() {
      return {
        tabWid: 750,
        //tab组件宽度
        btnbb: true,
        userId: "",
        pageSize: 10,
        pageNum: 1,
        type: "",
        //当前选择类型
        dataInd: 0,
        //当前选择的索引
        orderStatus: "",
        deliveryId: "",
        navigateLastPage: 0,
        //总页数
        list: []
      };
    },
    created() {
      let that = this;
      setTimeout(() => {
        if (that.defaultKey) {
          that.type = that.defaultKey;
          that.dataInd = that.tabnav.findIndex((item) => item.type == this.defaultKey);
        } else {
          that.type = that.tabnav[0].type;
        }
      }, 50);
      setTimeout(() => {
        let info = uni.createSelectorQuery().in(that).select(".wly-tabnav");
        info.boundingClientRect(function(data) {
          that.tabWid = data.width;
        }).exec(function(res) {
        });
      }, 50);
    },
    methods: {
      typefun(ind) {
        this.dataInd = ind;
        this.type = this.tabnav[ind].type;
        this.pageNum = 1;
        if (this.tabnav[ind].list.length == 0)
          ;
        this.$emit("ontype_", this.tabnav[ind]);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "wly-tabnav",
        style: vue.normalizeStyle(($props.fixed == true ? "position: fixed;" : "") + $props.tabStyle)
      },
      [
        vue.createCommentVNode(" 导航 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.tabnav, (item, indexNav) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["tabs", $data.type === item.type ? "tabss" : ""]),
              "data-ind": "0",
              key: item.name,
              onClick: ($event) => $options.typefun(indexNav, item.type)
            }, [
              vue.createElementVNode(
                "text",
                {
                  class: "text",
                  style: vue.normalizeStyle($data.type === item.type ? $props.optStyle : $props.optStyleElse)
                },
                vue.toDisplayString(item.name),
                5
                /* TEXT, STYLE */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createCommentVNode(" 进度 "),
        vue.createElementVNode(
          "view",
          {
            class: "speed",
            style: vue.normalizeStyle("left:" + $data.dataInd * ($data.tabWid / $props.tabnav.length) + "px;width:" + $data.tabWid / $props.tabnav.length + "px")
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "speed-box",
                style: vue.normalizeStyle("width:" + ($props.lineW || $data.tabWid / $props.tabnav.length * 0.5) + "px;" + $props.lineStyle)
              },
              null,
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$f], ["__scopeId", "data-v-2fa0d557"], ["__file", "D:/graduationProject/pet-front-end/components/tab-nav/tab-nav.vue"]]);
  const _sfc_main$s = {};
  function _sfc_render$e(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "timer-state" }, [
        vue.createElementVNode("view", { class: "timer" }, "自己营Apple产品专营店"),
        vue.createElementVNode("view", { class: "state" }, " 已取消 ")
      ]),
      vue.createElementVNode("view", { class: "image-text" }, [
        vue.createElementVNode("view", { class: "main" }, [
          vue.createCommentVNode(" 图片 "),
          vue.createElementVNode("img", {
            src: `./static/image/cat1.jpg`,
            alt: ""
          }, null, 8, ["src"]),
          vue.createCommentVNode(" 文字 "),
          vue.createElementVNode("text", null, "Apple苹果iPhone8Plus4G手机深空灰asdasdasdasdasdasdasd移动联通版64G裸机Apple苹果iPhone8Plus4G手机深空灰移动联通版64G裸机")
        ])
      ]),
      vue.createCommentVNode(" 商品数量,价钱 "),
      vue.createElementVNode("view", { class: "number-price" }, [
        vue.createElementVNode("view", { class: "num" }, " 共1件商品 "),
        vue.createElementVNode("view", { class: "price" }, " 实际付款$ 3900.00 ")
      ]),
      vue.createCommentVNode(" 操作按钮 "),
      vue.createElementVNode("view", { class: "operation" }, [
        vue.createElementVNode("button", {
          plain: true,
          class: "btn",
          style: {}
        }, "查看物流"),
        vue.createElementVNode("button", {
          plain: true,
          class: "btn"
        }, "再次购买")
      ])
    ]);
  }
  const Order = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$e], ["__scopeId", "data-v-dc300319"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/Order.vue"]]);
  const _sfc_main$r = {
    __name: "OrderDetail",
    setup(__props) {
      const tabnav = vue.ref();
      const orderList = vue.ref([{
        type: "0",
        //状态值
        name: "全部",
        list: []
        //数据
      }, {
        type: "1",
        //状态值
        name: "待付款",
        list: []
        //数据
      }, {
        type: "2",
        //状态值
        name: "待收货",
        list: []
        //数据
      }, {
        type: "3",
        //状态值
        name: "已完成",
        list: []
        //数据
      }, {
        type: "4",
        //状态值
        name: "售后",
        list: []
        //数据
      }]);
      const ontype = (e2) => {
        formatAppLog("log", "at pages/my/OrderDetail.vue:39", e2);
      };
      return (_ctx, _cache) => {
        const _component_tab_nav = resolveEasycom(vue.resolveDynamicComponent("tab-nav"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_tab_nav, {
            ref_key: "tabnav",
            ref: tabnav,
            tabnav: orderList.value,
            onOntype_: ontype,
            fixed: false
          }, null, 8, ["tabnav"]),
          vue.createVNode(Order)
        ]);
      };
    }
  };
  const PagesMyOrderDetail = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-838e9a54"], ["__file", "D:/graduationProject/pet-front-end/pages/my/OrderDetail.vue"]]);
  const _sfc_main$q = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "total" }, [
      vue.createElementVNode("view", { class: "left" }, [
        vue.createElementVNode("view", { class: "top" }, "2020数字中国创新大赛-数字政府赛道21强出炉，四大赛题紧贴政府数字化发展需求"),
        vue.createElementVNode("view", { class: "bto" }, [
          vue.createElementVNode("view", { class: "author" }, " 36氟深度服 "),
          vue.createElementVNode("view", { class: "timer" }, " 务2020-04-1117:03:18 ")
        ])
      ]),
      vue.createElementVNode("view", { class: "right" }, [
        vue.createElementVNode("img", {
          src: `./static/image/cat1.jpg`,
          alt: ""
        }, null, 8, ["src"])
      ])
    ]);
  }
  const ImageText = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$d], ["__scopeId", "data-v-e9c1a8ef"], ["__file", "D:/graduationProject/pet-front-end/pages/community/components/ImageText.vue"]]);
  const _sfc_main$p = {
    __name: "index",
    setup(__props) {
      vue.ref([]);
      const projectList = vue.ref([]);
      vue.ref();
      const orderList = vue.ref([{
        type: "0",
        //状态值
        name: "爱宠日记",
        list: []
        //数据
      }, {
        type: "1",
        //状态值
        name: "科普",
        list: []
        //数据
      }, {
        type: "2",
        //状态值
        name: "种草",
        list: []
        //数据
      }, {
        type: "3",
        //状态值
        name: "已完成",
        list: []
        //数据
      }]);
      const requestData = () => {
        projectList.value = [];
        let imgArr = [
          "https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://cdn.pixabay.com/photo/2014/07/08/14/14/resolution-387446_1280.jpg",
          "https://images.pexels.com/photos/5202162/pexels-photo-5202162.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/4967533/pexels-photo-4967533.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/8679339/pexels-photo-8679339.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=800"
        ];
        let nameArr = [
          "冰糖心苹果 红富士大果出售 应季水果 繁荣种植园",
          "农鲜洛川红富士苹果16枚，单果160g,新鲜饱满水分充足",
          "甜醉了 烟台苹果栖霞红富士新鲜水...",
          "惠寻 山东烟台红富士苹果12枚 果径..."
        ];
        for (let i2 = 0; i2 < 20; i2++) {
          projectList.value.push({
            "proImg": imgArr[i2 % 6],
            "proName": nameArr[i2 % 4],
            "proDetail": "我是产品详情" + i2,
            "proPrice": 60 + 6 * i2 + "元",
            "status": i2 % 3 == 0 ? "618" : "",
            "id": i2 + ""
          });
        }
      };
      const gotoDetailArticle = () => {
        uni.navigateTo({
          url: "/pages/community/DetailArticle"
        });
      };
      const fabClick = () => {
        uni.navigateTo({
          url: "/pages/community/PublishContent"
        });
      };
      vue.onMounted(() => {
        requestData();
      });
      return (_ctx, _cache) => {
        const _component_tab_nav = resolveEasycom(vue.resolveDynamicComponent("tab-nav"), __easycom_0$2);
        const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0$c);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" tabnav "),
            vue.createVNode(_component_tab_nav, {
              fixed: false,
              tabnav: orderList.value
            }, null, 8, ["tabnav"]),
            vue.createCommentVNode("  proList: 条目数组数据  goProDetail:条目点击事件跳转（实现了点击条目数据传值）"),
            vue.createCommentVNode("v-if", true),
            vue.createCommentVNode("图文信息 "),
            vue.createVNode(ImageText, { onClick: gotoDetailArticle }),
            vue.createCommentVNode(" 发布爱宠日记 "),
            vue.createVNode(_component_uni_fab, {
              ref: "fab",
              pattern: _ctx.pattern,
              content: _ctx.content,
              horizontal: _ctx.horizontal,
              vertical: _ctx.vertical,
              direction: _ctx.direction,
              onTrigger: _ctx.trigger,
              onFabClick: fabClick
            }, null, 8, ["pattern", "content", "horizontal", "vertical", "direction", "onTrigger"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesCommunityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "D:/graduationProject/pet-front-end/pages/community/index.vue"]]);
  const _sfc_main$o = {};
  function _sfc_render$c(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode("这里的高度应该由图片的高度决定 "),
      vue.createElementVNode("view", { class: "show-image" }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          circular: "",
          "indicator-dots": true,
          autoplay: true,
          interval: 5e3,
          duration: 500
        }, [
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("img", {
              src: `./static/image/cat1.jpg`,
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("img", {
              src: `./static/image/cat1.jpg`,
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("img", {
              src: `./static/image/cat1.jpg`,
              alt: ""
            }, null, 8, ["src"])
          ])
        ]),
        vue.createCommentVNode(" 轮播图 ")
      ]),
      vue.createCommentVNode(" 标题 "),
      vue.createElementVNode("view", { class: "article-section" }, [
        vue.createElementVNode("h4", null, "卖小米啦，有人买小米吗"),
        vue.createElementVNode("text", null, "小米14pro16+512一月十二号入的，保修至25年1月12，全套在，送小米耳机，有意者私聊价格，苹果换安占有心用不糖小1n小千机#听总小红")
      ])
    ]);
  }
  const PagesCommunityDetailArticle = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$c], ["__scopeId", "data-v-eded9e05"], ["__file", "D:/graduationProject/pet-front-end/pages/community/DetailArticle.vue"]]);
  class WebSocket {
    constructor(url) {
      this.url = url;
      this.instance = null;
    }
    connect() {
      this.instance = uni.connectSocket({
        url: this.url,
        complete: () => {
        }
      });
    }
    send(data) {
      this.instance.send({
        data,
        success: () => {
        }
      });
    }
    close() {
      this.instance && this.instance.close({
        code: 1e3,
        reason: "正常关闭",
        success: () => {
        }
      });
    }
    onOpen(callback) {
      uni.onSocketOpen((res) => {
        callback && callback(res);
      });
    }
    onMessage(callback) {
      uni.onSocketMessage((res) => {
        callback && callback(res);
      });
    }
    onError(callback) {
      uni.onSocketError((res) => {
        callback && callback(res);
      });
    }
    onClose(callback) {
      uni.onSocketClose((res) => {
        callback && callback(res);
      });
    }
  }
  const useSocketStore = defineStore("socket", () => {
    const userStore = useUserStore();
    const socket = vue.ref(null);
    const list = vue.ref([]);
    const initSocket = () => {
      socket.value = new WebSocket(WEBSOCKETURL);
      socket.value.connect();
      authentication();
      getHistoryMessage();
    };
    const sendMessage = (data) => {
      let obj = {
        data,
        id: userStore.user.user_id,
        type: 3
      };
      socket.value.send(JSON.stringify(obj));
    };
    const getHistoryMessage = () => {
      socket.value.onOpen(() => {
        let obj = {
          id: userStore.user.user_id,
          type: 2
          //获取历史记录
        };
        socket.value.send(JSON.stringify(obj));
      });
    };
    const onMes = () => {
      socket.value.onMessage((res) => {
        let {
          type,
          data
        } = JSON.parse(res.data);
        formatAppLog("log", "at stores/socket.js:60", data);
        switch (type) {
          case 1:
            break;
          case 2:
            list.value = data;
            break;
          case 3:
            list.value.push(data);
            break;
        }
      });
    };
    const authentication = () => {
      let obj = {
        id: userStore.user.user_id,
        type: 1
        //获取历史记录
      };
      socket.value.onOpen(() => {
        socket.value.send(JSON.stringify(obj));
      });
    };
    return {
      socket,
      initSocket,
      list,
      sendMessage,
      onMes,
      getHistoryMessage
    };
  });
  const _sfc_main$n = {
    __name: "Chat",
    setup(__props) {
      useUserStore();
      const socketStore = useSocketStore();
      const inputValue = vue.ref("");
      vue.ref([]);
      vue.ref("");
      const scrollHeight = vue.ref(0);
      const windowObj = vue.computed(() => {
        let obj;
        uni.getSystemInfo({
          success: (res) => {
            obj = res;
          }
        });
        return obj;
      });
      const sendMessage = () => {
        socketStore.sendMessage(inputValue.value);
        inputValue.value = "";
      };
      onLoad(() => {
        socketStore.initSocket();
        socketStore.onMes();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            class: "scroll-box",
            style: vue.normalizeStyle({ height: vue.unref(windowObj).windowHeight - vue.unref(windowObj).statusBarHeight - 94 + "px" }),
            "scroll-top": scrollHeight.value,
            onScrolltoupper: _cache[0] || (_cache[0] = (...args) => _ctx.loadMores && _ctx.loadMores(...args))
          }, [
            vue.createElementVNode("view", { class: "scroll-view" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(socketStore).list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "news-box",
                    key: index
                  }, [
                    vue.createCommentVNode(" 头像 "),
                    vue.createElementVNode("image", {
                      class: vue.normalizeClass(["avatar", [item.message_type === 1 ? "is-me" : "avatar-right"]]),
                      src: `${vue.unref(devUrl)}/uploads/${item.message_type === 1 ? item.user.user_avatar : item.admin.admin_avatar}`,
                      mode: "aspectFill"
                    }, null, 10, ["src"]),
                    vue.createCommentVNode(" 消息 "),
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["message-box", { "is-me": item.message_type === 1 }])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          { class: "message" },
                          vue.toDisplayString(item.message || ""),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 44, ["scroll-top"]),
          vue.createCommentVNode(" 输入框以及按钮，发送消息部分 "),
          vue.createElementVNode("view", { class: "base-btn" }, [
            vue.createElementVNode("view", { class: "base-con unify-flex" }, [
              vue.createElementVNode("view", {
                class: "send-image iconfont icon-icon",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.tapTo(1))
              }),
              vue.createCommentVNode(' :value="inputValue" '),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "input-text",
                  type: "text",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => inputValue.value = $event),
                  placeholder: "说些什么吧",
                  onInput: _cache[3] || (_cache[3] = (...args) => _ctx.getInput && _ctx.getInput(...args)),
                  onConfirm: _cache[4] || (_cache[4] = ($event) => _ctx.tapTo(2))
                },
                null,
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vue.vModelText, inputValue.value]
              ]),
              vue.createElementVNode("view", {
                class: "send-input",
                onClick: sendMessage
              }, "发送")
            ])
          ])
        ]);
      };
    }
  };
  const PagesMessagesChat = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d3b50b6a"], ["__file", "D:/graduationProject/pet-front-end/pages/messages/Chat.vue"]]);
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self2 = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self2.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        Ws.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      //单位是字节
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$m = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.filesList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "file-picker__box",
              key: index,
              style: vue.normalizeStyle($options.boxStyle)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "file-picker__box-content",
                  style: vue.normalizeStyle($options.borderStyle)
                },
                [
                  vue.createElementVNode("image", {
                    class: "file-image",
                    src: item.url,
                    mode: "aspectFill",
                    onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
                  }, null, 8, ["src", "onClick"]),
                  $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "icon-del-box",
                    onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
                  }, [
                    vue.createElementVNode("view", { class: "icon-del" }),
                    vue.createElementVNode("view", { class: "icon-del rotate" })
                  ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "file-picker__box",
          style: vue.normalizeStyle($options.boxStyle)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "file-picker__box-content is-add",
              style: vue.normalizeStyle($options.borderStyle),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "icon-add" }),
                vue.createElementVNode("view", { class: "icon-add rotate" })
              ], true)
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$b], ["__scopeId", "data-v-bdfc07e0"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$l = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "uni-file-picker__lists is-text-box",
          style: vue.normalizeStyle($options.borderStyle)
        },
        [
          vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-file-picker__lists-box", {
                    "files-border": index !== 0 && $options.styles.dividline
                  }]),
                  key: index,
                  style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
                },
                [
                  vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
                    vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
                    vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
                    vue.createElementVNode(
                      "view",
                      { class: "files__name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "icon-del-box icon-files",
                      onClick: ($event) => $options.delFile(index)
                    }, [
                      vue.createElementVNode("view", { class: "icon-del icon-files" }),
                      vue.createElementVNode("view", { class: "icon-del rotate" })
                    ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$a], ["__scopeId", "data-v-a54939c6"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$k = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    options: {
      virtualHost: true
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      // 自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 最大选择个数 ，h5只能限制单选或是多选
      limit: {
        type: [Number, String],
        default: 9
      },
      // 列表样式 grid | list | list-card
      mode: {
        type: String,
        default: "grid"
      },
      // 选择文件类型  image/video/all
      fileMediatype: {
        type: String,
        default: "image"
      },
      // 文件类型筛选
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      },
      sourceType: {
        type: Array,
        default() {
          return ["album", "camera"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(Ws.config && Ws.config.provider)) {
        this.noSpace = true;
        Ws.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      /**
       * 公开用户使用，清空文件
       * @param {Object} index
       */
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 公开用户使用，继续上传
       */
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      /**
       * 选择文件
       */
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `您最多选择 ${this.limitLength} 个文件`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      /**
       * 选择文件并上传
       */
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        Ws.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          sourceType: this.sourceType,
          // TODO 如果为空，video 有问题
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          //默认9
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:371", "选择失败", err);
        });
      },
      /**
       * 选择文件回调
       * @param {Object} res
       */
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push({
            ...filedata,
            file: files[i2]
          });
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      /**
       * 批传
       * @param {Object} e
       */
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:437", err);
        });
      },
      /**
       * 成功或失败
       */
      async setSuccessAndError(res, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      /**
       * 获取进度
       * @param {Object} progressEvent
       * @param {Object} index
       * @param {Object} type
       */
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      /**
       * 删除文件
       * @param {Object} index
       */
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 获取文件名和后缀
       * @param {Object} name
       */
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      /**
       * 处理返回事件
       */
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      /**
       * 处理返回参数
       * @param {Object} files
       */
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url,
            // 修改删除一个文件后不能再上传的bug, #694
            uuid: v2.uuid,
            status: v2.status,
            cloudPath: v2.cloudPath
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await Ws.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode(
          "text",
          { class: "file-title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "file-count" },
          vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength),
          1
          /* TEXT */
        )
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "选择文件")
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$9], ["__scopeId", "data-v-6223573f"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$j = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e2) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$8], ["__scopeId", "data-v-09fd5285"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$i = {
    name: "uni-data-select",
    mixins: [Ws.mixinDatacom || {}],
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "请选择"
      },
      emptyTips: {
        type: String,
        default: "无选项"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
      format: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: [],
        cacheKey: "uni-data-select-lastSelectedValue"
      };
    },
    created() {
      this.debounceGet = this.debounce(() => {
        this.query();
      }, 300);
      if (this.collection && !this.localdata.length) {
        this.debounceGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "版本",
          "opendb-app-channels": "渠道",
          "opendb-app-list": "应用"
        };
        const common = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common + placeholder : common;
      },
      valueCom() {
        return this.modelValue;
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      valueCom(val, old) {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      debounce(fn, time = 100) {
        let timer = null;
        return function(...args) {
          if (timer)
            clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args);
          }, time);
        };
      },
      // 执行数据库查询
      query() {
        this.mixinDatacomEasyGet();
      },
      // 监听查询条件变更事件
      onMixinDatacomPropsChange() {
        if (this.collection) {
          this.debounceGet();
        }
      },
      initDefVal() {
        let defValue = "";
        if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
          defValue = this.valueCom;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = this.getCache();
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          if (defValue || defValue === 0) {
            this.emit(defValue);
          }
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          this.removeCache();
        }
      },
      change(item) {
        if (!item.disable) {
          this.showSelector = false;
          this.current = this.formatItemName(item);
          this.emit(item.value);
        }
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          this.setCache(val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        if (this.format) {
          let str = "";
          str = this.format;
          for (let key in item) {
            str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
          }
          return str;
        } else {
          return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
        }
      },
      // 获取当前加载的数据
      getLoadData() {
        return this.mixinDatacomResData;
      },
      // 获取当前缓存key
      getCurrentCacheKey() {
        return this.collection;
      },
      // 获取缓存
      getCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        return cacheData[name];
      },
      // 设置缓存
      setCache(value, name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        cacheData[name] = value;
        uni.setStorageSync(this.cacheKey, cacheData);
      },
      // 删除缓存
      removeCache(name = this.getCurrentCacheKey()) {
        let cacheData = uni.getStorageSync(this.cacheKey) || {};
        delete cacheData[name];
        uni.setStorageSync(this.cacheKey, cacheData);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-stat__select" }, [
      $props.label ? (vue.openBlock(), vue.createElementBlock(
        "span",
        {
          key: 0,
          class: "uni-label-text hide-on-phone"
        },
        vue.toDisplayString($props.label + "："),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              vue.createElementVNode("view", {
                class: "uni-select__input-box",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $data.current ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 0,
                    class: "uni-select__input-text"
                  },
                  vue.toDisplayString($data.current),
                  1
                  /* TEXT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    class: "uni-select__input-text uni-select__input-placeholder"
                  },
                  vue.toDisplayString($options.typePlaceholder),
                  1
                  /* TEXT */
                )),
                $data.current && $props.clear && !$props.disabled ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clearVal && $options.clearVal(...args), ["stop"]))
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "clear",
                    color: "#c0c4cc",
                    size: "24"
                  })
                ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
                  vue.createVNode(_component_uni_icons, {
                    type: $data.showSelector ? "top" : "bottom",
                    size: "14",
                    color: "#999"
                  }, null, 8, ["type"])
                ]))
              ]),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : vue.createCommentVNode("v-if", true),
              $data.showSelector ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-select__selector"
              }, [
                vue.createElementVNode("view", { class: "uni-popper__arrow" }),
                vue.createElementVNode("scroll-view", {
                  "scroll-y": "true",
                  class: "uni-select__selector-scroll"
                }, [
                  $data.mixinDatacomResData.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "uni-select__selector-empty"
                  }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString($props.emptyTips),
                      1
                      /* TEXT */
                    )
                  ])) : (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    vue.renderList($data.mixinDatacomResData, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "uni-select__selector-item",
                        key: index,
                        onClick: ($event) => $options.change(item)
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: vue.normalizeClass({ "uni-select__selector__disabled": item.disable })
                          },
                          vue.toDisplayString($options.formatItemName(item)),
                          3
                          /* TEXT, CLASS */
                        )
                      ], 8, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$7], ["__scopeId", "data-v-ddf9e0a2"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);
  const _sfc_main$h = {
    __name: "PublishContent",
    setup(__props) {
      vue.ref({
        section: "123"
      });
      return (_ctx, _cache) => {
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
          vue.createCommentVNode(" 上传图片 "),
          vue.createElementVNode("view", { class: "picture" }, [
            vue.createVNode(_component_uni_file_picker, {
              limit: "1",
              class: "select-picture"
            })
          ]),
          vue.createCommentVNode(" 标题 "),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createVNode(_component_uni_easyinput, {
              type: "text",
              placeholder: "填写标题吸引大家的注意",
              inputBorder: false
            })
          ]),
          vue.createCommentVNode(" 内容 "),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createVNode(_component_uni_easyinput, {
              type: "textarea",
              autoHeight: "",
              placeholder: "填写下您的想法"
            })
          ]),
          vue.createCommentVNode(" 发布类型 "),
          vue.createElementVNode("view", { class: "publish-type" }, [
            vue.createVNode(_component_uni_data_select, {
              modelValue: _ctx.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
              localdata: _ctx.range,
              onChange: _ctx.change
            }, null, 8, ["modelValue", "localdata", "onChange"])
          ]),
          vue.createElementVNode("view", { class: "publish" }, [
            vue.createElementVNode("button", {
              class: "publish-btn",
              type: "primary"
            }, "发布")
          ])
        ]);
      };
    }
  };
  const PagesCommunityPublishContent = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-99d57647"], ["__file", "D:/graduationProject/pet-front-end/pages/community/PublishContent.vue"]]);
  const _sfc_main$g = {
    __name: "ConfirmAddress",
    setup(__props) {
      const useStore = useUserStore();
      const addressList = vue.ref([]);
      const getAddress = async () => {
        const result = await getAddressApi(useStore.user.user_id);
        if (result.code === 1e3) {
          addressList.value = result.data;
        }
        formatAppLog("log", "at pages/car/ConfirmAddress.vue:31", result);
      };
      onLoad(() => {
        getAddress();
      });
      const selectTap = (item) => {
        uni.$emit("confirmAddress", item);
        uni.navigateBack({
          delta: 1
        });
      };
      const editAddess = (id) => {
        formatAppLog("log", "at pages/car/ConfirmAddress.vue:45", "edit item id:" + id);
      };
      const addAddess = () => {
        formatAppLog("log", "at pages/car/ConfirmAddress.vue:48", "tap add new Address");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "address-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(addressList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "a-address",
                  key: item.address_id
                }, [
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["left-text", item.isDefault ? "active" : ""]),
                    onClick: ($event) => selectTap(item)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "name-tel" },
                      vue.toDisplayString(item.address_name) + " " + vue.toDisplayString(item.address_phone),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "address-box" },
                      vue.toDisplayString(item.address_area) + vue.toDisplayString(item.address_details),
                      1
                      /* TEXT */
                    )
                  ], 10, ["onClick"]),
                  vue.createElementVNode("view", {
                    class: "right-edit",
                    onClick: ($event) => editAddess(item.id)
                  }, null, 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "bottom-box" }, [
            vue.createElementVNode("view", {
              class: "add-btn",
              onClick: addAddess
            }, "继续付款")
          ])
        ]);
      };
    }
  };
  const PagesCarConfirmAddress = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-777a2470"], ["__file", "D:/graduationProject/pet-front-end/pages/car/ConfirmAddress.vue"]]);
  const en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans$1 = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant$1 = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$2
  } = initVueI18n(messages);
  const _sfc_main$f = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$2("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$6], ["__scopeId", "data-v-9245e42c"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$e = {
    name: "uniDataChecklist",
    mixins: [Ws.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "查看更多",
          contentrefresh: "加载中",
          contentnomore: "没有更多"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e2) {
        const values = e2.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-data-checklist",
        style: vue.normalizeStyle({ "margin-top": $data.isTop + "px" })
      },
      [
        !$data.isLocal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : (vue.openBlock(), vue.createElementBlock(
            "text",
            { key: 1 },
            vue.toDisplayString(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            $props.multiple ? (vue.openBlock(), vue.createElementBlock(
              "checkbox-group",
              {
                key: 0,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
                onChange: _cache[0] || (_cache[0] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("checkbox", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: vue.normalizeStyle(item.styleIcon)
                          },
                          [
                            vue.createElementVNode("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: vue.normalizeStyle(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            )) : (vue.openBlock(), vue.createElementBlock(
              "radio-group",
              {
                key: 1,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
                onChange: _cache[1] || (_cache[1] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                vue.createCommentVNode(" "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("radio", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: vue.normalizeStyle(item.styleBackgroud)
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: vue.normalizeStyle(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                style: vue.normalizeStyle(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$5], ["__scopeId", "data-v-2f788efd"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);
  let Calendar$1 = class Calendar {
    constructor({
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDateObj(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      const selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    setStartDate(startDate) {
      this.startDate = startDate;
    }
    setEndDate(endDate) {
      this.endDate = endDate;
    }
    getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      const newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      const newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    /**
     * 获取指定格式Date对象
     */
    getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }
    /**
     * 获取上一个月日期集合
     */
    getPreMonthDays(amount, dateObj) {
      const result = [];
      for (let i2 = amount - 1; i2 >= 0; i2--) {
        const month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i2).getDate(),
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
    getCurrentMonthDays(amount, dateObj) {
      const result = [];
      const fullDate = this.date.fullDate;
      for (let i2 = 1; i2 <= amount; i2++) {
        const currentDate = `${dateObj.year}-${dateObj.month}-${addZero(i2)}`;
        const isToday = fullDate === currentDate;
        const info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });
        if (this.startDate) {
          dateCompare(this.startDate, currentDate);
        }
        if (this.endDate) {
          dateCompare(currentDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let multiplesStatus = -1;
        if (this.range && multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, currentDate);
          });
        }
        const checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i2,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          month: dateObj.month,
          disable: this.startDate && !dateCompare(this.startDate, currentDate) || this.endDate && !dateCompare(currentDate, this.endDate),
          isToday,
          userChecked: false,
          extraInfo: info
        });
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
    _getNextMonthDays(amount, dateObj) {
      const result = [];
      const month = dateObj.month + 1;
      for (let i2 = 1; i2 <= amount; i2++) {
        result.push({
          date: i2,
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      return this.calendar.find((item) => item.fullDate === this.getDateObj(date).fullDate);
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }
    /**
     *  比较真实起始日期
     */
    isLogicBefore(currentDate, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
    isLogicAfter(currentDate, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae2 = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de2 = /* @__PURE__ */ new Date();
      de2.setFullYear(ae2[0], ae2[1] - 1, ae2[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de2.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      if (!this.range)
        return;
      let {
        before,
        after
      } = this.multipleStatus;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     *  鼠标 hover 更新多选状态
     */
    setHoverMultiple(fullDate) {
      if (!this.range || this.lastHover)
        return;
      const { before } = this.multipleStatus;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     * 更新默认值多选状态
     */
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    getWeeks(dateData) {
      const {
        year,
        month
      } = this.getDateObj(dateData);
      const preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      const preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      const currentMonthDayAmount = new Date(year, month, 0).getDate();
      const currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      const nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      const nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      const calendarDays = [...preMonthDays, ...currentMonthDays, ...nextMonthDays];
      const weeks = new Array(6);
      for (let i2 = 0; i2 < calendarDays.length; i2++) {
        const index = Math.floor(i2 / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i2 % 7] = calendarDays[i2];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  };
  function getDateTime(date, hideSecond) {
    return `${getDate(date)} ${getTime(date, hideSecond)}`;
  }
  function getDate(date) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${addZero(month)}-${addZero(day)}`;
  }
  function getTime(date, hideSecond) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return hideSecond ? `${addZero(hour)}:${addZero(minute)}` : `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  }
  function addZero(num) {
    if (num < 10) {
      num = `0${num}`;
    }
    return num;
  }
  function getDefaultSecond(hideSecond) {
    return hideSecond ? "00:00" : "00:00:00";
  }
  function dateCompare(startDate, endDate) {
    startDate = new Date(fixIosDateFormat(startDate));
    endDate = new Date(fixIosDateFormat(endDate));
    return startDate <= endDate;
  }
  function checkDate(date) {
    const dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
    return date.match(dateReg);
  }
  const dateTimeReg = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])( [0-5][0-9]:[0-5][0-9]:[0-5][0-9])?$/;
  function fixIosDateFormat(value) {
    if (typeof value === "string" && dateTimeReg.test(value)) {
      value = value.replace(/-/g, "/");
    }
    return value;
  }
  const _sfc_main$d = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
        onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-calendar-item__weeks-box-item", {
              "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
              "uni-calendar-item--checked-range-text": $props.checkHover,
              "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
              "uni-calendar-item--multiple": $props.weeks.multiple,
              "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
              "uni-calendar-item--disable": $props.weeks.disable
            }])
          },
          [
            $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-calendar-item__weeks-box-circle"
            })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "text",
              { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" },
              vue.toDisplayString($props.weeks.date),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "uni-calendar-item--today": $props.weeks.isToday })
          },
          null,
          2
          /* CLASS */
        )
      ],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$4], ["__scopeId", "data-v-3c762a01"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  const en = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select date and time",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-datetime-picker.year": "-",
    "uni-datetime-picker.month": "",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN",
    "uni-calender.confirm": "confirm"
  };
  const zhHans = {
    "uni-datetime-picker.selectDate": "选择日期",
    "uni-datetime-picker.selectTime": "选择时间",
    "uni-datetime-picker.selectDateTime": "选择日期时间",
    "uni-datetime-picker.startDate": "开始日期",
    "uni-datetime-picker.endDate": "结束日期",
    "uni-datetime-picker.startTime": "开始时间",
    "uni-datetime-picker.endTime": "结束时间",
    "uni-datetime-picker.ok": "确定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "确认"
  };
  const zhHant = {
    "uni-datetime-picker.selectDate": "選擇日期",
    "uni-datetime-picker.selectTime": "選擇時間",
    "uni-datetime-picker.selectDateTime": "選擇日期時間",
    "uni-datetime-picker.startDate": "開始日期",
    "uni-datetime-picker.endDate": "結束日期",
    "uni-datetime-picker.startTime": "開始时间",
    "uni-datetime-picker.endTime": "結束时间",
    "uni-datetime-picker.ok": "確定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "確認"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$c = {
    name: "UniDatetimePicker",
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "日期和时间",
        // 输入框当前时间
        time: "",
        // 当前的年月日时分秒
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        // 起始时间
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        // 结束时间
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      modelValue: {
        handler(newVal) {
          if (newVal) {
            this.parseValue(fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "日期";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "时间";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "日期和时间";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      // 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      // 当前年、月、日、时、分、秒选择范围
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      // picker 当前值数组
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      // 当前 date 是 start
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      // 当前 date 是 end
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      // 当前年、月、日、时、分、秒的最小值和最大值
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      /**
       * for i18n
       */
      selectTimeText() {
        return t$1("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      clearText() {
        return t$1("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$1("uni-datetime-picker.cancel");
      }
    },
    mounted() {
    },
    methods: {
      /**
       * @param {Object} item
       * 小于 10 在前面加个 0
       */
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      /**
       * 解析时分秒字符串，例如：00:00:00
       * @param {String} timeString
       */
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      /**
       * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
       * @param {String | Number} datetime
       */
      initPickerValue(datetime) {
        let defaultValue = null;
        if (datetime) {
          defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      /**
       * 初始值规则：
       * - 用户设置初始值 value
       * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
       * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
       * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
       * 	- 无起始终止时间，则初始值为 value
       * - 无初始值 value，则初始值为当前本地时间 Date.now()
       * @param {Object} value
       * @param {Object} dateBase
       */
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      /**
       * 转换为可比较的时间戳，接受日期、时分秒、时间戳
       * @param {Object} value
       */
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now2 = /* @__PURE__ */ new Date();
          const year = now2.getFullYear();
          const month = now2.getMonth() + 1;
          const day = now2.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value)) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      /**
       * 解析默认值 value，字符串、时间戳
       * @param {Object} defaultTime
       */
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      /**
       * 解析可选择时间范围 start、end，年月日字符串、时间戳
       * @param {Object} defaultTime
       */
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point)) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
            point
          )) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      // 获取 年、月、日、时、分、秒 当前可选范围
      getCurrentRange(value) {
        const range = [];
        for (let i2 = this["min" + this.capitalize(value)]; i2 <= this["max" + this.capitalize(value)]; i2++) {
          range.push(i2);
        }
        return range;
      },
      // 字符串首字母大写
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      // 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      checkValue(name, value, values) {
        if (values.indexOf(value) === -1) {
          this[name] = values[0];
        }
      },
      // 每个月的实际天数
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      //兼容 iOS、safari 日期格式
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      /**
       * 生成时间戳
       * @param {Object} time
       */
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      /**
       * 生成日期或时间的字符串
       */
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      /**
       * 初始化返回值，并抛出 change 事件
       */
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      /**
       * 用户选择日期或时间更新 data
       * @param {Object} e
       */
      bindDateChange(e2) {
        const val = e2.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e2) {
        const val = e2.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      /**
       * 初始化弹出层
       */
      initTimePicker() {
        if (this.disabled)
          return;
        const value = fixIosDateFormat(this.time);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      /**
       * 触发或关闭弹框
       */
      tiggerTimePicker(e2) {
        this.visible = !this.visible;
      },
      /**
       * 用户点击“清空”按钮，清空当前值
       */
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      /**
       * 用户点击“确定”按钮
       */
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-datetime-picker" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
            },
            [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-text" },
                vue.toDisplayString($data.time),
                1
                /* TEXT */
              ),
              !$data.time ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-datetime-picker-time"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-text" },
                  vue.toDisplayString($options.selectTimeText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.visible ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: vue.normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
          style: vue.normalizeStyle($data.fixNvueBug)
        },
        [
          vue.createElementVNode("view", { class: "uni-title" }, [
            vue.createElementVNode(
              "text",
              { class: "uni-datetime-picker-text" },
              vue.toDisplayString($options.selectTimeText),
              1
              /* TEXT */
            )
          ]),
          $data.dateShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: "uni-datetime-picker-view",
              "indicator-style": $data.indicatorStyle,
              value: $options.ymd,
              onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.years, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.months, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.days, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ], 40, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-right" }, "-")
          ])) : vue.createCommentVNode("v-if", true),
          $data.timeShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: vue.normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
              "indicator-style": $data.indicatorStyle,
              value: $options.hms,
              onChange: _cache[3] || (_cache[3] = (...args) => $options.bindTimeChange && $options.bindTimeChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.hours, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.minutes, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.seconds, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 42, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
              },
              ":",
              2
              /* CLASS */
            ),
            !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-datetime-picker-sign sign-right"
            }, ":")) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
            vue.createElementVNode("view", {
              onClick: _cache[4] || (_cache[4] = (...args) => $options.clearTime && $options.clearTime(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-btn-text" },
                vue.toDisplayString($options.clearText),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
              vue.createElementVNode("view", {
                class: "uni-datetime-picker-cancel",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                onClick: _cache[6] || (_cache[6] = (...args) => $options.setTime && $options.setTime(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$3], ["__scopeId", "data-v-1d532b70"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$b = {
    components: {
      calendarItem,
      timePicker: TimePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      hasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: {},
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setStartDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        if (!this.cale) {
          return;
        }
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              if (!this.cale) {
                return;
              }
              this.cale.setDefaultMultiple(before, after);
              if (which === "left" && before) {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else if (after) {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        return activeDate === this.startDate ? this.selectableTimes.start : "";
      },
      timepickerEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        return activeDate === this.endDate ? this.selectableTimes.end : "";
      },
      /**
       * for i18n
       */
      selectDateText() {
        return t("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t("uni-datetime-picker.endDate");
      },
      okText() {
        return t("uni-datetime-picker.ok");
      },
      yearText() {
        return t("uni-datetime-picker.year");
      },
      monthText() {
        return t("uni-datetime-picker.month");
      },
      MONText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      },
      confirmText() {
        return t("uni-calender.confirm");
      }
    },
    created() {
      this.cale = new Calendar$1({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A2, B2) {
        const [yearA, monthA] = A2.split("-");
        const [yearB, monthB] = B2.split("-");
        return yearA === yearB && monthA === monthB;
      },
      // 蒙版点击事件
      maskClick() {
        this.close();
        this.$emit("maskClose");
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate(/* @__PURE__ */ new Date());
      },
      bindDateChange(e2) {
        const value = e2.detail.value + "-1";
        this.setDate(value);
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        if (!this.cale) {
          return;
        }
        this.cale.setDate(date || /* @__PURE__ */ new Date());
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
        this.calendar = { ...this.nowDate };
        if (!date) {
          this.calendar.fullDate = "";
          if (this.defaultValue && !this.range) {
            const defaultDate = new Date(this.defaultValue);
            const fullDate = getDate(defaultDate);
            const year = defaultDate.getFullYear();
            const month = defaultDate.getMonth() + 1;
            const date2 = defaultDate.getDate();
            const day = defaultDate.getDay();
            this.calendar = {
              fullDate,
              year,
              month,
              date: date2,
              day
            }, this.tempSingleDate = fullDate;
            this.time = getTime(defaultDate, this.hideSecond);
          }
        }
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        if (!this.range) {
          if (!this.calendar.fullDate) {
            this.calendar = this.cale.getInfo(/* @__PURE__ */ new Date());
            this.tempSingleDate = this.calendar.fullDate;
          }
          if (this.hasTime && !this.time) {
            this.time = getTime(/* @__PURE__ */ new Date(), this.hideSecond);
          }
        }
        let {
          year,
          month,
          date,
          fullDate,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
        const afterDate = new Date(this.cale.multipleStatus.after).getTime();
        if (beforeDate > afterDate && afterDate) {
          this.tempRange.before = this.cale.multipleStatus.after;
          this.tempRange.after = this.cale.multipleStatus.before;
        } else {
          this.tempRange.before = this.cale.multipleStatus.before;
          this.tempRange.after = this.cale.multipleStatus.after;
        }
        this.change();
      },
      changeMonth(type) {
        let newDate;
        if (type === "pre") {
          newDate = this.cale.getPreMonthObj(this.nowDate.fullDate).fullDate;
        } else if (type === "next") {
          newDate = this.cale.getNextMonthObj(this.nowDate.fullDate).fullDate;
        }
        this.setDate(newDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-calendar",
        onMouseleave: _cache[9] || (_cache[9] = (...args) => $options.leaveCale && $options.leaveCale(...args))
      },
      [
        !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.maskClick && $options.maskClick(...args))
          },
          null,
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true),
        $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 1,
            class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
              },
              [
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.changeMonth("pre"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
                ]),
                vue.createElementVNode("picker", {
                  mode: "date",
                  value: $props.date,
                  fields: "month",
                  onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__header-text" },
                    vue.toDisplayString(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText),
                    1
                    /* TEXT */
                  )
                ], 40, ["value"]),
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $options.changeMonth("next"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
                ]),
                !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "dialog-close",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.close && $options.close(...args))
                }, [
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus",
                    "data-id": "close"
                  }),
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus dialog-close-rotate",
                    "data-id": "close"
                  })
                ])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode("view", { class: "uni-calendar__box" }, [
              $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-calendar__box-bg"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__box-bg-text" },
                  vue.toDisplayString($data.nowDate.month),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: "uni-calendar__weeks",
                style: { "padding-bottom": "7px" }
              }, [
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SUNText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.MONText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.TUEText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.WEDText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.THUText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.FRIText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SATText),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.weeks, (item, weekIndex) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "uni-calendar__weeks",
                    key: weekIndex
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (weeks, weeksIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-calendar__weeks-item",
                          key: weeksIndex
                        }, [
                          vue.createVNode(_component_calendar_item, {
                            class: "uni-calendar-item--hook",
                            weeks,
                            calendar: $data.calendar,
                            selected: $props.selected,
                            checkHover: $props.range,
                            onChange: $options.choiceDate,
                            onHandleMouse: $options.handleMouse
                          }, null, 8, ["weeks", "calendar", "selected", "checkHover", "onChange", "onHandleMouse"])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            !$props.insert && !$props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-date-changed uni-calendar--fixed-top",
              style: { "padding": "0 80px" }
            }, [
              vue.createElementVNode(
                "view",
                { class: "uni-date-changed--time-date" },
                vue.toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_time_picker, {
                type: "time",
                start: $options.timepickerStartTime,
                end: $options.timepickerEndTime,
                modelValue: $data.time,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.time = $event),
                disabled: !$data.tempSingleDate,
                border: false,
                "hide-second": $props.hideSecond,
                class: "time-picker-style"
              }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert && $props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-date-changed uni-calendar--fixed-top"
            }, [
              vue.createElementVNode("view", { class: "uni-date-changed--time-start" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  start: $options.timepickerStartTime,
                  modelValue: $data.timeRange.startTime,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.startTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.before,
                  class: "time-picker-style"
                }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
              ]),
              vue.createElementVNode("view", { style: { "line-height": "50px" } }, [
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999"
                })
              ]),
              vue.createElementVNode("view", { class: "uni-date-changed--time-end" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  end: $options.timepickerEndTime,
                  modelValue: $data.timeRange.endTime,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.timeRange.endTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.after,
                  class: "time-picker-style"
                }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "uni-date-changed uni-date-btn--ok"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "uni-datetime-picker--btn",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.confirm && $options.confirm(...args))
                },
                vue.toDisplayString($options.confirmText),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2], ["__scopeId", "data-v-1d379219"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const _sfc_main$a = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: true
    },
    components: {
      Calendar,
      TimePicker
    },
    data() {
      return {
        isRange: false,
        hasTime: false,
        displayValue: "",
        inputDate: "",
        calendarDate: "",
        pickerTime: "",
        calendarRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        displayRangeValue: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        // 左右日历同步数据
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        pickerVisible: false,
        pickerPositionStyle: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true,
        i18nT: () => {
        }
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal) {
          this.hasTime = newVal.indexOf("time") !== -1;
          this.isRange = newVal.indexOf("range") !== -1;
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.startDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.startTime = getTime(newVal);
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.endDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.endTime = getTime(newVal, this.hideSecond);
          }
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.inputDate;
        return activeDate === this.calendarRange.startDate ? this.calendarRange.startTime : "";
      },
      timepickerEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.inputDate;
        return activeDate === this.calendarRange.endDate ? this.calendarRange.endTime : "";
      },
      mobileCalendarTime() {
        const timeRange = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? timeRange : this.pickerTime;
      },
      mobSelectableTime() {
        return {
          start: this.calendarRange.startTime,
          end: this.calendarRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      /**
       * for i18n
       */
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : this.selectDateTimeText);
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return this.i18nT("uni-datetime-picker.selectDate");
      },
      selectDateTimeText() {
        return this.i18nT("uni-datetime-picker.selectDateTime");
      },
      selectTimeText() {
        return this.i18nT("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return this.i18nT("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return this.i18nT("uni-datetime-picker.endTime");
      },
      okText() {
        return this.i18nT("uni-datetime-picker.ok");
      },
      clearText() {
        return this.i18nT("uni-datetime-picker.clear");
      },
      showClearIcon() {
        return this.clearIcon && !this.disabled && (this.displayValue || this.displayRangeValue.startDate && this.displayRangeValue.endDate);
      }
    },
    created() {
      this.initI18nT();
      this.platform();
    },
    methods: {
      initI18nT() {
        const vueI18n = initVueI18n(i18nMessages);
        this.i18nT = vueI18n.t;
      },
      initPicker(newVal) {
        if (!newVal && !this.defaultValue || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          if (newVal) {
            this.displayValue = this.inputDate = this.calendarDate = getDate(newVal);
            if (this.hasTime) {
              this.pickerTime = getTime(newVal, this.hideSecond);
              this.displayValue = `${this.displayValue} ${this.pickerTime}`;
            }
          } else if (this.defaultValue) {
            this.inputDate = this.calendarDate = getDate(this.defaultValue);
            if (this.hasTime) {
              this.pickerTime = getTime(this.defaultValue, this.hideSecond);
            }
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const beforeDate = getDate(before);
          const beforeTime = getTime(before, this.hideSecond);
          const afterDate = getDate(after);
          const afterTime = getTime(after, this.hideSecond);
          const startDate = beforeDate;
          const endDate = afterDate;
          this.displayRangeValue.startDate = this.tempRange.startDate = startDate;
          this.displayRangeValue.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.displayRangeValue.startDate = `${beforeDate} ${beforeTime}`;
            this.displayRangeValue.endDate = `${afterDate} ${afterTime}`;
            this.tempRange.startTime = beforeTime;
            this.tempRange.endTime = afterTime;
          }
          const defaultRange = {
            before: beforeDate,
            after: afterDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e2) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e2.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e2) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e2.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        const { windowWidth } = uni.getSystemInfoSync();
        this.isPhone = windowWidth <= 500;
        this.windowWidth = windowWidth;
      },
      show() {
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          this.$refs.mobile.open();
          return;
        }
        this.pickerPositionStyle = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.pickerPositionStyle.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.pickerVisible = !this.pickerVisible;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.calendarRange;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.changeMonth("pre");
              }
            } else {
              this.$refs.right.changeMonth("next");
              this.$refs.right.cale.lastHover = false;
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.pickerVisible = false;
          this.$emit("maskClick", this.value);
          this.$refs.mobile && this.$refs.mobile.close();
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.$emit("update:modelValue", value);
        this.$emit("input", value);
        this.$emit("change", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e2) {
        this.calendarDate = this.inputDate = e2.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!checkDate(this.inputDate)) {
          const now2 = /* @__PURE__ */ new Date();
          this.calendarDate = this.inputDate = getDate(now2);
          this.pickerTime = getTime(now2, this.hideSecond);
        }
        let startLaterInputDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(startDate, this.inputDate)) {
            startLaterInputDate = true;
            this.inputDate = startDate;
          }
        }
        let endEarlierInputDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.inputDate, endDate)) {
            endEarlierInputDate = true;
            this.inputDate = endDate;
          }
        }
        if (this.hasTime) {
          if (startLaterInputDate) {
            this.pickerTime = startTime || getDefaultSecond(this.hideSecond);
          }
          if (endEarlierInputDate) {
            this.pickerTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.pickerTime) {
            this.pickerTime = getTime(Date.now(), this.hideSecond);
          }
          this.displayValue = `${this.inputDate} ${this.pickerTime}`;
        } else {
          this.displayValue = this.inputDate;
        }
        this.setEmit(this.displayValue);
        this.pickerVisible = false;
      },
      leftChange(e2) {
        const {
          before,
          after
        } = e2.range;
        this.rangeChange(before, after);
        const obj = {
          before: e2.range.before,
          after: e2.range.after,
          data: e2.range.data,
          fulldate: e2.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e2) {
        const {
          before,
          after
        } = e2.range;
        this.rangeChange(before, after);
        const obj = {
          before: e2.range.before,
          after: e2.range.after,
          data: e2.range.data,
          fulldate: e2.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e2) {
        if (this.isRange) {
          const { before, after } = e2.range;
          if (!before || !after) {
            return;
          }
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e2.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.displayValue = e2.fulldate + " " + e2.time;
          } else {
            this.displayValue = e2.fulldate;
          }
          this.setEmit(this.displayValue);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate || !this.tempRange.endDate) {
          this.pickerVisible = false;
          return;
        }
        if (!checkDate(this.tempRange.startDate)) {
          this.tempRange.startDate = getDate(Date.now());
        }
        if (!checkDate(this.tempRange.endDate)) {
          this.tempRange.endDate = getDate(Date.now());
        }
        let start, end;
        let startDateLaterRangeStartDate = false;
        let startDateLaterRangeEndDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(this.start, this.tempRange.startDate)) {
            startDateLaterRangeStartDate = true;
            this.tempRange.startDate = startDate;
          }
          if (this.start && !dateCompare(this.start, this.tempRange.endDate)) {
            startDateLaterRangeEndDate = true;
            this.tempRange.endDate = startDate;
          }
        }
        let endDateEarlierRangeStartDate = false;
        let endDateEarlierRangeEndDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.tempRange.startDate, this.end)) {
            endDateEarlierRangeStartDate = true;
            this.tempRange.startDate = endDate;
          }
          if (this.end && !dateCompare(this.tempRange.endDate, this.end)) {
            endDateEarlierRangeEndDate = true;
            this.tempRange.endDate = endDate;
          }
        }
        if (!this.hasTime) {
          start = this.displayRangeValue.startDate = this.tempRange.startDate;
          end = this.displayRangeValue.endDate = this.tempRange.endDate;
        } else {
          if (startDateLaterRangeStartDate) {
            this.tempRange.startTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeStartDate) {
            this.tempRange.startTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.startTime) {
            this.tempRange.startTime = getTime(Date.now(), this.hideSecond);
          }
          if (startDateLaterRangeEndDate) {
            this.tempRange.endTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeEndDate) {
            this.tempRange.endTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.endTime) {
            this.tempRange.endTime = getTime(Date.now(), this.hideSecond);
          }
          start = this.displayRangeValue.startDate = `${this.tempRange.startDate} ${this.tempRange.startTime}`;
          end = this.displayRangeValue.endDate = `${this.tempRange.endDate} ${this.tempRange.endTime}`;
        }
        if (!dateCompare(start, end)) {
          [start, end] = [end, start];
        }
        this.displayRangeValue.startDate = start;
        this.displayRangeValue.endDate = end;
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.pickerVisible = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!(before && after))
          return;
        const type = temp ? "tempRange" : "range";
        const isStartEarlierEnd = dateCompare(before, after);
        this[type].startDate = isStartEarlierEnd ? before : after;
        this[type].endDate = isStartEarlierEnd ? after : before;
      },
      /**
       * 比较时间大小
       */
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        return startDate <= endDate;
      },
      /**
       * 比较时间差
       */
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.displayValue = "";
          this.inputDate = "";
          this.pickerTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.displayRangeValue.startDate = "";
          this.displayRangeValue.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.changeMonth("next");
          }
          if (needEmit) {
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$d);
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_Calendar = vue.resolveComponent("Calendar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-date" }, [
      vue.createElementVNode("view", {
        class: "uni-date-editor",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.show && $options.show(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-date-editor--x", { "uni-date-editor--x__disabled": $props.disabled, "uni-date-x--border": $props.border }])
            },
            [
              !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-x uni-date-single"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input" },
                  vue.toDisplayString($data.displayValue || $options.singlePlaceholderText),
                  1
                  /* TEXT */
                )
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-date-x uni-date-range"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.startDate || $options.startPlaceholderText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "range-separator" },
                  vue.toDisplayString($props.rangeSeparator),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.endDate || $options.endPlaceholderText),
                  1
                  /* TEXT */
                )
              ])),
              $options.showClearIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "uni-date__icon-clear",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "22"
                })
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "uni-date-mask--pc",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args))
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $data.pickerVisible]
      ]),
      !$data.isPhone ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          ref: "datePicker",
          class: "uni-date-picker__container"
        },
        [
          !$data.isRange ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "uni-date-single--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-changed popup-x-header"
              }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "uni-date__input text-center",
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputDate = $event),
                  placeholder: $options.selectDateText
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.inputDate]
                ]),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  modelValue: $data.pickerTime,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.pickerTime = $event),
                  border: false,
                  disabled: !$data.inputDate,
                  start: $options.timepickerStartTime,
                  end: $options.timepickerEndTime,
                  hideSecond: $props.hideSecond,
                  style: { "width": "100%" }
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "uni-date__input text-center",
                      type: "text",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.pickerTime = $event),
                      placeholder: $options.selectTimeText,
                      disabled: !$data.inputDate
                    }, null, 8, ["placeholder", "disabled"]), [
                      [vue.vModelText, $data.pickerTime]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_Calendar, {
                ref: "pcSingle",
                showMonth: false,
                "start-date": $data.calendarRange.startDate,
                "end-date": $data.calendarRange.endDate,
                date: $data.calendarDate,
                onChange: $options.singleChange,
                "default-value": $props.defaultValue,
                style: { "padding": "0 8px" }
              }, null, 8, ["start-date", "end-date", "date", "onChange", "default-value"]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[6] || (_cache[6] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )) : (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: "uni-date-range--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "popup-x-header uni-date-changed"
              }, [
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.tempRange.startDate = $event),
                    placeholder: $options.startDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.startDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.startTime,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.tempRange.startTime = $event),
                    start: $options.timepickerStartTime,
                    border: false,
                    disabled: !$data.tempRange.startDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.tempRange.startTime = $event),
                        placeholder: $options.startTimeText,
                        disabled: !$data.tempRange.startDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.startTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "start", "disabled", "hideSecond"])
                ]),
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999",
                  style: { "line-height": "40px" }
                }),
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.tempRange.endDate = $event),
                    placeholder: $options.endDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.endDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.endTime,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.endTime = $event),
                    end: $options.timepickerEndTime,
                    border: false,
                    disabled: !$data.tempRange.endDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tempRange.endTime = $event),
                        placeholder: $options.endTimeText,
                        disabled: !$data.tempRange.endDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.endTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "end", "disabled", "hideSecond"])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "popup-x-body" }, [
                vue.createVNode(_component_Calendar, {
                  ref: "left",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  pleStatus: $data.endMultipleStatus,
                  onChange: $options.leftChange,
                  onFirstEnterCale: $options.updateRightCale,
                  style: { "padding": "0 8px" }
                }, null, 8, ["start-date", "end-date", "pleStatus", "onChange", "onFirstEnterCale"]),
                vue.createVNode(_component_Calendar, {
                  ref: "right",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  onChange: $options.rightChange,
                  pleStatus: $data.startMultipleStatus,
                  onFirstEnterCale: $options.updateLeftCale,
                  style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
                }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale"])
              ]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    onClick: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
                  },
                  vue.toDisplayString($options.clearText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[14] || (_cache[14] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ))
        ],
        512
        /* NEED_PATCH */
      )), [
        [vue.vShow, $data.pickerVisible]
      ]) : vue.createCommentVNode("v-if", true),
      $data.isPhone ? (vue.openBlock(), vue.createBlock(_component_Calendar, {
        key: 1,
        ref: "mobile",
        clearDate: false,
        date: $data.calendarDate,
        defTime: $options.mobileCalendarTime,
        "start-date": $data.calendarRange.startDate,
        "end-date": $data.calendarRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        startPlaceholder: $props.startPlaceholder,
        endPlaceholder: $props.endPlaceholder,
        "default-value": $props.defaultValue,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        hasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange,
        onMaskClose: $options.close
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "startPlaceholder", "endPlaceholder", "default-value", "pleStatus", "range", "hasTime", "hideSecond", "onConfirm", "onMaskClose"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$1], ["__scopeId", "data-v-9802168a"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  const _sfc_main$9 = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.renderSlot(_ctx.$slots, "extra", {}, () => [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-extra-text" },
                  vue.toDisplayString($props.extra),
                  1
                  /* TEXT */
                )
              ], true)
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render], ["__scopeId", "data-v-ae4bee67"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const petRules = {
    pet_name: {
      rules: [{
        required: true,
        errorMessage: "请输入宠物的昵称"
      }]
    },
    pet_kind_id: {
      rules: [{
        required: true,
        errorMessage: "请选择宠物品种"
      }]
    },
    pet_sterilize: {
      rules: [{
        required: true,
        errorMessage: "请选择绝育状态"
      }]
    },
    pet_sex: {
      rules: [{
        required: true,
        errorMessage: "请选择性别",
        validateFunction: function(rule, value, data, callback) {
          if (value.length === 0) {
            callback("请至少选择一个性别");
          } else {
            callback();
          }
        }
      }]
    },
    pet_birthday: {
      rules: [{
        required: true,
        errorMessage: "请选择出生日期",
        validateFunction: function(rule, value, data, callback) {
          if (!value) {
            callback("请选择出生日期");
          } else {
            callback();
          }
        }
      }]
    }
  };
  const _sfc_main$8 = {
    __name: "EditPet",
    setup(__props) {
      const store = useUserStore();
      const form = vue.ref();
      const formData = vue.ref({
        pet_name: "",
        pet_kind_id: "",
        pet_sex: 1,
        pet_avatar: "",
        pet_sterilize: 1,
        pet_birthday: "",
        user_id: store.user.user_id
      });
      const kinds = vue.ref([]);
      const sexs = vue.ref([
        {
          text: "男",
          value: 0
        },
        {
          text: "女",
          value: 1
        },
        {
          text: "保密",
          value: 2
        }
      ]);
      const sterilize = vue.ref([
        {
          value: 0,
          text: "未绝育"
        },
        {
          value: 1,
          text: "绝育"
        }
      ]);
      const imageValue = vue.computed(() => {
        if (!formData.value.pet_avatar && formData.value.pet_avatar === "") {
          return {};
        }
        return {
          name: formData.value.pet_avatar,
          extname: "png",
          url: `${devUrl}/pet_uploads/${formData.value.pet_avatar}`
        };
      });
      const getKind = async () => {
        const result = await getKindPetApi();
        if (result.code === 200) {
          kinds.value = result.data.map((item) => {
            return {
              value: item.pet_kind_id,
              text: item.pet_kind
            };
          });
        }
      };
      const select = async (e2) => {
        if (e2.errMsg) {
          uni.showToast({
            title: "请选择正确的图片格式",
            icon: "none"
          });
          return;
        }
        let token = null;
        token = uni.getStorageSync("token");
        const { data } = await uni.uploadFile({
          url: devUrl + "/pet/upload",
          filePath: e2.tempFilePaths[0],
          name: "pet_avatar",
          fileType: "image",
          header: {
            Authorization: token
          }
        });
        const result = JSON.parse(data);
        if (result.code === 200) {
          formData.value.pet_avatar = result.data.pet_avatar;
          uni.showToast({
            title: "上传成功",
            icon: "none"
          });
        } else {
          uni.showToast({
            title: result.message,
            icon: "none"
          });
        }
      };
      const savePet = async () => {
        try {
          await form.value.validate();
          const result = await updatePetApi(formData.value);
          if (result.code === 200) {
            uni.showToast({
              title: result.message
            });
            uni.navigateBack({
              delta: 1,
              animationType: "slide-out-left",
              animationDuration: 1e3
            });
            uni.$emit("renderPet");
          } else {
            uni.showToast({
              title: "添加失败"
            });
          }
          formatAppLog("log", "at pages/my/EditPet.vue:176", result);
        } catch (e2) {
          formatAppLog("log", "at pages/my/EditPet.vue:178", e2);
        }
      };
      const delPet = async (item) => {
        const result = await delPetApi(formData.value.pet_id);
        if (result.code === 200) {
          uni.showToast({
            title: "删除成功"
          });
          uni.navigateBack({
            delta: 1,
            animationType: "slide-out-left",
            animationDuration: 1e3
          });
          uni.$emit("renderPet");
        } else {
          uni.showToast({
            title: "删除失败",
            icon: "none"
          });
        }
      };
      const showDel = vue.computed(() => {
        return formData.value.pet_id ? false : true;
      });
      const end = vue.computed(() => {
        const now2 = /* @__PURE__ */ new Date();
        const year = now2.getFullYear();
        const month = String(now2.getMonth() + 1).padStart(2, "0");
        const date = String(now2.getDate()).padStart(2, "0");
        return `${year}-${month}-${date}`;
      });
      vue.onMounted(() => {
        getKind();
      });
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            if (decodeURIComponent(i2) === "pet_sex" || decodeURIComponent(i2) === "pet_sterilize")
              obj[decodeURIComponent(i2)] = parseInt(decodeURIComponent(query[i2]));
            else
              obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          formData.value = obj;
        }
      });
      onReady(() => {
        form.value.setRules(petRules);
      });
      return (_ctx, _cache) => {
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0$1);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$4);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_2);
        const _component_uni_data_select = resolveEasycom(vue.resolveDynamicComponent("uni-data-select"), __easycom_3);
        const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_4);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1$1);
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_card, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_forms, {
                  "label-align": "left",
                  modelValue: formData.value,
                  ref_key: "form",
                  ref: form
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_uni_forms_item, { class: "pet-picture" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_file_picker, {
                          limit: "1",
                          modelValue: vue.unref(imageValue),
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(imageValue) ? imageValue.value = $event : null),
                          fileMediatype: "image",
                          "auto-upload": false,
                          onSelect: select,
                          "return-type": "object"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_uni_forms_item, {
                      label: "昵称:",
                      name: "pet_name"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_easyinput, {
                          placeholder: "宠物的昵称",
                          modelValue: formData.value.pet_name,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.pet_name = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_uni_forms_item, {
                      label: "品种:",
                      name: "pet_kind_id"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_data_select, {
                          modelValue: formData.value.pet_kind_id,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.pet_kind_id = $event),
                          localdata: kinds.value,
                          onChange: _ctx.change
                        }, null, 8, ["modelValue", "localdata", "onChange"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_uni_forms_item, {
                      label: "绝育:",
                      name: "pet_sterilize"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_data_select, {
                          modelValue: formData.value.pet_sterilize,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.pet_sterilize = $event),
                          localdata: sterilize.value
                        }, null, 8, ["modelValue", "localdata"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_uni_forms_item, {
                      label: "性别:",
                      name: "pet_sex"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_data_checkbox, {
                          modelValue: formData.value.pet_sex,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.pet_sex = $event),
                          localdata: sexs.value
                        }, null, 8, ["modelValue", "localdata"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_uni_forms_item, {
                      label: "出生:",
                      name: "pet_birthday"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_datetime_picker, {
                          type: "date",
                          "clear-icon": false,
                          modelValue: formData.value.pet_birthday,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.pet_birthday = $event),
                          ref: "date",
                          end: vue.unref(end)
                        }, null, 8, ["modelValue", "end"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "button-group" }, [
              vue.createElementVNode("button", {
                type: "warn",
                class: "op-btn",
                onClick: delPet,
                disabled: vue.unref(showDel)
              }, "删除", 8, ["disabled"]),
              vue.createElementVNode("button", {
                type: "primary",
                class: "op-btn",
                onClick: savePet
              }, "保存")
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyEditPet = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a65bf837"], ["__file", "D:/graduationProject/pet-front-end/pages/my/EditPet.vue"]]);
  const getCurrentTimeFormatted = () => {
    const now2 = /* @__PURE__ */ new Date();
    const year = now2.getFullYear();
    const month = String(now2.getMonth() + 1).padStart(2, "0");
    const day = String(now2.getDate()).padStart(2, "0");
    const hours = String(now2.getHours()).padStart(2, "0");
    const minutes = String(now2.getMinutes()).padStart(2, "0");
    const seconds = String(now2.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  const confirmOrder = async (data) => {
    return await request("/confirmOrder", data, {
      method: "post"
    });
  };
  const useOrderStore = defineStore("order", () => {
    const orderList = vue.ref({});
    const updateOrder = (data) => {
      orderList.value = data;
    };
    const goodList = vue.computed(() => {
      formatAppLog("log", "at stores/order.js:18", orderList.value.goodList);
      return orderList.value.goodList;
    });
    const goodTotalNumber = vue.computed(() => {
      let total = 0;
      orderList.value.goodList.forEach((item) => {
        total += item.addNum;
      });
      return total;
    });
    const goodSumPrice = vue.computed(() => {
      let price = 0;
      orderList.value.goodList.forEach((item) => {
        price += item.addNum * item.good_price;
      });
      return parseFloat(price.toFixed(2));
    });
    return {
      orderList,
      updateOrder,
      goodTotalNumber,
      goodSumPrice,
      goodList
    };
  }, {
    unistorage: true
  });
  const _sfc_main$7 = {
    __name: "OrderService",
    setup(__props) {
      const datetimesingle = vue.ref();
      const isReserve = vue.ref(false);
      const start = vue.computed(() => {
        const now2 = /* @__PURE__ */ new Date();
        const year = now2.getFullYear();
        const month = String(now2.getMonth() + 1).padStart(2, "0");
        const date = String(now2.getDate()).padStart(2, "0");
        return `${year}-${month}-${date}`;
      });
      const changeLog = (e2) => {
        formatAppLog("log", "at pages/home/OrderService.vue:140", "change事件:", e2);
      };
      const carStore = useCarStore();
      const userStore = useUserStore();
      const orderStore = useOrderStore();
      const address = vue.ref({});
      const showAddress = vue.ref(true);
      const orderTime = vue.ref("");
      const orderNumber = vue.ref(0);
      const getDefaultAddress = async () => {
        const result = await getDefaultAddressAPI(userStore.user.user_id);
        if (result.code === 1e3) {
          showAddress.value = true;
          address.value = result.data;
        } else {
          showAddress.value = false;
        }
      };
      const getOrderNum = () => {
        const now2 = /* @__PURE__ */ new Date();
        const year = now2.getFullYear();
        const month = String(now2.getMonth() + 1).padStart(2, "0");
        const day = String(now2.getDate()).padStart(2, "0");
        orderNumber.value = Number(
          year + month + day + (Math.floor(Math.random() * (9999 - 1e3 + 1)) + 1e3)
        );
      };
      const selectAddress = () => {
        uni.navigateTo({
          url: "/pages/home/ComfirmAddress"
        });
      };
      const payHandler = async () => {
        if (!address.value) {
          return uni.showToast({ title: "请检查您的地址", icon: "none" });
        }
        if (!carStore.checkOutCar) {
          return uni.showToast({ title: "请检查您的商品", icon: "none" });
        }
        let obj = {
          shipping_address: address.value.address_area + address.value.address_details,
          //地址
          address_name: address.value.address_name,
          address_number: address.value.address_phone,
          goodList: carStore.checkOutCar,
          //商品数据
          user_id: userStore.user.user_id,
          //用户id
          create_date: orderTime.value,
          order_number: orderNumber.value
        };
        const result = await confirmOrder(obj);
        if (result.code === 2e3) {
          orderStore.updateOrder(result.data);
          const good_id_arr = orderStore.orderList.goodList.map((item) => item.good_id);
          if (good_id_arr.length > 0) {
            good_id_arr.forEach((item) => {
              carStore.deleteGoods(item);
            });
          }
          uni.showToast({ title: "订单确认成功", icon: "none" });
          uni.navigateTo({
            url: "/pages/car/pay"
          });
        } else {
          return uni.showToast({ title: "确认订单失败,请联系客服", icon: "none" });
        }
      };
      vue.onMounted(() => {
        orderTime.value = getCurrentTimeFormatted();
        getOrderNum();
        getDefaultAddress();
      });
      onLoad((query) => {
        if (Object.keys(query).length !== 0) {
          let obj = {};
          for (let i2 in query) {
            obj[decodeURIComponent(i2)] = decodeURIComponent(query[i2]);
          }
          isReserve.value = obj.isReserve === "true";
          if (!isReserve.value) {
            datetimesingle.value = /* @__PURE__ */ new Date();
          }
        }
      });
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        const _component_u_icon = vue.resolveComponent("u-icon");
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "pay-page" }, [
          vue.createCommentVNode(" 展示默认地址 "),
          vue.createElementVNode("view", {
            class: "order_address",
            onClick: selectAddress
          }, [
            vue.createElementVNode("view", { class: "address_box" }, [
              vue.createElementVNode("view", { class: "weizhi_icon" }, [
                vue.createVNode(_component_icon_base, {
                  type: "dizhiguanli",
                  color: "#2979FF",
                  size: 50
                })
              ]),
              vue.createCommentVNode(" 编辑地址 "),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "center" }, [
                  vue.createCommentVNode(" 默认 "),
                  address.value.address_default == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "moren"
                  }, [
                    vue.createVNode(_component_icon_base, {
                      type: "moren",
                      color: "#2979FF",
                      size: 100
                    })
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "name" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "text1" },
                      vue.toDisplayString(address.value.address_name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "phones" },
                      vue.toDisplayString(address.value.address_phone),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "address_name" },
                    vue.toDisplayString(address.value.address_area) + vue.toDisplayString(address.value.address_details),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          !showAddress.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "address-box"
          }, [
            vue.createElementVNode("view", { class: "address-icon" }, [
              vue.createVNode(_component_u_icon, {
                name: "plus-circle",
                color: "#999",
                size: "36rpx"
              })
            ]),
            vue.createElementVNode("view", { class: "address-text" }, "添加收货地址")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 商品信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "已选择的服务")
            ]),
            vue.createElementVNode("view", { class: "shopping-list" }, [
              vue.createCommentVNode(" 选中的商品  "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(carStore).checkOutCar, (c2, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "shopping-item",
                    key: c2.good_id
                  }, [
                    vue.createElementVNode("view", { class: "shopping-img" }, [
                      vue.createElementVNode("image", {
                        src: `${vue.unref(devUrl)}/good_uploads/${c2.good_image}`
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "shopping-info" }, [
                      vue.createElementVNode("view", { class: "shopping-hd" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-title" },
                          vue.toDisplayString(c2.good_category.good_category_name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "￥" + vue.toDisplayString((c2.good_price * c2.addNum).toFixed(2)),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "x" + vue.toDisplayString(c2.addNum),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "shopping-text" },
                        vue.toDisplayString(c2.good_name),
                        1
                        /* TEXT */
                      )
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" 服务时间 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "上门服务时间")
            ]),
            vue.createCommentVNode(" 如果是点击立即上门，展示为立即上门，如果点击预约，展示时间选择器 "),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_uni_datetime_picker, {
                type: "datetime",
                modelValue: datetimesingle.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datetimesingle.value = $event),
                onChange: changeLog,
                start: vue.unref(start),
                disabled: !isReserve.value
              }, null, 8, ["modelValue", "start", "disabled"])
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "订单信息")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "订单编号"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(orderNumber.value),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "支付方式"),
              vue.createElementVNode("view", { class: "cell-right" }, "线下支付")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "下单时间"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(orderTime.value),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "footer-box" }, [
            vue.createElementVNode("view", { class: "footer-content" }, [
              vue.createElementVNode("view", { class: "price-box" }, [
                vue.createTextVNode(" 合计:"),
                vue.createElementVNode("view", { class: "price-text" }, [
                  vue.createVNode(_component_u_icon, {
                    name: "rmb",
                    bold: true,
                    color: "rgb(245, 54, 22)",
                    size: "32rpx"
                  }),
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(carStore).sumPrice),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", {
                class: "print-item-entry",
                style: { "flex": "2" }
              }, [
                vue.createElementVNode("view", {
                  class: "select-box",
                  style: { "padding": "24rpx 60rpx", "border-radius": "14rpx" },
                  onClick: payHandler
                }, [
                  vue.createElementVNode("view", { class: "selecet-text" }, "确认订单")
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesHomeOrderService = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-03b8f559"], ["__file", "D:/graduationProject/pet-front-end/pages/home/OrderService.vue"]]);
  const _sfc_main$6 = {
    __name: "ConfirmOrder",
    setup(__props) {
      const carStore = useCarStore();
      const userStore = useUserStore();
      const orderStore = useOrderStore();
      const address = vue.ref({});
      const showAddress = vue.ref(true);
      const orderTime = vue.ref("");
      const orderNumber = vue.ref(0);
      const getDefaultAddress = async () => {
        const result = await request("/address/default", { user_id: userStore.user.user_id });
        if (result.code === 1e3) {
          showAddress.value = true;
          address.value = result.data;
        } else {
          showAddress.value = false;
        }
      };
      const getOrderNum = () => {
        const now2 = /* @__PURE__ */ new Date();
        const year = now2.getFullYear();
        const month = String(now2.getMonth() + 1).padStart(2, "0");
        const day = String(now2.getDate()).padStart(2, "0");
        orderNumber.value = Number(
          year + month + day + (Math.floor(Math.random() * (9999 - 1e3 + 1)) + 1e3)
        );
      };
      const selectAddress = () => {
        uni.navigateTo({
          url: "/pages/car/ConfirmAddress"
        });
      };
      const updateAddress = (obj) => {
        address.value = obj;
      };
      const payHandler = async () => {
        if (!address.value) {
          return uni.showToast({ title: "请检查您的地址", icon: "none" });
        }
        if (!carStore.checkOutCar) {
          return uni.showToast({ title: "请检查您的商品", icon: "none" });
        }
        let obj = {
          shipping_address: address.value.address_area + address.value.address_details,
          //地址
          address_name: address.value.address_name,
          address_number: address.value.address_phone,
          goodList: carStore.checkOutCar,
          //商品数据
          user_id: userStore.user.user_id,
          //用户id
          create_date: orderTime.value,
          order_number: orderNumber.value
        };
        const result = await confirmOrder(obj);
        if (result.code === 2e3) {
          orderStore.updateOrder(result.data);
          const good_id_arr = orderStore.orderList.goodList.map((item) => item.good_id);
          if (good_id_arr.length > 0) {
            good_id_arr.forEach((item) => {
              carStore.deleteGoods(item);
            });
          }
          uni.showToast({ title: "订单确认成功", icon: "none" });
          uni.navigateTo({
            url: "/pages/car/pay"
          });
        } else {
          return uni.showToast({ title: "确认订单失败,请联系客服", icon: "none" });
        }
      };
      vue.onMounted(() => {
        orderTime.value = getCurrentTimeFormatted();
        getOrderNum();
        getDefaultAddress();
      });
      onLoad(() => {
        uni.$on("confirmAddress", updateAddress);
      });
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        const _component_u_icon = vue.resolveComponent("u-icon");
        return vue.openBlock(), vue.createElementBlock("view", { class: "pay-page" }, [
          vue.createCommentVNode(" 展示默认地址 "),
          vue.createElementVNode("view", {
            class: "order_address",
            onClick: selectAddress
          }, [
            vue.createElementVNode("view", { class: "address_box" }, [
              vue.createElementVNode("view", { class: "weizhi_icon" }, [
                vue.createVNode(_component_icon_base, {
                  type: "dizhiguanli",
                  color: "#2979FF",
                  size: 50
                })
              ]),
              vue.createCommentVNode(" 编辑地址 "),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "center" }, [
                  vue.createCommentVNode(" 默认 "),
                  address.value.address_default == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "moren"
                  }, [
                    vue.createVNode(_component_icon_base, {
                      type: "moren",
                      color: "#2979FF",
                      size: 100
                    })
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "name" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "text1" },
                      vue.toDisplayString(address.value.address_name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "phones" },
                      vue.toDisplayString(address.value.address_phone),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "address_name" },
                    vue.toDisplayString(address.value.address_area) + vue.toDisplayString(address.value.address_details),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          !showAddress.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "address-box"
          }, [
            vue.createElementVNode("view", { class: "address-icon" }, [
              vue.createVNode(_component_u_icon, {
                name: "plus-circle",
                color: "#999",
                size: "36rpx"
              })
            ]),
            vue.createElementVNode("view", { class: "address-text" }, "添加收货地址")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 商品信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "商品信息"),
              vue.createElementVNode(
                "view",
                { class: "lable-number" },
                "共" + vue.toDisplayString(vue.unref(carStore).checkOutNum) + "个",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "shopping-list" }, [
              vue.createCommentVNode(" 选中的商品  "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(carStore).checkOutCar, (c2, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "shopping-item",
                    key: c2.good_id
                  }, [
                    vue.createElementVNode("view", { class: "shopping-img" }, [
                      vue.createElementVNode("image", {
                        src: `${vue.unref(devUrl)}/good_uploads/${c2.good_image}`
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "shopping-info" }, [
                      vue.createElementVNode("view", { class: "shopping-hd" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-title" },
                          vue.toDisplayString(c2.good_category.good_category_name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "￥" + vue.toDisplayString((c2.good_price * c2.addNum).toFixed(2)),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "x" + vue.toDisplayString(c2.addNum),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "shopping-text" },
                        vue.toDisplayString(c2.good_name),
                        1
                        /* TEXT */
                      )
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "邮费"),
              vue.createElementVNode("view", { class: "cell-right" }, "包邮")
            ]),
            vue.createElementVNode("view", { class: "end-price" }, [
              vue.createElementVNode("view", { class: "end-label" }, "实付款"),
              vue.createElementVNode(
                "view",
                { class: "end-number" },
                "￥" + vue.toDisplayString(vue.unref(carStore).sumPrice),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "订单信息")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "订单编号"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(orderNumber.value),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "支付方式"),
              vue.createElementVNode("view", { class: "cell-right" }, "线上支付")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "下单时间"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(orderTime.value),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "footer-box" }, [
            vue.createElementVNode("view", { class: "footer-content" }, [
              vue.createElementVNode("view", { class: "price-box" }, [
                vue.createTextVNode(" 合计:"),
                vue.createElementVNode("view", { class: "price-text" }, [
                  vue.createVNode(_component_u_icon, {
                    name: "rmb",
                    bold: true,
                    color: "rgb(245, 54, 22)",
                    size: "32rpx"
                  }),
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(carStore).sumPrice),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", {
                class: "print-item-entry",
                style: { "flex": "2" }
              }, [
                vue.createElementVNode("view", {
                  class: "select-box",
                  style: { "padding": "24rpx 60rpx", "border-radius": "14rpx" },
                  onClick: payHandler
                }, [
                  vue.createElementVNode("view", { class: "selecet-text" }, "确认订单")
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesCarConfirmOrder = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7bed0b62"], ["__file", "D:/graduationProject/pet-front-end/pages/car/ConfirmOrder.vue"]]);
  const rules = {
    phone: {
      rules: [
        {
          required: true,
          errorMessage: "请填写电话"
        },
        {
          validateFunction: function(rule, value, data, callback) {
            return new Promise((resolve, reject) => {
              if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value)) {
                reject(new Error("请输入正确的手机号"));
              } else {
                resolve();
              }
            });
          }
        }
      ]
    },
    // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
    password: {
      rules: [
        {
          required: true,
          errorMessage: "请填写密码"
        },
        {
          validateFunction: function(rule, value, data, callback) {
            return new Promise((resolve, reject) => {
              if (!/^[a-zA-Z]\w{5,17}$/.test(value)) {
                reject(new Error("密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线"));
              } else {
                resolve();
              }
            });
          }
        }
      ]
    }
  };
  const _sfc_main$5 = {
    __name: "login",
    setup(__props) {
      const store = useUserStore();
      const formData = vue.ref({
        phone: "",
        password: ""
      });
      const form = vue.ref();
      const login = async () => {
        uni.showLoading();
        try {
          await form.value.validate();
          const result = await loginApi(formData.value);
          formatAppLog("log", "at pages/login/login.vue:59", result);
          uni.showToast({
            title: result.message
          });
          if (result.code === 200) {
            store.updateUser(result.data.user);
            store.updateToken(result.data.token);
            formData.value = {
              phone: "",
              password: ""
            };
            uni.switchTab({
              url: "/pages/home/index"
            });
          }
        } catch (e2) {
          formatAppLog("log", "at pages/login/login.vue:75", e2);
        } finally {
          uni.hideLoading();
        }
      };
      const register = () => {
        uni.navigateTo({
          url: "/pages/login/register"
        });
      };
      onReady(() => {
        form.value.setRules(rules);
      });
      return (_ctx, _cache) => {
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$4);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "100vh", "background": "#fff" } }, [
          vue.createElementVNode("view", { class: "img-a" }, [
            vue.createElementVNode("view", { class: "t-b" }, [
              vue.createTextVNode(" 您好， "),
              vue.createElementVNode("br"),
              vue.createTextVNode(" 欢迎使用，爱宠之家 ")
            ])
          ]),
          vue.createElementVNode("view", {
            class: "login-view",
            style: {}
          }, [
            vue.createElementVNode("view", { class: "t-login" }, [
              vue.createVNode(_component_uni_forms, {
                class: "cl",
                modelValue: formData.value,
                ref_key: "form",
                ref: form
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "t-a" }, [
                    vue.createElementVNode("text", { class: "txt" }, "手机号"),
                    vue.createVNode(_component_uni_forms_item, { name: "phone" }, {
                      default: vue.withCtx(() => [
                        vue.withDirectives(vue.createElementVNode(
                          "input",
                          {
                            type: "number",
                            name: "phone",
                            placeholder: "请输入您的手机号",
                            maxlength: "11",
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.phone = $event)
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [vue.vModelText, formData.value.phone]
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("view", { class: "t-a" }, [
                    vue.createElementVNode("text", { class: "txt" }, "密码"),
                    vue.createVNode(_component_uni_forms_item, { name: "password" }, {
                      default: vue.withCtx(() => [
                        vue.withDirectives(vue.createElementVNode(
                          "input",
                          {
                            type: "password",
                            name: "password",
                            maxlength: "18",
                            placeholder: "请输入您的密码",
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.password = $event)
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [vue.vModelText, formData.value.password]
                        ]),
                        vue.createCommentVNode(" 后面在补眼睛 ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("button", { onClick: login }, "登录"),
                  vue.createElementVNode("view", {
                    class: "reg",
                    onClick: register
                  }, " 注册 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "D:/graduationProject/pet-front-end/pages/login/login.vue"]]);
  const _sfc_main$4 = {
    __name: "register",
    setup(__props) {
      const formData = vue.ref({
        phone: "",
        password: ""
      });
      const form = vue.ref();
      const register = async () => {
        uni.showLoading();
        try {
          await form.value.validate();
          const result = await registerApi(formData.value);
          uni.showToast({
            title: result.message
          });
          if (result.code === 200) {
            formData.value = {
              phone: "",
              password: ""
            };
            setTimeout(() => {
              uni.navigateBack({
                delta: 1,
                animationType: "slide-out-left",
                animationDuration: 1e3
              });
            }, 1e3);
            return;
          }
        } catch (e2) {
          formatAppLog("error", "at pages/login/register.vue:78", e2);
        } finally {
          uni.hideLoading();
        }
      };
      onReady(() => {
        form.value.setRules(rules);
      });
      return (_ctx, _cache) => {
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_0$4);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "100vh", "background": "#fff" } }, [
          vue.createElementVNode("view", { class: "img-a" }, [
            vue.createElementVNode("view", { class: "t-b" }, [
              vue.createTextVNode(" 您好， "),
              vue.createElementVNode("br"),
              vue.createTextVNode(" 欢迎使用，爱宠之家 ")
            ])
          ]),
          vue.createElementVNode("view", {
            class: "login-view",
            style: {}
          }, [
            vue.createElementVNode("view", { class: "t-login" }, [
              vue.createVNode(_component_uni_forms, {
                class: "cl",
                modelValue: formData.value,
                ref_key: "form",
                ref: form
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "t-a" }, [
                    vue.createElementVNode("text", { class: "txt" }, "手机号"),
                    vue.createVNode(_component_uni_forms_item, { name: "phone" }, {
                      default: vue.withCtx(() => [
                        vue.withDirectives(vue.createElementVNode(
                          "input",
                          {
                            type: "number",
                            name: "phone",
                            placeholder: "请输入您的手机号",
                            maxlength: "11",
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.phone = $event)
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [vue.vModelText, formData.value.phone]
                        ])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("view", { class: "t-a" }, [
                    vue.createElementVNode("text", { class: "txt" }, "密码"),
                    vue.createVNode(_component_uni_forms_item, { name: "password" }, {
                      default: vue.withCtx(() => [
                        vue.withDirectives(vue.createElementVNode(
                          "input",
                          {
                            type: "password",
                            name: "password",
                            maxlength: "18",
                            placeholder: "请输入您的密码",
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.password = $event)
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [vue.vModelText, formData.value.password]
                        ]),
                        vue.createCommentVNode(" 后面在补眼睛 ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createElementVNode("button", { onClick: register }, "注册")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "D:/graduationProject/pet-front-end/pages/login/register.vue"]]);
  const _sfc_main$3 = {
    __name: "pay",
    setup(__props) {
      const orderStore = useOrderStore();
      const payHandler = () => {
      };
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$b);
        const _component_u_icon = vue.resolveComponent("u-icon");
        return vue.openBlock(), vue.createElementBlock("view", { class: "pay-page" }, [
          vue.createCommentVNode(" 展示默认地址 "),
          vue.createElementVNode("view", {
            class: "order_address",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.selectAddress && _ctx.selectAddress(...args))
          }, [
            vue.createElementVNode("view", { class: "address_box" }, [
              vue.createElementVNode("view", { class: "weizhi_icon" }, [
                vue.createVNode(_component_icon_base, {
                  type: "dizhiguanli",
                  color: "#2979FF",
                  size: 50
                })
              ]),
              vue.createCommentVNode(" 编辑地址 "),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "center" }, [
                  vue.createElementVNode("view", { class: "name" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "text1" },
                      vue.toDisplayString(vue.unref(orderStore).orderList.address_name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "phones" },
                      vue.toDisplayString(vue.unref(orderStore).orderList.address_phone),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "address_name" },
                    vue.toDisplayString(vue.unref(orderStore).orderList.shipping_address),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 商品信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "商品信息"),
              vue.createElementVNode(
                "view",
                { class: "lable-number" },
                "共" + vue.toDisplayString(vue.unref(orderStore).goodTotalNumber) + "个",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "shopping-list" }, [
              vue.createCommentVNode(" 选中的商品  "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(orderStore).goodList, (good, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "shopping-item",
                    key: good.good_id
                  }, [
                    vue.createElementVNode("view", { class: "shopping-img" }, [
                      vue.createElementVNode("image", {
                        src: `${vue.unref(devUrl)}/good_uploads/${good.good_image}`
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "shopping-info" }, [
                      vue.createElementVNode("view", { class: "shopping-hd" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-title" },
                          vue.toDisplayString(good.good_category.good_category_name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "￥" + vue.toDisplayString((good.good_price * good.addNum).toFixed(2)),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "shopping-price" },
                          "x" + vue.toDisplayString(good.addNum),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "shopping-text" },
                        vue.toDisplayString(good.good_name),
                        1
                        /* TEXT */
                      )
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "邮费"),
              vue.createElementVNode("view", { class: "cell-right" }, "包邮")
            ]),
            vue.createElementVNode("view", { class: "end-price" }, [
              vue.createElementVNode("view", { class: "end-label" }, "实付款"),
              vue.createElementVNode(
                "view",
                { class: "end-number" },
                "￥" + vue.toDisplayString(vue.unref(orderStore).goodSumPrice),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "shopping-box" }, [
            vue.createElementVNode("view", { class: "shopping-top" }, [
              vue.createElementVNode("view", { class: "lable-title" }, "订单信息")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "订单编号"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(vue.unref(orderStore).orderList.order_number),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "支付方式"),
              vue.createElementVNode("view", { class: "cell-right" }, "线上支付")
            ]),
            vue.createElementVNode("view", { class: "shopping-top cell-list" }, [
              vue.createElementVNode("view", { class: "cell-left" }, "下单时间"),
              vue.createElementVNode(
                "view",
                { class: "cell-right" },
                vue.toDisplayString(vue.unref(orderStore).orderList.create_date),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode("view", { class: "footer-box" }, [
            vue.createElementVNode("view", { class: "footer-content" }, [
              vue.createElementVNode("view", { class: "price-box" }, [
                vue.createTextVNode(" 合计:"),
                vue.createElementVNode("view", { class: "price-text" }, [
                  vue.createVNode(_component_u_icon, {
                    name: "rmb",
                    bold: true,
                    color: "rgb(245, 54, 22)",
                    size: "32rpx"
                  }),
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(orderStore).goodSumPrice),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", {
                class: "print-item-entry",
                style: { "flex": "2" }
              }, [
                vue.createElementVNode("view", {
                  class: "select-box",
                  style: { "padding": "24rpx 60rpx", "border-radius": "14rpx" },
                  onClick: payHandler
                }, [
                  vue.createElementVNode("view", { class: "selecet-text" }, "支付")
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesCarPay = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f5acff60"], ["__file", "D:/graduationProject/pet-front-end/pages/car/pay.vue"]]);
  const _sfc_main$2 = {
    __name: "ComfirmAddress",
    setup(__props) {
      const useStore = useUserStore();
      const addressList = vue.ref([]);
      const getAddress = async () => {
        const result = await getAddressApi(useStore.user.user_id);
        if (result.code === 1e3) {
          addressList.value = result.data;
        }
        formatAppLog("log", "at pages/home/ComfirmAddress.vue:31", result);
      };
      onLoad(() => {
        getAddress();
      });
      const selectTap = (item) => {
        uni.$emit("confirmAddress", item);
        uni.navigateBack({
          delta: 1
        });
      };
      const editAddess = (id) => {
        formatAppLog("log", "at pages/home/ComfirmAddress.vue:45", "edit item id:" + id);
      };
      const addAddess = () => {
        formatAppLog("log", "at pages/home/ComfirmAddress.vue:48", "tap add new Address");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "address-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(addressList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "a-address",
                  key: item.address_id
                }, [
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["left-text", item.isDefault ? "active" : ""]),
                    onClick: ($event) => selectTap(item)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "name-tel" },
                      vue.toDisplayString(item.address_name) + " " + vue.toDisplayString(item.address_phone),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "address-box" },
                      vue.toDisplayString(item.address_area) + vue.toDisplayString(item.address_details),
                      1
                      /* TEXT */
                    )
                  ], 10, ["onClick"]),
                  vue.createElementVNode("view", {
                    class: "right-edit",
                    onClick: ($event) => editAddess(item.id)
                  }, null, 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "bottom-box" }, [
            vue.createElementVNode("view", {
              class: "add-btn",
              onClick: addAddess
            }, "继续付款")
          ])
        ]);
      };
    }
  };
  const PagesHomeComfirmAddress = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cddc6d94"], ["__file", "D:/graduationProject/pet-front-end/pages/home/ComfirmAddress.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      const options = vue.ref([
        {
          title: "品种",
          isActive: true
        },
        {
          title: "性别",
          isActive: false
        },
        {
          title: "年龄",
          isActive: false
        }
      ]);
      const handlerClick = () => {
      };
      const trigger = () => {
        formatAppLog("log", "at pages/adopt/index.vue:48", 1);
      };
      return (_ctx, _cache) => {
        const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_0$c);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "top" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(options.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "option",
                    key: index,
                    onClick: handlerClick
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass({ active: item.isActive })
                      },
                      vue.toDisplayString(item.title),
                      3
                      /* TEXT, CLASS */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "main" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(4, (i2) => {
                  return vue.createElementVNode("view", { class: "pet-adopt" }, [
                    vue.createCommentVNode(" 图片 "),
                    vue.createElementVNode("img", {
                      src: vue.unref(devUrl) + "/good_uploads/dongganglingshi.png",
                      alt: "",
                      class: "pet-img"
                    }, null, 8, ["src"]),
                    vue.createCommentVNode(" 标题 "),
                    vue.createElementVNode("view", { class: "title" }, " 德文卷毛，求领养~"),
                    vue.createCommentVNode(" 品种，年龄，发布时间 "),
                    vue.createElementVNode("view", { class: "describe" }, [
                      vue.createCommentVNode(" 宠物信息 "),
                      vue.createElementVNode("view", { class: "" }, "德文卷毛|2个月"),
                      vue.createElementVNode("view", { class: "" }, " 1天前 ")
                    ])
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            vue.createVNode(
              _component_uni_fab,
              {
                ref: "fab",
                horizontal: "right",
                vertical: "bottom",
                popMenu: false,
                onTrigger: trigger
              },
              null,
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesAdoptIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-65579be7"], ["__file", "D:/graduationProject/pet-front-end/pages/adopt/index.vue"]]);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/messages/index", PagesMessagesIndex);
  __definePage("pages/shop/index", PagesShopIndex);
  __definePage("pages/category/index", PagesCategoryIndex);
  __definePage("pages/category/categoryproductlist", PagesCategoryCategoryproductlist);
  __definePage("pages/category/productdetail", PagesCategoryProductdetail);
  __definePage("pages/car/car", PagesCarCar);
  __definePage("pages/my/Address", PagesMyAddress);
  __definePage("pages/my/EditAddress", PagesMyEditAddress);
  __definePage("pages/my/EditPerson", PagesMyEditPerson);
  __definePage("pages/home/DetailService", PagesHomeDetailService);
  __definePage("pages/my/OrderDetail", PagesMyOrderDetail);
  __definePage("pages/community/index", PagesCommunityIndex);
  __definePage("pages/community/DetailArticle", PagesCommunityDetailArticle);
  __definePage("pages/messages/Chat", PagesMessagesChat);
  __definePage("pages/community/PublishContent", PagesCommunityPublishContent);
  __definePage("pages/car/ConfirmAddress", PagesCarConfirmAddress);
  __definePage("pages/my/EditPet", PagesMyEditPet);
  __definePage("pages/home/OrderService", PagesHomeOrderService);
  __definePage("pages/car/ConfirmOrder", PagesCarConfirmOrder);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/register", PagesLoginRegister);
  __definePage("pages/car/pay", PagesCarPay);
  __definePage("pages/home/ComfirmAddress", PagesHomeComfirmAddress);
  __definePage("pages/adopt/index", PagesAdoptIndex);
  const whiteList = [
    "/pages/login/login",
    "/pages/login/register",
    ,
    "/pages/home/index",
    "/pages/shop/index",
    "/pages/category/index",
    "/pages/category/categoryproductlist",
    "/pages/category/productdetail",
    "/pages/home/DetailService",
    "/pages/detail/detail",
    "/pages/community/PublishContent"
  ];
  const loginPage = "/pages/login/login";
  function initPermission() {
    const list = ["navigateTo", "reLaunch", "switchTab"];
    list.forEach((item) => {
      uni.addInterceptor(item, {
        invoke(e2) {
          let token = null;
          token = uni.getStorageSync("token");
          let url = e2.url.split("?")[0];
          let notNeed = whiteList.includes(url);
          if (notNeed) {
            return e2;
          } else {
            if (!token) {
              uni.showToast({
                title: "请先登录",
                duration: 2e3,
                icon: "none"
              });
              uni.navigateTo({
                url: loginPage
              });
              return false;
            } else {
              return e2;
            }
          }
        },
        fail(err) {
          formatAppLog("log", "at utils/permission.js:45", err);
        }
      });
    });
  }
  const _sfc_main = {
    onLaunch: function() {
      initPermission();
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/graduationProject/pet-front-end/App.vue"]]);
  function get(state, path) {
    return path.reduce((obj, p2) => {
      return obj == null ? void 0 : obj[p2];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p2) => {
      if (!/^(__proto__)$/.test(p2)) {
        return obj[p2] = obj[p2] || {};
      } else
        return {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(
        substate,
        pathArray,
        get(baseState, pathArray)
      );
    }, {});
  }
  const isObject = (v2) => typeof v2 === "object" && v2 !== null;
  const normalizeOptions = (options, globalOptions) => {
    options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(t2, p2, r2) {
        return Reflect.get(t2, p2, r2) || Reflect.get(globalOptions, p2, r2);
      }
    });
  };
  function passage(key) {
    return key;
  }
  function createUnistorage(globalOptions = {}) {
    const { key: normalizeKey = passage } = globalOptions || {};
    if (globalOptions == null ? void 0 : globalOptions.key) {
      delete globalOptions.key;
    }
    return function(ctx) {
      {
        const { store, options } = ctx;
        let { unistorage } = options || {};
        if (!unistorage)
          return;
        const {
          paths = null,
          afterRestore,
          beforeRestore,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id
        } = normalizeOptions(unistorage, globalOptions);
        beforeRestore == null ? void 0 : beforeRestore(ctx);
        const normalizedKey = normalizeKey(key);
        try {
          const fromStorage = uni.getStorageSync(normalizedKey);
          if (fromStorage) {
            store.$patch(serializer.deserialize(fromStorage));
          }
        } catch (_error) {
        }
        afterRestore == null ? void 0 : afterRestore(ctx);
        store.$subscribe(
          (_2, state) => {
            try {
              const toStore = Array.isArray(paths) ? pick(state, paths) : state;
              uni.setStorageSync(
                normalizedKey,
                serializer.serialize(toStore)
              );
            } catch (_error) {
            }
          },
          { detached: true }
        );
      }
    };
  }
  function createApp() {
    const app = vue.createVueApp(App);
    const store = createPinia();
    store.use(createUnistorage());
    app.use(store);
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
