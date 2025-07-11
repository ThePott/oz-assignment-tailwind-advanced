import { useCountContext } from "../hooks"

const LongButton = ({delta}) => {
    const { countDispatch } = useCountContext()
    
    const handleUp = () => {
        countDispatch({type: "UP", delta})
    }

    const commonStyle = "text-xl text-center font-bold text-zinc-300"
    const buttonStyle = "border-1 border-zinc-600 rounded-xl p-2 hover:text-zinc-50 hover:border-zinc-500 active:bg-black"
    return (
        <div className="flex flex-col gap-3">
            <button className={`${commonStyle} ${buttonStyle}`} onClick={handleUp}>up</button>
            <p className={commonStyle}>{delta}</p>
            <button className={`${commonStyle} ${buttonStyle}`} onClick={() => countDispatch({type: "DOWN", delta})}>down</button>
        </div>
    )
}

export default LongButton
