import { Component, OnInit } from '@angular/core';
import { _TemplateService } from './service/_template.service';

/* tslint:disable */
import { Config } from '../shared/index'; //html uses Config
/* tslint:enable */


/**
* This class represents the lazy loaded _TemplateComponent.
*/
@Component({
	moduleId: module.id,
	selector: 'sd-_template',
	templateUrl: '_template.component.html',
	styleUrls: ['_template.component.css']
})

export class _TemplateComponent  implements OnInit { 
	vm: any = {};
	constructor(public svc: _TemplateService) { }

	ngOnInit() {
		//this.getInitialData();
	}

	getInitialData() {
		this.svc.get()
			.subscribe(
				response => this.vm.init = response,
				error => this.vm.err = <any>error
			);
	}              
} 



 
 
