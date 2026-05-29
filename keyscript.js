

window.addEventListener('keydown',keychange)



function keychange(d)
{
    let h1 = document.querySelector('.main-title')
    if (d.key === ' ')
    {
        h1.textContent= 'SPC'
    } else if(d.key==='Escape'){h1.textContent='Welcome'}
    else
    {
        h1.textContent = d.key
    
    }
}