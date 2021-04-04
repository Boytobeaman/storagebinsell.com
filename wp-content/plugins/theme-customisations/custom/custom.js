;jQuery(function($){
	$(document).on("click",".product a.woocommerce-LoopProduct-link,.product-inquiry", function(e){
		e.stopPropagation();
		e.preventDefault();
		
		if($(e.target).hasClass("product-model") || $(e.target).closest(".product-model").length){
			
		}else if($(e.target).hasClass("product-cat-inquiry") || $(e.target).closest(".product-cat-inquiry").length){
			//加$(e.target).closest(".product-cat-inquiry").length 为了兼容 Gtranslate
			
			var productModel = $(this).find(".product-model").attr("data-value");
			$("#ProductModel").val(productModel);
			$("#contactUs").modal();
		}else if($(e.target).hasClass("product-inquiry") || $(e.target).closest(".product-inquiry").length){
			
			$("#ProductModel").val($('.product-model .value').attr("data-value"));
			$("#contactUs").modal();
		}
	})
	$("#contactUs").off().on('show.bs.modal', function () {
        var url = window.document.location.href;
        $('#productURL').val(url);
    });
})