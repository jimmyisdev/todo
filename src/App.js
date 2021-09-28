import TodoContainer from "./components/TodoContainer";
import Input from './components/Input';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  return {
    theme: state.global.theme,
  };
};

function App(props) {
  return (
    <div className={props.theme ? "" : "dark"}>
      <Header />
      <Input />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);

