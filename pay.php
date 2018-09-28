<?php 
require('vendor/autoload.php');
require('config/paypal.php');
require('model/set_php.php');

$offers = $ReqDb->existOffers();
$ids=getAppInfo();

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        $ids['id'],
        $ids['secret']
    )
);

$payment = \PayPal\Api\Payment::get($_GET['paymentId'], $apiContext);

$execution = (new \PayPal\Api\PaymentExecution())
			->setPayerId($_GET['PayerID'])
			->setTransactions($payment->getTransactions());
try {
    $payment->execute($execution, $apiContext);
   	$custom = $payment->getTransactions()[0]->getCustom();
   	$info = explode(" " , $custom);
   	$ReqPayPal->setCredit($info);
} catch (\PayPal\Exception\PayPalConnectionException $e) {
    var_dump(json_decode($e->getData()));
}