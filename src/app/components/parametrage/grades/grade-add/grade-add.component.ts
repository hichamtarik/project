import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent implements OnInit {
  moduls: Grade = new Grade();
  submitted = false;
  constructor(private _activeRoute: ActivatedRoute, private _gradeService: GradeService, private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    this._gradeService.addGrade(this.moduls).subscribe(
      data => {
        console.log("success")
        this.gotoList();
      }, error => {
        console.log("error")
      });
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/grades']);
  }
}
