(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--auto: auto;--zero: 0;--min: 1px;--xxxs: 4px;--xxs: 8px;--xs: 12px;--sm: 16px;--md: 24px;--lg: 32px;--xl: 40px;--xxl: 48px;--xxxl: 64px;--xxxxl: 80px;--xxxxxl: 120px;--shadow-size-md: 0 2px 4px 0 rgb(180 184 205 / 50%);--shadow-border-primary: 0 0 0 4px rgb(69 158 74 / 50%);--shadow-border-selected: 0 0 0 4px rgb(69 158 74 / 100%);--shadow-selected-shadow: 0 0 0 4px var(--color-primary-500);--shadow-selected-disabled: 0 0 0 4px var(--color-primary-300);--shadow-border-secondary: 0 0 0 4px rgb(223 225 233 / 50%);--font-size-xxs: 10px;--font-size-xs: 12px;--font-size-sm: 14px;--font-size-md: 16px;--font-size-lg: 18px;--font-size-xl: 20px;--font-size-2xl: 24px;--font-size-3xl: 28px;--font-size-4xl: 32px;--font-size-5xl: 40px;--color-white: white;--color-black: black;--color-current: currentcolor;--color-transparent: transparent;--color-primary-50: #ecf8ed;--color-primary-100: #d9f2db;--color-primary-200: #b3e5b6;--color-primary-300: #9adc9e;--color-primary-400: #78d17d;--color-primary-500: #56c55d;--color-primary-600: #459e4a;--color-primary-700: #347638;--color-primary-800: #1a4c1d;--color-primary-900: #0d260f;--color-primary: var(--color-primary-500);--color-primary-alt-300: #83e4ad;--color-primary-alt-400: #5adb92;--color-primary-alt-500: #31d277;--color-primary-alt-600: #27a85f;--color-primary-alt-700: #1d7e47;--color-primary-alt: var(--color-primary-alt-500);--color-secondary-300: #848793;--color-secondary-400: #5b5f6f;--color-secondary-500: #32374b;--color-secondary-600: #282c3c;--color-secondary-700: #1e212d;--color-secondary: var(--color-secondary-500);--color-error-300: #f7989d;--color-error-400: #f5767c;--color-error-500: #f2545b;--color-error-600: #c24349;--color-error-700: #913237;--color-error: var(--color-error-500);--color-warning-300: #ffbc9b;--color-warning-400: #ffa57a;--color-warning-500: #ff8f59;--color-warning-600: #cc7247;--color-warning-700: #995635;--color-warning: var(--color-warning-500);--color-accent-300: #c9c9f6;--color-accent-400: #8b8bfc;--color-accent-500: #4242f7;--color-accent-600: #3535c6;--color-accent-700: #282894;--color-accent: var(--color-accent-500);--color-accent-alt-300: #ffd681;--color-accent-alt-400: #fcc44f;--color-accent-alt-500: #ffbb2e;--color-accent-alt-600: #ffae05;--color-accent-alt-700: #f0a100;--color-accent-alt: var(--color-accent-alt-500);--color-secondary-alt-200: #f4f5f8;--color-secondary-alt-300: #dfe1e9;--color-secondary-alt-400: #b4b8cd;--color-secondary-alt-500: #949ab7;--color-secondary-alt-600: #767b92;--color-secondary-alt-700: #595c6e;--color-secondary-alt: var(--color-secondary-alt-500);--base-line-height: 1.6;--base-font: museo-sans, sans-serif}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.\\!absolute{position:absolute!important}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:var(--zero)}.-right-xxxs{right:calc(var(--xxxs) * -1)}.-top-md{top:calc(var(--md) * -1)}.-top-xxs{top:calc(var(--xxs) * -1)}.-top-xxxs{top:calc(var(--xxxs) * -1)}.left-0{left:var(--zero)}.left-1\\/2,.left-2\\/4{left:50%}.left-xs{left:var(--xs)}.left-xxs{left:var(--xxs)}.right-0{right:var(--zero)}.right-sm{right:var(--sm)}.right-xs{right:var(--xs)}.top-0{top:var(--zero)}.top-1\\/2,.top-2\\/4{top:50%}.top-\\[-1px\\]{top:-1px}.top-\\[-2px\\]{top:-2px}.top-xs{top:var(--xs)}.z-0{z-index:0}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.order-first{order:-9999}.order-last{order:9999}.m-0{margin:var(--zero)}.m-xxs{margin:var(--xxs)}.-mb-xl{margin-bottom:calc(var(--xl) * -1)}.-mt-xl{margin-top:calc(var(--xl) * -1)}.mb-md{margin-bottom:var(--md)}.mb-sm{margin-bottom:var(--sm)}.mb-xxs{margin-bottom:var(--xxs)}.mb-xxxs{margin-bottom:var(--xxxs)}.ml-md{margin-left:var(--md)}.mt-auto{margin-top:var(--auto)}.mt-sm{margin-top:var(--sm)}.mt-xxs{margin-top:var(--xxs)}.mt-xxxs{margin-top:var(--xxxs)}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.size-0{width:var(--zero);height:var(--zero)}.size-fit{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.size-full{width:100%;height:100%}.size-lg{width:var(--lg);height:var(--lg)}.size-md{width:var(--md);height:var(--md)}.size-sm{width:var(--sm);height:var(--sm)}.size-xl{width:var(--xl);height:var(--xl)}.size-xs{width:var(--xs);height:var(--xs)}.size-xxl{width:var(--xxl);height:var(--xxl)}.size-xxs{width:var(--xxs);height:var(--xxs)}.size-xxxl{width:var(--xxxl);height:var(--xxxl)}.size-xxxs{width:var(--xxxs);height:var(--xxxs)}.size-xxxxl{width:var(--xxxxl);height:var(--xxxxl)}.size-xxxxxl{width:var(--xxxxxl);height:var(--xxxxxl)}.\\!h-0{height:var(--zero)!important}.h-\\[100px\\]{height:100px}.h-auto{height:var(--auto)}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-md{height:var(--md)}.h-sm{height:var(--sm)}.h-xl{height:var(--xl)}.h-xxs{height:var(--xxs)}.h-xxxl{height:var(--xxxl)}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-1\\/4{width:25%}.w-2\\/3{width:66.666667%}.w-3\\/4{width:75%}.w-3\\/6{width:50%}.w-5\\/6{width:83.333333%}.w-\\[344px\\]{width:344px}.w-\\[412px\\]{width:412px}.w-\\[448px\\]{width:448px}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-xl{width:var(--xl)}.w-xxxl{width:var(--xxxl)}.w-xxxs{width:var(--xxxs)}.min-w-sm{min-width:var(--sm)}.max-w-\\[24rem\\]{max-width:24rem}.max-w-\\[32rem\\]{max-width:32rem}.max-w-\\[40rem\\]{max-width:40rem}.flex-1{flex:1 1 0%}.flex-none{flex:none}.grow{flex-grow:1}.-translate-x-1\\/2,.-translate-x-2\\/4{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer{cursor:pointer}.touch-manipulation{touch-action:manipulation}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-flow-col{grid-auto-flow:column}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr\\,auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto\\,1fr\\]{grid-template-columns:auto 1fr}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-center{align-content:center}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.justify-items-center{justify-items:center}.gap-md{gap:var(--md)}.gap-sm{gap:var(--sm)}.gap-xs{gap:var(--xs)}.gap-xxs{gap:var(--xxs)}.gap-xxxs{gap:var(--xxxs)}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-4{border-width:4px}.\\!border-transparent{border-color:var(--color-transparent)!important}.border-black{border-color:var(--color-black)}.border-error{border-color:var(--color-error)}.border-primary{border-color:var(--color-primary)}.border-secondary{border-color:var(--color-secondary)}.border-secondary-alt{border-color:var(--color-secondary-alt)}.border-secondary-alt-300{border-color:var(--color-secondary-alt-300)}.border-secondary-alt-400{border-color:var(--color-secondary-alt-400)}.border-secondary-alt-500{border-color:var(--color-secondary-alt-500)}.border-transparent{border-color:var(--color-transparent)}.border-warning{border-color:var(--color-warning)}.border-white{border-color:var(--color-white)}.border-t-secondary-alt-300{border-top-color:var(--color-secondary-alt-300)}.bg-accent-300{background-color:var(--color-accent-300)}.bg-accent-alt-500{background-color:var(--color-accent-alt-500)}.bg-error{background-color:var(--color-error)}.bg-error-300{background-color:var(--color-error-300)}.bg-primary{background-color:var(--color-primary)}.bg-primary-100{background-color:var(--color-primary-100)}.bg-primary-200{background-color:var(--color-primary-200)}.bg-primary-300{background-color:var(--color-primary-300)}.bg-primary-700{background-color:var(--color-primary-700)}.bg-primary-alt-400{background-color:var(--color-primary-alt-400)}.bg-primary-alt-700{background-color:var(--color-primary-alt-700)}.bg-secondary{background-color:var(--color-secondary)}.bg-secondary-300{background-color:var(--color-secondary-300)}.bg-secondary-alt{background-color:var(--color-secondary-alt)}.bg-secondary-alt-200{background-color:var(--color-secondary-alt-200)}.bg-secondary-alt-300{background-color:var(--color-secondary-alt-300)}.bg-transparent{background-color:var(--color-transparent)}.bg-warning{background-color:var(--color-warning)}.bg-warning-300{background-color:var(--color-warning-300)}.bg-warning-700{background-color:var(--color-warning-700)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-primary{--tw-gradient-from: var(--color-primary) var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-primary-alt{--tw-gradient-to: var(--color-primary-alt) var(--tw-gradient-to-position)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-md{padding:var(--md)}.p-sm{padding:var(--sm)}.p-xl{padding:var(--xl)}.p-xxs{padding:var(--xxs)}.px-md{padding-left:var(--md);padding-right:var(--md)}.px-sm{padding-left:var(--sm);padding-right:var(--sm)}.px-xs{padding-left:var(--xs);padding-right:var(--xs)}.px-xxs{padding-left:var(--xxs);padding-right:var(--xxs)}.py-md{padding-top:var(--md);padding-bottom:var(--md)}.py-sm{padding-top:var(--sm);padding-bottom:var(--sm)}.py-xxs{padding-top:var(--xxs);padding-bottom:var(--xxs)}.py-xxxs{padding-top:var(--xxxs);padding-bottom:var(--xxxs)}.pb-sm{padding-bottom:var(--sm)}.pb-xl{padding-bottom:var(--xl)}.pb-xxs{padding-bottom:var(--xxs)}.pt-0{padding-top:var(--zero)}.pt-md{padding-top:var(--md)}.pt-sm{padding-top:var(--sm)}.pt-xl{padding-top:var(--xl)}.pt-xxxs{padding-top:var(--xxxs)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.text-2xl{font-size:var(--font-size-2xl)}.text-3xl{font-size:var(--font-size-3xl)}.text-4xl{font-size:var(--font-size-4xl)}.text-5xl{font-size:var(--font-size-5xl)}.text-lg{font-size:var(--font-size-lg)}.text-md{font-size:var(--font-size-md)}.text-sm{font-size:var(--font-size-sm)}.text-xl{font-size:var(--font-size-xl)}.text-xs{font-size:var(--font-size-xs)}.text-xxs{font-size:var(--font-size-xxs)}.font-black{font-weight:900}.font-bold{font-weight:700}.font-light{font-weight:300}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.italic{font-style:italic}.leading-none{line-height:1}.leading-normal{line-height:1.5}.text-accent{color:var(--color-accent)}.text-accent-300{color:var(--color-accent-300)}.text-accent-500{color:var(--color-accent-500)}.text-accent-600{color:var(--color-accent-600)}.text-accent-700{color:var(--color-accent-700)}.text-accent-alt{color:var(--color-accent-alt)}.text-accent-alt-300{color:var(--color-accent-alt-300)}.text-accent-alt-400{color:var(--color-accent-alt-400)}.text-accent-alt-500{color:var(--color-accent-alt-500)}.text-accent-alt-600{color:var(--color-accent-alt-600)}.text-accent-alt-700{color:var(--color-accent-alt-700)}.text-black{color:var(--color-black)}.text-current{color:var(--color-current)}.text-error{color:var(--color-error)}.text-error-300{color:var(--color-error-300)}.text-error-400{color:var(--color-error-400)}.text-error-500{color:var(--color-error-500)}.text-error-600{color:var(--color-error-600)}.text-error-700{color:var(--color-error-700)}.text-primary{color:var(--color-primary)}.text-primary-300{color:var(--color-primary-300)}.text-primary-400{color:var(--color-primary-400)}.text-primary-500{color:var(--color-primary-500)}.text-primary-600{color:var(--color-primary-600)}.text-primary-700{color:var(--color-primary-700)}.text-primary-800{color:var(--color-primary-800)}.text-secondary{color:var(--color-secondary)}.text-secondary-300{color:var(--color-secondary-300)}.text-secondary-400{color:var(--color-secondary-400)}.text-secondary-500{color:var(--color-secondary-500)}.text-secondary-600{color:var(--color-secondary-600)}.text-secondary-700{color:var(--color-secondary-700)}.text-secondary-alt{color:var(--color-secondary-alt)}.text-secondary-alt-200{color:var(--color-secondary-alt-200)}.text-secondary-alt-300{color:var(--color-secondary-alt-300)}.text-secondary-alt-400{color:var(--color-secondary-alt-400)}.text-secondary-alt-500{color:var(--color-secondary-alt-500)}.text-secondary-alt-600{color:var(--color-secondary-alt-600)}.text-secondary-alt-700{color:var(--color-secondary-alt-700)}.text-transparent{color:var(--color-transparent)}.text-warning{color:var(--color-warning)}.text-warning-300{color:var(--color-warning-300)}.text-warning-400{color:var(--color-warning-400)}.text-warning-500{color:var(--color-warning-500)}.text-warning-600{color:var(--color-warning-600)}.text-warning-700{color:var(--color-warning-700)}.text-white{color:var(--color-white)}.underline{text-decoration-line:underline}.shadow-md{--tw-shadow: var(--shadow-size-md);--tw-shadow-colored: var(--shadow-size-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-0{outline-width:0px}.ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-secondary-alt-300{--tw-ring-color: var(--color-secondary-alt-300)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}body{font-family:var(--base-font)}*:focus,*:active{outline:none}input,textarea,button,select,label,a{-webkit-tap-highlight-color:transparent}.placeholder\\:italic::-moz-placeholder{font-style:italic}.placeholder\\:italic::placeholder{font-style:italic}.placeholder\\:text-secondary-alt::-moz-placeholder{color:var(--color-secondary-alt)}.placeholder\\:text-secondary-alt::placeholder{color:var(--color-secondary-alt)}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-z-10:before{content:var(--tw-content);z-index:-10}.before\\:box-border:before{content:var(--tw-content);box-sizing:border-box}.before\\:rounded-2xl:before{content:var(--tw-content);border-radius:1rem}.before\\:bg-primary-300:before{content:var(--tw-content);background-color:var(--color-primary-300)}.hover\\:border-secondary-700:hover{border-color:var(--color-secondary-700)}.hover\\:border-secondary-alt-700:hover{border-color:var(--color-secondary-alt-700)}.hover\\:border-transparent:hover{border-color:var(--color-transparent)}.hover\\:bg-error-600:hover{background-color:var(--color-error-600)}.hover\\:bg-primary-600:hover{background-color:var(--color-primary-600)}.hover\\:bg-secondary-600:hover{background-color:var(--color-secondary-600)}.hover\\:bg-warning-600:hover{background-color:var(--color-warning-600)}.hover\\:text-accent-alt-600:hover{color:var(--color-accent-alt-600)}.hover\\:text-white:hover{color:var(--color-white)}.focus\\:shadow-border-primary:focus{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.active\\:border-transparent:active{border-color:var(--color-transparent)}.active\\:bg-error-700:active{background-color:var(--color-error-700)}.active\\:bg-primary-700:active{background-color:var(--color-primary-700)}.active\\:bg-secondary-700:active{background-color:var(--color-secondary-700)}.active\\:bg-secondary-alt-200:active{background-color:var(--color-secondary-alt-200)}.active\\:bg-warning-700:active{background-color:var(--color-warning-700)}.active\\:text-accent-alt-700:active{color:var(--color-accent-alt-700)}.active\\:text-white:active{color:var(--color-white)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:border-error-300:disabled{border-color:var(--color-error-300)}.disabled\\:border-primary-300:disabled{border-color:var(--color-primary-300)}.disabled\\:border-secondary-300:disabled{border-color:var(--color-secondary-300)}.disabled\\:border-warning-300:disabled{border-color:var(--color-warning-300)}.disabled\\:bg-error-300:disabled{background-color:var(--color-error-300)}.disabled\\:bg-primary-300:disabled{background-color:var(--color-primary-300)}.disabled\\:bg-secondary-300:disabled{background-color:var(--color-secondary-300)}.disabled\\:bg-secondary-alt-200:disabled{background-color:var(--color-secondary-alt-200)}.disabled\\:bg-warning-300:disabled{background-color:var(--color-warning-300)}.disabled\\:text-accent-alt-300:disabled{color:var(--color-accent-alt-300)}.disabled\\:text-error-300:disabled{color:var(--color-error-300)}.disabled\\:text-primary-300:disabled{color:var(--color-primary-300)}.disabled\\:text-secondary-300:disabled{color:var(--color-secondary-300)}.disabled\\:text-warning-300:disabled{color:var(--color-warning-300)}.group:last-child .group-last\\:hidden{display:none}.group:hover .group-hover\\:border-secondary-alt-700{border-color:var(--color-secondary-alt-700)}.group:focus .group-focus\\:border-secondary-alt-700{border-color:var(--color-secondary-alt-700)}.peer:checked~.peer-checked\\:border-2{border-width:2px}.peer:checked~.peer-checked\\:border-primary{border-color:var(--color-primary)}.peer:checked~.peer-checked\\:border-transparent{border-color:var(--color-transparent)}.peer:checked~.peer-checked\\:text-primary-500{color:var(--color-primary-500)}.peer:checked~.peer-checked\\:shadow-border-primary-disabled{--tw-shadow: var(--shadow-selected-disabled);--tw-shadow-colored: var(--shadow-selected-disabled);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:shadow-selected-shadow{--tw-shadow: var(--shadow-selected-shadow);--tw-shadow-colored: var(--shadow-selected-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:hover\\:border-primary-600:hover{border-color:var(--color-primary-600)}.peer:checked~.peer-checked\\:hover\\:shadow-border-selected:hover{--tw-shadow: var(--shadow-border-selected);--tw-shadow-colored: var(--shadow-border-selected);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:active\\:shadow-border-primary:active{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:active\\:before\\:-bottom-xxs:active:before{content:var(--tw-content);bottom:calc(var(--xxs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-left-xxs:active:before{content:var(--tw-content);left:calc(var(--xxs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-right-xxs:active:before{content:var(--tw-content);right:calc(var(--xxs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-top-xxs:active:before{content:var(--tw-content);top:calc(var(--xxs) * -1)}.peer:focus~.peer-focus\\:shadow-border-primary{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:focus~.peer-focus\\:before\\:-bottom-xxs:before{content:var(--tw-content);bottom:calc(var(--xxs) * -1)}.peer:focus~.peer-focus\\:before\\:-left-xxs:before{content:var(--tw-content);left:calc(var(--xxs) * -1)}.peer:focus~.peer-focus\\:before\\:-right-xxs:before{content:var(--tw-content);right:calc(var(--xxs) * -1)}.peer:focus~.peer-focus\\:before\\:-top-xxs:before{content:var(--tw-content);top:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-bottom-xxs:before{content:var(--tw-content);bottom:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-bottom-xxxs:before{content:var(--tw-content);bottom:calc(var(--xxxs) * -1)}.peer:active~.peer-active\\:before\\:-left-xxs:before{content:var(--tw-content);left:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-left-xxxs:before{content:var(--tw-content);left:calc(var(--xxxs) * -1)}.peer:active~.peer-active\\:before\\:-right-xxs:before{content:var(--tw-content);right:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-right-xxxs:before{content:var(--tw-content);right:calc(var(--xxxs) * -1)}.peer:active~.peer-active\\:before\\:-top-xxs:before{content:var(--tw-content);top:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-top-xxxs:before{content:var(--tw-content);top:calc(var(--xxxs) * -1)}.peer:disabled~.peer-disabled\\:border-secondary-alt-400{border-color:var(--color-secondary-alt-400)}.peer:disabled~.peer-disabled\\:bg-secondary-alt-200{background-color:var(--color-secondary-alt-200)}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{e as Ya,s as Ua}from"./entry-preview-DF-1j6tG.js";import{D as Ha,a as Ee,E as Wa,G as Ga,d as Ft,H as Ka,I as _e,k as $,J as $t,K as pt,r as Va,y as Qn}from"./vue.esm-bundler-BFiz2kkF.js";const{global:qa}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_PREVIEW_API__;const{TestingLibraryMustBeConfiguredError:Xa}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var{window:Ze}=qa;Ze.STORYBOOK_ENV="vue3";Ze.PLUGINS_SETUP_FUNCTIONS||(Ze.PLUGINS_SETUP_FUNCTIONS=new Set);({...Ya});var Xn;try{(Xn=module==null?void 0:module.hot)!=null&&Xn.decline&&module.hot.decline()}catch{}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ue=typeof document<"u";function Qa(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const _=Object.assign;function ht(e,t){const n={};for(const a in t){const r=t[a];n[a]=G(r)?r.map(e):e(r)}return n}const Se=()=>{},G=Array.isArray,Zn=/#/g,Za=/&/g,Ja=/\//g,er=/=/g,tr=/\?/g,Jn=/\+/g,nr=/%5B/g,ar=/%5D/g,ea=/%5E/g,rr=/%60/g,ta=/%7B/g,ir=/%7C/g,na=/%7D/g,or=/%20/g;function Bt(e){return encodeURI(""+e).replace(ir,"|").replace(nr,"[").replace(ar,"]")}function sr(e){return Bt(e).replace(ta,"{").replace(na,"}").replace(ea,"^")}function Et(e){return Bt(e).replace(Jn,"%2B").replace(or,"+").replace(Zn,"%23").replace(Za,"%26").replace(rr,"`").replace(ta,"{").replace(na,"}").replace(ea,"^")}function lr(e){return Et(e).replace(er,"%3D")}function fr(e){return Bt(e).replace(Zn,"%23").replace(tr,"%3F")}function cr(e){return e==null?"":fr(e).replace(Ja,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const ur=/\/$/,mr=e=>e.replace(ur,"");function gt(e,t,n="/"){let a,r={},i="",o="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(a=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),r=e(i)),l>-1&&(a=a||t.slice(0,l),o=t.slice(l,t.length)),a=hr(a??t,n),{fullPath:a+(i&&"?")+i+o,path:a,query:r,hash:Re(o)}}function dr(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ln(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function vr(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&pe(t.matched[a],n.matched[r])&&aa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pe(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function aa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!pr(e[n],t[n]))return!1;return!0}function pr(e,t){return G(e)?fn(e,t):G(t)?fn(t,e):e===t}function fn(e,t){return G(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function hr(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=n.length-1,o,l;for(o=0;o<a.length;o++)if(l=a[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+a.slice(o).join("/")}const ee={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ie;(function(e){e.pop="pop",e.push="push"})(Ie||(Ie={}));var Oe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Oe||(Oe={}));function gr(e){if(!e)if(ue){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mr(e)}const br=/^[^#]+#/;function yr(e,t){return e.replace(br,"#")+t}function wr(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const it=()=>({left:window.scrollX,top:window.scrollY});function kr(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=wr(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cn(e,t){return(history.state?history.state.position-t:-1)+e}const St=new Map;function xr(e,t){St.set(e,t)}function Ar(e){const t=St.get(e);return St.delete(e),t}let Er=()=>location.protocol+"//"+location.host;function ra(e,t){const{pathname:n,search:a,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(l);return s[0]!=="/"&&(s="/"+s),ln(s,"")}return ln(n,e)+a+r}function Sr(e,t,n,a){let r=[],i=[],o=null;const l=({state:m})=>{const d=ra(e,location),A=n.value,E=t.value;let S=0;if(m){if(n.value=d,t.value=m,o&&o===A){o=null;return}S=E?m.position-E.position:0}else a(d);r.forEach(h=>{h(n.value,A,{delta:S,type:Ie.pop,direction:S?S>0?Oe.forward:Oe.back:Oe.unknown})})};function s(){o=n.value}function u(m){r.push(m);const d=()=>{const A=r.indexOf(m);A>-1&&r.splice(A,1)};return i.push(d),d}function c(){const{history:m}=window;m.state&&m.replaceState(_({},m.state,{scroll:it()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:s,listen:u,destroy:f}}function un(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?it():null}}function Or(e){const{history:t,location:n}=window,a={value:ra(e,n)},r={value:t.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,u,c){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+s:Er()+e+s;try{t[c?"replaceState":"pushState"](u,"",m),r.value=u}catch(d){console.error(d),n[c?"replace":"assign"](m)}}function o(s,u){const c=_({},t.state,un(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});i(s,c,!0),a.value=s}function l(s,u){const c=_({},r.value,t.state,{forward:s,scroll:it()});i(c.current,c,!0);const f=_({},un(a.value,s,null),{position:c.position+1},u);i(s,f,!1),a.value=s}return{location:a,state:r,push:l,replace:o}}function Pr(e){e=gr(e);const t=Or(e),n=Sr(e,t.state,t.location,t.replace);function a(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=_({location:"",base:e,go:a,createHref:yr.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Cr(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Pr(e)}function _r(e){return typeof e=="string"||e&&typeof e=="object"}function ia(e){return typeof e=="string"||typeof e=="symbol"}const oa=Symbol("");var mn;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mn||(mn={}));function he(e,t){return _(new Error,{type:e,[oa]:!0},t)}function V(e,t){return e instanceof Error&&oa in e&&(t==null||!!(e.type&t))}const dn="[^/]+?",Rr={sensitive:!1,strict:!1,start:!0,end:!0},Ir=/[.+*?^${}()[\]/\\]/g;function Nr(e,t){const n=_({},Rr,t),a=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const m=u[f];let d=40+(n.sensitive?.25:0);if(m.type===0)f||(r+="/"),r+=m.value.replace(Ir,"\\$&"),d+=40;else if(m.type===1){const{value:A,repeatable:E,optional:S,regexp:h}=m;i.push({name:A,repeatable:E,optional:S});const p=h||dn;if(p!==dn){d+=10;try{new RegExp(`(${p})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${A}" (${p}): `+C.message)}}let k=E?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;f||(k=S&&u.length<2?`(?:/${k})`:"/"+k),S&&(k+="?"),r+=k,d+=20,S&&(d+=-8),E&&(d+=-20),p===".*"&&(d+=-50)}c.push(d)}a.push(c)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const c=u.match(o),f={};if(!c)return null;for(let m=1;m<c.length;m++){const d=c[m]||"",A=i[m-1];f[A.name]=d&&A.repeatable?d.split("/"):d}return f}function s(u){let c="",f=!1;for(const m of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of m)if(d.type===0)c+=d.value;else if(d.type===1){const{value:A,repeatable:E,optional:S}=d,h=A in u?u[A]:"";if(G(h)&&!E)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const p=G(h)?h.join("/"):h;if(!p)if(S)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);c+=p}}return c||"/"}return{re:o,score:a,keys:i,parse:l,stringify:s}}function Tr(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function sa(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const i=Tr(a[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-a.length)===1){if(vn(a))return 1;if(vn(r))return-1}return r.length-a.length}function vn(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mr={type:0,value:""},Lr=/[a-zA-Z0-9_]/;function zr(e){if(!e)return[[]];if(e==="/")return[[Mr]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=0,a=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,s,u="",c="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:s==="/"?(u&&f(),o()):s===":"?(f(),n=1):m();break;case 4:m(),n=a;break;case 1:s==="("?n=2:Lr.test(s)?m():(f(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:f(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function jr(e,t,n){const a=Nr(zr(e.path),n),r=_(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Dr(e,t){const n=[],a=new Map;t=gn({strict:!1,end:!0,sensitive:!1},t);function r(f){return a.get(f)}function i(f,m,d){const A=!d,E=Fr(f);E.aliasOf=d&&d.record;const S=gn(t,f),h=[E];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of C)h.push(_({},E,{components:d?d.record.components:E.components,path:R,aliasOf:d?d.record:E}))}let p,k;for(const C of h){const{path:R}=C;if(m&&R[0]!=="/"){const j=m.record.path,M=j[j.length-1]==="/"?"":"/";C.path=m.record.path+(R&&M+R)}if(p=jr(C,m,S),d?d.alias.push(p):(k=k||p,k!==p&&k.alias.push(p),A&&f.name&&!hn(p)&&o(f.name)),la(p)&&s(p),E.children){const j=E.children;for(let M=0;M<j.length;M++)i(j[M],p,d&&d.children[M])}d=d||p}return k?()=>{o(k)}:Se}function o(f){if(ia(f)){const m=a.get(f);m&&(a.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&a.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function s(f){const m=Yr(f,n);n.splice(m,0,f),f.record.name&&!hn(f)&&a.set(f.record.name,f)}function u(f,m){let d,A={},E,S;if("name"in f&&f.name){if(d=a.get(f.name),!d)throw he(1,{location:f});S=d.record.name,A=_(pn(m.params,d.keys.filter(k=>!k.optional).concat(d.parent?d.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&pn(f.params,d.keys.map(k=>k.name))),E=d.stringify(A)}else if(f.path!=null)E=f.path,d=n.find(k=>k.re.test(E)),d&&(A=d.parse(E),S=d.record.name);else{if(d=m.name?a.get(m.name):n.find(k=>k.re.test(m.path)),!d)throw he(1,{location:f,currentLocation:m});S=d.record.name,A=_({},m.params,f.params),E=d.stringify(A)}const h=[];let p=d;for(;p;)h.unshift(p.record),p=p.parent;return{name:S,path:E,params:A,matched:h,meta:Br(h)}}e.forEach(f=>i(f));function c(){n.length=0,a.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:l,getRecordMatcher:r}}function pn(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Fr(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$r(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $r(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function hn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Br(e){return e.reduce((t,n)=>_(t,n.meta),{})}function gn(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}function Yr(e,t){let n=0,a=t.length;for(;n!==a;){const i=n+a>>1;sa(e,t[i])<0?a=i:n=i+1}const r=Ur(e);return r&&(a=t.lastIndexOf(r,a-1)),a}function Ur(e){let t=e;for(;t=t.parent;)if(la(t)&&sa(e,t)===0)return t}function la({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Hr(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(Jn," "),o=i.indexOf("="),l=Re(o<0?i:i.slice(0,o)),s=o<0?null:Re(i.slice(o+1));if(l in t){let u=t[l];G(u)||(u=t[l]=[u]),u.push(s)}else t[l]=s}return t}function bn(e){let t="";for(let n in e){const a=e[n];if(n=lr(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(G(a)?a.map(i=>i&&Et(i)):[a&&Et(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Wr(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=G(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const Gr=Symbol(""),yn=Symbol(""),Yt=Symbol(""),fa=Symbol(""),Ot=Symbol("");function xe(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ne(e,t,n,a,r,i=o=>o()){const o=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((l,s)=>{const u=m=>{m===!1?s(he(4,{from:n,to:t})):m instanceof Error?s(m):_r(m)?s(he(2,{from:t,to:m})):(o&&a.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},c=i(()=>e.call(a&&a.instances[r],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(m=>s(m))})}function bt(e,t,n,a,r=i=>i()){const i=[];for(const o of e)for(const l in o.components){let s=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(Kr(s)){const c=(s.__vccOpts||s)[t];c&&i.push(ne(c,n,a,o,l,r))}else{let u=s();i.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const f=Qa(c)?c.default:c;o.components[l]=f;const d=(f.__vccOpts||f)[t];return d&&ne(d,n,a,o,l,r)()}))}}return i}function Kr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wn(e){const t=_e(Yt),n=_e(fa),a=$(()=>{const s=Ee(e.to);return t.resolve(s)}),r=$(()=>{const{matched:s}=a.value,{length:u}=s,c=s[u-1],f=n.matched;if(!c||!f.length)return-1;const m=f.findIndex(pe.bind(null,c));if(m>-1)return m;const d=kn(s[u-2]);return u>1&&kn(c)===d&&f[f.length-1].path!==d?f.findIndex(pe.bind(null,s[u-2])):m}),i=$(()=>r.value>-1&&Qr(n.params,a.value.params)),o=$(()=>r.value>-1&&r.value===n.matched.length-1&&aa(n.params,a.value.params));function l(s={}){return Xr(s)?t[Ee(e.replace)?"replace":"push"](Ee(e.to)).catch(Se):Promise.resolve()}return{route:a,href:$(()=>a.value.href),isActive:i,isExactActive:o,navigate:l}}const Vr=Ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wn,setup(e,{slots:t}){const n=Ka(wn(e)),{options:a}=_e(Yt),r=$(()=>({[xn(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[xn(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:$t("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),qr=Vr;function Xr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qr(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!G(r)||r.length!==a.length||a.some((i,o)=>i!==r[o]))return!1}return!0}function kn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xn=(e,t,n)=>e??t??n,Zr=Ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=_e(Ot),r=$(()=>e.route||a.value),i=_e(yn,0),o=$(()=>{let u=Ee(i);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),l=$(()=>r.value.matched[o.value]);pt(yn,$(()=>o.value+1)),pt(Gr,l),pt(Ot,r);const s=Va();return Qn(()=>[s.value,l.value,e.name],([u,c,f],[m,d,A])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!pe(c,d)||!m)&&(c.enterCallbacks[f]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,f=l.value,m=f&&f.components[c];if(!m)return An(n.default,{Component:m,route:u});const d=f.props[c],A=d?d===!0?u.params:typeof d=="function"?d(u):d:null,S=$t(m,_({},A,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[c]=null)},ref:s}));return An(n.default,{Component:S,route:u})||S}}});function An(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Jr=Zr;function ei(e){const t=Dr(e.routes,e),n=e.parseQuery||Hr,a=e.stringifyQuery||bn,r=e.history,i=xe(),o=xe(),l=xe(),s=Ha(ee);let u=ee;ue&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ht.bind(null,v=>""+v),f=ht.bind(null,cr),m=ht.bind(null,Re);function d(v,y){let g,x;return ia(v)?(g=t.getRecordMatcher(v),x=y):x=v,t.addRoute(x,g)}function A(v){const y=t.getRecordMatcher(v);y&&t.removeRoute(y)}function E(){return t.getRoutes().map(v=>v.record)}function S(v){return!!t.getRecordMatcher(v)}function h(v,y){if(y=_({},y||s.value),typeof v=="string"){const O=gt(n,v,y.path),D=t.resolve({path:O.path},y),ke=r.createHref(O.fullPath);return _(O,D,{params:m(D.params),hash:Re(O.hash),redirectedFrom:void 0,href:ke})}let g;if(v.path!=null)g=_({},v,{path:gt(n,v.path,y.path).path});else{const O=_({},v.params);for(const D in O)O[D]==null&&delete O[D];g=_({},v,{params:f(O)}),y.params=f(y.params)}const x=t.resolve(g,y),I=v.hash||"";x.params=c(m(x.params));const z=dr(a,_({},v,{hash:sr(I),path:x.path})),P=r.createHref(z);return _({fullPath:z,hash:I,query:a===bn?Wr(v.query):v.query||{}},x,{redirectedFrom:void 0,href:P})}function p(v){return typeof v=="string"?gt(n,v,s.value.path):_({},v)}function k(v,y){if(u!==v)return he(8,{from:y,to:v})}function C(v){return M(v)}function R(v){return C(_(p(v),{replace:!0}))}function j(v){const y=v.matched[v.matched.length-1];if(y&&y.redirect){const{redirect:g}=y;let x=typeof g=="function"?g(v):g;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=p(x):{path:x},x.params={}),_({query:v.query,hash:v.hash,params:x.path!=null?{}:v.params},x)}}function M(v,y){const g=u=h(v),x=s.value,I=v.state,z=v.force,P=v.replace===!0,O=j(g);if(O)return M(_(p(O),{state:typeof O=="object"?_({},I,O.state):I,force:z,replace:P}),y||g);const D=g;D.redirectedFrom=y;let ke;return!z&&vr(a,x,g)&&(ke=he(16,{to:D,from:x}),on(x,x,!0,!1)),(ke?Promise.resolve(ke):$e(D,x)).catch(B=>V(B)?V(B,2)?B:mt(B):ut(B,D,x)).then(B=>{if(B){if(V(B,2))return M(_({replace:P},p(B.to),{state:typeof B.to=="object"?_({},I,B.to.state):I,force:z}),y||D)}else B=an(D,x,!0,P,I);return nn(D,x,B),B})}function ye(v,y){const g=k(v,y);return g?Promise.reject(g):Promise.resolve()}function H(v){const y=Ye.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(v):v()}function $e(v,y){let g;const[x,I,z]=ti(v,y);g=bt(x.reverse(),"beforeRouteLeave",v,y);for(const O of x)O.leaveGuards.forEach(D=>{g.push(ne(D,v,y))});const P=ye.bind(null,v,y);return g.push(P),ce(g).then(()=>{g=[];for(const O of i.list())g.push(ne(O,v,y));return g.push(P),ce(g)}).then(()=>{g=bt(I,"beforeRouteUpdate",v,y);for(const O of I)O.updateGuards.forEach(D=>{g.push(ne(D,v,y))});return g.push(P),ce(g)}).then(()=>{g=[];for(const O of z)if(O.beforeEnter)if(G(O.beforeEnter))for(const D of O.beforeEnter)g.push(ne(D,v,y));else g.push(ne(O.beforeEnter,v,y));return g.push(P),ce(g)}).then(()=>(v.matched.forEach(O=>O.enterCallbacks={}),g=bt(z,"beforeRouteEnter",v,y,H),g.push(P),ce(g))).then(()=>{g=[];for(const O of o.list())g.push(ne(O,v,y));return g.push(P),ce(g)}).catch(O=>V(O,8)?O:Promise.reject(O))}function nn(v,y,g){l.list().forEach(x=>H(()=>x(v,y,g)))}function an(v,y,g,x,I){const z=k(v,y);if(z)return z;const P=y===ee,O=ue?history.state:{};g&&(x||P?r.replace(v.fullPath,_({scroll:P&&O&&O.scroll},I)):r.push(v.fullPath,I)),s.value=v,on(v,y,g,P),mt()}let we;function $a(){we||(we=r.listen((v,y,g)=>{if(!sn.listening)return;const x=h(v),I=j(x);if(I){M(_(I,{replace:!0}),x).catch(Se);return}u=x;const z=s.value;ue&&xr(cn(z.fullPath,g.delta),it()),$e(x,z).catch(P=>V(P,12)?P:V(P,2)?(M(P.to,x).then(O=>{V(O,20)&&!g.delta&&g.type===Ie.pop&&r.go(-1,!1)}).catch(Se),Promise.reject()):(g.delta&&r.go(-g.delta,!1),ut(P,x,z))).then(P=>{P=P||an(x,z,!1),P&&(g.delta&&!V(P,8)?r.go(-g.delta,!1):g.type===Ie.pop&&V(P,20)&&r.go(-1,!1)),nn(x,z,P)}).catch(Se)}))}let ct=xe(),rn=xe(),Be;function ut(v,y,g){mt(v);const x=rn.list();return x.length?x.forEach(I=>I(v,y,g)):console.error(v),Promise.reject(v)}function Ba(){return Be&&s.value!==ee?Promise.resolve():new Promise((v,y)=>{ct.add([v,y])})}function mt(v){return Be||(Be=!v,$a(),ct.list().forEach(([y,g])=>v?g(v):y()),ct.reset()),v}function on(v,y,g,x){const{scrollBehavior:I}=e;if(!ue||!I)return Promise.resolve();const z=!g&&Ar(cn(v.fullPath,0))||(x||!g)&&history.state&&history.state.scroll||null;return Ga().then(()=>I(v,y,z)).then(P=>P&&kr(P)).catch(P=>ut(P,v,y))}const dt=v=>r.go(v);let vt;const Ye=new Set,sn={currentRoute:s,listening:!0,addRoute:d,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:E,resolve:h,options:e,push:C,replace:R,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:rn.add,isReady:Ba,install(v){const y=this;v.component("RouterLink",qr),v.component("RouterView",Jr),v.config.globalProperties.$router=y,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(s)}),ue&&!vt&&s.value===ee&&(vt=!0,C(r.location).catch(I=>{}));const g={};for(const I in ee)Object.defineProperty(g,I,{get:()=>s.value[I],enumerable:!0});v.provide(Yt,y),v.provide(fa,Wa(g)),v.provide(Ot,s);const x=v.unmount;Ye.add(v),v.unmount=function(){Ye.delete(v),Ye.size<1&&(u=ee,we&&we(),we=null,s.value=ee,vt=!1,Be=!1),x()}}};function ce(v){return v.reduce((y,g)=>y.then(()=>H(g)),Promise.resolve())}return sn}function ti(e,t){const n=[],a=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>pe(u,l))?a.push(l):n.push(l));const s=e.matched[o];s&&(t.matched.find(u=>pe(u,s))||r.push(s))}return[n,a,r]}function En(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?En(Object(n),!0).forEach(function(a){F(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):En(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tt(e){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(e)}function ni(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ai(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ri(e,t,n){return t&&ai(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ut(e,t){return oi(e)||li(e,t)||ca(e,t)||ci()}function je(e){return ii(e)||si(e)||ca(e)||fi()}function ii(e){if(Array.isArray(e))return Pt(e)}function oi(e){if(Array.isArray(e))return e}function si(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function li(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(s){i=!0,l=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function ca(e,t){if(e){if(typeof e=="string")return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(e,t)}}function Pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function fi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ci(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sn=function(){},Ht={},ua={},ma=null,da={mark:Sn,measure:Sn};try{typeof window<"u"&&(Ht=window),typeof document<"u"&&(ua=document),typeof MutationObserver<"u"&&(ma=MutationObserver),typeof performance<"u"&&(da=performance)}catch{}var ui=Ht.navigator||{},On=ui.userAgent,Pn=On===void 0?"":On,ae=Ht,T=ua,Cn=ma,Ue=da;ae.document;var J=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",va=~Pn.indexOf("MSIE")||~Pn.indexOf("Trident/"),He,We,Ge,Ke,Ve,X="___FONT_AWESOME___",Ct=16,pa="fa",ha="svg-inline--fa",le="data-fa-i2svg",_t="data-fa-pseudo-element",mi="data-fa-pseudo-element-pending",Wt="data-prefix",Gt="data-icon",_n="fontawesome-i2svg",di="async",vi=["HTML","HEAD","STYLE","SCRIPT"],ga=function(){try{return!0}catch{return!1}}(),N="classic",L="sharp",Kt=[N,L];function De(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[N]}})}var Ne=De((He={},F(He,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),F(He,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),He)),Te=De((We={},F(We,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(We,L,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),We)),Me=De((Ge={},F(Ge,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(Ge,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ge)),pi=De((Ke={},F(Ke,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(Ke,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ke)),hi=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ba="fa-layers-text",gi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bi=De((Ve={},F(Ve,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(Ve,L,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ve)),ya=[1,2,3,4,5,6,7,8,9,10],yi=ya.concat([11,12,13,14,15,16,17,18,19,20]),wi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Le=new Set;Object.keys(Te[N]).map(Le.add.bind(Le));Object.keys(Te[L]).map(Le.add.bind(Le));var ki=[].concat(Kt,je(Le),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ya.map(function(e){return"".concat(e,"x")})).concat(yi.map(function(e){return"w-".concat(e)})),Pe=ae.FontAwesomeConfig||{};function xi(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ai(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ei=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ei.forEach(function(e){var t=Ut(e,2),n=t[0],a=t[1],r=Ai(xi(n));r!=null&&(Pe[a]=r)})}var wa={styleDefault:"solid",familyDefault:"classic",cssPrefix:pa,replacementClass:ha,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pe.familyPrefix&&(Pe.cssPrefix=Pe.familyPrefix);var ge=b(b({},wa),Pe);ge.autoReplaceSvg||(ge.observeMutations=!1);var w={};Object.keys(wa).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(n){ge[e]=n,Ce.forEach(function(a){return a(w)})},get:function(){return ge[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){ge.cssPrefix=t,Ce.forEach(function(n){return n(w)})},get:function(){return ge.cssPrefix}});ae.FontAwesomeConfig=w;var Ce=[];function Si(e){return Ce.push(e),function(){Ce.splice(Ce.indexOf(e),1)}}var te=Ct,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oi(e){if(!(!e||!J)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return T.head.insertBefore(t,a),e}}var Pi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ze(){for(var e=12,t="";e-- >0;)t+=Pi[Math.random()*62|0];return t}function be(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Vt(e){return e.classList?be(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ka(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ci(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ka(e[n]),'" ')},"").trim()}function ot(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qt(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function _i(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:u}}function Ri(e){var t=e.transform,n=e.width,a=n===void 0?Ct:n,r=e.height,i=r===void 0?Ct:r,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&va?s+="translate(".concat(t.x/te-a/2,"em, ").concat(t.y/te-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/te,"em), calc(-50% + ").concat(t.y/te,"em)) "):s+="translate(".concat(t.x/te,"em, ").concat(t.y/te,"em) "),s+="scale(".concat(t.size/te*(t.flipX?-1:1),", ").concat(t.size/te*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ii=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xa(){var e=pa,t=ha,n=w.cssPrefix,a=w.replacementClass,r=Ii;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var Rn=!1;function yt(){w.autoAddCss&&!Rn&&(Oi(xa()),Rn=!0)}var Ni={mixout:function(){return{dom:{css:xa,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},Q=ae||{};Q[X]||(Q[X]={});Q[X].styles||(Q[X].styles={});Q[X].hooks||(Q[X].hooks={});Q[X].shims||(Q[X].shims=[]);var W=Q[X],Aa=[],Ti=function e(){T.removeEventListener("DOMContentLoaded",e),nt=1,Aa.map(function(t){return t()})},nt=!1;J&&(nt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),nt||T.addEventListener("DOMContentLoaded",Ti));function Mi(e){J&&(nt?setTimeout(e,0):Aa.push(e))}function Fe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?ka(e):"<".concat(t," ").concat(Ci(a),">").concat(i.map(Fe).join(""),"</").concat(t,">")}function In(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wt=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=n,s,u,c;for(a===void 0?(s=1,c=t[i[0]]):(s=0,c=a);s<o;s++)u=i[s],c=l(c,t[u],u,t);return c};function Li(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Rt(e){var t=Li(e);return t.length===1?t[0].toString(16):null}function zi(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function It(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Nn(t);typeof W.hooks.addPack=="function"&&!r?W.hooks.addPack(e,Nn(t)):W.styles[e]=b(b({},W.styles[e]||{}),i),e==="fas"&&It("fa",t)}var qe,Xe,Qe,me=W.styles,ji=W.shims,Di=(qe={},F(qe,N,Object.values(Me[N])),F(qe,L,Object.values(Me[L])),qe),Xt=null,Ea={},Sa={},Oa={},Pa={},Ca={},Fi=(Xe={},F(Xe,N,Object.keys(Ne[N])),F(Xe,L,Object.keys(Ne[L])),Xe);function $i(e){return~ki.indexOf(e)}function Bi(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!$i(r)?r:null}var _a=function(){var t=function(i){return wt(me,function(o,l,s){return o[s]=wt(l,i,{}),o},{})};Ea=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){r[s.toString(16)]=o})}return r}),Sa=t(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){r[s]=o})}return r}),Ca=t(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(s){r[s]=o}),r});var n="far"in me||w.autoFetchSvg,a=wt(ji,function(r,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:s}),r},{names:{},unicodes:{}});Oa=a.names,Pa=a.unicodes,Xt=st(w.styleDefault,{family:w.familyDefault})};Si(function(e){Xt=st(e.styleDefault,{family:w.familyDefault})});_a();function Qt(e,t){return(Ea[e]||{})[t]}function Yi(e,t){return(Sa[e]||{})[t]}function se(e,t){return(Ca[e]||{})[t]}function Ra(e){return Oa[e]||{prefix:null,iconName:null}}function Ui(e){var t=Pa[e],n=Qt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Xt}var Zt=function(){return{prefix:null,iconName:null,rest:[]}};function st(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?N:n,r=Ne[a][e],i=Te[a][e]||Te[a][r],o=e in W.styles?e:null;return i||o||null}var Tn=(Qe={},F(Qe,N,Object.keys(Me[N])),F(Qe,L,Object.keys(Me[L])),Qe);function lt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},F(t,N,"".concat(w.cssPrefix,"-").concat(N)),F(t,L,"".concat(w.cssPrefix,"-").concat(L)),t),o=null,l=N;(e.includes(i[N])||e.some(function(u){return Tn[N].includes(u)}))&&(l=N),(e.includes(i[L])||e.some(function(u){return Tn[L].includes(u)}))&&(l=L);var s=e.reduce(function(u,c){var f=Bi(w.cssPrefix,c);if(me[c]?(c=Di[l].includes(c)?pi[l][c]:c,o=c,u.prefix=c):Fi[l].indexOf(c)>-1?(o=c,u.prefix=st(c,{family:l})):f?u.iconName=f:c!==w.replacementClass&&c!==i[N]&&c!==i[L]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var m=o==="fa"?Ra(u.iconName):{},d=se(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||d||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!me.far&&me.fas&&!w.autoFetchSvg&&(u.prefix="fas")}return u},Zt());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===L&&(me.fass||w.autoFetchSvg)&&(s.prefix="fass",s.iconName=se(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=re()||"fas"),s}var Hi=function(){function e(){ni(this,e),this.definitions={}}return ri(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=b(b({},n.definitions[l]||{}),o[l]),It(l,o[l]);var s=Me[N][l];s&&It(s,o[l]),_a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),e}(),Mn=[],de={},ve={},Wi=Object.keys(ve);function Gi(e,t){var n=t.mixoutsTo;return Mn=e,de={},Object.keys(ve).forEach(function(a){Wi.indexOf(a)===-1&&delete ve[a]}),Mn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){de[o]||(de[o]=[]),de[o].push(i[o])})}a.provides&&a.provides(ve)}),n}function Nt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=de[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=de[e]||[];r.forEach(function(i){i.apply(null,n)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ve[e]?ve[e].apply(null,t):void 0}function Tt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||re();if(t)return t=se(n,t)||t,In(Ia.definitions,n,t)||In(W.styles,n,t)}var Ia=new Hi,Ki=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,fe("noAuto")},Vi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(fe("beforeI2svg",t),Z("pseudoElements2svg",t),Z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Mi(function(){Xi({autoReplaceSvgRoot:n}),fe("watch",t)})}},qi={icon:function(t){if(t===null)return null;if(tt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:se(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=st(t[0]);return{prefix:a,iconName:se(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match(hi))){var r=lt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:se(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=re();return{prefix:i,iconName:se(i,t)||t}}}},U={noAuto:Ki,config:w,dom:Vi,parse:qi,library:Ia,findIconDefinition:Tt,toHtml:Fe},Xi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(W.styles).length>0||w.autoFetchSvg)&&J&&w.autoReplaceSvg&&U.dom.i2svg({node:a})};function ft(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Fe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(J){var a=T.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Qi(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(qt(o)&&n.found&&!a.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};r.style=ot(b(b({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Zi(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:o}),children:a}]}]}function Jt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,f=e.extra,m=e.watchable,d=m===void 0?!1:m,A=a.found?a:n,E=A.width,S=A.height,h=r==="fak",p=[w.replacementClass,i?"".concat(w.cssPrefix,"-").concat(i):""].filter(function(H){return f.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(f.classes).join(" "),k={children:[],attributes:b(b({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(S)})},C=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(E/S*16*.0625,"em")}:{};d&&(k.attributes[le]=""),s&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||ze())},children:[s]}),delete k.attributes.title);var R=b(b({},k),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:l,styles:b(b({},C),f.styles)}),j=a.found&&n.found?Z("generateAbstractMask",R)||{children:[],attributes:{}}:Z("generateAbstractIcon",R)||{children:[],attributes:{}},M=j.children,ye=j.attributes;return R.children=M,R.attributes=ye,l?Zi(R):Qi(R)}function Ln(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=b(b(b({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[le]="");var c=b({},o.styles);qt(r)&&(c.transform=Ri({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=ot(c);f.length>0&&(u.style=f);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Ji(e){var t=e.content,n=e.title,a=e.extra,r=b(b(b({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ot(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kt=W.styles;function Mt(e){var t=e[0],n=e[1],a=e.slice(4),r=Ut(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var eo={found:!1,width:512,height:512};function to(e,t){!ga&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lt(e,t){var n=t;return t==="fa"&&w.styleDefault!==null&&(t=re()),new Promise(function(a,r){if(Z("missingIconAbstract"),n==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kt[t]&&kt[t][e]){var o=kt[t][e];return a(Mt(o))}to(e,t),a(b(b({},eo),{},{icon:w.showMissingIcons&&e?Z("missingIconAbstract")||{}:{}}))})}var zn=function(){},zt=w.measurePerformance&&Ue&&Ue.mark&&Ue.measure?Ue:{mark:zn,measure:zn},Ae='FA "6.5.2"',no=function(t){return zt.mark("".concat(Ae," ").concat(t," begins")),function(){return Na(t)}},Na=function(t){zt.mark("".concat(Ae," ").concat(t," ends")),zt.measure("".concat(Ae," ").concat(t),"".concat(Ae," ").concat(t," begins"),"".concat(Ae," ").concat(t," ends"))},en={begin:no,end:Na},Je=function(){};function jn(e){var t=e.getAttribute?e.getAttribute(le):null;return typeof t=="string"}function ao(e){var t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(Gt):null;return t&&n}function ro(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function io(){if(w.autoReplaceSvg===!0)return et.replace;var e=et[w.autoReplaceSvg];return e||et.replace}function oo(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function so(e){return T.createElement(e)}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?oo:so:n;if(typeof e=="string")return T.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ta(o,{ceFn:a}))}),r}function lo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var et={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Ta(r),n)}),n.getAttribute(le)===null&&w.keepOriginalSource){var a=T.createComment(lo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Vt(n).indexOf(w.replacementClass))return et.replace(t);var r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,s){return s===w.replacementClass||s.match(r)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return Fe(l)}).join(`
`);n.setAttribute(le,""),n.innerHTML=o}};function Dn(e){e()}function Ma(e,t){var n=typeof t=="function"?t:Je;if(e.length===0)n();else{var a=Dn;w.mutateApproach===di&&(a=ae.requestAnimationFrame||Dn),a(function(){var r=io(),i=en.begin("mutate");e.map(r),i(),n()})}}var tn=!1;function La(){tn=!0}function jt(){tn=!1}var at=null;function Fn(e){if(Cn&&w.observeMutations){var t=e.treeCallback,n=t===void 0?Je:t,a=e.nodeCallback,r=a===void 0?Je:a,i=e.pseudoElementsCallback,o=i===void 0?Je:i,l=e.observeMutationsRoot,s=l===void 0?T:l;at=new Cn(function(u){if(!tn){var c=re();be(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!jn(f.addedNodes[0])&&(w.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&w.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&jn(f.target)&&~wi.indexOf(f.attributeName))if(f.attributeName==="class"&&ao(f.target)){var m=lt(Vt(f.target)),d=m.prefix,A=m.iconName;f.target.setAttribute(Wt,d||c),A&&f.target.setAttribute(Gt,A)}else ro(f.target)&&r(f.target)})}}),J&&at.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fo(){at&&at.disconnect()}function co(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function uo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=lt(Vt(e));return r.prefix||(r.prefix=re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Yi(r.prefix,e.innerText)||Qt(r.prefix,Rt(e.innerText))),!r.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function mo(e){var t=be(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(a||ze()):(t["aria-hidden"]="true",t.focusable="false")),t}function vo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uo(e),a=n.iconName,r=n.prefix,i=n.rest,o=mo(e),l=Nt("parseNodeAttributes",{},e),s=t.styleParser?co(e):[];return b({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var po=W.styles;function za(e){var t=w.autoReplaceSvg==="nest"?$n(e,{styleParser:!1}):$n(e);return~t.extra.classes.indexOf(ba)?Z("generateLayersText",e,t):Z("generateSvgReplacementMutation",e,t)}var ie=new Set;Kt.map(function(e){ie.add("fa-".concat(e))});Object.keys(Ne[N]).map(ie.add.bind(ie));Object.keys(Ne[L]).map(ie.add.bind(ie));ie=je(ie);function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();var n=T.documentElement.classList,a=function(f){return n.add("".concat(_n,"-").concat(f))},r=function(f){return n.remove("".concat(_n,"-").concat(f))},i=w.autoFetchSvg?ie:Kt.map(function(c){return"fa-".concat(c)}).concat(Object.keys(po));i.includes("fa")||i.push("fa");var o=[".".concat(ba,":not([").concat(le,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=be(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var s=en.begin("onTree"),u=l.reduce(function(c,f){try{var m=za(f);m&&c.push(m)}catch(d){ga||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(m){Ma(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(m){s(),f(m)})})}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(e).then(function(n){n&&Ma([n],t)})}function go(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Tt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tt(r||{})),e(a,b(b({},n),{},{mask:r}))}}var bo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?K:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,m=f===void 0?null:f,d=n.titleId,A=d===void 0?null:d,E=n.classes,S=E===void 0?[]:E,h=n.attributes,p=h===void 0?{}:h,k=n.styles,C=k===void 0?{}:k;if(t){var R=t.prefix,j=t.iconName,M=t.icon;return ft(b({type:"icon"},t),function(){return fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),w.autoA11y&&(m?p["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(A||ze()):(p["aria-hidden"]="true",p.focusable="false")),Jt({icons:{main:Mt(M),mask:s?Mt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:j,transform:b(b({},K),r),symbol:o,title:m,maskId:c,titleId:A,extra:{attributes:p,styles:C,classes:S}})})}},yo={mixout:function(){return{icon:go(bo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bn,n.nodeCallback=ho,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?T:a,i=n.callback,o=i===void 0?function(){}:i;return Bn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,s=a.transform,u=a.symbol,c=a.mask,f=a.maskId,m=a.extra;return new Promise(function(d,A){Promise.all([Lt(r,l),c.iconName?Lt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var S=Ut(E,2),h=S[0],p=S[1];d([n,Jt({icons:{main:h,mask:p},prefix:l,iconName:r,transform:s,symbol:u,maskId:f,title:i,titleId:o,extra:m,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,s=ot(l);s.length>0&&(r.style=s);var u;return qt(o)&&(u=Z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},wo={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ft({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(je(i)).join(" ")},children:o}]})}}}},ko={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,s=a.attributes,u=s===void 0?{}:s,c=a.styles,f=c===void 0?{}:c;return ft({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),Ji({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(je(l))}})})}}}},xo={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?K:r,o=a.title,l=o===void 0?null:o,s=a.classes,u=s===void 0?[]:s,c=a.attributes,f=c===void 0?{}:c,m=a.styles,d=m===void 0?{}:m;return ft({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),Ln({content:n,transform:b(b({},K),i),title:l,extra:{attributes:f,styles:d,classes:["".concat(w.cssPrefix,"-layers-text")].concat(je(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,s=null;if(va){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return w.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ln({content:n.innerHTML,width:l,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},Ao=new RegExp('"',"ug"),Yn=[1105920,1112319];function Eo(e){var t=e.replace(Ao,""),n=zi(t,0),a=n>=Yn[0]&&n<=Yn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Rt(r?t[0]:t),isSecondary:a||r}}function Un(e,t){var n="".concat(mi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=be(e.children),o=i.filter(function(M){return M.getAttribute(_t)===t})[0],l=ae.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(gi),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),a();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?L:N,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Te[m][s[2].toLowerCase()]:bi[m][u],A=Eo(f),E=A.value,S=A.isSecondary,h=s[0].startsWith("FontAwesome"),p=Qt(d,E),k=p;if(h){var C=Ui(E);C.iconName&&C.prefix&&(p=C.iconName,d=C.prefix)}if(p&&!S&&(!o||o.getAttribute(Wt)!==d||o.getAttribute(Gt)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var R=vo(),j=R.extra;j.attributes[_t]=t,Lt(p,d).then(function(M){var ye=Jt(b(b({},R),{},{icons:{main:M,mask:Zt()},prefix:d,iconName:k,extra:j,watchable:!0})),H=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=ye.map(function($e){return Fe($e)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function So(e){return Promise.all([Un(e,"::before"),Un(e,"::after")])}function Oo(e){return e.parentNode!==document.head&&!~vi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_t)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hn(e){if(J)return new Promise(function(t,n){var a=be(e.querySelectorAll("*")).filter(Oo).map(So),r=en.begin("searchPseudoElements");La(),Promise.all(a).then(function(){r(),jt(),t()}).catch(function(){r(),jt(),n()})})}var Po={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;w.searchPseudoElements&&Hn(r)}}},Wn=!1,Co={mixout:function(){return{dom:{unwatch:function(){La(),Wn=!0}}}},hooks:function(){return{bootstrap:function(){Fn(Nt("mutationObserverCallbacks",{}))},noAuto:function(){fo()},watch:function(n){var a=n.observeMutationsRoot;Wn?jt():Fn(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Gn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},_o={mixout:function(){return{parse:{transform:function(n){return Gn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Gn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},d={outer:l,inner:f,path:m};return{tag:"g",attributes:b({},d.outer),children:[{tag:"g",attributes:b({},d.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:b(b({},a.icon.attributes),d.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ro(e){return e.tag==="g"?e.children:[e]}var Io={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?lt(r.split(" ").map(function(o){return o.trim()})):Zt();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,c=i.icon,f=o.width,m=o.icon,d=_i({transform:s,containerWidth:f,iconWidth:u}),A={tag:"rect",attributes:b(b({},xt),{},{fill:"white"})},E=c.children?{children:c.children.map(Kn)}:{},S={tag:"g",attributes:b({},d.inner),children:[Kn(b({tag:c.tag,attributes:b(b({},c.attributes),d.path)},E))]},h={tag:"g",attributes:b({},d.outer),children:[S]},p="mask-".concat(l||ze()),k="clip-".concat(l||ze()),C={tag:"mask",attributes:b(b({},xt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,h]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ro(m)},C]};return a.push(R,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(p,")")},xt)}),{children:a,attributes:r}}}},No={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},To={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Mo=[Ni,yo,wo,ko,xo,Po,Co,_o,Io,No,To];Gi(Mo,{mixoutsTo:U});U.noAuto;U.config;var Lo=U.library;U.dom;var Dt=U.parse;U.findIconDefinition;U.toHtml;var zo=U.icon;U.layer;U.text;U.counter;function Vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vn(Object(n),!0).forEach(function(a){Y(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function jo(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Do(e){var t=jo(e,"string");return typeof t=="symbol"?t:t+""}function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function Y(e,t,n){return t=Do(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fo(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function $o(e,t){if(e==null)return{};var n=Fo(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ja={exports:{}};(function(e){(function(t){var n=function(h,p,k){if(!u(p)||f(p)||m(p)||d(p)||s(p))return p;var C,R=0,j=0;if(c(p))for(C=[],j=p.length;R<j;R++)C.push(n(h,p[R],k));else{C={};for(var M in p)Object.prototype.hasOwnProperty.call(p,M)&&(C[h(M,k)]=n(h,p[M],k))}return C},a=function(h,p){p=p||{};var k=p.separator||"_",C=p.split||/(?=[A-Z])/;return h.split(C).join(k)},r=function(h){return A(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(p,k){return k?k.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var p=r(h);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(h,p){return a(h,p).toLowerCase()},l=Object.prototype.toString,s=function(h){return typeof h=="function"},u=function(h){return h===Object(h)},c=function(h){return l.call(h)=="[object Array]"},f=function(h){return l.call(h)=="[object Date]"},m=function(h){return l.call(h)=="[object RegExp]"},d=function(h){return l.call(h)=="[object Boolean]"},A=function(h){return h=h-0,h===h},E=function(h,p){var k=p&&"process"in p?p.process:p;return typeof k!="function"?h:function(C,R){return k(C,h,R)}},S={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(h,p){return n(E(r,p),h)},decamelizeKeys:function(h,p){return n(E(o,p),h,p)},pascalizeKeys:function(h,p){return n(E(i,p),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(Bo)})(ja);var Yo=ja.exports,Uo=["class","style"];function Ho(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Yo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function Wo(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(s){return Da(s)}),r=Object.keys(e.attributes||{}).reduce(function(s,u){var c=e.attributes[u];switch(u){case"class":s.class=Wo(c);break;case"style":s.style=Ho(c);break;default:s.attrs[u]=c}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=$o(n,Uo);return $t(e.tag,q(q(q({},t),{},{class:r.class,style:q(q({},r.style),o)},r.attrs),l),a)}var Fa=!1;try{Fa=!0}catch{}function Go(){if(!Fa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function At(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Y({},e,t):{}}function Ko(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),Y(Y(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function qn(e){if(e&&rt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dt.icon)return Dt.icon(e);if(e===null)return null;if(rt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Vo=Ft({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=$(function(){return qn(t.icon)}),i=$(function(){return At("classes",Ko(t))}),o=$(function(){return At("transform",typeof t.transform=="string"?Dt.transform(t.transform):t.transform)}),l=$(function(){return At("mask",qn(t.mask))}),s=$(function(){return zo(r.value,q(q(q(q({},i.value),o.value),l.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Qn(s,function(c){if(!c)return Go("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=$(function(){return s.value?Da(s.value.abstract[0],{},a):null});return function(){return u.value}}}),qo={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},Xo={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};Lo.add(Xo,qo);const Qo=ei({history:Cr(),routes:[]});Ua(e=>{e.use(Qo),e.component("font-awesome-icon",Vo)});const es={darkMode:{stylePreview:!0,dark:{appBg:"#202124",appContentBg:"#303134",barBg:"#161616",barSelectedColor:"#56c55d",barTextColor:"#56c55d",inputBg:"#161616",inputBorder:"#303134",inputTextColor:"#56c55d",textColor:"#ccc"}},stylePreview:!0,actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"Bonkers",values:[{name:"Bonkers",value:"url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)"},{name:"Light",value:"#ffffff"},{name:"Dark",value:"#202124"}]},layout:"padded",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};export{es as parameters};
