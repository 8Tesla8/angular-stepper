﻿import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepModel } from '../step.model';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit, OnDestroy {

    ngOnInit(): void {
        window.addEventListener('resize', this.setTextWidth);
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.setTextWidth);
    }

    private _steps:StepModel[] = [];
    public getSteps():StepModel[]{
        return this._steps;
    }

    private _currentStep:StepModel;
    public getCurrentStep():StepModel{
        return this._currentStep;
    }

    public setSteps(steps:StepModel[], firstStepId:string = null):void{
        this._steps = steps;

        if(firstStepId === null || firstStepId === undefined){
            this.setStepById(this._steps[0]?.id);
        }
        else{
            this.setStepById(firstStepId);
        }
    }

    public setStepById(stepId:string):void{
        const step = this._steps.find(s=> s.id === stepId)

        if(step){
            this._currentStep = step;
            // this._progressSteps.push(step);

            this.scroolToProgressStepById(step.id);
            this.setTextWidth();
        }
        else{
            console.error('Could not find step by id:' + stepId);
        }
    }


    public resetAndSetFirstStepById(firstStepId:string = null):void{
        //* with animation
        // const steps = document.querySelectorAll('.step-progress-info');

        // for (let element of Array.from(steps)) {
        //     element.classList.remove('fade-in-animation');
        //     element.classList.add('fade-out-animation');
        // }
        // setTimeout(()=>{
        //     this._steps = [];
        //     this.setSteps(this._steps, firstStepId);

        //     //add fade in animation
        //     const step = document.querySelector('.step-progress-info') as HTMLElement;
        //     step.classList.remove('fade-out-animation');
        //     step.classList.add('fade-in-animation');
        // }, 600);


        //* witout animation
        this._steps = [];
        this.setSteps(this._steps, firstStepId);
    }

    public resetAndSetNewSteps(steps:StepModel[],firstStepId:string = null):void{
        this.setSteps(steps, firstStepId);
    }


    public stepIsCurrent(step:StepModel):boolean{
        return this.stepIsCurrentById(step?.id);
    }

    public stepIsCurrentById(id:string):boolean{
        return this._currentStep?.id === id;
    }

    public setAdditionalTextToStep(id:string, text:string):void{
        const step = this._steps.find(s => s.id === id);
        if(step){
            step.additinalText = text;
        }
    }

    public showVerticalLine(step:StepModel):boolean{
        const stepLength = this._steps?.length; 

        if(stepLength === 0 || stepLength === 1){
            return false;
        }

        const stepIndex = this._steps.findIndex(s => s.id === step.id);
        if(stepIndex === stepLength -1){
            return false;
        }

        return true;
    }

    private scroolToProgressStepById(stepId:string):void{
        setTimeout(()=>{
            var container = document.getElementById('step-progress-pannel');
            var elementToScrollTo = document.getElementById(stepId);

            container.scrollTop = elementToScrollTo.offsetTop;
        }, 20);
    }

    private setTextWidth():void{
        setTimeout(()=>{
            const container = document.querySelector('.step-progress-info') as HTMLElement;
            const containerWidth = container.offsetWidth;
            const children = document.querySelectorAll('.text-overflow');

            children.forEach(element => {
                let width = (containerWidth - 80) + 'px';
                (element as HTMLElement).style.width = width;
            });
        }, 20);
    }

}
