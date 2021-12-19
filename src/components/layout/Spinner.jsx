import spinner from "./assets/spinner.gif"

const Spinner = () => {
    return (
        <div className="w-100 mt-20">
            <img width={50} src={spinner} alt="data loading" className="text-enter mx-auto" />
        </div>
    )
}

export default Spinner
