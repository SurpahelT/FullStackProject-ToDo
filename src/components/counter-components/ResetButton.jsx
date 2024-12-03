export default function ResetButton({resetMethod}) {
    function resetFunction(){
        resetMethod()
    }
    return (
        <div >
            <button className="resetButton" onClick={resetFunction} >Reset</button>
        </div>
    )
}