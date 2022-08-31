import {Item} from '../../ui/components/Molecules/Slide/styles'
var slideIndex = 1
showDivs(slideIndex)

export function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    var i
    var x = document.getElementsByClassName('item')

    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    x[slideIndex - 1].style.display = 'block'
}
