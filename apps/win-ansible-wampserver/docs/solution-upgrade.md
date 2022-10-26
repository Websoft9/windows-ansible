# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For WampServer maintenance, focus on the following two Update & Upgrade jobs

- Windows Sytem update
- PHP, Apache, MySQL Version Upgrade

## Windows System Update

The update of the Windows server is similar to that of the local computer. Manually find the update management program and set the automatic download automatic update.

## PHP Update

For example, upgrading from PHP7.0.29 to PHP7.0.31:

1. Left click on the WampServer icon in the lower right corner of the taskbar to stop all services

2. Visit [php.net](https://windows.php.net/download/) to download the latest PHP 
   > Note: The downloaded file is a zip file and you must select the **Thread Safe** version.
   	![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wamp/wampserver-phpupdate-1-websoft9.png)

3. Backup the folder *C:\websoft9\wampserver\bin\php\php7.0.29* and delete it, then uzip the the package you have download and rename the folder to *php7.0.31*

4. Raname the *php.ini-production* to *php.ini*

5. Edit the Apache main configuration file *C:\websoft9\wampserver\bin\apache\apache2.4.33\conf\httpd.conf* 
   ```
   LoadModule php7_module "C:/websoft9/wampserver/bin/php/php7.0.29/php7apache2_4.dll

   modify to

   LoadModule php7_module "C:/websoft9/wampserver/bin/php/php7.0.31/php7apache2_4.dll
   ```

6. [Restart all service](/admin-services.md)

## Apache Update
Coming soon...

## MySQL Update
Coming soon...

## Q&A

#### Is this Image support MySQL5.6 upgrade to MySQL5.7?
No,you can upgrade the same version, E.g 5.6.x to 5.6.y or  5.7.x to 5.7.y

#### Is support PHP7.0 upgrade to PHP7.2?
The official website of WampServer have no solution for this

#### Is support PHP7.2 downgrade PHP7.0?
No

#### What should I do before upgrade?
You should backup all your data
