# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

From the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

WampServer domain name binding steps:

1. Make sure your domain resolution is effective
2. Connect your Cloud Server
2. Modify [Apache vhost configuration file](/stack-components.md#apache), change the **ServerName**'s value to your domain name
   ```text
   <VirtualHost *:80>
   ServerName www.mydomain.com # modify it to your domain name
   DocumentRoot "/data/wwwroot/mysite2"
   ...
   ```
3. Save it and restart [Apache Service](/admin-services.md)


## Use Rewrite

Three steps to use rewrite for your application:

1. Check the [Apache vhost configuration file](/stack-components.md#apache) to make sure that the Rewrite Module is enabled
   > Rewrite was enabled by default on WampServer
   ```
    LoadModule rewrite_module modules/mod_rewrite.so
   ```
2. Add the *AllowOverride All* to your VirtualHost in the file of [Apache vhost configuration file](/stack-components.md#apache)
3. Add the **rewrite rules** in the root directory of your application

## Reset MySQL *root* password

The principle of resetting the MySQL password is mainly divided into three parts.

1. Change MySQL to temporary no password mode
2. Modify password
3. Restore MySQL to normal mode

### Change MySQL to temporary no password mode

1. Connect Server, open [MySQL configuration file](/stack-components.html#mysql)， add one line `skip-grant-tables` in the item **[mysqld]**, save it 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-addconfigtomysqld-websoft9.png)

2. Restart MySQL service  
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-ss-websoft9.png)

### Modify password

- Go to the `bin` directory of MySQL, Hold down the keyboard `Shift` and click the right mouse button.
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-opencmdinbin-websoft9.png)

- Enter the command window and run the following commands in order:
   ```
    mysql -uroot
    use mysql;
    update user set authentication_string=password("12345678") where user="root";
    flush privileges;
    exit
   ```

### Restore MySQL to normal mode

1. Connect Server, open [MySQL configuration file](/stack-components.html#mysql)， delete one line `skip-grant-tables` in the item **[mysqld]**, save it 
2. Restart MySQL service, at this time you password is `12345678`

## Modify the php.ini

When you want to modify The PHP File Upload Limit, Max Execution Time, Memory Limit...for example:

1. Connect your Server, modify the *[php.ini](stack-components.html#php)* 
```
# File upload limit
post_max_size = 16M
upload_max_filesize = 16M

# Max Execution Time
max_execution_time = 90

# Memory Limit
memory_limit – Minimum: 256M
```
2. Save it and restart [Apache Service](/admin-services.md#apache)

In addition to editing the php.ini file directly, you can also modify the PHP configuration file through the graphical interface of WampServer.
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-phpini-websoft9.png)

## PHP Version change

Open the 【WAMPServer】>【PHP】>【Version】, select the version you want to use

![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-phpini-websoft9.png)

## PHP extension

The general steps for installing and managing PHP extensions on WampServer are as follows:

1. Download the correct PHP extension package([note](https://www.php.net/manual/zh/install.pecl.windows.php)), unzip it and upload to the [extension's directory](/stack-components.md#php)

2. Enable or disable extension

   - Set up with the WampServer GUI
     ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-setphpexts-websoft9.png)
   
   - By modifying the [php.ini](/stack-components.md#php)
     ```
     extension=php_bz2.dll
     ;extension=php_com_dotnet.dll
     ```

There are some differences between different PHP extension installations, which are subject to the documentation provided by the extension.