# 服务启停

使用由Websoft9提供的WampServer部署方案，可能需要用到的服务如下：

> 服务随操作系统自动启动，如果手工修改配置参数后，需要重新启停服务

## 通过 WampServer 管理服务

远程桌面到服务器，点击 WAMPServer 图标，然后点击【重新启动所有服务】，就可以同时重启 Apache, MySQL & MariaDB 服务

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-clicks-websoft9.png)

## 通过 Windows 系统服务 管理服务

远程桌面到服务器，打开 Windows 系统的服务管理工具：【开始菜单】>【管理工具】>【服务】
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-ss-websoft9.png)

- wampapache64 代表的是 Apache 服务
- wampMysql，代表的是 MySQL 服务
- wampMariadb，代表的是 MariaDB 服务