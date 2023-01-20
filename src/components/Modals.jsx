import Modal from 'react-bootstrap/Modal';
import close from '../images/icons/close.svg'
// onClick={props.onHide}
function Modals(props) {
  return (
    <Modal
    {...props}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <div className='p-4 modal_main'>
        <img src={close} alt="" className='close_icon' onClick={props.onHide} />
        <table>
            <tr>
                <th>Alert Type</th>
                <td>{props?.rowdata?.alert}</td>
            </tr>
            <tr>
                <th>Cam Id</th>
                <td>{props?.rowdata?.cam_id}</td>
            </tr>
            <tr>
                <th>Location</th>
                <td>{props?.rowdata?.location}</td>
            </tr>
            <tr>
                <th>Alert Time</th>
                <td>{props?.rowdata?.date}</td>
            </tr>
        </table>


        <img src={props?.rowdata?.img} alt="" className='w-100' />
    </div>
  </Modal>
  )
}

export default Modals