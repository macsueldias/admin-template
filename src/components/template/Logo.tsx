export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center
            h-14 w-14
            bg-white rounded-full
        `}>
            <div className={`h-3 w-3 rounded-full bg-red-600`}></div>
            <div className="flex">
                <div></div>
            </div>
        </div>
    )
}