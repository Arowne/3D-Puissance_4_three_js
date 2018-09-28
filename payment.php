<?php 
require('vendor/autoload.php');
require('config/paypal.php');
require('model/set_php.php');
$offers = $ReqDb->existOffers();
$ids=getAppInfo();



/*Instantiation envoi de produits*/

        $list = new \PayPal\Api\ItemList();
        foreach ($offers as $product) {
            $item = (new \PayPal\Api\Item())
                ->setName($product->nom)
                ->setPrice($product->prix)
                ->setCurrency('EUR')
                ->setQuantity(1);
            $list->addItem($item);
        }


        $amount = (new \PayPal\Api\Amount())
            ->setTotal($product->prix)
            ->setCurrency("EUR");

        $transaction = (new \PayPal\Api\Transaction())
            ->setItemList($list)
            ->setDescription('Achat de Puissance sur Puissance 4 Ronron')
            ->setAmount($amount)
            ->setCustom($offers[0]->id." ".$_SESSION['id_membre']);


$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        $ids['id'],
        $ids['secret']
    )
);

$payment = new \PayPal\Api\Payment();
$payment->setTransactions([$transaction]);
$payment->setIntent('sale');
$redirectUrls = (new \PayPal\Api\RedirectUrls())
    ->setReturnUrl('https://localhost/JavaScript_Puissance4/pay.php?o='.$offers[0]->id)
    ->setCancelUrl('https://localhost/JavaScript_Puissance4/index.php?page=offers');
$payment->setRedirectUrls($redirectUrls);
$payment->setPayer((new \PayPal\Api\Payer())->setPaymentMethod('paypal'));

try {
    $payment->create($apiContext);
    header('Location: ' . $payment->getApprovalLink());
} catch (\PayPal\Exception\PayPalConnectionException $e) {
    var_dump(json_decode($e->getData()));
}
?>
<img src="img/ajax-loader-gears.gif">