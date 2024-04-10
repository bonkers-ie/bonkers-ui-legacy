(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--auto: auto;--zero: 0;--px: 1px;--xxs: 4px;--xs: 8px;--sm: 16px;--md: 24px;--lg: 40px;--xl: 80px;--xxl: 120px;--shadow-size-md: 0 2px 4px 0 rgb(180 184 205 / 50%);--shadow-border-primary: 0 0 0 4px rgb(69 158 74 / 50%);--shadow-border-selected: 0 0 0 4px rgb(69 158 74 / 100%);--shadow-selected-shadow: 0 0 0 4px var(--color-primary-500);--shadow-selected-disabled: 0 0 0 4px var(--color-primary-300);--shadow-border-secondary: 0 0 0 4px rgb(223 225 233 / 50%);--font-size-xxs: 10px;--font-size-xs: 12px;--font-size-sm: 14px;--font-size-md: 16px;--font-size-lg: 18px;--font-size-xl: 20px;--font-size-2xl: 24px;--font-size-3xl: 28px;--font-size-4xl: 32px;--font-size-5xl: 40px;--color-white: white;--color-black: black;--color-current: currentcolor;--color-transparent: transparent;--color-primary-50: #ecf8ed;--color-primary-100: #d9f2db;--color-primary-200: #b3e5b6;--color-primary-300: #9adc9e;--color-primary-400: #78d17d;--color-primary-500: #56c55d;--color-primary-600: #459e4a;--color-primary-700: #347638;--color-primary-800: #1a4c1d;--color-primary-900: #0d260f;--color-primary: var(--color-primary-500);--color-primary-alt-300: #83e4ad;--color-primary-alt-400: #5adb92;--color-primary-alt-500: #31d277;--color-primary-alt-600: #27a85f;--color-primary-alt-700: #1d7e47;--color-primary-alt: var(--color-primary-alt-500);--color-secondary-300: #848793;--color-secondary-400: #5b5f6f;--color-secondary-500: #32374b;--color-secondary-600: #282c3c;--color-secondary-700: #1e212d;--color-secondary: var(--color-secondary-500);--color-error-300: #f7989d;--color-error-400: #f5767c;--color-error-500: #f2545b;--color-error-600: #c24349;--color-error-700: #913237;--color-error: var(--color-error-500);--color-warning-300: #ffbc9b;--color-warning-400: #ffa57a;--color-warning-500: #ff8f59;--color-warning-600: #cc7247;--color-warning-700: #995635;--color-warning: var(--color-warning-500);--color-accent-300: #8e8efa;--color-accent-400: #6868f9;--color-accent-500: #4242f7;--color-accent-600: #3535c6;--color-accent-700: #282894;--color-accent: var(--color-accent-500);--color-accent-alt-500: #6236ff;--color-accent-alt: var(--color-accent-alt-500);--color-secondary-alt-200: #f4f5f8;--color-secondary-alt-300: #dfe1e9;--color-secondary-alt-400: #b4b8cd;--color-secondary-alt-500: #949ab7;--color-secondary-alt-600: #767b92;--color-secondary-alt-700: #595c6e;--color-secondary-alt: var(--color-secondary-alt-500);--base-line-height: 1.6;--base-font: museo-sans, sans-serif}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:var(--zero)}.-right-xxs{right:calc(var(--xxs) * -1)}.-top-xxs{top:calc(var(--xxs) * -1)}.left-0{left:var(--zero)}.left-1\\/2,.left-2\\/4{left:50%}.left-xs{left:var(--xs)}.right-0{right:var(--zero)}.right-sm{right:var(--sm)}.top-0{top:var(--zero)}.top-1\\/2,.top-2\\/4{top:50%}.top-sm{top:var(--sm)}.z-0{z-index:0}.z-10{z-index:10}.z-\\[1\\]{z-index:1}.order-first{order:-9999}.order-last{order:9999}.m-0{margin:var(--zero)}.m-xs{margin:var(--xs)}.my-md{margin-top:var(--md);margin-bottom:var(--md)}.my-xs{margin-top:var(--xs);margin-bottom:var(--xs)}.my-xxs{margin-top:var(--xxs);margin-bottom:var(--xxs)}.-mb-lg{margin-bottom:calc(var(--lg) * -1)}.-mt-lg{margin-top:calc(var(--lg) * -1)}.mb-md{margin-bottom:var(--md)}.mb-sm{margin-bottom:var(--sm)}.mb-xs{margin-bottom:var(--xs)}.mb-xxs{margin-bottom:var(--xxs)}.ml-md{margin-left:var(--md)}.ml-sm{margin-left:var(--sm)}.mt-auto{margin-top:var(--auto)}.mt-md{margin-top:var(--md)}.mt-sm{margin-top:var(--sm)}.mt-xs{margin-top:var(--xs)}.mt-xxs{margin-top:var(--xxs)}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.size-0{width:var(--zero);height:var(--zero)}.size-fit{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.size-full{width:100%;height:100%}.size-lg{width:var(--lg);height:var(--lg)}.size-md{width:var(--md);height:var(--md)}.size-sm{width:var(--sm);height:var(--sm)}.size-xl{width:var(--xl);height:var(--xl)}.size-xs{width:var(--xs);height:var(--xs)}.size-xxl{width:var(--xxl);height:var(--xxl)}.size-xxs{width:var(--xxs);height:var(--xxs)}.\\!h-0{height:var(--zero)!important}.h-auto{height:var(--auto)}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-lg{height:var(--lg)}.h-md{height:var(--md)}.h-sm{height:var(--sm)}.h-xl{height:var(--xl)}.h-xs{height:var(--xs)}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-1\\/4{width:25%}.w-2\\/3{width:66.666667%}.w-3\\/4{width:75%}.w-5\\/6{width:83.333333%}.w-full{width:100%}.w-lg{width:var(--lg)}.w-xl{width:var(--xl)}.w-xxl{width:var(--xxl)}.w-xxs{width:var(--xxs)}.min-w-sm{min-width:var(--sm)}.max-w-\\[24rem\\]{max-width:24rem}.max-w-\\[32rem\\]{max-width:32rem}.max-w-\\[40rem\\]{max-width:40rem}.max-w-xxl{max-width:var(--xxl)}.flex-1{flex:1 1 0%}.-translate-x-1\\/2,.-translate-x-2\\/4{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer{cursor:pointer}.touch-manipulation{touch-action:manipulation}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-flow-col{grid-auto-flow:column}.grid-cols-\\[1fr\\,auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto\\,1fr\\]{grid-template-columns:auto 1fr}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-center{align-content:center}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.justify-items-center{justify-items:center}.gap-md{gap:var(--md)}.gap-sm{gap:var(--sm)}.gap-xs{gap:var(--xs)}.gap-xxs{gap:var(--xxs)}.gap-x-sm{-moz-column-gap:var(--sm);column-gap:var(--sm)}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-b-lg{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-4{border-width:4px}.\\!border-transparent{border-color:var(--color-transparent)!important}.border-error{border-color:var(--color-error)}.border-primary{border-color:var(--color-primary)}.border-secondary{border-color:var(--color-secondary)}.border-secondary-alt{border-color:var(--color-secondary-alt)}.border-secondary-alt-300{border-color:var(--color-secondary-alt-300)}.border-secondary-alt-400{border-color:var(--color-secondary-alt-400)}.border-secondary-alt-500{border-color:var(--color-secondary-alt-500)}.border-transparent{border-color:var(--color-transparent)}.border-warning{border-color:var(--color-warning)}.border-white{border-color:var(--color-white)}.border-t-secondary-alt-300{border-top-color:var(--color-secondary-alt-300)}.bg-accent-600{background-color:var(--color-accent-600)}.bg-error{background-color:var(--color-error)}.bg-error-600{background-color:var(--color-error-600)}.bg-primary{background-color:var(--color-primary)}.bg-primary-200{background-color:var(--color-primary-200)}.bg-primary-300{background-color:var(--color-primary-300)}.bg-primary-600{background-color:var(--color-primary-600)}.bg-primary-700{background-color:var(--color-primary-700)}.bg-primary-alt-700{background-color:var(--color-primary-alt-700)}.bg-secondary{background-color:var(--color-secondary)}.bg-secondary-alt{background-color:var(--color-secondary-alt)}.bg-secondary-alt-200{background-color:var(--color-secondary-alt-200)}.bg-secondary-alt-300{background-color:var(--color-secondary-alt-300)}.bg-transparent{background-color:var(--color-transparent)}.bg-warning{background-color:var(--color-warning)}.bg-warning-300{background-color:var(--color-warning-300)}.bg-warning-700{background-color:var(--color-warning-700)}.bg-white{background-color:var(--color-white)}.p-lg{padding:var(--lg)}.p-md{padding:var(--md)}.p-sm{padding:var(--sm)}.p-xs{padding:var(--xs)}.px-md{padding-left:var(--md);padding-right:var(--md)}.px-sm{padding-left:var(--sm);padding-right:var(--sm)}.px-xs{padding-left:var(--xs);padding-right:var(--xs)}.py-md{padding-top:var(--md);padding-bottom:var(--md)}.py-sm{padding-top:var(--sm);padding-bottom:var(--sm)}.py-xs{padding-top:var(--xs);padding-bottom:var(--xs)}.py-xxs{padding-top:var(--xxs);padding-bottom:var(--xxs)}.pb-lg{padding-bottom:var(--lg)}.pb-md{padding-bottom:var(--md)}.pb-sm{padding-bottom:var(--sm)}.pb-xs{padding-bottom:var(--xs)}.pt-0{padding-top:var(--zero)}.pt-lg{padding-top:var(--lg)}.pt-md{padding-top:var(--md)}.pt-sm{padding-top:var(--sm)}.pt-xxs{padding-top:var(--xxs)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.text-2xl{font-size:var(--font-size-2xl)}.text-3xl{font-size:var(--font-size-3xl)}.text-4xl{font-size:var(--font-size-4xl)}.text-5xl{font-size:var(--font-size-5xl)}.text-lg{font-size:var(--font-size-lg)}.text-md{font-size:var(--font-size-md)}.text-sm{font-size:var(--font-size-sm)}.text-xl{font-size:var(--font-size-xl)}.text-xs{font-size:var(--font-size-xs)}.text-xxs{font-size:var(--font-size-xxs)}.font-black{font-weight:900}.font-bold{font-weight:700}.font-light{font-weight:300}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.italic{font-style:italic}.leading-none{line-height:1}.leading-normal{line-height:1.5}.text-accent{color:var(--color-accent)}.text-accent-300{color:var(--color-accent-300)}.text-accent-500{color:var(--color-accent-500)}.text-accent-600{color:var(--color-accent-600)}.text-accent-700{color:var(--color-accent-700)}.text-accent-alt{color:var(--color-accent-alt)}.text-accent-alt-500{color:var(--color-accent-alt-500)}.text-black{color:var(--color-black)}.text-current{color:var(--color-current)}.text-error{color:var(--color-error)}.text-error-300{color:var(--color-error-300)}.text-error-400{color:var(--color-error-400)}.text-error-500{color:var(--color-error-500)}.text-error-600{color:var(--color-error-600)}.text-error-700{color:var(--color-error-700)}.text-primary{color:var(--color-primary)}.text-primary-300{color:var(--color-primary-300)}.text-primary-400{color:var(--color-primary-400)}.text-primary-500{color:var(--color-primary-500)}.text-primary-600{color:var(--color-primary-600)}.text-primary-700{color:var(--color-primary-700)}.text-secondary{color:var(--color-secondary)}.text-secondary-300{color:var(--color-secondary-300)}.text-secondary-400{color:var(--color-secondary-400)}.text-secondary-500{color:var(--color-secondary-500)}.text-secondary-600{color:var(--color-secondary-600)}.text-secondary-700{color:var(--color-secondary-700)}.text-secondary-alt{color:var(--color-secondary-alt)}.text-secondary-alt-200{color:var(--color-secondary-alt-200)}.text-secondary-alt-300{color:var(--color-secondary-alt-300)}.text-secondary-alt-400{color:var(--color-secondary-alt-400)}.text-secondary-alt-500{color:var(--color-secondary-alt-500)}.text-secondary-alt-600{color:var(--color-secondary-alt-600)}.text-secondary-alt-700{color:var(--color-secondary-alt-700)}.text-transparent{color:var(--color-transparent)}.text-warning{color:var(--color-warning)}.text-warning-300{color:var(--color-warning-300)}.text-warning-400{color:var(--color-warning-400)}.text-warning-500{color:var(--color-warning-500)}.text-warning-600{color:var(--color-warning-600)}.text-warning-700{color:var(--color-warning-700)}.text-white{color:var(--color-white)}.underline{text-decoration-line:underline}.shadow-md{--tw-shadow: var(--shadow-size-md);--tw-shadow-colored: var(--shadow-size-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-0{outline-width:0px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}body{font-family:var(--base-font)}*:focus,*:active{outline:none}input,textarea,button,select,label,a{-webkit-tap-highlight-color:transparent}.placeholder\\:italic::-moz-placeholder{font-style:italic}.placeholder\\:italic::placeholder{font-style:italic}.placeholder\\:text-secondary-alt::-moz-placeholder{color:var(--color-secondary-alt)}.placeholder\\:text-secondary-alt::placeholder{color:var(--color-secondary-alt)}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:-z-10:before{content:var(--tw-content);z-index:-10}.before\\:box-border:before{content:var(--tw-content);box-sizing:border-box}.before\\:rounded-\\[16px\\]:before{content:var(--tw-content);border-radius:16px}.before\\:bg-primary-300:before{content:var(--tw-content);background-color:var(--color-primary-300)}.hover\\:border-secondary-700:hover{border-color:var(--color-secondary-700)}.hover\\:border-secondary-alt-700:hover{border-color:var(--color-secondary-alt-700)}.hover\\:border-transparent:hover{border-color:var(--color-transparent)}.hover\\:bg-error-600:hover{background-color:var(--color-error-600)}.hover\\:bg-primary-600:hover{background-color:var(--color-primary-600)}.hover\\:bg-secondary-600:hover{background-color:var(--color-secondary-600)}.hover\\:bg-warning-600:hover{background-color:var(--color-warning-600)}.hover\\:text-white:hover{color:var(--color-white)}.focus\\:shadow-border-primary:focus{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.active\\:border-transparent:active{border-color:var(--color-transparent)}.active\\:bg-error-700:active{background-color:var(--color-error-700)}.active\\:bg-primary-700:active{background-color:var(--color-primary-700)}.active\\:bg-secondary-700:active{background-color:var(--color-secondary-700)}.active\\:bg-secondary-alt-200:active{background-color:var(--color-secondary-alt-200)}.active\\:bg-warning-700:active{background-color:var(--color-warning-700)}.active\\:text-white:active{color:var(--color-white)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:border-error-300:disabled{border-color:var(--color-error-300)}.disabled\\:border-primary-300:disabled{border-color:var(--color-primary-300)}.disabled\\:border-secondary-300:disabled{border-color:var(--color-secondary-300)}.disabled\\:border-warning-300:disabled{border-color:var(--color-warning-300)}.disabled\\:bg-error-300:disabled{background-color:var(--color-error-300)}.disabled\\:bg-primary-300:disabled{background-color:var(--color-primary-300)}.disabled\\:bg-secondary-300:disabled{background-color:var(--color-secondary-300)}.disabled\\:bg-secondary-alt-200:disabled{background-color:var(--color-secondary-alt-200)}.disabled\\:bg-warning-300:disabled{background-color:var(--color-warning-300)}.disabled\\:text-error-300:disabled{color:var(--color-error-300)}.disabled\\:text-primary-300:disabled{color:var(--color-primary-300)}.disabled\\:text-secondary-300:disabled{color:var(--color-secondary-300)}.disabled\\:text-warning-300:disabled{color:var(--color-warning-300)}.group:last-child .group-last\\:hidden{display:none}.group:hover .group-hover\\:border-secondary-alt-700{border-color:var(--color-secondary-alt-700)}.group:focus .group-focus\\:border-secondary-alt-700{border-color:var(--color-secondary-alt-700)}.peer:checked~.peer-checked\\:border-2{border-width:2px}.peer:checked~.peer-checked\\:border-primary{border-color:var(--color-primary)}.peer:checked~.peer-checked\\:border-transparent{border-color:var(--color-transparent)}.peer:checked~.peer-checked\\:text-primary-500{color:var(--color-primary-500)}.peer:checked~.peer-checked\\:shadow-border-primary-disabled{--tw-shadow: var(--shadow-selected-disabled);--tw-shadow-colored: var(--shadow-selected-disabled);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:shadow-selected-shadow{--tw-shadow: var(--shadow-selected-shadow);--tw-shadow-colored: var(--shadow-selected-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:hover\\:border-primary-600:hover{border-color:var(--color-primary-600)}.peer:checked~.peer-checked\\:hover\\:shadow-border-selected:hover{--tw-shadow: var(--shadow-border-selected);--tw-shadow-colored: var(--shadow-border-selected);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:active\\:shadow-border-primary:active{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:checked~.peer-checked\\:active\\:before\\:-bottom-xs:active:before{content:var(--tw-content);bottom:calc(var(--xs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-left-xs:active:before{content:var(--tw-content);left:calc(var(--xs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-right-xs:active:before{content:var(--tw-content);right:calc(var(--xs) * -1)}.peer:checked~.peer-checked\\:active\\:before\\:-top-xs:active:before{content:var(--tw-content);top:calc(var(--xs) * -1)}.peer:focus~.peer-focus\\:shadow-border-primary{--tw-shadow: var(--shadow-border-primary);--tw-shadow-colored: var(--shadow-border-primary);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.peer:focus~.peer-focus\\:before\\:-bottom-xs:before{content:var(--tw-content);bottom:calc(var(--xs) * -1)}.peer:focus~.peer-focus\\:before\\:-left-xs:before{content:var(--tw-content);left:calc(var(--xs) * -1)}.peer:focus~.peer-focus\\:before\\:-right-xs:before{content:var(--tw-content);right:calc(var(--xs) * -1)}.peer:focus~.peer-focus\\:before\\:-top-xs:before{content:var(--tw-content);top:calc(var(--xs) * -1)}.peer:active~.peer-active\\:before\\:-bottom-xxs:before{content:var(--tw-content);bottom:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-left-xxs:before{content:var(--tw-content);left:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-right-xxs:before{content:var(--tw-content);right:calc(var(--xxs) * -1)}.peer:active~.peer-active\\:before\\:-top-xxs:before{content:var(--tw-content);top:calc(var(--xxs) * -1)}.peer:disabled~.peer-disabled\\:border-secondary-alt-400{border-color:var(--color-secondary-alt-400)}.peer:disabled~.peer-disabled\\:bg-secondary-alt-200{background-color:var(--color-secondary-alt-200)}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{s as Ba}from"./entry-preview-DTdGntE1.js";import{E as Ua,f as Ee,G as Ha,H as Wa,d as Ft,I as Ga,J as Re,c as $,K as $t,L as pt,r as Ka,y as Zn}from"./vue.esm-bundler-BKa0CVN1.js";const{global:Va}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_PREVIEW_API__;var{window:Ze}=Va;Ze.STORYBOOK_ENV="vue3";Ze.PLUGINS_SETUP_FUNCTIONS||(Ze.PLUGINS_SETUP_FUNCTIONS=new Set);var Qn;try{(Qn=module==null?void 0:module.hot)!=null&&Qn.decline&&module.hot.decline()}catch{}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ue=typeof document<"u";function qa(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const R=Object.assign;function ht(e,t){const n={};for(const a in t){const r=t[a];n[a]=G(r)?r.map(e):e(r)}return n}const Se=()=>{},G=Array.isArray,Jn=/#/g,Xa=/&/g,Qa=/\//g,Za=/=/g,Ja=/\?/g,ea=/\+/g,er=/%5B/g,tr=/%5D/g,ta=/%5E/g,nr=/%60/g,na=/%7B/g,ar=/%7C/g,aa=/%7D/g,rr=/%20/g;function Yt(e){return encodeURI(""+e).replace(ar,"|").replace(er,"[").replace(tr,"]")}function ir(e){return Yt(e).replace(na,"{").replace(aa,"}").replace(ta,"^")}function Et(e){return Yt(e).replace(ea,"%2B").replace(rr,"+").replace(Jn,"%23").replace(Xa,"%26").replace(nr,"`").replace(na,"{").replace(aa,"}").replace(ta,"^")}function or(e){return Et(e).replace(Za,"%3D")}function sr(e){return Yt(e).replace(Jn,"%23").replace(Ja,"%3F")}function lr(e){return e==null?"":sr(e).replace(Qa,"%2F")}function _e(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const fr=/\/$/,cr=e=>e.replace(fr,"");function gt(e,t,n="/"){let a,r={},i="",o="";const f=t.indexOf("#");let s=t.indexOf("?");return f<s&&f>=0&&(s=-1),s>-1&&(a=t.slice(0,s),i=t.slice(s+1,f>-1?f:t.length),r=e(i)),f>-1&&(a=a||t.slice(0,f),o=t.slice(f,t.length)),a=vr(a??t,n),{fullPath:a+(i&&"?")+i+o,path:a,query:r,hash:_e(o)}}function ur(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ln(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mr(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&pe(t.matched[a],n.matched[r])&&ra(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pe(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ra(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dr(e[n],t[n]))return!1;return!0}function dr(e,t){return G(e)?fn(e,t):G(t)?fn(t,e):e===t}function fn(e,t){return G(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function vr(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=n.length-1,o,f;for(o=0;o<a.length;o++)if(f=a[o],f!==".")if(f==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+a.slice(o).join("/")}var Ie;(function(e){e.pop="pop",e.push="push"})(Ie||(Ie={}));var Oe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Oe||(Oe={}));function pr(e){if(!e)if(ue){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cr(e)}const hr=/^[^#]+#/;function gr(e,t){return e.replace(hr,"#")+t}function br(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const it=()=>({left:window.scrollX,top:window.scrollY});function yr(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=br(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cn(e,t){return(history.state?history.state.position-t:-1)+e}const St=new Map;function kr(e,t){St.set(e,t)}function wr(e){const t=St.get(e);return St.delete(e),t}let xr=()=>location.protocol+"//"+location.host;function ia(e,t){const{pathname:n,search:a,hash:r}=t,i=e.indexOf("#");if(i>-1){let f=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),ln(s,"")}return ln(n,e)+a+r}function Ar(e,t,n,a){let r=[],i=[],o=null;const f=({state:m})=>{const p=ia(e,location),w=n.value,O=t.value;let E=0;if(m){if(n.value=p,t.value=m,o&&o===w){o=null;return}E=O?m.position-O.position:0}else a(p);r.forEach(v=>{v(n.value,w,{delta:E,type:Ie.pop,direction:E?E>0?Oe.forward:Oe.back:Oe.unknown})})};function s(){o=n.value}function c(m){r.push(m);const p=()=>{const w=r.indexOf(m);w>-1&&r.splice(w,1)};return i.push(p),p}function l(){const{history:m}=window;m.state&&m.replaceState(R({},m.state,{scroll:it()}),"")}function u(){for(const m of i)m();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:s,listen:c,destroy:u}}function un(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?it():null}}function Er(e){const{history:t,location:n}=window,a={value:ia(e,n)},r={value:t.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,c,l){const u=e.indexOf("#"),m=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+s:xr()+e+s;try{t[l?"replaceState":"pushState"](c,"",m),r.value=c}catch(p){console.error(p),n[l?"replace":"assign"](m)}}function o(s,c){const l=R({},t.state,un(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});i(s,l,!0),a.value=s}function f(s,c){const l=R({},r.value,t.state,{forward:s,scroll:it()});i(l.current,l,!0);const u=R({},un(a.value,s,null),{position:l.position+1},c);i(s,u,!1),a.value=s}return{location:a,state:r,push:f,replace:o}}function Sr(e){e=pr(e);const t=Er(e),n=Ar(e,t.state,t.location,t.replace);function a(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=R({location:"",base:e,go:a,createHref:gr.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Or(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Sr(e)}function Pr(e){return typeof e=="string"||e&&typeof e=="object"}function oa(e){return typeof e=="string"||typeof e=="symbol"}const ee={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sa=Symbol("");var mn;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mn||(mn={}));function he(e,t){return R(new Error,{type:e,[sa]:!0},t)}function V(e,t){return e instanceof Error&&sa in e&&(t==null||!!(e.type&t))}const dn="[^/]+?",Cr={sensitive:!1,strict:!1,start:!0,end:!0},Rr=/[.+*?^${}()[\]/\\]/g;function _r(e,t){const n=R({},Cr,t),a=[];let r=n.start?"^":"";const i=[];for(const c of e){const l=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const m=c[u];let p=40+(n.sensitive?.25:0);if(m.type===0)u||(r+="/"),r+=m.value.replace(Rr,"\\$&"),p+=40;else if(m.type===1){const{value:w,repeatable:O,optional:E,regexp:v}=m;i.push({name:w,repeatable:O,optional:E});const h=v||dn;if(h!==dn){p+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${h}): `+C.message)}}let A=O?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(A=E&&c.length<2?`(?:/${A})`:"/"+A),E&&(A+="?"),r+=A,p+=20,E&&(p+=-8),O&&(p+=-20),h===".*"&&(p+=-50)}l.push(p)}a.push(l)}if(n.strict&&n.end){const c=a.length-1;a[c][a[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function f(c){const l=c.match(o),u={};if(!l)return null;for(let m=1;m<l.length;m++){const p=l[m]||"",w=i[m-1];u[w.name]=p&&w.repeatable?p.split("/"):p}return u}function s(c){let l="",u=!1;for(const m of e){(!u||!l.endsWith("/"))&&(l+="/"),u=!1;for(const p of m)if(p.type===0)l+=p.value;else if(p.type===1){const{value:w,repeatable:O,optional:E}=p,v=w in c?c[w]:"";if(G(v)&&!O)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const h=G(v)?v.join("/"):v;if(!h)if(E)m.length<2&&(l.endsWith("/")?l=l.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);l+=h}}return l||"/"}return{re:o,score:a,keys:i,parse:f,stringify:s}}function Ir(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Nr(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const i=Ir(a[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-a.length)===1){if(vn(a))return 1;if(vn(r))return-1}return r.length-a.length}function vn(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tr={type:0,value:""},Mr=/[a-zA-Z0-9_]/;function Lr(e){if(!e)return[[]];if(e==="/")return[[Tr]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,a=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let f=0,s,c="",l="";function u(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:l,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:s==="/"?(c&&u(),o()):s===":"?(u(),n=1):m();break;case 4:m(),n=a;break;case 1:s==="("?n=2:Mr.test(s)?m():(u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+s:n=3:l+=s;break;case 3:u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}function zr(e,t,n){const a=_r(Lr(e.path),n),r=R(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function jr(e,t){const n=[],a=new Map;t=gn({strict:!1,end:!0,sensitive:!1},t);function r(l){return a.get(l)}function i(l,u,m){const p=!m,w=Dr(l);w.aliasOf=m&&m.record;const O=gn(t,l),E=[w];if("alias"in l){const A=typeof l.alias=="string"?[l.alias]:l.alias;for(const C of A)E.push(R({},w,{components:m?m.record.components:w.components,path:C,aliasOf:m?m.record:w}))}let v,h;for(const A of E){const{path:C}=A;if(u&&C[0]!=="/"){const _=u.record.path,L=_[_.length-1]==="/"?"":"/";A.path=u.record.path+(C&&L+C)}if(v=zr(A,u,O),m?m.alias.push(v):(h=h||v,h!==v&&h.alias.push(v),p&&l.name&&!hn(v)&&o(l.name)),w.children){const _=w.children;for(let L=0;L<_.length;L++)i(_[L],v,m&&m.children[L])}m=m||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&s(v)}return h?()=>{o(h)}:Se}function o(l){if(oa(l)){const u=a.get(l);u&&(a.delete(l),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(l);u>-1&&(n.splice(u,1),l.record.name&&a.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function f(){return n}function s(l){let u=0;for(;u<n.length&&Nr(l,n[u])>=0&&(l.record.path!==n[u].record.path||!la(l,n[u]));)u++;n.splice(u,0,l),l.record.name&&!hn(l)&&a.set(l.record.name,l)}function c(l,u){let m,p={},w,O;if("name"in l&&l.name){if(m=a.get(l.name),!m)throw he(1,{location:l});O=m.record.name,p=R(pn(u.params,m.keys.filter(h=>!h.optional).concat(m.parent?m.parent.keys.filter(h=>h.optional):[]).map(h=>h.name)),l.params&&pn(l.params,m.keys.map(h=>h.name))),w=m.stringify(p)}else if(l.path!=null)w=l.path,m=n.find(h=>h.re.test(w)),m&&(p=m.parse(w),O=m.record.name);else{if(m=u.name?a.get(u.name):n.find(h=>h.re.test(u.path)),!m)throw he(1,{location:l,currentLocation:u});O=m.record.name,p=R({},u.params,l.params),w=m.stringify(p)}const E=[];let v=m;for(;v;)E.unshift(v.record),v=v.parent;return{name:O,path:w,params:p,matched:E,meta:$r(E)}}return e.forEach(l=>i(l)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:f,getRecordMatcher:r}}function pn(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Dr(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fr(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fr(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function hn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $r(e){return e.reduce((t,n)=>R(t,n.meta),{})}function gn(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}function la(e,t){return t.children.some(n=>n===e||la(e,n))}function Yr(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(ea," "),o=i.indexOf("="),f=_e(o<0?i:i.slice(0,o)),s=o<0?null:_e(i.slice(o+1));if(f in t){let c=t[f];G(c)||(c=t[f]=[c]),c.push(s)}else t[f]=s}return t}function bn(e){let t="";for(let n in e){const a=e[n];if(n=or(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(G(a)?a.map(i=>i&&Et(i)):[a&&Et(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Br(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=G(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const Ur=Symbol(""),yn=Symbol(""),Bt=Symbol(""),fa=Symbol(""),Ot=Symbol("");function xe(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ne(e,t,n,a,r,i=o=>o()){const o=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((f,s)=>{const c=m=>{m===!1?s(he(4,{from:n,to:t})):m instanceof Error?s(m):Pr(m)?s(he(2,{from:t,to:m})):(o&&a.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),f())},l=i(()=>e.call(a&&a.instances[r],t,n,c));let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(m=>s(m))})}function bt(e,t,n,a,r=i=>i()){const i=[];for(const o of e)for(const f in o.components){let s=o.components[f];if(!(t!=="beforeRouteEnter"&&!o.instances[f]))if(Hr(s)){const l=(s.__vccOpts||s)[t];l&&i.push(ne(l,n,a,o,f,r))}else{let c=s();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${o.path}"`));const u=qa(l)?l.default:l;o.components[f]=u;const p=(u.__vccOpts||u)[t];return p&&ne(p,n,a,o,f,r)()}))}}return i}function Hr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kn(e){const t=Re(Bt),n=Re(fa),a=$(()=>t.resolve(Ee(e.to))),r=$(()=>{const{matched:s}=a.value,{length:c}=s,l=s[c-1],u=n.matched;if(!l||!u.length)return-1;const m=u.findIndex(pe.bind(null,l));if(m>-1)return m;const p=wn(s[c-2]);return c>1&&wn(l)===p&&u[u.length-1].path!==p?u.findIndex(pe.bind(null,s[c-2])):m}),i=$(()=>r.value>-1&&Vr(n.params,a.value.params)),o=$(()=>r.value>-1&&r.value===n.matched.length-1&&ra(n.params,a.value.params));function f(s={}){return Kr(s)?t[Ee(e.replace)?"replace":"push"](Ee(e.to)).catch(Se):Promise.resolve()}return{route:a,href:$(()=>a.value.href),isActive:i,isExactActive:o,navigate:f}}const Wr=Ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kn,setup(e,{slots:t}){const n=Ga(kn(e)),{options:a}=Re(Bt),r=$(()=>({[xn(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[xn(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:$t("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Gr=Wr;function Kr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vr(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!G(r)||r.length!==a.length||a.some((i,o)=>i!==r[o]))return!1}return!0}function wn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xn=(e,t,n)=>e??t??n,qr=Ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Re(Ot),r=$(()=>e.route||a.value),i=Re(yn,0),o=$(()=>{let c=Ee(i);const{matched:l}=r.value;let u;for(;(u=l[c])&&!u.components;)c++;return c}),f=$(()=>r.value.matched[o.value]);pt(yn,$(()=>o.value+1)),pt(Ur,f),pt(Ot,r);const s=Ka();return Zn(()=>[s.value,f.value,e.name],([c,l,u],[m,p,w])=>{l&&(l.instances[u]=c,p&&p!==l&&c&&c===m&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!pe(l,p)||!m)&&(l.enterCallbacks[u]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=r.value,l=e.name,u=f.value,m=u&&u.components[l];if(!m)return An(n.default,{Component:m,route:c});const p=u.props[l],w=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=$t(m,R({},w,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[l]=null)},ref:s}));return An(n.default,{Component:E,route:c})||E}}});function An(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xr=qr;function Qr(e){const t=jr(e.routes,e),n=e.parseQuery||Yr,a=e.stringifyQuery||bn,r=e.history,i=xe(),o=xe(),f=xe(),s=Ua(ee);let c=ee;ue&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ht.bind(null,d=>""+d),u=ht.bind(null,lr),m=ht.bind(null,_e);function p(d,y){let g,x;return oa(d)?(g=t.getRecordMatcher(d),x=y):x=d,t.addRoute(x,g)}function w(d){const y=t.getRecordMatcher(d);y&&t.removeRoute(y)}function O(){return t.getRoutes().map(d=>d.record)}function E(d){return!!t.getRecordMatcher(d)}function v(d,y){if(y=R({},y||s.value),typeof d=="string"){const S=gt(n,d,y.path),j=t.resolve({path:S.path},y),we=r.createHref(S.fullPath);return R(S,j,{params:m(j.params),hash:_e(S.hash),redirectedFrom:void 0,href:we})}let g;if(d.path!=null)g=R({},d,{path:gt(n,d.path,y.path).path});else{const S=R({},d.params);for(const j in S)S[j]==null&&delete S[j];g=R({},d,{params:u(S)}),y.params=u(y.params)}const x=t.resolve(g,y),I=d.hash||"";x.params=l(m(x.params));const z=ur(a,R({},d,{hash:ir(I),path:x.path})),P=r.createHref(z);return R({fullPath:z,hash:I,query:a===bn?Br(d.query):d.query||{}},x,{redirectedFrom:void 0,href:P})}function h(d){return typeof d=="string"?gt(n,d,s.value.path):R({},d)}function A(d,y){if(c!==d)return he(8,{from:y,to:d})}function C(d){return F(d)}function _(d){return C(R(h(d),{replace:!0}))}function L(d){const y=d.matched[d.matched.length-1];if(y&&y.redirect){const{redirect:g}=y;let x=typeof g=="function"?g(d):g;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=h(x):{path:x},x.params={}),R({query:d.query,hash:d.hash,params:x.path!=null?{}:d.params},x)}}function F(d,y){const g=c=v(d),x=s.value,I=d.state,z=d.force,P=d.replace===!0,S=L(g);if(S)return F(R(h(S),{state:typeof S=="object"?R({},I,S.state):I,force:z,replace:P}),y||g);const j=g;j.redirectedFrom=y;let we;return!z&&mr(a,x,g)&&(we=he(16,{to:j,from:x}),on(x,x,!0,!1)),(we?Promise.resolve(we):$e(j,x)).catch(Y=>V(Y)?V(Y,2)?Y:mt(Y):ut(Y,j,x)).then(Y=>{if(Y){if(V(Y,2))return F(R({replace:P},h(Y.to),{state:typeof Y.to=="object"?R({},I,Y.to.state):I,force:z}),y||j)}else Y=an(j,x,!0,P,I);return nn(j,x,Y),Y})}function ye(d,y){const g=A(d,y);return g?Promise.reject(g):Promise.resolve()}function H(d){const y=Be.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(d):d()}function $e(d,y){let g;const[x,I,z]=Zr(d,y);g=bt(x.reverse(),"beforeRouteLeave",d,y);for(const S of x)S.leaveGuards.forEach(j=>{g.push(ne(j,d,y))});const P=ye.bind(null,d,y);return g.push(P),ce(g).then(()=>{g=[];for(const S of i.list())g.push(ne(S,d,y));return g.push(P),ce(g)}).then(()=>{g=bt(I,"beforeRouteUpdate",d,y);for(const S of I)S.updateGuards.forEach(j=>{g.push(ne(j,d,y))});return g.push(P),ce(g)}).then(()=>{g=[];for(const S of z)if(S.beforeEnter)if(G(S.beforeEnter))for(const j of S.beforeEnter)g.push(ne(j,d,y));else g.push(ne(S.beforeEnter,d,y));return g.push(P),ce(g)}).then(()=>(d.matched.forEach(S=>S.enterCallbacks={}),g=bt(z,"beforeRouteEnter",d,y,H),g.push(P),ce(g))).then(()=>{g=[];for(const S of o.list())g.push(ne(S,d,y));return g.push(P),ce(g)}).catch(S=>V(S,8)?S:Promise.reject(S))}function nn(d,y,g){f.list().forEach(x=>H(()=>x(d,y,g)))}function an(d,y,g,x,I){const z=A(d,y);if(z)return z;const P=y===ee,S=ue?history.state:{};g&&(x||P?r.replace(d.fullPath,R({scroll:P&&S&&S.scroll},I)):r.push(d.fullPath,I)),s.value=d,on(d,y,g,P),mt()}let ke;function $a(){ke||(ke=r.listen((d,y,g)=>{if(!sn.listening)return;const x=v(d),I=L(x);if(I){F(R(I,{replace:!0}),x).catch(Se);return}c=x;const z=s.value;ue&&kr(cn(z.fullPath,g.delta),it()),$e(x,z).catch(P=>V(P,12)?P:V(P,2)?(F(P.to,x).then(S=>{V(S,20)&&!g.delta&&g.type===Ie.pop&&r.go(-1,!1)}).catch(Se),Promise.reject()):(g.delta&&r.go(-g.delta,!1),ut(P,x,z))).then(P=>{P=P||an(x,z,!1),P&&(g.delta&&!V(P,8)?r.go(-g.delta,!1):g.type===Ie.pop&&V(P,20)&&r.go(-1,!1)),nn(x,z,P)}).catch(Se)}))}let ct=xe(),rn=xe(),Ye;function ut(d,y,g){mt(d);const x=rn.list();return x.length?x.forEach(I=>I(d,y,g)):console.error(d),Promise.reject(d)}function Ya(){return Ye&&s.value!==ee?Promise.resolve():new Promise((d,y)=>{ct.add([d,y])})}function mt(d){return Ye||(Ye=!d,$a(),ct.list().forEach(([y,g])=>d?g(d):y()),ct.reset()),d}function on(d,y,g,x){const{scrollBehavior:I}=e;if(!ue||!I)return Promise.resolve();const z=!g&&wr(cn(d.fullPath,0))||(x||!g)&&history.state&&history.state.scroll||null;return Wa().then(()=>I(d,y,z)).then(P=>P&&yr(P)).catch(P=>ut(P,d,y))}const dt=d=>r.go(d);let vt;const Be=new Set,sn={currentRoute:s,listening:!0,addRoute:p,removeRoute:w,hasRoute:E,getRoutes:O,resolve:v,options:e,push:C,replace:_,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:f.add,onError:rn.add,isReady:Ya,install(d){const y=this;d.component("RouterLink",Gr),d.component("RouterView",Xr),d.config.globalProperties.$router=y,Object.defineProperty(d.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(s)}),ue&&!vt&&s.value===ee&&(vt=!0,C(r.location).catch(I=>{}));const g={};for(const I in ee)Object.defineProperty(g,I,{get:()=>s.value[I],enumerable:!0});d.provide(Bt,y),d.provide(fa,Ha(g)),d.provide(Ot,s);const x=d.unmount;Be.add(d),d.unmount=function(){Be.delete(d),Be.size<1&&(c=ee,ke&&ke(),ke=null,s.value=ee,vt=!1,Ye=!1),x()}}};function ce(d){return d.reduce((y,g)=>y.then(()=>H(g)),Promise.resolve())}return sn}function Zr(e,t){const n=[],a=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const f=t.matched[o];f&&(e.matched.find(c=>pe(c,f))?a.push(f):n.push(f));const s=e.matched[o];s&&(t.matched.find(c=>pe(c,s))||r.push(s))}return[n,a,r]}function En(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?En(Object(n),!0).forEach(function(a){D(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):En(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tt(e){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(e)}function Jr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ei(e,t,n){return t&&Sn(e.prototype,t),n&&Sn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ut(e,t){return ni(e)||ri(e,t)||ca(e,t)||oi()}function je(e){return ti(e)||ai(e)||ca(e)||ii()}function ti(e){if(Array.isArray(e))return Pt(e)}function ni(e){if(Array.isArray(e))return e}function ai(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ri(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,f;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(s){i=!0,f=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw f}}return a}}function ca(e,t){if(e){if(typeof e=="string")return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(e,t)}}function Pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ii(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var On=function(){},Ht={},ua={},ma=null,da={mark:On,measure:On};try{typeof window<"u"&&(Ht=window),typeof document<"u"&&(ua=document),typeof MutationObserver<"u"&&(ma=MutationObserver),typeof performance<"u"&&(da=performance)}catch{}var si=Ht.navigator||{},Pn=si.userAgent,Cn=Pn===void 0?"":Pn,ae=Ht,T=ua,Rn=ma,Ue=da;ae.document;var J=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",va=~Cn.indexOf("MSIE")||~Cn.indexOf("Trident/"),He,We,Ge,Ke,Ve,X="___FONT_AWESOME___",Ct=16,pa="fa",ha="svg-inline--fa",le="data-fa-i2svg",Rt="data-fa-pseudo-element",li="data-fa-pseudo-element-pending",Wt="data-prefix",Gt="data-icon",_n="fontawesome-i2svg",fi="async",ci=["HTML","HEAD","STYLE","SCRIPT"],ga=function(){try{return!0}catch{return!1}}(),N="classic",M="sharp",Kt=[N,M];function De(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[N]}})}var Ne=De((He={},D(He,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),D(He,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),He)),Te=De((We={},D(We,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),D(We,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),We)),Me=De((Ge={},D(Ge,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),D(Ge,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ge)),ui=De((Ke={},D(Ke,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),D(Ke,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ke)),mi=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ba="fa-layers-text",di=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vi=De((Ve={},D(Ve,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),D(Ve,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ve)),ya=[1,2,3,4,5,6,7,8,9,10],pi=ya.concat([11,12,13,14,15,16,17,18,19,20]),hi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Le=new Set;Object.keys(Te[N]).map(Le.add.bind(Le));Object.keys(Te[M]).map(Le.add.bind(Le));var gi=[].concat(Kt,je(Le),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ya.map(function(e){return"".concat(e,"x")})).concat(pi.map(function(e){return"w-".concat(e)})),Pe=ae.FontAwesomeConfig||{};function bi(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var ki=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ki.forEach(function(e){var t=Ut(e,2),n=t[0],a=t[1],r=yi(bi(n));r!=null&&(Pe[a]=r)})}var ka={styleDefault:"solid",familyDefault:"classic",cssPrefix:pa,replacementClass:ha,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pe.familyPrefix&&(Pe.cssPrefix=Pe.familyPrefix);var ge=b(b({},ka),Pe);ge.autoReplaceSvg||(ge.observeMutations=!1);var k={};Object.keys(ka).forEach(function(e){Object.defineProperty(k,e,{enumerable:!0,set:function(n){ge[e]=n,Ce.forEach(function(a){return a(k)})},get:function(){return ge[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){ge.cssPrefix=t,Ce.forEach(function(n){return n(k)})},get:function(){return ge.cssPrefix}});ae.FontAwesomeConfig=k;var Ce=[];function wi(e){return Ce.push(e),function(){Ce.splice(Ce.indexOf(e),1)}}var te=Ct,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xi(e){if(!(!e||!J)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return T.head.insertBefore(t,a),e}}var Ai="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ze(){for(var e=12,t="";e-- >0;)t+=Ai[Math.random()*62|0];return t}function be(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Vt(e){return e.classList?be(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ei(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(wa(e[n]),'" ')},"").trim()}function ot(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qt(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function Si(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(f)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:c}}function Oi(e){var t=e.transform,n=e.width,a=n===void 0?Ct:n,r=e.height,i=r===void 0?Ct:r,o=e.startCentered,f=o===void 0?!1:o,s="";return f&&va?s+="translate(".concat(t.x/te-a/2,"em, ").concat(t.y/te-i/2,"em) "):f?s+="translate(calc(-50% + ".concat(t.x/te,"em), calc(-50% + ").concat(t.y/te,"em)) "):s+="translate(".concat(t.x/te,"em, ").concat(t.y/te,"em) "),s+="scale(".concat(t.size/te*(t.flipX?-1:1),", ").concat(t.size/te*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Pi=`:root, :host {
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
}`;function xa(){var e=pa,t=ha,n=k.cssPrefix,a=k.replacementClass,r=Pi;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(f,".".concat(a))}return r}var In=!1;function yt(){k.autoAddCss&&!In&&(xi(xa()),In=!0)}var Ci={mixout:function(){return{dom:{css:xa,insertCss:yt}}},hooks:function(){return{beforeDOMElementCreation:function(){yt()},beforeI2svg:function(){yt()}}}},Q=ae||{};Q[X]||(Q[X]={});Q[X].styles||(Q[X].styles={});Q[X].hooks||(Q[X].hooks={});Q[X].shims||(Q[X].shims=[]);var W=Q[X],Aa=[],Ri=function e(){T.removeEventListener("DOMContentLoaded",e),nt=1,Aa.map(function(t){return t()})},nt=!1;J&&(nt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),nt||T.addEventListener("DOMContentLoaded",Ri));function _i(e){J&&(nt?setTimeout(e,0):Aa.push(e))}function Fe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?wa(e):"<".concat(t," ").concat(Ei(a),">").concat(i.map(Fe).join(""),"</").concat(t,">")}function Nn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ii=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},kt=function(t,n,a,r){var i=Object.keys(t),o=i.length,f=r!==void 0?Ii(n,r):n,s,c,l;for(a===void 0?(s=1,l=t[i[0]]):(s=0,l=a);s<o;s++)c=i[s],l=f(l,t[c],c,t);return l};function Ni(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function _t(e){var t=Ni(e);return t.length===1?t[0].toString(16):null}function Ti(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Tn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function It(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Tn(t);typeof W.hooks.addPack=="function"&&!r?W.hooks.addPack(e,Tn(t)):W.styles[e]=b(b({},W.styles[e]||{}),i),e==="fas"&&It("fa",t)}var qe,Xe,Qe,me=W.styles,Mi=W.shims,Li=(qe={},D(qe,N,Object.values(Me[N])),D(qe,M,Object.values(Me[M])),qe),Xt=null,Ea={},Sa={},Oa={},Pa={},Ca={},zi=(Xe={},D(Xe,N,Object.keys(Ne[N])),D(Xe,M,Object.keys(Ne[M])),Xe);function ji(e){return~gi.indexOf(e)}function Di(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ji(r)?r:null}var Ra=function(){var t=function(i){return kt(me,function(o,f,s){return o[s]=kt(f,i,{}),o},{})};Ea=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var f=i[2].filter(function(s){return typeof s=="number"});f.forEach(function(s){r[s.toString(16)]=o})}return r}),Sa=t(function(r,i,o){if(r[o]=o,i[2]){var f=i[2].filter(function(s){return typeof s=="string"});f.forEach(function(s){r[s]=o})}return r}),Ca=t(function(r,i,o){var f=i[2];return r[o]=o,f.forEach(function(s){r[s]=o}),r});var n="far"in me||k.autoFetchSvg,a=kt(Mi,function(r,i){var o=i[0],f=i[1],s=i[2];return f==="far"&&!n&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:s}),r},{names:{},unicodes:{}});Oa=a.names,Pa=a.unicodes,Xt=st(k.styleDefault,{family:k.familyDefault})};wi(function(e){Xt=st(e.styleDefault,{family:k.familyDefault})});Ra();function Qt(e,t){return(Ea[e]||{})[t]}function Fi(e,t){return(Sa[e]||{})[t]}function se(e,t){return(Ca[e]||{})[t]}function _a(e){return Oa[e]||{prefix:null,iconName:null}}function $i(e){var t=Pa[e],n=Qt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Xt}var Zt=function(){return{prefix:null,iconName:null,rest:[]}};function st(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?N:n,r=Ne[a][e],i=Te[a][e]||Te[a][r],o=e in W.styles?e:null;return i||o||null}var Mn=(Qe={},D(Qe,N,Object.keys(Me[N])),D(Qe,M,Object.keys(Me[M])),Qe);function lt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},D(t,N,"".concat(k.cssPrefix,"-").concat(N)),D(t,M,"".concat(k.cssPrefix,"-").concat(M)),t),o=null,f=N;(e.includes(i[N])||e.some(function(c){return Mn[N].includes(c)}))&&(f=N),(e.includes(i[M])||e.some(function(c){return Mn[M].includes(c)}))&&(f=M);var s=e.reduce(function(c,l){var u=Di(k.cssPrefix,l);if(me[l]?(l=Li[f].includes(l)?ui[f][l]:l,o=l,c.prefix=l):zi[f].indexOf(l)>-1?(o=l,c.prefix=st(l,{family:f})):u?c.iconName=u:l!==k.replacementClass&&l!==i[N]&&l!==i[M]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var m=o==="fa"?_a(c.iconName):{},p=se(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||p||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!me.far&&me.fas&&!k.autoFetchSvg&&(c.prefix="fas")}return c},Zt());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&f===M&&(me.fass||k.autoFetchSvg)&&(s.prefix="fass",s.iconName=se(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=re()||"fas"),s}var Yi=function(){function e(){Jr(this,e),this.definitions={}}return ei(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){n.definitions[f]=b(b({},n.definitions[f]||{}),o[f]),It(f,o[f]);var s=Me[N][f];s&&It(s,o[f]),Ra()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,s=o.iconName,c=o.icon,l=c[2];n[f]||(n[f]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[f][u]=c)}),n[f][s]=c}),n}}]),e}(),Ln=[],de={},ve={},Bi=Object.keys(ve);function Ui(e,t){var n=t.mixoutsTo;return Ln=e,de={},Object.keys(ve).forEach(function(a){Bi.indexOf(a)===-1&&delete ve[a]}),Ln.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){n[o]||(n[o]={}),n[o][f]=r[o][f]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){de[o]||(de[o]=[]),de[o].push(i[o])})}a.provides&&a.provides(ve)}),n}function Nt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=de[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=de[e]||[];r.forEach(function(i){i.apply(null,n)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ve[e]?ve[e].apply(null,t):void 0}function Tt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||re();if(t)return t=se(n,t)||t,Nn(Ia.definitions,n,t)||Nn(W.styles,n,t)}var Ia=new Yi,Hi=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,fe("noAuto")},Wi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(fe("beforeI2svg",t),Z("pseudoElements2svg",t),Z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,_i(function(){Ki({autoReplaceSvgRoot:n}),fe("watch",t)})}},Gi={icon:function(t){if(t===null)return null;if(tt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:se(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=st(t[0]);return{prefix:a,iconName:se(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(mi))){var r=lt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:se(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=re();return{prefix:i,iconName:se(i,t)||t}}}},U={noAuto:Hi,config:k,dom:Wi,parse:Gi,library:Ia,findIconDefinition:Tt,toHtml:Fe},Ki=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(W.styles).length>0||k.autoFetchSvg)&&J&&k.autoReplaceSvg&&U.dom.i2svg({node:a})};function ft(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Fe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(J){var a=T.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Vi(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(qt(o)&&n.found&&!a.found){var f=n.width,s=n.height,c={x:f/s/2,y:.5};r.style=ot(b(b({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function qi(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:o}),children:a}]}]}function Jt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,f=e.symbol,s=e.title,c=e.maskId,l=e.titleId,u=e.extra,m=e.watchable,p=m===void 0?!1:m,w=a.found?a:n,O=w.width,E=w.height,v=r==="fak",h=[k.replacementClass,i?"".concat(k.cssPrefix,"-").concat(i):""].filter(function(H){return u.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(u.classes).join(" "),A={children:[],attributes:b(b({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(E)})},C=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/E*16*.0625,"em")}:{};p&&(A.attributes[le]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||ze())},children:[s]}),delete A.attributes.title);var _=b(b({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:f,styles:b(b({},C),u.styles)}),L=a.found&&n.found?Z("generateAbstractMask",_)||{children:[],attributes:{}}:Z("generateAbstractIcon",_)||{children:[],attributes:{}},F=L.children,ye=L.attributes;return _.children=F,_.attributes=ye,f?qi(_):Vi(_)}function zn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,f=e.watchable,s=f===void 0?!1:f,c=b(b(b({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[le]="");var l=b({},o.styles);qt(r)&&(l.transform=Oi({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var u=ot(l);u.length>0&&(c.style=u);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Xi(e){var t=e.content,n=e.title,a=e.extra,r=b(b(b({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ot(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wt=W.styles;function Mt(e){var t=e[0],n=e[1],a=e.slice(4),r=Ut(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Qi={found:!1,width:512,height:512};function Zi(e,t){!ga&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lt(e,t){var n=t;return t==="fa"&&k.styleDefault!==null&&(t=re()),new Promise(function(a,r){if(Z("missingIconAbstract"),n==="fa"){var i=_a(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wt[t]&&wt[t][e]){var o=wt[t][e];return a(Mt(o))}Zi(e,t),a(b(b({},Qi),{},{icon:k.showMissingIcons&&e?Z("missingIconAbstract")||{}:{}}))})}var jn=function(){},zt=k.measurePerformance&&Ue&&Ue.mark&&Ue.measure?Ue:{mark:jn,measure:jn},Ae='FA "6.5.2"',Ji=function(t){return zt.mark("".concat(Ae," ").concat(t," begins")),function(){return Na(t)}},Na=function(t){zt.mark("".concat(Ae," ").concat(t," ends")),zt.measure("".concat(Ae," ").concat(t),"".concat(Ae," ").concat(t," begins"),"".concat(Ae," ").concat(t," ends"))},en={begin:Ji,end:Na},Je=function(){};function Dn(e){var t=e.getAttribute?e.getAttribute(le):null;return typeof t=="string"}function eo(e){var t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(Gt):null;return t&&n}function to(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function no(){if(k.autoReplaceSvg===!0)return et.replace;var e=et[k.autoReplaceSvg];return e||et.replace}function ao(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function ro(e){return T.createElement(e)}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?ao:ro:n;if(typeof e=="string")return T.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ta(o,{ceFn:a}))}),r}function io(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var et={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Ta(r),n)}),n.getAttribute(le)===null&&k.keepOriginalSource){var a=T.createComment(io(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Vt(n).indexOf(k.replacementClass))return et.replace(t);var r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(f,s){return s===k.replacementClass||s.match(r)?f.toSvg.push(s):f.toNode.push(s),f},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(f){return Fe(f)}).join(`
`);n.setAttribute(le,""),n.innerHTML=o}};function Fn(e){e()}function Ma(e,t){var n=typeof t=="function"?t:Je;if(e.length===0)n();else{var a=Fn;k.mutateApproach===fi&&(a=ae.requestAnimationFrame||Fn),a(function(){var r=no(),i=en.begin("mutate");e.map(r),i(),n()})}}var tn=!1;function La(){tn=!0}function jt(){tn=!1}var at=null;function $n(e){if(Rn&&k.observeMutations){var t=e.treeCallback,n=t===void 0?Je:t,a=e.nodeCallback,r=a===void 0?Je:a,i=e.pseudoElementsCallback,o=i===void 0?Je:i,f=e.observeMutationsRoot,s=f===void 0?T:f;at=new Rn(function(c){if(!tn){var l=re();be(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Dn(u.addedNodes[0])&&(k.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&k.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Dn(u.target)&&~hi.indexOf(u.attributeName))if(u.attributeName==="class"&&eo(u.target)){var m=lt(Vt(u.target)),p=m.prefix,w=m.iconName;u.target.setAttribute(Wt,p||l),w&&u.target.setAttribute(Gt,w)}else to(u.target)&&r(u.target)})}}),J&&at.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oo(){at&&at.disconnect()}function so(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],f=i.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),n}function lo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=lt(Vt(e));return r.prefix||(r.prefix=re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Fi(r.prefix,e.innerText)||Qt(r.prefix,_t(e.innerText))),!r.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function fo(e){var t=be(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(a||ze()):(t["aria-hidden"]="true",t.focusable="false")),t}function co(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lo(e),a=n.iconName,r=n.prefix,i=n.rest,o=fo(e),f=Nt("parseNodeAttributes",{},e),s=t.styleParser?so(e):[];return b({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},f)}var uo=W.styles;function za(e){var t=k.autoReplaceSvg==="nest"?Yn(e,{styleParser:!1}):Yn(e);return~t.extra.classes.indexOf(ba)?Z("generateLayersText",e,t):Z("generateSvgReplacementMutation",e,t)}var ie=new Set;Kt.map(function(e){ie.add("fa-".concat(e))});Object.keys(Ne[N]).map(ie.add.bind(ie));Object.keys(Ne[M]).map(ie.add.bind(ie));ie=je(ie);function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();var n=T.documentElement.classList,a=function(u){return n.add("".concat(_n,"-").concat(u))},r=function(u){return n.remove("".concat(_n,"-").concat(u))},i=k.autoFetchSvg?ie:Kt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(uo));i.includes("fa")||i.push("fa");var o=[".".concat(ba,":not([").concat(le,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=be(e.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();var s=en.begin("onTree"),c=f.reduce(function(l,u){try{var m=za(u);m&&l.push(m)}catch(p){ga||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(m){Ma(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),s(),l()})}).catch(function(m){s(),u(m)})})}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;za(e).then(function(n){n&&Ma([n],t)})}function vo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Tt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Tt(r||{})),e(a,b(b({},n),{},{mask:r}))}}var po=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?K:a,i=n.symbol,o=i===void 0?!1:i,f=n.mask,s=f===void 0?null:f,c=n.maskId,l=c===void 0?null:c,u=n.title,m=u===void 0?null:u,p=n.titleId,w=p===void 0?null:p,O=n.classes,E=O===void 0?[]:O,v=n.attributes,h=v===void 0?{}:v,A=n.styles,C=A===void 0?{}:A;if(t){var _=t.prefix,L=t.iconName,F=t.icon;return ft(b({type:"icon"},t),function(){return fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),k.autoA11y&&(m?h["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(w||ze()):(h["aria-hidden"]="true",h.focusable="false")),Jt({icons:{main:Mt(F),mask:s?Mt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:L,transform:b(b({},K),r),symbol:o,title:m,maskId:l,titleId:w,extra:{attributes:h,styles:C,classes:E}})})}},ho={mixout:function(){return{icon:vo(po)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bn,n.nodeCallback=mo,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?T:a,i=n.callback,o=i===void 0?function(){}:i;return Bn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,f=a.prefix,s=a.transform,c=a.symbol,l=a.mask,u=a.maskId,m=a.extra;return new Promise(function(p,w){Promise.all([Lt(r,f),l.iconName?Lt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var E=Ut(O,2),v=E[0],h=E[1];p([n,Jt({icons:{main:v,mask:h},prefix:f,iconName:r,transform:s,symbol:c,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,f=n.styles,s=ot(f);s.length>0&&(r.style=s);var c;return qt(o)&&(c=Z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},go={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ft({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(f){Array.isArray(f)?f.map(function(s){o=o.concat(s.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(je(i)).join(" ")},children:o}]})}}}},bo={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,f=o===void 0?[]:o,s=a.attributes,c=s===void 0?{}:s,l=a.styles,u=l===void 0?{}:l;return ft({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),Xi({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(je(f))}})})}}}},yo={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?K:r,o=a.title,f=o===void 0?null:o,s=a.classes,c=s===void 0?[]:s,l=a.attributes,u=l===void 0?{}:l,m=a.styles,p=m===void 0?{}:m;return ft({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),zn({content:n,transform:b(b({},K),i),title:f,extra:{attributes:u,styles:p,classes:["".concat(k.cssPrefix,"-layers-text")].concat(je(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,f=null,s=null;if(va){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();f=l.width/c,s=l.height/c}return k.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zn({content:n.innerHTML,width:f,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},ko=new RegExp('"',"ug"),Un=[1105920,1112319];function wo(e){var t=e.replace(ko,""),n=Ti(t,0),a=n>=Un[0]&&n<=Un[1],r=t.length===2?t[0]===t[1]:!1;return{value:_t(r?t[0]:t),isSecondary:a||r}}function Hn(e,t){var n="".concat(li).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=be(e.children),o=i.filter(function(F){return F.getAttribute(Rt)===t})[0],f=ae.getComputedStyle(e,t),s=f.getPropertyValue("font-family").match(di),c=f.getPropertyValue("font-weight"),l=f.getPropertyValue("content");if(o&&!s)return e.removeChild(o),a();if(s&&l!=="none"&&l!==""){var u=f.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?M:N,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Te[m][s[2].toLowerCase()]:vi[m][c],w=wo(u),O=w.value,E=w.isSecondary,v=s[0].startsWith("FontAwesome"),h=Qt(p,O),A=h;if(v){var C=$i(O);C.iconName&&C.prefix&&(h=C.iconName,p=C.prefix)}if(h&&!E&&(!o||o.getAttribute(Wt)!==p||o.getAttribute(Gt)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var _=co(),L=_.extra;L.attributes[Rt]=t,Lt(h,p).then(function(F){var ye=Jt(b(b({},_),{},{icons:{main:F,mask:Zt()},prefix:p,iconName:A,extra:L,watchable:!0})),H=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=ye.map(function($e){return Fe($e)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function xo(e){return Promise.all([Hn(e,"::before"),Hn(e,"::after")])}function Ao(e){return e.parentNode!==document.head&&!~ci.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wn(e){if(J)return new Promise(function(t,n){var a=be(e.querySelectorAll("*")).filter(Ao).map(xo),r=en.begin("searchPseudoElements");La(),Promise.all(a).then(function(){r(),jt(),t()}).catch(function(){r(),jt(),n()})})}var Eo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;k.searchPseudoElements&&Wn(r)}}},Gn=!1,So={mixout:function(){return{dom:{unwatch:function(){La(),Gn=!0}}}},hooks:function(){return{bootstrap:function(){$n(Nt("mutationObserverCallbacks",{}))},noAuto:function(){oo()},watch:function(n){var a=n.observeMutationsRoot;Gn?jt():$n(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Kn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],f=i.slice(1).join("-");if(o&&f==="h")return a.flipX=!0,a;if(o&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(o){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},n)},Oo={mixout:function(){return{parse:{transform:function(n){return Kn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Kn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,f={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:f,inner:u,path:m};return{tag:"g",attributes:b({},p.outer),children:[{tag:"g",attributes:b({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:b(b({},a.icon.attributes),p.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Po(e){return e.tag==="g"?e.children:[e]}var Co={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?lt(r.split(" ").map(function(o){return o.trim()})):Zt();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,f=n.maskId,s=n.transform,c=i.width,l=i.icon,u=o.width,m=o.icon,p=Si({transform:s,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:b(b({},xt),{},{fill:"white"})},O=l.children?{children:l.children.map(Vn)}:{},E={tag:"g",attributes:b({},p.inner),children:[Vn(b({tag:l.tag,attributes:b(b({},l.attributes),p.path)},O))]},v={tag:"g",attributes:b({},p.outer),children:[E]},h="mask-".concat(f||ze()),A="clip-".concat(f||ze()),C={tag:"mask",attributes:b(b({},xt),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Po(m)},C]};return a.push(_,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(h,")")},xt)}),{children:a,attributes:r}}}},Ro={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||f.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_o={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Io=[Ci,ho,go,bo,yo,Eo,So,Oo,Co,Ro,_o];Ui(Io,{mixoutsTo:U});U.noAuto;U.config;var No=U.library;U.dom;var Dt=U.parse;U.findIconDefinition;U.toHtml;var To=U.icon;U.layer;U.text;U.counter;function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qn(Object(n),!0).forEach(function(a){B(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function rt(e){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(e)}function B(e,t,n){return t=jo(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mo(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Lo(e,t){if(e==null)return{};var n=Mo(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function zo(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jo(e){var t=zo(e,"string");return typeof t=="symbol"?t:String(t)}var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ja={exports:{}};(function(e){(function(t){var n=function(v,h,A){if(!c(h)||u(h)||m(h)||p(h)||s(h))return h;var C,_=0,L=0;if(l(h))for(C=[],L=h.length;_<L;_++)C.push(n(v,h[_],A));else{C={};for(var F in h)Object.prototype.hasOwnProperty.call(h,F)&&(C[v(F,A)]=n(v,h[F],A))}return C},a=function(v,h){h=h||{};var A=h.separator||"_",C=h.split||/(?=[A-Z])/;return v.split(C).join(A)},r=function(v){return w(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(h,A){return A?A.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var h=r(v);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(v,h){return a(v,h).toLowerCase()},f=Object.prototype.toString,s=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return f.call(v)=="[object Array]"},u=function(v){return f.call(v)=="[object Date]"},m=function(v){return f.call(v)=="[object RegExp]"},p=function(v){return f.call(v)=="[object Boolean]"},w=function(v){return v=v-0,v===v},O=function(v,h){var A=h&&"process"in h?h.process:h;return typeof A!="function"?v:function(C,_){return A(C,v,_)}},E={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,h){return n(O(r,h),v)},decamelizeKeys:function(v,h){return n(O(o,h),v,h)},pascalizeKeys:function(v,h){return n(O(i,h),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=E:t.humps=E})(Do)})(ja);var Fo=ja.exports,$o=["class","style"];function Yo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Fo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function Bo(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(s){return Da(s)}),r=Object.keys(e.attributes||{}).reduce(function(s,c){var l=e.attributes[c];switch(c){case"class":s.class=Bo(l);break;case"style":s.style=Yo(l);break;default:s.attrs[c]=l}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,f=Lo(n,$o);return $t(e.tag,q(q(q({},t),{},{class:r.class,style:q(q({},r.style),o)},r.attrs),f),a)}var Fa=!1;try{Fa=!0}catch{}function Uo(){if(!Fa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function At(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?B({},e,t):{}}function Ho(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},B(t,"fa-".concat(e.size),e.size!==null),B(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),B(t,"fa-pull-".concat(e.pull),e.pull!==null),B(t,"fa-swap-opacity",e.swapOpacity),B(t,"fa-bounce",e.bounce),B(t,"fa-shake",e.shake),B(t,"fa-beat",e.beat),B(t,"fa-fade",e.fade),B(t,"fa-beat-fade",e.beatFade),B(t,"fa-flash",e.flash),B(t,"fa-spin-pulse",e.spinPulse),B(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Xn(e){if(e&&rt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dt.icon)return Dt.icon(e);if(e===null)return null;if(rt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Wo=Ft({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=$(function(){return Xn(t.icon)}),i=$(function(){return At("classes",Ho(t))}),o=$(function(){return At("transform",typeof t.transform=="string"?Dt.transform(t.transform):t.transform)}),f=$(function(){return At("mask",Xn(t.mask))}),s=$(function(){return To(r.value,q(q(q(q({},i.value),o.value),f.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Zn(s,function(l){if(!l)return Uo("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var c=$(function(){return s.value?Da(s.value.abstract[0],{},a):null});return function(){return c.value}}}),Go={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},Ko={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};No.add(Ko,Go);const Vo=Qr({history:Or(),routes:[]});Ba(e=>{e.use(Vo),e.component("font-awesome-icon",Wo)});const Qo={darkMode:!1,stylePreview:!0,actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"Bonkers",values:[{name:"Bonkers",value:"url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)"},{name:"Light",value:"#ffffff"},{name:"Dark",value:"#202124"}]},layout:"padded",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};export{Qo as parameters};
