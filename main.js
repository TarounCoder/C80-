var student_array=[];

function submit(){
     var display_array=[];

     for(var j=1;j<=4;j++){
         var student_name=document.getElementById("name_of_the_student_"+j).value;
         console.log(student_name);
         student_array.push(student_name);
     }
     var length_student_array=student_array.length;
     for(var k=0;k<length_student_array;k++){
         display_array.push("<h4> Name - "+student_array[k]+"</h4>");
        console.log(display_array);
     }
     console.log(display_array);
     document.getElementById("display_name_with_commas").innerHTML=display_array;

     var remove_commas=display_array.join(" ");
     console.log(remove_commas);
     document.getElementById("display_name_without_commas").innerHTML=remove_commas;

     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
    
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    var sorting_array=[];
    var length_student_array=student_array.length;
    for(var k=0;k<length_student_array;k++){
        sorting_array.push("<h4> Name - "+student_array[k]+"</h4>");
       console.log(sorting_array);
    }
    console.log(sorting_array);

    var remove_commas=sorting_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}