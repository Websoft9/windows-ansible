(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{189:function(e,a,t){"use strict";t.r(a);var r=t(0),v=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),t("p",[e._v("WampServer 预装包包含 WampServer 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。")]),e._v(" "),t("h2",{attrs:{id:"路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径","aria-hidden":"true"}},[e._v("#")]),e._v(" 路径")]),e._v(" "),t("h3",{attrs:{id:"网站目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网站目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 网站目录")]),e._v(" "),t("p",[e._v("根目录： "),t("em",[e._v("WampServer 环境中，你的网站代码存放位置是没有限制的，因此没有根目录的说法")]),t("br"),e._v("\n网站存放目录（建议）： "),t("em",[e._v("C:\\websoft9\\wampserver\\www")]),t("br"),e._v("\n示例网站目录： "),t("em",[e._v("C:\\websoft9\\wampserver\\www\\www.example.com")])]),e._v(" "),t("blockquote",[t("p",[e._v("通过 "),t("em",[e._v("http://公网IP地址")]),e._v(" 访问的就是示例网站")])]),e._v(" "),t("h3",{attrs:{id:"apache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),t("p",[t("strong",[e._v("Apache 虚拟主机配置文件")]),e._v("： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\apache\\apache2.4.x\\conf\\extra\\httpd-vhosts.conf")]),t("br"),e._v(" "),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-vhost-websoft9.png",alt:""}})]),e._v(" "),t("p",[e._v("Apache 主配置文件： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\apache\\apache2.4.x\\conf\\httpd.conf")]),t("br"),e._v("\nApache 日志文件： "),t("em",[e._v("C:\\websoft9\\wampserver\\logs")]),t("br"),e._v("\nApache 模块目录： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\apache\\apache2.4.x\\modules")])]),e._v(" "),t("p",[t("strong",[e._v("httpd-vhosts.conf")]),e._v(" 默认存在一个 "),t("a",{attrs:{href:"https://support.websoft9.com/docs/windows/zh/webs-apache.html#%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"}},[e._v("VirtualHost（虚拟主机）"),t("OutboundLink")],1),e._v(" 配置项，对应的就是 "),t("strong",[e._v("示例网站")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<VirtualHost *:80>\nServerName www.mydomain.com\n#ServerAlias other.mydomain.com\nDocumentRoot "C:\\websoft9\\wampserver\\www\\www.example.com"\nErrorLog "logs\\www.mydomain.com_error_apache.log"\nCustomLog "logs\\www.mydomain.com_apache.log" common\n<Directory "C:\\websoft9\\wampserver\\www\\www.example.com">\n   Options Indexes FollowSymlinks\n   AllowOverride All\n   Require all granted\n</Directory>\n</VirtualHost>\n')])])]),t("blockquote",[t("p",[e._v("有多少个网站，就需要在 "),t("strong",[e._v("httpd-vhosts.conf")]),e._v(" 中增加同等数量的 "),t("strong",[e._v("VirtualHost")]),e._v(" 配置项")])]),e._v(" "),t("h3",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),t("p",[e._v("WampServer 环境支持多个 PHP 版本，每个版本都有对应的 PHP 配置文件。")]),e._v(" "),t("p",[e._v("PHP 配置文件： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\php\\php7.x.x\\php.ini")]),t("br"),e._v("\nPHP 扩展目录： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\php\\php7.x.x\\ext")]),t("br"),e._v("\nPHP 扩展配置文件： "),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\php\\php7.x.x\\ext\\phpForApache.ini")])]),e._v(" "),t("p",[e._v("PHP 扩展启用或关闭，通过修改 PHP 配置文件实现")]),e._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),t("p",[e._v("MySQL 安装路径："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mysql")]),t("br"),e._v("\nMySQL 数据文件："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mysql\\mysql5.x.x\\data")]),t("br"),e._v("\nMySQL 配置文件："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mysql\\mysql5.x.x\\my.ini")]),t("br"),e._v("\nMySQL 可视化管理地址: "),t("em",[e._v("http://服务器公网IP/phpmyadmin")]),e._v("，用户名和密码请见 "),t("router-link",{attrs:{to:"/zh/stack-accounts.html"}},[e._v("账号密码")]),e._v(" 章节。")],1),e._v(" "),t("h3",{attrs:{id:"mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb","aria-hidden":"true"}},[e._v("#")]),e._v(" MariaDB")]),e._v(" "),t("p",[e._v("MariaDB 安装路径："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mariadb")]),t("br"),e._v("\nMariaDB 数据文件："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mariadb\\mariad10.x.x\\data")]),t("br"),e._v("\nMariaDB 配置文件："),t("em",[e._v("C:\\websoft9\\wampserver\\bin\\mariadb\\mariad10.x.x\\my.ini")]),t("br"),e._v("\nMariaDB 可视化管理地址: "),t("em",[e._v("http://服务器公网IP/phpmyadmin")]),e._v("，用户名和密码请见 "),t("router-link",{attrs:{to:"/zh/stack-accounts.html"}},[e._v("账号密码")]),e._v(" 章节。")],1),e._v(" "),t("h3",{attrs:{id:"phpmyadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),t("p",[e._v("phpMyAdmin 安装路径: "),t("em",[e._v("C:\\websoft9\\wampserver\\apps\\phpmyadmin4.x.x")]),t("br"),e._v("\nphpMyAdmin 配置文件: "),t("em",[e._v("C:\\websoft9\\wampserver\\apps\\phpmyadmin4.x.x\\config.inc.php")]),t("br"),e._v("\nphpMyAdmin 虚拟主机配置文件: "),t("em",[e._v("C:\\websoft9\\wampserver\\alias\\phpmyadmin.conf")])]),e._v(" "),t("h2",{attrs:{id:"端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口号","aria-hidden":"true"}},[e._v("#")]),e._v(" 端口号")]),e._v(" "),t("p",[e._v("在云服务器中，通过 "),t("strong",[t("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("安全组设置"),t("OutboundLink")],1)]),e._v(" 来控制（开启或关闭）端口是否可以被外部访问。")]),e._v(" "),t("p",[e._v("本环境建议开启的端口如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("端口号")]),e._v(" "),t("th",[e._v("用途")]),e._v(" "),t("th",[e._v("必要性")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("HTTP")]),e._v(" "),t("td",[e._v("80")]),e._v(" "),t("td",[e._v("通过 HTTP 访问网站")]),e._v(" "),t("td",[e._v("必须")])]),e._v(" "),t("tr",[t("td",[e._v("HTTPS")]),e._v(" "),t("td",[e._v("443")]),e._v(" "),t("td",[e._v("通过 HTTP 访问网站")]),e._v(" "),t("td",[e._v("可选")])]),e._v(" "),t("tr",[t("td",[e._v("MySQL")]),e._v(" "),t("td",[e._v("3306")]),e._v(" "),t("td",[e._v("本地电脑远程连接服务器上的 MySQL")]),e._v(" "),t("td",[e._v("可选")])]),e._v(" "),t("tr",[t("td",[e._v("MariaDB")]),e._v(" "),t("td",[e._v("3307")]),e._v(" "),t("td",[e._v("本地电脑远程连接服务器上的 MySQL")]),e._v(" "),t("td",[e._v("可选")])])])]),e._v(" "),t("h2",{attrs:{id:"版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本号","aria-hidden":"true"}},[e._v("#")]),e._v(" 版本号")]),e._v(" "),t("p",[e._v("组件版本号可以通过云市场商品页面查看，更精准的版本号请通过下面的方式获取：")]),e._v(" "),t("ul",[t("li",[e._v("在服务器 "),t("em",[e._v("C:\\websoft9\\wampserver")]),e._v(" 目录下查看安装目录名称。")]),e._v(" "),t("li",[e._v("或通过："),t("em",[e._v("http://服务器公网IP/9panel/tz.php")]),e._v(" 查看组件的版本")])])])},[],!1,null,null,null);a.default=v.exports}}]);