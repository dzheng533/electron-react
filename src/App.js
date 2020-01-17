import React from 'react';
//import './App.css';
import TableList from "./components/TableList";

function App() {
  let tableList = [ ];
  let table = {
     tablename: "t_cfg_index_def1",
     comment: "指标定义表",
     columns: [
       {
        columnname:"IND_NO",
        datatype:"varchar",
        defaultvalue:"",
        characterlength:"64",
        comment:"指标编码"
       },
       {
        columnname:"IND_NAME",
        datatype:"varchar",
        defaultvalue:"",
        characterlength:"128",
        comment:"指标名称"
      },
     ]
  };
  let table2 = {
    tablename: "t_cfg_index_def2",
    comment: "指标定义表",
    columns: [
      {
       columnname:"IND_NO",
       datatype:"varchar",
       defaultvalue:"",
       characterlength:"64",
       comment:"指标编码"
      },
      {
       columnname:"IND_NAME",
       datatype:"varchar",
       defaultvalue:"",
       characterlength:"128",
       comment:"指标名称"
     },
    ]
 };
 tableList.push(table);
 tableList.push(table2);
  return (
    <div className="App">
      <TableList tables={tableList} />
    </div>
  );
}

export default App;
