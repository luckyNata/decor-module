import { NgModule } from '@angular/core';
import { TestModDirective } from './test-mod.directive';

@NgModule({
  imports: [
  ],
  declarations: [TestModDirective],
  exports: [TestModDirective]
})
export class TestModModule { }
