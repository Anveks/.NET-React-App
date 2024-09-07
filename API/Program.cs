using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container. DI.
builder.Services.AddDbContext<StoreContext>(opt => {// here we are telling the app to use StoreContext class are our database context 
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    // and to use SQLite as the database provider with opt
}); 

builder.Services.AddControllers(); // part of the Dependency Injection (DI) setup and is used to register controllers in the application's service container

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(); // adding the CORS DI

var app = builder.Build();

// Apply CORS policy here before (BEFORE!!!) other middleware like Swagger or Controllers
app.UseCors(opt => {
   opt.AllowAnyHeader()
      .AllowAnyMethod()
      .WithOrigins("http://localhost:3000"); // Make sure not to end with a trailing slash
});

// Configure the HTTP request pipeline. MIDDLEWARE.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

var scope = app.Services.CreateScope(); // define the scope of the app so we can use the services of the DIs
var context = scope.ServiceProvider.GetRequiredService<StoreContext>(); 
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try {
    context.Database.Migrate(); // this creates the database 
    DBInitialiser.Initialize(context); // since DBInitialiser is a static class you can use it without importing it - but only in the program.cs file; 
} catch (Exception ex) {
    logger.LogError(ex, "A problem occured during migration");
}

app.Run();

