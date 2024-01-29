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
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$G = {
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
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$n], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_LOAD = "onLoad";
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
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const _sfc_main$F = {
    __name: "PersonInfo",
    setup(__props) {
      const editPerson = () => {
        uni.navigateTo({
          url: "/pages/my/EditPerson"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "my-infomation",
          onClick: editPerson
        }, [
          vue.createCommentVNode(" 头像 "),
          vue.createElementVNode("view", { class: "my-avatar" }, [
            vue.createElementVNode("img", {
              src: `./static/touxiang.png`,
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createCommentVNode(" 个人信息 "),
          vue.createElementVNode("view", { class: "person" }, [
            vue.createElementVNode("h3", null, "张学友和刘德华最爱的人"),
            vue.createElementVNode("p", null, "喜欢自己的猫狗")
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
  const PersonInfo = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a476a3a8"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/PersonInfo.vue"]]);
  const _sfc_main$E = {
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$m], ["__scopeId", "data-v-7a807eb7"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  const _sfc_main$D = {
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
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$l], ["__scopeId", "data-v-07acefee"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  const _sfc_main$C = {
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
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$k], ["__scopeId", "data-v-637fd36b"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const _sfc_main$B = {};
  function _sfc_render$j(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_1$4);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_2);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$3);
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
          onChange: _ctx.change
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_grid_item, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", {
                  class: "grid-item-box",
                  style: { "background-color": "#fff" }
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "image",
                    size: 30,
                    color: "#777"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "订单记录")
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
                  vue.createVNode(_component_uni_icons, {
                    type: "image",
                    size: 30,
                    color: "#777"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "订单详情")
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
                  vue.createVNode(_component_uni_icons, {
                    type: "image",
                    size: 30,
                    color: "#777"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "物流信息")
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
                  vue.createVNode(_component_uni_icons, {
                    type: "image",
                    size: 30,
                    color: "#777"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "申请退款")
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
  }
  const Order = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$j], ["__scopeId", "data-v-dc300319"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/Order.vue"]]);
  const _sfc_main$A = {
    __name: "MyPet",
    setup(__props) {
      const arr = vue.ref([
        "./static/image/cat1.jpg",
        "./static/image/cat2.jpg",
        "./static/image/cat3.jpg",
        "./static/image/dog1.jpg"
      ]);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
        const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_1$4);
        const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_2);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$3);
        return vue.openBlock(), vue.createBlock(_component_uni_section, {
          title: "我的宠物",
          type: "line",
          padding: "",
          titleFontSize: "18px"
        }, {
          right: vue.withCtx(() => [
            vue.createTextVNode(" 全部宠物"),
            vue.createVNode(_component_uni_icons, {
              type: "right",
              size: "18"
            })
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "indicator-dots": true
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createVNode(_component_uni_grid, {
                  showBorder: false,
                  column: 4,
                  highlight: true,
                  onChange: _ctx.change
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(arr.value, (item, index) => {
                        return vue.openBlock(), vue.createBlock(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("view", {
                              class: "grid-item-box",
                              style: { "background-color": "#fff" }
                            }, [
                              vue.createCommentVNode(' <uni-icons type="image" :size="30" color="#777" /> '),
                              vue.createElementVNode("img", {
                                src: item,
                                alt: "",
                                srcset: ""
                              }, null, 8, ["src"]),
                              vue.createElementVNode("text", { class: "text" }, "jerry")
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["index"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onChange"])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createVNode(_component_uni_grid, {
                  column: 4,
                  highlight: true,
                  onChange: _ctx.change
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(4, (item, index) => {
                        return vue.createVNode(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("view", {
                              class: "grid-item-box",
                              style: { "background-color": "#fff" }
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                type: "image",
                                size: 30,
                                color: "#777"
                              }),
                              vue.createElementVNode("text", { class: "text" }, "文本信息")
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["index"]);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onChange"])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createVNode(_component_uni_grid, {
                  column: 4,
                  highlight: true,
                  onChange: _ctx.change
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(4, (item, index) => {
                        return vue.createVNode(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("view", {
                              class: "grid-item-box",
                              style: { "background-color": "#fff" }
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                type: "image",
                                size: 30,
                                color: "#777"
                              }),
                              vue.createElementVNode("text", { class: "text" }, "文本信息")
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["index"]);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onChange"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const MyPet = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-bfd5e8ec"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/MyPet.vue"]]);
  const _sfc_main$z = {
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
        const whiteList = {
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
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$i], ["__scopeId", "data-v-c97cb896"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$y = {
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
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$2);
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
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$h], ["__scopeId", "data-v-c7524739"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$x = {
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$g], ["__scopeId", "data-v-c2f1266a"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$w = {
    __name: "MoreFunction",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$8);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$1);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$3);
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
  const MoreFunction = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "D:/graduationProject/pet-front-end/pages/my/components/MoreFunction.vue"]]);
  const _sfc_main$v = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(PersonInfo),
            vue.createVNode(Order),
            vue.createVNode(MyPet),
            vue.createVNode(MoreFunction)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "D:/graduationProject/pet-front-end/pages/my/index.vue"]]);
  const _sfc_main$u = {
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
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
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$f], ["__scopeId", "data-v-c3453ea3"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$t = {
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
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "D:/graduationProject/pet-front-end/components/icon-base/icon-base.vue"]]);
  const _sfc_main$s = {
    __name: "ServiceSelect",
    props: {
      title: String,
      icColor: String,
      type: String,
      bgColor: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$6);
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
  const ServiceSelect = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-fbb6c4ac"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/ServiceSelect.vue"]]);
  const _sfc_main$r = {
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
  const SelectItem = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-72203b0b"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/SelectItem.vue"]]);
  const _sfc_main$q = {};
  function _sfc_render$e(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
      vue.createCommentVNode(" 图片图标 "),
      vue.createElementVNode("view", { class: "left" }, [
        vue.createElementVNode("img", {
          src: `./static/cateatfish.png`,
          alt: ""
        }, null, 8, ["src"])
      ]),
      vue.createCommentVNode(" 文字 "),
      vue.createElementVNode("view", { class: "right" }, " 上门喂猫1 ")
    ]);
  }
  const SelectType = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$e], ["__scopeId", "data-v-9e8eefd2"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/SelectType.vue"]]);
  const _sfc_main$p = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_0$7);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_uni_notice_bar, {
            "show-icon": "",
            scrollable: "",
            text: "uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
          }),
          vue.createElementVNode("view", { class: "hot-service" }, [
            vue.createVNode(ServiceSelect, {
              title: "上门喂猫",
              bgColor: "#2979FF"
            }),
            vue.createVNode(ServiceSelect, {
              title: "上门喂狗",
              bgColor: "#2979FF"
            }),
            vue.createVNode(ServiceSelect, {
              title: "预约服务",
              bgColor: "#2979FF"
            }),
            vue.createVNode(ServiceSelect, {
              title: "我要接单",
              bgColor: "#2979FF"
            })
          ]),
          vue.createCommentVNode(" 服务对象 "),
          vue.createVNode(_component_uni_section, { title: "请选择服务宠物类型" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "type-service" }, [
                vue.createVNode(SelectItem, { title: "猫咪" }),
                vue.createVNode(SelectItem, { title: "小狗" }),
                vue.createVNode(SelectItem, { title: "仓鼠" }),
                vue.createVNode(SelectItem, { title: "仓鼠" }),
                vue.createVNode(SelectItem, { title: "仓鼠" })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" 服务类型 "),
          vue.createVNode(_component_uni_section, { title: "请选择服务宠物类型" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "type-service" }, [
                vue.createVNode(SelectType),
                vue.createVNode(SelectType)
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-4978fed5"], ["__file", "D:/graduationProject/pet-front-end/pages/home/index.vue"]]);
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
        navigationBarTitleText: "详细商品",
        navigationStyle: "custom",
        titleNView: false
      }
    },
    {
      path: "pages/cat/cat",
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
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/home/DetailService",
      style: {
        navigationBarTitleText: "",
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
    }
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
        iconPath: "static/image/shouye.png",
        selectedIconPath: "static/image/shouye-selected.png"
      },
      {
        iconPath: "static/image/xiaoxi.png",
        selectedIconPath: "static/image/xiaoxi-selected.png",
        pagePath: "pages/messages/index",
        text: "消息"
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
  function t$3(e2) {
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
  }), xs = t$3(Cs);
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
  const _sfc_main$o = {
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
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$d], ["__scopeId", "data-v-20df4ef0"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue"]]);
  const _sfc_main$n = {
    __name: "CommuniFn",
    props: {
      title: String,
      icColor: String,
      type: String,
      bgColor: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$6);
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
  const CommuniFn = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-25d3a9bd"], ["__file", "D:/graduationProject/pet-front-end/pages/messages/CommuniFn.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_list_chat = resolveEasycom(vue.resolveDynamicComponent("uni-list-chat"), __easycom_0$5);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "commu-fn" }, [
              vue.createVNode(CommuniFn, {
                title: "赞与收藏",
                type: "dianzan",
                icColor: "#FB635E",
                bgColor: "#FDEBE9"
              }),
              vue.createVNode(CommuniFn, {
                title: "新增粉丝",
                type: "fensi",
                icColor: "#F88440",
                bgColor: "#FBF3E5"
              }),
              vue.createVNode(CommuniFn, {
                title: "评论与@",
                type: "xiaoxi11",
                icColor: "#5ED99A",
                bgColor: "#DCF8EC"
              }),
              vue.createVNode(CommuniFn, {
                title: "谁看过我",
                type: "yanjing-",
                icColor: "#4785FC",
                bgColor: "#E5EEFF"
              }),
              vue.createCommentVNode(" 消息列表 ")
            ]),
            vue.createElementVNode("view", { class: "message-list" }, [
              vue.createVNode(_component_uni_list, { border: true }, {
                default: vue.withCtx(() => [
                  vue.createCommentVNode(" 显示圆形头像 "),
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
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMessagesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "D:/graduationProject/pet-front-end/pages/messages/index.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
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
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
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
  const en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$2
  } = initVueI18n(messages$1);
  const _sfc_main$l = {
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
        return this.cancelText || t$2("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$2("uni-search-bar.placeholder");
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
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
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$c], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$k = {
    __name: "ShopList",
    setup(__props) {
      const goodsList = vue.ref([]);
      const pageNo = vue.ref(1);
      const pageSize = vue.ref(10);
      const isNoMore = vue.ref(false);
      const isLoading = vue.ref(false);
      const isInit = vue.ref(false);
      onLoad(() => {
        isLoading.value = true;
        setTimeout(() => {
          const res = [
            {
              goodsPic: "/static/goods/11.jpg",
              goodsName: "Helmetphone MT1 Neo智能骑行头盔(山地/框宽度）",
              goodsDesc: "一键语音",
              goodsPrice: 599,
              goodsOriginPrice: 899,
              rateNum: 1068,
              ratePercent: "99%"
            },
            {
              goodsPic: "/static/goods/12.jpg",
              goodsName: "海德HEAD智能跳绳S1双绳版",
              goodsDesc: "结合WATCH GT3等穿戴设备一起使用",
              goodsPrice: 399,
              goodsOriginPrice: 699,
              rateNum: 56,
              ratePercent: "98%"
            }
          ];
          goodsList.value = res;
          isInit.value = true;
          isLoading.value = false;
          if (!goodsList.value || goodsList.value.length < pageSize.value) {
            isNoMore.value = true;
          }
        }, 1500);
      });
      onReachBottom(() => {
        if (isNoMore.value) {
          return;
        }
        isLoading.value = true;
        pageNo.value += 1;
        setTimeout(() => {
          const res = [
            {
              goodsPic: "/static/goods/11.jpg",
              goodsName: "Helmetphone MT1 Neo智能骑行头盔(山地/框宽度）",
              goodsDesc: "一键语音",
              tags: [{
                name: "限时直降300元",
                type: "hot"
              }, {
                name: "赠积分",
                type: "default"
              }],
              goodsPrice: 599,
              goodsOriginPrice: 899,
              rateNum: 1068,
              ratePercent: "99%"
            },
            {
              goodsPic: "/static/goods/12.jpg",
              goodsName: "海德HEAD智能跳绳S1双绳版",
              goodsDesc: "结合WATCH GT3等穿戴设备一起使用",
              tags: [{
                name: "限时直降300元",
                type: "hot"
              }],
              goodsPrice: 399,
              goodsOriginPrice: 699,
              rateNum: 56,
              ratePercent: "98%"
            }
          ];
          goodsList = [...goodsList.value, ...res];
          isLoading.value = false;
          if (!res || res.length < pageSize.value) {
            isNoMore.value = true;
          }
        }, 1500);
      });
      const clickItem = (index) => {
        formatAppLog("log", "at pages/shop/ShopList.vue:139", "当前点击的商品下标是" + index);
        uni.navigateTo({
          url: "/pages/category/productdetail"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          goodsList.value && goodsList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "t-goods-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(goodsList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "t-goods-item",
                  key: index,
                  onClick: ($event) => clickItem(index)
                }, [
                  vue.createCommentVNode(" 图片 "),
                  vue.createElementVNode("image", {
                    class: "t-goods-img",
                    src: item.goodsPic
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 商品名称 "),
                  vue.createElementVNode("view", { class: "t-goods-name" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.goodsName),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createCommentVNode(" 商品描述 "),
                  vue.createElementVNode("view", { class: "t-goods-desc" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.goodsDesc),
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
                      vue.toDisplayString(item.goodsPrice),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p2" },
                      "¥" + vue.toDisplayString(item.goodsOriginPrice),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "t-rate" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.rateNum) + "人评价",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "t-rate-percent" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.ratePercent) + "好评",
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
          ])) : isInit.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "t-empty"
          }, [
            vue.createElementVNode("image", { src: "/static/goods.png" }),
            vue.createElementVNode("view", { class: "t-empty-desc" }, "没有商品哦~")
          ])) : vue.createCommentVNode("v-if", true),
          isLoading.value || isNoMore.value && goodsList.value && goodsList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
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
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const ShopList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-419b7e21"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/ShopList.vue"]]);
  const _sfc_main$j = {
    __name: "CategorySelect",
    props: {
      title: String,
      icColor: String,
      type: String,
      bgColor: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$6);
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
  const CategorySelect = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b536a4fa"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/CategorySelect.vue"]]);
  const _sfc_main$i = {
    __name: "index",
    setup(__props) {
      const searchValue = vue.ref("");
      const JumpCategory = () => {
        uni.navigateTo({
          url: "/pages/category/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 搜素栏 "),
            vue.createVNode(_component_uni_search_bar, {
              onConfirm: _ctx.search,
              focus: true,
              modelValue: searchValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchValue.value = $event),
              onBlur: _ctx.blur,
              onFocus: _ctx.focus,
              onInput: _ctx.input,
              onCancel: _ctx.cancel,
              onClear: _ctx.clear
            }, null, 8, ["onConfirm", "modelValue", "onBlur", "onFocus", "onInput", "onCancel", "onClear"]),
            vue.createCommentVNode(" 分类选项 "),
            vue.createElementVNode("view", { class: "category-select" }, [
              vue.createVNode(CategorySelect, {
                bgColor: "pink",
                type: "dianzan",
                title: "进口猫粮",
                icColor: "#FB635E"
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "pink",
                type: "dianzan",
                title: "进口猫粮",
                icColor: "#FB635E"
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "pink",
                type: "dianzan",
                title: "进口猫粮",
                icColor: "#FB635E"
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "pink",
                type: "dianzan",
                title: "进口猫粮",
                icColor: "#FB635E"
              }),
              vue.createVNode(CategorySelect, {
                bgColor: "pink",
                type: "dianzan",
                title: "全部分类",
                icColor: "#FB635E",
                onClick: JumpCategory
              })
            ]),
            vue.createCommentVNode(" 商品列表 "),
            vue.createVNode(ShopList),
            vue.createCommentVNode(" 购物车 "),
            vue.createCommentVNode(' 		<view class="goods-carts">\r\n			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"\r\n				@buttonClick="buttonClick" />\r\n		</view> ')
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesShopIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-7db6cc15"], ["__file", "D:/graduationProject/pet-front-end/pages/shop/index.vue"]]);
  const testData = [
    {
      cid: 1,
      main_name: "女装",
      data: [
        {
          next_name: "裙装",
          info: [
            {
              son_name: "连衣裙",
              imgurl: "http://img.haodanku.com/89937f347f81f5c5539f9da9b35b7a62-600"
            },
            {
              son_name: "雪纺裙",
              imgurl: "http://img.haodanku.com/3deb054da8cb2f4b1b5a07ab530e7e41-600"
            },
            {
              son_name: "半身裙",
              imgurl: "http://img.haodanku.com/b68bc66ab1a81db336110b7c1196b5a9-600"
            },
            {
              son_name: "印花裙",
              imgurl: "http://img.haodanku.com/3ce7249ba847286308c82bed97f7817d-600"
            },
            {
              son_name: "吊带裙",
              imgurl: "http://img.haodanku.com/0716abc13652355b130dc3c83d39a7dc-600"
            },
            {
              son_name: "纯色裙",
              imgurl: "http://img.haodanku.com/de464503dab5d20a5d6505573f1624bd-600"
            }
          ]
        },
        {
          next_name: "套装",
          info: [
            {
              son_name: "两件套",
              imgurl: "http://img.haodanku.com/dcabee1a81b9c631bbc903597fad52a2-600"
            },
            {
              son_name: "夏季套装",
              imgurl: "http://img.haodanku.com/fcf45b47afad11fe7ac05c179de174c1-600"
            },
            {
              son_name: "大码女装",
              imgurl: "http://img.haodanku.com/005f603379aa285718b3f7c99c1ca88a-600"
            },
            {
              son_name: "妈妈装",
              imgurl: "http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600"
            },
            {
              son_name: "婚纱",
              imgurl: "http://img.haodanku.com/d40c79df78c0a0cfbbb05605891950db-600"
            },
            {
              son_name: "小香风",
              imgurl: "http://img.haodanku.com/2907a1a4faf78674c4ff422ce9ca16eb-600"
            },
            {
              son_name: "运动套装",
              imgurl: "http://img.haodanku.com/97340565f9420afafc7a37966095da75-600"
            },
            {
              son_name: "雪纺套装",
              imgurl: "http://img.haodanku.com/233b900fde6dc193a0c4b8886d121002-600"
            }
          ]
        },
        {
          next_name: "T恤",
          info: [
            {
              son_name: "T恤",
              imgurl: "http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600"
            },
            {
              son_name: "一字肩",
              imgurl: "http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600"
            },
            {
              son_name: "印花雪纺",
              imgurl: "http://img.haodanku.com/60e743e4a53b475f2b01a606b61ab217-600"
            },
            {
              son_name: "吊带T恤",
              imgurl: "http://img.haodanku.com/7aad5119d9e8d49c74ab97e31944ba63-600"
            },
            {
              son_name: "娃娃衫",
              imgurl: "http://img.haodanku.com/9a596fb1d0c7008cdfad30e5562b3b3f-600"
            },
            {
              son_name: "情侣T恤",
              imgurl: "http://img.haodanku.com/9880baf8c939776a65a64c6ec6b37621-600"
            },
            {
              son_name: "白衬衣",
              imgurl: "http://img.haodanku.com/1c60edccb596c5f3496d883be75869c5-600"
            },
            {
              son_name: "短袖T恤",
              imgurl: "http://img.haodanku.com/81ee9efd599bcfb76668e0ab3d08df6d-600"
            },
            {
              son_name: "纯色T恤",
              imgurl: "http://img.haodanku.com/44d365c3c459a4a04185f1fa947e7353-600"
            },
            {
              son_name: "蕾丝拼接",
              imgurl: "http://img.haodanku.com/f77f58f4f0f67b4c3cd830954354462a-600"
            },
            {
              son_name: "蕾丝衫",
              imgurl: "http://img.haodanku.com/fe7c5357cb05b2128bf95c014c402092-600"
            },
            {
              son_name: "防晒衫",
              imgurl: "http://img.haodanku.com/99d63b5ef04f0599ef94a71b1a247fef-600"
            },
            {
              son_name: "露肩上衣",
              imgurl: "http://img.haodanku.com/a39d41be029747367e3889ea195043b1-600"
            },
            {
              son_name: "长袖T恤",
              imgurl: "http://img.haodanku.com/d0ae23ec9b6d46e16bd2e0e924b2bd83-600"
            }
          ]
        },
        {
          next_name: "内搭",
          info: [
            {
              son_name: "喇叭袖",
              imgurl: "http://img.haodanku.com/6d8739d3e2aba86cfe98c3d8c631cb18-600"
            },
            {
              son_name: "开衫",
              imgurl: "http://img.haodanku.com/051f12a2106ca222a4a651ef556419b2-600"
            },
            {
              son_name: "打底毛衣",
              imgurl: "http://img.haodanku.com/d93f276b06e1aa4d9f5a7c4718ca675d-600"
            },
            {
              son_name: "毛衣",
              imgurl: "http://img.haodanku.com/5ae75e2e972aec9126ac7ef6e44bd279-600"
            },
            {
              son_name: "针织衫",
              imgurl: "http://img.haodanku.com/d989f5485e411a23b53d903787e9e8ae-600"
            },
            {
              son_name: "高领",
              imgurl: "http://img.haodanku.com/226f1370ec92bd4804621851e4a45cd4-600"
            }
          ]
        },
        {
          next_name: "外套",
          info: [
            {
              son_name: "卫衣",
              imgurl: "http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600"
            },
            {
              son_name: "夹克",
              imgurl: "http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600"
            },
            {
              son_name: "棉服",
              imgurl: "http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600"
            },
            {
              son_name: "毛呢",
              imgurl: "http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600"
            },
            {
              son_name: "牛仔",
              imgurl: "http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600"
            },
            {
              son_name: "皮衣",
              imgurl: "http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600"
            },
            {
              son_name: "短外套",
              imgurl: "http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600"
            },
            {
              son_name: "羽绒",
              imgurl: "http://img.haodanku.com/8b319845442d1ca43866388b3cdc9008-600"
            },
            {
              son_name: "西装",
              imgurl: "http://img.haodanku.com/8760d56b968fff5f4542cba45398f911-600"
            },
            {
              son_name: "风衣",
              imgurl: "http://img.haodanku.com/fce2eacae26fdd2be1e56319570db29e-600"
            },
            {
              son_name: "马甲",
              imgurl: "http://img.haodanku.com/72c6ef4b40de18dddb9ae5dd38a9a051-600"
            }
          ]
        },
        {
          next_name: "裤子",
          info: [
            {
              son_name: "休闲裤",
              imgurl: "http://img.haodanku.com/047d30183d119f6805767a2649e05047-600"
            },
            {
              son_name: "哈伦裤",
              imgurl: "http://img.haodanku.com/a1711789779fbd5c921fe1672619879f-600"
            },
            {
              son_name: "棉麻裤",
              imgurl: "http://img.haodanku.com/a3e99f528f0cf163b96b0f6090226364-600"
            },
            {
              son_name: "牛仔裤",
              imgurl: "http://img.haodanku.com/d1c7bf2b3a3d52047bf2bba87527ce2c-600"
            },
            {
              son_name: "短裤",
              imgurl: "http://img.haodanku.com/d370086ea3d2a9c4ba569cfb8daf0d8e-600"
            },
            {
              son_name: "破洞牛仔裤",
              imgurl: "http://img.haodanku.com/82462d589beb34111e9fccf66c170c7d-600"
            },
            {
              son_name: "裤子",
              imgurl: "http://img.haodanku.com/049ea9c85a7b917eb9f0844df3910d4b-600"
            },
            {
              son_name: "阔腿裤",
              imgurl: "http://img.haodanku.com/d59ec97908e5f2a3af232cbb23c54f31-600"
            }
          ]
        }
      ]
    },
    {
      cid: 2,
      main_name: "男装",
      data: [
        {
          next_name: "内搭",
          info: [
            {
              son_name: "长袖T恤",
              imgurl: "http://img.haodanku.com/0cd092e3914e60ed74954bbba638d093-600"
            },
            {
              son_name: "polo衫",
              imgurl: "http://img.haodanku.com/0503477c4c5d9618b5be5dc3f7712dcf-600"
            },
            {
              son_name: "T恤",
              imgurl: "http://img.haodanku.com/439ba8ee07892f939714783e5f5fa49d-600"
            },
            {
              son_name: "卫衣",
              imgurl: "http://img.haodanku.com/fa31cffcb202ac6523853af99810afb9-600"
            },
            {
              son_name: "短袖T恤",
              imgurl: "http://img.haodanku.com/c12f373877a7a4b9e4856d552c91e3b3-600"
            },
            {
              son_name: "衬衣",
              imgurl: "http://img.haodanku.com/9d792370897c7f393059514b17a0cb14-600"
            }
          ]
        },
        {
          next_name: "外套",
          info: [
            {
              son_name: "马甲",
              imgurl: "http://img.haodanku.com/325254ca7f6e1f03c438d818cb4c67cb-600"
            },
            {
              son_name: "呢大衣",
              imgurl: "http://img.haodanku.com/f3c0fd52abf5945b5d253a64f8fce62d-600"
            },
            {
              son_name: "夹克",
              imgurl: "http://img.haodanku.com/250eefdd7acef0934e9f0fafffa75c88-600"
            },
            {
              son_name: "棉衣",
              imgurl: "http://img.haodanku.com/6b5cd4e0f1c6f346b552651209cf78a3-600"
            },
            {
              son_name: "棒球服",
              imgurl: "http://img.haodanku.com/2c296a0d7e6600da4b5f572c1c1878e4-600"
            },
            {
              son_name: "牛仔外套",
              imgurl: "http://img.haodanku.com/d55f8511d3916346c8a808dbe5b0868a-600"
            },
            {
              son_name: "皮衣",
              imgurl: "http://img.haodanku.com/14f79fee301aa6bb5a69318d9d95a2ef-600"
            },
            {
              son_name: "羽绒服",
              imgurl: "http://img.haodanku.com/51ee457f0c7b8c2ddb6f4e5e9dd9818e-600"
            },
            {
              son_name: "西装",
              imgurl: "http://img.haodanku.com/09290b9079002c5d957b245bf8d5dc22-600"
            },
            {
              son_name: "风衣",
              imgurl: "http://img.haodanku.com/16a6f06b799c96f30289e124ee084f9a-600"
            }
          ]
        },
        {
          next_name: "下装",
          info: [
            {
              son_name: "七分裤",
              imgurl: "http://img.haodanku.com/cc410e901bbb46c0ccb39de7d834186d-600"
            },
            {
              son_name: "九分裤",
              imgurl: "http://img.haodanku.com/fae33cdacda6852a7628c206f9cc3691-600"
            },
            {
              son_name: "休闲裤",
              imgurl: "http://img.haodanku.com/28261afc8638e81810396e804be7bb4e-600"
            },
            {
              son_name: "哈伦裤",
              imgurl: "http://img.haodanku.com/87ee360c875520d8df6d1fc326fceebf-600"
            },
            {
              son_name: "工装裤",
              imgurl: "http://img.haodanku.com/de243065fe1031a3b673911ca3f5d554-600"
            },
            {
              son_name: "沙滩裤",
              imgurl: "http://img.haodanku.com/890d879df68a83fc884af2ac40590f9f-600"
            },
            {
              son_name: "牛仔裤",
              imgurl: "http://img.haodanku.com/f7aed5f42224b34532e92e57d667fb35-600"
            },
            {
              son_name: "短裤",
              imgurl: "http://img.haodanku.com/957ec585e9c7af6b740b28e03e94484d-600"
            },
            {
              son_name: "西裤",
              imgurl: "http://img.haodanku.com/883c7c0972e09d96ee7ba2df0990de48-600"
            },
            {
              son_name: "运动裤",
              imgurl: "http://img.haodanku.com/11f8a9fe9f1c81a720870c65c3d95347-600"
            }
          ]
        },
        {
          next_name: "针织衫",
          info: [
            {
              son_name: "套头",
              imgurl: "http://img.haodanku.com/fad26efeddcbb8b28b31365f0e3ebdcf-600"
            },
            {
              son_name: "开衫",
              imgurl: "http://img.haodanku.com/9a1297fddeb4ec33d63e1a353975fef9-600"
            },
            {
              son_name: "毛衣",
              imgurl: "http://img.haodanku.com/4f488cd57da11a19dc5dc0f6a1d48eff-600"
            },
            {
              son_name: "羊毛衫",
              imgurl: "http://img.haodanku.com/469ad3c34a07e7296bd52a6e49e3e7cc-600"
            },
            {
              son_name: "针织衫",
              imgurl: "http://img.haodanku.com/79967f9058dd6b94dbc43714b652b090-600"
            },
            {
              son_name: "高领",
              imgurl: "http://img.haodanku.com/0edca60c499cd86fe5d9ad2afb85e9c7-600"
            }
          ]
        }
      ]
    },
    {
      cid: 3,
      main_name: "内衣",
      data: [
        {
          next_name: "内衣",
          info: [
            {
              son_name: "保暖背心",
              imgurl: "http://img.haodanku.com/e093297d8e26e30a3d5aac4a613ec4f3-600"
            },
            {
              son_name: "内衣套装",
              imgurl: "http://img.haodanku.com/8f0f258453126d0eba37806e99d61f3c-600"
            },
            {
              son_name: "内裤女",
              imgurl: "http://img.haodanku.com/8fb1969ae13d3854a019176068cb19fd-600"
            },
            {
              son_name: "内裤男",
              imgurl: "http://img.haodanku.com/bd263e2ae6f0b6d55f58aa45e98f8d5a-600"
            },
            {
              son_name: "打底裤",
              imgurl: "http://img.haodanku.com/48ecf13aa01d4df986d08f807f5bde8a-600"
            },
            {
              son_name: "文胸",
              imgurl: "http://img.haodanku.com/5515534e4b57c437ff99823194af9efa-600"
            },
            {
              son_name: "塑身衣",
              imgurl: "http://img.haodanku.com/d4e8eb149c618aa91d74e2ea98c54bab-600"
            },
            {
              son_name: "秋裤",
              imgurl: "http://img.haodanku.com/df2ce30731a1f5328163f02315cbcdf6-600"
            }
          ]
        },
        {
          next_name: "睡衣",
          info: [
            {
              son_name: "保暖睡衣",
              imgurl: "http://img.haodanku.com/4d20bb96196142cd1789ffb9608e0e6c-600"
            },
            {
              son_name: "卡通睡衣",
              imgurl: "http://img.haodanku.com/8972e51a91b6564fdad5efd05dac9f8a-600"
            },
            {
              son_name: "夹棉睡衣",
              imgurl: "http://img.haodanku.com/b2c95bf4420cd9ae947a715da3713625-600"
            },
            {
              son_name: "女士睡衣",
              imgurl: "http://img.haodanku.com/9e1cbba89c247ed6df0a0db7267bf964-600"
            },
            {
              son_name: "情侣睡衣",
              imgurl: "http://img.haodanku.com/8b005a55b45644839498aa75f4ee3e56-600"
            },
            {
              son_name: "珊瑚绒",
              imgurl: "http://img.haodanku.com/079c725c7efe42cd8a005ea47542d939-600"
            },
            {
              son_name: "男士睡衣",
              imgurl: "http://img.haodanku.com/c34cc2e6422f7493edac577c4b403146-600"
            },
            {
              son_name: "睡袍",
              imgurl: "http://img.haodanku.com/7e5f5f97ab66f4d6c7b9fcf972e30e55-600"
            },
            {
              son_name: "睡裙",
              imgurl: "http://img.haodanku.com/9348b8b75ef49b82e6cca3ef9d05bcf8-600"
            },
            {
              son_name: "短袖睡衣",
              imgurl: "http://img.haodanku.com/360d6c896363e0158be255278923a900-600"
            },
            {
              son_name: "长袖睡衣",
              imgurl: "http://img.haodanku.com/3c2a90a42396671688c5aaed75ee2b2a-600"
            }
          ]
        },
        {
          next_name: "袜子",
          info: [
            {
              son_name: "女袜",
              imgurl: "http://img.haodanku.com/5721a24e445fcd88ae8afa4b31432a0f-600"
            },
            {
              son_name: "棉袜",
              imgurl: "http://img.haodanku.com/b08b0ad37e100ddef347205270bbc260-600"
            },
            {
              son_name: "男袜",
              imgurl: "http://img.haodanku.com/1866e702f375974facb979e2a87e95df-600"
            },
            {
              son_name: "裤袜",
              imgurl: "http://img.haodanku.com/95a4cd9d01b7ca5c544afeb5a35969f9-600"
            },
            {
              son_name: "长筒袜",
              imgurl: "http://img.haodanku.com/edf2befbb6c1abd0fa67fbee47cb0ae9-600"
            }
          ]
        }
      ]
    },
    {
      cid: 4,
      main_name: "美妆",
      data: [
        {
          next_name: "个人护理",
          info: [
            {
              son_name: "头发造型",
              imgurl: "http://img.haodanku.com/d07c4bf91101a3b6a0a8a340bf068ac4-600"
            },
            {
              son_name: "护发素",
              imgurl: "http://img.haodanku.com/a9e63479e7edc40aedde33cca15f03f7-600"
            },
            {
              son_name: "染发膏",
              imgurl: "http://img.haodanku.com/1b8e6a4cd2961a1d468557b4d766eca6-600"
            },
            {
              son_name: "沐浴露",
              imgurl: "http://img.haodanku.com/14bfdb8fc38493aa985d310d390aad19-600"
            },
            {
              son_name: "洗发水",
              imgurl: "http://img.haodanku.com/162652a65fc931cf7aba34436a5882cd-600"
            },
            {
              son_name: "清洁剂",
              imgurl: "http://img.haodanku.com/cc34507e016b01cc6005d028b55aa1cc-600"
            },
            {
              son_name: "刷子",
              imgurl: "http://img.haodanku.com/529884a59eb3a2ed7cad27cc215f042c-600"
            },
            {
              son_name: "私处护理",
              imgurl: "http://img.haodanku.com/28ca7a798ebef550b71616c0158f5a3f-600"
            },
            {
              son_name: "足浴",
              imgurl: "http://img.haodanku.com/14291c443185a267818e2d434d8a3342-600"
            },
            {
              son_name: "足贴",
              imgurl: "http://img.haodanku.com/cb2b79782adeff70c42b6a77d9ee7fbc-600"
            },
            {
              son_name: "香薰",
              imgurl: "http://img.haodanku.com/d4e749698878f0318254e2844a2ab4b1-600"
            }
          ]
        },
        {
          next_name: "美妆",
          info: [
            {
              son_name: "BB霜",
              imgurl: "http://img.haodanku.com/489dc81a627234b735e508ea3c5a30d6-600"
            },
            {
              son_name: "乳液",
              imgurl: "http://img.haodanku.com/2da72ef1545f4e6e729daca73469daa7-600"
            },
            {
              son_name: "卸妆",
              imgurl: "http://img.haodanku.com/11f4c31e57040ca6578e395764685f9d-600"
            },
            {
              son_name: "唇膏",
              imgurl: "http://img.haodanku.com/73dce1ba7e1e6c2f087a82e6e2daaf0f-600"
            },
            {
              son_name: "彩妆品盘",
              imgurl: "http://img.haodanku.com/885defc8e1c9263ff87a2bc661118c63-600"
            },
            {
              son_name: "洁面仪",
              imgurl: "http://img.haodanku.com/e7a50ccfa072697de187a8257a63938e-600"
            },
            {
              son_name: "洗面奶",
              imgurl: "http://img.haodanku.com/0390ae3565930d395244524603d38605-600"
            },
            {
              son_name: "爽肤水",
              imgurl: "http://img.haodanku.com/5dc1013d4ed73422d9963e03d24ca8f2-600"
            },
            {
              son_name: "男士护理",
              imgurl: "http://img.haodanku.com/0821d27e39fffa2bc6cb2372800d33b3-600"
            },
            {
              son_name: "眼线",
              imgurl: "http://img.haodanku.com/4216c4cdc29f8e9bce9722bf2329f4d4-600"
            },
            {
              son_name: "眼霜",
              imgurl: "http://img.haodanku.com/9bcc8b7e61d0958a4cf24efa92d8d7d9-600"
            },
            {
              son_name: "睫毛膏",
              imgurl: "http://img.haodanku.com/917ca505a2916d4308258c1df00aa6bc-600"
            },
            {
              son_name: "粉底液",
              imgurl: "http://img.haodanku.com/b8c50f1f046846de3a22b68b681799d0-600"
            },
            {
              son_name: "精华",
              imgurl: "http://img.haodanku.com/c236b1acfcf8aeaffef5b01ab73e5608-600"
            },
            {
              son_name: "精油",
              imgurl: "http://img.haodanku.com/c57b417129f661124f5b7f863fc2a5ed-600"
            },
            {
              son_name: "纤体",
              imgurl: "http://img.haodanku.com/900cbfe080fcea90a276c9b0367252ef-600"
            },
            {
              son_name: "脱毛",
              imgurl: "http://img.haodanku.com/bd495c3062c688f6c1a00a6f02a57655-600"
            },
            {
              son_name: "腮红",
              imgurl: "http://img.haodanku.com/1305d219f6095577b2d4930531a1b3ee-600"
            },
            {
              son_name: "身体护理",
              imgurl: "http://img.haodanku.com/31610649476cc77a474959eb39f1b929-600"
            },
            {
              son_name: "防晒",
              imgurl: "http://img.haodanku.com/1d23fffba3e6ed348369ecf8fdab6659-600"
            },
            {
              son_name: "隔离霜",
              imgurl: "http://img.haodanku.com/76c233634b9d2eb0ba2353d1c834a070-600"
            },
            {
              son_name: "面膜",
              imgurl: "http://img.haodanku.com/f9ddb9d89e9bfd8312056b02c4081bcd-600"
            },
            {
              son_name: "面霜",
              imgurl: "http://img.haodanku.com/e57cb97f45eacb673b10d4179ce54079-600"
            },
            {
              son_name: "香水",
              imgurl: "http://img.haodanku.com/04e330d7bfe0dca66883d8a52286552c-600"
            }
          ]
        },
        {
          next_name: "营养保健",
          info: [
            {
              son_name: "B族维生素",
              imgurl: "http://img.haodanku.com/1f59496fee3c1610426c711c3d1d4ec4-600"
            },
            {
              son_name: "大豆异黄酮",
              imgurl: "http://img.haodanku.com/12c9c22137b4bcba282fd3df6f0fa01e-600"
            },
            {
              son_name: "左旋",
              imgurl: "http://img.haodanku.com/dd4e18688356aa319c81ea718f50a447-600"
            },
            {
              son_name: "氨基葡萄糖",
              imgurl: "http://img.haodanku.com/81b23d4f172a49b845757548992c9c86-600"
            },
            {
              son_name: "维生素",
              imgurl: "http://img.haodanku.com/affa0845d378957e98cc2362b2c8fe78-600"
            },
            {
              son_name: "维生素C",
              imgurl: "http://img.haodanku.com/815ca9b2b1af15cefe5254c15656a8ab-600"
            },
            {
              son_name: "胶原蛋白",
              imgurl: "http://img.haodanku.com/1e22d5f3d6e3066d103cbb81d56aa413-600"
            },
            {
              son_name: "葡萄籽",
              imgurl: "http://img.haodanku.com/d2d1641b79898540be56943a26e9fbf1-600"
            },
            {
              son_name: "螺旋藻",
              imgurl: "http://img.haodanku.com/5e0f7000c10daed73047db311e9140bf-600"
            },
            {
              son_name: "褪黑素",
              imgurl: "http://img.haodanku.com/69210ef9179d6f60456d8c35d953ef83-600"
            },
            {
              son_name: "软骨素",
              imgurl: "http://img.haodanku.com/8598d5b6d46da97fc2e2bacc0ab6701a-600"
            },
            {
              son_name: "辅酶Q10",
              imgurl: "http://img.haodanku.com/6d3244a7bc47008fec9c5776db5a4431-600"
            },
            {
              son_name: "酵素",
              imgurl: "http://img.haodanku.com/6607fec9d51f603dd680aa56c8d367b7-600"
            },
            {
              son_name: "B族维生素",
              imgurl: "http://img.haodanku.com/1f59496fee3c1610426c711c3d1d4ec4-600"
            },
            {
              son_name: "DHA",
              imgurl: "http://img.haodanku.com/a9146cfb07408e86776b0f8e720302c8-600"
            },
            {
              son_name: "大豆异黄酮",
              imgurl: "http://img.haodanku.com/12c9c22137b4bcba282fd3df6f0fa01e-600"
            },
            {
              son_name: "左旋",
              imgurl: "http://img.haodanku.com/dd4e18688356aa319c81ea718f50a447-600"
            },
            {
              son_name: "月见草油",
              imgurl: "http://img.haodanku.com/b7b3febf2ac9a51fc9ae956da2fa3de6-600"
            },
            {
              son_name: "氨基葡萄糖",
              imgurl: "http://img.haodanku.com/81b23d4f172a49b845757548992c9c86-600"
            },
            {
              son_name: "玛咖",
              imgurl: "http://img.haodanku.com/6eed576e355b970a83afafaa7e18ab1d-600"
            },
            {
              son_name: "益生菌",
              imgurl: "http://img.haodanku.com/b12d21f28f7ec2bd4fd91bebe5ca9e63-600"
            },
            {
              son_name: "维生素",
              imgurl: "http://img.haodanku.com/affa0845d378957e98cc2362b2c8fe78-600"
            },
            {
              son_name: "维生素C",
              imgurl: "http://img.haodanku.com/815ca9b2b1af15cefe5254c15656a8ab-600"
            },
            {
              son_name: "胶原蛋白",
              imgurl: "http://img.haodanku.com/1e22d5f3d6e3066d103cbb81d56aa413-600"
            },
            {
              son_name: "葡萄籽",
              imgurl: "http://img.haodanku.com/d2d1641b79898540be56943a26e9fbf1-600"
            },
            {
              son_name: "螺旋藻",
              imgurl: "http://img.haodanku.com/5e0f7000c10daed73047db311e9140bf-600"
            },
            {
              son_name: "褪黑素",
              imgurl: "http://img.haodanku.com/69210ef9179d6f60456d8c35d953ef83-600"
            },
            {
              son_name: "软骨素",
              imgurl: "http://img.haodanku.com/8598d5b6d46da97fc2e2bacc0ab6701a-600"
            },
            {
              son_name: "辅酶Q10",
              imgurl: "http://img.haodanku.com/6d3244a7bc47008fec9c5776db5a4431-600"
            },
            {
              son_name: "酵素",
              imgurl: "http://img.haodanku.com/6607fec9d51f603dd680aa56c8d367b7-600"
            },
            {
              son_name: "钙",
              imgurl: "http://img.haodanku.com/98d655571845e533cbcbab620db00f6b-600"
            },
            {
              son_name: "鱼油",
              imgurl: "http://img.haodanku.com/5b041d1a105e86d3c5c7f2e3c4ad713f-600"
            }
          ]
        }
      ]
    },
    {
      cid: 5,
      main_name: "配饰",
      data: [
        {
          next_name: "帽子",
          info: [
            {
              son_name: "套头帽",
              imgurl: "http://img.haodanku.com/125f6e478053e17b2c0ba682bd0a5a39-600"
            },
            {
              son_name: "毛线帽",
              imgurl: "http://img.haodanku.com/e1187ddf4721580e67efb50dac464dab-600"
            },
            {
              son_name: "渔夫帽",
              imgurl: "http://img.haodanku.com/b3828f4435ede4fa3463e55dde914b40-600"
            },
            {
              son_name: "爵士帽",
              imgurl: "http://img.haodanku.com/980c97dd05f40ed47ac16a79612dd167-600"
            },
            {
              son_name: "盆帽",
              imgurl: "http://img.haodanku.com/676817946cacdbe83c377d9cc9860aa9-600"
            },
            {
              son_name: "礼帽",
              imgurl: "http://img.haodanku.com/cc142d12454557ef22b4ceb3ce4fe6ec-600"
            },
            {
              son_name: "贝雷帽",
              imgurl: "http://img.haodanku.com/6d5eebc640a964a4b55fb03046a2f8fb-600"
            },
            {
              son_name: "针织帽",
              imgurl: "http://img.haodanku.com/0b376d73ab661bbab0c83d8aefc50aca-600"
            },
            {
              son_name: "鸭舌帽",
              imgurl: "http://img.haodanku.com/1de98e064ef1e8dd92d4e95eda311105-600"
            }
          ]
        },
        {
          next_name: "配饰",
          info: [
            {
              son_name: "半指手套",
              imgurl: "http://img.haodanku.com/2439ed86402cb2d8eff39995ef1fc4e4-600"
            },
            {
              son_name: "手套",
              imgurl: "http://img.haodanku.com/e5183b8d3236027d4c0cd2fe923f7d34-600"
            },
            {
              son_name: "真皮腰带",
              imgurl: "http://img.haodanku.com/cd8ad3794ee3fbb1a8c8bce8f88f7ef1-600"
            },
            {
              son_name: "腰带",
              imgurl: "http://img.haodanku.com/7586c7f14be6334d52ea6f862048ce3a-600"
            },
            {
              son_name: "触屏手套",
              imgurl: "http://img.haodanku.com/a69d879b523d78d0203fe4879109486f-600"
            },
            {
              son_name: "雨伞",
              imgurl: "http://img.haodanku.com/eb9cb749ec8237a84227614d356bfd0f-600"
            }
          ]
        },
        {
          next_name: "围巾",
          info: [
            {
              son_name: "披肩围巾",
              imgurl: "http://img.haodanku.com/e7a8efb7077e6e0e71f038582f7a6ba8-600"
            },
            {
              son_name: "棉麻围巾",
              imgurl: "http://img.haodanku.com/ac5962ed20036929d9d533e467a85fd0-600"
            },
            {
              son_name: "真丝围巾",
              imgurl: "http://img.haodanku.com/c371383e6e2f9b234f30d32c0a1295ef-600"
            },
            {
              son_name: "羊毛围巾",
              imgurl: "http://img.haodanku.com/2959aea355069c58f07a5bd4312c0750-600"
            },
            {
              son_name: "羊绒围巾",
              imgurl: "http://img.haodanku.com/9870a6e83a4e97ce9f8b8d2bf2fe057e-600"
            }
          ]
        }
      ]
    },
    {
      cid: 6,
      main_name: "鞋品",
      data: [
        {
          next_name: "男鞋",
          info: [
            {
              son_name: "乐福鞋",
              imgurl: "http://img.haodanku.com/9843bf86c735fca4495b93cbb9371b56-600"
            },
            {
              son_name: "休闲鞋",
              imgurl: "http://img.haodanku.com/52ac4c99b933215aa4767dfbcf1ee459-600"
            },
            {
              son_name: "凉鞋",
              imgurl: "http://img.haodanku.com/6f80f7d856fef73155d88ac0ec633d93-600"
            },
            {
              son_name: "增高鞋",
              imgurl: "http://img.haodanku.com/5dfbd1e8047e1fa4bc9424fc44a81037-600"
            },
            {
              son_name: "帆布鞋",
              imgurl: "http://img.haodanku.com/b1ec5218812aac9249071123cc9ff37d-600"
            },
            {
              son_name: "板鞋",
              imgurl: "http://img.haodanku.com/c0ea8e1a9a0e9c486c2f3b571b495395-600"
            },
            {
              son_name: "网布鞋",
              imgurl: "http://img.haodanku.com/acaf3517b2b374e568e512ea2c1c0334-600"
            },
            {
              son_name: "豆豆鞋",
              imgurl: "http://img.haodanku.com/6f74d2cd0dc9de9ea1b746ab78ba6b66-600"
            },
            {
              son_name: "运动鞋",
              imgurl: "http://img.haodanku.com/7b3bc2187dfeaf64dbb61ad6d3eb358f-600"
            }
          ]
        },
        {
          next_name: "女鞋",
          info: [
            {
              son_name: "中跟鞋",
              imgurl: "http://img.haodanku.com/5a52d7f0375aadd03558aab5a2489a81-600"
            },
            {
              son_name: "乐福鞋",
              imgurl: "http://img.haodanku.com/8ebb992fc125df908039e1468b634c1f-600"
            },
            {
              son_name: "低跟鞋",
              imgurl: "http://img.haodanku.com/19c7f3e00da194115690d71b5b0f6691-600"
            },
            {
              son_name: "妈妈鞋",
              imgurl: "http://img.haodanku.com/6056eae45f0a96110f028f5f145a7c57-600"
            },
            {
              son_name: "小白鞋",
              imgurl: "http://img.haodanku.com/c8bdc977c2f8b484f7066e82f9019417-600"
            },
            {
              son_name: "帆布鞋",
              imgurl: "http://img.haodanku.com/70841a66d31d46050b053a7a559aad5c-600"
            },
            {
              son_name: "平底凉鞋",
              imgurl: "http://img.haodanku.com/5c245c0d40166fad781505b47e952b81-600"
            },
            {
              son_name: "平底鞋",
              imgurl: "http://img.haodanku.com/8773b3b2620fbbc9d33cee40cbeff145-600"
            },
            {
              son_name: "松糕厚底",
              imgurl: "http://img.haodanku.com/f8eee922c6d05a17e9bee9dcda4811ac-600"
            },
            {
              son_name: "猫跟鞋",
              imgurl: "http://img.haodanku.com/aac30a76edc144585e38c0a5a3560bcc-600"
            },
            {
              son_name: "玛丽珍鞋",
              imgurl: "http://img.haodanku.com/b010a4fdd9bb85af6ca67c916c317929-600"
            },
            {
              son_name: "豆豆鞋",
              imgurl: "http://img.haodanku.com/32f1673e6784389d2c9aa793c7b2abbe-600"
            },
            {
              son_name: "运动鞋",
              imgurl: "http://img.haodanku.com/9449c2e63a06f058a48f788c82591d00-600"
            },
            {
              son_name: "高跟鞋",
              imgurl: "http://img.haodanku.com/0ee8f1f3483c3faa69f5ef1f129cfac5-600"
            }
          ]
        }
      ]
    }
  ];
  const _sfc_main$h = {
    __name: "index",
    emits: ["itemClick"],
    setup(__props, { emit }) {
      const showCategoryIndex = vue.ref(1);
      const headerPosition = vue.ref("fixed");
      const categoryList = vue.ref(testData);
      onPageScroll((e2) => {
        if (e2.scrollTop >= 0) {
          headerPosition.value = "fixed";
        } else {
          headerPosition.value = "absolute";
        }
      });
      onLoad(() => {
      });
      const showCategory = (index) => {
        showCategoryIndex.value = index;
      };
      const toCategory = (item) => {
        uni.navigateTo({
          url: "/pages/category/categoryproductlist"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "category-list" }, [
            vue.createCommentVNode(" 左侧分类导航 "),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "left"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(categoryList.value, (category, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["row", [category.cid == showCategoryIndex.value ? "on" : ""]]),
                    key: category.cid,
                    onClick: ($event) => showCategory(category.cid)
                  }, [
                    vue.createElementVNode("view", { class: "text" }, [
                      vue.createElementVNode("view", { class: "block" }),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(category.main_name),
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
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(categoryList.value, (category, index) => {
                  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                    class: "category",
                    key: index
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(category.data, (box, i2) => {
                        return vue.openBlock(), vue.createElementBlock("view", { key: i2 }, [
                          vue.createElementVNode("view", { style: { "text-align": "center" } }, [
                            vue.createElementVNode("text", { style: { "color": "gainsboro" } }, "—"),
                            vue.createElementVNode(
                              "text",
                              { style: { "color": "#000000", "margin-right": "8px", "margin-left": "8px" } },
                              vue.toDisplayString(box.next_name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { style: { "color": "gainsboro" } }, "—")
                          ]),
                          box.info.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "list"
                          }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(box.info, (item, i1) => {
                                return vue.openBlock(), vue.createElementBlock("view", {
                                  class: "box",
                                  key: i1
                                }, [
                                  vue.createElementVNode("image", {
                                    onClick: ($event) => toCategory(),
                                    src: item.imgurl,
                                    "lazy-load": "https://taobao.xianmxkj.com/logo.png"
                                  }, null, 8, ["onClick", "src"]),
                                  vue.createElementVNode(
                                    "view",
                                    { class: "text" },
                                    vue.toDisplayString(item.son_name),
                                    1
                                    /* TEXT */
                                  )
                                ]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : vue.createCommentVNode("v-if", true)
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])), [
                    [vue.vShow, category.cid == showCategoryIndex.value]
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
  const PagesCategoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "D:/graduationProject/pet-front-end/pages/category/index.vue"]]);
  const _sfc_main$g = {
    __name: "categoryproductlist",
    setup(__props) {
      const goodsList = vue.ref([]);
      const pageNo = vue.ref(1);
      const pageSize = vue.ref(10);
      const isNoMore = vue.ref(false);
      const isLoading = vue.ref(false);
      const isInit = vue.ref(false);
      onLoad(() => {
        isLoading.value = true;
        setTimeout(() => {
          const res = [
            {
              goodsPic: "/static/goods/11.jpg",
              goodsName: "Helmetphone MT1 Neo智能骑行头盔(山地/框宽度）",
              goodsDesc: "一键语音",
              goodsPrice: 599,
              goodsOriginPrice: 899,
              rateNum: 1068,
              ratePercent: "99%"
            },
            {
              goodsPic: "/static/goods/12.jpg",
              goodsName: "海德HEAD智能跳绳S1双绳版",
              goodsDesc: "结合WATCH GT3等穿戴设备一起使用",
              goodsPrice: 399,
              goodsOriginPrice: 699,
              rateNum: 56,
              ratePercent: "98%"
            }
          ];
          goodsList.value = res;
          isInit.value = true;
          isLoading.value = false;
          if (!goodsList.value || goodsList.value.length < pageSize.value) {
            isNoMore.value = true;
          }
        }, 1500);
      });
      onReachBottom(() => {
        if (isNoMore.value) {
          return;
        }
        isLoading.value = true;
        pageNo.value += 1;
        setTimeout(() => {
          const res = [
            {
              goodsPic: "/static/goods/11.jpg",
              goodsName: "Helmetphone MT1 Neo智能骑行头盔(山地/框宽度）",
              goodsDesc: "一键语音",
              tags: [{
                name: "限时直降300元",
                type: "hot"
              }, {
                name: "赠积分",
                type: "default"
              }],
              goodsPrice: 599,
              goodsOriginPrice: 899,
              rateNum: 1068,
              ratePercent: "99%"
            },
            {
              goodsPic: "/static/goods/12.jpg",
              goodsName: "海德HEAD智能跳绳S1双绳版",
              goodsDesc: "结合WATCH GT3等穿戴设备一起使用",
              tags: [{
                name: "限时直降300元",
                type: "hot"
              }],
              goodsPrice: 399,
              goodsOriginPrice: 699,
              rateNum: 56,
              ratePercent: "98%"
            }
          ];
          goodsList = [...goodsList.value, ...res];
          isLoading.value = false;
          if (!res || res.length < pageSize.value) {
            isNoMore.value = true;
          }
        }, 1500);
      });
      const clickItem = (index) => {
        formatAppLog("log", "at pages/category/categoryproductlist.vue:139", "当前点击的商品下标是" + index);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          goodsList.value && goodsList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "t-goods-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(goodsList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "t-goods-item",
                  key: index,
                  onClick: ($event) => clickItem(index)
                }, [
                  vue.createCommentVNode(" 图片 "),
                  vue.createElementVNode("image", {
                    class: "t-goods-img",
                    src: item.goodsPic
                  }, null, 8, ["src"]),
                  vue.createCommentVNode(" 商品名称 "),
                  vue.createElementVNode("view", { class: "t-goods-name" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.goodsName),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createCommentVNode(" 商品描述 "),
                  vue.createElementVNode("view", { class: "t-goods-desc" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.goodsDesc),
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
                      vue.toDisplayString(item.goodsPrice),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "t-p2" },
                      "¥" + vue.toDisplayString(item.goodsOriginPrice),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "t-rate" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.rateNum) + "人评价",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "t-rate-percent" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.ratePercent) + "好评",
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
          ])) : isInit.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "t-empty"
          }, [
            vue.createElementVNode("image", { src: "/static/goods.png" }),
            vue.createElementVNode("view", { class: "t-empty-desc" }, "没有商品哦~")
          ])) : vue.createCommentVNode("v-if", true),
          isLoading.value || isNoMore.value && goodsList.value && goodsList.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
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
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesCategoryCategoryproductlist = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-e66e2993"], ["__file", "D:/graduationProject/pet-front-end/pages/category/categoryproductlist.vue"]]);
  const _sfc_main$f = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$b], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$e = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor, "border-bottom-color": $options.themeColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$a], ["__scopeId", "data-v-26544265"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const en = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  const zhHans = {
    "uni-goods-nav.options.shop": "店铺",
    "uni-goods-nav.options.cart": "购物车",
    "uni-goods-nav.buttonGroup.addToCart": "加入购物车",
    "uni-goods-nav.buttonGroup.buyNow": "立即购买"
  };
  const zhHant = {
    "uni-goods-nav.options.shop": "店鋪",
    "uni-goods-nav.options.cart": "購物車",
    "uni-goods-nav.buttonGroup.addToCart": "加入購物車",
    "uni-goods-nav.buttonGroup.buyNow": "立即購買"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(messages);
  const _sfc_main$d = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t$1("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t$1("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t$1("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t$1("uni-goods-nav.buttonGroup.buyNow"),
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$9], ["__scopeId", "data-v-8226c5e1"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
  const _sfc_main$c = {
    __name: "productdetail",
    setup(__props) {
      const backLayer = () => {
        uni.navigateBack();
      };
      const gotoCat = () => {
        uni.navigateTo({
          url: "/pages/cat/cat"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$3);
        const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_uni_nav_bar, {
              statusBar: "false",
              "left-icon": "left",
              "right-icon": "cart",
              color: "white",
              title: "",
              "background-color": "#007AFF",
              onClickLeft: backLayer,
              onClickRight: gotoCat
            }),
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
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, "A")
                ]),
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item uni-bg-green" }, "B")
                ]),
                vue.createElementVNode("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item uni-bg-blue" }, "C")
                ])
              ], 8, ["autoplay", "interval", "duration"])
            ]),
            vue.createCommentVNode(" 价格 描述 "),
            vue.createElementVNode("view", { class: "detail" }, [
              vue.createCommentVNode(" 价格 "),
              vue.createElementVNode("view", { class: "price" }, [
                vue.createElementVNode("span", { class: "goods-price" }, "￥22.9"),
                vue.createElementVNode("span", { class: "goods-origin-price" }, [
                  vue.createTextVNode("原价￥"),
                  vue.createElementVNode("del", null, "29.9")
                ])
              ]),
              vue.createCommentVNode(" 描述 "),
              vue.createElementVNode("view", { class: "describe" }, [
                vue.createElementVNode("b", null, "麦德氏In-Vet医护系列益生菌25g/盒")
              ]),
              vue.createCommentVNode(" 已售 "),
              vue.createElementVNode("view", { class: "rate-num" }, "已售41")
            ]),
            vue.createCommentVNode(" 商品页面 "),
            vue.createElementVNode("view", { class: "goods-list-image" }, [
              vue.createElementVNode("img", {
                src: "/static/image/longPic1.jpg",
                alt: ""
              }),
              vue.createElementVNode("img", {
                src: "/static/image/longPic.jpg",
                alt: ""
              })
            ]),
            vue.createCommentVNode(" 加入购物车或者立即购买 "),
            vue.createElementVNode("view", { class: "goods-carts" }, [
              vue.createVNode(_component_uni_goods_nav, {
                options: _ctx.options,
                fill: true,
                "button-group": _ctx.buttonGroup,
                onClick: _ctx.onClick,
                onButtonClick: _ctx.buttonClick
              }, null, 8, ["options", "button-group", "onClick", "onButtonClick"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesCategoryProductdetail = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "D:/graduationProject/pet-front-end/pages/category/productdetail.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        carNum: 0,
        //加入到购物车的总个数
        carPrice: "0.00",
        //加入到购物车的总价钱
        // 加入到购物车的商品列表
        insideCarGoods: [],
        sumPrice: 0,
        showHeader: true,
        selectedList: [],
        isAllselected: false,
        //控制滑动效果
        theIndex: null,
        oldIndex: null,
        isStop: false
      };
    },
    onLoad(event) {
      this.insideCarGoods = JSON.parse(decodeURIComponent(event.detailDate));
      this.carNum = this.insideCarGoods.length;
      this.insideCarGoods.forEach((item) => {
        item.selected = false;
      });
    },
    onShow() {
      this.checked = false;
    },
    methods: {
      //控制左滑删除效果-begin
      touchStart(index, event) {
        if (event.touches.length > 1) {
          this.isStop = true;
          return;
        }
        this.oldIndex = this.theIndex;
        this.theIndex = null;
        this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
      },
      touchMove(index, event) {
        if (event.touches.length > 1) {
          this.isStop = true;
          return;
        }
        let moveX = event.touches[0].pageX - this.initXY[0];
        let moveY = event.touches[0].pageY - this.initXY[1];
        if (this.isStop || Math.abs(moveX) < 5) {
          return;
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
          this.isStop = true;
          return;
        }
        if (moveX < 0) {
          this.theIndex = index;
          this.isStop = true;
        } else if (moveX > 0) {
          if (this.theIndex != null && this.oldIndex == this.theIndex) {
            this.oldIndex = index;
            this.theIndex = null;
            this.isStop = true;
            setTimeout(() => {
              this.oldIndex = null;
            }, 150);
          }
        }
      },
      touchEnd(index, $event) {
        this.isStop = false;
      },
      //删除商品
      deleteGoods(id) {
        let len = this.insideCarGoods.length;
        for (let i2 = 0; i2 < len; i2++) {
          if (id == this.insideCarGoods[i2].id) {
            this.insideCarGoods.splice(i2, 1);
            break;
          }
        }
        this.selectedList.splice(this.selectedList.indexOf(id), 1);
        this.sumFun();
        this.oldIndex = null;
        this.theIndex = null;
      },
      // 删除商品 底部
      deleteList() {
        this.insideCarGoods = [];
        this.selectedList = [];
        this.isAllselected = this.selectedList.length == this.insideCarGoods.length && this.insideCarGoods.length > 0;
        this.sumFun();
        this.carNum = 0;
      },
      // 选中商品
      selectedTap(item) {
        item.selected = !item.selected;
        if (item.selected) {
          this.selectedList.push(item);
        } else {
          const index = this.selectedList.findIndex((selectedItem) => selectedItem.id === item.id);
          if (index !== -1) {
            this.selectedList.splice(index, 1);
          }
        }
        this.sumFun();
      },
      //全选
      allSelectTap() {
        let arr = [];
        this.insideCarGoods.forEach((item) => {
          item.selected = this.isAllselected ? false : true;
          arr.push(item);
        });
        this.selectedList = this.isAllselected ? [] : arr;
        this.isAllselected = this.isAllselected || this.insideCarGoods.length == 0 ? false : true;
        this.sumFun();
      },
      onChange(e2) {
        this.insideCarGoods[e2.name].itemAddNum = e2.value;
        this.sumFun();
      },
      // 合计
      sumFun() {
        this.sumPrice = 0;
        this.selectedList.forEach((item) => {
          this.sumPrice += item.itemAddNum * item.price;
        });
        getApp().globalData.deleteCarNum = this.insideCarGoods.length;
        getApp().globalData.globalInsideCarGoods = this.insideCarGoods;
      },
      //清空购物车
      clearCar() {
        this.insideCarGoods = [], this.carPrice = "0.00";
      },
      // 全选
      checkedAll() {
        this.checked = !this.checked;
        let flag = this.checked, items = this.cartList;
        items.forEach((val) => {
          if (flag) {
            val.check = true;
          } else {
            val.check = false;
          }
        });
      },
      //跳转确认订单页面
      toConfirmation() {
        if (this.selectedList.length < 1) {
          uni.showToast({
            title: "请选择商品结算",
            icon: "none"
          });
          return;
        }
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
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = vue.resolveComponent("u-image");
    const _component_u_number_box = vue.resolveComponent("u-number-box");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "layer-box" }, [
        vue.createCommentVNode(" 商品列表 "),
        vue.createElementVNode("view", { class: "goods-list" }, [
          $data.insideCarGoods.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "tis"
          }, "暂无商品~")) : vue.createCommentVNode("v-if", true),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.insideCarGoods, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "row",
                key: index
              }, [
                vue.createCommentVNode(" 滑动删除按钮 "),
                vue.createElementVNode("view", {
                  class: "menu",
                  onClick: vue.withModifiers(($event) => $options.deleteGoods(item.id), ["stop"])
                }, [
                  vue.createElementVNode("image", {
                    class: "icon_dele",
                    src: "/static/images/delete.png"
                  })
                ], 8, ["onClick"]),
                vue.createCommentVNode(" 商品 "),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["carrier", [$data.theIndex == index ? "open" : $data.oldIndex == index ? "close" : ""]]),
                  onTouchstart: ($event) => $options.touchStart(index, $event),
                  onTouchmove: ($event) => $options.touchMove(index, $event),
                  onTouchend: ($event) => $options.touchEnd(index, $event)
                }, [
                  vue.createCommentVNode(" checkbox "),
                  vue.createElementVNode("view", {
                    class: "checkbox-box",
                    onClick: ($event) => $options.selectedTap(item)
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
                    vue.createVNode(_component_u_image, {
                      class: "tp_img",
                      src: item.picUrl,
                      fade: true,
                      radius: "5",
                      width: "80",
                      height: "80",
                      duration: "450"
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "info" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "title" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "price-number" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "price" },
                          "￥" + vue.toDisplayString(item.price),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", { class: "number" }, [
                          vue.createVNode(_component_u_number_box, {
                            modelValue: item.itemAddNum,
                            "onUpdate:modelValue": ($event) => item.itemAddNum = $event,
                            name: index,
                            integer: "",
                            onChange: $options.onChange
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
          onClick: _cache[0] || (_cache[0] = (...args) => $options.allSelectTap && $options.allSelectTap(...args))
        }, [
          vue.createElementVNode("view", { class: "checkbox" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass([$data.isAllselected ? "on" : ""])
              },
              null,
              2
              /* CLASS */
            )
          ]),
          vue.createElementVNode("view", { class: "text" }, "全选")
        ]),
        $data.selectedList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "delBtn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.deleteList && $options.deleteList(...args))
        }, "删除")) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "settlement" }, [
          vue.createElementVNode("view", { class: "footer_sum" }, [
            vue.createTextVNode("合计:"),
            vue.createElementVNode(
              "view",
              { class: "footer_price" },
              "￥" + vue.toDisplayString($data.sumPrice),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "footer_but",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.toConfirmation && $options.toConfirmation(...args))
            },
            "结算(" + vue.toDisplayString($data.selectedList.length) + ")",
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const PagesCatCat = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8], ["__file", "D:/graduationProject/pet-front-end/pages/cat/cat.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        colors: "#2979FF",
        addressList: [{
          name: "小明",
          phone: "12345678915",
          address: "佛山市南海区",
          moreAddres: "桂城街道",
          isdefult: 1,
          id: 1
        }, {
          name: "小红",
          phone: "12345678915",
          address: "广州市海珠区",
          moreAddres: "昌岗路15号",
          isdefult: 0,
          id: 2
        }]
      };
    },
    props: {
      // colors: {
      // 	type: String
      // },
      // addressList: {
      // 	type: Array
      // }
    },
    methods: {
      editAddress(item) {
        this.$emit("editClick", item);
        uni.navigateTo({
          url: "/pages/my/EditAddress"
        });
      },
      //选择收货地址后 返回上一层路由
      onsetAddress(item) {
        this.$emit("chooseClick", item);
      },
      delAddress(item, index) {
        uni.showModal({
          title: "提示",
          content: "确认要删除该地址吗?",
          confirmText: "删除",
          confirmColor: this.colors,
          success: (res) => {
            if (res.confirm) {
              uni.showToast({
                title: "删除成功~",
                icon: "none"
              });
              this.addressList.splice(index, 1);
            }
          }
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_icon_base = resolveEasycom(vue.resolveDynamicComponent("icon-base"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "myaddress" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.addressList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: "order_address"
          }, [
            vue.createElementVNode("view", { class: "address_box" }, [
              vue.createElementVNode("view", { class: "weizhi_icon" }, [
                vue.createVNode(_component_icon_base, {
                  type: "dizhiguanli",
                  color: $data.colors,
                  size: 50
                }, null, 8, ["color"])
              ]),
              vue.createElementVNode("view", {
                onClick: ($event) => $options.onsetAddress(item)
              }, [
                vue.createElementVNode("view", { class: "center" }, [
                  item.isdefult == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "moren"
                  }, [
                    vue.createVNode(_component_icon_base, {
                      type: "moren",
                      color: $data.colors,
                      size: 100
                    }, null, 8, ["color"]),
                    vue.createCommentVNode(` <text class="iconfont icon-moren" :style="'color:' + colors"></text> `)
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", { class: "name" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "text1" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "phones" },
                      vue.toDisplayString(item.phone),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "address_name" },
                    vue.toDisplayString(item.address) + vue.toDisplayString(item.moreAddres),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]),
              vue.createElementVNode("view", { class: "caozuo" }, [
                vue.createElementVNode("view", {
                  class: "del",
                  onClick: ($event) => $options.delAddress(item, index)
                }, [
                  vue.createElementVNode("text", { class: "iconfont icon-shanchu" }),
                  vue.createTextVNode(" 删除 ")
                ], 8, ["onClick"]),
                vue.createElementVNode("view", {
                  class: "edit",
                  onClick: ($event) => $options.editAddress(item)
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
    ]);
  }
  const PagesMyAddress = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7], ["__scopeId", "data-v-eda7be84"], ["__file", "D:/graduationProject/pet-front-end/pages/my/Address.vue"]]);
  const _sfc_main$9 = {
    __name: "SelectCity",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    emits: ["hodeShow"],
    setup(__props, { emit }) {
      const provinces = vue.ref(["广东省"]);
      const citys = vue.ref(["潮州市"]);
      const areas = vue.ref(["庵埠镇"]);
      const value = vue.ref([0, 0, 0]);
      const handleNYZAreaCancle = () => {
        emit("hideShow", { detail: false });
      };
      const handleNYZAreaSelect = () => {
      };
      const handleNYZAreaChange = () => {
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
            [vue.vShow, __props.show == true]
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
                value: value.value
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
  const SelectCit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-79233ee6"], ["__file", "D:/graduationProject/pet-front-end/pages/my/components/SelectCity.vue"]]);
  const _sfc_main$8 = {
    components: {
      SelectCit
    },
    data() {
      return {
        colors: "#f37b1d",
        show: false,
        province: "广东省",
        city: "广州市",
        area: "天河区",
        addressData: {
          name: "",
          phone: "",
          address: "",
          moreAddres: "",
          isdefult: 0
        },
        isShow: true
      };
    },
    methods: {
      openPicker() {
        formatAppLog("log", "at pages/my/EditAddress.vue:75", "执行打开地址选择器");
        this.show = true;
      },
      changeClick(value, value2, value3) {
        formatAppLog("log", "at pages/my/EditAddress.vue:81", "地址选择器 = " + value + value2 + value3);
        this.province = value;
        this.city = value2;
        this.area = value3;
      },
      onhideShow() {
        this.show = false;
        formatAppLog("log", "at pages/my/EditAddress.vue:90", "执行了关闭地址选择器");
      },
      //选中省市区
      onsetCity(e2) {
        let data = e2.detail.target.dataset;
        let address = data.province + data.city + data.area;
        this.show = false;
        this.addressData.address = address;
      },
      // 
      switchChange(e2) {
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SelectCit = vue.resolveComponent("SelectCit");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "editaddress" }, [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "nominal" }, "收货人"),
            vue.createElementVNode("view", { class: "input" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  placeholder: "请输入收货人姓名",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.addressData.name = $event),
                  type: "text"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.addressData.name]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "nominal" }, "电话号码"),
            vue.createElementVNode("view", { class: "input" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  placeholder: "请输入收货人电话号码",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.addressData.phone = $event),
                  type: "number",
                  maxlength: "11"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.addressData.phone]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "nominal" }, "所在地区"),
            vue.createElementVNode("view", {
              class: "input selectcity",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.openPicker && $options.openPicker(...args))
            }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  placeholder: "请选择省市区",
                  disabled: "",
                  type: "text",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.addressData.address = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.addressData.address]
              ]),
              vue.createElementVNode("image", {
                src: "/static/right.png",
                class: "rights"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", { class: "nominal" }, "详细地址"),
            vue.createElementVNode("view", { class: "input" }, [
              $data.show == false ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                "textarea",
                {
                  key: 0,
                  style: { "font-size": "28rpx" },
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.addressData.moreAddres = $event),
                  "auto-height": "true",
                  placeholder: "输入详细地址"
                },
                null,
                512
                /* NEED_PATCH */
              )), [
                [vue.vModelText, $data.addressData.moreAddres]
              ]) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("view", {
              class: "nominal",
              style: { "color": "666", "margin-top": "10rpx" }
            }, "设为默认地址"),
            vue.createElementVNode("view", { class: "input switch" }, [
              vue.createElementVNode("switch", {
                color: $data.colors,
                style: { "transform": "scale(0.8)" },
                onChange: _cache[5] || (_cache[5] = (...args) => $options.switchChange && $options.switchChange(...args)),
                checked: $data.addressData.isdefult == 1
              }, null, 40, ["color", "checked"])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "save" }, [
          vue.createElementVNode(
            "view",
            {
              class: "btn",
              style: vue.normalizeStyle("background:" + $data.colors)
            },
            "保存地址",
            4
            /* STYLE */
          )
        ]),
        vue.createCommentVNode(" 省市区选择 province city area初始省市区设置 show:是否显示  @sureSelectArea：确认事件 @hideShow：隐藏事件"),
        vue.createVNode(_component_SelectCit, {
          province: $data.province,
          city: $data.city,
          area: $data.area,
          show: $data.show,
          onChangeClick: $options.changeClick,
          onSureSelectArea: $options.onsetCity,
          onHideShow: $options.onhideShow
        }, null, 8, ["province", "city", "area", "show", "onChangeClick", "onSureSelectArea", "onHideShow"])
      ])
    ]);
  }
  const PagesMyEditAddress = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__scopeId", "data-v-039ae533"], ["__file", "D:/graduationProject/pet-front-end/pages/my/EditAddress.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        value: "请填写",
        sex: [{
          id: 1,
          name: "男"
        }, {
          id: 2,
          name: "女"
        }],
        index: 0,
        region: ["请填写"],
        date: "请填写",
        avater: "",
        description: "",
        url: "",
        nickName: "",
        mobile: "",
        headimg: ""
      };
    },
    methods: {
      bindPickerChange(e2) {
        this.index = e2.detail.value;
      },
      bindRegionChange(e2) {
        this.region = e2.detail.value;
      },
      bindDateChange(e2) {
        this.date = e2.detail.value;
      },
      bindnickName(e2) {
        this.nickName = e2.detail.value;
      },
      bindmobile(e2) {
        this.mobile = e2.detail.value;
      },
      binddescription(e2) {
        this.description = e2.detail.value;
      },
      avatarChoose() {
        let that2 = this;
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"],
          success(res) {
            that2.imgUpload(res.tempFilePaths);
            res.tempFilePaths;
          }
        });
      },
      getUserInfo() {
        uni.getUserProfile({
          desc: "用于完善会员资料",
          // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            formatAppLog("log", "at pages/my/EditPerson.vue:123", res);
            uni.showToast({
              title: "已授权",
              icon: "none",
              duration: 2e3
            });
          }
        });
      },
      getphonenumber(e2) {
        if (e2.detail.iv) {
          formatAppLog("log", "at pages/my/EditPerson.vue:134", e2.detail.iv);
          uni.showToast({
            title: "已授权",
            icon: "none",
            duration: 2e3
          });
        }
      },
      savaInfo() {
        let that2 = this;
        let nickname = that2.nickName;
        let headimg = that2.headimg;
        let gender = that2.index + 1;
        let mobile = that2.mobile;
        let region = that2.region;
        let birthday = that2.date;
        let description = that2.description;
        let updata = {};
        if (!nickname) {
          uni.showToast({
            title: "请填写昵称",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        updata.nickname = nickname;
        if (!headimg) {
          headimg = that2.avater;
        }
        updata.headimg = headimg;
        updata.gender = gender;
        if (that2.isPoneAvailable(mobile)) {
          updata.mobile = mobile;
        } else {
          uni.showToast({
            title: "手机号码有误，请重填",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        if (region.length == 1) {
          uni.showToast({
            title: "请选择常住地",
            icon: "none",
            duration: 2e3
          });
          return;
        } else {
          updata.province = region[0];
          updata.city = region[1];
          updata.area = region[2];
        }
        if (birthday == "0000-00-00") {
          uni.showToast({
            title: "请选择生日",
            icon: "none",
            duration: 2e3
          });
          return;
        }
        updata.birthday = birthday;
        updata.description = description;
        that2.updata(updata);
      },
      isPoneAvailable(poneInput) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(poneInput)) {
          return false;
        } else {
          return true;
        }
      },
      async updata(datas) {
      },
      imgUpload(file) {
        let that2 = this;
        uni.uploadFile({
          header: {
            Authorization: uni.getStorageSync("token")
          },
          url: "/api/upload/image",
          //需传后台图片上传接口
          filePath: file[0],
          name: "file",
          formData: {
            type: "user_headimg"
          },
          success: function(res) {
            var data = JSON.parse(res.data);
            data = data.data;
            that2.avater = that2.url + data.img;
            that2.headimg = that2.url + data.img;
          },
          fail: function(error) {
            formatAppLog("log", "at pages/my/EditPerson.vue:234", error);
          }
        });
      }
    },
    onLoad() {
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "ui-all" }, [
        vue.createElementVNode("view", {
          class: "avatar",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.avatarChoose && $options.avatarChoose(...args))
        }, [
          vue.createElementVNode("view", { class: "imgAvatar" }, [
            vue.createElementVNode(
              "view",
              {
                class: "iavatar",
                style: vue.normalizeStyle("background: url(" + $data.avater + ") no-repeat center/cover #eeeeee;")
              },
              null,
              4
              /* STYLE */
            )
          ]),
          $data.avater ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "修改头像")) : vue.createCommentVNode("v-if", true),
          !$data.avater ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "授权微信")) : vue.createCommentVNode("v-if", true),
          !$data.avater ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 2,
            "open-type": "getUserInfo",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.getUserInfo && $options.getUserInfo(...args)),
            class: "getInfo"
          })) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "ui-list" }, [
          vue.createElementVNode("text", null, "昵称"),
          vue.createElementVNode("input", {
            type: "text",
            placeholder: $data.value,
            value: $data.nickName,
            onInput: _cache[2] || (_cache[2] = (...args) => $options.bindnickName && $options.bindnickName(...args)),
            "placeholder-class": "place"
          }, null, 40, ["placeholder", "value"])
        ]),
        vue.createElementVNode("view", { class: "ui-list" }, [
          vue.createElementVNode("text", null, "手机号"),
          $data.mobile ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            type: "tel",
            placeholder: $data.value,
            value: $data.mobile,
            onInput: _cache[3] || (_cache[3] = (...args) => $options.bindmobile && $options.bindmobile(...args)),
            "placeholder-class": "place"
          }, null, 40, ["placeholder", "value"])) : vue.createCommentVNode("v-if", true),
          !$data.mobile ? (vue.openBlock(), vue.createElementBlock(
            "button",
            {
              key: 1,
              "open-type": "getPhoneNumber",
              onGetphonenumber: _cache[4] || (_cache[4] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
              class: "getInfo bun"
            },
            "授权手机号",
            32
            /* HYDRATE_EVENTS */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "ui-list right" }, [
          vue.createElementVNode("text", null, "性别"),
          vue.createElementVNode("picker", {
            onChange: _cache[5] || (_cache[5] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
            mode: "selector",
            "range-key": "name",
            value: $data.index,
            range: $data.sex
          }, [
            vue.createElementVNode(
              "view",
              { class: "picker" },
              vue.toDisplayString($data.sex[$data.index].name),
              1
              /* TEXT */
            )
          ], 40, ["value", "range"])
        ]),
        vue.createElementVNode("view", { class: "ui-list right" }, [
          vue.createElementVNode("text", null, "常住地"),
          vue.createElementVNode(
            "picker",
            {
              onChange: _cache[6] || (_cache[6] = (...args) => $options.bindRegionChange && $options.bindRegionChange(...args)),
              mode: "region"
            },
            [
              vue.createElementVNode(
                "view",
                { class: "picker" },
                vue.toDisplayString($data.region[0]) + " " + vue.toDisplayString($data.region[1]) + " " + vue.toDisplayString($data.region[2]),
                1
                /* TEXT */
              )
            ],
            32
            /* HYDRATE_EVENTS */
          )
        ]),
        vue.createElementVNode("view", { class: "ui-list right" }, [
          vue.createElementVNode("text", null, "生日"),
          vue.createElementVNode("picker", {
            mode: "date",
            value: $data.date,
            onChange: _cache[7] || (_cache[7] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode(
              "view",
              { class: "picker" },
              vue.toDisplayString($data.date),
              1
              /* TEXT */
            )
          ], 40, ["value"])
        ]),
        vue.createElementVNode("view", { class: "ui-list" }, [
          vue.createElementVNode("text", null, "签名"),
          vue.createElementVNode("textarea", {
            placeholder: $data.value,
            "placeholder-class": "place",
            value: $data.description,
            onInput: _cache[8] || (_cache[8] = (...args) => $options.binddescription && $options.binddescription(...args))
          }, null, 40, ["placeholder", "value"])
        ]),
        vue.createElementVNode("button", {
          class: "save",
          onClick: _cache[9] || (_cache[9] = (...args) => $options.savaInfo && $options.savaInfo(...args))
        }, "保 存 修 改")
      ])
    ]);
  }
  const PagesMyEditPerson = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__file", "D:/graduationProject/pet-front-end/pages/my/EditPerson.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "D:/graduationProject/pet-front-end/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const _sfc_main$5 = {
    props: {
      apprises: {
        type: Array,
        value: []
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "commentcomponent" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.apprises, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: "commentitem"
          }, [
            vue.createElementVNode("view", { class: "comment_top" }, [
              vue.createElementVNode("image", {
                class: "headpic",
                src: item.avatarUrl ? item.avatarUrl : `./static/image/cat1.jpg`
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", { class: "content_top" }, [
                  vue.createElementVNode("view", { class: "" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "cm_name" },
                      vue.toDisplayString(item.name ? item.name : "匿名用户"),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
                  vue.createElementVNode("view", { class: "cm_rate" }, [
                    vue.createVNode(_component_uni_rate, {
                      value: item.commentStar,
                      readonly: ""
                    }, null, 8, ["value"])
                  ]),
                  vue.createElementVNode(
                    "text",
                    { class: "cm_time" },
                    vue.toDisplayString(item.commentDate),
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
                vue.toDisplayString(item.teachLevel),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "cm_info" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.appraises, (list, i2) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        class: "cm_info_text",
                        key: i2,
                        "wx:key": "index"
                      },
                      vue.toDisplayString(list),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                vue.createCommentVNode(" <text>认真敬业</text>\r\n					<text>场地好</text>\r\n					<text>热情周到</text> ")
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const Evaluate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__scopeId", "data-v-32f129a4"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/Evaluate.vue"]]);
  const _sfc_main$4 = {
    name: "vk-data-input-number-box",
    emits: ["update:modelValue", "input", "change", "blur", "plus", "minus"],
    props: {
      // 预显示的数字
      value: {
        type: Number,
        default: 1
      },
      modelValue: {
        type: Number,
        default: 1
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: "#FFFFFF"
      },
      // 最小值
      min: {
        type: Number,
        default: 0
      },
      // 最大值
      max: {
        type: Number,
        default: 99999
      },
      // 步进值，每次加或减的值
      step: {
        type: Number,
        default: 1
      },
      // 步进值，首次增加或最后减的值
      stepFirst: {
        type: Number,
        default: 0
      },
      // 是否只能输入 step 的倍数
      stepStrictly: {
        type: Boolean,
        default: false
      },
      // 是否禁用加减操作
      disabled: {
        type: Boolean,
        default: false
      },
      // input的字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 26
      },
      // 加减图标的颜色
      color: {
        type: String,
        default: "#323233"
      },
      // input宽度，单位rpx
      inputWidth: {
        type: [Number, String],
        default: 80
      },
      // input高度，单位rpx
      inputHeight: {
        type: [Number, String],
        default: 50
      },
      // index索引，用于列表中使用，让用户知道是哪个numberbox发生了变化，一般使用for循环出来的index值即可
      index: {
        type: [Number, String],
        default: ""
      },
      // 是否禁用输入框，与disabled作用于输入框时，为OR的关系，即想要禁用输入框，又可以加减的话
      // 设置disabled为false，disabledInput为true即可
      disabledInput: {
        type: Boolean,
        default: false
      },
      // 输入框于键盘之间的距离
      cursorSpacing: {
        type: [Number, String],
        default: 100
      },
      // 是否开启长按连续递增或递减
      longPress: {
        type: Boolean,
        default: true
      },
      // 开启长按触发后，每触发一次需要多久
      pressTime: {
        type: [Number, String],
        default: 250
      },
      // 是否只能输入大于或等于0的整数(正整数)
      positiveInteger: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      valueCom(v1, v2) {
        if (!this.changeFromInner) {
          this.inputVal = v1;
          this.$nextTick(function() {
            this.changeFromInner = false;
          });
        }
      },
      inputVal(v1, v2) {
        if (v1 == "")
          return;
        let value = 0;
        let tmp = this.isNumber(v1);
        if (tmp && v1 >= this.min && v1 <= this.max)
          value = v1;
        else
          value = v2;
        if (this.positiveInteger) {
          if (v1 < 0 || String(v1).indexOf(".") !== -1) {
            value = v2;
            this.$nextTick(() => {
              this.inputVal = v2;
            });
          }
        }
        this.handleChange(value, "change");
      },
      min(v1) {
        if (v1 !== void 0 && v1 != "" && this.valueCom < v1) {
          this.$emit("input", v1);
          this.$emit("update:modelValue", v1);
        }
      },
      max(v1) {
        if (v1 !== void 0 && v1 != "" && this.valueCom > v1) {
          this.$emit("input", v1);
          this.$emit("update:modelValue", v1);
        }
      }
    },
    data() {
      return {
        inputVal: 1,
        // 输入框中的值，不能直接使用props中的value，因为应该改变props的状态
        timer: null,
        // 用作长按的定时器
        changeFromInner: false,
        // 值发生变化，是来自内部还是外部
        innerChangeTimer: null,
        // 内部定时器
        showInput: false
      };
    },
    created() {
      this.inputVal = Number(this.valueCom);
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      getCursorSpacing() {
        return Number(uni.upx2px(this.cursorSpacing));
      }
    },
    methods: {
      // 空点击事件，主要用于解决PC端H5由于无click事件导致触摸位置不准确的问题
      emptyClick() {
      },
      // 触摸事件开始
      btnTouchStart(callback) {
        this[callback]();
        if (!this.longPress)
          return;
        clearInterval(this.timer);
        this.timer = null;
        this.timer = setInterval(() => {
          this[callback]();
        }, this.pressTime);
      },
      // 清除定时器
      clearTimer() {
        this.$nextTick(() => {
          clearInterval(this.timer);
          this.timer = null;
        });
      },
      // 减
      minus() {
        this.computeVal("minus");
      },
      // 加
      plus() {
        this.computeVal("plus");
      },
      // 为了保证小数相加减出现精度溢出的问题
      calcPlus(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e2) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e2) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);
      },
      // 为了保证小数相加减出现精度溢出的问题
      calcMinus(num1, num2) {
        let baseNum, baseNum1, baseNum2;
        try {
          baseNum1 = num1.toString().split(".")[1].length;
        } catch (e2) {
          baseNum1 = 0;
        }
        try {
          baseNum2 = num2.toString().split(".")[1].length;
        } catch (e2) {
          baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        let precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
      },
      computeVal(type) {
        uni.hideKeyboard();
        if (this.disabled)
          return;
        let value = 0;
        if (type === "minus") {
          if (this.stepFirst > 0 && this.inputVal == this.stepFirst) {
            value = this.min;
          } else {
            value = this.calcMinus(this.inputVal, this.step);
          }
        } else if (type === "plus") {
          if (this.stepFirst > 0 && this.inputVal < this.stepFirst) {
            value = this.stepFirst;
          } else {
            value = this.calcPlus(this.inputVal, this.step);
          }
        }
        if (this.stepStrictly) {
          let strictly = value % this.step;
          if (strictly > 0) {
            value -= strictly;
          }
        }
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        this.inputVal = value;
        this.handleChange(value, type);
      },
      // 处理用户手动输入的情况
      onBlur(event) {
        let val = 0;
        let value = event.detail.value;
        if (!/(^\d+$)/.test(value) || value[0] == 0)
          val = this.min;
        val = +value;
        if (this.stepFirst > 0 && this.inputVal < this.stepFirst && this.inputVal > 0) {
          val = this.stepFirst;
        }
        if (this.stepStrictly) {
          let strictly = val % this.step;
          if (strictly > 0) {
            val -= strictly;
          }
        }
        if (val > this.max) {
          val = this.max;
        } else if (val < this.min) {
          val = this.min;
        }
        this.$nextTick(() => {
          this.inputVal = val;
        });
        this.handleChange(val, "blur");
      },
      handleChange(value, type) {
        if (this.disabled)
          return;
        if (this.innerChangeTimer) {
          clearTimeout(this.innerChangeTimer);
          this.innerChangeTimer = null;
        }
        this.changeFromInner = true;
        this.innerChangeTimer = setTimeout(() => {
          this.changeFromInner = false;
        }, 150);
        this.$emit("input", Number(value));
        this.$emit("update:modelValue", Number(value));
        this.$emit(type, {
          // 转为Number类型
          value: Number(value),
          index: this.index
        });
      },
      /**
       * 验证十进制数字
       */
      isNumber(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "vk-data-input-number-box" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-icon-minus", { "u-icon-disabled": $props.disabled || $data.inputVal <= $props.min }]),
          style: vue.normalizeStyle({
            background: $props.bgColor,
            height: $props.inputHeight + "rpx",
            color: $props.color,
            fontSize: $props.size + "rpx",
            minHeight: "1.4em"
          }),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.emptyClick && $options.emptyClick(...args)),
          onTouchstart: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.btnTouchStart("minus"), ["prevent"])),
          onTouchend: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clearTimer && $options.clearTimer(...args), ["stop", "prevent"]))
        },
        [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle("font-size:" + (Number($props.size) + 10) + "rpx"),
              class: "num-btn"
            },
            "－",
            4
            /* STYLE */
          )
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputVal = $event),
        disabled: $props.disabledInput || $props.disabled,
        "cursor-spacing": $options.getCursorSpacing,
        class: vue.normalizeClass([{ "u-input-disabled": $props.disabled }, "u-number-input"]),
        type: "number",
        style: vue.normalizeStyle({
          color: $props.color,
          fontSize: $props.size + "rpx",
          background: $props.bgColor,
          height: $props.inputHeight + "rpx",
          width: $props.inputWidth + "rpx"
        }),
        onBlur: _cache[4] || (_cache[4] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onClick: _cache[5] || (_cache[5] = ($event) => $data.showInput = true)
      }, null, 46, ["disabled", "cursor-spacing"]), [
        [vue.vModelText, $data.inputVal]
      ]),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-icon-plus", { "u-icon-disabled": $props.disabled || $data.inputVal >= $props.max }]),
          style: vue.normalizeStyle({
            background: $props.bgColor,
            height: $props.inputHeight + "rpx",
            color: $props.color,
            fontSize: $props.size + "rpx",
            minHeight: "1.4em"
          }),
          onClick: _cache[6] || (_cache[6] = (...args) => $options.emptyClick && $options.emptyClick(...args)),
          onTouchstart: _cache[7] || (_cache[7] = vue.withModifiers(($event) => $options.btnTouchStart("plus"), ["prevent"])),
          onTouchend: _cache[8] || (_cache[8] = vue.withModifiers((...args) => $options.clearTimer && $options.clearTimer(...args), ["stop", "prevent"]))
        },
        [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle("font-size:" + (Number($props.size) + 10) + "rpx"),
              class: "num-btn"
            },
            "＋",
            4
            /* STYLE */
          )
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      )
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-223c2f5d"], ["__file", "D:/graduationProject/pet-front-end/components/vk-data-input-number-box/vk-data-input-number-box.vue"]]);
  var vk;
  var goodsCache = {};
  const _sfc_main$3 = {
    name: "vk-data-goods-sku-popup",
    emits: ["update:modelValue", "input", "update-goods", "open", "close", "add-cart", "buy-now", "cart", "buy", "num-change"],
    props: {
      // true 组件显示 false 组件隐藏
      value: {
        Type: Boolean,
        default: false
      },
      modelValue: {
        Type: Boolean,
        default: false
      },
      // vk云函数路由模式参数开始-----------------------------------------------------------
      // 商品id
      goodsId: {
        Type: String,
        default: ""
      },
      // vk路由模式框架下的云函数地址
      action: {
        Type: String,
        default: ""
      },
      // vk云函数路由模式参数结束-----------------------------------------------------------
      // 该商品已抢完时的按钮文字
      noStockText: {
        Type: String,
        default: "该商品已抢完"
      },
      // 库存文字
      stockText: {
        Type: String,
        default: "库存"
      },
      // 商品表id的字段名
      goodsIdName: {
        Type: String,
        default: "_id"
      },
      // sku表id的字段名
      skuIdName: {
        Type: String,
        default: "_id"
      },
      // sku_list的字段名
      skuListName: {
        Type: String,
        default: "sku_list"
      },
      // spec_list的字段名
      specListName: {
        Type: String,
        default: "spec_list"
      },
      // 库存的字段名 默认 stock
      stockName: {
        Type: String,
        default: "stock"
      },
      // sku组合路径的字段名
      skuArrName: {
        Type: String,
        default: "sku_name_arr"
      },
      // 默认单规格时的规格组名称
      defaultSingleSkuName: {
        Type: String,
        default: "默认"
      },
      // 模式 1:都显示  2:只显示购物车 3:只显示立即购买 4:显示缺货按钮 默认 1
      mode: {
        Type: Number,
        default: 1
      },
      // 点击遮罩是否关闭组件 true 关闭 false 不关闭 默认true
      maskCloseAble: {
        Type: Boolean,
        default: true
      },
      // 顶部圆角值
      borderRadius: {
        Type: [String, Number],
        default: 0
      },
      // 商品缩略图字段名(未选择sku时)
      goodsThumbName: {
        Type: [String],
        default: "goods_thumb"
      },
      // 商品缩略图背景颜色，如#999999
      goodsThumbBackgroundColor: {
        Type: String,
        default: "transparent"
      },
      // 最小购买数量 默认 1
      minBuyNum: {
        Type: [Number, String],
        default: 1
      },
      // 最大购买数量 默认 100000
      maxBuyNum: {
        Type: [Number, String],
        default: 1e5
      },
      // 步进器步长 默认 1
      stepBuyNum: {
        Type: [Number, String],
        default: 1
      },
      // 是否只能输入 step 的倍数
      stepStrictly: {
        Type: Boolean,
        default: false
      },
      // 自定义获取商品信息的函数,支付宝小程序不支持该属性,请使用localdata属性
      customAction: {
        Type: [Function],
        default: null
      },
      // 本地数据源
      localdata: {
        type: Object
      },
      // 价格的字体颜色
      priceColor: {
        Type: String
      },
      // 立即购买按钮的文字
      buyNowText: {
        Type: String,
        default: "立即购买"
      },
      // 立即购买按钮的字体颜色
      buyNowColor: {
        Type: String
      },
      // 立即购买按钮的背景颜色
      buyNowBackgroundColor: {
        Type: String
      },
      // 加入购物车按钮的文字
      addCartText: {
        Type: String,
        default: "加入购物车"
      },
      // 加入购物车按钮的字体颜色
      addCartColor: {
        Type: String
      },
      // 加入购物车按钮的背景颜色
      addCartBackgroundColor: {
        Type: String
      },
      // 不可点击时,按钮的样式
      disableStyle: {
        Type: Object,
        default: null
      },
      // 按钮点击时的样式
      activedStyle: {
        Type: Object,
        default: null
      },
      // 按钮常态的样式
      btnStyle: {
        Type: Object,
        default: null
      },
      // 是否显示右上角关闭按钮
      showClose: {
        Type: Boolean,
        default: true
      },
      // 关闭按钮的图片地址 https://img.alicdn.com/imgextra/i1/121022687/O1CN01ImN0O11VigqwzpLiK_!!121022687.png
      closeImage: {
        Type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAEyUlEQVR42sSZeWwNURTGp4OqtBo7sSXELragdkpQsRRJ1Zr4hyJiJ9YgxNIg1qANiT+E1i5IY0kVVWtQEbuEKLFGUSH27/ANN5PXmTvzupzkl/tm8t6b7517lnvvC0lKSjJ8WmnQAUSDFqABqALKgl8gD7wE90E2SAeXwFf1SxISErQeVtKHwCgwFsSDSIf3hYFKoCkYDBaDdyAViHdueHmoF6FtwDLQ23b/E7gM7oIcejIERIDaoBFoC8qA8mA8SQNz6W1XC9GY+nCQCCYAk/c+gF0gBZwH312+IxR0BCPBUIaH2A+wHsxHCHxx+gLT5QGN6a2JfG8uvVCDws9oiDQYlxkMGfHyQvARlADTwcXk5OT6foV2kS8ATXidymlcyen1a/Jjl9IJh3hPkjELYqO8Cu0KjjNZvtETw5jFBWXPmGSTGQKSeOn5iQ0kVLL0CINfPNcPbDMKyRCbGzEMBJ+ZD8cChYFdqGTqfsWT8otPGoVsEHsMwxDFs3shNsxJ6BrQ0Po8OGUUkVHsNCVml+cntB1jUWwn2GEUsTEMrASbDK+2CCQ0kYX6nfLLisMmKqUr0S60M+jG10vAm+JSCa8+x7CKlzHwaktV6DiObzUzPJIxFO1BQ12wGtTReO9GetVgY/kjNJzZbcWmTjHfxw51AsRqvL8eOAtmsJuFu3g1l+1ZLB5eDTVZ3K0P7tL0TkWOpSg61kVkBtuuNRthGs+wtJST5aQI7cEbkkRXNYVKgX6kIdYuUhYzMQwxN8tiExCLFqHNeSF9/aem0BzGp5PYQCJ7c/Gsk1RfuSD6U1dNpcDf9ZigTmKbMRZ9iVTsHscGJluW2FMf1SSQWGnBmaB6kCJVTVVNJZE++Cx9drEllS1KMCINpURFmEbBWA63Fz9s95cGIdJgp/zXmT4pZcOvSUzuZttTbblmnc3PIjjmidDXvKgdhMh0JdbzuCjWrbNOVovjS5P7bkPJ/mBESkz2BO0166ybNeJ431S2q+01NntuIq3E0amzjiZtk9tssWyTDzO4525bACK9NAUn68TtkNhpEXpOSagRml+S6iLSSeweHv242Qhl13rRyvoDvDlKyTQny/ZQJ+1iH7vVbEx7OR5UiKVIO7VicgvHCtwrudloMIV7/0uadVYW57O4Wvvi8v4pymlKkrpwvsDeLLZAY2pkwbAB3PSQfC+4cH7l4k1ZH8zkZRq8ecO+Z5rN40JJqnXFuGfaxPCTLjcn0OZOpnArXw8HY4paIbw5CcMgXq6HN2/mt6+XGLrN15tBryIUGavMpCTrfKcDCKkAceA9S8nhAOehhSUyhXpkBxxnP4YM1InugP7cBkjBPcqVUWFYCEROxXiQz5JlXV+IfKh7mpfJac+lZ6V87QXVClBkTc7YWsWTPSDyitfzUTlJlj8TbvE6jluDOdwZ+jX57GLO3ADeuyZrDYi86vV81FD2UVGsmT+5Zl0BnkhoseOEaogL46pqO4v/IqUEyalIR4h85BgjHv6+aUWRMbb7EstX6O0cpT1Gco0ry8fWygLDMjmDnQeBt3Qe7uVfkeugDwVLcsVzGsuwLXbV+I63XNAkG5r/hvgRqgqWs6pJPKrsbvz/Q6yyun0w/h6lP+BnzrCpfPMT2L8FGAA7k1GZ/vnaqAAAAABJRU5ErkJggg=="
      },
      // 是否隐藏库存显示
      hideStock: {
        Type: Boolean,
        default: false
      },
      // 颜色主题
      theme: {
        Type: String,
        default: "default"
      },
      // 请求中的提示
      actionTips: {
        Type: String,
        default: "请求中..."
      },
      // 默认选中的SKU
      defaultSelect: {
        Type: Object
      },
      // 是否使用缓存
      useCache: {
        Type: Boolean,
        default: true
      },
      /**
       * 默认商品,设置该值可快速展示商品
       * 逻辑: 先展示 defaultGoods 信息,再取数据库,再更新页面(通常为更新库存)
       */
      defaultGoods: {
        Type: Object
      },
      /**
       * 金额是否需要除以100
       * 1:金额会除以100
       * 0:金额不会除以100
       */
      amountType: {
        Type: Number,
        default: 1
      },
      // 每次选择完SKU后，购买数量归1，如果有最小购买数量，则设置为最小购买数量
      selectedInit: {
        Type: Boolean,
        default: false
      },
      // 是否开启底部安全区适配，默认true
      safeAreaInsetBottom: {
        Type: Boolean,
        default: true
      }
    },
    data() {
      return {
        complete: false,
        // 组件是否加载完成
        goodsInfo: {},
        // 商品信息
        isShow: false,
        // true 显示 false 隐藏
        initKey: true,
        // 是否需要初始化 true 是 false 否
        shopItemInfo: {},
        // 存放要和选中的值进行匹配的数据（因百度小程序setData不支持中文字段，故不编译shopItemInfo变量）
        selectArr: [],
        // 存放被选中的值
        subIndex: [],
        // 是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断
        selectShop: {},
        // 存放最后选中的商品
        selectNum: this.minBuyNum || 1,
        // 选中数量
        outFoStock: false,
        // 是否全部sku都缺货
        openTime: 0,
        themeColor: {
          // 默认主题
          default: {
            priceColor: "rgb(254, 86, 10)",
            buyNowColor: "#ffffff",
            buyNowBackgroundColor: "rgb(254, 86, 10)",
            addCartColor: "#ffffff",
            addCartBackgroundColor: "rgb(255, 148, 2)",
            btnStyle: {
              color: "#333333",
              borderColor: "#f4f4f4",
              backgroundColor: "#ffffff"
            },
            activedStyle: {
              color: "rgb(254, 86, 10)",
              borderColor: "rgb(254, 86, 10)",
              backgroundColor: "rgba(254,86,10,0.1)"
            },
            disableStyle: {
              color: "#c3c3c3",
              borderColor: "#f6f6f6",
              backgroundColor: "#f6f6f6"
            }
          },
          // 红黑主题
          "red-black": {
            priceColor: "rgb(255, 68, 68)",
            buyNowColor: "#ffffff",
            buyNowBackgroundColor: "rgb(255, 68, 68)",
            addCartColor: "#ffffff",
            addCartBackgroundColor: "rgb(85, 85, 85)",
            activedStyle: {
              color: "rgb(255, 68, 68)",
              borderColor: "rgb(255, 68, 68)",
              backgroundColor: "rgba(255,68,68,0.1)"
            }
          },
          // 黑白主题
          "black-white": {
            priceColor: "rgb(47, 47, 52)",
            buyNowColor: "#ffffff",
            buyNowBackgroundColor: "rgb(47, 47, 52)",
            addCartColor: "rgb(47, 47, 52)",
            addCartBackgroundColor: "rgb(235, 236, 242)",
            // btnStyle:{
            // 	color:"rgb(47, 47, 52)",
            // 	borderColor:"rgba(235,236,242,0.5)",
            // 	backgroundColor:"rgba(235,236,242,0.5)",
            // },
            activedStyle: {
              color: "rgb(47, 47, 52)",
              borderColor: "rgba(47,47,52,0.12)",
              backgroundColor: "rgba(47,47,52,0.12)"
            }
          },
          // 咖啡色主题
          coffee: {
            priceColor: "rgb(195, 167, 105)",
            buyNowColor: "#ffffff",
            buyNowBackgroundColor: "rgb(195, 167, 105)",
            addCartColor: "rgb(195, 167, 105)",
            addCartBackgroundColor: "rgb(243, 238, 225)",
            activedStyle: {
              color: "rgb(195, 167, 105)",
              borderColor: "rgb(195, 167, 105)",
              backgroundColor: "rgba(195, 167, 105,0.1)"
            }
          },
          // 浅绿色主题
          green: {
            priceColor: "rgb(99, 190, 114)",
            buyNowColor: "#ffffff",
            buyNowBackgroundColor: "rgb(99, 190, 114)",
            addCartColor: "rgb(99, 190, 114)",
            addCartBackgroundColor: "rgb(225, 244, 227)",
            activedStyle: {
              color: "rgb(99, 190, 114)",
              borderColor: "rgb(99, 190, 114)",
              backgroundColor: "rgba(99, 190, 114,0.1)"
            }
          }
        }
      };
    },
    created() {
      let that2 = this;
      vk = that2.vk;
      if (that2.valueCom) {
        that2.open();
      }
    },
    mounted() {
    },
    methods: {
      // 初始化
      init(notAutoClick) {
        let that2 = this;
        that2.selectArr = [];
        that2.subIndex = [];
        that2.selectShop = {};
        that2.selectNum = that2.minBuyNum || 1;
        that2.outFoStock = false;
        that2.shopItemInfo = {};
        let specListName = that2.specListName;
        that2.goodsInfo[specListName].map((item) => {
          that2.selectArr.push("");
          that2.subIndex.push(-1);
        });
        that2.checkItem();
        that2.checkInpath(-1);
        if (!notAutoClick)
          that2.autoClickSku();
      },
      // 使用vk路由模式框架获取商品信息
      findGoodsInfo(obj = {}) {
        let that2 = this;
        let { useCache } = obj;
        if (typeof vk == "undefined") {
          that2.toast("custom-action必须是function", "none");
          return false;
        }
        let { actionTips } = that2;
        let actionTitle = "";
        let actionAoading = false;
        if (actionTips !== "custom") {
          actionTitle = useCache ? "" : "请求中...";
        } else {
          actionAoading = useCache ? false : true;
        }
        vk.callFunction({
          url: that2.action,
          title: actionTitle,
          loading: actionAoading,
          data: {
            goods_id: that2.goodsId
          },
          success(data) {
            that2.updateGoodsInfo(data.goodsInfo);
            goodsCache[that2.goodsId] = data.goodsInfo;
            that2.$emit("update-goods", data.goodsInfo);
          },
          fail() {
            that2.updateValue(false);
          }
        });
      },
      updateValue(value) {
        let that2 = this;
        if (value) {
          that2.$emit("open", true);
          that2.$emit("input", true);
          that2.$emit("update:modelValue", true);
        } else {
          that2.$emit("input", false);
          that2.$emit("close", "close");
          that2.$emit("update:modelValue", false);
        }
      },
      // 更新商品信息(库存、名称、图片)
      updateGoodsInfo(goodsInfo) {
        let that2 = this;
        let { skuListName } = that2;
        if (JSON.stringify(that2.goodsInfo) === "{}" || that2.goodsInfo[that2.goodsIdName] !== goodsInfo[that2.goodsIdName]) {
          that2.goodsInfo = goodsInfo;
          that2.initKey = true;
        } else {
          that2.goodsInfo[skuListName] = goodsInfo[skuListName];
        }
        if (that2.initKey) {
          that2.initKey = false;
          that2.init();
        }
        let select_sku_info = that2.getListItem(that2.goodsInfo[skuListName], that2.skuIdName, that2.selectShop[that2.skuIdName]);
        Object.assign(that2.selectShop, select_sku_info);
        that2.defaultSelectSku();
        that2.complete = true;
      },
      async open() {
        let that2 = this;
        that2.openTime = (/* @__PURE__ */ new Date()).getTime();
        let findGoodsInfoRun = true;
        that2.skuListName;
        let useCache = false;
        let goodsInfo = goodsCache[that2.goodsId];
        if (goodsInfo && that2.useCache) {
          useCache = true;
          that2.updateGoodsInfo(goodsInfo);
        } else {
          that2.complete = false;
        }
        if (that2.customAction && typeof that2.customAction === "function") {
          try {
            goodsInfo = await that2.customAction({
              useCache,
              goodsId: that2.goodsId,
              goodsInfo,
              close: function() {
                setTimeout(function() {
                  that2.close();
                }, 500);
              }
            }).catch((err) => {
              setTimeout(function() {
                that2.close();
              }, 500);
            });
          } catch (err) {
            let { message = "" } = err;
            if (message.indexOf(".catch is not a function") > -1) {
              that2.toast("custom-action必须返回一个Promise", "none");
              setTimeout(function() {
                that2.close();
              }, 500);
              return false;
            }
          }
          goodsCache[that2.goodsId] = goodsInfo;
          if (goodsInfo && typeof goodsInfo == "object" && JSON.stringify(goodsInfo) != "{}") {
            findGoodsInfoRun = false;
            that2.updateGoodsInfo(goodsInfo);
            that2.updateValue(true);
          } else {
            that2.toast("未获取到商品信息", "none");
            that2.$emit("input", false);
            return false;
          }
        } else if (typeof that2.localdata !== "undefined" && that2.localdata !== null) {
          goodsInfo = that2.localdata;
          if (goodsInfo && typeof goodsInfo == "object" && JSON.stringify(goodsInfo) != "{}") {
            findGoodsInfoRun = false;
            that2.updateGoodsInfo(goodsInfo);
            that2.updateValue(true);
          } else {
            that2.toast("未获取到商品信息", "none");
            that2.$emit("input", false);
            return false;
          }
        } else {
          if (findGoodsInfoRun)
            that2.findGoodsInfo({ useCache });
        }
      },
      // 监听 - 弹出层收起
      close(s2) {
        let that2 = this;
        if ((/* @__PURE__ */ new Date()).getTime() - that2.openTime < 400) {
          return false;
        }
        if (s2 == "mask") {
          if (that2.maskCloseAble !== false) {
            that2.$emit("input", false);
            that2.$emit("close", "mask");
            that2.$emit("update:modelValue", false);
          }
        } else {
          that2.$emit("input", false);
          that2.$emit("close", "close");
          that2.$emit("update:modelValue", false);
        }
      },
      moveHandle() {
      },
      // sku按钮的点击事件
      skuClick(value, index1, index2) {
        let that2 = this;
        if (value.ishow) {
          if (that2.selectArr[index1] != value.name) {
            that2.$set(that2.selectArr, index1, value.name);
            that2.$set(that2.subIndex, index1, index2);
          } else {
            that2.$set(that2.selectArr, index1, "");
            that2.$set(that2.subIndex, index1, -1);
          }
          that2.checkInpath(index1);
          that2.checkSelectShop();
        }
      },
      // 检测是否已经选完sku
      checkSelectShop() {
        let that2 = this;
        if (that2.selectArr.every((item) => item != "")) {
          that2.selectShop = that2.shopItemInfo[that2.getArrayToSting(that2.selectArr)];
          let stock = that2.selectShop[that2.stockName];
          if (typeof stock !== "undefined" && that2.selectNum > stock) {
            that2.selectNum = stock;
          }
          if (that2.selectNum > that2.maxBuyNum) {
            that2.selectNum = that2.maxBuyNum;
          }
          if (that2.selectNum < that2.minBuyNum) {
            that2.selectNum = that2.minBuyNum;
          }
          if (that2.selectedInit) {
            that2.selectNum = that2.minBuyNum || 1;
          }
        } else {
          that2.selectShop = {};
        }
      },
      // 检查路径
      checkInpath(clickIndex) {
        let that2 = this;
        let specListName = that2.specListName;
        let specList = that2.goodsInfo[specListName];
        for (let i2 = 0, len = specList.length; i2 < len; i2++) {
          if (i2 == clickIndex) {
            continue;
          }
          let len2 = specList[i2].list.length;
          for (let j2 = 0; j2 < len2; j2++) {
            if (that2.subIndex[i2] != -1 && j2 == that2.subIndex[i2]) {
              continue;
            }
            let choosed_copy = [...that2.selectArr];
            that2.$set(choosed_copy, i2, specList[i2].list[j2].name);
            let choosed_copy2 = choosed_copy.filter((item) => item !== "" && typeof item !== "undefined");
            if (that2.shopItemInfo.hasOwnProperty(that2.getArrayToSting(choosed_copy2))) {
              specList[i2].list[j2].ishow = true;
            } else {
              specList[i2].list[j2].ishow = false;
            }
          }
        }
        that2.$set(that2.goodsInfo, specListName, specList);
      },
      // 计算sku里面规格形成路径
      checkItem() {
        let that2 = this;
        let { stockName } = that2;
        let skuListName = that2.skuListName;
        let originalSkuList = that2.goodsInfo[skuListName];
        let skuList = [];
        let stockNum = 0;
        originalSkuList.map((skuItem, index) => {
          if (skuItem[stockName] > 0) {
            skuList.push(skuItem);
            stockNum += skuItem[stockName];
          }
        });
        if (stockNum <= 0) {
          that2.outFoStock = true;
        }
        skuList.reduce(
          (arrs, items) => {
            return arrs.concat(
              items[that2.skuArrName].reduce(
                (arr, item) => {
                  return arr.concat(
                    arr.map((item2) => {
                      if (!that2.shopItemInfo.hasOwnProperty(that2.getArrayToSting([...item2, item]))) {
                        that2.shopItemInfo[that2.getArrayToSting([...item2, item])] = items;
                      }
                      return [...item2, item];
                    })
                  );
                },
                [[]]
              )
            );
          },
          [[]]
        );
      },
      getArrayToSting(arr) {
        let str = "";
        arr.map((item, index) => {
          item = item.replace(/\./g, "。");
          if (index == 0) {
            str += item;
          } else {
            str += "," + item;
          }
        });
        return str;
      },
      // 检测sku选项是否已全部选完,且有库存
      checkSelectComplete(obj = {}) {
        let that2 = this;
        let clickTime = (/* @__PURE__ */ new Date()).getTime();
        if (that2.clickTime && clickTime - that2.clickTime < 400) {
          return false;
        }
        that2.clickTime = clickTime;
        let { selectShop, selectNum, stockText, stockName } = that2;
        if (!selectShop || !selectShop[that2.skuIdName]) {
          that2.toast("请先选择对应规格", "none");
          return false;
        }
        if (selectNum <= 0) {
          that2.toast("购买数量必须>0", "none");
          return false;
        }
        if (selectNum > selectShop[stockName]) {
          that2.toast(stockText + "不足", "none");
          return false;
        }
        if (typeof obj.success == "function")
          obj.success(selectShop);
      },
      // 加入购物车
      addCart() {
        let that2 = this;
        that2.checkSelectComplete({
          success: function(selectShop) {
            selectShop.buy_num = that2.selectNum;
            that2.$emit("add-cart", selectShop);
            that2.$emit("cart", selectShop);
          }
        });
      },
      // 立即购买
      buyNow() {
        let that2 = this;
        that2.checkSelectComplete({
          success: function(selectShop) {
            selectShop.buy_num = that2.selectNum;
            that2.$emit("buy-now", selectShop);
            that2.$emit("buy", selectShop);
          }
        });
      },
      // 弹窗
      toast(title, icon) {
        uni.showToast({
          title,
          icon
        });
      },
      // 获取对象数组中的某一个item,根据指定的键值
      getListItem(list, key, value) {
        let item;
        for (let i2 in list) {
          if (typeof value == "object") {
            if (JSON.stringify(list[i2][key]) === JSON.stringify(value)) {
              item = list[i2];
              break;
            }
          } else {
            if (list[i2][key] === value) {
              item = list[i2];
              break;
            }
          }
        }
        return item;
      },
      getListIndex(list, key, value) {
        let index = -1;
        for (let i2 = 0; i2 < list.length; i2++) {
          if (list[i2][key] === value) {
            index = i2;
            break;
          }
        }
        return index;
      },
      // 自动选择sku前提是只有一组sku,默认自动选择最前面的有库存的sku
      autoClickSku() {
        let that2 = this;
        let { stockName } = that2;
        let skuList = that2.goodsInfo[that2.skuListName];
        let specListArr = that2.goodsInfo[that2.specListName];
        if (specListArr.length == 1) {
          let specList = specListArr[0].list;
          for (let i2 = 0; i2 < specList.length; i2++) {
            let sku = that2.getListItem(skuList, that2.skuArrName, [specList[i2].name]);
            if (sku && sku[stockName] > 0) {
              that2.skuClick(specList[i2], 0, i2);
              break;
            }
          }
        }
      },
      // 主题颜色
      themeColorFn(name) {
        let that2 = this;
        let { theme, themeColor } = that2;
        let color = that2[name] ? that2[name] : themeColor[theme][name];
        return color;
      },
      defaultSelectSku() {
        let that2 = this;
        let { defaultSelect } = that2;
        if (defaultSelect && defaultSelect.sku && defaultSelect.sku.length > 0) {
          that2.selectSku(defaultSelect);
        }
      },
      /**
      	 * 主动方法 - 设置sku
      	that.$refs.skuPopup.selectSku({
      		sku:["红色","256G","公开版"],
      		num:5
      	});
      	 */
      selectSku(obj = {}) {
        let that2 = this;
        let { sku: skuArr, num: selectNum } = obj;
        let specListArr = that2.goodsInfo[that2.specListName];
        if (skuArr && specListArr.length === skuArr.length) {
          let skuClickArr = [];
          let clickKey = true;
          for (let index = 0; index < skuArr.length; index++) {
            let skuName = skuArr[index];
            let specList = specListArr[index].list;
            let index1 = index;
            let index2 = that2.getListIndex(specList, "name", skuName);
            if (index2 == -1) {
              clickKey = false;
              break;
            }
            skuClickArr.push({
              spec: specList[index2],
              index1,
              index2
            });
          }
          if (clickKey) {
            that2.init(true);
            skuClickArr.map((item) => {
              that2.skuClick(item.spec, item.index1, item.index2);
            });
          }
        }
        if (selectNum > 0)
          that2.selectNum = selectNum;
      },
      priceFilter(n2 = 0) {
        let that2 = this;
        if (typeof n2 == "string") {
          n2 = parseFloat(n2);
        }
        if (that2.amountType === 0) {
          return n2.toFixed(2);
        } else {
          return (n2 / 100).toFixed(2);
        }
      },
      pushGoodsCache(goodsInfo) {
        let that2 = this;
        let { goodsIdName } = that2;
        goodsCache[goodsInfo[goodsIdName]] = goodsInfo;
      },
      // 用于阻止冒泡
      stop() {
      },
      // 图片预览
      previewImage() {
        let that2 = this;
        let { selectShop, goodsInfo, goodsThumbName } = that2;
        let src = selectShop.image ? selectShop.image : goodsInfo[goodsThumbName];
        if (src) {
          uni.previewImage({
            urls: [src]
          });
        }
      },
      getMaxStock() {
        let maxStock = 0;
        let that2 = this;
        let { selectShop = {}, goodsInfo = {}, skuListName, stockName } = that2;
        if (selectShop[stockName]) {
          maxStock = selectShop[stockName];
        } else {
          let skuList = goodsInfo[skuListName];
          if (skuList && skuList.length > 0) {
            let valueArr = [];
            skuList.map((skuItem, index) => {
              valueArr.push(skuItem[stockName]);
            });
            let max = Math.max(...valueArr);
            maxStock = max;
          }
        }
        return maxStock;
      },
      numChange(e2) {
        this.$emit("num-change", e2.value);
      }
    },
    // 计算属性
    computed: {
      valueCom() {
        return this.modelValue;
      },
      // 最大购买数量
      maxBuyNumCom() {
        let that2 = this;
        let maxStock = that2.getMaxStock();
        let max = that2.maxBuyNum || 1e5;
        if (max > maxStock) {
          max = maxStock;
        }
        return max;
      },
      // 是否是多规格
      isManyCom() {
        let that2 = this;
        let { goodsInfo, defaultSingleSkuName, specListName } = that2;
        let isMany = true;
        if (goodsInfo[specListName] && goodsInfo[specListName].length === 1 && goodsInfo[specListName][0].list.length === 1 && goodsInfo[specListName][0].name === defaultSingleSkuName) {
          isMany = false;
        }
        return isMany;
      },
      // 默认价格区间计算
      priceCom() {
        let str = "";
        let that2 = this;
        let { selectShop = {}, goodsInfo = {}, skuListName, skuIdName } = that2;
        if (selectShop[skuIdName]) {
          str = that2.priceFilter(selectShop.price);
        } else {
          let skuList = goodsInfo[skuListName];
          if (skuList && skuList.length > 0) {
            let valueArr = [];
            skuList.map((skuItem, index) => {
              valueArr.push(skuItem.price);
            });
            let min = that2.priceFilter(Math.min(...valueArr));
            let max = that2.priceFilter(Math.max(...valueArr));
            if (min === max) {
              str = min + "";
            } else {
              str = `${min} - ${max}`;
            }
          }
        }
        return str;
      },
      // 库存显示
      stockCom() {
        let str = "";
        let that2 = this;
        let { selectShop = {}, goodsInfo = {}, skuListName, stockName } = that2;
        if (selectShop[stockName]) {
          str = selectShop[stockName];
        } else {
          let skuList = goodsInfo[skuListName];
          if (skuList && skuList.length > 0) {
            let valueArr = [];
            skuList.map((skuItem, index) => {
              valueArr.push(skuItem[stockName]);
            });
            let min = Math.min(...valueArr);
            let max = Math.max(...valueArr);
            if (min === max) {
              str = min;
            } else {
              str = `${min} - ${max}`;
            }
          }
        }
        return str;
      }
    },
    watch: {
      valueCom(newVal, oldValue) {
        let that2 = this;
        if (newVal) {
          that2.open();
        }
      },
      defaultGoods: {
        immediate: true,
        handler: function(newVal, oldValue) {
          let that2 = this;
          let { goodsIdName } = that2;
          if (typeof newVal === "object" && newVal && newVal[goodsIdName] && !goodsCache[newVal[goodsIdName]]) {
            that2.pushGoodsCache(newVal);
          }
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_vk_data_input_number_box = resolveEasycom(vue.resolveDynamicComponent("vk-data-input-number-box"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["vk-data-goods-sku-popup", $options.valueCom && $data.complete ? "show" : "none"]),
        catchtouchmove: "true",
        onTouchmove: _cache[8] || (_cache[8] = vue.withModifiers((...args) => $options.moveHandle && $options.moveHandle(...args), ["stop", "prevent"])),
        onClick: _cache[9] || (_cache[9] = vue.withModifiers((...args) => $options.stop && $options.stop(...args), ["stop"]))
      },
      [
        vue.createCommentVNode(" 页面内容开始 "),
        vue.createElementVNode("view", {
          class: "mask",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.close("mask"))
        }),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["layer attr-content", { "safe-area-inset-bottom": $props.safeAreaInsetBottom }]),
            style: vue.normalizeStyle({ borderRadius: $props.borderRadius + "rpx " + $props.borderRadius + "rpx 0 0" })
          },
          [
            vue.createElementVNode("view", { class: "specification-wrapper" }, [
              vue.createElementVNode("scroll-view", {
                class: "specification-wrapper-content",
                "scroll-y": "true"
              }, [
                vue.createElementVNode("view", { class: "specification-header" }, [
                  vue.createElementVNode("view", { class: "specification-left" }, [
                    vue.createElementVNode("image", {
                      class: "product-img",
                      src: $data.selectShop.image ? $data.selectShop.image : $data.goodsInfo[$props.goodsThumbName],
                      style: vue.normalizeStyle({ backgroundColor: $props.goodsThumbBackgroundColor }),
                      mode: "aspectFill",
                      onClick: _cache[1] || (_cache[1] = (...args) => $options.previewImage && $options.previewImage(...args))
                    }, null, 12, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "specification-right" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: "price-content",
                        style: vue.normalizeStyle({ color: $options.themeColorFn("priceColor") })
                      },
                      [
                        vue.createElementVNode("text", { class: "sign" }, "¥"),
                        vue.createElementVNode(
                          "text",
                          {
                            class: vue.normalizeClass(["price", $options.priceCom.length > 16 ? "price2" : ""])
                          },
                          vue.toDisplayString($options.priceCom),
                          3
                          /* TEXT, CLASS */
                        )
                      ],
                      4
                      /* STYLE */
                    ),
                    !$props.hideStock ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 0,
                        class: "inventory"
                      },
                      vue.toDisplayString($props.stockText) + "：" + vue.toDisplayString($options.stockCom),
                      1
                      /* TEXT */
                    )) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "inventory"
                    })),
                    vue.withDirectives(vue.createElementVNode(
                      "view",
                      { class: "choose" },
                      "已选：" + vue.toDisplayString($data.selectArr.join(" ")),
                      513
                      /* TEXT, NEED_PATCH */
                    ), [
                      [vue.vShow, $options.isManyCom]
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "specification-content" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.goodsInfo[$props.specListName], (item, index1) => {
                      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                        class: "specification-item",
                        key: index1
                      }, [
                        vue.createElementVNode(
                          "view",
                          { class: "item-title" },
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", { class: "item-wrapper" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(item.list, (item_value, index2) => {
                              return vue.openBlock(), vue.createElementBlock("view", {
                                class: vue.normalizeClass(["item-content", [item_value.ishow ? "" : "noactived", $data.subIndex[index1] == index2 ? "actived" : ""]]),
                                key: index2,
                                style: vue.normalizeStyle([
                                  item_value.ishow ? "" : $options.themeColorFn("disableStyle"),
                                  item_value.ishow ? $options.themeColorFn("btnStyle") : "",
                                  $data.subIndex[index1] == index2 ? $options.themeColorFn("activedStyle") : ""
                                ]),
                                onClick: ($event) => $options.skuClick(item_value, index1, index2)
                              }, vue.toDisplayString(item_value.name), 15, ["onClick"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ])), [
                        [vue.vShow, $options.isManyCom]
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  vue.createElementVNode("view", { class: "number-box-view" }, [
                    vue.createElementVNode("view", { style: { "flex": "1" } }, "数量"),
                    vue.createElementVNode("view", { style: { "flex": "4", "text-align": "right" } }, [
                      vue.createVNode(_component_vk_data_input_number_box, {
                        modelValue: $data.selectNum,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.selectNum = $event),
                        min: $props.minBuyNum || 1,
                        max: $options.maxBuyNumCom,
                        step: $props.stepBuyNum || 1,
                        "step-strictly": $props.stepStrictly,
                        "positive-integer": true,
                        onChange: $options.numChange
                      }, null, 8, ["modelValue", "min", "max", "step", "step-strictly", "onChange"])
                    ])
                  ])
                ])
              ]),
              $props.showClose != false ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "close",
                onClick: _cache[3] || (_cache[3] = ($event) => $options.close("close"))
              }, [
                vue.createElementVNode("image", {
                  class: "close-item",
                  src: $props.closeImage
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            $data.outFoStock || $props.mode == 4 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "btn-wrapper"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "sure",
                  style: { "color": "#ffffff", "background-color": "#cccccc" }
                },
                vue.toDisplayString($props.noStockText),
                1
                /* TEXT */
              )
            ])) : $props.mode == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "btn-wrapper"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "sure add-cart",
                  style: vue.normalizeStyle([{ "border-radius": "38rpx 0rpx 0rpx 38rpx" }, {
                    color: $options.themeColorFn("addCartColor"),
                    backgroundColor: $options.themeColorFn("addCartBackgroundColor")
                  }]),
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.addCart && $options.addCart(...args))
                },
                vue.toDisplayString($props.addCartText),
                5
                /* TEXT, STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "sure",
                  style: vue.normalizeStyle([{ "border-radius": "0rpx 38rpx 38rpx 0rpx" }, {
                    color: $options.themeColorFn("buyNowColor"),
                    backgroundColor: $options.themeColorFn("buyNowBackgroundColor")
                  }]),
                  onClick: _cache[5] || (_cache[5] = (...args) => $options.buyNow && $options.buyNow(...args))
                },
                vue.toDisplayString($props.buyNowText),
                5
                /* TEXT, STYLE */
              )
            ])) : $props.mode == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "btn-wrapper"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "sure add-cart",
                  style: vue.normalizeStyle({
                    color: $options.themeColorFn("addCartColor"),
                    backgroundColor: $options.themeColorFn("addCartBackgroundColor")
                  }),
                  onClick: _cache[6] || (_cache[6] = (...args) => $options.addCart && $options.addCart(...args))
                },
                vue.toDisplayString($props.addCartText),
                5
                /* TEXT, STYLE */
              )
            ])) : $props.mode == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "btn-wrapper"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "sure",
                  style: vue.normalizeStyle({
                    color: $options.themeColorFn("buyNowColor"),
                    backgroundColor: $options.themeColorFn("buyNowBackgroundColor")
                  }),
                  onClick: _cache[7] || (_cache[7] = (...args) => $options.buyNow && $options.buyNow(...args))
                },
                vue.toDisplayString($props.buyNowText),
                5
                /* TEXT, STYLE */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(" 页面内容结束 ")
      ],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-ed2d38e9"], ["__file", "D:/graduationProject/pet-front-end/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.vue"]]);
  const _sfc_main$2 = {
    __name: "Sku",
    setup(__props) {
      const skuKey = vue.ref(false);
      const skuMode = vue.ref(1);
      const goodsInfo = vue.ref({
        "_id": "002",
        "name": "迪奥香水",
        "goods_thumb": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        "sku_list": [
          {
            "_id": "004",
            "goods_id": "002",
            "goods_name": "迪奥香水",
            "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
            "price": 19800,
            "sku_name_arr": ["50ml/瓶"],
            "stock": 100
          },
          {
            "_id": "005",
            "goods_id": "002",
            "goods_name": "迪奥香水",
            "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
            "price": 9800,
            "sku_name_arr": ["70ml/瓶"],
            "stock": 100
          }
        ],
        "spec_list": [{
          "list": [
            {
              "name": "20ml/瓶"
            },
            {
              "name": "50ml/瓶"
            },
            {
              "name": "70ml/瓶"
            }
          ],
          "name": "规格"
        }]
      });
      const onOpenSkuPopup = () => {
        formatAppLog("log", "at pages/home/components/Sku.vue:60", "监听 - 打开sku组件");
      };
      const onCloseSkuPopup = () => {
        formatAppLog("log", "at pages/home/components/Sku.vue:65", "监听 - 关闭sku组件");
      };
      const addCart = (selectShop) => {
        formatAppLog("log", "at pages/home/components/Sku.vue:85", "监听 - 加入购物车");
        that.addCartFn({
          selectShop,
          success: function(res) {
            that.toast(res.msg);
            setTimeout(function() {
              that.skuKey = false;
            }, 300);
          }
        });
      };
      const buyNow = (selectShop) => {
        formatAppLog("log", "at pages/home/components/Sku.vue:100", "监听 - 立即购买");
        that.addCartFn({
          selectShop,
          success: function(res) {
            that.toast("立即购买");
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_vk_data_goods_sku_popup = resolveEasycom(vue.resolveDynamicComponent("vk-data-goods-sku-popup"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "app" }, [
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.openSkuPopup())
          }, "打开SKU组件"),
          vue.createVNode(_component_vk_data_goods_sku_popup, {
            ref: "skuPopup",
            modelValue: skuKey.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => skuKey.value = $event),
            "border-radius": "20",
            localdata: goodsInfo.value,
            mode: skuMode.value,
            onOpen: onOpenSkuPopup,
            onClose: onCloseSkuPopup,
            onAddCart: addCart,
            onBuyNow: buyNow
          }, null, 8, ["modelValue", "localdata", "mode"])
        ]);
      };
    }
  };
  const Sku = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ab6f517b"], ["__file", "D:/graduationProject/pet-front-end/pages/home/components/Sku.vue"]]);
  const _sfc_main$1 = {
    components: {
      Evaluate,
      Sku
    },
    data() {
      return {
        showEvaluate: true,
        background: ["red", "blue", "pink"],
        indicatorDots: true,
        autoplay: true,
        interval: 2e3,
        duration: 500,
        apprises: [{
          avatarUrl: "",
          //头像
          name: "小红",
          //昵称
          commentStar: 5,
          //评分
          commentDate: "2023-06-09 15:00:00",
          //时间
          teachLevel: "一段简介",
          //描述简介
          appraises: ["认真敬业", "场地好", "热情周到"]
          // 标签
        }, {
          avatarUrl: "",
          name: "小明",
          commentStar: 5,
          commentDate: "2023-06-09 15:00:00",
          teachLevel: "一段简介",
          appraises: ["认真敬业", "场地好", "热情周到"]
        }, {
          avatarUrl: "",
          name: "小黑",
          commentStar: 5,
          commentDate: "2023-06-09 15:00:00",
          teachLevel: "一段简介",
          appraises: ["认真敬业", "场地好", "热情周到"]
        }, {
          avatarUrl: "",
          name: "小红",
          commentStar: 5,
          commentDate: "2023-06-09 15:00:00",
          teachLevel: "一段简介",
          appraises: ["认真敬业", "场地好", "热情周到"]
        }, {
          avatarUrl: "",
          name: "小明",
          commentStar: 5,
          commentDate: "2023-06-09 15:00:00",
          teachLevel: "一段简介",
          appraises: ["认真敬业", "场地好", "热情周到"]
        }, {
          avatarUrl: "",
          name: "小黑",
          commentStar: 5,
          commentDate: "2023-06-09 15:00:00",
          teachLevel: "一段简介",
          appraises: ["认真敬业", "场地好", "热情周到"]
        }]
      };
    },
    methods: {
      changeIndicatorDots(e2) {
        this.indicatorDots = !this.indicatorDots;
      },
      changeAutoplay(e2) {
        this.autoplay = !this.autoplay;
      },
      intervalChange(e2) {
        this.interval = e2.target.value;
      },
      durationChange(e2) {
        this.duration = e2.target.value;
      },
      tabChange() {
        formatAppLog("log", "at pages/home/DetailService.vue:140", "tab选择序列 = " + JSON.stringify(t));
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Evaluate = vue.resolveComponent("Evaluate");
    const _component_Sku = vue.resolveComponent("Sku");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            circular: "",
            "indicator-dots": $data.indicatorDots,
            autoplay: $data.autoplay,
            interval: $data.interval,
            duration: $data.duration
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, "A")
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item uni-bg-green" }, "B")
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item uni-bg-blue" }, "C")
            ])
          ], 8, ["indicator-dots", "autoplay", "interval", "duration"])
        ]),
        vue.createCommentVNode(" 商品 "),
        vue.createElementVNode("view", { class: "goods" }, [
          vue.createCommentVNode(" 商品简介 "),
          vue.createElementVNode("view", { class: "meta" }, [
            vue.createElementVNode("view", { class: "price" }, [
              vue.createElementVNode("text", { class: "symbol" }, "¥"),
              vue.createElementVNode("text", { class: "number" }, "29.90")
            ]),
            vue.createElementVNode("view", { class: "name ellipsis" }, "云珍·轻软旅行长绒棉方巾 "),
            vue.createElementVNode("view", { class: "desc" }, " 轻巧无捻小方巾，旅行便携 ")
          ]),
          vue.createCommentVNode(" 操作面板 "),
          vue.createElementVNode("view", { class: "action" }, [
            vue.createElementVNode("view", { class: "item arrow" }, [
              vue.createElementVNode("text", { class: "label" }, "选择"),
              vue.createCommentVNode(' <text class="text ellipsis"> 请选择商品规格 </text> ')
            ]),
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
                class: vue.normalizeClass(["left", { active: !$data.showEvaluate }]),
                onClick: _cache[0] || (_cache[0] = ($event) => $data.showEvaluate = false)
              },
              " 服务介绍 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["right", { active: $data.showEvaluate }]),
                onClick: _cache[1] || (_cache[1] = ($event) => $data.showEvaluate = true)
              },
              " 服务评价 ",
              2
              /* CLASS */
            )
          ])
        ]),
        $data.showEvaluate ? (vue.openBlock(), vue.createBlock(_component_Evaluate, {
          key: 0,
          apprises: $data.apprises
        }, null, 8, ["apprises"])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, " 我是服务介绍 ")),
        vue.createCommentVNode(" Sku "),
        vue.createVNode(_component_Sku)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesHomeDetailService = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-76f1c5f4"], ["__file", "D:/graduationProject/pet-front-end/pages/home/DetailService.vue"]]);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/messages/index", PagesMessagesIndex);
  __definePage("pages/shop/index", PagesShopIndex);
  __definePage("pages/category/index", PagesCategoryIndex);
  __definePage("pages/category/categoryproductlist", PagesCategoryCategoryproductlist);
  __definePage("pages/category/productdetail", PagesCategoryProductdetail);
  __definePage("pages/cat/cat", PagesCatCat);
  __definePage("pages/my/Address", PagesMyAddress);
  __definePage("pages/my/EditAddress", PagesMyEditAddress);
  __definePage("pages/my/EditPerson", PagesMyEditPerson);
  __definePage("pages/home/DetailService", PagesHomeDetailService);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/graduationProject/pet-front-end/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
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
