import React, { Component } from 'react';
import Header from './Components/Header';
import Item from './Components/Item';
import axios from 'axios';
const getDataNodejs = () =>axios.get('/getdata').then((res) =>  res.data)
const insertDataNodejs = (id,production_name,production_price,production_image) =>
 (axios.post('/add',{id,production_name,production_price,production_image}).then((resp) => resp.data))
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      id: '',
      production_name: '',
      production_price: '',
      production_image: ''
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }
  componentWillMount() {
    if(this.state.data===null)
    {
      getDataNodejs().then((res)=>{
        this.setState({
          data : res
        })
      })
    }
  }
  showInsert = () => {
    if(this.state.data)
    {
      return this.state.data.map((value , key) => {
        return  <Item key={key} name={value.production_name} price={value.production_price} image={value.production_image}/>
      })
    }
  }
  UpdateDataToCsdl = () => {
    var {id,production_name,production_price,production_image} = this.state;
    insertDataNodejs(id,production_name, production_price,production_image).then((res) => {
      console.log(res);
    })
  }
  render() { 
    return (
      <div>
        <Header/>
  
        <div className="container">
          <div className="row">
              {this.showInsert()}
              <div className="col-3">
                   
                 <form>
                 <div className="form-group"><label htmlFor="id">Nhap id</label><input className="form-control"  id="id" type="text" name="id" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="nhap id" /><small className="form-text text-muted" id="helpId">nhapId</small></div>
                   <div className="form-group"><label htmlFor="name">Nhap ten</label><input className="form-control"   id="name" type="text" name="production_name" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="nhap ten vao day" /><small className="form-text text-muted" id="helpId">nhap ten</small></div>
                   <div className="form-group"><label htmlFor="price">Nhap gia</label><input className="form-control"  id="price" type="text" name="production_price"  onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="nhap gia vao day" /><small className="form-text text-muted" id="helpId">Nhap gia</small></div>
                   <div className="form-group"><label htmlFor="image">Nhap anh</label><input className="form-control"   id="image" type="text" name="production_image" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder /><small className="form-text text-muted" id="helpId">Nhap link</small></div>
                   
                   <button className="btn btn-primary" type="reset" onClick={()=>this.UpdateDataToCsdl()}>ADD</button>
                 </form>
              
               </div>
          </div> 
        </div>
      </div>
    );
  }
}
 
export default App;