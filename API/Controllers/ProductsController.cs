using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase
    {
        private readonly StoreContext context; // the DI of the StoreContext
        public ProductsController(StoreContext context) // creating the construtor
        {
           this.context = context; 
        } // with this we can use the context inside the controller

        [HttpGet] // api/products
        public async Task<ActionResult<List<Product>>> GetProducts() // we state here that the result of the function should be a list (dynamic lenght array) of type Product
        { 
            var products = await context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")] // api/products/{id}
        public async Task<ActionResult<Product>> GetOneProduct(int id)
        {
            return await context.Products.FindAsync(id);
        }
    }
}