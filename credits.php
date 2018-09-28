<?php 
    if (!isset($_SESSION['id_membre'])) {
        ?><script type="text/javascript">window.location = 'index.php?page=acceuil'</script><?php
    }
    $offers = $ReqDb->getOffers();
?>
<header>
    <link href="style/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="style/acceuil3.css" rel="stylesheet" type="text/css" media="all"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
</header>
<body class="body">

<!-- CREDITS PAIMENT -->
<div class="container " style="height: 100%;width: 100%;background-color: rgba(0,0,0,0.5)">

<div class="page-header">
</div>

<!-- Credit Card Payment Form - START -->
<button class="btn btn-success btn-lg button-carrousel" style="float: left;margin-top: 15%;"><i class="fas fa-chevron-left"></i></button>
<button class="btn btn-success btn-lg button-carrousel" style="float: right;margin-top: 15%;"><i class="fas fa-chevron-right"></i></button>
<?php foreach ($offers as $offer): ?>
    <div class="mySlides" style="margin-left:-150px;width: 100%">
        <div class="row">
            <div class="col-xs-12 col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <h3 class="text-center">Achats de Puissance <?= $offer->credits?> <i class="fab fa-product-hunt"></i></h3>
                            <img class="img-responsive cc-img" src="image/creditcardicons1.png">
                        </div>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="row">
                                <div class="col-xs-12" style="text-align: center;">
                                    <img src="img/offre/<?= $offer->id?>.png" style="height: 250px;width: 250px;margin: auto;">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12" style="text-align: center;font-weight: bold;font-size: 20px;">
                                    <?= $offer->nom." PACK";?>
                                </div>
                            </div>
                            <div class="row" style="text-align: center;font-weight: bold;font-size: 15px;">
                                <div class="col-xs-12">
                                    <?= number_format($offer->prix,2,',',' ')." €";?>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-xs-12">
                                <button class="btn btn-success btn-lg btn-block achat" value="<?= $offer->id?>">Achat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endforeach ?>
<!-- Credit Card Payment Form - END -->

</div>
<script type="text/javascript" src="js/buy.js"></script>
<script type="text/javascript" src="js/slideshow.js"></script>
<!-- END CREDITS PAIMENT -->
</body>
