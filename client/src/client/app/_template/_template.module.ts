import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _TemplateComponent } from './_template.component';
import { _TemplateService } from './service/_template.service';

@NgModule({
    imports: [CommonModule],
    declarations: [_TemplateComponent],
    exports: [_TemplateComponent],
    providers: [_TemplateService]
})

export class _TemplateModule { }
