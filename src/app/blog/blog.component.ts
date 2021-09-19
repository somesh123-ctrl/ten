import { Component, OnInit } from '@angular/core';
import blogsData from './blogs.json';


interface Blog {
  id: Number;
  url: String;
  description: String;
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  name = 'Angular';
  
  blogs: Blog[] = blogsData;

  constructor() { }

  ngOnInit(): void {
  }

}
