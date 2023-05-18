# Espresso Javascript Client SDK

```bash
myespresso is a NodeJS library that provides a set of tools and functionalities for interacting with the Espresso trading platform.
With myespresso, users can access a variety of trading-related information such as stock prices, market trends, historical data,
stream live market data (WebSockets), and more.It also provides the ability to execute trades and orders in real time.
```

## Installation

Install via [npm](https://www.npmjs.com/package/myespresso)

```bash
npm i myespresso
```

## Getting started with API

```javascript
let { EspressoApi, WebSocket } = require("myespresso");


let espresso_api = new EspressoApi({
	api_key: 'YOUR_API_KEY',
	state: 'YOUR_STATE',
	customer_id: 'YOUR_CUSTOMER_ID',
	//  OPTIONAL  If user does not have valid access token then use generateSession method
	// access_token:
	// 	'YOUR_ACCESS_TOKEN',
});

// If user does not have valid access token then use generateSession method
espresso_api
	.generateSession(
		'YOUR_REQUEST_TOKEN',
		'YOUR_SECRET_KEY'
	)
	// pass request token in generateSession method as an argument
	.then((data) => {
		console.log('data::::::', data);
    let token ="YOUR_TOKEN"
    SetToken method
    espresso_api.setAccessToken(token);

    // fundDetails method
    let exchange = 'NC';
    return espresso_api.getFundsDetails(exchange)

    //place new order
    return  espresso_api.placeNewOrder({
    "customerId": XXXX,
    "scripCode": 2475,
    "tradingSymbol": "ONGC",
    "exchange": "NC",
    "transactionType": "B",
    "quantity": 1,
    "disclosedQty": 0,
    "price": "92.50",
    "triggerPrice": "0",
    "rmsCode": "ANY",
    "afterHour": "N",
    "orderType": "NORMAL",
    "channelUser": "XXXXX",
    "validity": "GFD",
    "requestType": "NEW",
    "productType": "INVESTMENT"
    })

    // modify order
    return espresso_api.modifyOrder({
    "orderId":"XXXX"
    "customerId": XXXX,
    "scripCode": 2475,
    "tradingSymbol": "ONGC",
    "exchange": "NC",
    "transactionType": "B",
    "quantity": 1,
    "disclosedQty": 0,
    "executedQty":0,
    "price": "95",
    "triggerPrice": "0",
    "rmsCode": "SKSIMNSE1",
    "afterHour": "N",
    "orderType": "NORMAL",
    "channelUser": "XXXXX",
    "validity": "GFD",
    "requestType": "MODIFY",
    "productType": "INVESTMENT"
    })

    // cancel order
    return  espresso_api.cancelOrder({
    "orderId":"XXXX"
    "customerId": XXXX,
    "scripCode": 2475,
    "tradingSymbol": "ONGC",
    "exchange": "NC",
    "transactionType": "B",
    "quantity": 1,
    "disclosedQty": 0,
    "executedQty":0,
    "price": "95",
    "triggerPrice": "0",
    "rmsCode": "SKSIMNSE1",
    "afterHour": "N",
    "orderType": "NORMAL",
    "channelUser": "XXXXX",
    "validity": "GFD",
    "requestType": "CANCEL",
    "productType": "INVESTMENT"
    })

    // cancel order by id
    return espresso_api.cancelOrderById("order_id").

    // one day trade history
    return espresso_api.getAllOrdersHistoryOfDay()

    // Retrieve all trade history
    return  espresso_api.getAllTradesHistory()


    //Retrieve hitory by order id
    return  espresso_api.getHistoryByOrderID(exchange,orderID)


    //Retrieve trade by order id
    return  espresso_api.getTradeGeneratedByOrder(exchange,orderID)

    //Retrieve holding details
    return  espresso_api.getHoldings()

    //Retrieve active script details
    return  espresso_api.getActiveScriptOfDay('NC')

    //Retrieve script details
    return  espresso_api.getScriptMasterCSV('NC')
	})
	.catch((error) => {
		log error
	});


// ########################### Socket Sample Code Starts Here ###########################

let ws = new WebSocket({
	access_token:"YOUR_ACCESS_TOKEN"
	api_key: 'YOUR_API_KEY',
});

//to create connect
ws.connect().then(() => {
	let subscribe = {
		action: 'subscribe',
		key: ['feed'],
		value: [''],
	};
	let feedData = {
		action: 'feed',
		key: ['ltp'],
		value: ['NC22,NF37833,NF37834'],
	};
	let unsubscribe = {
		action: 'subscribe',
		key: ['feed'],
		value: ['NC22,NF37833,NF37834'],
	};

    //to subscribe
	ws.subscribe(subscribe);

    //to fetch data
	ws.fetchData(feedData);

    //to unsubscribe
	ws.unsubscribe(unsubscribe);

	ws.on('tick', receiveTick);

	function receiveTick(data) {
		console.log('receiveTick:::::', data);
	}
});

// ########################### Socket Sample Code Ends Here ###########################
```
