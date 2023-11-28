export const NameList = () =>{
    const names = ["Bruce","Clark","Nzangi","Kanee"]

    return (
        <div>
            {
                names.map((name) =>{
                    return <h1 key={name}>{name}</h1>
                })
            }
        </div>
    )

}
