let header_links = document.querySelectorAll('#nav_links')
let contact_span = document.querySelectorAll('.contact_span')
let contact_section = document.querySelector('.contact_section')
let close_contact = document.querySelector('.close_contact')

// height buffer for scrolling
let nav_height = document.querySelector('.navigation').scrollHeight
let intro_section = document.querySelector('.intro_section')
intro_section.style.marginTop = nav_height + 'px'

close_contact.addEventListener('click', () => {
    if (contact_section.classList.contains('active')) {
        contact_section.classList.remove('active')
    }
})

header_links.forEach(
    link => {
        link.addEventListener(
            'click', () => {
                let target = link.getAttribute('--nav_link')
                let target_element = document.getElementsByClassName(target)[0]
                try {
                    target_element.scrollIntoView({ behavior: 'smooth' })
                    console.log(target_element.scrollIntoView({ behavior: 'smooth' }))
                } catch(e) {
                    console.log(e)
                }
            }
        )
    }
)

contact_span.forEach(
    section => {
        section.addEventListener(
            'click', () => {
                if (!contact_section.classList.contains('active')) {
                    contact_section.classList.add('active')
                }
            }
        )
    }
)