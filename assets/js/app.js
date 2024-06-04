const imageElements = document.getElementsByClassName("carousel-image")

const imageSrc = [
    "https://picsum.photos/seed/1/300",
    "https://picsum.photos/seed/2/300",
    "https://picsum.photos/seed/3/300",
    "https://picsum.photos/seed/4/300",
    "https://picsum.photos/seed/5/300",
    "https://picsum.photos/seed/6/300",
    "https://picsum.photos/seed/7/300",
]

let disabled = false
let currentIndex = 0

function initImages() {
    if (!imageElements.length >= imageSrc.length) {
        alert(
            "Not enough image sources is given, please update the imageSrc variable. The script has disabled itself"
        )
        disabled = true

        return
    }

    for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].src = imageSrc[i]
    }
}

initImages()

function prev() {
    if (disabled) return

    currentIndex = (currentIndex - 1 + imageSrc.length) % imageSrc.length
    updateImages()
}

function next() {
    if (disabled) return

    currentIndex = (currentIndex + 1 + imageSrc.length) % imageSrc.length
    updateImages()
}

function updateImages() {
    if (disabled) return

    for (let i = 0; i < imageElements.length; i++) {
        const imageIndex = (currentIndex + i) % imageSrc.length
        imageElements[i].src = imageSrc[imageIndex]
    }
}
