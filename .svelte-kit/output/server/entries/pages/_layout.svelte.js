import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.app.svelte-dm49z8{display:flex;flex-direction:column;min-height:100vh}main.svelte-dm49z8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:50rem;margin:0 auto;box-sizing:border-box;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-dm49z8"}"><main class="${"svelte-dm49z8"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
