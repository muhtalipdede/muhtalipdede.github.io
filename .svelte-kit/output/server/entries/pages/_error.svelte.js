import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>404 Error - Page Not Found</h1>
<p>Sorry, the page you are looking for could not be found.</p>
<p>Click <a href="${"/"}">here</a> to return to the home page.</p>`;
});
export {
  Error as default
};
