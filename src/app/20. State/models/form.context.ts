// src/app/form.context.ts
import { State } from './state.interface';
import { EditingState } from './editing';
import { ViewingState } from './viewing';
import { SubmittingState } from './submitting';

export class FormContext {
  private currentState: State;
  public editingState: State;
  public viewingState: State;
  public submittingState: State;

  constructor() {
    this.editingState = new EditingState(this);
    this.viewingState = new ViewingState(this);
    this.submittingState = new SubmittingState(this);
    this.currentState = this.viewingState; // Default state
  }

  setState(state: State): void {
    this.currentState = state;
  }

  handleInput(input: string): void {
    this.currentState.handleInput(input);
  }

  submit(): void {
    this.currentState.submit();
  }

  cancel(): void {
    this.currentState.cancel();
  }

  updateInput(input: string): void {
    console.log('Input updated:', input);
  }
}
