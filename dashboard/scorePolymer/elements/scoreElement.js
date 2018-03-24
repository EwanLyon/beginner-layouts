(function () {
    'use strict';

    const number = nodecg.Replicant('number', {defaultValue: 0, persistent: false});

    class ScoreElement extends Polymer.Element {
		static get is() {
			return 'score-element';
		}

		static get properties() {
			return {};
		}

        ready() {
            super.ready();
        }

        add(){
            number.value += 1;
        }
        
        subtract(){
            number.value -= 1;
        }
    }

        customElements.define(ScoreElement.is, ScoreElement);
})();