import React, { PropTypes } from 'react';
import VirtualMachine from './vm';
import { connect } from 'react-redux';

const VMList = ({ vms }) => (
  <ul>
    {vms.map(vm =>
      <VirtualMachine
        key={vm.id}
        {...vm}
      />
    )}
  </ul>
)

VMList.propTypes = {
  vms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired)
}

const mapStateToProps = (state) => ({
  vms: state
})

const VisibleVMList = connect(
  mapStateToProps
)(VMList)

export default VisibleVMList
