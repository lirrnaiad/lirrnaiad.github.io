var LayerSlider = function () {

    return {

        //Layer Slider
        initLayerSlider: function () {
		    $(document).ready(function(){
		        jQuery("#layerslider").layerSlider({
			        skin: 'fullwidth',
			        responsive : false,
			        responsiveUnder : 960,
			        layersContainer : 960,
			        skinsPath: 'assets/plugins/layer-slider/layerslider/skins/'
			    });
		    });     
        }

    };
}();        