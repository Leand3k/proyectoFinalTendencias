const Articulo = require("../models/Articulo.Model");


// Agregar nuevo artículo
exports.create = (req, res) => {
    //Validate request
    if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
     });
    } 

   console.log('req data', req.body);
   const articulo = new Articulo(req.body.Cantidad, req.body.IdTipoArticulo, req.body.Nombre, req.body.Precio);
  
   Articulo.create(articulo, (err, data) => {
    if (err)
     res.status(500).send({
     message:
        err.message || "Ocurrio un Error al crear un Articulo."
    });
    else res.send(data);
    res.send({success: true, message: 'Articulo agregado exitosamente'});
   });
  };

// Obtener todos los artículos en existencia
exports.getItems = (req, res) => {
  Articulo.get((err, items)=>{
    if(err)
    res.send(err);
    console.log('Articulos', items);
    res.send(items)
    //res.json({success: true, message: 'Articulo extraídos correctamente'});
  })
}


exports.delete=(req, res) => {
  Articulo.delete(req.body.IdArticulo, (err, item) =>{
    if(err)
    res.send(err);
    res.send({success: true, message: 'Articulo eliminado exitosamente'});
  });
}