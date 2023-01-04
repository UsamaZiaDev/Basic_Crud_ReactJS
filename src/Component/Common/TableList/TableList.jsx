import  {MdModeEditOutline}  from "react-icons/md";
import  {GrFormView}  from "react-icons/gr";
import  {AiFillDelete, AiFillFileAdd}  from "react-icons/ai";

const TableList = (props) => {
  const {tableHead, listObj} = props
  
  
  return (
    <table className='table table-striped mt-5'>
        <thead>
            <tr className='bg-dark text-light'>
              {
                tableHead.length > 0 && tableHead.map(value => <th scope="col">{value}</th>)
              }
            </tr>
        </thead>
        <tbody>
              {
                listObj.map((item, index)=> 
                  <tr key={index}>
                    { Object.values(item).map(value => <td>{value}</td>) }      
                    <td className="d-flex align-items-center">
                      <GrFormView className="fs-4 me-1"/>
                      <MdModeEditOutline className="fs-4 me-1"/> 
                      <AiFillDelete className="fs-5"/>
                    </td>          
                  </tr>)
              }
        </tbody>
    </table>
  )
}

export default TableList