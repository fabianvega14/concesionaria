
const funcAutos = require('./listaAutos')


let concesionaria = {
    autos: funcAutos,
      
    buscarAuto: function(patente){
        const buscar = this.autos.find (auto => auto.patente===patente);
        if (buscar!=null) {return buscar} else return null},
    
    

    venderAuto: function(porPatente){
        const vender = this.buscarAuto(porPatente);
           vender.vendido=true;
      },  

    autosParaLaVenta: function(){
        const lista = this.autos;
        return lista.filter(listar => listar.vendido===false)
      },

    autosNuevos: function(){
        const lista = this.autosParaLaVenta();
        return lista.filter(listar => listar.km < 100)
      },

    listaDeVentas: function(){
        const lista = this.autos;
        array = lista.filter(listar => listar.vendido===true);
        return array.map(lista => lista.precio);
        
      },
          
    totalDeVentas: function(){
        const ventas = this.autos;
        let auto = ventas.filter(lista => lista.vendido===true);
        if (auto!=[]) {
        return auto.reduce(function (acum, num){
          return acum.precio + num.precio;
        })} else return 0
      
        },
    }

    //console.log(concesionaria.venderAuto('APL123'));
    //console.log(concesionaria.buscarAuto("APL123"));
    //console.log(concesionaria.venderAuto('JJK116'));
    //console.log(concesionaria.autosNuevos());
    //console.log(concesionaria.autos);
    //console.log(concesionaria.listaDeVentas());
    console.log(concesionaria.totalDeVentas());
    //console.log(concesionaria.autosParaLaVenta());