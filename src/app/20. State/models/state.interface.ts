// src/app/state.interface.ts
export interface State {
  handleInput(input: string): void;
  submit(): void;
  cancel(): void;
}
