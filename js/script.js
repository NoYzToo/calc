let doc = document


let output = doc.querySelector('.out')

let buttonsBlock = doc.querySelector('.buttons-block')

let allButtons = doc.querySelectorAll('.calc-buttons')



function calc() {
    output.value = '0';

    let a = '';
    let b = '';
    let res = '';
    let sign = '';



    buttonsBlock.addEventListener('click', (event) => {

        if (event.target.classList.contains('ac')) {
            a = '';
            b = '';
            res = '';
            sign = '';
            output.value = '0'
        }



        if (output.value.length < 9) {

            if (event.target.classList.contains('integers') && b == '' && sign == '') {
                a += event.target.innerText
                output.value = a
            }


            if (event.target.classList.contains('plus') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('plus') && sign != '' && b != '') {
                sign = '';
                sign = event.target.innerText
                res = +a + +b;
                a = res
                b = ''
                output.value = a;
            }

            if (event.target.classList.contains('minus') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('minus') && sign != '' && b != '') {
                sign = '';
                sign = event.target.innerText
                res = +a - +b;
                a = res
                b = ''
                output.value = a;
            }

            if (event.target.classList.contains('umnoj') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('umnoj') && sign != '' && b != '') {
                sign = '';
                sign = event.target.innerText
                res = +a * +b;
                a = res
                b = ''
                output.value = a;
            }

            if (event.target.classList.contains('delit') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('delit') && sign != '' && b != '') {
                if (+b == 0) {
                    output.value = 'Ошибка'
                    a = '';
                    b = '';
                    res = '';
                    sign = '';
                } else {
                    sign = '';
                    sign = event.target.innerText
                    res = +a / +b;
                    a = res
                    b = ''
                    output.value = a;
                }
            }

            if (event.target.classList.contains('delitOstatol') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('delitOstatol') && sign != '' && b != '') {
                sign = '';
                sign = event.target.innerText
                res = +a % +b;
                a = res
                b = ''
                output.value = a;
            }

            if (event.target.classList.contains('cuadro') && sign == '' && a != '') {
                res = +a * +a
                a = res
                output.value = a;
                b = ''
                res = ''
            }

            if (event.target.classList.contains('stepen') && sign == '' && a != '') {
                sign = event.target.innerText
                output.value = sign
            }
            else if (event.target.classList.contains('stepen') && sign != '' && b != '') {
                sign = '';
                sign = event.target.innerText
                for (let i = 0; i < +b; i++) {
                    res = +a * +a
                }
                a = res
                b = ''
                res = ''
                output.value = a;
            }


            if (event.target.classList.contains('integers') && sign != '') {
                b += event.target.innerText
                output.value = b
            }


            if (event.target.classList.contains('iculs') && sign != '' && a != '' && b != '') {

                if (sign == '+') {
                    res = +a + +b;
                    a = res
                    output.value = a
                }
                if (sign == '-') {
                    res = +a - +b;
                    a = res
                    output.value = a
                }
                if (sign == 'X') {
                    res = +a * +b;
                    a = res
                    output.value = a
                }
                if (sign == '÷') {
                    if (b == '0') {
                        res = 'Ошибка'
                    } else {
                        res = +a / +b;
                    }
                    a = res
                    output.value = a
                }
                if (sign == '%') {
                    res = +a % +b;
                    a = res
                    output.value = a
                }
                if (sign == 'X²') {
                    res = +a * +a
                    a = res
                    output.value = a
                }
                if (sign == 'X¹') {
                    res = +a
                    for (let i = 0; i < +b; i++) {
                        res = res * +a
                    }
                    a = res
                    output.value = a
                }


                // a = '';
                b = '';
                sign = '';
                res = '';
            }


        }


        else {
            output.value = 'Ошибка'
            a = '';
            b = '';
            res = '';
            sign = '';
        }
        console.log(a, b, res, sign)
    })
}

calc()