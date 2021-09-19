import { Component, OnInit } from '@angular/core';
import coursesData from './courses.json';

interface Course {
  id: Number;
  url: String;
  description: String;
}


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',

  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  name = 'Angular';
  
  courses: Course[] = coursesData;

  constructor() { }

  ngOnInit(): void {
  }
  display = false;
  onPress() {
    this.display = true;
    /*if you want the component to show and hide on click pressed, use 
    use this line
    this.display = !this.display;*/
  }
}
