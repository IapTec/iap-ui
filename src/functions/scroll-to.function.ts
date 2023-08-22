export function scrollTo(sectionId: string, gap = 74) {
    const section = document.querySelector<HTMLElement>(`#${sectionId}`)

    if (section) {
        window.scrollTo({
            top: section.offsetTop - gap,
            behavior: 'smooth'
        })
    }
}
