import { Component, OnInit } from '@angular/core';
import { AdminCustomizedService } from '../../services/admin-customized.service';
@Component({
  selector: 'app-admin-customized-questions-list',
  templateUrl: './admin-customized-questions-list.component.html',
  styleUrls: ['./admin-customized-questions-list.component.css']
})
export class AdminCustomizedQuestionsListComponent implements OnInit {
  testDetails: any;
  constructor(private customizedService: AdminCustomizedService) { }

  ngOnInit() {
    this.customizedService.getTest();
    this.customizedService.getUpdatedListener().subscribe(test => {
      this.testDetails = test;
      console.log(this.testDetails);
    });
  }
  deleteQuestions(testId) {
    console.log(testId);
    this.customizedService.deleteTest(testId);
  }
}
