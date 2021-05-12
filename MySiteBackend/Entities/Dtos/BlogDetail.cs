﻿using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class BlogDetail
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }
        public string Slug { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public int CategoryId { get; set; }
        public IEnumerable<BlogTagDetail> BlogTags { get; set; }
        public Category Category { get; set; }
        public IEnumerable<CommentDetail> Comments { get; set; }

    }
}
