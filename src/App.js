import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tables from "./components/dbtable";
import TablesContainer from "./components/TablesContainer";

function App() {
  const activeTableInPanel = {
    tableNmae: "",
    columns: [{ columnname: "id" }]
  };
  const selectedForQueryTables = {};
  const captureQuerySelections = {};
  const primaryKeyAffected = [
    { primaryKeyColumn: "id", primaryKeyTable: "t_cfg_index_sheet" }
  ];
  const foreignKeysAffected = [];

  const table = {
    table_name: "t_cfg_index_sheet",
    columns: [
      {
        characterlength: "32",
        columnname: "id",
        datatype: "varchar",
        defaultvalue: "null"
      },
      {
        characterlength: "32",
        columnname: "belongCode",
        datatype: "varchar",
        defaultvalue: "null"
      }
    ],
    primaryKey: "id",
    foreignKeys: []
  };
  return (
    <div className="App">
      <TablesContainer
      ></TablesContainer>
      <Tables
        activeTableInPanel={activeTableInPanel}
        selectedForQueryTables={selectedForQueryTables}
        captureQuerySelections={captureQuerySelections}
        tableName={table.table_name}
        columns={table.columns}
        primarykey={table.primaryKey}
        foreignkeys={table.foreignKeys}
        primaryKeyAffected={primaryKeyAffected}
        foreignKeysAffected={foreignKeysAffected}
        key={table.table_name}
      />
    </div>
  );
}

export default App;
