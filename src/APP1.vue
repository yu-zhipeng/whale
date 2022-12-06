import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import { defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=afc0ef82";
import wButton from "/src/components/button/button.vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose }) {
    expose();
    const handleClick = () => {
      alert(1);
    };
    const __returned__ = { handleClick, wButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/node_modules/.vite/deps/vue.js?v=afc0ef82";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  // vue在vnode解析阶段判断节点是动态节点，渲染时将此节点push到当前的block
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", { onClick: $setup.handleClick }, "start"),
    _createVNode($setup["wButton"], {
      type: "text",
      onClick: $setup.handleClick,
      color: "#3a3a3a"
    }, {
      default: _withCtx(() => [
        _createTextVNode("button")
      ]),
      _: 1
    })
  ], 64);
}
_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
export const _rerender_only = true;
import.meta.hot.accept((mod) => {
  if (!mod)
    return;
  const { default: updated, _rerender_only: _rerender_only2 } = mod;
  if (_rerender_only2) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/github/whale/src/App.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQU1BLE9BQU8sYUFBYTs7Ozs7QUFFcEIsVUFBTSxjQUFjLE1BQU07QUFDeEIsWUFBTSxDQUFDO0FBQUEsSUFDVDs7Ozs7Ozs7O0lBVEUsb0JBQXNDLFNBQWhDLFNBQU8sbUJBQVcsR0FBRyxPQUFLO0FBQUEsSUFDaEMsYUFBNEU7QUFBQSxNQUFuRSxNQUFLO0FBQUEsTUFBUyxTQUFPO0FBQUEsTUFBYSxPQUFNO0FBQUE7d0JBQVcsTUFBTTtBQUFBLHlCQUFOLFFBQU07QUFBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOi9naXRodWIvd2hhbGUvc3JjL0FwcC52dWUiXSwiZmlsZSI6IkM6L2dpdGh1Yi93aGFsZS9zcmMvQXBwLnZ1ZSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IEBjbGljaz1cImhhbmRsZUNsaWNrXCIgPnN0YXJ0PC9kaXY+XHJcbiAgPHdCdXR0b24gdHlwZT1cInRleHRcIiAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIiBjb2xvcj1cIiMzYTNhM2FcIiA+YnV0dG9uPC93QnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cclxuaW1wb3J0IHdCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlJ1xyXG5cclxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgYWxlcnQoMSlcclxufVxyXG5cclxuPC9zY3JpcHQ+Il19