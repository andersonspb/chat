import { connect } from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  null
)(HeaderComponent)

export default HeaderContainer
