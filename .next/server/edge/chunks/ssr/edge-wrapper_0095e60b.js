(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/edge-wrapper_0095e60b.js", {

"[project]/edge-wrapper.js { MODULE => \"[project]/node_modules/next/dist/esm/build/templates/edge-ssr-app.js { INNER_PAGE_ENTRY => \\\"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \\\\\\\"[project]/app/layout.tsx [app-edge-rsc] (ecmascript, Next.js server component)\\\\\\\", MODULE_1 => \\\\\\\"[project]/node_modules/next/dist/client/components/not-found-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\\\\\\", MODULE_2 => \\\\\\\"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\\\\\\", MODULE_3 => \\\\\\\"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\\\\\\", MODULE_4 => \\\\\\\"[project]/app/page.tsx [app-edge-rsc] (ecmascript, Next.js server component)\\\\\\\" } [app-edge-rsc] (ecmascript)\\\" } [app-edge-rsc] (ecmascript)\" } [app-edge-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/edge-ssr-app.js { INNER_PAGE_ENTRY => "[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \\"[project]/app/layout.tsx [app-edge-rsc] (ecmascript, Next.js server component)\\", MODULE_1 => \\"[project]/node_modules/next/dist/client/components/not-found-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\", MODULE_2 => \\"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\", MODULE_3 => \\"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-edge-rsc] (ecmascript, Next.js server component)\\", MODULE_4 => \\"[project]/app/page.tsx [app-edge-rsc] (ecmascript, Next.js server component)\\" } [app-edge-rsc] (ecmascript)" } [app-edge-rsc] (ecmascript)'));
modProm.catch(()=>{});
self._ENTRIES["middleware_/"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}}),
}]);

//# sourceMappingURL=edge-wrapper_0095e60b.js.map