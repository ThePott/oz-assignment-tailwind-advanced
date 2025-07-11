const convertToEmoji = (index) => {
    switch (index) {
        case 0:
            return "👽"
        case 1:
            return "🥶"
        case 2:
            return "🤧"
        case 3:
            return "🥰"
        case 4:
            return "🥵"
        case 5:
            return "🔥"
        default:
            return "☀️"
    }
}


const FaceEmoji = ({ count }) => {
    const divider = [-500, -50, -5, 5, 50, 500]
    const index = divider.findIndex((int) => count < int)
    
    const emoji = convertToEmoji(index)
    return (
        <div className="text-9xl">{emoji}</div>
    )
}

export default FaceEmoji