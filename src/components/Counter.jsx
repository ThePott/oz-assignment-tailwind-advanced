import { CountContext,  useCount } from "../hooks"
import FaceEmoji from "./FaceEmoji"
import LongButton from "./LongButton"


const Counter = () => {
    const { count, countDispatch } = useCount()
    const deltaArray = [1, 10, 100]

    return (
        <CountContext.Provider value={{countDispatch}}>
            <div className="w-xl h-[500px] bg-zinc-900 flex flex-col justify-center gap-6 items-center rounded-3xl">

                <h1 className="text-zinc-50 text-3xl">Count HARD</h1>
                
                <FaceEmoji count={count} />
                
                <h2 className="text-zinc-50 text-2xl">{count}</h2>
                
                <div className="flex gap-6">
                    {deltaArray.map((delta, index) => <LongButton key={index} delta={delta} />)}
                </div>


            </div>
        </CountContext.Provider>
    )
}

export default Counter