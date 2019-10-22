import React from 'react';
import Loader from '../components/Loader';

const Modal = ({show, close, loading, children}) => {
  return (
    <div className={show ? 'modal fade show' : 'modal fade'}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
         <div className="modal-header pb-0">
           <button type="button" className="close" onClick={close} >
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
          <div className="modal-body">
            {loading ? <Loader /> : children}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
