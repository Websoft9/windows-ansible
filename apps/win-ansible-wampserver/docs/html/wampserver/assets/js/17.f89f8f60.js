(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{206:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploy-a-php-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-php-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy a PHP application")]),e._v(" "),o("p",[e._v("To deploy PHP application on WampServer, you need to add "),o("strong",[e._v("VirtualHost")]),e._v(" for it")]),e._v(" "),o("p",[e._v("Overall, just need two steps:")]),e._v(" "),o("ol",[o("li",[e._v("Upload source codes of applicaiton")]),e._v(" "),o("li",[e._v("Add new VirtualHost in the file "),o("router-link",{attrs:{to:"/stack-components.html#apache"}},[e._v("Apache vhost configuration file (httpd-vhosts.conf)")])],1)]),e._v(" "),o("blockquote",[o("p",[e._v("VirtualHost is vhost configuration segment. Each application must correspond to a unique VirtualHost in "),o("strong",[e._v("httpd-vhosts.conf")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"prepare"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prepare","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare")]),e._v(" "),o("p",[e._v("To deploy PHP application on WampServer, you need to know the followings:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Vhost Configuration File")]),e._v(": "),o("em",[e._v("C:\\websoft9\\wampserver\\bin\\apache\\apache2.4.x\\conf\\extra\\httpd-vhosts.conf")])]),e._v(" "),o("li",[o("strong",[e._v("Tools")]),e._v(": Using "),o("strong",[e._v("Remote Desktop")]),e._v(" to connect Server and manage files")]),e._v(" "),o("li",[o("strong",[e._v("Domain Name")]),e._v(": If you want to use Domain you must complete the Domain revolution before")]),e._v(" "),o("li",[o("strong",[e._v("Database")]),e._v(":  Use "),o("router-link",{attrs:{to:"/admin-mysql.html"}},[e._v("phpMyAdmin")]),e._v(" to manage database if need")],1)]),e._v(" "),o("p",[e._v("Once you have a overall, you can start you application deployment now")]),e._v(" "),o("h2",{attrs:{id:"deploy-fisrt-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-fisrt-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy fisrt application")]),e._v(" "),o("p",[e._v("There is a example application in WampServer, we sugget you to "),o("strong",[e._v("replace the example application")]),e._v(" for deploy first application:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Use "),o("strong",[e._v("Remote Desktop")]),e._v(" to connect Cloud Server")])]),e._v(" "),o("li",[o("p",[e._v("Delete all files in the directory "),o("em",[e._v("C:\\websoft9\\wampserver\\www\\www.example.com")]),e._v(", but don't delete "),o("em",[e._v("www.example.com")]),e._v(" folder\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-exadr-websoft9.png",alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("Upload your application's codes to the folder: "),o("em",[e._v("www.example.com")])])]),e._v(" "),o("li",[o("p",[e._v("Modify the  "),o("code",[e._v("<VirtualHost *:80>...</VirtualHost>")]),e._v(" segment ("),o("router-link",{attrs:{to:"/solution-deployment.html#virtualhost"}},[e._v("refer to")]),e._v(") in the file "),o("em",[e._v("httpd-vhosts.conf")]),e._v(" if you want to bind domain or modify folder name\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-mddfvhost-websoft9.png",alt:""}})],1),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",[e._v("If you do not bind the domain and do not modify the directory name, skip steps 4 and 5.")])])]),e._v(" "),o("li",[o("p",[e._v("Save the file "),o("em",[e._v("httpd-vhosts.conf")]),e._v(" and then "),o("router-link",{attrs:{to:"/admin-services.html"}},[e._v("Restart all Service")])],1)]),e._v(" "),o("li",[o("p",[e._v("Using the Chrome or Firefox to visit: "),o("em",[e._v("http://domain")]),e._v(" or "),o("em",[e._v("http://IP/mysite2")]),e._v(" to visit your application")])])]),e._v(" "),o("h2",{attrs:{id:"deploy-second-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-second-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy second application")]),e._v(" "),o("p",[e._v("Start to deploy the second application, you should add new "),o("code",[e._v("<VirtualHost *:80>...</VirtualHost>")]),e._v(" segment to the file "),o("em",[e._v("httpd-vhosts")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v('Connect Cloud Server, then create a new folder named "mysite2" to the directory '),o("em",[e._v("C:\\websoft9\\wampserver\\www")]),e._v(" "),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-addmysite2-websoft9.png",alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("Upload your application's codes to the folder: "),o("em",[e._v("C:\\websoft9\\wampserver\\www\\mysite2")])])]),e._v(" "),o("li",[o("p",[e._v("Edite the file "),o("em",[e._v("httpd-vhosts")]),e._v(" "),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-addmorevhostconfig-websoft9.png",alt:""}})]),e._v(" "),o("p",[e._v("Have domain or no domain, Choose one of the options below:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Have domain, you can visit application by "),o("em",[e._v("http://domain/")])])])]),e._v(" "),o("p",[e._v("Please copy the "),o("strong",[e._v("VirtualHost")]),e._v(" below to "),o("em",[e._v("httpd-vhosts")]),e._v(", and modify the "),o("strong",[e._v("ServerName, DocumentRoot, ErrorLog, CusomLog, Directory")])]),e._v(" "),o("pre",[o("code",[e._v('```\n#-----HTTP template start------------\n<VirtualHost *:80>\nServerName www.mydomain.com\n# ServerAlias other.mydomain.com\nDocumentRoot "C:\\websoft9\\wampserver\\www\\mysite2"\nErrorLog "logs\\mydomain.com_error_apache.log"\nCustomLog "logs\\mydomain.com_error_apache.log" common\n<Directory "C:\\websoft9\\wampserver\\www\\mysite2">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\n</VirtualHost>\n#-----HTTP template start------------\n ```\n')])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("No domain, you can visit application by "),o("em",[e._v("http://IP/mysite2")])])])]),e._v(" "),o("p",[e._v("Please copy the "),o("strong",[e._v("Alias template")]),e._v(" below to "),o("em",[e._v("httpd-vhosts")]),e._v(", and modify the "),o("strong",[e._v("/path, Directory")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Alias /sitename C:\\websoft9\\wampserver\\www\\mysite2\n<Directory "/data/wwwroot/mysite2">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\n')])])])]),e._v(" "),o("li",[o("p",[e._v("Save the file "),o("em",[e._v("httpd-vhosts")]),e._v(" and then "),o("router-link",{attrs:{to:"/admin-services.html"}},[e._v("Restart all Service")])],1)]),e._v(" "),o("li",[o("p",[e._v("Using the Chrome or Firefox to visit: "),o("em",[e._v("http://domain")]),e._v(" or "),o("em",[e._v("http://IP/sitename")]),e._v(" to visit your application")])])]),e._v(" "),o("h2",{attrs:{id:"deploy-more-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-more-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy more application")]),e._v(" "),o("p",[o("strong",[e._v("Deploy more application")]),e._v(" is the same with "),o("strong",[e._v("Deploy second application")])]),e._v(" "),o("p",[e._v("Finally, we know the new and summarize the steps of the WampServer deployment site:")]),e._v(" "),o("ol",[o("li",[e._v("Upload the website code")]),e._v(" "),o("li",[e._v("Bind the domain name (not necessary)")]),e._v(" "),o("li",[e._v("Add the site configuration or modify the sample site configuration")]),e._v(" "),o("li",[e._v("Increase the database corresponding to the site (not necessary)")]),e._v(" "),o("li",[e._v("Enter the installation wizard")])]),e._v(" "),o("h2",{attrs:{id:"virtualhost"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtualhost","aria-hidden":"true"}},[e._v("#")]),e._v(" VirtualHost")]),e._v(" "),o("p",[e._v("All items in the VirtualHost must be correct, any error may cause Apache can't start and applicaiton not accessible")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("VirtualHost Item")]),e._v(" "),o("th",[e._v("Use")]),e._v(" "),o("th",[e._v("Necessity")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("ServerName")]),e._v(" "),o("td",[e._v("Primary domain")]),e._v(" "),o("td",[e._v("Required")])]),e._v(" "),o("tr",[o("td",[e._v("ServerAlias")]),e._v(" "),o("td",[e._v("Sencond")]),e._v(" "),o("td",[e._v("Optional")])]),e._v(" "),o("tr",[o("td",[e._v("DocumentRoot")]),e._v(" "),o("td",[e._v("The real website storage directory")]),e._v(" "),o("td",[e._v("Required and must be correct")])]),e._v(" "),o("tr",[o("td",[e._v("Directory")]),e._v(" "),o("td",[e._v("The real website storage directory")]),e._v(" "),o("td",[e._v("Required and must be correct")])]),e._v(" "),o("tr",[o("td",[e._v("ErrorLog")]),e._v(" "),o("td",[e._v("error logs directory")]),e._v(" "),o("td",[e._v("Suggestion")])]),e._v(" "),o("tr",[o("td",[e._v("CustomLog")]),e._v(" "),o("td",[e._v("visit logs directory")]),e._v(" "),o("td",[e._v("Suggestion")])])])]),e._v(" "),o("h2",{attrs:{id:"q-a"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#q-a","aria-hidden":"true"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),o("h4",{attrs:{id:"i-can-t-restart-apache-service-after-modify-the-httpd-vhosts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-can-t-restart-apache-service-after-modify-the-httpd-vhosts","aria-hidden":"true"}},[e._v("#")]),e._v(" I can't restart Apache service after modify the "),o("em",[e._v("httpd-vhosts")]),e._v("?")]),e._v(" "),o("p",[e._v("Check the application directory items in the segement of your "),o("em",[e._v("VirtualHost")])]),e._v(" "),o("h4",{attrs:{id:"i-can-t-visit-my-new-deployment-and-all-applications-on-my-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-can-t-visit-my-new-deployment-and-all-applications-on-my-server","aria-hidden":"true"}},[e._v("#")]),e._v(" I can't visit my new deployment and all applications on my Server")]),e._v(" "),o("p",[e._v("Check the application directory items in the segement of your "),o("em",[e._v("VirtualHost")])]),e._v(" "),o("h4",{attrs:{id:"_404-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_404-error","aria-hidden":"true"}},[e._v("#")]),e._v(" 404 error?")]),e._v(" "),o("p",[e._v("Please make sure that the "),o("em",[e._v("index.php")]),e._v(" or "),o("em",[e._v("index.html")]),e._v(" was included in the your application's direcotory")]),e._v(" "),o("h4",{attrs:{id:"_500-internal-server-error？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error？","aria-hidden":"true"}},[e._v("#")]),e._v(" 500 Internal Server Error？")]),e._v(" "),o("p",[e._v("The program code is wrong, you need to analyze the program's log file.")]),e._v(" "),o("h4",{attrs:{id:"always-show-9panel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#always-show-9panel","aria-hidden":"true"}},[e._v("#")]),e._v(" Always show 9Panel?")]),e._v(" "),o("p",[e._v("Please delete the index file in the example and clear the browser cache of your local computer")])])},[],!1,null,null,null);t.default=r.exports}}]);