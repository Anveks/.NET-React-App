
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext: DbContext // this class inherits from the DbContext which is part of Entity Framework used to interact with the database
    {
        public StoreContext(DbContextOptions options) : base(options) { } 
        // storeContext the constructor for the class; 
        // it receives options of type DbContextOptions; 
        // base(options) is a call to the parent's class (DbContext) constructor; means that we will pass the options to the base class which is DbContext
        public DbSet<Product> Products {get; set;} // this is like a table in the database representing the Product entity; through this we are able to query and interact with the Products table (insert udpate and delele records);
    }
}