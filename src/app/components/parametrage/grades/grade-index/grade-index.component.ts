import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from 'src/app/services/grade.service';
import { Grade } from 'src/app/models/grade';

@Component({
  selector: 'app-grade-index',
  templateUrl: './grade-index.component.html',
  styleUrls: ['./grade-index.component.css']
})
export class GradeIndexComponent implements OnInit {
  grades: Grade[];
  constructor(private _activeRoute: ActivatedRoute, private _gradeService: GradeService) { }
  ngOnInit(): void {
    this.getGrades();
  }
  getGrades(){
    this._gradeService.getAllGrade().subscribe(
      grades => { this.grades = grades;});
  }
  deleteGrades(id:number){
   
  }
}
