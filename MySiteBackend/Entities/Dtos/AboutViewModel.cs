﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public class AboutViewModel
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
    }
}
