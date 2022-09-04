(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let del = document.querySelector('.btn-del');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })


    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


    clear.addEventListener('click', function(e) {
        screen.value = '';
        
    })
    
    
    del.addEventListener('click', function(e) {
        screen.value = screen.value.slice(0, -1);
    })


})();
