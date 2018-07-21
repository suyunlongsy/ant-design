webpackJsonp([45],{1745:function(n,s,a){n.exports={basic:a(2026),card:a(2027),"notice-calendar":a(2028),select:a(2029)}},2026:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u901a\u7528\u7684\u65e5\u5386\u9762\u677f\uff0c\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"]],"en-US":[["p","A basic calendar component with Year/Month switch."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/calendar/demo/basic.md",id:"components-calendar-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onPanelChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(35));return n.createElement(s.Calendar,{onPanelChange:function(n,s){console.log(n,s)}})}}},2027:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u7528\u4e8e\u5d4c\u5957\u5728\u7a7a\u95f4\u6709\u9650\u7684\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Nested inside a container element for rendering in limited space."]]},meta:{order:2,title:{"zh-CN":"\u5361\u7247\u6a21\u5f0f","en-US":"Card"},filename:"components/calendar/demo/card.md",id:"components-calendar-demo-card"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onPanelChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> border<span class="token punctuation">:</span> <span class="token string">\'1px solid #d9d9d9\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">fullscreen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(35));return n.createElement("div",{style:{width:300,border:"1px solid #d9d9d9",borderRadius:4}},n.createElement(s.Calendar,{fullscreen:!1,onPanelChange:function(n,s){console.log(n,s)}}))}}},2028:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u793a\u4f8b\uff0c\u7528 ",["code","dateCellRender"]," \u548c ",["code","monthCellRender"]," \u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u9700\u8981\u6e32\u67d3\u7684\u6570\u636e\u3002"]],"en-US":[["p","This component can be rendered by using ",["code","dateCellRender"]," and ",["code","monthCellRender"]," with the data you need."]]},meta:{order:1,title:{"zh-CN":"\u901a\u77e5\u4e8b\u9879\u65e5\u5386","en-US":"Notice Calendar"},filename:"components/calendar/demo/notice-calendar.md",id:"components-calendar-demo-notice-calendar"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getListData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> listData<span class="token punctuation">;</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token number">8</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is usual event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is usual event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token number">15</span><span class="token punctuation">:</span>\n      listData <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'warning\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is warning event\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is very long usual event\u3002\u3002....\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 1.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 2.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 3.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'error\'</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string">\'This is error event 4.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> listData <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">dateCellRender</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> listData <span class="token operator">=</span> <span class="token function">getListData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>events<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>\n        listData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getMonthData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">month</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1394</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">monthCellRender</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">getMonthData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> num <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notes-month<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Backlog number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span> <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(35));return n.createElement(s.Calendar,{dateCellRender:function(a){var t=function(n){var s=void 0;switch(n.date()){case 8:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:s=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:s=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event\u3002\u3002...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return s||[]}(a);return n.createElement("ul",{className:"events"},t.map(function(a){return n.createElement("li",{key:a.content},n.createElement(s.Badge,{status:a.type,text:a.content}))}))},monthCellRender:function(s){var a=function(n){if(8===n.month())return 1394}(s);return a?n.createElement("div",{className:"notes-month"},n.createElement("section",null,a),n.createElement("span",null,"Backlog number")):null}})},style:".events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n.notes-month section {\n  font-size: 28px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.events</span> </span><span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.events</span> <span class="token class">.ant-badge-status</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.notes-month</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">28</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.notes-month</span> section </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">28</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},2029:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u901a\u7528\u7684\u65e5\u5386\u9762\u677f\uff0c\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"]],"en-US":[["p","A basic calendar component with Year/Month switch."]]},meta:{order:3,title:{"zh-CN":"\u9009\u62e9\u529f\u80fd","en-US":"Selectable Calendar"},filename:"components/calendar/demo/select.md",id:"components-calendar-demo-select"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Calendar<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2017-01-25\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    selectedValue<span class="token punctuation">:</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'2017-01-25\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n      selectedValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onPanelChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> selectedValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`You selected date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selectedValue <span class="token operator">&amp;&amp;</span> selectedValue<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span></span> <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPanelChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),t=a(35),p=function(n){return n&&n.__esModule?n:{default:n}}(a(36));function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}var o=function(a){function o(){var n,s,a;!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,c=Array(t),u=0;u<t;u++)c[u]=arguments[u];return s=a=e(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(c))),a.state={value:(0,p.default)("2017-01-25"),selectedValue:(0,p.default)("2017-01-25")},a.onSelect=function(n){a.setState({value:n,selectedValue:n})},a.onPanelChange=function(n){a.setState({value:n})},e(a,s)}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(o,n.Component),s(o,[{key:"render",value:function(){var s=this.state,a=s.value,p=s.selectedValue;return n.createElement("div",null,n.createElement(t.Alert,{message:"You selected date: "+(p&&p.format("YYYY-MM-DD"))}),n.createElement(t.Calendar,{value:a,onSelect:this.onSelect,onPanelChange:this.onPanelChange}))}}]),o}();return n.createElement(o,null)}}}});