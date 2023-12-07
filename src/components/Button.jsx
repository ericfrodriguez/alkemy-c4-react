// function Button(props) {
function Button({ label, tarea }) {

    // const { label } = props;


    return (
        <button onClick={() => tarea(label)}>{label}</button>
    )
}

export default Button;