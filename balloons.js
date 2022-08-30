$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    //array of animations
    const animations = ["animate__animated animate__jello",
    "animate__animated animate__rubberBand",
    "animate__animated animate__flash"
];
//generate random number based off array
const randomnumber = Math.floor(Math.random() * animations.length);
  console.log(randomnumber)
  //give "Happy Birthday" a random event
  $('#randomAnimation').addClass(animations[randomnumber]);

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

//event listener for mouse over  checkboxes

$('.form-check-label').on('mouseover', function(){
    $('#randomAnimation').css('color', $(this).data("color"));
})
$('.form-check-label').on('mouseout', function(){
    $('#randomAnimation').css('color', "slategray");
})




    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    //event listener for
    $('#submit').on('click', function(){
        //loop through the collection of check boxs
        var isChecked = false;
        $('.form-check-input').each(function () {
            //
            if ($(this).is(':checked')){
                isChecked = true;
            }
        

        });
        if (!isChecked){
            $('#toast').toast().toast('show');
        }
            
    });

    
    //event listener for select all

    $('#checkAll').on('click', function(){
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

        });
    })

    $('#unCheckAll').on('click', function(){
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
    })


});

