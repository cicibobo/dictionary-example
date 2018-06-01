import React from 'react';


class ResultList extends React.Component{

    itemsList(){
        return this.props.results.map((item,index)=>{
           return <li key={item.id+index} >{item.word}</li>
        })
    }

    render(){
        return(
            <ul className="results" >
               {this.itemsList()} 
            </ul>
        )

    }
}
export default ResultList;