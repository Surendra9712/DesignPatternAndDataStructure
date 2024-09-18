// src/app/submitting.state.ts
import { State } from './state.interface';
import { FormContext } from './form.context';

export class SubmittingState implements State {
  constructor(private context: FormContext) {}

  handleInput(input: string): void {
    console.log('Cannot handle input in submitting state');
  }

  submit(): void {
    console.log('Submitting form');
    this.context.setState(this.context.viewingState);
  }

  cancel(): void {
    console.log('Transitioning to viewing state');
    this.context.setState(this.context.viewingState);
  }
}
