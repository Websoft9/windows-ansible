# SSL/HTTPS

WampServer deployment package has installed the SSL module of Apache for you configure the HTTPS quickly and conveniently.

> In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Apache

## Quick configuration

If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:

1. Upload your certificate to the directory of your instance: *C:\websoft9\wampserverpps\cert* 

2. Enable the ssl module on Apache of WampServer
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-sslenable-websoft9.png)

3. Open the [vhost configuration file (httpd-vhosts.conf)](/stack-components.md#apache)
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-vhost-websoft9.png)

4. Insert the **HTTPS template** into `<VirtualHost *:443>--</VirtualHost>` and modify certificate path
   ``` text
   #-----HTTPS template start------------
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
   #-----HTTPS template end------------
   ```
4. Modify the information related to you ([refer to](/solution-deployment.html#virtualhost)), then save it

5. Save file and [Restart Apache service](/admin-services.md)

## Special Guide

For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the [HTTPS Special Guide](https://support.websoft9.com/docs/faq/tech-https.html#apache) provided by Websoft9 