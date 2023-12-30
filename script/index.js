function toggleItemState(el){
    const mEl = el.closest('.row_thumbs')
    const isOpen = mEl.classList.contains('open')
    mEl.classList.toggle('open', !isOpen)
}

const thumbItems = document.querySelectorAll('.thumb_item.thumb')
thumbItems.forEach(el => {
    el.addEventListener('click', () => {
        toggleItemState(el)
    })
})
