## 组件及路径

WampServer部署包中包含了一系列网站运行所需的其他软件（这里称之为组件），下面列出主要组件名称、安装路径、配置文件地址等重要的信息：

### WampServer

WampServer安装目录: C:\websoft9\wampserver

### Apache

Apache 虚拟主机配置文件：C:\websoft9\wampserver\bin\apache\apache2.4.39\conf\extra\httpd-vhosts.conf

Apache 主配置文件： C:\websoft9\wampserver\bin\apache\apache2.4.39\conf\httpd.conf 

Apache 日志文件： C:\websoft9\wampserver\logs\

### MySQL

MySQL 存储目录：C:\websoft9\wampserver\bin\mysql\mysql5.7.26\data

MySQL 配置文件：C:\websoft9\wampserver\bin\mysql\mysql5.7.26\my.ini   

MySQL 日志目录：C:/websoft9/wampserver/logs/mysql.log 

MySQL 可视化管理地址: http://服务器公网IP/phpmyadmin

### MariaDB

### PHP
配置文件路径：C:\websoft9\wampserver\bin\php\php5.6.40\php.ini
             C:\websoft9\wampserver\bin\php\php7.0.33\php.ini
             C:\websoft9\wampserver\bin\php\php7.1.29\php.ini
             C:\websoft9\wampserver\bin\php\php7.2.18\php.ini
             C:\websoft9\wampserver\bin\php\php7.3.5\php.ini

## 端口号

下面是您在使用本镜像过程中，需要用到的端口号，请通过云控制台安全组进行设置

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | http访问端口 | 必须 |
| HTTPS | 443 | https访问端口 | 可选 |
| MySQL | 3306 | MySQL远程连接端口 | 可选 |

## 版本号

组件对应的基本版本号可以通过云市场商品页面查看，但部署到您的服务器之后，版本会有一定的升级，故更为精准的版本请通过在服务器上运行命令查看：

查看安装目录