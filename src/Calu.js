
import  React ,{useState} from "react";


import CalculateButton from "./calculateButton";

    const Hello = ()=>{
    
        const [isinitial , setIsinitial] = React.useState('0')

        const [current , setCurrent] = React.useState('0') //currentNumber

        const [total , setTotal] = React.useState('0') //finalNumber
    
        const [preOp , setPreOP] = React.useState('')   //operator

    
        //operand buttons
        function handleOperand(value){
            let newValue  = value

            if(!isinitial) //if we are in first state of caclculator and we have 0
                newValue = current + value

            setIsinitial(false)
            setCurrent(newValue)
            setTotal(total === '0' ?newValue:total)
            console.log(current)
        } 
        //operator buttons
        function handleOperator(value){
            setPreOP(value)
            var y =total
            var t = doCalculate(y);
            setIsinitial(true)
            setCurrent(t.toString())
            setTotal(t.toString())
        }
        //calculate
        function doCalculate(y){
            var total = parseInt(y)
            switch(preOp){
                case('+'):
                    total+=parseInt(current);
                    console.log(total);
                    break;
                case('-'):
                    total-=parseInt(current);
                    console.log(total)

                    break;
                case('×'):
                    total *=parseInt(current);
                    console.log(total )
                    
                    break;
                case('/'):
                    total/=parseInt(current)
                    console.log(total)
                    break;
                default:
                    total=parseInt(current)
            }
            return total
        }
      
        //clear button
        function clear(){
            setCurrent('0')
            setIsinitial(true)
            setPreOP('')
            setTotal('0')
        
        }
        return ( 
            <div className='calc'>
                <div className="display">{current}</div>
                <CalculateButton value = '7' onClick={handleOperand} /> 
                <CalculateButton value = '8' onClick={handleOperand} /> 
                <CalculateButton value = '9' onClick={handleOperand} /> 
                <CalculateButton className = 'operator' value = '×' onClick={handleOperator} /> 

                <CalculateButton value = '4' onClick={handleOperand}/> 
                <CalculateButton value = '5' onClick={handleOperand}/> 
                <CalculateButton value = '6' onClick={handleOperand}/> 
                <CalculateButton className = 'operator' value = '-' onClick={handleOperator}/> 

                <CalculateButton value = '1' onClick={handleOperand}/> 
                <CalculateButton value = '2' onClick={handleOperand}/> 
                <CalculateButton value = '3' onClick={handleOperand}/> 
                <CalculateButton  className = 'operator' value = '+' onClick={handleOperator}/> 

                <CalculateButton value = 'C' onClick = {clear} /> 
                <CalculateButton value = '0' onClick={handleOperand}/> 
                <CalculateButton value = '=' onClick={handleOperator}/> 
                <CalculateButton  className = 'operator' value = '/' onClick={handleOperator}/> 
            </div>
        )     
    }
    
export default Hello