export const Albom=({name,year,children})=>{
    return (
        <div className="albom">
            <h2>{name}</h2>
            <p>Relasce in {year}</p>
            {children}
        </div>
    )
}