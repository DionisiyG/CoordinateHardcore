using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace CoordinateHardcore.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public int Get()
        {
            Random rnd = new Random();
            int number = rnd.Next(70, 450);
            return number;
        }
    }
}
