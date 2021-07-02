function pluss()
    {
        var Number1 = parseInt(document.getElementById('num1').value);
        var Number2 = parseInt(document.getElementById('num2').value);
        var Result;
        Result = Number1 - Number2;
        swal({
  title: "El Resultado Es ",
  text: "Este es tu numero de ganancias",
  icon: "success",
  Result,
  button: "FINALIZAR",
});
    }