var color;
$.fn.puissance4 = function(x,y,c1,c2) {
    this.winner = {w: 0};
    this.turn = {t: 0};
    this.count = {c: 0,v: 0,da: 0, db: 0, dc: 0, dd: 0};
    $(this).append('<table id = "table"></table>');
    this.table = $('#table');
    this.tr  = $('<tr/>');
    this.td =$('<td/>');
    this.pion = $('<div class="div" style="z-index: -10"/>');
    this.c = y;
    this.r = x;
    this.remplissage= {r:0};
    this.player1 = c1;
    this.player2 = c2;
    this.memory;
    this.a1 = document.getElementById("myAudio");
    this.a2 = document.getElementById("audioReturn");
    this.a4 = document.getElementById("win");

      this.grille = function(){
          obj.td.append(obj.pion.clone());
          for (var i = 0; i < this.c; i++) {
              this.tr.append(this.td.clone());
          }

          for (var i = 0; i < this.r; i++) {
              obj.table.append(obj.tr.clone());
          }
      }



    this.plays = function(){
        if (obj.winner.w == 0) {
          $('tr').click(function(){
              obj.a1.play();
              if(obj.turn.t % 2 == 0){
                  text("PLAYER",50,obj.player1,-490,150,false);
                  for (var i = $(this).find('td').length-1; i >= 0 ; i--) {
                      if($(this).find('td')[i].className == ''){
                          obj.turn.t ++;
                          $(this).find('td')[i].className =   obj.player1;
                          $(this).find('td')[i].childNodes[0].setAttribute('class','div '+obj.player1.substring(0,1)+'');
                          obj.memory = $(this).find('td')[i];
                          break;
                      }
                  }
              }
              else{
                  text("PLAYER",50,obj.player2,-490,150,false);
                  for (var i = $(this).find('td').length-1; i >= 0; i--) {
                      if($(this).find('td')[i].className == ''){
                          obj.turn.t ++;
                          $(this).find('td')[i].className = obj.player2;
                          $(this).find('td')[i].childNodes[0].setAttribute('class','div '+obj.player2.substring(0,1)+'');
                          obj.memory = $(this).find('td')[i];
                          break;
                      }
                  }
              }
              obj.setting();
              obj.null();
          });
        }
    }

    this.previou = function(){
        $('#back').hover(function(){
            obj.a2.play();
            requestAnimationFrame(rotateRing);
            if(obj.memory !=''){
                obj.memory.className = "";
                obj.memory.childNodes[0].className="";
            }
        });
    }

    this.restart = function(){
        $('#back2').hover(function(){
            obj.a2.play();
            requestAnimationFrame(rotateRing2);
            setTimeout(function(){
              window.location = 'index.php?page=game';
            },200);
        });
    }

    this.palmares = function(){
      if (isNaN($.cookie('w1')) || isNaN($.cookie('w2'))) {
        document.cookie='w1='+0;
        document.cookie='w2='+0;
      }
      text($.cookie('w1'),20,0xffffff,-370,-30);
      text($.cookie('w2'),20,0xffffff,-370,-110);
    }

    this.setting = function(){
        var tr = document.querySelectorAll('tr');
        var td = document.querySelectorAll('td');

        // // Victoire horizontal
        for(var j = 0; j < obj.c; j++){
            obj.count.c = 0;
            for(var i = 0; i < tr.length; i++){
                if(tr[i].childNodes[j].getAttribute('class') == obj.player1){
                    obj.remplissage.r++;
                    obj.count.c++;
                     if(obj.count.c >= 4){
                       obj.winner = 1;
                       setTimeout(function(){
                          var add = parseInt($.cookie('w1'))+1;
                          document.cookie ='w1='+add;
                          obj.a4.play();
                          setPlayerPannel();
                          text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                       },0);
                     }
                }
                else{
                    obj.count.c = 0;
                }
            }
        }

        for(var j = 0; j < obj.c; j++){
            obj.count.c = 0;
            for(var i = 0; i < tr.length; i++){
                if(tr[i].childNodes[j].getAttribute('class') == obj.player2){
                    obj.remplissage.r++;
                    obj.count.c++;
                     if(obj.count.c >= 4){
                       obj.winner = 1;
                       setTimeout(function(){
                         var add = parseInt($.cookie('w2'))+1;
                         document.cookie = 'w2='+add;
                         obj.a4.play();
                         setPlayerPannel();
                         text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                       },0);
                     }
                }
                else{
                    obj.count.c = 0;
                }
            }
        }

        // //Victoire vertical
        for(var k = 0; k<obj.r;k++){
            obj.count.v = 0;
            for(var l = 0; l < obj.c; l++){
                if(tr[k].childNodes[l].getAttribute('class') == obj.player1){
                    obj.count.v ++;
                    if(obj.count.v >= 4){
                       obj.winner = 1;
                      setTimeout(function(){
                          obj.a4.play();
                          setPlayerPannel();
                          var add = parseInt($.cookie('w1'))+1;
                          document.cookie ='w1='+add;
                         text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                      },0);
                    }
                }
                else{
                    obj.count.v = 0;
                }
            }
        }

        for(var k = 0; k<obj.r;k++){
            obj.count.v = 0;
            for(var l = 0; l < obj.c; l++){
                if(tr[k].childNodes[l].getAttribute('class') == obj.player2){
                    obj.count.v ++;
                    if(obj.count.v >= 4){
                       obj.winner = 1;
                      setTimeout(function(){
                        obj.a4.play();
                        setPlayerPannel();
                        var add = parseInt($.cookie('w2'))+1;
                        document.cookie ='w2='+add;
                        text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                      },0);
                    }
                }
                else{
                    obj.count.v = 0;
                }
            }
        }

        // Victoire diagonal

        // DIAGONAL A

        for(var m = 0; m <obj.r; m++){
            obj.count.da = 0;
            for(var n = 0  ; n < obj.c; n++){
                if(tr[m+n]){
                    if( tr[m+n].childNodes[0+n].getAttribute('class') ==    obj.player1){
                        obj.count.da++;
                        if(obj.count.da >= 4){
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w1'))+1;
                            document.cookie ='w1='+add;
                            text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                          },0);
                        }
                    }
                    else{
                        obj.count.da = 0;
                    }
                }
            }
        }

        for(var m = 0; m <obj.r; m++){
            obj.count.da = 0;
            for(var n = 0  ; n < obj.c; n++){
                if(tr[m+n]){
                    if( tr[m+n].childNodes[0+n].getAttribute('class') == obj.player2){
                        obj.count.da++;
                        if(obj.count.da >= 4){
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w2'))+1;
                            document.cookie ='w2='+add;
                            text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                          },0);
                        }
                    }
                    else{
                        obj.count.da = 0;
                    }
                }
            }
        }


        //  DIAGONAL B

        for(var m = obj.r; m > 0; m--){
            obj.count.db = 0;
            for(var n = obj.c ; n > 0; n--){
                if(tr[m-n]){
                    if( tr[m-n].childNodes[obj.c-n].getAttribute('class') ==    obj.player1){
                        obj.count.db++;
                        if(obj.count.db >= 4){
                           obj.winner = 1;
                          setTimeout(function(){
                              obj.a4.play();
                              setPlayerPannel();
                              var add = parseInt($.cookie('w1'))+1;
                              document.cookie ='w1='+add;
                              text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                          },0);
                        }
                    }
                    else{
                        obj.count.db = 0
                    }
                }
            }
        }

        for(var m = obj.r; m > 0; m--){
            obj.count.db = 0;
            for(var n = obj.c ; n > 0; n--){
                if(tr[m-n]){
                    if( tr[m-n].childNodes[obj.c-n].getAttribute('class') == obj.player2){
                        obj.count.db++;
                        if(obj.count.db >= 4){
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w2'))+1;
                            document.cookie ='w2='+add;
                            text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                          },0);
                        }
                    }
                    else{
                        obj.count.db = 0
                    }
                }
            }
        }


        // DIAGONAL C

        for(var i = 0; i < obj.r; i++) {
            obj.count.dc = 0;
            for (var j = 0; j < obj.c; j++) {
                if(tr[j+i]){
                   if(tr[j+i].childNodes[obj.c-1-j].getAttribute('class') == obj.player1){
                        obj.count.dc ++;
                        if (obj.count.dc >= 4) {
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w1'))+1;
                            document.cookie ='w1='+add;
                            text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                          },0);
                        }
                   }
                   else{
                        obj.count.dc = 0;
                   }
                }
            }
        }

        for(var i = 0; i < obj.r; i++) {
            obj.count.dc = 0;
            for (var j = 0; j < obj.c; j++) {
                if(tr[j+i]){
                   if(tr[j+i].childNodes[obj.c-1-j].getAttribute('class') == obj.player2){
                        obj.count.dc ++;
                        if (obj.count.dc >= 4) {
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w2'))+1;
                            document.cookie ='w2='+add;
                            text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                          },0);
                        }
                   }
                   else{
                        obj.count.dc = 0;
                   }
                }
            }
        }

        // DIAGONAL D

        for (var j = 0; j < obj.r; j++) {
            obj.count.dd = 0;
            for( var i = obj.c; i > 0; i--){
                if(tr[i-j]){
                    if(tr[i-j].childNodes[obj.c-i].getAttribute('class') == obj.player1){
                        obj.count.dd ++;
                        if (obj.count.dd >= 4) {
                           obj.winner = 1;
                          setTimeout(function(){
                            obj.a4.play();
                            setPlayerPannel();
                            var add = parseInt($.cookie('w1'))+1;
                            document.cookie ='w1='+add;
                            text('The '+obj.player1+' player win',90,obj.player1,-620,250,false);
                          },0);
                        }
                    }
                    else{
                        obj.count.dd = 0
                    }
                }
            }
        }


        for (var j = 0; j < obj.r; j++) {
            obj.count.dd = 0;
            for( var i = obj.c; i > 0; i--){
                if(tr[i-j]){
                    if(tr[i-j].childNodes[obj.c-i].getAttribute('class') == obj.player2){
                        obj.count.dd ++;
                        if (obj.count.dd >= 4) {
                           obj.winner.w = 1;
                            setTimeout(function(){
                              obj.a4.play();
                              setPlayerPannel();
                              var add = parseInt($.cookie('w2'))+1;
                              document.cookie ='w2='+add;
                              text('The '+obj.player2+' player win',90,obj.player2,-620,250,false);
                            },0);
                        }
                    }
                    else{
                        obj.count.dd = 0
                    }
                }
            }
        }

    }

    this.null = function(){
        var j1 = document.querySelectorAll('.'+obj.player1).length;
        var j2 = document.querySelectorAll('.'+obj.player2).length;
        var g = j1+j2;
        if(g == 42){
          setTimeout(function(){
            setPlayerPannel();
            text('No winner',90,0x000000,-120,250,false);
          },0);
        }
    }
    this.menu = function(){
        $('.fa-home').click(function(){
          window.location = 'index.php?page=account';
        });
    }
    var obj = this;
    (function(){
        obj.grille();
        obj.plays();
        obj.previou();
        obj.restart();
        obj.palmares();
        obj.null();
        obj.menu();
    })();
}
