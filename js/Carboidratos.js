
          $(document).ready(function() {
            $('#Carboidratos').DataTable();
        } );
        


$(document).ready(function(){
    $.getJSON("./json/data.json", function (data){
      var Carboidratos_data = '';
      $.each(data, function(key,value){
        Carboidratos_data +='<tr>';
        Carboidratos_data +='<td>'+value.nome+'</td>'
        Carboidratos_data +='<td>'+value.gramas+'</td>'
        Carboidratos_data +='<td>'+value.proteina+'</td>'
        Carboidratos_data +='<td>'+value.sodio+'</td>'
       
      });
      $('#Carboidratos').append(Carboidratos_data);
    });
});



    


    
 
