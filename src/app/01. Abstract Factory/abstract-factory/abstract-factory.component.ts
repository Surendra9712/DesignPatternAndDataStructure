import { Component, OnInit } from '@angular/core';
import { AbstractTheme, Theme } from '../models/theme.model';
import { DarkThemeFactory, LightThemeFactory, PersonalThemeFactory } from '../models/factory.model';
import { $e } from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.scss']
})
export class AbstractFactoryComponent implements OnInit {
  private readonly _themes: AbstractTheme[];
  public selectedTheme: AbstractTheme;
  public get themes(): AbstractTheme[] {
    return this._themes;
  }

  constructor() {
    this._themes = new Array<AbstractTheme>();
  }

  ngOnInit(): void {
    // I split this up for better readability
    const lightTheme: AbstractTheme = new Theme(new LightThemeFactory(), 'Light theme');
    this._themes.push(lightTheme);
    const darkTheme: AbstractTheme = new Theme(new DarkThemeFactory(), 'Dark theme');
    this._themes.push(darkTheme);
    const personalTheme: AbstractTheme = new Theme(new PersonalThemeFactory(), 'Personal theme');
    this._themes.push(personalTheme);

    this.selectedTheme = this._themes[0];
  }

  onValueChange(evt): void {
    console.log(evt);
    // this.selectedTheme = evt;
  }
}
