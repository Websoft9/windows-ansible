# SSL/HTTPS

网站完成域名绑定且可以通过HTTP访问之后，方可设置HTTPS。

WampServer预装包，已安装Web服务器 Win64OpenSSL 模块，并完成预配置。

> 除了虚拟主机配置文件之外，HTTPS设置无需修改 Apache 任何文件

## 设置参考

如果你已经申请了商业证书，只需几步，即可完成HTTPS配置

1. 将申请的证书、秘钥文件上传到 *C:\websoft9\wampserverpps\cert* 目录
2. 确保 WampServer的 Apache 的 Open-SSL 模块已被启用 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-sslenable-websoft9.png)
3. 打开 httpd-vhosts.conf（虚拟主机配置配置文件） 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-vhost-websoft9.png)
6. 将下面的 HTTPS 配置文件模板（<VirtualHost *:443>...</VirtualHost>），增加到 httpd-vhosts.conf 文件中(不能删除原有内容)

    ```
    <VirtualHost *:443>
    ServerName  www.mydomain.com
    DocumentRoot "C:\websoft9\wampserver\www"
    <Directory "C:\websoft9\wampserver\www">
    Options Indexes FollowSymlinks
    AllowOverride All
    Require all granted
    </Directory>
    SSLEngine on
    SSLCertificateFile  "C:\websoft9\wampserverpps\cert\cert.pem"
    SSLCertificateKeyFile  "C:\websoft9\wampserverpps\cert\key.pem"
    SSLCertificateChainFile  "C:\websoft9\wampserverpps\cert\chain.pem"
    </VirtualHost>
    ```

7. 修改其中的 ServerName, DocumentRoot, ErrorLog, CusomLog, Directory等项的值（[修改参考](/zh/solution-deployment.html#virtualhost)），修改完成后保存

8. 重启所有服务 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-clicks-websoft9.png)

## 更多指南

若参考上面的**设置参考**仍无法成功设置HTTPS访问，请阅读由Websoft9提供的 [《HTTPS 专题指南》](https://support.websoft9.com/docs/faq/zh/tech-https.html#apache)

HTTPS专题指南方案包括：HTTPS前置条件、HTTPS 配置段模板、注意事项、详细步骤以及故障诊断等具体方案。