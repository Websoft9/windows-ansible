# 初始化安装

在云服务器上部署 SQLServer 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:1433** 端口是否开启
3. 若想用域名访问 SQLServer，请先到 **域名控制台** 完成一个域名解析

## SQLServer 安装向导

1. 使用本地电脑的 **远程桌面**工具，登录到服务器
2. 打开桌面上的 **SQLServer企业管理器**工具，在【服务器名称】中通过【浏览更多...】选择服务器，并以【Windows身份】登录数据库
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-getsqlserver-websoft9.png)
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-getsqlserver2-websoft9.png)
   
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-winlogin-websoft9.png)
   
3. 开启 SQL Server 账号登录模式，用于远程访问（服务器需开通1433端口）
   - 在服务器的安全性中开启SQL Server 服务器身份验证模式：右键单击服务器，通过【属性】-【安全性】，选择服务器身份验证模式
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-winlogin-pw1-websoft9.png)
   
   - 启用 sa 账户，并设置密码：依次展开【安全性】、【登录名】，找到默认登录名【sa】，右键【属性】，在弹出的窗口中点击【状态】，将登录选项选择【已启用】，也可以在【常规】选项卡里设置你的登录密码，点击确认保存.
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-winlogin-pw2-websoft9.png)
 
4. 重启 SQL Server 服务，使配置生效，使用 SQL Server 身份验证登录数据库。打开**SQL Server 配置管理器**工具，重启 SQL Server 服务。
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-config-websoft9.png)
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-restart-websoft9.png)

> 需要了解更多 SQLServer 的使用，请参考官方文档：[SQL Server 技术文档](https://docs.microsoft.com/zh-cn/sql/sql-server)

## 常见问题

#### 本部署方案数据库默认密码是多少？

为了安全考虑，本部署方案没有创建SQLServer的登录密码。请参考安装向导，手动开启【SQL Server账号登录】

#### SQLServer 服务启动失败？

请检查服务器名称是否正确：在【服务器名称】中通过【浏览更多...】选择正确的服务器

#### SQLServer 远程登录失败（服务器需开通1433端口）

1. 打开**SQLServer企业管理器**工具，在服务器【连接】属性中，勾选【允许远程连接到本服务器】
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-remote1-websoft9.png)
   
2. 打开**SQL Server 配置管理器**工具，在网络配置中，启用【TCP/IP】协议
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-remote2-websoft9.png)
   
3. 打开**SQL Server 配置管理器**工具，重启 SQL Server 服务。
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/sqlserver/sqlserver-restart-websoft9.png)
