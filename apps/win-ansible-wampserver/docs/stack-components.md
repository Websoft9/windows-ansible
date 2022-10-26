# Parameters

The WampServer deployment package contains a sequence software (referred to as "components") required for WampServer to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### Directories for Application

Suggested directory: *C:\websoft9\wampserver\www*  
Example application directory: *C:\websoft9\wampserver\www\www.example.com*  

> The URL: *http://Internet IP* will access the example application

### Apache

**Apache vhost configuration file**: *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\extra\httpd-vhosts.conf*    
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-vhost-websoft9.png)

Apache main configuration file: *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\httpd.conf*   
Apache logs file: *C:\websoft9\wampserver\logs*  
Apache module directory: *C:\websoft9\wampserver\bin\apache\apache2.4.x\modules*    

**httpd-vhosts.conf** includes one [VirtualHost](https://support.websoft9.com/docs/linux/webs-apache.html#vhost) configuration items whitch matched the **Example application**
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

> How many websites you need, you should add the same number of VirtualHost to **httpd-vhosts.conf**

### PHP

The WampServer environment supports multiple PHP versions, each with a corresponding PHP configuration file.

PHP configuration file: *C:\websoft9\wampserver\bin\php\php7.x.x\php.ini*   
PHP extension directory: *C:\websoft9\wampserver\bin\php\php7.x.x\ext*  
PHP extension configuration file: *C:\websoft9\wampserver\bin\php\php7.x.x\ext\phpForApache.ini*  

PHP extensions are enabled or disabled by modifying the PHP configuration file

### MySQL

MySQL installation directory: *C:\websoft9\wampserver\bin\mysql*  
MySQL data directory: *C:\websoft9\wampserver\bin\mysql\mysql5.x.x\data*  
MySQL configuration file: *C:\websoft9\wampserver\bin\mysql\mysql5.x.x\my.ini*    
MySQL Web Management URL: *http://Internet IP/9panel*, get credential from [Username and Password](/stack-accounts.md)

### MariaDB

MariaDB installation directory: *C:\websoft9\wampserver\bin\mariadb*  
MariaDB data directory: *C:\websoft9\wampserver\bin\mariadb\mariad10.x.x\data*  
MariaDB configuration file: *C:\websoft9\wampserver\bin\mariadb\mariad10.x.x\my.ini*    
MariaDB Web Management URL: *http://Internet IP/9panel*, get credential from [Username and Password](/stack-accounts.md)

### phpMyAdmin

phpMyAdmin installation directory: *C:\websoft9\wampserver\apps\phpmyadmin4.x.x*  
phpMyAdmin configuration file: *C:\websoft9\wampserver\apps\phpmyadmin4.x.x\config.inc.php*  
phpMyAdmin vhost configuration file: *C:\websoft9\wampserver\alias\phpmyadmin.conf*  

## Ports

You can control(open or shut down) ports by **[Security Group Setting](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** of your Cloud Server whether the port can be accessed from Internet.

These ports should be opened for this application:

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| HTTP | 80 | HTTP requests for WampServer | Required |
| HTTPS | 443 | HTTPS requests WampServer | Optional |
| MySQL | 3306 | Remote connect MySQL | Optional |
| MariaDB | 3307 | Remote connect MariaDB | Optional |

## Version

You can see the version from product page of Marketplace, for a more accurate version number, please obtain the following method:

- Go to the directory *C:\websoft9\wampserver* on your Server, the folder name includes version number  
- Visit URL: *http://Internet IP/9panel/tz.php*  to view the components version number