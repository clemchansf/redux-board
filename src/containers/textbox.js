import React,{ Component } from 'react'

class TextBox extends Component {

  constructor(props) {
    super(props)
    this.state = { value : null }
  }

  handleTextareaChange = (e)=> {
    this.setState({value: e.target.value})
  }

  render() {
    let {clickHandler} = this.props
    return (
      <div className="col-sm-12">
        <div className="row" style={{marginTop: 2}}>
          <textarea className="col-sm-10"
            onChange={this.handleTextareaChange}
            ref="textarea"
            style={{border: '2px solid gray', height: 35}}>
          </textarea>
          <div
            className="col-sm-2"
            style={{margin:0,
              padding:0,
              backgroundColor: 'blue',
              color: 'white',
              fontSize:18,
              verticalAlign: 'middle',
              textAlign: 'center',
            }}
            onClick={() => {
                 clickHandler(this)
            }}>+</div>
        </div>
      </div>
    )
  }
}

export default TextBox
