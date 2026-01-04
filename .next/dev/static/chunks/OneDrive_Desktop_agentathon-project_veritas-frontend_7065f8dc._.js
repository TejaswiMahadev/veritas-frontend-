(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "downloadFile",
    ()=>downloadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function downloadFile(content, fileName, contentType) {
    const blob = new Blob([
        content
    ], {
        type: contentType
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentPipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
"use client";
;
;
const steps = [
    {
        key: "extraction",
        label: "Extraction",
        desc: "NIM-Powered"
    },
    {
        key: "normalization",
        label: "Cleansing",
        desc: "Data Structuring"
    },
    {
        key: "validation",
        label: "Analysis",
        desc: "Rule Engine"
    },
    {
        key: "arbitration",
        label: "Arbitration",
        desc: "Conflict Resolver"
    },
    {
        key: "trust",
        label: "Trust Score",
        desc: "Vendor Profile"
    },
    {
        key: "audit",
        label: "Audit Report",
        desc: "Final Verdict"
    }
];
function StepIcon({ status }) {
    switch(status){
        case "processing":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-5 w-5 animate-spin text-primary"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        case "complete":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-5 w-5 text-[oklch(0.55_0.18_145)]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 34,
                columnNumber: 14
            }, this);
        case "warning":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "h-5 w-5 text-[oklch(0.7_0.18_85)]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 36,
                columnNumber: 14
            }, this);
        case "error":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "h-5 w-5 text-destructive"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 38,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                className: "h-5 w-5 text-muted-foreground/30"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
    }
}
_c = StepIcon;
function getStepStyles(status) {
    switch(status){
        case "processing":
            return "border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]";
        case "complete":
            return "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10";
        case "warning":
            return "border-[oklch(0.7_0.18_85)] bg-[oklch(0.7_0.18_85)]/10";
        case "error":
            return "border-destructive bg-destructive/10";
        default:
            return "border-border bg-muted/20";
    }
}
function getConnectorStyles(status) {
    switch(status){
        case "complete":
            return "bg-[oklch(0.55_0.18_145)]";
        case "warning":
            return "bg-[oklch(0.7_0.18_85)]";
        case "error":
            return "bg-destructive";
        default:
            return "bg-border/30";
    }
}
function AgentPipeline({ state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between w-full max-w-5xl mx-auto px-4",
        children: steps.map((step, index)=>{
            const status = state[step.key] || "idle";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center flex-1 last:flex-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                  w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ease-in-out
                  ${getStepStyles(status)}
                  ${status === "processing" ? "scale-110" : "scale-100"}
                  hover:shadow-lg
                `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIcon, {
                                    status: status
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-16 flex flex-col items-center w-32 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[11px] font-bold mt-1 transition-colors duration-300 ${status !== "idle" ? "text-foreground" : "text-muted-foreground"}`,
                                        children: step.label.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-muted-foreground/70 leading-tight",
                                        children: step.desc
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this),
                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 mx-2 h-0.5 relative mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-border/20"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                    absolute inset-y-0 left-0 transition-all duration-700 ease-in-out
                    ${getConnectorStyles(status)}
                  `,
                                style: {
                                    width: status === "idle" ? "0%" : "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                    }, this)
                ]
            }, step.key, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
                lineNumber: 78,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c1 = AgentPipeline;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepIcon");
__turbopack_context__.k.register(_c1, "AgentPipeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExtractedFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CollapsibleSection({ title, children, defaultOpen = true }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-all duration-300 border ${isOpen ? 'border-primary/20 bg-background shadow-sm' : 'border-border/50 bg-muted/10'} rounded-2xl overflow-hidden mb-3`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-all group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-1.5 w-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-6 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-3 w-3 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-3 w-3 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-5 pt-0 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300",
                children: children
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(CollapsibleSection, "QSEG/+wAbCqYSsrjeAEeSTwR0QA=");
_c = CollapsibleSection;
function FieldRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-baseline py-1.5 border-b border-border/20 last:border-0 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-muted-foreground/70 group-hover:text-muted-foreground transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-mono font-semibold text-foreground bg-muted/30 px-2 py-0.5 rounded leading-none",
                children: value
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c1 = FieldRow;
function ExtractedFields({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                title: "Legal Entities",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-[9px] font-bold text-primary/60 uppercase tracking-widest pl-1",
                                    children: "Vendor Identity"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-muted/30 rounded-xl space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                            label: "Legal Name",
                                            value: data.vendor.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                            label: "GSTIN/TAX ID",
                                            value: data.vendor.gstin
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                            label: "PAN/REG",
                                            value: data.vendor.pan
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-[9px] font-bold text-primary/60 uppercase tracking-widest pl-1",
                                    children: "Buyer Entity"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-muted/30 rounded-xl space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                            label: "Procurement Unit",
                                            value: data.buyer.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                            label: "Unit GSTIN",
                                            value: data.buyer.gstin
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                title: "Transaction Metadata",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Reference No.",
                        value: data.invoice.number
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Issuance Date",
                        value: data.invoice.date
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Maturity Date",
                        value: data.invoice.dueDate
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Order Reference",
                        value: data.invoice.poNumber
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                title: "Financial Totals",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Net Taxable",
                        value: `₹${data.amounts.subtotal.toLocaleString()}`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Statutory CGST",
                        value: `₹${data.amounts.cgst.toLocaleString()}`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                        label: "Statutory SGST",
                        value: `₹${data.amounts.sgst.toLocaleString()}`
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 mt-2 border-t border-primary/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-3 bg-primary/5 rounded-xl border border-primary/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-primary uppercase tracking-wider",
                                    children: "Gross Total"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold text-foreground",
                                    children: [
                                        "₹",
                                        data.amounts.total.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleSection, {
                title: "Line Items",
                defaultOpen: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: data.lineItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-muted/20 border border-border/30 rounded-2xl hover:bg-muted/40 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-xs text-foreground mb-3 leading-tight",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-bold text-muted-foreground uppercase",
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono font-semibold",
                                                    children: item.qty
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-bold text-muted-foreground uppercase",
                                                    children: "Unit Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono font-semibold",
                                                    children: [
                                                        "₹",
                                                        item.rate.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-bold text-primary/60 uppercase",
                                                    children: "Line Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-mono font-bold text-primary",
                                                    children: [
                                                        "₹",
                                                        item.amount.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c2 = ExtractedFields;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CollapsibleSection");
__turbopack_context__.k.register(_c1, "FieldRow");
__turbopack_context__.k.register(_c2, "ExtractedFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: 'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NormalizedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BeforeAfterRow({ label, before, after, showBeforeAfter, valid }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-3 border-b border-border/10 last:border-0 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    showBeforeAfter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-muted-foreground/40 line-through truncate max-w-[150px]",
                        children: before
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    showBeforeAfter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-3 w-3 text-primary/30 group-hover:text-primary/60 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 39,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${valid === false ? 'bg-destructive/5 border-destructive/20' : 'bg-background border-border/50 group-hover:border-primary/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-mono font-bold ${valid === false ? 'text-destructive' : 'text-foreground'}`,
                                children: after
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            valid !== undefined && (valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3 w-3 text-[oklch(0.55_0.18_145)]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3 w-3 text-destructive"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = BeforeAfterRow;
function NormalizedData({ data }) {
    _s();
    const [showBeforeAfter, setShowBeforeAfter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-3 bg-muted/20 border border-border/50 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-foreground uppercase tracking-wider",
                                children: "Normalization View"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-muted-foreground italic",
                                children: "Compare raw vs. structured data"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "before-after",
                                className: "text-[10px] font-bold text-muted-foreground uppercase cursor-pointer",
                                children: "Diff Mode"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                id: "before-after",
                                checked: showBeforeAfter,
                                onCheckedChange: setShowBeforeAfter
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            [
                {
                    title: "Legal Entities",
                    data: data.vendor,
                    icon: "👤"
                },
                {
                    title: "Temporal Mapping",
                    data: data.dates,
                    icon: "📅"
                },
                {
                    title: "Financial Quantities",
                    data: data.amounts,
                    icon: "💰"
                }
            ].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: section.icon
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-bold text-primary uppercase tracking-[0.2em]",
                                    children: section.title
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-muted/10 border border-border/30 rounded-2xl p-5 space-y-1",
                            children: Object.entries(section.data).map(([key, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BeforeAfterRow, {
                                    label: key.replace(/([A-Z])/g, " $1").trim(),
                                    before: val.before,
                                    after: val.after,
                                    showBeforeAfter: showBeforeAfter,
                                    valid: val.valid
                                }, key, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, section.title, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(NormalizedData, "NFeBsRfDuGgKlT7LTGiaeVxLLdk=");
_c1 = NormalizedData;
var _c, _c1;
__turbopack_context__.k.register(_c, "BeforeAfterRow");
__turbopack_context__.k.register(_c1, "NormalizedData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ValidationResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
"use client";
;
;
function StatusIcon({ status }) {
    switch(status){
        case "pass":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-4 w-4 text-[oklch(0.55_0.18_145)]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 16,
                columnNumber: 14
            }, this);
        case "warning":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "h-4 w-4 text-[oklch(0.7_0.18_85)]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 18,
                columnNumber: 14
            }, this);
        case "error":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "h-4 w-4 text-destructive"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 20,
                columnNumber: 14
            }, this);
    }
}
_c = StatusIcon;
function getStatusBg(status) {
    switch(status){
        case "pass":
            return "bg-[oklch(0.55_0.18_145)]/10";
        case "warning":
            return "bg-[oklch(0.7_0.18_85)]/10";
        case "error":
            return "bg-destructive/10";
    }
}
function ValidationResults({ data }) {
    const scoreColor = data.score >= 80 ? "text-[oklch(0.55_0.18_145)]" : data.score >= 60 ? "text-[oklch(0.7_0.18_85)]" : "text-destructive";
    const scoreBg = data.score >= 80 ? "stroke-[oklch(0.55_0.18_145)]" : data.score >= 60 ? "stroke-[oklch(0.7_0.18_85)]" : "stroke-destructive";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-32 h-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-full h-full transform -rotate-90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "64",
                                    cy: "64",
                                    r: "56",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "8",
                                    className: "text-muted"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "64",
                                    cy: "64",
                                    r: "56",
                                    fill: "none",
                                    strokeWidth: "8",
                                    strokeLinecap: "round",
                                    strokeDasharray: `${data.score / 100 * 352} 352`,
                                    className: scoreBg
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-3xl font-bold ${scoreColor}`,
                                    children: data.score
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Score"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-medium text-foreground mb-3",
                        children: "Audit Details & AI Reasoning"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: data.checks.map((check, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col gap-2 p-4 rounded-lg ${getStatusBg(check.status)} border border-border/50`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                                                status: check.status
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: check.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mt-0.5",
                                                        children: check.details
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    check.aiAudit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid grid-cols-1 gap-3 pt-3 border-t border-border/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-background/40 p-2 rounded border border-border/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase font-bold text-primary mb-1",
                                                        children: "Why it's a risk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground italic",
                                                        children: [
                                                            '"',
                                                            check.aiAudit.why_is_wrong,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-background/40 p-2 rounded border border-border/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase font-bold text-primary mb-1",
                                                                children: "Auditor Question"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-medium text-foreground",
                                                                children: check.aiAudit.auditor_question
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-background/40 p-2 rounded border border-border/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase font-bold text-destructive mb-1",
                                                                children: "Financial Impact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-foreground",
                                                                children: check.aiAudit.financial_risk
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            data.anomalies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-sm font-medium text-foreground mb-3",
                        children: "Recommendations"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: data.anomalies.map((anomaly, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-3 rounded-lg bg-[oklch(0.7_0.18_85)]/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "h-4 w-4 text-[oklch(0.7_0.18_85)] mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-foreground",
                                        children: anomaly.message
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = ValidationResults;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatusIcon");
__turbopack_context__.k.register(_c1, "ValidationResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuditReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function SeverityIcon({ severity }) {
    switch(severity){
        case "warning":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "h-4 w-4 text-[oklch(0.7_0.18_85)]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        case "error":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "h-4 w-4 text-destructive"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                className: "h-4 w-4 text-primary"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 34,
                columnNumber: 14
            }, this);
    }
}
_c = SeverityIcon;
function AuditReport({ data, onExport }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden border border-primary/20 rounded-2xl p-6 bg-gradient-to-br from-primary/10 via-background to-background shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4 opacity-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            className: "h-24 w-24 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-2 rounded-full bg-primary animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold tracking-[0.2em] text-primary uppercase",
                                        children: "Official Verification Report"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mt-1",
                                children: "Audit Summary"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-muted-foreground uppercase font-medium",
                                                children: "Confidence Level"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-primary",
                                                children: [
                                                    data.confidence,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-px bg-border/50"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-muted-foreground uppercase font-medium",
                                                children: "Analysis Type"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold text-foreground",
                                                children: "6-Agent Committee"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    data.vendorTrustProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group p-4 bg-muted/30 border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                        children: "Vendor Trust"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `px-2 py-0.5 rounded-full text-[9px] font-bold ${data.vendorTrustProfile.trust_level === 'TRUSTED' ? 'bg-[oklch(0.55_0.18_145)]/20 text-[oklch(0.55_0.18_145)]' : 'bg-[oklch(0.7_0.18_85)]/20 text-[oklch(0.7_0.18_85)]'}`,
                                        children: data.vendorTrustProfile.trust_level
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold tracking-tight text-foreground",
                                        children: data.vendorTrustProfile.trust_score.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: "/ 100"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 h-1 w-full bg-border/30 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-primary transition-all duration-1000",
                                    style: {
                                        width: `${data.vendorTrustProfile.trust_score}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-muted-foreground mt-2 font-medium flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: data.vendorTrustProfile.trend === 'Rising' ? 'text-[oklch(0.55_0.18_145)]' : 'text-primary',
                                        children: data.vendorTrustProfile.trend
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    "Performance Trend"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    data.committeeResolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group p-4 bg-primary/5 border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-primary",
                                        children: "Committee Verdict"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-3 w-3 text-primary/40 group-hover:rotate-180 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-foreground leading-tight",
                                children: data.committeeResolution.final_risk_level
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 p-2 bg-background/50 rounded-lg border border-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground leading-snug line-clamp-3 italic",
                                    children: [
                                        '"',
                                        data.committeeResolution.decision_basis,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            data.narrative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-6 bg-background border border-border/50 rounded-2xl shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-4 w-4 text-muted-foreground/20"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[10px] font-bold text-foreground mb-4 uppercase tracking-[0.2em]",
                        children: "Audit Narrative"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-sm max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-foreground/80 leading-relaxed whitespace-pre-line font-serif italic border-l-2 border-primary/20 pl-4 py-1",
                            children: data.narrative
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[10px] font-bold text-foreground mb-2 uppercase tracking-[0.2em]",
                        children: "Material Findings"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: data.findings.length > 0 ? data.findings.map((finding, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-4 bg-muted/20 border border-border/30 rounded-xl hover:bg-muted/40 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityIcon, {
                                            severity: finding.severity
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-foreground/90 font-medium leading-normal",
                                        children: finding.text
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-6 bg-muted/10 border border-dashed border-border rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-8 w-8 text-[oklch(0.55_0.18_145)]/40 mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground italic",
                                    children: "No material findings reported."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-primary/5 border border-primary/10 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em]",
                        children: "Mitigation Steps"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-1 gap-3",
                        children: data.recommendations.map((rec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "group flex items-start gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground group-hover:text-foreground transition-colors leading-snug",
                                        children: rec
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-6 mt-6 border-t border-border flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onExport,
                        className: "w-full h-12 gap-2 font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            "Export Procurement Audit Dossier"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] text-center text-muted-foreground uppercase tracking-widest font-medium",
                        children: "Digitally Signed by Veritas AI Security Engine"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = AuditReport;
var _c, _c1;
__turbopack_context__.k.register(_c, "SeverityIcon");
__turbopack_context__.k.register(_c1, "AuditReport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DocumentViewer({ fileName, fileType, dataUrl, anomalies, onAnomalyClick }) {
    _s();
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [showAnomalies, setShowAnomalies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedAnomaly, setSelectedAnomaly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleZoomIn = ()=>setZoom((z)=>Math.min(z + 25, 200));
    const handleZoomOut = ()=>setZoom((z)=>Math.max(z - 25, 50));
    const severityColors = {
        critical: "bg-red-500/10 text-red-600 border-red-500/20",
        high: "bg-orange-500/10 text-orange-600 border-orange-500/20",
        medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
        low: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    };
    const severityBadgeColors = {
        critical: "bg-red-500 text-white",
        high: "bg-orange-500 text-white",
        medium: "bg-yellow-500 text-black",
        low: "bg-blue-500 text-white"
    };
    const isPdf = fileType === "application/pdf";
    const isImage = fileType.startsWith("image/");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    "Document Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "icon",
                                        className: "h-8 w-8 bg-transparent",
                                        onClick: handleZoomOut,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground w-12 text-center",
                                        children: [
                                            zoom,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "icon",
                                        className: "h-8 w-8 bg-transparent",
                                        onClick: handleZoomIn,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground truncate",
                        children: fileName
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 flex flex-col gap-4 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-muted rounded-lg border border-border overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: `scale(${zoom / 100})`,
                                transformOrigin: "top left"
                            },
                            className: "min-h-full transition-transform duration-200",
                            children: dataUrl ? isPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: dataUrl,
                                className: "w-full h-[600px] border-0",
                                title: "Invoice PDF Preview"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this) : isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: dataUrl || "/placeholder.svg",
                                alt: "Invoice Preview",
                                className: "max-w-full h-auto"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-full p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-16 w-16 text-muted-foreground/50 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Unsupported file type"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-full min-h-[400px] p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-16 w-16 text-muted-foreground/50 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Document preview unavailable"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: fileName
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    anomalies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAnomalies(!showAnomalies),
                                className: "w-full flex items-center justify-between p-2 rounded-lg bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-4 w-4 text-destructive"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-destructive",
                                                children: [
                                                    anomalies.length,
                                                    " Anomal",
                                                    anomalies.length === 1 ? "y" : "ies",
                                                    " Detected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    showAnomalies ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        className: "h-4 w-4 text-destructive"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 text-destructive"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            showAnomalies && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 space-y-2 max-h-[200px] overflow-auto",
                                children: anomalies.map((anomaly)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedAnomaly(anomaly.id === selectedAnomaly ? null : anomaly.id);
                                            onAnomalyClick?.(anomaly);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left p-3 rounded-lg border transition-all", severityColors[anomaly.severity], selectedAnomaly === anomaly.id && "ring-2 ring-primary"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", severityBadgeColors[anomaly.severity]),
                                                                children: anomaly.severity
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 27
                                                            }, this),
                                                            anomaly.field && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "Field: ",
                                                                    anomaly.field
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium truncate",
                                                        children: anomaly.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground mt-1 line-clamp-2",
                                                        children: anomaly.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this)
                                    }, anomaly.id, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(DocumentViewer, "uSZQp2Lf9/bUOhNAbMhzYe+bzp8=");
_c = DocumentViewer;
var _c;
__turbopack_context__.k.register(_c, "DocumentViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
class ApiClient {
    baseUrl;
    constructor(baseUrl = API_BASE_URL){
        this.baseUrl = baseUrl;
        console.log("[v0] API Client initialized with base URL:", this.baseUrl);
    }
    async uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);
        console.log("[v0] Uploading file to:", `${this.baseUrl}/api/upload`);
        console.log("[v0] File details:", {
            name: file.name,
            size: file.size,
            type: file.type
        });
        try {
            const response = await fetch(`${this.baseUrl}/api/upload`, {
                method: "POST",
                body: formData
            });
            console.log("[v0] Upload response status:", response.status);
            if (!response.ok) {
                const error = await response.json().catch(()=>({
                        detail: "Upload failed"
                    }));
                throw new Error(error.detail || "Upload failed");
            }
            const data = await response.json();
            console.log("[v0] Upload response data:", data);
            return data;
        } catch (err) {
            console.error("[v0] Upload fetch error:", err);
            if (err instanceof TypeError && err.message === "Failed to fetch") {
                throw new Error(`Cannot connect to API server at ${this.baseUrl}. Please ensure the server is running and CORS is enabled.`);
            }
            throw err;
        }
    }
    async extractInvoice(fileId) {
        const response = await fetch(`${this.baseUrl}/api/agent1/extract`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                file_id: fileId
            })
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    detail: "Extraction failed"
                }));
            throw new Error(error.detail || "Extraction failed");
        }
        const data = await response.json();
        // API returns { document: {...} }, unwrap it
        return data.document || data;
    }
    async normalizeInvoice(document) {
        const response = await fetch(`${this.baseUrl}/api/agent2/normalize`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                document
            })
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    detail: "Normalization failed"
                }));
            throw new Error(error.detail || "Normalization failed");
        }
        const data = await response.json();
        // API returns { document: {...} }, unwrap it
        return data.document || data;
    }
    async analyzeFraud(document) {
        const response = await fetch(`${this.baseUrl}/api/agent3/analyze`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                document
            })
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    detail: "Fraud analysis failed"
                }));
            throw new Error(error.detail || "Fraud analysis failed");
        }
        return response.json();
    }
    async generateReport(fraudAnalysis) {
        const response = await fetch(`${this.baseUrl}/api/agent4/report`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fraud_analysis: fraudAnalysis
            })
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    detail: "Report generation failed"
                }));
            throw new Error(error.detail || "Report generation failed");
        }
        return response.json();
    }
}
const apiClient = new ApiClient();
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuditPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$agent$2d$pipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/agent-pipeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$extracted$2d$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/extracted-fields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$normalized$2d$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/normalized-data.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$validation$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/validation-results.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$audit$2d$report$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/audit-report.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$document$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/components/document-viewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function transformExtractedData(data) {
    return {
        vendor: {
            name: data.vendor?.name || "N/A",
            gstin: data.vendor?.gstin || "N/A",
            pan: data.vendor?.pan || "N/A",
            address: data.vendor?.address || "N/A"
        },
        buyer: {
            name: data.buyer?.name || "N/A",
            gstin: data.buyer?.gstin || "N/A",
            address: data.buyer?.address || "N/A"
        },
        invoice: {
            number: data.invoice_number || "N/A",
            date: data.invoice_date || "N/A",
            dueDate: "N/A",
            poNumber: "N/A"
        },
        amounts: {
            subtotal: data.amounts?.taxable_amount || 0,
            cgst: (data.amounts?.tax_amount || 0) / 2,
            sgst: (data.amounts?.tax_amount || 0) / 2,
            total: data.amounts?.total_amount || 0,
            currency: data.amounts?.currency || "INR"
        },
        lineItems: (data.line_items || []).map((item)=>({
                description: item.description || "",
                qty: item.quantity || 0,
                rate: item.unit_price || 0,
                amount: item.amount || 0
            }))
    };
}
function transformNormalizedData(extractedData) {
    const gstinValid = extractedData.vendor?.gstin ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(extractedData.vendor.gstin) : false;
    return {
        vendor: {
            name: {
                before: extractedData.vendor?.name || "N/A",
                after: extractedData.vendor?.name || "N/A"
            },
            gstin: {
                before: extractedData.vendor?.gstin || "N/A",
                after: extractedData.vendor?.gstin || "N/A",
                valid: gstinValid
            }
        },
        dates: {
            invoiceDate: {
                before: extractedData.invoice_date || "N/A",
                after: extractedData.invoice_date || "N/A"
            }
        },
        amounts: {
            currency: {
                before: extractedData.amounts?.currency || "INR",
                after: extractedData.amounts?.currency || "INR"
            },
            total: {
                before: String(extractedData.amounts?.total_amount || "0"),
                after: `${extractedData.amounts?.currency || "INR"} ${(extractedData.amounts?.total_amount || 0).toLocaleString()}`
            }
        }
    };
}
function transformValidationResults(data) {
    const validationScore = Math.max(0, Math.round(100 - data.fraud_score));
    const checks = data.triggered_flags.map((flag)=>({
            name: flag.id.replace(/_/g, " ").replace(/INV /i, ""),
            status: flag.severity === "critical" ? "error" : flag.severity === "high" ? "error" : flag.severity === "medium" ? "warning" : "pass",
            details: flag.description,
            aiAudit: flag.ai_audit_check
        }));
    if (data.summary.total_flags < 5) {
        checks.push({
            name: "Document Format",
            status: "pass",
            details: "Document structure is valid and parseable",
            aiAudit: undefined
        });
    }
    return {
        score: validationScore,
        checks,
        anomalies: data.recommendations.map((rec)=>({
                type: "recommendation",
                message: rec
            }))
    };
}
function transformAuditReport(data) {
    const summaryLines = data.executive_summary.split("\n").filter((line)=>!line.includes("═") && !line.includes("║") && line.trim().length > 0);
    const summaryText = summaryLines.slice(0, 5).join(" ").trim() || `Risk Assessment: ${data.risk_level} with score ${data.fraud_score}/100. ${data.flag_summary.total_flags} issues identified.`;
    return {
        summary: summaryText,
        findings: data.issues_identified.map((issue)=>({
                severity: issue.severity.toLowerCase() === "critical" ? "error" : issue.severity.toLowerCase() === "medium" ? "warning" : "info",
                text: `${issue.title}: ${issue.description}`
            })),
        recommendations: data.recommendations.map((rec)=>rec.action),
        confidence: Math.round(100 - (data.fraud_score || 0)),
        committeeResolution: data.committee_resolution,
        vendorTrustProfile: data.vendor_trust_profile,
        narrative: data.audit_narrative
    };
}
function extractAnomalies(fraudAnalysis) {
    return fraudAnalysis.triggered_flags.map((flag)=>({
            id: flag.id,
            title: flag.id.replace(/_/g, " ").replace(/INV /i, ""),
            description: flag.description,
            severity: flag.severity.toLowerCase(),
            field: Object.keys(flag.evidence || {})[0] || undefined
        }));
}
function AuditPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const fileId = params.id;
    const [pipeline, setPipeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        extraction: "idle",
        normalization: "idle",
        validation: "idle",
        arbitration: "idle",
        trust: "idle",
        audit: "idle"
    });
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("extracted");
    const [extractedData, setExtractedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [normalizedData, setNormalizedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validationResults, setValidationResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [auditReport, setAuditReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Document");
    const [fileType, setFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("application/pdf");
    const [fileDataUrl, setFileDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [anomalies, setAnomalies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const runPipeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuditPage.useCallback[runPipeline]": async ()=>{
            setError(null);
            setIsComplete(false);
            setAnomalies([]);
            setPipeline({
                extraction: "idle",
                normalization: "idle",
                validation: "idle",
                arbitration: "idle",
                trust: "idle",
                audit: "idle"
            });
            try {
                // Step 1: Extract
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            extraction: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                const extracted = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].extractInvoice(fileId);
                setExtractedData(transformExtractedData(extracted));
                await new Promise({
                    "AuditPage.useCallback[runPipeline]": (r)=>setTimeout(r, 800)
                }["AuditPage.useCallback[runPipeline]"]); // Visual beat
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            extraction: "complete"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                // Step 2: Normalize
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            normalization: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                const normalized = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].normalizeInvoice(extracted);
                setNormalizedData(transformNormalizedData(normalized));
                await new Promise({
                    "AuditPage.useCallback[runPipeline]": (r)=>setTimeout(r, 600)
                }["AuditPage.useCallback[runPipeline]"]); // Visual beat
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            normalization: "complete"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                // Step 3: Fraud Analysis
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            validation: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                const fraudAnalysis = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].analyzeFraud(normalized);
                setValidationResults(transformValidationResults(fraudAnalysis));
                setAnomalies(extractAnomalies(fraudAnalysis));
                const validationStatus = fraudAnalysis.fraud_score > 30 ? "warning" : "complete";
                await new Promise({
                    "AuditPage.useCallback[runPipeline]": (r)=>setTimeout(r, 1000)
                }["AuditPage.useCallback[runPipeline]"]); // Analysis take time
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            validation: validationStatus
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                // Step 4: Arbitration (New)
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            arbitration: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                await new Promise({
                    "AuditPage.useCallback[runPipeline]": (r)=>setTimeout(r, 1200)
                }["AuditPage.useCallback[runPipeline]"]); // Arbitration simulation
                const arbStatus = fraudAnalysis.committee_decision?.final_risk_level === 'CRITICAL' ? 'error' : 'complete';
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            arbitration: arbStatus
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                // Step 5: Trust Scoring (New)
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            trust: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                await new Promise({
                    "AuditPage.useCallback[runPipeline]": (r)=>setTimeout(r, 800)
                }["AuditPage.useCallback[runPipeline]"]);
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            trust: "complete"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                // Step 6: Audit Report
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            audit: "processing"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                const report = await __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].generateReport(fraudAnalysis);
                setAuditReport(transformAuditReport(report));
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>({
                            ...p,
                            audit: "complete"
                        })
                }["AuditPage.useCallback[runPipeline]"]);
                setIsComplete(true);
            } catch (err) {
                console.error("Pipeline failed:", err);
                setError(err instanceof Error ? err.message : "Pipeline processing failed");
                setPipeline({
                    "AuditPage.useCallback[runPipeline]": (p)=>{
                        if (p.extraction === "processing") return {
                            ...p,
                            extraction: "error"
                        };
                        if (p.normalization === "processing") return {
                            ...p,
                            normalization: "error"
                        };
                        if (p.validation === "processing") return {
                            ...p,
                            validation: "error"
                        };
                        if (p.arbitration === "processing") return {
                            ...p,
                            arbitration: "error"
                        };
                        if (p.trust === "processing") return {
                            ...p,
                            trust: "error"
                        };
                        if (p.audit === "processing") return {
                            ...p,
                            audit: "error"
                        };
                        return p;
                    }
                }["AuditPage.useCallback[runPipeline]"]);
            }
        }
    }["AuditPage.useCallback[runPipeline]"], [
        fileId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuditPage.useEffect": ()=>{
            const storedData = sessionStorage.getItem(`invoice_${fileId}`);
            if (storedData) {
                const parsed = JSON.parse(storedData);
                setFileName(parsed.name || "Document");
                setFileType(parsed.type || "application/pdf");
                setFileDataUrl(parsed.dataUrl || undefined);
            }
            runPipeline();
        }
    }["AuditPage.useEffect"], [
        fileId,
        runPipeline
    ]);
    const handleAnomalyClick = (anomaly)=>{
        setActiveTab("validation");
    };
    const handleDownloadReport = ()=>{
        if (!auditReport) return;
        const reportText = `
AUDIT NARRATIVE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated: ${new Date().toLocaleString()}

ASSESSMENT SUMMARY:
${auditReport.summary}

DOCUMENT REVIEWED:
Invoice Number: ${extractedData?.invoice?.number || "N/A"}
Date: ${extractedData?.invoice?.date || "N/A"}
Vendor: ${extractedData?.vendor?.name || "Unknown"}
Buyer: ${extractedData?.buyer?.name || "Unknown"}
Total Amount: ${extractedData?.amounts?.currency} ${extractedData?.amounts?.total?.toLocaleString()}

RISK ANALYSIS:
Confidence Level: ${auditReport.confidence}%
Final Risk Level: ${auditReport.committeeResolution?.final_risk_level || "N/A"}

NARRATIVE ASSESSMENT:
${auditReport.narrative || "No narrative generated."}

MATERIAL FINDINGS:
${auditReport.findings.map((f, i)=>`${i + 1}. [${f.severity.toUpperCase()}] ${f.text}`).join("\n")}

RECOMMENDED MITIGATION STEPS:
${auditReport.recommendations.map((r, i)=>`${i + 1}. ${r}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Digitally Signed by Veritas AI Security Engine
    `.trim();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadFile"])(reportText, `audit_report_${fileId}.txt`, "text/plain");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-10 rounded-lg bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-5 w-5 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold text-foreground",
                                    children: "Veritas"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: runPipeline,
                                    className: "gap-2 bg-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        "Retry"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDownloadReport,
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        "Download Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-border bg-muted/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$agent$2d$pipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        state: pipeline
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-5 w-5 text-destructive shrink-0 mt-0.5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-destructive",
                                    children: "Processing Error"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-destructive/80 mt-1",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground mt-2",
                                    children: [
                                        "Make sure the API server is running at ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            isComplete && extractedData && normalizedData && validationResults && auditReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-200px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-r border-border p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$document$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fileName: fileName,
                                fileType: fileType,
                                dataUrl: fileDataUrl,
                                anomalies: anomalies,
                                onAnomalyClick: handleAnomalyClick
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                value: activeTab,
                                onValueChange: setActiveTab,
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                        className: "grid grid-cols-4 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "extracted",
                                                className: "text-xs",
                                                children: "Extracted"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "normalized",
                                                className: "text-xs",
                                                children: "Normalized"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "validation",
                                                className: "text-xs",
                                                children: "Validation"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "audit",
                                                className: "text-xs",
                                                children: "Audit"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "extracted",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$extracted$2d$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: extractedData
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "normalized",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$normalized$2d$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: normalizedData
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "validation",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$validation$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: validationResults
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "audit",
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$components$2f$audit$2d$report$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: auditReport,
                                            onExport: handleDownloadReport
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
                lineNumber: 381,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/agentathon-project/veritas-frontend/app/audit/[id]/page.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s(AuditPage, "5YhEKXq4i75Sq/lIONSsU7kuPxo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$agentathon$2d$project$2f$veritas$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = AuditPage;
var _c;
__turbopack_context__.k.register(_c, "AuditPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_agentathon-project_veritas-frontend_7065f8dc._.js.map