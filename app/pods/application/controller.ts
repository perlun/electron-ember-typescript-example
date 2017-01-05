import Ember from 'ember';

class ApplicationController extends Ember.Controller {
    constructor() {
        super();

        debugger;

        // Workaround since the TS definition for Window doesn't include process (which isn't available in regular browser contexts).
        this.set('process', (<any>window).process);
        this.set('emberVersion', Ember.VERSION);
    }
}

export default Ember.Controller.extend(ApplicationController);
