// src/app/viewing.state.ts
import { State } from './state.interface';
import { FormContext } from './form.context';

export class ViewingState implements State {
  constructor(private context: FormContext) {}

  handleInput(input: string): void {
    console.log('Cannot handle input in viewing state');
  }

  submit(): void {
    console.log('Transitioning to submitting state');
    this.context.setState(this.context.submittingState);
  }

  cancel(): void {
    console.log('No action on cancel in viewing state');
  }
}
