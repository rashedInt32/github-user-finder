import React from 'react';
import Loader from '../components/Loader';

const Modal = (props) => {
  return (
    <div className={props.show ? 'modal fade show' : 'modal fade'}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
         <div className="modal-header">
           <button type="button" className="close" onClick={props.close} >
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
          <div className="modal-body">
            {props.loading ? <Loader /> : props.children}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
