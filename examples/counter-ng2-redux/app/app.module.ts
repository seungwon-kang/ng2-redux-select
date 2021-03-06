import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, DevToolsExtension} from 'ng2-redux';
import { NgSelect } from 'ng2-redux-select';
import { CounterActions } from '../actions/counter.actions';
import { App } from './app.component';
import { Counter } from '../components/counter.component';
import { IAppState, rootReducer, INITIAL_STATE } from '../store/index';

@NgModule({
  imports: [ BrowserModule, CommonModule, ],
  declarations: [ App, Counter, ],
  bootstrap: [ App ],
  providers: [
    DevToolsExtension,
    NgRedux,
    CounterActions,
    NgSelect,
  ]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTool: DevToolsExtension,
    ngSelect: NgSelect) {

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f ]);
    ngSelect.connect(ngRedux);
  }
}
