import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Tables , { ITableMetaData, IColumnsMetaData } from './dbtable';

/**
 * 空表状态
 */
const SEmptyState = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
`;
/**
 * 总容器
 */
const TempWrapper = styled.div`
    overflow: scroll;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 15px;
`;
/**
 * 表格容器
 */
interface ITableWrapperProps {
    highlightForRelationship: string;
}
  
const TableWrapper = styled.div<ITableWrapperProps>`
    width: 150px;
    max-height: 200px;
    border-radius: 3px;
    overflow: hidden;
    margin: 8px;
    border: ${({ highlightForRelationship }) => (highlightForRelationship == 'true' ? '1px solid transparent' : '1px solid grey')};
    box-shadow: ${({ highlightForRelationship }) => (highlightForRelationship == 'true' ? '0px 0px 8px #4B70FE' : 'none')};
`;

interface ITablesListProps {
    tables: ITableMetaData[]
}

const TablesList: React.SFC<ITablesListProps> = ({
    tables
  }) => {
      const [filtered, setPinnedTables] = useState([]);
      const tmpTables = [];
      for(const tkey in tables){
          const table = tables[tkey]
          tmpTables.push(
            <TableWrapper highlightForRelationship={'false'}>
                  <Tables
                   key={table.tablename} 
                   tableName={table.tablename}
                   columns={table.columns}
                   primarykey={"IND_ID"}
                   foreignkeys={[]}
                   primaryKeyAffected={[]}
                   foreignKeysAffected={[]}
                   activeTableInPanel={{}}
                   selectedForQueryTables={[]}
                   
                   captureMouseExit={()=>{ console.log("Mouse exit.")}}
                   ></Tables>
            </TableWrapper>)
      }

      //setPinnedTables(tmpTables)

      if(tables.length > 0){
        return (
           <TempWrapper>{tmpTables}</TempWrapper>
        );      
      }
      return (
        <SEmptyState>
          <span>
            Sorry, there are no tables that matched your search. <br /> Please search again.
        </span>
        </SEmptyState>
      );
  }

  export default TablesList;