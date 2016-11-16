import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { _TemplateModule } from './_template.module';

export function main() {
   describe('_Template component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [_TemplateModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let _templateDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(_templateDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-_template></sd-_template>'
})
class TestComponent {}
