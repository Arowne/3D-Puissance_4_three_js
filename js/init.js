var camera, scene, renderer;
var scene2, renderer2;
var r, r2;
var a3 = document.getElementById("gameSound");
init();
function playSound(){
  a3.volume = 0.2;
  a3.play();
}
function init() {
  $(window).hover(function(){
    playSound();
  });
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100000 );
  scene = new THREE.Scene();


  var ALight = new THREE.AmbientLight(0xffffff, 0.5);
  var PLight = new THREE.PointLight(0xffffff, 0.5);


  scene.background =  new THREE.TextureLoader().load('js/sky.JPG');
  scene2 = new THREE.Scene();

  scene.add(ALight);
  scene.add(PLight);



  setGrille();
  setButtonReturn();
  setButtonReload();
  setFloar();
  setRoad();
  setHome();
  setRoadStripes();


  //CREATION DU ESPACE 3D
  renderer = new THREE.WebGLRenderer( {canvas: document.querySelector('#canvas'), antialias: true } );
  renderer.setClearColor(0x00ff00);
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //CREATION ESPACE 3D DOM
  renderer2 = new THREE.CSS3DRenderer();
  renderer2.setSize( window.innerWidth, window.innerHeight );
  renderer2.domElement.style.position = 'absolute';
  renderer2.domElement.style.top = 0;
  document.body.appendChild( renderer2.domElement );



  camera.position.z -= 680;
  camera.position.y += 600;
}



// ANIMATION/TEXT

function text($text,fontSize,color,x,y,cube){
  var winner = true;
  var tMaterial = new THREE.MeshLambertMaterial({
    color: color,
  });

  var fLoader = new THREE.FontLoader();
  var font = fLoader.parse(fontJSON);
  var win = new THREE.TextGeometry($text,{font: font, size: fontSize, height: 10, material: 0,bevelThickness: 1, extrudeMaterial: 1});

  var text = new THREE.Mesh( win, tMaterial);
  text.position.set(x,y,-1000);
  scene.add(text);
  renderer.render( scene, camera );
  renderer2.render( scene2, camera );
  if (cube == true) {
    $('table').css('display', 'none');
  }
}

text("RETURN",20,0xffffff,370,200);
text("RESTART",20,0xffffff,370,0);
text('CREDITS',20,0xffffff,-370,100);
text($('#credit').val(),20,0xffffff,-370,50);
text('Player 1',20,0xffffff,-370,-0);
text('Player 2',20,0xffffff,-370,-70);


var turn = {t: 0, t2:0};
function rotateRing(){
      turn.t++;
      r.rotation.y += 0.5;
      renderer.render( scene, camera );
      renderer2.render( scene2, camera );
      if(turn.t < 18){
        requestAnimationFrame(rotateRing);
      }
      else{
        turn.t = 0;
        r.rotation.y = 0;
      }
}

function rotateRing2(){
      turn.t2++;
      r2.rotation.y -= 0.5;
      renderer.render( scene, camera );
      renderer2.render( scene2, camera );
      if(turn.t2 < 18){
        requestAnimationFrame(rotateRing2);
      }
      else{
        turn.t2 = 0;
        r.rotation.y = 0;
      }
}

requestAnimationFrame(rotate);
var i = {c : 0};
function rotate(){
  i.c++;
  camera.position.z += 10;
  camera.position.y -= 10;
  renderer.render( scene, camera );
  renderer2.render( scene2, camera );
  if (i.c<60) {
      requestAnimationFrame(rotate);
  }
  else{
      $('#Puissance4').puissance4(7,6,$.cookie('p1'),$.cookie('p2'));
  }
}
