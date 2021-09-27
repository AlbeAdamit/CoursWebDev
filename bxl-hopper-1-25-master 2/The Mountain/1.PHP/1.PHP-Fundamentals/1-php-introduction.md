# PHP Fundamentals: Introduction

## PHP : "Hypertext Preprocessor"

PHP is a  **Backend** language, meaning that it runs on the *web server* (whereas the **Frontend** designates the software acting on the side of the *client* : the *browser*).

## Setup

### Local Development Server

When we work on a project, we don't work directly on the machine that will serve the files of the website or application, because the slightest typo mistake would look bad and hurt the client's brand image (at the very least).

So we develop on our own PC ("development environment"), until the files are ready for production (we then put them on the "production environment").

### How to setup a local development environment ?

To develop in PHP, you need to install the PHP software.  
To develop in MySQL, you need to install the MySQL software.
But you actually need a third software to use PHP (and MySQL): a Web server.

The most common stacks is called the **LAMP** stack :  Linux + Apache + MySQL + PHP.

You can also find a Windows alternative: WAMP. I'll let you guess what the Mac OS X version's name is...

#### How to setup a local development environment ?

To develop in PHP, you need to install the PHP software.
To develop in MySQL, you need to install the PHP software. But you actually need a third software to use PHP (and MySQL): a Web server.

The most common stacks are LAMP and LEMP : Linux + Apache (or nginx, pronounced "Engine X") + MySQL + PHP.

You can also find a Windows alternative: WAMP. I'll let you guess what the Mac OS X version's name is...

Feel free to setup apache, MySQL and PHP directly on your machine. It can create a bit of a mess, though, so an alternative - and a useful technology worth learning - would be to use Docker, a virtualization engine.

- [Configurer un environnement de développement local (LAMP) sur Ubuntu](https://github.com/becodeorg/BeCode/wiki/Installer-LAMP-sur-Ubuntu) - si le lien ne fonctionne pas, [cliquez ici](https://github.com/becodeorg/BeCode/wiki) puis cliquez sur [Pages] puis choisissez le bon post.
- [Installer LAMP sur Linux](https://doc.ubuntu-fr.org/lamp)
- [Installer PHPMyAdmin](https://doc.ubuntu-fr.org/phpmyadmin)

Whichever way you set up your local dev environment, you eventually have a web server accessible at http://localhost:PORTNUMBER  

2. Create a "test" folder
3. Inside, create an `index.php`file, in which you write:  

```php
<?php
echo "Hello!";
?>
```

#### 2. Check that it works

Done? Then browse to `http://localhost/test/` 

You should see "Hello!". Bravo! You just created your first PHP script.
Give yourself a great loving hug, you deserve it.


### Exercises

- Let's play a bit with this index.php file. Add an image of cats.
- Write a second page in the same "test" folder, call it `cats.php` and add a bit of content and a link to each of the two files, so that you can navigate from one to the other.
- Done? Well done, you just created a website cat-egorically nice !

## Onward! Next : [2 : Variables and Conditions](./2-php-variables.md)


