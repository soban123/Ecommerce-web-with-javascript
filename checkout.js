
  var win = [];
var q = 0 ;
    var count = 0 ;
    var total = 0 ;
            function addtocart( itm , rs    ){
               total = rs + total ;

                count++   ;
                
                document.getElementById("cart").innerText = "items = " + count ; 

                 win.push( `   ${itm} of RS == ${rs} `);

            }
    
            function show(  ){   
                      var x =  document.getElementById("ok");
            //    var n = " <p> price is 400$   </p>" ; 
                if (x.className == "hidden"){ x.className = "block"; 
                // document.getElementById("ok").innerHTML = n ;
                //   }
                
                  } }
    
                  function  hide(){   
                
                var x = document.getElementById("ok") ;
                if (x.className == "block"){ x.className = "hidden";  }
                
                  }
    
                  function show1(  ){   
                      var x =  document.getElementById("ok1")
                if (x.className == "hidden"){ x.className = "block"; }
               
                //   }
                
                  }
    
                  function  hide1(){   
                
                var x = document.getElementById("ok1") ;
                if (x.className == "block"){ x.className = "hidden";  }}

                function show2(  ){   
                      var x =  document.getElementById("ok2")
                if (x.className == "hidden"){ x.className = "block"; }
               
                //   }
                
                  }
    
                  function  hide2(){   
                
                var x = document.getElementById("ok2") ;
                if (x.className == "block"){ x.className = "hidden";  }}


                function show3(  ){   
                      var x =  document.getElementById("ok3")
                if (x.className == "hidden"){ x.className = "block"; }
                               
                  }
    
                  function  hide3(){   
                
                        var x = document.getElementById("ok3") ;
                        if (x.className == "block"){ x.className = "hidden";  }
                  }

                function checkout(  ){

                    // document.write();
                                        for ( var i = 0 ; i < win.length ; i++  ){
                                            localStorage.setItem( "obj" , (` you purchase  ${count} items these are as follows  ` + win  ) );}
                                             
                                            localStorage.setItem( "total" ,  " your total bill is  total $ ==> "  + total + "$" ) ; 

                                            news();

                }                     
            
                function news(){

                    window.location.assign("./checkout.html");
                }


              
   var pb = {

  id : "10" ,
  name: "soban" ,
  email: "sbs@gmail.com",
}
console.log(  "sss" );