// function subWithPaystack(plan_id, plan_price, tenant_id){
// 	var handler = PaystackPop.setup({
// 		key: 'pk_test_3867b2b50fe4f5d7c72a4ad9bcae7c06945c0440',
// 		email: document.getElementById('tenant_email').value,
// 		amount: parseFloat(plan_price),
// 		ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
// 		metadata: {
// 			custom_fields: [
// 				{
// 					display_name: "Mobile Number",
// 					variable_name: "mobile_number",
// 					value: "+2348012345678"
// 				}
// 			]
// 		},
// 		callback: function(response){
// 			// $('form').append('<input type="hidden" name="reference_code" value="' + response.reference + '">');
// 			//
// 			// $('form').submit();
// 			alert('success. transaction ref is ' + response.reference);
// 		},
// 		onClose: function(){
// 			//e.preventDefault();
// 			alert('window closed');
// 			//console.log('window closed');
// 		}
// 	});
// 	handler.openIframe();
// }

// function subWithPaystack(plan_id, plan_price, tenant_id){
//
// 	alert("i work great");
// }
