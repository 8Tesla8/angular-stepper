import { TemplateRef } from "@angular/core";

export class ProgressStepModel{
    public id:string;
    
    public title:string;
    public additinalText:string;

    public content: TemplateRef<any>;
}
