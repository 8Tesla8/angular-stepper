import { TemplateRef } from "@angular/core";

export class StepModel{
    public id:string;
    
    public title:string;
    public additinalText:string;

    public content: TemplateRef<any>;
}
