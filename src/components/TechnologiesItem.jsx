
const TechnologiesItem = ({name="JavaScript"}) => {

    return (
        <span className="flex items-center justify-center border border-gray-300 rounded-full px-2 py-1 text-sm">
            <p>{name}</p>
        </span>
    )
}

export default TechnologiesItem;