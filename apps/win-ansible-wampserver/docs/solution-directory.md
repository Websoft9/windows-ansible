# Migrate application

Migrating an application is to move the **application data** to a new location and then configure it to ensure access after the move.

Migration is an operation that needs to be treated with caution. Before migration, you need to clearly understand the following points:

- **Moved application data objects**: website source files or database data files
- **Destination location**: transfer between server directories (local) or external server (external)

The combination of the migrated object and the destination location forms a variety of migration scenarios. The most common migration scenarios are detailed below:

## Migrate source code locally

Assume the folder name of your application is **mysite1** in the directory *C:\websoft9\wampserver\www*, then you may migrate **mysite1** to the directory *d:\www*, let us define it this way:

   * **original folder**: *C:\websoft9\wampserver\www\mysite1*    
   * **destination folder**: *d:\www\mysite1*

1. Use **Remote Desktop** to connect your Server

2. Copy the original folder ***mysite1***  to the destination directory: *d:\www*

3. Modify the *DocumentRoot, Directory* items in the VirtualHost segment of **httpd-vhosts**

4. Save httpd-vhosts, and [restart service](/admin-services.md)

5. Test the migration, then delete the **original folder**

## Migrate Database files locally

There is no special case, we do not recommend migrating database files to another directory on the Server. After all, major cloud platform's disks can be expanded.

1. [Stop MySQL service](/admin-services.md)

2. Copy all database files of *C:\websoft9\wampserver\bin\mysql\data* to the new directory, e.g *D:\data*

3. Modify the [database configuration file](/stack-components.md#mysql), change the location items like below:
	~~~
    datadir="C:\websoft9\wampserver\bin\mysql\data"
    log-error="C:\websoft9\wampserver\bin\mysql\data\mysqld.log"
        
    ----changed to----
    
    datadir="D:\data"
    log-error="D:\data\mysqld.log"
    ~~~
 4. [restart MySQL service](/admin-services.md)


## Migrate to another Instance

The migration of applications from one server (original Server) to another (destination Server) is a complex plan. The basic steps are as follows:

1. [Deploy WampServer](/stack-deployment.md) on the **destination Server**.
2. Transfer the website source file on the **original server** to the **destination server**.
3. Export the database from the **original Server** via phpMyAdmin and then import them to **destination server**.
4. Copy the contents of the **httpd-vhosts** from the **original Server** to the **httpd-vhosts** of **destination server** .
5. Save it, tehn restart the Apache service.
5. Resolve the domain to **destination Server** and wait for the domain resolution to take effect.
5. Test the availability by visiting the application through your domain name.
6. Publish the it.

> If there are multiple applications on a Server that need to be migrated, it is recommended to migrate amd test one by one.