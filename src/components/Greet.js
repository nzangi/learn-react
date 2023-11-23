export const Greet = (props) => {
        return (
            <div>
                <h1>
                    Hello,Welcome to React Learning {props.name} A.K.A {props.heroName}
                </h1>
                {props.children}
            </div>
        )
}

// export default Greet