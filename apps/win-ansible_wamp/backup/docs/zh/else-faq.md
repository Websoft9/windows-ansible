# FAQ

#### 默认字符集是什么？
UTF-8

#### Apache工作模式有event,prefork,worker等，WAMP 默认是哪个？
prefork

#### Apache 虚拟主机配置文件是什么？

虚拟主机配置文件是 Apache 用于管理多个网站的**配置段集合**，路径为：*C:\websoft9\wampstack\apache2\conf\bitnami\bitnami-apps-vhosts.conf*。  
每个配置段的形式为： `<VirtualHost *:80> ...</VirtualHost>`，有多少个网站就有多少个配置段

#### 如何修改示例网站根目录？

示例网站路径信息 *C:\wwwroot* 存放在 [Apache 虚拟主机配置文件](/zh/stack-components.md#apache)中

#### WAMP 环境是否支持部署多个网站？

支持。每增加一个网站，只需在[Apache 虚拟主机配置文件](/zh/stack-components.md#apache)中增加对应的  VirtualHost 即可。

#### 如何设置 phpMyAdmin 只允许在127.0.0.1访问？

镜像默认开启了 phpMyAdmin 远程访问，若想关闭之，请修改：*C:\websoft9\wampstack\apps\phpmyadmin\conf\httpd-vhosts.conf* 

找到如下 `<ifDefine APACHE24>...</ifDefine>` 配置项 

```
  <ifDefine APACHE24>
		#Require local
		Require all granted
	</ifDefine>
  
  修改成

  <ifDefine APACHE24>
		Require local
		#Require all granted
	</ifDefine>
```

#### 如何禁止外界访问phpMyAdmin？

连接服务器，编辑 [phpMyAdmin 配置文件](/zh/stack-components.md#phpmyadmin)，将其中的 `Require all granted` 更改为 `Require ip 192.160.1.0`，然后重启 Apache 服务

修改后[重启 WAMP 所有服务](/zh/admin-services.md)后生效

#### 如果没有域名是否可以部署 WAMP？

可以，访问`http://服务器公网IP` 即可

#### 数据库 root 用户对应的密码是多少？

密码存放在服务器相关文件中：`/credentials/password.txt`

#### 是否有可视化的数据库管理工具？

有，内置phpMyAdmin，访问地址：*http://服务器公网IP/phpmyadmin*

#### 网站源码路径如何修改？

通过修改 [Apache 虚拟主机配置文件](/zh/stack-components.md#apache) 中相关路径参数

#### 如何删除9Panel?

删除 */data/apps/9panel* 下的所有数据即可，但需要保留文件夹

#### 通过 SFTP 上传网站源码后是否需要修改拥有者权限？

不需要，WAMP 会自动修正

#### 如果设置 HTTP 跳转到 HTTPS？

建议在网站根目录下的.htacesss文件中增加redirect规则，参考如下：
```
RewriteEngine on
RewriteBase /
RewriteCond %{SERVER_PORT} !^443$
RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R]
```
#### WAMP 默认安装了哪些 Apache模块？ 

可以通过 WAMP 可视化界面查看

#### WAMP 默认安装了哪些 PHP 模块？

可以通过 WAMP 可视化界面查看

#### 如何启用或禁用 Apache 模块？

可以通过 WAMP 可视化界面设置

#### 如何禁用IP访问网站，防止恶意解析？

参考 [Apache 相关配置文档](https://support.websoft9.com/docs/windows/zh/webs-apache.html#禁用ip访问-防止恶意解析)

#### 没有域名是否可以通过 http://公网IP/mysite1 这样的方式访问网站？

可以。具体配置方法参考 [安装网站](/zh/solution-deployment.md#安装第二个网站)

#### 部署和安装有什么区别？

部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。  
安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。  
安装相对于部署来说更简单一些。 

#### 云平台是什么意思？

云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等

#### 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？

没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器