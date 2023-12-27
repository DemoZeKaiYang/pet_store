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
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      const demo = vue.ref("1");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", null, [
              vue.createElementVNode("scroll-view", {
                "scroll-x": "",
                class: "navscroll"
              }, [
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内"),
                vue.createElementVNode("view", { class: "item" }, "国内")
              ]),
              vue.createElementVNode("view", { class: "connent" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(10, (item) => {
                    return vue.createElementVNode("view", { class: "row" }, " 数据 ");
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ]),
            vue.createTextVNode(
              " " + vue.toDisplayString(demo.value),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesTest1Index = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9fc2f402"], ["__file", "D:/graduationProject/pet-front-end/pages/test1/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_test1 = vue.resolveComponent("test1");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("image", {
            class: "logo",
            src: "/static/logo.png"
          }),
          vue.createElementVNode("view", { class: "text-area" }, [
            vue.createElementVNode(
              "text",
              { class: "title" },
              vue.toDisplayString($data.title),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "" }, " hello world "),
        vue.createVNode(_component_test1)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/graduationProject/pet-front-end/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/test1/index", PagesTest1Index);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
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
})(Vue);
