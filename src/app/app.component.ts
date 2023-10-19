import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProgressStepperComponent } from './progress-stepper/component/progress-stepper.component';
import { StepModel } from './stepper/step.model';
import { ProgressStepModel } from './progress-stepper/progress-step.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('stepper', { static: true }) stepper: ProgressStepperComponent;

  @ViewChild('step1', { static: true }) step1: TemplateRef<any>;
  @ViewChild('step2', { static: true }) step2: TemplateRef<any>;
  @ViewChild('step3', { static: true }) step3: TemplateRef<any>;
  @ViewChild('step4', { static: true }) step4: TemplateRef<any>;
  @ViewChild('step5', { static: true }) step5: TemplateRef<any>;

  ngOnInit(): void {
    const steps: ProgressStepModel[] | StepModel = [
      {
        id:'step1',
        title: 'STEP1',
        additinalText: 'extra text for step1',
        content: this.step1,
      },
      {
        id:'step2',
        title: 'STEP2',
        additinalText: 'extra text for step2',
        content: this.step2,
      },
      {
        id:'step3',
        title: 'STEP3',
        additinalText: 'extra text for step3',
        content: this.step3,
      },
      {
        id:'step4',
        title: 'STEP4',
        additinalText: 'extra text for step4',
        content: this.step4,
      },
      {
        id:'step5',
        title: 'STEP5',
        additinalText: 'extra text for step5',
        content: this.step5,
      },
    ];

    this.stepper.setSteps(steps);
  }


  public goNextStep(stepId:string):void{
    this.stepper.setStepById(stepId);
  }

  public reset():void{
    this.stepper.resetAndSetFirstStepById();
  }

}
