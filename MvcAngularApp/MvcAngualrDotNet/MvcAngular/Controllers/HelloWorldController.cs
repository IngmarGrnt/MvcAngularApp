using Microsoft.AspNetCore.Mvc;

namespace MvcAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorldController : Controller
    {

            [HttpGet]
            public IActionResult Get()
            {
                return Ok("Hello World! This is from ASP.NET Core!");
            }
        
    }
}
