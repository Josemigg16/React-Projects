const ErrorMessage = ({ text }) => {
    return (
        <div className="w-full text-white bg-red-700 text-center font-medium py-2 text-xl rounded-sm mb-5 ">
            <h3>{text}</h3>
        </div>
    )
}

export default ErrorMessage