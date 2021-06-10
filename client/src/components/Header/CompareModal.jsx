import React, {useState} from 'react'
import {Modal} from 'antd'
import CompareArrowsRoundedIcon from '@material-ui/icons/CompareArrowsRounded';
import {useSelector, useDispatch} from 'react-redux'
import CompareListItem from './CompareListItem';

function CompareModal() {

  const [visible, setVisible] = useState(false);
  const productsArr = []
  const dispatch = useDispatch()

  const {addProductToCompare} = useSelector(state => state.addProductToCompare)
  
  React.useEffect(() => {
    productsArr.push(addProductToCompare) 
    console.log(productsArr)
  }, [addProductToCompare, dispatch])

  return (
    <>
    <div onClick={() => setVisible(true)} className="header-option option-compare">
      <span>Compare</span>
      <CompareArrowsRoundedIcon />
    </div>
      <Modal
        title="Compare products"
        centered
        visible={visible}
        width={1000}
        onCancel = {() => setVisible(false)}
        footer = {[
        <button onClick={() => setVisible(false)}>Cancel</button>
      ]}
      >
      <div className="compare-content">
        <div className="compare-item">
          {
            productsArr?.map(({products}) => (
              <CompareListItem  name={products.name} key={products._id} />
            ))
          }
        </div>
      </div>
    </Modal>
    </>
  )
}

export default CompareModal
