import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service : StudentService) { }

  ngOnInit() {
  }

}
