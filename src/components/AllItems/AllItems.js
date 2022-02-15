import React, { Component } from 'react'
import axios from 'axios'

import './AllItems.css'
export default class AllItems extends Component {
    state = {
        data: [],
        name: '',
        popUp: false

    }
    constructor(props){
        // super(props);
        const url = 'https://orderbooksapi.herokuapp.com/api_v1/1/adfkdjflk23232kjk349395j45k3jdj8383ksk'
        
        super(props);
        axios.get(url).then(res=>{
            console.log(res.data)
            this.setState({data: res.data.data})
            console.log(this.state.data)
        });
        
           
    }
    
  render() {
    return (
      <div className='row allItems'>
          <h3 className='col-4'>All Books</h3>
        <section className='row col-11 m-auto allItems_inner'>
                {this.state.data.map((val)=>{
                    const style={
                        item:{
                            height: '300px',
                            width: '90%',
                            margin: 'auto',
                            background: `url(${val.cover_image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',

                        }
                    };
                    return(
                        
                        <div onClick={()=>{
                            this.setState({popUp: true})
                            this.props.showName(
                                val.author_name,
                                val.cover_image,
                                val.price,
                                this.state.popUp
                                )
                            }} key={val.id} className={'serviceItem col-lg-3 col-md-4 col-sm-5'}>

                            <aside className='itemImage' style={style.item}></aside>
                            {/* <img style={style.image} src={val.cover_image} className={'image-fluid m-auto'} alt={val.title}/>  */}
                            <h5 className='b_author'>{val.author_name}</h5>
                            <p className='b_price col-7 m-auto'>GH₵ {val.price}</p>
                        </div>

                        
                    )
                })}
          </section>
      </div>
    )
  }
}
