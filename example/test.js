let { EspressoApi, WebSocket } = require('../lib');

let espresso_api = new EspressoApi({
	api_key: 'YOUR_API_KEY',
	state: 'YOUR_STATE',
	customer_id: 'YOUR_CUSTOMER_ID',
	//  OPTIONAL  If user does not have valid access token then use generateSession method
	access_token: 'YOUR_ACCESS_TOKEN',
});

// // If user does not have valid access token then use generateSession method
// espresso_api
// 	.generateSession('YOUR_REQUEST_TOKEN', 'YOUR_SECRET_KEY')
// 	// pass request token in generateSession method as an argument
// 	.then((data) => {
// 		console.log('data::::::', data);
// 	});
// let token ="YOUR_TOKEN"
// SetToken method
// espresso_api.setAccessToken(token);

//fundDetails method
// let exchange = 'MX';
// espresso_api.getFundsDetails(exchange).then((data) => {
// 	console.log('data::::::', data);
// });

// espresso_api
// 	.placeNewOrder({
// 		customerId: XXXX,
// 		scripCode: 1314,
// 		tradingSymbol: 'USDINR',
// 		exchange: 'RN',
// 		transactionType: 'B',
// 		quantity: 1,
// 		// disclosedQty: 50,
// 		price: '82.9050',
// 		triggerPrice: '82.9025',
// 		rmsCode: 'ANY',
// 		afterHour: 'N',
// 		orderType: 'NORMAL',
// 		channelUser: XXXX,
// 		validity: 'gfd',
// 		requestType: 'NEW',
// 		productType: 'CNF',
// 		// gtdd: '18/03/2023',
// 		instrumentType: 'futcur',
// 		strikePrice: '-1',
// 		expiry: '28/03/2023',
// 		optionType: 'XX',
// 	})
// 	.then((data) => {
// 		console.log('data::::::', data);
// 	});

// modify order
// espresso_api
// 	.modifyOrder({
// 		orderId: 'XXXX',
// 		customerId: XXXX,
// 		scripCode: 1314,
// 		tradingSymbol: 'USDINR',
// 		exchange: 'RN',
// 		transactionType: 'B',
// 		quantity: 1,
// 		// disclosedQty: 50,
// 		price: '82.9025',
// 		triggerPrice: '82.9025',
// 		rmsCode: 'ANY',
// 		afterHour: 'N',
// 		orderType: 'NORMAL',
// 		channelUser: XXXX,
// 		validity: 'gfd',
// 		requestType: 'MODIFY',
// 		productType: 'CNF',
// 		// gtdd: '18/03/2023',
// 		instrumentType: 'futcur',
// 		strikePrice: '-1',
// 		expiry: '28/03/2023',
// 		optionType: 'XX',
// 	})
// 	.then((data) => {
// 		console.log('data::::::', data);
// 	});

//cancel order
// espresso_api
// 	.cancelOrder({
// 		orderId: 'XXXX',
// 		customerId: XXXX,
// 		scripCode: 3045,
// 		tradingSymbol: 'SBIN',
// 		exchange: 'NC',
// 		transactionType: 'B',
// 		quantity: 1,
// 		disclosedQty: 0,
// 		executedQty: 0,
// 		price: '95',
// 		triggerPrice: '0',
// 		rmsCode: 'SKSIMNSE1',
// 		afterHour: 'N',
// 		orderType: 'NORMAL',
// 		channelUser: XXXX,
// 		validity: 'GFD',
// 		requestType: 'CANCEL',
// 		productType: 'MIS',
// 	})
// 	.then((cancel) => {
// 		console.log('cancel', cancel);
// 	});

//cancel order by id
//return espresso_api.cancelOrderById("order_id").
// espresso_api.cancelOrderById('7829085').then((id) => {
// 	console.log('id', id);
// });

// // one day trade history
// espresso_api.getAllOrdersHistoryOfDay().then((day) => {
// 	console.log('order_report', day);
// });

//all trade history
// espresso_api.getAllTradesHistory().then((report) => {
// 	console.log('position_report', report);
// });

// let params = {
// 	exchange: 'RN',
// 	orderID: 7829085,
// };

// // // hitory by order id
// espresso_api
// 	.getHistoryByOrderID(params.exchange, params.orderID)
// 	.then((history) => {
// 		console.log('order_detail', history);
// 	});

// let params = {
// 	exchange: 'NC',
// 	orderID: 3452904,
// };

// // trade by order id
// espresso_api
// 	.getTradeGeneratedByOrder(params.exchange, params.orderID)
// 	.then((data) => {
// 		console.log('data:::', data);
// 	});

//holding details
// espresso_api.getHoldings().then((data) => {
// 	console.log('Holdings:::', data);
// });

//active script details
// espresso_api.getActiveScriptOfDay('MX').then((data) => {
// 	console.log('ScrptMaster:::', data);
// });

// espresso_api.getHistoricalIntervalData('MX', 251800, 'daily').then((data) => {
// 	console.log('data', JSON.stringify(data));
// });

//script details
//return  espresso_api.getScriptMasterCSV('NC')
// })
// .catch((error) => {
// 	console.log('swnbekj', error);
// });

// ########################### Socket Sample Code Starts Here ###########################

// let ws = new WebSocket({
// 	access_token:
// 		'YOUR_ACCESS_TOKEN',
// 	api_key: 'YOUR_API_KEY',
// });

// ws.connect().then(() => {
// 	let subscribe = {
// 		action: 'ack',
// 		key: [''],
// 		value: [20002886],
// 	};
// 	let feedData = {
// 		action: 'ack',
// 		key: [''],
// 		value: [20002886],
// 	};
// 	// let unsubscribe = {
// 	// 	action: 'subscribe',
// 	// 	key: ['feed'],
// 	// 	value: ['NC22,NF37833,NF37834'],
// 	// };

// 	let res = ws.subscribe(subscribe);
// 	console.log(res);
// 	ws.fetchData(feedData);
// 	// ws.unsubscribe(unsubscribe);

// 	ws.on('tick', receiveTick);

// 	function receiveTick(data) {
// 		console.log('receiveTick:::::', data);
// 	}
// });

// ########################### Socket Sample Code Ends Here ###########################
