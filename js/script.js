$(window).scroll(function(){
  if ($(window).scrollTop() > 250) {
      $('.header').addClass('scroll');
  }
  else {
      $('.header').removeClass('scroll')
  }
});

function resizeBlock(){
    var parent = $(".main_numbers"),
    parent_height = parent.outerHeight();
    $(".main_numbers_bcg").height(parent_height);
}
function canvasSize(){
    var parent = $(".main_solutions"),
    parent_height = parent.outerHeight();
    parent_width = parent.outerWidth();
    $("#lines").attr('height', parent_height);
    $("#lines").attr('width', parent_width);

}

function loadLines() {
    $('.main_solutions_item img');
    // console.log($('.main_solutions_item img'));
    var mainPosition = $(".main_solutions").offset();
    // console.log(mainPosition);
    var c = document.getElementById("lines"),
        ctx = c.getContext("2d"),
        arr = [];
    ctx.scale(1, 1);
    ctx.strokeStyle = '#0f4c46';
    ctx.lineWidth="2";
    $('.main_solutions_item img').each(function(key, val){
        let position = $(val).offset(),
            top = position.top - mainPosition.top,
            left = position.left,
            width = $(val).outerWidth(),
            height = $(val).outerHeight();
        top += height/2;
        left += width/2;
        arr[key] = { 
            top, left
        }

    });

    drowLine(ctx, {'left':0, 'top':arr[0].top - 40}, arr[0]);
    drowLine(ctx, arr[0], arr[1]);
    drowLine(ctx, arr[1], arr[2]);
    drowLine(ctx, arr[2], arr[3]);
    drowLine(ctx, arr[3], {'left': c.width,'top':arr[3].top - 40});


    drowLine(ctx, {'left':0, 'top':arr[4].top}, arr[4]);
    drowLine(ctx, arr[4], arr[5]);
    drowLine(ctx, arr[5], arr[6]);
    drowLine(ctx, arr[6], arr[7]);
    drowLine(ctx, arr[7], {'left': c.width,'top':arr[7].top});


    drowLine(ctx, {'left':0, 'top':arr[8].top + 40}, arr[8]);
    drowLine(ctx, arr[8], arr[9]);
    drowLine(ctx, arr[9], arr[10]);
    drowLine(ctx, arr[10], arr[11]);
    drowLine(ctx, arr[11], {'left': c.width,'top':arr[11].top + 40});


    drowLine(ctx, arr[0], arr[4]);
    drowLine(ctx, arr[4], arr[8]);

    drowLine(ctx, arr[1], arr[5]);
    drowLine(ctx, arr[5], arr[9]);

    drowLine(ctx, arr[2], arr[6]);
    drowLine(ctx, arr[6], arr[10]);

    drowLine(ctx, arr[3], arr[7]);
    drowLine(ctx, arr[7], arr[11]);
};

// function drowStroke(ctx, arr){
//     for(let i = 0; i < arr.lenght - 1; i++){
//         drowLine(ctx, arr[0], arr[1]);
//     }
// };


function drowLine(ctx, pos1, pos2){
    ctx.beginPath();
    ctx.moveTo(pos1.left,pos1.top);
    ctx.lineTo(pos2.left,pos2.top);
    ctx.closePath();
    ctx.stroke();
};



$(window).resize(function(){
    resizeBlock();
    canvasSize();
    loadLines();
});


window.onload = function(){
    resizeBlock();
    canvasSize();
    loadLines();
};


