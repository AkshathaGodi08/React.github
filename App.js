import React from "react";
import "./index.css";
import Plan from "./Plan";
class App extends React.Component{
    state = {
        items:[],
        text:""
    }
    handleChange = e=>{
       this.setState({text:e.target.value})
  }
  handleClick = e=>{
 if(this.state.text !=""){
        const items = [...this.state.items,this.state.text];
        this.setState({items:items,text:""})
    }
  }
  handleDelete = id=>{
    // alert("deleted button working");
    const Olditems = [...this.state.items];
    const items = Olditems.filter((element,i)=>{
     return i!= id
    })
    this.setState({items:items})
  }
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 mx-auto shadow p-5">
              <h1 className="text-center">Todo Application</h1>
                </div>
              <div className="row">
                <div className="col-9">
                    <input type="text" placeholder="write something here..." className="form-control" value={this.state.text} onChange={this.handleChange}/>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-info" onClick={this.handleClick}>Post</button>
                </div>
              </div>
              <ul className="row list-unstyled">
                {
                    // console.log(this.state.items)
                    this.state.items.map((value,i)=>{
                    return <Plan value={value} key={i} sendFunc={this.handleDelete} id={i}
                  />
                    })
                }
                </ul>
            </div>
            <footer class="footerstyling text-center">
              <h3 class="text-muted">&copy;copyright by Akshatha</h3>
            </footer>
            </div>
        )
    }
}
export default App;