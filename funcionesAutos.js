
const autos = require('./listaAutos');
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
        const auto = this.listaDeVentas();
        if (auto.length===0) {return 0} else
        return auto.reduce(function(num, acum) {return num + acum});
      },


    
           
    puedeComprar: function (patente, persona = {
      nombre: "Juan",
      capacidadDePagoEnCuotas: 20000,
      capacidadDePagoTotal: 100000
    }) {

      let autoDisponible = this.buscarAuto(patente)

      if (autoDisponible.length > 0) {
        if (((persona.capacidadDePagoTotal) >= (autoDisponible.precio)) && ((persona.capacidadDePagoEnCuotas >= (autoDisponible.precio / autoDisponible.cuotas)))) {
          return true;
        }

      }


    },

}
          
      
    

    //console.log(concesionaria.venderAuto('APL123'));
    //console.log(concesionaria.buscarAuto("APL123"));
    //console.log(concesionaria.venderAuto('JJK116'));
    //console.log(concesionaria.autosNuevos());
    //console.log(concesionaria.autos);
    //console.log(concesionaria.listaDeVentas());
    //console.log(concesionaria.totalDeVentas());
    //console.log(concesionaria.autosParaLaVenta());
    //console.log(autos.length);
    console.log(concesionaria.puedeComprar('JJK116', ));
