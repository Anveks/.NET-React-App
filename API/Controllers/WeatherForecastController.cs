// using Microsoft.AspNetCore.Mvc;

// namespace API.Controllers;

// [ApiController] // API Controller attribute
// [Route("[controller]")] // the path to get to this route
// public class WeatherForecastController: ControllerBase {
//   private static readonly string[] Summaries = new[] {
//     "Freezing", "Chilly", "Sunny"
//   };

//   private readonly ILogger<WeatherForecastController> _logger;

//   public WeatherForecastController(ILogger<WeatherForecastController> logger) {
//     _logger = logger;
//   }

//   [HttpGet(Name = "GetWeatherForecast")]
//   public IEnumerable<WeatherForecast> Get() {
//     return Enumerable.Range(1,5).Select(index => new WeatherForecast {
//       Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//       TemperatureC = Random.Shared.Next(-20, 55),
//       Summary = Summaries[Random.Shared.Next(Summaries.Length)]
//     }).ToArray();
//   }
// }