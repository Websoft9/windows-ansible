# 参数

WampServer 预装包包含 WampServer 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。

## 路径

### 网站目录

根目录： *WampServer 环境中，你的网站代码存放位置是没有限制的，因此没有根目录的说法*  
网站存放目录（建议）： *C:\websoft9\wampserver\www*  
示例网站目录： *C:\websoft9\wampserver\www\www.example.com*  

> 通过 *http://公网IP地址* 访问的就是示例网站 

### Apache

**Apache 虚拟主机配置文件**： *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\extra\httpd-vhosts.conf*  
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-vhost-websoft9.png)

Apache 主配置文件： *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\httpd.conf*   
Apache 日志文件： *C:\websoft9\wampserver\logs*  
Apache 模块目录： *C:\websoft9\wampserver\bin\apache\apache2.4.x\modules*  

**httpd-vhosts.conf** 默认存在一个 [VirtualHost（虚拟主机）](https://support.websoft9.com/docs/windows/zh/webs-apache.html#虚拟主机) 配置项，对应的就是 **示例网站**
```
<VirtualHost *:80>
ServerName www.mydomain.com
#ServerAlias other.mydomain.com
DocumentRoot "C:\websoft9\wampserver\www\www.example.com"
ErrorLog "logs\www.mydomain.com_error_apache.log"
CustomLog "logs\www.mydomain.com_apache.log" common
<Directory "C:\websoft9\wampserver\www\www.example.com">
   Options Indexes FollowSymlinks
   AllowOverride All
   Require all granted
</Directory>
</VirtualHost>
```

> 有多少个网站，就需要在 **httpd-vhosts.conf** 中增加同等数量的 **VirtualHost** 配置项

### PHP

WampServer 环境支持多个 PHP 版本，每个版本都有对应的 PHP 配置文件。  

PHP 配置文件： *C:\websoft9\wampserver\bin\php\php7.x.x\php.ini*  
PHP 扩展目录： *C:\websoft9\wampserver\bin\php\php7.x.x\ext*   
PHP 扩展配置文件： *C:\websoft9\wampserver\bin\php\php7.x.x\ext\phpForApache.ini*  

PHP 扩展启用或关闭，通过修改 PHP 配置文件实现

### MySQL

MySQL 安装路径：*C:\websoft9\wampserver\bin\mysql*  
MySQL 数据文件：*C:\websoft9\wampserver\bin\mysql\mysql5.x.x\data*  
MySQL 配置文件：*C:\websoft9\wampserver\bin\mysql\mysql5.x.x\my.ini*    
MySQL 可视化管理地址: *http://服务器公网IP/phpmyadmin*，用户名和密码请见 [账号密码](/zh/stack-accounts.md) 章节。

### MariaDB

MariaDB 安装路径：*C:\websoft9\wampserver\bin\mariadb*  
MariaDB 数据文件：*C:\websoft9\wampserver\bin\mariadb\mariad10.x.x\data*  
MariaDB 配置文件：*C:\websoft9\wampserver\bin\mariadb\mariad10.x.x\my.ini*    
MariaDB 可视化管理地址: *http://服务器公网IP/phpmyadmin*，用户名和密码请见 [账号密码](/zh/stack-accounts.md) 章节。

### phpMyAdmin

phpMyAdmin 安装路径: *C:\websoft9\wampserver\apps\phpmyadmin4.x.x*  
phpMyAdmin 配置文件: *C:\websoft9\wampserver\apps\phpmyadmin4.x.x\config.inc.php*   
phpMyAdmin 虚拟主机配置文件: *C:\websoft9\wampserver\alias\phpmyadmin.conf*   

## 端口号

在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

本环境建议开启的端口如下：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | 通过 HTTP 访问网站 | 必须 |
| HTTPS | 443 | 通过 HTTP 访问网站 | 可选 |
| MySQL | 3306 | 本地电脑远程连接服务器上的 MySQL | 可选 |
| MariaDB | 3307 | 本地电脑远程连接服务器上的 MySQL | 可选 |

## 版本号

组件版本号可以通过云市场商品页面查看，更精准的版本号请通过下面的方式获取：

- 在服务器 *C:\websoft9\wampserver* 目录下查看安装目录名称。
- 或通过：*http://服务器公网IP/9panel/tz.php* 查看组件的版本