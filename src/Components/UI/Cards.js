import './Cards.css';
const Cards=(props)=>{
    const stylecss='Cards '+props.className;
    return <div className={stylecss} >
        {props.children}
    </div>
}
export default Cards;