1. delete index.css setpet.test. reportvitals logo2.
2. input value={}
you have to take e.target.value==>to get actual value of the input box; giving value is naot mandatory
3. passing children is special props for child component it should be in small letter

const GlobalContext=({children})=>{ 
    //chilern should be in small letter neither ui will not display

}

4.        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn'>X</button>

use this function for take treat this number as absolute possible to double negtibve sign shoud be avoided

5. make the state of array empty in global state
so you will not see any transaction


=====useDispacth====

{
    ey Points:
useDispatch is how you send actions to the Redux store from your components.
It’s simple and hooks directly into the Redux store, providing a dispatch function that you can use as needed.
Often combined with useSelector to both read from and write to the Redux store.
This hook is essential when you want your components to interact with the global state managed by Redux.
}

=====esline disable error===
// eslint-disable-next-line

==== caee error===
in global provider and   appreduce ispatch function
function name is case sensitve use same sentexe for that


//most of the error are due to type error  or missing curly braces

