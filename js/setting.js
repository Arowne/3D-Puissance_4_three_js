function setGrille(){

  // CADRE 3D GRILLE
  var geometry = new THREE.CubeGeometry( 550, 500, 150);
  var pMaterial=  new THREE.MeshPhongMaterial({color: 0x5800FF, transparent: true, opacity: 0.8});
  var mesh = new THREE.Mesh( geometry, pMaterial );
  mesh.position.set(0,0,-1300);
  scene.add(mesh);

  //IMPORTION DE LA GRILLE
  var element = document.createElement( 'div' );
  element.setAttribute('id', 'Puissance4');
  element.style.width = '500px';
  element.style.height = '520px';
  var object = new THREE.CSS3DObject( element );
  object.position.set(0, 0,-1300);
  object.rotation.z = -90 * Math.PI / 180;
  scene2.add( object );
}

function setPlayerPannel(){

  //IMPORTION DE LA GRILLE
  var panel = document.createElement( 'div' );
  panel.setAttribute('id', 'Panel');
  panel.style.width = '10000px';
  panel.style.height = '10000px';
  panel.style.backgroundColor = "rgba(255,255,255, 0.0)";
  var pObject = new THREE.CSS3DObject( panel );
  pObject.position.set(0,0,-1300);
  scene2.add( pObject );

}

function setHome(){
    //IMPORTION DE LA GRILLE
    var home = document.createElement( 'i' );
    home.setAttribute('class', 'fas fa-home');
    home.style.width = '150px';
    home.style.height = '150px';
    home.style.fontSize = '70px';
    home.style.color = 'black';
    home.style.cursor = 'pointer';
    home.style.backgroundColor = "rgba(255,255,255, 0.0)";
    var hObject = new THREE.CSS3DObject( home );
    hObject.position.set(-350,-250,-1300);
    scene2.add( hObject );
}

function setButtonReturn(){
  // BUTTON PREVIOUS
  var element = document.createElement('button');
  element.setAttribute('id', 'back');
  element.style.width = '150px';
  element.style.height = '150px';
  var object2 = new THREE.CSS3DObject( element );
  object2.position.set(500, 0,-1200);
  object2.rotation.z = -90 * Math.PI / 180;
  scene2.add( object2 );

  var rGeometry = new THREE.TorusGeometry( 50, 20, 16, 100 );
  var gMaterial=  new THREE.MeshPhongMaterial({color: 0x5cb85c});
  var ring = new THREE.Mesh( rGeometry, gMaterial );
  ring.position.set(500,140,-1200);
  r = ring;
  scene.add(ring);
}


function setButtonReload(){
  // BUTTON RELOAD
  var element = document.createElement('button');
  element.setAttribute('id', 'back2');
  element.style.width = '150px';
  element.style.height = '150px';
  var object2 = new THREE.CSS3DObject( element );
  object2.position.set(500, -90,-1200);
  object2.rotation.z = -90 * Math.PI / 180;
  scene2.add( object2 );

  var rGeometry = new THREE.TorusGeometry( 50, 20, 16, 100 );
  var gMaterial=  new THREE.MeshPhongMaterial({color: 0xd9534f});
  var ring2 = new THREE.Mesh( rGeometry, gMaterial );
  ring2.position.set(500,-90,-1200);
  r2 = ring2;
  scene.add(ring2);
}

function setFloar(){
  // FLOAR
  var fGeometry = new THREE.PlaneGeometry(10000, 10000, 100,100);
  var fMaterial = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('herbe.jpg')});
  var floar = new THREE.Mesh(fGeometry, fMaterial);
  floar.rotation.x = -90 * Math.PI / 180;
  floar.position.y = -250;
  scene.add(floar);

}

function setRoad(){
  // ROAD
  var rGeometry = new THREE.PlaneGeometry(1500, 10000, 100,100);
  var rMaterial = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('js/texture.jpg')});
  var road = new THREE.Mesh(rGeometry, rMaterial);
  road.rotation.x = -90 * Math.PI / 180;
  road.position.y = -249;
  scene.add(road);
}


function setRoadStripes(){
  // STRIPES
  var sGeometry = new THREE.PlaneGeometry(50, 10000, 100,100);
  var sMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  var stripe = [];

  for (var i = 0; i < 2; i++) {
    stripe[i] = new THREE.Mesh(sGeometry, sMaterial);
    stripe[i].rotation.x = -90 * Math.PI / 180;
    stripe[i].position.y = -248;
    stripe[i].position.x = -750 + (i* 1500);
    scene.add(stripe[i]);
  }




  //MIDDLE STRIPES
  var msStripe = [];
  var msGeometry = [];
  var msMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});

  for (var i = 0; i < 10; i++) {
    msGeometry[i] = new THREE.PlaneGeometry(50, i*1000, 100,100);
    msStripe[i] = new THREE.Mesh(msGeometry[i], msMaterial);
    msStripe[i].rotation.x = -90 * Math.PI / 180;
    msStripe[i].position.y = -248;
    scene.add(msStripe[i]);
  }
}
