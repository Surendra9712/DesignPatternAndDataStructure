// src/app/editing.state.interface.ts
import { State } from './state.interface';
import { FormContext } from './form.context';

export class EditingState implements State {
  constructor(private context: FormContext) {}

  handleInput(input: string): void {
    console.log('Handling input in editing state:', input);
    this.context.updateInput(input);
  }

  submit(): void {
    console.log('Transitioning to submitting state');
    this.context.setState(this.context.submittingState);
  }

  cancel(): void {
    console.log('Transitioning to viewing state');
    this.context.setState(this.context.viewingState);
  }
}
