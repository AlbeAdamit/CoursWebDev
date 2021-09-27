# Laravel Roundup

Create a fullstack application with Laravel 

- Type of challenge: **consolidation**  
- Duration: **3 days**  
- **solo challenge**
- Deadline: **11/02/2021 17:00**
- [Submission form](https://forms.gle/UmTTfyF59kueUYhh7)

## Learning objectives

- Create a fullstack application 
- Use the MVC pattern

## The mission

You have to create a website for your local library. The basic feature would be to list all the available books, and to create an admin system for librarian to manage the available books.

The additional challenge is to create a system for the clients to borrow books.

### The basics

- Create a book table, containing several informations `author`, `title`, `quantity` (number of books available in store), `genre`
- Create a book management system.
    - You should be able to add new books to your store
    - You should be able to edit the informations of all books
    - Only registered admins can access this system (you should not allow registration), use seeders to create admins.
- Create a page to list the books that's visible to everyone
- Create a client system (you can use the same table as admin, but they cannot access the book admin system)
- Add a "you may also like" section under each book view containing 3 other books by the same author or genre (if there are any)

### Advanced

- Clients should be able to borrow books, for example with a shopping cart. An order is a list of books associated to a client, with an unique invoice number.
- Create a recap page for the orders.
- Create a genre table so you can add multiple genres to books (many-to-many)
- Create a client dashboard where they can see their past orders.
- Admins can see all clients order.