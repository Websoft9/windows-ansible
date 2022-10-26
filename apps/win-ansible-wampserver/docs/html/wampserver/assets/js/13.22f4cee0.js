(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"empirecms（帝国）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#empirecms（帝国）","aria-hidden":"true"}},[e._v("#")]),e._v(" EmpireCMS（帝国）")]),e._v(" "),r("p",[e._v("本文档可供使用 "),r("strong",[e._v("EmpireCMS 镜像")]),e._v(" 用户参考，也可供准备在 "),r("strong",[e._v("WampServer 镜像")]),e._v(" 上自行部署 EmpireCMS 参考。")]),e._v(" "),r("p",[e._v("EmpireCMS（帝国）（phome.net）是国内著名的开源建站软件（内容管理系统），简单、易用、好用。通过十多年的不断创新与完善，使系统集安全、稳定、强大、灵活于一身。目前帝国程序已经广泛应用在国内上百万家网站，覆盖国内上千万上网人群，并经过上千家知名网站的严格检测，被称为国内安全稳定的开源CMS系统。")]),e._v(" "),r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),r("p",[e._v("在开始 EmpireCMS 的安装部署之前，建议完成如下事情：")]),e._v(" "),r("ul",[r("li",[e._v("浏览器访问："),r("em",[e._v("http://公网ip/9panel")]),e._v(" ，快速了解镜像的使用")]),e._v(" "),r("li",[e._v("查看镜像环境参数，包括："),r("strong",[e._v("目录路径、版本、数据库、虚拟主机配置文件等")]),e._v(" （"),r("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("马上查看"),r("OutboundLink")],1),e._v("）")])]),e._v(" "),r("h2",{attrs:{id:"empirecms-安装到服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#empirecms-安装到服务器","aria-hidden":"true"}},[e._v("#")]),e._v(" EmpireCMS 安装到服务器")]),e._v(" "),r("p",[r("strong",[e._v("如果你使用的是 "),r("em",[e._v("EmpireCMS 镜像")]),e._v("，本节请忽略，直接阅读下一节 【EmpireCMS 初始化安装向导】")])]),e._v(" "),r("p",[e._v("如果你使用的是 WampServer 镜像，请先将 EmpireCMS 安装到服务器，操作步骤如下：")]),e._v(" "),r("ol",[r("li",[e._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),e._v(" "),r("li",[e._v("通过 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("phpMyAdmin 登录 MySQL"),r("OutboundLink")],1),e._v("，为 EmpireCMS 系统增加一个数据库，假如名称为："),r("code",[e._v("empirecms")])]),e._v(" "),r("li",[e._v("到 EmpireCMS 官方"),r("a",{attrs:{href:"http://www.phome.net/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载源码"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("参考"),r("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[e._v("《如何在 WampServer 上增加网站》"),r("OutboundLink")],1),e._v(" ，将 EmpireCMS 安装到服务器的 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WampServer"),r("OutboundLink")],1),e._v(" 环境中")])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"empirecms-初始化安装向导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#empirecms-初始化安装向导","aria-hidden":"true"}},[e._v("#")]),e._v(" EmpireCMS 初始化安装向导")]),e._v(" "),r("ol",[r("li",[e._v("本地浏览器访问："),r("em",[e._v("http://域名")]),e._v(" 或 "),r("em",[e._v("http://公网IP")]),e._v(" 进入安装向导（首选域名访问方式）")]),e._v(" "),r("li",[e._v("首先点击 “我同意”，然后点击“下一步”完成环境检测，检测通过后方可进入后续步骤\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install002-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("进入目录权限检测，检测通过后方可进入后续步骤\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install003-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("填写您的数据库参数（"),r("a",{attrs:{href:"https://support.websoft9.com/docs/wampserver/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看数据库账号密码"),r("OutboundLink")],1),e._v("），点击 “下一步”;\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install004-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("设置您的管理员账号，点击 “下一步”;\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install005-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("恭喜成功安装帝国网站，点击 “进入后台控制面案”（请记住管理地址。为确保服务器安全，可以远程登录后台服务器，将e/install目录删除）;\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install006-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("输入管理员账号，进入管理后台：\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-install007-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("管理后台效果如下：\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-backend-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("初始化内置数据，依据下图顺序分别操作\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/empirecms/empirecms-cacheclear-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("至此，帝国网站管理系统全部安装完毕。")])]),e._v(" "),r("blockquote",[r("p",[e._v("帝国的后台地址：http://域名/e/admin")])]),e._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),r("p",[e._v("下面列出EmpireCMS使用中比较常见的问题以及对应的处理方案")]),e._v(" "),r("h4",{attrs:{id:"后台密码忘记拉，怎么办？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后台密码忘记拉，怎么办？","aria-hidden":"true"}},[e._v("#")]),e._v(" 后台密码忘记拉，怎么办？")]),e._v(" "),r("p",[e._v("用phpmyadmin修改phome_enewsuser表里的记录：把password字段的内容改为：“a024187abaf1c7a6392128a90493e99b”；把salt字段的内容改为：“empire”；把salt2字段的内容改为：“empirecms”. 密码就是：123456")]),e._v(" "),r("h4",{attrs:{id:"全站域名更换说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全站域名更换说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 全站域名更换说明")]),e._v(" "),r("ol",[r("li",[e._v("设置好参数设置的选项．")]),e._v(" "),r("li",[e._v("替换相应的字段值：  方法一：运行＂update phome_ecms_news set newstext=REPLACE(newstext,’原域名’,’新域名’),titlepic=REPLACE(titlepic,’原域名’,’新域名’)＂（说明：news为相应的表）  方法二：后台批量替换字段值即可")])]),e._v(" "),r("h4",{attrs:{id:"数据库配置文件是哪个？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置文件是哪个？","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据库配置文件是哪个？")]),e._v(" "),r("p",[e._v("e/config/config.php")]),e._v(" "),r("h4",{attrs:{id:"用ecms做英文站需要改什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用ecms做英文站需要改什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" 用Ecms做英文站需要改什么？")]),e._v(" "),r("ol",[r("li",[e._v("修改e/data/langauge/gb/pub/目录下的q_message.php与fun.php语言包文件为英文。")]),e._v(" "),r("li",[e._v("前台调用用ecmsinfo万能标签")])])])},[],!1,null,null,null);t.default=a.exports}}]);