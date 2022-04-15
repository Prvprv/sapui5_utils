sap.ui.define("fiori/lib/template/controls/Template", [
	"sap/ui/core/XMLComposite",
], function (XMLComposite) {
	var oTemplate = XMLComposite.extend("fiori.lib.template.controls.Template", {
		metadata: {
			properties: {},
			aggregations: {},
			events: {
        someEvent1: {},
        someEvent2: {},
        cancel: {}
      }
		},
		init: function(){
			(XMLComposite.prototype.init || jQuery.noop).apply(this, arguments);
		},
		triggerSomeEvent1: function(){
			this.fireSomeEvent1();
		},
		triggerSomeEvent2: function(){
			this.fireSomeEvent2();
		},
		cancel: function(){
			this.fireCancel();
		},
	});
	return oTemplate;
}, true);