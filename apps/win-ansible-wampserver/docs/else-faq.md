# FAQ

#### What is the default character set?
UTF-8

#### Apache working mode has event, prefork, worker, etc. Which is WampServer default?
Prefork

#### What is the Apache vhost configuration file?
The Apache vhost configuration file is the function for Apache to manage multiple applications. It's path is: *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\extra\httpd-vhosts.conf*.
There have `<VirtualHost *:80> ...</VirtualHost>` , each segment is corresponding to a application

#### How to modify the path of example application?

Example application's path is: *C:\websoft9\wampserver\www*, you can modify it by [Apache vhost configuration file](/stack-components.md#apache)

#### Does the WampServer support deploying multiple applications?

Yes, add new application, you should add new VirtualHost segment in the file [Apache vhost configuration file](/stack-components.md#apache) for it

#### If there is no domain name, can I deploy WampServer?

Yes, visit WampServer by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

Yes, phpMyAdmin is on it, visit by *http://Internet IP/phpmyadmin*

#### How to disable phpMyAdmin access?

Edit the  [phpMyAdmin configuration file](/stack-components.md#phpmyadmin), replace `Require all granted` with `Require ip 192.160.1.0`, then restart Apache service

#### Is it possible to modify the code source path?

Yes, modify it by [Apache vhost configuration file](/stack-components.md#apache)

#### How to delete 9Panel?

Please delete all files in 9Panel *C:\websoft9\wampserver\apps\9panel* and keep an empty 9Panel folder

#### Do I need to change the owner(group) for the files which I upload by SFTP?

No, you don't need to change them because WampServer Image have change it automaticly

#### How to set HTTP redirect to HTTPS automatically?

Copy these Rewrite rules in the file *.htacesss* on your root directory of application:
```
RewriteEngine on
RewriteBase /
RewriteCond %{SERVER_PORT} !^443$
RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R]
```
#### How to enable or disable Apache module?

You can configure thi by WampServer console

#### How to disable IP access my application?

Refer to the docs [Apache configuration](https://support.websoft9.com/docs/windows/webs-apache.html#disable-ip-access)

#### Is there a domain name that can be accessed via http://public IP/mysite1?

Yes, refer to the docs [Deploy a PHP application](/solution-deployment.html#deploy-second-application)

#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers