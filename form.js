const fs=require('fs');


const btnGuardar = document.getElementById('btn-guardar');
const txtidentidad = document.getElementById("Identidad");
const txtombreprimero = document.getElementById("Primer_nombre");
const txtprimerapellido=document.getElementById("Primer_Apellido");
const edad=document.getElementById("Edad");
const txttelefono=document.getElementById("Telefono");


btnGuardar.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('Mostrando mensaje en la consola')
  /* console.log(txtidentidad.value)*/

 fs.open("./alumnos.csv",'a', function(error,archivo){
   if(error){
     console.log("Error al abrir el archivo");
     console.log(error);
     return;
   }

const linea=`\n${txtidentidad.value},${txtombreprimero.value},${txtprimerapellido.value},${edad.value},${txttelefono.value}`;

   fs.write(archivo,linea,
    function(err,written,string){
     if(err){
       console.log('Error al escribir los datos');
       console.log(err);
       return
     }
     console.log('se escribieron los datos exitosamente')
   });
});

});
