(function () {
    'use strict';

    const number = nodecg.Replicant('number');

    class BasicPolymer extends Polymer.Element {
		static get is() {
			return 'basic-polymer';
		}

		static get properties() {
			return {};
		}

        ready() {
            super.ready();

            number.on('change', newVal => {
                this.$.text.style.background = "#fff";
                this.$.text.innerText = newVal;

                TweenLite.to(this.$.text, 1, {backgroundColor: '#2196f3'});

            });
        }
    }

        customElements.define(BasicPolymer.is, BasicPolymer);
})();