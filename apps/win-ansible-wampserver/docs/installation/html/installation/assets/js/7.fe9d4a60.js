(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(t,r,s){"use strict";s.r(r);var a=s(0),e=Object(a.a)({},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"drupal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drupal","aria-hidden":"true"}},[t._v("#")]),t._v(" Drupal")]),t._v(" "),s("p",[t._v("本文档可供使用了 "),s("strong",[t._v("Drupal 镜像")]),t._v(" 用户参考，也可以供准备在 "),s("strong",[t._v("WampServer 镜像")]),t._v(" 上自行部署 Drupal 参考。")]),t._v(" "),s("p",[t._v("Drupal（drupal.org）是全球三大开源内容管理系统之一，约3%的网站使用。Drupal也是一个开发框架，逻辑性强、一块块积木，搭起来以后使页面层层分明，它的内核中的有功能强大的PHP类库、函数库和API，能够通过二次化开发来构建复杂多用的企业级应用。Drupal有良好的商业生态，众多高端优质客户使用进一步推动了开源社区的发展。")]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("在开始 Drupal 的安装部署之前，建议完成如下事情：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器访问："),s("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),s("li",[t._v("查看镜像环境参数，包括："),s("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),s("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"drupal-安装到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drupal-安装到服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" Drupal 安装到服务器")]),t._v(" "),s("p",[s("strong",[t._v("如果你使用的是 "),s("em",[t._v("Drupal 镜像")]),t._v("，本节请忽略，直接阅读下一节 【Drupal 初始化安装向导】")])]),t._v(" "),s("p",[t._v("如果你使用的是 WampServer 镜像，请先将 Drupal 安装到服务器，操作步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),s("li",[t._v("通过 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),s("OutboundLink")],1),t._v("，为 Drupal 系统增加一个数据库，假如名称为："),s("code",[t._v("drupal")])]),t._v(" "),s("li",[t._v("到 Drupal 官方"),s("a",{attrs:{href:"https://www.drupal.org/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("参考"),s("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 WampServer 上增加网站》"),s("OutboundLink")],1),t._v(" ，将 Drupal 安装到服务器的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WampServer"),s("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"drupal-初始化安装向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drupal-初始化安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" Drupal 初始化安装向导")]),t._v(" "),s("ol",[s("li",[t._v("本地浏览器访问："),s("em",[t._v("http://域名")]),t._v(" 或 "),s("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）")]),t._v(" "),s("li",[t._v("选择一门语言，进入下一步\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp01.png",alt:""}})]),t._v(" "),s("li",[t._v("选择一种安装方式，进入下一步\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp02.png",alt:""}})]),t._v(" "),s("li",[t._v("填写您的数据库参数（"),s("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),s("OutboundLink")],1),t._v("），保存并继续;\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp03.png",alt:""}})]),t._v(" "),s("li",[t._v("分别完成网站安装和翻译安装")]),t._v(" "),s("li",[t._v("设置网站信息。站点维护账号及后台账号，请务必设置好并牢记之。进入下一步\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp06.png",alt:""}})]),t._v(" "),s("li",[t._v("系统完成最后一步安装\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp08.png",alt:""}})]),t._v(" "),s("li",[t._v("进入Drupal后台，体验完整功能\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/dp09.png",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h4",{attrs:{id:"drupal安装后系统提示如下的安全漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drupal安装后系统提示如下的安全漏洞","aria-hidden":"true"}},[t._v("#")]),t._v(" Drupal安装后系统提示如下的安全漏洞")]),t._v(" "),s("p",[t._v("settings.php 中的 trusted_host_patterns 设置未配置。这可能导致安全漏洞。强烈建议您配置此项。\n解决方案：更多详情请参见 "),s("a",{attrs:{href:"https://www.drupal.org/node/1992030",target:"_blank",rel:"noopener noreferrer"}},[t._v("防止 HTTP HOST 头攻击。"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"如何设置smtp发邮件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设置smtp发邮件？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何设置SMTP发邮件？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Drupal安装完成后首先确认是否已经安装SMTP模块，如下图所示，\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-smtp-1-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("若没有该模块可在"),s("a",{attrs:{href:"http://drupal.org/project/smtp",target:"_blank",rel:"noopener noreferrer"}},[t._v("立即下载"),s("OutboundLink")],1),t._v("。\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-smtp-2-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("按图中所示上传smtp模块，安装完成后还需在"),s("strong",[t._v("扩展")]),t._v("选项里勾选安装"),s("strong",[t._v("SMTP Authentication Support")]),t._v("(有已有则忽略这一步)。\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-smtp-3-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("接下来即可在"),s("strong",[t._v("配置")]),t._v("--"),s("strong",[t._v("SMTP Authentication Support")]),t._v("选项中开始配置smtp服务，按如图填写保存配置。\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-smtp-4-websoft9.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/drupal/drupal-smtp-5-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("至此，drupal的smtp模块配置完成，您现在可以使用drupal的smtp模块收发功能了。")])])])])},[],!1,null,null,null);r.default=e.exports}}]);