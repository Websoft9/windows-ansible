(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"故障处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 故障处理")]),t._v(" "),e("p",[t._v("此处收集使用 WAMP 过程中最常见的故障，供您参考")]),t._v(" "),e("blockquote",[e("p",[t._v("大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考"),e("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台文档"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"网站重定向错误？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网站重定向错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站重定向错误？")]),t._v(" "),e("p",[t._v("网站重定向错误比较常见。")]),t._v(" "),e("p",[t._v("处理办法：分析网站根目录下的 "),e("code",[t._v(".htaccess")]),t._v(" 文件，看看有没有死循环规则")]),t._v(" "),e("h4",{attrs:{id:"新增站点报错：you-don-t-have-permission-to-access-on-this-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增站点报错：you-don-t-have-permission-to-access-on-this-server","aria-hidden":"true"}},[t._v("#")]),t._v(" 新增站点报错：You don't have permission to access/on this server")]),t._v(" "),e("p",[t._v("解决办法：")]),t._v(" "),e("ol",[e("li",[t._v("检查网站目录的权限")]),t._v(" "),e("li",[t._v('配置虚拟主机配置文件是否有 "AllowOverride All   Require all granted" 相关内容')])]),t._v(" "),e("h4",{attrs:{id:"如何解决-http-proxy-漏洞？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何解决-http-proxy-漏洞？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何解决 http-proxy 漏洞？")]),t._v(" "),e("p",[t._v("升级 PHP 的小版本即可解决 ttp-proxy 漏洞")]),t._v(" "),e("h4",{attrs:{id:"apache-httpd-服务无法启动？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-服务无法启动？","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache httpd 服务无法启动？")]),t._v(" "),e("p",[t._v("请通过分析日志文件定位原因")]),t._v(" "),e("h4",{attrs:{id:"数据库服务无法启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库服务无法启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库服务无法启动")]),t._v(" "),e("p",[t._v("数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。"),e("br"),t._v("\n建议先通过命令进行排查")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 查看磁盘空间\ndf -lh\n\n# 查看内存使用\nfree -lh\n")])])]),e("h4",{attrs:{id:"数据库日志文件太大，导致磁盘空间不足？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库日志文件太大，导致磁盘空间不足？","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库日志文件太大，导致磁盘空间不足？")]),t._v(" "),e("p",[t._v("默认安装，mysql会自动开启binlog，binlog是一个二进制格式的文件，用于记录用户对数据库"),e("strong",[t._v("更新的"),e("strong",[e("strong",[t._v("SQL语句")])]),t._v("信息")]),t._v("，例如更改数据库表和更改内容的SQL语句都会记录到binlog里。")]),t._v(" "),e("p",[t._v("binlog主要用于出现没有备份的情况下，恢复数据库。但binlog会占用较大空间，长期不清理会让剩余磁盘空间为0，从而影响数据库或服务器无法启动")]),t._v(" "),e("p",[t._v("如果对自己的备份有信心，不需要binlog功能，参考如下步骤关闭之：")]),t._v(" "),e("ol",[e("li",[t._v("编辑 "),e("router-link",{attrs:{to:"/zh/stack-components.html#mysql"}},[t._v("MySQL 配置文件")]),t._v("，注释掉 binlog 日志")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#log-bin=mysql-bin  \n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("重启 MySQL 服务")])]),t._v(" "),e("h4",{attrs:{id:"如何根据-windows-系统日志查看故障原因？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何根据-windows-系统日志查看故障原因？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何根据 Windows 系统日志查看故障原因？")]),t._v(" "),e("p",[t._v("按照下列图中所示，进入到 Windows 系统的"),e("strong",[t._v("事件查看器")]),t._v("，选择 Windows 日志下的应用程序，然后在右侧的事件列表查看出现错误的应用程序，单击即可在下方弹出详细的错误信息，最后就可以根据错误原因来纠正错误。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-eventerror-websoft9-1.png",alt:"event"}}),t._v(" "),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-eventerror-websoft9-2.png",alt:"event"}})]),t._v(" "),e("h4",{attrs:{id:"如何解决端口冲突？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何解决端口冲突？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何解决端口冲突？")]),t._v(" "),e("p",[t._v("默认下，Apache默认端口为80，MySQL默认端口为3306；可以通过cmd控制台输入指令：netstat -ano，查看服务器端口的使用情况。")]),t._v(" "),e("p",[t._v("如果发送端口冲突故障，具体解决方法如下：")]),t._v(" "),e("ol",[e("li",[t._v("找到 Apache 的配置文件（包括 httpd.conf 和站点配置文件），将端口 80 改为其他端口，如：81，然后重启 Apache。\n"),e("strong",[t._v("注意：更改端口后，需要将安全组的对应端口开放出来，否则服务正常启动，但外网依然无法访问网站。")])]),t._v(" "),e("li",[t._v("找到 MySQL 的配置文件 my.ini ，将其中的 port = 3306 改为其他端口，然后重启MySQL服务。")]),t._v(" "),e("li",[t._v("通过 netstat -ano 命令查看是哪个程序或服务占用了 80 或 3306 端口，可根据 PID 到任务管理器或服务列表将其关闭，再重新启动 Apache 和 MySQL。")])])])},[],!1,null,null,null);a.default=s.exports}}]);