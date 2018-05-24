(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{212:function(e,t,n){"use strict";n.r(t);var o=n(144),c=n(146),s=n(138),a=n(147),m=n(141),i=n(140),p=n(139),u=n(137),l=n(145);t.default={layout:"default",components:{"vmc-custom-cmp-meta-warning":o.a,"vmc-custom-cmp-missing-doc":c.a,"vmc-custom-cmp-sg-highlight":s.a,"vmc-custom-cmp-repo-link":a.a,"vmc-custom-cmp-p":m.a,"vmc-custom-cmp-img":i.a,"vmc-custom-cmp-h2":p.a,"vmc-custom-cmp-a":u.a,"vmc-custom-wrapper":l.a},staticRenderFns:[],render:function(){const e=this._v.bind(this),t=this._c.bind(this);this._m.bind(this);return t("vmc-custom-wrapper",[t("h1",[e("Working with components")]),e(" "),t("vmc-custom-cmp-p",[e("Components are a core building block of every application.\nIt is tremendously helpful for designers, developers and everything in-between\nto have a common understanding of components and speak about them\nin an ubiquitous language.")]),e(" "),t("vmc-custom-cmp-h2",{attrs:{level:"2",anchor:"specification"}},[e("Specification")]),e(" "),t("ol",[t("li",[e("A component must be a "),t("code",[e(".vue")]),e(" single file component")]),e(" "),t("li",[e("A component must be placed in the "),t("code",[e("~/components")]),e(" folder.")]),e(" "),t("li",[e("A component must have a name"),t("pre",[t("code",{staticClass:"language-vue"},[e("\x3c!-- ... --\x3e\n<script>\nexport default {\n  name: 'MyButton',\n}\n<\/script>\n")])])])]),e(" "),t("vmc-custom-cmp-h2",{attrs:{level:"2",anchor:"best-practices"}},[e("Best practices")]),e(" "),t("vmc-custom-cmp-p",[e("In order to be re-usable:")]),e(" "),t("ol",[t("li",[e("A component should be as stateless as possible.\nUse props and events to leave state management to the application.")]),e(" "),t("li",[e("A component should not have static content\nUse slots to leave handling of text resources to the application.")]),e(" "),t("li",[e("A component should have a template"),t("pre",[t("code",{staticClass:"language-vue"},[e("<template>\n<button><slot /></button>\n</template>\n\x3c!-- ... --\x3e\n")])])]),e(" "),t("li",[e("A component should be reusable and therefore used at least twice in a project")])]),e(" "),t("vmc-custom-cmp-h2",{attrs:{level:"2",anchor:"documentation"}},[e("Documentation")]),e(" "),t("vmc-custom-cmp-p",[e("Each component by the above "),t("vmc-custom-cmp-a",{attrs:{href:"#Specification"}},[e("specification")]),e(" has a documentation\npage under the "),t("code",[e("./components")]),e(" route of the styleguide.")],1),e(" "),t("vmc-custom-cmp-p",[e("See the "),t("vmc-custom-cmp-a",{attrs:{href:"~/components"}},[e("components")]),e(" of this documentation as an example.")],1),e(" "),t("vmc-custom-cmp-p",[e("A component can be documented using comments in the code as specified\nby the "),t("vmc-custom-cmp-a",{attrs:{href:"https://github.com/vue-styleguidist/vue-docgen-api"}},[t("code",[e("vue-docgen-api")])]),e("\npackage.")],1),e(" "),t("h3",[e("styleguide-doc")]),e(" "),t("vmc-custom-cmp-p",[e("Custom introduction text can be set using the "),t("code",[e("styleguide-doc")]),e(" element\nin a component file")]),e(" "),t("pre",[t("code",{staticClass:"language-vue"},[e("\x3c!-- ... --\x3e\n<styleguide-doc>\n### MyButton is special, its the best special button there is.\n</styleguide-doc>\n")])]),e(" "),t("h3",[e("styleguide-states")]),e(" "),t("vmc-custom-cmp-p",[e("The styleguide will do its best to render an appropriate demo\nfor each component. But the demos can be customized using the\n"),t("code",[e("styleguide-states")]),e(" element in a component file.")]),e(" "),t("pre",[t("code",{staticClass:"language-vue"},[e("\x3c!-- ... --\x3e\n<styleguide-states>\n[{\n  name: 'Ghost Button',\n  // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth\n  data: {\n    scopedSlots: {\n      default() {\n        return 'Buuuhuh'\n      }\n    },\n    props: {\n      transparent: true\n    }\n  }\n}, {\n  name: 'Default',\n  // shorthand for data.scopedSlots.default\n  content: 'Aaaaah!'\n  // shorthand for data.props\n  props: {\n    transparent: false\n  }\n}]\n</styleguide-states>\n")])])],1)}}}}]);