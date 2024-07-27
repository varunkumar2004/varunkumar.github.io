let header_links = document.querySelectorAll('#nav_links')
let span_contact = document.querySelectorAll('.contact_span')
let contact_section = document.querySelector('.contact_section')

console.log(contact_section)

header_links.forEach(
    link => {
        link.addEventListener(
            'click', () => {
                let target = link.getAttribute('--nav_link')
                let target_element = document.getElementsByClassName(target)[0]
                target_element.scrollIntoView({ behavior: 'smooth' })
            }
        )
    }
)

span_contact.forEach(
    section => {
        section.addEventListener(
            'click', () => {
                if (!contact_section.classList.contains('active')) {
                    contact_section.classList.add('active')
                } else {
                    contact_section.classList.remove('active')
                }
            }
        )
    }
)