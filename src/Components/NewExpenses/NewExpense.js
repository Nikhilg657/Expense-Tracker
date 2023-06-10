import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const newDataFromForm=(data)=>{
        props.newDataApp(data);
    }
    return (
        <div className="newexpense">
            <ExpenseForm newdata={newDataFromForm}/>
        </div>
    );
}
export default NewExpense;