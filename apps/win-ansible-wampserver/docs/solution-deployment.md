# Deploy a PHP application

To deploy PHP application on WampServer, you need to add **VirtualHost** for it

Overall, just need two steps: 
1. Upload source codes of applicaiton
2. Add new VirtualHost in the file [Apache vhost configuration file (httpd-vhosts.conf)](/stack-components.md#apache) 

> VirtualHost is vhost configuration segment. Each application must correspond to a unique VirtualHost in **httpd-vhosts.conf**.

## Prepare

To deploy PHP application on WampServer, you need to know the followings:

*  **Vhost Configuration File**: *C:\websoft9\wampserver\bin\apache\apache2.4.x\conf\extra\httpd-vhosts.conf* 
*  **Tools**: Using **Remote Desktop** to connect Server and manage files
*  **Domain Name**: If you want to use Domain you must complete the Domain revolution before
*  **Database**:  Use [phpMyAdmin](/admin-mysql.md) to manage database if need

Once you have a overall, you can start you application deployment now

## Deploy fisrt application

There is a example application in WampServer, we sugget you to **replace the example application** for deploy first application:

1. Use **Remote Desktop** to connect Cloud Server

2. Delete all files in the directory *C:\websoft9\wampserver\www\www.example.com*, but don't delete *www.example.com* folder
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-exadr-websoft9.png)

3. Upload your application's codes to the folder: *www.example.com* 

4. Modify the  `<VirtualHost *:80>...</VirtualHost>` segment ([refer to](/solution-deployment.md#virtualhost)) in the file *httpd-vhosts.conf* if you want to bind domain or modify folder name
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/wampserver/wampserver-mddfvhost-websoft9.png)
   ::: warning
   If you do not bind the domain and do not modify the directory name, skip steps 4 and 5.
   :::

5. Save the file *httpd-vhosts.conf* and then [Restart all Service](/admin-services.md)

6.  Using the Chrome or Firefox to visit: *http://domain* or *http://IP/mysite2* to visit your application

## Deploy second application

Start to deploy the second application, you should add new `<VirtualHost *:80>...</VirtualHost>` segment to the file *httpd-vhosts* 

1. Connect Cloud Server, then create a new folder named "mysite2" to the directory *C:\websoft9\wampserver\www*
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-addmysite2-websoft9.png)

2. Upload your application's codes to the folder: *C:\websoft9\wampserver\www\mysite2* 

3. Edite the file *httpd-vhosts*
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/wampserver/wampserver-addmorevhostconfig-websoft9.png)

    Have domain or no domain, Choose one of the options below:

     * **Have domain, you can visit application by *http://domain/***  

     Please copy the **VirtualHost** below to *httpd-vhosts*, and modify the **ServerName, DocumentRoot, ErrorLog, CusomLog, Directory**
     
       ```
       #-----HTTP template start------------
       <VirtualHost *:80>
       ServerName www.mydomain.com
       # ServerAlias other.mydomain.com
       DocumentRoot "C:\websoft9\wampserver\www\mysite2"
       ErrorLog "logs\mydomain.com_error_apache.log"
       CustomLog "logs\mydomain.com_error_apache.log" common
       <Directory "C:\websoft9\wampserver\www\mysite2">
       Options Indexes FollowSymlinks
       AllowOverride All
       Require all granted
       </Directory>
       </VirtualHost>
       #-----HTTP template start------------
        ```

     * **No domain, you can visit application by *http://IP/mysite2***  
    
     Please copy the **Alias template** below to *httpd-vhosts*, and modify the **/path, Directory**

      ```
      Alias /sitename C:\websoft9\wampserver\www\mysite2
      <Directory "/data/wwwroot/mysite2">
	  Options Indexes FollowSymlinks
	  AllowOverride All
	  Require all granted
	</Directory>
      ```
4. Save the file *httpd-vhosts* and then [Restart all Service](/admin-services.md)

5.  Using the Chrome or Firefox to visit: *http://domain* or *http://IP/sitename* to visit your application


## Deploy more application

**Deploy more application** is the same with **Deploy second application**

Finally, we know the new and summarize the steps of the WampServer deployment site: 

1. Upload the website code 
2. Bind the domain name (not necessary) 
3. Add the site configuration or modify the sample site configuration 
4. Increase the database corresponding to the site (not necessary) 
5. Enter the installation wizard

## VirtualHost

All items in the VirtualHost must be correct, any error may cause Apache can't start and applicaiton not accessible

|  VirtualHost Item  |  Use  |  Necessity |
| --- | --- | --- |
|  ServerName  |  Primary domain   |  Required |
|  ServerAlias  |   Sencond |  Optional |
|  DocumentRoot |  The real website storage directory   | Required and must be correct |
|  Directory |  The real website storage directory   |  Required and must be correct |
|  ErrorLog  | error logs directory   |  Suggestion  |
|  CustomLog  | visit logs directory  |  Suggestion |

## Q&A

#### I can't restart Apache service after modify the *httpd-vhosts*?

Check the application directory items in the segement of your *VirtualHost*

#### I can't visit my new deployment and all applications on my Server 

Check the application directory items in the segement of your *VirtualHost*

#### 404 error?

Please make sure that the *index.php* or *index.html* was included in the your application's direcotory

#### 500 Internal Server Error？

The program code is wrong, you need to analyze the program's log file.

#### Always show 9Panel?

Please delete the index file in the example and clear the browser cache of your local computer