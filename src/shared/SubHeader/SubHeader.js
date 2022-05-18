import "./style.css"
export default function SubHeader({ headerClass, headerTitle }){
    return(
        <header className={headerClass}>
            <h1 className="subHeaderTitle">{headerTitle}</h1>
        </header>
    )
}