import { useState } from "react"
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";



export default function ListRendering() {

    let [data,setData]=useState([{id:1,name:"Karthik",age: 24,dept:"CSE",checked: true},
    {id:2,name:"Praveen",age: 28,dept:"ECE",checked: false},
    {id:3,name:"Prakash",age: 24,dept:"EEE",checked: true},
    {id:4,name:"Subash",age: 22,dept:"IT",checked: true}])

    const [isEdit,setIsEdit]=useState(false);

    let [input1,setInput1]=useState("");

    let [currentElementId,setCurrentElementId]=useState(null);

    function handleCheck(id)
    {
        let newItems= data.map((Element)=>
        
            {
                return(
               (Element.id==id ) ? {...Element,checked:!Element.checked} : Element
                )
            })
        setData(newItems);
    }

    function add_or_update(){
        if(isEdit==false)
        {
        let newData={id:data.length+1,name:input1,dept:"CSE",checked:true};
        let updatedData=[...data,newData];
        setData(updatedData);
        setInput1("");
        }
        else {

            let updatedElements=data.map((object)=>
            {
                 return (
                    (object.id==currentElementId) ? {...object,name:input1} : object
                 )
            })
            setData(updatedElements);
            setInput1("");
            setCurrentElementId(null);
           
        }
    }

    function handleEdit(id){
        let activeElement=data.find((Element)=>
        {
            return (
            (Element.id==id)
            ) 
        })
        setInput1(activeElement.name);
        setIsEdit(true);
        setCurrentElementId(id);
    }

    function handleDelete(id){
        let deletedList=data.filter((Element)=>
        {
            return (
            (Element.id!=id)
            )
        }).map((Element,index)=>{
            return(
                {...Element,id:index+1}
            
            )
        })
        setData(deletedList);
    }


return (
    <>

       <h1 style={{color:"violet"}}>CRUD APP</h1>

         <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} style={{padding:"10px"}}/> 

         <button onClick={()=>add_or_update(currentElementId)}  style={{backgroundColor: "lightgray",marginLeft:"10px"}}>{(isEdit) ? "Update Element" : "Add Element" }</button>

         <ul>
            {data.map((Element)=>{

            return(
            <li key={Element.id} style={{listStyleType:"none"}}>
                <input type="checkbox" checked={Element.checked} onChange={()=>handleCheck(Element.id)}/>
                <label>{Element.name}</label>
                <CiEdit onClick={()=> {handleEdit(Element.id)}} tabIndex={0}/>
                <MdOutlineDeleteOutline onClick={()=> {handleDelete(Element.id)}} tabIndex={0}/>

            </li>
            )
            }
            )}
            
            </ul>
         

    
    </>
)

}