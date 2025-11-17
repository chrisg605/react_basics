const Greet = () => {
    const name = "Hi";
    const date = new Date();

    return <div>
        <h1>{name}</h1>
        <p>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
    </div>

}

export default Greet;